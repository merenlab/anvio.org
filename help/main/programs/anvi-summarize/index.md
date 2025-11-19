---
layout: program
title: anvi-summarize
excerpt: An anvi'o program. Summarizer for anvi&#x27;o pan or profile db&#x27;s.
categories: [anvio]
comments: false
redirect_from: /m/anvi-summarize
image:
  featurerelative: ../../../images/header.png
  display: true
---

Summarizer for anvi&#x27;o pan or profile db&#x27;s. Essentially, this program takes a collection id along with either a profile database and a contigs database or a pan database and a genomes storage and generates a static HTML output for what is described in a given collection. The output directory will contain almost everything any downstream analysis may need, and can be displayed using a browser without the need for an anvi&#x27;o installation. For this reason alone, reporting summary outputs as supplementary data with publications is a great idea for transparency and reproducibility.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[summary](../../artifacts/summary) <img src="../../images/icons/SUMMARY.png" class="artifact-icon-mini" /></span></p>


## Usage


Anvi-summarize lets you look at a **comprehensive overview of your <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>** and its many statistics that anvi'o has calculated. 

It will create a folder (by default called `SUMMARY`) that contains many different summary files, including an HTML output that conviently displays them all for you. The exact contents of this folder will depend on whether you run the program on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> (i.e., to summarize a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned contigs, such as metagenome-assembled genomes) or on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> (i.e., to summarize a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> of binned gene clusters, such as when you want to compare accessory vs core genome). Due to the extensive set of output files it produces, this program can be useful for sharing information with collaborators, generating supplementary files for manuscripts, and exporting data for use as input to downstream programs/scripts.

## Output files

Regardless of input type, this program always produces an `index.html` file, which you can open in a web browser to view all the summary information in a nicely-formatted interactive webpage.

When run on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, this program will:
* produce an overall table of bin statistics (`bins_summary.txt`) like length, GC content, completion and redundancy
* generate a per-bin folder of bin-specific information (in a directory called `bin_by_bin`), including:
    * <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files of their contigs
    * information about their <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>
    * coverage, detection, and other read-recruitment statistics of the bin in each sample stored in the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>
    * domain and taxonomy predictions from single-copy core genes (see <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span>)
    * the bin-specific value of each statistic described in `bins_summary.txt`, like length, percent completeness, and redundancy
* generate various tab-delimited matrix files compiling information about all bins across all samples (in a directory called `bins_across_samples`), including read-recruitment statistics and number of Ribosomal RNA annotations per bin (the rRNA info is not described across samples, but happens to live with the other matrix files regardless)
* if you have imported any miscellaneous data into the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>, this information will also be exported (in the directories `misc_data_items` and `misc_data_layers`)

**Confused about the read-recruitment statistics?**

In case you want to learn about the definitions of statistics like coverage, detection, abundance, variability, and so on, you should first read [Mike Lee's explanation of these statistics](https://merenlab.org/2017/05/08/anvio-views/). Our [vocabulary page](https://anvio.org/vocabulary/) might also be helpful. Then, keep in mind that anvi'o computes these values on a per-contig (and per-split) basis. When you run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, the program will summarize this information for a given bin by taking the average of a statistic's value across all splits in the bin, weighting that average by split length.

When run on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, this program will:
* generate a _huge_ table (`[NAME]_gene_clusters_summary.txt`) describing every gene in every gene cluster of your pangenome (even those not in the specified <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>), including:
    * gene-cluster-specific information like the number of genomes contributing to that cluster, maximum number of paralogs in any partipating genome, and cluster homogeneity metrics. 
    * gene-specific information like functional annotations and amino acid sequence
* export any tables of miscellaneous data that were imported into the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span> (in the directories `misc_data_items` and `misc_data_layers`)

## Running anvi-summarize 

### Running on a profile database

A standard run of anvi-summarize on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> will look something like this:

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
               &#45;o MY_SUMMARY \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

This will name the output directory `MY_SUMMARY` instead of the standard `SUMMARY`. 

When running on a profile database, you also have options to 
* output very accurate (but intensely processed) coverage and detection data for each gene (using `--init-gene-coverages`)
* edit your contig names so that they contain the name of the bin that the contig is in (using `--reformat-contig-names`)
* also display the amino acid sequeunces for your gene calls.  (using `--report-aa-seqs-for-gene-calls`)

### Running on a pan database

When running on a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, you'll want to instead provide the associated genomes storage database. 

<div class="codeblock" markdown="1">
anvi&#45;summarize &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
               &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
               &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> 
</div>

You can also choose to display DNA sequences for your gene clusters instead of amino acid sequences with the flag `--report-DNA-sequences`

### Other notes

If you're unsure what collections are in your database, you can run this program with the flag `--list-collections` or by running <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span>. Don't have a collection at all? If you want to summarize everything in the database, you can generate a default collection of everything by running <span class="artifact-p">[anvi-script-add-default-collection](/help/main/programs/anvi-script-add-default-collection)</span>.

You can also use the flag `--quick-summary` to get a less comprehensive summary with a much shorter processing time. 


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-summarize.md) to update this information.


## Additional Resources


* [anvi-summarize in the metagenomic workflow tutorial](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-summarize)

* [anvi-summarize in the pangenomic workflow tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#summarizing-an-anvio-pan-genome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-summarize) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
