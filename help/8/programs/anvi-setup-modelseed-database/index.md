---
layout: program
title: anvi-setup-modelseed-database
excerpt: An anvi'o program. This program downloads and sets up the ModelSEED Biochemistry database.
categories: [anvio]
comments: false
redirect_from: /8/anvi-setup-modelseed-database
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program downloads and sets up the ModelSEED Biochemistry database..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-ref-data](../../artifacts/reaction-ref-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **downloads and sets up the latest version of the ModelSEED Biochemistry database.**

[The ModelSEED Biochemistry database](https://github.com/ModelSEED/ModelSEEDDatabase) consists of two tab-delimited files of reaction and compound data, respectively, and is valuable due to harmonization of IDs and properties from multiple reference databases commonly used in metabolic modeling.

<span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> relies upon ModelSEED Biochemistry in conjunction with the KEGG Orthology database. [KEGG Orthology (KO)](https://www.genome.jp/kegg/ko.html) protein annotations of genes are associated with predicted enzymatic reactions. These KEGG reactions are cross-referenced to the ModelSEED Biochemistry database to retrieve information on properties including reaction stoichiometry and reversibility. <span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> stores reactions and metabolites thereby predicted in the <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span> for the genome. The program, <span class="artifact-p">[anvi-setup-kegg-data](/help/8/programs/anvi-setup-kegg-data)</span>, sets up the requisite KO database.

## Usage

The simplest <span class="artifact-p">[anvi-setup-modelseed-database](/help/8/programs/anvi-setup-modelseed-database)</span> command sets up the database in the default anvi'o ModelSEED data directory.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;modelseed&#45;database
</div>

A custom directory can be provided instead. Within the provided directory, a subdirectory named `ModelSEED` is created for storage of the database.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;modelseed&#45;database &#45;&#45;dir /path/to/dir
</div>

Finally, in conjunction with either of the previous commands, the `--reset` flag can be used to delete any existing target database directory and its contents before setting up the latest version of the ModelSEED Biochemistry database there.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;modelseed&#45;database &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-modelseed-database.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-modelseed-database) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
