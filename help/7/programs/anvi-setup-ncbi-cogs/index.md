---
layout: help
title: anvi-setup-ncbi-cogs [program]
categories: [anvio]
comments: false
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup NCBI&#x27;s Clusters of Orthologous Groups database.

Go back to the **[main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[cogs-data](../../artifacts/cogs-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>

## Can consume

<p style="text-align: left" markdown="1"></p>

## Usage


This program **downloads and organizes a local copy of the data from NCBI's [COGs database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/) for use in function annotation.** This program generates a <span class="artifact-n">[cogs-data](/help/7/artifacts/cogs-data)</span> artifact, which is required to run the program <span class="artifact-n">[anvi-run-ncbi-cogs](/help/7/programs/anvi-run-ncbi-cogs)</span>. 

{:.notice}
The COGs database is no longer actively added to, so you might also want to consider using a separate database. As of yet, anvi'o does not have a program to accesss the eggNOG database (but instructions to use this database to get and import function information are [here](http://merenlab.org/2016/06/18/importing-functions/#eggnog-database--emapper)), but does have the functionality to use the Pfams database (check out <span class="artifact-n">[anvi-run-pfams](/help/7/programs/anvi-run-pfams)</span> for more information) and the KOfamKOALA database (see <span class="artifact-n">[anvi-run-kegg-kofams](/help/7/programs/anvi-run-kegg-kofams)</span>). 

### Set up COGs data
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;just&#45;do&#45;it
</div>

If you already have a <span class="artifact-n">[cogs-data](/help/7/artifacts/cogs-data)</span> artifact and are trying to redownload this data, run 

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-ncbi-cogs.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-ncbi-cogs) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
