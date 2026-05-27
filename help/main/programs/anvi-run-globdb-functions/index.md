---
layout: program
title: anvi-run-globdb-functions
excerpt: An anvi'o program. Annotate genes with gene family functions derived from GlobDB with gene family-level cutoffs determined by empirical Local Alignment Score Ratio (LASR) thresholds.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-globdb-functions
image:
  featurerelative: ../../../images/header.png
  display: true
---

Annotate genes with gene family functions derived from GlobDB with gene family-level cutoffs determined by empirical Local Alignment Score Ratio (LASR) thresholds..

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


<p style="text-align: left" markdown="1"><span class="artifact-r">[globdb-data](../../artifacts/globdb-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **annotates genes with functions from the GlobDB gene family database**. It requires a <span class="artifact-n">[globdb-data](/help/main/artifacts/globdb-data)</span> artifact produced by <span class="artifact-p">[anvi-setup-globdb-functions](/help/main/programs/anvi-setup-globdb-functions)</span>.

GlobDB is a curated database of microbial genomes, and offers a set of gene families, also curated and accompanied by gene-family-level Local Alignment Score Ratio (LASR) cutoffs. <span class="artifact-p">[anvi-run-globdb-functions](/help/main/programs/anvi-run-globdb-functions)</span> uses these cutoffs to decide whether each hit is a genuine annotation or noise. Hits that pass the threshold are stored in your contigs database under the function annotation source `GlobDB`.

### Annotate a contigs database

<div class="codeblock" markdown="1">
anvi&#45;run&#45;globdb&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

{:.warning}
Use `--num-threads` for faster DIAMOND searches on multi-core systems.

### Annotate a FASTA file of amino acid sequences

<div class="codeblock" markdown="1">
anvi&#45;run&#45;globdb&#45;functions &#45;&#45;fasta&#45;file my_proteins.faa \
                          &#45;&#45;output&#45;file my_annotations.txt
</div>

### Custom data directory

If your <span class="artifact-n">[globdb-data](/help/main/artifacts/globdb-data)</span> lives in a non-default location, point anvi'o to it:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;globdb&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;globdb&#45;data&#45;dir /path/to/globdb/data
</div>

Or set the environment variable `ANVIO_GLOBDB_DATA_DIR` once and omit the flag.

### How the cutoffs work

For each DIAMOND hit, anvi'o computes a **Local Alignment Score Ratio (LASR)**, the ratio of the raw DIAMOND alignment score to the theoretical maximum self-alignment score of the query sequence computed from BLOSUM45 diagonal values as implemented by the GlobDB folk (which includes Daan Speth et al.). This is then compared against the LASR threshold (`lasr`), `selfmin`, and `selfmax` values stored in the gene family's YAML entry:

- A query whose self-alignment score falls in the expected range (`selfmin`–`selfmax`) for the family is classified as **correct_length** if the BSR passes the threshold.
- Queries shorter or longer than expected are classified as **too_short** or **too_long** respectively; these still pass and are annotated, but the classification is noted in the function description.
- Hits that do not reach the BSR threshold are labeled **below_cutoff** and are silently discarded.

This is how cutoffs work (broadly speaking), and as soon as there is a resource to cite here, we will update this information.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-globdb-functions.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_globdb_functions.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
