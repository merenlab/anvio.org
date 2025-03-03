---
layout: artifact
title: pan-db
excerpt: A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/pan-db
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DB.png" alt="DB" style="width:100px; border:none" />

A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-pan-genome](../../programs/anvi-pan-genome)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-analyze-synteny](../../programs/anvi-analyze-synteny)</span> <span class="artifact-r">[anvi-compute-functional-enrichment-in-pan](../../programs/anvi-compute-functional-enrichment-in-pan)</span> <span class="artifact-r">[anvi-compute-gene-cluster-homogeneity](../../programs/anvi-compute-gene-cluster-homogeneity)</span> <span class="artifact-r">[anvi-compute-genome-similarity](../../programs/anvi-compute-genome-similarity)</span> <span class="artifact-r">[anvi-compute-rarefaction-curves](../../programs/anvi-compute-rarefaction-curves)</span> <span class="artifact-r">[anvi-db-info](../../programs/anvi-db-info)</span> <span class="artifact-r">[anvi-delete-misc-data](../../programs/anvi-delete-misc-data)</span> <span class="artifact-r">[anvi-delete-state](../../programs/anvi-delete-state)</span> <span class="artifact-r">[anvi-display-pan](../../programs/anvi-display-pan)</span> <span class="artifact-r">[anvi-draw-kegg-pathways](../../programs/anvi-draw-kegg-pathways)</span> <span class="artifact-r">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span> <span class="artifact-r">[anvi-export-gene-clusters](../../programs/anvi-export-gene-clusters)</span> <span class="artifact-r">[anvi-export-items-order](../../programs/anvi-export-items-order)</span> <span class="artifact-r">[anvi-export-misc-data](../../programs/anvi-export-misc-data)</span> <span class="artifact-r">[anvi-export-state](../../programs/anvi-export-state)</span> <span class="artifact-r">[anvi-get-sequences-for-gene-clusters](../../programs/anvi-get-sequences-for-gene-clusters)</span> <span class="artifact-r">[anvi-import-collection](../../programs/anvi-import-collection)</span> <span class="artifact-r">[anvi-import-items-order](../../programs/anvi-import-items-order)</span> <span class="artifact-r">[anvi-import-misc-data](../../programs/anvi-import-misc-data)</span> <span class="artifact-r">[anvi-import-state](../../programs/anvi-import-state)</span> <span class="artifact-r">[anvi-merge-bins](../../programs/anvi-merge-bins)</span> <span class="artifact-r">[anvi-meta-pan-genome](../../programs/anvi-meta-pan-genome)</span> <span class="artifact-r">[anvi-migrate](../../programs/anvi-migrate)</span> <span class="artifact-r">[anvi-show-collections-and-bins](../../programs/anvi-show-collections-and-bins)</span> <span class="artifact-r">[anvi-show-misc-data](../../programs/anvi-show-misc-data)</span> <span class="artifact-r">[anvi-split](../../programs/anvi-split)</span> <span class="artifact-r">[anvi-summarize](../../programs/anvi-summarize)</span> <span class="artifact-r">[anvi-update-db-description](../../programs/anvi-update-db-description)</span> <span class="artifact-r">[anvi-script-add-default-collection](../../programs/anvi-script-add-default-collection)</span> <span class="artifact-r">[anvi-script-compute-bayesian-pan-core](../../programs/anvi-script-compute-bayesian-pan-core)</span></p>


## Description

A pan-db is an anvi’o database that contains **key information associated with your gene clusters**. This is vital for its pangenomic analysis, hence the name. If you want to learn more about the pangenomic workflow in Anvi'o, it has [its own tutorial here](http://merenlab.org/2016/11/08/pangenomics-v2/).

This is the output of the program <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span>, which can be run after you've created a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> with the genomes you want to analyze. That script does the brunt of the pangenomic analysis; it caluclates the similarity between all of the genes in your genomes-storage-db, clusters them and organizes the final clusters. All of the results of that analysis are stored in a pan-db.

You can use a pan database to run a variety of pangenomic analyses, including <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span>, <span class="artifact-p">[anvi-analyze-synteny](/help/main/programs/anvi-analyze-synteny)</span>, and <span class="artifact-p">[anvi-compute-functional-enrichment-in-pan](/help/main/programs/anvi-compute-functional-enrichment-in-pan)</span>. You can also view and interact with the data in a pan-db using <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span>. 

To add additional information to the pangenome display, you'll probably want to use <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>

## Advanced information for programmers

While it is possible to read and write a given anvi'o pan database through SQLite functions directly, one can also use anvi'o libraries to initiate a pan database to read from.

### Initiate a pan database instance

``` python
import argparse

from anvio.dbops import PanSuperclass

args = argparse.Namespace(pan_db="PAN.db", genomes_storage="GENOMES.db")

pan_db = PanSuperclass(args)

```

### Gene clusters dictionary

Once an instance from `PanSuperclass` is initiated, the following member function will give access to gene clusters:

``` pyton
pan_db.init_gene_clusters()
print(pan_db.gene_clusters)
```

```
{
  "GC_00000001": {
    "Genome_A": [19, 21],
    "Genome_B": [30, 32],
    "Genome_C": [122, 125],
    "Genome_D": [44, 42]
  },
  "GC_00000002": {
    "Genome_A": [123],
    "Genome_B": [176],
    "Genome_C": [175],
    "Genome_D": []
  },
  (...)
  "GC_00000036": {
    "Genome_A": [],
    "Genome_B": [24],
    "Genome_C": [],
    "Genome_D": []
  }
  (...)
```

Each item in this dictionary is a gene cluster describes anvi'o gene caller ids of each gene from each genome that contributes to this cluster.

### Sequences in gene clusters

```
gene_clusters_of_interest = set(["GC_00000006", "GC_00000036"])
gene_cluster_sequences = pan_db.get_sequences_for_gene_clusters(gene_cluster_names= gene_clusters_of_interest)

print(gene_cluster_sequences)
```

```
{
  "GC_00000006": {
    "Genome_A": {
      23: "MDVKKGWSGNNLND--NNNGSFTLFNAYLPQAKLANEAMHQKIMEMSAKAPNATMSITGHSLGTMISIQAVANLPQAD"
    },
    "Genome_B": {
      34: "MDVKKGWSGNNLND--NNNGSFTLFNAYLPQAKLANEAMHQKIMEMSAKAPNATMSITGHSLGTMISIQAVANLPQAD"
    },
    "Genome_C": {
      23: "MDVKKGWSGNNLNDWVNNNGSFTLFNAYLPQAKLANEAMHQKIMEMSAKAPNATMSITGHSLGTMISIQAVANLPQAD"
    },
    "Genome_D": {
      23: "MDVKKGWSGNNLNDWVNNAGSFTLFNAYLPQAKLANEAMHQKIMEMSAKAPNATMSITGHSLGTMISIQAVANLPQAD"
    }
  },
  "GC_00000036": {
    "Genome_A": {},
    "Genome_B": {
      24: "MSKRHKFKQFMKKKNLNPMNNRKKVGIILFATSIGLFFLFAFRTTYIVATGKVAGVSLKEKTA"
    },
    "Genome_C": {},
    "Genome_D": {}
  }
}
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/pan-db.md) to update this information.

