#!/bin/bash

set -e

_scripts/update-people-data.sh

anvi-script-gen-help-pages -o help/main --quiet
echo "Program & artifact help pages re-populated."

anvi-script-gen-programs-network -o network/network.json --quiet
echo "Anvi'o universe network is re-populated."

echo
echo "You're done here. Please double-check what you're about to commit."
