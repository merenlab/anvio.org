---
layout: artifact
title: trnaseq-contigs-db
excerpt: A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/trnaseq-contigs-db
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DB.png" alt="DB" style="width:100px; border:none" />

A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-merge-trnaseq](../../programs/anvi-merge-trnaseq)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-plot-trnaseq](../../programs/anvi-plot-trnaseq)</span> <span class="artifact-r">[anvi-tabulate-trnaseq](../../programs/anvi-tabulate-trnaseq)</span></p>


## Description

A tRNA-seq contigs database is a **<span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> variant containing information on tRNA transcripts identified from tRNA-seq experiments**.

This database is created by the program, <span class="artifact-p">[anvi-merge-trnaseq](/help/main/programs/anvi-merge-trnaseq)</span>, which is part of the [trnaseq-workflow](../../workflows/trnaseq/). This program also creates <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span>s. <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span> populates the tRNA-seq contigs database with taxonomic annotations.

This database functions in a manner equivalent to the normal metagenomic-style contigs database. As normal contigs databases are associated with a normal <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> containing coverage-related data, tRNA-seq contigs databases are associated with <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span>s. The name can be misleading: tRNA-seq contigs databases do not contain information on assembled contigs as such. Rather, the fundamental type of sequence reconstructed from a tRNA-seq experiment is a **tRNA seed**, representing a mature tRNA sequence (minus the 3'-CCA acceptor) found in one or more samples in the experiment. tRNA seeds are not predicted by assembly at all, but by the specialized software of <span class="artifact-p">[anvi-trnaseq](/help/main/programs/anvi-trnaseq)</span> and <span class="artifact-p">[anvi-merge-trnaseq](/help/main/programs/anvi-merge-trnaseq)</span>.

A variety of information on tRNA seeds is contained in a tRNA-seq contigs database, including structural profiles, taxonomic annotations, and user-defined bins.

## Uses

Tabulation of tRNA-seq data by <span class="artifact-p">[anvi-tabulate-trnaseq](/help/main/programs/anvi-tabulate-trnaseq)</span> requires a tRNA-seq contigs database and <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span>.

Interactive visualization of tRNA-seq datasets in <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> requires this database and a <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span>.

Visualization of grouped seeds by <span class="artifact-p">[anvi-plot-trnaseq](/help/main/programs/anvi-plot-trnaseq)</span> requires this database in addition to files produced by <span class="artifact-p">[anvi-tabulate-trnaseq](/help/main/programs/anvi-tabulate-trnaseq)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/trnaseq-contigs-db.md) to update this information.

