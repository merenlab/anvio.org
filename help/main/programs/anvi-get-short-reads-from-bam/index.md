---
layout: program
title: anvi-get-short-reads-from-bam
excerpt: An anvi'o program. Get short reads back from a BAM file with options for compression, splitting of forward and reverse reads, etc.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-short-reads-from-bam
image:
  featurerelative: ../../../images/header.png
  display: true
---

Get short reads back from a BAM file with options for compression, splitting of forward and reverse reads, etc.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[short-reads-fasta](../../artifacts/short-reads-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Usage


Get short reads from a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> in the form of <span class="artifact-n">[short-reads-fasta](/help/main/artifacts/short-reads-fasta)</span>).

{:.warning}
The purpose of this program is not to replace more efficient tools to recover short reads from BAM files such as `samtool`. Since it was designed to address much more subtle needs, this program may have a huge memory fingerprint for very large and numerous BAM files.

Using this program you can,

* Get all reads from one or more BAM files
* Get reads matching to contig names found in any <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> in a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>
* Get reads matching to contig names found in one or more specific <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s in a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>
* Get all reads matching to a specific contig name
* Get reads matching to a specific region of a specific contig name

In addition, you can use the previously-defined fetch filters via the `--fetch-filter` parmeter to get only short reads satisfy a particular set of criteria (i.e., those that are in forward-forward or reverse-reverse orientation, those that have a template length longer than 1,000 nucleotides, and so on). For a complete set of fetch filters you can use, please see the help menu of the program.

The program can report all reads in a single file, or you can ask reads to be split into R1 and R2 files for mapping results of paired-end sequences using the flag `--split-R1-and-R2`. In this case, reads that are not paired will be reported in a file with the prefix `_UNPAIRED.fa`.

Reads reported as a FASTA will contain necessary information in their deflines to recover which BAM file, contig, sample they are from with explicit start/stop positions on the contig to which they matched.

### Getting all reads

A basic run of this program is as follows:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam BAM_FILE_1.bam BAM_FILE_2.bam (...) \
                              &#45;&#45;output&#45;file OUTPUT.fa
</div>

This will report all short reads found in BAM files `BAM_FILE_1.bam` and `BAM_FILE_2.bam` and store them into a single file. You can use as many BAM files as you wish.

### Narrowing the input with anvi'o files:

You can choose to only return the short reads that are contained within a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam BAM_FILE_1.bam BAM_FILE_2.bam \
                              &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                              &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                              &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                              &#45;&#45;output&#45;file OUTPUT.fa
</div>

Or in a bin that is described in a collection:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam BAM_FILE_1.bam BAM_FILE_2.bam \
                              &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                              &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                              &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                              &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                              &#45;&#45;output&#45;file OUTPUT.fa
</div>

### Focusing on individual contigs

You can get all reads mapped to a contig:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam BAM_FILE_1.bam BAM_FILE_2.bam \
                              &#45;&#45;target&#45;contig CONTIG_NAME \
                              &#45;&#45;output&#45;file OUTPUT.fa
</div>

Or define explicit start/stop positions on it:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam BAM_FILE_1.bam BAM_FILE_2.bam \
                              &#45;&#45;target&#45;contig CONTIG_NAME \
                              &#45;&#45;target&#45;region&#45;start 100 \
                              &#45;&#45;target&#45;region&#45;end 1000 \
                              &#45;&#45;output&#45;file OUTPUT.fa
</div>

In this mode, the program will fetch any read that includes a nucleotide that matches to anywhere in the region defined by the user. Which means, if the user sets `--target-region-start` to `100` and `--target-region-end` to `101`, all reads that have a nuclotide mapping to the `100th` position will be returned.

### Changing the output format

You can split the output based on the directionality of paired-end reads. Adding the tag `--split-R1-and-R2` causes the program to create three separate output files: one for R1 (sequences in the forward direction), one for R2 (sequences in the reverse direction; i.e. reverse complement of R1 sequences), and one for unparied reads. When doing this, you can name these three files with a prefix by using the flag `-O`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;from&#45;bam &#45;o path/to/output \
                              &#45;&#45;split&#45;R1&#45;and&#45;R2 \
                              &#45;O BAM_1_and_BAM_2 \
                              BAM_FILE_1.bam BAM_FILE_2.bam
</div>

You can also compress the output by adding the flag `--gzip-output`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-short-reads-from-bam.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-short-reads-from-bam) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
