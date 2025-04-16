#!/bin/bash

set -e

# get actual information about people from the anvi'o codebase. This simply
# copies what we have in the YAML files in the anvi'o repostiory into the web
cat ~/github/anvio/anvio/data/misc/PEOPLE/DEVELOPERS.yaml > _data/people.yaml
echo "" >> _data/people.yaml
cat ~/github/anvio/anvio/data/misc/PEOPLE/CONTRIBUTORS.yaml >> _data/people.yaml
cp ~/github/anvio/anvio/data/misc/PEOPLE/AVATARS/* images/avatars/

# go through the local anvi'o git repository and gather information about
# the contribuitons of people described in _data/people.yaml -- this script
# generates _data/contributor-stats.json file, which we need to copy also
# in the people directory right after. we know this is dumb, but it has to be
# in the `people` directory for the JavaScript to visualize those graphs and
# it has to be in the `_data` directory so that the Liquid template generates
# the static pages with necessary information and links. Meren knows that
# it would be smarter to edit the script in _layouts/people.html to also display
# those data from the JSON file, which would enable us to get rid of the copy
# at people/contributor-stats.json, but he is also lazy :( if you are not lazy
# and want to make him feel bad abou this laziness, please feel free to
# address this monstrosity now forever hold your peace with it:
python _scripts/generate-github-contributions-data.py
cp _data/contributor-stats.json people/contributor-stats.json

python _scripts/update-people-dir.py

python _scripts/update-programs-info.py --quiet
