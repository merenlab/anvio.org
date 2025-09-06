---
layout: program
title: anvi-cluster-contigs
excerpt: An anvi'o program. A program to cluster items in a merged anvi&#x27;o profile using automatic binning algorithms.
categories: [anvio]
comments: false
redirect_from: /m/anvi-cluster-contigs
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to cluster items in a merged anvi&#x27;o profile using automatic binning algorithms.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Usage


This program performs automated clustering of contigs stored in a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> using the specified binning algorithm and stores the results in multiple <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s. 

This approach provides a rapid alternative to manual binning procedures, though it may overlook subtle patterns that would be detected through careful manual curation. Following execution of this program, it is recommended to run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> on the resulting <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> to review the generated bins, and if necessary, use <span class="artifact-p">[anvi-refine](/help/main/programs/anvi-refine)</span> to modify their composition. 

The program supports several clustering algorithms, which are specified using the `driver` parameter: [concoct](https://github.com/BinPro/CONCOCT/blob/develop/doc/source/index.rst), [metabat2](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6662567/), [maxbin2](https://academic.oup.com/bioinformatics/article/32/4/605/1744462), [dastool](https://github.com/cmks/DAS_Tool), and [binsanity](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5345454/). 

A typical execution of this program follows this format:

<div class="codeblock" markdown="1">
anvi&#45;cluster&#45;contigs &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \ 
                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \ 
                     &#45;&#45;driver concoct
</div>

Each algorithm provides specific parameters that can be customized according to your requirements. When this program is properly configured, these algorithm-specific parameters will appear in the help menu for the algorithms that anvi'o can locate on your system.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-cluster-contigs.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-cluster-contigs) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
