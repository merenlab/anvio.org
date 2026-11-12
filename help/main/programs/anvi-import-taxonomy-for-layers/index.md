---
layout: program
title: anvi-import-taxonomy-for-layers
excerpt: An anvi'o program. Import layers-level taxonomy into an anvi&#x27;o additional layer data table in an anvi&#x27;o single-profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-taxonomy-for-layers
image:
  featurerelative: ../../../images/header.png
  display: true
---

Import layers-level taxonomy into an anvi&#x27;o additional layer data table in an anvi&#x27;o single-profile database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[single-profile-db](../../artifacts/single-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[layer-taxonomy-txt](../../artifacts/layer-taxonomy-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[layer-taxonomy](../../artifacts/layer-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program lets you associate your layers with taxonomic information through a <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>.

This information is displayed in the interactive interface at the same place as <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span>, which is point (4) on [this page](http://merenlab.org/2017/12/11/additional-data-tables/#views-items-layers-orders-some-anvio-terminology).

If instead you want the layers to *represent* taxonomic ranks, then you'll want to take a look at [this tutorial on phylogenomics](http://merenlab.org/2017/06/07/phylogenomics/).

Usually, the layers describe separate samples. However, when working with only one sample, you may break up different aspects of that sample to be represented in each layer, hence why you might want to associate them with taxonomic information.

To run this program, simply provide a <span class="artifact-n">[layer-taxonomy-txt](/help/main/artifacts/layer-taxonomy-txt)</span>

<div class="codeblock" markdown="1">
anvi&#45;import&#45;taxonomy&#45;for&#45;layers &#45;p <span class="artifact&#45;n">[single&#45;profile&#45;db](/help/main/artifacts/single&#45;profile&#45;db)</span> \
                                &#45;i <span class="artifact&#45;n">[layer&#45;taxonomy&#45;txt](/help/main/artifacts/layer&#45;taxonomy&#45;txt)</span>
</div>

You also have the option to change the minimum abundance cut off using `--min-abundance`. The default value is 0.1 percent.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-taxonomy-for-layers.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-taxonomy-for-layers`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-taxonomy-for-layers [-h] -p PROFILE_DB [--parser PARSER] -i FILE(S) [FILE(S) ...] [--min-abundance PERCENTAGE]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-parser"><code class="parameter-flags">--parser</code> <code class="parameter-metavar">PARSER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Parser to make sense of the input files. There are 1 parsers readily available: [&#x27;krakenuniq&#x27;].</span></dd>
<dt class="parameter parameter-required" id="parameter-input_files"><code class="parameter-flags">-i, --input-files</code> <code class="parameter-metavar">FILE(S)</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Input file(s) for selected parser. Each parser (except &quot;blank&quot;) requires input files to process that you generate before running anvio. Please see the documentation for details.</span></dd>
<dt class="parameter" id="parameter-min_abundance"><code class="parameter-flags">--min-abundance</code> <code class="parameter-metavar">PERCENTAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Short read-based taxonomy can be extremely noisy. Therefore, here we have defeault minimum percentage cutoff of 0.1% to eliminate any taxon that occurs less than that in a given input file.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.1</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_taxonomy_for_layers.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
