---
layout: program
title: anvi-import-items-order
excerpt: An anvi'o program. Import a new items order into an anvi&#x27;o database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-items-order
image:
  featurerelative: ../../../images/header.png
  display: true
---

Import a new items order into an anvi&#x27;o database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[misc-data-items-order-txt](../../artifacts/misc-data-items-order-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[phylogeny](../../artifacts/phylogeny) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items-order](../../artifacts/misc-data-items-order) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program, as one might think, allows you to import a <span class="artifact-n">[misc-data-items-order-txt](/help/main/artifacts/misc-data-items-order-txt)</span> to describe a specific order of items stored in a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, or <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span>.

<div class="codeblock" markdown="1">
anvi&#45;import&#45;items&#45;order &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                        &#45;i <span class="artifact&#45;n">[misc&#45;data&#45;items&#45;order&#45;txt](/help/main/artifacts/misc&#45;data&#45;items&#45;order&#45;txt)</span>
</div>

It may also be nice to give it a good name, so that it's easy to find in the interface.

<div class="codeblock" markdown="1">
anvi&#45;import&#45;items&#45;order &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                        &#45;i <span class="artifact&#45;n">[misc&#45;data&#45;items&#45;order&#45;txt](/help/main/artifacts/misc&#45;data&#45;items&#45;order&#45;txt)</span> \
                        &#45;&#45;name ORDER_NAME
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-items-order.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-items-order`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-items-order [-h] [-i FILE] [-p DB PATH] [--name ORDER NAME] [--make-default]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-critical-input">
<header class="parameter-group-header"><span class="parameter-group-title">CRITICAL INPUT</span> <span class="parameter-group-description">Basically the input file and the target database</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-input_order"><code class="parameter-flags">-i, --input-order</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">One of the two important things you must provide: the file that contains the items order. The format of this file is important. It can either contain a proper newick tree in it, or a complete list of &#x27;items&#x27; in the target database where every line of the file is simply an item name. If you are providing a newick tree, the entire file should be a single line. I know it sounds hard, but you seriously can do this.</span></dd>
<dt class="parameter" id="parameter-db_path"><code class="parameter-flags">-p, --db-path</code> <code class="parameter-metavar">DB PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">An appropriate anvi&#x27;o database to import the items order. Currently it can be a profile, pan, or genes database. But you should try your chances with other kinds of databases for fun and games. Basically, if the database contains an items order table, then things will work. Otherwise, you will probably get angry errors back in the worst case scenario.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-not-so-critical-input">
<header class="parameter-group-header"><span class="parameter-group-title">NOT SO CRITICAL INPUT</span> <span class="parameter-group-description">Because not all parameters are created equal</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-name"><code class="parameter-flags">--name</code> <code class="parameter-metavar">ORDER NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">What should we call this order? Give it a concise, single-word name.</span></dd>
<dt class="parameter parameter-switch" id="parameter-make_default"><code class="parameter-flags">--make-default</code></dt>
<dd class="parameter-details"><span class="parameter-help">You have the option to make this order the default order in the database. Which means, anvi&#x27;o will use this one when someone runs the program anvi-interactive and presses draw. Big responsibility. But if you have a &#x27;default&#x27; state, it will not work because the default items order in the state file overwrites the one that comes from the database. So not that big of a responsibility.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_items_order.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
