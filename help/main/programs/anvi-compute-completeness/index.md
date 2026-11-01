---
layout: program
title: anvi-compute-completeness
excerpt: An anvi'o program. A script to generate completeness info for a given list of _splits_.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-completeness
image:
  featurerelative: ../../../images/header.png
  display: true
---

A script to generate completeness info for a given list of _splits_.

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

<p style="text-align: left" markdown="1"><span class="artifact-r">[splits-txt](../../artifacts/splits-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>


## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program tells you the completeness and redundency of single-copy gene sources available for your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

For example, some of the defaults are collections of single-copy core genes named  `Protista_83`, `Archaea_76`, and `Bacteria_71`. This program will give you a rough estimate of how many Protist, Archaeal, and Bacterial genomes are included in your dataset using these single-copy core genes.

You can use the following run to list available completeness sources in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;completeness &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;list&#45;completeness&#45;sources
</div>

Then you can run this program on a specifc source as folows:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;completeness &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;completeness&#45;source Bacteria_71
</div>

You can also provide a <span class="artifact-n">[splits-txt](/help/main/artifacts/splits-txt)</span> to focus on a specific set of splits, or declare a minimum e-value for a gene to count as a hit. The default is `1e-15`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-completeness.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-compute-completeness`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-compute-completeness [-h] [--splits-of-interest FILE] -c CONTIGS_DB [-e E-VALUE] [--list-completeness-sources] [--completeness-source NAME]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-splits_of_interest"><code class="parameter-flags">--splits-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with split names. There should be only one column in the file, and each line should correspond to a unique split name.</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-min_e_value"><code class="parameter-flags">-e, --min-e-value</code> <code class="parameter-metavar">E-VALUE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum significance score of an HMM find to be considered as a valid hit. Default is 1e-15.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.000000000000001</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-list_completeness_sources"><code class="parameter-flags">--list-completeness-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available sources and exit.</span></dd>
<dt class="parameter" id="parameter-completeness_source"><code class="parameter-flags">--completeness-source</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Single-copy gene source to use to estimate completeness.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_completeness.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
