---
layout: artifact
title: bams-and-profiles-txt
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/bams-and-profiles-txt
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


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-report-inversions](../../programs/anvi-report-inversions)</span></p>


## Description

A **TAB-delimited** file to describe anvi'o <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> and <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> pairs along with the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> used the profile the BAM file.

This file type includes required and optional columns. The following four columns are **required** for this file type:

* `name`: a single-word name for the entry.
* `contigs_db_path`: path to a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.
* `bam_file_path`: path to a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>.
* `profile_db_path`: path to a <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> generated from the BAM file and the contigs database mentioned.

### Example

Here is an example file:

|name|contigs_db_path|profile_db_path|bam_file_path|
|:--|:--:|:--:|:--:|
|D01|CONTIGS.db|D01/PROFILE.db|D01.bam|
|R01|CONTIGS.db|R01/PROFILE.db|R01.bam|
|R02|CONTIGS.db|R02/PROFILE.db|R02.bam|

### Optional columns

In addition to the required columns shown above, you can add as many columns as you like in your file. But two of these columns will be further processed during sanity check: `r1` and `r2`, whith the expectation that these columns will include information regarding the location of the raw FASTQ files. For each row the <span class="artifact-n">[bams-and-profiles-txt](/help/main/artifacts/bams-and-profiles-txt)</span> file describes, the FASTQ files must be those that were used to generate the BAM files. Here is an example file with these two additional columns: 

|name|contigs_db_path|profile_db_path|bam_file_path|r1|r2|
|:--|:--:|:--:|:--:|:--:|:--:|
|D01|CONTIGS.db|D01/PROFILE.db|D01.bam|D01-R1.fastq|D01-R2.fastq|
|R01|CONTIGS.db|R01/PROFILE.db|R01.bam|R01-R1.fastq|R01-R2.fastq|
|R02|CONTIGS.db|R02/PROFILE.db|R02.bam|R02-R1.fastq|R02-R2.fastq|

Some programs, such as <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span>, can process the `r1` and `r2` files.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/bams-and-profiles-txt.md) to update this information.

