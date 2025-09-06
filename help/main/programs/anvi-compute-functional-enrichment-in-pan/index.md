---
layout: program
title: anvi-compute-functional-enrichment-in-pan
excerpt: An anvi'o program. A program that computes functional enrichment within a pangenome.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-functional-enrichment-in-pan
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program that computes functional enrichment within a pangenome..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/adw96.jpg" /></div><div class="anvio-person-info-box"><a href="/people/adw96" target="_blank"><span class="anvio-person-name">Amy D. Willis</span></a><div class="anvio-person-social-box"><a href="http://statisticaldiversitylab.com/team/amy-willis" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:adwillis@uw.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AmyDWillis" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/adw96" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[misc-data-layers](../../artifacts/misc-data-layers) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program computes functional enrichment within a pangenome and generates a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file.

{:.warning}
For its sister programs, see <span class="artifact-p">[anvi-compute-metabolic-enrichment](/help/main/programs/anvi-compute-metabolic-enrichment)</span> and <span class="artifact-p">[anvi-compute-functional-enrichment-across-genomes](/help/main/programs/anvi-compute-functional-enrichment-across-genomes)</span>.

{:.notice}
Please also see <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span> which can both calculate functional enrichment, AND provide an interactive interface to display the distribution of functions.

## Enriched functions in a pangenome

To execute this program, you must provide a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> pair, along with <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span> that associates genomes in your pangenome database with categorical data. The program will identify functions that are enriched in each group (i.e., functions associated with gene clusters that are characteristic of the genomes in that group). 

{:.notice}
Note that your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> must contain at least one functional annotation source for this analysis to work.

This analysis helps identify functions associated with specific groups of genomes in a pangenome and determines the functional core of your pangenome. For example, in the *Prochlorococcus* pangenome (analyzed in [the pangenomics tutorial, where you can find more information about this program](http://merenlab.org/2016/11/08/pangenomics-v2/#making-sense-of-functions-in-your-pangenome)), this program identifies that `Exonuclease VII` is enriched in the `low-light` genomes and not in `high-light` genomes. The output file provides various statistics about the confidence of this functional association.

### How does it work?

The analysis performed by this program can be broken down into three steps:

1. **Determine groups of genomes**. The program uses a <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span> variable (containing categorical, not numerical, data) to partition genomes in a pangenome into two or more groups. For example, in the pangenome tutorial, the categorical variable named `light` partitioned genomes into `low-light` and `high-light` groups.

2.  **Determine the "functional associations" of gene clusters**. This step involves collecting the functional annotations for all genes within each cluster and assigning the most frequently occurring annotation to represent the entire cluster.

3. **Quantify the distribution of functions in each group of genomes**. The program determines the extent to which particular functions are enriched in specific groups of genomes and reports this information as a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file. This analysis is performed by executing the script `anvi-script-enrichment-stats`. 

{:.notice}
The script `anvi-script-enrichment-stats` was implemented by [Amy Willis](https://github.com/adw96), and was first described in [this paper](https://doi.org/10.1186/s13059-020-02195-w).

{:.notice}
Check out [Alon's behind the scenes post](http://merenlab.org/2016/11/08/pangenomics-v2/#making-sense-of-functions-in-your-pangenome), which provides a more detailed explanation of this process.

### Basic usage

The simplest way to execute this program is as follows:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;in&#45;pan &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>\
                                          &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                          &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                          &#45;&#45;category&#45;variable CATEGORY \
                                          &#45;&#45;annotation&#45;source FUNCTION_SOURCE
</div>

The <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> must contain at least one categorical data layer in <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span>, and you must select one of these categories to define your pangenome groups using the `--category-variable` parameter. You can view available variables using the <span class="artifact-p">[anvi-show-misc-data](/help/main/programs/anvi-show-misc-data)</span> program with the parameters `-t layers --debug`.

The <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> must contain at least one functional annotation source, and you must specify one of these sources using the `--annotation-source` parameter. If you are unsure which functional annotation sources are available in your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, you can use the `--list-annotation-sources` parameter to identify them.

### Additional options

By default, gene clusters with identical functional annotations will be merged. However, if you provide the `--include-gc-identity-as-function` parameter and set the annotation source to 'IDENTITY', anvi'o will treat gene cluster names as functions and enable you to investigate the enrichment of each gene cluster independently. This is accomplished as follows:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;in&#45;pan &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>\
                                          &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                          &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                          &#45;&#45;category&#45;variable CATEGORY \
                                          &#45;&#45;annotation&#45;source IDENTITY \
                                          &#45;&#45;include&#45;gc&#45;identity&#45;as&#45;function
</div>

To generate a functional occurrence table that describes the number of times each functional association occurs in each genome under analysis, use the `--functional-occurrence-table-output` parameter as shown below:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;in&#45;pan &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>\
                                          &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                          &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                          &#45;&#45;category&#45;variable CATEGORY \
                                          &#45;&#45;annotation&#45;source FUNCTION_SOURCE \
                                          &#45;&#45;functional&#45;occurrence&#45;table&#45;output FUNC_OCCURRENCE.TXT
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-functional-enrichment-in-pan.md) to update this information.


## Additional Resources


* [A description of the enrichment script run by this program can be found in Shaiber et al 2020](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02195-w)

* [An example of pangenome functional enrichment in the context of the Prochlorococcus metapangenome from Delmont and Eren 2018 is included in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-compute-functional-enrichment-in-pan) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
