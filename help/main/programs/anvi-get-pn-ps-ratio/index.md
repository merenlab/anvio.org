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

The pN/pS ratio (first described in [Schloissnig et al. 2012](https://doi.org/10.1038/nature11711)) is the ratio of 2 rates: the rates of non-synonymous (pN) and synonymous (pS) **polymorphism**. It is analogous to dN/dS, which is the ratio of rates between non-synonymous (dN) and synonymous **substitutions** between two strains. We calculate pN/pS from allele frequency obtained through SCVs and SAAVs. See the study by [Kiefl et al. 2023](https://www.science.org/doi/10.1126/sciadv.abq4632) for additional information, and [this reproducible workflow](https://merenlab.org/data/anvio-structure/chapter-III/) associated with that study to see use cases.

###  How do I use this program?

First, you will need to run <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span> using the flag `--engine CDN` to get a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> for SCVs (single codon variants), which we'll name `SCVs.txt` in this example.

Then you can run this program like so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;pn&#45;ps&#45;ratio &#45;V SCVs.txt \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;o output_dir
</div>

A pN/pS value is calculated for each gene x sample combo. This will result in a directory called `output_dir` that contains several tables that describe each of your genes. See <span class="artifact-n">[pn-ps-data](/help/main/artifacts/pn-ps-data)</span> for more information.

### Interpreting the output

The output directory will contain five tab-delimited files. By default these are in long format (one row per gene-sample combination), but if you use the `--pivot` flag, they will be in matrix format (genes as rows, samples as columns).

Here is what each file contains:

- **`pNpS.txt`**: The pN/pS ratio for each gene in each sample. This is the primary output of the program. The general right-hand rule for a broad interpretation is that the values greater than 1 suggest diversifying selection, values less than 1 suggest purifying selection, and values around 1 suggest neutral evolution. Some entries may be empty, which means one of two things: (1) the gene had fewer SCVs than the `--minimum-num-variants` threshold set by default (default: 4), so the ratio was not considered reliable enough to report, or (2) both pN and pS were zero, making the ratio undefined. Values of `inf` indicate that pN was greater than zero but pS was zero (i.e., all observed polymorphisms were non-synonymous).

- **`pN.txt`**: The rate of *non-synonymous polymorphism per non-synonymous site* for each gene in each sample. This is the sum of non-synonymous fractions across all SCVs in a gene, normalized by the number of non-synonymous sites in that gene.

- **`pS.txt`**: The same as above but opposite as this one is the rate of *synonymous polymorphism per synonymous site* for each gene in each sample. This is the sum of synonymous fractions across all SCVs in a gene, normalized by the number of synonymous sites in that gene.

- **`num_SCVs.txt`**: The *number of single codon variants observed* for each gene in each sample. This is useful for understanding the statistical support behind each pN/pS estimate. When the `--pivot` flag is used, genes with no SCVs in a given sample will show 0.

- **`potentials.txt`**: The *number of synonymous and non-synonymous sites* for each gene (determined by the gene's codon composition). These values represent the denominators used to normalize pN and pS. A gene's potential depends on which codons it contains: for example, a methionine codon (ATG) contributes zero synonymous sites because any single-nucleotide change to it is non-synonymous, whereas a leucine codon (CTN) contributes more synonymous sites. The potentials also depend on the `--comparison` parameter, since the comparison codon determines what is considered synonymous or non-synonymous.

### Setting the right parameters

Please keep in mind that <span class="artifact-p">[anvi-get-pn-ps-ratio](/help/main/programs/anvi-get-pn-ps-ratio)</span> has a few filtering choices that are set by default and may become critical for your investigation, including,

- The minimum departure from consensus for a variable position (`--min-departure-from-consensus`).
- The minimum departure from reference for a variable position (`--min-departure-from-reference`).
- The minimum number of SCVs in a grouping (`--minimum-num-variants`).
- The minimum coverage at a variable position (`--min-coverage`).

Please consider finetuning these parameters according to your research question.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-pn-ps-ratio.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_pn_ps_ratio.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
