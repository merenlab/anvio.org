---
layout: program
title: anvi-gen-genomes-storage
excerpt: An anvi'o program. Create a genome storage from internal and/or external genomes for a pangenome analysis.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-genomes-storage
image:
  featurerelative: ../../../images/header.png
  display: true
---

Create a genome storage from internal and/or external genomes for a pangenome analysis.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **generates a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, which stores information about your genomes, primarily for use in pangenomic analysis.**

Genomes storage databases are to Anvi'o's pangenomic workflow what a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> is to a metagenomic workflow: it stores vital information and is passed to most programs you'll want to run.

Once you've generated a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, you can run <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span>, which creates a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and runs various pangenomic analyses (including calculating the similarities between your sequences, identifying gene clusters, and organizing your gene clusters and genomes). After that, you can display your pangenome with <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span> For more information, check out [the pangenomic workflow](http://merenlab.org/2016/11/08/pangenomics-v2/#generating-an-anvio-genomes-storage).

### Inputs: internal and external genomes

You can initialize your genomes storage database with <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, or both.

<span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> describe genomes that are described by a <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> within a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> that is already within an Anvi'o <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. For example, if you had gone through [the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/) and had several MAGs that you wanted to run pangenomic analyses on.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;genomes&#45;storage &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                         &#45;o <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span>
</div>

{:.notice}
The name of your genomes storage database (which follows the `-o` flag) must end with `-GENOMES.db`. This just helps differenciate it from other types of Anvi'o databases, such as the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.

In contrast, <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> describe genomes that are contained in a <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file that you've turned into a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (using <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span>).  For example, if you had downloaded genomes from [NCBI](https://www.ncbi.nlm.nih.gov/).

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;genomes&#45;storage &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;o <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span>
</div>

You can also create a genomes storage database from both types of genomes at the same time. For example, if you had MAGs from a metagenomic analysis on an environmental sample and wanted to compare them with the reference genomes on [NCBI](https://www.ncbi.nlm.nih.gov/). To run this, simply provide both types of genomes as parameters, as so:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;genomes&#45;storage &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                         &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;o <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span>
</div>

### Changing the gene caller

By default, Anvi'o will use [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) (based on [Prodigal](https://github.com/hyattpd/Prodigal) and will let you know if you have gene calls identified by other gene callers. However, you are welcome to explicitly use a specific gene caller with the flag `--gene-caller`.

If you're wondering what gene callers are available in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, you can check by running the program <span class="artifact-p">[anvi-export-gene-calls](/help/main/programs/anvi-export-gene-calls)</span> on a specific <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with the flag `--list-gene-callers`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-genomes-storage.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-genomes-storage`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-genomes-storage [-h] [-e FILE_PATH] [-i FILE_PATH] [--gene-caller GENE-CALLER] [--skip-checking-genome-hashes] -o GENOMES_STORAGE</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-external-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">EXTERNAL GENOMES</span> <span class="parameter-group-description">External genomes listed as anvi&#x27;o contigs databases. As in, you have one or more genomes say from NCBI you want to work with, and you created an anvi&#x27;o contigs database for each one of them.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-internal-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">INTERNAL GENOMES</span> <span class="parameter-group-description">Genome bins stored in an anvi&#x27;o profile databases as collections.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pro-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">PRO STUFF</span> <span class="parameter-group-description">Things you may not have to change. But you never know (unless you read the help).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller"><code class="parameter-flags">--gene-caller</code> <code class="parameter-metavar">GENE-CALLER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The gene caller to utilize. Anvi&#x27;o supports multiple gene callers, and some operations (including this one) may require an explicit mentioning of which one to use. The default gene caller is identified automatically in most cases (based on whether the most frequent gene calls match to a known gene caller in anvi&#x27;o), but if you have a contigs-db generated with `--external-gene-callers` or something, you may have to pay extra attention here. Also, some HMM collections may add new gene calls into a given contigs-db as an ad-hoc fashion, so if you want to see all the options available to you in a given contigs database, please run the program `anvi-db-info` and take a look at the output.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Give it a nice name. Must end with &#x27;-GENOMES.db&#x27;. This is primarily due to the fact that there are other .db files used throughout anvi&#x27;o and it would be better to distinguish this very special file from them.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">GENOMES_STORAGE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A tutorial on pangenomics](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_genomes_storage.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
