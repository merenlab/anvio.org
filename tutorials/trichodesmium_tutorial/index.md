---
layout: blog
title: An anvi'o tutorial with Trichodesmium's genomes
modified: 2024-03-18
excerpt: "A tutorial that covers a lot of anvi'o capabilities using Trichodesmium."
categories: [anvio]
authors: [ivagljiva, FlorianTrigodet]
tags: [genomics, pangenomics, phylogenomics, hands-on, beginner]
comments: true
---

<div class="extra-info" markdown="1">

<span class="extra-info-header">Summary</span>

**The purpose of this workflow** is to learn how to use the set of integrated 'omics tools in anvi'o to make sense of a few Trichodesmium genomes.
 Here is a list of topics that are covered in this tutorial:

 * Create a {% include ARTIFACT name="contigs-db" %} and use functional and taxonomic assignment.
 * Estimate taxonomy, completion/redundancy and metabolic pathway completeness across multiple genomes.
 * Generate a pangenome of closely related Trichodesmium genomes.
 * Use metagenomic read-recruitment.

 {:.notice}
 If you have any questions about this exercise, or have ideas to make it better, please feel free to get in touch with the anvi'o community through our Discord server:

 {% include _join-anvio-discord.html %}
 </div>

 ---
 To reproduce this exercise with your own dataset, you should first follow the instructions [here](/install/) to install anvi'o.


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

Don't forget to activate your anvi'o environment:

```bash
conda activate anvio-dev
```

## Genomics with anvi'o

To introduce you into the anvi'o-verse, we will run some basic genomics analysis on a single genome. In this case, we will download a genome from NCBI, which we know is a Trichodesmium. The goal will be:
- reformat the fasta file
- generate a {% include ARTIFACT name="contigs-db" %}
- 

### Download and reformat the genome

To downaload the genome, we will use the command `curl`:

```bash
curl https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/023/356/555/GCA_023356555.1_ASM2335655v1/GCA_023356555.1_ASM2335655v1_genomic.fna.gz -o GCA_023356555.1_ASM2335655v1_genomic.fna.gz
gunzip GCA_023356555.1_ASM2335655v1_genomic.fna.gz
```

Now we have one of the most fundamental file that everyone will have to interact with: [a fasta file](https://en.wikipedia.org/wiki/FASTA_format). We can already check the number of contigs by counting the number of character `>`, which appears once per sequence. We can use the command `grep` for that:

```bash
$ grep -c '>' GCA_023356555.1_ASM2335655v1_genomic.fna
269
```

That's a lot of sequences, or in this case: a lot of contigs. That is already telling us a few things about this genome: it is not a singular contigs representing a complete and circular genome. It rather looks like a Metagenome-Assembled Genome (MAG), or a Single Amplified Genome (SAG).
Let's have a look at the contig's header:

```bash
grep '>' GCA_023356555.1_ASM2335655v1_genomic.fna
```

As you can see, the headers are rather complex, with a lot of information. We learn from then that this is a MAG. These headers are going to be problematic for downstream analysis, particularly characters like spaces, dots, pipe (`|`) and whatnot.
And anvi'o know you would be in trouble if you start working this these headers. Just for fun, you can try to run {% include PROGRAM name="anvi-gen-contigs-database" %} (we will cover what it does very soon), and you will see an error:

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

We can use {% include PROGRAM name="anvi-script-reformat-fasta" %} to simplify the fasta's headers with the flag `--simplify-names`. This command can (optionally) generate a summary report which is a two column file with the matching new and old names of each sequence in the fasta file. While we are using this command, we can use it to write a specific prefix to the renamed sequences with the flag `--prefix` and filter out short contigs - smaller than 500 bp, with the flag `-l`.
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
You can use this command to further filter your fasta file: check the option with the online (help page)[https://anvio.org/help/main/], or by using the flag `--help` in the terminal.

### Generate a contigs database

The {% include ARTIFACT name="contigs-db" %} is a central database in the entire anvi'o ecosystem. It essentially stores all information about a given set of sequences from a fasta file. To make a {% include ARTIFACT name="contigs-db" %} from our reformatted fasta, you can use the command {% include PROGRAM name="anvi-gen-contigs-database" %}:

{:.notice}
Numerous anvi'o command can make use of multithreading to speed up computing time. You can either use the flag `-T` or `--num-threads`. Check the help page of a command, or use `--help` to check if multithreading is available.

```bash
anvi-gen-contigs-database -f Trichodesmium_sp.fa \
                          -o Trichodesmium_sp-contigs.db \
                          -T 2
```

A few things happen when you generate a {% include ARTIFACT name="contigs-db" %}. First, all DNA sequences are stored in that databases. You can retrieve it using the command {% include PROGRAM name="anvi-export-contigs" %}. Second, anvi'o uses [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) to identify open-reading frames. Pyrodigal-gv is a python implementation of [Prodigal](https://doi.org/10.1186/1471-2105-11-119) with some additional metagenomic models for giant viruses and viruses with alternative genetic codes (see [Camargo et al.](https://doi.org/10.1038/s41587-023-01953-y)).

In addition to identifying open-reading frames, anvi'o will predict the amino-acid sequence associated with the gene-calls and store it in that newly made database.
You can use the command {% include PROGRAM name="anvi-export-gene-calls" %} to export the gene calls, and the amino-acid sequence for each open-reading frame identified by Pyrodigal-gv.

The command {% include PROGRAM name="anvi-gen-contigs-database" %} also computes the tetra-nucleotide frequency for each contigs. To learn more about what it is, check the vocabulary page about [tetra-nucleotide frequency](https://anvio.org/vocabulary/#tetra-nucleotide-frequency).

### Annotate single-copy core genes and Ribosomal RNAs

There is a command called {% include PROGRAM name="anvi-run-hmms" %}, which let you use an Hidden Markov Models ([HMMs](https://en.wikipedia.org/wiki/Hidden_Markov_model)) to annotated the genes in a {% include ARTIFACT name="contigs-db" %} and store that annotation directly back into the database.
The anvi'o code base comes with an integrated set of default {% include ARTIFACT name="hmm-source" %}. They include models for 6 Ribosomal RNAs (16S, 23S, 5S, 18S, 28S, and 12S). They also include three set of [single-copy core genes](https://anvio.org/vocabulary/#single-copy-core-gene-scg), named `Bacteria_71`, `Archaea_76` and `Protista_83`. The first two collection for Bacteria and Archaea are collections that anvi’o developers curated by taking [Mike Lee’s](https://twitter.com/AstrobioMike) bacterial single-copy core gene collection first released in [GToTree](https://academic.oup.com/bioinformatics/article/35/20/4162/5378708), which is an easy-to-use phylogenomics workflow.
`Protista_83` is [a curated collection](http://merenlab.org/delmont-euk-scgs) of [BUSCO](https://busco.ezlab.org/) by [Tom Delmont](https://twitter.com/tomodelmont). These set of HMMs are used in anvi'o to compute the estimated completeness and redundancy of a genome.


To annotate our {% include ARTIFACT name="contigs-db" %} with these HHMs, we can simply run {% include PROGRAM name="anvi-run-hmms" %} like this:

```bash
anvi-run-hmms -c Trichodesmium_sp-contigs.db -T 4
```

{:.notice}
There is an optional flag `--also-scan-trnas` which uses the program [tRNAScan-SE](https://github.com/UCSC-LoweLab/tRNAscan-SE) to identify and store information about tRNA found in your genome. You can also use the command {% include PROGRAM name="anvi-scan-trnas" %} at any time.

Now is probably a good time to use the command {% include PROGRAM name="anvi-db-info" %}, which shows you basic information about any anvi'o database:
```bash
anvi-db-info Trichodesmium_sp-contigs.db
```

With this command, you can see which HMMs was already run on that database, but also some basic information like the number of contigs, number of genes called by Pyrodigal-gv and more.

{:.warning}
SCREENSHOT?

#### General summary and metrics

To go one step further than the output generated by {% include PROGRAM name="anvi-db-info" %}, we can use the command {% include PROGRAM name="anvi-display-contigs-stats" %}. It allows you to visualize (and export) basic information about one or multiple {% include ARTIFACT name="contigs-db" %}.

```bash
anvi-display-contigs-stats Trichodesmium_sp-contigs.db
```

{% include IMAGE path="/images/trichodesmium_tutorial/01_contigs_stats.png" width=80 %}

{:.notice}
The approximate number of genomes is an estimate based on the frequency of each single-copy core gene. It is mostly useful in metagenomics context, where you expect multiple microbial populations. This estimate is based on the mode (or most frequently occurring number) of single-copy core genes. Here, we know we generated a {% include ARTIFACT name="contigs-db" %} with a single genome, hence the expected number of genome = 1 bacteria. GOOD.

You can also export the information displayed on your browser by running the command the flag `--output-file` or `-o`. Anvi'o will then write a TAB-delimited file with the above values. And if you don't want the browser page to open, you can also use the flag `--report-as-text`

```bash
anvi-display-contigs-stats Trichodesmium_sp-contigs.db --report-as-text -o Trichodesmium_sp-contigs-stats.txt
```

### Estimate completeness and redundancy

We can use the set of single-copy core genes (SCGs) to estimate the completeness of a genome. The rational is pretty simple: we expect a set of genes to be systematically present in all genomes only once, so if we find all these genes: we estimate that the genome is complete (100%). We can also report how many SCGs are found in multiple copies, which we refer to as SCG redundancy.

{:.notice}
Why redundancy and not contamination? The presence of multiple copies of SCGs could be indicative of a contamination in your genome - with the potential presence of more than one population - but microbial genomes have a bad habit of keeping a few SCGs in multiple copies. So until proven otherwise, anvi’o calls it redundancy and you will decide if you think it is contamination.

We can use the command {% include PROGRAM name="anvi-estimate-genome-completeness" %}:

```bash
anvi-estimate-genome-completeness -c Trichodesmium_sp-contigs.db
```


|**`bin name`**|**`domain`**|**`confidence`**|**`% completion`**|**`% redundancy`**|**`num_splits`**|**`total length`**|
|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp-contigs|BACTERIA|1.0|97.18|4.23|358|6640707|

From the output, we learn that our MAG is 97% estimated complete and 4% redundant. 

You can also use the flag `--output-file` or `-o` to save the output into a text file.

### Estimate SCG taxonomy

In this part of the tutorial, we will cover how anvi'o can generate a quick taxonomic estimation for a genome (also works for a metagenome). Of course, in this example we already know that our genome is from the genus Trichodesmium. But you can also imagine doing this step without any prior knowledge about the taxonomy of your microbe.
The way anvi'o is able to estimate the taxonomy of a genomes is by using a subset of genes found in the bacterial and archaeal SCGs: the ribosomal proteins. These proteins are commonly used to compute phylogenomic tree. In short, anvi'o uses the Genome Taxonomy Database ([GTDB](https://gtdb.ecogenomic.org/)) and diamond (a fast alternative to NCBI’s BLASTp) to compare your ribosomal proteins to the one found in the GTDB collection. Each ribosomal protein get a taxonomic annotation. This is done with the command {% include PROGRAM name="anvi-run-scg-taxonomy" %} and the annotation are directly stored in the {% include ARTIFACT name="contigs-db" %}.

Let's run {% include PROGRAM name="anvi-run-scg-taxonomy" %}:

```bash
anvi-run-scg-taxonomy -c Trichodesmium_sp-contigs.db -T 4
```

{:.notice}
If this step is not working for you, you may need to run {% include PROGRAM name="anvi-setup-scg-taxonomy" %} to download and initialize the database on your machine. You only need to run this command once.

In your terminal, you should see the number of ribosomal protein that had a match to an homologous protein from the GTDB collection. But you don't get the actual annotation. For that, you need to run a second command called {% include PROGRAM name="anvi-estimate-scg-taxonomy" %}. This command will compute the consensus taxonomic annotation across a set of ribosomal protein. If we can simply our {% include ARTIFACT name="contigs-db" %} as the sole input to {% include PROGRAM name="anvi-estimate-scg-taxonomy" %},then anvi'o will assume it contains a single genome.

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

Note that the command used a total of 22 SCGs - more specifically the ribosomal proteins which are part of the SCGs collections - and we have a species name: *Trichodesmium erythraeum*.

In the output, you can also see `supporting_scgs` with the number `21`. It corresponds to the number of ribosomal proteins which all agreed with the reported taxonomy. It also means that ONE ribosomal taxonomy has a different taxonomical annotation.

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

In this more comprehensive output, you can see the detail of each ribosomal protein annotation: which protein, the percent identity to an homologous gene in the GTDB collection, and the associated taxonomy. You can see that the ribosomal protein L14 has a taxonomy that is not resolved at the species level, but only at the genus. So, the only ribosomal protein that did not agree with the final taxonomy was actually matching the same genus. I would not be worry at all about potential contamination, at least at this stage.

The way anvi'o estimate taxonomy is not perfect. In fact it is limited to Bacteria and Archaea (genomes found in GTDB). But it is fast and relatively accurate to give you an idea of the taxonomy of one or more genomes.

{:.notice}
If you are working with a metagenome, i.e. with more that one population, anvi'o can either compute the taxonomy per bin (if available), or without binning! In the second case, anvi'o will pick the most commonly found ribosomal protein and report their taxonomy annotation. This is a great way to quickly get an idea of the taxonomical composition of a metagenomes, prior to binning for instance.

### Functional annotations

There are many databases that one can use to assign function to a set of genes. You may be familiar with [NCBI's COG](https://www.ncbi.nlm.nih.gov/research/cog) (Clusters of Orthologous Genes), [KEGG](https://www.genome.jp/kegg/) (Kyoto Encyclopedia of Genes and Genomes) or [Pfam](http://pfam.xfam.org/) (the protein family database), which can be use for general function. Other database out there are more specific, like [CAZymes](https://www.cazy.org/) which focuses on enzymes associated with the synthesis, metabolism and recognition of carbohydrate, or [PHROGs](https://phrogs.lmge.uca.fr/) which focuses on viral related functions.

Anvi'o has a few commands that allow you to annotated the open-reading frames in your {% include ARTIFACT name="contigs-db" %} with a few database. Each of them come with a setup command that you need to run once to download the appropriate database on your machine:

Database | Setup command | Run command
-- | -- | --
NCBI's COG | {% include PROGRAM name="anvi-setup-ncbi-cogs" %} | {% include PROGRAM name="anvi-run-ncbi-cogs" %}
KEGG | {% include PROGRAM name="anvi-setup-kegg-data" %} | {% include PROGRAM name="anvi-run-kegg-kofams" %}
Pfams | {% include PROGRAM name="anvi-setup-pfams" %} | {% include PROGRAM name="anvi-run-pfams" %}
CAZymes | {% include PROGRAM name="anvi-setup-cazymes" %} | {% include PROGRAM name="anvi-run-cazymes" %}

If you favorite annotation database is not represented here, you have a few options:
- **Short-term solution**: run the annotation outside of anvi'o. You can export the gene calls with {% include PROGRAM name="anvi-export-gene-calls" %}, run your annotation with a third party software, then import the annotations back into your {% include ARTIFACT name="contigs-db" %} with {% include PROGRAM name="anvi-import-functions" %}.
- **Community level solution**: find an anvi'o developer and tell them about your passion for XXX functional database and hope they make a new command called `anvi-run-XXX`. We seriously encourage you to use [anvi'o github page](https://github.com/merenlab/anvio) to write an issue describing the needs for a new functional annotation database in anvi'o. Then, anyone with time and skill can try to implement it. If you find an existing issue discussing something you want in anvi'o, please raise your voice, write a comment, let the developers know that you would like to sea a feature in anvi'o.
- **Developer level**: write a new program to run annotation on a {% include ARTIFACT name="contigs-db" %} with your favorite database, and submit a pull request on [anvi'o github page](https://github.com/merenlab/anvio).

For now, we will use the NCBI's COG and KEGG database on our *Trichodesmium* genome. {% include PROGRAM name="anvi-run-ncbi-cogs" %} will be relatively fast (uses diamond in to find homologous hits in the database), while {% include PROGRAM name="anvi-run-kegg-kofams" %} will take quite longer (~6min, it uses HMMs and HMMER in the background).

{:.notice}
If you know your machine can use more threads, feel free to change the flag `-T 4` to another number

```bash
# will take about ~1 min
anvi-run-ncbi-cogs -c Trichodesmium_sp-contigs.db -T 4

# will take about ~8 min
anvi-run-kegg-kofams -c Trichodesmium_sp-contigs.db -T 4
```

As you can see from the commands above, there are no output file. All the annotations are stored into the {% include ARTIFACT name="contigs-db" %}. You can use {% include PROGRAM name="anvi-db-info" %} to check which functional annotation are already in an existing {% include ARTIFACT name="contigs-db" %} (including manually imported ones). You can also use {% include PROGRAM name="anvi-export-functions" %} to get a text output for a given annotation source (or multiple).

```bash
# check which annotation was run on our contigs database
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

The output table looks like this:

|**`gene_callers_id`**|**`source`**|**`accession`**|**`function`**|**`e_value`**|
|:--|:--|:--|:--|:--|
|0|COG24_FUNCTION|COG3293|Transposase|5.51e-12|
|2|COG24_FUNCTION|COG4451|Ribulose bisphosphate carboxylase small subunit (RbcS) (PDB:2YBV)|2.02e-63|
|4|COG24_FUNCTION|COG1850|Ribulose 1,5-bisphosphate carboxylase, large subunit, or a RuBisCO-like protein (RbcL) (PDB:2YBV)|0|
|..|..|..|..|..|
|4765|KOfam|K02030|polar amino acid transport system substrate-binding protein|1.7e-26|
|4769|KOfam|K07494|putative transposase|3.6e-16|
|4813|KOfam|K11524|positive phototaxis protein PixI|4e-37|


You can search for your favorite function. Trichodesmium is know for its ability to fix nitrogen, you can look for the `NifH` gene, which is repo
```bash
$ grep NifH functional_annotations.txt
3709	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	1.5e-197
4020	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	4.81e-167
4020	KOfam	K02588	nitrogenase iron protein NifH	2.9e-144
```

Or you can use {% include PROGRAM name="anvi-search-functions" %}:
```bash
anvi-search-functions -c Trichodesmium_sp-contigs.db \
                      --search-term NifH \
                      --output-file NifH_search.txt \
                      --full-report NifH_full_report.txt
```

The first output file called `NifH_search.txt` only contains the name of the contigs where a gene with a matching search term was found. And the second file `NifH_full_report.txt` is more comprehensive:

```
$ cat NifH_full_report.txt
gene_callers_id	source	accession	function	search_term	contigs
3709	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	NifH	Trichodesmium_sp_MAG_R01_000000000213_split_00004
4020	COG24_FUNCTION	COG1348	Nitrogenase ATPase subunit NifH/coenzyme F430 biosynthesis subunit CfbC (NifH/CfbC) (PDB:1CP2) (PUBMED:28225763)	NifH	Trichodesmium_sp_MAG_R01_000000000230_split_00006
4020	KOfam	K02588	nitrogenase iron protein NifH	NifH	Trichodesmium_sp_MAG_R01_000000000230_split_00006
```


