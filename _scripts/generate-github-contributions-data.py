# a program to generate a YAML file for user contributions to the
# anvi'o repository

import os
import sys
import json
import yaml
import datetime
import subprocess
from collections import Counter
from dateutil import parser

try:
    import anvio
    import anvio.terminal as terminal
except:
    print("You need to run this in an anvi'o enviornment :/")
    sys.exit(-1)

run = terminal.Run()
progress = terminal.Progress()

def gen_contributor_stats_json(repo_path, users_info_dict, output_file):
    start_year = 2014
    current_year = datetime.datetime.now().year

    #################################################################
    # some email addresses we will find in the git output will not
    # match to any of the email addresses we have for people in the
    # data file. we will keep track of them here so perpahs the
    # data file can be manually updated in the anvi'o repository
    #################################################################
    unknown_email_adresses = Counter()

    #################################################################
    # generate an empty results dictionary for every individual
    # observed
    #################################################################
    results = {github_username: {'total_commits': 0,
                                 'commits_per_year': {str(year): 0 for year in range(start_year, current_year + 1)},
                                 'file_counter': Counter(),
                                 'latest_commit_message': None,
                                 'latest_commit_date': None,
                                 'latest_commit_hash': None
    } for github_username in users_info_dict.values()}

    #################################################################
    # recover all commit information from the git repo
    #################################################################
    git_log_format = "%H%x1f%ae%x1f%ad%x1f%s%x1f%P"
    git_log_cmd = ['git', '-C', repo_path, 'log', 'master', '--no-merges', '--name-only', f'--pretty=format:{git_log_format}', '--date=iso']
    result = subprocess.run(git_log_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    if result.returncode != 0:
        print("Error running git log:", result.stderr)
        return

    lines = result.stdout.splitlines()

    progress.new("Processing the commit logs", progress_total_items=len(lines))
    progress.update('...')

    line_num = 0
    while line_num < len(lines):
        parts = lines[line_num].split('\x1f')
        if len(parts) < 5:
            line_num += 1
            continue

        commit_hash, author_git_email, date_str, message, parents = parts
        line_num += 1

        if author_git_email not in users_info_dict:
            if len(author_git_email):
                unknown_email_adresses[author_git_email] += 1

            while line_num < len(lines) and lines[line_num].strip():
                line_num += 1
            line_num += 1
            continue

        commit_date = parser.parse(date_str.strip())
        commit_year = commit_date.year

        author_github_username = users_info_dict[author_git_email]
        results[author_github_username]['total_commits'] += 1
        if start_year <= commit_year <= current_year:
            results[author_github_username]['commits_per_year'][str(commit_year)] += 1

        files = []
        while line_num < len(lines) and lines[line_num].strip():
            files.append(lines[line_num].strip())
            line_num += 1
        line_num += 1  # Skip the empty line after file list

        results[author_github_username]['file_counter'].update(files)

        if (results[author_github_username]['latest_commit_date'] is None or
                commit_date > results[author_github_username]['latest_commit_date']):
            results[author_github_username]['latest_commit_date'] = commit_date
            results[author_github_username]['latest_commit_message'] = message.strip()
            results[author_github_username]['latest_commit_hash'] = commit_hash

        if line_num % 1000 == 0:
            progress.increment(increment_to=line_num)
            progress.update(f"{line_num}")


    progress.update('Writing results')
    output_data = {}
    for email, data in results.items():
        top_file = data['file_counter'].most_common(1)[0][0] if data['file_counter'] else None
        output_data[email] = {
            'total_commits': data['total_commits'],
            'commits_per_year': data['commits_per_year'],
            'top_file': top_file,
            'latest_commit_message': data['latest_commit_message'],
            'latest_commit_hash': data['latest_commit_hash'],
            'latest_commit_date': data['latest_commit_date'].strftime('%d %B %Y') if data['latest_commit_date'] else None
        }

    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=4)

    progress.end()

    run.info("Contributor stats output file", f"{output_file}")

    if len(unknown_email_adresses):
        run.info("Orphan git author emails", ', '.join([f"{m} ({unknown_email_adresses[m]})" for m in unknown_email_adresses if unknown_email_adresses[m] > 1]))

        run.warning("The email addresses shown above are those that appear in the git logs of the anvi'o repository, "
                    "but are not associated with any of the known GitHub usernames. If you recognize some of those, "
                    "you can include list them under `git_records` varaible in CONTRIBUTORS.yaml or DEVELOPERS.yaml "
                    "file in the anvi'o repository. If you do that, please don't forget to commit those changes in "
                    "the anvi'o repository, and re-run this script instead of changing anything manually in the "
                    "anvio.org repository.")

if __name__ == '__main__':
    #################################################################
    # learn the location of the local anvi'o git repository
    #################################################################
    repo_path = os.path.abspath(os.path.join(os.path.dirname(anvio.__file__), '..'))

    #################################################################
    # learn emails of everyone mentioned in our anvio.org data file
    #################################################################
    with open('_data/people.yaml', 'r') as file:
        data = yaml.safe_load(file)

    users_info_dict = {}
    for person in data:
        for git_email in person['git_records']:
            users_info_dict[git_email] = person['github']

    gen_contributor_stats_json(repo_path, users_info_dict, output_file="_data/contributor-stats.json")

