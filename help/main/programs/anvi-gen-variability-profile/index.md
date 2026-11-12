---
layout: program
title: anvi-gen-variability-profile
excerpt: An anvi'o program. Generate a table that comprehensively summarizes the variability of nucleotide, codon, or amino acid positions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-variability-profile
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a table that comprehensively summarizes the variability of nucleotide, codon, or amino acid positions. We call these single nucleotide variants (SNVs), single codon variants (SCVs), and single amino acid variants (SAAVs), respectively.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ShaiberAlon.jpg" /></div><div class="anvio-person-info-box"><a href="/people/shaiberalon" target="_blank"><span class="anvio-person-name">Alon Shaiber</span></a><div class="anvio-person-social-box"><a href="mailto:alon.shaiber@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/alon_shaiber" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/shaiberalon" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[variability-profile](../../artifacts/variability-profile) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[splits-txt](../../artifacts/splits-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage



This program takes the variability data stored within a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and compiles it from across samples into a single matrix that comprehensively describes your SNVs, SCVs or SAAVs (a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span>).

This program is described in detail in [this blog post](http://merenlab.org/2015/07/20/analyzing-variability/#the-anvio-way), which also covers the biological motivation, output column definitions, and example use cases.

## A note on default filtering of variability signal during profiling

Before this program even runs, anvi'o applies a dynamic, coverage-dependent filter during the profiling step (i.e., when you run <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> on your BAM files) to reduce the reporting of variation due to sequencing errors and other factors that are difficult to distinguish frmo noise. Specifically, the base frequencies observed at a position in the read recruitment data are only stored in the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> *if* `departure_from_reference` value for that position, which quantifies the fraction of reads that differ from the reference nucleotide at a given position, meets or exceeds a coverage-dependent minimum threshold defined by:

$$y = \left(\frac{1}{b}\right)^{x^{\frac{1}{b}} - m} + c$$

where $x$ is the coverage depth and the model parameters are $b = 2$, $m = 1.45$, $c = 0.05$. This gives a threshold of approximately 0.17 at 20X coverage, 0.07 at 50X, and asymptotically approaches 0.05 at very high coverage. Positions that do not meet this threshold are silently excluded from the database and will never appear in the output of this program.

The user can bypass this filter entirely and store all observed variation regardless of frequency by including `--report-variability-full` when running <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span>. But the use of this parameter will dramatically increase database size, and should only be used with extreme care and attention (this is a very politically correct way to say "please do not use this parameter unless you are certain that this is what you need").

## Basic usage

Here is a basic run with no bells or whistles:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C DEFAULT \
                             &#45;b EVERYTHING
</div>

Note that this program requires you to specify a subset of the data to focus on, so to work with everything in the databases, first run <span class="artifact-p">[anvi-script-add-default-collection](/help/main/programs/anvi-script-add-default-collection)</span> and use the resulting <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> as shown above.

You can also specify an output file path, which is useful when running multiple times with different `--engine` settings:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C DEFAULT \
                             &#45;b EVERYTHING \
                             &#45;&#45;output&#45;file /path/to/your/variability.txt
</div>

## Choosing what to analyze

### Focusing on a subset of the input

Instead of a collection and bin, there are three alternatives:

1. Provide gene caller IDs directly or as a file:

    <div class="codeblock" markdown="1">
    anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;&#45;gene&#45;caller&#45;ids 1,2,3
    </div>

    <div class="codeblock" markdown="1">
    anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;&#45;genes&#45;of&#45;interest <span class="artifact&#45;n">[genes&#45;of&#45;interest&#45;txt](/help/main/artifacts/genes&#45;of&#45;interest&#45;txt)</span>
    </div>

2. Provide a <span class="artifact-n">[splits-txt](/help/main/artifacts/splits-txt)</span> to focus on a specific set of splits:

    <div class="codeblock" markdown="1">
    anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;&#45;splits&#45;of&#45;interest <span class="artifact&#45;n">[splits&#45;txt](/help/main/artifacts/splits&#45;txt)</span>
    </div>

3. Provide any <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>:

    <div class="codeblock" markdown="1">
    anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                                 &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span>
    </div>

### Restricting to specific samples

You can limit the analysis to a subset of samples by providing a file with one sample name per line:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;samples&#45;of&#45;interest my_samples.txt
</div>

where `my_samples.txt` looks like:

<div class="codeblock" markdown="1">
DAY_17A
DAY_18A
DAY_22A
...
</div>

### Excluding intergenic positions

For nucleotide-level analyses, you can restrict output to positions that fall within gene calls:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;exclude&#45;intergenic
</div>

## Choosing the variability type (engine)

Which type of variants you analyze depends on the `--engine` parameter:

| Engine | Variant type | Requires |
|--------|-------------|---------|
| `NT` (default) | Single nucleotide variants (SNVs) | standard profiling |
| `CDN` | Single codon variants (SCVs) | `--profile-SCVs` at profiling time |
| `AA` | Single amino acid variants (SAAVs) | `--profile-SCVs` at profiling time |

To analyze SAAVs:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;engine AA
</div>

To analyze SCVs:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;engine CDN
</div>

## Adding structural annotations

You can add structural annotations by providing a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C DEFAULT \
                             &#45;b EVERYTHING \
                             &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span>
</div>

When a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> is provided, you can also limit your analysis to only genes that have structures in the database:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span> \
                             &#45;&#45;only&#45;if&#45;structure
</div>

## Filtering the output

### By departure from reference or consensus

`departure_from_reference` is the fraction of reads at a position that differ from the reference nucleotide. `departure_from_consensus` is similar but measured against the most frequent allele in that sample. You can set minimum and maximum bounds on either:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;min&#45;departure&#45;from&#45;reference 0.05 \
                             &#45;&#45;max&#45;departure&#45;from&#45;reference 0.90
</div>

### By minimum occurrence across samples

To keep only positions that are variable in at least N samples (useful for reducing stochastic noise):

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;min&#45;occurrence 3
</div>

### By coverage across all samples

To remove any position that has insufficient coverage in even one sample (requires `--quince-mode` to have coverage data for all samples at all positions):

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;quince&#45;mode \
                             &#45;&#45;min&#45;coverage&#45;in&#45;each&#45;sample 10
</div>

### By number of positions per split

To randomly subsample variable positions and keep at most N per split:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;num&#45;positions&#45;from&#45;each&#45;split 100
</div>

## Special reporting modes

### --quince-mode

By default, if a position is variable in only some samples, the other samples will have no entry for that position in the output. With `--quince-mode`, the program goes back to the raw data and fills in allele frequencies for every sample at every reported position, even those where no variation was detected. This is essential for statistical approaches that require a complete matrix.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;quince&#45;mode
</div>

Note that `--quince-mode` substantially increases runtime and output file size.

### --kiefl-mode

When using `--engine AA` or `--engine CDN`, the default behavior reports only positions that had detectable variation during profiling. With `--kiefl-mode`, all positions in the analyzed genes are reported, with invariant positions given a reference allele frequency of 1. This is useful for analyses that need a complete picture of every codon or amino acid position, not just the variable ones. Incompatible with `--quince-mode`.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;engine CDN \
                             &#45;&#45;kiefl&#45;mode
</div>

This flag was added in this [pull request](https://github.com/merenlab/anvio/pull/1794) where you can read about the tests performed to validate its behavior.

## Additional output columns

### Contig and split names

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;include&#45;contig&#45;names \
                             &#45;&#45;include&#45;split&#45;names
</div>

Contig names are excluded by default since they can nearly double file size.

### Gene-level coverage statistics

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;compute&#45;gene&#45;coverage&#45;stats
</div>

This appends per-gene coverage statistics to each row. It is computationally expensive and off by default.

### Per-site pN/pS values (CDN engine only)

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;engine CDN \
                             &#45;&#45;include&#45;site&#45;pnps
</div>

This adds 12 columns of per-site synonymous and nonsynonymous substitution information, computed relative to the reference, the consensus, and the most common consensus across samples.

### Additional data from the database

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;profile &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;b <span class="artifact&#45;n">[bin](/help/main/artifacts/bin)</span> \
                             &#45;&#45;engine AA \
                             &#45;&#45;include&#45;additional&#45;data
</div>

This appends any data stored in the `amino_acid_additional_data` table as extra columns. Currently only supported for the `AA` engine.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-variability-profile.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-variability-profile`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-variability-profile [-h] -p PROFILE_DB -c CONTIGS_DB [-s STRUCTURE_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [--splits-of-interest FILE] [--genes-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS] [--only-if-structure] [--samples-of-interest FILE] [--engine ENGINE] [--num-positions-from-each-split INT] [-r FLOAT] [-z FLOAT] [-j FLOAT] [-a FLOAT] [-x NUM_SAMPLES] [--min-coverage-in-each-sample INT] [--quince-mode] [--kiefl-mode] [--exclude-intergenic] [-o VARIABILITY_PROFILE] [--include-contig-names] [--include-split-names] [--include-additional-data] [--include-site-pnps] [--compute-gene-coverage-stats]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Declaring relevant anvi&#x27;o databases. First things first. Some are mandatory, some are optional.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-structure_db"><code class="parameter-flags">-s, --structure-db</code> <code class="parameter-metavar">STRUCTURE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o structure database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-bin">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: BIN</span> <span class="parameter-group-description">You need to pick someting to focus. You can ask anvi&#x27;o to work with a bin in a collection.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-split-names">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: SPLIT NAMES</span> <span class="parameter-group-description">Alternatively you can declare split names to focus.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-splits_of_interest"><code class="parameter-flags">--splits-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with split names. There should be only one column in the file, and each line should correspond to a unique split name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-gene-caller-ids">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: GENE CALLER IDs</span> <span class="parameter-group-description">Alternatively you can declare gene caller IDs to focus.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_if_structure"><code class="parameter-flags">--only-if-structure</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, your genes of interest will be further subset to only include genes with structures in your structure database, and therefore must be supplied in conjunction with a structure database, i.e. `-s &lt;your_structure_database&gt;`. If you did not specify genes of interest, ALL genes will be subset to those that have structures.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-samples">
<header class="parameter-group-header"><span class="parameter-group-title">SAMPLES</span> <span class="parameter-group-description">You can ask anvi&#x27;o to focus only on a subset of samples.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-samples_of_interest"><code class="parameter-flags">--samples-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with samples names. There should be only one column in the file, and each line should correspond to a unique sample name (without a column header).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-engine">
<header class="parameter-group-header"><span class="parameter-group-title">ENGINE</span> <span class="parameter-group-description">Set your engine. This is important as it will define the output profile you will get from this program. The engine can focus on nucleotides (NT), codons (CDN), or an amino acids (AA).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-engine"><code class="parameter-flags">--engine</code> <code class="parameter-metavar">ENGINE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Variability engine. The default is &#x27;NT&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">NT</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filters">
<header class="parameter-group-header"><span class="parameter-group-title">FILTERS</span> <span class="parameter-group-description">Parameters that will help you to do a very precise analysis. If you declare nothing from this bunch, you will get &quot;everything&quot; to play with, which is not necessarily a good thing...</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_positions_from_each_split"><code class="parameter-flags">--num-positions-from-each-split</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Each split may have one or more variable positions. By default, anvi&#x27;o will report every SNV position found in a given split. This parameter will help you to define a cutoff for the maximum number of SNVs to be reported from a split (if the number of SNVs is more than the number you declare using this parameter, the positions will be randomly subsampled).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-min_departure_from_reference"><code class="parameter-flags">-r, --min-departure-from-reference</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Takes a value between 0 and 1, where 1 is maximum divergence from the reference. Default is 0.000000. The reference here observation that corresponds to a given position in the mapped context.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-max_departure_from_reference"><code class="parameter-flags">-z, --max-departure-from-reference</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Similar to &#x27;--min-departure-from-reference&#x27;, but defines an upper limit for divergence. The default is 1.000000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-min_departure_from_consensus"><code class="parameter-flags">-j, --min-departure-from-consensus</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Takes a value between 0 and 1, where 1 is maximum divergence from the consensus for a given position. The default is 0.000000. The consensus is the most frequent observation at a given position.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-max_departure_from_consensus"><code class="parameter-flags">-a, --max-departure-from-consensus</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Similar to &#x27;--min-departure-from-consensus&#x27;, but defines an upper limit for divergence. The default is 1.000000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-min_occurrence"><code class="parameter-flags">-x, --min-occurrence</code> <code class="parameter-metavar">NUM_SAMPLES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum number of samples a nucleotide position should be reported as variable. Default is 1. If you set it to 2, for instance, each eligible variable position will be expected to appear in at least two samples, which will reduce the impact of stochastic, or unintelligible variable positions.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-min_coverage_in_each_sample"><code class="parameter-flags">--min-coverage-in-each-sample</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum coverage of a given variable nucleotide position in all samples. If a nucleotide position is covered less than this value even in one sample, it will be removed from the analysis. Default is 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-quince_mode"><code class="parameter-flags">--quince-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">The default behavior is to report allele frequencies only at positions where variation was reported during profiling (which by default uses some heuristics to minimize the impact of error-driven variation). So, if there are 10 samples, and a given position has been reported as a variable site during profiling in only one of those samples, there will be no information will be stored in the database for the remaining 9. When this flag is used, we go back to each sample, and report allele frequencies for each sample at this position, even if they do not vary. It will take considerably longer to report when this flag is on, and the use of it will increase the file size dramatically, however it is inevitable for some statistical approaches and visualizations.</span></dd>
<dt class="parameter parameter-switch" id="parameter-kiefl_mode"><code class="parameter-flags">--kiefl-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">The default behavior is to report codon/amino-acid frequencies only at positions where variation was reported during profiling (which by default uses some heuristics to minimize the impact of error-driven variation). When this flag is used, all positions are reported, regardless of whether they contained variation in any sample. The reference codon for all such entries is given a codon frequency of 1. All other entries (aka those with legitimate variation to be reported) remain unchanged. This flag can only be used with `--engine AA` or `--engine CDN` and is incompatible wth --quince-mode.</span></dd>
<dt class="parameter parameter-switch" id="parameter-exclude_intergenic"><code class="parameter-flags">--exclude-intergenic</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to exclude SNVs that occur in intergenic regions (i.e., nucleotide positions that do not fall within any gene call, whether coding or non-coding). This flag can only be used with `--engine NT`.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output file and style</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">VARIABILITY_PROFILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">variability.txt</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-include_contig_names"><code class="parameter-flags">--include-contig-names</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like contig names for each variable position to be included in the output file as a column. By default, we do not include contig names since they can practically double the output file size without any actual benefit in most cases.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_split_names"><code class="parameter-flags">--include-split-names</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like split names for each variable position to be included in the output file as a column.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_additional_data"><code class="parameter-flags">--include-additional-data</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like to append data stored in the `amino_acid_additional_data` table as additional columns to your output. NOTE: This is not yet implemented for the `nucleotide_additional_data` table.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_site_pnps"><code class="parameter-flags">--include-site-pnps</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you want per-site pN and pS added as additional columns. Synonymity will be calculated with respect to the reference, to the consenus, and to the most common consensus seen at that site across samples (popular consensus). The number of synonymous and nonsynonymous sites will also be stored for each case. This makes a total of 12 added columns. This flag will be ignored if --engine is not CDN.</span></dd>
<dt class="parameter parameter-switch" id="parameter-compute_gene_coverage_stats"><code class="parameter-flags">--compute-gene-coverage-stats</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, gene coverage statistics will be appended for each entry in variability report. This is very useful information, but will not be included by default because it is an expensive operation, and may take some additional time.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [All about SNVs, SCVs, and SAAVs](http://merenlab.org/2015/07/20/analyzing-variability/)

* [This program in action in the anvi&#x27;o structure tutorial](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/#supplying-anvi-display-structure-with-sequence-variability)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_variability_profile.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
