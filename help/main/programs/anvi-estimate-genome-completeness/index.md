---
layout: program
title: anvi-estimate-genome-completeness
excerpt: An anvi'o program. Estimate completion and redundancy using domain-specific single-copy core genes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-estimate-genome-completeness
image:
  featurerelative: ../../../images/header.png
  display: true
---

Estimate completion and redundancy using domain-specific single-copy core genes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[completion](../../artifacts/completion) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program estimates the completeness and redundancy of genomes provided to it, based on domain-level single-copy core genes.

{:.notice}
Wondering what single-copy core genes anvi'o uses? Check out <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>. It uses the tables populated when you ran <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span> on your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

Genomes provided to this program must be contained in either a <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> (within a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>) or a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (which can be provided alone or as part of an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>).

### Running on contigs databases

For example, calling

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;genome&#45;completeness &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

will output to the terminal the completition and redundancy of the single-copy core genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, assuming that all of its contigs represent a single genome. To output this information to a file, you can add the flag `-o` and provide an output path.

To get this information for several contigs databases at once, you can provide them as an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, as so:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;genome&#45;completeness &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                  &#45;o completition.txt
</div>

### Running on bins

To get this data for a series of bins, just provide a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>.

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;genome&#45;completeness &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                  &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

To see what collections are contained in your contigs database, call

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;genome&#45;completeness &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                  &#45;&#45;list&#45;collections
</div>

or run <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span> for a more comprehensive overview.

If you're looking for a more comprehensive overview of your entire collection and its contents, the completition and redunduncy statistics for your bins are also included when you run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-estimate-genome-completeness.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-estimate-genome-completeness`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-estimate-genome-completeness [-h] [-c CONTIGS_DB] [-e FILE_PATH] [-i FILE_PATH] [-p PROFILE_DB] [-C COLLECTION_NAME] [--list-collections] [--report-all-estimates] [--just-do-it] [--concise] [-o FILE_PATH] [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory-input-option-1">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY INPUT OPTION #1</span> <span class="parameter-group-description">Minimum input is an anvi&#x27;o contigs database. If you provide nothing else, anvi&#x27;o will assume that it is a single genome (even if it is not), and give you back what you need.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-mandatory-input-option-2">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY INPUT OPTION #2</span> <span class="parameter-group-description">Or you can initiate this with an external genomes file.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-additional-input-optional">
<header class="parameter-group-header"><span class="parameter-group-title">ADDITIONAL INPUT (OPTIONAL)</span> <span class="parameter-group-description">You can also give this program an anvi&#x27;o profile database along with a collection name. In which case anvi&#x27;o will estimate the completion and redundancy of every bin in this collection. Fun.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-parameters-of-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">PARAMETERS OF CONVENIENCE</span> <span class="parameter-group-description">Because life is already very hard as it is.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-report_all_estimates"><code class="parameter-flags">--report-all-estimates</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to report all C/R estimates, from all domains.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-switch" id="parameter-concise"><code class="parameter-flags">--concise</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t be verbose, print less messages whenever possible.</span></dd>
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
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/estimate_genome_completeness.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
