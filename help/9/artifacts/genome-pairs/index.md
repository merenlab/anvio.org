---
layout: artifact
title: genome-pairs
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /9/genome-pairs
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact is typically provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


There are no anvi'o tools that generate this artifact, which means it is most likely provided to the anvi'o ecosystem by the user.


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-predict-metabolic-exchanges](../../programs/anvi-predict-metabolic-exchanges)</span></p>


## Description

This input file type describes pairs of genomes that go together in an analysis, and is usually paired with an <span class="artifact-n">[external-genomes](/help/9/artifacts/external-genomes)</span> file that describes where the '<span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span>'ssociated with each genome name is located.

In the context of <span class="artifact-p">[anvi-predict-metabolic-exchanges](/help/9/programs/anvi-predict-metabolic-exchanges)</span>, this file describes which pairs of genomes to predict exchanges between.

The file should be tab-delimited and contain at least two columns named `genome_1` and `genome_2`. Here is an example:

|**`genome_1`**|**`genome_2`**|
|:--|:--|
|name_of_one_genome|name_of_another_genome|
|E_coli|Pelagibacter_sp|
|another_genome|awesomegenome|

As long as the genome names match to those described in the accompanying <span class="artifact-n">[external-genomes](/help/9/artifacts/external-genomes)</span> file, you should be good to go.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/genome-pairs.md) to update this information.

