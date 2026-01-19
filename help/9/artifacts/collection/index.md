---
layout: artifact
title: collection
excerpt: A COLLECTION-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /9/collection
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/COLLECTION.png" alt="COLLECTION" style="width:100px; border:none" />

A COLLECTION-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-cluster-contigs](../../programs/anvi-cluster-contigs)</span> <span class="artifact-p">[anvi-display-pan](../../programs/anvi-display-pan)</span> <span class="artifact-p">[anvi-import-collection](../../programs/anvi-import-collection)</span> <span class="artifact-p">[anvi-interactive](../../programs/anvi-interactive)</span> <span class="artifact-p">[anvi-rename-bins](../../programs/anvi-rename-bins)</span> <span class="artifact-p">[anvi-script-add-default-collection](../../programs/anvi-script-add-default-collection)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-cluster-contigs](../../programs/anvi-cluster-contigs)</span> <span class="artifact-r">[anvi-delete-collection](../../programs/anvi-delete-collection)</span> <span class="artifact-r">[anvi-display-metabolism](../../programs/anvi-display-metabolism)</span> <span class="artifact-r">[anvi-estimate-genome-completeness](../../programs/anvi-estimate-genome-completeness)</span> <span class="artifact-r">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span> <span class="artifact-r">[anvi-estimate-scg-taxonomy](../../programs/anvi-estimate-scg-taxonomy)</span> <span class="artifact-r">[anvi-estimate-trna-taxonomy](../../programs/anvi-estimate-trna-taxonomy)</span> <span class="artifact-r">[anvi-export-collection](../../programs/anvi-export-collection)</span> <span class="artifact-r">[anvi-gen-gene-level-stats-databases](../../programs/anvi-gen-gene-level-stats-databases)</span> <span class="artifact-r">[anvi-get-aa-counts](../../programs/anvi-get-aa-counts)</span> <span class="artifact-r">[anvi-get-codon-frequencies](../../programs/anvi-get-codon-frequencies)</span> <span class="artifact-r">[anvi-get-codon-usage-bias](../../programs/anvi-get-codon-usage-bias)</span> <span class="artifact-r">[anvi-get-split-coverages](../../programs/anvi-get-split-coverages)</span> <span class="artifact-r">[anvi-merge-bins](../../programs/anvi-merge-bins)</span> <span class="artifact-r">[anvi-rename-bins](../../programs/anvi-rename-bins)</span> <span class="artifact-r">[anvi-split](../../programs/anvi-split)</span> <span class="artifact-r">[anvi-summarize](../../programs/anvi-summarize)</span> <span class="artifact-r">[anvi-script-gen-distribution-of-genes-in-a-bin](../../programs/anvi-script-gen-distribution-of-genes-in-a-bin)</span> <span class="artifact-r">[anvi-script-gen-genomes-file](../../programs/anvi-script-gen-genomes-file)</span></p>


## Description

An anvi'o concept that describes one or more <span class="artifact-n">[bin](/help/9/artifacts/bin)</span>s.

You can generate and store a collection by selecting items on any anvi'o <span class="artifact-n">[interactive](/help/9/artifacts/interactive)</span> interface or by importing them via <span class="artifact-p">[anvi-import-collection](/help/9/programs/anvi-import-collection)</span> into any anvi'o database that can store collections using the file format <span class="artifact-n">[collection-txt](/help/9/artifacts/collection-txt)</span>.

You can always use the program <span class="artifact-p">[anvi-show-collections-and-bins](/help/9/programs/anvi-show-collections-and-bins)</span> to list all collections and bins stored in a given anvi'o database.

Collections are used in many ways in anvi'o depending on your workflow as you can see from the number of programs that require or can make use of the concept <span class="artifact-n">[collection](/help/9/artifacts/collection)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/collection.md) to update this information.

