---
layout: artifact
title: contig-classification
excerpt: A COLLECTION-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/contig-classification
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/COLLECTION.png" alt="COLLECTION" style="width:100px; border:none" />

A COLLECTION-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-import-contig-classification](../../programs/anvi-import-contig-classification)</span></p>




## Required by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-delete-contig-classification](../../programs/anvi-delete-contig-classification)</span></p>



## Can be used by

<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-split](../../programs/anvi-split)</span></p>


## Description

Contig-level classification data stored in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

Each contig is assigned a standardized integer class representing its predicted domain of origin, the name of the tool that produced the classification, the raw classification string from that tool, and an optional confidence score. Multiple sources (tools) can coexist in the same database, keyed by the `source` column value. See <span class="artifact-n">[contig-classification-txt](/help/main/artifacts/contig-classification-txt)</span> to learn how to format classification data into an input file for <span class="artifact-p">[anvi-import-contig-classification](/help/main/programs/anvi-import-contig-classification)</span>.

The standardized class vocabulary is:

| Class | Meaning |
|---|---|
| 0 | Non-eukaryotic |
| 1 | Eukaryotic |
| 2 | Virus |
| 3 | Plasmid |
| 4 | Organelle |
| 5 | Unclassified |

These standardized classes aren't enough for you? Let us know by [opening an issue in the anvi'o Github repository](https://github.com/merenlab/anvio/issues).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/contig-classification.md) to update this information.

