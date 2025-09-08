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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[concatenated-gene-alignment-fasta](../../artifacts/concatenated-gene-alignment-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-items](../../artifacts/misc-data-items) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


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


## Additional Resources


* [In action in the Anvi&#x27;o pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#scrutinizing-phylogenomics)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-sequences-for-gene-clusters) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
