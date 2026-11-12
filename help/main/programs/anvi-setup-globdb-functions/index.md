---
layout: program
title: anvi-setup-globdb-functions
excerpt: An anvi'o program. Download and set up the GlobDB gene family database for functional annotation.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-globdb-functions
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and set up the GlobDB gene family database for functional annotation.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/daan_speth.jpg" /></div><div class="anvio-person-info-box"><a href="/people/dspeth" target="_blank"><span class="anvio-person-name">Daan R. Speth</span></a><div class="anvio-person-social-box"><a href="https://dome.univie.ac.at/speth" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:daan.speth@univie.ac.at" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/dspeth" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[globdb-data](../../artifacts/globdb-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **downloads and sets up a local copy of the GlobDB gene family database** for use in functional annotation with <span class="artifact-p">[anvi-run-globdb-functions](/help/main/programs/anvi-run-globdb-functions)</span>. It produces a <span class="artifact-n">[globdb-data](/help/main/artifacts/globdb-data)</span> artifact.

### Basic usage

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;globdb&#45;functions
</div>

{:.warning}
We recommend using `--num-threads` to speed up the DIAMOND database build step.

If you already have a <span class="artifact-n">[globdb-data](/help/main/artifacts/globdb-data)</span> artifact and want to re-download and rebuild everything from scratch:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;globdb&#45;functions &#45;&#45;reset
</div>

### Custom data directory

By default, anvi'o stores the GlobDB data in a location inside the anvi'o package directory. If you do not have write access to that location, or if you want to keep the data elsewhere, use:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;globdb&#45;functions &#45;&#45;globdb&#45;data&#45;dir /path/to/your/directory
</div>

You can also set the environment variable `ANVIO_GLOBDB_DATA_DIR` to your preferred path so anvi'o will use it automatically without requiring the `--globdb-data-dir` flag each time:

<div class="codeblock" markdown="1">
export ANVIO_GLOBDB_DATA_DIR=/path/to/your/directory
anvi&#45;setup&#45;globdb&#45;functions
</div>

### What happens during setup

1. The GlobDB data package (that is maintained by GlobDB folk, including Daan Speth et al) is downloaded and extracted.
2. Every gene family `info.yaml` file is validated for required fields (`gene_family`, `description`, `version`, and `cutoffs` including `lasr`, `selfmax`, `selfmin`, and `matrix`). Where present, `synteny.yaml` files are also validated.
3. All per-family FASTA files are concatenated into a single `GlobDB.faa` (with GAA identifiers prepended to sequence headers).
4. All per-family `info.yaml` files are merged into a single `GlobDB-gene-family-data.yaml`. All per-family `synteny.yaml` files (where present) are merged into a single `GlobDB-synteny-data.yaml`.
5. A DIAMOND search database is built from `GlobDB.faa`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-globdb-functions.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-globdb-functions`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-globdb-functions [-h] [--globdb-data-dir GLOBDB_DATA_DIR] [--reset] [-T NUM_THREADS]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-globdb_data_dir"><code class="parameter-flags">--globdb-data-dir</code> <code class="parameter-metavar">GLOBDB_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory path for your GlobDB database setup. Anvi&#x27;o will try to use the default path if you do not specify anything. Alternatively you can set the environment variable ANVIO_GLOBDB_DATA_DIR to point to a custom location.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove all the previously stored files and start over. If something is feels wrong for some reason and if you believe re-downloading files and setting them up could address the issue, this is the flag that will tell anvi&#x27;o to act like a real computer scientist challenged with a computational problem.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_globdb_functions.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
