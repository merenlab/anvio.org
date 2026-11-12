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

Get codon or amino acid frequency statistics from genomes, genes, and functions.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-codon-frequencies`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-codon-frequencies [-h] [-c CONTIGS_DB] [-p PROFILE_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [--gene-caller-ids GENE_CALLER_IDS [GENE_CALLER_IDS ...]] [-i FILE_PATH] [-e FILE_PATH] [-o FILE_PATH] [--gene-table-output GENE_TABLE_OUTPUT] [--function-table-output FUNCTION_TABLE_OUTPUT] [--header-amino-acids] [--infinity-to-zero] [--relative] [--synonymous] [--return-amino-acids] [--encodings-txt ENCODINGS_TXT] [--sum] [--average] [--function-sources [FUNCTION_SOURCES ...]] [--function-accessions FUNCTION_ACCESSIONS [FUNCTION_ACCESSIONS ...]] [--function-names FUNCTION_NAMES [FUNCTION_NAMES ...]] [--select-functions-txt SELECT_FUNCTIONS_TXT] [--expect-functions] [--shared-function-sources] [--gene-min-codons INTEGER] [--function-min-codons INTEGER] [--exclude-amino-acids AMINO ACID [AMINO ACID ...]] [--include-amino-acids AMINO ACID [AMINO ACID ...]] [--sequence-min-amino-acids INTEGER] [--pansequence-min-amino-acids PANSEQUENCE_MIN_AMINO_ACIDS PANSEQUENCE_MIN_AMINO_ACIDS] [--min-codon-filter {length,remaining,both}] [--ignore-start-codons] [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-single-genome-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">SINGLE GENOME INPUTS</span> <span class="parameter-group-description">Get CUB from genes or functions in a single genome. A contigs database can be provided alone as an &#x27;external&#x27; genome. An &#x27;internal&#x27; genome (bin) also requires a profile database, collection name, and bin ID.</span></header>
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
<dd class="parameter-details"><span class="parameter-help">Select genes by ID, space-separated.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-multiple-genome-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">MULTIPLE GENOME INPUTS</span> <span class="parameter-group-description">Get frequencies from genes or functions in multiple genomes by providing internal and/or external genome files listing the genomes to analyze.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-files">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT FILES</span> <span class="parameter-group-description">This program writes codon or amino acid frequency tables. When functions rather than genes are analyzed, one of two possible files can be produced: a table of frequencies per gene or per function, using `--gene-table-output` or `--function-table-output`, respectively. The per-function table can be derived from the per-gene table by summing genes with the same function annotation, which are found in columns 2-4.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-gene_table_output"><code class="parameter-flags">--gene-table-output</code> <code class="parameter-metavar">GENE_TABLE_OUTPUT</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited file of genes x codons or amino acids. The index columns before frequency data contain genome names (optional, if multiple genomes are considered) and gene callers IDs.</span></dd>
<dt class="parameter" id="parameter-function_table_output"><code class="parameter-flags">--function-table-output</code> <code class="parameter-metavar">FUNCTION_TABLE_OUTPUT</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited file of functions x codons or amino acids. Index columns before the frequency data contain, respectively, genome names (optional, if multiple genomes are considered), function annotation sources, accessions, and names.</span></dd>
<dt class="parameter parameter-switch" id="parameter-header_amino_acids"><code class="parameter-flags">--header-amino-acids</code></dt>
<dd class="parameter-details"><span class="parameter-help">Include the amino acid for each codon in the column header of codon output, i.e., LysAAA instead of AAA.</span></dd>
<dt class="parameter parameter-switch" id="parameter-infinity_to_zero"><code class="parameter-flags">--infinity-to-zero</code></dt>
<dd class="parameter-details"><span class="parameter-help">Replace NA (empty) values in output with 0.0. NA occurs with `--synonymous` when all codons for an amino acid are absent in a gene or function, resulting in 0/0, reported as NA. Use with caution, for NA and 0.0 mean different things and this will skew downstream analyses of synonymous relative frequencies, such as codon usage bias.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-frequency-statistics">
<header class="parameter-group-header"><span class="parameter-group-title">FREQUENCY STATISTICS</span> <span class="parameter-group-description">Rather than absolute frequencies (default), relative frequencies or synonymous (per-amino acid) relative frequencies can be returned. Absolute and relative frequencies can be calculated for the sets of codons encoding the same amino acid rather than for individual codons. Frequencies can be summed or averaged across genes in a genome.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-relative"><code class="parameter-flags">--relative</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return relative frequencies across codons or amino acids in each gene or function.</span></dd>
<dt class="parameter parameter-switch" id="parameter-synonymous"><code class="parameter-flags">--synonymous</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return synonymous (per-amino acid) frequencies among the codons encoding each amino acid in each gene or function.</span></dd>
<dt class="parameter parameter-switch" id="parameter-return_amino_acids"><code class="parameter-flags">--return-amino-acids</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return frequencies of the sets of codons encoding the same amino acid.</span></dd>
<dt class="parameter" id="parameter-encodings_txt"><code class="parameter-flags">--encodings-txt</code> <code class="parameter-metavar">ENCODINGS_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Changes to the standard genetic code can be provided in this tab-delimited file of two columns. Each entry in the first column is a codon and each entry in the second column is the three-letter code for the decoded amino acid. For example, to recode the stop codon, TGA, as Trp, &#x27;TGA&#x27; would be placed in the first column and &#x27;Trp&#x27; in the same row of the second. Stop/termination codons are abbreviated &#x27;STP&#x27;. This option affects per-amino acid and synonymous codon output (when using `--return-amino-acids` or `--synonymous`).</span></dd>
<dt class="parameter parameter-switch" id="parameter-sum"><code class="parameter-flags">--sum</code></dt>
<dd class="parameter-details"><span class="parameter-help">Sum frequencies across genes, returning a single row for each genome. When functions or function sources are selected, genes are subsetted to those annotated with the requested functions or annotated by the requested sources.</span></dd>
<dt class="parameter parameter-switch" id="parameter-average"><code class="parameter-flags">--average</code></dt>
<dd class="parameter-details"><span class="parameter-help">Average frequencies across genes in the genome, returning a single row for each genome. When functions or function sources are selected, genes are subsetted to those annotated with the requested functions or annotated by the requested sources.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-functions">
<header class="parameter-group-header"><span class="parameter-group-title">FUNCTIONS</span> <span class="parameter-group-description">Frequencies can be calculated for functions rather than genes, summing the frequencies of the genes annotated by each function. Genes can also be subsetted to those annotated with requested functions or annotated by requested function sources.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-function_sources"><code class="parameter-flags">--function-sources</code> <code class="parameter-metavar">FUNCTION_SOURCES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return frequencies for functions annotated by these sources, e.g., &#x27;KOfam&#x27;, &#x27;KEGG_BRITE&#x27;, &#x27;COG20_FUNCTION&#x27;. When used with certain other options, such as `--sum`, rather than returning statistics for each function, analyzed genes are subsetted to those annotated by the provided sources. If `--function-sources` is used as a flag without any arguments, then every source will be considered.</span></dd>
<dt class="parameter" id="parameter-function_accessions"><code class="parameter-flags">--function-accessions</code> <code class="parameter-metavar">FUNCTION_ACCESSIONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return frequencies for functions with these accessions from the source provided in `--function-sources`. To get accessions from multiple sources, instead use `--select-functions-txt`.</span></dd>
<dt class="parameter" id="parameter-function_names"><code class="parameter-flags">--function-names</code> <code class="parameter-metavar">FUNCTION_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Return frequencies for functions with these names from the source provided in `--function-sources`. To get function names from multiple sources, instead use `--select-functions-txt`.</span></dd>
<dt class="parameter" id="parameter-select_functions_txt"><code class="parameter-flags">--select-functions-txt</code> <code class="parameter-metavar">SELECT_FUNCTIONS_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Selected functions can be listed in this tab-delimited file of three columns. The first column should contain function annotation sources, the second column accessions, and the third function names. An entry in the source column is required in every row, and either an accession or name, or both, should also be in a row. The file should not have a header of column names.</span></dd>
<dt class="parameter parameter-switch" id="parameter-expect_functions"><code class="parameter-flags">--expect-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, functions provided by `--function-accessions`, `--function-names`, and `--select-functions-txt` need not be annotated in the input genomes. With this flag, an error will be raised if any of the functions are not present in an input genome.</span></dd>
<dt class="parameter parameter-switch" id="parameter-shared_function_sources"><code class="parameter-flags">--shared-function-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to exclude function annotation sources that were not run on every input genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filter-genes-functions-codons">
<header class="parameter-group-header"><span class="parameter-group-title">FILTER GENES, FUNCTIONS, CODONS</span> <span class="parameter-group-description">Genes/functions can be filtered by the number of codons they contain, e.g., ignore genes shorter than 300 codons. Codons can be selected a priori, e.g., ignore Ala codons, or rarer codons can be excluded, e.g., ignore amino acids that are decoded by ≤3 codons in ≥90%% of genes. Filters can improve the statistical utility of codon relative frequency data.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_min_codons"><code class="parameter-flags">--gene-min-codons</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the minimum number of codons required in a gene. When functions are returned rather than genes, this filter is applied to genes before grouping them as functions.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-function_min_codons"><code class="parameter-flags">--function-min-codons</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the minimum number of codons required in a function. Genes with fewer than `--gene-min-codons` are first removed, and then functional groups of the remaining genes with fewer than `--function-min-codons` are removed. This filter only applies when returning functions.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-exclude_amino_acids"><code class="parameter-flags">--exclude-amino-acids</code> <code class="parameter-metavar">AMINO ACID</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove codons that decode the given amino acids (use three-letter codes, e.g., Ala, and STP for stop codons). If `--synonymous`, this argument defaults to &#x27;STP Met Trp&#x27;, and if other amino acids are excluded, for STP, Met, and Trp codons to still be excluded from the output table, they must also be explicitly provided in the argument.</span></dd>
<dt class="parameter" id="parameter-include_amino_acids"><code class="parameter-flags">--include-amino-acids</code> <code class="parameter-metavar">AMINO ACID</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is the complement of `--exclude-amino-acids`. Only codons for the given amino acids are analyzed and reported.</span></dd>
<dt class="parameter" id="parameter-sequence_min_amino_acids"><code class="parameter-flags">--sequence-min-amino-acids</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Do not report codons for amino acids (and STP) that are less numerous than the given argument. For example, if the argument is 5, and a gene or function query has 4 codons encoding Asn, 2 AAT and 2 AAC, then a row for this gene in the output table will have missing values in Asn columns. This filter occurs at the end of the analysis before writing results and so does not affect prior calculations.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-pansequence_min_amino_acids"><code class="parameter-flags">--pansequence-min-amino-acids</code> <code class="parameter-metavar">PANSEQUENCE_MIN_AMINO_ACIDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">The first value of the argument is a positive integer representing a minimum number of codons encoding an amino acid -- &#x27;min_amino_acids&#x27; -- and the second is a number between 0 and 1 representing a fraction of genes -- &#x27;min_gene_fraction&#x27;. Remove codons for amino acids (and STP) that are less numerous than &#x27;min_amino_acids&#x27; in a &#x27;min_gene_fraction&#x27; of genes. For example, if &#x27;min_amino_acids&#x27; is 5 and &#x27;min_gene_fraction&#x27; is 0.9, then if there are fewer than 5 codons for an amino acid/STP in ≥90% of genes, then the columns for these codons are dropped.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">[0, 1.0]</code></span></dd>
<dt class="parameter" id="parameter-min_codon_filter"><code class="parameter-flags">--min-codon-filter</code> <code class="parameter-metavar">MIN_CODON_FILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This argument arises from the ambiguity of filters that remove genes and functions by number of codons (`--gene-min-codons` and `--function-min-codons`) in relation to filters that drop codons (`--exclude/include-amino-acids` and `--pansequence-min-amino-acids`). Genes (and functions) can be filtered by their full length, e.g., genes shorter than 300 codons are ignored. They can also be filtered by the number of codons remaining after dropping codons. The codon length filter followed by dropping codons can result in genes and functions with fewer codons than the original codon threshold -- thus the option of both &#x27;length&#x27; and &#x27;remaining&#x27; filters to ensure that total codon frequencies in the output always meet the minimum codon threshold. &#x27;both&#x27; is needed as an option in addition to &#x27;remaining&#x27; so dynamic codon filtering by `--pansequence-min-amino-acids` operates on genes that passed the first length filter.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">length</code> <code class="parameter-choice">remaining</code> <code class="parameter-choice">both</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">both</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-ignore_start_codons"><code class="parameter-flags">--ignore-start-codons</code></dt>
<dd class="parameter-details"><span class="parameter-help">Ignore start codons in the analysis. Besides ATG, GTG and TTG are notable minority start codons in bacteria and archaea. With start codons removed, frequencies only represent elongation codons. This makes codon usage bias calculations more accurate, because initiation GTG and TTG, like ATG, encode fMet in bacteria and Met in archaea and eukaryotes, but anvi&#x27;o treats them like elongation codons encoding Val and Leu, respectively, in the standard genetic code. ATG does not contribute to codon usage bias given the standard genetic code, because it lacks synonymous codons, being the only Met codon. Note that `--ignore-start-codons` removes start codons from genes in the earliest steps of the analysis, which influences `--gene-min-codons`: the number of codons in a gene never counts the start codon.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_codon_frequencies.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
