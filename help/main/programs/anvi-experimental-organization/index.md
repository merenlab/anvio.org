---
layout: program
title: anvi-experimental-organization
excerpt: An anvi'o program. Create an experimental clustering dendrogram.
categories: [anvio]
comments: false
redirect_from: /m/anvi-experimental-organization
image:
  featurerelative: ../../../images/header.png
  display: true
---

Create an experimental clustering dendrogram..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[clustering-configuration](../../artifacts/clustering-configuration) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>


## Usage


This program uses an anvi'o <span class="artifact-n">[clustering-configuration](/help/main/artifacts/clustering-configuration)</span> file to access various data sources in anvi'o databases to produce a hierarchical clustering dendrogram for items.

It is especially powerful when the user wishes to create a hierarchical clustering of contigs or gene clusters using only a specific set of samples. If you would like to see an example usage of this program see the article on [combining metagenomics with metatranscriptomics](https://merenlab.org/2015/06/10/combining-omics-data/).

### How does it work?

A <span class="artifact-n">[clustering-configuration](/help/main/artifacts/clustering-configuration)</span> file tells the program which data matrices to use and how to process them. The program reads all matrices described in the config, scales and normalizes them as instructed, and then merges them into a single combined matrix by concatenating the columns from each matrix. This final merged matrix is then used to perform hierarchical clustering, producing a <span class="artifact-n">[dendrogram](/help/main/artifacts/dendrogram)</span>.

A simple run of this program looks like this:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                               &#45;N my_organization \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span>
</div>

If you don't want to store the result in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, use the `--skip-store-in-db` flag:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;skip&#45;store&#45;in&#45;db \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span>
</div>

You can use the `--dry-run` flag to check whether the program can parse the config file and find the relevant data sources without actually performing the clustering:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;skip&#45;store&#45;in&#45;db \
                               &#45;&#45;dry&#45;run
</div>

### Exporting the merged data matrix

In some cases, you may want to see the actual data that goes into the clustering. Since the program combines multiple data matrices into one before clustering, the final form of this merged matrix may not be immediately obvious to the user. But it can be recovered using the `--export-merged-matrix` flag with any of the clustering configurations.

For instance, running the program this way will export the combined and scaled matrix as a TAB-delimited file while still performing the clustering and storing the result in the database:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span> \
                               &#45;&#45;export&#45;merged&#45;matrix merged_matrix.txt
</div>

The resulting file will contain one row per item and columns from all input matrices after they have been normalized, log-transformed, and scaled according to the config. This can be useful for debugging, or for generating dendrograms using other software.

You can also recover the matrix *without* running the clustering step, which may be costly for large datasets, and without storing anything in the database -- as in "just scale the data, merge it, give it back to me as a TAB-delimited file, and stop there":

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;dry&#45;run \
                               &#45;&#45;export&#45;merged&#45;matrix merged_matrix.txt
</div>

This will scale and merge the matrices but skip the hierarchical clustering entirely.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-experimental-organization.md) to update this information.


## Additional Resources


* [An example use of this program](https://merenlab.org/2015/06/10/combining-omics-data/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/experimental_organization.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
