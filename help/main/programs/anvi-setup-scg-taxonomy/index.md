---
layout: program
title: anvi-setup-scg-taxonomy
excerpt: An anvi'o program. The purpose of this program is to download necessary information from GTDB (https://gtdb.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-scg-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---

The purpose of this program is to download necessary information from GTDB (https://gtdb.ecogenomic.org/), and set it up in such a way that your anvi&#x27;o installation is able to assign taxonomy to single-copy core genes using `anvi-run-scg-taxonomy` and estimate taxonomy for genomes or metagenomes using `anvi-estimate-scg-taxonomy`).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/qclayssen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/qclayssen" target="_blank"><span class="anvio-person-name">Quentin Clayssen</span></a><div class="anvio-person-social-box"><a href="mailto:quentin.clayssen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ClayssenQ" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/qclayssen" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[scgs-taxonomy-db](../../artifacts/scgs-taxonomy-db) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **downloads and sets up the search databases used for the scg-taxonomy workflow** (from [GTDB](https://gtdb.ecogenomic.org/)) so that you can run <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span> and <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span>. This program generates a <span class="artifact-n">[scgs-taxonomy-db](/help/main/artifacts/scgs-taxonomy-db)</span> artifact, which is required to run both of those programs.

For more information on that workflow, check out [this page](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/)

You will only have to run this program once per anvi'o installation.

Why is this not done by default? It just makes things easier downstream to build these databases with the DIAMOND installed on your computer to avoid incompatibility issues. Besides, it should take under a minute and is as simple as running

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;scg&#45;taxonomy
</div>

If you have already already run this program and are trying to redownload this data, run

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;scg&#45;taxonomy &#45;&#45;reset
</div>

You can also download a specific release of this database by providing its URL with the flag `--scg-taxonomy-remote-database-url`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-scg-taxonomy.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-scg-taxonomy`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-scg-taxonomy [-h] [-T NUM_THREADS] [--scgs-taxonomy-data-dir PATH] [--gtdb-release RELEASE_NUM]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-scgs_taxonomy_data_dir"><code class="parameter-flags">--scgs-taxonomy-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory for SCGs data to be stored (or read from, depending on the context). If you leave it as is without specifying anything, anvi&#x27;o will set up everything in (or try to read things from) a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your databases. If you are using a program (such as `anvi-run-scg-taxonomy` or `anvi-estimate-scg-taxonomy`) you will have to use this parameter to tell those programs where your data are.</span></dd>
<dt class="parameter" id="parameter-gtdb_release"><code class="parameter-flags">--gtdb-release</code> <code class="parameter-metavar">RELEASE_NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you are particularly intersted an earlier release anvi&#x27;o knows about, you can set it here Otherwise anvi&#x27;o will always use the latest release it knows about.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Usage examples and warnings](http://merenlab.org/scg-taxonomy)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_scg_taxonomy.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
