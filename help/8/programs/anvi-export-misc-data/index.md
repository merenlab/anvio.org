---
layout: program
title: anvi-export-misc-data
excerpt: An anvi'o program. Export additional data or order tables in pan or profile databases for items or layers.
categories: [anvio]
comments: false
redirect_from: /8/anvi-export-misc-data
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export additional data or order tables in pan or profile databases for items or layers.

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


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-items](../../artifacts/misc-data-items) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layers](../../artifacts/misc-data-layers) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-layer-orders](../../artifacts/misc-data-layer-orders) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-nucleotides](../../artifacts/misc-data-nucleotides) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-amino-acids](../../artifacts/misc-data-amino-acids) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items-txt](../../artifacts/misc-data-items-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layers-txt](../../artifacts/misc-data-layers-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-layer-orders-txt](../../artifacts/misc-data-layer-orders-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-nucleotides-txt](../../artifacts/misc-data-nucleotides-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-amino-acids-txt](../../artifacts/misc-data-amino-acids-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program lets you export miscellaneous data of your choosing into a text file, which can be imported into another anvi'o project using <span class="artifact-p">[anvi-import-misc-data](/help/8/programs/anvi-import-misc-data)</span>. You can export the same types of data that you can import with that function. These are also listed below.

To see what misc-data is available in your database, use <span class="artifact-p">[anvi-show-misc-data](/help/8/programs/anvi-show-misc-data)</span>. 

If your misc-data is associated with a specific data group, you can provide that data group to this program with the `-D` flag. 

## Data types you can export 

### From a pan-db or profile-db: items, layers, layer orders

**From a <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span>, you can export**

- items data (<span class="artifact-n">[misc-data-items](/help/8/artifacts/misc-data-items)</span>) into a <span class="artifact-n">[misc-data-items-txt](/help/8/artifacts/misc-data-items-txt)</span>. 

<div class="codeblock" markdown="1">
anvi&#45;export&#45;misc&#45;data &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/8/artifacts/profile&#45;db)</span> \
                      &#45;&#45;target&#45;data&#45;table items 
</div>

- layers data (<span class="artifact-n">[misc-data-layers](/help/8/artifacts/misc-data-layers)</span>) into a <span class="artifact-n">[misc-data-layers-txt](/help/8/artifacts/misc-data-layers-txt)</span>.  

<div class="codeblock" markdown="1">
anvi&#45;export&#45;misc&#45;data &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/8/artifacts/pan&#45;db)</span> \
                      &#45;&#45;target&#45;data&#45;table layers 
</div>

- layer orders data (<span class="artifact-n">[misc-data-layer-orders](/help/8/artifacts/misc-data-layer-orders)</span>) into a <span class="artifact-n">[misc-data-layer-orders-txt](/help/8/artifacts/misc-data-layer-orders-txt)</span>. 

<div class="codeblock" markdown="1">
anvi&#45;export&#45;misc&#45;data &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/8/artifacts/profile&#45;db)</span> \
                      &#45;&#45;target&#45;data&#45;table layer_orders 
</div>

### From a contigs-db: nucleotide and amino acid information

**From a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>, you can export**

- nucleotide data (<span class="artifact-n">[misc-data-nucleotides](/help/8/artifacts/misc-data-nucleotides)</span>) into a <span class="artifact-n">[misc-data-nucleotides-txt](/help/8/artifacts/misc-data-nucleotides-txt)</span>.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> 
                      &#45;&#45;target&#45;data&#45;table nucleotides
</div>

- amino acid data (<span class="artifact-n">[misc-data-amino-acids](/help/8/artifacts/misc-data-amino-acids)</span>) into a <span class="artifact-n">[misc-data-amino-acids-txt](/help/8/artifacts/misc-data-amino-acids-txt)</span>.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;misc&#45;data &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> 
                      &#45;&#45;target&#45;data&#45;table amino_acids
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-misc-data.md) to update this information.


## Additional Resources


* [Working with anvi&#x27;o additional data tables](http://merenlab.org/2017/12/11/additional-data-tables/#views-items-layers-orders-some-anvio-terminology)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-export-misc-data) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
