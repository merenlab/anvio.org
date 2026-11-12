---
layout: program
title: anvi-merge-bins
excerpt: An anvi'o program. Merge a given set of bins in an anvi&#x27;o collection.
categories: [anvio]
comments: false
redirect_from: /m/anvi-merge-bins
image:
  featurerelative: ../../../images/header.png
  display: true
---

Merge a given set of bins in an anvi&#x27;o collection.

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

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program **merges two or more <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s together** into a single <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>.

To run this program, the bins that you want to merge must be contained within a single <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>. Just provide the collection name, the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> you're working with, the bins that you want to merge, and the name of the output bin.

To check what collections and bins are contained in a database, you can either run this program with the flag `--list-collections` or `--list-bins`, or you can run <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span>.

For example, if you wanted to merge the bins `first_third`, `middle_third`, and `last_third` in a pan-db into a single bin called `complete_bin`, just run

<div class="codeblock" markdown="1">
anvi&#45;merge&#45;bins &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                &#45;b first_third,middle_third,last_third \
                &#45;B complete_bin
</div>

Now your collection will contain the bin `complete_bin` and the original bins will be gone forever (unless you had run<span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, <span class="artifact-p">[anvi-export-collection](/help/main/programs/anvi-export-collection)</span>, or a similar program beforehand)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-merge-bins.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-merge-bins`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-merge-bins [-h] -p PAN_OR_PROFILE_DB [-C COLLECTION_NAME] [-b BIN NAMES] [-B BIN NAME] [--list-collections] [--list-bins]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-db-and-collection">
<header class="parameter-group-header"><span class="parameter-group-title">DB AND COLLECTION</span> <span class="parameter-group-description">Simple enough. This guy needs a pan or profile database and a collection name. You can get a list of available collections with another flag down below.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-bins-to-work-with">
<header class="parameter-group-header"><span class="parameter-group-title">BINS TO WORK WITH</span> <span class="parameter-group-description">Here you need to define a list of bin names to merge, and the new bin name for them to merge under. Your bin names should be comma-separated. Both &#x27;name_1, name_2, name_3&#x27; and name_1,name_2,name_3 will work. Your new bin name better be a single word, meaningful name so anvi&#x27;o does not complain about it later.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-bin_names_list"><code class="parameter-flags">-b, --bin-names-list</code> <code class="parameter-metavar">BIN NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Comma-separated list of bin names.</span></dd>
<dt class="parameter" id="parameter-new_bin_name"><code class="parameter-flags">-B, --new-bin-name</code> <code class="parameter-metavar">BIN NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The new bin name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-sweet-flags-of-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">SWEET FLAGS OF CONVENIENCE</span> <span class="parameter-group-description">We gotchu.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_bins"><code class="parameter-flags">--list-bins</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available bins in a collection and exit.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/merge_bins.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
