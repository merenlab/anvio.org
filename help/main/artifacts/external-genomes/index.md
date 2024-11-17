---
layout: artifact
title: external-genomes
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/external-genomes
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact is typically provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-script-gen-genomes-file](../../programs/anvi-script-gen-genomes-file)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-compute-functional-enrichment-across-genomes](../../programs/anvi-compute-functional-enrichment-across-genomes)</span> <span class="artifact-r">[anvi-compute-genome-similarity](../../programs/anvi-compute-genome-similarity)</span> <span class="artifact-r">[anvi-compute-metabolic-enrichment](../../programs/anvi-compute-metabolic-enrichment)</span> <span class="artifact-r">[anvi-dereplicate-genomes](../../programs/anvi-dereplicate-genomes)</span> <span class="artifact-r">[anvi-display-functions](../../programs/anvi-display-functions)</span> <span class="artifact-r">[anvi-estimate-genome-completeness](../../programs/anvi-estimate-genome-completeness)</span> <span class="artifact-r">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span> <span class="artifact-r">[anvi-gen-genomes-storage](../../programs/anvi-gen-genomes-storage)</span> <span class="artifact-r">[anvi-get-codon-frequencies](../../programs/anvi-get-codon-frequencies)</span> <span class="artifact-r">[anvi-get-codon-usage-bias](../../programs/anvi-get-codon-usage-bias)</span> <span class="artifact-r">[anvi-get-sequences-for-hmm-hits](../../programs/anvi-get-sequences-for-hmm-hits)</span> <span class="artifact-r">[anvi-script-gen-function-matrix-across-genomes](../../programs/anvi-script-gen-function-matrix-across-genomes)</span> <span class="artifact-r">[anvi-script-gen-functions-per-group-stats-output](../../programs/anvi-script-gen-functions-per-group-stats-output)</span> <span class="artifact-r">[anvi-script-gen-hmm-hits-matrix-across-genomes](../../programs/anvi-script-gen-hmm-hits-matrix-across-genomes)</span></p>


## Description

In the anvi'o lingo, an external genome is any <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> generated from a FASTA file that describes a single genome for a single microbial population (and not a metagenome).

The purpose of the external genomes file is to describe one or more external genomes, so this file can be passed to anvi'o programs that can operate on multiple genomes.

For a given set of <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files, you can generate an external-genomes file automatically using the program <span class="artifact-p">[anvi-script-gen-genomes-file](/help/main/programs/anvi-script-gen-genomes-file)</span>. Alternatively, you can manually create the file using a text editor, or a program like EXCEL.

The external-genomes file is a TAB-delimited file with at least two columns (you can add more columns to this file, and anvi'o will not mind):

* `name`. The name of the external genome. You can call it anything, but you should keep it to a single word witout any spaces or funny characters.
* `contigs_db_path`. The full path to each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> file (tip: the command `pwd` will tell you the full path to the directory you are in).

The format of the file should look like this:

|name|contigs_db_path|
|:--|:--|
|Name_01|/path/to/contigs-01.db|
|Name_02|/path/to/contigs-02.db|
|Name_03|/path/to/contigs-03.db|
|(...)|(...)|

{:.warning}
Please make sure names in the `name` column does not include any special characters (underscore is fine). It is also a good idea to keep these names short and descriptive as they will appear in various figures in downstream analyses.

Also see **<span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>** and **<span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span>**.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/external-genomes.md) to update this information.

