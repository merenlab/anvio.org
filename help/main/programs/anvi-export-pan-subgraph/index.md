---
layout: program
title: anvi-export-pan-subgraph
excerpt: An anvi'o program. Export genomic loci that is in between two nodes in a given pangenome graph.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-pan-subgraph
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export genomic loci that is in between two nodes in a given pangenome graph..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program exports the genomic loci that fall between two nodes of an anvi'o <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> as individual <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files (one per genome).

You will typically identify the two nodes of interest by visualizing the pangenome graph with <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>, and then ask this program to extract, for each genome in the graph, the stretch of DNA that lies between the genes that correspond to those two nodes.

### Required Parameters

You will need to provide a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file that describes the genomes that went into the graph (so anvi'o knows where to find each source <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>), an output directory, and a way to describe the loci to export. The loci can be described either by two graph nodes (`--graph-nodes`) or by a single region ID (`--region-id`). You must provide one of these two, but not both.

#### Describing loci with two graph nodes

Provide the two graph nodes that flank the loci you wish to export with `--graph-nodes`:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;pan&#45;subgraph &#45;p PAN&#45;GRAPH.db \
                         &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;graph&#45;nodes NODE_1,NODE_2 \
                         &#45;o OUTPUT_DIRECTORY
</div>

#### Describing loci with a region ID

Alternatively, you can provide a single region ID with `--region-id`, and anvi'o will resolve the two boundary nodes of that region automatically:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;pan&#45;subgraph &#45;p PAN&#45;GRAPH.db \
                         &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;region&#45;id 234 \
                         &#45;o OUTPUT_DIRECTORY
</div>

Please note that the way by which boundary nodes are resolved depends on the type of the region:

* For a **backbone region**, anvi'o uses the leftmost and rightmost nodes of the region (by position) as the boundaries.
* For a **variable region**, the first and the last nodes in the region will not necessarily present in all genomes, so anvi'o instead uses the closest eligible (non-RNA, coding) backbone nodes flanking the region on each side. As a result, the exported loci will include the variable region content plus at least two extra genes from the flanking backbone regions (one on each side), and anvi'o will print a warning describing exactly what was used. Keep this in mind if you intend to analyze the conservancy of genes in variable regions, to avoid misinterpretations.

You will typically learn which nodes or region IDs you are interested in by visualizing the pangenome graph in anvi'o using the program <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>. Region IDs will appear as you zoom in to certain parts of the pangenome graph like shown below:

[![Region IDs in pangenome graphs](../../images/anvi-export-pan-subgraph-region.png){:.center-img .width-70}](../../images/anvi-export-pan-subgraph-region.png)

#### Output

Regardless of how you describe the loci, the output directory will contain a separate <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (along with a FASTA file and a blank <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>) for the locus extracted from each genome.

### Gene caller IDs

By default, the gene caller IDs in each exported <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> **match those in the source <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>** that the locus was extracted from. This way you can trace every gene in an exported locus back to the gene it originated from in the original database.

If you would rather have the gene caller IDs reset so that they start from `0` in each output database (which was the historical behavior of this program), use the `--reset-gene-caller-ids` flag:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;pan&#45;subgraph &#45;p PAN&#45;GRAPH.db \
                         &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;graph&#45;nodes NODE_1,NODE_2 \
                         &#45;o OUTPUT_DIRECTORY \
                         &#45;&#45;reset&#45;gene&#45;caller&#45;ids
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-pan-subgraph.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_pan_subgraph.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
