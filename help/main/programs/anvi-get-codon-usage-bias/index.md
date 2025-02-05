---
layout: program
title: anvi-get-codon-usage-bias
excerpt: An anvi'o program. Get codon usage bias (CUB) statistics of genes and functions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-codon-usage-bias
image:
  featurerelative: ../../../images/header.png
  display: true
---

Get codon usage bias (CUB) statistics of genes and functions.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


This program **calculates codon usage bias (CUB) among genes or functions**.

A range of options allows control over the CUB calculation to remove statistically spurious results.

Some CUB metrics depend on a reference codon composition while others are reference-independent. The reference often constitutes expected high-expression genes, such as ribosomal proteins. This program allows customization of the reference. It also introduces an "omnibias" mode, in which reference compositions are determined from every gene (or function), and CUB is calculated for every combination of query and reference gene. This produces a square distance-like matrix of CUB values that can be used to cluster genes or functions by their biases relative to one another.

## Basic commands

### CUB of genes

This command produces a table of CUB values from coding sequences in the contigs database. The first column of the table contains gene caller IDs and each subsequent column contains values for a CUB metric, e.g., the Codon Adaptation Index (CAI) of [Sharp and Li, 1987](https://academic.oup.com/nar/article-abstract/15/3/1281/1166844?redirectedFrom=fulltext) and 𝛿 of [Ran and Higgs, 2012](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0051652).  CUB metrics that rely upon a reference codon composition, such as CAI and 𝛿, establish this composition from genes in the genome that are annotated as ribosomal proteins by KEGG KOfams/BRITE. Certain parameters have default values to increase the statistical significance of results (`--query-min-analyzed-codons`, `--reference-exclude-amino-acid-count`, `--reference-min-analyzed-codons`).

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output.txt
</div>

### CUB of functions

This command produces a table of CUB values for functions rather than genes. By using `--function-sources` without any arguments, the output will include every <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> source available in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, e.g., `KOfam`, `KEGG_BRITE`, `Pfam` (you can always see the complete list of <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> in *your* <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> by running the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span> on it). The first four columns of the table before CUB values contain, respectively, gene caller IDs, function sources, accessions, and names.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output.txt \
                          &#45;&#45;function&#45;sources
</div>

### Custom CUB reference gene set

This command establishes a CUB reference codon composition from genes with functional annotations defined a supplemental file. This file should be headerless, tab-delimited, and have three columns of function annotation sources (required), function accessions, and function names (either an accession or name is required).

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output.txt \
                          &#45;&#45;select&#45;reference&#45;functions&#45;txt path/to/select&#45;reference&#45;functions.txt
</div>

### "Omnibias" CUB

In reference-dependent CUB metrics, genes or functions are compared to a reference codon composition, such as from ribosomal proteins. "Omnibias" mode compares each gene/function "query" not to a single reference, but to each other gene/function. This generates a square distance-like matrix of CUB values that can be used to cluster genes/functions by their biases relative to one another. The output path given in the command is modified to create an output file of the omnibias matrix for each CUB metric.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output.txt \
                          &#45;&#45;omnibias
</div>

### CUB from multiple internal and external genomes

This command produces a CUB table per genome, modifying the output path given in the command to create a separate output file per genome. Collection of genomes can be provided as <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, or both:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                          &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                          &#45;o path/to/output.txt
</div>

## Option examples

The following tables show the options to get the requested results.

### Selecting CUB _metrics and references_

| Get | Options |
| --- | ------- |
| With certain, rather than all, CUB metrics | `--metrics cai` |
| With query sequences also used as references | `--omnibias` |
| [With a custom reference defined by functional annotations](#reference-functions) | `--select-reference-functions-txt path/to/select_reference_functions.txt` |
| [With a custom reference defined by certain genes](#reference-genes) | `--reference-gene-caller-ids 0 2 500` |

### CUB from _sets of genes with shared functions_

| Get | Options |
| --- | ------- |
| All function annotation sources | `--function-sources` |
| [All KEGG BRITE categories](#brite-hierarchies) | `--function-sources KEGG_BRITE` |
| All KEGG KOfams and all Pfams | `--function-sources KOfam Pfam` |
| [Certain KEGG BRITE categories](#brite-hierarchies) | `--function-sources KEGG_BRITE --function-names Ribosome Ribosome>>>Ribosomal proteins` |
| [Certain KEGG KOfam accessions](#inputs) | `--function-sources KOfam --function-accessions K00001 K00002` |
| [Certain BRITE categories and KOfam accessions](#inputs) | `--select-functions-txt path/to/select_functions.txt` |

### CUB from _selections of genes_

| Get | Options |
| --- | ------- |
| From contigs database | `--contigs-db path/to/contigs.db` |
| From collection of internal genomes | `--contigs-db path/to/contigs.db --profile-db path/to/profile.db --collection-name my_bins` |
| From internal genome | `--contigs-db path/to/contigs.db --profile-db path/to/profile.db --collection-name my_bins --bin-id my_bin` |
| From internal genomes listed in a file | `--internal-genomes path/to/genomes.txt` |
| From external genomes (contigs databases) listed in a file | `--external-genomes path/to/genomes.txt` |
| With certain gene IDs | `--gene-caller-ids 0 2 500` |
| With certain gene IDs or genes annotated with certain KOfams | `--gene-caller-ids 0 2 500 --function-sources KOfam --function-accessions K00001` |

### _Filtering genes and codons_ in analyzed and reported queries

| Get | Options |
| --- | ------- |
| [Exclude genes shorter than 300 codons from queries](#gene-length-and-codon-count) | `--gene-min-codons 300` |
| [Exclude genes shorter than 300 codons from contributing to function queries](#function-codon-count) | `--gene-min-codons 300 --function-sources` |
| [Exclude function queries with <300 codons](#function-codon-count) | `--function-min-codons 300` |
| [Exclude stop codons and single-codon amino acids](#codons) | `--exclude-amino-acids STP Met Trp` |
| [Exclude codons for amino acids with <5 codons in >90% of genes](#codons) | `--pansequence-min-amino-acids 5 0.9` |
| [Replace codons for amino acids with <5 codons in the gene or function with NaN](#codons) | `--sequence-min-amino-acids 5` |
| [Exclude queries with <300 codons involved in the CUB calculation](#analyzed-query-codon-count) | `--query-min-analyzed-codons 300` |

### _Filtering genes and codons_ in analyzed references

| Get | Options |
| --- | ------- |
| Codons with a frequency <20 are excluded from the reference and CUB calculation | `--reference-exclude-amino-acid-count 20` |
| Exclude references with <300 codons involved in the CUB calculation | `--reference-min-analyzed-codons 300` |

## Option details

### Functions

Functions and function annotation sources (e.g., 'KOfam', 'Pfam') can be provided to calculate CUB for functions rather than genes.

#### Inputs

There are multiple options to define which functions and sources should be used as CUB queries. `--functions-sources` without arguments uses all available sources that had been used to annotate genes.

`--function-accessions` and `--function-names` select functions from a single provided source. The following example uses both options to select COG functions.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output_table.txt \
                          &#45;&#45;function&#45;sources COG14_FUNCTION \
                          &#45;&#45;function&#45;accessions COG0004 COG0005 \
                          &#45;&#45;function&#45;names "Ammonia channel protein AmtB" "Purine nucleoside phorphorylase"
</div>

To use different functions from different sources, a tab-delimited file can be provided to `functions-txt`. This headerless file must have three columns, for source, accession, and name of functions, respectively, with an entry in each row for source.

By default, selected function accessions or names do not need to be present in input genomes; the program will query any selected function accessions or names that annotated genes. This behavior can be changed using the flag, `--expect-functions`, so that the program will throw an error when any of the selected accessions or names are absent.

#### BRITE hierarchies

Genes are classified in KEGG BRITE functional hierarchies by <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>. For example, a bacterial SSU ribosomal protein is classified in a hierarchy of ribosomal genes, `Ribosome>>>Ribosomal proteins>>>Bacteria>>>Small subunit`. CUB can be calculated for function queries at each level of the hierarchy, from the most general, those genes in the `Ribosome`, to the most specific -- in the example, those genes in `Ribosome>>>Ribosomal proteins>>>Bacteria>>>Small subunit`. Therefore, the following command returns CUB values for each annotated hierarchy level -- in the example, the output would include four rows for the genes in each level from `Ribosome` to `Small subunit`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;usage&#45;bias &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;o path/to/output_table.txt \
                          &#45;&#45;function&#45;sources KEGG_BRITE
</div>

### Custom reference

A custom reference codon composition for reference-dependent CUB calculations can be defined by functional annotations and/or genes IDs. By default, the reference codon composition is defined by the concatenation of all genes in the genome annotated as ribosomal proteins by KEGG KOfams/BRITE.

#### Reference functions

Use `--select-reference-functions-txt` to provide a table of functional annotations defining a custom set of reference genes. The tab-delimited file should not have a header, but should have three columns of 1) function annotation sources, such as 'KEGG_BRITE', 'KOfam', or 'Pfam', 2) function accession, such as 'K00001' for KOfam, and 3) function name, such as 'Ribosome>>>Ribosomal proteins' for KEGG_BRITE. Every row must contain a source and either a function accession or name.

#### Require all functions be present

Use `--expect-functions` to require that all functions that define the reference are found in the genome, else an error will be thrown. By default, not all provided functions need to be represented among the reference genes.

#### Reference genes

Use `--reference-gene-caller-ids` for select genes to be in the custom reference gene set. This only works when processing a single genome. An error will be thrown if not all of the provided gene caller IDs are present in the genome.

### Filter genes and codons

#### Codons

It may be useful to restrict codons in the analysis to those encoding certain amino acids. Stop codons are excluded by default from CUB calculations. Codons encoding a single amino acid (Met and Trp) do not factor into CUB calculations. Example: exclude Ala, Arg, and stop codons with `--exclude-amino-acids Ala Arg STP`.

Dynamic exclusion of amino acids can be useful in CUB calculations. For example, a query gene with 1 AAT and 1 AAC encoding Asn, or "synonymous relative frequencies" of 0.5 AAT and 0.5 AAC, has very little data to support comparison to the synonymous relative frequencies of a large number of Asn codons in a set of reference genes. A query with 1 AAT and 0 AAC, or synonymous relative frequencies of 1.0 AAT and 0.0 AAC, would be even more statistically insignificant. Reference-dependent CUB metrics, such as 𝛿, rely upon the ratio of synonymous relative codon frequencies in the query and reference, and so can be skewed for queries with small counts of various codons. `--pansequence-min-amino-acids` removes rarer amino acids across the dataset, setting a minimum number of codons in a minimum number of genes to retain the amino acid. For example, amino acids with <5 codons in >90% of genes will be excluded from the analysis with the arguments, `--pansequence-min-amino-acids 5 0.9`.

Codons for rarer amino acids within each gene or function query can be excluded from the CUB calculation with `--sequence-min-amino-acids`. For example, amino acids with <5 codons in a query will be excluded from the analysis with `--sequence-min-amino-acids 5`.

#### Gene length and codon count

Genes with fewer than a minimum number of codons can be ignored in the CUB analysis. `--gene-min-codons` sets the minimum number of codons required in a gene, and this filter can be applied before and/or after the removal of rarer codons. Applied before, `--gene-min-codons` filters genes by length; applied after, it filters genes by codons remaining after removing rarer codons. `--min-codon-filter` can take three possible arguments: `length`, `remaining`, or, by default when codons are removed, `both`, which applies the `--gene-min-codons` filter both before and after codon removal.

It may seem redundant for `remaining` and `both` to both be possibilities, but this is due to the possibility of dynamic amino acid exclusion using `--pansequence-min-amino-acids`. Amino acids are removed based on their frequency in a proportion of genes, so removing shorter genes by length before removing amino acids can affect which amino acids are dynamically excluded.

| Get | Options |
| --- | ------- |
| [Exclude genes shorter than 300 codons from queries](#gene-length-and-codon-count) | `--gene-min-codons 300` |
| [Exclude genes shorter than 300 codons from contributing to function queries](#function-codon-count) | `--gene-min-codons 300 --function-sources` |
| [Exclude function queries with <300 codons](#function-codon-count) | `--function-min-codons 300` |
| [Exclude stop codons and single-codon amino acids](#codons) | `--exclude-amino-acids STP Met Trp` |
| [Exclude codons for amino acids with <5 codons in >90% of genes](#codons) | `--pansequence-min-amino-acids 5 0.9` |
| [Replace codons for amino acids with <5 codons in the gene or function with NaN](#codons) | `--sequence-min-amino-acids 5` |
| [Exclude queries with <300 codons involved in the CUB calculation](#query-length) | `--query-min-analyzed-codons 300` |

#### Function codon count

Functions with fewer than a minimum number of codons can be ignored in the CUB analysis using `--function-min-codons`. Function codon count filters occur after gene codon count filters: the set of genes contributing to function codon frequency can be restricted by applying `--gene-min-codons`.

#### Analyzed query codon count

Filters removing codons from a gene or function query reduce the codon count factoring into the CUB calculation. `--query-min-analyzed-codons` ignores queries in the CUB calculation that have fewer than a minimum number of codons remaining. For example, `--query-min-analyzed-codons 300` ensures that after removing codons by `--exclude-amino-acids`, `--pansequence-min-amino-acids`, and/or `--sequence-min-amino-acids`, queries must have 300 codons involved in the CUB calculation.




{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-codon-usage-bias.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-codon-usage-bias) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
