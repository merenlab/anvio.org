#!/bin/bash

set -e

_scripts/populate-tags.py
echo "Tags under learn/ re-populated."

_scripts/update-people-data.sh
echo "People data re-populated."

anvi-script-gen-help-pages -o help/main --quiet
echo "Program & artifact help pages re-populated."

anvi-script-gen-programs-network -o network/network.json --quiet
echo "Anvi'o universe network is re-populated."

echo
echo "You're done here. PLEASE DOUBLE-CHECK WHAT YOU'RE ABOUT TO COMMIT."
