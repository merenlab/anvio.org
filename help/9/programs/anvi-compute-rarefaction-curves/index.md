---
layout: program
title: anvi-compute-rarefaction-curves
excerpt: An anvi'o program. A program that computes rarefaction curves and Heaps&#x27; Law fit for a given pangenome.
categories: [anvio]
comments: false
redirect_from: /9/anvi-compute-rarefaction-curves
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program that computes rarefaction curves and Heaps&#x27; Law fit for a given pangenome.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[rarefaction-curves](../../artifacts/rarefaction-curves) <img src="../../images/icons/SVG.png" class="artifact-icon-mini" /></span></p>


## Usage


The program <span class="artifact-p">[anvi-compute-rarefaction-curves](/help/9/programs/anvi-compute-rarefaction-curves)</span> goes through all genomes in a given <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span> and calculates rarefaction curves for all gene clusters and core gene clusters. It also computes the [Heaps' Law](https://en.wikipedia.org/wiki/Heaps'_law) fit to model the relationship between genome sampling and the number of new gene clusters discovered for you to have a more comprehensive reporting of your pangenome.

### On the utility of rarefaction curves and Heaps' Law fit

Rarefaction curves are helpful in the analysis of pangenome as they help visualize the *discovery rate of new gene clusters* as a function of increasing number of genomes. While a steep curve suggests that many new gene clusters are still being discovered, indicating incomplete coverage of the potential gene cluster space, a curve that reaches a plateau suggests sufficient sampling of gene cluster diversity.

However, rarefaction curves have inherent limitations. Because genome sampling is often biased and unlikely to fully capture the true genetic diversity of any taxon, rarefaction analysis provides only dataset-specific insights. Despite these limitations, rarefaction curves remain a popular tool for characterizing whether a pangenome is relatively 'open' (with continuous gene discovery) or 'closed' (where new genome additions contribute few or no new gene clusters). As long as you take such numerical summaries with a huge grain of salt, it is all fine.

Fitting Heaps' Law to the rarefaction curve provides a quantitative measure of pangenome openness. The *alpha* value derived from Heaps' Law (sometimes referred to as *gamma* in the literature) reflects how the number of new gene clusters scales with increasing genome sampling. There is no science to define an absolute threshold for an open or a closed pangenome. However, pangenomes with alpha values below 0.3 tend to be relatively closed, and those above 0.3 tend to be relatively open. Higher alpha values will indicate increasingly open pangenomes and lower values will identify progressively closed ones.

### Running the program

The simplest for of the command will look like this,

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/9/artifacts/pan&#45;db)</span>
</div>

Running this program on a <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span> will,

* Report the Heaps' Law alpha value in its output,
* Generate an SVG file for the visualization of the rarefaction curves for the whole pangenome and core gene clusters with all the necessary information embedded in the figure,
* Generate four additional text files that represent the exact data used to visualize rarefaction curves (both averages and iterations for GC gain per genome calculations for the whole pangenome and for the core genome).

The program will use the 'project name' information stored in the <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span> as a 'prefix' to all resulting files, and the output will look like this:

```
Number of genomes found ......................: 5
Number of iterations to run ..................: 100
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
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/9/artifacts/pan&#45;db)</span> \
                                &#45;&#45;output&#45;file&#45;prefix MY_PREFIX
</div>

or you can ask the program to *not* generate any output files and simply report the Heaps' Law parameters:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/9/artifacts/pan&#45;db)</span> \
                                &#45;&#45;skip&#45;output&#45;files
</div>

You can also determine the number of random sampling to be conducted through the `--iteration` parameter. The default is 100. Going above this value will unlikely refine the results, but going below 10 will have a negative influence since the fit will be affected by small amount of sampling:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;rarefaction&#45;curves &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/9/artifacts/pan&#45;db)</span> \
                                &#45;&#45;iterations 50
</div>

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-rarefaction-curves.md) to update this information.


## Additional Resources


* [An example output of this program in the context of the Prochlorococcus metapangenome from Delmont and Eren 2018 is included in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_rarefaction_curves.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
