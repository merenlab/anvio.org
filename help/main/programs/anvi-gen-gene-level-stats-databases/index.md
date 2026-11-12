---
layout: program
title: anvi-gen-gene-level-stats-databases
excerpt: An anvi'o program. A program to compute genes databases for a ginen set of bins stored in an anvi&#x27;o collection.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-gene-level-stats-databases
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to compute genes databases for a ginen set of bins stored in an anvi&#x27;o collection. Genes databases store gene-level coverage and detection statistics, and they are usually computed and generated automatically when they are required (such as running anvi-interactive with `--gene-mode` flag). This program allows you to pre-compute them if you don&#x27;t want them to be done all at once.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-db](../../artifacts/genes-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **generates a <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span>, which stores the coverage and detection values for all of the genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.**

This information is usually calculated when it's needed (for example when running <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in genes mode), but this program lets you break this process into two steps. This way, you can easily change the parameters of <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> without having to recalculate the gene-level statistics.

Given a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair, as well as a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, this program will calculate the stats for the genes in each of your <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s and give each bin its own <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> that includes this information.

For example, if a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> called `GENE_COLLECTION` contained the bins `bin_0001`, `bin_0002`, and `bin_0003` and you ran:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;gene&#45;level&#45;stats&#45;databases &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                    &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                    &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

Then it will create a directory called `GENES` that contains three <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> called `GENE_COLLECTION-bin_0001.db`, `GENE_COLLECTION-bin_0002.db`, and `GENE_COLLECTION-bin_0003.db`. In terms of output, this program is similar to <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span>: each of these databases can now be treated as self-contained anvi'o projects but they also contain the gene-level information. Thus, you then could run <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in genes mode on one of these profile databases.

You also have the option to provide a list of <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> (either as a file or as a string) to anlyze instead of a single <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>.

### Other Parameters

You can also change the definition of an outlier nucleotide position or switch calculations to use the [INSeq/Tn-Seq](https://www.illumina.com/science/sequencing-method-explorer/kits-and-arrays/in-seq-tn-seq.html) statistical methods.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-gene-level-stats-databases.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-gene-level-stats-databases`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-gene-level-stats-databases [-h] -c CONTIGS_DB -p PROFILE_DB [-C COLLECTION_NAME] [-b BIN_NAME] [-B FILE_PATH] [--zeros-are-outliers] [--outliers-threshold NUM] [--just-do-it] [--inseq-stats]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-databases">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT DATABASES</span> <span class="parameter-group-description">Which anvi&#x27;o databases do you wish to work today?</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-bins-and-collection">
<header class="parameter-group-header"><span class="parameter-group-title">BIN(S) AND COLLECTION</span> <span class="parameter-group-description">You can select a bin, multiple bins, or you can simply focus on every bin in a collection by providing only a collection name. Once you are done with your selection, anvi&#x27;o will generate an individual genes database for each of the bin it finds.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
<dt class="parameter" id="parameter-bin_ids_file"><code class="parameter-flags">-B, --bin-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for bins (each line should be a unique bin id).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-additional-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">ADDITIONAL PARAMETERS</span> <span class="parameter-group-description">These parameters are those that are critical to identify outlier nucleotide positions and how to define what should be included in those calculations. In most cases you can leave them as is, and things are going to be alright.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-zeros_are_outliers"><code class="parameter-flags">--zeros-are-outliers</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you want all zero coverage positions to be treated like outliers then use this flag. The reason to treat zero coverage as outliers is because when mapping reads to a reference we could get many zero positions due to accessory genes. These positions then skew the average values that we compute.</span></dd>
<dt class="parameter" id="parameter-outliers_threshold"><code class="parameter-flags">--outliers-threshold</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Threshold to use for the outlier detection. The default value is &#x27;1.5&#x27;. Absolute deviation around the median is used. To read more about the method please refer to: &#x27;How to Detect and Handle Outliers&#x27; by Boris Iglewicz and David Hoaglin (doi:10.1016/j.jesp.2013.03.013).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.5</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-parameters-of-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">PARAMETERS OF CONVENIENCE</span> <span class="parameter-group-description">They say they save lives.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-inseq-data">
<header class="parameter-group-header"><span class="parameter-group-title">INSEQ DATA</span> <span class="parameter-group-description">When analyzing INSeq/Tn-Seq data</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-inseq_stats"><code class="parameter-flags">--inseq-stats</code></dt>
<dd class="parameter-details"><span class="parameter-help">Provide if working with INSeq/Tn-Seq genomic data. With this, all gene level coverage stats will be calculated using INSeq/Tn-Seq statistical methods.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_gene_level_stats_databases.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
