---
layout: artifact
title: cogs-data
excerpt: A DATA-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/cogs-data
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DATA.png" alt="DATA" style="width:100px; border:none" />

A DATA-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-setup-ncbi-cogs](../../programs/anvi-setup-ncbi-cogs)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-run-ncbi-cogs](../../programs/anvi-run-ncbi-cogs)</span></p>


## Description

This basically stores **a local copy of the data from the NCBI [COGs database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/) for function annotation.** 

It is required to run <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span> and is set up on your computer by the program <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span>. 

## Database version options

Last we checked, the following versions of NCBI COGs were available:
- `COG20` (the default): the 2020 release of the COGs database, described in [Galperin et al. 2021](https://doi.org/10.1093/nar/gkaa1018)
- `COG14`: the 2014 release of the COGs database, described in [Galperin et al. 2015](https://doi.org/10.1093/nar/gku1223)
- `arCOG14`: the archael COGs database from 2014, described in [Makarova, Wolf, and Koonin 2015](https://doi.org/10.3390/life5010818)

Please see the help page for <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span> if you want to learn how to choose which version to set up on your computer.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/cogs-data.md) to update this information.

