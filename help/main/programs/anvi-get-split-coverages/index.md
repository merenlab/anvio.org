---
layout: program
title: anvi-get-split-coverages
excerpt: An anvi'o program. Export splits and the coverage table from database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-split-coverages
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export splits and the coverage table from database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[coverages-txt](../../artifacts/coverages-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program returns the nucleotide-level coverage data for a specific set of the splits or gene in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.

If you want to get the coverage data for all splits in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, run <span class="artifact-p">[anvi-export-splits-and-coverages](/help/main/programs/anvi-export-splits-and-coverages)</span> with the flag `--splits-mode`.

Simply provide a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> pair and specify which splits, or gene, you want to look at. You have three ways to do this:

1.  Provide a single split name. (You can list all splits available with `--list-splits`)

<div class="codeblock" markdown="1">
anvi&#45;get&#45;split&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                         &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                         &#45;o <span class="artifact&#45;n">[coverages&#45;txt](/help/main/artifacts/coverages&#45;txt)</span> \
                         &#45;&#45;split&#45;name Day17a_QCcontig9_split_00003
</div>


2. Provide both the name of a <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> and the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> it is contained in.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;split&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                         &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                         &#45;o <span class="artifact&#45;n">[coverages&#45;txt](/help/main/artifacts/coverages&#45;txt)</span> \
                         &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                         &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

You can list all collections available with `--list-collections` or all bins in a collection with `--list-bins`. Alternatively, you could run <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span> on your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> to get a more comprehensive overview.

3. Provide a gene caller id and a flanking size (bp).

<div class="codeblock" markdown="1">
anvi&#45;get&#45;split&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                         &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                         &#45;o <span class="artifact&#45;n">[coverages&#45;txt](/help/main/artifacts/coverages&#45;txt)</span> \
                         &#45;&#45;gene&#45;caller&#45;id 25961 \
                         &#45;&#45;flank&#45;length 500
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-split-coverages.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-split-coverages`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-split-coverages [-h] -p PROFILE_DB [-c CONTIGS_DB] [--split-name SPLIT_NAME] [--contig-name CONTIG_NAME] [-C COLLECTION_NAME] [-b BIN_NAME] [--gene-caller-id GENE_CALLER_ID] [--flank-length INT] [-o FILE_PATH] [--list-splits] [--list-collections] [--list-bins]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-essential-anvio-dbs">
<header class="parameter-group-header"><span class="parameter-group-title">ESSENTIAL ANVI&#x27;O DBs</span> <span class="parameter-group-description">You need to provide a profile database, but whether you will need to provide a contigs database will depend on which input option you want to go with.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-1-split-or-contig-name">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #1: SPLIT or CONTIG NAME</span> <span class="parameter-group-description">You want nothing but the coverage values in a single split .. or a contig. FINE.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-split_name"><code class="parameter-flags">--split-name</code> <code class="parameter-metavar">SPLIT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Split name.</span></dd>
<dt class="parameter" id="parameter-contig_name"><code class="parameter-flags">--contig-name</code> <code class="parameter-metavar">CONTIG_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Contig name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-2-collection-bin">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #2: COLLECTION + BIN</span> <span class="parameter-group-description">You want nucletide-level coverage values for all splits in a bin. FANCY.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-3-gene-call">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #3: GENE CALL</span> <span class="parameter-group-description">You want nucletide-level coverage values for a given gene call. PRO.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_id"><code class="parameter-flags">--gene-caller-id</code> <code class="parameter-metavar">GENE_CALLER_ID</code></dt>
<dd class="parameter-details"><span class="parameter-help">A single gene id.</span></dd>
<dt class="parameter" id="parameter-flank_length"><code class="parameter-flags">--flank-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Extend sequences for gene calls with additional nucleotides from both ends. If the seqeunce for a target gene is between nucleotide positions START and STOP, using a flank lenght of M will give you a sequence that starts at START - M and ends at STOP + M.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-boring-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">BORING STUFF</span> <span class="parameter-group-description">The output file and all.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_splits"><code class="parameter-flags">--list-splits</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the program will list split names in the profile database and quite</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_bins"><code class="parameter-flags">--list-bins</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available bins in a collection and exit.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Using this program to generate split coverage visualizations across samples](http://merenlab.org/2019/11/25/visualizing-coverages/#visualize-only-the-coverage-of-a-split-across-samples)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_split_coverages.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
