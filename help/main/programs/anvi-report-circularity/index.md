---
layout: program
title: anvi-report-circularity
excerpt: An anvi'o program. Predict contig circularity from paired-end read alignments in a given BAM file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-report-circularity
image:
  featurerelative: ../../../images/header.png
  display: true
---

Predict contig circularity from paired-end read alignments in a given BAM file. This program samples insert sizes, looks for RF pairs spanning junctions, and reports per-contig circularity statistics..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[contig-circularity-report-txt](../../artifacts/contig-circularity-report-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program takes advantage of paired-end read technology and uses reverse-forward (`RF`) read pairs to determine whether a given contig in a given <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> is circular, linear, or indeterminate by making use of the insert size distributions in the entirety of the <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>.

### Example run

<div class="codeblock" markdown="1">
anvi&#45;report&#45;circularity ANY&#45;SORTED&#45;BAM&#45;FILE.bam \
                        &#45;o CIRCULARITY&#45;REPORT.txt
</div>

### How it works

The following describes what <span class="artifact-p">[anvi-report-circularity](/help/main/programs/anvi-report-circularity)</span> does step by step while shedding light on the purpose and relevance of the command-line parameters.

* **Estimate insert-size statistics**. The run starts by trying to establish an understanding of the insert size statistics by sampling up to `--max-num-pairs-for-is-est` forward-reverse (`FR`) pairs from across all contigs (this is to make sure the program does not process ALL reads in a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>). Then, it computes the median insert size for the library, `M`, and its [median absolute deviation](https://en.wikipedia.org/wiki/Median_absolute_deviation), `MAD`. For this to work, a minimum of `--min-pairs-for-stats` `FR` pairs is required, otherwise we can't have an `M` and so the program stops with an error already. `MAD` should NEVER be zero (since it would indicate that you have a hyper-uniform library, but it is not possible), but in case you are running the program with simulated data, the program simply assumes `MAD` equals 1.0 and moves on.

{:.notice}
If you prepared your genomic or shotgun metagenomic libraries without a proper size selection step, this program will unlikely work well since `M` will be irrelevant for most pairs, and `MAD` will be relatively useless.

* **Scan each contig**. Then the program proceeds to read in the <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> for each contig to count `FR` pairs, and keep track of reads near contig edges. If the length of a contig, `L` is shorter than `2 × M`, they will be ignore ad this step as their miserable length would make it impossible for the downstream code to confidently determine if they are circular or not. These contigs are marked as `indeterminate` in the output file with a warning flag.

* **Compute the expected number of RFs**. The algorithm then calculates the expected number of `RF` pairs for a given contig of length `L` to be circular using the following logic,
  
   `E[RF] = N_FR × M / (L - M)`  

   where `N_FR` is the number of `FR` pairs on the contig. This reflects the chance that an `RF` pair spans a circular junction when linearized.

{:.notice}
The efficacy of the step above heavily depends on your assembler's restraint to not add stupid extras such as non-existent tandem repeats to contig ends (as they generally do with circular entities) :/

* **Score RFs that supports circularity**. For each `RF` pair, the algorithm then computes the 'circular insert size', let's call it `circular_insert`. Circular insert size is a new insert size value calculated by the formula `left_end + (L - right_start)` and simply answers the question, "*what the insert size of this `RF` paired end would have been __if__ the contig was indeed circular in the environment?". A given `RF` is one that 'supports' circularity, if `|circular_insert - M| ≤ T`, where `T` is tolerance, and it is calculated using `MAD` and the user-defined tolerance factor: `T = --insert-tolerance-factor × MAD`. Once all `RF` paris are concidered, the overall circularity support for a given contig is the fraction of observed `RF` pairs that are supporting.

{:.notice}
This step will most likely miss pro-viruses that occur in high-coverage chromosomes *and* found as circular genomes in capsids.

* **Assess edge coherence**. This is not immediately relevant to the circularity calculation, but it is something good to have in the report: the proportion of paired-end reads at the extremeties of contigs where both mates map *into* the contig. If both mates in every single paired-end read that occur at the contig edge, which is defined by thos that are within `M` nucleotides form either of the contig edges, the edge coherence is maximum (which may indicate that a given contig is linear, and fragment of no one). If the is a large number of paired-end reads in these edges with their mate mapping elsewhere or nowhere, then the edge coherence is minimum (which may indicate that the contig is a fragment of something).

* **Report**. The program concludes by generating an output file that lists for each contig their status, support scores, coverage counts, and warning flags.

### Details of the decision making

The program makes use of a combination of user-defined thresholds and the `min_required` variable which is equivalent to `--min-supporting-pairs` or `--expected-fraction-threshold × E[RF]`, whichever is larger.

Given all these, the final decision for contig status is made based on the rules below, which are evaluated in this order:

* **Circular** if supporting `RF` pairs ≥ `min_required` **and** circularity support ≥ `--circularity-confidence-threshold`.
* **Circular** if supporting `RF` pairs ≥ `--min-supporting-pairs` **and** ≥80% of observed `RF` pairs are supporting.
* **Linear** if no `RF` pairs are observed **and** there are at least 100 `FR` pairs on the contig.
* **Linear** if supporting `RF` pairs < `min_required` **and** circularity support < `--circularity-confidence-threshold`.
* Otherwise **indeterminate** (flagged as ambiguous evidence). Contigs with no `FR` pairs, very short lengths (`L < 2M`), or extremely low edge coverage are also reported as indeterminate with somewhat informative flags.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-report-circularity.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-report-circularity) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
