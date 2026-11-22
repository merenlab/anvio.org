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

Given a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair, as well as a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, this program will calculate the stats for the genes in each of your <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s and give each bin its own <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span> that includes this information.

For example, if a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> called `GENE_COLLECTION` contained the bins `bin_0001`, `bin_0002`, and `bin_0003` and you ran:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;gene&#45;level&#45;stats&#45;databases &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                    &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                    &#45;C GENE_COLLECTION
</div>

Then it will create a directory called `GENES` next to your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> that contains three <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span>s called `GENE_COLLECTION-bin_0001.db`, `GENE_COLLECTION-bin_0002.db`, and `GENE_COLLECTION-bin_0003.db`. Once these databases are there, running <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in gene mode for any of these bins will use them directly, instead of computing gene-level stats from scratch.

You also have the option to provide a list of <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> (either as a file or as a string) to analyze instead of every bin in a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>.

If genes databases already exist for some of your bins, anvi'o will ask you to use the flag `--just-do-it` before it does anything. With that flag, it will keep each existing genes database that was generated with the same parameters and the same splits, and regenerate the ones that weren't.

### Normalized gene coverages

By default, this program also computes five normalizations of the `non_outlier_mean_coverage` values of each gene in each sample, and stores them in the genes database. They become additional views when you run <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in gene mode:

- **log1p**: log(x + 1) of coverage values, which reduces their dynamic range.
- **cov_per_million**: mean coverage depth per million mapped reads in each sample, which accounts for differences in sequencing depth across samples. Please note that this is not CPM (counts per million), since it is based on coverage depth rather than read counts.
- **zscore_raw**, **zscore_log1p**, and **zscore_cov_per_million**: per-gene z-scores of raw, log1p, and cov_per_million values across samples, which show how many standard deviations a gene's coverage in a given sample deviates from that gene's mean coverage across all samples.

Z-scores are computed for each gene separately, so they are not comparable between genes within the same sample. With transcriptomic data, they reflect each gene's own expression pattern. With metagenomic data, genes of a single population tend to follow the abundance of that population, so z-scores mostly help spot genes whose coverage patterns deviate from the rest of their genome (such as those that are found in multiple copies, or are absent from some samples). In either case, setting a __center__ value of 0 for z-score views in the <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface will display them as diverging values.

If an existing genes database does not have normalized coverages yet (e.g., because it was generated with an earlier version of anvi'o), this program will compute them using the gene-level stats already stored in it.

You can skip this step with the flag `--skip-computing-gene-level-normalized-coverages`, in which case these data will not be generated, and these views will not be available:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;gene&#45;level&#45;stats&#45;databases &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                    &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                    &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                                    &#45;&#45;skip&#45;computing&#45;gene&#45;level&#45;normalized&#45;coverages
</div>

{:.notice}
Z-scores are not meaningful when there is only a single sample. So, if your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> has only one sample, anvi'o will refuse to create a new genes database until you add `--skip-computing-gene-level-normalized-coverages` to your command, so it is clear that these values will not be available.

{:.notice}
Computing coverage per million mapped reads requires the number of reads mapped to each sample, which some very old <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>s may not have. In that case anvi'o will skip computing normalized coverages with a warning.

### Other Parameters

You can also change the definition of an outlier nucleotide position (with `--outliers-threshold`), or whether nucleotide positions with zero coverage should be treated as outliers (with `--zeros-are-outliers`).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-gene-level-stats-databases.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-gene-level-stats-databases`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-gene-level-stats-databases [-h] -c CONTIGS_DB -p PROFILE_DB [-C COLLECTION_NAME] [-b BIN_NAME] [-B FILE_PATH] [--zeros-are-outliers] [--outliers-threshold NUM] [--skip-computing-gene-level-normalized-coverages] [--just-do-it]</div>
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
<dt class="parameter parameter-switch" id="parameter-skip_computing_gene_level_normalized_coverages"><code class="parameter-flags">--skip-computing-gene-level-normalized-coverages</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, when anvi&#x27;o generates gene-level coverage stats for a genes database, it also computes five normalizations of the non_outlier_mean_coverage values for each gene in each sample, stores them in the genes database, and makes them available as additional views in gene mode: (1) log1p: log(x + 1), which reduces dynamic range; (2) cov_per_million: mean coverage depth per million mapped reads, which accounts for differences in sequencing depth across samples; (3) zscore_raw: per-gene z-score of raw non_outlier_mean_coverage across samples; (4) zscore_log1p: per-gene z-score of log1p-transformed values; (5) zscore_cov_per_million: per-gene z-score of cov_per_million-normalized values. Z-scores show how many standard deviations a gene&#x27;s coverage in a given sample deviates from that gene&#x27;s mean coverage across all samples. They are not comparable between genes within the same sample. With transcriptomic data they reflect each gene&#x27;s own expression pattern; with metagenomic data, genes of a single population tend to follow the population&#x27;s abundance, so z-scores mostly help spot genes whose coverage deviates from the rest of their genome. Using this flag will prevent anvi&#x27;o from generating these data, and these views will not be available. If the genes database already contains them from an earlier run, they will still be shown. Since z-scores are not meaningful with a single sample, anvi&#x27;o will force you to include this flag when it creates a new genes database for a profile database that has only one sample (on behalf of anvi&#x27;o, we apologize for the inconvenience if/when that happens).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-parameters-of-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">PARAMETERS OF CONVENIENCE</span> <span class="parameter-group-description">They say they save lives.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_gene_level_stats_databases.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
