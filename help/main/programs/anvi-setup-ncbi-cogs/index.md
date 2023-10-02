---
layout: program
title: anvi-setup-ncbi-cogs
excerpt: An anvi'o program. Download and setup NCBI&#x27;s Clusters of Orthologous Groups database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-ncbi-cogs
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup NCBI&#x27;s Clusters of Orthologous Groups database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


This program seems to know what its doing. It needs no input material from its user. Good program.


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[cogs-data](../../artifacts/cogs-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **downloads and organizes a local copy of the data from NCBI's [COGs database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/) for use in function annotation.** This program generates a <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> artifact, which is required to run the program <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span>. 

### Set up COGs data
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs
</div>

If possible, we recommend you multithread this program with the `--num-threads` parameter to make it faster.

If you already have a <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> artifact and are trying to redownload this data, run 

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;reset
</div>

### Choosing a different database version
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;cog&#45;version COG14
</div>

Not sure which versions of <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> are available? You can type something random after the `--cog-version` parameter to see the options.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-ncbi-cogs.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-ncbi-cogs) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
