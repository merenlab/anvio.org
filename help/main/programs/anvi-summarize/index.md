---
layout: program
title: anvi-summarize
excerpt: An anvi'o program. Summarizer for anvi&#x27;o pan, pan-graph, or profile databases.
categories: [anvio]
comments: false
redirect_from: /m/anvi-summarize
image:
  featurerelative: ../../../images/header.png
  display: true
---

Summarizer for anvi&#x27;o pan, pan-graph, or profile databases. Depending on the input, the program produces a output directory that contaisn flat files for rigorous downstream analyses by humans 🧠 or LLMs 🤖..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pan-summary](../../artifacts/pan-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[pan-graph-summary](../../artifacts/pan-graph-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[profile-summary](../../artifacts/profile-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span></p>




## Usage


Anvi-summarize lets you export a **comprehensive overview of your data** from an anvi'o database. Depending on the input, it can summarize a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned contigs (from a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>), a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned gene clusters (from a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>), or the full contents of a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>. The output is a directory of flat files and an HTML index that conveniently displays them for you. This makes the program useful for sharing information with collaborators, generating supplementary files for manuscripts, and exporting data for use in downstream analyses.

See also <span class="artifact-p">[anvi-summarize-blitz](/help/main/programs/anvi-summarize-blitz)</span>.

## Output files

What this program produces as output depends on its inputs:

* Running it on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> will produce a <span class="artifact-n">[profile-summary](/help/main/artifacts/profile-summary)</span> output.
* Running it on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> will produce a <span class="artifact-n">[pan-summary](/help/main/artifacts/pan-summary)</span> output.
* Running it on a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> will produce a <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span> output.

## Running anvi-summarize

### Running on a profile database

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
               &#45;o MY_SUMMARY \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

When running on a profile database, you also have options to:

* output very accurate (but intensely processed) coverage and detection data for each gene (using `--init-gene-coverages`)
* edit your contig names so that they contain the name of the bin that the contig is in (using `--reformat-contig-names`)
* also display the amino acid sequences for your gene calls (using `--report-aa-seqs-for-gene-calls`)

### Running on a pan database

A <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> is **optional** when summarizing a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>. Without one, anvi'o will still export the full gene clusters table with all functional annotations — the `bin_name` column will simply be empty. If you have organized your gene clusters into bins using <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> or <span class="artifact-p">[anvi-import-collection](/help/main/programs/anvi-import-collection)</span>, passing the collection name will populate `bin_name` with the bin each gene cluster belongs to, which makes downstream filtering by bin straightforward.

Run without a collection (exports everything):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>
</div>

Run with a collection (adds `bin_name` to the output):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

You can display DNA sequences instead of amino acid sequences with `--report-DNA-sequences`.

### Running on a pan-graph database

A <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> is **optional** when summarizing a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>. Without one, all output files are still produced in full — the `bin_name` column in `SYNGCs.txt` and `GENESxSYNGCs.txt` will simply be empty. If you have organized your SynGCs into bins, passing the collection name will populate `bin_name` in both files, making it easy to filter the output to any bin of interest with a single column filter.

Run without a collection (exports everything):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span>
</div>

Run with a collection (adds `bin_name` to `SYNGCs.txt` and `GENESxSYNGCs.txt`):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

### Other notes

If you are unsure what collections are in your database, you can run this program with the flag `--list-collections` or by running <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span>.

You can also use the flag `--quick-summary` to get a less comprehensive summary with a much shorter processing time. For profile-db summaries it skips several heavier computations; for pan-db summaries it omits sequences and annotation text from the gene clusters file; for pan-graph-db summaries it omits sequences from `GENESxSYNGCs.txt`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-summarize.md) to update this information.


## Additional Resources


* [anvi-summarize in the metagenomic workflow tutorial](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-summarize)

* [anvi-summarize in the pangenomic workflow tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#summarizing-an-anvio-pan-genome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/summarize.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
