#!/bin/bash

set -e

_scripts/update-people-data.sh

anvi-script-gen-help-pages -o help/main

anvi-script-gen-programs-network -o network/network.json
