---
layout: program
title: anvi-compute-gene-cluster-homogeneity
excerpt: An anvi'o program. Compute homogeneity for gene clusters.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-gene-cluster-homogeneity
image:
  featurerelative: ../../../images/header.png
  display: true
---

Compute homogeneity for gene clusters.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mahmoudyousef98.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mahmoudyousef98" target="_blank"><span class="anvio-person-name">Mahmoud Yousef</span></a><div class="anvio-person-social-box"><a href="mailto:mahmoudyousef@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/mahmoudyousef98" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program **computes both the geometric homogeneity and functional homogeneity for the gene clusters stored in a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.** 

*Geometric homogeneity* and *functional homogeneity* are anvi'o-specific metrics that describe how similar genes within a gene cluster are to each other in different ways. Geometric homogeneity analyzes the positions of gaps in aligned residues without considering specific amino acids, while functional homogeneity examines point mutations to amino acids and compares the chemical similarity of the resulting amino acids. See [this page](http://merenlab.org/2016/11/08/pangenomics-v2/#inferring-the-homogeneity-of-gene-clusters) for more detailed information. 

You can execute this program as follows: 

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;gene&#45;cluster&#45;homogeneity &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                      &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                      &#45;o path/to/output.txt \
                                      &#45;&#45;store&#45;in&#45;db
</div>

This execution will store the output directly in the database and provide it as a separate file at the specified output path. 

The analysis can also be restricted to specific gene clusters by providing a gene cluster ID, list of gene cluster IDs, <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, or <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>. 

To reduce runtime, you can enable the `--quick-homogeneity` option, which skips the horizontal geometric homogeneity analysis (i.e., it will not examine alignments within individual genes). This approach provides faster execution but with reduced accuracy for detailed analyses. 

The following example demonstrates usage of this flag while restricting analysis to a specific collection: 

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;gene&#45;cluster&#45;homogeneity &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                      &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                      &#45;o path/to/output.txt \
                                      &#45;&#45;store&#45;in&#45;db \ 
                                      &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                                      &#45;&#45;quick&#45;homogeneity 
</div>

Multithreading capabilities are also available for users who require parallel processing.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-gene-cluster-homogeneity.md) to update this information.


## Additional Resources


* [The role of gene cluster homogeneity described in the Anvi&#x27;o pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#inferring-the-homogeneity-of-gene-clusters)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-compute-gene-cluster-homogeneity) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
