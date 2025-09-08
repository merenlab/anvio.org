---
layout: program
title: anvi-pan-genome
excerpt: An anvi'o program. An anvi&#x27;o program to compute a pangenome from an anvi&#x27;o genome storage.
categories: [anvio]
comments: false
redirect_from: /m/anvi-pan-genome
image:
  featurerelative: ../../../images/header.png
  display: true
---

An anvi&#x27;o program to compute a pangenome from an anvi&#x27;o genome storage.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[gene-clusters-txt](../../artifacts/gene-clusters-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-items-order](../../artifacts/misc-data-items-order) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[gene-clusters](../../artifacts/gene-clusters) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program implements pangenomics, and organizes genes found within a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> to create a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

Please first read [the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2) to have a better understanding of the steps that lead to the generation of a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

### Making sure your installation can do pangenomics

You can always test if your computer has all the dependencies for a successful pangenomics analysis by running,

<div class="codeblock" markdown="1">
anvi&#45;self&#45;test &#45;&#45;suite pangenomics
</div>

If it runs without errors, you're golden. If not, please consult with the most up-to-date installation instructions for anvi'o and get in touch with the anvi'o community for guidance.

### A brief summary

The program <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> performs three major things for its user:

1. Calculates the similarity between the all gene amino acid seqeunces found in genomes described in your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> using [DIAMOND](https://www.wsi.uni-tuebingen.de/lehrstuehle/algorithms-in-bioinformatics/software/diamond/). You have some options. Although, (1) you can use the NCBI's BLAST program [`blastp`](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins) instead of DIAMOND using the `--use-ncbi-blast` flag, (2) instead of analyzing all genomes you can focus a subset using the `--genome-names` parameter, and (3) exclude genes that are partial from your analysis using the flag `--exclude-partial-gene-calls` if you think you must.

2. Resolves gene clusters using the BLAST results via the [MCL](http://micans.org/mcl/) algorithm after discarding weak hits from the search results using the `--minbit` heuristic (inspired by the workflow implemented by ITEP ([Benedict et al., 2014](https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-15-8)).

3. Performs additional analyses of gene clusters for downstream analyses and visualization tasks. These analyses include,

    * Multiple sequnce alignment of amino acid sequences in each gene cluster,
    * Computation of [functional and geometric homogeneity indices](https://merenlab.org/2016/11/08/pangenomics-v2/#functional-and-geometric-homogeneity-estimates-in-anvio),
    * Computation of average amino-acid identity (AAI) within each gene cluster,
    * Hierarchical clustering analysis of gene clusters based on their distribution across genomes, and genomes based on their sharing of the gene pool.

The basic command line to run a pangenomic analysis that will do all the step above will look like the following:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME
</div>

But it is also possible for power users to initiate the anvi'o pangenomcs workflow with user defined gene clusters, which means it would be possible to visualize the pangenomic analyses performed by other tools in anvi'o. In this case, only the third step is performed with already established gene clusters:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;gene&#45;clusters&#45;txt <span class="artifact&#45;n">[gene&#45;clusters&#45;txt](/help/main/artifacts/gene&#45;clusters&#45;txt)</span>
</div>


### The 'additional parameters' mechanism for power users

At the core of the pangenomics workflow lies the reciprocal BLAST search that identifies sequence similarities within a pool of gene sequences. For this, anvi'o uses DIAMOND by default, but the user can change the search algorithm. Based on the algorithm used for this step, the matching anvi'o driver sets some default parameters for a successful run. Such as the proper parameter to explicitly define where the output files generated by DIAMOND should go, and so on. Apart from those mandatory parameters that are critical for a successful run, anvi'o allows the user to define a set of additional parameters to pass to the search algorithm.

This is done via the flag `--additional-params-for-seq-search`. For instance, the user could take a look at the parameters diamond offers by typing `diamond help` on their terminal, and may decide to use the `--sensitive` implemented by DIAMOND to enable a slower but more sensitive search, and use the parameter `--id 98` to ask DIAMOND to not report any hits across genes that is lower than 98% sequence identity to limit gene clusters only those sequences that are extremely closely related while pushing everything else to be singletons (which can also be removed from the analysis with a separate `--min-occurrence 2` flag <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> accepts). They can pass these parameters to DIAMOND by running their analysis the following way:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;additional&#45;params&#45;for&#45;seq&#45;search "&#45;&#45;masking 0 &#45;&#45;sensitive &#45;&#45;id 98"
</div>

{:.notice}
The additional parameters used for the search will be stored in the resulting <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and can be viewed anytime using the program <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span>.

{:.notice}
For DIAMOND, if no additional parameters is declared, anvi'o will include `--masking 0` by default since we recently learned that not using that flag leads to the elmination of genes with many repeated elements (see [#1955](https://github.com/merenlab/anvio/issues/1955)).

With the freedom of additional parameters for sequnce search, it is possible to make significant mistakes since anvi'o will have no opportunity to sanity-check user-defined additional parameters. If you are doing something experimental, please keep an eye on the output messages and error logs.

If the user choses to use NCBI's BLAST program, in that case anvi'o will pass the value of the parameter `--additional-params-for-seq-search` to NCBI's `blastp`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-pan-genome.md) to update this information.


## Additional Resources


* [A tutorial on pangenomics](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-pan-genome) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
