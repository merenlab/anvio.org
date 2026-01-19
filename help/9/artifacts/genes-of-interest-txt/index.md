---
layout: artifact
title: genes-of-interest-txt
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /9/genes-of-interest-txt
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


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-display-structure](../../programs/anvi-display-structure)</span> <span class="artifact-r">[anvi-export-functions](../../programs/anvi-export-functions)</span> <span class="artifact-r">[anvi-export-gene-coverage-and-detection](../../programs/anvi-export-gene-coverage-and-detection)</span> <span class="artifact-r">[anvi-export-structures](../../programs/anvi-export-structures)</span> <span class="artifact-r">[anvi-gen-fixation-index-matrix](../../programs/anvi-gen-fixation-index-matrix)</span> <span class="artifact-r">[anvi-gen-gene-consensus-sequences](../../programs/anvi-gen-gene-consensus-sequences)</span> <span class="artifact-r">[anvi-gen-structure-database](../../programs/anvi-gen-structure-database)</span> <span class="artifact-r">[anvi-gen-variability-profile](../../programs/anvi-gen-variability-profile)</span> <span class="artifact-r">[anvi-profile-blitz](../../programs/anvi-profile-blitz)</span> <span class="artifact-r">[anvi-update-structure-database](../../programs/anvi-update-structure-database)</span></p>


## Description

Some anvi'o programs that analyze genes allow the user to specify gene caller IDs to work on (i.e., instead of all genes in a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span>). This can sometimes be done via the command line parameter `--gene-caller-ids`, which accepts a list (often comma-delimited) of gene caller IDs, and sometimes via the command line parameter `--genes-of-interest`, which accepts a file in which the gene caller IDs are stored.

The input file for `--genes-of-interest` looks like the following example, with every line of the file corresponding to a single, integer gene caller ID:

```
5
13
79
148
206
```

Ideally, each gene caller ID would match to those stored in the <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> currently being analyzed. But if this is not the case, some anvi'o programs will throw you an error to let you know of any mismatches.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/genes-of-interest-txt.md) to update this information.

