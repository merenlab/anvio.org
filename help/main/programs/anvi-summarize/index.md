---
layout: program
title: anvi-summarize
excerpt: An anvi'o program. Summarizer for anvi&#x27;o pan, pan-graph, or profile databases.
categories: [anvio]
comments: false
redirect_from: /m/anvi-summarize
image:
  featurerelative: ../../../images/header.png
  display: true
---

Summarizer for anvi&#x27;o pan, pan-graph, or profile databases. Depending on the input, the program produces a output directory that contaisn flat files for rigorous downstream analyses by humans 🧠 or LLMs 🤖..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/btrouche.png" /></div><div class="anvio-person-info-box"><a href="/people/btrouche" target="_blank"><span class="anvio-person-name">Blandine Trouche</span></a><div class="anvio-person-social-box"><a href="mailto:blandine.trouche@orange.fr" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/btrouche" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pan-summary](../../artifacts/pan-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[pan-graph-summary](../../artifacts/pan-graph-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[profile-summary](../../artifacts/profile-summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[discov-stats](../../artifacts/discov-stats) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


Anvi-summarize lets you export a **comprehensive overview of your data** from an anvi'o database. Depending on the input, it can summarize a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned contigs (from a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>), a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned gene clusters (from a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>), or the full contents of a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>. The output is a directory of flat files and an HTML index that conveniently displays them for you. This makes the program useful for sharing information with collaborators, generating supplementary files for manuscripts, and exporting data for use in downstream analyses.

See also <span class="artifact-p">[anvi-summarize-blitz](/help/main/programs/anvi-summarize-blitz)</span>.

## Output files

What this program produces as output depends on its inputs:

* Running it on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> will produce a <span class="artifact-n">[profile-summary](/help/main/artifacts/profile-summary)</span> output.
* Running it on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> will produce a <span class="artifact-n">[pan-summary](/help/main/artifacts/pan-summary)</span> output.
* Running it on a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> will produce a <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span> output.

## Running anvi-summarize

### Running on a profile database

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
               &#45;o MY_SUMMARY \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

When running on a profile database, you also have options to:

* output very accurate (but intensely processed) coverage and detection data for each gene (using `--init-gene-coverages`)
* edit your contig names so that they contain the name of the bin that the contig is in (using `--reformat-contig-names`)
* also display the amino acid sequences for your gene calls (using `--report-aa-seqs-for-gene-calls`)

### Running on a pan database

A <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> is **optional** when summarizing a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>. Without one, anvi'o will still export the full gene clusters table with all functional annotations — the `bin_name` column will simply be empty. If you have organized your gene clusters into bins using <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> or <span class="artifact-p">[anvi-import-collection](/help/main/programs/anvi-import-collection)</span>, passing the collection name will populate `bin_name` with the bin each gene cluster belongs to, which makes downstream filtering by bin straightforward.

Run without a collection (exports everything):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>
</div>

Run with a collection (adds `bin_name` to the output):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

You can display DNA sequences instead of amino acid sequences with `--report-DNA-sequences`.

### Running on a pan-graph database

A <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> is **optional** when summarizing a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>. Without one, all output files are still produced in full — the `bin_name` column in `SYNGCs.txt` and `GENESxSYNGCs.txt` will simply be empty. If you have organized your SynGCs into bins, passing the collection name will populate `bin_name` in both files, making it easy to filter the output to any bin of interest with a single column filter.

Run without a collection (exports everything):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span>
</div>

Run with a collection (adds `bin_name` to `SYNGCs.txt` and `GENESxSYNGCs.txt`):

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;&#45;pan&#45;graph&#45;db <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

### Computing DisCov statistics

When summarizing a profile database, you can optionally compute the Distribution of Coverage (DisCov) score for each bin and each contig within each bin. See <span class="artifact-n">[discov-stats](/help/main/artifacts/discov-stats)</span> for a full description of the metric and its parameters.

To enable DisCov computation, use the `--report-discov` flag:

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
               &#45;o MY_SUMMARY \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
               &#45;&#45;report&#45;discov
</div>

This requires access to the auxiliary data file (`AUXILIARY-DATA.db`) in the same directory as the profile database and produces two additional output files under `bins_across_samples/`:

* `discov_bins.txt` — one row per bin × sample
* `discov_contigs.txt` — one row per contig × sample

You can adjust how DisCov is computed using the following parameters. When neither `--window-length` nor `--window-length-as-percentage` is specified, anvi'o applies context-sensitive defaults: a fixed 1,000 bp window for bins, and a percentage-based window (1% of contig length, minimum 300 bp) for individual contigs.

**Window sizing for S**

* `--window-length INT` — use a fixed window size in bp for all sequences (bins and contigs)
* `--window-length-as-percentage FLOAT` — set window length as a percentage of each sequence's length
* `--min-window-length INT` — minimum window length floor for percentage mode

**Fold-range for E**

* `--foldrange-lower FLOAT` — lower bound of the coverage fold-range (default: 0.5)
* `--foldrange-upper FLOAT` — upper bound of the coverage fold-range (default: 2.0)

**Combining S and E**

* `--alpha FLOAT` — weight of S relative to E, in [0, 1] (default: 0.5)
* `--discov-formula STRING` — `linear` (DisCov = αS + (1-α)E) or `geometric` (DisCov = S^α × E^(1-α)) (default: `linear`)

### Other notes

If you are unsure what collections are in your database, you can run this program with the flag `--list-collections` or by running <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span>.

You can also use the flag `--quick-summary` to get a less comprehensive summary with a much shorter processing time. For profile-db summaries it skips several heavier computations; for pan-db summaries it omits sequences and annotation text from the gene clusters file; for pan-graph-db summaries it omits sequences from `GENESxSYNGCs.txt`.

For cases where you want the aggregate bin statistics and per-sample coverage matrices from your profile-db but not per-bin sequence files, you can use the flag `--light-summary` instead.

Just for your reference, in the context of <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> summaries, and for a dataset of ~2,000 MAGs described in a 42Gb <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and a 9.5G <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files, <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> took over 240 minutes to run during a test in 2026. With `--light-summary`, the program took about 40 minutes, and with `--quick-summary`, it took about 10 minutes to run on the same dataset.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-summarize.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-summarize`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-summarize [-h] -p PAN_OR_PROFILE_DB [-c CONTIGS_DB] [-g GENOMES_STORAGE] [--init-gene-coverages] [--calculate-Q2Q3-carefully] [--reformat-contig-names] [--light-summary] [--report-aa-seqs-for-gene-calls] [--report-discov] [--window-length INTEGER] [--window-length-as-percentage INTEGER] [--min-window-length INTEGER] [--foldrange-lower FLOAT] [--foldrange-upper FLOAT] [--alpha FLOAT] [--discov-formula STRING] [--report-DNA-sequences] [-C COLLECTION_NAME] [-o DIR_PATH] [--list-collections] [--cog-data-dir COG_DATA_DIR] [--quick-summary] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-profile">
<header class="parameter-group-header"><span class="parameter-group-title">PROFILE</span> <span class="parameter-group-description">The profile. It could be a standard or pan profile database.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-profile-type-specific-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">PROFILE TYPE SPECIFIC PARAMETERS</span> <span class="parameter-group-description">If you are summarizing a collection stored in a standard anvi&#x27;o profile, you will need a contigs database to go with it. If you are working with a pan profile, then you will need to provide a genomes storage. Don&#x27;t worry too much, because anvi&#x27;o will warn you gently if you make a mistake.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-standard-profile-specific-params">
<header class="parameter-group-header"><span class="parameter-group-title">STANDARD PROFILE SPECIFIC PARAMS</span> <span class="parameter-group-description">Parameters that are only relevant to standard profile summaries (declaring or not declaring them will not change anything if you are summarizing a pan profile).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-init_gene_coverages"><code class="parameter-flags">--init-gene-coverages</code></dt>
<dd class="parameter-details"><span class="parameter-help">Initialize gene coverage and detection data. This is a very computationally expensive step, but it is necessary when you need gene level coverage data. The reason this is very computationally expensive is because anvi&#x27;o computes gene coverages by going back to actual coverage values of each gene to average them, instead of using contig average coverage values, for extreme accuracy.</span></dd>
<dt class="parameter parameter-switch" id="parameter-calculate_q2q3_carefully"><code class="parameter-flags">--calculate-Q2Q3-carefully</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o summarizes collections by cutting corners. One of those corners is to take values for mean coverage Q2Q3 for each contig, and normalize that value by the size of the contig, and average those values to have a single value for the bin. While this strategy works quite well for regular mean coverage, the calculation of mean coverage Q2Q3 requires the ENTIRETY of the raw coverage values for each contig to be first concatenated so they can be sorted to calculate the most accurate Q2Q3 value for a given bin. This flag ensures anvi&#x27;o calculates mean coverage Q2Q3 values in that careful way at the expense of things taking much longer (but it really is worth it for your final summary of everything). Please see https://github.com/merenlab/anvio/pull/2366 for details.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reformat_contig_names"><code class="parameter-flags">--reformat-contig-names</code></dt>
<dd class="parameter-details"><span class="parameter-help">Reformat contig names while generating the summary output so they look fancy. With this flag, anvi&#x27;o will replace the original names of contigs to those that include the bin name as a prefix in resulting summary output files per bin. Use this flag carefully as it may influence your downstream analyses due to the fact that your original contig names in your input FASTA file for the contigs database will not be in the summary output. Although, anvi&#x27;o will report a conversion map per bin so you can recover the original contig name if you have to.</span></dd>
<dt class="parameter parameter-switch" id="parameter-light_summary"><code class="parameter-flags">--light-summary</code></dt>
<dd class="parameter-details"><span class="parameter-help">Generate a lighter summary that skips per-bin FASTA files, gene-call tables, and per-gene coverage statistics, but still produces bins_summary.txt, bins_across_samples/ tables, and bins_per_recruitment.txt. Use this when you need aggregate bin statistics without the overhead of per-bin sequence or gene-level detail.</span></dd>
<dt class="parameter parameter-switch" id="parameter-report_aa_seqs_for_gene_calls"><code class="parameter-flags">--report-aa-seqs-for-gene-calls</code></dt>
<dd class="parameter-details"><span class="parameter-help">You can use this flag if you would like amino acid AND dna sequences for your gene calls in the genes output file. By default, only dna sequences are reported.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pan-profile-specific-params">
<header class="parameter-group-header"><span class="parameter-group-title">PAN PROFILE SPECIFIC PARAMS</span> <span class="parameter-group-description">Parameters that are only relevant to pan profile summaries (declaring or not declaring them will not change anything if you are summarizing a standard profile).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-report_dna_sequences"><code class="parameter-flags">--report-DNA-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, this program reports amino acid sequences. Use this flag to report DNA sequences instead. Also note, since gene clusters are aligned via amino acid sequences, using this flag removes alignment information manifesting in the form of gap characters (`-` characters) that would be present if amino acid sequences were reported. Read the warnings during runtime for more detailed information.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-commons">
<header class="parameter-group-header"><span class="parameter-group-title">COMMONS</span> <span class="parameter-group-description">Common parameters for both pan and standard profile summaries.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter" id="parameter-cog_data_dir"><code class="parameter-flags">--cog-data-dir</code> <code class="parameter-metavar">COG_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory path for your COG setup. Anvi&#x27;o will try to use the default path if you do not specify anything.</span></dd>
<dt class="parameter parameter-switch" id="parameter-quick_summary"><code class="parameter-flags">--quick-summary</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared the summary output will be generated as quickly as possible, with minimum amount of essential information about bins.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extra">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRA</span> <span class="parameter-group-description">Extra stuff because you&#x27;re extra.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-distribution-of-coverage-discov">
<header class="parameter-group-header"><span class="parameter-group-title">DISTRIBUTION OF COVERAGE (DISCOV)</span> <span class="parameter-group-description">Parameters for computing the DisCov metric as part of the summary (requires `--report-discov`). DisCov quantifies coverage spread (S) and evenness (E) and combines them into a single score.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-report_discov"><code class="parameter-flags">--report-discov</code></dt>
<dd class="parameter-details"><span class="parameter-help">Compute the Distribution of Coverage (DisCov) metric for each bin and each contig within each bin. DisCov combines a spread score S (proportion of windows with at least some coverage) and an evenness score E (proportion of covered bases within a fold-range of the median nonzero coverage). Requires access to the auxiliary data file (AUXILIARY-DATA.db). Results are written to &#x27;bins_across_samples/discov_bins.txt&#x27; (one row per bin x sample) and &#x27;bins_across_samples/discov_contigs.txt&#x27; (one row per contig x sample).</span></dd>
<dt class="parameter" id="parameter-window_length"><code class="parameter-flags">--window-length</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">How long to make the windows for computing the spread metric: S = # windows with coverage / # windows. Using this flag sets a fixed window length (in bp) for computing S at both bin and contig level. Important note: when neither this flag nor --window-length-as-percentage is provided, anvi&#x27;o uses context-sensitive defaults: `--window-length 1000` for bins and `--window-length-as-percentage 1 --min-window-length 300` for individual contigs (which can be smaller than the default fixed length).</span></dd>
<dt class="parameter" id="parameter-window_length_as_percentage"><code class="parameter-flags">--window-length-as-percentage</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">With this option you can set the window length for the spread metric (S) dynamically as a percentage of a given input sequence length. This works well when your input sequences (contigs or genomes) have a wide size distribution and you don&#x27;t have a one-size-fits-all window length to use. For instance, if you want the window size to be 5% of the contig length, you would use `--window-length-as-percentage 5`. You may want to consider also specifying a reasonable minimum window length with the --min-window-length parameter.</span></dd>
<dt class="parameter" id="parameter-min_window_length"><code class="parameter-flags">--min-window-length</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use with --window-length-as-percentage to ensure that percentage-based window lengths never fall below this value.</span></dd>
<dt class="parameter" id="parameter-foldrange_lower"><code class="parameter-flags">--foldrange-lower</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">When computing evenness of coverage depth (E), count any bases with coverage OVER this value * the median nonzero coverage. In typical use-cases, this value will be the inverse of --foldrange-upper. The default is &#x27;0.5&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-foldrange_upper"><code class="parameter-flags">--foldrange-upper</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">When computing evenness of coverage depth (E), count any bases with coverage UNDER this value * the median nonzero coverage. In typical use-cases, this value will be the inverse of --foldrange-lower. The default is &#x27;2.0&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">2.0</code></span></dd>
<dt class="parameter" id="parameter-alpha"><code class="parameter-flags">--alpha</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How much to weight S over E in the DisCov score. Should be a value in the range [0,1]. The default is &#x27;0.5&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-discov_formula"><code class="parameter-flags">--discov-formula</code> <code class="parameter-metavar">STRING</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which formula to use when combining S and E into the DisCov score. Options are &#x27;linear&#x27; (DisCov = αS + (1-α)E) and &#x27;geometric&#x27; (DisCov = S^α * E^(1-α)). The default is &#x27;linear&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">linear</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [anvi-summarize in the metagenomic workflow tutorial](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-summarize)

* [anvi-summarize in the pangenomic workflow tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#summarizing-an-anvio-pan-genome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/summarize.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
