---
layout: artifact
title: trna-gene-hits
excerpt: A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/trna-gene-hits
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-integrate-trnaseq](../../programs/anvi-integrate-trnaseq)</span></p>




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.




## Description

tRNA gene hits are the matches identified between tRNA-seq seeds -- the predicted tRNA transcripts from one or more tRNA-seq samples -- and tRNA genes in an associated (meta)genomic sample. <span class="artifact-p">[anvi-integrate-trnaseq](/help/main/programs/anvi-integrate-trnaseq)</span> stores a `trna-gene-hits` table in the <span class="artifact-n">[trnaseq-contigs-db](/help/main/artifacts/trnaseq-contigs-db)</span>. This table not only contains information to match seeds with genes, but also the identities of unmodified nucleotides at sites of predicted modification-induced substitutions.

Here is an example with samples from a single organism. <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span> is used to make a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> from the organism's genomic sequences. tRNA-seq samples are analyzed by the trnaseq <span class="artifact-n">[workflow](/help/main/artifacts/workflow)</span>. Outputs of the workflow include a <span class="artifact-n">[trnaseq-contigs-db](/help/main/artifacts/trnaseq-contigs-db)</span> from <span class="artifact-p">[anvi-merge-trnaseq](/help/main/programs/anvi-merge-trnaseq)</span> and tables of consolidated data -- <span class="artifact-n">[seeds-specific-txt](/help/main/artifacts/seeds-specific-txt)</span>, <span class="artifact-n">[seeds-non-specific-txt](/help/main/artifacts/seeds-non-specific-txt)</span>, and <span class="artifact-n">[modifications-txt](/help/main/artifacts/modifications-txt)</span> -- from <span class="artifact-p">[anvi-tabulate-trnaseq](/help/main/programs/anvi-tabulate-trnaseq)</span>. tRNA seeds can be formed from de novo tRNA predictions of one or more tRNA-seq samples: hopefully most tRNAs are expressed at measurable levels in all samples. <span class="artifact-p">[anvi-integrate-trnaseq](/help/main/programs/anvi-integrate-trnaseq)</span> compares seeds to tRNA genes to find confident matches and stores them in the `trna-gene-hits` table. It is common for a genome to have multiple copies of the same tRNA gene, resulting in a seed matched with multiple genes.

tRNA-seq samples from a metagenome differ because tRNA transcripts can arise from identical genes in multiple organisms. <span class="artifact-p">[anvi-integrate-trnaseq](/help/main/programs/anvi-integrate-trnaseq)</span> can be aware of bins to restrict hits to seeds that match genes in only one bin and not genes in any other bins or unbinned contigs.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/trna-gene-hits.md) to update this information.

