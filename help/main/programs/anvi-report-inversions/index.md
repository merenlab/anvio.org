---
layout: program
title: anvi-report-inversions
excerpt: An anvi'o program. Reports inversions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-report-inversions
image:
  featurerelative: ../../../images/header.png
  display: true
---

Reports inversions.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/FlorianTrigodet.jpg" /></div><div class="anvio-person-info-box"><a href="/people/FlorianTrigodet" target="_blank"><span class="anvio-person-name">Florian Trigodet</span></a><div class="anvio-person-social-box"><a href="mailto:trigodet.florian@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FlorianTrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/FlorianTrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[bams-and-profiles-txt](../../artifacts/bams-and-profiles-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[inversions-txt](../../artifacts/inversions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program allows you to find genomic inversions using metagenomic read recruitment results, and their activity patterns across samples.

An inversion is typically carried out by an invertase. This enzyme recognizes a pair of inverted repeats (IR), which are a special case of palindromic sequence where the repeats are facing inward on different DNA strands. The IRs are distant from each other and the invertase will invert the DNA fragment between the IRs.

In brief, anvi'o leverages paired-read orientation (through the `--fetch-filter` mechanism in <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> explained below) to locate regions of interest in a set of contigs. It screens for IRs within regions that are enriched in read pairs that are enriched in forward/forward or reverse/reverse orientations, and uses short-reads to confirm which IRs corrrespond to real inversions. Anvi'o can also compute the 'inversion activity', i.e., the relative proportion of each orientation of an inversion in each sample.

### Anvi'o philosophy to find inversions

Much like a T-Rex, the vision of anvi'o relies on movement and it cannot see an inversion if it does not move, or in this case, invert. So let's start with what you cannot do with this command: you cannot find inversions in a set of contigs alone.

To find an inversion, you need to have short-reads from at least one sample. If there is even a small fraction of the members of a microbial population that have an inverted sequence, then <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> will very likely find it for you!

### Before you run this program

Anvi'o is able to locate inversions using the paired-end read orientation. Regular paired-end reads are facing inward with a FWD/REV orientation, but when an inversion happens, some reads will be mapping in the opposite orientation regarding the reference. As a consequence, some paired-end reads will have the same orientation: FWD/FWD or REV/REV.

To leverage that information, anvi'o can profile bam files for FWD/FWD and REV/REV reads only with <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> to make special <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>.

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;i <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
             &#45;&#45;fetch&#45;filter inversion
</div>

### Other essential inputs to run this program

The main input for <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> is a <span class="artifact-n">[bams-and-profiles-txt](/help/main/artifacts/bams-and-profiles-txt)</span>, which is a TAB-delimited file composed of at least four columns:

* Sample name,
* <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>,
* <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> generated with the inversion fetch filter,
* <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>.

If you are interested in also characterizing inversion activity statistics across samples, you will also need to add two more columns into the <span class="artifact-n">[bams-and-profiles-txt](/help/main/artifacts/bams-and-profiles-txt)</span> file to point out the paths for the R1 and R2 FASTQ files.

Here is a standard run with default parameters:

<div class="codeblock" markdown="1">
anvi&#45;report&#45;inversion &#45;P <span class="artifact&#45;n">[bams&#45;and&#45;profiles&#45;txt](/help/main/artifacts/bams&#45;and&#45;profiles&#45;txt)</span> \
                      &#45;o inversions_output
</div>

### Identifying regions of interest

While anvi'o could directly search for inverted repeats in all the contigs, it would be a waste of time as many IRs are actually not related to inversions. Instead, anvi'o uses the FWD/FWD and REV/REV reads to identify regions of interest and constrain the search for IRs only in these regions.

For this step, you can set the minimum coverage of FWD/FWD and REV/REV reads to define 'stretches' with `--min-coverage-to-define-stretches`. Lower threshold yield more stretches, but also more noise.

The parameter `--min-stretch-length` defines the minimum length for a stretch to be considered.

FWD/FWD reads are found on the leftmost side of an inversion, while the REV/REV reads are found on the right side. When an inversion is quite long, a region of low to no coverage can separate the two groups of reads. With the flag `--min-distance-between-independent-stretches`, anvi'o merges fragmented stretches if they are closer than this value.

When the coverage is quite low, a stretch can be a little bit too short and miss potential IRs, so you use `--num-nts-to-pad-a-stretch` to extend the stretch by x bp upstream and downstream.

Here are the default values for these flags:

<div class="codeblock" markdown="1">
anvi&#45;report&#45;inversions &#45;P <span class="artifact&#45;n">[bams&#45;and&#45;profiles&#45;txt](/help/main/artifacts/bams&#45;and&#45;profiles&#45;txt)</span> \
                       &#45;o inversions_output \
                       &#45;&#45;min&#45;coverage&#45;to&#45;define&#45;stretches 10 \
                       &#45;&#45;min&#45;stretch&#45;length 50 \
                       &#45;&#45;min&#45;distance&#45;between&#45;independent&#45;stretches 2000 \
                       &#45;&#45;num&#45;nts&#45;to&#45;pad&#45;a&#45;stretch 100
</div>

### Finding palindromes

There are a few parameters to constrain the search for palindromic sequences of the IRs, like a minimum length that can be set with `--min-palindrome-length`, and a maximum number of mismatches with `--max-num-mismatches`.

You can set the minimum distance between two palindromic sequences with `--min-distance`. A distance of 0 would correspond to an in-place palindrome, though they don't relate to genomic inversions.

When searching for palindromes with mismatches, the algorithm will extend the palindrome length as much as possible, often including mismatches which are outside of the true palindrome sequences. The flag `--min-mismatch-distance-to-first-base` allows you to trim the palindrome when one or more mismatches are n nucleotides away from a palindrome's start or stop. The default value is 1, meaning that a palindrome `MMMMMM(X)M`, where M denotes matching nucleotides and X a mismatch, will be trimmed to the first 6 matches `MMMMMM`.

There are currently two algorithms to find palindromes in anvi'o: numba and BLAST. Numba is very fast when looking for palindromes in short sequences, and BLAST is more efficient for longer stretches. Anvi'o dynamically set the algorithm accoding to each stretch length: numba for stretches under 5,000 bp and BLAST for longer stretches. You can use the flag `--palindrome-search-algorithm` to ask anvi'o to use either of these methods explicitly. Note that results between the two methods may differ.

<div class="codeblock" markdown="1">
anvi&#45;report&#45;inversions &#45;P <span class="artifact&#45;n">[bams&#45;and&#45;profiles&#45;txt](/help/main/artifacts/bams&#45;and&#45;profiles&#45;txt)</span> \
                       &#45;o inversions_output \
                       &#45;&#45;min&#45;palindrome&#45;length 10 \
                       &#45;&#45;max&#45;num&#45;mismatches 1 \
                       &#45;&#45;min&#45;distance 50 \
                       &#45;&#45;min&#45;mismatch&#45;distance&#45;to&#45;first&#45;base 1 \
                       &#45;&#45;palindrome&#45;search&#45;algorithm numba
</div>

### Confirming inversions

Multiple palindromes are usually reported for each stretch and to confirm which one actually relates to an inversions, anvi'o searches short-reads in the bam file for unique constructs that can only occur when a genomic region inverted.

By default, anvi'o reports the first confirmed palindrome and moves to the next stretch. This process is very efficient as a stretch usually has only one inversion. But in rare cases, you can have multiple inversions happening in a single stretch. Then, you can use the flag `--check-all-palindromes` and anvi'o will look for inversion evidence in the short-reads for every palindrome in a stretch.

Anvi'o looks for inversion evidence in the FWD/FWD and REV/REV reads first. If no evidence is found, then it searches the rest of the reads mapping to the region of interest. If you want to only search the FWD/FWD and REV/REV reads you can use the flag `--process-only-inverted-reads`

### Computing inversion activity

If you provide the short-reads R1 and R2 in the <span class="artifact-n">[bams-and-profiles-txt](/help/main/artifacts/bams-and-profiles-txt)</span>, anvi'o can compute the proportion of the inversion's orientation in each sample.

This is a very time consuming step, and if you have multiple sample, you can use the parameter `--num-threads` to set the maximum of threads for multithreading when possible.

To compute the inversion's ratios, anvi'o designs in silco primers based on the palidrome sequence and the upstream/downstream genomic context to search short-reads in the raw fastq files. The variable `--oligo-primer-base-length` is used to control how much of the palindrome should be used to design the primers. The longer, the more specific, but if it is too long, fewer reads will match to the primer.

This step is very computationally intense, but you can test it with the parameter `--end-primer-search-after-x-hits`. Once the total number of reads reach this parameter, anvi'o will stop searching further and will continue with the next sample. This flag is only good for testing.

If you want to skip this step, you can use the flag `--skip-compute-inversion-activity`.

An example command with 12 threads:

<div class="codeblock" markdown="1">
anvi&#45;report&#45;inversions &#45;P <span class="artifact&#45;n">[bams&#45;and&#45;profiles&#45;txt](/help/main/artifacts/bams&#45;and&#45;profiles&#45;txt)</span> \
                       &#45;o inversions_output \
                       &#45;&#45;num&#45;threads 12 \
                       &#45;&#45;oligo&#45;primer&#45;base&#45;length 12
</div>

### Computing inversion activity using previously computed inversions

It is possible to instruct anvi'o to use previously reported inversions to characterize their activity across a larger set of samples. This is possible by passing the program <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> the output file for consensus inversions (i.e., 'CONSENSUS-INVERSIONS.txt') or the output file for sample-specific inversions (i.e., 'INVERSIONS-IN-[SAMPLE-NAME].txt') from a previous run using the flag `--pre-computed-inversions`:

<div class="codeblock" markdown="1">
anvi&#45;report&#45;inversions &#45;P <span class="artifact&#45;n">[bams&#45;and&#45;profiles&#45;txt](/help/main/artifacts/bams&#45;and&#45;profiles&#45;txt)</span> \
                       &#45;&#45;pre&#45;computed&#45;inversions inversions_output/INVERSIONS&#45;CONSENSUS.txt
                       &#45;o activity_calculations
</div>

In this mode, <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> will not recalulate inversions, and only report the activity of inversions found in the input file across samples listed in the <span class="artifact-n">[bams-and-profiles-txt](/help/main/artifacts/bams-and-profiles-txt)</span> file.

### Reporting genomic context around inversions

For every inversion, anvi'o can report the surrounding genes and their function as additional files.

You can use the flag `--num-genes-to-consider-in-context` to choose how many genes to consider upstream/downstream of the inversion. By default, anvi'o report three genes downstream, and three genes upstream.

To select a specific gene caller, you can use `--gene-caller`. The default is prodigal.

If you want to skip this step, you can use the flag `--skip-recovering-genomic-context`.

### Targeted search

If you are interested in a given contig region you can use the following flags to limit the search:

* `--target-contig`: contig of interest,
* `--target-region-start`: the start position of the region of interest,
* `--target-region-end`: the end position of the region of interest.

### Output
<span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> searches for inversions in every single sample at a time and thus generates a TAB-delimited table for every sample: `INVERSIONS-IN-SAMPLE_01.txt`, `INVERSIONS-IN-SAMPLE_02`, ...

These tables contains the following information:

* entry ID,
* contig name,
* first palindrome sequence,
* aligment midline,
* second palindrome sequence,
* start and stop position of the first and second palindrome sequence,
* number of mismatches,
* number of gaps,
* length of the palindrome sequence,
* distance between the first and second palindrome seqeuences, i.e. the size of the inversion,
* the number of samples in which it was detected and confirmed,
* the in silico primers used to compute the inversion's activity, for the first and second palindrome,
* the oligo corresponding to the reference sequence.

Anvi'o eventually creates a consensus table with all the unique inversions found accross all your samples in a file called `INVERSIONS-CONSENSUS.txt`. This table has the same format as the individual sample outputs, with the 'entry ID' replaced by a unique inversion ID.

Another default output table is named `ALL-STRETCHES-CONSIDERED.txt` and it reports every stretch that passed the ['Identifying regions of interest'](#identifying-regions-of-interest) parameters. It reports the maximum coverage of FWD/FWD and REV/REV in that stretch, per sample. It also reports the number of palindromes found and if a true inversion was confirmed.

If the user enables the reporting of the genomic context, two addition TAB-delimited tables are generated: `INVERSIONS-CONSENSUS-SURROUNDING-GENES.txt` and `INVERSIONS-CONSENSUS-SURROUNDING-FUNCTIONS.txt`.
The first table reports the gene calls surrounding every inversion when possible (inversions_id, gene_caller_id, start and stop position, orientation, gene_caller and contig).
The second table reports the function associated with every gene call reported in the first file (inversions_id, gene_caller_id, source, accession, function).

Finally, if the user provides R1 and R2 fastq files and enables the reporting of inversion's activity, <span class="artifact-p">[anvi-report-inversions](/help/main/programs/anvi-report-inversions)</span> will generate a long-format file named `INVERSION-ACTIVITY.txt`. This file reports, for every inversion and sample, the relative proportion and read abundance of unique oligos, which either correspond to the reference contig (no inversion), or to an inversion sequence. The inversion's activity is computed and reported for both sides of each inversion.







{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-report-inversions.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-report-inversions) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
