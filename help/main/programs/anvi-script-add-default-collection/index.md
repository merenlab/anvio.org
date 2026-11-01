---
layout: program
title: anvi-script-add-default-collection
excerpt: An anvi'o program. A script to add a &#x27;DEFAULT&#x27; collection in an anvi&#x27;o pan or profile database with either (1) a single bin that describes all items available in the profile database, or (2) as many bins as there are items in the profile database wher every item has it.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-add-default-collection
image:
  featurerelative: ../../../images/header.png
  display: true
---

A script to add a &#x27;DEFAULT&#x27; collection in an anvi&#x27;o pan or profile database with either (1) a single bin that describes all items available in the profile database, or (2) as many bins as there are items in the profile database wher every item has its own bin. The former is the default behavior that will be useful in most instances where you need to use this script. The latter is most useful if you are Florian and/or have something very specific in mind..

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

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>




## Usage


This program adds a 'default' <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> to your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that describes every item in your database.

This way, you can perform anvi'o tasks that require a collection or a bin even if you do not have a particular collection for your data, or all items in your database represent a meaningful bin (such as every contig in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that represents a single genome).

As an example, see this program in action in the [Infant Gut Tutorial](http://merenlab.org/tutorials/infant-gut/#the-gene-mode-studying-distribution-patterns-at-the-gene-level) where it is used to run <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> on a genome in 'gene mode'.

Run in its simples form,

<div class="codeblock" markdown="1">
anvi&#45;script&#45;add&#45;default&#45;collection &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span>
</div>

the program will add a new collection into the profile database named `DEFAULT`, which will contain a single bin that describes all items in the database named `EVERYTHING`. You can set these default names to your liking using additional parameters:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;add&#45;default&#45;collection &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                   &#45;C MY_COLLECTION \
                                   &#45;b MY_BIN
</div>

Also see related programs, <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span> and <span class="artifact-p">[anvi-delete-collection](/help/main/programs/anvi-delete-collection)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-add-default-collection.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-add-default-collection`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-add-default-collection [-h] -p PAN_OR_PROFILE_DB [-c CONTIGS_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [--bin-each-item-separately]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-database-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASE INPUTS</span> <span class="parameter-group-description">Provide a profile-, gene-, or pan-db, and if relevant, also a contigs-db here</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-collection-name">
<header class="parameter-group-header"><span class="parameter-group-title">COLLECTION NAME</span> <span class="parameter-group-description">Go with the flow or be a rebel</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name for the new collection. If you don&#x27;t provide any then it will be named &quot;DEFAULT&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">DEFAULT</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-bins">
<header class="parameter-group-header"><span class="parameter-group-title">BINS</span> <span class="parameter-group-description">You either provide a bin name for everything, or let every item be their own bins.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name for the new bin. If you don&#x27;t provide any then it will be named &quot;EVERYTHING&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">EVERYTHING</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-bin_each_item_separately"><code class="parameter-flags">--bin-each-item-separately</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you declare this flag every item in your database will have its own bin (which is crazy, but may be necessary).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/add_default_collection.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
