---
layout: program
title: anvi-script-gen-functions-per-group-stats-output
excerpt: An anvi'o program. Generate a TAB delimited file for the distribution of functions across groups of genomes/metagenomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-functions-per-group-stats-output
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a TAB delimited file for the distribution of functions across groups of genomes/metagenomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/adw96.jpg" /></div><div class="anvio-person-info-box"><a href="/people/adw96" target="_blank"><span class="anvio-person-name">Amy D. Willis</span></a><div class="anvio-person-social-box"><a href="http://statisticaldiversitylab.com/team/amy-willis" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:adwillis@uw.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AmyDWillis" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/adw96" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>




## Usage


{:.notice}
**No one has described the usage of this program** :/ If you would like to contribute, please see previous examples [here](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs), and feel free to add a Markdown formatted file in that directory named "anvi-script-gen-functions-per-group-stats-output.md". For a template, you can use the markdown file for `anvi-gen-contigs-database`. THANK YOU!



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-gen-functions-per-group-stats-output`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-gen-functions-per-group-stats-output [-h] [-i FILE_PATH] [-e FILE_PATH] [-g GENOMES_STORAGE] --annotation-source FUNCTION_ANNOTATION_SOURCE [--aggregate-based-on-accession] [--aggregate-using-all-hits] [--min-occurrence NUM GENOMES] [-G TEXT_FILE] [-o FILE_PATH] [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">GENOMES</span> <span class="parameter-group-description">Tell anvi&#x27;o where your genomes are.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-functions">
<header class="parameter-group-header"><span class="parameter-group-title">FUNCTIONS</span> <span class="parameter-group-description">Tell anvi&#x27;o which functional annotation source you like above all, and other important details you like about your analysis.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-annotation_source"><code class="parameter-flags">--annotation-source</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Get functional annotations for a specific annotation source. You can use the flag &#x27;--list-annotation-sources&#x27; to learn about what sources are available.</span></dd>
<dt class="parameter parameter-switch" id="parameter-aggregate_based_on_accession"><code class="parameter-flags">--aggregate-based-on-accession</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is important. When anvi&#x27;o aggregates functions for functional enrichment analyses or to display them, it uses by default the &#x27;function text&#x27; as keys. This is because multiple accession IDs in various databases may correspond to the same function, and when you are doing a functional enrichment analysis, you most likely would like to avoid over-splitting of functions due to this. But then how can we know if you are doing something that requires things to be aggregated based on accession ids for functions rather than actual functions? We can&#x27;t. But we have this flag here so you can instruct anvi&#x27;o to listen to you and not to us.</span></dd>
<dt class="parameter parameter-switch" id="parameter-aggregate_using_all_hits"><code class="parameter-flags">--aggregate-using-all-hits</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program will aggregate functions based on best hits only, and this flag will change that behavior. In some cases a gene may be annotated with multiple functions. This is a decision often made at the level of function annotation tool. For instance, when you run `anvi-run-ncbi-cogs`, you may end up having two COG annotations for a single gene because the gene hit both of them with significance scores that were above the default noise cutoff. While this can be useful when one visualizes functions or works with an `anvi-summarize` output where things should be most comprehensive, having some genes annotated with multiple functions and others with one function may over-split them (since in this scenario a gene with COGXXX and COGXXX;COGYYY would end up in different bins). Thus, when working on functional enrichment analyses or displaying functions anvi&#x27;o will only use the best hit for any gene that has multiple hits by default. But you can turn that behavior off explicitly and show anvi&#x27;o who is the boss by using this flag.</span></dd>
<dt class="parameter" id="parameter-min_occurrence"><code class="parameter-flags">--min-occurrence</code> <code class="parameter-metavar">NUM GENOMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum number of occurrence of any given function accross genomes. If you set a value, those functions that occur in less number of genomes will be excluded.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-groups">
<header class="parameter-group-header"><span class="parameter-group-title">GROUPS</span> <span class="parameter-group-description">How should anvi&#x27;o divide your genomes into groups?</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-groups_txt"><code class="parameter-flags">-G, --groups-txt</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited text file specifying which group each item belongs to. Depending on the context, items here may be individual samples or genomes. The first column must contain item names matching to those that are in your input data. A different column should have the header &#x27;group&#x27; and contain the group name for each item. Each item should be associated with a single group. It is always a good idea to define groups using single words without any fancy characters. For instance, `HIGH_TEMPERATURE` or `LOW_FITNESS` are good group names. `my group #1` or `IS-THIS-OK?`, are not good group names.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">A.k.a., what you&#x27;re really here for</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_functions_per_group_stats_output.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
