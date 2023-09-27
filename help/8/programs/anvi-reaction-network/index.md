---
layout: program
title: anvi-reaction-network
excerpt: An anvi'o program. Generate a metabolic reaction network in an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /8/anvi-reaction-network
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a metabolic reaction network in an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-functions](../../artifacts/kegg-functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[reaction-ref-data](../../artifacts/reaction-ref-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-data](../../artifacts/kegg-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-network](../../artifacts/reaction-network) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **stores a metabolic <span class="artifact-n">[reaction-network](/help/8/artifacts/reaction-network)</span> in a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>.**

The network consists of data on biochemical reactions predicted to be encoded by the genome, referencing the [KEGG Orthology (KO)](https://www.genome.jp/kegg/ko.html) and [ModelSEED Biochemistry](https://github.com/ModelSEED/ModelSEEDDatabase) databases.

Information on the predicted reactions and the involved metabolites are stored in two tables of the <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>. The program, <span class="artifact-p">[anvi-get-metabolic-model-file](/help/8/programs/anvi-get-metabolic-model-file)</span>, can be used to export the <span class="artifact-n">[reaction-network](/help/8/artifacts/reaction-network)</span> from the database to a <span class="artifact-n">[reaction-network-json](/help/8/artifacts/reaction-network-json)</span> file suitable for inspection and flux balance analysis.

## Usage

<span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> takes a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span> as required input. Genes stored within the database must have KO protein annotations, which can be assigned by <span class="artifact-p">[anvi-run-kegg-kofams](/help/8/programs/anvi-run-kegg-kofams)</span>.

The KO and ModelSEED Biochemistry databases must be set up and available to the program. By default, these are expected to be set up in default anvi'o data directories. <span class="artifact-p">[anvi-setup-kegg-data](/help/8/programs/anvi-setup-kegg-data)</span> and <span class="artifact-p">[anvi-setup-modelseed-database](/help/8/programs/anvi-setup-modelseed-database)</span> must be run to set up these databases.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db
</div>

Custom locations for the reference databases can be provided with the flags, `--ko-dir` and `--modelseed-dir`.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db &#45;&#45;ko&#45;dir /path/to/set&#45;up/ko&#45;dir &#45;&#45;modelseed&#45;dir /path/to/set&#45;up/modelseed&#45;dir
</div>

If a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span> already contains a <span class="artifact-n">[reaction-network](/help/8/artifacts/reaction-network)</span> from a previous run of this program, the flag `--overwrite-existing-network` can overwrite the existing network with a new one. For example, if <span class="artifact-p">[anvi-run-kegg-kofams](/help/8/programs/anvi-run-kegg-kofams)</span> is run again on a database using a newer version of KEGG, then <span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> should be rerun to update the <span class="artifact-n">[reaction-network](/help/8/artifacts/reaction-network)</span> derived from the KO annotations.

<div class="codeblock" markdown="1">
anvi&#45;reaction&#45;network &#45;c /path/to/contigs&#45;db &#45;&#45;overwrite&#45;existing&#45;network
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-reaction-network.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-reaction-network) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
