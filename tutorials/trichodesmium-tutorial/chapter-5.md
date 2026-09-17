---
layout: blog
title: "An anvi'o tutorial with Trichodesmium genomes (Chapter 5)"
modified: 2026-09-15
excerpt: "The Read Recruitment Chapter"
categories: [anvio]
authors: [ivagljiva, FlorianTrigodet]
tags: [metagenomics, hands-on, beginner]
comments: true
---

<div class="extra-info" markdown="1">
<span class="extra-info-header">About this page</span>
This webpage is one chapter of a much larger effort to cover multiple aspects of anvi'o in the same tutorial. If you need more context, please visit [the main page of the tutorial]({{ site.url }}/tutorials/trichodesmium-tutorial/), where you will find information about the dataset we are working with and the commands to download the tutorial datapack.
 </div>

## Quick Navigation

- [Tutorial introduction (main page)]({{ site.url }}/tutorials/trichodesmium-tutorial/)
- [Chapter 1: Genomics]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-1)
- [Chapter 2: Pangenomics]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-2)
- [Chapter 3: Phylogenomics]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-3)
- [Chapter 4: Metabolism]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-4)
- [Chapter 5: Read Recruitment]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-5) ← _you are here_

## Read Recruitment

<details markdown="1"><summary>Show/Hide Starting the tutorial at this section? Click here for data preparation steps. </summary>

If you haven't run previous sections of this tutorial, then you should follow these steps to setup the files that we will use going forward.

```bash
cp 00_DATA/contigs/*-contigs.db .
anvi-script-gen-genomes-file --input-dir . -o external-genomes.txt
```

</details>


TODO INTRO

We will learn how to do the following tasks that _don't involve anvi'o programs_:
- mapping metagenomic reads to a reference using `bowtie2` (REF)
- processing the mapping output files using `samtools` (REF)
- competitive vs non-competitive read recruitment

These 3rd-party software are typically installed within your anvi'o conda environment, so you should have access to them.

In addition, we will learn how to process the read recruitment results _within anvi'o_:
- computing coverage, detection, and single-nucleotide variants (SNVs)
- visualizing read recruitment data in the interactive interface

### Supplementing the data pack

TODO get the metagenome and mapping files (size ~1.3G).

```bash
cd 00_DATA
# TODO download and unpack mapping dir
cd ..
```

If you run `ls` to see the contents of the data you just downloaded, you should see the following:
```
#TODO
```

Note that these are publicly-available metagenomes (from the Tara Oceans cruise) that have been subsetted to make them small enough to work with on a typical laptop.

To keep things organized, we will generate another sub-directory to work in:
```bash
mkdir -p 03_READ_RECRUITMENT && cd 03_READ_RECRUITMENT
```

### Mapping one metagenome to a single genome

We will start with the simplest case: one metagenome sample mapped to one genome. Suppose we want to know how much coverage our Trichodesmium sp. MAG gets in a metagenome from the Red Sea.

Read recruitment is done from FASTQ files (of reads) to FASTA files (of reference sequences, usually contigs). If you worked through Chapter 1, you already have a FASTA file for this genome that we could use as the reference. However, you might remember that we reformatted the contig names before making our contigs database. It is very important to use a FASTA file in which the contig names match those within the contigs-db, so that anvi'o later knows how to connect the read recruitment results to the right contig. Therefore, just to be on the safe side, we are actually going to export the contig sequences directly from the contigs database to ensure we are using a FASTA file with the right contig names:

```bash
anvi-export-contigs -c ../Trichodesmium_sp-contigs.db -o Trichodesmium_sp.fa
```

First we build an index so that the mapping can be faster.
```bash
bowtie2-build Trichodesmium_sp.fa Trichodesmium_sp
```

Notice what was created in your working directory.

Then, we can map our metagenome sample of interest. This particular sample was taken from the Red Sea -- it is not the exact sample from which our downloaded MAG was reconstructed, but should hopefully contain a similar-enough population that our MAG sequences can recruit reads.
```bash
bowtie2 -x Trichodesmium_sp \
        -1 ../00_DATA/mapping/SAMEA2657055_partial_R1.fastq.gz \
        -2 ../00_DATA/mapping/SAMEA2657055_partial_R2.fastq.gz \
        -S SAMEA2657055-Trichodesmium_sp.sam
```

We've named the output file with the metagenome's BioSample accession combined with the genome name because later, we'll be mapping the same sample to different references.

Suggestion: take a look at the SAM file using `less` to understand what sort of information it includes: contig name and start/stop positions of mapped reads, flags, CIGAR strings, etc.

SAM files take up a lot of space, so we want to convert them to smaller binary files (BAM). To further save on space, we can exclude unmapped reads from the BAM file. Then, to make the BAM file faster to process, we (1) sort and (2) index it. All this is done with `samtools`.
```bash
samtools view -F 4 \
              -bS SAMEA2657055-Trichodesmium_sp.sam \
              -o SAMEA2657055-Trichodesmium_sp-RAW.bam

samtools sort SAMEA2657055-Trichodesmium_sp-RAW.bam -o SAMEA2657055-Trichodesmium_sp.bam
samtools index SAMEA2657055-Trichodesmium_sp.bam
```

If all of that was successful, you should see the sorted BAM file `SAMEA2657055-Trichodesmium_sp.bam` and its corresponding index (`.bai`) file in your working directory. Then you are free to remove the original SAM file and the unsorted BAM:

```bash
rm SAMEA2657055-Trichodesmium_sp.sam SAMEA2657055-Trichodesmium_sp-RAW.bam
```

Now what? Knowing which reads map where is one thing, but what we are really after are read recruitment statistics like coverage and detection. In anvi'o, we call the calculation of these metrics 'profiling', and there are a couple of programs to do it. `anvi-profile-blitz` gives you really basic read recruitment statistics in a tab-delimited text file. It's very fast and a good option if you are working with a very large number of samples. Meanwhile, `anvi-profile` not only computes coverage and detection, but also identifies single-nucleotide variants, and stores this information in a profile database that can later be used for visualization in the anvi'o interactive interface. As it is not so interesting to visualize read recruitment data from a single metagenome, we'll start with the former option:

```bash
anvi-profile-blitz -c ../Trichodesmium_sp-contigs.db \
				   -o Tricho_sp_contig_stats.txt \
				   SAMEA2657055-Trichodesmium_sp.bam
```

If you look at the output, you will see that the read recruitment metrics have been computed on a per-contig basis.

|**`contig`**|**`sample`**|**`length`**|**`gc_content`**|**`num_mapped_reads`**|**`detection`**|**`mean_cov`**|**`q2q3_cov`**|**`median_cov`**|**`min_cov`**|**`max_cov`**|**`std_cov`**|**`num_windows`**|**`prop_windows_covered`**|**`prop_cov_within_foldrange`**|**`dis_cov`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp_MAG_R01_000000000001|SAMEA2657055-Trichodesmium_sp|40296|0.349|184|0.2439|0.4582|0.0|0.0|0|9|1.065|101|0.5446|0.8079|0.6762|
|Trichodesmium_sp_MAG_R01_000000000002|SAMEA2657055-Trichodesmium_sp|7609|0.306|18|0.1001|0.2292|0.0|0.0|0|9|0.956|26|0.2308|0.748|0.4894|
|Trichodesmium_sp_MAG_R01_000000000003|SAMEA2657055-Trichodesmium_sp|5360|0.343|7|0.06007|0.1312|0.0|0.0|0|5|0.6213|18|0.1667|0.8975|0.5321|
|Trichodesmium_sp_MAG_R01_000000000004|SAMEA2657055-Trichodesmium_sp|5380|0.346|22|0.1446|0.41|0.0|0.0|0|9|1.351|18|0.2778|0.7866|0.5322|

But if you look at the program help page, you might notice that you could also elect to compute these metrics on a per-gene level or a per-genome level. Let's do it again to get genome-level stats. We will need to make a collection-txt file to tell anvi'o that all contigs in the database belong to our _Trichodesmium sp._ genome:

```bash
# extract the contig names from the FASTA file (removing the initial '>' character)
grep '>' Trichodesmium_sp.fa | sed 's/>//g' > contigs
# extract the genome name from each contig name (i.e., 'Trichodesmium_sp_MAG_R01_000000000001' becomes 'Trichodesmium_sp_MAG_R01')
cut -d '_' -f 1-4 contigs > genome
# put everything together into a 2-column collection-txt file
paste contigs genome > Trichodesmium_sp_collection.txt
# clean up
rm contigs genome
```

Then we can generate genome-level stats by adding this collection file to our command:

```bash
anvi-profile-blitz -c ../Trichodesmium_sp-contigs.db \
				   -C Trichodesmium_sp_collection.txt \
				   -o Tricho_sp_genome_stats.txt \
				   SAMEA2657055-Trichodesmium_sp.bam
```

Now, because we are working with a single genome and a single sample, we get a single line of data in our output file:

|**`bin`**|**`sample`**|**`length`**|**`gc_content`**|**`num_mapped_reads`**|**`detection`**|**`mean_cov`**|**`q2q3_cov`**|**`median_cov`**|**`min_cov`**|**`max_cov`**|**`std_cov`**|**`num_windows`**|**`prop_windows_covered`**|**`prop_cov_within_foldrange`**|**`dis_cov`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp_MAG_R01|SAMEA2657055-Trichodesmium_sp|6640707|0.34|34161|0.2356|0.5147|0.0|0.0|0|86|1.815|6641|0.7383|0.7788|0.7585|

Plenty of reads have mapped to our genome, but only ~24% of the genome is detected in this sample and the overall mean coverage is rather low. In fact, if you look at the coverage values within the interquartile range (in anvi'o this is called 'Q2Q3 coverage', to indicate that we take the mean of the coverage values within quarter 2 and quarter 3 of the distribution of all per-nucleotide coverage values. This is a very bad and not statistician-friendly name, we know.), they have a mean of 0 (`q2q3_cov`). However, that coverage seems to be spread out across the entire genome (`prop_windows_covered`: ~75% of 1-kb windows have at least some reads mapping to them), and the coverage depth appears roughly stable (`prop_cov_within_foldrange`: ~78% of the covered bases have a coverage depth within 0.5x to 2x of the median non-zero coverage depth). Taking all that evidence together, it looks like this Red Sea metagenome contains a population that is similar to our _Trichodesmium sp._ MAG, but in rather low abundance.

Before we move on, let's use `anvi-profile` to generate a profile database for this BAM file. We won't do anything with it right now, but it will come in handy later when we want to visualize this data:

```bash
anvi-profile -i SAMEA2657055-Trichodesmium_sp.bam \
             -c ../Trichodesmium_sp-contigs.db \
             -o SAMEA2657055-Trichodesmium_sp-PROFILE
```

If you look in the output directory `SAMEA2657055-Trichodesmium_sp-PROFILE/`, you should see a profile database, an auxiliary database, and a log file that recapitulates the terminal output.

### Mapping many metagenomes to a single genome

What if we want to see if this genome is present in multiple oceans? We can repeat the same steps above for our other metagenomes:

```bash
cp ../00_DATA/mapping/samples.txt .
while read sample r1 r2
do
  echo "Working on $sample"
  bowtie2 -x Trichodesmium_sp \
        -1 $r1 \
        -2 $r2 \
        -S ${sample}-Trichodesmium_sp.sam
  samtools view -F 4 \
        -bS ${sample}-Trichodesmium_sp.sam \
        -o ${sample}-Trichodesmium_sp-RAW.bam
  samtools sort ${sample}-Trichodesmium_sp-RAW.bam -o ${sample}-Trichodesmium_sp.bam
  samtools index ${sample}-Trichodesmium_sp.bam
  rm ${sample}-Trichodesmium_sp.sam ${sample}-Trichodesmium_sp-RAW.bam
  anvi-profile -i ${sample}-Trichodesmium_sp.bam \
        -c ../Trichodesmium_sp-contigs.db \
        -o ${sample}-Trichodesmium_sp-PROFILE
done < <(tail -n+3 samples.txt)
```

Note that we skip sample `SAMEA2657055` (which is the 2nd line in the `samples.txt` file, meaning that the `tail -n+3` command excludes it) because we've already mapped it in the previous section. The loop will take some time, but once it is done, you will have a sorted, indexed BAM file and a profile database for each sample that was mapped to this genome.

{:.notice}
Loops are not the most robust way to scale up this analysis. If one of the commands fails, all the downstream commands for the same sample will fail, too. It would also be a pain to figure out what went wrong without dedicated log files for each step, and you would have to manually re-do the steps that didn't work. Luckily, there is a much better solution: workflows. Check out the metagenomics workflow and this tutorial TODO.

We now have 5 profile databases, one for each of the samples we mapped. In order to visualize them in a single display later, we need to merge the data into one profile database:

```bash
anvi-merge *-PROFILE/PROFILE.db \
           -c ../Trichodesmium_sp-contigs.db \
           -o TRICHO_SP_MERGED
```

Note that we can also use `anvi-profile-blitz` on multiple BAM files connected to the same reference. We can overwrite the old output file:
```bash
anvi-profile-blitz -c ../Trichodesmium_sp-contigs.db \
				   -C Trichodesmium_sp_collection.txt \
				   -o Tricho_sp_genome_stats.txt \
				   --force-overwrite \
				   *-Trichodesmium_sp.bam
```

You should now see 5 lines of data in the output file, one per sample that we mapped to the _Trichodesmium sp._ genome.

### Visualizing read recruitment data

### Non-competitive read recruitment (mapping many metagenomes to many genomes in individual FASTA files)

Now we just need to do the same process again, but for other genomes :) We will use one representative from each of the remaining _Trichodesmium_ species:
- MAG_Trichodesmium_thiebautii_Indian
- MAG_Candidatus_Trichodesmium_miru
- MAG_Candidatus_Trichodesmium_nobis

The _T. miru_ and _T. nobis_ MAGs were selected because they are the only representatives in our datapack of those species, and this particular _T. thiebautii_ MAG was chosen because it is the most complete _T. thiebautii_ genome we have (remember the genome completeness table from Chapter 1?).

Let's first extract our three genomes of interest and the paths to their contigs databases from the external genomes file in the parent directory:

```bash
for g in MAG_Trichodesmium_thiebautii_Indian MAG_Candidatus_Trichodesmium_miru MAG_Candidatus_Trichodesmium_nobis
do
  grep $g ../external-genomes.txt >> genomes_to_map.txt
done
```
This file will make the downstream work a bit easier.

To make things a bit cleaner, we'll put the read recruitment and profiling commands into a BASH script.

**Exercise 1: Create a BASH script to do non-competitive read recruitment.**
Your script should loop over the 3 selected representative genomes, extract their contig sequences, make Bowtie indexes out of each one, and then loop over all 5 metagenome samples to run the read mapping and profiling steps. At the end, it should merge all single-sample profiles for the same genome into one profile database. It is your choice if you want to take care of these steps using completely separate loops, or a couple of nested loops. Please name your script `map_noncompetitive.sh` for consistency with later tutorial commands. When you are ready to check your answer, click the Show/Hide box below.

<details markdown="1"><summary>Show/Hide  Answer to Exercise 1: script for non-competitive mapping </summary>

```bash
#!/bin/bash
# a script to run non-competitive read recruitment

INPUT_GENOMES="genomes_to_map.txt"
INPUT_SAMPLES="samples.txt"

while read g db
do
  anvi-export-contigs -c $db -o ${g}.fa
  bowtie2-build ${g}.fa $g
  while read sample r1 r2
  do
    echo "Mapping $sample to $g"
    bowtie2 -x $g -1 $r1 -2 $r2 -S ${sample}-${g}.sam
    samtools view -F 4 -bS ${sample}-${g}.sam -o ${sample}-${g}-RAW.bam
    samtools sort ${sample}-${g}-RAW.bam -o ${sample}-${g}.bam
    samtools index ${sample}-${g}.bam
    rm ${sample}-${g}.sam ${sample}-${g}-RAW.bam
    anvi-profile -i ${sample}-${g}.bam -c $db -o ${sample}-${g}-PROFILE
  done < <(tail -n+2 samples.txt) # notice here that we don't skip the first sample row
  anvi-merge *-${g}-PROFILE/PROFILE.db -c $db -o ${g}_MERGED
done < $INPUT_GENOMES
```

There is a copy of this script in your datapack, and if you want to use it (instead of your own script), you can copy it over to your working directory:

```bash
cp ../00_DATA/mapping/map_noncompetitive.sh .
```

Sounds like way too much for your laptop? A script like this is fairly easy to run as a job on an HPC, in case you have access to one.
</details>

{:.warning}
This script will take quite a while to run, because it processes each genome and each sample sequentially. If you are running this on a laptop, you should be prepared to leave it open and connected to power until it is done. If you are running this on an HPC, please make sure you are running it on a compute node and not a head node (you may need to send the command to your HPC's job scheduler).

To run the script and direct all its output (including errors) into a log file:
```bash
./map_noncompetitive.sh > noncompetitive.log 2>&1
```
If you are short on time (or computational resources) and you prefer not to run this script by yourself, you can access the final merged profiles saved in the datapack by following the instructions in the Show/Hide box below.

<details markdown="1"><summary>Show/Hide  Copying over the merged profiles for visualization </summary>

Here is how to get our backup databases if you don't want to run the read recruitment yourself:
```bash
#TODO
```

</details>

**Exercise 2: Visualize the non-competitive read recruitment results.**
After running the read recruitment script (or copying over the backup data), you should now have 4 merged profile databases, each paired with one of our _Trichodesmium_ references. We've already looked at the data for _Trichodesmium sp._, but now is your chance to visualize one or more of the other 3 genomes' results in the interactive interface. Consider the following questions: TODO

<details markdown="1"><summary>Show/Hide  Answer to Exercise 2: non-competitive visualizations </summary>
TODO
</details>

#### Clean-up

Since we already have merged profile databases, we don't need the BAM files or the single-sample profile dbs anymore. We're also done with the individual bowtie indices for each genome. Let's clean up our working directory:
```bash
rm -r *.bam *.bai *.bt2 *-PROFILE/
```

### Competitive read recruitment (mapping many metagenomes to many genomes in ONE combined FASTA file)

You should see four FASTA files in your working directory:
```
$ ls *.fa
MAG_Candidatus_Trichodesmium_miru.fa  MAG_Candidatus_Trichodesmium_nobis.fa  MAG_Trichodesmium_thiebautii_Indian.fa  Trichodesmium_sp.fa
```

Combine into one reference fasta:
```bash
cat *.fa > COMBINED.fa
```

Now we can run all the steps of read recruitment, but on this combined FASTA file. Let's make a script to do it.

```bash
#!/bin/bash
# a script to run competitive read recruitment

INPUT_GENOMES_FA="COMBINED.fa"
INPUT_SAMPLES="samples.txt"

g="COMBINED"
db="${g}.db"

bowtie2-build ${g}.fa $g
anvi-gen-contigs-database -f $INPUT_GENOMES_FA -o $db

while read sample r1 r2
do
    echo "Mapping $sample to $g"
    bowtie2 -x $g -1 $r1 -2 $r2 -S ${sample}-${g}.sam
    samtools view -F 4 -bS ${sample}-${g}.sam -o ${sample}-${g}-RAW.bam
    samtools sort ${sample}-${g}-RAW.bam -o ${sample}-${g}.bam
    samtools index ${sample}-${g}.bam
    rm ${sample}-${g}.sam ${sample}-${g}-RAW.bam
    anvi-profile -i ${sample}-${g}.bam -c $db -o ${sample}-${g}-PROFILE
done < <(tail -n+2 samples.txt) # notice here that we don't skip the first sample row

anvi-merge *-${g}-PROFILE/PROFILE.db -c $db -o ${g}_MERGED
```

Here is how to run the script:
```
./map_competitive.sh > competitive.log 2>&1
```

### What we've learned

## Congrats!

This is currently the last chapter of the tutorial. Well done! We hope it was useful for you.

If you want to go back to the main page of the tutorial, [click here]({{ site.url }}/tutorials/trichodesmium-tutorial/). 

{:.notice}
 If you have any questions about this exercise, or have ideas to make it better, please feel free to get in touch with the anvi'o community through our Discord server:

 {% include _join-anvio-discord.html %}
