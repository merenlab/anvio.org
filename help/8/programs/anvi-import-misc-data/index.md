---
layout: program
title: anvi-import-misc-data
excerpt: An anvi'o program. Populate additional data or order tables in pan or profile databases for items and layers, OR additional data in contigs databases for nucleotides and amino acids (the Swiss army knife-level serious stuff).
categories: [anvio]
comments: false
redirect_from: /8/anvi-import-misc-data
image:
  featurerelative: ../../../images/header.png
  display: true
---

Populate additional data or order tables in pan or profile databases for items and layers, OR additional data in contigs databases for nucleotides and amino acids (the Swiss army knife-level serious stuff).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-items-txt](../../artifacts/misc-data-items-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[phylogeny](../../artifacts/phylogeny) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layers-txt](../../artifacts/misc-data-layers-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layer-orders-txt](../../artifacts/misc-data-layer-orders-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-nucleotides-txt](../../artifacts/misc-data-nucleotides-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-amino-acids-txt](../../artifacts/misc-data-amino-acids-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items](../../artifacts/misc-data-items) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layers](../../artifacts/misc-data-layers) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layer-orders](../../artifacts/misc-data-layer-orders) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-nucleotides](../../artifacts/misc-data-nucleotides) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-amino-acids](../../artifacts/misc-data-amino-acids) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program enables extending anvi'o projects with many kinds of **additional data**. Additional data will extend anvio' <span class="artifact-n">[interactive](/help/8/artifacts/interactive)</span> displays, and appear in <span class="artifact-n">[summary](/help/8/artifacts/summary)</span> files, and become accessible to other anvi'o programs thorughout.

This program can add additional data for your items or layers in a <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span>, or add additional data for your nucleotides or amino acids in a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>

You also have the option to associate keys with only a specific data group, or transpose the input before processing.

Also see the program <span class="artifact-p">[anvi-show-misc-data](/help/8/programs/anvi-show-misc-data)</span>, <span class="artifact-p">[anvi-export-misc-data](/help/8/programs/anvi-export-misc-data)</span>, and <span class="artifact-p">[anvi-delete-misc-data](/help/8/programs/anvi-delete-misc-data)</span>.

## Items Data, Layers Data, and Orders

Please see [this blog post](http://merenlab.org/2017/12/11/additional-data-tables) for a comprehensive documentation on these misc data types.

## Nucleotides, Amino Acids, and Contigs Databases

This feature lets you import additional data about specfic residues or specific base pairs into your <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>. This is especially useful for strucutral analysis (so when running programs like <span class="artifact-p">[anvi-display-structure](/help/8/programs/anvi-display-structure)</span>) and will be very relevant to the InteracDome functionality when it's added in anvi'o v7 (curious readers can take a look at [this blog post](http://merenlab.org/2020/07/22/interacdome/)).

When adding additional data, unlike with layers and items, you do not have to provide values for every single nucleotide in your database. With this program, you can easily provide data for only a select few.

Basically, you can add two types of data to your contigs database:

1. <span class="artifact-n">[misc-data-nucleotides](/help/8/artifacts/misc-data-nucleotides)</span> by providing a <span class="artifact-n">[misc-data-nucleotides-txt](/help/8/artifacts/misc-data-nucleotides-txt)</span>. This contains information about *specific nucleotides in your database.*

<div class="codeblock" markdown="1">
anvi&#45;import&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> \
                      &#45;t nucleotides \
                      <span class="artifact&#45;n">[misc&#45;data&#45;nucleotides&#45;txt](/help/8/artifacts/misc&#45;data&#45;nucleotides&#45;txt)</span>
</div>

2. <span class="artifact-n">[misc-data-amino-acids](/help/8/artifacts/misc-data-amino-acids)</span> by providing a <span class="artifact-n">[misc-data-amino-acids-txt](/help/8/artifacts/misc-data-amino-acids-txt)</span>. This contains information about *specific amino acid residues in your database*

<div class="codeblock" markdown="1">
anvi&#45;import&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> \
                      &#45;t amino_acids \
                      <span class="artifact&#45;n">[misc&#45;data&#45;amino&#45;acids&#45;txt](/help/8/artifacts/misc&#45;data&#45;amino&#45;acids&#45;txt)</span>
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-misc-data.md) to update this information.


## Additional Resources


* [A primer on anvi&#x27;o misc data tables](http://merenlab.org/2017/12/11/additional-data-tables/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-import-misc-data) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
