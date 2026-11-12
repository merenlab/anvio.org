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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program **computes both the geometric homogeneity and functional homogeneity for the gene clusters in a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.**

*Geometric homogeneity* and *functional homogeneity* are anvi'o specific terms that describe how similar genes within a gene cluster are to each other in different ways. Briefly, geometric homogeneity compares the positions of gaps in the aligned residues without considering specific amino acids, and functional homogeneity examines point mutations to amino acids and compares how similar the resulting amino acids are chemically. See [this page](http://merenlab.org/2016/11/08/pangenomics-v2/#inferring-the-homogeneity-of-gene-clusters) for more details.

You can run this program as so:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;gene&#45;cluster&#45;homogeneity &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                      &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                      &#45;o path/to/output.txt \
                                      &#45;&#45;store&#45;in&#45;db
</div>

This run will put the output directly in the database, as well as provide it as a separate file as the specified output path. When stored in the database, the homogeneity indices are placed in the `homogeneity` data group of the <span class="artifact-n">[misc-data-items](/help/main/artifacts/misc-data-items)</span> table.

You also have the option to calculate this information about only specific gene clusters, either by providing a gene cluster ID, list of gene cluster IDs, <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> or <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>.

To save on runtime, you can also enable `--quick-homogeneity`, which will not check for horizontal geometric homogenity (i.e. it will not look at alignments within a single gene). This will be less accurate for detailed analyses, but it will run faster.

Here is an example run that uses this flag and only looks at a specific collection:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;gene&#45;cluster&#45;homogeneity &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                      &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                      &#45;o path/to/output.txt \
                                      &#45;&#45;store&#45;in&#45;db \
                                      &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                                      &#45;&#45;quick&#45;homogeneity
</div>

You can also use multithreading if you're familiar with that.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-gene-cluster-homogeneity.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-compute-gene-cluster-homogeneity`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-compute-gene-cluster-homogeneity [-h] -p PAN_DB [-g GENOMES_STORAGE] [-o FILE_PATH] [--store-in-db] [--gene-cluster-id GENE_CLUSTER_ID] [--gene-cluster-ids-file FILE_PATH] [-C COLLECTION_NAME] [-b BIN_NAME] [--quick-homogeneity] [-T NUM_THREADS] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">Input files from the pangenome analysis.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-reporting">
<header class="parameter-group-header"><span class="parameter-group-title">REPORTING</span> <span class="parameter-group-description">How do you want results to be reported? Anvi&#x27;o can produce a TAB-delimited output file for you (for which you would have to provide an output file name). Or the results can be stored in the pan database directly, for which you would have to explicitly ask for it. You can get both as well in case you are a fan of redundancy and poor data analysis practices. Anvi&#x27;o does not judge.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-store_in_db"><code class="parameter-flags">--store-in-db</code></dt>
<dd class="parameter-details"><span class="parameter-help">Store analysis results into the database directly.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-selection">
<header class="parameter-group-header"><span class="parameter-group-title">SELECTION</span> <span class="parameter-group-description">Which gene clusters should be analyzed. You can ask for a single gene cluster, or multiple ones listed in a file, or you can use a collection and bin name to list gene clusters of interest.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_cluster_id"><code class="parameter-flags">--gene-cluster-id</code> <code class="parameter-metavar">GENE_CLUSTER_ID</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene cluster ID you are interested in.</span></dd>
<dt class="parameter" id="parameter-gene_cluster_ids_file"><code class="parameter-flags">--gene-cluster-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for gene clusters (each line should contain be a unique gene cluster id).</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span> <span class="parameter-group-description">Optional stuff available for you to use</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-quick_homogeneity"><code class="parameter-flags">--quick-homogeneity</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will use a homogeneity algorithm that checks for horizontal and vertical geometric homogeneity (along with functional). With this flag, you can tell anvi&#x27;o to skip horizontal geometric homogeneity calculations. It will be less accurate but quicker.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [The role of gene cluster homogeneity described in the Anvi&#x27;o pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#inferring-the-homogeneity-of-gene-clusters)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_gene_cluster_homogeneity.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
