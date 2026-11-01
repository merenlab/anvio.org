---
layout: program
title: anvi-pan-genome-graph
excerpt: An anvi'o program. An anvi&#x27;o program to compute a graph representation of pangenomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-pan-genome-graph
image:
  featurerelative: ../../../images/header.png
  display: true
---

An anvi&#x27;o program to compute a graph representation of pangenomes. It will do its magic, and store it into your pan-db, or report a JSON formatted graph file, for downstream visualization and analyses with `anvi-display-pan-graph`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program takes a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> (along with the <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> and the <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file that describe the genomes in it), and computes a **synteny-aware, gene-centric pangenome graph**, which it stores in a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> for interactive visualization with <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span> and downstream analyses with <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> or <span class="artifact-p">[anvi-export-pan-subgraph](/help/main/programs/anvi-export-pan-subgraph)</span>.

A conventional pangenome computed by <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> tells you *which* genes occur in *which* genomes, but it says almost nothing about *where* those genes occur relative to one another. The pangenome graph adds that missing dimension: every node in the graph is a **synteny-aware gene cluster (SynGC)** that contains at most one gene per genome, and every edge between two nodes describes the observation that these two genes occur next to each other in at least one genome. The result is a directed acyclic graph in which conserved stretches of gene order appear as a shared 'backbone', and the places where genomes disagree with one another appear as 'variable regions' that branch off the backbone and rejoin it downstream.

{:.notice}
The concepts implemented in this program, along with a detailed application to 29 genomes of the marine genus *Undatipelagibacter*, are described in Henoch et al. Please cite that work if you use pangenome graphs in your studies. There is also a step-by-step tutorial that starts from FASTA files and ends with an interactive pangenome graph here: [https://merenlab.org/pangraph-tutorial/](https://merenlab.org/pangraph-tutorial/).

### The simplest way to run it

Since the graph is built on top of an existing pangenome, you need the three artifacts that describe it:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome&#45;graph &#45;&#45;pan&#45;db <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                      &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span>
</div>

That's it. The program will do its magic, and write a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> into your current working directory using the project name stored in your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> (i.e., `./PROJECT_NAME-PAN-GRAPH.db`). If you want it somewhere else, or want to give it a different name, use `--output-file`:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome&#45;graph &#45;&#45;pan&#45;db <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                      &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                      &#45;&#45;output&#45;file /path/to/MY&#45;GRAPH.db
</div>


The <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file matters here even though your pangenome is already computed: the graph needs to go back to each genome's <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> to learn the *order* of genes along contigs, which is information the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> does not store.

{:.warning}
The set of genomes in your pangenome graph and the set of genomes in your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> must match **exactly**. The gene clusters in the pan-db are what define the nodes and edges of the graph, so a genome the pan-db has never seen has no gene cluster assignments, and all of its genes would collapse into a single bucket (which, apart from being wrong, will make one of the steps run for hours). If you used `--genome-names` when you ran <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span>, use the same `--genome-names` here.

### Giving the graph something to work with

Two things will make an enormous difference in the quality of the graph you get, and both of them happen *before* you run this program.

**Reorient your genomes.** Complete bacterial genomes are circular, and the position at which an assembler decides to 'open' the circle is completely arbitrary. If genome A starts at DnaA and genome B starts 400 kbp downstream of it, then the two genomes will disagree about gene order everywhere, even though biologically they agree perfectly. The program <span class="artifact-p">[anvi-reorient-genomes](/help/main/programs/anvi-reorient-genomes)</span> exists to solve exactly this problem, and running it on your FASTA files before you compute a pangenome is strongly recommended:

<div class="codeblock" markdown="1">
anvi&#45;reorient&#45;genomes &#45;&#45;fasta&#45;txt <span class="artifact&#45;n">[fasta&#45;txt](/help/main/artifacts/fasta&#45;txt)</span> \
                      &#45;&#45;use&#45;dnaa&#45;for&#45;reference&#45;orientation \
                      &#45;&#45;output&#45;dir REORIENTED&#45;FASTA&#45;FILES/
</div>

**Keep your DIAMOND search results.** The gene clusters in your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> determine which pairs of genes are *candidates* to be fused into the same SynGC. But when the program also has access to the raw sequence similarity scores that produced those clusters, it can *rank* those candidates, and fuse the most confident ones first. To get that file, run <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> with `--intermediate-data-dir`, which will keep the file `diamond-search-results.txt` around instead of throwing it away:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;intermediate&#45;data&#45;dir INTERMEDIATE&#45;FILES/
</div>

And then hand it over to this program:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome&#45;graph &#45;&#45;pan&#45;db <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                      &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                      &#45;&#45;diamond&#45;search&#45;results INTERMEDIATE&#45;FILES/diamond&#45;search&#45;results.txt
</div>

{:.notice}
Please note that this needs to be the fully-expanded, 12-column DIAMOND `outfmt 6` file (`diamond-search-results.txt`), and **not** the `.unique` version that lives next to it in the same directory.

Without a DIAMOND file the program still works and still gives you a graph, but the graph is built on gene cluster membership alone: every cross-genome pair of genes within a gene cluster becomes an unweighted candidate edge, and the `minbit` component silently drops out of the ranking. With relatively few and relatively closely-related genomes this is often perfectly fine. With a large or messy dataset, the ranking is what keeps the fusion step honest.

### What happens when you press ENTER

Here is a rough map of what goes on behind the scenes, which is useful to have in mind when you read the (rather chatty) output of the program on your terminal:

1. **Genes become lines**. Every contig of every genome is turned into a 'line': an ordered sequence of its gene calls, read directly from each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. Contigs with fewer than `--min-contig-chain` genes (5 by default) are dropped, since very short contigs contribute more noise than synteny.

2. **Gene clusters propose candidate edges**. Every cross-genome pair of genes that share a gene cluster in your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> becomes a candidate fusion. Nothing outside this set is ever considered, which is what keeps the graph anchored to the pangenome you already know.

3. **DIAMOND scores them (optionally)**. If you provided a search-results file, each candidate pair is weighted by its reciprocal-averaged `minbit`, and candidates DIAMOND never scored are dropped.

4. **Contigs are oriented relative to one another**. Since a contig can be sequenced in either direction, the program compares the flanking gene neighborhoods (`--locality-window` genes on each side) of candidate pairs to decide whether two contigs run in the same direction or one of them is flipped.

5. **Candidates are ranked and greedily fused**. Each candidate edge receives a combined score from up to four components (`minbit`, `decision`, `support`, and `uniqueness`; see `--ranking-components`), and the fusion proceeds as a frontier-growth walk that repeatedly takes from the top of the ranked list. Fusions that would place two genes from the same genome into one node, create a cycle, or violate `--max-contigs-per-component` are rejected. The output is a DAG by construction: unlike many graph-based approaches, there is no cycle-breaking step to second-guess afterwards.

6. **Over-splits are collapsed back**. A single parent gene cluster can be split into several SynGCs during fusion, and some of those splits are artifacts rather than biology. Anvi'o walks every such parent cluster and merges pairs that look like engine over-splits (same component, not in series in the DAG, disjoint genome coverage). Use `--no-remerge` if you want to see the raw splits instead.

7. **Nodes are typed**. Every node is labeled `core`, `accessory`, `singleton`, `rearrangement`, `duplication`, or `rna` (see below).

8. **Regions are called and quantified**. The graph is walked to identify contiguous 'backbone' and 'variable' regions, and each region is described with a set of topological metrics (see below).

9. **The layout is computed and everything is stored**. Nodes are sorted topologically to establish a left-to-right genomic ordering, branches are layered inside-out around the backbone to minimize edge crossings, and the result — nodes, edges, regions, layers, a genome distance matrix and its tree, and a default state — is written into your <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>.

### Types of synteny-aware gene clusters

The node types below are the graph's answer to the familiar 'core / accessory / singleton' vocabulary of conventional pangenomics, extended to also account for synteny:

|Node type|What it means|
|:--|:--|
|`core`|Derives from a single-copy core gene cluster with conserved synteny: one node that contains a gene from every genome, sitting in the same place in all of them.|
|`duplication`|Derives from a multi-copy core gene cluster with conserved synteny: the parent cluster yields multiple nodes, each with at most one gene per genome, which together cover all copies.|
|`rearrangement`|Derives from a gene cluster whose copies are present across genomes but do *not* agree on where they belong.|
|`accessory`|Derives from an accessory gene cluster (present in some genomes but not all).|
|`singleton`|Derives from a singleton gene cluster (a gene found in a single genome).|
|`rna`|A non-coding gene call (tRNA, rRNA, etc). These have no counterpart in a conventional pangenome, but they are included in the graph in their correct syntenic context because they are so often found flanking regions of variability.|

Non-coding genes never have DIAMOND hits (DIAMOND works on translated proteins), so each of them ends up as its own node. If you would rather not see them at all, `--no-include-non-coding-genes` will drop them, and the gene-order edges around them are re-stitched so that line continuity is preserved.

`core` and `duplication` nodes constitute the **backbone** of the graph. Everything else populates **variable regions**, which are always flanked by backbone stretches.

### Backbone regions, variable regions, and how variable they are

Once the graph exists, anvi'o partitions it into regions: contiguous stretches where all genomes in scope agree are backbone regions (BRs), and the stretches in between them, where they don't, are variable regions (VRs). Each region gets an ID of the form `CP_0001_12` (i.e., component, then a 1-based index within it), and every node in the graph is tagged with the region it belongs to.

Each region is then described by four metrics, each of which captures a different aspect of *how* a region varies:

* **Complexity** — how many distinct paths through the region are needed to explain the organizational patterns of all contributing genomes. A region every genome traverses identically has a complexity of zero.
* **Expansion** — the largest number of genes any single genome contributes to the region. This is the region's 'footprint'.
* **Diversity** — how evenly genome membership is distributed across the SynGCs of the region. It is highest when the genomes are evenly spread across the region's nodes, and lowest when the region splits into rare and ubiquitous extremes.
* **Weight** — the fraction of genomes in which the region occurs at all.

These four are combined into a single **Composite Variability Score (CVS)** as their geometric mean after min-max normalization, so that a region has to score well on *all* of them to end up with a high CVS. All of these values are stored in the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, and <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> will report them for you in the `REGIONS.txt` file of a <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span>.

The `--region-scope` parameter determines what 'all genomes' means when a region is classified as backbone or variable. With the default, `component`, the denominator is the set of genomes present in the current weakly connected component, which treats each component as an independent sub-pangenome. With `global`, the denominator is every genome in the pangenome, so a region is backbone only if every single genome reaches it. If your graph has small satellite components (plasmids, for instance), keep in mind that with `component` a component contributed by a single genome is trivially backbone.

{:.notice}
The CVS is a *descriptive* score for comparing regions within a single pangenome graph, and not an absolute measure of anything. Since the normalization step is relative to the graph at hand, CVS values from two different pangenome graphs are not directly comparable to one another.

### Components

Real datasets rarely produce a single connected graph. Contigs that share no gene clusters with anything else, plasmids, phages, and heavily fragmented draft genomes all tend to end up in their own weakly connected components. These are named largest-first: `CP_0001`, `CP_0002`, and so on.

**All components are computed, summarized, and stored in the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>** regardless of anything you do. The `--component` parameter only picks which one gets to be the default view when you first open the graph with <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>, and defaults to `CP_0001` (the largest).

A parameter that deserves special mention here is `--max-contigs-per-component`, which caps how many contigs from a *single* genome are allowed to share one component. Its default value of `1` is the right choice for **complete, closed genomes**, where a single genome contributing two contigs to the same component is a strong hint that something spurious was fused across replicons. But it is the wrong choice for **draft genomes and MAGs**, where a fragmented chromosome legitimately spreads many contigs across the same component, and each excess contig will be spun off into a component of its own. If you are working with drafts, set it to `-1` to disable the cap:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome&#45;graph &#45;&#45;pan&#45;db <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                      &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                      &#45;&#45;max&#45;contigs&#45;per&#45;component &#45;1
</div>

### Tuning the engine (which you probably don't need to do)

The program exposes a rather intimidating number of parameters that control the fusion engine, and the honest advice is that the defaults work well for most datasets. Please run `anvi-pan-genome-graph --help` for the complete and up-to-date list with their default values. That said, here are the situations in which reaching for them actually makes sense:

* **Your graph is over-split** (i.e., genes you know to be the same are scattered across many nodes, and the graph looks fragmented). This typically means the fusion step is being too conservative. Lower `--min-ranking-score` (0.1 by default), or switch `--ranking-mean` from `geometric` to `arithmetic` so that a single zeroed component no longer drives the whole score to zero. Also make sure `--no-remerge` is *not* set.

* **Your graph is over-merged** (i.e., loci you know to be different are being fused into the same node). Raise `--min-ranking-score`, add a `--minbit-floor`, or ask for a hard minimum amount of evidence between two contigs before they are allowed to fuse at all with `--fusion-min-line-pair-hits`.

* **Promiscuous genes are gluing unrelated loci together.** Transposases and other mobile elements have hits everywhere, and can drag distant parts of the graph into contact. Add `uniqueness` to `--ranking-components` (it is available but not on by default) and/or set a `--uniqueness-floor`.

* **The program is killed by the operating system during the parsing phase.** This is almost always the directed-pair dictionary built from your DIAMOND file, which can reach tens of gigabytes for large pangenomes. Use `--minbit-prefilter` to drop weak rows *before* they enter that dictionary. This is a memory-management parameter, and is distinct from `--minbit-floor`, which applies later and is about ranking quality. If you are not running out of memory, `--minbit-floor` is the one you want.

Two other things worth knowing about the parameters in the help menu: most of the orientation-related gates (`--min-line-pair-hits`, `--min-orientation-score`, `--orientation-tie-threshold`, `--min-window-completeness`) are **soft** gates. They only decide whether a pair of contigs earns an orientation label, and edges that fail them are *not* removed from the fusion pool. They simply fall back to `--decision-tie-score` (0.0 by default) for their `decision` ranking component. If you want a hard cutoff, that is what `--fusion-min-line-pair-hits` and the various `*-floor` parameters are for.

And finally, the fusion step samples from a stochastic top-K bucket, so `--fusion-seed` (42 by default) is what makes your run reproducible. Changing it is a reasonable way to check how stable a particular part of your graph is.

### Simplification and display defaults

A few parameters do not change the graph itself, but change how it is initially laid out and displayed:

* `--gene-cluster-grouping-threshold` compresses linear chains of nodes of at least this length into groups, which is useful for making very long conserved runs take up less screen real estate. Disabled by default.
* `--grouping-compression` controls how tightly grouped chains are squeezed together in the layout.
* `--max-edge-length-filter` removes edges longer than a given length after the layout is computed, which prunes long jumps across the graph.
* `--import-values` copies numeric per-gene columns (`start`, `stop`, `partial` and `call_type` by default) from your contigs databases onto nodes as additional data layers.
* `--load-state` names the display state that is stored in, and used by, the resulting <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>.

{:.warning}
The `x` and `y` coordinates computed by the layout algorithm are for *display*, and they are not to be used for any serious analysis. Two nodes that share an `x` value are not, by that fact alone, comparable or homologous. Please see the note in the <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span> artifact for a more complete warning about this.

### Runtime, and what to do afterwards

Computing a pangenome graph from an existing anvi'o pangenome is not particularly expensive: 29 closed *Undatipelagibacter* genomes (about 44,000 gene calls) take approximately seven minutes on a high-end laptop computer. Memory, rather than CPU time, is the usual constraint, and it is dominated by the DIAMOND search results (see `--minbit-prefilter` above).

Once you have your <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, here is where to go next:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;pan&#45;graph &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                       &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span>
</div>

will open the interactive interface, where you can explore the graph, bin SynGCs into a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, and inspect the functions encoded in any given region.

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
               &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;&#45;output&#45;dir GRAPH&#45;SUMMARY/
</div>

will give you a <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span>: flat text files describing every SynGC, every gene call, and every region along with its variability metrics, which is where most downstream analyses should start.

And <span class="artifact-p">[anvi-export-pan-subgraph](/help/main/programs/anvi-export-pan-subgraph)</span> will export the genomic locus between any two nodes of the graph from every genome as individual contigs databases, which is the most convenient way to zoom into a single interesting variable region and study it properly.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-pan-genome-graph.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-pan-genome-graph`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-pan-genome-graph [-h] -p PAN_DB -g GENOMES_STORAGE -e FILE_PATH [-G GENOME_NAMES] [-d TSV] [--minbit-floor MINBIT_FLOOR] [--minbit-prefilter MINBIT_PREFILTER] [-o FILE_PATH] [--tables-dir DIR] [--min-contig-chain MIN_CONTIG_CHAIN] [--max-contigs-per-component MAX_CONTIGS_PER_COMPONENT] [--no-remerge] [--remerge-max-length REMERGE_MAX_LENGTH] [--no-include-non-coding-genes] [--locality-window LOCALITY_WINDOW] [--min-window-completeness MIN_WINDOW_COMPLETENESS] [--min-line-pair-hits MIN_LINE_PAIR_HITS] [--fusion-min-line-pair-hits FUSION_MIN_LINE_PAIR_HITS] [--orientation-tie-threshold ORIENTATION_TIE_THRESHOLD] [--min-orientation-score MIN_ORIENTATION_SCORE] [--orientation-demotion-strategy {slimmest-margin,fewest-edges}] [--ranking-components RANKING_COMPONENTS] [--ranking-mean {geometric,arithmetic}] [--decision-floor DECISION_FLOOR] [--support-floor SUPPORT_FLOOR] [--uniqueness-floor UNIQUENESS_FLOOR] [--decision-tie-score DECISION_TIE_SCORE] [--decision-boundary-score DECISION_BOUNDARY_SCORE] [--min-ranking-score MIN_RANKING_SCORE] [--fusion-top-bucket-k FUSION_TOP_BUCKET_K] [--fusion-seed FUSION_SEED] [--region-scope {global,component}] [--component COMPONENT] [--gene-cluster-grouping-threshold GENE_CLUSTER_GROUPING_THRESHOLD] [--grouping-compression GROUPING_COMPRESSION] [--max-edge-length-filter MAX_EDGE_LENGTH_FILTER] [--description TEXT_FILE] [-n PROJECT_NAME] [--load-state LOAD_STATE] [--import-values IMPORT_VALUES] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">Anvi&#x27;o artifacts for the pan graph to be computed.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter parameter-required" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter parameter-required" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-genome_names"><code class="parameter-flags">-G, --genome-names</code> <code class="parameter-metavar">GENOME_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome names to &#x27;focus&#x27;. You can use this parameter to limit the genomes included in your analysis. You can provide these names as a comma-separated list of names, or you can put them in a file, where you have a single genome name in each line, and provide the file path.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-but-recommendeddiamond-use">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL (BUT RECOMMENDED)DIAMOND USE</span> <span class="parameter-group-description">Additional parameters controlling the gene-endpoint fusion engine with scores coming from diamond. The additional parameters rarely need tuning; defaults work well for most datasets. Adding diamond min-bit scores can increase accuracy of the gene endpoints fusions into super-nodes. If you want to use a DIAMOND search-results file, the tool will run on the pangenome gene-cluster membership alone and every cross-genome pair within a gene cluster becomes an unweighted edge and the `minbit` ranking component is dropped.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-diamond_search_results"><code class="parameter-flags">-d, --diamond-search-results</code> <code class="parameter-metavar">TSV</code></dt>
<dd class="parameter-details"><span class="parameter-help">A DIAMOND tabular (outfmt 6) search-results file used to SCORE and WEIGHT the gene-cluster-derived edges.Can be generated by running anvi-pan-genome with the --intermediate-data-dir option. Candidate edges are always defined by the pan-db gene clusters; if this file is provided, each cross-genome pair inside a gene cluster is weighted by its reciprocal-averaged minbit and edges without a DIAMOND score are dropped (reproducing the classic behavior exactly). If omitted, the tool runs on gene-cluster membership alone: every cross-genome pair within a gene cluster becomes an unweighted edge and the `minbit` ranking component is dropped.</span></dd>
<dt class="parameter" id="parameter-minbit_floor"><code class="parameter-flags">--minbit-floor</code> <code class="parameter-metavar">MINBIT_FLOOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Edges with minbit below this value are dropped before ranking. Applied to the reciprocal-averaged minbit of each undirected cross-genome pair, this applies afterDIAMOND parsing has built the directed-pair dictionary. Use this for ranking quality control. This filter is analogousto support-, decision- and uniqueness-floor filters running in the engine. If you are concerned about your enormous listof DIAMOND hits, consider using the --minbit-prefilter parameter to reduce the dataset size before ranking.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-minbit_prefilter"><code class="parameter-flags">--minbit-prefilter</code> <code class="parameter-metavar">MINBIT_PREFILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Row-level minbit prefilter. Rows whose directed minbit (bit_score / min(self_bit_u, self_bit_v)) is below this value are dropped before they enter the directed-pair dictionary. The dictionary holds all surviving cross-genome directed pairs and can be tens of GB for large pangenomes (e.g., 50+ genomes), which is the most common cause of OOM kills during the engine&#x27;s parsing phase. Distinct from --minbit-floor, which gates after reciprocal-average and is for ranking quality. 0 disables the prefilter (default). Must be in [0.0, 1.0]. If you don&#x27;t know which parameter is the correct one and you don&#x27;t have OOM problemsuse --minbit-floor.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Where the resulting pan-graph-db should be written. If you don&#x27;t specify a path, anvi&#x27;o will write the database into the current working directory using the project name as the filename (i.e., &#x27;./&lt;project_name&gt;-PAN-GRAPH.db&#x27;).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output file path for the pan-graph-db this program will generate.</span></dd>
<dt class="parameter" id="parameter-tables_dir"><code class="parameter-flags">--tables-dir</code> <code class="parameter-metavar">DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Optional directory to dump intermediate tables (lines.txt, edges.tsv, genome_map.tsv, orientation.tsv, ranking.tsv) produced by the pan-graph engine. These artifacts are not required by anvi&#x27;o downstream consumers; they are for inspection only. If unset, no tables are written.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-graph-building">
<header class="parameter-group-header"><span class="parameter-group-title">GRAPH BUILDING</span> <span class="parameter-group-description">Controls how the gene-order graph is constructed from genome inputs.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_contig_chain"><code class="parameter-flags">--min-contig-chain</code> <code class="parameter-metavar">MIN_CONTIG_CHAIN</code></dt>
<dd class="parameter-details"><span class="parameter-help">Skip contigs with fewer than this many genes (filters very short/fragmented contigs).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">5</code></span></dd>
<dt class="parameter" id="parameter-max_contigs_per_component"><code class="parameter-flags">--max-contigs-per-component</code> <code class="parameter-metavar">MAX_CONTIGS_PER_COMPONENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Cap on how many contigs (lines) from a SINGLE genome are allowed to share one weakly-connected COMPONENT of the graph. During fusion, a fuse that would union two components in a way that puts more than this many contigs from any one genome into a single component is rejected (reason: `max-contigs-per-component`); the excess contig is not dropped -- it stays free to join a different component that lacks its genome, or ends up as its own component. -1 (default) disables the cap and preserves the classic behavior where a genome may thread arbitrarily many of its contigs through one component. Set it to 1 for CLOSED/complete genomes, where each genome should contribute at most one contig per replicon and a second one signals a spurious cross-replicon fusion. WARNING: a low cap will fragment DRAFT genomes, since a fragmented chromosome legitimately spreads many contigs across the same component; each excess contig then becomes a separate component. Must be -1 or a positive integer.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-no_remerge"><code class="parameter-flags">--no-remerge</code></dt>
<dd class="parameter-details"><span class="parameter-help">Skip the post-engine remerge pass. By default (no flag), anvi&#x27;o walks every parent gene cluster that produced multiple synteny clusters and merges pairs that look like engine over-splits: same weakly connected component, not in-series in the DAG, and disjoint genome coverage. Pass this flag to disable that pass and keep the engine&#x27;s original splits intact.</span></dd>
<dt class="parameter" id="parameter-remerge_max_length"><code class="parameter-flags">--remerge-max-length</code> <code class="parameter-metavar">REMERGE_MAX_LENGTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Asymmetry cap (in DAG edges) for remerge candidates. For each candidate pair, the remerge pass measures shortest-path distances from BOTH the lowest common ancestor (LCA) and the lowest common descendant (LCD), where they exist, to each of the two nodes. If either |dist_a - dist_b| exceeds this value the merge is rejected. This blocks topologically lopsided merges where one candidate sits much deeper/shallower than the other relative to the shared ancestor or descendant. -1 disables the check.When only one of LCA or LCD exists, only that side&#x27;s check applies; pairs with neither (extremely rare on a connected DAG) are not rejected by this guard.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-no_include_non_coding_genes"><code class="parameter-flags">--no-include-non-coding-genes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Drop non-coding gene calls (rRNA, tRNA, etc.) from the graph. By default (no flag), non-coding gene calls are kept as singleton super-nodes typed `rna`. Non-coding genes are detected via each genome&#x27;s CONTIGS.db `call_type` column (anything that is not CODING). They have no DIAMOND hits (DIAMOND runs on translated proteins) and therefore never merge across genomes -- each non-coding gene becomes its own node. Pass this flag to drop them before component-id and layout computation; flanking gene-order edges are re-stitched so line continuity is preserved.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pangenome-graph-engine-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">PANGENOME GRAPH ENGINE PARAMETERS</span> <span class="parameter-group-description">Parameters controlling the gene-endpoint fusion engine. These rarely need tuning; defaults work well for most datasets.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-locality_window"><code class="parameter-flags">--locality-window</code> <code class="parameter-metavar">LOCALITY_WINDOW</code></dt>
<dd class="parameter-details"><span class="parameter-help">Flanking window size (in genes) on each side of a candidate line pair, used to decide whether two contigs are co-oriented or flipped.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter" id="parameter-min_window_completeness"><code class="parameter-flags">--min-window-completeness</code> <code class="parameter-metavar">MIN_WINDOW_COMPLETENESS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum number of genes that each of the four flanking windows (left/right of each endpoint) must contain for an edge to CONTRIBUTE TO ORIENTATION SCORING. Must be 0..--locality-window (0 disables the filter). SOFT gate -- it does NOT prevent fusion: an edge whose any flanking window is shorter than this is dropped from the orientation/locality scan only, NOT from the fusion pool. Its `decision` ranking component instead falls back to `--decision-boundary-score` (if its line pair still receives a same/flip label) or `--decision-tie-score` (if not), both 0.0 by default. Because the edge survives, the two lines can still fuse when `--decision-floor` is 0.0 and `--ranking-mean` is arithmetic (a zeroed component only lowers the arithmetic mean; under geometric mean it drives the whole score to 0). To hard-drop such edges, raise `--decision-floor` above 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-min_line_pair_hits"><code class="parameter-flags">--min-line-pair-hits</code> <code class="parameter-metavar">MIN_LINE_PAIR_HITS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Orientation-side gate. Minimum number of edges (DIAMOND hits) between two contig lines required for the pair to receive a same/flip orientation label. SOFT gate -- it does NOT prevent fusion: a pair with fewer hits simply gets NO orientation label, which only makes its edges take `--decision-tie-score` (default 0.0) as their `decision` ranking component. The edges are NOT removed from the fusion pool, so such a pair can still fuse: with `--decision-floor 0.0` the zeroed decision passes the floor, and under `--ranking-mean arithmetic` the combined score can still clear `--min-ranking-score` on the strength of the other components (under geometric mean a zeroed component drives the whole score to 0, excluding the edge unless `--min-ranking-score` is also 0). To HARD-BLOCK under-supported line pairs from fusing use `--fusion-min-line-pair-hits`; to require a non-zero decision score raise `--decision-floor`.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">50</code></span></dd>
<dt class="parameter" id="parameter-fusion_min_line_pair_hits"><code class="parameter-flags">--fusion-min-line-pair-hits</code> <code class="parameter-metavar">FUSION_MIN_LINE_PAIR_HITS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Fusion-side hard cutoff. Line pairs with fewer than this many edges are dropped from the ranking pool entirely and NEVER fused (alongside the existing same-genome-conflict and transitive-cycle guards). Independent of --min-line-pair-hits, which only gates orientation labeling: set this above 0 if you want under-supported line pairs to be excluded from fusion regardless of how the ranking otherwise scores them. A potential usecase is plasmids in the dataset. 0 disables the cutoff.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-orientation_tie_threshold"><code class="parameter-flags">--orientation-tie-threshold</code> <code class="parameter-metavar">ORIENTATION_TIE_THRESHOLD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Score margin under which a line-pair orientation call is treated as a tie and demoted (see --orientation-demotion-strategy). SOFT -- it does NOT prevent fusion: a tied/demoted pair simply loses its same/flip label, so its edges fall back to `--decision-tie-score` (default 0.0) for the `decision` ranking component instead of being removed from the fusion pool. As with `--min-line-pair-hits`, such edges can still fuse when `--decision-floor` is 0.0 and `--ranking-mean` is arithmetic.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.35</code></span></dd>
<dt class="parameter" id="parameter-min_orientation_score"><code class="parameter-flags">--min-orientation-score</code> <code class="parameter-metavar">MIN_ORIENTATION_SCORE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum orientation score for a line pair to receive a same/flip label. SOFT -- it does NOT prevent fusion: pairs below this are dropped from ORIENTATION LABELING only, not from the fusion pool. Their edges fall back to `--decision-tie-score` (default 0.0) for the `decision` ranking component, so with `--decision-floor 0.0` and `--ranking-mean arithmetic` they can still fuse on the strength of the other components. Use `--fusion-min-line-pair-hits`, or raise `--decision-floor`, for a hard cutoff.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-orientation_demotion_strategy"><code class="parameter-flags">--orientation-demotion-strategy</code> <code class="parameter-metavar">ORIENTATION_DEMOTION_STRATEGY</code></dt>
<dd class="parameter-details"><span class="parameter-help">How to break ties when committing line-pair orientations during the spanning-tree walk.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">slimmest-margin</code> <code class="parameter-choice">fewest-edges</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">slimmest-margin</code></span></dd>
<dt class="parameter" id="parameter-ranking_components"><code class="parameter-flags">--ranking-components</code> <code class="parameter-metavar">RANKING_COMPONENTS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Comma-separated list of components used to rank edges before fusion (any subset of minbit, decision, support, uniqueness). &#x27;uniqueness&#x27; (opt-in; not in the default) is min(uniqueness(u), uniqueness(v)) where uniqueness(g) = partner_genomes(g) / hit_count(g). The number of distinct genomes among g&#x27;s cross-genome DIAMOND partners divided by the total partner count (gated by GC in panmode). Any single-copy gene scores 1.0 regardless of how core it is; multi-copy GCs score below 1.0; capped at 1.0 by construction. NOTE: `minbit` requires `--diamond-search-results`; when no DIAMOND file is provided it is silently dropped from this list (edges are unweighted) and the remaining components are used.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">minbit,decision,support,uniqueness</code></span></dd>
<dt class="parameter" id="parameter-ranking_mean"><code class="parameter-flags">--ranking-mean</code> <code class="parameter-metavar">RANKING_MEAN</code></dt>
<dd class="parameter-details"><span class="parameter-help">Mean used to combine ranking components into a single score per edge.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">geometric</code> <code class="parameter-choice">arithmetic</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">geometric</code></span></dd>
<dt class="parameter" id="parameter-decision_floor"><code class="parameter-flags">--decision-floor</code> <code class="parameter-metavar">DECISION_FLOOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Edges whose per-edge decision_score (the locality-window top-n mean selected by the line-pair orientation label) is below this value are dropped before fusion. Applied at ranking time, as soon as the decision score is available; analogous to --minbit-floor for raw minbit. Must be in [0.0, 1.0]; all ranking-component scores are clamped to that range in the engine.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-support_floor"><code class="parameter-flags">--support-floor</code> <code class="parameter-metavar">SUPPORT_FLOOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Edges whose line-pair support (n_edges between the two lines divided by min(len(line_a), len(line_b))) is below this value are dropped before fusion. Applied at ranking time; analogous to --minbit-floor for raw minbit. Must be in [0.0, 1.0]; all ranking-component scores are clamped to that range in the engine, so a line pair with more edges than the shorter line has genes saturates at support=1.0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-uniqueness_floor"><code class="parameter-flags">--uniqueness-floor</code> <code class="parameter-metavar">UNIQUENESS_FLOOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Edges whose per-edge uniqueness (min(uniqueness(u), uniqueness(v)) where uniqueness(g) = partner_genomes(g) / hit_count(g); gated by GC in panmode) is below this value are dropped before fusion. Applied at ranking time; analogous to --minbit-floor for raw minbit. Any single-copy gene edge scores 1.0, so a floor of e.g. 0.5 keeps edges only when both endpoints have at most ~2 partners per genome. Use this to exclude edges anchored on promiscuous genes (transposases, mobile elements, etc.) regardless of how uniqueness is weighted in --ranking-components.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-decision_tie_score"><code class="parameter-flags">--decision-tie-score</code> <code class="parameter-metavar">DECISION_TIE_SCORE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Decision score assigned to edges whose line pair has NO orientation label -- i.e. pairs that are tied (`--orientation-tie-threshold`), too weak (`--min-orientation-score`), under-supported (`--min-line-pair-hits`), or demoted by the odd-cycle resolver. Pair-level fallback: no fwd-vs-rev preference exists, so this value replaces the missing `decision` component in the ranking. It defaults to 0.0, which zeroes the decision component WITHOUT removing the edge -- so with `--decision-floor 0.0` and `--ranking-mean arithmetic` the pair can still fuse (under geometric mean a 0 here drives the whole score to 0). Set it above 0 to let unlabeled pairs contribute a non-zero decision score.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-decision_boundary_score"><code class="parameter-flags">--decision-boundary-score</code> <code class="parameter-metavar">DECISION_BOUNDARY_SCORE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Decision score assigned to edges in confidently labeled pairs (same/flip) whose specific edge couldn&#x27;t be scored by the locality scan, typically because one or both endpoint genes sit at contig boundaries (empty flanking window) or because --min-window-completeness dropped the edge from the orientation scan. Per-edge fallback on an otherwise good pair: it defaults to 0.0, which zeroes that edge&#x27;s `decision` component WITHOUT removing the edge, so with `--decision-floor 0.0` and `--ranking-mean arithmetic` the edge can still fuse on the strength of the other components. Set it above 0.0 to keep such contig-end edges in well-oriented pairs from being zeroed out in the ranking.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-min_ranking_score"><code class="parameter-flags">--min-ranking-score</code> <code class="parameter-metavar">MIN_RANKING_SCORE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Edges whose combined ranking score (the mean of --ranking-components) is below this value are skipped during fusion. Independent of --minbit-floor, which gates on raw minbit; this gates on the aggregated score.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.1</code></span></dd>
<dt class="parameter" id="parameter-fusion_top_bucket_k"><code class="parameter-flags">--fusion-top-bucket-k</code> <code class="parameter-metavar">FUSION_TOP_BUCKET_K</code></dt>
<dd class="parameter-details"><span class="parameter-help">Number of top-ranked edges sampled per fusion step (Prim-style frontier growth with stochastic top-K bucketing).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-fusion_seed"><code class="parameter-flags">--fusion-seed</code> <code class="parameter-metavar">FUSION_SEED</code></dt>
<dd class="parameter-details"><span class="parameter-help">Random seed for the stochastic top-K fusion sampler.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">42</code></span></dd>
<dt class="parameter" id="parameter-region_scope"><code class="parameter-flags">--region-scope</code> <code class="parameter-metavar">REGION_SCOPE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Scope of what is considered present in all genomes during region classification (backbone vs. variable) and the normalized region metrics. &#x27;global&#x27; (default) counts genomes across the entire pangenome -- a region is BR only if every genome in the pangenome reaches it. &#x27;component&#x27; counts only the genomes present in the current weakly-connected component -- a region is BR relative to the genomes that actually appear in its component, which treats each component as an independent sub-pangenome. With &#x27;component&#x27; a 1-genome component is trivially classified as backbone; pick &#x27;global&#x27; if that&#x27;s not the intent.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">global</code> <code class="parameter-choice">component</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">component</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-layout-simplification">
<header class="parameter-group-header"><span class="parameter-group-title">LAYOUT &amp; SIMPLIFICATION</span> <span class="parameter-group-description">Controls how the graph is compressed and long edges are filtered.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-component"><code class="parameter-flags">--component</code> <code class="parameter-metavar">COMPONENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which weakly connected component to lay out and summarize. Components are named largest-first as &#x27;CP_0001&#x27;, &#x27;CP_0002&#x27;, ...; the default (&#x27;CP_0001&#x27;) selects the largest. All components are still persisted in the pan-graph-db.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">CP_0001</code></span></dd>
<dt class="parameter" id="parameter-gene_cluster_grouping_threshold"><code class="parameter-flags">--gene-cluster-grouping-threshold</code> <code class="parameter-metavar">GENE_CLUSTER_GROUPING_THRESHOLD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Compress linear chains of nodes of this length or longer into groups (-1 disables grouping; useful to simplify long conserved runs).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">-1</code></span></dd>
<dt class="parameter" id="parameter-grouping_compression"><code class="parameter-flags">--grouping-compression</code> <code class="parameter-metavar">GROUPING_COMPRESSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Compression factor for grouped chains (1.0 = no compression; lower values squeeze grouped nodes closer in the layout).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.0</code></span></dd>
<dt class="parameter" id="parameter-max_edge_length_filter"><code class="parameter-flags">--max-edge-length-filter</code> <code class="parameter-metavar">MAX_EDGE_LENGTH_FILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove edges longer than this length threshold after layout (-1 disables filtering; lower values prune long jumps/repeats).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">-1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-metadata-layers">
<header class="parameter-group-header"><span class="parameter-group-title">METADATA &amp; LAYERS</span> <span class="parameter-group-description">Display and metadata options for the resulting pan-graph.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
<dt class="parameter" id="parameter-project_name"><code class="parameter-flags">-n, --project-name</code> <code class="parameter-metavar">PROJECT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name of the project. Please choose a short but descriptive name (so anvi&#x27;o can use it whenever she needs to name an output file, or add a new table in a database, or name her first born).</span></dd>
<dt class="parameter" id="parameter-load_state"><code class="parameter-flags">--load-state</code> <code class="parameter-metavar">LOAD_STATE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Initial display state name to store/use in the pan-graph-db.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">default</code></span></dd>
<dt class="parameter" id="parameter-import_values"><code class="parameter-flags">--import-values</code> <code class="parameter-metavar">IMPORT_VALUES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Comma-separated numeric columns from the pangenome table to copy as node layers (e.g., start, stop, partial); non-numeric/missing columns are ignored.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">start,stop,partial,call_type</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-robustness-debugging">
<header class="parameter-group-header"><span class="parameter-group-title">ROBUSTNESS &amp; DEBUGGING</span> <span class="parameter-group-description">Controls safety checks and noisy-data handling.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bypass safety checks (e.g., over-splitting) and continue even when warnings would normally abort; use to diagnose tough datasets.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/pan_genome_graph.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
