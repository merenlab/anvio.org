---
layout: program
title: anvi-profile
excerpt: An anvi'o program. The flagship anvi&#x27;o program to profile a BAM file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-profile
image:
  featurerelative: ../../../images/header.png
  display: true
---

The flagship anvi&#x27;o program to profile a BAM file. Running this program on a BAM file will quantify coverages per nucleotide position in read recruitment results and will average coverage and detection data per contig. It will also calculate single-nucleotide, single-codon, and single-amino acid variants, as well as structural variants, such as insertion and deletions, to eventually stores all data into a single anvi&#x27;o profile database. For very large projects, this program can demand a lot of time, memory, and storage resources. If all you want is to learn coverages of your nutleotides, genes, contigs, or your bins collections from BAM files very rapidly, and/or you do not need anvi&#x27;o single profile databases for your project, please see other anvi&#x27;o programs that profile BAM files, `anvi-script-get-coverage-from-bam` and `anvi-profile-blitz`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


This program seems to know what its doing. It needs no input material from its user. Good program.


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[single-profile-db](../../artifacts/single-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-items-order](../../artifacts/misc-data-items-order) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[variability-profile](../../artifacts/variability-profile) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **creates a <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> from a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>**.

Once you have a <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>, you can run programs like <span class="artifact-p">[anvi-cluster-contigs](/help/main/programs/anvi-cluster-contigs)</span>, <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>, and <span class="artifact-p">[anvi-gen-gene-level-stats-databases](/help/main/programs/anvi-gen-gene-level-stats-databases)</span>, as well as use the interactive interface with <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>. If you want to run these same contigs against multiple BAM files (because you have multiple samples), you'll combine your <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>s into a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> after you've created them all using <span class="artifact-p">[anvi-merge](/help/main/programs/anvi-merge)</span>. See the pages for <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> or <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> for more you can do with these artifacts.

In short, this program runs various analyses on the contigs in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and how they relate to the sample information stored in the <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> you provided. It then stores this information into a <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>. Specifically, this program calculates
* coverage per nucleotide position (if you're unsure what coverage refers to, check out [this page](http://merenlab.org/vocabulary/#coverage))
* single-nucleotide, single-codon, and single-amino acid variants (You can find all of those terms on the vocab page linked above, as well as a more detailed explaination [here](http://merenlab.org/2015/07/20/analyzing-variability/#an-intro-to-single-nucleotidecodonamino-acid-variation))
* structural variants such as insertions or deletions

## Basic Usage

### Inputs

This program takes in an [indexed](https://merenlab.org/software/anvio/help/programs/anvi-init-bam) <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> and a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. The BAM file contains the short reads from a single sample that will be used to create the profile database. Thus, here is a standard run with default parameters:

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;i <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

Alternatively, if you lack mapping data, you can add the flag `--blank-profile` so that you can still get the functionality of a profile database.

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>  \
            &#45;&#45;blank&#45;profile
</div>

### Checking your BAM file: always a good idea

If you want to first check your BAM file to see what contigs it contains, just use the flag `--list-contigs` to see a comprehensive list.

### Profiling a subset of contigs

*Note: This describes how to profile a named subset of contigs. To profile a subset of contigs based on their characterists (for example, only contigs of a certain length or that have a certain coverage), see the section below on "contig specifications"*

By default, anvi'o will use every contig in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. However, if you wish to focus specifically on a subset of these contigs, just provide a file that contains only the names of the contigs you want to analyze, one per line, using the tag `--contigs-of-interest`.

For example, you could run

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c Ross_sea_contigs.db  \
             &#45;&#45;blank&#45;profile \
             &#45;&#45;contigs&#45;of&#45;interest contigs_i_like.txt
</div>

Where `contigs_i_like.txt` looks like this:

    SF15-RossSeacontig4922
    SF15-RossSeacontig702

## Analysis Parameters

Changing these will affect the way that your sequences are analyzed.

Keep in mind that if you plan to merge your resulting <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> with others later in the project, you'll want to keep these parameters consistent.

### Contig Specification

To profile only contigs within a specific length, you can use the flags `--min-contig-length` and `-max-contig-length`. By default, the minimum length for analysis is 1000 and there is no maximum length.

But beyond these flags, you can specify which contigs you would like to profile much more explicitly using the flag `--contigs-of-interest`.

For instance, if you wish to work only with contigs that have more than a certain coverage across your samples, you can first run the program <span class="artifact-p">[anvi-profile-blitz](/help/main/programs/anvi-profile-blitz)</span> on all BAM files, then use the resulting output file <span class="artifact-n">[bam-stats-txt](/help/main/artifacts/bam-stats-txt)</span> to identify contigs of interest based on their coverages across samples, then put their names in a text file, and pass this file to <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> using the flag `--contigs-of-interest` (the anvi'o profile used to have a flag for this, `--min-mean-coverage`, that allowed users to remove contigs based on their coverage in a given sample, but [we recently removed it](https://github.com/merenlab/anvio/issues/2047) to promote explicit specification of contigs.

### Filter reads

You can also ignore reads in your BAM file with a percent identity to the reference less than some threshold using the flag `--min-percent-identity`.  By default, all reads are used.

For example, the following code will only look at contigs longer than 2000 nts and will ignore BAM file reads with less than 95 percent identity to the reference:

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c Ross_sea_contigs.db  \
            &#45;i bam_file.bam \
            &#45;&#45;min&#45;contig&#45;length 2000 \
            &#45;&#45;min&#45;percent&#45;identity 95
</div>

By default, anvi'o fetches all reads from the bam file. With `--fetch-filter` you can determine which reads from a bam file will be used for profiling. The current filters are:

* `double-forwards`: only paired-end reads with both R1 and R2 with a 'forward' orientation,
* `double-reverses`: only paired-end reads with both R1 and R2 with a 'reverse' orientation,
* `inversions`: only paired-end reads with both R1 and R2 either 'forward' or 'reverse' and a maximum insert size of 2000 nts,
* `single-mapped-reads`: only single mapped reads (mate is unmapped),
* `distant-pairs-1K`: only paired-end reads with a minimum 1000 nts insert size.

For example, the following code only considers 'inversions' reads:

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c Ross_sea_contigs.db \
             &#45;i bam_file.bam \
             &#45;&#45;fetch&#45;filter inversions
</div>

### Ancient DNA friendly SNV profiling

By default, anvi'o will report variable nucleotides and their allele frequencies from any nucleotide position in a given short read found in the BAM file. Although, there are some applications where the observed variation in short reads will depend on the location of the nucleotide positions in the read. For instance, in ancient DNA sequencing, the start and the end of short reads are often suffer from DNA damage, leading to an increased number of single-nucleotide variants that emerge from the edges of short reads when they are aligned to a reference. The program <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> has an additional parameter to mitigate this: `--skip-edges`, which can be used like this:

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
             &#45;i <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
             &#45;&#45;skip&#45;edges 5
</div>


This parameter offers a means to ameliorate the inflation of SNVs due to biases associated with short-read edges by enabling the user to ask anvi'o to ignore a few number of nucleotides from the beginning and the end of short reads as they're being profiled. For instance, a parameter of `5` like shown above, will make sure that the mismatches of a given read to the reference sequence at the first and the last 5 nucleotides will not be reported in the variability table. Please note that the coverage data will not be impacted by the use of this parameter -- only what is reported as variants will be impacted, decreasing the impact of noise in specific applications.

See [https://github.com/merenlab/anvio/pull/2081](https://github.com/merenlab/anvio/pull/2081) for more information.

### Hierarchical Clustering

#### To cluster or not to cluster?

By default, anvi'o will not try to cluster your splits (since it takes quite a bit of runtime) unless you are using the tag `--blank-profile`. If you don't want to run this, use the tag `--skip-hierarchical-clustering`.

If you're planning to later merge this sample with others, it is better to perform clustering while running <span class="artifact-p">[anvi-merge](/help/main/programs/anvi-merge)</span> than at this stage.

However, if you want to bin this single sample or otherwise want clustering to happen, just use the tag `--cluster-contigs`.

If you do plan to cluster, you can set a custom distance metric or a custom linkage method.

### Variability

Anvi-profile will throw away variability data below certain thresholds to reduce noise. After all, if you have a single C read at a position with a 1000X coverage where all other reads are T, this is probably not a variant position that you want to investigate further. By default, it will not analyze positions with coverage less than 10X, and it will further discard variants based on [this criteria](https://merenlab.org/2015/07/20/analyzing-variability/#de-novo-characterization-and-reporting-of-snvs).

However, you can change the coverage threshold using the  `--min-coverage-for-variability` flag. You can also report every variability position using the flag `--report-variability-full`.

For example, if you wanted to view every variant, you would profile with the following:

<div class="codeblock" markdown="1">
anvi&#45;profile &#45;c Ross_sea_contigs.db  \
            &#45;i bam_file.bam \
            &#45;&#45;min&#45;coverage&#45;for&#45;variability 1 \
            &#45;&#45;report&#45;variability&#45;full
</div>

## Other Parameters

You should provide the sample name with the flag `-S` and can provide a description of your project using the `--description` tag followed by a text file. These will help anvi'o name output files and will show up in the anvi'o interfaces down the line.

You can characterize the codon frequencies of genes in your sample at the cost of some runtime. Despite time being money, codon frequency analysis can be helpful downstream. Simply add the tag `--profile-SCVs` and watch the magic happen.

{:.notice}
If you have prior experience with `--profile-SCVs` being slow, you will be surprised how fast it is
since v6.2

Alternatively, you can choose not to store insertion and deletion data or single nucleotide variant data.

If you know the limits of your system, you can also multithread this program. See the program help menu for more information.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-profile.md) to update this information.


## Additional Resources


* [Another description as part of the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-profile)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-profile) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
