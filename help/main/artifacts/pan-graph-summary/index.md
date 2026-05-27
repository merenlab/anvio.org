---
layout: artifact
title: pan-graph-summary
excerpt: A SUMMARY-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/pan-graph-summary
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

The output directory produced by <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> when run on a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> and a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>.

By default the directory is named `[PROJECT]-PAN-GRAPH-SUMMARY`. It contains a set of flat files that together describe every synteny gene cluster (SynGC), every gene call, every genomic region, and the genome-level distance structure of the pan-graph.

## Output files

### SYNGCs.txt

One row per SynGC. Columns include:

- `node_id`: the SynGC identifier
- `bin_name`: the bin the SynGC was assigned to in the provided <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, or empty if no collection was given
- `source_gene_cluster_id`: the gene cluster in the source pangenome from which this SynGC was derived
- `node_type`, `region_id`, `region_type`: — structural context in the pan-graph
- `node_x`, `node_y`: 2D layout coordinates of the node in the pan-graph.

  {:.warning}
  **Please note**: The `node_x` and `node_y` variables stored in the database and reported in the summary output are **not** to be relied upon for any serious anlaysis as the x values are arbitrary, and **will not give you 'homologous' or 'OK to compare' nodes on the graph** *UNLESS* you are working with (1) a backbone region, (2) a tower with an exapnsion value of precisely one, or (3) some other case where you fully understand the context and able to say "it will work in this case". They are produced by Alex's topological layout algorithm during the first initialization of the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, and determine how the nodes are initially displayed when you first run <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>. Another thing to remember that changes you make in the interface may change those initial values, but those updates will not be reported in the summary output.

- `num_genomes_present`: the number of genomes in which the SynGC is present
- `genomes_present`: the genome names in which the SynGC is present

Additional columns in this file include items additional data keys carried over from the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>, and the consensus <span class="artifact-n">[functions](/help/main/artifacts/functions)</span>.

### GENESxSYNGCs.txt

Long-format table with one row per (genome × gene call). Columns include:

- `node_id`, `bin_name`, `source_gene_cluster_id`: valyes that link genes back to `SYNGCs.txt`
- `genome_name`, `gene_caller_id`: the anvi'o gene call id and the genome in which the gene is found
- `region_id`, `region_type`: details of the graph region the gene is found
- `aa_sequence` or `dna_sequence` (omitted when `--quick-summary` is used): the gene sequence

Additional columns in this file include <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> for each gene.

### REGIONS.txt

One row per genomic region (backbone or variable), dumped directly from the pan-graph regions table. Includes all region-level statistics such as the composite variability score, diversity, complexity, and expansion metrics.

### GENOMES_DIST_MAT.txt

Square genome × genome synteny distance matrix.

### GENOMES_DIST.newick

Newick tree over genomes derived from the distance matrix above.

### misc_data_layers/ and misc_data_items/

Any miscellaneous data imported into the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>, exported as tab-delimited files.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/pan-graph-summary.md) to update this information.

