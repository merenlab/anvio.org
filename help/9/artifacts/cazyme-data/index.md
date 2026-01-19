---
layout: artifact
title: cazyme-data
excerpt: A DATA-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /9/cazyme-data
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DATA.png" alt="DATA" style="width:100px; border:none" />

A DATA-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-setup-cazymes](../../programs/anvi-setup-cazymes)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-run-cazymes](../../programs/anvi-run-cazymes)</span></p>


## Description

This stores a local copy of the data from the [dbCAN2 CAZyme HMM database](https://bcb.unl.edu/dbCAN2/download/Databases/) for functional annotation.

It is required to run <span class="artifact-p">[anvi-run-cazymes](/help/9/programs/anvi-run-cazymes)</span> and is set up on your computer by the program <span class="artifact-p">[anvi-setup-cazymes](/help/9/programs/anvi-setup-cazymes)</span>. 

## Database version options

The following versions of dbCAN CAZyme HMMs are currently supported by anvi'o: V9–V13.

You can find them at: `https://bcb.unl.edu/dbCAN2/download/Databases/V*/dbCAN-HMMdb-V*.txt`

Please see the help page for <span class="artifact-p">[anvi-setup-cazymes](/help/9/programs/anvi-setup-cazymes)</span> if you want to learn how to choose which version to set up on your computer.

## Notes for developers

[dbCAN3](https://bcb.unl.edu/dbCAN2/) has multiple other files available for download `https://bcb.unl.edu/dbCAN2/download/Databases/` that could be useful for future development of cazyme annotation in anvi'o including: 
- Substrate prediction based on dbCAN-sub majority voting: `dbCAN_sub.hmm`
- CAZyme family information: `FamInfo.txt.08022020.xls`

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/cazyme-data.md) to update this information.

