---
layout: artifact
title: reaction-network
excerpt: A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/reaction-network
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-reaction-network](../../programs/anvi-reaction-network)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-get-metabolic-model-file](../../programs/anvi-get-metabolic-model-file)</span></p>


## Description

This artifact represents **the metabolic reaction network stored in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> by <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>.**

The program, <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>, generates a reaction network from genes encoding enzymes in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. The reaction network represents biochemical reactions and the constituent metabolites predicted from the genome. The program relies upon [KEGG Orthology (KO)](https://www.genome.jp/kegg/ko.html) annotations of protein-coding genes and reference data in the [ModelSEED Biochemistry database](https://github.com/ModelSEED/ModelSEEDDatabase), and is therefore subject to all the limitations thereof, including incomplete annotation of genes with protein orthologs and imprecise knowledge of the reactions catalyzed by enzymes.

The representation of the reaction network in two tables of the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, `gene_function_reactions` and `gene_function_metabolites`, is generalizable to other sources of metabolic data, linking genes to predicted functional orthologs and the associated reactions and metabolites. This data can be exported to a JSON-formatted file by <span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span> for inspection and metabolic model analyses.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/reaction-network.md) to update this information.

