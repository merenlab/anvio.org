---
layout: blog
title: An anvi'o tutorial with Trichodesmium genomes
modified: 2024-03-18
excerpt: "A tutorial that covers a lot of anvi'o capabilities using Trichodesmium."
categories: [anvio]
authors: [ivagljiva, FlorianTrigodet]
tags: [genomics, pangenomics, phylogenomics, metabolism, hands-on, beginner]
comments: true
---

<div class="extra-info" markdown="1">

<span class="extra-info-header">Summary</span>

**The purpose of this tutorial** is to learn how to use the set of integrated 'omics tools in anvi'o to make sense of a few _Trichodesmium_ genomes.
 Here is a list of topics that are covered in this tutorial:

 * Create {% include ARTIFACT name="contigs-db" text="contigs databases" %} and run functional annotation programs.
 * Estimate taxonomy and completion/redundancy across multiple genomes.
 * Generate a pangenome of closely related _Trichodesmium_ genomes.
 * Study metabolism by predicting metabolic pathway completeness and metabolic interactions.
 * Leverage metagenomic read-recruitment to study environmental populations.
 * Create a phylogenomic tree to study evolutionary relationships between microbes.

 {:.notice}
 If you have any questions about this exercise, or have ideas to make it better, please feel free to get in touch with the anvi'o community through our Discord server:

 {% include _join-anvio-discord.html %}
 </div>

 ---
 To reproduce this exercise with your own dataset, you should first follow the instructions [here](/install/) to install anvi'o.

## A story of nitrogen fixation (or not) in _Trichodesmium_

This tutorial will largely recapitulate a story from the following paper, published by [Tom Delmont](https://lage.genoscope.cns.fr/members/tom-delmont/) in 2021:

<div class="pub_float">
    <div class="altmetric-embed"
         data-badge-type="donut"
         data-doi="10.1073/pnas.2112355118">
        <a target="_self"
           href="https://www.altmetric.com/details.php?domain=localhost&amp;"
           style="display:inline-block;">
            <img src="https://badges.altmetric.com/?size=128&amp;types=brtttttt"
                 width="64"
                 height="64"
                 style="border:0; margin:0; max-width: none;" />
        </a>
    </div>
    <div class="__dimensions_badge_embed__"
         data-doi="10.1073/pnas.2112355118"
         data-hide-zero-citations="true"
         data-legend="hover-bottom"
         data-style="small_circle">
    </div>
    <span class="pub-title">
        <a href="https://doi.org/10.1073/pnas.2112355118" target="_new">
            Discovery of nondiazotrophic Trichodesmium species abundant and widespread in the open ocean
        </a>
    </span>
    <span class="pub-authors">
        <span class="pub-member-author" title="An official member of the lab at the time of publication">
            Delmont TO
        </span>
    </span>
    <div class="pub-info">
        <div class="pub-featured-image">
            <a href="/images/trichodesmium_tutorial/Delmont_2021.png" class="image-popup">
                <img src="/images/trichodesmium_tutorial/Delmont_2021.png"
                     style="max-width: 100px; max-height: 80px; width: auto; border: none; height: auto; margin: 0 auto; display: block;" />
            </a>
        </div>
        <div class="pub-highlights">
            <span style="display: inline-block; padding-bottom: 5px;">
                - Discovery of <i>Trichodesmium</i> species that do not fix nitrogen yet are abundant in the open ocean.
            </span><br />
            <span style="display: inline-block; padding-bottom: 5px;">
                - Expanded the understanding of the ecological roles and diversity of <i>Trichodesmium</i>.
            </span><br />
            <span style="display: inline-block; padding-bottom: 5px;">
                - Challenged long-held assumptions about nitrogen fixation in marine cyanobacteria.
            </span>
        </div>
    </div>
    <span class="pub-journal">
        📚 <b>PNAS</b>, 118(46):e2112355118 |
        🔍 <a href="http://scholar.google.com/scholar?hl=en&amp;q=Discovery+of+nondiazotrophic+Trichodesmium+species+abundant+and+widespread+in+the+open+ocean" target="_blank">Google Scholar</a> |
        🔗 <a href="https://doi.org/10.1073/pnas.2112355118" target="_blank">doi:10.1073/pnas.2112355118</a>
    </span>
</div>

As a little preview, the essence of the story is this: _Trichodesmium_ species are well-known cyanobacterial nitrogen fixers ('diazotrophs') in the global oceans, but -- surprise -- it turns out that not _all_ of them can do nitrogen fixation. Tom used a combination of pangenomics, phylogenomics, and clever read recruitment analyses on a set of MAGs and reference genomes to demonstrate that two new (candidate) _Trichodesmium_ species, Candidatus *T. miru* and Candidatus *T. nobis*, are nondiazotrophic.

We will use a variety of anvi'o programs to investigate the same genomes and characterize their nitrogen-fixing capabilities, to demonstrate how you, too, could discover cool microbial ecology stories like this one.

## Downloading the data pack

In your terminal, choose a working directory for this tutorial and use the following code to download the dataset:

``` bash
curl -L https://figshare.com/ndownloader/files/{something} \
     -H "User-Agent: Chrome/115.0.0.0" \
     -o trichodesmium_tutorial.tar.gz
```

Then unpack it, and go into the data pack directory:

``` bash
tar -zxvf trichodesmium_tutorial.tar.gz
cd trichodesmium_tutorial
```

At this point, if you type `ls` in your terminal, this is what you should be seeing:

```
$ ls
{WHATEVER IS THERE}
```


We have seven *Trichodesmium* genomes in the datapack. Some are metagenome-assembled genomes (MAGs) binned from the TARA Ocean metagenomic dataset, and others are reference genomes taken from NCBI RefSeq.

## Activating anvi'o

Before you start, don't forget to activate your anvi'o environment:

 {:.notice}
 We use the development version of anvi'o here, but you could also use a stable release of anvi'o if that is what you have installed. Any stable release starting from `v9` or later will include all of the programs covered in this tutorial. If you try an earlier release, you may see "command not found" errors for some of the commands.

```bash
conda activate anvio-dev
```

## Genomics with anvi'o

To introduce you into the anvi'o-verse, we will run some basic genomics analysis on a single genome. In this case, we will download a known _Trichodesmium_ genome from NCBI to add to our collection. We will learn how to:
- reformat a FASTA file
- generate a {% include ARTIFACT name="contigs-db" %}
- annotate gene calls with single-copy core genes and functions
- estimate the taxonomy and completeness/redundancy of the genome 
- get data out of the database and into parseable text files

Let's get started.

### Download and reformat the genome

We will supplement our set of _Trichodesmium_ genomes with [this _Trichodesmium_ MAG](https://www.ncbi.nlm.nih.gov/nuccore/2238341937) from NCBI. It is labeled as _Trichodesmium_ sp. MAG_R01, so we don't know exactly what species of _Trichodesmium_ this is (yet). The MAG was generated by researchers at the Hebrew University of Jerusalem from a Red Sea metagenome, and it is of scaffold-level quality. 

To download the genome, we will use the command `curl`:

```bash
curl https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/023/356/555/GCA_023356555.1_ASM2335655v1/GCA_023356555.1_ASM2335655v1_genomic.fna.gz -o GCA_023356555.1_ASM2335655v1_genomic.fna.gz
gunzip GCA_023356555.1_ASM2335655v1_genomic.fna.gz
```

Now we have one of the most fundamental files that everyone will have to interact with: [a FASTA file](https://en.wikipedia.org/wiki/FASTA_format). We can already check the number of contigs by counting the number of `>` characters, which appears once per sequence. We can use the command `grep` for that:

```bash
$ grep -c '>' GCA_023356555.1_ASM2335655v1_genomic.fna
269
```

That's a lot of sequences, or in this case: a lot of contigs. That is already telling us a few things about this genome: it is not a singular contig representing a complete and circular genome. Let's have a look at the contig headers:

```bash
grep '>' GCA_023356555.1_ASM2335655v1_genomic.fna
```

As you can see, the headers are rather complex, with a lot of information. Unfortunately, these headers are going to be problematic for downstream analysis, particularly because they include non-alphanumeric characters like spaces, dots, pipe (`|`) and whatnot. And anvi'o knows you would be in trouble if you start working this these headers. Just for fun, you can try to run {% include PROGRAM name="anvi-gen-contigs-database" %} (we will cover what it does very soon), and you will see an error:

```bash
anvi-gen-contigs-database -f GCA_023356555.1_ASM2335655v1_genomic.fna \
                          -o CONTIGS.db \
                          -T 2
```
```
Config Error: At least one of the deflines in your FASTA File does not comply with the 'simple
              deflines' requirement of anvi'o. You can either use the script `anvi-script-
              reformat-fasta` to take care of this issue, or read this section in the tutorial
              to understand the reason behind this requirement (anvi'o is very upset for
              making you do this): http://merenlab.org/2016/06/22/anvio-tutorial-v2/#take-a-
              look-at-your-fasta-file
```

We can use {% include PROGRAM name="anvi-script-reformat-fasta" %} to simplify the FASTA's headers with the flag `--simplify-names`. This command can (optionally) generate a summary report, which is a two column file matching the new and old names of each sequence in the FASTA file. While we are using this command, we can use it to include a specific prefix in the renamed headers with the flag `--prefix` and filter out short contigs (in this example, smaller than 500 bp) with the flag `-l`.
```bash
anvi-script-reformat-fasta GCA_023356555.1_ASM2335655v1_genomic.fna \
                           -o Trichodesmium_sp.fa \
                           --simplify-names \
                           --prefix Trichodesmium_sp_MAG_R01 \
                           -r Trichodesmium_sp_reformat_report.txt \
                           -l 500 \
                           --seq-type NT
```

{:.notice}
You can use this command to further filter your FASTA file: check the options with the online (help page)[https://anvio.org/help/main/], or by using the flag `--help` in the terminal.

### Generate a contigs database

The {% include ARTIFACT name="contigs-db" %} is a central database in the anvi'o ecosystem. It essentially stores all information about a given set of (nucleotide) sequences from a FASTA file. To make a {% include ARTIFACT name="contigs-db" %} from our reformatted FASTA, you can use the command {% include PROGRAM name="anvi-gen-contigs-database" %}:

{:.notice}
Numerous anvi'o commands can make use of multithreading to speed up computing time. You can either use the flag `-T` or `--num-threads`. Check the help page of a command, or use `--help` to check if multithreading is available.

```bash
anvi-gen-contigs-database -f Trichodesmium_sp.fa \
                          -o Trichodesmium_sp-contigs.db \
                          -T 2
```

A few things happen when you generate a {% include ARTIFACT name="contigs-db" %}. First, all DNA sequences are stored in that databases. You can retrieve the sequences in FASTA format by using the command {% include PROGRAM name="anvi-export-contigs" %}. Second, anvi'o uses [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) to identify open-reading frames (also referred to as 'gene calls'). Pyrodigal-gv is a python implementation of [Prodigal](https://doi.org/10.1186/1471-2105-11-119) with some additional metagenomic models for giant viruses and viruses with alternative genetic codes (see [Camargo et al.](https://doi.org/10.1038/s41587-023-01953-y)).

In addition to identifying open-reading frames, anvi'o will predict the amino acid sequence associated with each gene call and store it in that newly made database. If you need to get this information out of the database, you can use the command {% include PROGRAM name="anvi-export-gene-calls" %} to export the gene calls, and the amino acid sequence for each open-reading frame identified by pyrodigal-gv.

The command {% include PROGRAM name="anvi-gen-contigs-database" %} also computes the tetra-nucleotide frequency for each contig. To learn more about what it is, check the vocabulary page about [tetra-nucleotide frequency](https://anvio.org/vocabulary/#tetra-nucleotide-frequency).

### Annotate single-copy core genes and Ribosomal RNAs

There is a command called {% include PROGRAM name="anvi-run-hmms" %}, which let you use Hidden Markov Models ([HMMs](https://en.wikipedia.org/wiki/Hidden_Markov_model)) to annotate the genes in a {% include ARTIFACT name="contigs-db" %} and store that annotation directly back into the database.
The anvi'o codebase comes with an integrated set of default {% include ARTIFACT name="hmm-source" text="HMM sources" %}. They include models for 6 Ribosomal RNAs (16S, 23S, 5S, 18S, 28S, and 12S). They also include three sets of [single-copy core genes](https://anvio.org/vocabulary/#single-copy-core-gene-scg), named `Bacteria_71`, `Archaea_76` and `Protista_83`. The first two, `Bacteria_71` and `Archaea_76`, are collections of bacterial and archaeal single-copy core genes (SCGs) curated from [Mike Lee’s](https://twitter.com/AstrobioMike) SCG collections first released in [GToTree](https://academic.oup.com/bioinformatics/article/35/20/4162/5378708), which is an easy-to-use phylogenomics workflow. `Protista_83` is [a curated collection](http://merenlab.org/delmont-euk-scgs) of [BUSCO](https://busco.ezlab.org/) SCGs made by [Tom Delmont](https://twitter.com/tomodelmont). These sets of HMMs are used in anvi'o to compute the estimated completeness and redundancy of a genome.

To annotate our {% include ARTIFACT name="contigs-db" %} with these HHMs, we can simply run {% include PROGRAM name="anvi-run-hmms" %} like this:

```bash
anvi-run-hmms -c Trichodesmium_sp-contigs.db -T 4
```

{:.notice}
There is an optional flag `--also-scan-trnas` which uses the program [tRNAScan-SE](https://github.com/UCSC-LoweLab/tRNAscan-SE) to identify and store information about tRNAs found in your genome. You can also use the command {% include PROGRAM name="anvi-scan-trnas" %} at any time.

Now is probably a good time to use the command {% include PROGRAM name="anvi-db-info" %}, which shows you basic information about any anvi'o database:
```bash
anvi-db-info Trichodesmium_sp-contigs.db
```

With this command, you can see which HMMs were already run on that database, but also some basic information like the number of contigs, number of genes called by pyrodigal-gv, and more.

{:.warning}
SCREENSHOT?

#### General summary and metrics

To go one step further than the output generated by {% include PROGRAM name="anvi-db-info" %}, we can use the command {% include PROGRAM name="anvi-display-contigs-stats" %}. It allows you to visualize (and export) basic information about one or multiple {% include ARTIFACT name="contigs-db" text= "contigs databases" %}.

```bash
anvi-display-contigs-stats Trichodesmium_sp-contigs.db
```

{% include IMAGE path="/images/trichodesmium_tutorial/01_contigs_stats.png" width=80 %}

{:.notice}
The approximate number of genomes is an estimate based on the frequency of each single-copy core gene (more info [here](https://anvio.org/help/main/programs/anvi-display-contigs-stats/#how-do-we-predict-the-number-of-genomes)). It is mostly useful in a metagenomics context, where you expect multiple microbial populations to be included in your set of contigs. This estimate is based on the mode (or most frequently occurring number) of single-copy core genes. Here, we know we generated a {% include ARTIFACT name="contigs-db" %} with a single genome, hence the expected number of genomes = 1 bacteria. GOOD.

You can also export the information displayed on your browser by running {% include PROGRAM name="anvi-display-contigs-stats" %} with the flag `--output-file` or `-o`. Anvi'o will then write a TAB-delimited file with the above values. And if you don't want the browser page to open at all, you can also use the flag `--report-as-text`.

```bash
anvi-display-contigs-stats Trichodesmium_sp-contigs.db --report-as-text -o Trichodesmium_sp-contigs-stats.txt
```

### Estimate completeness and redundancy

We can use the set of single-copy core genes (SCGs) to estimate the completeness of a genome. The rational is pretty simple: we expect a set of genes to be systematically present in all genomes only once. So if we find all these genes, we estimate that the genome is complete (100%). We can also report how many SCGs are found in multiple copies, which we refer to as SCG 'redundancy'.

{:.notice}
Why redundancy and not contamination? The presence of multiple copies of SCGs could be indicative of contamination in your genome - i.e., the potential presence of more than one population - but microbial genomes have a bad habit of keeping a few SCGs in multiple copies. So until proven otherwise, anvi’o calls it redundancy and you will decide if you think it is contamination.

We can use the command {% include PROGRAM name="anvi-estimate-genome-completeness" %}:

```bash
anvi-estimate-genome-completeness -c Trichodesmium_sp-contigs.db
```

|**`bin name`**|**`domain`**|**`confidence`**|**`% completion`**|**`% redundancy`**|**`num_splits`**|**`total length`**|
|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp-contigs|BACTERIA|1.0|97.18|4.23|358|6640707|

From the output, we learn that our MAG is estimated to be 97% complete and 4% redundant. 

You can also use the flag `--output-file` or `-o` to save the output into a text file.

### Estimate SCG taxonomy

In this part of the tutorial, we will cover how anvi'o can generate a quick taxonomic estimation for a genome (also works for a metagenome). Of course, in this example, we already know that our genome is from the genus _Trichodesmium_ (because its information on NCBI said so). But we don't know exactly which species of _Trichodesmium_ it is. You can also imagine doing this step without _any_ prior knowledge about the taxonomy of your microbe.

The way anvi'o estimates taxonomy is by using a subset of genes found in the bacterial and archaeal SCG collections: the ribosomal proteins. These proteins are commonly used to compute phylogenomic trees. Briefly, anvi'o uses the Genome Taxonomy Database ([GTDB](https://gtdb.ecogenomic.org/)) and `diamond` (a fast alternative to NCBI’s BLASTp) to compare your ribosomal proteins to those found in the GTDB collection. Each ribosomal protein thus gets a closest taxonomic match. This is done with the command {% include PROGRAM name="anvi-run-scg-taxonomy" %}, which stores the taxonomic annotations directly in the {% include ARTIFACT name="contigs-db" %}.

Let's run {% include PROGRAM name="anvi-run-scg-taxonomy" %}:

```bash
anvi-run-scg-taxonomy -c Trichodesmium_sp-contigs.db -T 4
```

{:.notice}
If this step is not working for you, you may need to run {% include PROGRAM name="anvi-setup-scg-taxonomy" %} to download and initialize the GTDB SCG database on your machine. You only need to run this command once.

In your terminal, you should see the number of ribosomal protein that had a match to a homologous protein from the GTDB collection. But you don't get the actual taxonomy yet. For that, you need to run a second program called {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}. This command will compute the consensus taxonomic annotation across a set of ribosomal proteins. If we simply provide our {% include ARTIFACT name="contigs-db" %} as the sole input to {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}, then anvi'o will assume it contains a single genome and compute the consensus across all ribosomal protein matches.

Let's run {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}:

```bash
$ anvi-estimate-scg-taxonomy -c Trichodesmium_sp-contigs.db
Contigs DB ...................................: Trichodesmium_sp-contigs.db
Metagenome mode ..............................: False

Estimated taxonomy for "Trichodesmium_sp"
===============================================
+------------------+--------------+-------------------+----------------------------------------------------------------------------------------------------------------------------+
|                  |   total_scgs |   supporting_scgs | taxonomy                                                                                                                   |
+==================+==============+===================+============================================================================================================================+
| Trichodesmium_sp |           22 |                21 | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+------------------+--------------+-------------------+----------------------------------------------------------------------------------------------------------------------------+
```

Note that the command used a total of 22 SCGs - more specifically the ribosomal proteins which are part of the SCG collections - and we now have an estimated species name: *Trichodesmium erythraeum*.

In the output, you can also see `supporting_scgs` with the number `21`. It corresponds to the number of ribosomal proteins which all agreed with the reported consensus taxonomy. It also means that ONE ribosomal protein has a different taxonomic match.

If you are curious, we can run the same command with the flag `--debug`:

```bash
$ anvi-estimate-scg-taxonomy -c Trichodesmium_sp-contigs.db --debug
Contigs DB ...................................: Trichodesmium_sp-contigs.db
Metagenome mode ..............................: False

* A total of 22 single-copy core genes with taxonomic affiliations were
  successfully initialized from the contigs database 🎉 Following shows the
  frequency of these SCGs: Ribosomal_L1 (1), Ribosomal_L13 (1), Ribosomal_L14
  (1), Ribosomal_L16 (1), Ribosomal_L17 (1), Ribosomal_L19 (1), Ribosomal_L2
  (1), Ribosomal_L20 (1), Ribosomal_L21p (1), Ribosomal_L22 (1), Ribosomal_L27A
  (1), Ribosomal_L3 (1), Ribosomal_L4 (1), Ribosomal_L5 (1), Ribosomal_S11 (1),
  Ribosomal_S15 (1), Ribosomal_S16 (1), Ribosomal_S2 (1), Ribosomal_S6 (1),
  Ribosomal_S7 (1), Ribosomal_S8 (1), Ribosomal_S9 (1).

Hits for Trichodesmium_sp
===============================================
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| SCG            | gene   | pct id   | taxonomy                                                                                                                   |
+================+========+==========+============================================================================================================================+
| Ribosomal_L19  | 2881   | 99.2     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S2   | 1476   | 99.3     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L20  | 967    | 99.2     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S6   | 4430   | 95.7     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S9   | 1368   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L13  | 1369   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L17  | 1371   | 98.3     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S11  | 1373   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L21p | 352    | 99.3     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L27A | 1378   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S8   | 1382   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L5   | 1383   | 99.4     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L14  | 1385   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium /                          |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L16  | 1388   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L22  | 1390   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S15  | 1646   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L2   | 1392   | 97.9     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L4   | 1394   | 99.5     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L3   | 1395   | 98.2     | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S7   | 3771   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_L1   | 2877   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| Ribosomal_S16  | 1407   | 100.0    | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+
| CONSENSUS      | --     | --       | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+----------------+--------+----------+----------------------------------------------------------------------------------------------------------------------------+

Estimated taxonomy for "Trichodesmium_sp"
===============================================
+------------------+--------------+-------------------+----------------------------------------------------------------------------------------------------------------------------+
|                  |   total_scgs |   supporting_scgs | taxonomy                                                                                                                   |
+==================+==============+===================+============================================================================================================================+
| Trichodesmium_sp |           22 |                21 | Bacteria / Cyanobacteriota / Cyanobacteriia / Cyanobacteriales / Microcoleaceae / Trichodesmium / Trichodesmium erythraeum |
+------------------+--------------+-------------------+----------------------------------------------------------------------------------------------------------------------------+
```

In this more comprehensive output, you can see the detail of each ribosomal protein's closest match to the GTDB SCG database: which protein, the percent identity to an homologous gene in the GTDB collection, and the associated taxonomy. You can see that ribosomal protein L14 has a taxonomy that is not resolved at the species level, but only at the genus level. So, the only ribosomal protein that did not agree with the final taxonomy was actually matching the same genus. I would not be worried at all about potential contamination, at least at this stage.

The way anvi'o estimates taxonomy is not perfect. In fact, it is limited to Bacteria and Archaea (genomes found in GTDB). But it is fast and relatively accurate to give you an idea of the taxonomy of one or more genomes.

{:.notice}
If you are working with a metagenome, i.e. with more than one population, anvi'o can either compute the taxonomy per bin (if available), or without binning! In the second case, anvi'o will pick the most commonly found ribosomal protein and report their closest taxonomic matches. This is a great way to quickly get an idea of the taxonomic composition of a metagenome prior to binning.

### Functional annotations

There are many databases that one can use to assign function to a set of genes. You may be familiar with [NCBI's COG](https://www.ncbi.nlm.nih.gov/research/cog) (Clusters of Orthologous Genes) database, the [KEGG](https://www.genome.jp/kegg/) (Kyoto Encyclopedia of Genes and Genomes) database of KEGG Ortholog families (KOfam), or [Pfam](http://pfam.xfam.org/) (the Protein Family database), which can be used for annotating general functions. Other database out there are more specific, like [CAZymes](https://www.cazy.org/) which focuses on enzymes associated with the synthesis, metabolism and recognition of carbohydrate, or [PHROGs](https://phrogs.lmge.uca.fr/) which focuses on viral functions.

Anvi'o has a few commands that allow you to annotate the open-reading frames in your {% include ARTIFACT name="contigs-db" %} with several different databases. Each of them comes with a setup command that you need to run once to download the appropriate database on your machine:

Database | Setup command | Run command
-- | -- | --
NCBI COGs | {% include PROGRAM name="anvi-setup-ncbi-cogs" %} | {% include PROGRAM name="anvi-run-ncbi-cogs" %}
KEGG KOfam | {% include PROGRAM name="anvi-setup-kegg-data" %} | {% include PROGRAM name="anvi-run-kegg-kofams" %}
Pfam | {% include PROGRAM name="anvi-setup-pfams" %} | {% include PROGRAM name="anvi-run-pfams" %}
CAZymes | {% include PROGRAM name="anvi-setup-cazymes" %} | {% include PROGRAM name="anvi-run-cazymes" %}

If your favorite annotation database is not represented here, you have a few options:
- **Short-term solution**: run the annotation outside of anvi'o. You can export the gene calls with {% include PROGRAM name="anvi-export-gene-calls" %}, run your annotation with a third party software, then import the annotations back into your {% include ARTIFACT name="contigs-db" %} with {% include PROGRAM name="anvi-import-functions" %}.
- **Community level solution**: find an anvi'o developer and tell them about your passion for XXX functional database and hope they make a new command called `anvi-run-XXX`. We seriously encourage you to use the [anvi'o github page](https://github.com/merenlab/anvio) to write an issue describing the need for a new functional annotation database in anvi'o. Then, anyone with time and skill can try to implement it. If you find an existing issue discussing something you want in anvi'o, please raise your voice, write a comment, and let the developers know that you would like to see a feature in anvi'o.
- **Developer level**: write a new program to annotate a {% include ARTIFACT name="contigs-db" %} with your favorite database, and submit a pull request on the [anvi'o github page](https://github.com/merenlab/anvio).

For now, we will use the COG, KEGG, and Pfam databases on our *Trichodesmium* genome. {% include PROGRAM name="anvi-run-ncbi-cogs" %} will be relatively fast (it uses `diamond` to find homologous hits in the database), while {% include PROGRAM name="anvi-run-kegg-kofams" %} will take quite longer as the KOfam database is quite large (this program uses HMMs and HMMER in the background). The Pfam database also uses HMMs, but the domain-level models are a bit smaller so {% include PROGRAM name="anvi-run-pfam" %} is relatively quick to run.

{:.notice}
If you know your machine can use more threads, feel free to change the flag `-T 4` to another number.

```bash
# will take ~1 min
anvi-run-ncbi-cogs -c Trichodesmium_sp-contigs.db -T 4

# will take ~8 min
anvi-run-kegg-kofams -c Trichodesmium_sp-contigs.db -T 4

# will take ~1 min
anvi-run-pfams -c Trichodesmium_sp-contigs.db -T 4
```

As you can see in the terminal output from the commands above, there are no output files. All the annotations are stored into the {% include ARTIFACT name="contigs-db" %}. You can use {% include PROGRAM name="anvi-db-info" %} to check which functional annotations are already in an existing {% include ARTIFACT name="contigs-db" %} (including manually imported ones). You can also use {% include PROGRAM name="anvi-export-functions" %} to get a tab-delimited file of all the annotations from a given annotation source (or multiple).

```bash
# check which annotations were run on our contigs database
$ anvi-db-info Trichodesmium_sp-contigs

DB Info (no touch)
===============================================
Database Path ................................: Trichodesmium_sp-contigs.db
description ..................................: [Not found, but it's OK]
db_type ......................................: contigs (variant: unknown)
version ......................................: 24


DB Info (no touch also)
===============================================
project_name .................................: Trichodesmium_sp
contigs_db_hash ..............................: hash98a3e869
split_length .................................: 20000
kmer_size ....................................: 4
num_contigs ..................................: 269
total_length .................................: 6640707
num_splits ...................................: 358
gene_level_taxonomy_source ...................: None
genes_are_called .............................: 1
external_gene_calls ..........................: 0
external_gene_amino_acid_seqs ................: 0
skip_predict_frame ...........................: 0
splits_consider_gene_calls ...................: 1
trna_taxonomy_was_run ........................: 0
trna_taxonomy_database_version ...............: None
reaction_network_ko_annotations_hash .........: None
reaction_network_kegg_database_release .......: None
reaction_network_modelseed_database_sha ......: None
reaction_network_consensus_threshold .........: None
reaction_network_discard_ties ................: None
creation_date ................................: 1759736966.76845
scg_taxonomy_was_run .........................: 1
scg_taxonomy_database_version ................: GTDB: v214.1; Anvi'o: v1
gene_function_sources ........................: COG24_CATEGORY,KEGG_BRITE,KEGG_Module,COG24_PATHWAY,KOfam,COG24_FUNCTION,KEGG_Class
modules_db_hash ..............................: a2b5bde358bb

* Please remember that it is never a good idea to change these values. But in some
  cases it may be absolutely necessary to update something here, and a
  programmer may ask you to run this program and do it. But even then, you
  should be extremely careful.


AVAILABLE GENE CALLERS
===============================================
* 'pyrodigal-gv' (4,820 gene calls)


AVAILABLE FUNCTIONAL ANNOTATION SOURCES
===============================================
* COG24_CATEGORY (3,098 annotations)
* COG24_FUNCTION (3,098 annotations)
* COG24_PATHWAY (858 annotations)
* KEGG_BRITE (1,939 annotations)
* KEGG_Class (449 annotations)
* KEGG_Module (449 annotations)
* KOfam (1,941 annotations)


AVAILABLE HMM SOURCES
===============================================
* 'Archaea_76' (76 models with 34 hits)
* 'Bacteria_71' (71 models with 72 hits)
* 'Protista_83' (83 models with 38 hits)
* 'Ribosomal_RNA_12S' (1 model with 0 hits)
* 'Ribosomal_RNA_16S' (3 models with 0 hits)
* 'Ribosomal_RNA_18S' (1 model with 0 hits)
* 'Ribosomal_RNA_23S' (2 models with 0 hits)
* 'Ribosomal_RNA_28S' (1 model with 0 hits)
* 'Ribosomal_RNA_5S' (5 models with 0 hits)

# export functions for KOfam and COG24_FUCTION
anvi-export-functions -c Trichodesmium_sp-contigs.db --annotation-sources KOfam,COG24_FUNCTION -o functional_annotations.txt
```

The output table from {% include PROGRAM name="anvi-export-functions" %} looks like this:

|**`gene_callers_id`**|**`source`**|**`accession`**|**`function`**|**`e_value`**|
|:--|:--|:--|:--|:--|
|0|COG24_FUNCTION|COG3293|Transposase|5.51e-12|
|2|COG24_FUNCTION|COG4451|Ribulose bisphosphate carboxylase small subunit (RbcS) (PDB:2YBV)|2.02e-63|
|4|COG24_FUNCTION|COG1850|Ribulose 1,5-bisphosphate carboxylase, large subunit, or a RuBisCO-like protein (RbcL) (PDB:2YBV)|0|
|..|..|..|..|..|
|4765|KOfam|K02030|polar amino acid transport system substrate-binding protein|1.7e-26|
|4769|KOfam|K07494|putative transposase|3.6e-16|
|4813|KOfam|K11524|positive phototaxis protein PixI|4e-37|


You can search for your favorite function. As we discussed above, _Trichodesmium_ is known for its ability to fix nitrogen, so you can look for the `NifH` gene, which is a marker gene for nitrogen fixation. Here is how to do that with a simple `grep` command:

```bash
$ grep NifH functional_annotations.txt
3709	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	1.5e-197
4020	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	4.81e-167
4020	KOfam	K02588	nitrogenase iron protein NifH	2.9e-144
```

Or, you can use {% include PROGRAM name="anvi-search-functions" %}:
```bash
anvi-search-functions -c Trichodesmium_sp-contigs.db \
                      --search-term NifH \
                      --output-file NifH_search.txt \
                      --full-report NifH_full_report.txt
```

The first output file called `NifH_search.txt` only contains the name of the contigs where a gene with a matching search term was found. And the second file, `NifH_full_report.txt`, is more comprehensive:

```
$ cat NifH_full_report.txt
gene_callers_id	source	accession	function	search_term	contigs
3709	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	NifH	Trichodesmium_sp_MAG_R01_000000000213_split_00004
4020	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	NifH	Trichodesmium_sp_MAG_R01_000000000230_split_00006
4020	KOfam	K02588	nitrogenase iron protein NifH	NifH	Trichodesmium_sp_MAG_R01_000000000230_split_00006
```

We've found our marker gene for nitrogen fixation, which is a good sign given that this MAG seems to be a *T. erythraeum* genome, and *T. erythraeum* is known to fix nitrogen.

### Working with multiple genomes

Now that we know how to do basic genomic analysis using a single genome, we can try to do the same using a few more genomes. In the directory `00_FASTA_GENOMES`, you will find seven FASTA files containing the reference genomes and MAGs from Tom's paper:

```bash
$ ls 00_FASTA_GENOMES
MAG_Candidatus_Trichodesmium_miru.fa     MAG_Trichodesmium_erythraeum.fa
MAG_Trichodesmium_thiebautii_Indian.fa   Trichodesmium_thiebautii_H9_4.fa
MAG_Candidatus_Trichodesmium_nobis.fa    MAG_Trichodesmium_thiebautii_Atlantic.fa
Trichodesmium_erythraeum_IMS101.fa
```

We will create as many {% include ARTIFACT name="contigs-db" text="contigs databases" %} as we have genomes in this directory. We will then annotate them in a similar fashion as when working with a single genome.

To avoid too much manual labor, we'll use BASH loops to automate the process. The loops will be a bit easier to write (and understand) if we have a text file of genome names to iterate over. So first, let's create a simple text file that contains the names of our genomes. The following BASH command will list the content of the `00_FASTA_GENOMES` directory and will only keep the part of the file name before the `.fa` extension, a.k.a. only the name of each genome:

```bash
ls 00_FASTA_GENOMES/ | cut -d '.' -f 1 > genomes.txt
```

The second thing to do is to make sure our FASTA files are properly formatted. Fortunately for you, we provided genomes with anvi'o compatible headers. If you don't believe me (and you should never believe me, and always check your data), then have a look at them.

The next step is to generate {% include ARTIFACT name="contigs-db" %} for each of our genomes with the following BASH loop:

```bash
while read genome
do
    anvi-gen-contigs-database -f 00_FASTA_GENOMES/${genome}.fa \
                              -o ${genome}-contigs.db \
                              -T 4
done < genomes.txt
```

Now we can annotate these genomes with {% include PROGRAM name="anvi-run-hmms" %}, {% include PROGRAM name="anvi-run-ncbi-cogs" %}, {% include PROGRAM name="anvi-run-kegg-kofams" %}, and {% include PROGRAM name="anvi-run-pfams" %}. Some of those annotation commands can take a while, so if you don't want to wait, click the Show/Hide box below to instead get the already-annotated contigs databases from the datapack:

<details markdown="1"><summary>Show/Hide Option 1: Copy pre-annotated databases</summary>

This command overwrite the databases in your current working directory with our pre-annotated ones from the `00_DATA` folder:

```bash
cp 00_DATA/*-contigs.db .
```

</details>

But if you do want to run the annotations yourself, I encourage you to try writing the loop before checking the answer in the following Show/Hide box:

<details markdown="1"><summary>Show/Hide Option 2: Loop to annotate all databases</summary>

```bash
# should take ... mins
while read genome
do
    echo "working on $genome"
    anvi-run-hmms -c ${genome}-contigs.db -T 4
    anvi-run-ncbi-cogs -c ${genome}-contigs.db -T 4
    anvi-run-kegg-kofams -c ${genome}-contigs.db -T 4
    anvi-run-pfams -c ${genome}-contigs.db -T 4
    anvi-run-scg-taxonomy -c ${genome}-contigs.db -T 4
done < genomes.txt
```

</details>

You don't always need to write a loop to process multiple {% include ARTIFACT name="contigs-db" text="contigs databases" %}. Some commands, like {% include PROGRAM name="anvi-estimate-genome-completeness" %}, can work on multiple input databases and will create individual outputs for each one. In these cases, you can use a special table that we call an {% include ARTIFACT name="external-genomes" text="'external genomes' file" %}. It is a simple two-column table containing the name of each {% include ARTIFACT name="contigs-db" %} and the path to each database.

You can make that table yourself easily, but if you are like me - too lazy to do that by yourself - then you can use {% include PROGRAM name="anvi-script-gen-genomes-file" %}:

```bash
anvi-script-gen-genomes-file --input-dir . -o external-genomes.txt
```

And here is how this {% include ARTIFACT name="external-genomes" %} file looks like:

|**`name`**|**`contigs_db_path`**|
|:--|:--|
|MAG_Candidatus_Trichodesmium_miru|/path/to/MAG_Candidatus_Trichodesmium_miru-contigs.db|
|MAG_Candidatus_Trichodesmium_nobis|/path/to/MAG_Candidatus_Trichodesmium_nobis-contigs.db|
|MAG_Trichodesmium_erythraeum|/path/to/MAG_Trichodesmium_erythraeum-contigs.db|
|MAG_Trichodesmium_thiebautii_Atlantic|/path/to/MAG_Trichodesmium_thiebautii_Atlantic-contigs.db|
|MAG_Trichodesmium_thiebautii_Indian|/path/to/MAG_Trichodesmium_thiebautii_Indian-contigs.db|
|Trichodesmium_erythraeum_IMS101|/path/to/Trichodesmium_erythraeum_IMS101-contigs.db|
|Trichodesmium_thiebautii_H9_4|/path/to/Trichodesmium_thiebautii_H9_4-contigs.db|

Now we can use this file as the input for commands like {% include PROGRAM name="anvi-estimate-genome-completeness" %} and {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}:

```bash
$ anvi-estimate-genome-completeness -e external-genomes.txt
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| genome name                           | domain   |   confidence |   % completion |   % redundancy |   num_splits |   total length |
+=======================================+==========+==============+================+================+==============+================+
| MAG_Candidatus_Trichodesmium_miru     | BACTERIA |            1 |          98.59 |           7.04 |          665 |        5425804 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| MAG_Candidatus_Trichodesmium_nobis    | BACTERIA |          0.9 |          95.77 |           2.82 |          768 |        6101640 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| MAG_Trichodesmium_erythraeum          | BACTERIA |            1 |          97.18 |           5.63 |          644 |        6773488 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| MAG_Trichodesmium_thiebautii_Atlantic | BACTERIA |          0.9 |          85.92 |           7.04 |         1136 |        5948726 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| MAG_Trichodesmium_thiebautii_Indian   | BACTERIA |            1 |          94.37 |           2.82 |         1394 |        6834732 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| Trichodesmium_erythraeum_IMS101       | BACTERIA |            1 |          97.18 |           7.04 |          386 |        7750108 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
| Trichodesmium_thiebautii_H9_4         | BACTERIA |          0.8 |          71.83 |          12.68 |          201 |        3286556 |
+---------------------------------------+----------+--------------+----------------+----------------+--------------+----------------+
```

Note that `Trichodesmium_thiebautii_H9_4` appears to have quite a low completion estimate and also a rather large redundancy estimate. Just from these two values, we could say that the quality of that MAG is lower than all other genomes in our collection. You may also notice that it has a much smaller genome size (last column).

Let's try estimating the taxonomy of all our genomes at once with {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}:

```bash
$ anvi-estimate-scg-taxonomy -e external-genomes.txt -o taxonomy_multi_genomes.txt
Num genomes ..................................: 7
Taxonomic level of interest ..................: (None specified by the user, so 'all levels')
Output file path .............................: taxonomy_multi_genomes.txt
Output raw data ..............................: False
SCG coverages will be computed? ..............: False
* Your (meta)genome file DOES NOT contain profile databases, and you haven't asked
  anvi'o to work in `--metagenome-mode`. Your contigs databases will be treated
  as genomes rather than metagenomes.


Output file ..................................: taxonomy_multi_genomes.txt
```

And here is the output:

|**`name`**|**`total_scgs`**|**`supporting_scgs`**|**`t_domain`**|**`t_phylum`**|**`t_class`**|**`t_order`**|**`t_family`**|**`t_genus`**|**`t_species`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|MAG_Candidatus_Trichodesmium_miru|22|15|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium sp023356515|
|MAG_Candidatus_Trichodesmium_nobis|20|13|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium sp023356535|
|MAG_Trichodesmium_erythraeum|22|21|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium erythraeum|
|MAG_Trichodesmium_thiebautii_Atlantic|21|21|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium sp023356605|
|MAG_Trichodesmium_thiebautii_Indian|22|21|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium sp023356605|
|Trichodesmium_erythraeum_IMS101|22|21|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium erythraeum|
|Trichodesmium_thiebautii_H9_4|19|18|Bacteria|Cyanobacteriota|Cyanobacteriia|Cyanobacteriales|Microcoleaceae|Trichodesmium|Trichodesmium sp023356605|

You can see that a lot of the MAGs match to unnamed species in GTDB -- even though we already know what most of them are, those names haven't propagated to the GTDB database yet. This especially makes sense for the candidate species *T. miru* and *T. nobis*. Regardless, all the *T. thiebautii* genomes have the same closest match to *T. sp023356535*.

<div class="extra-info" markdown="1">

<span class="extra-info-header">A note on anvi'o workflows</span>
There are a few built-in snakemake workflows in anvi'o that can be used with the program {% include PROGRAM name="anvi-run-workflow" %}.
We regularly used these workflow for routine analyses, like generating {% include ARTIFACT name="contigs-db" text="contigs databases" %} and running several functional annotations. That is exactly the purpose of the ['contigs' workflow](https://anvio.org/help/main/workflows/contigs/).

You don't need to know anything about snakemake to use these workflows. For instance, for the 'contigs' workflow, all you need is two input files:
- A {% include ARTIFACT name="fasta-txt" %} file, which is basically a two-column table with the name and path to each FASTA file that you want to turn into a {% include ARTIFACT name="contigs-db" %}
- A {% include ARTIFACT name="workflow-config" %} file (which you can get from {% include PROGRAM name="anvi-run-workflow" %}) in which you can specify which commands you want to run and parameters for each command.

This automation sounds like a nice plug-and-play analysis pipeline - and it is - but it requires you to know exactly what you want to run. You are still the chef.

</div>


### Working with one (or more) metagenomes

If you are working with metagenomes, you can use and run the same commands that we ran on individual genomes, such as {% include PROGRAM name="anvi-gen-contigs-database" %}.


## Pangenomics

## Metabolism

Looking at individual gene functions is undisputably useful for understanding the lifestyle and potential activities of microbes. However, most genes do not work in isolation. Metabolic capacities such as nitrogen fixation, photosynthesis, biosynthesis of cellular components, and carbon utilization require multiple enzymes (or enzyme components) working sequentially or in parallel to catalyze all chemical reactions in a so-called **metabolic pathway**. In many cases, there are also several possible versions of these enzymes -- variants across different domains of life, taxonomic groups, or environmental conditions -- that could be used to catalyze the same set of chemical reactions. Manually looking for all possible versions of all enzymes needed for a given metabolic capacity is possible (we just did it in the pangenomics section for nitrogen fixation), but it isn't very efficient (and requires you to know exactly what you are looking for). And that sort of approach is unscaleable when you are interested in more than a handful of specific metabolic pathways.

This section of the tutorial covers **metabolism reconstruction**, a strategy for summarizing all the metabolic capacities of a given organism (or community) by examining functional annotations in their metabolic context. To do this, one can either aggregate the genes related to multiple individual metabolic pathways to evaluate the organism's capacity to do specific, ecologically-relevant things ("pathway prediction") or use all annotated enzymes to create the entire network of chemical reactions that the organism can catalyze ("metabolic modeling").

To keep things organized, we'll make a new subdirectory for ourselves in which we can work. We'll copy the external genomes file in here for convenience.

```bash
mkdir -p 04_METABOLISM && cd 04_METABOLISM/
cp ../external-genomes.txt .
```

### Estimating metabolic pathway completeness

We'll start with pathway prediction. The program {% include PROGRAM name="anvi-estimate-metabolism" %} computes completeness scores (and copy numbers) of metabolic modules. By default, it uses modules from the [KEGG MODULE database](https://www.genome.jp/kegg/module.html), which contains a lot of well-studied metabolic pathways of general interest that are defined in terms of KEGG Ortholog (KO) protein families. When you run {% include PROGRAM name="anvi-setup-kegg-data" %} to get the KEGG KOfam models used for annotation with {% include PROGRAM name="anvi-run-kegg-kofams" %}, you also set up the KEGG MODULE data on your computer.

<details markdown="1"><summary>Show/Hide What version of KEGG data do you have?</summary>

The KEGG database goes through regular updates, so to keep things a bit more stable anvi'o uses prepackaged snapshots of KEGG data. More reasons for this are explained [here](https://anvio.org/help/main/programs/anvi-setup-kegg-data/#why-is-this-the-default). You can have multiple different snapshots on your computer at the same time, and pick which one to use with the `--kegg-data-dir` parameter of KEGG-associated programs.

To keep track of which KEGG snapshot is relevant to your current dataset, anvi'o hashes the contents of the KEGG data directory and stores this hash in your {% include ARTIFACT name="contigs-db" %} when you run {% include PROGRAM name="anvi-run-kegg-kofams" %}. You can see which version you have by running {% include PROGRAM name="anvi-db-info" %} and looking for the `modules_db_hash` key. For example, all of the _Trichodesmium_ genomes in the tutorial datapack should have the following hash value:

```
modules_db_hash ..............................: 66e53d49e65a
```

This hash enables us to ensure that the version of KEGG used to annotate your (meta)genome matches to the version used for metabolism reconstruction.

{:.warning}
The {% include ARTIFACT name="modules-db" %} in the KEGG snapshot with hash `66e53d49e65a` is strangely very slow to access from anvi'o programs that use it (like {% include PROGRAM name="anvi-estimate-metabolism" %}). We are still trying to figure out what is going on. In the meantime, program execution time is much longer than usual when using this version of KEGG :(

</details>

{% include PROGRAM name="anvi-estimate-metabolism" %} can work on individual genomes, but we're interested in comparing the metabolic capacity of all 8 _Trichodesmium_ genomes. So let's use our handy-dandy {% include ARTIFACT name="external-genomes" %} file to individually estimate metabolism on each one:

```bash
# takes 12 minutes
anvi-estimate-metabolism -e external-genomes.txt -O tricho_metabolism
```

You should get an output file called `tricho_metabolism_modules.txt` that looks like this:

|**`module`**|**`genome_name`**|**`db_name`**|**`module_name`**|**`module_class`**|**`module_category`**|**`module_subcategory`**|**`module_definition`**|**`stepwise_module_completeness`**|**`stepwise_module_is_complete`**|**`pathwise_module_completeness`**|**`pathwise_module_is_complete`**|**`proportion_unique_enzymes_present`**|**`enzymes_unique_to_module`**|**`unique_enzymes_hit_counts`**|**`enzyme_hits_in_module`**|**`gene_caller_ids_in_module`**|**`warnings`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|M00001|MAG_Candidatus_Trichodesmium_miru|MAG_Candidatus_Trichodesmium_miru|Glycolysis (Embden-Meyerhof pathway), glucose => pyruvate|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"(K00844,K12407,K00845,K25026,K00886,K08074,K00918) (K01810,K06859,K13810,K15916) (K00850,K16370,K21071,K24182,K00918) (K01623,K01624,K11645,K16305,K16306) K01803 ((K00134,K00150) K00927,K11389) (K01834,K15633,K15634,K15635) (K01689,K27394) (K00873,K12406)"|1.0|True|1.0|True|NA|No enzymes unique to module|NA|K00134,K00134,K00845,K00845,K00873,K00927,K01623,K01624,K01689,K01803,K01803,K01810,K01834,K15633,K21071,K25026|2899,2579,3691,4200,985,2838,2319,1760,2136,3621,4011,2573,2274,2197,1300,1049|K00134 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K00845 is present in multiple modules: M00001/M00549,K00873 is present in multiple modules: M00001/M00002,K00927 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K01623 is present in multiple modules: M00001/M00003/M00165/M00611/M00612,K01624 is present in multiple modules: M00001/M00003/M00165/M00345/M00344/M00611/M00612,K01689 is present in multiple modules: M00001/M00002/M00003/M00346,K01803 is present in multiple modules: M00001/M00002/M00003/M00165,K01810 is present in multiple modules: M00001/M00004,K01834 is present in multiple modules: M00001/M00002/M00003,K15633 is present in multiple modules: M00001/M00002/M00003,K21071 is present in multiple modules: M00001/M00345,K25026 is present in multiple modules: M00001/M00549|
|M00002|MAG_Candidatus_Trichodesmium_miru|MAG_Candidatus_Trichodesmium_miru|Glycolysis, core module involving three-carbon compounds|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"K01803 ((K00134,K00150) K00927,K11389) (K01834,K15633,K15634,K15635) (K01689,K27394) (K00873,K12406)"|1.0|True|1.0|True|NA|No enzymes unique to module|NA|K00134,K00134,K00873,K00927,K01689,K01803,K01803,K01834,K15633|2899,2579,985,2838,2136,3621,4011,2274,2197|K00134 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K00873 is present in multiple modules: M00001/M00002,K00927 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K01689 is present in multiple modules: M00001/M00002/M00003/M00346,K01803 is present in multiple modules: M00001/M00002/M00003/M00165,K01834 is present in multiple modules: M00001/M00002/M00003,K15633 is present in multiple modules: M00001/M00002/M00003|
|M00003|MAG_Candidatus_Trichodesmium_miru|MAG_Candidatus_Trichodesmium_miru|Gluconeogenesis, oxaloacetate => fructose-6P|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"(K01596,K01610) (K01689,K27394) (K01834,K15633,K15634,K15635) K00927 (K00134,K00150) K01803 ((K01623,K01624,K11645) (K03841,K02446,K11532,K01086,K04041),K01622)"|0.8571428571428571|True|0.875|True|NA|No enzymes unique to module|NA|K00134,K00134,K00927,K01623,K01624,K01689,K01803,K01803,K01834,K03841,K15633|2899,2579,2838,2319,1760,2136,3621,4011,2274,18,2197|K00134 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K00927 is present in multiple modules: M00001/M00002/M00003/M00308/M00552/M00165/M00611/M00612,K01623 is present in multiple modules: M00001/M00003/M00165/M00611/M00612,K01624 is present in multiple modules: M00001/M00003/M00165/M00345/M00344/M00611/M00612,K01689 is present in multiple modules: M00001/M00002/M00003/M00346,K01803 is present in multiple modules: M00001/M00002/M00003/M00165,K01834 is present in multiple modules: M00001/M00002/M00003,K03841 is present in multiple modules: M00003/M00165/M00344/M00611/M00612,K15633 is present in multiple modules: M00001/M00002/M00003|
|M00307|MAG_Candidatus_Trichodesmium_miru|MAG_Candidatus_Trichodesmium_miru|Pyruvate oxidation, pyruvate => acetyl-CoA|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"((K00163,K00161+K00162)+K00627+K00382-K13997),K00169+K00170+K00171+(K00172,K00189),K03737"|1.0|True|1.0|True|1.0|K00161,K00162,K00627|1,1,1|K00161,K00162,K00382,K00627|2967,1381,2978,1001|K00382 is present in multiple modules: M00307/M00009/M00011/M00532/M00621/M00036/M00032|
|M00009|MAG_Candidatus_Trichodesmium_miru|MAG_Candidatus_Trichodesmium_miru|Citrate cycle (TCA cycle, Krebs cycle)|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"(K01647,K05942,K01659) (K01681,K27802,K01682) (K00031,K00030) ((K00164+K00658,K01616)+K00382,K00174+K00175-K00177-K00176) (K01902+K01903,K01899+K01900,K18118) (K00234+K00235+K00236+(K00237,K25801),K00239+K00240+K00241-(K00242,K18859,K18860),K00244+K00245+K00246-K00247) (K01676,K01679,K01677+K01678) (K00026,K00025,K00024,K00116)"|0.625|False|0.7708333333333334|True|NA|No enzymes unique to module|NA|K00031,K00239,K00240,K00382,K01659,K01679,K01682,K01902,K01903|3698,3854,3955,2978,1925,1837,3626,2385,2386|K00031 is present in multiple modules: M00009/M00010/M00740/M00173/M00614,K00239 is present in multiple modules: M00009/M00011/M00982/M00173/M00376/M00374/M00149/M00613/M00614,K00240 is present in multiple modules: M00009/M00011/M00982/M00173/M00376/M00374/M00149/M00613/M00614,K00382 is present in multiple modules: M00307/M00009/M00011/M00532/M00621/M00036/M00032,K01659 is present in multiple modules: M00009/M00010/M00012/M00740/M00982,K01679 is present in multiple modules: M00009/M00011/M00982/M00173/M00376/M00613/M00614,K01682 is present in multiple modules: M00009/M00010/M00012/M00982/M00173/M00614,K01902 is present in multiple modules: M00009/M00011/M00173/M00374/M00620/M00614,K01903 is present in multiple modules: M00009/M00011/M00173/M00374/M00620/M00614|

An explanation of the output columns can be found on the {% include ARTIFACT name="kegg-metabolism" %} help page. There, you will also see the other possible output types you could request using the `--output-modes` flag.

To stick with the nitrogen fixation theme we've been following so far, let's look for nitrogen fixation in this file. KEGG's nitrogen fixation module is [M00175](https://www.kegg.jp/module/M00175). To have this module complete, a genome has to include either the `nifHDK` genes of the molybdenum-dependent nitrogenase enzyme complex, OR the `vnfDKGH` genes of the vanadium-dependent nitrogenase complex. This module unfortunately does not include other necessary nitrogen fixation genes ([as Iva has complained about before](https://anvio.org/blog/targeted-binning/#the-nitrogen-fixation-pathway---kegg-vs-reality)), but it is a good enough start.

There are many ways to search for the nitrogen fixation module and look at its completeness scores within each genome. Here is one way using BASH:
```bash
head -n 1 tricho_metabolism_modules.txt | cut -f 1,2,9,11 > nif_table.txt
grep -i "nitrogen fixation" tricho_metabolism_modules.txt | cut -f 1,2,9,11 >> nif_table.txt
```

And here is what the resulting table looks like:

|**`module`**|**`genome_name`**|**`stepwise_module_completeness`**|**`pathwise_module_completeness`**|
|:--|:--|:--|:--|
|M00175|MAG_Trichodesmium_erythraeum|1.0|1.0|
|M00175|MAG_Trichodesmium_thiebautii_Atlantic|0.0|0.6666666666666666|
|M00175|MAG_Trichodesmium_thiebautii_Indian|1.0|1.0|
|M00175|Trichodesmium_erythraeum_IMS101|1.0|1.0|
|M00175|Trichodesmium_sp|1.0|1.0|
|M00175|Trichodesmium_thiebautii_H9_4|1.0|1.0|

The first thing to notice is that *T. miru* and *T. nobis* are not in the table at all. This implies that their completeness scores for this module were both `0.0`, since by default {% include PROGRAM name="anvi-estimate-metabolism" %} doesn't include these zero results in the output to save on space (if you want those zero values to be in the table, you could use the flag `--include-zeros`). Okay, so that matches up to our expectations so far.

The second thing to notice is that there are two types of completeness score, stepwise and pathwise. A full explanation of these metrics can be found [here](https://anvio.org/help/main/programs/anvi-estimate-metabolism/#two-estimation-strategies---pathwise-and-stepwise). The short version is that pathwise completeness considers all possible combinations of enzymes that fullfill the module (in this case, either _nifHDK_ or _vnfDKGH_) and computes the percentage of enzymes annotated for each combination (reporting the maximum), while stepwise completeness breaks down the module into overall steps and only considers each step complete if all enzymes required for the step are present. Nitrogen fixation is just one reaction requiring an enzyme complex made up of multiple parts, so the stepwise interpretation of the module considers it to be just one step and if not all of the enzyme components are present, that step is incomplete. This is why the stepwise completeness for `MAG_Trichodesmium_thiebautii_Atlantic` is 0.0 while the pathwise completeness is 0.66 -- `MAG_Trichodesmium_thiebautii_Atlantic` is missing one of the required enzyme components. In fact, if you look at the `enzyme_hits_in_module` column for this MAG and this module, you will see that only K02588 (_nifH_) and K02591 (_nifK_) are annotated. K02586 (_nifD_) is missing.

### Comparing metabolic capacity across genomes

It's great to have all the details about each individual metabolic module in each genome. But it is a lot of information to parse through, and sometimes we just want a nice picture to look at. So let's repeat the metabolism estimation analysis, but this time let's ask for matrix-type output that we can easily visualize in the anvi'o interactive interface:

```bash
# takes ~2 minutes
anvi-estimate-metabolism -e external-genomes.txt -O tricho_metabolism --matrix-format
```

You should get a bunch of different output files, but the one we will visualize is the matrix of pathwise completeness scores: `tricho_metabolism-module_pathwise_completeness-MATRIX.txt`. We can give this file to the interactive interface in `--manual` mode, along with the name of a (to be created) {% include ARTIFACT name="profile-db" %} to store the interface settings:

```bash
anvi-interactive -d tricho_metabolism-module_pathwise_completeness-MATRIX.txt \
                  -p metabolism_profile.db \
                  --manual \
                  --title TRICHO_METABOLISM
```

The resulting visualization will look something like this:

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_01.png" width=50 %}

We can make it much easier to see differences between the genomes by doing the following things:
- making the visualization rectangular (and bigger)
- changing the bar plots into a heatmap ('Intensity' chart type)
- playing with the Min values to filter out highly incomplete modules
- clustering the genomes so that genomes with similar metabolic capacity are close together
- clustering the modules so that modules with similar distribution across genomes are close together
- importing the name and categories of each module

The first three things can be done by tweaking the interface settings. And if you click on the dropdown box below, you can see all the terminal steps for clustering and importing.

<details markdown="1"><summary>Show/Hide Organizing the metabolism heatmap</summary>

Here is how to cluster the _modules_ (rows of the matrix, which become 'items' in the interface):
```bash
anvi-matrix-to-newick tricho_metabolism-module_pathwise_completeness-MATRIX.txt
```
This tree file can be given directly to `anvi-interactive` using the `-t` parameter. Or, you could import it into the {% include ARTIFACT name="profile-db" %} as an 'items order' using the program {% include PROGRAM name="anvi-import-items-order" %}. We'll stick to the former in this tutorial.

Here is how to cluster the _genomes_ (columns of the matrix, which become 'layers' in the interface). First, you flip the matrix to put the genomes into the rows, and then you use the same {% include PROGRAM name="anvi-matrix-to-newick" %} command as before:
```bash
anvi-script-transpose-matrix tricho_metabolism-module_pathwise_completeness-MATRIX.txt -o tricho_metabolism-module_pathwise_completeness-MATRIX-transposed.txt
anvi-matrix-to-newick tricho_metabolism-module_pathwise_completeness-MATRIX-transposed.txt
```

Then, you put the resulting dendrogram into a {% include ARTIFACT name="misc-data-layer-orders-txt" %} file:
```bash
# read the file into a variable, and then print to a new tab-delimited file
TREE=$(cat tricho_metabolism-module_pathwise_completeness-MATRIX-transposed.txt.newick)
echo -e "item_name\tdata_type\tdata_value\nmag_organization\tnewick\t$TREE" > layer_order.txt
```

This allows you to import the dendrogram into the {% include ARTIFACT name="profile-db" %}:
```bash
anvi-import-misc-data -p metabolism_profile.db -t layer_orders \
                      layer_order.txt
```

Finally, we want to see module information like names and categories, not just the module numbers. Here's a little set of SQL queries to extract that information from the {% include ARTIFACT name="modules-db" %} (use the database from the same KEGG data directory you've been using all along):
```bash
# if you aren't using the default KEGG data dir, you should change this variable to point to the MODULES.db in the dir you ARE using
export ANVIO_MODULES_DB=`python -c "import anvio; import os; print(os.path.join(os.path.dirname(anvio.__file__), 'data/misc/KEGG/MODULES.db'))"`
sqlite3 $ANVIO_MODULES_DB "select module,data_value from modules where data_name='NAME'" | \
    tr '|' '\t' > module_names.txt
sqlite3 $ANVIO_MODULES_DB "select module,data_value from modules where data_name='CLASS'" | \
    tr '|' '\t' > module_categories.txt
```

You can split the category strings into 3 different columns, and combine everything into one table:
```bash
echo -e "class\tcategory\tsubcategory" > category_columns.txt
cut -f 2 module_categories.txt | sed 's/; /\t/g' >> category_columns.txt
echo -e "module\tname" > name_columns.txt
cat module_names.txt >> name_columns.txt
paste name_columns.txt category_columns.txt > module_info.txt
```

Then you can import that new table into the {% include ARTIFACT name="profile-db" %}:
```bash
anvi-import-misc-data -t items -p metabolism_profile.db module_info.txt

## clean up
rm module_names.txt module_categories.txt name_columns.txt category_columns.txt
```

Now you should have everything you need for visualizing the data nicely.

</details>

Once you are finished, you can visualize the pathwise completeness matrix again like this (adding the module organization with the `-t` parameter):
```bash
anvi-interactive -d tricho_metabolism-module_pathwise_completeness-MATRIX.txt \
                  -p metabolism_profile.db \
                  --manual \
                  --title TRICHO_METABOLISM \
                  -t tricho_metabolism-module_pathwise_completeness-MATRIX.txt.newick
```

In case you want your visualization to exactly match ours, you can import our settings into the {% include ARTIFACT name="profile-db" %} for the heatmap. Note that the organization will only work if you named your trees the same way we did.
```bash
anvi-import-state -s ../00_DATA/metabolism_state.json \
                  -p metabolism_profile.db \
                  -n default
```

The heatmap should ultimately look something like this:

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_02.png" width=80 %}

A few things we can notice from the visualization:
- In the genome clustering, there are three main groups of metabolically-similar genomes: all the *T. erythraeum* genomes are together, all the *T. thiebautii* genomes are together, and the two candidate species *T. miru* and *T. nobis* are together.
- The rather incomplete *T. thiebautii* H9 genome is clearly missing a lot of metabolic pathways that it shouldn't actually be missing, particularly on the right side of the heatmap where there are plenty of modules shared by all of the other 7 genomes.
- It should be fairly easy now to spot the modules that are missing specifically in *T. miru* and *T. nobis*. Here they are, highlighted in orange:

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_03.png" width=50 %}

As expected, the nitrogen fixation module is there.

Right next to the nitrogen fixation module is an unusual sounding metabolic pathway, Lactosylceramide biosynthesis, which is 50% complete in all of the other genomes.Lactosylceramides are a type of glycosphingolipid, not very well studied in Cyanobacteria (except for some work investigating sphingolipid roles in plant-microbe symbiotic interactions [(Heaver, Johnson and Ley 2018)](https://doi.org/10.1016/j.mib.2017.12.011)), so perhaps it is not this exact pathway that is relevant, but rather some of the enzymes in it. Indeed, if you look at the details of M00066 in the long-format output file, you will see that only one enzyme is annotated in these genomes: ceramide glucosyltransferase (K00720). Unfortunately, this enzyme is also not well studied in bacteria, so we don't have much literature backup for interpreting the lack of this function in *T. miru* and *T. nobis*. Maybe a sphingolipid expert will see this one day and look into it. :)

### Using custom metabolic modules

When we estimated metabolism with the default KEGG modules in the previous section, a lot of the completeness scores were quite similar across all 8 of our genomes. But we know from Tom's paper that there are a few other nitrogen fixation-related activities that *T. miru* and *T. nobis* do not have and that the other genomes do. The KEGG modules don't really capture what makes these genomes different. Additionally, the KEGG module for nitrogen fixation isn't comprehensive (as I mentioned before).

So let's fix that, by using our own set of custom metabolic modules. There are some in the datapack at XXXX. They include a nitrogen fixation module with the full _nif_ gene set (_nifHDK_ and _nifENB_), a module for hydrogen recycling (_hyaABD_ and _hypABCDEF_), a module for hopanoid lipid production (squalene synthase, squalene-hopene cyclase, and _hpnABGH_), and a module for nitrite/nitrate transport (_nark_ and _tauABC_). The first three are related to nitrogen fixation and associated metabolic activities, while the last one is related to nitrogen assimilation (an alternative to nitrogen fixation) -- hence, we expect to find only the last module complete in *T. miru* and *T. nobis*.

Here is the custom module for hopanoid production as an example:

```
ENTRY       NIF003
NAME        Hopanoid lipid production
DEFINITION  (K00801,COG1562) (K06045,COG1657) PF01370.25 PF00535.30 PF01048.24 PF04055.25+PF11946.12
ORTHOLOGY   K00801   farnesyl-diphosphate farnesyltransferase [EC:2.5.1.21]
            COG1562  phytoene/squalene synthetase
            K06045   squalene-hopene/tetraprenyl-beta-curcumene cyclase [EC:5.4.99.17 4.2.1.129]
            COG1657  terpene cyclase SqhC
            PF01370.25  Hopanoid-associated sugar epimerase HpnA
            PF00535.30  Hopene-associated glycosyltransferase HpnB
            PF01048.24  Putative hopanoid-associated phosphorylase HpnG
            PF04055.25  Hopanoid biosynthesis associated radical SAM protein HpnH (Radical SAM domain)
            PF11946.12  Hopanoid biosynthesis associated radical SAM protein HpnH (unknown associated domain)
CLASS       User modules; Biosynthesis; Lipid biosynthesis
ANNOTATION_SOURCE   K00801  KOfam
                    K06045  KOfam
                    COG1562  COG24_FUNCTION
                    COG1657  COG24_FUNCTION
                    PF01370.25  Pfam
                    PF00535.30  Pfam
                    PF01048.24  Pfam
                    PF04055.25  Pfam
                    PF11946.12  Pfam
///
```
{% include CODEBLOCKFILENAME filename="00_DATA/modules/NIF003" %}

As you can see, it includes enzymes from multiple annotation sources. We've already annotated our genomes with all of those functional databases, so we are good to go.

To set up the custom modules into a {% include ARTIFACT name="modules-db" text="modules database" %} that we can use with {% include PROGRAM name="anvi-estimate-metabolism" %}, we need to use the program {% include PROGRAM name="anvi-setup-user-modules" %}:

```bash
anvi-setup-user-modules -u ../00_DATA/
```

Doing so creates a database at `00_DATA/USER_MODULES.db` containing these four modules. We can now give this database to {% include PROGRAM name="anvi-estimate-metabolism" %} with the `-u` parameter. We'll also use the `--only-user-modules` flag to skip the KEGG module estimation.

Additionally, we will ask the program to compute module copy numbers for us with the `--add-copy-number` flag. Copy numbers are usually more suitable for metagenomic input rather than individual genomes, but transporter genes can often occur in multiple copies in a single genome and we want to be able to capture that signal in our estimation output.

```bash
anvi-estimate-metabolism -e external-genomes.txt \
            -u ../00_DATA/ \
            --only-user-modules \
            --add-copy-number \
            -O nitrogen_metabolism
```

Take a look at the output (`nitrogen_metabolism_modules.txt`). What do you notice?

For convenience, I'll also show the heatmap of pathway completeness scores:

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_04.png" width=50 %}

And the heatmap of per-step copy numbers:

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_05.png" width=50 %}

{:.notice}
In these visualizations, we've adjusted the min/max values to better show the different values. The completeness score heatmap has a minimum of 0.25 (so any completeness value below that appears white) and the normal maximum of 1.0. The copy number heatmap has the normal minimum of 0 and a maximum of 10 (so any copy number above 10 appears black) -- there are some steps that have way more than 10 copies, which makes the typical range of 0-2 copies extremely difficult to see on the heatmap unless we cap the value.

<details markdown="1"><summary>Show/Hide Commands to generate the heatmaps</summary>

Just like before, if you want a heatmap, you'll have to generate the output in matrix format:

```bash
anvi-estimate-metabolism -e external-genomes.txt \
            -u ../00_DATA/ \
            --only-user-modules \
            --add-copy-number \
            -O nitrogen_metabolism \
            --matrix-format
```

For a heatmap this small, we don't really need to cluster anything. But it would be nice to see the module names instead of just their numbers, so we'll make a little table of names:

```bash
echo -e "module\tname" > custom_mod_names.txt
sqlite3 ../00_DATA/USER_MODULES.db "select module,data_value from modules where data_name='NAME'" | \
        tr '|' '\t'  >> custom_mod_names.txt
```

Since we need a profile database before we can store any additional data in it, we'll go ahead and run {% include PROGRAM name="anvi-interactive" %} with the `--dry-run` flag to create one. Then we can import the module name data. If you want, you can also import a {% include ARTIFACT name="state-json" text="state file" %} to automatically make the visualization into a heatmap.

```bash
anvi-interactive -d nitrogen_metabolism-module_pathwise_completeness-MATRIX.txt \
                  -p nitrogen_completeness.db \
                  --manual \
                  --title "Completeness of custom nitrogen modules" \
                  --dry-run

anvi-import-misc-data -p nitrogen_completeness.db -t items custom_mod_names.txt

# if you want, import the heatmap visualization settings
anvi-import-state -p nitrogen_completeness.db -n default -s ../00_DATA/nitrogen_heatmap.json
```

Finally, here is the visualization command (this time without `--dry-run`):

```bash
anvi-interactive -d nitrogen_metabolism-module_pathwise_completeness-MATRIX.txt \
                  -p nitrogen_completeness.db \
                  --manual \
                  --title "Completeness of custom nitrogen modules"
```

If you also want to make the per-step copy number heatmap, it is a similar chain of commands. The only difference is the module name info file, which now has to be based on the step names. Here are all the commands to run:

```bash
# a little BASH loop to generate the step names file
# with a little trick: two columns for the name so that one can be colors and one can be text
echo -e "step\tname\tname2" > custom_step_names.txt
while read step; do \
  mod=$(echo $step | cut -d '_' -f 1); \
  name=$(grep $mod custom_mod_names.txt | cut -f 2); \
  echo -e "$step\t$name\t$name" >> custom_step_names.txt; \
done < <(cut -f 1 nitrogen_metabolism-step_copy_number-MATRIX.txt | tail -n+2)

# get a profile db
anvi-interactive -d nitrogen_metabolism-step_copy_number-MATRIX.txt \
                  -p nitrogen_step_copies.db \
                  --manual \
                  --title "Per-step copy number of custom nitrogen modules" \
                  --dry-run

# import relevant data
anvi-import-misc-data -p nitrogen_step_copies.db -t items custom_step_names.txt
anvi-import-state -p nitrogen_step_copies.db -n default -s ../00_DATA/nitrogen_step_copies.json

# visualize
anvi-interactive -d nitrogen_metabolism-step_copy_number-MATRIX.txt \
                  -p nitrogen_step_copies.db \
                  --manual \
                  --title "Per-step copy number of custom nitrogen modules"
```

</details>

Here are some of my observations:
- As we expected, *T. miru* and *T. nobis* only have the `NIF004` (Nitrogen uptake) module complete.
- The other 6 genomes have all the modules >80% complete (except for H9, which is missing several genes from the hydrogen recycling and nitrogen uptake modules. But we already know it is quite an incomplete genome).
- *T. miru* and *T. nobis* have multiple copies of the _narK_ transporter (as Tom found in his paper) while the others each have one. This isn't enough to make the overall nitrogen uptake module have a higher copy number, but you can see the copies of the individual transporters in the last column (`per_step_copy_numbers`).
- Interestingly, the hopanoid lipid production module (`NIF003`) has relatively high completeness in most genomes (including *T. miru* and *T. nobis*, in which the module is 75% complete), and a lot of that seems to result from finding many Pfam annotations for the _hpn_ gene domains. This contrasts with the results from Tom's paper -- Tom used the [RAST annotation tool](https://www.anl.gov/mcs/rast-rapid-annotation-using-subsystem-technology) to find the _hpnABGH_ genes, which may have been a more stringent and/or specific strategy. Perhaps these Pfam domains are too generic to indicate hopanoid production? If we were serious about this analysis, we would probably cross-check our module with a lipid biosynthesis expert to make sure it is appropriate for identifying this metabolic capacity. :)
- One thing looks weird! If you look at the per-step copy numbers for `NIF003`, the last step always has a copy number of 0 -- even though there are certainly genomes in which both _hpnH_ Pfam domains are annotated. In fact, for 6 of the genomes, the pathwise copy number is 1 (or 2) while the stepwise copy number is 0.

Let's look into that last point a bit more. What is going with the stepwise copy number estimation for hopanoid production? When things look weird in the results, it is always good to take a single genome, rerun the metabolism estimation, and pay attention to the warnings in the terminal output. Terminal output is more verbose on individual genomes than in 'multi-mode' for {% include PROGRAM name="anvi-estimate-metabolism" %}.

The *T. erythraeum* genome shows this weird copy number pattern, so let's use that one:
```bash
anvi-estimate-metabolism -c ../Trichodesmium_erythraeum_IMS101-contigs.db \
                  -u ../00_DATA/ \
                  --only-user-modules \
                  -O test \
                  --add-copy-number
```

Aha! There is a relevant warning in the terminal output:
```
WARNING
===============================================
The gene call 208 has multiple annotations to alternative enzymes within the
same step of a metabolic pathway (PF04055.25, PF11946.12), and these enzymes
unfortunately have a complex relationship. The affected module is NIF003, and
here is the step in question: PF04055.25+PF11946.12. We arbitrarily kept only
one of the annotations to this gene in order to avoid inflating the step's copy
number, but due to the complex relationship between these alternatives, this
could mean that the copy number for this step is actually too low. Please heed
this warning and double check the stepwise copy number results for NIF003 and
other pathways containing gene call 208.
```

The lessons here: pay attention to warnings from anvi'o programs. And keep in mind that many of these warnings are suppressed when processing multiple inputs, so testing things on individual genomes might be the way to go when outputs look strange.

{:.notice}
If something goes wrong (or weird) while using anvi'o, you may want to try re-running whatever you just did with the addition of the global `--debug` flag (which works for all anvi'o programs). This flag enables extra terminal output, which in the best case may help you figure out what is going on, and in the worst case can provide enough information to send to the developers when you ask them for help (in case of errors, we especially appreciate the code tracebacks that `--debug` allows you to see).

If you found this section useful and you want to make your own custom metabolic modules, check out this guide on the {% include ARTIFACT name="user-modules-data" %} help page.

### Reaction networks and drawing KEGG Pathway Maps

Let's move onto the second type of metabolism reconstruction: metabolic modeling. Anvi'o can generate a {% include ARTIFACT name="reaction-network" %} from the KEGG Ortholog (KO) annotations in any {% include ARTIFACT name="contigs-db" text="contigs database" %} or {% include ARTIFACT name="pan-db" text="pangenome database" %}. The network connects all genes with KO annotations to the chemical reactions they catalyze, and the metabolites consumed or produced by those reactions. Reaction and compound information are taken from the [ModelSEED](https://github.com/ModelSEED/ModelSEEDDatabase) database.

{:.notice}
If you want to use these programs, you will first have to run {% include PROGRAM name="anvi-setup-modelseed-database" %} (if you haven't already done so in your anvi'o environment).

Let's make a {% include ARTIFACT name="reaction-network" text="reaction network" %} for one genome using the program {% include PROGRAM name="anvi-reaction-network" %}:

```bash
anvi-reaction-network -c ../Trichodesmium_sp-contigs.db
```

There will be plenty of output on your terminal screen, but no output files added to your working directory -- the network will be stored directly in the {% include ARTIFACT name="contigs-db" text="contigs database" %}.

Now, if you wanted to do some flux balance analysis (FBA) to model the flow of metabolites through this network -- bad news, you can't do that (at least, not yet) in anvi'o. However, you _can_ export the {% include ARTIFACT name="reaction-network" %} into a JSON file suitable for common metabolic modeling software (like [COBRApy](https://github.com/opencobra/cobrapy)) with the program {% include PROGRAM name="anvi-get-metabolic-model-file" %}:

```bash
anvi-get-metabolic-model-file -c ../Trichodesmium_sp-contigs.db \
                -o Trichodesmium_sp_rxn_network.json
```

The output file is _really_ big, because it contains every single metabolite, reaction, and gene contributing to the reaction network.

We will use this {% include ARTIFACT name="reaction-network" %} for some neat visualizations of KEGG Pathway Maps using the program {% include PROGRAM name="anvi-draw-kegg-pathways" %}.

```bash
anvi-draw-kegg-pathways --contigs-dbs ../Trichodesmium_sp-contigs.db -o Trichodesmium_sp_PATHWAY_MAPS --ko
```

For each KEGG Pathway Map, the program will highlight the KOs from the map that are annotated in each provided genome, and create a PDF file in the specified output directory. We only provided a single genome, so the resulting maps are specific to that genome's annotations.

Let's look at an example map. Of course we will look at the [Nitrogen Metabolism](https://www.kegg.jp/pathway/map00910) map (which is map 00910 and stored at `Trichodesmium_sp_PATHWAY_MAPS/kos_00910.pdf`):

{% include IMAGE path="/images/trichodesmium_tutorial/metabolism_06.pdf" width=80 %}

You can see that in addition to nitrogen fixation (nitrogen to ammonia), this microbe can also import nitrate and nitrate from the extracellular matrix into the cell, convert nitrate to nitrite (assimilatory nitrate reduction) and to nitric oxide, convert nitrite to ammonia, and feed that ammonia into glutamate metabolism -- which is the start of amino acid biosynthesis using that fresh new bioavailable nitrogen.

While pathway prediction gives you quantitative summaries of metabolic capacity, these Pathway Map drawings are great for understanding what is actually going on in those pathways, and for seeing the connections between different classes of metabolism. Each map gives you an overall picture of a small-ish, digestible and ecologically-relevant part of the entire reaction network.

I bet you are wondering how this map looks different across our _Trichodesmium_ genomes. If so, then you are in luck, because we can also use {% include PROGRAM name="anvi-draw-kegg-pathways" %} to compare metabolic capacity of multiple genomes.

First, we will need to run {% include PROGRAM name="anvi-reaction-network" %} on all the other genomes. This program unfortunately doesn't accept an {% include ARTIFACT name="external-genomes" text="external genomes file" %} as input; however, we can reuse our BASH loop strategy from above.



Don't forget to go back to the parent directory before you move on to the next tutorial section:
```bash
cd ..
```

## Read recruitment

The absence of the Nif genes, and therefore of the capacity for nitrogen fixation in the MAGs of *T. miru* and *T. nobis* could very well be explained by the fragmented nature of MAGs and the inherent incompleteness of the genomes. And that would be a very fair argument. So the question is: how do we prove the absence of these Nif genes?

We can use metagenomic read recruitment to help us address this question. 

Metagenomics read recruitment is the process of mapping read to a reference sequence. For instance it can a metagenome against a metagenomic assembly, a metagenomes against a collection of MAGs, you name it. It allows you to explore ecological signal related to your reference: presence/absence, relative abundance, within population variation and a lot more.

In this tutorial, we will recruit reads from a few Tara Ocean metagenomes (a subset of the original reads, to keep it computationally feasible on a laptop) to the *Trichodesmium thiebautii* reference genome.
## Phylogenomics

