---
layout: program
title: anvi-import-misc-data
excerpt: An anvi'o program. Populate additional data or order tables in pan or profile databases for items and layers, OR additional data in contigs databases for nucleotides and amino acids (the Swiss army knife-level serious stuff).
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-misc-data
image:
  featurerelative: ../../../images/header.png
  display: true
---

Populate additional data or order tables in pan or profile databases for items and layers, OR additional data in contigs databases for nucleotides and amino acids (the Swiss army knife-level serious stuff).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-items-txt](../../artifacts/misc-data-items-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[phylogeny](../../artifacts/phylogeny) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layers-txt](../../artifacts/misc-data-layers-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layer-orders-txt](../../artifacts/misc-data-layer-orders-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-nucleotides-txt](../../artifacts/misc-data-nucleotides-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-amino-acids-txt](../../artifacts/misc-data-amino-acids-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items](../../artifacts/misc-data-items) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layers](../../artifacts/misc-data-layers) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layer-orders](../../artifacts/misc-data-layer-orders) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-nucleotides](../../artifacts/misc-data-nucleotides) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-amino-acids](../../artifacts/misc-data-amino-acids) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program enables extending anvi'o projects with many kinds of **additional data**. Additional data will extend anvio' <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> displays, and appear in <span class="artifact-n">[pan-summary](/help/main/artifacts/pan-summary)</span>, <span class="artifact-n">[pan-graph-summary](/help/main/artifacts/pan-graph-summary)</span>, or <span class="artifact-n">[profile-summary](/help/main/artifacts/profile-summary)</span> files, and become accessible to other anvi'o programs thorughout.

This program can add additional data for your items or layers in a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, or add additional data for your nucleotides or amino acids in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>

You also have the option to associate keys with only a specific data group, or transpose the input before processing.

Also see the program <span class="artifact-p">[anvi-show-misc-data](/help/main/programs/anvi-show-misc-data)</span>, <span class="artifact-p">[anvi-export-misc-data](/help/main/programs/anvi-export-misc-data)</span>, and <span class="artifact-p">[anvi-delete-misc-data](/help/main/programs/anvi-delete-misc-data)</span>.

## Items Data, Layers Data, and Orders

Please see [this blog post](http://merenlab.org/2017/12/11/additional-data-tables) for a comprehensive documentation on these misc data types.

### Data groups for items

Items additional data is organized into **data groups**. When you import data without specifying a group, it goes into the `default` group. You can assign your data to a specific group using the `-D` flag:

<div class="codeblock" markdown="1">
anvi&#45;import&#45;misc&#45;data &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;t items \
                      &#45;D my_analysis \
                      <span class="artifact&#45;n">[misc&#45;data&#45;items&#45;txt](/help/main/artifacts/misc&#45;data&#45;items&#45;txt)</span>
</div>

In the interactive interface, each group appears as a checkbox in the Main tab, allowing you to toggle entire groups of layers on or off. Groups also provide automatic visual separation between related layers.

Several anvi'o programs automatically create named groups when they write items additional data. For instance, <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> creates groups like `gene_cluster_stats`, `SCG`, `homogeneity`, and `AAI`. See <span class="artifact-n">[misc-data-items](/help/main/artifacts/misc-data-items)</span> for the full list.

{:.notice}
Data key names must be unique across all groups. If you try to import a key that already exists in another group, anvi'o will report an error. You can remove the existing key first with <span class="artifact-p">[anvi-delete-misc-data](/help/main/programs/anvi-delete-misc-data)</span> if needed.

## Nucleotides, Amino Acids, and Contigs Databases

This feature lets you import additional data about specfic residues or specific base pairs into your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. This is especially useful for strucutral analysis (so when running programs like <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span>) and will be very relevant to the InteracDome functionality when it's added in anvi'o v7 (curious readers can take a look at [this blog post](http://merenlab.org/2020/07/22/interacdome/)).

When adding additional data, unlike with layers and items, you do not have to provide values for every single nucleotide in your database. With this program, you can easily provide data for only a select few.

Basically, you can add two types of data to your contigs database:

1. <span class="artifact-n">[misc-data-nucleotides](/help/main/artifacts/misc-data-nucleotides)</span> by providing a <span class="artifact-n">[misc-data-nucleotides-txt](/help/main/artifacts/misc-data-nucleotides-txt)</span>. This contains information about *specific nucleotides in your database.*

<div class="codeblock" markdown="1">
anvi&#45;import&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;t nucleotides \
                      <span class="artifact&#45;n">[misc&#45;data&#45;nucleotides&#45;txt](/help/main/artifacts/misc&#45;data&#45;nucleotides&#45;txt)</span>
</div>

2. <span class="artifact-n">[misc-data-amino-acids](/help/main/artifacts/misc-data-amino-acids)</span> by providing a <span class="artifact-n">[misc-data-amino-acids-txt](/help/main/artifacts/misc-data-amino-acids-txt)</span>. This contains information about *specific amino acid residues in your database*

<div class="codeblock" markdown="1">
anvi&#45;import&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;t amino_acids \
                      <span class="artifact&#45;n">[misc&#45;data&#45;amino&#45;acids&#45;txt](/help/main/artifacts/misc&#45;data&#45;amino&#45;acids&#45;txt)</span>
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-misc-data.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-misc-data`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-misc-data [-h] [-p PAN_OR_PROFILE_DB] [-c CONTIGS_DB] -t NAME [-D NAME] [--transpose] [--just-do-it] [--contigs-mode] TAB DELIMITED FILE</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-positional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">positional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-data_file"><code class="parameter-flags">TAB DELIMITED FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">The input file that describes an additional data for layers or items. The expected format of this file depends on the data table you will target. This can feel complicated, but we promise it is not (you probably have a PhD or working on one, so trust us when we say &quot;it is not complicated&quot;). You need to read the online documentation if this is your first time with this.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-databases">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT DATABASES</span> <span class="parameter-group-description">The vast majority of cases will require you to provide only one of these databases. A special case is when you wish to add `items` data to a profile-db, but you only have contig names and not split names for your items. In that case you will want to use the `--contigs-mode` flag, and anvi&#x27;o will ask you to also provide a contigs database path.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-target-tablegroup">
<header class="parameter-group-header"><span class="parameter-group-title">TARGET TABLE/GROUP</span> <span class="parameter-group-description">Parameters to help you to define where do you want to add your data and whether you wish to group it or not (see the online documentation for details).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-target_data_table"><code class="parameter-flags">-t, --target-data-table</code> <code class="parameter-metavar">NAME</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">The target table is the table you are interested in accessing. Currently it can be &#x27;items&#x27;,&#x27;layers&#x27;, or &#x27;layer_orders&#x27;. Please see most up-to-date online documentation for more information.</span></dd>
<dt class="parameter" id="parameter-target_data_group"><code class="parameter-flags">-D, --target-data-group</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Data group to focus. Anvi&#x27;o misc data tables support associating a set of data keys with a data group. If you have no idea what this is, then probably you don&#x27;t need it, and anvi&#x27;o will take care of you. Note: this flag is IRRELEVANT if you are working with additional order data tables.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">CONVENIENCE</span> <span class="parameter-group-description">Parameters of convenience.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-transpose"><code class="parameter-flags">--transpose</code></dt>
<dd class="parameter-details"><span class="parameter-help">Transpose the input matrix file before clustering.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-contigs-mode">
<header class="parameter-group-header"><span class="parameter-group-title">CONTIGS MODE</span> <span class="parameter-group-description">If you are working with contig names and if you need to convert those contig names to split names, these are the parameters you will need. Please note that this is only relevant if you are adding `items` data.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-contigs_mode"><code class="parameter-flags">--contigs-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if your binning was done on contigs instead of splits. Please refer to the documentation for help.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A primer on anvi&#x27;o misc data tables](http://merenlab.org/2017/12/11/additional-data-tables/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_misc_data.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
