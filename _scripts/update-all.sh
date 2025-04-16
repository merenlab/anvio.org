#!/bin/bash

set -e

echo "Re-populating tags under learn ..."
_scripts/populate-tags.py

echo "Re-populating people data ..."
_scripts/update-people-data.sh

echo "Re-populating program & artifact help pages ..."
anvi-script-gen-help-pages -o help/main --quiet

echo "Re-populating anvi'o universe network ..."
anvi-script-gen-programs-network -o network/network.json --quiet

echo
echo
echo "You're done here. PLEASE DOUBLE-CHECK WHAT YOU'RE ABOUT TO COMMIT and RUN THE JEKYLL SERVER TO SEE IF THERE ARE ERRORS"
echo
echo
