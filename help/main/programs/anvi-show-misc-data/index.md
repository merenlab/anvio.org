---
layout: program
title: anvi-show-misc-data
excerpt: An anvi'o program. Show all misc data keys in all misc data tables.
categories: [anvio]
comments: false
redirect_from: /m/anvi-show-misc-data
image:
  featurerelative: ../../../images/header.png
  display: true
---

Show all misc data keys in all misc data tables.

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


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program **lists the additional data** that is stored within a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. This is data that can be imported with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span> and is displayed in the interactive interface.

When run, this program will output to the terminal a list of all additional data tables that are stored within the database. If you want to export a specific element of these as a text file, see <span class="artifact-p">[anvi-export-misc-data](/help/main/programs/anvi-export-misc-data)</span>.

### What is displayed?

When running on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, the output will display the following types of data:

- <span class="artifact-n">[misc-data-items](/help/main/artifacts/misc-data-items)</span>
- <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span>
- <span class="artifact-n">[misc-data-layer-orders](/help/main/artifacts/misc-data-layer-orders)</span> (by default, this will include orders like `abundance` and `mean_coverage (newick)`)

When running on a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, the output will display the following types of data:

- <span class="artifact-n">[misc-data-nucleotides](/help/main/artifacts/misc-data-nucleotides)</span>
- <span class="artifact-n">[misc-data-amino-acids](/help/main/artifacts/misc-data-amino-acids)</span>

These have no default values and will only contain data that has been imported with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>.

You also have the option to specify a specific kind of additional data table with `-t`. For example, to view only <span class="artifact-n">[misc-data-items](/help/main/artifacts/misc-data-items)</span> in a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, just call

<div class="codeblock" markdown="1">
anvi&#45;show&#45;misc&#45;data &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                    &#45;t items
</div>

Similarly to importing and exporting additional data tables, you can also focus on a specific data group with the parameter `-D`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-show-misc-data.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-show-misc-data`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-show-misc-data [-h] [-p PAN_OR_PROFILE_DB] [-c CONTIGS_DB] [-t NAME] [-D NAME]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-database-input">
<header class="parameter-group-header"><span class="parameter-group-title">Database input</span> <span class="parameter-group-description">Provide 1 of these</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-details">
<header class="parameter-group-header"><span class="parameter-group-title">Details</span> <span class="parameter-group-description">Everything else.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-target_data_table"><code class="parameter-flags">-t, --target-data-table</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The target table is the table you are interested in accessing. Currently it can be &#x27;items&#x27;,&#x27;layers&#x27;, or &#x27;layer_orders&#x27;. Please see most up-to-date online documentation for more information.</span></dd>
<dt class="parameter" id="parameter-target_data_group"><code class="parameter-flags">-D, --target-data-group</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Data group to focus. Anvi&#x27;o misc data tables support associating a set of data keys with a data group. If you have no idea what this is, then probably you don&#x27;t need it, and anvi&#x27;o will take care of you. Note: this flag is IRRELEVANT if you are working with additional order data tables.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/show_misc_data.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
