---
layout: program
title: anvi-get-pn-ps-ratio
excerpt: An anvi'o program. Calculate the rates of non-synonymous and synonymous polymorphism for genes across environmetns using the output of anvi-gen-variability-profile.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-pn-ps-ratio
image:
  featurerelative: ../../../images/header.png
  display: true
---

Calculate the rates of non-synonymous and synonymous polymorphism for genes across environmetns using the output of anvi-gen-variability-profile..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[pn-ps-data](../../artifacts/pn-ps-data) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **calculates the pN/pS ratio** for each gene in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and outputs it as a <span class="artifact-n">[pn-ps-data](/help/main/artifacts/pn-ps-data)</span> artifact.

### What is the pN/pS ratio?

The pN/pS ratio (first described in [Schloissnig et al. 2012](https://doi.org/10.1038/nature11711)) is the ratio of two rates: the rates of non-synonymous (pN) and synonymous (pS) **polymorphism**. It is analogous to dN/dS, which is the ratio of rates between non-synonymous (dN) and synonymous **substitutions** between two strains. We calculate pN/pS from allele frequency data obtained through SCVs (Single Codon Variants) and SAAVs (Single Amino Acid Variants). 

In molecular evolution, **non-synonymous changes** are nucleotide substitutions that alter the amino acid sequence of a protein, while **synonymous changes** are substitutions that do not change the amino acid due to the degeneracy of the genetic code. The pN/pS ratio provides insights into the selective pressures acting on genes: values significantly greater than 1 may indicate positive selection, while values significantly less than 1 suggest purifying selection. See the study by [Kiefl et al. 2023](https://www.science.org/doi/10.1126/sciadv.abq4632) for additional information, and [this reproducible workflow](https://merenlab.org/data/anvio-structure/chapter-III/) associated with that study to see use cases.

### How do I use this program?

First, you will need to run <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span> using the flag `--engine CDN` to generate a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> for SCVs (single codon variants), which we'll name `SCVs.txt` in this example.

Then you can run this program as follows:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;pn&#45;ps&#45;ratio &#45;V SCVs.txt \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;o output_dir
</div>

A pN/pS value is calculated for each gene × sample combination. This will result in a directory called `output_dir` that contains several tables describing each of your genes. See <span class="artifact-n">[pn-ps-data](/help/main/artifacts/pn-ps-data)</span> for more information.

### Other parameters

This program has several default filtering choices that you should pay attention to. You can tune these filter options with the following variables:

- The minimum departure from consensus for a variable position (`--min-departure-from-consensus`).
- The minimum departure from reference for a variable position (`--min-departure-from-reference`).
- The minimum number of SCVs in a grouping (`--minimum-num-variants`).
- The minimum coverage at a variable position (`--min-coverage`).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-pn-ps-ratio.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-pn-ps-ratio) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
