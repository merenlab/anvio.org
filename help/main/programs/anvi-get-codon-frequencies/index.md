---
layout: program
title: anvi-get-codon-frequencies
excerpt: An anvi'o program. Get codon or amino acid frequency statistics from genomes, genes, and functions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-codon-frequencies
image:
  featurerelative: ../../../images/header.png
  display: true
---

Get codon or amino acid frequency statistics from genomes, genes, and functions..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[codon-frequencies-txt](../../artifacts/codon-frequencies-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[aa-frequencies-txt](../../artifacts/aa-frequencies-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **calculates codon or amino acid frequencies from genes or functions**.

A range of options allows calculation of different frequency statistics. This program is "maximalist," in that it has many options that do the equivalent of a couple extra commands in R or pandas -- because we (not you) tend to be lazy and prone to mistakes.

## Basic commands

### Gene frequencies

This command produces a table of codon frequencies from coding sequences in the contigs database. The first column of the table contains gene caller IDs and subsequent columns contain frequency data. The decoded amino acid is included in each codon column name with the flag, `--header-amino-acids`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output.txt \
                           &#45;&#45;header&#45;amino&#45;acids
</div>

### Function frequencies

This command produces a table of function frequencies rather than gene frequencies. By using `--function-sources` without any arguments, the output will include every <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> source available in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, e.g., `KOfam`, `KEGG_BRITE`, `Pfam` (you can always see the complete list of <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> in *your* <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> by running the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span> on it). The first four columns of the table before frequency data contain, respectively, gene caller IDs, function sources, accessions, and names.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;function&#45;sources \
                           &#45;&#45;function&#45;table&#45;output path/to/function_output.txt
</div>

### Gene frequencies with function information

In contrast to the previous example, this command produces a table of gene frequencies, but has an entry for every gene/function pair, allowing statistical interrogation of the gene components of functions. The function table output is derived from this table by grouping rows by function source, retaining only one row per gene caller ID, and summing frequencies across rows of the groups.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;function&#45;sources \
                           &#45;&#45;gene&#45;table&#45;output path/to/gene_output.txt
</div>

### Codon frequencies from multiple internal and external genomes

This command produces a table of codon frequencies from coding sequences in multiple genomes. A column is added at the beginning of the table for genome name.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                           &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                           &#45;o path/to/output.txt
</div>

## Option examples

The following tables show the options to get the requested results.

### _Different_ frequency statistics

| Get | Options |
| --- | ------- |
| Codon absolute frequencies | |
| Codon relative frequencies | `--relative` |
| [Synonymous (per-amino acid) codon relative frequencies](#synonymous-codon-relative-frequencies) | `--synonymous` |
| Amino acid frequencies | `--amino-acid` |
| Amino acid relative frequencies | `--amino-acid --relative` |
| [Summed frequencies across genes](#frequencies-across-genes) | `--sum` |
| [Synonymous relative summed frequencies across genes](#frequencies-across-genes) | `--sum --synonymous` |
| [Summed frequencies across genes annotated by each function source](#frequencies-across-genes) | `--sum --function-sources` |
| [Relative summed frequencies across genes with KOfam annotations](#frequencies-across-genes) | `--sum --relative --function-sources KOfam` |
| [Average frequencies across all genes](#frequencies-across-genes) | `--average` |

### Frequencies from _sets of genes with shared functions_

| Get | Options |
| --- | ------- |
| All function annotation sources | `--function-sources` |
| [All KEGG BRITE categories](#brite-hierarchies) | `--function-sources KEGG_BRITE` |
| All KEGG KOfams and all Pfams | `--function-sources KOfam Pfam` |
| [Certain KEGG BRITE categories](#brite-hierarchies) | `--function-sources KEGG_BRITE --function-names Ribosome Ribosome>>>Ribosomal proteins` |
| [Certain KEGG KOfam accessions](#inputs) | `--function-sources KOfam --function-accessions K00001 K00002` |
| [Certain BRITE categories and KOfam accessions](#inputs) | `--select-functions-txt path/to/select_functions.txt` |

### Frequencies from _selections of genes_

| Get | Options |
| --- | ------- |
| From contigs database | `--contigs-db path/to/contigs.db` |
| From collection of internal genomes | `--contigs-db path/to/contigs.db --profile-db path/to/profile.db --collection-name my_bins` |
| From internal genome | `--contigs-db path/to/contigs.db --profile-db path/to/profile.db --collection-name my_bins --bin-id my_bin` |
| From internal genomes listed in a file | `--internal-genomes path/to/genomes.txt` |
| From external genomes (contigs databases) listed in a file | `--external-genomes path/to/genomes.txt` |
| With certain gene IDs | `--gene-caller-ids 0 2 500` |
| With certain gene IDs or genes annotated with certain KOfams | `--gene-caller-ids 0 2 500 --function-sources KOfam --function-accessions K00001` |

### _Filtering genes and codons_ that are analyzed and reported

| Get | Options |
| --- | ------- |
| [Exclude genes shorter than 300 codons](#gene-length-and-codon-count) | `--gene-min-codons 300` |
| [Exclude genes shorter than 300 codons from contributing to function codon frequencies](#function-codon-count) | `--gene-min-codons 300 --function-sources` |
| [Exclude functions with <300 codons](#function-codon-count) | `--function-min-codons 300` |
| [Exclude stop codons and single-codon amino acids](#codons) | `--exclude-amino-acids STP Met Trp` |
| [Only include certain codons](#codons) | `--include-amino-acids Leu Ile` |
| [Exclude codons for amino acids with <5 codons in >90% of genes](#codons) | `--pansequence-min-amino-acids 5 0.9` |
| [Replace codons for amino acids with <5 codons in the gene or function with NaN](#codons) | `--sequence-min-amino-acids 5` |

## Option details

### Synonymous codon relative frequencies

This flag returns the relative frequency of each codon among the codons encoding the same amino acid, e.g., 0.4 GCC and 0.6 GCT for Ala. By default, stop codons and single-codon amino acids (Met ATG and Trp TGG) in the standard translation table are excluded, equivalent to using `--exclude-amino-acids STP Met Trp` for other frequency statistics.

### Frequencies across genes

`--sum` and `--average` produce a table with a single row of frequencies from across genes. For example, the following command sums the codon frequencies of each decoded amino acid (and STP) across all genes, and then calculates the relative frequencies of the amino acids.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output_table.txt \
                           &#45;&#45;sum \
                           &#45;&#45;amino&#45;acid \
                           &#45;&#45;relative
</div>

The first column of the output table has the header, 'gene_caller_ids', and the value, 'all', indicating that the data is aggregated across genes.

`--sum` and `--average` operate on genes. When used with a function option, the program subsets the genes annotated by the functions of interest. With `--average`, it calculates the average frequency across genes rather than functions (sums of genes with functional annotation). For example, the following command calculates the average synonymous relative frequency across genes annotated by `KOfam`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output_table.txt \
                           &#45;&#45;average \
                           &#45;&#45;synonymous \
                           &#45;&#45;function&#45;sources KOfam
</div>

### Functions

Functions and function annotation sources can be provided to subset genes (as seen in the [last section](#frequencies-across-genes) with `--average`) and to calculate statistics for functions in addition to genes (as seen in a [previous example](#function-codon-frequencies).

Using `--output-file` is equivalent to `--gene-table-output` rather than `--function-table-output`, producing rows containing frequencies for annotated genes rather than summed frequencies for functions.

#### Inputs

There are multiple options to define which functions and sources should be used. `--function-sources` without arguments uses all available sources that had been used to annotate genes.

`--function-accessions` and `--function-names` select functions from a single provided source. The following example uses both options to select COG functions.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output_table.txt \
                           &#45;&#45;function&#45;sources COG14_FUNCTION \
                           &#45;&#45;function&#45;accessions COG0004 COG0005 \
                           &#45;&#45;function&#45;names "Ammonia channel protein AmtB" "Purine nucleoside phosphorylase"
</div>

To use different functions from different sources, a tab-delimited file can be provided to `functions-txt`. This headerless file must have three columns, for source, accession, and name of functions, respectively, with an entry in each row for source.

By default, selected function accessions or names do not need to be present in the input genomes; the program will return data for any selected function accessions or names that annotated genes. This behavior can be changed using the flag, `--expect-functions`, so that the program will throw an error when any of the selected accessions or names are absent.

#### BRITE hierarchies

Genes are classified in KEGG BRITE functional hierarchies by <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>. For example, a bacterial SSU ribosomal protein is classified in a hierarchy of ribosomal genes, `Ribosome>>>Ribosomal proteins>>>Bacteria>>>Small subunit`. Codon frequencies can be calculated for genes classified at each level of the hierarchy, from the most general, those genes in the `Ribosome`, to the most specific -- in the example, those genes in `Ribosome>>>Ribosomal proteins>>>Bacteria>>>Small subunit`. Therefore, the following command returns summed codon frequencies for each annotated hierarchy level -- in the example, the output would include four rows for the genes in each level from `Ribosome` to `Small subunit`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;codon&#45;frequencies &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output_table.txt \
                           &#45;&#45;function&#45;sources KEGG_BRITE
</div>

### Filter genes and codons

#### Codons

It may be useful to restrict codons in the analysis to those encoding certain amino acids. Stop codons and the single codons encoding Met and Trp are excluded by default from calculation of synonymous codon relative frequencies (`--synonymous`). Relative frequencies across codons in a gene (`--relative`) are calculated for the selected amino acids, so the following option would return a table of codon frequencies relative to the codons encoding the selected nonpolar amino acids: `--include-amino-acids Gly Ala Val Leu Met Ile`.

Dynamic exclusion of amino acids can be useful in the calculation of synonymous codon frequencies. For example, 0.5 AAT and 0.5 AAC for Asn may be statistically insignificant for a gene with 1 AAT and 1 AAC; even more meaningless would be 1.0 AAT and 0.0 AAC for a gene with 1 AAT and 0 AAC. `--pansequence-min-amino-acids` removes rarer amino acids across the dataset, setting a minimum number of codons in a minimum number of genes to retain the amino acid. For example, amino acids with <5 codons in >90% of genes will be excluded from the analysis with `--pansequence-min-amino-acids 5 0.9`.

Codons for rarer amino acids within each gene or function row can be excluded in the results table (replaced by NaN) with `--sequence-min-amino-acids`. This parameter only affects how the results are displayed. For example, amino acids with <5 codons in each row will be discarded in the results table with `--sequence-min-amino-acids 5`.

#### Gene length and codon count

Removal of genes with few codons can improve the statistical utility of relative frequencies. `--gene-min-codons` sets the minimum number of codons required in a gene, and this filter can be applied before and/or after the removal of rarer codons. Applied before, `--gene-min-codons` filters genes by length; applied after, it filters genes by codons remaining after removing rarer codons. `--min-codon-filter` can take three possible arguments: `length`, `remaining`, or, by default when codons are removed, `both`, which applies the `--gene-min-codons` filter both before and after codon removal.

It may seem redundant for `remaining` and `both` to both be possibilities, but this is due to the possibility of dynamic amino acid exclusion using `--pansequence-min-amino-acids`. Amino acids are removed based on their frequency in a proportion of genes, so removing shorter genes by length before removing amino acids can affect which amino acids are dynamically excluded.

#### Function codon count

`--function-min-codons` can be used to filter functions with a minimum number of codons. Function codon count filters occur after gene codon count filters: the set of genes contributing to function codon frequency can be restricted by applying `--gene-min-codons`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-codon-frequencies.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-codon-frequencies) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
