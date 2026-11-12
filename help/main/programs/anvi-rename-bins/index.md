---
layout: program
title: anvi-rename-bins
excerpt: An anvi'o program. Rename all bins in a given collection (so they have pretty names).
categories: [anvio]
comments: false
redirect_from: /m/anvi-rename-bins
image:
  featurerelative: ../../../images/header.png
  display: true
---

Rename all bins in a given collection (so they have pretty names).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **creates a new <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> from the <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s in another collection with specific guidelines.** This is especially helpful when you wish to standardize your bin names, add project specific prefixes, and/or exclude those that do not match your criteria of completion, redundancy, and/or size estimates.

### Renaming all bins in a collection

Let's say you have a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> called `MY_COLLECTION`, which has four bins that are named poorly (which can happen due to decisions made by automatic binning tools, or after a few steps of manual refinement): `Bin_1_2_1`, `Bin_2`, `Bin_3_1_1`, and `Bin_4`. In an instance like this, running the program <span class="artifact-p">[anvi-rename-bins](/help/main/programs/anvi-rename-bins)</span> the following way will standardize these bin names with a prefix specific to your project:

<div class="codeblock" markdown="1">
anvi&#45;rename&#45;bins &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                 &#45;&#45;prefix SURFACE_OCEAN \
                 &#45;&#45;collection&#45;to&#45;read MY_COLLECTION \
                 &#45;&#45;collection&#45;to&#45;write SURFACE_OCEAN_SAMPLES \
                 &#45;&#45;report&#45;file rename.txt
</div>

Now your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> will have a new collection named `SURFACE_OCEAN_SAMPLES` that will contains your four bins witht their new names `SURFACE_OCEAN_Bin_00001`, `SURFACE_OCEAN_Bin_00002`, `SURFACE_OCEAN_Bin_00003`, and `SURFACE_OCEAN_Bin_00004`. The new naming will order your bins based on their substantive completion (i.e., completion minus redunancy).

The file `rename.txt` is a TAB-delimited file that contains a summary of your renaming process. The first column has the original name of the bins that you renamed, the second has their new names, and the remaining columns contain information about those bins (like their completion, redundency, and size).

### Separating out the MAGs

You can also label your MAGs separately from your bins via the flag `--call-MAGs`:

<div class="codeblock" markdown="1">
anvi&#45;rename&#45;bins &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                 &#45;&#45;prefix SURFACE_OCEAN \
                 &#45;&#45;collection&#45;to&#45;read MY_COLLECTION \
                 &#45;&#45;collection&#45;to&#45;write SURFACE_OCEAN_MAGS \
                 &#45;&#45;report&#45;file rename.txt \
                 &#45;&#45;call&#45;MAGs \
                 &#45;&#45;min&#45;completion&#45;for&#45;MAG 70
</div>

Now, the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> `SURFACE_OCEAN_MAGS` will include  `SURFACE_OCEAN_MAG_00001`, `SURFACE_OCEAN_MAG_00002`, `SURFACE_OCEAN_MAG_00003`, and `SURFACE_OCEAN_Bin_00004`. These are exactly the same bins that the collection contained before, but now the names differenciate the wheat from the chaff.

In addition to minimum completion estimate, you can also adjust the maximum redundancy value, minimum size to call MAGs. Please see the help menu for all parameters and their descriptions.

### Exclude bins that are not MAGs

When you use the flag `--call-MAGs`, anvi'o identifies those bins that could be considered 'MAGs' based on your specific criteria. But regardles of whether an original bin remains a bin, or tagged as a MAG, everything in your original collection will end up in your new collection. The flag `--exclude-bins` enable you to filter out those that end up not being tagged as MAGs:

<div class="codeblock" markdown="1">
anvi&#45;rename&#45;bins &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                 &#45;&#45;prefix SURFACE_OCEAN \
                 &#45;&#45;collection&#45;to&#45;read MY_COLLECTION \
                 &#45;&#45;collection&#45;to&#45;write SURFACE_OCEAN_MAGS \
                 &#45;&#45;report&#45;file rename.txt \
                 &#45;&#45;min&#45;completion&#45;for&#45;MAG 70 \
                 &#45;&#45;call&#45;MAGs \
                 &#45;&#45;exclude&#45;bins
</div>

With the addition of the flag `--exclude-bins` to the same command, the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> `SURFACE_OCEAN_MAGS` will no longer include <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s `SURFACE_OCEAN_Bin_00003` and `SURFACE_OCEAN_Bin_00004`.

See also the program <span class="artifact-p">[anvi-delete-collection](/help/main/programs/anvi-delete-collection)</span>.

### The report file

Following is an example reporting output file anvi'o will generate at the file path declared with the parameter `--report-file`:

|**old_bin_name**|**new_bin_name**|**SCG_domain**|**completion**|**redundancy**|**size_in_Mbp**|
|:--|:--|:--|:--|:--|:--|
|Bin_2|p800_MAG_00001|eukarya|61.45|7.23|26.924911|
|Bin_1|p800_MAG_00002|bacteria|98.59|8.45|1.612349|
|Bin_3|p800_Bin_00003|blank|0.00|0.00|0.103694|
|Bin_5|p800_Bin_00004|blank|0.00|0.00|0.128382|
|Bin_4|p800_Bin_00005|bacteria|1.41|0.00|0.378418|

The column `SCG_domain` will explain which collection of single-copy core genes were used to generate these completion/redundancy estimates. The absence of any domain prediction for any given bin will be marked with the keyrowd `blank`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-rename-bins.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-rename-bins`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-rename-bins [-h] -c CONTIGS_DB -p PROFILE_DB [--collection-to-read COLLECTION_TO_READ] [--collection-to-write COLLECTION_TO_WRITE] [--prefix PREFIX] [--report-file REPORT_FILE_PATH] [--list-collections] [--dry-run] [--call-MAGs] [--min-completion-for-MAG MIN_COMPLETION_FOR_MAG] [--max-redundancy-for-MAG MAX_REDUNDANCY_FOR_MAG] [--size-for-MAG MEGABASEPAIRS] [--exclude-bins]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-default-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">DEFAULT INPUTS</span> <span class="parameter-group-description">Standard stuff</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_to_read"><code class="parameter-flags">--collection-to-read</code> <code class="parameter-metavar">COLLECTION_TO_READ</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name to read from. Anvi&#x27;o will not overwrite an existing collection, instead, it will create a copy of your collection with new bin names.</span></dd>
<dt class="parameter" id="parameter-collection_to_write"><code class="parameter-flags">--collection-to-write</code> <code class="parameter-metavar">COLLECTION_TO_WRITE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The new collection name. Give it a nice, fancy name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-and-testing">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT AND TESTING</span> <span class="parameter-group-description">a.k.a, sweet parameters of convenience</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-prefix"><code class="parameter-flags">--prefix</code> <code class="parameter-metavar">PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">Prefix for the bin names. Must be a single word, composed of digits and numbers. The use of the underscore character is OK, but that&#x27;s about it (fine, the use of the dash character is OK, too but no more!). If the prefix is &#x27;PREFIX&#x27;, each bin will be renamed as &#x27;PREFIX_XXX_00001, PREFIX_XXX_00002&#x27;, and so on, in the order of percent completion minus percent redundancy (what we call, &#x27;substantive completion&#x27;). The &#x27;XXX&#x27; part will either be &#x27;Bin&#x27;, or &#x27;MAG depending on other parameters you use. Keep reading.</span></dd>
<dt class="parameter" id="parameter-report_file"><code class="parameter-flags">--report-file</code> <code class="parameter-metavar">REPORT_FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">This file will report each name change event, so you can trace back the original names of renamed bins later.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-dry_run"><code class="parameter-flags">--dry-run</code></dt>
<dd class="parameter-details"><span class="parameter-help">When used does NOT update the profile database, just creates the report file so you can view how things will be renamed.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-mag-options">
<header class="parameter-group-header"><span class="parameter-group-title">MAG OPTIONS</span> <span class="parameter-group-description">If you want to call some bins &#x27;MAGs&#x27; because you are so cool</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-call_mags"><code class="parameter-flags">--call-MAGs</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program by default rename your bins as &#x27;PREFIX_Bin_00001&#x27;, &#x27;PREFIX_Bin_00002&#x27; and so on. If you use this flag, it will name the ones that meet the criteria described by MAG-related flags as &#x27;PREFIX_MAG_00001&#x27;, &#x27;PREFIX_MAG_00002&#x27;, and so on. The ones that do not get to be named as MAGs will remain as bins.</span></dd>
<dt class="parameter" id="parameter-min_completion_for_mag"><code class="parameter-flags">--min-completion-for-MAG</code> <code class="parameter-metavar">MIN_COMPLETION_FOR_MAG</code></dt>
<dd class="parameter-details"><span class="parameter-help">If --call-MAGs flag is used, call any bin a &#x27;MAG&#x27; if their completion estimate is above this (the default is 70), and the redundancy estimate is less than --max-redundancy-for-MAG.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">70</code></span></dd>
<dt class="parameter" id="parameter-max_redundancy_for_mag"><code class="parameter-flags">--max-redundancy-for-MAG</code> <code class="parameter-metavar">MAX_REDUNDANCY_FOR_MAG</code></dt>
<dd class="parameter-details"><span class="parameter-help">If --call-MAGs flag is used, call any bin a &#x27;MAG&#x27; if their redundancy estimate is below this (the default is 10) and the completion estimate is above --min-completion-for-MAG.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter" id="parameter-size_for_mag"><code class="parameter-flags">--size-for-MAG</code> <code class="parameter-metavar">MEGABASEPAIRS</code></dt>
<dd class="parameter-details"><span class="parameter-help">If --call-MAGs flag is used, call any bin a &#x27;MAG&#x27; if their redundancy estimate is less than --max-redundancy-for-MAG, AND THEIR SIZE IS LARGER THAN THIS VALUE REGARDLESS OF THE COMPLETION ESTIMATE. The default behavior is to not care about this at all.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-exclude_bins"><code class="parameter-flags">--exclude-bins</code></dt>
<dd class="parameter-details"><span class="parameter-help">Exclude bins that don&#x27;t match any of your criteria to call MAGs. By default, your new collection will include every single item in your original collection. But if you are calling MAGs with the `--call-MAGs` flag AND would like to keep only those that are determined to be a MAG, you can use this flag and all the &#x27;bins&#x27; would then be excluded from your new collection, leaving you with only the &#x27;good&#x27; stuff.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/rename_bins.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
