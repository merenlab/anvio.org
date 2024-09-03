---
layout: program
title: anvi-import-protein-profile
excerpt: An anvi'o program. This program imports protein abundance data into a profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-protein-profile
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program imports protein abundance data into a profile database..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program imports a protein abundance profile, such as from proteomic experiments, into a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.

This program takes as input a tab-delimited file of protein abundance data and a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. The tabular file must have four columns with the following names: "source", "accession", "sample", and "abundance". Each row of the table corresponds to a distinct protein abundance measurement.

- "source" is the source of the protein accessions. It must be a gene function annotation source stored in the anvi'o <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> (available sources can be found with the program, <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>).
- "accession" is the protein ID in the annotation source. A contigs database built from a GenBank file, for example, could contain the source, "NCBI_PGAP", and the accession, "WP_011862028.1".
- "sample" is the name of the sample in which the measurement was made. It need not be the same as any nucleotide sequence samples stored in the profile database.
- "abundance" is the protein abundance value, however defined.

Once protein abundances are stored in a profile database, they can be loaded into a metabolic <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> for analysis in the context of biochemical pathways.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-protein-profile.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-import-protein-profile) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
