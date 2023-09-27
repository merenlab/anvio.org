---
layout: artifact
title: reaction-ref-data
excerpt: A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /8/reaction-ref-data
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DB.png" alt="DB" style="width:100px; border:none" />

A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-setup-modelseed-database](../../programs/anvi-setup-modelseed-database)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-reaction-network](../../programs/anvi-reaction-network)</span></p>


## Description

Reference databases required for <span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> are stored in **directories of downloaded files set up by <span class="artifact-p">[anvi-setup-modelseed-database](/help/8/programs/anvi-setup-modelseed-database)</span> and <span class="artifact-p">[anvi-setup-kegg-data](/help/8/programs/anvi-setup-kegg-data)</span>**.

<span class="artifact-p">[anvi-reaction-network](/help/8/programs/anvi-reaction-network)</span> currently relies upon comparison of KEGG Orthology (KO) gene annotations (<span class="artifact-n">[kegg-functions](/help/8/artifacts/kegg-functions)</span>) stored in a <span class="artifact-n">[contigs-db](/help/8/artifacts/contigs-db)</span> to reference databases: KEGG [KO](https://www.genome.jp/kegg/ko.html) and [ModelSEED Biochemistry](https://github.com/ModelSEED/ModelSEEDDatabase). The ModelSEED Biochemistry database harmonizes and consolidates reference data from multiple sources, including KEGG, in two comprehensive tables of reactions and compounds.

The KEGG databases (<span class="artifact-n">[kegg-data](/help/8/artifacts/kegg-data)</span>) can be obtained by running <span class="artifact-p">[anvi-setup-kegg-data](/help/8/programs/anvi-setup-kegg-data)</span>, and the ModelSEED database can be obtained by running <span class="artifact-p">[anvi-setup-modelseed-database](/help/8/programs/anvi-setup-modelseed-database)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/reaction-ref-data.md) to update this information.

