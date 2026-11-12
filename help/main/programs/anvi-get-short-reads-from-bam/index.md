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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Provides


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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-short-reads-from-bam`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-short-reads-from-bam [-h] [-p PROFILE_DB] [-c CONTIGS_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [-B FILE_PATH] [--target-contig CONTIG_NAME] [--target-region-start NUCLEOTIDE_POSITION] [--target-region-end NUCLEOTIDE_POSITION] [--fetch-filter FILTER] [-o FILE_PATH] [-O FILENAME_PREFIX] [-X] [-Q] BAM FILE[S] [BAM FILE[S] ...]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-positional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">positional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-input_bams"><code class="parameter-flags">BAM FILE[S]</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">BAM file(s) to access to recover short reads</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-1">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #1</span> <span class="parameter-group-description">Work with good&#x27;ol anvi&#x27;o databases, collections, and bins, and get all the reads from one or more BAM files that match to the contigs matching to your selections.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
<dt class="parameter" id="parameter-bin_ids_file"><code class="parameter-flags">-B, --bin-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for bins (each line should be a unique bin id).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-2">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #2</span> <span class="parameter-group-description">Target a specific contig and/or specific start/stop positions to get all the matching reads from your BAM file(s).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-target_contig"><code class="parameter-flags">--target-contig</code> <code class="parameter-metavar">CONTIG_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Contig name of interest.</span></dd>
<dt class="parameter" id="parameter-target_region_start"><code class="parameter-flags">--target-region-start</code> <code class="parameter-metavar">NUCLEOTIDE_POSITION</code></dt>
<dd class="parameter-details"><span class="parameter-help">The start position of the region of interest.</span></dd>
<dt class="parameter" id="parameter-target_region_end"><code class="parameter-flags">--target-region-end</code> <code class="parameter-metavar">NUCLEOTIDE_POSITION</code></dt>
<dd class="parameter-details"><span class="parameter-help">The end position of the region of interest.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filters">
<header class="parameter-group-header"><span class="parameter-group-title">FILTERS</span> <span class="parameter-group-description">Choose which reads to work (or not to work) with like a pro.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fetch_filter"><code class="parameter-flags">--fetch-filter</code> <code class="parameter-metavar">FILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o fetches all reads from a BAM file. Once a read is &#x27;fetched&#x27;, some reads may be excluded if you have used parameters such as `--min-percent-identity`. But the `--fetch-filter` is different as it determines WHICH reads from a BAM file will be used for profiling at all. You can do a lot of fun things with this parameter. For details, please read the online documentation for `anvi-profile` using the URL you should see at the end of the `--help` output on your terminal. The known filters are the following: proper-pairs, double-forwards, double-reverses, inversions, distant-inversions, single-mapped-reads, distant-pairs-1K.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
<dt class="parameter parameter-switch" id="parameter-gzip_output"><code class="parameter-flags">-X, --gzip-output</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, output file(s) will be gzip compressed and the extension `.gz` will be added.</span></dd>
<dt class="parameter parameter-switch" id="parameter-split_r1_and_r2"><code class="parameter-flags">-Q, --split-R1-and-R2</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, this program outputs 3 FASTA files for paired-end reads: one for R1, one for R2, and one for unpaired reads.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_short_reads_from_bam.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
