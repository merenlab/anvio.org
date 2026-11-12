---
layout: program
title: anvi-get-sequences-for-gene-clusters
excerpt: An anvi'o program. Do cool stuff with gene clusters in anvi&#x27;o pan genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-sequences-for-gene-clusters
image:
  featurerelative: ../../../images/header.png
  display: true
---

Do cool stuff with gene clusters in anvi&#x27;o pan genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[concatenated-gene-alignment-fasta](../../artifacts/concatenated-gene-alignment-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-items](../../artifacts/misc-data-items) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This aptly-named program **gets the sequences for the gene clusters stored in a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and returns them as either a <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span> or a <span class="artifact-n">[concatenated-gene-alignment-fasta](/help/main/artifacts/concatenated-gene-alignment-fasta)</span>**, which can directly go into the program <span class="artifact-p">[anvi-gen-phylogenomic-tree](/help/main/programs/anvi-gen-phylogenomic-tree)</span> for phylogenomics. This gives you advanced access to your gene clusters, so you can take them out of anvi'o and do whatever you please with them.

The program parameters also include a large collection of advanced filtering options. Using these options you can scrutinize your gene clusters in creative and precise ways. Using the combination of these filters you can focus on single-copy core gene clusters in a pangenome, or those occur only as singletons, or paralogs that contain more than a given number of sequences, and so on. Once you are satisfied with the output a given set of filters generate, you can add the matching gene clusters a <span class="artifact-n">[misc-data-items](/help/main/artifacts/misc-data-items)</span> with the flag `--add-into-items-additional-data-table`, which can be added to the <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface as additional layers when you visualize your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> using the program <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span>

By default, <span class="artifact-p">[anvi-get-sequences-for-gene-clusters](/help/main/programs/anvi-get-sequences-for-gene-clusters)</span> will generate a single output file. But you can ask the program to report every gene cluster that match to your filters as a separate FASTA file depending on your downstream analyses.

While the number of parameters this powerful program can utilize may seem daunting, many of the options just help you specify exactly from which gene clusters you want to get sequences.

### Running on all gene clusters

Here is an example that shows the simplest possible run, which will export sequences for every single gene cluster found in the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> as amino acid sequences:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

{:.notice}
The program will report the DNA sequences if the flag `--report-DNA-sequences` is used.

### Reporting a single representative sequence per gene cluster

By default this program reports every gene sequence in each gene cluster. If instead you want a single representative amino acid sequence per gene cluster, use the flag `--representative-sequences`:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;&#45;representative&#45;sequences \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

Anvi'o picks the representative using a medoid-based strategy: it discards length outliers, prefers complete (non-partial) gene calls, and selects the sequence that is most similar to the others in the gene cluster. The resulting <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> uses the gene cluster names as deflines and contains no gap characters.

This flag requires a pangenome for which gene alignments were computed (i.e., **not** created with `--skip-alignments`), and it cannot be combined with `--concatenate-gene-clusters` or `--report-DNA-sequences`. It honors all the same selection and filtering options described below, as well as `--split-output-per-gene-cluster`.

### Splitting gene clusters into their own files

The command above will put all gene cluster sequences in a single output <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file. If you would like to report each gene cluster in a separate FASTA file, it is also an option thanks to the flag `--split-output-per-gene-cluster`. This optional reporting throught this flag applies to all commands shown on this page. For instance, the following command will report every gene cluster as a separate FASTA file in your directory,

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;&#45;split&#45;output&#45;per&#45;gene&#45;cluster
</div>

where the output files and paths will look like this in your work directory:

```
GC_00000001.fa
GC_00000002.fa
GC_00000003.fa
GC_00000004.fa
GC_00000005.fa
GC_00000006.fa
GC_00000007.fa
GC_00000008.fa
GC_00000009.fa
GC_00000010.fa
(...)
```

You can use the parameters `--output-file-prefix` to add file name prefixes to your output files. For instance, the following command,

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;&#45;split&#45;output&#45;per&#45;gene&#45;cluster \
                                     &#45;&#45;output&#45;file&#45;prefix MY_PROJECT
</div>

will result in the following files in your work directory:

```
MY_PROJECT_GC_00000001.fa
MY_PROJECT_GC_00000002.fa
MY_PROJECT_GC_00000003.fa
MY_PROJECT_GC_00000004.fa
MY_PROJECT_GC_00000005.fa
MY_PROJECT_GC_00000006.fa
MY_PROJECT_GC_00000007.fa
MY_PROJECT_GC_00000008.fa
MY_PROJECT_GC_00000009.fa
MY_PROJECT_GC_00000010.fa
(...)
```

You can also use the parameter `--output-file-prefix` to store files in different directories. For instance, the following command (note the trailing `/` in the `--output-file-prefix`),

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;&#45;split&#45;output&#45;per&#45;gene&#45;cluster \
                                     &#45;&#45;output&#45;file&#45;prefix A_TEST_DIRECTORY/
</div>

will result in the following files:

```
A_TEST_DIRECTORY/GC_00000001.fa
A_TEST_DIRECTORY/GC_00000002.fa
A_TEST_DIRECTORY/GC_00000003.fa
A_TEST_DIRECTORY/GC_00000004.fa
A_TEST_DIRECTORY/GC_00000005.fa
A_TEST_DIRECTORY/GC_00000006.fa
A_TEST_DIRECTORY/GC_00000007.fa
A_TEST_DIRECTORY/GC_00000008.fa
A_TEST_DIRECTORY/GC_00000009.fa
A_TEST_DIRECTORY/GC_00000010.fa
(...)
```

In contrast, the following command,

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;&#45;split&#45;output&#45;per&#45;gene&#45;cluster \
                                     &#45;&#45;output&#45;file&#45;prefix A_TEST_DIRECTORY/A_NEW_PREFIX
</div>

will result in the following files:

```
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000001.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000002.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000003.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000004.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000005.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000006.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000007.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000008.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000009.fa
A_TEST_DIRECTORY/A_NEW_PREFIX_GC_00000010.fa
(...)
```

### Exporting only specific gene clusters

#### Part 1: Choosing gene clusters by collection, bin, or name

You can export only the sequences for a specific <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> or <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> with the parameters `-C` or `-b` respectively.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span> \
                                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

{:.notice}
You can always display the collections and bins available in your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> by adding `--list-collections` or `--list-bins` flags to your command.

Alternatively, you can export the specific gene clusters by name, either by providing a single gene cluster ID or a file with one gene cluster ID per line. For example:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span> \
                                     &#45;&#45;gene&#45;cluster&#45;ids&#45;file gene_clusters.txt
</div>

where `gene_clusters.txt` contains the following:

```
GC_00000618
GC_00000643
GC_00000729
```

#### Part 2: Choosing gene clusters by their attributes

These parameters are used to exclude gene clusters that don't reach certain thresholds and are applies on top of filters already applied (for example, you can use these to exclude clusters within a specific bin).

Here is a list of the different filters that you can use to exclude some subsection of your gene clusters:

- min/max number of genomes that the gene cluster occurs in.
- min/max number of genes from each genome. For example, you could exclude clusters that don't appear in every genome 3 times, or get single-copy genes by setting `max-num-genes-from-each-genome` to 1.
- min/max [geometric homogenity index](http://merenlab.org/2016/11/08/pangenomics-v2/#geometric-homogeneity-index)
- min/max [functional homogenity index](http://merenlab.org/2016/11/08/pangenomics-v2/#functional-homogeneity-index)
- min/max combined homogenity index

For example, the following run on a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> that contains 50 genomes will report only the single-copy core genes with a functional homogenity index above 0.25:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span> \
                                     &#45;&#45;max&#45;num&#45;genes&#45;from&#45;each&#45;genome 1 \
                                     &#45;&#45;min&#45;num&#45;genomes&#45;gene&#45;cluster&#45;occurs 50 \
                                     &#45;&#45;min&#45;functional&#45;homogenity&#45;index 0.25
</div>

You can also exclude genomes that are missing some number of the gene clusters that you're working with by using the paramter `--max-num-gene-clusters-missing-from-genome`.

For each of these parameters, see the program's help menu for more information.

### Fun with phylogenomics!

To get a <span class="artifact-n">[concatenated-gene-alignment-fasta](/help/main/artifacts/concatenated-gene-alignment-fasta)</span> (which you can use to run <span class="artifact-p">[anvi-gen-phylogenomic-tree](/help/main/programs/anvi-gen-phylogenomic-tree)</span>), use the parameter `--concatenate-gene-clusters`

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;clusters &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                                     &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span> \
                                     &#45;&#45;concatenate&#45;gene&#45;clusters
</div>

Here, you also have the option to specify a specific aligner (or list the available aligners), as well as provide a NEXUS formatted partition file, if you so choose.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-sequences-for-gene-clusters.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-sequences-for-gene-clusters`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-sequences-for-gene-clusters [-h] -p PAN_DB [-g GENOMES_STORAGE] [-o FASTA] [--split-output-per-gene-cluster] [-O FILENAME_PREFIX] [--gene-cluster-id GENE_CLUSTER_ID] [--gene-cluster-ids-file FILE_PATH] [-C COLLECTION_NAME] [-b BIN_NAME] [--min-num-genomes-gene-cluster-occurs INTEGER] [--max-num-genomes-gene-cluster-occurs INTEGER] [--min-num-genes-from-each-genome INTEGER] [--max-num-genes-from-each-genome INTEGER] [--max-num-gene-clusters-missing-from-genome INTEGER] [--min-functional-homogeneity-index FLOAT] [--max-functional-homogeneity-index FLOAT] [--min-geometric-homogeneity-index FLOAT] [--max-geometric-homogeneity-index FLOAT] [--min-combined-homogeneity-index FLOAT] [--max-combined-homogeneity-index FLOAT] [--add-into-items-additional-data-table NAME] [--list-collections] [--list-bins] [--concatenate-gene-clusters] [--partition-file FILE_PATH] [--separator STRING] [--align-with ALIGNER] [--list-aligners] [--representative-sequences] [--report-DNA-sequences] [--just-do-it] [--dry-run]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">Input files from the pangenome analysis.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-option-1-single-file">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT OPTION #1: SINGLE FILE</span> <span class="parameter-group-description">Here you get to chose an output file name to report things. LUCKY YOU.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FASTA</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-option-2-multiple-files">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT OPTION #2: MULTIPLE FILES</span> <span class="parameter-group-description">Here you can ask anvi&#x27;o to report multiple FASTA files, where each gene cluster goes into its own unique FASTA file. If you declare teh flag `--split-output-per-gene-cluster`, anvi&#x27;o will store each gene cluster into your work directory, using the gene cluster name as the output file name. You can use the `--output-file-prefix` parameter to store them in a different directory and/or with specific file name prefixes.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-split_output_per_gene_cluster"><code class="parameter-flags">--split-output-per-gene-cluster</code></dt>
<dd class="parameter-details"><span class="parameter-help">If/when there are more than one gene clusters to report, put each gene cluster into a separate FASTA file.</span></dd>
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-selection">
<header class="parameter-group-header"><span class="parameter-group-title">SELECTION</span> <span class="parameter-group-description">Which gene clusters should be reported. You can ask for a single gene cluster, or multiple ones listed in a file, or you can use a collection and bin name to list gene clusters of interest. If you give nothing, this program will export alignments for every single gene cluster found in the profile database (and this is called &#x27;customer service&#x27;).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_cluster_id"><code class="parameter-flags">--gene-cluster-id</code> <code class="parameter-metavar">GENE_CLUSTER_ID</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene cluster ID you are interested in.</span></dd>
<dt class="parameter" id="parameter-gene_cluster_ids_file"><code class="parameter-flags">--gene-cluster-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for gene clusters (each line should contain be a unique gene cluster id).</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced-filters">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED FILTERS</span> <span class="parameter-group-description">If you are here you must be looking for ways to specify exactly what you want from that database of gene clusters. These filters will be applied to what your previous selections reported.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_num_genomes_gene_cluster_occurs"><code class="parameter-flags">--min-num-genomes-gene-cluster-occurs</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. Let&#x27;s assume you have 100 genomes in your pan genome analysis. You can use this parameter if you want to work only with gene clusters that occur in at least X number of genomes. If you say &#x27;--min-num-genomes-gene-cluster-occurs 90&#x27;, each gene cluster in the analysis will be required at least to appear in 90 genomes. If a gene occurs in less than that number of genomes, it simply will not be reported. This is especially useful for phylogenomic analyses, where you may want to only focus on gene clusters that are prevalent across the set of genomes you wish to analyze.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-max_num_genomes_gene_cluster_occurs"><code class="parameter-flags">--max-num-genomes-gene-cluster-occurs</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. Let&#x27;s assume you have 100 genomes in your pan genome analysis. You can use this parameter if you want to work only with gene clusters that occur in at most X number of genomes. If you say &#x27;--max-num-genomes-gene-cluster-occurs 1&#x27;, you will get gene clusters that are singletons. Combining this parameter with --min-num-genomes-gene-cluster-occurs can give you a very precise way to filter your gene clusters.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">9223372036854775807</code></span></dd>
<dt class="parameter" id="parameter-min_num_genes_from_each_genome"><code class="parameter-flags">--min-num-genes-from-each-genome</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--min-num-genes-from-each-genome 2&#x27;, this filter will remove every gene cluster, to which every genome in your analysis contributed less than 2 genes. This can be useful to find out gene clusters with many genes from many genomes (such as conserved multi-copy genes within a clade).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-max_num_genes_from_each_genome"><code class="parameter-flags">--max-num-genes-from-each-genome</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--max-num-genes-from-each-genome 1&#x27;, every gene cluster that has more than one gene from any genome that contributes to it will be removed from your analysis. This could be useful to remove gene clusters with multi-copy genes from your report for appropriate phylogenomic analyses. For instance, using &#x27;--max-num-genes-from-each-genome 1&#x27; and &#x27;min-num-genomes-gene-cluster-occurs X&#x27; where X is the total number of your genomes, would give you the single-copy gene clusters in your pan genome.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">9223372036854775807</code></span></dd>
<dt class="parameter" id="parameter-max_num_gene_clusters_missing_from_genome"><code class="parameter-flags">--max-num-gene-clusters-missing-from-genome</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove genomes from your report. If you have a list of gene cluster names, you can use this parameter to omit any genome from your report if it is missing more than a number of genes you desire. For instance, if you have 100 genomes in your pan genome, and you are interested in working only with genomes that have all 5 specific gene clusters of your choice, you can use &#x27;--max-num-gene-clusters-missing-from-genome 4&#x27; to remove remove the bins that are missing more than 4 of those 5 genes. This is especially useful for phylogenomic analyses. Parameter 0 will remove any genome that is missing any of the genes.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-min_functional_homogeneity_index"><code class="parameter-flags">--min-functional-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--min-functional-homogeneity-index 0.3&#x27;, every gene cluster with a functional homogeneity index less than 0.3 will be removed from your analysis. This can be useful if you only want to look at gene clusters that are highly conserved in resulting function</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">-1</code></span></dd>
<dt class="parameter" id="parameter-max_functional_homogeneity_index"><code class="parameter-flags">--max-functional-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--max-functional-homogeneity-index 0.5&#x27;, every gene cluster with a functional homogeneity index greater than 0.5 will be removed from your analysis. This can be useful if you only want to look at gene clusters that don&#x27;t seem to be functionally conserved</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-min_geometric_homogeneity_index"><code class="parameter-flags">--min-geometric-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--min-geometric-homogeneity-index 0.3&#x27;, every gene cluster with a geometric homogeneity index less than 0.3 will be removed from your analysis. This can be useful if you only want to look at gene clusters that are highly conserved in geometric configuration</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">-1</code></span></dd>
<dt class="parameter" id="parameter-max_geometric_homogeneity_index"><code class="parameter-flags">--max-geometric-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--max-geometric-homogeneity-index 0.5&#x27;, every gene cluster with a geometric homogeneity index greater than 0.5 will be removed from your analysis. This can be useful if you only want to look at gene clusters that have many not be as conserved as others</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-min_combined_homogeneity_index"><code class="parameter-flags">--min-combined-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--min-combined-homogeneity-index 0.3&#x27;, every gene cluster with a combined homogeneity index less than 0.3 will be removed from your analysis. This can be useful if you only want to look at gene clusters that are highly conserved overall</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">-1</code></span></dd>
<dt class="parameter" id="parameter-max_combined_homogeneity_index"><code class="parameter-flags">--max-combined-homogeneity-index</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter will remove gene clusters from your report. If you say &#x27;--max-combined-homogeneity-index 0.5&#x27;, every gene cluster with a combined homogeneity index greater than 0.5 will be removed from your analysis. This can be useful if you only want to look at gene clusters that have many not be as conserved overall as others</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-add_into_items_additional_data_table"><code class="parameter-flags">--add-into-items-additional-data-table</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you use any of the filters, and would like to add the resulting item names into the items additional data table of your database, you can use this parameter. You will need to give a name for these results to be saved. If the given name is already in the items additional data table, its contents will be replaced with the new one. Then you can run anvi-interactive or anvi-display-pan to &#x27;see&#x27; the results of your filters.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-other-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">OTHER STUFF</span> <span class="parameter-group-description">Yes. Stuff that are not like the ones above.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_bins"><code class="parameter-flags">--list-bins</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available bins in a collection and exit.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-phylogenomics">
<header class="parameter-group-header"><span class="parameter-group-title">PHYLOGENOMICS</span> <span class="parameter-group-description">Get separately aligned and concatenated sequences for phylogenomics.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-concatenate_gene_clusters"><code class="parameter-flags">--concatenate-gene-clusters</code></dt>
<dd class="parameter-details"><span class="parameter-help">Concatenate output gene clusters in the same order to create a multi-gene alignment output that is suitable for phylogenomic analyses.</span></dd>
<dt class="parameter" id="parameter-partition_file"><code class="parameter-flags">--partition-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Some commonly used software for phylogenetic analyses (e.g., IQ-TREE, RAxML, etc) allow users to specify/test different substitution models for each gene of a concatenated multiple sequence alignments. For this, they use a special file format called a &#x27;partition file&#x27;, which indicates the site for each gene in the alignment. You can use this parameter to declare an output path for anvi&#x27;o to report a NEXUS format partition file in addition to your FASTA output (requested by Massimiliano Molari in #1333).</span></dd>
<dt class="parameter" id="parameter-separator"><code class="parameter-flags">--separator</code> <code class="parameter-metavar">STRING</code></dt>
<dd class="parameter-details"><span class="parameter-help">Characters to separate things (the default is whatever is most suitable).</span></dd>
<dt class="parameter" id="parameter-align_with"><code class="parameter-flags">--align-with</code> <code class="parameter-metavar">ALIGNER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The multiple sequence alignment program to use when multiple sequence alignment is necessary. To see all available options, use the flag `--list-aligners`.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_aligners"><code class="parameter-flags">--list-aligners</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available software for multiple sequence alignment.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-representative-sequences">
<header class="parameter-group-header"><span class="parameter-group-title">REPRESENTATIVE SEQUENCES</span> <span class="parameter-group-description">Rather than reporting every gene in a gene cluster, report a single representative amino acid sequence per gene cluster.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-representative_sequences"><code class="parameter-flags">--representative-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">Instead of reporting every gene sequence in each gene cluster, report a single representative amino acid sequence per gene cluster. Anvi&#x27;o picks the representative using a medoid-based strategy: it discards length outliers, prefers complete (non-partial) gene calls, and selects the sequence that is most similar to the others in the cluster. The resulting FASTA uses gene cluster names as deflines and contains no gap characters. This flag requires a pangenome for which gene alignments were computed (i.e., not created with `--skip-alignments`), and cannot be combined with `--concatenate-gene-clusters` or `--report-DNA-sequences`.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-life-savers">
<header class="parameter-group-header"><span class="parameter-group-title">LIFE SAVERS</span> <span class="parameter-group-description">Just when you need them.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-report_dna_sequences"><code class="parameter-flags">--report-DNA-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, this program reports amino acid sequences. Use this flag to report DNA sequences instead.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-switch" id="parameter-dry_run"><code class="parameter-flags">--dry-run</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t do anything real. Test everything, and stop right before wherever the developer said &#x27;well, this is enough testing&#x27;, and decided to print out results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [In action in the Anvi&#x27;o pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#scrutinizing-phylogenomics)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_sequences_for_gene_clusters.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
