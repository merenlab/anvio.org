---
layout: program
title: anvi-setup-pdb-database
excerpt: An anvi'o program. Setup or update an offline database of representative PDB structures clustered at 95%.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-pdb-database
image:
  featurerelative: ../../../images/header.png
  display: true
---

Setup or update an offline database of representative PDB structures clustered at 95%.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pdb-db](../../artifacts/pdb-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage



## Basic usage

This program creates a <span class="artifact-n">[pdb-db](/help/main/artifacts/pdb-db)</span> local database that holds PDB structures from [this sequence database](https://salilab.org/modeller/supplemental.html), which is hosted by the [Sali lab](https://salilab.org/).  Their database comprises all PDB RCSB sequences that have been clustered at 95% sequence similarity. They seem to update their database every couple of months (thank you guys!).


The purpose of <span class="artifact-p">[anvi-setup-pdb-database](/help/main/programs/anvi-setup-pdb-database)</span> to have a local copy of reference structures that can be used to, for example, get template structures for homology modelling when <span class="artifact-p">[anvi-gen-structure-database](/help/main/programs/anvi-gen-structure-database)</span> is ran.


Running this program is easy:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pdb&#45;database &#45;&#45;just&#45;do&#45;it
</div>

If you already have a <span class="artifact-n">[pdb-db](/help/main/artifacts/pdb-db)</span> artifact and are trying to redownload this data, run

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pdb&#45;database &#45;&#45;reset
</div>

Or if you just want to update your database, run

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pdb&#45;database &#45;&#45;update
</div>

## Notes

The output <span class="artifact-n">[pdb-db](/help/main/artifacts/pdb-db)</span> database is ~20GB and its contents may take several hours to download.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-pdb-database.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-pdb-database`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-pdb-database [-h] [--pdb-database-path PATH] [-T NUM_THREADS] [--update] [--skip-modeller-update] [--reset]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pdb_database_path"><code class="parameter-flags">--pdb-database-path</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The path for the PDB database to be stored. If you leave it as is without specifying anything, anvi&#x27;o will set up everything in a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your database.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-update"><code class="parameter-flags">--update</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like to update your current database.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_modeller_update"><code class="parameter-flags">--skip-modeller-update</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, MODELLER&#x27;s search DB is updated when this program is ran so that if MODELLER finds a protein, its structure is guaranteed to be in this database. If you don&#x27;t want to touch the MODELLER database, use this flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove all the previously stored files and start over. If something is feels wrong for some reason and if you believe re-downloading files and setting them up could address the issue, this is the flag that will tell anvi&#x27;o to act like a real computer scientist challenged with a computational problem.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_pdb_database.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
