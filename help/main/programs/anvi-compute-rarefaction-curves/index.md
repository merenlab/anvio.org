---
layout: program
title: anvi-compute-rarefaction-curves
excerpt: An anvi'o program. A program that computes rarefaction curves and Heaps&#x27; Law fit for a given pangenome or pangenome graph.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-rarefaction-curves
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program that computes rarefaction curves and Heaps&#x27; Law fit for a given pangenome or pangenome graph.

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


This program seems to know what its doing. It needs no input material from its user. Good program.



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[rarefaction-curves](../../artifacts/rarefaction-curves) <img src="../../images/icons/SVG.png" class="artifact-icon-mini" /></span></p>




## Usage


The program <span class="artifact-p">[anvi-compute-rarefaction-curves](/help/main/programs/anvi-compute-rarefaction-curves)</span> goes through all genomes in a given <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and calculates rarefaction curves for all gene clusters and core gene clusters. It also computes the [Heaps' Law](https://en.wikipedia.org/wiki/Heaps'_law) fit to model the relationship between genome sampling and the number of new gene clusters discovered for you to have a more comprehensive reporting of your pangenome.

It also works on a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, in which case the thing that accumulates as genomes are added is the *synteny-aware gene cluster* (SynGC) rather than the gene cluster. See [Rarefaction curves for a pangenome graph](#rarefaction-curves-for-a-pangenome-graph) below.

### On the utility of rarefaction curves and Heaps' Law fit

Rarefaction curves are helpful in the analysis of pangenome as they help visualize the *discovery rate of new gene clusters* as a function of increasing number of genomes. While a steep curve suggests that many new gene clusters are still being discovered, indicating incomplete coverage of the potential gene cluster space, a curve that reaches a plateau suggests sufficient sampling of gene cluster diversity.

However, rarefaction curves have inherent limitations. Because genome sampling is often biased and unlikely to fully capture the true genetic diversity of any taxon, rarefaction analysis provides only dataset-specific insights. Despite these limitations, rarefaction curves remain a popular tool for characterizing whether a pangenome is relatively 'open' (with continuous gene discovery) or 'closed' (where new genome additions contribute few or no new gene clusters). As long as you take such numerical summaries with a huge grain of salt, it is all fine.

Fitting Heaps' Law to the rarefaction curve provides a quantitative measure of pangenome openness. The *alpha* value derived from Heaps' Law (sometimes referred to as *gamma* in the literature) reflects how the number of new gene clusters scales with increasing genome sampling. There is no science to define an absolute threshold for an open or a closed pangenome. However, pangenomes with alpha values below 0.3 tend to be relatively closed, and those above 0.3 tend to be relatively open. Higher alpha values will indicate increasingly open pangenomes and lower values will identify progressively closed ones.

### Running the program

The simplest for of the command will look like this,

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>
</div>

Running this program on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> will,

* Report the Heaps' Law alpha value in its output,
* Generate an SVG file for the visualization of the rarefaction curves for the whole pangenome and core gene clusters with all the necessary information embedded in the figure,
* Generate four additional text files that represent the exact data used to visualize rarefaction curves (both averages and iterations for GC gain per genome calculations for the whole pangenome and for the core genome).

The program will use the 'project name' information stored in the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> as a 'prefix' to all resulting files, and the output will look like this:

```
Num genomes found ............................: 5
Num iterations to run ........................: 100
Output file prefix ...........................: TEST
Heaps' Law parameters estimated ..............: K=245.3049, alpha=0.2484

OUTPUT FILES
===============================================
Rarefaction curves ...........................: TEST-rarefaction-curves.svg
GC gain per genome for core (averages) .......: TEST-rarefaction-core-averages.txt
GC gain per genome for core (each iteration) .: TEST-rarefaction-core-iterations.txt
GC gain per genome for all (averages) ........: TEST-rarefaction-pangenome-averages.txt
GC gain per genome for all (each iteration) ..: TEST-rarefaction-pangenome-iterations.txt

```

You can change the prefix to something else,

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                &#45;&#45;output&#45;file&#45;prefix MY_PREFIX
</div>

or you can ask the program to *not* generate any output files and simply report the Heaps' Law parameters:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                &#45;&#45;skip&#45;output&#45;files
</div>

You can also determine the number of random sampling to be conducted through the `--iteration` parameter. The default is 100. Going above this value will unlikely refine the results, but going below 10 will have a negative influence since the fit will be affected by small amount of sampling:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                &#45;&#45;iterations 50
</div>

### How about Pangeome Graphs?

Everything above works the same way for a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> as `-p` takes either kind of database:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span>
</div>

The only difference is *what is being counted*. A node in a pangenome graph is a **synteny-aware gene cluster** (SynGC): a cluster that contains at most one gene per genome, and whose members were found in the same place relative to their neighbors. So the curves describe the discovery rate of new SynGCs rather than of new gene clusters, and the terminal output and figure say `SynGC` where they would otherwise say gene cluster:

```
Input database type ..........................: pan-graph
Number of genomes found ......................: 5
Number of SynGCs found .......................: 30
Number of iterations to run ..................: 100
Heaps' Law parameters estimated ..............: K=18.6778, alpha=0.2958

OUTPUT FILES
===================================================
Rarefaction curves ...............................: TEST-rarefaction-curves.svg
SynGC gain per genome for core (averages) ........: TEST-rarefaction-core-averages.txt
SynGC gain per genome for core (each iteration) ..: TEST-rarefaction-core-iterations.txt
SynGC gain per genome for all (averages) .........: TEST-rarefaction-pangenome-averages.txt
SynGC gain per genome for all (each iteration) ...: TEST-rarefaction-pangenome-iterations.txt
```

{:.warning}
How the calcualtions of rarefaction curves for GC sand SynGCs differ, and how these differences affect the interpretations of Heaps' fits is an important intellectual question for which we offer no insights here (but ask you to think about for your own dataset). A single gene cluster of the source pangenome can be split into several SynGCs by <span class="artifact-p">[anvi-pan-genome-graph](/help/main/programs/anvi-pan-genome-graph)</span>, since genes that cluster together by sequence similarity but occur in different syntenic contexts end up in different nodes. A <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> curve therefore will almost always sit *above* the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> curve it was derived from, and its alpha is a different number describing a different quantity. What does it mean, then? Well, we have our own opinions, but we would like to not contaminate your thinking with them.

The <span class="artifact-n">[rarefaction-curves](/help/main/artifacts/rarefaction-curves)</span> text files use the same column names (`avg_num_gene_clusters`, `GeneClusters`) whichever database they came from. This is deliberate, so that anything parsing these files does not have to care which kind of pangenome produced them, but it does mean the column header will say `gene_clusters` while holding SynGC counts.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-rarefaction-curves.md) to update this information.


## Additional Resources


* [An example output of this program in the context of the Prochlorococcus metapangenome from Delmont and Eren 2018 is included in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_rarefaction_curves.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
