---
layout: program
title: anvi-run-ncbi-cogs
excerpt: An anvi'o program. This program runs NCBI&#x27;s COGs to associate genes in an anvi&#x27;o contigs database with functions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-ncbi-cogs
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program runs NCBI&#x27;s COGs to associate genes in an anvi&#x27;o contigs database with functions. This program can also run NCBI&#x27;s COGs to annotate an amino acid sequence with function. COGs database was been designed as an attempt to classify proteins from completely sequenced genomes on the basis of the orthology concept..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ge0rges.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ge0rges" target="_blank"><span class="anvio-person-name">Georges Kanaan (Gio)</span></a><div class="anvio-person-social-box"><a href="https://gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:georges@gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ge0rges" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[cogs-data](../../artifacts/cogs-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[functions-txt](../../artifacts/functions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **annotates genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions using NCBI's [Clusters of Orthologus Groups (COGs) database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/).**

This program assumes that the user has successfully set up the COGs database on their computer using the anvi'o program <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span>.

This program requires one of two possible inputs a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or a <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file of amino acid sequences. When a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> is provided, the program will store its output in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as a <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> artifact. Otherwise you must specify an output file path using `-o`, to which the program will write a TAB-delimited file containing all the annotatons found in the input <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file.

If the <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> was stored at a specific path when <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span> was run, then providing that path using the `--cog-data-dir` parameter is also necessary.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;cog&#45;data&#45;dir path/to/<span class="artifact&#45;n">[cogs&#45;data](/help/main/artifacts/cogs&#45;data)</span>
</div>

Without the flag `--cog-data-dir`, anvi'o will just search in the default location.

### Choosing a different database version
If you want to annotate your genes with a non-default version of <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span>, provide that version after the `--cog-version` parameter:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;cog&#45;version COG24
</div>

### Choosing a different search program
By default, this program uses `diamond` to search for hits to the database. You can also use `blastp`` to search, by running:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;search&#45;with blastp
</div>

### Running with multiple threads
<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;cog&#45;data&#45;dir path/to/<span class="artifact&#45;n">[cogs&#45;data](/help/main/artifacts/cogs&#45;data)</span> \
            &#45;T 16
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-ncbi-cogs.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-ncbi-cogs`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-ncbi-cogs [-h] [-c CONTIGS_DB] [-f FASTA file] [-o FILE_PATH] [--cog-version COG_VERSION] [--cog-data-dir COG_DATA_DIR] [-T NUM_THREADS] [--temporary-dir-path PATH] [--search-with SEARCH_METHOD]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-1-annotation-of-contigs-db">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT #1 - ANNOTATION OF CONTIGS DB</span> <span class="parameter-group-description">One type of input this function can annotate is a contigs database. In this case anvi&#x27;o will attempt to annotate every gene present.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-2-annotation-of-fasta-file">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT #2 - ANNOTATION OF FASTA FILE</span> <span class="parameter-group-description">Another type of input this function can annotate is a FASTA file containing one or more amino acid sequences. In this case each gene sequence will be annotated and the functions will be reported as TAB-delimited output. In this mode you should specify an output file.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A FASTA formatted input file containing protein sequences.</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-general-options">
<header class="parameter-group-header"><span class="parameter-group-title">GENERAL OPTIONS</span> <span class="parameter-group-description">These are general options which apply to both input modes.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-cog_version"><code class="parameter-flags">--cog-version</code> <code class="parameter-metavar">COG_VERSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">COG version. The default is the latest version, which is COG24, meaning that anvi&#x27;o will use the NCBI&#x27;s 2024 release of COGs to setup the database and run it on contigs databases. Alternatively you can pass any of these as a parameter: &#x27;COG20&#x27; (2020 release of the database), or &#x27;COG14&#x27; (the 2014 release of the database). You can have multiple databases on your computer, and you can run multiple of them on a single contigs-db file. Cool and confusing. The anvi&#x27;o way.</span></dd>
<dt class="parameter" id="parameter-cog_data_dir"><code class="parameter-flags">--cog-data-dir</code> <code class="parameter-metavar">COG_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory path for your COG setup. Anvi&#x27;o will try to use the default path if you do not specify anything.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-temporary_dir_path"><code class="parameter-flags">--temporary-dir-path</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you don&#x27;t provide anything here, this program will come up with a temporary directory path by itself to store intermediate files, and clean it later. If you want to have full control over this, you can use this flag to define one.</span></dd>
<dt class="parameter" id="parameter-search_with"><code class="parameter-flags">--search-with</code> <code class="parameter-metavar">SEARCH_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">What program to use for database searching. The default search uses diamond. All available options include: diamond, blastp.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">diamond</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_ncbi_cogs.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
