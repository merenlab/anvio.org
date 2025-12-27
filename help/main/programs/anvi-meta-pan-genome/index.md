---
layout: program
title: anvi-meta-pan-genome
excerpt: An anvi'o program. Convert a pangenome into a metapangenome.
categories: [anvio]
comments: false
redirect_from: /m/anvi-meta-pan-genome
image:
  featurerelative: ../../../images/header.png
  display: true
---

Convert a pangenome into a metapangenome.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[metapangenome](../../artifacts/metapangenome) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program integrates the information from an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> artifact into a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, creating a metapangenome. 

A metapangenome contains both the information in a metagenome (i.e. their abundances in different samples as described in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>) and the information in a pangenome (i.e. the gene clusters in your dataset). This is useful because you are able to observe which gene cluster patterns are present in certain environments. For an example of a metapangenomic workflow, take a look [here](http://merenlab.org/data/prochlorococcus-metapangenome/) (this tutorial was written before this program, but the insights persist). 

To use this program, provide a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> pair, as well as an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>.

<div class="codeblock" markdown="1">
anvi&#45;meta&#45;pan&#45;genome &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                     &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> 
</div>

However, when integrating metagenomic and pangenomic data together, you'll get a lot of data. You can set two additional parameters to help you filter out data that doesn't mean certain standards:

- `--fraction-of-median-coverage`: this threshold removes genes with less than this fraction of the median coverage. The default is 0.25. So, for example, if the median coverage in your data was 100X, this would remove all genes with coverage less than 25X. 
- `--min-detection`: this threshold removes genomes with detection less than this value in all samples. The default is 0.5.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-meta-pan-genome.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/meta_pan_genome.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
