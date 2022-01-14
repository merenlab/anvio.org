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
        d =  [ "---"]
        d += [ "layout: person"]
        d += [f"title: {person['name']}"]
        d += [f"github: {person['github']}"]
        d += [ "comments: false"]
        d += [f"title: {person['name']} of anvi'o"]
        if 'bio' in person:
            d += [f"excerpt: {person['bio']}"]
        if 'avatar' in person:
            d += [ "image:"]
            d += [f"  feature: /images/avatars/{person['avatar']}"]
        d += [ "---"]

        with open(os.path.join('people', person['github'] + '.md'), 'w') as output:
            output.write('\n'.join(d) + '\n')

    print("People directories populated.")
