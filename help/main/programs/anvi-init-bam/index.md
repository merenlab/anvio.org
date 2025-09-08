---
layout: program
title: anvi-init-bam
excerpt: An anvi'o program. Sort/Index BAM files.
categories: [anvio]
comments: false
redirect_from: /m/anvi-init-bam
image:
  featurerelative: ../../../images/header.png
  display: true
---

Sort/Index BAM files.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[raw-bam-file](../../artifacts/raw-bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>


## Usage


This program sorts and indexes your BAM files, essentially converting a <span class="artifact-n">[raw-bam-file](/help/main/artifacts/raw-bam-file)</span> into a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>, which are ready to be used in anvi'o. 

If you're unsure what a BAM file is, check out the <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> page or [this file](https://samtools.github.io/hts-specs/SAMv1.pdf), written by the developers of samtools. For a description of what indexing a BAM file does, check out the page for <span class="artifact-n">[raw-bam-file](/help/main/artifacts/raw-bam-file)</span>. 

To run this program, just provide a path to the bam files that you want to index. For example, 

<div class="codeblock" markdown="1">
anvi&#45;init&#45;bam <span class="artifact&#45;n">[raw&#45;bam&#45;file](/help/main/artifacts/raw&#45;bam&#45;file)</span> 
</div>

You can also multithread this to shorten runtime with the flag `-T` followed by the desired number of threads if your system is capable of this. 

To see it in action (plus a description on how to run it on an entire folder), check out [this page](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-init-bam). 


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-init-bam.md) to update this information.


## Additional Resources


* [Another description as part of the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-profile)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-init-bam) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
