---
layout: program
title: anvi-reaction-network
excerpt: An anvi'o program. This program generates a metabolic reaction network in an anvi&#x27;o contigs or pan database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-reaction-network
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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[kegg-functions](../../artifacts/kegg-functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[enzymes-txt](../../artifacts/enzymes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[reaction-ref-data](../../artifacts/reaction-ref-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-data](../../artifacts/kegg-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-network](../../artifacts/reaction-network) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **stores a metabolic <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.**

The network consists of data on biochemical reactions predicted to be encoded by the genome or pangenome.

Information on the predicted reactions and the involved metabolites are stored in tables of the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>. The program, <span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span>, can be used to export the <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> from the database to a <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file formatted for input into programs for flux balance analysis.

## Setup

<span class="artifact-p">[anvi-setup-kegg-data](/help/main/programs/anvi-setup-kegg-data)</span> downloads, among other files, the [binary relations files](https://www.genome.jp/brite/br08906) needed to construct a <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> from [KEGG Orthology (KO)](https://www.genome.jp/kegg/ko.html) sequence annotations. The following command sets up the database in a default anvi'o directory.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;data
</div>

<span class="artifact-p">[anvi-setup-modelseed-database](/help/main/programs/anvi-setup-modelseed-database)</span> sets up the [ModelSEED Biochemistry database](https://github.com/ModelSEED/ModelSEEDDatabase), which harmonizes biochemical data from various reference databases, including KEGG. The following command sets up the database in a default anvi'o directory.

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

### From an enzymes file (no contigs database needed)

<span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span> can build a reaction network directly from a tab-delimited enzymes file — no contigs database required. This is useful when working with custom enzyme lists from transcriptomic/proteomic data, ancestral gene content predictions, or any other source outside of anvi'o's standard annotation workflow.

The enzymes file must have three columns: `gene_id`, `enzyme_accession`, and `source`. Only rows where `source` is `KOfam` are used. This is the same format used by <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;&#45;enzymes&#45;txt /path/to/enzymes.txt \
                      &#45;&#45;output&#45;json /path/to/network.json
</div>

The resulting JSON file can be directly used by <span class="artifact-p">[anvi-draw-kegg-pathways](/help/main/programs/anvi-draw-kegg-pathways)</span> via its `--reaction-network-json` option:

<div class="codeblock" markdown="1">
anvi&#45;draw&#45;kegg&#45;pathways &#45;&#45;reaction&#45;network&#45;json /path/to/network.json \
                        &#45;o output_maps/
</div>

### From a contigs database

<span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span> takes a either a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> OR a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> as required input. Genes stored within the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> must have KO protein annotations, which can be assigned by <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db
</div>

If a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> already contains a <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> from a previous run of this program, the flag `--overwrite-existing-network` can overwrite the existing network with a new one. For example, if <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> is run again on a database using a newer version of KEGG, then <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span> should be rerun to update the <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> derived from the KO annotations.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db \
                      &#45;&#45;overwrite&#45;existing&#45;network
</div>

A <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> can also be generated from consensus KO annotations of gene clusters. This can be used to understand the conservation or divergence of parts of the metabolic network between organisms in the pangenome.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;p /path/to/pan&#45;db \
                      &#45;g /path/to/genomes&#45;storage&#45;db
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-reaction-network.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-reaction-network`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-reaction-network [-h] [--enzymes-txt FILE] [--output-json FILE] [-c CONTIGS_DB] [-p PAN_DB] [-g GENOMES_STORAGE] [--consensus-threshold FLOAT] [--discard-ties] [--kegg-dir PATH] [--modelseed-dir PATH] [--overwrite-existing-network] [--stats-file PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-enzymes-file-input">
<header class="parameter-group-header"><span class="parameter-group-title">ENZYMES FILE INPUT</span> <span class="parameter-group-description">Generate a reaction network from a tab-delimited enzymes file, bypassing the need for a contigs database. This enables reaction networks from custom enzyme lists such as transcriptomic/proteomic data or LCA gene content predictions. The file must have columns &#x27;gene_id&#x27;, &#x27;enzyme_accession&#x27;, and &#x27;source&#x27;; only rows with source &#x27;KOfam&#x27; are used. See &#x27;anvi-estimate-metabolism&#x27; for the full enzymes-txt format specification.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-enzymes_txt"><code class="parameter-flags">--enzymes-txt</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path to a tab-delimited enzymes file with required columns &#x27;gene_id&#x27;, &#x27;enzyme_accession&#x27;, and &#x27;source&#x27;. Rows where &#x27;source&#x27; is &#x27;KOfam&#x27; are used to build the reaction network. Use &#x27;--output-json&#x27; to specify where the resulting network file is written.</span></dd>
<dt class="parameter" id="parameter-output_json"><code class="parameter-flags">--output-json</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path for the output reaction network JSON file. Required when using &#x27;--enzymes-txt&#x27;. The file can be loaded by &#x27;anvi-draw-kegg-pathways&#x27; via its &#x27;--reaction-network-json&#x27; option.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-single-genome-or-metagenome-input">
<header class="parameter-group-header"><span class="parameter-group-title">SINGLE GENOME OR METAGENOME INPUT</span> <span class="parameter-group-description">Generate a reaction network from a contigs database and store the network in the database.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pangenome-input">
<header class="parameter-group-header"><span class="parameter-group-title">PANGENOME INPUT</span> <span class="parameter-group-description">Generate a reaction network from a pan database and associated genomes storage database, and store the network in the pan database.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-consensus_threshold"><code class="parameter-flags">--consensus-threshold</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">If this argument is provided, then a protein annotation must be assigned to this minimum proportion of genes in a cluster to be imputed to the cluster as a whole. By default, without this argument, the annotation assigned to the most genes becomes the annotation of the cluster (also see --discard-ties). The consensus threshold must be a number from 0 to 1.</span></dd>
<dt class="parameter parameter-switch" id="parameter-discard_ties"><code class="parameter-flags">--discard-ties</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, a gene cluster is assigned a protein annotation by finding the protein ortholog that occurs in the greatest number of genes in the cluster (see --consensus-threshold) and arbitrarily choosing one ortholog in case of a tie. With this flag, a tie instead results in an ortholog annotation not being assigned to the cluster.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-database">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASE</span> <span class="parameter-group-description">KEGG and ModelSEED reference database information</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-kegg_dir"><code class="parameter-flags">--kegg-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path to KEGG database directory. If this option is not used, the program expects a database set up in the default location used by &#x27;anvi-setup-kegg-data&#x27;.</span></dd>
<dt class="parameter" id="parameter-modelseed_dir"><code class="parameter-flags">--modelseed-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path to ModelSEED Biochemistry database directory. If this option is not used, the program expects a database set up in the default location used by &#x27;anvi-setup-modelseed-database&#x27;.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-other-options">
<header class="parameter-group-header"><span class="parameter-group-title">OTHER OPTIONS</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-overwrite_existing_network"><code class="parameter-flags">--overwrite-existing-network</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite an existing reaction network in the database (for contigs/pan DB modes) or overwrite the output JSON file (for enzymes-txt mode) if it already exists.</span></dd>
<dt class="parameter" id="parameter-stats_file"><code class="parameter-flags">--stats-file</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Write a tab-delimited file of network overview statistics (statistics also printed to the terminal) to the output path.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/reaction_network.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
