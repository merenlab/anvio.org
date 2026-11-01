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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-codon-usage-bias`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-codon-usage-bias [-h] [-c CONTIGS_DB] [-p PROFILE_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [--gene-caller-ids GENE_CALLER_IDS [GENE_CALLER_IDS ...]] [-i FILE_PATH] [-e FILE_PATH] [-o FILE_PATH] [--metrics [{cai,delta} ...]] [--encodings-txt ENCODINGS_TXT] [--function-sources [FUNCTION_SOURCES ...]] [--function-accessions FUNCTION_ACCESSIONS [FUNCTION_ACCESSIONS ...]] [--function-names FUNCTION_NAMES [FUNCTION_NAMES ...]] [--select-functions-txt SELECT_FUNCTIONS_TXT] [--expect-functions] [--shared-function-sources] [--omnibias] [--select-reference-functions-txt SELECT_REFERENCE_FUNCTIONS_TXT] [--expect-reference-functions] [--reference-gene-caller-ids REFERENCE_GENE_CALLER_IDS [REFERENCE_GENE_CALLER_IDS ...]] [--gene-min-codons GENE_MIN_CODONS] [--function-min-codons FUNCTION_MIN_CODONS] [--exclude-amino-acids EXCLUDE_AMINO_ACIDS [EXCLUDE_AMINO_ACIDS ...]] [--include-amino-acids INCLUDE_AMINO_ACIDS [INCLUDE_AMINO_ACIDS ...]] [--sequence-min-amino-acids SEQUENCE_MIN_AMINO_ACIDS] [--pansequence-min-amino-acids PANSEQUENCE_MIN_AMINO_ACIDS PANSEQUENCE_MIN_AMINO_ACIDS] [--min-codon-filter {length,remaining,both}] [--query-min-analyzed-codons QUERY_MIN_ANALYZED_CODONS] [--ignore-start-codons] [--reference-exclude-amino-acid-count REFERENCE_EXCLUDE_AMINO_ACID_COUNT] [--reference-min-analyzed-codons REFERENCE_MIN_ANALYZED_CODONS] [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-single-genome-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">SINGLE GENOME INPUTS</span> <span class="parameter-group-description">Get CUB of &quot;query&quot; genes or functions in a single genome. A contigs database can be provided alone as an &quot;external&quot; genome. An &quot;internal&quot; genome (bin) also requires a profile database, collection name, and bin ID.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return CUB for genes with these IDs.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-multiple-genome-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">MULTIPLE GENOME INPUTS</span> <span class="parameter-group-description">Get CUB from genes or functions in multiple genomes by providing internal and/or external genome files listing the genomes to analyze.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program writes one or more tab-delimited files of gene/function CUB statistics. All tables have gene/function row labels. 1.a. Single genome, single CUB metric, not omnibias mode: A table with one column of CUB data is written to the provided output file path. 1.b. Single genome, single CUB metric, omnibias mode: A table of gene/function x gene/function is written to the provided output file path. 2.a. Single genome, multiple CUB metrics, not omnibias mode: A table with a column of CUB data per metric is written to the provided output file path. 2.b. Single genome, multiple CUB metrics, omnibias mode: A table of gene/function x gene/function is written per reference-dependent CUB metric, and a single table with a column of CUB data per reference-independent metric is written to another file, with the provided output file path serving as a template for the new file paths. 3.a. Multiple genomes, single CUB metric, not omnibias mode: A table with one column of CUB data is written per genome, with the provided output file path serving as a template for the per-genome file paths. 3.b. Multiple genomes, single CUB metric, omnibias mode: A table of gene/function x gene/function is written per genome, with the provided output file path serving as a template for the per-genome file paths. 4.a. Multiple genomes, multiple CUB metrics, not omnibias mode: A table with a column of CUB data per metric is written per genome, with the provided output file path serving as a template for the per-genome file paths. 4.b. Multiple genomes, multiple CUB metrics, omnibias mode: A table of gene/function x gene/function is written per genome x CUB metric, and a table with a column of CUB data per reference-independent metric is written per genome, with the provided output file path serving as a template for the new file paths.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-cub_calculation">
<header class="parameter-group-header"><span class="parameter-group-title">CUB_CALCULATION</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-metrics"><code class="parameter-flags">--metrics</code> <code class="parameter-metavar">METRICS</code></dt>
<dd class="parameter-details"><span class="parameter-help">These are the metrics used in CUB calculations, with a separate calculation and a separate section of rows in the output table for each metric provided. When used as a flag, `--metrics` returns every possible metric. Some CUB metrics depend on definition of a reference codon composition, whereas others are reference-independent. &#x27;cai&#x27; is the reference-dependent Codon Adaptation Index of Sharp and Li (1987). &#x27;delta&#x27; is a reference-dependent metric of Ran and Higgs (2012, Eq. 6) that involves the overall codon composition of the genome in the comparison.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">cai</code> <code class="parameter-choice">delta</code></span></dd>
<dt class="parameter" id="parameter-encodings_txt"><code class="parameter-flags">--encodings-txt</code> <code class="parameter-metavar">ENCODINGS_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Changes to the standard genetic code can be provided in this tab-delimited file of two columns. Each entry in the first column is a codon and each entry in the second column is the three-letter code for the decoded amino acid. For example, to recode the stop codon, TGA, as Trp, &#x27;TGA&#x27; would be placed in the first column and &#x27;Trp&#x27; in the same row of the second. Stop/termination codons are abbreviated &quot;STP&quot;. This option affects per-amino acid and synonymous codon output (when using `--return-amino-acids` or `--synonymous`).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-function-selection">
<header class="parameter-group-header"><span class="parameter-group-title">FUNCTION SELECTION</span> <span class="parameter-group-description">Calculate CUB for functions rather than genes. The codon frequencies of genes annotated by a function are summed, treating functions as concatenations of genes, with longer genes contributing more than shorter genes to function codon usage. Alternative methods of combining gene codon frequencies, such as averaging genes, would not treat every gene equally. Averaging means that short genes have equal importance as long genes in the CUB of a function, which could imply that short genes are rate-limiting and therefore need to be favored for translation.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-function_sources"><code class="parameter-flags">--function-sources</code> <code class="parameter-metavar">FUNCTION_SOURCES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return CUB for functions annotated by these sources, e.g., &#x27;KOfam&#x27;, &#x27;KEGG_BRITE&#x27;, &#x27;COG20_FUNCTION&#x27;. If `--function-sources` is used as a flag without any arguments, then every source will be considered.</span></dd>
<dt class="parameter" id="parameter-function_accessions"><code class="parameter-flags">--function-accessions</code> <code class="parameter-metavar">FUNCTION_ACCESSIONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return CUB for functions with these accessions from the source provided in `--function-sources`. To get accessions from multiple sources, instead use `--select-functions-txt`.</span></dd>
<dt class="parameter" id="parameter-function_names"><code class="parameter-flags">--function-names</code> <code class="parameter-metavar">FUNCTION_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return CUB for functions with these names from the source provided in `--function-sources`. To get function names from multiple sources, instead use `--select-functions-txt`.</span></dd>
<dt class="parameter" id="parameter-select_functions_txt"><code class="parameter-flags">--select-functions-txt</code> <code class="parameter-metavar">SELECT_FUNCTIONS_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Functions to select can be listed in this tab-delimited file of three columns. The first column should contain function annotation sources, the second column accessions, and the third function names. An entry in the source column is required in every row, and either an accession or name, or both, should also be in a row. Column names should not be provided.</span></dd>
<dt class="parameter parameter-switch" id="parameter-expect_functions"><code class="parameter-flags">--expect-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, functions provided by `--function-accessions`, `--function-names`, and `--select-functions-txt` need not be annotated in the input genomes. With this flag, an error will be raised if any of the functions are not present.</span></dd>
<dt class="parameter parameter-switch" id="parameter-shared_function_sources"><code class="parameter-flags">--shared-function-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">When analyzing multiple genomes, exclude function annotation sources that were not run on every genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-reference">
<header class="parameter-group-header"><span class="parameter-group-title">REFERENCE</span> <span class="parameter-group-description">Certain CUB metrics rely on definition of a reference codon composition. Often, a set of housekeeping genes including ribosomal proteins is used as the reference. Reference codon frequencies are the sums of the reference gene codon frequencies (long genes contribute more to reference codon frequencies than short genes). By default, reference genes are ribosomal proteins annotated by KEGG KOfams/BRITE, requiring input contigs databases to have been annotated by `anvi-run-kegg-kofams`. Specifically, the genes must be classified within BRITE as &#x27;Ribosome&gt;&gt;&gt;Ribosomal proteins&#x27;.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-omnibias"><code class="parameter-flags">--omnibias</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use every gene or function as a separate reference rather than defining a set of reference genes or functions. The resulting table of gene x gene (or function x function) CUB values is like a distance matrix of the similarity of gene codon compositions.</span></dd>
<dt class="parameter" id="parameter-select_reference_functions_txt"><code class="parameter-flags">--select-reference-functions-txt</code> <code class="parameter-metavar">SELECT_REFERENCE_FUNCTIONS_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Rather than using the default reference, selected reference functions can be listed in a headerless, tab-delimited file of three columns. Each row is a selected annotation. The first column must contain function annotation sources, the second column should contain function accessions, and the third columns should contain function names. Functions can be selected by function name or accession, so a value can be provided for one or the other. In summary, every row requires a source in the first column and either an accession or name in the second and third columns, respectively.</span></dd>
<dt class="parameter parameter-switch" id="parameter-expect_reference_functions"><code class="parameter-flags">--expect-reference-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, reference functions provided by `--select-reference-functions-txt` do not all need to be annotated in the input genomes. For example, if two KEGG BRITE categories are used as references -- &#x27;Ribosome&gt;&gt;&gt;Ribosomal proteins&gt;&gt;&gt;Bacteria&#x27; and &#x27;Transcription machinery&gt;&gt;&gt;Prokaryotic type&gt;&gt;&gt;Bacterial type&gt;&gt;&gt;RNA polymerase&#x27; -- and genes are found to be annotated by only one of the categories, then these genes will be used as the reference. If this flag is used, then an error would instead be raised since one of the reference functions is not represented in the genome.</span></dd>
<dt class="parameter" id="parameter-reference_gene_caller_ids"><code class="parameter-flags">--reference-gene-caller-ids</code> <code class="parameter-metavar">REFERENCE_GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Include specific genes in the reference gene set, as given by their gene caller IDs in the contigs database. This option can only be used with a single genome -- a single contigs database, internal genome, or external genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filter-genes-functions-codons">
<header class="parameter-group-header"><span class="parameter-group-title">FILTER GENES, FUNCTIONS, CODONS</span> <span class="parameter-group-description">Genes/functions can be filtered by the number of codons they contain, e.g., ignore genes shorter than 300 codons. Codons can be selected a priori, e.g., ignore Ala codons, or rarer codons can be excluded, e.g., ignore amino acids that are decoded by ≤3 codons in ≥90%% of genes. Filters can improve the statistical utility of CUB data. These filters do not apply to the reference gene set.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_min_codons"><code class="parameter-flags">--gene-min-codons</code> <code class="parameter-metavar">GENE_MIN_CODONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the minimum number of codons required in a gene forming a gene/function queries. When functions are returned rather than genes, this filter is applied to genes before grouping them as functions.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-function_min_codons"><code class="parameter-flags">--function-min-codons</code> <code class="parameter-metavar">FUNCTION_MIN_CODONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the minimum number of codons required in a function &quot;query&quot;. Genes with fewer than `--gene-min-codons` are first removed, and then functional groups of the remaining genes with fewer than `--function-min-codons` are removed. This filter only applies when returning function queries.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-exclude_amino_acids"><code class="parameter-flags">--exclude-amino-acids</code> <code class="parameter-metavar">EXCLUDE_AMINO_ACIDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove codons that decode the given amino acids (use three-letter codes, e.g., Ala). Amino acids encoded by a single codon (Met and Trp) are excluded perforce from CUB calculations and do not have to be made explicit here. Importantly, to continue to exclude stop codons, as per the default, make sure to include &quot;STP&quot; in the argument: exclusion of Ala and stop codons is achieved with &quot;Ala STP&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">[&#x27;STP&#x27;]</code></span></dd>
<dt class="parameter" id="parameter-include_amino_acids"><code class="parameter-flags">--include-amino-acids</code> <code class="parameter-metavar">INCLUDE_AMINO_ACIDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is the complement of `--exclude-amino-acids`. Only codons for the given amino acids are analyzed.</span></dd>
<dt class="parameter" id="parameter-sequence_min_amino_acids"><code class="parameter-flags">--sequence-min-amino-acids</code> <code class="parameter-metavar">SEQUENCE_MIN_AMINO_ACIDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove codons for amino acids (and STP) that are less numerous than the given argument. For example, if the argument is 5, and a gene or function query has 4 codons encoding Asn, 2 AAT and 2 AAC, then Asn will be disregarded in the calculation of CUB for this query.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-pansequence_min_amino_acids"><code class="parameter-flags">--pansequence-min-amino-acids</code> <code class="parameter-metavar">PANSEQUENCE_MIN_AMINO_ACIDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">The first value of the argument is a positive integer representing a minimum number of codons encoding an amino acid -- &#x27;min_amino_acids&#x27; -- and the second is a number between 0 and 1 representing a fraction of genes -- &#x27;min_gene_fraction&#x27;. Remove codons for amino acids (and STP) that are less numerous than &#x27;min_amino_acids&#x27; in a &#x27;min_gene_fraction&#x27; of genes. For example, if &#x27;min_amino_acids&#x27; is 5 and &#x27;min_gene_fraction&#x27; is 0.9, then if there are fewer than 5 codons for an amino acid/STP in ≥90% of genes, the amino acid&#x27;s codons do not factor into the calculation of CUB for any query.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">[0, 1.0]</code></span></dd>
<dt class="parameter" id="parameter-min_codon_filter"><code class="parameter-flags">--min-codon-filter</code> <code class="parameter-metavar">MIN_CODON_FILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This argument arises from the ambiguity of filters that remove genes and functions by number of codons (`--gene-min-codons` and `--function-min-codons`) in relation to the filters that drop codons (`--exclude/include-amino-acids` and `--exclude-amino-acid-count/fraction`). Genes (and functions) can be filtered by their full length, e.g., genes shorter than 300 codons are ignored. They can also be filtered by the number of codons remaining after dropping codons. The codon length filter followed by dropping codons can result in genes and functions with fewer codons than the original codon threshold -- thus the option of both &quot;length&quot; and &quot;remaining&quot; filters to ensure that total codon frequencies always meet the minimum codon threshold. &quot;both&quot; is needed as an option in addition to &quot;remaining&quot; so dynamic codon filtering by `--exclude-amino-acid-count/fraction` operates on genes that passed the first length filter.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">length</code> <code class="parameter-choice">remaining</code> <code class="parameter-choice">both</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">both</code></span></dd>
<dt class="parameter" id="parameter-query_min_analyzed_codons"><code class="parameter-flags">--query-min-analyzed-codons</code> <code class="parameter-metavar">QUERY_MIN_ANALYZED_CODONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Only allow CUB to calculated for a query if it has at least this number of synonymous codons that will be analyzed. For reference-dependent CUB metrics, analyzed codons are those with reference compositions.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">100</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-ignore_start_codons"><code class="parameter-flags">--ignore-start-codons</code></dt>
<dd class="parameter-details"><span class="parameter-help">Ignore start codons in the analysis. Besides ATG, GTG and TTG are notable minority start codons in bacteria and archaea. With start codons removed, frequencies only represent elongation codons. This makes codon usage bias calculations more accurate, because initiation GTG and TTG, like ATG, encode fMet in bacteria and Met in archaea and eukaryotes, but anvi&#x27;o treats them like elongation codons encoding Val and Leu, respectively, in the standard genetic code. ATG does not contribute to codon usage bias given the standard genetic code, because it lacks synonymous codons, being the only Met codon. Note that `--ignore-start-codons` removes start codons from genes in the earliest steps of the analysis, which influences `--gene-min-codons`: the number of codons in a gene never counts the start codon.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filter-reference">
<header class="parameter-group-header"><span class="parameter-group-title">FILTER REFERENCE</span> <span class="parameter-group-description">Confidence in the reference codon composition can be increased by setting minimum frequency requirements for the set of reference genes or codons for any individual amino acid to be retained. These arguments should not be used with `--omnibias`. Queries and references are the same in omnibias mode, so references will be filtered by query options including `--exclude-amino-acid-count`, `--exclude-amino-acid-fraction`, and `--query-min-analyzed-codons`.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-reference_exclude_amino_acid_count"><code class="parameter-flags">--reference-exclude-amino-acid-count</code> <code class="parameter-metavar">REFERENCE_EXCLUDE_AMINO_ACID_COUNT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Exclude codons for amino acids with fewer than this many codons in the set of reference genes.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter" id="parameter-reference_min_analyzed_codons"><code class="parameter-flags">--reference-min-analyzed-codons</code> <code class="parameter-metavar">REFERENCE_MIN_ANALYZED_CODONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Only allow CUB to be calculated for a genome if the set of reference genes contains at least this many codons. This filter applies after excluding codons for individual amino acids using `--reference-exclude-amino-acid-count`.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">100</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_codon_usage_bias.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
