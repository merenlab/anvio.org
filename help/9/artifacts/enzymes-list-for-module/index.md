---
layout: artifact
title: enzymes-list-for-module
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /9/enzymes-list-for-module
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


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-script-gen-user-module-file](../../programs/anvi-script-gen-user-module-file)</span></p>


## Description

This is a 3-column, tab-delimited file that lists the enzymes to be included in a user-defined metabolic module. It is used as input to <span class="artifact-p">[anvi-script-gen-user-module-file](/help/9/programs/anvi-script-gen-user-module-file)</span>, which will create a module file using the enzyme definitions within the file.

The first column in this file must be an enzyme accession, the second column must be the annotation source of the enzyme, and the third column specifies the orthology (or functional definition) of the enzyme. Note that if the annotation source is 'KOfam' and the enzyme is a KEGG Ortholog that is present in the KEGG KOfam profiles in <span class="artifact-n">[kegg-data](/help/9/artifacts/kegg-data)</span>, then the orthology field can be blank. In this case, the orthology field will be filled in automatically with the enzyme's known orthology in the KOfam data.

Here is an example file:

|**enzyme**|**source**|**orthology**|
|:--|:--|:--|
|K01657|KOfam||
|K01658|KOfam||
|PF06603.14|METABOLISM_HMM|UpxZ|
|COG1362|COG20_FUNCTION|Aspartyl aminopeptidase|
|TIGR01709.2|TIGRFAM|type II secretion system protein GspL|


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/enzymes-list-for-module.md) to update this information.

