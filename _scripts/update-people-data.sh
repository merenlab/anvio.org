#!/bin/bash

set -e

cat ~/github/anvio/anvio/data/misc/PEOPLE/DEVELOPERS.yaml > _data/people.yaml
echo "" >> _data/people.yaml
cat ~/github/anvio/anvio/data/misc/PEOPLE/CONTRIBUTORS.yaml >> _data/people.yaml

cp ~/github/anvio/anvio/data/misc/PEOPLE/AVATARS/* images/avatars/

python _scripts/update-people-dir.py

python _scripts/update-programs-info.py --quiet
