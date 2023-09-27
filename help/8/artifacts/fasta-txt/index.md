---
layout: artifact
title: fasta-txt
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /8/fasta-txt
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

This is a file used by <span class="artifact-p">[anvi-run-workflow](/help/8/programs/anvi-run-workflow)</span> that lists the name and path of all of the input <span class="artifact-n">[fasta](/help/8/artifacts/fasta)</span> files.

In its simplest form, a <span class="artifact-n">[fasta-txt](/help/8/artifacts/fasta-txt)</span> is a TAB-delmited file with two columns for `name` and `path`. Here is an example:

|name|path|
|:--|:--|
|SAMPLE_01|path/to/sample_01.fa|
|SAMPLE_02|path/to/sample_02.fa|

Paths can be absolute or relative, and FASTA files can be compressed or not. That's all up to you.

One of the primary users of the <span class="artifact-n">[fasta-txt](/help/8/artifacts/fasta-txt)</span> is the [anvi'o snakemake workflows](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/), and to make it more compatible to complex workflow needs, <span class="artifact-n">[fasta-txt](/help/8/artifacts/fasta-txt)</span> supports the following additional columns to provide more information for each FASTA file when available, such as <span class="artifact-n">[external-gene-calls](/help/8/artifacts/external-gene-calls)</span> file and/or a <span class="artifact-n">[functions-txt](/help/8/artifacts/functions-txt)</span>.

Here is an example with those additional columns:

|name|path|external_gene_calls|gene_functional_annotation|
|:--|:--|:--|:--|
|SAMPLE_01|path/to/sample_01.fa|<span class="artifact-n">[external-gene-calls](/help/8/artifacts/external-gene-calls)</span>_01.txt|<span class="artifact-n">[functions-txt](/help/8/artifacts/functions-txt)</span>_01.txt|
|SAMPLE_02|path/to/sample_02.fa|<span class="artifact-n">[external-gene-calls](/help/8/artifacts/external-gene-calls)</span>_02.txt|<span class="artifact-n">[functions-txt](/help/8/artifacts/functions-txt)</span>_02.txt|

For more information, check out the [anvi'o workflow tutorial](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#fastatxt)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/fasta-txt.md) to update this information.

