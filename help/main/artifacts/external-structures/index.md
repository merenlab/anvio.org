---
layout: artifact
title: external-structures
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/external-structures
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




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.



## Can be used by

<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-gen-structure-database](../../programs/anvi-gen-structure-database)</span> <span class="artifact-r">[anvi-update-structure-database](../../programs/anvi-update-structure-database)</span></p>


## Description

By default, anvi'o predicts protein structures (with MODELLER or ColabFold) when creating a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>. Yet, if the user provides an external structures file, then anvi'o does not predict anything, and instead uses this file to import pre-computed structures into the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>. This is handy when you already have structures, or when you predicted them with another tool (e.g. AlphaFold3).

External structures is a user-provided TAB-delimited file. Its header determines the format, and the format must match the input you are building the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> from (a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, or a pangenome). Anvi'o auto-detects which one you provided.

## File format

### From a contigs database

A two-column file mapping each gene caller id to a structure file:

|**gene_callers_id**|**path**|
|:--|:--|
|1|path/to/gene1/structure.pdb|
|2|path/to/gene2/structure.pdb|
|(...)|(...)|

where,

* **gene_callers_id** is a gene call in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>,
* **path** points to a <span class="artifact-n">[protein-structure-txt](/help/main/artifacts/protein-structure-txt)</span> for that gene.

### From a pangenome

When you build the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> from a pangenome (a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> plus its <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>), a gene is identified by the genome it comes from *and* its gene caller id, so the file has a genome column:

|**genome_name**|**gene_callers_id**|**path**|
|:--|:--|:--|
|G_01|1|path/to/structure_A.pdb|
|G_01|42|path/to/structure_B.pdb|
|G_02|17|path/to/structure_C.pdb|
|(...)|(...)|(...)|

where,

* **genome_name** is a genome in the <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>,
* **gene_callers_id** is a gene call in that genome,
* **path** points to a <span class="artifact-n">[protein-structure-txt](/help/main/artifacts/protein-structure-txt)</span> for that gene.

You do not provide the gene cluster: anvi'o derives it from the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> for each gene. Each gene must therefore belong to a gene cluster in your pangenome.

{:.notice}
Anvi'o will test the integrity of each file, and ultimately you may be subject to the strict requirements anvi'o sets forth (for example, if a structure has a missing residue, you will hear about it). In particular, the amino acid sequence in each structure file must match the sequence anvi'o has for that gene (from the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, or from the <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> for a pangenome).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/external-structures.md) to update this information.

