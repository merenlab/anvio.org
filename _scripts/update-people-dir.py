#!/usr/bin/env python
# -*- coding: utf-8

"""Populate anvi'o people directories"""

import os
import sys
import yaml

__author__ = "Developers of anvi'o (see AUTHORS.txt)"
__copyright__ = "Copyleft 2015-2002, the Meren Lab (http://merenlab.org/)"
__credits__ = []
__license__ = "GPL 3.0"
__maintainer__ = "A. Murat Eren"
__email__ = "a.murat.eren@gmail.com"

def get_yaml_as_dict(file_path):
    """YAML parser"""

    try:
        return yaml.load(open(file_path), Loader=yaml.FullLoader)
    except Exception as e:
        print(f"No YAML for you :( Here is the error: '{e}'.")
        sys.exit(-1)

if __name__ == '__main__':
    people_yaml = get_yaml_as_dict('_data/people.yaml')

    for person in people_yaml:
        person_template = f"---\nlayout: person\ntitle: {person['name']}\ngithub: {person['github']}\ncomments: false\n---"

        with open(os.path.join('people', person['github'] + '.md'), 'w') as output:
            output.write(person_template)

    print("People directories populated.")
