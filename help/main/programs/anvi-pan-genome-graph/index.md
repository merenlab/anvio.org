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


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/pan_genome_graph.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
