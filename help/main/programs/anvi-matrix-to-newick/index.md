---
layout: program
title: anvi-matrix-to-newick
excerpt: An anvi'o program. Takes a distance matrix, returns a newick tree.
categories: [anvio]
comments: false
redirect_from: /m/anvi-matrix-to-newick
image:
  featurerelative: ../../../images/header.png
  display: true
---

Takes a distance matrix, returns a newick tree.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[view-data](../../artifacts/view-data) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>




## Usage


You can send any matrix file to this program to get a <span class="artifact-n">[dendrogram](/help/main/artifacts/dendrogram)</span> from it.

An example run would look like this:

<div class="codeblock" markdown="1">
anvi&#45;matrix&#45;to&#45;newick TAB_DELIMITED_DATA.txt \
                      <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span>
</div>

By default, <span class="artifact-p">[anvi-matrix-to-newick](/help/main/programs/anvi-matrix-to-newick)</span> will cluster rows. With the flag `--transpose`, it will cluster columns.

See [here](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.pdist.html) a list of distance metrics you can use, and [here](https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html) a list of linkage methods you can use.

<span class="artifact-p">[anvi-matrix-to-newick](/help/main/programs/anvi-matrix-to-newick)</span> can handle missing data, but in that case the program will not normalize your data and will assume that it is already normalized.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-matrix-to-newick.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-matrix-to-newick`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-matrix-to-newick [-h] [-o FILE_PATH] [--items-order-file FILE PATH] [--distance-matrix FILE PATH] [--transpose] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] [--pad-input-with-zeros] PATH</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">The data you wish to cluster</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-input_matrix"><code class="parameter-flags">PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Input matrix</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">How would you like your results to be reported?</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-items_order_file"><code class="parameter-flags">--items-order-file</code> <code class="parameter-metavar">FILE PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">In addition to a newick formatted output file, you can ask anvi&#x27;o to report the order of items in the resulting tree in a separate file. The content of this file will be a single-column item names the way they are ordered in the output newick dendrogram.</span></dd>
<dt class="parameter" id="parameter-distance_matrix"><code class="parameter-flags">--distance-matrix</code> <code class="parameter-metavar">FILE PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">In addition to a newick formatted output file, you can ask anvi&#x27;o to also report a distance matrix computed from the same data that leads to the generation.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-sweets">
<header class="parameter-group-header"><span class="parameter-group-title">SWEETS</span> <span class="parameter-group-description">Additional options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-transpose"><code class="parameter-flags">--transpose</code></dt>
<dd class="parameter-details"><span class="parameter-help">Transpose the input matrix file before clustering.</span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. The default distance metric is &#x27;euclidean&#x27;. You can find the full list of distance metrics either by making a mistake (such as entering a non-existent distance metric and making anvi&#x27;o upset), or by taking a look at the help menu of the hierarchy.distance.pdist function in the scipy.cluster module.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">euclidean</code></span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The linkage method for the hierarchical clustering. The default linkage method is &#x27;ward&#x27;, because that is the best one. It really is. We talked to a lot of people and they were all like &#x27;this is the best one available&#x27; and it is just all out there. Honestly it is so good that we will build a wall around it and make other linkage methods pay for it. But if you want to see a full list of available ones you can check the hierarchy.linkage function in the scipy.cluster module. Up to you really. But then you can&#x27;t use ward anymore, and you would have to leave anvi&#x27;o right now.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ward</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-pad_input_with_zeros"><code class="parameter-flags">--pad-input-with-zeros</code></dt>
<dd class="parameter-details"><span class="parameter-help">Do you want your vectors in the input file to be &#x27;padded&#x27; by some zero values so even hideous matrix files that contain entires with all empty values can be processed with this program? Well, this flag will try to make things work for you. But you must know that this is one of those cases where &#x27;if you have to use this then you have not one but two problems.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [See this program in action in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#creating-a-quick-pangenome-with-functions)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/matrix_to_newick.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
