---
layout: program
title: anvi-export-items-order
excerpt: An anvi'o program. Export an item order from an anvi&#x27;o database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-items-order
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export an item order from an anvi&#x27;o database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items-order-txt](../../artifacts/misc-data-items-order-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[phylogeny](../../artifacts/phylogeny) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>




## Usage


This program, as one might think, allows you to export a <span class="artifact-n">[misc-data-items-order](/help/main/artifacts/misc-data-items-order)</span>, outputing a <span class="artifact-n">[misc-data-items-order-txt](/help/main/artifacts/misc-data-items-order-txt)</span>.

You can export one of the item orders in a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> as follows:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;items&#45;order &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                        &#45;&#45;name cov
</div>

The `cov` here refers to the tree that is generated using only differential coverage. Almost all anvi'o profile databases will also have available an items-order based on the tetranucleotide frequency called `tnf`, and one based on both called `tnf-cov`.

However, to list the item orders available in this database, just don't include the name flag.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;items&#45;order &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span>
</div>

You'll get a `Config Error` that will tell you what item orders are available.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-items-order.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-items-order`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-items-order [-h] [-p DB PATH] [--name ORDER NAME] [-o FILE_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">The database and the items order of interest</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-db_path"><code class="parameter-flags">-p, --db-path</code> <code class="parameter-metavar">DB PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">An appropriate anvi&#x27;o database.</span></dd>
<dt class="parameter" id="parameter-name"><code class="parameter-flags">--name</code> <code class="parameter-metavar">ORDER NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The name of the order you want to export. If you don&#x27;t provide an order name, anvi&#x27;o will show you the names of all available orders in the database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-ouput">
<header class="parameter-group-header"><span class="parameter-group-title">OUPUT</span> <span class="parameter-group-description">Output file name and stuff</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_items_order.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
