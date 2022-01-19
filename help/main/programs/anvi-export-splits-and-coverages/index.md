---
layout: program
title: anvi-export-splits-and-coverages
excerpt: An anvi'o program. Export split or contig sequences and coverages across samples stored in an anvi&#x27;o profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-splits-and-coverages
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export split or contig sequences and coverages across samples stored in an anvi&#x27;o profile database. This program is especially useful if you would like to &#x27;bin&#x27; your splits or contigs outside of anvi&#x27;o and import the binning results into anvi&#x27;o using `anvi-import-collection` program.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[coverages-txt](../../artifacts/coverages-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **gives you the coverage information in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> as external files**. Basically, if you want to take that information in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> out of anvio, this is for you. 

Once you input your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> you used to generate it, it will create a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> that lists your contigs for you, as well as a <span class="artifact-n">[coverages-txt](/help/main/artifacts/coverages-txt)</span>, which describes your coverage information. 

<div class="codeblock" markdown="1">
anvi&#45;export&#45;splits&#45;and&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

If your coverages are skewed by outlier positions, consider using Q2Q3-coverages instead.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;splits&#45;and&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;&#45;use&#45;Q2Q3&#45;coverages
</div>

### Contigs or splits?

*Wondering what the difference is? Check out [our vocab page](http://merenlab.org/vocabulary/#split).*

By default, this program will give you the sequences of your splits, but will look at coverage data in terms of the parent contig. If you want to get coverage information for your splits, use `--splits-mode`. Alternatively, you can ask the program to `--report-contigs` to look at contig sequences instead. 


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-splits-and-coverages.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-export-splits-and-coverages) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
