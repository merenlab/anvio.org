---
layout: artifact
title: genes-db
excerpt: A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/genes-db
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DB.png" alt="DB" style="width:100px; border:none" />

A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-gen-gene-level-stats-databases](../../programs/anvi-gen-gene-level-stats-databases)</span></p>




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.



## Can be used by

<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-db-info](../../programs/anvi-db-info)</span> <span class="artifact-r">[anvi-interactive](../../programs/anvi-interactive)</span> <span class="artifact-r">[anvi-migrate](../../programs/anvi-migrate)</span> <span class="artifact-r">[anvi-search-sequence-motifs](../../programs/anvi-search-sequence-motifs)</span></p>


## Description

An anvi'o genes database is a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>-like database that contains statistics, such their coverage and detection across samples, rather than contigs in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

A gene database for a given <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> stored in a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> will be automatically generated when <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> is run in 'gene mode'. For details, see the [relevant section](../../programs/anvi-interactive/#visualizing-genes-instead-of-contigs) in <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>

Alternatively, genes databases can be explicitly generated using the program <span class="artifact-p">[anvi-gen-gene-level-stats-databases](/help/main/programs/anvi-gen-gene-level-stats-databases)</span>. By default, this program will generate a gene database for each <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> for a given <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>.

In addition to gene-level coverage stats (i.e., mean coverage, detection, and non-outlier mean coverage and standard deviation of each gene in each sample), a genes database by default also stores five normalizations of non-outlier mean coverage values in a table called `gene_level_normalized_coverages`: `log1p`, `cov_per_million` (mean coverage depth per million mapped reads), and per-gene z-scores across samples for raw, log1p, and cov_per_million values (`zscore_raw`, `zscore_log1p`, and `zscore_cov_per_million`). These become additional views in gene mode. See <span class="artifact-p">[anvi-gen-gene-level-stats-databases](/help/main/programs/anvi-gen-gene-level-stats-databases)</span> for details, including how to skip computing them, and why that is required for profile databases with a single sample.

Genes databases generated with earlier versions of anvi'o can be upgraded with <span class="artifact-p">[anvi-migrate](/help/main/programs/anvi-migrate)</span>. Their normalized coverages will be computed the next time they are used by <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in gene mode, or by <span class="artifact-p">[anvi-gen-gene-level-stats-databases](/help/main/programs/anvi-gen-gene-level-stats-databases)</span>.

Due to the structural similarities between a <span class="artifact-n">[genes-db](/help/main/artifacts/genes-db)</span> and a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, many of the anvi'o programs that operate on profile databases will also run on genes databases. These programs include those that import/export states and import/export misc additional data.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/genes-db.md) to update this information.

