---
layout: program
title: anvi-script-gen-reads
excerpt: An anvi'o program. Generate synthetic sequencing reads (Illumina, PacBio HiFi, ONT) from reference FASTA files with optional SNV injection at controlled multi-allele frequencies.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-reads
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate synthetic sequencing reads (Illumina, PacBio HiFi, ONT) from reference FASTA files with optional SNV injection at controlled multi-allele frequencies.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/FlorianTrigodet.jpg" /></div><div class="anvio-person-info-box"><a href="/people/floriantrigodet" target="_blank"><span class="anvio-person-name">Florian Trigodet</span></a><div class="anvio-person-social-box"><a href="mailto:trigodet.florian@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FlorianTrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/floriantrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[paired-end-fastq](../../artifacts/paired-end-fastq) <img src="../../images/icons/FASTQ.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[single-end-fastq](../../artifacts/single-end-fastq) <img src="../../images/icons/FASTQ.png" class="artifact-icon-mini" /></span></p>


## Usage


This program generates synthetic sequencing reads from a reference <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file. It supports Illumina paired-end and single-end short reads, PacBio HiFi, and Oxford Nanopore long reads, with optional SNV injection at controlled multi-allele frequencies.

The key feature is **multi-allele SNV injection**: you can specify exactly which positions should be variable and what the base frequencies should be at each position. This is critical for benchmarking tools that rely on SNV patterns where real biological variability involves 3-4 different bases at a position rather than just 2.

## Quick start with presets

The easiest way to use this program is with a preset. Presets set sensible defaults for read length, insert size, error rate, and quality scores:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;preset illumina&#45;paired
</div>

This generates `OUTPUT_PREFIX-R1.fastq` and `OUTPUT_PREFIX-R2.fastq` with 150 bp paired-end reads at 50X coverage.

Available presets:

**Short reads (Illumina):**

| Preset | Read type | Length | Insert size | Error rate | Quality |
|--------|-----------|--------|-------------|------------|---------|
| `illumina-paired` | paired-end | 150 bp | 450 bp (std 50) | 0.5% | ? (Q30) |
| `illumina-single` | single-end | 150 bp | - | 0.5% | ? (Q30) |

**Long reads (PacBio):**

| Preset | Read type | Length | Distribution | Error rate | Quality | Notes |
|--------|-----------|--------|--------------|------------|---------|-------|
| `pacbio-hifi` | long-distributed | 15 kb (std 3.5 kb) | normal | 0.1% | F (Q37) | Modern HiFi circular consensus sequencing |
| `pacbio-clr` | long-distributed | 15 kb (std 8 kb) | normal | 12% | . (Q13) | Legacy CLR (pre-HiFi), noisy but long |

**Long reads (Oxford Nanopore):**

| Preset | Read type | Length | Distribution | Error rate | Quality | Notes |
|--------|-----------|--------|--------------|------------|---------|-------|
| `ont-r9` | long-distributed | 5 kb (std 4 kb) | lognormal | 6% | 3 (Q18) | Legacy R9.4.1 chemistry |
| `ont-r10` | long-distributed | 8 kb (std 5 kb) | lognormal | 1% | = (Q28) | Modern R10.4.1 with super-accuracy basecalling |
| `ont-ultralong` | long-distributed | 50 kb (std 40 kb) | lognormal | 2% | : (Q25) | PromethION ultralong runs, very high variance |

ONT presets use a **lognormal** length distribution, which produces the right-skewed shape typical of nanopore data (mode lower than mean, with a long tail of very long reads). PacBio presets use a normal distribution, which better reflects the tighter length control of SMRT sequencing.

You can override any preset parameter individually. For example, to use the Illumina paired-end preset but with 100X coverage and 250 bp reads:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;preset illumina&#45;paired \
                      &#45;&#45;coverage 100 \
                      &#45;&#45;read&#45;length 250
</div>

## SNV injection with a mutations file

To inject SNVs at specific positions with controlled allele frequencies, provide a TAB-delimited mutations file:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;preset illumina&#45;paired \
                      &#45;&#45;mutations&#45;file mutations.tsv
</div>

The mutations file must have the following columns:

```
contig_name     position    freq_A    freq_T    freq_C    freq_G
contig_1        1000        0.25      0.25      0.25      0.25
contig_1        2000        0.0       0.4       0.3       0.3
contig_2        500         0.5       0.5       0.0       0.0
```

Positions are **0-indexed** and frequencies must sum to 1.0 for each row. Each frequency represents the probability that a read covering that position will carry that base. For example, a position with `freq_A=0.25, freq_T=0.25, freq_C=0.25, freq_G=0.25` will have all four bases represented equally across reads -- the kind of multi-allele variability you see in real DGR variable regions.

## Random SNV injection

If you don't need precise control over SNV positions, you can have the program randomly place SNVs at a given density:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;preset illumina&#45;paired \
                      &#45;&#45;snv&#45;density 0.01 \
                      &#45;&#45;num&#45;alleles 3
</div>

This places SNVs at approximately 1% of positions (1 per 100 bp), each with 3 different alleles at random frequencies. `--num-alleles` can be 2, 3, or 4.

## Custom read type (no preset)

You can specify all parameters manually instead of using a preset:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;read&#45;type paired&#45;end \
                      &#45;&#45;read&#45;length 150 \
                      &#45;&#45;insert&#45;size 300 \
                      &#45;&#45;insert&#45;size&#45;std 50 \
                      &#45;&#45;coverage 100 \
                      &#45;&#45;error&#45;rate 0.005
</div>

Available read types are `paired-end`, `single-end`, `long-fixed`, and `long-distributed`.

## Reproducibility

All runs are deterministic by default (seed = 42). To get a different random realization, change the seed:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;reads &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                      &#45;o OUTPUT_PREFIX \
                      &#45;&#45;preset illumina&#45;paired \
                      &#45;&#45;seed 123
</div>

## Typical workflow

Generate reads, then run the standard anvi'o pipeline:

<div class="codeblock" markdown="1">
# generate reads with known SNVs
anvi&#45;script&#45;gen&#45;reads &#45;f reference.fa \
                      &#45;o sample_01 \
                      &#45;&#45;preset illumina&#45;paired \
                      &#45;&#45;coverage 100 \
                      &#45;&#45;mutations&#45;file mutations.tsv

# build contigs database
anvi&#45;gen&#45;contigs&#45;database &#45;f reference.fa \
                          &#45;o contigs.db

# map reads
bowtie2&#45;build reference.fa reference
bowtie2 &#45;x reference \
        &#45;1 sample_01&#45;R1.fastq \
        &#45;2 sample_01&#45;R2.fastq \
        &#45;S sample_01.sam

# convert and sort
samtools view &#45;bS sample_01.sam | samtools sort &#45;o sample_01&#45;raw.bam
anvi&#45;init&#45;bam sample_01&#45;raw.bam &#45;o sample_01.bam

# profile
anvi&#45;profile &#45;i sample_01.bam \
             &#45;c contigs.db \
             &#45;o sample_01_profile
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-reads.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_reads.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
