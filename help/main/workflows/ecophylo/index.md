---
layout: program
title: The anvi'o 'ecophylo' workflow
excerpt: Co-characterize the biogeography and phylogeny of any protein
categories: [anvio]
comments: false
redirect_from: /m/ecophylo
image:
  featurerelative: ../../../images/header.png
  display: true
---

<i>Co-characterize the biogeography and phylogeny of any protein</i>

The ecophylo workflow explores the **eco**logical and **phylo**genetic relationships between individual genes and environments. Briefly, the workflow extracts a target gene from any set of FASTA files (e.g., isolate genomes, [MAGs](https://anvio.org/vocabulary/#metagenome-assembled-genome-mag), [SAGs](https://anvio.org/vocabulary/#single-amplified-genome-sag), or simply assembled metagenomes) using a user-defined [HMM](https://anvio.org/vocabulary/#hidden-markov-models-hmms), and offers an integrated access to the phylogenetics of matching genes, and their distribution across environments.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Artifacts accepted

The ecophylo can typically be initiated with the following artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[workflow-config](../../artifacts/workflow-config) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[samples-txt](../../artifacts/samples-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[hmm-list](../../artifacts/hmm-list) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[metagenomes](../../artifacts/metagenomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>

## Artifacts produced

The ecophylo typically produce the following anvi'o artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>

## Third party programs

This is a list of programs that may be used by the ecophylo workflow depending on the user settings in the <span class="artifact-p">[workflow-config](../../artifacts/workflow-config/) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span>:

<ul>
<li><a href="https://github.com/BenLangmead/bowtie2" target="_blank">Bowtie2</a> (Read recruitment)</li><li><a href="https://github.com/soedinglab/MMseqs2" target="_blank">MMseqs2</a> (Cluster open reading frames)</li><li><a href="http://www.drive5.com/muscle/" target="_blank">muscle</a> (Align protein sequences)</li><li><a href="https://github.com/inab/trimal" target="_blank">trimal</a> (Trim multiple sequence alignment)</li><li><a href="https://github.com/Cibiv/IQ-TREE" target="_blank">IQ-TREE</a> (Calculate phylogenetic tree)</li><li><a href="http://www.microbesonline.org/fasttree/" target="_blank">FastTree</a> (Calculate phylogenetic tree)</li><li><a href="http://hmmer.org/" target="_blank">HMMER</a> (Search for homologous sequences)</li>
</ul>

An anvi'o installation that follows the recommendations on the <a href="https://anvio.org/install/" target="_blank">installation page</a> will include all these programs. But please consider your settings, and cite these additional tools from your methods sections.

## Workflow description and usage


The ecophylo workflow starts with a user-defined target gene ([HMM](https://anvio.org/vocabulary/#hidden-markov-models-hmms)) and a list of assembled genomes and/or metagenomes and results in an <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface that includes (1) a phylogenetic analysis of all genes found in genomes and metagenomes that match to the user-defined target gene, and (2) the distribution pattern of each of these genes across metagenomes if the user provided metagenomic short reads to survey.

The user-defined target genes can be described by an <span class="artifact-n">[hmm-list](/help/main/artifacts/hmm-list)</span>. Furthermore, the assemblies of genomes and/or metagenomes to search these genes can be passed to the workflow via the artifacts <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> and <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span>, respectively. Finally, the user can also provide a set of metagenomic short reads via the artifact <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> to recover the distribution patterns of genes.

In a standard run, ecophylo first identifies matching genes based on their [HMM](https://anvio.org/vocabulary/#hidden-markov-models-hmms)s, then clusters them based on sequence similarity at a threshold defined by the user, and finally selects a representative sequence from each cluster that contains more than two genes. Next, ecophylo calculates a phylogenetic tree to infer evolutionary associations between these sequences to produce a NEWICK-formatted <span class="artifact-n">[dendrogram](/help/main/artifacts/dendrogram)</span>. If the user provided a <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> for metagenomic [read recruitment](https://anvio.org/vocabulary/#read-recruitment), the workflow will also perform a [read recruitment](https://anvio.org/vocabulary/#read-recruitment) step to recover and store coverage statistics of the final set of genes for downstream analyses in the form of a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. The completion of the workflow will yield all files necessary to explore the results through an anvi'o <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface and investigate associations between ecological and evolutionary relationships between target genes. The workflow can use any [HMM](https://anvio.org/vocabulary/#hidden-markov-models-hmms) that models amino acid sequences. Using [single-copy core genes](https://anvio.org/vocabulary/#single-copy-core-gene-scg) such as Ribosomal Proteins will yield taxonomic profiles of metagenomes *de facto*.

The ecophylo workflow has 2 modes which can be designated in the <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> by changing the input files that are provided: [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes) and [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments). In [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes), the sequences will be used to calculate a phylogenetic tree. In [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments), the sequences will be used to calculate a phylogenetic tree and be additionally profiled via [read recruitment](https://anvio.org/vocabulary/#read-recruitment) across user-provided metagenomes.

## Required input

The ecophylo workflow requires the following files:

- <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span>: This allows you to customize the workflow step by step. Here is how you can generate the default version:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;workflow &#45;w ecophylo \
                  &#45;&#45;get&#45;default&#45;config config.json
</div>


{:.notice}
Here is a tutorial walking through more details regarding the ecophylo <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> file: coming soon!

- <span class="artifact-n">[hmm-list](/help/main/artifacts/hmm-list)</span>: This file designates which HMM should be used to extract the target gene from your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.
- <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> and/or <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>: These files hold the assemblies where you are looking for the target gene. Genomes in <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> can be reference genomes, [SAGs](https://anvio.org/vocabulary/#single-amplified-genome-sag), and/or [MAGs](https://anvio.org/vocabulary/#metagenome-assembled-genome-mag).

## tree-mode: Insights into the evolutionary patterns of target genes 

This is the simplest implementation of ecophylo where only an amino acid based phylogenetic tree is calculated. The workflow will extract the target gene from input assemblies, cluster and pick representatives, then calculate a phylogenetic tree based on the amino acid representative sequences. There are two sub-modes of [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes) which depend on how you pick representative sequences, [NT-mode](#nt-mode) or [AA-mode](#aa-mode) where extracted genes associated nucleotide version (NT) or the amino acid (AA) can be used to cluster the dataset and pick representatives, respectively.

### NT-mode

**Cluster and select representative genes based on NT sequences.**

This is the default version of [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes) where the extracted gene sequences are clustered based on their associated NT sequences. This is done to prepare for [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments),  where adequate sequence distance is needed between gene NT sequences to prevent [non-specific-read-recruitment](https://anvio.org/vocabulary/#non-specific-read-recruitment). The translated amino acid versions of the NT sequence clusters are then used to calculate an AA based phylogenetic tree. This mode is specifically useful to see what the gene phylogenetic tree will look like before the [read recruitment](https://anvio.org/vocabulary/#read-recruitment) step in [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments),  (for gene phylogenetic applications of ecophylo please see [AA-mode](#Cluster based on AA sequences - AA-mode)). If everything looks good you can add in your <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> and continue with [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments) to add metagenomic [read recruitment](https://anvio.org/vocabulary/#read-recruitment) results.

Here is what the start of the ecophylo <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> should look like if you want to run [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes):

```bash
{
    "metagenomes": "metagenomes.txt",
    "external_genomes": "external-genomes.txt",
    "hmm_list": "hmm_list.txt",
    "samples_txt": ""
}
```

### AA-mode

**Cluster and select representative genes based on AA sequences. If you are interested specifically in gene phylogenetics, this is the mode for you!**

This is another sub-version of [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes) where representative sequences are chosen via AA sequence clustering.

To initialize [AA-mode](#aa-mode), go to the rule `cluster_X_percent_sim_mmseqs` in the ecophylo <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> and turn "AA_mode" to true:

```bash
{
    "metagenomes": "metagenomes.txt",
    "external_genomes": "external-genomes.txt",
    "hmm_list": "hmm_list.txt",
    "samples_txt": ""
    "cluster_X_percent_sim_mmseqs": {
        "AA_mode": true,
    }
}
```

{:.notice}
Be sure to change the `--min-seq-id` of the `cluster_X_percent_sim_mmseqs` rule to the appropriate clustering threshold depending if you are in [NT-mode](#nt-mode) or [AA-mode](#aa-mode).

## profile-mode: Insights into the ecological and evolutionary patterns of target genes and environments

[profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments),  is an extension of default [tree-mode](#tree-mode-insights-into-the-evolutionary-patterns-of-target-genes) ([NT-mode](#nt-mode)) where NT sequences representatives are profiled with metagenomic reads from user provided metagenomic samples. This allows for the simultaneous visualization of phylogenetic and ecological relationships of genes across metagenomic datasets.

Additional required files:
- <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span>

To initialize [profile-mode](#profile-mode-insights-into-the-ecological-and-evolutionary-patterns-of-target-genes-and-environments), , add the path to your <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> to your ecophylo <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span>:

```bash
{
    "metagenomes": "metagenomes.txt",
    "external_genomes": "external-genomes.txt",
    "hmm_list": "hmm_list.txt",
    "samples_txt": "samples.txt"
}
```

## Config file options

Ecophylo will sanity check all input files that contain <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>s before the workflow starts. This can take a while especially if you are working with 1000's of genomes. If you want to skip sanity checks for <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>s in your <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> and/or <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> then adjust your config to the following:

```bash
{
    "run_genomes_sanity_check": false
}
```

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/workflows/ecophylo.md) to update this information.

