---
layout: blog
title: Competitive metagenomic read recruitment explained
modified: 2025-10-24
excerpt: "A tutorial on the nuts and bolts of competitive read recruitment"
categories: [anvio]
authors: [meren]
tags: [genomics, metagenomics, hands-on, beginner]
comments: true
---

## Purpose

The purpose of this tutorial is to walk you through a scenario in which you have **multiple genomes** and **one or more metagenomes**, and you wish to perform **a competitive metagenomic read recruitment** to understand the relative abundance and/or biogeography of your **genomes across metagenomes**.

Metagenomic read recruitment is a very commonly used strategy in [metagenomics](https://anvio.org/vocabulary/#metagenomics), and is extremely powerful for answering a great number of questions at different levels of resolution, such as from studying population genetics of a single population to characterize the core and accessory genes of a population, to quantifying the distribution patterns of microbial taxa across environments.

You can learn much more about the general principles of metagenomic read recruitment here in [this introductory video](https://youtu.be/MqD4aN1p1qA?t=344) (which should be accessible to anyone, including those who have no background in the topic). You can also follow [this introductory tutorial](https://merenlab.org/tutorials/read-recruitment/) to gain hands-on experience with metagenomic read recruitment (which should be accessible to anyone who has some expertise in the terminal environment).

*This* particular tutorial will highlight a specific application of metagenomic read recruitment when you have multiple genomes you wish to survey in environments, and you wish to perform the read recruitment in a 'competitive' way to minimize noise in your read recruitment results.

Competition here comes from the fact that in this particular setup multiple genomes will be 'competing' one another to recruit any given read, which will decreases the likelihood of non-specific recruitment of reads from complex environmental populations to genomes that do not reprsent them. If you are not familiar with this concept.

## Target audience

This tutorial will be most useful to those who have their own data to work with as they follow through the tutorial.

Almost every step of the tutorial will take place in the terminal environment, and in almost all instances you will be able to simply copy-paste entire commands directly to your terminal to follow the steps. In that sense, the tutorial does not require you be an advanced user of the terminal environment. That said, if you have no experience with the UNIX terminal environment some things will likely look unfamiliar to you.

## Software & hardware requirements

The tutorial does not have any hardware requirements. You can run it on your four-year-old laptop, or on a high-performance computing cluster. But the hardware requirements will depend on the amount of data you are going to be following the tutorial with. If you have hundreds of genomes and tens of large metagenomes you may need a computer with a larger number of CPUs and a greater amount of memory than what a typical laptop can offer. If you are unsure, please feel free to send a message on anvi'o {% include discord-button.html %}, and the community will make suggestions.

The tutorial assumes that you have a working [anvi'o](https://anvio.org) environment. If you need to install anvi'o first, you can do it by following the installation instructions at [https://anvio.org/install/](https://anvio.org/install/).

The following sections will assume that when you run this command,

``` bash
anvi-run-workflow -v
```

you see an output similar to this one:

```
Anvi'o .......................................: marie (v8-dev)
Python .......................................: 3.10.15

Profile database .............................: 40
Contigs database .............................: 24
Pan database .................................: 21
Genome data storage ..........................: 7
Structure database ...........................: 2
Metabolic modules database ...................: 4
tRNA-seq database ............................: 2
Genes database ...............................: 6
Auxiliary data storage .......................: 2
Workflow configurations ......................: 4
```

If that is the case, you are golden.

## Note for tutorial developers and freeloaders

This section is **not for you**, *UNLESS* (1) you are interested in developing this tutorial further, or (2) you are interested in following it through with a mock dataset rather than your real-world data. If neither of them matches your case, please skip to the [General setup](#general-setup) section **without running any of the commands below**.

If you *are* a tutorial developer, or you would like to follow the tutorial with a mock dataset, you can set up an environment quickly so to test various aspects of this tutorial with mock data from the anvi'o codebase:

``` bash
export project="MY_PROJECT"

# create necessary directories under /tmp
mkdir /tmp/$project /tmp/$project/GENOMES /tmp/$project/METAGENOMES
cd /tmp/$project

# copy mock genomes and uncompress them
cp ~/github/anvio/anvio/tests/sandbox/workflows/metagenomics/three_samples_example/G0*gz GENOMES/
gzip -d GENOMES/*gz
mv GENOMES/G01-contigs.fa GENOMES/G01.fa
mv GENOMES/G02-contigs.fa GENOMES/G02.fa

# copy mock metagenomes
cp ~/github/anvio/anvio/tests/sandbox/workflows/metagenomics/three_samples_example/sample-0*-R*gz METAGENOMES/
```

Tutorial developers should jump to the subsection "Fix deflines".

## General setup

First, let’s come up with a project name, create a directory for it, and assign it to a variable so we can use it throughout the tutorial. This is nothing more than creating a work environment. As an example, I will give this extremely creative name for my project:

``` bash
export project="MY_PROJECT"
```

But please don't let this stop you from finding a more appropriate name for yours (but make sure it doesn't have any spaces or funny characters). You can set a different project name now, and still follow the rest of the tutorial seamlessly.

After running the line above let's decide for a location on your disk that is appropriate to store all the relevant files we will generate for this project. For now I will assume it your home directory, but feel free to change `$HOME` with any other path in the command below:

```bash
export workdir="$HOME"
```

Next, we will go to that 'work' directory, and create a new directory for the project in which all the files related to this project can live,

``` bash
cd $workdir
mkdir $project
```

and simply go into it to follow the next steps of the tutorial:

``` bash
cd $project
```

Good. We’re ready to start.

## Setting up reference sequences

By reference sequences, I mean one or more genomes you are interested in characterizing across metagenomes.

One could recruit reads for each genome separately, but there are many advantages to do competitive read recruitment. For this, you need to put all your genomes into a single FASTA file. But before doing that, you will need to take care of some minor business.

### You have FASTA files: Check file names and extensions

We assume you have your genomes as FASTA files. But there are two things that you should ensure so this tutorial works for you smoothly:

* Each FASTA file ends with the extension `.fa` (not `.fasta` or `.fna`).
* Each FASTA file has a pretty name (such as `SAR11_HIMB83.fa` or `Prochlorococcus_MIT_9311.fa` or `B_fragilis_9343.fa`), so you have an idea what they are, because these names will become identifiers of these genomes in output files and so on. Make sure they don't have any spaces or special characters, they are not too long, or complete gibberish. Unless, of course, ugly names are exactly what you want.

If at this point all you have are FASTA files that comply with the extension requirement mentioned above, you can jump to the subsection "Fix deflines".

### You have contigs-db file: Export FASTA files

This step is only relevant if you have your genomes in {% include ARTIFACT name="contigs-db" %} form. In which case you can export contig sequences stored in a {% include ARTIFACT name="contigs-db" %} using the program {% include PROGRAM name="anvi-export-contigs" %} the following way:

``` bash
anvi-export-contigs -c MY_GENOME.db \
                    -o MY_GENOME.fa
```

If you have multiple {% include ARTIFACT name="contigs-db" %} files, you can build a `for` loop to do the same:

``` bash
for i in *db
do
    anvi-export-contigs -c $i.db -o $i.fa
done
```

If you have {% include ARTIFACT name="contigs-db" %} files that end with suffixes that you want to get rid of to keep your FASTA file names pretty as you should (i.e., your contigs-db is `MY_GENOME-contigs.db`, but you want your FASTA file to look like `MY_GENOME.fa`), you can use a slightly more involved `for` loop, like this one:

``` bash
for i in *db
do
    genome_name=`echo $i | sed 's/-contigs.db//g'`
    anvi-export-contigs -c $genome_name-contigs.db \
                        -o $genome_name.fa
done
```

### Fix deflines

If you are here, the rest of this text assumes that all your genomes are in individual {% include ARTIFACT name="fasta" %} files.

To make things simpler, please first create a directory called `GENOMES` in your work directory:

``` bash
mkdir -p GENOMES
```

And move all the {% include ARTIFACT name="fasta" %} files for your individual genomes into this directory.

To make sure the rest of the tutorial works well for you, please make sure that

* Every single FASTA file you wish to work with is now in the `GENOMES` directory, and
* There is nothing else in the `GENOMES` directory other than the FASTA files of genomes you wish to work with.

If that is the case, go into that directory, as we will run the next few steps in there:

``` bash
cd GENOMES
```

OK. First, we want to rename all sequence names in all FASTA files in such a way that we can later determine which sequence belongs to which genome accurately even after concatenating all sequences into a single FASTA file.

The best way to do it is to add a unique prefix to all sequences that belong to the same genome. And indeed the best prefix is the name of the genome. It is quite straightforward to do with the anvi'o program {% include PROGRAM name="anvi-script-reformat-fasta" %} using the flag `--prefix`. This is how the command for this would look like for a single genome:

``` bash
anvi-script-reformat-fasta -c MY_GENOME.fa \
                            --simplify-names \
                            --prefix MY_GENOME \
                            --report-file MY_GENOME_rename_report.txt \
                            --overwrite-input
```

But since we want to do this for all our genomes, we need a `for` loop. If you run the following code in your terminal, it will do the trick:

{:.warning}
Please note that using the flag `--overwrite-input` will overwrite the input file while generating a report on how sequences were renamed for bookkeeping. If you are unsure about this, use the `--output-file` parameter to generate a copy of each genome with proper sequence names.

``` bash
for i in *fa
do
    genome_name=`echo $i | awk 'BEGIN{FS=".fa"}{print $1}'`
    anvi-script-reformat-fasta $genome_name.fa \
                               --simplify-names \
                               --prefix $genome_name \
                               --report-file $genome_name_RENAME.txt \
                               --overwrite-input
done
```

If you are here, it means every single genome you have now contains sequences, names of which include the genome name. Before moving on, you can take a look at the names of the first 10 sequences in one of your genomes using this:

``` bash
grep '>' $genome_name.fa | head -n 10
```

If everything looks in order, the next step is to generate {% include ARTIFACT name="collection-txt" %} file. For this step, you can leave the `GENOMES` directory, and go one directory up, into the general directory of your project:

``` bash
cd ..
```

## Generate collections-txt

This is a critical step that will give us a special file, which is called {% include ARTIFACT name="collection-txt" %} in the anvi’o universe (please click the link to see its structure).

This file is going to play a critical role when we are done with read recruitment and want to reconnect individual sequences back to the genomes to which they belong, and it will serve a means to keep track of every single contig and will allow us to import that information into the final merged {% include ARTIFACT name="profile-db" %} we will get at the end of all.

Even though we are going to use {% include ARTIFACT name="collection-txt" %} at the VERY end of our workflow, this is a good time to create it, so generating it now is a good idea.

Copy-pasting the lengthy `for` loop below into your terminal will generate a proper {% include ARTIFACT name="collection-txt" %} file for you. But it assumes that you are in your project directory, and all the genomes you are interested in working is in the `GENOMES` directory, so let's make sure it is the case. If you type the following command in your terminal, and you see a similar output,

```bash
ls GENOMES

G01.fa G02.fa
```

then you are golden to run this now:

``` bash
for i in GENOMES/*fa
do
    genome_name=`basename $i | awk 'BEGIN{FS=".fa"}{print $1}'`
    for c in `grep '>' GENOMES/$genome_name.fa`
    do
        echo -e "${c:1}\t$genome_name"
    done
done > collection.txt
```

When it is done you will not see an output message from it, but there should be a new file in your work directory called {% include ARTIFACT name="collection-txt" %}. Before moving on, take a look at the first and last few lines of it to make sure everything looks OK:

``` bash
head -n 10 collection.txt
tail -n 10 collection.txt
```

## Concatenate genomes into a single FASTA file

Since we have renamed all the contigs properly, and created a {% include ARTIFACT name="collection-txt" %} file to remember the origins of each contig, you are ready to concatenate all your genomes into a single FASTA file for a competitive read recruitment:

``` bash
cat GENOMES/*.fa > $project.fa
```

This will generate a new FASTA file in your work directory that contains all of your genomes in it. We are almost there.

## Generate a fasta-txt

The final step is to generate a special file called {% include ARTIFACT name="fasta-txt" %} (please click the link to see its format). The real purpose of this file is to keep track of all the reference FASTA files, their names and locations for you in large workflows.

Since you have a single FASTA file for all your genomes at this point, you can generate a {% include ARTIFACT name="samples-txt" %} with a single entry by running this command:

``` bash
echo -e "name\tpath\n$project\t`pwd`/$project.fa" > fasta.txt
```

Make sure everything looks alright by taking a look at the contents of fasta.txt:

``` bash
cat fasta.txt
```

It should generate an output that somewhat looks like this (wiht the exception of the `XXX` part, of course, which will be a path on your computer):

| name | path |
| -------- | -------- |
| GENOMES-IN-METAGENOMES     | /XXX/GENOMES-IN-METAGENOMES/GENOMES-IN-METAGENOMES.fa     |

If you are here, congratulations! You are done with your genomes. Next, we will take care of your metagenomes.

# Setting up metagenomes

Next, **we need to decide which metagenomes to recruit reads from**. If you are here, you probably already know which metagenomes to use, so hopefully this will be very simple.

As we did with your genomes through the {% include ARTIFACT name="fasta-txt" %}, we will have to tell anvi'o where your metagenomes are. And you guessed right: there is a special file format for this, which you need to generate.

We call this file format {% include ARTIFACT name="samples-txt" %} (please click the link to see its format).

Please take a look at the file format, and create a file named `samples.txt` in your work directory for your metagenomes (but don't use the optional *group* column in your file as it is irrelevant in this particular case).

There are many ways to create such a file, I know many people like to use EXCEL and export their table as a TAB-delimited file. Any method will work, but once your `samples.txt` is ready, you will have to **make sure it has the right number of columns**. For instance, when you run this command, you should see a single number in the output which must be '3':

``` bash
awk 'BEGIN{FS="\t"}{print NF}' samples.txt | sort | uniq
```

It would help to identify problems early on if you also make sure that none of the files are missing:

``` bash
all_file_paths=`awk 'BEGIN{FS="\t"}{if(NR>1){ print $2 "\n" $3}}' samples.txt`
for file_path in $all_file_paths
do
    if [ ! -f $file_path ]
    then
        echo "missing file: $i"
    fi
done
```

If you copy-paste the entirety of this command into your terminal, and get no output from it when you press ENTER, it means you’re golden. If there is a missing file, it means the 'path' you have defined in your {% include ARTIFACT name="samples-txt" %} does not resolve to any file and needs to be updated. Please do that first, and make sure the command above works before you move on to the next steps.

Also please keep in mind that the sample names you set in {% include ARTIFACT name="samples-txt" %} should only contain letters and the underscore character `_` (e.g, no spaces, or other characters such as `!`, or dashes `-`). Oh, and sample names cannot start with a digit. If you screw this up it is not that important, though. Anvi'o will complain about it later anyway.

## Setting up the metagenomic read recruitment job

If you are here, it means in your work directory you have a file called `samples.txt` that points to your metagenomes and a file called `fasta.txt` that points to your concatenated genomes. It is now time to do the actual read recruitment.

There are multiple ways to do it. For instance, you could do everything manually like our ancestors. You now have all the files necessary to do it using steps that are explained here:

https://merenlab.org/tutorials/read-recruitment/

But a more common practice for large-scale read recruitment jobs is to automate individual steps using a workflow manager. It sounds complicated, but actually it is not.

To automate individual steps of read recruitment anvi’o uses ['omics workflows built using snakemake](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/) and it already has a complete workflow for metagenomics (which takes care of read recruitment among other things) that can work with the two key files you have already generated: `samples.txt`, and `fasta.txt`.

The next few steps will explain how to set up your job using those files.

### Setting up the workflow config file

If you were to take a look at our detailed tutorial on anvi’o snakemake workflows, you will immediately see that each workflow requires a configuration file. Here we will quickly set one up for you.

The best strategy is to generate a default {% include ARTIFACT name="workflow-config" %}, and work on it to add details. To generate a default configuration file, you can run {% include PROGRAM name="anvi-run-workflow" %}:

``` bash
anvi-run-workflow -w metagenomics \
                  --get-default-config config.json
```

Which should give you a file called ‘config.json’. You can open this file in a text editor and take a look at it, since we will have to make a few adjustments to it before we can start running our workflow. **Don't let it intimidate you**. It is just a JSON formatted flat text file. It is very verbose, but most of the information there is irrelevant to you at this stage and we will ignore over 98% of this file.

If you were to search for the words `fasta_txt` and `samples_txt` in this configuration file using your text editor, or using your terminal the following way,

``` bash
grep 'samples_txt\|fasta.txt' config.json
```

you will notice that the default names for these variables are already set, and those file names already match to the files we have generated in the previous steps:

``` json
    "fasta_txt": "fasta.txt",
    "samples_txt": "samples.txt",
```

So things already look good here.

But there are a few places where we will have to adjust things.

First, you need to open `config.json` in a text editor (by either running a program like `nano` in the terminal, or by downloading the file on your computer to open it in a basic text editor program), and change this line:

``` json
 "references_mode": "",
```

to this:

``` json
 "references_mode": true,
```

This change will tell the anvi'o metagenomics workflow that we do not want to 'assemble' all the metagenomes first to generate our reference sequences as we actually have them ready for read recruitment. So it is kind of important.

Next, you need to change this line,

``` json
    "anvi_script_reformat_fasta": {
        "run": true,
```

to this:

``` json
    "anvi_script_reformat_fasta": {
        "run": false,
```

This change will ensure that our contig names are not changed by the workflow, so our {% include ARTIFACT name="collection-txt" %} continues to be accurate. So it is quite important as if we don't do this nothing downstream will work.

While these two changes are the most essential change at this stage that we have to have, there may be other things you may like to change in this file.

The file and the rules in it are described extensively in [this tutorial](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/), but just to give a few very quick pointers, for instance, if you *do not* need anvi'o to quality-filter reads in your metagenomes (or if they are already quality-filtered), you can change this line,

``` json
    "iu_filter_quality_minoche": {
        "run": true,
```

to this one:

``` json
    "iu_filter_quality_minoche": {
        "run": false,
```

to make sure the quality filtering step is not run.

Or if you want to increase or decrease number of threads you wish to use for read recruitment you can increase or decrease the numbers for threads in various rules that look relevant:

``` json
"threads": 7,
```

If you will run the anvi'o workflow on an HPC with slurm (we will get to this later), then you will need to change this line,

```json
 "max_threads": "",
```

To something like this:

```json
 "max_threads": 100,
```

where the number you put in here should match the number of CPUs you want slurm to use for your submission.

So on and so on.

But these are little performance tweaks you can always go back to. If you don't see anything that is relevant, you can just leave everything else as is and save your changes to `config.json` (and if you have downloaded it from your server, upload back the edited version into your work directory). Now you are ready to see if things look promising.

### Sanity-checking the workflow

If you are here, it means in your work directory you have a file called `samples.txt` that points to your metagenomes, a file called `fasta.txt` that points to your concatenated genomes, and a file called `config.json` that you have edited to pass to the program {% include PROGRAM name="anvi-run-workflow" %}. It is now time to see if everything looks OK to start the read recruitment analysis.

For that, we will ask snakemake to generate the blueprint of what would happen if we *were to* run the workflow, and take a look at the output file:

``` bash
anvi-run-workflow -w metagenomics \
                  -c config.json \
                  --save-workflow-graph
```

Running this command will result in a new file called `workflow.pdf`, which you should view and see if it makes sense.

If there is something wrong with your workflow, you will get an error and will have to fix it before proceeding.

### Running the workflow

If you are here, it means you are ready to run your workflow!

There are multiple ways to do this. For instance, you can literally run this, and follow all the output messages:

``` bash
anvi-run-workflow -c config.json \
                  -w metagenomics
```

But while you can do this on your own computer or on a powerful computer node, you can't do this on a high-performance computing system, which requires a bit more attention.

If you are connecting to a cluster at your university, then, you are probably on the 'head node', which is not suitable to run compute-heavy tasks like this one, but it is to submit jobs to the cluster.

If you are here, it is likely you already know exactly how to do this since you have been working with your cluster for a while. If you don't, it will take some research. But once you know exactly how to do it, which may require you to get some help from your system administrator or local bioinformatics guru, you will be set for life.

For instance, if I were to run my workflow on a server that uses [slurm](https://slurm.schedmd.com/overview.html), it would have looked like this:


``` bash
anvi-run-workflow -w metagenomics \
                  -c config.json \
                  --additional-params \
                      --cluster \
                          'sbatch \
                              --job-name=MY_PROJECT-{rule} \
                              --output={log} \
                              --error={log} \
                              --ntasks-per-node={threads} \
                              --mem-per-cpu=10000' \
                      --jobs 20 \
                      --resource nodes=20 \
                      --latency-wait 100 \
                      --rerun-incomplete
```

{:.notice}
Please take a look at the section on [how to run anvi'o workflows on a cluster](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#running-workflows-on-a-cluster) to have an idea about the parameters here.

Where parameter `--jobs` describes the maximum number of jobs you are willing to run simultaneously, and the parameter `--resource` describes the maximum number of total CPUs that can be used by all of your jobs. If you go to your system administrator with this command, they can help you determine how the part that comes right after `--cluster` should look like, which, like everything else after the parameter `--additional-params` is directly passed to snakemake.

There is one thing to keep in mind: once you start running this command on a terminal, you can't simply close that window and move on with your life until your run is complete. So in an ideal world, you would run this command that clusterizes your individual runs as a separate command that is sent to the cluster itself (in this part of the tutorial playing the soundtrack for Inception may be appropriate).

What would be the best way to do it on your cluster system will depend on how you run your jobs on your cluster, but just to give you an idea, I will share with you what I do on our cluster using Evan's nice wrapper [clusterize](https://github.com/merenlab/clusterize):

``` bash
clusterize "anvi-run-workflow -w metagenomics \
                  -c config.json \
                  --additional-params \
                      --cluster \
                          'sbatch \
                              --job-name=MY-PROJECT-{rule} \
                              --output={log} \
                              --error={log} \
                              --partition=meren \
                              --ntasks-per-node={threads} \
                              --mem-per-cpu=20000' \
                      --jobs 20 \
                      --resource nodes=20 \
                      --latency-wait 100 \
                      --rerun-incomplete" \
            --dont-add-random-string-to-job-name-and-outputs \
            --job-name MY-PROJECT \
            --partition meren \
            --mail-user your.email@address.com
```

To make things simpler for yourself, you could copy this command into a text editor, edit it to make sure it matches your needs, save it as `00_RUN.sh` in your work directory, and run it like this:

```bash
bash 00_RUN.sh
```

It would simply submit your job to your cluster, and send you an email once everything is done, or once the job fails for some reason (in which case, you would look into `00_LOGS` directory that you would find in your work directory).

## Making sense of results

If you are here, it means you managed to go through all the nightmarish steps of running your workflow! And you see something like this in your work directory:

``` bash
ls
00_LOGS          01_QC            03_CONTIGS       04_MAPPING       05_ANVIO_PROFILE
06_MERGED        collection.txt   config.json      fasta.txt        GENOMES
METAGENOMES      MY_PROJECT.fa    samples.txt      workflow.dot     workflow.pdf
```

If that is the case, congratulations! The most critical files in this output are the following three:

* `03_CONTIGS/${project}-contigs.db` -- the anvi'o {% include ARTIFACT name="contigs-db" %} file that contains all the contigs from all your genomes, nicely annotated.
* `06_MERGED/${project}/PROFILE.db` -- the anvi'o merged {% include ARTIFACT name="profile-db" %} file that contains all the read recruitment information for your contigs across your metagenomes, nicely profiled along with all the bells and whistles including single-nucleotide profiling, etc.
* `06_MERGED/${project}/AUXILIARY-DATA.db` -- the anvi'o auxiliary-data-db file that contains critical information for visualization purposes.

For instance, now you should be able to take a peek into your {% include ARTIFACT name="contigs-db" %} and {% include ARTIFACT name="profile-db" %} files using the program {% include PROGRAM name="anvi-db-info" %} and see meaningful outputs:

``` bash
anvi-db-info 03_CONTIGS/${project}-contigs.db
```

which should give you an output like this:

```
DB Info (no touch)
===============================================
Database Path ................................: 03_CONTIGS/MY_PROJECT-contigs.db
description ..................................: [Not found, but it's OK]
db_type ......................................: contigs (variant: unknown)
version ......................................: 24


DB Info (no touch also)
===============================================
project_name .................................: MY_PROJECT
contigs_db_hash ..............................: hash8ed4e4e8
split_length .................................: 20000
kmer_size ....................................: 4
num_contigs ..................................: 73
total_length .................................: 337070
num_splits ...................................: 73
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
creation_date ................................: 1761210119.04551
scg_taxonomy_was_run .........................: 1
scg_taxonomy_database_version ................: GTDB: v214.1; Anvi'o: v1
gene_function_sources ........................: COG24_CATEGORY,COG24_FUNCTION,Transfer_RNAs,COG24_PATHWAY

* Please remember that it is never a good idea to change these values. But in some
  cases it may be absolutely necessary to update something here, and a
  programmer may ask you to run this program and do it. But even then, you
  should be extremely careful.


AVAILABLE GENE CALLERS
===============================================
* 'pyrodigal-gv' (338 gene calls)
* 'Transfer_RNAs' (2 gene calls)


AVAILABLE FUNCTIONAL ANNOTATION SOURCES
===============================================
* COG24_CATEGORY (273 annotations)
* COG24_FUNCTION (273 annotations)
* COG24_PATHWAY (62 annotations)
* Transfer_RNAs (2 annotations)


AVAILABLE HMM SOURCES
===============================================
* 'Archaea_76' (76 models with 0 hits)
* 'Bacteria_71' (71 models with 2 hits)
* 'Protista_83' (83 models with 0 hits)
* 'Ribosomal_RNA_12S' (1 model with 0 hits)
* 'Ribosomal_RNA_16S' (3 models with 0 hits)
* 'Ribosomal_RNA_18S' (1 model with 0 hits)
* 'Ribosomal_RNA_23S' (2 models with 0 hits)
* 'Ribosomal_RNA_28S' (1 model with 0 hits)
* 'Ribosomal_RNA_5S' (5 models with 0 hits)
* 'Transfer_RNAs' (61 models with 2 hits)
```

Or the following,

``` bash
anvi-db-info 06_MERGED/${project}/PROFILE.db
```

which should give you an output like this:

```
DB Info (no touch)
===============================================
Database Path ................................: 06_MERGED/MY_PROJECT/PROFILE.db
Description ..................................: _No description is provided_
db_type ......................................: profile (variant: None)
version ......................................: 40


DB Info (no touch also)
===============================================
anvio ........................................: 8-dev
sample_id ....................................: MY_PROJECT
samples ......................................: sample_01, sample_02, sample_03
fetch_filter .................................: None, None, None
min_percent_identity .........................: 0.0, 0.0, 0.0
total_reads_mapped ...........................: 16786, 51046, 97885
merged .......................................: 1
blank ........................................: 0
default_view .................................: mean_coverage
min_contig_length ............................: 1000
max_contig_length ............................: 9223372036854775807
SNVs_profiled ................................: 1
SCVs_profiled ................................: 0
INDELs_profiled ..............................: 1
num_contigs ..................................: 73
num_splits ...................................: 73
total_length .................................: 337070
min_coverage_for_variability .................: 10
report_variability_full ......................: 0
contigs_db_hash ..............................: hash8ed4e4e8
creation_date ................................: 1761210166.11912
default_item_order ...........................: tnf-cov:euclidean:ward
available_item_orders ........................: tnf:euclidean:ward,tnf-cov:euclidean:ward,cov:euclidean:ward
items_ordered ................................: 1
```

What we have here is all the information about all your contigs (in contigs-db) across all your metagenomes (in merged-profile-db). This already gives you access to the entire set of tools in the anvi'o ecosystem to play with. But what we don't have information for is your genomes. And that is what we will recover first.

## Importing the collection

When you run the following command, you will import all your genomes into the merged {% include ARTIFACT name="profile-db" %} using {% include PROGRAM name="anvi-import-collection" %} as a {% include ARTIFACT name="collection" %}, and re-establish the link between individual contigs and genomes:

``` bash
anvi-import-collection collection.txt \
                       -p 06_MERGED/${project}/PROFILE.db \
                       -c 03_CONTIGS/${project}-contigs.db \
                       -C GENOMES \
                       --contigs-mode
```

where `-C` defines the name of our collection (you can put anything here, I just put `GENOMES` because I am that creative), and `--contigs-mode` tells anvi'o that the item names in the {% include ARTIFACT name="collection-txt" %} file is in contigs form, and not splits form (which corresponds to the internal naming format in anvi'o).

Once you ran that command, you should get an output that is structurally similar to this:

```
Contig/split name conversion .................: 73 contig names converted into 73 split names.
Item names in input ..........................: 73
Num bins in input ............................: 2
Items in profile database ....................: 73
Item names shared between input and db .......: 73
Collections ..................................: The collection 'GENOMES' that describes 73 items in 2 bins was successfully added to the to the database at '06_MERGED/${project}/PROFILE.db'. Here is a full list of the bin names in this collection: G01, G02.
```

But hopefully you will have more genomes and more contigs :)

Now you can run {% include PROGRAM name="anvi-show-collections-and-bins" %} and should be able to see your {% include ARTIFACT name="collection" %}:

```bash
anvi-show-collections-and-bins -p 06_MERGED/${project}/PROFILE.db

Collection: "GENOMES"
===============================================
Collection ID ................................: GENOMES
Number of bins ...............................: 2
Number of splits described ...................: 73
Number of contigs described ..................: 73
Bin names ....................................: G01, G02
```

If you are here, it means you successfully complete a competitive read recruitment, profiled all the data, and anvi'o knows about your genomes. What comes next is the fun part, and where your science starts.

## Summarizing data

Since you have the key anvi'o database artifacts for your genomes across metagenomes, the questions you can ask them within the anvi'o ecosystem is endless. But first, let's assume you wish to get a sense of the summary statistics for your genomes. Such as their coverage across samples, etc.

To get a summary of your genomes, you can run the program {% include PROGRAM name="anvi-summarize" %} the following way:

```bash
anvi-summarize -p 06_MERGED/${project}/PROFILE.db \
               -c 03_CONTIGS/${project}-contigs.db \
               -C GENOMES \
               -o SUMMARY
```

And explore the output using your web browser.

## Final words

By completing this tutorial, you have successfully carried out a competitive metagenomic read recruitment analysis, generating a robust foundation to explore the relative abundance, biogeographical distribution, and/or genetic structure of environmental populations for which you had genomes. You now have all the key anvi’o artifacts needed to visualize, quantify, and interpret ecological or evolutionary patterns in your data using [all the anvi'o programs](/help). Please remember that the strength of anvi'o comes not only from its its flexibility but also its community: if you get stuck or want to push this analysis further, the anvi'o documentation and anvi'o {% include discord-button.html %} are excellent places to continue learning and connecting.

Thank you for your time and interest, and good luck with your analyses.

---

<div class="extra-info" markdown="1">

<span class="extra-info-header">Do you want more from this tutorial?</span>

Yes? That is the spirit! :)

Luckily for you, {% include person/display_mini_single.html github="meren" %} is more than willing to expand this tutorial so it can address additional questions, so please feel free to write a comment below or reach out to him directly :)

</div>
