---
layout: artifact
title: reaction-network
excerpt: A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/reaction-network
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-reaction-network](../../programs/anvi-reaction-network)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-get-metabolic-model-file](../../programs/anvi-get-metabolic-model-file)</span></p>


## Description

This artifact represents **the metabolic reaction network stored in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> by <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>.**

Sufficient data is stored regarding the properties of the reactions and metabolites and their association with <span class="artifact-n">[kegg-functions](/help/main/artifacts/kegg-functions)</span> to export a metabolic model using <span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span>.

The network is stored in two tables of the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>: `gene_function_reactions` and `gene_function_metabolites`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/reaction-network.md) to update this information.

