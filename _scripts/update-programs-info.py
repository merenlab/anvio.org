#!/usr/bin/env python
# -*- coding: utf-8

"""Populate program contributions per anvi'o developers"""

import argparse

import anvio.programs as programs

__author__ = "Developers of anvi'o (see AUTHORS.txt)"
__copyright__ = "Copyleft 2015-2002, the Meren Lab (http://merenlab.org/)"
__credits__ = []
__license__ = "GPL 3.0"
__maintainer__ = "A. Murat Eren"
__email__ = "a.murat.eren@gmail.com"


if __name__ == '__main__':
    p = programs.AnvioPrograms(argparse.Namespace())
    p.init_programs()

    program_contributions = {}
    for program_name in p.all_program_names:
        if program_name in p.programs:
            program_authors = p.programs[program_name].meta_info['authors']['value']
            if len(program_authors):
                for author in program_authors:
                    if author not in program_contributions:
                        program_contributions[author] = []

                    program_contributions[author].append(program_name)

    with open('_data/programs.yml', 'w') as output:
        for author_name in program_contributions:
            output.write(f"- author: {author_name}\n")

            output.write("  programs:\n")
            for program_name in program_contributions[author_name]:
                output.write(f"    - name: {program_name}\n")
