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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-meta-pan-genome`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-meta-pan-genome [-h] -p PAN_DB [-g GENOMES_STORAGE] [-i FILE] [--fraction-of-median-coverage FLOAT] [--min-detection FLOAT] [--gene-caller GENE-CALLER] [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-pangenome">
<header class="parameter-group-header"><span class="parameter-group-title">PANGENOME</span> <span class="parameter-group-description">Files for the pangenome.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-metagenome">
<header class="parameter-group-header"><span class="parameter-group-title">METAGENOME</span> <span class="parameter-group-description">Genome bins stored in an anvi&#x27;o profile databases as collections.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A four-column TAB-delimited flat text file. This file should be identical to the internal genomes file you used for your pangenomics analysis. Anvi&#x27;o will use this file to find all profile and contigs databases that contain the information for each gene and genome across metagenomes.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-criterion-for-detection">
<header class="parameter-group-header"><span class="parameter-group-title">CRITERION FOR DETECTION</span> <span class="parameter-group-description">This is tricky. What we want to do is to identify genes that are occurring uniformly across samples.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fraction_of_median_coverage"><code class="parameter-flags">--fraction-of-median-coverage</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The value set here will be used to remove a gene if its total coverage across environments is less than the median coverage of all genes multiplied by this value. The default is 0.25, which means, if the median total coverage of all genes across all samples is 100X, then, a gene with a total coverage of less than 25X across all samples will be assumed not a part of the &#x27;environmental core&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.25</code></span></dd>
<dt class="parameter" id="parameter-min_detection"><code class="parameter-flags">--min-detection</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">For this entire thing to work, the genome you are focusing on should be detected in at least one metagenome. If that is not the case, it would mean that you do not have any sample that represents the niche for this organism (or you do not have enough depth of coverage) to investigate the detection of genes in the environment. By default, this script requires at least &#x27;0.5&#x27; of the genome to be detected in at least one metagenome. This parameter allows you to change that. 0 would mean no detection test required, 1 would mean the entire genome must be detected.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pro-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">PRO STUFF</span> <span class="parameter-group-description">Things you may not have to change unless you are doing something extra cool and edgy.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller"><code class="parameter-flags">--gene-caller</code> <code class="parameter-metavar">GENE-CALLER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The gene caller to utilize. Anvi&#x27;o supports multiple gene callers, and some operations (including this one) may require an explicit mentioning of which one to use. The default gene caller is identified automatically in most cases (based on whether the most frequent gene calls match to a known gene caller in anvi&#x27;o), but if you have a contigs-db generated with `--external-gene-callers` or something, you may have to pay extra attention here. Also, some HMM collections may add new gene calls into a given contigs-db as an ad-hoc fashion, so if you want to see all the options available to you in a given contigs database, please run the program `anvi-db-info` and take a look at the output.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/meta_pan_genome.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
