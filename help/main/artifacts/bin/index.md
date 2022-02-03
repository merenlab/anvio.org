---
layout: artifact
title: bin
excerpt: A BIN-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/bin
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/BIN.png" alt="BIN" style="width:100px; border:none" />

A BIN-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-cluster-contigs](../../programs/anvi-cluster-contigs)</span> <span class="artifact-p">[anvi-display-pan](../../programs/anvi-display-pan)</span> <span class="artifact-p">[anvi-interactive](../../programs/anvi-interactive)</span> <span class="artifact-p">[anvi-refine](../../programs/anvi-refine)</span> <span class="artifact-p">[anvi-rename-bins](../../programs/anvi-rename-bins)</span> <span class="artifact-p">[anvi-script-add-default-collection](../../programs/anvi-script-add-default-collection)</span> <span class="artifact-p">[anvi-script-compute-bayesian-pan-core](../../programs/anvi-script-compute-bayesian-pan-core)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-display-metabolism](../../programs/anvi-display-metabolism)</span> <span class="artifact-r">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span> <span class="artifact-r">[anvi-estimate-scg-taxonomy](../../programs/anvi-estimate-scg-taxonomy)</span> <span class="artifact-r">[anvi-estimate-trna-taxonomy](../../programs/anvi-estimate-trna-taxonomy)</span> <span class="artifact-r">[anvi-gen-fixation-index-matrix](../../programs/anvi-gen-fixation-index-matrix)</span> <span class="artifact-r">[anvi-gen-gene-level-stats-databases](../../programs/anvi-gen-gene-level-stats-databases)</span> <span class="artifact-r">[anvi-gen-variability-profile](../../programs/anvi-gen-variability-profile)</span> <span class="artifact-r">[anvi-get-short-reads-from-bam](../../programs/anvi-get-short-reads-from-bam)</span> <span class="artifact-r">[anvi-get-split-coverages](../../programs/anvi-get-split-coverages)</span> <span class="artifact-r">[anvi-inspect](../../programs/anvi-inspect)</span> <span class="artifact-r">[anvi-interactive](../../programs/anvi-interactive)</span> <span class="artifact-r">[anvi-merge-bins](../../programs/anvi-merge-bins)</span> <span class="artifact-r">[anvi-refine](../../programs/anvi-refine)</span> <span class="artifact-r">[anvi-rename-bins](../../programs/anvi-rename-bins)</span> <span class="artifact-r">[anvi-script-gen-distribution-of-genes-in-a-bin](../../programs/anvi-script-gen-distribution-of-genes-in-a-bin)</span></p>


## Description

In its simplest form, **a group of items** that are put together. Think of a literal bin in which you put data. One or more bins in anvi'o form a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>.

In anvi'o, a bin may reprsent one or more contigs, or gene clusters, or any item that can be shown in the interactive interface and stored in a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, or <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span>.

Bin names become handy to specifically target a group of items to investigate via programs such as <span class="artifact-p">[anvi-refine](/help/main/programs/anvi-refine)</span> or <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span>, specify a group of contigs in files such as <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, or find them in output files anvi'o generates via programs such as <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> or <span class="artifact-p">[anvi-estimate-genome-completeness](/help/main/programs/anvi-estimate-genome-completeness)</span>.

Since they are a part of the umbrella concept <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, information about bins are stored in various anvi'o databases, each of which can be used with the program <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span> to see the bin content.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/bin.md) to update this information.

