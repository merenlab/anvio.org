---
layout: artifact
title: equivalent-compounds-txt
excerpt: A TXT-type anvi'o artifact. This artifact can be generated, used, and/or exported by anvi'o. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /9/equivalent-compounds-txt
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact can be generated, used, and/or exported **by anvi'o**. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


There are no anvi'o tools that generate this artifact, which means it is most likely provided to the anvi'o ecosystem by the user.


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-predict-metabolic-exchanges](../../programs/anvi-predict-metabolic-exchanges)</span></p>


## Description

This file describes pairs of ModelSEED compound IDs that should be considered equivalent to each other for the purposes of predicting potential metabolic exchanges with <span class="artifact-p">[anvi-predict-metabolic-exchanges](/help/9/programs/anvi-predict-metabolic-exchanges)</span>.

## Example file

The file should be tab-delimited and have four columns. The first two columns contain the pair of ModelSEED compound IDs that you consider equivalent, and the second two columns contain their respective human-readable names (for convenience when reading the file).

|**`compound_id`**|**`equivalent_id`**|**`name`**|**`equivalent_name`**|
|:--|:--|:--|:--|
|cpd00035|cpd01003|L-Alanine|Alanine|
|cpd00039|cpd19182|L-Lysine|Lysine|
|cpd00041|cpd19181|L-Aspartate|Aspartate|

## Pro Tip: generating the file automatically

If you run <span class="artifact-p">[anvi-predict-metabolic-exchanges](/help/9/programs/anvi-predict-metabolic-exchanges)</span> with the `--use-equivalent-amino-acids` flag, it will create a file of this type containing the set of amino acid compound equivalents it automatically finds in the ModelSEED database:

<div class="codeblock" markdown="1">
anvi&#45;predict&#45;metabolic&#45;exchanges &#45;c1 <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> &#45;c2 <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> \
                                 &#45;O ANY_PREFIX \
                                 &#45;&#45;use&#45;equivalent&#45;amino&#45;acids
</div>

You can modify the resulting output file as you want to remove or add new compound equivalents and make a custom set that can be passed to <span class="artifact-p">[anvi-predict-metabolic-exchanges](/help/9/programs/anvi-predict-metabolic-exchanges)</span> with the `--custom-equivalent-compounds-file` parameter.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/equivalent-compounds-txt.md) to update this information.

