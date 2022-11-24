#!/usr/bin/env python
# -*- coding: utf-8

"""Populate tags under ./learn/"""

import os
import sys
import glob

import anvio.utils as utils

template = """---
layout: page
title: "%(pretty_tag)s"
excerpt: "Everything on anvio.org tagged with '%(tag)s'"
tag: "%(tag)s"
---

{%% include resources/resources.md %%}
"""

if not os.path.exists("_data/"):
    print("You are running this script from a bad directory -- go to the root directory for anvio.org source")

# remove anything that is not 'index.md' from learn/
for file_path in [f for f in glob.glob('learn/*') if 'index.md' not in f]:
    try:
        os.remove(file_path)

    except:
        pass

# learn tags
tags = set([])
for section in ["blogs", 'docs', 'technical', 'tutorials']:
    file_path = f"_data/resources/{section}.yaml"
    for resource in utils.get_yaml_as_dict(file_path):
        tags_with_space = [tag for tag in resource['tags'] if ' ' in tag]
        if tags_with_space:
            print(f"You have some tags with space in '{file_path}'. They need to be fixed :/ Here is the list: {', '.join(tags_with_space)}")
            sys.exit(-1)
        tags.update(resource['tags'])

# populate learn/ contents
for tag in tags:
    with open(f"learn/{tag}.md", 'w') as output:
        output.write(template % {'tag': tag, 'pretty_tag': tag.replace('-', ' ').capitalize()})
