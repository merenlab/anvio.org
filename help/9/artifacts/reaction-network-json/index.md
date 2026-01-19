---
layout: artifact
title: reaction-network-json
excerpt: A JSON-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /9/reaction-network-json
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/JSON.png" alt="JSON" style="width:100px; border:none" />

A JSON-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-get-metabolic-model-file](../../programs/anvi-get-metabolic-model-file)</span></p>


## Required or used by


There are no anvi'o tools that use or require this artifact directly, which means it is most likely an end-product for the user.


## Description

This artifact represents **a JSON-formatted file derived from a <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span>**.

The program, <span class="artifact-p">[anvi-get-metabolic-model-file](/help/9/programs/anvi-get-metabolic-model-file)</span>, produces this file from the <span class="artifact-n">[reaction-network](/help/9/artifacts/reaction-network)</span> stored in a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> or <span class="artifact-n">[pan-db](/help/9/artifacts/pan-db)</span>. The genes, reactions, and metabolites predicted to be involved in metabolism can be inspected in this file, which is formatted for compatability with software used for flux balance analysis, such as [COBRApy](https://opencobra.github.io/cobrapy/).

<span class="artifact-p">[anvi-get-metabolic-model-file](/help/9/programs/anvi-get-metabolic-model-file)</span> includes an "objective function" as the first entry of the "reactions" section of the file, a prerequisite for flux balance analysis. The objective function represents the biomass composition of metabolites in the ["core metabolism" of *E. coli*](http://bigg.ucsd.edu/models/e_coli_core).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/reaction-network-json.md) to update this information.

