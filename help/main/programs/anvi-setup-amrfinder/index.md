---
layout: program
title: anvi-setup-amrfinder
excerpt: An anvi'o program. Downloads and sets up NCBI&#x27;s AMRFinderPlus database for `anvi-run-amrfinder`.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-amrfinder
image:
  featurerelative: ../../../images/header.png
  display: true
---

Downloads and sets up NCBI&#x27;s AMRFinderPlus database for `anvi-run-amrfinder`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-jessika.jpg" /></div><div class="anvio-person-info-box"><a href="/people/jessika-fuessel" target="_blank"><span class="anvio-person-name">Jessika Fuessel</span></a><div class="anvio-person-social-box"><a href="mailto:ju.fuessel@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FuesselJessika" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/jessika-fuessel" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[amrfinder-data](../../artifacts/amrfinder-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **downloads and sets up NCBI's [AMRFinderPlus](https://github.com/ncbi/amr/wiki) database** for use with <span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span>. It produces an <span class="artifact-n">[amrfinder-data](/help/main/artifacts/amrfinder-data)</span> artifact.

We have not included AMRFinderPlus as a part of the standard anvi'o installation, so if you want to use it you first need to install it into your anvi'o environment:

<div class="codeblock" markdown="1">
conda install &#45;c conda&#45;forge &#45;c bioconda ncbi&#45;amrfinderplus
</div>

### Basic usage

anvi'o uses AMRFinderPlus's own program, `amrfinder_update`, to download the newest version of the database from NCBI:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;amrfinder
</div>

### Custom data directory

By default, anvi'o stores the database at `anvio/data/misc/AMRFinder/`. If you want to store it in a different location you can use:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;amrfinder &#45;&#45;amrfinder&#45;data&#45;dir path/to/directory
</div>

In case you already have an AMRFinderPlus database on your computer or your computer cluster, you can direct anvi'o to it using <span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span> with `--amrfinder-data-dir`.

### Updating the database

There are regular updates by NCBI to the AMRFinderPlus database and if you want to make sure that you are using the latest one you can replace the 'old' database in the default location with the newest version by running:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;amrfinder &#45;&#45;reset
</div>

Anvi'o wants to avoid deleting valuable data in a non-default directory or to reset a database that may be shared with others, therefore you can only use the `--reset` flag for the default directory location. If you set up the database with `--amrfinder-data-dir`, you need to remove that directory yourself before setting it up again.

{:.notice}
<span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span> records the database version in every <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> it annotates, so you can always find out which version you used with <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-amrfinder.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-amrfinder`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-amrfinder [-h] [--amrfinder-data-dir DIR_PATH] [--reset]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-amrfinder_data_dir"><code class="parameter-flags">--amrfinder-data-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is optional and allows you to specify a directory path for your AMRFinderPlus database. Anvi&#x27;o will use the default path if you do not specify anything.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you want to re-download the AMRFinderPlus database if you already have a version on your computer.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_amrfinder.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
