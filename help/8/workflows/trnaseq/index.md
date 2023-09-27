---
layout: program
title: The anvi'o 'trnaseq' workflow
excerpt: Process transfer RNA transcripts from tRNA-seq datasets
categories: [anvio]
comments: false
redirect_from: /8/trnaseq
image:
  featurerelative: ../../../images/header.png
  display: true
---

<i>Process transfer RNA transcripts from tRNA-seq datasets</i>

The trnaseq workflow takes in raw paired-end sequencing data generated from trna-seq libraries (i.e., the direct sequencing of transfer RNA transcripts from cultures or environmental samples), and processes these data to identify tRNA sequences and their structural features, predict chemical modification sites and modification fractions across samples, assign taxonomy to tRNA transcript seeds, and generate tables and summary data for downstream analyses. The tRNA-seq resources in anvi&#x27;o are operational, however, they are experimental. If you have datasets that are suitable for analysis, pelase consider getting in touch with us first.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Artifacts accepted

The trnaseq can typically be initiated with the following artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[workflow-config](../../artifacts/workflow-config) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[samples-txt](../../artifacts/samples-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>

## Artifacts produced

The trnaseq typically produce the following anvi'o artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[trnaseq-db](../../artifacts/trnaseq-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[trnaseq-contigs-db](../../artifacts/trnaseq-contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[trnaseq-profile-db](../../artifacts/trnaseq-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[trnaseq-seed-txt](../../artifacts/trnaseq-seed-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[modifications-txt](../../artifacts/modifications-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>

## Third party programs

This is a list of programs that may be used by the trnaseq workflow depending on the user settings in the <span class="artifact-p">[workflow-config](../../artifacts/workflow-config/) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span>:

<ul>
<li><a href="https://github.com/merenlab/illumina-utils" target="_blank">illumina-utils</a> (QC and merging of tRNA transcripts)</li><li><a href="https://github.com/BenLangmead/bowtie2" target="_blank">Bowtie2</a> (Mapping transcripts to tRNA seeds)</li>
</ul>

An anvi'o installation that follows the recommendations on the <a href="https://anvio.org/install/" target="_blank">installation page</a> will include all these programs. But please consider your settings, and cite these additional tools from your methods sections.

## Workflow description and usage


The tRNA-seq workflow is a [Snakemake](https://snakemake.readthedocs.io/en/stable/) workflow run by <span class="artifact-p">[anvi-run-workflow](/help/8/programs/anvi-run-workflow)</span>.

The workflow can run the following programs in order:

- [Illumina-utils](https://github.com/merenlab/illumina-utils), for merging paired-end reads and quality control
- <span class="artifact-p">[anvi-script-reformat-fasta](/help/8/programs/anvi-script-reformat-fasta)</span>, for making FASTA deflines anvio-compliant
- <span class="artifact-p">[anvi-trnaseq](/help/8/programs/anvi-trnaseq)</span>, for predicting tRNA sequences, structures, and modification sites in each sample
- <span class="artifact-p">[anvi-merge-trnaseq](/help/8/programs/anvi-merge-trnaseq)</span>, for predicting tRNA seed sequences and their modification sites from the set of samples
- <span class="artifact-p">[anvi-run-trna-taxonomy](/help/8/programs/anvi-run-trna-taxonomy)</span>, for assigning taxonomy to tRNA seeds
- <span class="artifact-p">[anvi-tabulate-trnaseq](/help/8/programs/anvi-tabulate-trnaseq)</span>, for generating tables of seed and modification information that are easily manipulated

## Input

The tRNA-seq workflow requires two files to run: a <span class="artifact-n">[workflow-config](/help/8/artifacts/workflow-config)</span> config file and a <span class="artifact-n">[samples-txt](/help/8/artifacts/samples-txt)</span>. You can obtain a 'default' config file for this workflow to further edit using the following command.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;workflow &#45;w trnaseq \
                  &#45;&#45;get&#45;default&#45;config config.json
</div>

Different "rules," or steps, of the workflow can be turned on and off as needed in the config file. The workflow can be restarted at intermediate rules without rerunning prior rules that have already completed.

<span class="artifact-n">[samples-txt](/help/8/artifacts/samples-txt)</span> will contain a list of FASTQ or FASTA files and associated information on each library. FASTQ files contain unmerged paired-end tRNA-seq reads. Reads are merged in the workflow by [Illumina-utils](https://github.com/merenlab/illumina-utils). FASTA files contain merged reads, and the initial read-merging steps in the workflow are skipped.

Here is an example tRNA-seq samples file with FASTQ inputs.

| sample | treatment | r1 | r2 | r1_prefix | r2_prefix |
| --- | --- | --- | --- | --- | --- |
| ecoli_A1_noDM | untreated | FASTQ/ecoli_A1_noDM.r1.fq.gz | FASTQ/ecoli_A1_noDM.r2.fq.gz | NNNNNN | TTCCAGT |
| ecoli_A1_DM | demethylase | FASTQ/ecoli_A1_DM.r1.fq.gz | FASTQ/ecoli_A1_DM.r2.fq.gz | NNNNNN | TCTGAGT |
| ecoli_B1_noDM | untreated | FASTQ/ecoli_B1_noDM.r1.fq.gz | FASTQ/ecoli_B1_noDM.r2.fq.gz | NNNNNN | TGGTAGT |
| ecoli_B1_DM | demethylase | FASTQ/ecoli_B1_DM.r1.fq.gz | FASTQ/ecoli_B1_DM.r2.fq.gz | NNNNNN | CTGAAGT |

The treatment column is optional. The treatment indicates a chemical application, such as demethylase, and can be used to have a bearing on seed sequence determination in <span class="artifact-p">[anvi-merge-trnaseq](/help/8/programs/anvi-merge-trnaseq)</span>. In the absence of a treatment column, all samples are assigned the same treatment, which can be specified in the `anvi_trnaseq` section of the workflow config file and defaults to `untreated`.

Read 1 and 2 prefix columns are also optional. These represent sequences that Illumina-utils should identify and trim from the start of the read. In the example, the read 1 prefix is a unique molecular identifier (UMI) of 6 random nucleotides, and the read 2 prefix is a sample barcode. Illumina-utils will discard the paired-end read if the prefix is not found. In the example, the read 1 UMI will always be found, but the read 2 barcode must match exactly.

Here is an equivalent tRNA-seq samples file with FASTA inputs.

| sample | treatment | fasta |
| --- | --- | --- |
| ecoli_A1_noDM | untreated | FASTA/ecoli_A1_noDM.fa.gz |
| ecoli_A1_DM | demethylase | FASTA/ecoli_A1_DM.fa.gz |
| ecoli_B1_noDM | untreated | FASTA/ecoli_B1_noDM.fa.gz |
| ecoli_B1_DM | demethylase | FASTA/ecoli_B1_DM.fa.gz |

Note that barcodes and other sequence prefixes should already be trimmed from FASTA sequences.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/workflows/trnaseq.md) to update this information.

