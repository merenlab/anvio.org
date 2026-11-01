---
layout: program
title: anvi-script-gen-distribution-of-genes-in-a-bin
excerpt: An anvi'o program. Quantify the detection of genes in genomes in metagenomes to identify the environmental core.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-distribution-of-genes-in-a-bin
image:
  featurerelative: ../../../images/header.png
  display: true
---

Quantify the detection of genes in genomes in metagenomes to identify the environmental core. This is a helper script for anvi&#x27;o metapangenomic workflow.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[view-data](../../artifacts/view-data) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-items-txt](../../artifacts/misc-data-items-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program computes the detection of genes (inputted as a <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>) across your samples, so that you can visualize them in the <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface.

This program is used in [the metapangenomic workflow](https://merenlab.org/data/prochlorococcus-metapangenome/#classification-of-genes-as-ecgs-and-eags-by-the-distribution-of-genes-in-a-genome-across-metagenomes) on genes with metagenomes as samples to visually identify the environmental core genes and accessory genes.

### Inputs

Essentially, you provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair, as well as the <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> you want to look at, and this program will  search each gene in your bin against the samples denoted in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;distribution&#45;of&#45;genes&#45;in&#45;a&#45;bin &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                                               &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span>
</div>

There are two other parameters that you can set to focus the genes that you're looking at:
- The minimum detection required for a gene to be included (by default, a gene must have a detection value of `0.5` in at least one of your samples)
-The minimum coverage required for a gene to be included (by default, a gene must have a total coverage of `0.25` times the mean total coverage in your data)

### Outputs

This program will produce two outputs:

1. `[your bin name]-GENE-COVs.txt`, which is a <span class="artifact-n">[view-data](/help/main/artifacts/view-data)</span> artifact. This is a matrix where each row represents a gene, each column represents one of your samples, and the cells each contain a coverage value.
2. `[your bin name]-ENV-DETECTION.txt`, which is a <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span>. It is a two-column file, where each row is a gene and and the second column describes whether or not that gene is systematically detected in your samples. Thus, this can be added as an additional layer in the interface that describes describes which genes are detected in your samples. (as an example, see the outermost layer [here](https://merenlab.org/data/prochlorococcus-metapangenome/#classification-of-genes-as-ecgs-and-eags-by-the-distribution-of-genes-in-a-genome-across-metagenomes))

Thus, after running this program on a bin with name `BIN_NAME`, you can run

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;interactive](/help/main/programs/anvi&#45;interactive)</span> &#45;d BIN_NAME&#45;GENE&#45;COVs.txt \
                 &#45;A BIN_NAME&#45;ENV&#45;DETECTION.txt \
                 &#45;&#45;manual \
                 &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span>
</div>

This will visually show you the coverage and detection of your genes across your samples in the <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface (simlarly to [this figure](https://merenlab.org/data/prochlorococcus-metapangenome/#classification-of-genes-as-ecgs-and-eags-by-the-distribution-of-genes-in-a-genome-across-metagenomes)).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-distribution-of-genes-in-a-bin.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-gen-distribution-of-genes-in-a-bin`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-gen-distribution-of-genes-in-a-bin [-h] -c CONTIGS_DB [-p PROFILE_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [--min-detection FLOAT] [--fraction-of-median-coverage FLOAT]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
<dt class="parameter" id="parameter-min_detection"><code class="parameter-flags">--min-detection</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">For this entire thing to work, the genome you are focusing on should be detected in at least one metagenome. If that is not the case, it would mean that you do not have any sample that represents the niche for this organism (or you do not have enough depth of coverage) to investigate the detection of genes in the environment. By default, this script requires at least &#x27;0.5&#x27; of the genome to be detected in at least one metagenome. This parameter allows you to change that. 0 would mean no detection test required, 1 would mean the entire genome must be detected.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-fraction_of_median_coverage"><code class="parameter-flags">--fraction-of-median-coverage</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The value set here will be used to remove a gene if its total coverage across environments is less than the median coverage of all genes multiplied by this value. The default is 0.25, which means, if the median total coverage of all genes across all samples is 100X, then, a gene with a total coverage of less than 25X across all samples will be assumed not a part of the &#x27;environmental core&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.25</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [This program in action as part of the metapangenomic workflow](http://merenlab.org/data/prochlorococcus-metapangenome/#classification-of-genes-as-ecgs-and-eags-by-the-distribution-of-genes-in-a-genome-across-metagenomes)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_distribution_of_genes_in_a_bin.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
