---
layout: program
title: anvi-update-db-description
excerpt: An anvi'o program. Update the description in an anvi&#x27;o database.
categories: [anvio]
comments: false
redirect_from: /8/anvi-update-db-description
image:
  featurerelative: ../../../images/header.png
  display: true
---

Update the description in an anvi&#x27;o database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program allows you to update the description of any anvi'o database with the push of a button (and the writing of an updated description). 

This descirption helps make UIs a little prettier by showing up when you run programs like <span class="artifact-p">[anvi-interactive](/help/8/programs/anvi-interactive)</span> and <span class="artifact-p">[anvi-summarize](/help/8/programs/anvi-summarize)</span>. 

Simply write out the description that you would prefer in a plain text file (with markdown syntax) and use this program to update the description of any <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span>, <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span>, <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>, or <span class="artifact-n">[genomes-storage-db](/help/8/artifacts/genomes-storage-db)</span>: 

<div class="codeblock" markdown="1">
anvi&#45;update&#45;db&#45;description &#45;&#45;description my_description.txt \
                           <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span>
</div>



{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-update-db-description.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-update-db-description) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
