---
layout: program
title: anvi-run-hmms
excerpt: An anvi'o program. This program deals with populating tables that store HMM hits in an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-hmms
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program deals with populating tables that store HMM hits in an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


Stores <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> for a given <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. In short, this is the program that will do a search for HMMs against a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and store that information into the contigs-db's <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>.

This is one of the programs that users commonly run on newly generated <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, along with <span class="artifact-p">[anvi-scan-trnas](/help/main/programs/anvi-scan-trnas)</span>, <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span>, <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span>, and so on.

### HMMs in the context of anvi'o

In a nutshell, [hidden Markov models](https://en.wikipedia.org/wiki/Hidden_Markov_model) are statistical models typically generated from known genes which enable 'searching' for similar genes in other sequence contexts.

The default anvi'o distribution includes numerous [curated HMM profiles](https://github.com/merenlab/anvio/tree/master/anvio/data/hmm) for single-copy core genes and ribosomal RNAs, and anvi'o can work with custom HMM profiles provided by the user. In anvi'o lingo, each of these HMM profiles, whether they are built-in or user defined, is called an <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>.

### Default Usage

To run this program with all default settings (against all default anvi'o <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>), you only need to provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

Multithreading will dramatically improve the performance of `anvi-run-hmms`. If you have multiple CPUs or cores, you may parallelize your search:


<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;&#45;num&#45;threads 6
</div>


You can also run this program on a specific built-in <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71
</div>

### User-defined HMMs

Running `anvi-run-hmms` with a custom model is easy. All you need to do is to create a directory with necessary files:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;H MY_HMM_PROFILE
</div>

See the relevant section in the artifact <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> for details.

### Adding HMM hits as a functional annotation source

By default, HMM hits are not considered functional annotations and are kept in a distinct table (the 'hmm_hits' table) in the contigs database. However, there are certain cases when you may want them to be considered as functions instead. For instance, if you want to run <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> on a set of user-defined metabolic pathways and you have a set of custom HMMs for their enzymes.

To treat the HMM hits as functional annotations and add them to the 'gene_functions' table in your database, you must use the `--add-to-functions-table` flag:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;H MY_HMM_PROFILE \
              &#45;&#45;add&#45;to&#45;functions&#45;table
</div>

{:.warning}
If you want to use this flag with custom <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s, then please make sure you include `ACC` lines specifying the accession number of each model in your `.hmm` file. If these lines are not included, then the HMMER software won't know the accession numbers of your models and we won't be able to add those accessions to your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, which might cause you some headaches later. We've recently added a sanity check for these `ACC` lines to help you remember to add them in, but if you are working with older versions of anvi'o, this message is here for you instead.

### Changing the HMMER program

By default, `anvi-run-hmms` will use [HMMER](http://hmmer.org/)'s `hmmscan` for amino acid HMM profiles, but you can use `hmmsearch` if you are searching a very large number of models against a relatively smaller number of sequences:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;&#45;hmmer&#45;program hmmsearch
</div>

{:.notice}
This flag has no effect when your HMM profile source is for nucleotide sequences (like any of the Ribosomal RNA sources). In those cases anvi'o will use `nhmmscan` exclusively.

### Saving the HMMER output

If you want to see the output from the HMMER program (eg, `hmmscan`) used to annotate your data, you can request that it be saved in a directory of your choosing. Please note that this only works when you are running on a single HMM source, as in the example below:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71 \
              &#45;&#45;hmmer&#45;output&#45;dir OUTPUT_DIR
</div>

If you do this, file(s) with the prefix `hmm` will appear in that directory, with the file extension indicating the format of the output file. For example, the table output format would be called `hmm.table`.

{:.warning}
These resulting files are not _exactly_ the raw output of HMMER because anvi'o does quite a bit of pre-processing on the raw input and output file(s) while jumping through some hoops to make the HMM searches multi-threaded. If this is causing you a lot of headache, please let us know.

#### Requesting domain table output

{:.notice}
Please also see <span class="artifact-p">[anvi-script-filter-hmm-hits-table](/help/main/programs/anvi-script-filter-hmm-hits-table)</span>

No matter what, anvi'o will use the regular table output to annotate your contigs database. However, if you are using the `--hmmer-output-dir` to store the HMMER output, you can also request a domain table output using the flag `--domain-hits-table`.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71 \
              &#45;&#45;hmmer&#45;output&#45;dir OUTPUT_DIR \
              &#45;&#45;domain&#45;hits&#45;table
</div>

In this case anvi'o will run [HMMER](http://hmmer.org) using the `--domtblout` flag to generate this output file.

{:.notice}
This flag will only work with HMM profiles made for amino acid sequences. Profiles for nucleotide sequences require the use of the program `nhmmscan`, which does not have an option to store domain output.

Please note that this output **won't be used to filter hits to be added to the contigs database**. But it will give you the necessary output file to investigate the coverage of HMM hits. But you can use the program <span class="artifact-p">[anvi-script-filter-hmm-hits-table](/help/main/programs/anvi-script-filter-hmm-hits-table)</span> with this file to remove weak hits from your HMM hits table later.


### Other things anvi-run-hmms can do

* Add the tag `--also-scan-trnas` to basically run <span class="artifact-p">[anvi-scan-trnas](/help/main/programs/anvi-scan-trnas)</span> for you at the same time. It's very convenient. (But it only works if you are not using the `-I` or `-H` flags at the same time because reasons.)
* Discover extra HMMs shipped with anvi'o but not run by default with `--list-miscellaneous-models`. This prints categories, descriptions, and the full paths to these models so you can copy-paste one into `-H` when you want to run it.
* Prefer keywords instead of full paths for those extra models using `--miscellaneous-model`, or `-M`, which accepts model name as a parameter:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;M DNA_Polymerase_Type_B
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-hmms.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-hmms`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-hmms [-h] [-c CONTIGS_DB] [-H HMM PROFILE PATH] [-M CATEGORY:MODEL] [-I HMM PROFILE NAME(S)] [--hmmer-output-dir OUTPUT DIRECTORY PATH] [--domain-hits-table] [--list-miscellaneous-models] [--also-scan-trnas] [-T NUM_THREADS] [--hmmer-program HMMER_PROGRAM] [--add-to-functions-table] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-db">
<header class="parameter-group-header"><span class="parameter-group-title">DB</span> <span class="parameter-group-description">An anvi&#x27;o contigs database to populate with HMM hits</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-hmm-options">
<header class="parameter-group-header"><span class="parameter-group-title">HMM OPTIONS</span> <span class="parameter-group-description">If you have your own HMMs, or if you would like to run only a set of default anvi&#x27;o HMM profiles rather than running them all, this is your stop.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-hmm_profile_dir"><code class="parameter-flags">-H, --hmm-profile-dir</code> <code class="parameter-metavar">HMM PROFILE PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">You can use this parameter you can specify a directory path that contain an HMM profile. This way you can run HMM profiles that are not included in anvi&#x27;o. See the online to find out about the specifics of this directory structure .</span></dd>
<dt class="parameter" id="parameter-miscellaneous_model"><code class="parameter-flags">-M, --miscellaneous-model</code> <code class="parameter-metavar">CATEGORY:MODEL</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use a miscellaneous HMM model installed with anvi&#x27;o by its key. See &#x27;--list-miscellaneous-models&#x27; for available options.</span></dd>
<dt class="parameter" id="parameter-installed_hmm_profile"><code class="parameter-flags">-I, --installed-hmm-profile</code> <code class="parameter-metavar">HMM PROFILE NAME(S)</code></dt>
<dd class="parameter-details"><span class="parameter-help">When you run this program without any parameter, it will run all 5 HMM profiles installed on your system. Using this parameter, you can instruct anvi&#x27;o to run only one or more of the specific profiles of you choose. You can provide a comma-separated list of names for multiple profiles (but in that case don&#x27;t put a space between each profile name). Here is the list of installed profiles available to you: &#x27;Ribosomal_RNA_18S&#x27; (type: Ribosomal_RNA_18S); &#x27;Ribosomal_RNA_16S&#x27; (type: Ribosomal_RNA_16S); &#x27;Bacteria_71&#x27; (type: singlecopy); &#x27;Protista_83&#x27; (type: singlecopy); &#x27;Archaea_76&#x27; (type: singlecopy).</span></dd>
<dt class="parameter" id="parameter-hmmer_output_dir"><code class="parameter-flags">--hmmer-output-dir</code> <code class="parameter-metavar">OUTPUT DIRECTORY PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you provide a path with this parameter, then the HMMER output file(s) will be saved in this directory. Please note that this will only work if you are running on only one profile using the -I flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-domain_hits_table"><code class="parameter-flags">--domain-hits-table</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag in conjunction with --hmmer-output-dir to request domain table output from HMMER (i.e., the file specified by the --domtblout flag from hmmsearch or hmmscan). Otherwise, only the regular --tblout file will be stored in the specified directory. Please note that even if you use this flag, the HMM hits stored in the database will be taken from the --tblout file only. Also, this option only works with HMM profiles for amino acid sequences (not nucleotides).</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_miscellaneous_models"><code class="parameter-flags">--list-miscellaneous-models</code></dt>
<dd class="parameter-details"><span class="parameter-help">List the miscellaneous HMM profiles that are shipped with anvi&#x27;o but not run by default, including their categories, notes, and full paths to use with &#x27;-H&#x27;.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-trnas">
<header class="parameter-group-header"><span class="parameter-group-title">tRNAs</span> <span class="parameter-group-description">Through this program you can also scan Transfer RNA sequences in your contigs database for free (instead of running `anvi-scan-trnas` later).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-also_scan_trnas"><code class="parameter-flags">--also-scan-trnas</code></dt>
<dd class="parameter-details"><span class="parameter-help">Also scan tRNAs while you&#x27;re at it.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span> <span class="parameter-group-description">Stuff everyone forgets to set and then get upset with how slow science goes.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-hmmer_program"><code class="parameter-flags">--hmmer-program</code> <code class="parameter-metavar">HMMER_PROGRAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which of the HMMER programs to use to run HMMs (hmmscan or hmmsearch). By default anvi&#x27;o will use hmmscan for typical HMM operations like those in anvi-run-hmms (as these tend to scan a very large number of genes against a relatively small number of HMMs), but if you are using this program to scan a very large number of HMMs, hmmsearch might be a better choice for performance. For this reason, hmmsearch is the default in operations like anvi-run-pfams and anvi-run-kegg-kofams. See this article for a discussion on the performance of these two programs: http://cryptogenomicon.org/hmmscan-vs-hmmsearch-speed-the-numerology.html</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-authority">
<header class="parameter-group-header"><span class="parameter-group-title">AUTHORITY</span> <span class="parameter-group-description">Because you are the boss.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-add_to_functions_table"><code class="parameter-flags">--add-to-functions-table</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you want anvi&#x27;o to store your HMM hits as gene annotations in the &#x27;gene_functions&#x27;table of the database, rather than in the &#x27;hmm_hits&#x27; table.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Another description as part of the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-profile)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_hmms.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
