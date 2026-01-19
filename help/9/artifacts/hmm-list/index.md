---
layout: artifact
title: hmm-list
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /9/hmm-list
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


There are no anvi'o tools that use or require this artifact directly, which means it is most likely an end-product for the user.


## Description

The <span class="artifact-n">[hmm-list](/help/9/artifacts/hmm-list)</span> file is a TAB-delimited file with at least three columns:

* `name`: The name of the HMM. If you are using an external HMM it MUST match the name found in the `genes.txt`
* `source`: Name of the collection of HMMs the HMM is found in e.g. Bacterial_71. If you are using an external HMM, simply put the name of the directory.
* `path`: If using an [Default HMM sources](http://127.0.0.1:4000/help/main/artifacts/hmm-source/#default-hmm-sources) simply put "INTERNAL". On the other hand, if you are using a [user-defined HMM sources](http://127.0.0.1:4000/help/main/artifacts/hmm-source/#user-defined-hmm-sources) please put the full path to the anvi'o formatted HMM directory.

Here is an example of an <span class="artifact-n">[hmm-list](/help/9/artifacts/hmm-list)</span> using the HMM Ribosomal_L16 and Ribosomal_S2 from the internal anvi'o collection Bacteria_71:

| name          | source      | path     |
|---------------|-------------|----------|
| Ribosomal_L16 | Bacteria_71 | INTERNAL |
| Ribosomal_S2  | Bacteria_71 | INTERNAL |

You can also use external <span class="artifact-n">[hmm-source](/help/9/artifacts/hmm-source)</span>s! An easy way to get an anvi'o ready HMM directory is to use the script <span class="artifact-p">[anvi-script-pfam-accessions-to-hmms-directory](/help/9/programs/anvi-script-pfam-accessions-to-hmms-directory)</span> to download a [Pfam HMM](https://pfam.xfam.org/).

<div class="codeblock" markdown="1">
anvi&#45;script&#45;pfam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;pfam&#45;accessions&#45;list PF00016 &#45;O RuBisCO_large_HMM
</div>

Here is what the `hmm_list.txt` should look like with a combination of internal and external <span class="artifact-n">[hmm-source](/help/9/artifacts/hmm-source)</span>s:  

| name          | source            | path                       |
|---------------|-------------------|----------------------------|
| Ribosomal_L16 | Bacteria_71       | INTERNAL                   |
| Ribosomal_S2  | Bacteria_71       | INTERNAL                   |
| RuBisCO_large | RuBisCO_large_HMM | PATH/TO/RuBisCO_large_HMM/ |

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/hmm-list.md) to update this information.

