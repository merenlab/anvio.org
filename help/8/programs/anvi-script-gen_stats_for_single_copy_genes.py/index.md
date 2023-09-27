---
layout: program
title: anvi-script-gen_stats_for_single_copy_genes.py
excerpt: An anvi'o program. A simple script to generate info from search tables, given a contigs-db.
categories: [anvio]
comments: false
redirect_from: /8/anvi-script-gen_stats_for_single_copy_genes.py
image:
  featurerelative: ../../../images/header.png
  display: true
---

A simple script to generate info from search tables, given a contigs-db.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-stats](../../artifacts/genes-stats) <img src="../../images/icons/STATS.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **provides information about each of the single-copy core genes in your <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>**.

Simply provide a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>, and it will create a <span class="artifact-n">[genes-stats](/help/8/artifacts/genes-stats)</span> file containing a variety of information about the single copy core genes in your database.

{:.notice}
This is kind of an old anvi'o script that we still keep around because history. But if you are here, you may also consider taking a look at the programs <span class="artifact-p">[anvi-script-gen-hmm-hits-matrix-across-genomes](/help/8/programs/anvi-script-gen-hmm-hits-matrix-across-genomes)</span> and <span class="artifact-p">[anvi-get-sequences-for-hmm-hits](/help/8/programs/anvi-get-sequences-for-hmm-hits)</span>.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen_stats_for_single_copy_genes.py &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span>
</div>

The console output will tell you the total number of contigs, splits, and nucleotides in your <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>, while the text output will tell you the source, name, and e-value of each single-copy core gene.

You can get information from only single-copy core genes from a specific source. To see what sources are available in your <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span>, run

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen_stats_for_single_copy_genes.py &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> \
                                               &#45;&#45;list&#45;sources
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen_stats_for_single_copy_genes.py.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-script-gen_stats_for_single_copy_genes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
