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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[view-data](../../artifacts/view-data) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


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


## Additional Resources


* [See this program in action in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#creating-a-quick-pangenome-with-functions)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/matrix_to_newick.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
