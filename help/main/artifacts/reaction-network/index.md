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

This artifact represents the metabolic reaction network, which can be stored in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> by <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>.

Reaction networks enable investigations of biochemical pathways at the molecular level, protein and metabolite abundances, and the relation of these to genomic data stored in anvi'o databases. Networks can be exported as a file formatted for compatibility with metabolic modeling packages such as COBRApy: see <span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span>.

## Network structure

The biochemical reactions used to construct a network are derived from [KEGG protein ortholog (KO)](https://www.genome.jp/kegg/ko.html) annotations of genes. Many KOs reference [KEGG REACTION IDs](https://www.genome.jp/kegg/reaction/) and [Enzyme Commission (EC) numbers](https://www.enzyme-database.org/class.php). These reaction accessions are in turn related to the [ModelSEED Biochemistry database](https://github.com/ModelSEED/ModelSEEDDatabase) to retrieve standardized data on reaction properties. The network's representation of metabolism is subject to all the limitations of these references, including missing protein annotations of genes and imprecise knowledge of the reactions catalyzed by enzymes. The creation of a functional flux balance model from the draft model represented by the network requires manual curation, including gap-filling of missing reactions.

![The basic structure of a reaction network](../images/png/network_basic.png)

A reaction network has the following structure. There are four types of nodes representing genes (or gene clusters in a pangenomic network), KOs, (ModelSEED) reactions, and metabolites (ModelSEED compounds). When the network is constructed, only gene KO annotations with stoichiometrically defined reactions are included. Each gene node references one or more KO nodes (each gene cluster node references only one KO node); KO nodes reference one or more reaction nodes; reaction nodes reference the metabolite nodes defining the reaction. The network stores a variety of information, including: KEGG Reaction and EC number aliases of the ModelSEED reactions; the strength of gene-KO annotations (e-values); reaction stoichiometry, reversibility, and substrate compartmentalization ("cytosolic" or "extracellular") according to the ModelSEED database; and compound formulae, structures as SMILES strings, and charges according to the ModelSEED database.

![The structure of a reaction network with imported protein and metabolite abundances](../images/png/network_abunds.png)

Protein and metabolite abundance data can be imported into a reaction network, enabling analysis of proteomics and metabolomics data in the context of biochemical pathways. <span class="artifact-p">[anvi-import-protein-profile](/help/main/programs/anvi-import-protein-profile)</span> and <span class="artifact-p">[anvi-import-metabolite-profile](/help/main/programs/anvi-import-metabolite-profile)</span> load abundance data into the network from tab-delimited files. New nodes are added to the network for each protein with abundance data; metabolite abundances are assigned to metabolite nodes already in the network. Protein and gene nodes reference each other, and each gene is currently only allowed to express a single protein.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/reaction-network.md) to update this information.

