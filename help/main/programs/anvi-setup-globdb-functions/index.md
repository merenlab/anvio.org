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


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_globdb_functions.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
