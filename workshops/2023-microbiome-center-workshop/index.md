---
layout: blog
authors: [mschecht, ivagljiva]
title: "Another anvi'o workshop on metagenomics"
excerpt: "Materials and a tutorial from the 2023 iteration of our metagenomics workshop."
date: 2023-02-13
tags: [metagenomics, metabolism, hands-on, beginner]
comments: true
---

This blog post serves the materials for the beginner-level workshop of February 15, 2023. This workshop was supported by the Microbiome Center at the University of Chicago.

{% include IMAGE width=80 path="/images/2023_workshop/workshop_flier.png" caption="The flyer for the workshop. _Courtesy of Sofia Weinstein._" %}

{:.notice}
The original iteration of this workshop happened in 2022, and the materials for that can be found [at this link](https://merenlab.org/tutorials/dfi-metagenomics-workshop/). A lot of that material is re-used here, but as we made several updates since then, we thought it best not to re-write history and decided to give this tutorial its own page.

## Workshop Introduction

In this workshop, you will be learning how to perform a variety of genomic and metagenomic analyses using the software platform [anvi'o](https://merenlab.org/software/anvio/). If you are an attendee of the workshop, you can use this document to follow along with the commands we use. Also, you can look back at this file afterwards to remember what we worked on. For anyone who is not an attendee, we hope this tutorial is still useful to you, and we encourage you to submit your questions in the comments or on the anvi'o Discord channel.

### Background on the data

We will be using Fecal Matter Transplant (FMT) data from [Watson et al., 2021](https://www.biorxiv.org/content/10.1101/2021.03.02.433653v2) where they investigated which microbes from donors successfully colonized in recipients, and identified microbial genomic features that are predictive of successful colonization. This was explored by performing shotgun metagenomic sequencing on stool samples from donors and recipients at different time points. Today, we will be using a subset of [Metagenome Assembled Genomes](https://merenlab.org/vocabulary/#metagenome-assembled-genome-mag) (MAGs) that were assembled from the donor data. We will learn how to detect these genomes in recipient metagenomes. Additionally, we will explore methods for determining the taxonomy and metabolic potential of these MAGs. We will not be discussing metagenomic binning below, so if you need to catch up on how MAGs are created from metagenomic data check out this post with an applied example: [Chapter I: Genome-resolved Metagenomics](https://merenlab.org/tutorials/infant-gut/#chapter-i-genome-resolved-metagenomics)

### Background on anvi'o

The software we will be using today to learn metagenomics is anvi'o. 

[anvi'o](https://anvio.org/) (analysis and visualization of 'omics data) is an open source software platform that has a strong support community for empowering biologists and developing new tools to get the most out of microbial 'omics data (metagenomics, transcriptomics, genomics, etc.). There are a ton of features and [extensive documentation](https://anvio.org/) regarding its capabilities but we will quickly mention 4 key points that make anvi'o a catalyst for computational microbiology.

- **Integrated and interactive ‘omics analyses**: anvi'o allows you to interactively work with your data using the [interactive interface](https://merenlab.org/tutorials/interactive-interface/). This allows you to probe the finest details of your data by inspecting coverage plots, viewing single-nucleotide variants, BLASTing sequences of interest, organizing complex metagenomic data into informative figures, and more. We will be exploring this live in the workshop.
- **Snakemake workflows for high-throughput analyses**: anvi'o has leveraged the workflow software called [Snakemake](https://snakemake.readthedocs.io/en/stable/) to automate key steps in 'omics analyses. This allows you to analyze a lot of data simultaneously! Anvi'o workflows come with a configuration file that allows you to customize the workflow to your scientific needs. Some popular anvi'o workflows are the [metagenomics workflow](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#metagenomics-workflow) and the [pangenomics workflow](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#pangenomics-workflow). 
- **Consolidated data structures**: anvi'o has powerful data integration objects, such as a [contigs database (contigs-db)](https://anvio.org/help/7.1/artifacts/contigs-db/) and [profile database (profile-db)](https://anvio.org/help/main/artifacts/profile-db/), that combine all kinds of genomic data together to keep things organized. (Ever used Snapgene? The `.DNA` file that's created after you make a change on a plasmid map is an analogous idea — except that it is a proprietary format that can only be opened with Snapgene, while anvi'o databases are SQL-based and can be queried outside of anvi'o programs.) 
	- Specifically, the [contigs-db](https://anvio.org/help/7.1/artifacts/contigs-db/) stores all kinds of information that can be extracted from a fasta file such as: gene calls, annotations, taxonomy, and sequence statistics. 
	- The [profile-db](https://anvio.org/help/main/artifacts/profile-db/). This object stores information regarding read-recruitment data including: coverage, detection, single-nucleotide variance, single amino acid variance, etc. 
	- We will be using both [contigs-dbs](https://anvio.org/help/7.1/artifacts/contigs-db/) and [profile-dbs](https://anvio.org/help/main/artifacts/profile-db/) in the tutorial below so please use the hyperlinks above to explore more!
- **Large user community and under active development**: [anvi'o is community driven!](https://merenlab.org/2019/10/07/getting-help/) Whether you need [technical help](https://github.com/merenlab/anvio/issues) or [non-technical help](https://merenlab.org/2019/10/07/getting-help/#anvio-slack-non-technical), anvi'o has multiple ways to ask questions about your science and connect with other scientists. 
 
Anvi'o is not the only software for 'omics work out there. We consider it one of the most comprehensive (though we are certainly biased :), but you can always look for other options if you'd prefer. Most analyses that will be discussed in the workshop are general metagenomics concepts that could be implemented in other tools.

## A bit of setup

{:.notice}
Before we begin, please confirm you can correctly copy/paste the commands in the code blocks into your terminal. We recommend you have a text editor open where you can copy/paste the commands below so you can edit/modify the commands them before you run them on the command line.

Open your Terminal (if using OSX / Linux) or WSL (Ubuntu) prompt (if using Windows Subsystem for Linux) and use the `cd` command to navigate to the folder where you want to store the workshop datapack and run analyses. Use the following commands to 1) download the datapack `DFI_ANVIO_WORKSHOP.tar.gz` into your current folder, and 2) unpack the datapack and navigate into that directory:

```bash
# 1) download the datapack from the internet (FigShare)
curl -L https://figshare.com/ndownloader/files/39245762 -o DFI_ANVIO_WORKSHOP.tar.gz

# 2) unpack data and move into the datapack folder
tar -zxvf DFI_ANVIO_WORKSHOP.tar.gz && cd DFI_ANVIO_WORKSHOP
```

Get familiar with the contents of this datapack by running the `ls` command. If your output does not look the same as below then you are in the wrong directory of your computer! 

```bash
$ ls
01_FASTA                           FMT_LOW_FITNESS_KC_MAG_00082.db
FMT_HIG_FITNESS_KC_MAG_00022.db    FMT_LOW_FITNESS_KC_MAG_00082.fasta
FMT_HIG_FITNESS_KC_MAG_00022.fasta FMT_LOW_FITNESS_KC_MAG_00091.db
FMT_HIG_FITNESS_KC_MAG_00051.db    FMT_LOW_FITNESS_KC_MAG_00091.fasta
FMT_HIG_FITNESS_KC_MAG_00051.fasta FMT_LOW_FITNESS_KC_MAG_00097.db
FMT_HIG_FITNESS_KC_MAG_00055.db    FMT_LOW_FITNESS_KC_MAG_00097.fasta
FMT_HIG_FITNESS_KC_MAG_00055.fasta FMT_LOW_FITNESS_KC_MAG_00099.db
FMT_HIG_FITNESS_KC_MAG_00116.db    FMT_LOW_FITNESS_KC_MAG_00099.fasta
FMT_HIG_FITNESS_KC_MAG_00116.fasta FMT_LOW_FITNESS_KC_MAG_00100.db
FMT_HIG_FITNESS_KC_MAG_00120.fasta FMT_LOW_FITNESS_KC_MAG_00100.fasta
FMT_HIG_FITNESS_KC_MAG_00145.db    FMT_LOW_FITNESS_KC_MAG_00106.db
FMT_HIG_FITNESS_KC_MAG_00145.fasta FMT_LOW_FITNESS_KC_MAG_00106.fasta
FMT_HIG_FITNESS_KC_MAG_00147.db    FMT_LOW_FITNESS_KC_MAG_00118.db
FMT_HIG_FITNESS_KC_MAG_00147.fasta FMT_LOW_FITNESS_KC_MAG_00118.fasta
FMT_HIG_FITNESS_KC_MAG_00151.db    FMT_LOW_FITNESS_KC_MAG_00129.db
FMT_HIG_FITNESS_KC_MAG_00151.fasta FMT_LOW_FITNESS_KC_MAG_00129.fasta
FMT_HIG_FITNESS_KC_MAG_00162.db    FMT_LOW_FITNESS_KC_MAG_00130.db
FMT_HIG_FITNESS_KC_MAG_00162.fasta FMT_LOW_FITNESS_KC_MAG_00130.fasta
FMT_HIG_FITNESS_KC_MAG_00178.db    MAG_metadata.txt
FMT_HIG_FITNESS_KC_MAG_00178.fasta backup_data
FMT_LOW_FITNESS_KC_MAG_00079.db    big_data
FMT_LOW_FITNESS_KC_MAG_00079.fasta profile_mean_coverage.db
```

We will explain what these files are below, but one special thing to remember is that the `backup_data/` folder contains the results and intermediate files that we will be generating throughout the workshop. If for some reason you have problems running certain programs, check that directory for the output of each step so you can continue on with the tutorial.

### Saving number of threads as an environment variable

Many of the programs we will run are multi-threaded. We will create an [environment variable](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux) storing the number of threads to use. Most laptops today have at least four cores, so we suggest setting the number of threads to 4:

```bash
THREADS=4
```

{:.notice}
**NOTE:** If you have fewer than 4 cores you will want to set this number lower to avoid overworking your system and slowing everything down. 

In the commands throughout this file, you will see that we use `$THREADS` to access this variable. You can always replace that with an actual integer if you prefer to set the number of threads yourself (but using the variable allows everyone to copy the same commands regardless of how many cores they have available).

### Loading the anvi'o environment

If you try to run any anvi'o command, such as `anvi-interactive -h`, you will get a "command not found" error.

You first need to activate your conda anvi'o environment, as described in the [anvi'o installation instructions](https://merenlab.org/2016/06/26/installation-v2/) that you should have already run. 

```bash
conda activate anvio-7.1
```

After this, you should be able to successfully run anvi'o commands. Try `anvi-interactive -h` and see what happens. It will produce a large output on your terminal but if you scroll up you should see this:

```bash
$ anvi-interactive -h
usage: anvi-interactive [-h] [-p PROFILE_DB] [-c CONTIGS_DB]
                        [-C COLLECTION_NAME] [--manual-mode] [-f FASTA file]
                        [-d VIEW_DATA] [-t NEWICK] [--items-order FLAT_FILE]
                        [-V ADDITIONAL_VIEW] [-A ADDITIONAL_LAYERS]
                        [-F FUNCTION ANNOTATION SOURCE] [--gene-mode]
                        [--inseq-stats] [-b BIN_NAME] [--view NAME]
                        [--title NAME]
                        [--taxonomic-level {t_domain,t_phylum,t_class,t_order,t_family,t_genus,t_species}]
                        [--show-all-layers] [--split-hmm-layers]
                        [--hide-outlier-SNVs] [--state-autoload NAME]
                        [--collection-autoload NAME] [--export-svg FILE_PATH]
                        [--show-views] [--skip-check-names] [-o DIR_PATH]
                        [--dry-run] [--show-states] [--list-collections]
                        [--skip-init-functions] [--skip-auto-ordering]
                        [--skip-news] [--distance DISTANCE_METRIC]
                        [--linkage LINKAGE_METHOD] [-I IP_ADDR] [-P INT]
                        [--browser-path PATH] [--read-only] [--server-only]
                        [--password-protected] [--user-server-shutdown]
```

### Download some databases

We will be exploring taxonomy of MAGs, which will require a database download, so please run the following command [anvi-setup-scg-taxonomy](https://anvio.org/help/main/programs/anvi-setup-scg-taxonomy/) to set it up:


```bash
anvi-setup-scg-taxonomy
```

We will also be exploring the metabolic potential of MAGs, which will require the following to command to set up another database [anvi-setup-kegg-kofams](https://anvio.org/help/7.1/programs/anvi-setup-kegg-kofams/):

{:.warning}
This database is 12 GB and will take a long time to download! If you prefer not to download so much data, you can skip the program that requires this database (`anvi-run-kegg-kofams`) and instead work with the pre-annotated databases that we provide in the `backup_data/` folder.

```bash
anvi-setup-kegg-kofams
```

You might have already run these setup programs when you installed anvi'o. If these commands give you errors saying that you already have the data on your computer and asking you to use the `--reset` flag to re-download them, then you are already good to go and can move on to the next section.


## Part I: Getting started with anvi'o

### Going from a MAG FASTA file to a contigs-db
First, let's take a look at the FASTA file. Hopefully you are already familiar with this file format:

```bash
$ head FMT_HIG_FITNESS_KC_MAG_00120.fasta
>KC_000000002890
TCACAAACTTTTTTCAGTAAATATTTTAAACATCAAATCGGATTATCACCCAAAGAATATCGAAAGAGCTGATTCCCCTT
GTAAAACTTTTATTTTTAAAGAAATGTTTTTCTTAACATAAGAGATGAGATAAATTTGCTACATTTGTACTCGATATGCT
TACAAATTAAAAGTTATTTAACTTTTAGGAATACAAATTAAACAGATAAACCACTAAATAGTATACTTATGTCAAAAGTT
TCAAAAGAAGATGCCTTAAAATATCACAGTGAAGGTAAAGCTGGAAAAATAGAAGTAATTCCTACCAAACCTTATAGTAC
ACAACGAGACCTATCCCTAGCCTATACTCCGGGAGTAGCAGAACCGTGTCTTGAAATAGAACAAGATGCAGAAAAGGCGT
ATGAATACACGGCCAAAGGTAATTTAGTAGCAGTCATTTCCAACGGGACGGCTGTATTGGGTTTAGGCGACATCGGTGCT
TTGGCCGGAAAGCCCGTCATGGAAGGGAAAGGCTTGCTATTCAAGATATTCGCAGGTATCGACGTATTCGATATTGAGGT
CAATGAAAAAGACCCTGACAAATTTATTGCCGCAGTAAAAGCCATATCCCCCACTTTCGGAGGTATAAATTTGGAAGATA
TAAAAGCTCCCGAGTGTTTCGAAATAGAAACCCGATTAAAAGAGGAACTAAATATCCCCGTTATGCACGACGATCAGCAC
```

How many contigs are in this genome? Here's how you can find out:

```bash
$ grep -c '>' FMT_HIG_FITNESS_KC_MAG_00120.fasta
303
```

We will convert this file into an anvi'o [contigs-db](https://anvio.org/help/7.1/artifacts/contigs-db/) so that we can work with anvi'o programs downstream. To do this, we use the program [anvi-gen-contigs-database](https://merenlab.org/software/anvio/help/7/programs/anvi-gen-contigs-database/).

With any anvi'o program, you can use the `-h` flag to see the help page, with a brief description of input parameters, as in:

```bash
anvi-gen-contigs-database -h
```

This output should also print the URL of the program's online documentation, which is often more extensive and helpful.

Using the help output and documentation, can you figure out how to use this program to turn the FASTA file into a contigs database?

Here is the answer:

```bash
anvi-gen-contigs-database -f FMT_HIG_FITNESS_KC_MAG_00120.fasta \
                          -n KC_MAG_00120 \
                          -T $THREADS \
                          -o FMT_HIG_FITNESS_KC_MAG_00120.db
```

Please note that setting the name of the database to be `KC_MAG_00120` (with the `-n` parameter) will be important in matching information between files later, so please use this name (even though you are technically free to name the database however you like). Also, check out all the output [anvi-gen-contigs-database](https://merenlab.org/software/anvio/help/7/programs/anvi-gen-contigs-database/) put on your terminal. Anvi'o is very vocal and its programs will try to print anything that happens when you run a program so that you know what's going on behind the scenes. 

Once that is finished running, you can inspect the new database to see basic information about its contents:

```bash
anvi-db-info FMT_HIG_FITNESS_KC_MAG_00120.db
```

[anvi-db-info](https://anvio.org/help/main/programs/anvi-db-info/) is your best friend for quickly understanding what is inside a [contigs-db](https://anvio.org/help/7.1/artifacts/contigs-db/), so you should read all the information that it gives you. Hopefully you noticed that gene calling was done as the program executed, and you can see in the `anvi-db-info` output that the number of genes that were found in this FASTA file was 2,297. 

However, these genes are not annotated yet. That will be our next step.

### Annotating SCGs in the MAG

A typical first annotation step in anvi'o is to find single-copy core genes, or SCGs. SCGs are a set of genes that are present in the majority of genomes and occur in one copy (most of which are ribosomal proteins). Since SCGs are phylogenetically conserved and tend to occur once per genome, they are good candidates for taxonomic markers and can be used for [genome completeness estimation](https://merenlab.org/2020/07/27/history-of-metagenomics/#:~:text=The%20effort%20to,the%20fer1%20genome%E2%80%9D.), as you will see later. The anvi'o program for finding single-copy core genes is called [anvi-run-hmms](https://merenlab.org/software/anvio/help/7/programs/anvi-run-hmms/):

```bash
anvi-run-hmms -c FMT_HIG_FITNESS_KC_MAG_00120.db \
				-T $THREADS
```

Since we did not specify *which* HMMs anvi'o should run, anvi'o will run all HMMs it comes with, including SCGs for Bacteria and Archaea as well as HMMs for Ribosomal RNA genes.

Re-run [anvi-db-info](https://anvio.org/help/main/programs/anvi-db-info/) and see if the output is different now:

```bash
anvi-db-info FMT_HIG_FITNESS_KC_MAG_00120.db
```

Hopefully you'll notice that a lot of HMMs were annotated, based on the "AVAILABLE HMM SOURCES" section of the output.

### Checking the taxonomy of the MAG

As mentioned above, one thing anvi'o can do with SCGs is to predict the taxonomy of a genome. It does this by looking for similarity between a target genome's SCGs and the SCGs from microbes in the [Genome Taxonomy Database](https://gtdb.ecogenomic.org/).

We already asked you to do this above, but if you haven't already, download the relevant GTDB data onto your computer using [anvi-setup-scg-taxonomy](https://anvio.org/help/main/programs/anvi-setup-scg-taxonomy/):

```bash
anvi-setup-scg-taxonomy
```

Then, assign taxonomy to each SCG found in the genome using [anvi-run-scg-taxonomy](https://anvio.org/help/main/programs/anvi-run-scg-taxonomy/):

```bash
anvi-run-scg-taxonomy -c FMT_HIG_FITNESS_KC_MAG_00120.db \
					-T $THREADS
```

Finally, aggregate the information from all SCGs to estimate the overall taxonomy of the genome using [anvi-estimate-scg-taxonomy](https://anvio.org/help/main/programs/anvi-estimate-scg-taxonomy/):

```bash
anvi-estimate-scg-taxonomy -c FMT_HIG_FITNESS_KC_MAG_00120.db
```

If you want to see the contribution of each SCG to the estimated taxonomy, you can run the above program again with the `--debug` flag.

```bash
anvi-estimate-scg-taxonomy -c FMT_HIG_FITNESS_KC_MAG_00120.db \
					--debug
```

### Estimating MAG completeness

Another thing you can do with SCGs is to predict the completeness of a genome. [Completion](https://merenlab.org/vocabulary/#completion) and [redundancy](https://merenlab.org/vocabulary/#redundancy) estimates are based on the percentage of expected domain-level SCGs that are annotated in the genome:

```bash
anvi-estimate-genome-completeness -c FMT_HIG_FITNESS_KC_MAG_00120.db
```

Now is a good time to show you that anvi'o can work with more than one database at a time. Certain programs have the ability to process multiple input databases. However, it has to know where all of the databases are located in order for this to work. 

Let's generate an input file containing paths to all of the databases we have:

```bash
anvi-script-gen-genomes-file --input-dir ./ \
				-o external-genomes.txt
```

Check out the file you just made by running the following:

```bash
cat external-genomes.txt
```

You should see that all 20 MAGs are listed, along with their database paths. Now we can give this file to the same anvi'o program we just used for estimating completeness, and it will do it for all 20 of the genomes:

```bash
anvi-estimate-genome-completeness -e external-genomes.txt
```

Notice we are no longer using `-c` for an individual contigs database but rather `-e` to denote an [external-genomes.txt](https://anvio.org/help/7/artifacts/external-genomes/), which contains paths to multiple contigs databases. If you are ever unsure whether a program can work on multiple databases at once, you can always use `-h` after any anvi'o command to learn about accepted parameters.

So far we have explored the basics of a [contigs-db](https://anvio.org/help/7.1/artifacts/contigs-db/) using anvi'o. Now it's time to incorporate ecology via metagenomic read recruitment into our analysis. 

## Part II: Explore the ecology of bacterial populations from an FMT donor across FMT recipients


To explore the ecology of bacterial populations that colonize recipient guts, we will leverage metagenomic read recruitment. We have already mapped shotgun metagenomic reads against the MAGs binned from the donor metagenomes. This will allow us to calculate detection statistics and hypothesize which MAGs have colonized the recipients.

To visualize the read recruitment results in anvi'o, use the following command:

```bash
anvi-interactive -d big_data/SUMMARY/bins_across_samples/mean_coverage_metadata.txt \
                 -p profile_mean_coverage.db \
                 --title "Detection of two MAGs across two samples" \
                 --manual
``` 

Now we'll spend some time playing around with the visualization in the interactive interface. Which MAGs represent populations that colonized this recipient after FMT?

To view the pre-beautified results in the interactive interface, load the state called `microbiome_center` and the bin collection called `microbiome_center_bins`. However, feel free to change the aesthetics to communicate the results in whatever way you see fit.

{% include IMAGE width=80 path="/images/2023_workshop/mag_detection.svg" caption="Visualization of MAG detection in the interactive interface." %}

{:.notice}
FYI: Whenever you are done with the interactive interface and want to go back to doing stuff on your terminal, you should press CTRL-C (while in your terminal window) to make it stop serving the interface and give your prompt back. :) 


## Part III: Investigating metabolism in MAGs
In this section of the workshop, we'll be estimating the metabolic capacity of the bacterial populations living in one FMT donor. As discussed in the lecture, we have 20 MAGs to compare - 10 that are considered 'high-fitness' colonizers and 10 that are considered 'low-fitness' non-colonizers. The datapack contains [contigs databases](https://merenlab.org/software/anvio/help/7/artifacts/contigs-db/) for 19 of these MAGs, and a FASTA file for the last one, `KC_MAG_00120`, which you earlier converted into its own contigs database. 

{:.notice}
If you didn't go through Part I, or if you didn't download the KEGG database onto your computer by running `anvi-setup-kegg-kofams`, you can find a pre-annotated contigs database for `KC_MAG_00120` in the `backup_data/` folder of the datapack. In this case, we suggest copying it to your current directory by running `cp backup_data/FMT_HIG_FITNESS_KC_MAG_00120.db .` (you must include the final `.` in that command).


### Annotate genes in the MAG with KEGG KOfams

In order to estimate metabolism in anvi'o v7, you need to annotate the genes in your genome with enzymes from the [KEGG KOfam](https://www.genome.jp/ftp/db/kofam/) database. You can do this by running:

```bash
anvi-run-kegg-kofams -c FMT_HIG_FITNESS_KC_MAG_00120.db \
					-T $THREADS
```

{:.notice}
**Reminder**: skip the above command if you decided not to run `anvi-setup-kegg-kofams`, and use the pre-annotated, `backup_data/` version of this database instead for the rest of the workshop.

That command will take about 5 minutes, given 4 threads. If you have more cores, you can increase the number of threads to make it go faster.

Once it is done running, you can inspect the database again - you should now see the annotations we added:

```bash
anvi-db-info FMT_HIG_FITNESS_KC_MAG_00120.db
```

### Estimating metabolism (~3 min)

We have the enzyme annotations we need, so now we can use the following program to predict the metabolic capacity of our MAG:

```bash
anvi-estimate-metabolism -c FMT_HIG_FITNESS_KC_MAG_00120.db \
				-O KC_MAG_00120
```

Take a look at the resulting file with 

```bash
head KC_MAG_00120_modules.txt     
```

You can also import this file into Excel if you prefer. We'll discuss what the output means during the workshop (but you can also check the documentation [here](https://merenlab.org/software/anvio/help/7.1/artifacts/kegg-metabolism/)).

Our goal is to compare the metabolic capacities of all of these MAGs. The other databases have already been annotated properly, so they are ready for estimation. We can use the same input file we used before to run estimation on all of the MAGs:

```bash
anvi-estimate-metabolism -e external-genomes.txt \
              -O FMT
```

### Visualizing a heatmap of metabolic completeness across MAGs

If you're the kind of person who likes looking at pictures rather than text and numbers, you might find it easier to convert the metabolism estimation output into a heatmap of module completeness scores. You can do this by first estimating metabolism with the `--matrix-format` flag to get a matrix file of just the completeness scores (no extra info), and then giving that file to `anvi-interactive` using the `--manual-mode` flag for visualizing ad hoc data files. ([Here is an helpful tutorial](https://merenlab.org/tutorials/interactive-interface/) on visualization of arbitrary data matrices in anvi'o.)

Here are the commands to do this:

```
# 1) get the same metabolism estimation values, but formatted as a matrix
anvi-estimate-metabolism -e external-genomes.txt \
				-O FMT \
				--matrix-format

# 2) the output file we want is FMT-completeness-MATRIX.txt, check it out:
head FMT-completeness-MATRIX.txt

# 3) visualize
anvi-interactive -d FMT-completeness-MATRIX.txt \
             -p FMT-completeness-MATRIX_profile.db \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
             
# NOTE: typing CTRL-C will end the anvi-interactive command
```

In the interactive interface in your browser, there are a lot of settings you can change to get this looking like a heatmap. For example, I always change the 'Drawing type' to be 'Phylogram' so that it is a rectangle instead of a circle. I also always change the bar graphs into intensities (with a min of 0 and a max of 1). We will go over how to do this in the workshop.

#### Making the heatmap look better

After we get a basic heatmap, there are some other things we can do to embellish the heatmap in a way that makes it easier to see patterns in our data. We can cluster the modules and the MAGs using the pathway completeness data, adding dendrograms to the top and side of the heatmap for better organization. We can also import information about MAG groups ('high-fitness' vs 'low-fitness') so those groups are easier to compare. And finally, we can add labels for each pathway. We'll do one step at a time and check the heatmap visualization as we go to see the progress. 

{:.notice}
Pro tip 1: when you want to save the changes you've made to the interface settings, you can click the 'Save State' button so that you don't have to repeat the same steps again and again!

{:.notice}
Pro tip 2: Each time you are done with the interactive interface while following the steps below, remember to press CTRL-C in the terminal to stop the `anvi-interactive` command before moving on to subsequent commands.

First, we will create the module dendrogram for the top of the heatmap. We will use an [anvi'o program to cluster the matrix data](https://anvio.org/help/7.1/programs/anvi-matrix-to-newick/) (in which each row represents a module), and pass the resulting file to the `-t` parameter of `anvi-interactive`:

```
# 4) use the matrix to make a dendrogram that organizes modules 
#    by their patterns of completeness across MAGs
anvi-matrix-to-newick FMT-completeness-MATRIX.txt

# 5) visualize with the top dendrogram
anvi-interactive -d FMT-completeness-MATRIX.txt \
             -t FMT-completeness-MATRIX.txt.newick \
             -p FMT-completeness-MATRIX_profile.db \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
```

Now, we will create the MAG dendrogram. We transpose the matrix so that each row represents a MAG, and generate a newick-formatted tree from that file. Since the MAGs are the 'layers' in the interactive interface, we need to import the tree into the 'layer-orders' table in the profile database. We do this by copying the tree into a simple tab-delimited file and importing that into the database (see [here for an explanation of layer orders data in anvi'o](https://merenlab.org/2017/12/11/additional-data-tables/#layer-orders-additional-data-table)). 

```				
# 6) make a dendrogram that organizes MAGs (the other dimension) 
#    by how similar their module completeness scores are

# transpose the matrix so that MAGs are in the rows
anvi-script-transpose-matrix FMT-completeness-MATRIX.txt \
                             -o FMT-completeness-MATRIX_TRANSPOSED.txt 
                  
# convert the transposed matrix to a dendrogram     
anvi-matrix-to-newick FMT-completeness-MATRIX_TRANSPOSED.txt

# create a text file to contain the dendrogram
echo -e "item_name\tdata_type\tdata_value" > layer-order.txt
echo -e "MAG_dendrogram\tnewick\t" >> layer-order.txt

# copy the contents of FMT-completeness-MATRIX_TRANSPOSED.txt.newick and 
# paste that into the 3rd column of the 2nd line of layer-order.txt (right after the tab)
# make sure there aren't any blank lines in layer-order.txt or the next command will fail
anvi-import-misc-data -p FMT-completeness-MATRIX_profile.db \
                      -t layer_orders \
                      layer-order.txt


# 7) visualize to see the side dendrogram
anvi-interactive -d FMT-completeness-MATRIX.txt \
             -t FMT-completeness-MATRIX.txt.newick \
             -p FMT-completeness-MATRIX_profile.db \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
```

To order the MAGs using the imported dendrogram, you'll have to navigate to the 'Layers' tab in the left side panel, and select 'MAG_dendrogram' in the 'Order by' drop-down box.

Now, let's annotate each MAG with the group that it belongs to. We have this information in the `MAG_metadata.txt` file, so we can simply extract that and import it.

```
# 8) import MAG group information
cut -f 1,2 MAG_metadata.txt > mag_group_data.txt

anvi-import-misc-data -p FMT-completeness-MATRIX_profile.db \
                      -t layers \
                      mag_group_data.txt


# 9) visualize to see where the group info is added
anvi-interactive -d FMT-completeness-MATRIX.txt \
             -t FMT-completeness-MATRIX.txt.newick \
             -p FMT-completeness-MATRIX_profile.db \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
```

You should now see on the right side of the heatmap that there is now a column of colored boxes indicating the group of each MAG. You can change the colors in the 'Legends' tab on the left.

Last but not least, we want to know what each pathway is! Let's label each module with its name and categorization, as described in KEGG. We can quickly get this information by extracting it from the anvi'o modules database. Then, we have two options for adding it to the visualization: we can either use `anvi-import-misc-data` to store the data in the profile database (like we did before), or we can pass the additional data file to the `-A` parameter of `anvi-interactive`. We'll demonstrate both.

We first need to get the names and categories of each KEGG module. The fastest way to get this information is to take it from [the modules database](https://anvio.org/help/7.1/artifacts/modules-db/). Below, we provide a combination of Python code, SQL queries, and BASH code to get this information into a tab-delimited file. Don't worry if you don't understand it; this is not a Python/SQL workshop, after all. :) You can simply copy-paste the commands, and take a look at the resulting file called `modules_info.txt`.

```
# 10) obtain module name and category information
# learn where the MODULES.db is with some quick-n-dirty Python:
export ANVIO_MODULES_DB=`python -c "import anvio; import os; print(os.path.join(os.path.dirname(anvio.__file__), 'data/misc/KEGG/MODULES.db'))"`

# start an empty file to hold the additional data:
echo -e "module\tclass\tcategory\tsubcategory\tname" > modules_info.txt

# get module classes with a SQL query to the database:
sqlite3 $ANVIO_MODULES_DB "select module, data_value from kegg_modules where data_name='CLASS'" | \
    sed 's/; /|/g' | \
    tr '|' '\t' >> module_class.txt

# get module names with another SQL query:
sqlite3 $ANVIO_MODULES_DB "select module,data_value from kegg_modules where data_name='NAME'" | \
    tr '|' '\t' > module_names.txt

# join everything into the additional data file:
paste module_class.txt <(cut -f 2 module_names.txt ) >> modules_info.txt

# remove unneeded files:
rm module_names.txt module_class.txt
```

Now that we have the `modules_info.txt` file, we can add those module names and categories to our interface visualization by either using the additional data flag `-A` like this:

```
# 11) final visualization, using the -A parameter
anvi-interactive -d FMT-completeness-MATRIX.txt \
             -t FMT-completeness-MATRIX.txt.newick \
             -p FMT-completeness-MATRIX_profile.db \
             -A modules_info.txt \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
```

*Or*, we can import the data from that file into the profile database so that it is available every single time we open the interface:

```
# alternatively, if you want to import the data:
anvi-import-misc-data -p FMT-completeness-MATRIX_profile.db \
                      -t items \
                      modules_info.txt

anvi-interactive -d FMT-completeness-MATRIX.txt \
             -t FMT-completeness-MATRIX.txt.newick \
             -p FMT-completeness-MATRIX_profile.db \
             --manual-mode \
             --title "Heatmap of module completeness scores across MAGs"
```

To summarize, here is a list of the things we added to our original basic heatmap:
- a dendrogram organizing the modules according to their distribution across MAGs
- a dendrogram organizing the MAGs according to the distribution of module completeness scores (so MAGs that have similar metabolic capabilities will be closer together)
- colors to indicate which MAGs are high-fitness and which MAGs are low-fitness
- the names and categories of modules so that we can see what pathway each one represents (instead of just the module identifier)


#### An example heatmap, and an interesting finding

In the datapack, I've provided a profile database that contains some saved settings (a 'state', in anvi'o lingo) to make this heatmap look pretty. It should look fairly similar to the heatmap we created using the steps above. Here is how you can look at it:

```
anvi-interactive -d FMT-completeness-MATRIX.txt \
          -t FMT-completeness-MATRIX.txt.newick \
          -p backup_data/FMT-completeness-MATRIX_profile.db \
          --manual-mode \
          --title "Heatmap of module completeness scores across MAGs"
```

{% include IMAGE width=80 path="/images/2023_workshop/module_heatmap.svg" caption="The example heatmap of module completeness scores." %}


If you hover your mouse over the various boxes in the heatmap and look at the 'Mouse' tab, you will see that there is even more information available for each MAG and pathway - they just aren't visible. You can make them visible by increasing the 'height' settings for those layers (so that they are non-zero).

Now that the heatmap is looking good, we can look for some patterns in the data. You should notice a block of metabolic modules that are highly complete in the high-fitness MAGs, but largely missing from the low-fitness MAGs. What are these pathways?

In the next section, we're going to learn how to mathematically find these pathways that are over-represented in the high-fitness group, by computing an enrichment score.

### Computing enrichment of metabolic pathways in groups of genomes

You might recall that our MAGs belong to two different groups - 10 are 'high-fitness' and 10 are 'low-fitness'. To compare the metabolic capacities of the two groups, we can do statistical tests to figure out which metabolic pathways are over-represented in one group or another. The program that does this enrichment analysis is called [anvi-compute-metabolic-enrichment](https://merenlab.org/software/anvio/help/7.1/programs/anvi-compute-metabolic-enrichment/). 

In order to run the enrichment analysis, we need to specify which group each MAG belongs to. Luckily, this information is already in the metadata file:

```bash
head MAG_metadata.txt   # see the columns 'name' and 'group'
```

The metadata file can serve as our 'group' file. We give that file, along with the metabolism estimation output, to this program:

```bash
anvi-compute-metabolic-enrichment -M FMT_modules.txt \
             -G MAG_metadata.txt \
             -o metabolic_enrichment.txt
```

Please note that the name of each MAG must be the same in both files. If you named your  `KC_MAG_00120` database as we suggested, you should not have any problem. But if you named it differently, you should change the corresponding name in the metadata file to match its name in the metabolism output file.

Take a look at `metabolic_enrichment.txt`. What do you notice? (Hint: check the `associated_groups` column)

### A deeper dive into the histidine biosynthesis pathway

We have a bunch of files summarizing the metabolic capacity of our MAGs. What more can we do with this? We're now going to analyze the histidine biosynthesis pathway, module M00026, to exemplify the kinds of deeper investigations that can be done with this data.

#### What do we want to know about histidine biosynthesis?

Histidine is one of the 20 proteinogenic amino acids. It is an essential amino acid for humans, meaning that we need to obtain it from our diet because we cannot make it ourselves. Take a look at the [module page for M00026](https://www.genome.jp/module/M00026). You will see that this pathway is a long, linear series of chemical conversions, and that many of the reactions have multiple enzyme options.

Some microbes can make histidine, but not all of them have this capacity. If you examine `metabolic_enrichment.txt`, you will see that module M00026 is significantly enriched in the 'high-fitness' group because it is present in 80% of the 'high-fitness' MAGs, but in none of the 'low-fitness' MAGs. What this actually means is that the module completeness score was less than 75% (the default threshold for module 'presence') in all of the 'low-fitness' MAGs, and greater than 75% in all but 2 'high-fitness' MAGs.

This brings up a set of questions that we will try to answer. Is this pathway actually missing from the 'low-fitness' MAGs, or was our threshold too low? Why is it missing from 2 of the 'high-fitness' MAGs? Which set of possible enzymes are most commonly used in these genomes?

#### Hints from our interactive heatmap

One way to get a quick (but not very detailed) answer is to look at the completeness scores in the heatmap that we made. Open the heatmap in `anvi-interactive` again (you can copy the last command you used earlier), go to the 'Search' tab in the left panel, and search for 'M00026' in the 'Item Name' field. Press the button called 'Highlight splits on the tree' and look for the red bar that pops up. Then you can open the 'Mouse' tab on the right side of the screen and hover your cursor over the boxes in the highlighted column to see the completeness scores. 

You should notice that 9 of the 'low-fitness' MAGs have a score of 0.0 for this pathway - so yes, with a score that low, this pathway is probably truly missing from these genomes. But one of the 'low-fitness' MAGs (`KC_MAG_00118`) has a score of 0.125. Where is that value coming from? In addition, the two 'high-fitness' MAGs (`KC_MAG_00055` and `KC_MAG_00145`) that are "missing" this pathway have completeness scores of 0.5 and 0.57. So half of the pathway _is_ there. But which genes are missing (and which are present)?

#### Why does `KC_MAG_00118` have only 12.5% of this pathway?

The interactive interface will not give us enough detail, so we have to go back to our original long-format output from `anvi-estimate-metabolism`, the file called `FMT_modules.txt`. Let's search for the lines related to this pathway:

```
grep M00026 FMT_modules.txt
```

We get 11 lines of output, because 11 of the MAGs had non-zero completeness scores for this module. Let's consider the line for 'low-fitness' MAG `KC_MAG_00118` first. In the 12th column of that file, you will see that this MAG has an annotation for one enzyme, K04486, and this is why the pathway completeness score is 0.125.

(tired of searching through the text output on your console? try this to select the specific line and column: `grep M00026 FMT_modules.txt | grep KC_MAG_00118 | cut -f 12`)

The KEGG page about [K04486](https://www.genome.jp/entry/K04486) (which is also accessible from the [module M00026 page](https://www.genome.jp/dbget-bin/www_bget?M00026)) says that this enzyme is a histidinol-phosphatase. It catalyzes the penultimate step in the histidine biosynthesis pathway and was the last enzyme from this pathway to be characterized in *Bacillus subtilis* ([le Coq et al 1999](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC93787/)). But there is no hint as to why this enzyme might be present while all the rest are absent. Here are some of the possibilities:

- histidine biosynthesis is present in the genome, but we are missing the rest of the genes
- histidine biosynthesis is absent from the genome, but this enzyme has an alternate function
- histidine biosynthesis _used to be_ present, but has since been lost, and this enzyme is left behind

We don't have the time to go down these rabbit holes today, but for each of these possibilities, you could think about how it might have occurred, and how we might go about investigating it. :)

#### What is going on with the partial pathways in the 'high-fitness' group?

Let's move on to the partial pathways in `KC_MAG_00055` and `KC_MAG_00145`. Use the following command to see the enzymes that these genomes have:

```
grep M00026 FMT_modules.txt | grep "KC_MAG_00055\|KC_MAG_00145" | cut -f 2,12
```

Compare that output to the [module image](https://www.genome.jp/module/M00026). Which half of the pathway is covered in these genomes?

In some microbes, histidine biosynthesis genes are encoded in one or more operons ([Kulis-Horn, Persicke, and Kalinowski 2014](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3896937/])). This could be the situation here. Indeed, if you look at the gene caller IDs associated with the enzymes in these MAGs, a lot of them are sequential, which usually indicates that the genes are located right next to each other in the genome. The gene caller IDs are in the 13th column of the modules file. You can add them to the output from above like so:

```
grep M00026 FMT_modules.txt | grep "KC_MAG_00055\|KC_MAG_00145" | cut -f 2,12-13
```

{:.notice}
Bonus question: there is something odd about two of the genes in the list for `KC_MAG_00145`. Can you find them? Why do you think this is happening?

In each of these two MAGs, at least 4 of the enzymes is immediately next to another enzyme from the same pathway. Indeed, if you look at the data for the other 8 'high-fitness' MAGs, you will notice a similar pattern. Histidine biosynthesis appears to be encoded in multiple small operons in these genomes. This raises the possibility that MAGs `KC_MAG_00055` and `KC_MAG_00145` are missing some of these genes because a portion of the genome is missing (and an operon with it). You can look at the completion estimates for all the MAGs using the following command:

```
anvi-estimate-genome-completeness -e external-genomes.txt
``` 

The resulting table should tell you that `KC_MAG_00055` is highly complete, and `KC_MAG_00145` is a little less complete, based on single-copy core gene presence/absence in these genomes. It is not clear just based on these estimates whether one of the histidine biosynthesis operons could be missing from these two MAGs. If we wanted to look into this further, we could download some reference genomes (hopefully highly-complete isolate genomes) for the species that these MAGs belong to, and see if we can find the full module M00026 in there. But it is always difficult to prove absence of function using simply bioinformatics. :)

#### Which set of enzymes are these genomes using to make histidine?

Let's tackle one last question. There are lots of ways to have this pathway complete - which one are the 'high-fitness' MAGs using? For this, we need to generate a new output file from `anvi-estimate-metabolism`, one that described each possible path through the module. The output mode we need is called ['KOfam Hits in Modules' mode](https://anvio.org/help/7.1/artifacts/kegg-metabolism/#kofam-hits-in-modules-mode) in anvi'o v7.1 (which is a horrible name, and thankfully there will be a much better mode called ['Module Paths' mode](https://anvio.org/help/main/artifacts/kegg-metabolism/#module-paths-mode) in the next release of anvi'o). Here is how to get that output:

```
anvi-estimate-metabolism -e external-genomes.txt \
              -O FMT \
              --kegg-output-modes kofam_hits_in_modules
```

The main purpose of this file is to link each KOfam annotation to the path it belongs to in a given module, and as a consequence of that, the file enumerates every possible combination of enzymes, in each pathway, for each MAG. Take a look and see for yourself:

```
head FMT_kofam_hits_in_modules.txt  # o_O so much data
```

There is a lot of redundant information in the file, but we can parse it out to determine the most common pathway being used. 

{:.warning}
This section gets quite technical below. If you aren't familiar with Python, it might look intimidating. We will do our best to explain what is going on, but our main goal and hope is that this section can serve as a demonstration of _"what is possible"_ with data like this (without the expectation that everyone will understand the technical aspects). In fact, you could do this data wrangling using other tools, like `R` or maybe even Excel. The bottom line is: don't worry about the specifics here. As long as you have the right data and a targeted question, you can find a way to get to an answer.

Below, we'll use Python to find the most common path through module M00026 in our MAGs. Run `python` in your terminal to open the Python interpreter, then use the following commands:

```python
import pandas as pd
df = pd.read_csv("FMT_kofam_hits_in_modules.txt", sep="\t", index_col=0)

# extract rows for histidine biosynthesis module M00026
only_M26 = df.loc[df["kegg_module"] == "M00026"]

# keep only the unique paths through the module per genome
only_M26_unique_paths = only_M26[~only_M26.duplicated(["genome_name", "path"])]

# find the most complete path(s) per genome and extract those
idx = only_M26_unique_paths.groupby("genome_name")["path_completeness"].transform(max) == only_M26_unique_paths["path_completeness"]
most_complete = only_M26_unique_paths[idx]

# KC_MAG_00118 has a lot of 'most complete' paths because it has 
# only 1 enzyme annotated. Let's drop it
most_complete = most_complete[most_complete["genome_name"] != "KC_MAG_00118"]

# count the number of instances of each path
most_complete["path"].value_counts()

# exit the Python interpreter
exit()
```

Which are the most common enzymes for each step? Which part of the pathway has the most variability across these MAGs?


## Takeaways

Today we used genomics and metagenomics to explore the colonization of bacteria after FMT and investigated fitness-determining genomic characteristics that may have contributed to their success or failure. 

We hope anvi'o helped you along the way and you can find some new ways to analyze your own data! If you have any questions about anvi'o and want to join the community please check out our [slack channel](https://anvio.slack.com/join/shared_invite/zt-ov46uj90-9p2woLJFcVCfv7cdhANXSA#/shared-invite/email)!


## Bonus material - read recruitment to one MAG

In part II, we looked at read recruitment data in the interactive interface. If you are curious about how we got that data, this section is for you. Below is a hands-on tutorial to help you learn how to do read recruitment.

For practice, we will just be working with one MAG. Our tutorial experimental set up is 1 MAG and two metagenome samples - one pre-FMT and one post-FMT. Let's see if the MAG colonized the recipient!

{:.notice}
The [anvi'o Snakemake metagenomics workflow](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#metagenomics-workflow) is a great way to scale up the analysis below. We used this workflow to generate the mapping data for all 20 MAGs that we showed earlier in part II.

### Prepare fasta reference

The first step to read recruitment is to index your reference sequence which will allow the mapping software to more efficiently place reads. Today, we will be using [bowtie2](http://bowtie-bio.sourceforge.net/bowtie2/index.shtml). If you are interested in why we are using bowtie2, check out Meren's blog post on [comparing mapping software](https://merenlab.org/2015/06/23/comparing-different-mapping-software/).

Now let's make a reference sequence index using [bowtie2-build](http://bowtie-bio.sourceforge.net/bowtie2/manual.shtml#the-bowtie2-build-indexer).

```bash
bowtie2-build FMT_HIG_FITNESS_KC_MAG_00120.fasta FMT_HIG_FITNESS_KC_MAG_00120
```

### Map metagenomes against reference

... and just like that we are ready to recruit reads from metagenomes to our MAG reference! Let's use [bowtie2](http://bowtie-bio.sourceforge.net/bowtie2/manual.shtml#the-bowtie2-aligner) to do this:

To make things more efficient, we will use a `for` loop to iterate the mapping steps over the two metagenomes from pre- and post-FMT. Notice there are 4 distinct steps in the loop:

1. [bowtie2](http://bowtie-bio.sourceforge.net/bowtie2/manual.shtml#the-bowtie2-aligner) will do the actual read recruitment of the shotgun metagenomic short reads against our MAG reference and will output [SAM files](https://en.wikipedia.org/wiki/SAM_(file_format)) (a universal data format for recording read recruitment data).
2. [samtools view](http://www.htslib.org/doc/samtools-view.html) will convert the [SAM files](https://en.wikipedia.org/wiki/SAM_(file_format)) to [BAM files](https://en.wikipedia.org/wiki/Binary_Alignment_Map). The [BAM file](https://en.wikipedia.org/wiki/Binary_Alignment_Map) is a binary version of the SAM file which can be more efficiently parsed.
3. [samtools sort](http://www.htslib.org/doc/samtools-sort.html) orders the read recruitment results in your BAM file according to the DNA reference coordinates.
4. [samtools index](http://www.htslib.org/doc/samtools-index.html) is needed to efficiently visualize read recruitment results from a BAM file.

```bash
# Make a directory to house the mapping results
mkdir -p 02_MAPPING

# use a for loop to map the recipient gut metagenomes from PRE and POST FMT metagenomes 
# against our MAG reference
for FASTA in KC-R01-CDI-C-01-PRE_S7 KC-R01-CDI-C-03-POST_S9; do
    # 1. perform read recruitment with bowtie2 to get a SAM file:
    echo -e "Mapping: "${FASTA}""
    bowtie2 --threads $THREADS \
            -x FMT_HIG_FITNESS_KC_MAG_00120 \
            -1 01_FASTA/"${FASTA}"_R1_001_subset.fastq.gz \
            -2 01_FASTA/"${FASTA}"_R2_001_subset.fastq.gz \
            --no-unal \
            -S 02_MAPPING/"${FASTA}".sam

    # 2. covert the resulting SAM file to a BAM file:
    samtools view -F 4 -bS  02_MAPPING/"${FASTA}".sam > 02_MAPPING/"${FASTA}"-RAW.bam

    # 3. sort the BAM file:
    samtools sort 02_MAPPING/"${FASTA}"-RAW.bam -o 02_MAPPING/"${FASTA}".bam
    
    # 4. index the BAM file:
    samtools index 02_MAPPING/"${FASTA}".bam

done
```

### Profile the mapping results with anvi'o

Now that we have recruited reads from our pre- and post-FMT metagenomes against our MAG reference, we need to get this mapping data into the anvi'o ecosystem using [anvi-profile](https://anvio.org/help/7.1/programs/anvi-profile/), which will create a [profile-db](https://anvio.org/help/main/artifacts/profile-db/). This tool will calculate a lot of coverage statistics (e.g. coverage per nucleotide position, single-nucleotide variance data, insertions, and deletions) as well as prepare coverage data to be visualized in the interactive interface.

Let's run another `for` loop over the BAM files we just created and their associated [contigs-dbs](https://anvio.org/help/7.1/artifacts/contigs-db/) to create 2 [single profile databases](https://anvio.org/help/main/artifacts/single-profile-db/):

```bash
for BAM in KC-R01-CDI-C-01-PRE_S7 KC-R01-CDI-C-03-POST_S9; do
    anvi-profile -c FMT_HIG_FITNESS_KC_MAG_00120.db \
                 -i 02_MAPPING/"${BAM}".bam \
                 --num-threads $THREADS \
                 -o 03_PROFILE/"${BAM}"
done
```

Each resulting profile database contains the mapping data from ONE metagenome sample. But we can merge the two [single profile-dbs](https://anvio.org/help/main/artifacts/single-profile-db/) into a single [merged profile db](https://anvio.org/help/main/artifacts/profile-db/) so that we can visualize mapping results from pre- and post-FMT all together (instead of looking at the mapping results of one metagenome at a time). We do this using [anvi-merge](https://anvio.org/help/7.1/programs/anvi-merge/):

```bash
anvi-merge 03_PROFILE/*/PROFILE.db \
           -o 04_MERGED \
           -c FMT_HIG_FITNESS_KC_MAG_00120.db
```

### Visualize mapping results with anvi'o

FINALLY, it's time to visualize the ecology of `FMT_HIG_FITNESS_KC_MAG_00120` across a patient pre- and post- FMT. Does the MAG `FMT_HIG_FITNESS_KC_MAG_00120` appear to colonize? What explanation is there for the mapping results from the pre-FMT metagenome? Let's use the tool [anvi-interactive](https://anvio.org/help/7/programs/anvi-interactive/):

```bash
anvi-interactive -c FMT_HIG_FITNESS_KC_MAG_00120.db \
					-p 04_MERGED/PROFILE.db
```

At this point you have completed all of the computational steps to exploring the ecology of a MAG across two metagenomes. If you are interested in learning how to scale up this analysis to more than one reference and multiple samples, check out our [Snakemake workflow tutorial](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/)!
