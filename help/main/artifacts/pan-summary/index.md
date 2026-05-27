---
layout: artifact
title: pan-summary
excerpt: A SUMMARY-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/pan-summary
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/SUMMARY.png" alt="SUMMARY" style="width:100px; border:none" />

A SUMMARY-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-summarize](../../programs/anvi-summarize)</span></p>




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.




## Description

The output directory produced by <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> when run on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>.

By default the directory is named `[PROJECT]-PAN-SUMMARY`. Its central file is a large tab-delimited table that describes every gene in every gene cluster of the pangenome, regardless of whether a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> was supplied.

## Output files

### [NAME]_gene_clusters_summary.txt

One row per (gene cluster × genome × gene call). Columns include:

- `gene_cluster_id` — the gene cluster the row belongs to
- `bin_name` — the bin the gene cluster was assigned to in the provided <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, or empty if no collection was given
- `genome_name`, `gene_callers_id` — the genome and gene call for this row
- items additional data keys carried over from the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>
- per-source function accessions and annotations
- `aa_sequence` or `dna_sequence` (omitted when `--quick-summary` is used)

### misc_data_layers/ and misc_data_items/

Any miscellaneous data imported into the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>, exported as tab-delimited files.

### index.html

An HTML document that formats all summary information for convenient browsing without an anvi'o installation.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/pan-summary.md) to update this information.

