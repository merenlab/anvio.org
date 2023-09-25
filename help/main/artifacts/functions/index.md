---
layout: artifact
title: functions
excerpt: A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/functions
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-import-functions](../../programs/anvi-import-functions)</span> <span class="artifact-p">[anvi-run-cazymes](../../programs/anvi-run-cazymes)</span> <span class="artifact-p">[anvi-run-kegg-kofams](../../programs/anvi-run-kegg-kofams)</span> <span class="artifact-p">[anvi-run-ncbi-cogs](../../programs/anvi-run-ncbi-cogs)</span> <span class="artifact-p">[anvi-run-pfams](../../programs/anvi-run-pfams)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-analyze-synteny](../../programs/anvi-analyze-synteny)</span> <span class="artifact-r">[anvi-compute-functional-enrichment-across-genomes](../../programs/anvi-compute-functional-enrichment-across-genomes)</span> <span class="artifact-r">[anvi-compute-functional-enrichment-in-pan](../../programs/anvi-compute-functional-enrichment-in-pan)</span> <span class="artifact-r">[anvi-compute-metabolic-enrichment](../../programs/anvi-compute-metabolic-enrichment)</span> <span class="artifact-r">[anvi-delete-functions](../../programs/anvi-delete-functions)</span> <span class="artifact-r">[anvi-display-functions](../../programs/anvi-display-functions)</span> <span class="artifact-r">[anvi-export-functions](../../programs/anvi-export-functions)</span> <span class="artifact-r">[anvi-get-metabolic-model-file](../../programs/anvi-get-metabolic-model-file)</span> <span class="artifact-r">[anvi-setup-protein-reference-database](../../programs/anvi-setup-protein-reference-database)</span> <span class="artifact-r">[anvi-script-gen-function-matrix-across-genomes](../../programs/anvi-script-gen-function-matrix-across-genomes)</span> <span class="artifact-r">[anvi-script-gen-functions-per-group-stats-output](../../programs/anvi-script-gen-functions-per-group-stats-output)</span></p>


## Description

This is an artifact that describes **annotation of genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions**.

Broadly used across anvi'o, functions are one of the most essential pieces of information stored in any <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. To see what annotation sources for functions are available in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, you can use the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>.

To populate a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions, anvi'o includes multiple programs that can annotate genes using various sources of annotation. These programs include,

* <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span>, which uses NCBI's [COGs database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/),
* <span class="artifact-p">[anvi-run-pfams](/help/main/programs/anvi-run-pfams)</span>, which uses EBI's [Pfam database](https://pfam.xfam.org/),
* <span class="artifact-p">[anvi-run-cazymes](/help/main/programs/anvi-run-cazymes)</span>, which uses the dbCAN [CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/)
* <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>, which uses the [Kyoto Encyclopedia of Genes and Genomes](https://www.genome.jp/kegg/) (KEGG) database and produces <span class="artifact-n">[kegg-functions](/help/main/artifacts/kegg-functions)</span>, which is the necessary annotation information that can be used by the program <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>.

In addition, you can use the program <span class="artifact-p">[anvi-import-functions](/help/main/programs/anvi-import-functions)</span> with a simple <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span> to import functions from any other annotation source, or to import any ad hoc, user-defined function to later access through anvi'o interfaces or programs.

{:.notice}
You can use <span class="artifact-p">[anvi-import-functions](/help/main/programs/anvi-import-functions)</span> also to import functions from EggNOG or InterProScan as described in [this blog post](http://merenlab.org/2016/06/18/importing-functions/).

You can also use <span class="artifact-p">[anvi-export-functions](/help/main/programs/anvi-export-functions)</span> to obtain a file containing these functional annotations through a <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span> artifact, and use <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span> to show the distribution of functions across multiple <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>s.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/functions.md) to update this information.

