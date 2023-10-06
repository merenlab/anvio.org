---
layout: page
title: "How to cite anvi'o like a pro"
excerpt: "Tips and suggestions on how to cite anvi'o for those who care."
notoc: false
---

Anvi'o is an evolving software ecosystem, and its components are often described in multiple studies. Thus, the best practice for your study may be to cite multiple publications if it benefits from multiple anvi'o features.

We know that finding the best studies to cite can be a lot of work. The purpose of this page is to offer up-to-date suggestions to help you find out how to finalize your citations regarding anvi'o. But if you are unsure, please feel free to drop us a line, or find us on {% include _discord_invitation_button.html %}

{:.notice}
Anvi'o often uses third-party software or resources (such as HMMER, Prodigal, MCL, GTDB, or NCBI) and the platform typically guides you to cite relevant work when they are used for an anvi'o analysis. Suggestions on this page are specific to anvi'o, and do not include third-party software that you should also make sure to cite properly.

We know this is difficult work and we are thankful for your attention.

---

## Default citation

{:.notice-alt}
**TL;DR**: Cite this if you have used any of the [anvi'o programs or workflows](/help/main).

If you have used anvi'o for anything at all please consider citing this work as it describes the software ecosystem in general which currently sits on more than 120,000 lines of code, which means any given anvi'o program benefits from the entirety of this ecosystem:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.1038/s41564-020-00834-3"></div>
<div class="__dimensions_badge_embed__" data-doi="10.1038/s41564-020-00834-3" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.1038/s41564-020-00834-3" target="_new">Community-led, integrated, reproducible multi-omics with anvi'o</a></span>
    <span class="pub-authors"><span class="pub-member-author">Eren AM</span>, <span class="pub-member-author">Kiefl E</span>, <span class="pub-member-author">Shaiber A</span>, <span class="pub-member-author">Veseli I</span>, <span class="pub-member-author">Miller SE</span>, <span class="pub-member-author">Schechter MS</span>, <span class="pub-member-author">Fink I</span>, <span class="pub-member-author">Pan JN</span>, <span class="pub-member-author">Yousef M</span>, <span class="pub-member-author">Fogarty EC</span>, <span class="pub-member-author">Trigodet F</span>, <span class="pub-member-author">Watson AR</span>, <span class="pub-member-author">Esen ÖC</span>, Moore RM, Clayssen Q, Lee MD, Kivenson V, Graham ED, Merrill BD, Karkman A, Blankenberg D, Eppley JM, Sjödin A, Scott JJ, Vázquez-Campos X, McKay LJ, McDaniel EA, Stevens SLR, Anderson RE, Fuessel J, Fernandez-Guerra A, Maignien L, Delmont TO, Willis AD</span>
    <span class="pub-journal"><b>Nature Microbiology</b>, 6(1):3:6 <a href="https://doi.org/10.1038/s41564-020-00834-3" target="_blank">🔗</a></span>
</div>

The rest of the citations on this page are specific for certain anvi'o features.

## Microbial metabolism

{:.notice-alt}
**TL;DR**: Cite this if you have used {% include PROGRAM name="anvi-estimate-metabolism" %}.

The following study is the first one that formally describes the anvi'o metabolism frameowrk:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.7554/eLife.89862"></div>
<div class="__dimensions_badge_embed__" data-doi="10.7554/eLife.89862" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href="https://doi.org/10.7554/eLife.89862" target="_new">Microbes with higher metabolic independence are enriched in human gut microbiomes under stress</a></span>
    <span class="pub-authors"><span class="pub-member-author" title="An official member of the lab at the time of publication">Veseli I</span>, Chen YT, <span class="pub-member-author" title="An official member of the lab at the time of publication">Schechter MS</span>, Vanni C, <span class="pub-member-author" title="An official member of the lab at the time of publication">Fogarty EC</span>, <span class="pub-member-author" title="An official member of the lab at the time of publication">Watson AR</span>, Jabri B, Blekhman R, Willis AD, <span class="pub-collaborator-author" title="A key collaborator of the lab at the time of publication">Yu MK</span>, Fernàndez-Guerra A, <span class="pub-collaborator-author" title="A key collaborator of the lab at the time of publication">Füssel J</span>, <span class="pub-member-author" title="An official member of the lab at the time of publication">Eren AM</span></span>
    <span class="pub-journal"> 📚 <b>eLife</b>, 12(RP89862) | 🔍 <a href="http://scholar.google.com/scholar?hl=en&amp;q=Microbes+with+higher+metabolic+independence+are+enriched+in+human+gut+microbiomes+under+stress" target="_blank">Google Scholar</a> | 🔗 <a href="https://doi.org/10.7554/eLife.89862" target="_blank">doi:10.7554/eLife.89862</a></span>
</div>

In a recent study mentioned this framework the following way:

> (...)
>
> **Analysis of metabolic modules and enrichment**. We calculated the level of completeness for a given KEGG module ([Kanehisa et al. 2014](https://doi.org/10.1093/nar/gkt1076); [Kanehisa et al. 2017](https://doi.org/10.1093/nar/gkw1092)) in our genomes using the program `anvi-estimate-metabolism` ([Veseli et al. 2023](https://doi.org/10.7554/eLife.89862)), which leveraged previous annotation of genes with KEGG orthologs (KOs). Then, the program `anvi-compute-functional-enrichment` ([Shaiber et al. 2020](https://doi.org/10.1186/s13059-020-02195-w)) determined whether a given metabolic module was enriched in based on the output from `anvi-estimate-metabolism`.  The URL [https://merenlab.org/m/anvi-estimate-metabolism](https://merenlab.org/m/anvi-estimate-metabolism) serves a tutorial for this program which details the modes of usage and output file formats (...)

{% include _experts.html question="metabolism" githubs="ivagljiva" %}


## Microbial population genetics

{:.notice-alt}
**TL;DR**: Cite this if you have used {% include PROGRAM name="anvi-gen-variability-profile" %}, {% include PROGRAM name="anvi-gen-fixation-index-matrix" %}, {% include PROGRAM name="anvi-display-structure" %}, or {% include PROGRAM name="anvi-get-pn-ps-ratio" %}.

Much of the firepower in anvi'o for microbial population genetics, including the description of single-codon variants, fast characterization of single-nucleotide variants and IN/DELs, as well as linking genetic variation in the environment to predicted protein structures, is first described and used in this work:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.1126/sciadv.abq4632"></div>
<div class="__dimensions_badge_embed__" data-doi="10.1126/sciadv.abq4632" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href="https://doi.org/10.1126/sciadv.abq4632" target="_new">Structure-informed microbial population genetics elucidate selective pressures that shape protein evolution</a></span>
    <span class="pub-authors"><span class="pub-member-author" title="An official member of the lab at the time of publication">Kiefl E</span>, Esen ÖC, <span class="pub-member-author" title="An official member of the lab at the time of publication">Miller SE</span>, Kroll KL, Willis AD, Rappé MS, Pan T, <span class="pub-member-author" title="An official member of the lab at the time of publication">Eren AM</span></span>
    <span class="pub-journal"> 📚 <b>Science Advances</b>, 9(8):eabq4632 | 🔍 <a href="http://scholar.google.com/scholar?hl=en&amp;q=Structure-informed+microbial+population+genetics+elucidate+selective+pressures+that+shape+protein+evolution" target="_blank">Google Scholar</a> | 🔗 <a href="https://doi.org/10.1126/sciadv.abq4632" target="_blank">doi:10.1126/sciadv.abq4632</a></span>
</div>


If your work benefited from any of these features, please consider also citing it.

{% include _experts.html question="microbial population genetics" githubs="meren,ekiefl" %}

## Functional or metabolic enrichment

{:.notice-alt}
**TL;DR**: Cite this if you have used {% include PROGRAM name="anvi-compute-functional-enrichment-across-genomes" %}, {% include PROGRAM name=" anvi-compute-functional-enrichment-in-pan" %}, or {% include PROGRAM name="anvi-compute-metabolic-enrichment" %}.

Anvi'o includes featuers to study enrichment of functions in pangenomes or metabolic modules across genomes. The underlying logic for feature was described for the first time in this study:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.1186/s13059-020-02195-w"></div>
<div class="__dimensions_badge_embed__" data-doi="10.1186/s13059-020-02195-w" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.1186/s13059-020-02195-w" target="_new">Functional and genetic markers of niche partitioning among enigmatic members of the human oral microbiome</a></span>
    <span class="pub-authors"><span class="pub-member-author">Shaiber A</span>, Willis AD, Delmont TO, Roux S, Chen L, <span class="pub-member-author">Schmid AC</span>, <span class="pub-member-author">Yousef M</span>, <span class="pub-member-author">Watson AR</span>, <span class="pub-member-author">Lolans K</span>, <span class="pub-member-author">Esen ÖC</span>, <span class="pub-member-author">Lee STM</span>, Downey N, Morrison HG, Dewhirst FE, Mark Welch JL<sup>‡</sup>, <span class="pub-member-author">Eren AM<sup>‡</sup></span></span>
    <span class="pub-co-first-authors"><sup>‡</sup>Co-senior authors</span>
    <span class="pub-journal"><b>Genome Biology</b>, 21:292 <a href="https://doi.org/10.1186/s13059-020-02195-w" target="_blank">🔗</a></span>
</div>

In a recent study, we cited this work the following way:

> (...)
>
> **Functional enrichment analyses**. The statistical approach for enrichment analysis is defined elsewhere ([Shaiber et al. 2020](https://doi.org/10.1186/s13059-020-02195-w)), but briefly the program `anvi-compute-functional-enrichment` determined enrichment scores for functions (or metabolic modules) within groups of genomes by fitting a binomial generalized linear model (GLM) to the occurrence of each function (or complete metabolic module) in each group, and then computing a Rao test statistic, uncorrected p-values, and corrected q-values. We considered any function or metabolic module with a q-value less than 0.05 to be 'enriched' in its associated group (...)

{% include _experts.html question="enrichment analyses" githubs="adw96,ivagljiva" %}

## Metapangenomics

{:.notice-alt}
**TL;DR**: Cite this if you have used {% include PROGRAM name="anvi-meta-pan-genome" %}.

The metapangenomics was first introduced in this study. If you are using anvi'o to investigate how to bring together pangenomes and metagenomes, please consider citing this work as well.

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.7717/peerj.4320"></div>
<div class="__dimensions_badge_embed__" data-doi="10.7717/peerj.4320" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.7717/peerj.4320" target="_new">Linking pangenomes and metagenomes: the Prochlorococcus metapangenome</a></span>
    <span class="pub-authors"><span class="pub-member-author">Delmont TO</span>, <span class="pub-member-author">Eren AM</span></span>
    <span class="pub-journal"><b>PeerJ</b>, 6:e4320 <a href="https://doi.org/10.7717/peerj.4320" target="_blank">🔗</a></span>
</div>

{% include _experts.html question="metapangenomics" githubs="meren" %}

## Single-amino acid variants

If you are using anvi'o to study microbial population genetics through single-codon or single-amino acid variants, please consider also citing this work:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.7554/eLife.46497"></div>
<div class="__dimensions_badge_embed__" data-doi="10.7554/eLife.46497" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.7554/eLife.46497" target="_new">Single-amino acid variants reveal evolutionary processes that shape the biogeography of a global SAR11 subclade</a></span>
    <span class="pub-authors"><span class="pub-member-author">Delmont TO<sup>☯</sup></span>, <span class="pub-member-author">Kiefl E<sup>☯</sup></span>, Kilinc O, <span class="pub-member-author">Esen ÖC</span>, Uysal I, Rappé MS, Giovannoni S, <span class="pub-member-author">Eren AM</span></span>
    <span class="pub-co-first-authors"><sup>☯</sup>Co-first authors</span>
    <span class="pub-journal"><b>eLife</b>, 8:e46497 <a href="https://doi.org/10.7554/eLife.46497" target="_blank">🔗</a></span>
</div>

{% include _experts.html question="single-amino acid variants" githubs="ekiefl" %}

## Snakemake workflows

There is no standalone publication that describes the [anvi'o snakemake workflows](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/), although they were first introduced in the following work:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.1186/s13059-020-02195-w"></div>
<div class="__dimensions_badge_embed__" data-doi="10.1186/s13059-020-02195-w" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.1186/s13059-020-02195-w" target="_new">Functional and genetic markers of niche partitioning among enigmatic members of the human oral microbiome</a></span>
    <span class="pub-authors"><span class="pub-member-author">Shaiber A</span>, Willis AD, Delmont TO, Roux S, Chen L, <span class="pub-member-author">Schmid AC</span>, <span class="pub-member-author">Yousef M</span>, <span class="pub-member-author">Watson AR</span>, <span class="pub-member-author">Lolans K</span>, <span class="pub-member-author">Esen ÖC</span>, <span class="pub-member-author">Lee STM</span>, Downey N, Morrison HG, Dewhirst FE, Mark Welch JL<sup>‡</sup>, <span class="pub-member-author">Eren AM<sup>‡</sup></span></span>
    <span class="pub-co-first-authors"><sup>‡</sup>Co-senior authors</span>
    <span class="pub-journal"><b>Genome Biology</b>, 21:292 <a href="https://doi.org/10.1186/s13059-020-02195-w" target="_blank">🔗</a></span>
</div>

In a recent study, we cited our workflows the following way:

> (...)
>
> **‘Omics workflows**. Whenever applicable, we automated and scaled our ‘omics analyses using the bioinformatics workflows implemented by the program `anvi-run-workflow` ([Shaiber et al. 2020](https://doi.org/10.1186/s13059-020-02195-w)) in anvi’o ([Eren et al. 2021](https://doi.org/10.1038/s41564-020-00834-3)). Anvi’o workflows implement numerous steps of bioinformatics tasks including short-read quality filtering, assembly, gene calling, functional annotation, hidden Markov model search, metagenomic read-recruitment, metagenomic binning, pangenomics, and phylogenomics. Workflows use Snakemake ([Köster and Rahmann 2012](https://doi.org/10.1093/bioinformatics/bts480)) and a tutorial is available at the URL [http://merenlab.org/anvio-workflows/](http://merenlab.org/anvio-workflows/). The following sections detail these steps.
>
> (...)

But please consider mentioning the specific workflow you're using in your methods section, and giving a direct link to its help page [listed here](https://anvio.org/help/main/#anvio-workflows).

{% include _experts.html question="anvi'o snakemake workflows" githubs="ShaiberAlon,mschecht,semiller10" %}

## Metagenomic binning, genome refinement

{:.notice-alt}
**TL;DR**: Cite this if you have used {% include PROGRAM name="anvi-refine" %}.

If you used anvi'o for metagenomic binning or for the refinement of genomes, please consider citing this study, too:

<div class="pub_float">
<div class="altmetric-embed" data-badge-type="donut" data-doi="10.7717/peerj.1319"></div>
<div class="__dimensions_badge_embed__" data-doi="10.7717/peerj.1319" data-hide-zero-citations="true" data-legend="hover-bottom" data-style="small_circle"></div>
    <span class="pub-title"><a href=" https://doi.org/10.7717/peerj.1319" target="_new">Anvi’o: an advanced analysis and visualization platform for ‘omics data</a></span>
    <span class="pub-authors"><span class="pub-member-author">Eren AM</span>, <span class="pub-member-author">Esen ÖC</span>, Quince C, Vineis JH, Morrison HG, Sogin ML, <span class="pub-member-author">Delmont TO</span></span>
    <span class="pub-journal"><b>PeerJ</b>, 3:e1319 <a href="https://doi.org/10.7717/peerj.1319" target="_blank">🔗</a></span>
</div>

{% include _experts.html question="binning practices" githubs="tdelmont,meren" %}


