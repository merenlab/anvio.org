---
layout: artifact
title: samples-txt
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/samples-txt
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


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-search-primers](../../programs/anvi-search-primers)</span></p>


## Description

A **TAB-delimited** file to describe samples and FASTQ files associated with them. By doing so, this file type links sample names to raw sequencing reads.

This file type includes required and optional columns.

{:.notice}
While these required and optional columns are what anvi'o is going to look for anytime you expect to process a TAB-delimited file as <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span>, you can have as many columns as you like in a given TAB-delimited to be used as <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> as long as it includes these required and optional columns.

The only **required** column is `sample` or `name`, which should be a single-word sample name.

The other required columns will depend on the type of sequencing data you have. For example, if you have paired-end Illumina reads, the
required columns will be `r1` and `r2`, which should point to the FASTQ files for pair one and pair two, respectively. If you have single-end Illumina reads, the only required column will be `r1`.
If you have long reads, the only required column will be `lr`, which should point to the FASTQ or FASTA file for long reads.

{:.notice}
The paths to FASTQ files can be absolute or relative to the location of the samples-txt file.

### Paired-end reads example
For paired-end reads, the samples-txt file should have at least the following three columns:

|sample|r1|r2|
|:--|:--|:--|
|Sample_01|/path/to/XXX-01-R1.fastq.gz|/path/to/XXX-01-R2.fastq.gz|
|Sample_02|/path/to/YYY-02-R1.fastq.gz|/path/to/YYY-02-R2.fastq.gz|
|Sample_03|/path/to/ZZZ-03-R1.fastq.gz|/path/to/ZZZ-03-R2.fastq.gz|

### Single-end reads example
For single-end reads, the samples-txt file should have at least the following two columns:

|sample|r1|
|:--|:--|
|Sample_01|/path/to/XXX-01-R1.fastq.gz|
|Sample_02|/path/to/YYY-02-R1.fastq.gz|
|Sample_03|/path/to/ZZZ-03-R1.fastq.gz|

### Long reads example
For long reads, the samples-txt file should have at least the following two columns:

|sample|lr|
|:--|:--|
|Sample_01|/path/to/XXX-01-lr.fastq.gz|
|Sample_02|/path/to/YYY-02-lr.fastq.gz|
|Sample_03|/path/to/ZZZ-03-lr.fastq.gz|

### Mixed reads example
If you have a mix of paired-end, single-end, and long reads, your samples-txt file should have at least the following columns:

|sample|r1|r2|lr|
|:--|:--|:--|:--|
|Sample_01|/path/to/XXX-01-R1.fastq.gz|/path/to/XXX-01-R2.fastq.gz||
|Sample_02|/path/to/YYY-02-R1.fastq.gz||/path/to/YYY-02-lr.fastq.gz|
|Sample_03|||/path/to/ZZZ-03-lr.fastq.gz|

### Additional optional column: group

The following is an **optional** column:

* `group`: A single-word categorical variable that assigns two or more samples into two or more groups. This is useful to co-assemble multiple samples so that you can bin them later.

For more information, see the [anvi'o workflow tutorial](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#samplestxt)

Here is an example samples.txt file with the optional `group` column in addition to the required columns for paired-end reads:

|sample|group|r1|r2|
|:--|:--|:--|:--|
|Sample_01|WARM|/path/to/XXX-01-R1.fastq.gz|/path/to/XXX-01-R2.fastq.gz|
|Sample_02|COLD|/path/to/YYY-02-R1.fastq.gz|/path/to/YYY-02-R2.fastq.gz|
|Sample_03|COLD|/path/to/ZZZ-03-R1.fastq.gz|/path/to/ZZZ-03-R2.fastq.gz|


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/samples-txt.md) to update this information.

