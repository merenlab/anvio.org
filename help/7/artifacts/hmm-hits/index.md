---
layout: help
title: hmm-hits [artifact]
categories: [anvio]
comments: false
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

Back to the **[main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-run-hmms](../../programs/anvi-run-hmms)</span> <span class="artifact-p">[anvi-scan-trnas](../../programs/anvi-scan-trnas)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-delete-hmms](../../programs/anvi-delete-hmms)</span> <span class="artifact-r">[anvi-get-sequences-for-hmm-hits](../../programs/anvi-get-sequences-for-hmm-hits)</span> <span class="artifact-r">[anvi-script-gen-hmm-hits-matrix-across-genomes](../../programs/anvi-script-gen-hmm-hits-matrix-across-genomes)</span> <span class="artifact-r">[anvi-script-get-hmm-hits-per-gene-call](../../programs/anvi-script-get-hmm-hits-per-gene-call)</span></p>


## Description

The search results for an <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>. Essentially, this is the part of a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span> that handles the HMM data. In anvi'o, this is usually functional annotations, such as identifying specfic ribosomal RNAs, various single-copy core genes, and transfer RNAs, though the user can also define their own HMM sources. 

Upon creation, a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span> will not contain any HMM results. In order to populate it, users can run <span class="artifact-n">[anvi-run-hmms](/help/7/programs/anvi-run-hmms)</span> using any <span class="artifact-n">[hmm-source](/help/7/artifacts/hmm-source)</span>. The program <span class="artifact-n">[anvi-scan-trnas](/help/7/programs/anvi-scan-trnas)</span> also populates a <span class="artifact-n">[contigs-db](/help/7/artifacts/contigs-db)</span>'s hmm-hits with potential tranfer RNA hits.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/hmm-hits.md) to update this information.

