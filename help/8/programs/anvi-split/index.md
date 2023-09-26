---
layout: program
title: anvi-split
excerpt: An anvi'o program. Split an anvi&#x27;o pan or profile database into smaller, self-contained projects.
categories: [anvio]
comments: false
redirect_from: /8/anvi-split
image:
  featurerelative: ../../../images/header.png
  display: true
---

Split an anvi&#x27;o pan or profile database into smaller, self-contained projects. Black magic..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[split-bins](../../artifacts/split-bins) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


Creates individual, self-contained anvi'o projects for one or more <span class="artifact-n">[bin](/help/8/artifacts/bin)</span>s stored in an anvi'o <span class="artifact-n">[collection](/help/8/artifacts/collection)</span>. This program may be useful if you would like to share a subset of an anvi'o project with the community or a collaborator, or focus on a particular aspect of your data without having to initialize very large files. Altogether, <span class="artifact-p">[anvi-split](/help/8/programs/anvi-split)</span> promotoes reproducibility, openness, and collaboration.

The program can generate <span class="artifact-n">[split-bins](/help/8/artifacts/split-bins)</span> from metagenomes or pangenomes. To split bins, you can provide the program <span class="artifact-p">[anvi-split](/help/8/programs/anvi-split)</span> with a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span> pair. To split gene clusters, you can provide it with a <span class="artifact-n">[genomes-storage-db](/help/8/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span> pair. In both cases you will also need a <span class="artifact-n">[collection](/help/8/artifacts/collection)</span>. If you don't provide any <span class="artifact-n">[bin](/help/8/artifacts/bin)</span> names, the program will create individual directories for each bin that is found in your collection. You can also limit the output to a single bin. Each of the resulting directories in your output folder will contain a stand-alone anvi'o project that can be shared without sharing any of the larger dataset.

### An example run

Assume you have a <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span> has a <span class="artifact-n">[collection](/help/8/artifacts/collection)</span> with three bins, which are (very creatively) called `BIN_1`, `BIN_2`, and `BIN_3`.

If you ran the following code:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/8/artifacts/profile&#45;db)</span> \
           &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> \
           &#45;C <span class="artifact&#45;n">[collection](/help/8/artifacts/collection)</span> \
           &#45;o OUTPUT
</div>

Alternatively you can specify a bin name to limit the reported bins:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/8/artifacts/profile&#45;db)</span> \
           &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/8/artifacts/contigs&#45;db)</span> \
           &#45;C <span class="artifact&#45;n">[collection](/help/8/artifacts/collection)</span> \
           &#45;&#45;bin&#45;id BIN_1
           &#45;o OUTPUT
</div>

Similarly, if you provide a <span class="artifact-n">[genomes-storage-db](/help/8/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span> pair, the directories will contain their own smaller <span class="artifact-n">[genomes-storage-db](/help/8/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span> pairs.

You can always use the program <span class="artifact-p">[anvi-show-collections-and-bins](/help/8/programs/anvi-show-collections-and-bins)</span> to learn available <span class="artifact-n">[collection](/help/8/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/8/artifacts/bin)</span> names in a given <span class="artifact-n">[profile-db](/help/8/artifacts/profile-db)</span> or <span class="artifact-n">[pan-db](/help/8/artifacts/pan-db)</span>.

### Performance

For extremely large datasets, splitting bins may be difficult. For metagenomics projets you can,

* Use the flag `--skip-variability-tables` to NOT report single-nucleotide variants or single-amino acid variants in your split bins (which can reach hundreds of millions of lines of information for large and complex metagenomes), and/or,
* Use the flag `--compress-auxiliary-data` to save space. While this is a great option for data that is meant to be stored long-term and shared with the community, the compressed file would need to be manually decompressed by the end-user prior to using the split bin.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-split.md) to update this information.


## Additional Resources


* [Anvi-split in action in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#splitting-the-pangenome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-split) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
