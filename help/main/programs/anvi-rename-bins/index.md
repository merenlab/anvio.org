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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


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


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-rename-bins) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
