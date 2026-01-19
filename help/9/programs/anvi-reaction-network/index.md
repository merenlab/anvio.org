---
layout: program
title: anvi-reaction-network
excerpt: An anvi'o program. This program generates a metabolic reaction network in an anvi&#x27;o contigs or pan database.
categories: [anvio]
comments: false
redirect_from: /9/anvi-reaction-network
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program generates a metabolic reaction network in an anvi&#x27;o contigs or pan database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-functions](../../artifacts/kegg-functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[reaction-ref-data](../../artifacts/reaction-ref-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-data](../../artifacts/kegg-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-network](../../artifacts/reaction-network) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **stores a metabolic <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> in a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> or <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span>.**

The network consists of data on biochemical reactions predicted to be encoded by the genome or pangenome.

Information on the predicted reactions and the involved metabolites are stored in tables of the <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> or <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span>. The program, <span class="artifact-p">[anvi-get-metabolic-model-file](/help/9/programs/anvi-get-metabolic-model-file)</span>, can be used to export the <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> from the database to a <span class="artifact-n">[reaction-network-json](/help/9/artifacts/reaction-network-json)</span> file formatted for input into programs for flux balance analysis.

## Setup

<span class="artifact-p">[anvi-setup-kegg-data](/help/9/programs/anvi-setup-kegg-data)</span> downloads, among other files, the [binary relations files](https://www.genome.jp/brite/br08906) needed to construct a <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> from [KEGG Orthology (KO)](https://www.genome.jp/kegg/ko.html) sequence annotations. The following command sets up the database in a default anvi'o directory.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;data
</div>

<span class="artifact-p">[anvi-setup-modelseed-database](/help/9/programs/anvi-setup-modelseed-database)</span> sets up the [ModelSEED Biochemistry database](https://github.com/ModelSEED/ModelSEEDDatabase), which harmonizes biochemical data from various reference databases, including KEGG. The following command sets up the database in a default anvi'o directory.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;modelseed&#45;database
</div>

### Download newest available KEGG files

Alternatively, KEGG data can be set up not from a snapshot but by downloading the newest files available from KEGG using the `-D` flag. In the following command, a higher number of download threads than the default of 1 is provided by `-T`, which significantly speeds up downloading.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;data &#45;D &#45;T 5
</div>

### Install in non-default location

To preserve KEGG data that you already have set up for whatever reason, the new snapshot or download can be placed in a non-default location using the option, `--kegg-data-dir`.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;data &#45;&#45;kegg&#45;data&#45;dir path/to/other/directory
</div>

`anvi-reaction-network` requires a `--kegg-dir` argument to seek KEGG data in a non-default location.

Likewise, different versions of the ModelSEED Biochemistry database can be set up in non-default locations and used with the `--modelseed-dir` argument.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;modelseed&#45;database &#45;&#45;dir path/to/other/directory
</div>

## Usage

<span class="artifact-p">[anvi-reaction-network](/help/9/programs/anvi-reaction-network)</span> takes a either a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> OR a <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/9/artifacts/genomes-storage-db)</span> as required input. Genes stored within the <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> or <span class="artifact-n">[genomes-storage-db](/help/9/artifacts/genomes-storage-db)</span> must have KO protein annotations, which can be assigned by <span class="artifact-p">[anvi-run-kegg-kofams](/help/9/programs/anvi-run-kegg-kofams)</span>.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db
</div>

If a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> already contains a <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> from a previous run of this program, the flag `--overwrite-existing-network` can overwrite the existing network with a new one. For example, if <span class="artifact-p">[anvi-run-kegg-kofams](/help/9/programs/anvi-run-kegg-kofams)</span> is run again on a database using a newer version of KEGG, then <span class="artifact-p">[anvi-reaction-network](/help/9/programs/anvi-reaction-network)</span> should be rerun to update the <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> derived from the KO annotations.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db \
                      &#45;&#45;overwrite&#45;existing&#45;network
</div>

A <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> can also be generated from consensus KO annotations of gene clusters. This can be used to understand the conservation or divergence of parts of the metabolic network between organisms in the pangenome.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;p /path/to/pan&#45;db \
                      &#45;g /path/to/genomes&#45;storage&#45;db
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-reaction-network.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/reaction_network.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
