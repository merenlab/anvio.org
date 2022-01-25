---
layout: artifact
title: user-metabolism
excerpt: A TXT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/user-metabolism
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-compute-metabolic-enrichment](../../programs/anvi-compute-metabolic-enrichment)</span></p>


## Description

Output text files produced by <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> that describe the presence of **user-defined metabolic pathways** in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

These files are exactly the same format as those described by <span class="artifact-n">[kegg-metabolism](/help/main/artifacts/kegg-metabolism)</span>, but in addition to (or instead of) information on KEGG modules and KEGG Orthologs, they contain information on user-defined metabolic pathways" (and their component enzymes), as described in <span class="artifact-n">[user-modules-data](/help/main/artifacts/user-modules-data)</span>.

## How to get to this output?

You should first read the page on <span class="artifact-n">[user-modules-data](/help/main/artifacts/user-modules-data)</span> to learn how to define and set up your own metabolic pathways for use in anvi'o. The program that generates this output is <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>, and you should run that program with the `--user-modules` parameter to make sure the resulting text files contains the information on your user-defined metabolic pathways. There are two main ways to do it (which are also described on the <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> help page):

1. To get files describing user-defined metabolic modules _in addition to_ KEGG modules, just use the `--user-modules` parameter.

2. To get files describing _only_ user-defined metabolic modules (instead of KEGG stuff), use both `--user-modules` and `--only-user-modules` parameters.

## What do these files look like?

Check out the <span class="artifact-n">[kegg-metabolism](/help/main/artifacts/kegg-metabolism)</span> page for a comprehensive description of the file formats and various options to customize them. The examples on that page show KEGG data, but the format is the same for user-defined data.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/user-metabolism.md) to update this information.

