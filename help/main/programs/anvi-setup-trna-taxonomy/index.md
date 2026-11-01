---
layout: program
title: anvi-setup-trna-taxonomy
excerpt: An anvi'o program. The purpose of this program is to setup necessary databases for tRNA genes collected from GTDB (https://gtdb.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-trna-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---

The purpose of this program is to setup necessary databases for tRNA genes collected from GTDB (https://gtdb.ecogenomic.org/), genomes in your local anvi&#x27;o installation so taxonomy information for a given set of tRNA sequences can be identified using `anvi-run-trna-taxonomy` and made sense of via `anvi-estimate-trna-taxonomy`).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[trna-taxonomy-db](../../artifacts/trna-taxonomy-db) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program downloads a local copy of a subset of the databases from [GTDB](https://gtdb.ecogenomic.org/) (stored in a <span class="artifact-n">[trna-taxonomy-db](/help/main/artifacts/trna-taxonomy-db)</span>), so that tRNA sequences in your dataset can be associated with taxonomy information. It is required to run this program before you can run <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span> or <span class="artifact-p">[anvi-estimate-trna-taxonomy](/help/main/programs/anvi-estimate-trna-taxonomy)</span>.

Like other `anvi-setup-` programs, this only needs to be run once per anvi'o version. The default path is `anvio/data/misc/TRNA-TAXONOMY`. You can store the resulting <span class="artifact-n">[trna-taxonomy-db](/help/main/artifacts/trna-taxonomy-db)</span> in a custom location if desired), but then you'll need to provide the path to it whenever you run <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span>.

To run this program, you can simply run

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;trna&#45;taxonomy
</div>

If you are trying to redownload these databases, run:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;trna&#45;taxonomy &#45;&#45;reset
</div>

Alternatively, you can use `--redo-databases` if you just want to update the database version without redownloading the data.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-trna-taxonomy.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-trna-taxonomy`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-trna-taxonomy [-h] [-T NUM_THREADS] [--trna-taxonomy-data-dir PATH] [--reset] [--redo-databases]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-trna_taxonomy_data_dir"><code class="parameter-flags">--trna-taxonomy-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory for tRNA taxonomy data to be stored (or read from, depending on the context). If you leave it as is without specifying anything, anvi&#x27;o will set up everything in (or try to read things from) a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your databases. If you are using a program (such as `anvi-run-trna-taxonomy` or `anvi-estimate-trna-taxonomy`) you will have to use this parameter to tell those programs where your data are.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove all the previously stored files and start over. If something is feels wrong for some reason and if you believe re-downloading files and setting them up could address the issue, this is the flag that will tell anvi&#x27;o to act like a real computer scientist challenged with a computational problem.</span></dd>
<dt class="parameter parameter-switch" id="parameter-redo_databases"><code class="parameter-flags">--redo-databases</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove existing databases and re-create them. This can be necessary when versions of programs change and databases they create and use become incompatible.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_trna_taxonomy.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
