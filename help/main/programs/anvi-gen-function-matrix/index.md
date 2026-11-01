---
layout: program
title: anvi-gen-function-matrix
excerpt: An anvi'o program. A program to generate reports for the distribution of functions across genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-function-matrix
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to generate reports for the distribution of functions across genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-jessika.jpg" /></div><div class="anvio-person-info-box"><a href="/people/jessika-fuessel" target="_blank"><span class="anvio-person-name">Jessika Fuessel</span></a><div class="anvio-person-social-box"><a href="mailto:ju.fuessel@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FuesselJessika" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/jessika-fuessel" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions-across-genomes-txt](../../artifacts/functions-across-genomes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


Generates TAB-delmited output files for <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> from a single function annotation source across all <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files it receives.

{:.notice}
For a simlar program that reports HMM hits instead, see <span class="artifact-p">[anvi-gen-hmm-hits-matrix](/help/main/programs/anvi-gen-hmm-hits-matrix)</span>.

The input genomes, metagenomes, or loci for this program can be provided through an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, or any combination of these sources.

This program is very similar to <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span>, and can also perform a functional enrichment analysis on-the-fly if you provide it with an optional <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file. But unlike, <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span>, this program will report TAB-delmited output files for you to further analyze.

{:.notice}
You can always learn about which functions are in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> using the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>.

You can run the program on a set of <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files with a specific source of function annotation:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                         &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES
</div>

The command above will result in two files in your work directory (`MY-GENOMES-FREQUENCY.txt` and `MY-GENOMES-PRESENCE-ABSENCE.txt`) of type <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span>.

In each of these files, the first few columns will describe functions (with a unique `key`, the full function name, and optionally the function accession ID), and the remaining columns will hold one value per genome.

These files will report raw frequency and presence/absence of functions across <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files that you can use for downstream analyses.

## Per-population copy number normalization for metagenomic assemblies

If you want to get an idea of differences in functional capacity across different metagenomic assemblies, but if you do not have MAGs from these assemblies or if you wish to make use of a larger fraction of the sequence data and not only only those reads that are used to reconstruct genomes, looking at the raw frequencies or raw presence/absence data becomes less effective for any downstream analysis as almost all functions and metabolic modules known will likely occur in at least in one population in a given metagenome. Although, normalizing the raw frequencies based on the estimated number of populations in a given environment would make such comparisons across metagenomes much more effective.

Anvi'o includes a means to estimate the number of populations observed in a given assembly using single-copy core genes, which is used in <span class="artifact-p">[anvi-display-contigs-stats](/help/main/programs/anvi-display-contigs-stats)</span>, and Veseli et al. has previously demonstrated its utility by predicting [per-population copy number](https://doi.org/10.7554/eLife.89862) of metabolic modules observed across samples.

<span class="artifact-p">[anvi-gen-function-matrix](/help/main/programs/anvi-gen-function-matrix)</span> makes the same principle accessible with for functions via the flag `--add-per-population-copy-number`, which produces an additional output file with normalized copy numbers of the frequency of functions across samples:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                         &#45;&#45;output&#45;file&#45;prefix MY&#45;METAGENOMES \
                         &#45;&#45;add&#45;per&#45;population&#45;copy&#45;number
</div>

Adding the flag generates an additional output file, `MY-METAGENOMES-PER-POPULATION-COPY-NUMBER.txt`, of type <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span>.

By dividing the frequency of each function in a given metagenomic assembly by the number of populations estimated to be present in that same assembly based on counts of single-copy core genes (SCGs) in each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>: for each domain-specific SCG set, anvi'o takes the mode of the number of hits across all SCGs, and sums these per-domain estimates across Bacteria, Archaea, and Eukarya.

The script relies on SCG annotations generated by <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span>, and you need an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file to let it know which assemblies to compare.

A per-population copy number is an *average number of copies of a function per population*: a value near 1 means the function tends to occur once in every population, a value below 1 means it is present in only a fraction of the populations, and a value above 1 means it tends to occur in multiple copies per population (as is common for, e.g., transposases). If a given metagenome has single-copy core genes that are too sparse to yield a reliable estimate, anvi'o cannot compute its number of populations, and the per-population copy number values for that assembly will be reported as `NA`.

Alternatively, you can run it with a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> that associates sets of genomes with distinct groups,

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                         &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                         &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES \
                         &#45;&#45;groups&#45;txt groups.txt
</div>

which would generate an additional file in your work directory, `MY-GENOMES-FUNCTIONAL-ENRICHMENT.txt`, of type <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-function-matrix.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-function-matrix`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-function-matrix [-h] [-i FILE_PATH] [-e FILE_PATH] [-g GENOMES_STORAGE] [-G TEXT_FILE] [--print-genome-names-and-quit] --annotation-source FUNCTION_ANNOTATION_SOURCE [--aggregate-based-on-accession] [--aggregate-using-all-hits] [--also-report-accession-ids] [--min-occurrence NUM GENOMES] [--add-per-population-copy-number] [--gene-caller GENE-CALLER] [--skip-checking-genome-hashes] -O FILENAME_PREFIX</div>
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
<section class="parameter-group parameter-group-groups">
<header class="parameter-group-header"><span class="parameter-group-title">GROUPS</span> <span class="parameter-group-description">If you want, you can also tell anvi&#x27;o how to group your genomes so it can also compute functional enrichment between them.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-groups_txt"><code class="parameter-flags">-G, --groups-txt</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited text file specifying which group each item belongs to. Depending on the context, items here may be individual samples or genomes. The first column must contain item names matching to those that are in your input data. A different column should have the header &#x27;group&#x27; and contain the group name for each item. Each item should be associated with a single group. It is always a good idea to define groups using single words without any fancy characters. For instance, `HIGH_TEMPERATURE` or `LOW_FITNESS` are good group names. `my group #1` or `IS-THIS-OK?`, are not good group names.</span></dd>
<dt class="parameter parameter-switch" id="parameter-print_genome_names_and_quit"><code class="parameter-flags">--print-genome-names-and-quit</code></dt>
<dd class="parameter-details"><span class="parameter-help">Sometimes, especially when you are interested in creating a groups file for your genomes you gather from multiple different sources, it may be difficult to know every single genome name that will go into your analysis. If you declare this flag, after initializing everything, anvi&#x27;o will print out every genome name it found and quit, so you can actually put together a groups file for them.</span></dd>
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
<dt class="parameter parameter-switch" id="parameter-also_report_accession_ids"><code class="parameter-flags">--also-report-accession-ids</code></dt>
<dd class="parameter-details"><span class="parameter-help">When used, this flag will instruct anvi&#x27;o to also report the function accession ids in a new column, in addition to function name in the output file.</span></dd>
<dt class="parameter" id="parameter-min_occurrence"><code class="parameter-flags">--min-occurrence</code> <code class="parameter-metavar">NUM GENOMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum number of occurrence of any given function accross genomes. If you set a value, those functions that occur in less number of genomes will be excluded.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-per-population-copy-number">
<header class="parameter-group-header"><span class="parameter-group-title">PER-POPULATION COPY NUMBER</span> <span class="parameter-group-description">If you are working with metagenomic assemblies, the raw frequency of a function will scale with the number of populations in each assembly, which makes it difficult to compare functions across samples of different community sizes. If you are simply looking at presence/absence, mostly everything will be present everywhere when looking at metagenomic assemblies as a whole. To account for this, anvi&#x27;o can report an additional matrix in which function frequencies are normalized by the estimated number of populations in each metagenome (an approach known as per-population copy number, or PPCN).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-add_per_population_copy_number"><code class="parameter-flags">--add-per-population-copy-number</code></dt>
<dd class="parameter-details"><span class="parameter-help">Request an additional output matrix that reports the per-population copy number (PPCN) of each function in every metagenomic assembly (or long-read metagenome). anvi&#x27;o divides the frequency of a function in a given assembly by the number of populations estimated to be present in that same assembly (estimated from single-copy core genes: the mode of the number of hits to the single-copy core genes of each domain, summed across Bacteria, Archaea, and Eukarya, just like `anvi-display-contigs-stats` does). This normalization is useful for metagenomic assemblies, where the raw frequency of a function scales with the number of populations in the assembly and is therefore not comparable across samples of vastly different community sizes. It follows the per-population copy number normalization introduced by Iva Veseli (Veseli et al. 2025). It requires that your contigs databases have been annotated with single-copy core genes via `anvi-run-hmms`, and it works only with an external-genomes file (`-e`), since population normalization is meaningful for whole metagenomic assemblies but not for individual genomes or a genomes storage database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes">
<header class="parameter-group-header"><span class="parameter-group-title">GENES</span> <span class="parameter-group-description">By default, anvi&#x27;o will look for genes in contigs databases that are identified by `pyrodigal-gv`. But if you have generated your contigs databse with external gene calls, or have otherwise used another gene caller than the default, you can explicitly ask anvi&#x27;o to use that one to recover your genes.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller"><code class="parameter-flags">--gene-caller</code> <code class="parameter-metavar">GENE-CALLER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The gene caller to utilize. Anvi&#x27;o supports multiple gene callers, and some operations (including this one) may require an explicit mentioning of which one to use. The default gene caller is identified automatically in most cases (based on whether the most frequent gene calls match to a known gene caller in anvi&#x27;o), but if you have a contigs-db generated with `--external-gene-callers` or something, you may have to pay extra attention here. Also, some HMM collections may add new gene calls into a given contigs-db as an ad-hoc fashion, so if you want to see all the options available to you in a given contigs database, please run the program `anvi-db-info` and take a look at the output.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED</span> <span class="parameter-group-description">Kinds of parameters that you should use at your own risk.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Provide a &#x27;prefix&#x27; for anvi&#x27;o to add to the beginning of the output files anvi&#x27;o will generate for you.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_function_matrix.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
