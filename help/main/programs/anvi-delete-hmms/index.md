---
layout: program
title: anvi-delete-hmms
excerpt: An anvi'o program. Remove HMM hits from an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-delete-hmms
image:
  featurerelative: ../../../images/header.png
  display: true
---

Remove HMM hits from an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program removes <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. This allows you to repopulate functional annotations with a different source or program, or simply remove data that may be cluttering the interface.

It is generally advisable to export your information before deletion as a precautionary measure. The HMM hits will appear in most displays, so if you have already run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, you should have this information preserved. 

To list available <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s in a database, execute:

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;list&#45;hmm&#45;sources
</div>

You can then remove <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from a specific source using the command:

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;hmm&#45;source <span class="artifact&#45;n">[hmm&#45;source](/help/main/artifacts/hmm&#45;source)</span> 
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-delete-hmms.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-delete-hmms) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
