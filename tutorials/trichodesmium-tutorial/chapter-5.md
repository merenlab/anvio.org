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


Read recruitment, or read mapping, is a critical step in most metagenomics projects. It allows us to compute coverage and detection statistics, enabling us to (1) estimate an organism's relative abundance and presence-absence in samples, (2) analyze biogeography, and (3) more accurately bin contigs into metagenome-assembled genomes (MAGs). It also allows us to identify sequence variants and insertions/deletions, enabling us to do population genetics.

This chapter of the tutorial covers read recruitment for the case when you have genome(s) to map reads to (that is, the genomes will be your reference sequences). We'll use the results to (roughly) analyze the biogeography of our four _Trichodesmium_ species. That said, the commands for mapping are similar if you use different types of reference sequences such as a metagenomic assembly (for instance, if you want to get differential coverage for binning) or individual genes (for instance, if you want to analyze the distribution of functions across samples).

There are many bioinformatic tools for recruiting reads, like [Bowtie 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC3322381/), [BWA](https://arxiv.org/abs/1303.3997), [Strobealign](https://link.springer.com/article/10.1186/s13059-022-02831-7), and [Minimap2](https://doi.org/10.1093/bioinformatics/bty191). Anvi'o is not one of them, but it _does_ include several programs to process the output of read recruitment -- specifically, BAM files. And mapping reads is such a common task that the [anvi'o metagenomics workflow](https://anvio.org/help/main/workflows/metagenomics/) includes all the steps for read recruitment. Therefore, several 3rd-party software options for read recruitment are typically installed within your anvi'o conda environment, so you should have access to them.

In this chapter, we will learn how to do the following tasks that _don't involve anvi'o programs_:
- mapping metagenomic reads to a reference using Bowtie 2
- processing the mapping output files using [SAMtools](https://pubmed.ncbi.nlm.nih.gov/19505943/)
- setting up competitive or non-competitive read recruitment

In addition, we will learn how to process the read recruitment results _within anvi'o_:
- computing coverage, detection, and single-nucleotide variants (SNVs)
- visualizing read recruitment data in the interactive interface

### Getting started

In your terminal, you should be located within the `trichodesmium_tutorial` folder. From there, you can check the contents of the `00_DATA/mapping` folder:

```
$ ls 00_DATA/mapping/
ATLANTIC_R1.fastq.gz  INDIAN_OCEAN_R1.fastq.gz  map_competitive.sh     MEDITERRANEAN_R1.fastq.gz  PACIFIC_R1.fastq.gz  RED_SEA_R1.fastq.gz  samples_info.txt
ATLANTIC_R2.fastq.gz  INDIAN_OCEAN_R2.fastq.gz  map_noncompetitive.sh  MEDITERRANEAN_R2.fastq.gz  PACIFIC_R2.fastq.gz  RED_SEA_R2.fastq.gz  samples.txt
```

You should see 5 metagenome samples named according to where they were sampled. Note that these were derived from publicly-available metagenomes sampled during the Tara Oceans cruise ([Sunagawa et al 2015](https://www.science.org/doi/full/10.1126/science.1261359)). The original samples were subsetted to make them small enough to work with on a typical laptop. If you want to know the BioSample accessions of the original samples, you can check the `samples_info.txt` file in the same folder.

To keep things organized as we start generating read recuitment data, we will make ourselves a sub-directory to work in:
```bash
mkdir -p 03_READ_RECRUITMENT && cd 03_READ_RECRUITMENT
```

And since we'll be covering two setups for read recruitment -- non-competitive and competitive -- we will also generate a subfolder for the output of each setup:
```bash
mkdir -p NON_COMPETITIVE
mkdir -p COMPETITIVE
```

We'll mainly work in the `03_READ_RECRUITMENT` directory and direct our output into these last two folders.

### Mapping one metagenome to a single genome

We will start with the simplest case: one metagenome sample mapped to one genome. Suppose we want to know whether our `Trichodesmium sp.` MAG (which was obtained from a Red Sea metagenome) is detectable within the `RED_SEA` sample in our datapack. 

Read recruitment is done from FASTQ files (of reads) to FASTA files (of reference sequences, usually contigs). If you worked through [Chapter 1]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-1), you already have a FASTA file for this genome that we could use as the reference. However, you might remember that we _reformatted_ the contig names before making our contigs database. It is very important to use a FASTA file in which the contig names match those within the contigs-db, so that anvi'o later knows how to connect the read recruitment results to the right contigs. Therefore, just to be on the safe side, we are actually going to export the contig sequences _directly from the contigs database_ to ensure we are using a FASTA file with the right contig names:

```bash
anvi-export-contigs -c ../Trichodesmium_sp-contigs.db -o Trichodesmium_sp.fa
```

Now that we have a reference FASTA file, our first step is to index it. Indexing makes the mapping step faster.

```bash
bowtie2-build Trichodesmium_sp.fa Trichodesmium_sp
```

Notice what files were created in your working directory.

We can now use the index files to map reads from our metagenome sample of interest. This particular sample comes from the Red Sea -- it is not the same sample from which our downloaded MAG was reconstructed, but if it contains a similar-enough population then our MAG's contigs will be able to recruit reads from that 'local analogue' of _Trichodesmium sp_.

Mapping to a single genome is considered 'non-competitive' read recruitment because the sequencing reads only have one biological entity to map to -- if there were other genomes in the reference FASTA file, then the genomes would be competing with each other to recruit reads and sequences of highly similar or shared genomic regions would be drawn to the genome they are most similar to. But there is only one genome in our current index, so we'll direct the mapping output to the `NON_COMPETITIVE` folder. Here is the mapping command:

```bash
bowtie2 -x Trichodesmium_sp \
        -1 ../00_DATA/mapping/RED_SEA_R1.fastq.gz \
        -2 ../00_DATA/mapping/RED_SEA_R2.fastq.gz \
        -S NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.sam
```

We've named the output file with the metagenome's BioSample accession combined with the genome name because later, we'll be mapping the same sample to different references.

In the terminal output from Bowtie, you should see some information about how many reads were able to map to the genome. It is not 100% because the metagenome includes DNA from organisms that are not similar enough to the reference to be able to map.

If you've never seen a SAM file before, it's worth it to take a look at `NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.sam` using `less` to understand what sort of information it includes. Here's a link to the [SAM file Wikipedia page](https://en.wikipedia.org/wiki/SAM_(file_format)), which has a nice explanation of the format.

SAM files take up a lot of space, so we want to convert them to smaller binary files (BAM). To further save on space, we can exclude unmapped reads from the BAM file (this is what the `-F 4` option does below). Then, to make the BAM file faster to process, we (1) sort and (2) index it. All of this is done with SAMtools using these commands:

```bash
samtools view -F 4 \
              -bS NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.sam \
              -o NON_COMPETITIVE/RED_SEA-Trichodesmium_sp-RAW.bam

samtools sort NON_COMPETITIVE/RED_SEA-Trichodesmium_sp-RAW.bam -o NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.bam
samtools index NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.bam
```

If all of that was successful, you should see the sorted BAM file `RED_SEA-Trichodesmium_sp.bam` and its corresponding index (`.bai`) file in the output directory. Then you are free to remove the original SAM file and the unsorted BAM:

```bash
rm NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.sam NON_COMPETITIVE/RED_SEA-Trichodesmium_sp-RAW.bam
```

Now what? Knowing which reads map where is one thing, but what we are really after are read recruitment statistics like coverage and detection. In anvi'o, we call the calculation of these metrics 'profiling', and there are a couple of programs to do it. `anvi-profile-blitz` gives you really basic read recruitment statistics in a tab-delimited text file. It's very fast and a good option if you are working with a very large number of samples. Meanwhile, `anvi-profile` not only computes coverage and detection, but also identifies single-nucleotide variants, and stores this information in a profile database that can later be used for visualization in the anvi'o interactive interface. As it is not so interesting to visualize read recruitment data from a single metagenome, we'll start with the former option:

```bash
anvi-profile-blitz -c ../Trichodesmium_sp-contigs.db \
				   -o NON_COMPETITIVE/Tricho_sp_contig_stats.txt \
				   NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.bam
```

If you look at the output, you will see that the read recruitment metrics have been computed on a per-contig basis.

|**`contig`**|**`sample`**|**`length`**|**`gc_content`**|**`num_mapped_reads`**|**`detection`**|**`mean_cov`**|**`q2q3_cov`**|**`median_cov`**|**`min_cov`**|**`max_cov`**|**`std_cov`**|**`num_windows`**|**`prop_windows_covered`**|**`prop_cov_within_foldrange`**|**`dis_cov`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp_MAG_R01_000000000001|RED_SEA-Trichodesmium_sp|40296|0.349|66|0.1026|0.1647|0.0|0.0|0|6|0.5971|101|0.297|0.8624|0.5797|
|Trichodesmium_sp_MAG_R01_000000000002|RED_SEA-Trichodesmium_sp|7609|0.306|2|0.02418|0.02418|0.0|0.0|0|1|0.1536|26|0.07692|1.0|0.5385|
|Trichodesmium_sp_MAG_R01_000000000003|RED_SEA-Trichodesmium_sp|5360|0.343|0|0.0|0.0|0.0|0.0|0|0|0.0|18|0.0|0.0|0.0|
|Trichodesmium_sp_MAG_R01_000000000004|RED_SEA-Trichodesmium_sp|5380|0.346|14|0.07305|0.2599|0.0|0.0|0|9|1.212|18|0.1667|0.6921|0.4294|

This MAG is quite fragmented, with many short contigs. There is quite a lot of variability across the contigs' read recruitment statistics, but overall it seems like few reads mapped to any single contig, yielding low detection and coverage scores. But we want to know whether _the genome as a whole_ is present in this metagenome -- how can we get similar statistics for the entire MAG?

If you look at the program help page, you might notice that you could also elect to compute these metrics on a per-gene level or a per-genome level. Let's do it again to get genome-level stats. We will need to make a collection-txt file to tell anvi'o that all contigs in the contigs database belong to our _Trichodesmium sp._ genome:

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
				   -o NON_COMPETITIVE/Tricho_sp_genome_stats.txt \
				   NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.bam
```

Now, because we are working with a single genome and a single sample, we get a single line of data in our output file:

|**`bin`**|**`sample`**|**`length`**|**`gc_content`**|**`num_mapped_reads`**|**`detection`**|**`mean_cov`**|**`q2q3_cov`**|**`median_cov`**|**`min_cov`**|**`max_cov`**|**`std_cov`**|**`num_windows`**|**`prop_windows_covered`**|**`prop_cov_within_foldrange`**|**`dis_cov`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp_MAG_R01|RED_SEA-Trichodesmium_sp|6640707|0.34|13931|0.1063|0.2096|0.0|0.0|0|53|1.01|6641|0.4575|0.8319|0.6447|

Let's go through the data more systematically this time. A total of ~14,000 reads have mapped to our genome, but only ~21% of the genome is detected in this sample and the overall mean coverage is rather low. In fact, if you look at the coverage values within the interquartile range, they have a mean of 0 (`q2q3_cov`). This makes sense because less than a quarter of the genome is detected, so of course the middle 50% of per-base coverage values are all zeros. However, that coverage seems to be spread out across about half the genome (`prop_windows_covered`: ~46% of 1-kb windows have at least some reads mapping to them), and the coverage depth appears roughly stable (`prop_cov_within_foldrange`: ~83% of the covered bases have a coverage depth within 0.5x to 2x of the median non-zero coverage depth), yielding a distribution of coverage score (`discov`) of 0.6447. Note that we used default parameters of the distribution of coverage calculation (like the window size and the fold-range of depth) as specified in the `anvi-profile-blitz` help output.

{:.notice}
In anvi'o, the mean of the middle 50% of per-base coverage values is called 'Q2Q3 coverage'. That is, we throw out the lowest quarter (Q1) and highest quarter (Q4) of per-nucleotide coverages to elimimate any extremely high coverage values due to non-specific read recruitment and extremely low coverage values which may be due to the absence of individual genes in the local population. This leaves only quarter 2 (Q2) and quarter 3 (Q3) of the distribution of all per-nucleotide coverage values, which yield a mean coverage value that can more accurately reflect the population's true coverage in the sample. Hence, 'Q2Q3 coverage'. This is a very bad and not statistician-friendly name, we know. Sorry about that.

Taking all that evidence together, it looks like this Red Sea metagenome contains a population that is kind-of similar to the _Trichodesmium sp._ MAG, but in extremely low abundance. Why could this be, given that the MAG originates from the Red Sea? The [metagenomes](https://www.ncbi.nlm.nih.gov/biosample/SAMN25809967) this MAG was generated from and our `RED_SEA` sample (derived from [this metagenome](https://www.ncbi.nlm.nih.gov/biosample/SAMEA2657055/)) are very different -- the former were sampled in November 2020 from very coastal waters at a depth of 20m in the Gulf of Aqaba (no size fraction information provided), while the latter was sampled in January 2010, much farther south and offshore at a depth of 5m (size fraction 20-180μm). So there are a lot of differences in the sampling and environmental parameters that could contribute to the relative lack of detection of this MAG in our `RED_SEA` sample. Just because two samples come from the same approximate location does not mean they will contain the same microbes.

Before we move on, let's use `anvi-profile` to generate a profile database for this BAM file. We won't do anything with it right now, but it will come in handy later when we want to visualize this data:

```bash
anvi-profile -i NON_COMPETITIVE/RED_SEA-Trichodesmium_sp.bam \
             -c ../Trichodesmium_sp-contigs.db \
             -o NON_COMPETITIVE/RED_SEA-Trichodesmium_sp-PROFILE
```

If you look in the output directory `NON_COMPETITIVE/RED_SEA-Trichodesmium_sp-PROFILE/`, you should see a profile database, an auxiliary database, and a log file that recapitulates the terminal output.

<details markdown="1"><summary>Show/Hide What's the difference between a profile database and an auxiliary database? </summary>

We are glad you asked. The profile database contains _summary statistics_ like detection, coverage, abundance, etc. for each contig and split as well as the positions and nature of _variants_ like single-nucleotide variants (SNVs), insertions/deletions, single-codon variants (SCVs), and single amino acid variants (SAAVs). Meanwhile, the auxiliary database stores _per-nucleotide_ coverage values -- the underlying data that was used to compute the summary statistics. When you visualize metagenomic data in the interface (we will do this later), the data on the main interface page are the summary statistics taken from the profile database. But you can also 'inspect' individual splits to see the per-nucleotide coverage plots, which are coming from the auxiliary database (with SNV overlays taken from the profile database).

You don't need the auxiliary database to run `anvi-interactive`, just the profile database. The auxiliary database will be loaded automatically by anvi'o provided it is located in the same directory as the profile-db. However, if the auxiliary database is not available, you won't be able to use the 'inspect' function in the interface (or run `anvi-inspect` from the command line).

</details>

### Mapping many metagenomes to a single genome

We just saw that the _Trichodesmium sp._ MAG does not have a significant presence in our Red Sea metagenome. So where else could it be? In our datapack, we have one sample from each of several other temperate marine regions, so let's do a mini-biogeography analysis and see if we can detect this genome in any of the other oceans.

We can repeat the same steps we went through above to map each of our other metagenomes, using the Bowtie 2 index for _Trichodesmium sp._ that we already created. To make things easy, we'll use a BASH loop to do this. The datapack contains a samples-txt file containing the relative path to each metagenome -- copy this file over, and then loop over each line in the file (skipping the `RED_SEA` sample we already mapped) to run Bowtie 2, process the output with SAMtools, and `anvi-profile`:

```bash
cp ../00_DATA/mapping/samples.txt .

while read sample r1 r2
do
  echo "Working on $sample"
  bowtie2 -x Trichodesmium_sp \
        -1 $r1 \
        -2 $r2 \
        -S NON_COMPETITIVE/${sample}-Trichodesmium_sp.sam
  samtools view -F 4 \
        -bS NON_COMPETITIVE/${sample}-Trichodesmium_sp.sam \
        -o NON_COMPETITIVE/${sample}-Trichodesmium_sp-RAW.bam
  samtools sort NON_COMPETITIVE/${sample}-Trichodesmium_sp-RAW.bam -o NON_COMPETITIVE/${sample}-Trichodesmium_sp.bam
  samtools index NON_COMPETITIVE/${sample}-Trichodesmium_sp.bam
  rm NON_COMPETITIVE/${sample}-Trichodesmium_sp.sam NON_COMPETITIVE/${sample}-Trichodesmium_sp-RAW.bam
  anvi-profile -i NON_COMPETITIVE/${sample}-Trichodesmium_sp.bam \
        -c ../Trichodesmium_sp-contigs.db \
        -o NON_COMPETITIVE/${sample}-Trichodesmium_sp-PROFILE
done < <(tail -n+3 samples.txt)
```

Note that we use `tail -n+3` to skip over the header line and the `RED_SEA` sample (which is the 2nd line) in the `samples.txt` file. The loop will take some time to run, but once it is done, you will have a sorted, indexed BAM file and a profile database for each sample that was mapped to this genome.

{:.warning}
Loops are not the most robust way to scale up this analysis. If one of the commands fails, all the downstream commands for the same sample will fail, too. It would also be a pain to figure out what went wrong without dedicated log files for each step, and you would have to manually re-do the steps that didn't work. Luckily, there is a much better solution: [workflows]({{ site.url }}/tutorials/scaling-up/). More on this later.

Let's check the MAG's distribution across all 5 metagenome samples. We can use `anvi-profile-blitz` on _multiple BAM files_ connected to the same reference. Note that we overwrite the old output file with the help of the `--force-overwrite` flag:
```bash
anvi-profile-blitz -c ../Trichodesmium_sp-contigs.db \
				   -C Trichodesmium_sp_collection.txt \
				   -o NON_COMPETITIVE/Tricho_sp_genome_stats.txt \
				   --force-overwrite \
				   NON_COMPETITIVE/*-Trichodesmium_sp.bam
```

You should now see 5 lines of data in the output file, one per sample that we mapped to the _Trichodesmium sp._ genome:

|**`bin`**|**`sample`**|**`length`**|**`gc_content`**|**`num_mapped_reads`**|**`detection`**|**`mean_cov`**|**`q2q3_cov`**|**`median_cov`**|**`min_cov`**|**`max_cov`**|**`std_cov`**|**`num_windows`**|**`prop_windows_covered`**|**`prop_cov_within_foldrange`**|**`dis_cov`**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|Trichodesmium_sp_MAG_R01|ATLANTIC-Trichodesmium_sp|6640707|0.34|63222|0.2755|0.9557|0.05092|0.0|0|137|2.422|6641|0.6698|0.606|0.6379|
|Trichodesmium_sp_MAG_R01|INDIAN_OCEAN-Trichodesmium_sp|6640707|0.34|89672|0.4043|1.358|0.3297|0.0|0|330|5.24|6641|0.8765|0.8173|0.8469|
|Trichodesmium_sp_MAG_R01|MEDITERRANEAN-Trichodesmium_sp|6640707|0.34|106321|0.3289|1.591|0.1695|0.0|0|723|4.992|6641|0.718|0.5518|0.6349|
|Trichodesmium_sp_MAG_R01|PACIFIC-Trichodesmium_sp|6640707|0.34|559968|0.9079|8.474|7.992|8.0|0|404|7.665|6641|0.9858|0.7634|0.8746|
|Trichodesmium_sp_MAG_R01|RED_SEA-Trichodesmium_sp|6640707|0.34|13931|0.1063|0.2096|0.0|0.0|0|53|1.01|6641|0.4575|0.8319|0.6447|

Funnily enough, our Red Sea-derived _Trichodesmium sp._ MAG is _least detected_ in our `RED_SEA` metagenome. It seems to be present in `PACIFIC` with ~8x coverage, and based on the high distribution of coverage score in `INDIAN_OCEAN`, it is also confidently present there but in low abundance (~0.3x Q2Q3 coverage). The other samples are on the fence; you could make a case for 'present but in very low abundance' or for 'absent' depending on how you set thresholds for detection or distribution of coverage.

But it would be much more fun to visualize this data in the interactive interface. We have 5 profile databases, one for each of the samples we mapped. In order to visualize them in a single display later, we need to merge the data into one profile database:

```bash
anvi-merge NON_COMPETITIVE/*-PROFILE/PROFILE.db \
           -c ../Trichodesmium_sp-contigs.db \
           -o NON_COMPETITIVE/TRICHO_SP_MERGED
```

Now that we have all the data in one file, we no longer need the single-sample profiles, so we can just delete them:

```bash
rm -r NON_COMPETITIVE/*-PROFILE/
```

### Visualizing read recruitment data

To view the read recruitment data in the interface, we need the merged profile database and its corresponding contigs-db:

```bash
anvi-interactive -c ../Trichodesmium_sp-contigs.db \
			-p NON_COMPETITIVE/TRICHO_SP_MERGED/PROFILE.db \
			--title Trichodesmium_sp
```

You probably see a display that looks like this:

{% include IMAGE path="/images/trichodesmium_tutorial/mapping_01.png" width=70 %}

In a metagenomics display, the 'items' of the interactive interface are contigs (technically, they are 'splits' of contigs so that longer contig sequences take up visual space proportional to their length), and the 'layers' are metagenome samples. The first thing to pay attention to is the information at the top of your screen, below the title. It tells you how the genome's contigs are arranged via the middle dendrogram (here, by their sequence composition and differential coverage across samples), what data we are currently looking at in the layers (at the moment, this is mean coverage), and how the samples are ordered (here, "custom" translates to alphabetical order by name).

Another important thing to notice is that the data layers are _normalized_. In the Settings panel on the left, you should see that the metagenome data layers are log-normalized by default. This normalization is done on a _per-sample_ basis, meaning that each data layer is scaled according to the maximum value within that layer. That is why it appears as though our MAG has plenty of coverage in `RED_SEA`, even though we know from before that the actual per-contig mean coverage values are very low. You can check the coverage values in the 'Data' tab.

Finally, check the additional per-sample (layer) bar plots on the right side. The most reads mapped from the _PACIFIC_ sample and we know that _PACIFIC_ certainly contains a _Trichodesmium sp._ population, but that doesn't mean the local population is exactly the same as our MAG -- a large number of SNVs and indels were identified from these reads.

Let's play around with the visualization for a bit. You can change what data is displayed, alter the normalization strategy, change the sample colors, switch the ordering strategy, increase the radius, remove some layers, change the Min/Max of each sample layer, and so on.

Here is what I came up with:

{% include IMAGE path="/images/trichodesmium_tutorial/mapping_02.png" width=70 %}

The most important changes I made were:
- switch the data view to 'Detection'
- enforce all sample layers to have a Min of 0 and a Max of 1 (making the plots comparable across samples)
- order the contigs by 'Differential coverage'

Along with a few other minor cosmetic things. If you want your display to match mine exactly, you can import the state file provided in the datapack before re-opening the interface and loading the 'tutorial' state:
```bash
anvi-import-state -p NON_COMPETITIVE/TRICHO_SP_MERGED/PROFILE.db \
			-s ../00_DATA/mapping/tricho_sp_state.json \
			-n tutorial
```

There are a few things to learn from our display. First, detection is low in most samples (we saw this already in the `anvi-profile-blitz` output), but now we can see that it is generally _consistent_ within a sample across the entire MAG, meaning that every contig had an approximately similar rate of read recruitment. Second, in the `PACIFIC` sample there are only a couple of contigs that have 0 detection (on the right), and these are quite short -- basically the length of 1-2 genes which must be missing in the local population of this organism.

Let's inspect one contig to see how the read recruitment patterns look at a finer resolution. We will look at a particularly long contig made up of 8 splits. You can find it by looking for a long gray bar in the 'Parent' layer, which indicates all the splits belong to the same contig sequence:

{% include IMAGE path="/images/trichodesmium_tutorial/mapping_03.png" width=50 %}

Right-click on any split within that range and hit the 'Inspect split' button to open a page like this one:

{% include IMAGE path="/images/trichodesmium_tutorial/mapping_04.png" width=70 %}

The top of the page indicates that we are looking at a split of the contig named `Trichodesmium_sp_MAG_R01_000000000230`, and each bar plot shows the detailed per-nucleotide coverage for one of the samples. If you click through the rest of the splits of this contig (using the 'prev' and 'next' buttons at the top until the page title shows a different contig name), you should see largely the same pattern: in `PACIFIC`, the contig sequence is thoroughly covered but with wavy coverage depth and plenty of SNVs; in the top three samples the reads map more sporadically, with `INDIAN_OCEAN` often yielding the most consistent coverage; and in `RED_SEA` there are mostly isolated read-pairs scattered across the contig. This tracks with the summarized data we saw before.

Note that we see a lot of SNVs in the `PACIFIC` layer, but that is largely because this is the only layer in which the coverage depth is consistently deep enough for `anvi-profile` to take note of sequence variants (by default, the required depth is 10x). There are likely many differences between mapped reads and the reference sequence in the other samples, but not enough coverage for us to confidently distinguish true variation from sequencing errors.

Here are a few of the other interesting things you might notice as you look through this contig:
- a small missing region in the `PACIFIC` layer containing a transposase gene (in `split_00003`)
- a huge spike of read recruitment with plenty of SNVs in between a phage lysozyme and an unannotated gene, in the top 3 samples (also in `split_00003`)
- an operon containing _nifH_, _nifD_, _nifK_ and other _nif_ genes that is covered only in `PACIFIC` and `INDIAN_OCEAN` (in `split_00006`)
- a large region with hardly any coverage (even in `PACIFIC`) containing glycosyl transferases and several other genes (in `split_00007`). Could it have come from an integrated plasmid or phage?

Clearly, genome-level and even contig-level coverage statistics can obscure a lot of variation in read recruitment patterns, especially when mobile genetic elements are involved.

If you want to open any of these splits directly from the command line, you could use the dedicated program `anvi-inspect`. Here is an example that opens the split with the _nif_ operon:
```bash
anvi-inspect -c ../Trichodesmium_sp-contigs.db \
			-p NON_COMPETITIVE/TRICHO_SP_MERGED/PROFILE.db \
			--split-name Trichodesmium_sp_MAG_R01_000000000230_split_00006
```

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

Copy it over from the data dir:
```bash
cp ../00_DATA/mapping/map_competitive.sh .
```

Here is how to run the script:
```
./map_competitive.sh > competitive.log 2>&1
```

{:.notice}
Now that you understand the different steps required for read recruitment, there is a much better way to actually run all those steps, and that is to use workflows. Anvi'o has a built-in snakemake workflow for metagenomics which can be run in 'references mode' to perform read recruitment from multiple samples to one or more references, with the option to go all the way to merged profile databases. If you want to learn how to do this with your own data, check out Meren's [tutorial on competitive read recruitment]({{ site.url }}/tutorials/competitive-read-recruitment/) or Florian's more general [tutorial on workflows]({{ site.url }}/tutorials/scaling-up/).

If you wanted to have profile-blitz results for all 4 genomes across all 5 samples, this is how:
```bash
# first make the collection-txt file including all contigs
grep '>' COMBINED.fa | sed 's/>//g' > contigs
rev contigs | cut -d '_' -f 2- | rev > bins
paste contigs bins > COMBINED_collection.txt
rm contigs bins
# then run the blitz
anvi-profile-blitz -C COMBINED_collection.txt \
				   -c COMBINED.db \
				   -o combined_genome_stats.txt \*-COMBINED.bam
```

#### Clean-up

Let's get rid of the BAM files, indexes, and single profiles from this section:
```bash
rm -r *.bam *.bai *.bt2 *-COMBINED-PROFILE
```

### What we've learned

## Congrats!

This is currently the last chapter of the tutorial. Well done! We hope it was useful for you.

If you want to go back to the main page of the tutorial, [click here]({{ site.url }}/tutorials/trichodesmium-tutorial/). 

{:.notice}
 If you have any questions about this exercise, or have ideas to make it better, please feel free to get in touch with the anvi'o community through our Discord server:

 {% include _join-anvio-discord.html %}
