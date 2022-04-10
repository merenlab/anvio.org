---
layout: program
title: anvi-search-primers
excerpt: An anvi'o program. You provide this program with FASTQ files for one or more samples AND one or more primer sequences, and it collects reads from FASTQ files that matches to your primers.
categories: [anvio]
comments: false
redirect_from: /m/anvi-search-primers
image:
  featurerelative: ../../../images/header.png
  display: true
---

You provide this program with FASTQ files for one or more samples AND one or more primer sequences, and it collects reads from FASTQ files that matches to your primers. This tool can be most powerful if you want to collect all short reads from one or more metagenomes that are downstream to a known sequence. Using the comprehensive output files you can analyze the diversity of seuqences visually, manually, or using established strategies such as oligotyping..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[samples-txt](../../artifacts/samples-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[primers-txt](../../artifacts/primers-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[short-reads-fasta](../../artifacts/short-reads-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program finds all reads in a given set of FASTQ files provided as <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> based on user-provided primer sequences as <span class="artifact-n">[primers-txt](/help/main/artifacts/primers-txt)</span>.

One of many potential uses of this program is to get back short reads that may be extending into hypervariable regions of genomes that often suffer from significant drops in coverage in conventional read-recruitment analyses, thus preventing any meaningful insights into coverage or variability patterns. In such situations, one can identify downstream conserved sequences (typically 15 to 25 nucleotides long) using the anvi'o interactive interface or through other means, and then provide those sequences to this program so it can find all matching sequences in a set of FASTQ files without any mapping.

{:.notice}
To instead get short reads mapping to a gene, use <span class="artifact-p">[anvi-get-short-reads-mapping-to-a-gene](/help/main/programs/anvi-get-short-reads-mapping-to-a-gene)</span>.

Here is a typical command line to run it:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;primers &#45;&#45;samples&#45;txt <span class="artifact&#45;n">[samples&#45;txt](/help/main/artifacts/samples&#45;txt)</span> \
                    &#45;&#45;primers&#45;txt <span class="artifact&#45;n">[primers&#45;txt](/help/main/artifacts/primers&#45;txt)</span> \
                    &#45;&#45;output&#45;dir OUTPUT
</div>

The <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> file is to list all the samples one is interested in, and the <span class="artifact-n">[primers-txt](/help/main/artifacts/primers-txt)</span> file lists each primer sequence of interest, and their user-defined names. Each of these files can contain a single entry, or multiple ones.

This will output all of the matching sequences into three <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files in the directory `OUTPUT`. These <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files differ in their format and will include those that describe,

* Remainders are the downstream sequences after primer match, excluding the primer sequence.
* Primer matches are the primer-matching part of the match sequences (useful if one is working with degenerate primers and wishes to see the diversity of matching seqeunces).
* Trimmed sequences are trimmed to the shortest length (and include primer match). All matching sequences will start at the same position.
* Gapped sequences are not trimmed, but shorter ones are padded with gaps to eliminate length variation artificially.

The last two formats provide downstream possibilities to generate <span class="artifact-n">[oligotypes](/help/main/artifacts/oligotypes)</span> and cluster short reads from an hypervariable region to estimate their diversity and oligotype proportion.

There will only be a single FASTA file in the output directory for raw sequences if the user asked only the primer matches to be reported with the flag `--only-report-primer-matches` or `--only-report-remainders`.

### For programmers

You can access to the functionality this program provides also programmatically. Here is an example:

``` python

import argparse

from anvio.sequencefeatures import PrimerSearch

# define a samples dictionary, there may be as many samples as you want
samples = {'sample_01': {'r1': 'sample_01_R1.fastq', 'r2': 'sample_01_R2.fastq'},
           'sample_02': {'r1': 'sample_02_R1.fastq', 'r2': 'sample_02_R2.fastq'}}

# define a primers dictionary, again, you may have as many primers as you
# wish
primers = {'primer_01': {'primer_sequence': 'GAGCAAAGATCATGTTTCAAAA.ACGTTC'},
           'primer_02': {'primer_sequence': 'AAGT.CTATCAGAACTTAGAGTAGAGCAC'},
           'primer_03': {'primer_sequence': 'GGCAGAAATGCCAAGT.CTATCAGAACTT'}}

# get an instance of the class, see the class header for all
# parameters.
s = PrimerSearch(argparse.Namespace(samples_dict=samples, primers_dict=primers, min_remainder_length=6))

# you can go through a for loop for each sample, or simply call
# s.process() to process all samples with all primers automatcially.
# here, though, this example will simply focus on a single sample
# to recover all primer hits, and then get sequences for a single primer
sample_dict, primers_dict = s.process_sample('sample_01')

# once primer hits are recovered, one can get any set of sequences
# of interest
sequences = s.get_sequences('primer_01', primers_dict, target='gapped')
print(sequences)
>>> ['GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGA-----------------------------------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAAC-----------------------------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAACA----------------------------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAACAA---------------------------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAACAAAGATAAGC-------------------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAACAAAGATAAGCCGCTTTTTT----------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCGTCTGATGCAACAAAGATAAGCCGCTTTTTT----------------------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCCTTTTTTGAAACACTGTTTTGGCTCTGCTCACTGAAGGCCAAAGG--------------------------------------------------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCCTTTTTTGAAACACTGTTTTGGCTCTGCTCACTGAAGGCCAAAGGAAGAGATAAATGGCTGATAATTAAAACAATGTAGAAATATTTGC------------------------',
     'GAGCAAAGATCATGTTTCAAAAGACGTTCCTTTTTTGAAACACTGTTTTGGCTCTGCTCACTGAAGGCCAAAGGAAGAGATAAATGGCTGATAATTAAAACAATGTAGAAATATTTGCACAGATGAAAAAAGCGGCTTATCT']

sequences = s.get_sequences('primer_01', primers_dict, target='trimmed')
print(sequences)
>>> ['GAAGATAGCCGTAGAAAGTGTAGAGTTTTAGGAGT',
     'AGCCGTAGAAAGTGTAGAGTTTCAGGAGTTTGGAG',
     'GCCGTAGAAAGTGTAGAGTTTTAGGAGTTTGGAGG',
     'CGTAGAAAGTGTAGAGTTTTAGGAGTTTGGAGGGG',
     'AGTGTAGAGTTTTAGGAGTTTGGAGGGGAGAATTA',
     'TTTAGGAGTTTGGAGGGGAGAATTAAGAAACGGTA',
     'TTTAGGAGTTTGGAGGGGAGAATTAAGAAACGGTA',
     'AGGGTAGAATTAAGAAACGGTAACGGTTGGTCTTG',
     'AAGAATAGTTGAAGAAGAATTATTGTATGGGAGAG',
     'TGTATGGGAGAGCAAAGATCATGTTTCAAAAGACG']

sequences = s.get_sequences('primer_01', primers_dict, target='primer_matches')
print(sequences)
>>> ['GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC',
     'GAGCAAAGATCATGTTTCAAAAGACGTTC']

s = PrimerSearch(argparse.Namespace(samples_dict=samples, primers_dict=primers, stop_after=10, min_remainder_length=6, only_keep_remainder=True))
sample_dict, primers_dict = s.process_sample('sample_01')
sequences = s.get_sequences('primer_01', primers_dict, target='remainder')
print(sequences)
>>> ['GTCTGA',
     'GTCTGA',
     'GTCTGA',
     'GTCTGA',
     'GTCTGA',
     'GTCTGA',
     'GTCTGA',
     'CTTTTT',
     'CTTTTT',
     'CTTTTT']
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-search-primers.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-search-primers) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
