---
layout: program
title: anvi-merge-bins
excerpt: An anvi'o program. Merge a given set of bins in an anvi&#x27;o collection.
categories: [anvio]
comments: false
redirect_from: /m/anvi-merge-bins
image:
  featurerelative: ../../../images/header.png
  display: true
---

Merge a given set of bins in an anvi&#x27;o collection.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program **merges two or more <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s together** into a single <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>.

To run this program, the bins that you want to merge must be contained within a single <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>. Just provide the collection name, the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> or <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> you're working with, the bins that you want to merge, and the name of the output bin. 

To check what collections and bins are contained in a database, you can either run this program with the flag `--list-collections` or `--list-bins`, or you can run <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span>.

For example, if you wanted to merge the bins `first_third`, `middle_third`, and `last_third` in a pan-db into a single bin called `complete_bin`, just run 

<div class="codeblock" markdown="1">
anvi&#45;merge&#45;bins &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                &#45;b first_third,middle_third,last_third \
                &#45;B complete_bin
</div>

Now your collection will contain the bin `complete_bin` and the original bins will be gone forever (unless you had run<span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, <span class="artifact-p">[anvi-export-collection](/help/main/programs/anvi-export-collection)</span>, or a similar program beforehand)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-merge-bins.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-merge-bins) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
