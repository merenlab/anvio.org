---
layout: program
title: anvi-display-pan
excerpt: An anvi'o program. Start an anvi&#x27;o server to display a pan-genome.
categories: [anvio]
comments: false
redirect_from: /m/anvi-display-pan
image:
  featurerelative: ../../../images/header.png
  display: true
---

Start an anvi&#x27;o server to display a pan-genome.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[svg](../../artifacts/svg) <img src="../../images/icons/SVG.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[gene-cluster-inspection](../../artifacts/gene-cluster-inspection) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **displays the contents of a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> in the [anvi'o interactive interface](http://merenlab.org/2016/02/27/the-anvio-interactive-interface//#using-the-anvio-interactive-interface), much like <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>.**

As demonstrated in the [pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#displaying-the-pan-genome), this opens an interactive interface window where each item is a gene cluster and each layer represents one of your genomes. 

### A general run 

You can execute this program with only two parameters: 

<div class="codeblock" markdown="1">
anvi&#45;display&#45;pan &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                 &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> 
</div>

Several default layer orders are available to choose from, including organization based on gene cluster presence/absence or gene cluster frequency. Both approaches will group your core gene clusters and singletons separately. 

Beyond these defaults, there are many different settings you can modify in the side panel of the interface, and you can import various additional data types (primarily using the program <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>). Once you are satisfied with the data displayed in the interface and its visual presentation, you can save those preferences in a <span class="artifact-n">[state](/help/main/artifacts/state)</span>. 

### I want MORE data displayed 

Several additional data types can be incorporated into this program's display. Specifically, you can add:

- a title (quite sophisticated, I know) using `--title` 
- a NEWICK formatted tree (or import it as a <span class="artifact-n">[misc-data-items-order-txt](/help/main/artifacts/misc-data-items-order-txt)</span> with <span class="artifact-p">[anvi-import-items-order](/help/main/programs/anvi-import-items-order)</span> or as <span class="artifact-n">[misc-data-layer-orders](/help/main/artifacts/misc-data-layer-orders)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>). 
- view data in a tab-delimited file
- an additional view (provide this in a tab-delimited matrix where each column corresponds to a sample and each row corresponds to a gene cluster)
- an additional layer in the form of <span class="artifact-n">[misc-data-layers-txt](/help/main/artifacts/misc-data-layers-txt)</span> (or import it into your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>

### How to minimize mouse clicks 

Wondering how to autoload specific aspects of the interface? You're in the right place. 

Several interface aspects can be specified through parameters to save you those valuable mouse clicks. 

- You can specify which view to start the interface with. Check which views are available with `--list-views`. 
- You can load a specific <span class="artifact-n">[state](/help/main/artifacts/state)</span> (either a previous state or a state that you've imported with <span class="artifact-p">[anvi-import-state](/help/main/programs/anvi-import-state)</span>). Check which states are available with the flag `--list-states`. 
- You can also load a specific <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> with `--collection-autoload`. To check which collections are available, use `--list-collections`. 

### Other parameters 

You can also skip processes like initializing functions or automatically ordering your items to save time, as well as configure the server settings according to your requirements.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-display-pan.md) to update this information.


## Additional Resources


* [See this program in action on the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#displaying-the-pan-genome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-display-pan) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
