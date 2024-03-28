---
layout: help
title: anvi-run-hmms [program]
categories: [anvio]
comments: false
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program deals with populating tables that store HMM hits in an anvi&#x27;o contigs database.

Go back to the **[main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>

## Can consume

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>

## Usage


Stores <span class="artifact-n">[hmm-hits](/help/7/artifacts/hmm-hits)</span> for a given <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>. In short, this is the program that will do a search for HMMs against a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span> and store that information into the contigs-db's <span class="artifact-n">[hmm-hits](/help/7/artifacts/hmm-hits)</span>. 

This is one of the programs that users commonly run on newly generated <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>, along with <span class="artifact-n">[anvi-scan-trnas](/help/7/programs/anvi-scan-trnas)</span>, <span class="artifact-n">[anvi-run-ncbi-cogs](/help/7/programs/anvi-run-ncbi-cogs)</span>, <span class="artifact-n">[anvi-run-scg-taxonomy](/help/7/programs/anvi-run-scg-taxonomy)</span>, and so on.

### What is an HMM?

Check out the lovely vocabulary page for an example [here](http://merenlab.org/vocabulary/#hmm).

Essentially, this program will help annotate the genes in your <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>, using either one of the databases built into anvi'o or a custom database. 

Basically, in anvi'o, Hidden Markov Models (or HMMs for short) are used to search for specific genes with known functions in a larger dataset. Nucleotide patterns for specific gene functions are contained in an <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span> and this program uses them to search through the data in your <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>. 

### Default Usage

To run this program with all default settings (against all default anvio <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span>), you only need to provide a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>. 

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c CONTIGS_DB 
</div>

### Running against a custom set of hmm-source

In order to run against your own <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span> or a custom subset of anvi'o's hmm-sources, you have two choices. 

#### Choice 1: I have my own hmm-sources on my computer

This way the source can be completely outside of anvi'o. 

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c CONTIGS_DB &#45;H path_to_your_hmm_profile
</div>

#### Choice 2: I prefer anvi'o's hmm-sources, but I don't need all of them.

By default, anvi'o will look through all of its hmm-sources when doing a search. If you only want to run against a specific one, you're in the right place. These are the currently available ones: "Bacteria_71" (type: singlecopy), "Archaea_76" (type: singlecopy), "Protista_83" (type: singlecopy), and "Ribosomal_RNAs" (type: Ribosomal_RNAs). See the page for <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span> for more information. 

For example, 

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c CONTIGS_DB &#45;I Bacteria_71 
</div>

### Other things anvi-run-hmms can do

- Add the tag `--also-scan-trnas` to basically run <span class="artifact-n">[anvi-scan-trnas](/help/7/programs/anvi-scan-trnas)</span> for you at the same time. It's very convientient. 
- Add the tag `--just-do-it` to hide all warnings and questions in case you don't want to deal with those.
-  There are also parameters that can help speed up the runtime of this program. However, be aware of the limits of your system, espeically if running on a SGE.  For example, you can increase the number of threads or switch to hmmsearch if you are scanning  a large umber of HMMs. For more information on that, check out [here](http://merenlab.org/vignette/#anvi-run-hmms). 

### See anvi-run-hmms in action

On the [metagenomic workflow tutorial](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-run-hmms)!


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-hmms.md) to update this information.


## Additional Resources


* [Another description as part of the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-profile)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-run-hmms) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
