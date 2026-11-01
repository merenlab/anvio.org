---
layout: program
title: anvi-run-scg-taxonomy
excerpt: An anvi'o program. The purpose of this program is to affiliate single-copy core genes in an anvi&#x27;o contigs database with taxonomic names.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-scg-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---

The purpose of this program is to affiliate single-copy core genes in an anvi&#x27;o contigs database with taxonomic names. A properly setup local SCG taxonomy database is required for this program to perform properly. After its successful run, `anvi-estimate-scg-taxonomy` will be useful to estimate taxonomy at genome-, collection-, or metagenome-level).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/qclayssen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/qclayssen" target="_blank"><span class="anvio-person-name">Quentin Clayssen</span></a><div class="anvio-person-social-box"><a href="mailto:quentin.clayssen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ClayssenQ" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/qclayssen" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[scgs-taxonomy-db](../../artifacts/scgs-taxonomy-db) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[scgs-taxonomy](../../artifacts/scgs-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **associates the single-copy core genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with taxnomy information.**

Once this information is stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (in the form of a <span class="artifact-n">[scgs-taxonomy](/help/main/artifacts/scgs-taxonomy)</span> artifact), you can run <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> or use the <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> and enable "Realtime taxonomy estimate for bins." Check out [this tutorial](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/) for more information.

In order to run this program, you'll need a <span class="artifact-n">[scgs-taxonomy-db](/help/main/artifacts/scgs-taxonomy-db)</span>, which you can set up by running <span class="artifact-p">[anvi-setup-scg-taxonomy](/help/main/programs/anvi-setup-scg-taxonomy)</span>.

### What does this program do?

In short, this program searches all of the single-copy core genes that it uses for this workflow (which are the 22 listed on [this page](https://github.com/merenlab/anvio/tree/master/anvio/data/misc/SCG_TAXONOMY/GTDB/SCG_SEARCH_DATABASES)) against the [GTDB](https://gtdb.ecogenomic.org/) databases that you downloaded, and stores hits in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. In other words, it finds your single-copy core genes and assigns them taxonomy. This way, it can use these single-copy core genes later to estimate the taxnomy of larger groups of contigs that include these single-copy core genes when you run <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span>.

### Sweet. How do I run it?

<div class="codeblock" markdown="1">
anvi&#45;run&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

In case you're running this on a genome and not getting any hits, you have the option to try lowering the percent identity required for a hit (as long as you're careful with it). The default value is 90 percent.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;min&#45;percent&#45;identity 70
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-scg-taxonomy.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-scg-taxonomy`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-scg-taxonomy [-h] -c CONTIGS_DB [--scgs-taxonomy-data-dir PATH] [--min-percent-identity PERCENT_IDENTITY] [--max-num-target-sequences NUMBER] [-P NUM_PROCESSES] [-T NUM_THREADS] [--write-buffer-size INT] [--all-hits-output-file FILE_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-database">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT DATABASE</span> <span class="parameter-group-description">An anvi&#x27;o contigs databaes to search for and store the taxonomic affiliations of SCGs.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED STUFF</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-scgs_taxonomy_data_dir"><code class="parameter-flags">--scgs-taxonomy-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory for SCGs data to be stored (or read from, depending on the context). If you leave it as is without specifying anything, anvi&#x27;o will set up everything in (or try to read things from) a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your databases. If you are using a program (such as `anvi-run-scg-taxonomy` or `anvi-estimate-scg-taxonomy`) you will have to use this parameter to tell those programs where your data are.</span></dd>
<dt class="parameter" id="parameter-min_percent_identity"><code class="parameter-flags">--min-percent-identity</code> <code class="parameter-metavar">PERCENT_IDENTITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">The defualt value for this is 90.0%, and in an ideal world you sholdn&#x27;t really change it. Lowering this value will probably give you too many hits from neighboring genomes, which may ruin your consensus taxonomy (imagine, at 90% identity you may match to a single species, but at 70% identity you may match to every species in a genus and your consensus assignment may be influenced by that). But once in a while you will have a genome that doesn&#x27;t have any close match in GTDB, and you will be curious to find out what it could be. So, when you are getting no SCG hits whatsoever, only then you may want to play with this value. In those cases you can run anvi-estimate-scg-taxonomy with a `--debug` flag to see what is really going on. We strongly advice you to do this only with single genomes, and never with metagenomes.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">90</code></span></dd>
<dt class="parameter" id="parameter-max_num_target_sequences"><code class="parameter-flags">--max-num-target-sequences</code> <code class="parameter-metavar">NUMBER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter is used to determine how many hits from the database that has a reasonable match to the query sequence should be taken into consideration to make a final decision about the consensus taxonomy for each individual single-copy core gene sequence. The default is 20, which has been quite reasonable in our tests, however, you may need to increase this number to get more accurate results for your own data. In cases where you think this is what you need, the best way to test the parameter space for `--max-num-target-sequences` is to run the program multiple times on the same database with `--debug` and compare results.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">20</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_parallel_processes"><code class="parameter-flags">-P, --num-parallel-processes</code> <code class="parameter-metavar">NUM_PROCESSES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of processes to run in parallel. Please note that this is different than number of threads. If you ask for 4 parallel processes, and 5 threads, anvi&#x27;o will run four processes in parallel and assign 5 threads to each. For resource allocation you must multiply the number of processes and threads.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-write_buffer_size"><code class="parameter-flags">--write-buffer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many items should be kept in memory before they are written to the disk. The default is 5000. The larger the buffer size, the less frequently the program will access the disk, yet the more memory will be consumed since the processed items will be cleared off the memory only after they are written to the disk. The default buffer size will likely work for most cases, but if you feel you need to reduce it, we trust you. Please keep an eye on the memory usage output to make sure the memory use never exceeds the size of the physical memory.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">5000</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">By default, this program does not generate an output and instead simply store taxonomy information into the contigs database. But if the user wants more, they get more.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-all_hits_output_file"><code class="parameter-flags">--all-hits-output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">If this flag is declared, anvi&#x27;o will store a comprehensive list of hits that led to the determination of the consensus hit per sequence (which is the only piece of information that is stored in the contigs database).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Usage examples and warnings](http://merenlab.org/scg-taxonomy)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_scg_taxonomy.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
