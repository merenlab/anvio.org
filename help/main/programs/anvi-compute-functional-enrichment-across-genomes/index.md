---
layout: program
title: anvi-compute-functional-enrichment-across-genomes
excerpt: An anvi'o program. A program that computes functional enrichment across groups of genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-functional-enrichment-across-genomes
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program that computes functional enrichment across groups of genomes..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/adw96.jpg" /></div><div class="anvio-person-info-box"><a href="/people/adw96" target="_blank"><span class="anvio-person-name">Amy D. Willis</span></a><div class="anvio-person-social-box"><a href="http://statisticaldiversitylab.com/team/amy-willis" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:adwillis@uw.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AmyDWillis" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/adw96" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program computes functional enrichment across groups of genomes and returns a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file.

{:.warning}
For its sister programs, see <span class="artifact-p">[anvi-compute-functional-enrichment-in-pan](/help/main/programs/anvi-compute-functional-enrichment-in-pan)</span> and <span class="artifact-p">[anvi-compute-metabolic-enrichment](/help/main/programs/anvi-compute-metabolic-enrichment)</span>.

{:.notice}
Please also see <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span> which can both calculate functional enrichment, AND give you an interactive interface to display the distribution of functions.

## Functional enrichment

You can use this program by combining genomes described through <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, and/or stored in a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>. In addition to sources for your genomes, you will need to provide a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file to declare which genome belongs to which group for enrichment analysis to consider.

### How does it work?

1. **Aggregate functions from all sources**. Gene calls in each genome are tallied according to their functional annotations from the given annotation source.

2. **Quantify the distribution of functions in each group of genomes**. This information is then used by `anvi-script-enrichment-stats` to fit a GLM to determine (1) the level that a particular functional annotation is unique to a single group and (2) the percent of genomes it appears in in each group. This produces a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file.

{:.notice}
The script `anvi-script-enrichment-stats` was implemented by [Amy Willis](https://github.com/adw96), and described first in [this paper](https://doi.org/10.1186/s13059-020-02195-w).


### Basic usage

You can use it with a single source of genomes:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;across&#45;genomes &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                                  &#45;&#45;annotation&#45;source FUNCTION_SOURCE
</div>

or many:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;across&#45;genomes &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span>\
                                                  &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                                  &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                                  &#45;&#45;annotation&#45;source FUNCTION_SOURCE
</div>

### Additional Parameters

You can get a tab-delimited matrix describing the occurrence (counts) of each function within each genome using the `--functional-occurrence-table-output` parameter:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;functional&#45;enrichment&#45;across&#45;genomes &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                                  &#45;&#45;annotation&#45;source FUNCTION_SOURCE
                                                  &#45;&#45;functional&#45;occurrence&#45;table&#45;output FUNC_OCCURRENCE.TXT
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-functional-enrichment-across-genomes.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-compute-functional-enrichment-across-genomes`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-compute-functional-enrichment-across-genomes [-h] [-e FILE_PATH] [-i FILE_PATH] [-g GENOMES_STORAGE] -G TEXT_FILE [--annotation-source FUNCTION_ANNOTATION_SOURCE] [-l] -o FILE_PATH [--include-ungrouped] [-F FILE] [--qlambda NUM] [--skip-checking-genome-hashes] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-sources-of-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">SOURCES OF GENOMES</span> <span class="parameter-group-description">To estimate enriched functions across your geonomes, you can provide any combination of the following: an external genomes file, an internal genomes file, and/or a genomes storage file. Anvi&#x27;o will aggregate all functions in genomes found in any of these sources, and will do its magic.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-relationships-between-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">RELATIONSHIPS BETWEEN GENOMES</span> <span class="parameter-group-description">Here you need to provide a groups file so anvi&#x27;o can understand which genome is in which group.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-groups_txt"><code class="parameter-flags">-G, --groups-txt</code> <code class="parameter-metavar">TEXT_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A tab-delimited text file specifying which group each item belongs to. Depending on the context, items here may be individual samples or genomes. The first column must contain item names matching to those that are in your input data. A different column should have the header &#x27;group&#x27; and contain the group name for each item. Each item should be associated with a single group. It is always a good idea to define groups using single words without any fancy characters. For instance, `HIGH_TEMPERATURE` or `LOW_FITNESS` are good group names. `my group #1` or `IS-THIS-OK?`, are not good group names.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-function-annotation-source">
<header class="parameter-group-header"><span class="parameter-group-title">FUNCTION ANNOTATION SOURCE</span> <span class="parameter-group-description">Here you tell anvi&#x27;o which function annotation source to use. Obviously, any given function annotation source will have to be common to all genomes. You can see what you have in any of the contigs databases you can use the program `anvi-db-info`. YOU&#x27;RE ALMOST THERE.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-annotation_source"><code class="parameter-flags">--annotation-source</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get functional annotations for a specific annotation source. You can use the flag &#x27;--list-annotation-sources&#x27; to learn about what sources are available.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_annotation_sources"><code class="parameter-flags">-l, --list-annotation-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available functional annotation sources.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">What comes out the other end. The only thing mandatory here is the output file.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_ungrouped"><code class="parameter-flags">--include-ungrouped</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you want anvi&#x27;o to include genomes with no group in the analysis. This means the genome has nothing in the &#x27;group&#x27; column of the input file. By default all variables with no value will be ignored, but if you apply this flag, they will instead be considered as a single group (called &#x27;UNGROUPED&#x27; when performing the statistical analysis.</span></dd>
<dt class="parameter" id="parameter-functional_occurrence_table_output"><code class="parameter-flags">-F, --functional-occurrence-table-output</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Saves the occurrence frequency information for functions in genomes in a TAB-delimited format. A file name must be provided. To learn more about how the functional occurrence is computed, please refer to the tutorial.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-thingies">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL THINGIES</span> <span class="parameter-group-description">If you want it, here it is, come and get it.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-qlambda"><code class="parameter-flags">--qlambda</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you want to set the maximum lambda value for q-value estimation, provide a fraction between 0.05 and 1.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A description of the enrichment script run by this program can be found in Shaiber et al 2020](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02195-w)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_functional_enrichment_across_genomes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
