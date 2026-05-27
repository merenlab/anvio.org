---
layout: artifact
title: profile-summary
excerpt: A SUMMARY-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/profile-summary
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

The output directory produced by <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> when run on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> pair.

By default the directory is named `[PROJECT]-SUMMARY`. It requires a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and provides a comprehensive statistical and sequence-level breakdown of every bin in that collection.

## Output files

### bins_summary.txt

One row per <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>. Columns include bin name, taxon ID (if calculated), total nucleotides, total contigs, N50, GC content, completion, and redundancy.

### bin_by_bin/

A subdirectory per bin, each containing:

- A <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file of the bin's contigs
- <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> information
- Coverage, detection, and other read-recruitment statistics across each sample in the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>
- Domain and taxonomy predictions from single-copy core genes (see <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span>)

{:.notice}
In case you want to learn about the definitions of statistics like coverage, detection, abundance, variability, and so on, you should first read [Mike Lee's explanation of these statistics](https://merenlab.org/2017/05/08/anvio-views/). Our [vocabulary page](https://anvio.org/vocabulary/) might also be helpful. Then, keep in mind that anvi'o computes these values on a per-contig (and per-split) basis. When you run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, the program will summarize this information for a given bin by taking the average of a statistic's value across all splits in the bin, weighting that average by split length.

### bins_across_samples/

Tab-delimited matrix files compiling per-bin statistics across all samples — mean coverage, abundance, variability, and more. See [this post](https://merenlab.org/2017/05/08/anvio-views/) for definitions of these statistics.

### misc_data_layers/ and misc_data_items/

Any miscellaneous data imported into the database pair with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>, exported as <span class="artifact-n">[misc-data-items-txt](/help/main/artifacts/misc-data-items-txt)</span> and <span class="artifact-n">[misc-data-layers-txt](/help/main/artifacts/misc-data-layers-txt)</span> files.

### index.html

An HTML document that formats all summary information for convenient browsing without an anvi'o installation.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/profile-summary.md) to update this information.

