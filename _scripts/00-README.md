# Scripts

This directory contains scripts that keep this repository in sync with the [anvi'o repository](https://github.com/merenlab/anvio). Data that are synchronized include the help pages for programs and artifacts, the contents of the /people/ page and GitHub contributions of each developer, network visualization of programs and artifacts, etc.

Most of these updates are done by separte scripts described below, and running `00-SYNC-WITH-ANVIO-REPO.sh` calls them all (except `list-anvio-docker-tags.py`).

In an ideal world you shouldn't have to run `00-SYNC-WITH-ANVIO-REPO.sh` (or any other scripts it runs) manually from your local copy of anvio.org repository. `00-SYNC-WITH-ANVIO-REPO.sh`, because **everything it does is also done by the GitHub Actions workflow** at `.github/workflows/sync-with-anvio-repo.yaml`, which is automatically ran every day once, but can also be triggered via GitHub actions interface here:

https://github.com/merenlab/anvio.org/actions/workflows/sync-with-anvio-repo.yaml

If you change the scripts in this directory please make sure you also update the action script (and vice versa).

If you run `00-SYNC-WITH-ANVIO-REPO.sh` manually, please make sure you first take a look at the files that you are about to commit.

---

## 00-SYNC-WITH-ANVIO-REPO.sh

The main sync script.

To run it, first initialize your conda environment, and make sure you are in the `master` branch. Then change your working directory to the root of anvio.org repository, and run the script this way::

```bash
./_scripts/00-SYNC-WITH-ANVIO-REPO.sh
```

Take a look at the changes, and add/commit/push, etc.

---

Here are bit more info on the individual scripts:

## populate-tags.py

Reads the content under `learn/` and regenerates the tag index pages that aggregate posts by topic. Must be run from the repo root.

## update-people-data.sh

Copies `DEVELOPERS.yaml`, `CONTRIBUTORS.yaml`, and avatar images from the local anvi'o repository into this repo, then calls `generate-github-contributions-data.py`, `update-people-dir.py`, and `update-programs-info.py` in sequence.

## generate-github-contributions-data.py

Walks the full git history of the anvi'o repository and produces `_data/contributor-stats.json`, which tracks commit counts and file contributions per developer over time.

## update-people-dir.py

Reads `_data/people.yaml` and generates or refreshes the per-person Markdown pages under `people/`.

## update-programs-info.py

Inspects the anvi'o codebase and updates the per-developer program contribution data used by the people pages.

---

## list-anvio-docker-tags.py

A stand-alone utility (not part of the sync workflow) that queries Docker Hub and prints a tab-separated table of available anvi'o container tags, their last-updated date, and compressed image size.

```bash
python _scripts/list-anvio-docker-tags.py
```

This can be useful to update the information about the existing anvi'o docker containers on Docker Hub.