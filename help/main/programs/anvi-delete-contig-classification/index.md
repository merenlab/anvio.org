---
layout: program
title: anvi-delete-contig-classification
excerpt: An anvi'o program. Remove contig classification data from an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-delete-contig-classification
image:
  featurerelative: ../../../images/header.png
  display: true
---

Remove contig classification data from an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/tucker4.jpeg" /></div><div class="anvio-person-info-box"><a href="/people/tucker4" target="_blank"><span class="anvio-person-name">Sarah Tucker</span></a><div class="anvio-person-social-box"><a href="https://sarahjtucker.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:stucker@mbl.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/tucker4" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-xixi.jpg" /></div><div class="anvio-person-info-box"><a href="/people/u-xixi" target="_blank"><span class="anvio-person-name">Xi Chen (Xixi)</span></a><div class="anvio-person-social-box"><a href="mailto:xi.chen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/u-xixi" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/avrilhoyningen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/avihuene" target="_blank"><span class="anvio-person-name">Avril Hoyningen-Huene</span></a><div class="anvio-person-social-box"><a href="mailto:avril.hoyningen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/avihuene" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/guillermo_rangel.jpg" /></div><div class="anvio-person-info-box"><a href="/people/guille0387" target="_blank"><span class="anvio-person-name">Guillermo Rangel-Pineros</span></a><div class="anvio-person-social-box"><a href="mailto:guillermo.pineros@sund.ku.dk" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/guille0387" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contig-classification](../../artifacts/contig-classification) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>




## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program **removes <span class="artifact-n">[contig-classification](/help/main/artifacts/contig-classification)</span> data from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>**.

You must provide `--just-do-it` to confirm the deletion — this is a destructive operation and cannot be undone. For safety, we haven't included the `--just-do-it` flag in the example commands below.

To see what classification sources exist in a database before deleting:

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;&#45;list&#45;contig&#45;classification&#45;sources
</div>

To delete data from a specific source:

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;&#45;source genomad
</div>

To delete ALL contig classification data from the database:

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-delete-contig-classification.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-delete-contig-classification`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-delete-contig-classification [-h] -c CONTIGS_DB [--source SOURCE] [--just-do-it] [-l]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-required">
<header class="parameter-group-header"><span class="parameter-group-title">REQUIRED</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-source"><code class="parameter-flags">--source</code> <code class="parameter-metavar">SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The classification source to delete. If not provided, ALL classification data will be deleted from the database.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_contig_classification_sources"><code class="parameter-flags">-l, --list-contig-classification-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available contig classification sources in the contigs database and quit.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/delete_contig_classification.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
