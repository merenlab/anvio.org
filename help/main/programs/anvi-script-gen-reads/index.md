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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Provides


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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-gen-reads`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-gen-reads [-h] -f FASTA -o PREFIX [--preset {illumina-paired,illumina-single,pacbio-hifi,pacbio-clr,ont-r9,ont-r10,ont-ultralong}] [--read-type {paired-end,single-end,long-fixed,long-distributed}] [--read-length INT] [--read-length-std FLOAT] [--min-read-length INT] [--coverage FLOAT] [--insert-size INT] [--insert-size-std INT] [--error-rate FLOAT] [--quality-score CHAR] [--length-distribution {normal,lognormal}] [--mutations-file FILE] [--snv-density FLOAT] [--num-alleles INT] [--seed INT]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">The reference FASTA file from which reads will be generated.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Input reference FASTA file (can contain multiple contigs).</span></dd>
<dt class="parameter parameter-required" id="parameter-output_file_prefix"><code class="parameter-flags">-o, --output-file-prefix</code> <code class="parameter-metavar">PREFIX</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Output file prefix. Paired-end mode produces PREFIX-R1.fastq and PREFIX-R2.fastq, other modes produce PREFIX.fastq.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-read-type">
<header class="parameter-group-header"><span class="parameter-group-title">READ TYPE</span> <span class="parameter-group-description">Choose a preset or specify the read type explicitly. Presets set sensible defaults for all read parameters, which you can override individually.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-preset"><code class="parameter-flags">--preset</code> <code class="parameter-metavar">PRESET</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use a preset configuration. Available: illumina-paired, illumina-single, pacbio-hifi, pacbio-clr, ont-r9, ont-r10, ont-ultralong.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">illumina-paired</code> <code class="parameter-choice">illumina-single</code> <code class="parameter-choice">pacbio-hifi</code> <code class="parameter-choice">pacbio-clr</code> <code class="parameter-choice">ont-r9</code> <code class="parameter-choice">ont-r10</code> <code class="parameter-choice">ont-ultralong</code></span></dd>
<dt class="parameter" id="parameter-read_type"><code class="parameter-flags">--read-type</code> <code class="parameter-metavar">READ_TYPE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Read type to generate. Inferred from preset if not given.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">paired-end</code> <code class="parameter-choice">single-end</code> <code class="parameter-choice">long-fixed</code> <code class="parameter-choice">long-distributed</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-read-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">READ PARAMETERS</span> <span class="parameter-group-description">Fine-tune read generation. These override preset values when both are given.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-read_length"><code class="parameter-flags">--read-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Read length in bp. For long-distributed mode, this is the mean length.</span></dd>
<dt class="parameter" id="parameter-read_length_std"><code class="parameter-flags">--read-length-std</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Standard deviation of read length (only for long-distributed / ONT mode).</span></dd>
<dt class="parameter" id="parameter-min_read_length"><code class="parameter-flags">--min-read-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum read length for long-distributed mode. Default: 200.</span></dd>
<dt class="parameter" id="parameter-coverage"><code class="parameter-flags">--coverage</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Target coverage depth. Default: 50.</span></dd>
<dt class="parameter" id="parameter-insert_size"><code class="parameter-flags">--insert-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Mean insert size between R1 and R2 (paired-end only).</span></dd>
<dt class="parameter" id="parameter-insert_size_std"><code class="parameter-flags">--insert-size-std</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Standard deviation of insert size (paired-end only).</span></dd>
<dt class="parameter" id="parameter-error_rate"><code class="parameter-flags">--error-rate</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Per-base substitution error probability. Default: 0 (no errors).</span></dd>
<dt class="parameter" id="parameter-quality_score"><code class="parameter-flags">--quality-score</code> <code class="parameter-metavar">CHAR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Fixed FASTQ quality score character. Default depends on preset (e.g., &#x27;?&#x27; for Q30 Illumina, &#x27;F&#x27; for Q37 HiFi).</span></dd>
<dt class="parameter" id="parameter-length_distribution"><code class="parameter-flags">--length-distribution</code> <code class="parameter-metavar">LENGTH_DISTRIBUTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Length distribution for long-distributed mode. &#x27;lognormal&#x27; produces a right-skewed distribution realistic for ONT data. Default: normal (or set by preset).</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">normal</code> <code class="parameter-choice">lognormal</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-snv-injection">
<header class="parameter-group-header"><span class="parameter-group-title">SNV INJECTION</span> <span class="parameter-group-description">Introduce SNVs at specific positions with controlled multi-allele frequencies. Use --mutations-file for precise control, or --snv-density for random placement.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-mutations_file"><code class="parameter-flags">--mutations-file</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path to a TAB-delimited file with columns: contig_name, position (0-indexed), freq_A, freq_T, freq_C, freq_G. Frequencies must sum to 1.0.</span></dd>
<dt class="parameter" id="parameter-snv_density"><code class="parameter-flags">--snv-density</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Randomly place SNVs at this density (e.g., 0.01 = 1 SNV per 100 bp).</span></dd>
<dt class="parameter" id="parameter-num_alleles"><code class="parameter-flags">--num-alleles</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Number of alleles (2-4) at each random SNV position. Only used with --snv-density. Default: 2.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-reproducibility">
<header class="parameter-group-header"><span class="parameter-group-title">REPRODUCIBILITY</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-seed"><code class="parameter-flags">--seed</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Random seed for reproducibility. Default: 42.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">42</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_reads.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
