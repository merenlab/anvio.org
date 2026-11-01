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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[single-profile-db](../../artifacts/single-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[variability-profile](../../artifacts/variability-profile) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items-order](../../artifacts/misc-data-items-order) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


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

### Automatic pre-filtering of contigs without coverage

Before profiling begins, <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> automatically scans the BAM index to identify contigs that have at least one mapped read, and only loads data for those contigs. This is transparent and requires no user intervention.

This is particularly useful when profiling against a large reference database (such as a collection of MAGs) where most contigs in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> will have zero coverage from any individual metagenome. By skipping these contigs early, anvi'o avoids loading unnecessary data into memory. If you also provide a `--contigs-of-interest` file, anvi'o will take the intersection of contigs with coverage and your contigs of interest.

## Analysis Parameters

Changing these will affect the way that your sequences are analyzed.

Keep in mind that if you plan to merge your resulting <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span> with others later in the project, you'll want to keep these parameters consistent.

### Contig Specification

To profile only contigs within a specific length, you can use the flags `--min-contig-length` and `-max-contig-length`. By default, the minimum length for analysis is 1000 and there is no maximum length.

But beyond these flags, you can specify which contigs you would like to profile much more explicitly using the flag `--contigs-of-interest`.

For instance, if you wish to work only with contigs that have more than a certain coverage across your samples, you can first run the program <span class="artifact-p">[anvi-profile-blitz](/help/main/programs/anvi-profile-blitz)</span> on all BAM files, then use the resulting output file <span class="artifact-n">[bam-stats-txt](/help/main/artifacts/bam-stats-txt)</span> to identify contigs of interest based on their coverages across samples, then put their names in a text file, and pass this file to <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> using the flag `--contigs-of-interest`.

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

{:.warning}
If you are profiling a large number of splits (e.g., more than 200,000) with many threads (e.g., more than 20), be aware that the memory requirement may outweigh the time gained by multithreading. If your job fails due to an out-of-memory (OOM) error, consider re-running with fewer threads.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-profile.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-profile`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-profile [-h] [-i INPUT_BAM] [-c CONTIGS_DB] [--blank-profile] [-S NAME] [--description TEXT_FILE] [-M INT] [--max-contig-length INT] [--contigs-of-interest FILE] [--list-contigs] [--min-percent-identity PERCENT_IDENTITY] [--fetch-filter FILTER] [--report-variability-full] [-V INT] [--skip-SNV-profiling] [--skip-INDEL-profiling] [--profile-SCVs] [--skip-edges NUM NUCLEOTIDES] [--cluster-contigs] [--skip-hierarchical-clustering] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] [-o DIR_PATH] [-W] [-T NUM_THREADS] [--queue-size INT] [--write-buffer-size INT] [--force-multi]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">There are two possible inputs for anvio profiler. You must to declare either of these two.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-input_file"><code class="parameter-flags">-i, --input-file</code> <code class="parameter-metavar">INPUT_BAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Sorted and indexed BAM file to analyze. Takes a long time depending on the length of the file and parameters used for profiling.</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-switch" id="parameter-blank_profile"><code class="parameter-flags">--blank-profile</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you only have contig sequences, but no mapping data (i.e., you found a genome and would like to take a look from it), this flag will become very handy. After creating a contigs database for your contigs, you can create a blank anvi&#x27;o profile database to use anvi&#x27;o interactive interface with that contigs database without any mapping data.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-project-details">
<header class="parameter-group-header"><span class="parameter-group-title">PROJECT DETAILS</span> <span class="parameter-group-description">Set your sample name for this profile. If you don&#x27;t decalere .anything here, anvi&#x27;o will come up with a sample name based on the BAM file name, and you will not be able to change it later.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-sample_name"><code class="parameter-flags">-S, --sample-name</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">It is important to set a sample name (using only ASCII letters and digits and without spaces) that is unique (considering all others). If you do not provide one, anvi&#x27;o will try to make up one for you based on other information (although, you should never let the software decide these things).</span></dd>
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-contig-filters">
<header class="parameter-group-header"><span class="parameter-group-title">CONTIG FILTERS</span> <span class="parameter-group-description">Of all reference contigs that are used for read recruitment, you can focus only those that match certain lenght criteria or a subset you defined explicilty.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_contig_length"><code class="parameter-flags">-M, --min-contig-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum length of contigs in a BAM file to analyze. The minimum length should be long enough for tetra-nucleotide frequency analysis to be meaningful. There is no way to define a golden number of minimum length that would be applicable to genomes found in all environments, but we chose the default to be 1000, and have been happy with it. You are welcome to experiment, but we advise to never go below 1,000. You also should remember that the lower you go, the more time it will take to analyze all contigs. You can use --list-contigs parameter to have an idea how many contigs would be discarded for a given M.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1000</code></span></dd>
<dt class="parameter" id="parameter-max_contig_length"><code class="parameter-flags">--max-contig-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Just like the minimum contig length parameter, but to set a maximum. Basically this will remove any contig longer than a certain value. Why would anyone need this? Who knows. But if you ever do, it is here.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-contigs_of_interest"><code class="parameter-flags">--contigs-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">It is possible to focus on only a set of contigs. If you would like to do that and ignore the rest of the contigs in your contigs database, use this parameter with a flat file every line of which desribes a single contig name.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_contigs"><code class="parameter-flags">--list-contigs</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the program will list contigs in the BAM file and exit gracefully without any further analysis.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-short-read-filters">
<header class="parameter-group-header"><span class="parameter-group-title">SHORT READ FILTERS</span> <span class="parameter-group-description">Choose which reads to work (or not to work) with, like a pro. These parameters will define which short reads from a BAM file will be considered during anvi&#x27;o profiling.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_percent_identity"><code class="parameter-flags">--min-percent-identity</code> <code class="parameter-metavar">PERCENT_IDENTITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">Ignore any reads with a percent identity to the reference less than this number, e.g. 95. If not provided, all reads in the BAM file will be used (and things will run faster).</span></dd>
<dt class="parameter" id="parameter-fetch_filter"><code class="parameter-flags">--fetch-filter</code> <code class="parameter-metavar">FILTER</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o fetches all reads from a BAM file. Once a read is &#x27;fetched&#x27;, some reads may be excluded if you have used parameters such as `--min-percent-identity`. But the `--fetch-filter` is different as it determines WHICH reads from a BAM file will be used for profiling at all. You can do a lot of fun things with this parameter. For details, please read the online documentation for `anvi-profile` using the URL you should see at the end of the `--help` output on your terminal. The known filters are the following: proper-pairs, double-forwards, double-reverses, inversions, distant-inversions, single-mapped-reads, distant-pairs-1K.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-population-genetics">
<header class="parameter-group-header"><span class="parameter-group-title">POPULATION GENETICS</span> <span class="parameter-group-description">All things related to downstream population genetics analyses. Anvi&#x27;o is able to profile single-nucleotide variants and single-codon variants that occur in reads stored in your BAM file. Using these parameters you can have more control over how it is done.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-report_variability_full"><code class="parameter-flags">--report-variability-full</code></dt>
<dd class="parameter-details"><span class="parameter-help">One of the things anvi-profile does is to store information about variable nucleotide positions (SNVs). Usually it does not report every variable position, since not every variable position is genuine variation. Say, if you have 1,000 coverage, and all nucleotides at that position are Ts and only one of them is a C, the confidence of that C being a real variation is quite low. anvi&#x27;o has a simple algorithm in place to reduce the impact of noise. However, using this flag you can disable it and ask profiler to report every single variation (which may result in very large output files and millions of reports, but you are the boss). Do not forget to take a look at &#x27;--min-coverage-for-variability&#x27; parameter. Also note that this flag controls indel reporting: normally &#x27;--min-coverage-for-variability&#x27; and internal anvi&#x27;o heuristics control whether or not indels should be reported, but with this flag all indels are reported.</span></dd>
<dt class="parameter" id="parameter-min_coverage_for_variability"><code class="parameter-flags">-V, --min-coverage-for-variability</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum coverage of a nucleotide position to be subjected to SNV profiling. By default, anvi&#x27;o will not attempt to make sense of variation in a given nucleotide position if it is covered less than 10X. You can change that minimum using this parameter. This parameter also controls the minimum coverage for reporting indels. If an indel is observed at a position, yet the coverage of the position in the contig where the indel starts is less than this parameter, the indel will be discarded.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_snv_profiling"><code class="parameter-flags">--skip-SNV-profiling</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o characterizes single-nucleotide variation in each sample. The use of this flag will instruct profiler to skip that step. Please remember that parameters and flags must be identical between different profiles using the same contigs database for them to merge properly.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_indel_profiling"><code class="parameter-flags">--skip-INDEL-profiling</code></dt>
<dd class="parameter-details"><span class="parameter-help">The alignment of a read to a reference genome/sequence can be imperfect, such that the read exhibits insertions or deletions relative to the reference. Anvi&#x27;o normally stores this information in the profile database since the time taken and extra storage do not amount to much, but if you insist on not having this information, you can skip storing this information by providing this flag. Note: If --skip-SNV-profiling is provided, --skip-INDEL-profiling will automatically be enforced.</span></dd>
<dt class="parameter parameter-switch" id="parameter-profile_scvs"><code class="parameter-flags">--profile-SCVs</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o can perform accurate characterization of codon frequencies in genes during profiling. While having codon frequencies opens doors to powerful evolutionary insights in downstream analyses, due to its computational complexity, this feature comes &#x27;off&#x27; by default. Using this flag you can rise against the authority, as you always should, and make anvi&#x27;o profile codons.</span></dd>
<dt class="parameter" id="parameter-skip_edges"><code class="parameter-flags">--skip-edges</code> <code class="parameter-metavar">NUM NUCLEOTIDES</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will report variable nucleotides and their allele frequencies from any nucleotide .position in a given short read found in the BAM file. Although, there are some applications where the observed variation in short reads will depend on the location of the nucleotide positions in the read. For instance, in ancient DNA sequencing, the start and the end of short reads are often suffer from DNA damage, leading to an increased number of single-nucleotide variants that emerge from the edges of short reads when they are aligned to a reference. This parameter offers a means to ameliorate the inflation of SNVs due to biases associated with short-read edges by enabling the user to ask anvi&#x27;o to ignore a few number of nucleotides from the beginning and the end of short reads as they&#x27;re being profiled. For instance, a parameter of `5` will make sure that the mismatches of a given read to the reference sequence at the first and the last 5 nucleotides will not be reported in the variability table. Please note that the coverage data will not be impacted by the use of this parameter -- only what is reported as variants will be impacted, decreasing the impact of noise in specific applications.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">0</code> <code class="parameter-choice">1</code> <code class="parameter-choice">2</code> <code class="parameter-choice">3</code> <code class="parameter-choice">4</code> <code class="parameter-choice">5</code> <code class="parameter-choice">6</code> <code class="parameter-choice">7</code> <code class="parameter-choice">8</code> <code class="parameter-choice">9</code> <code class="parameter-choice">10</code> <code class="parameter-choice">11</code> <code class="parameter-choice">12</code> <code class="parameter-choice">13</code> <code class="parameter-choice">14</code> <code class="parameter-choice">15</code> <code class="parameter-choice">16</code> <code class="parameter-choice">17</code> <code class="parameter-choice">18</code> <code class="parameter-choice">19</code> <code class="parameter-choice">20</code> <code class="parameter-choice">21</code> <code class="parameter-choice">22</code> <code class="parameter-choice">23</code> <code class="parameter-choice">24</code> <code class="parameter-choice">25</code> <code class="parameter-choice">26</code> <code class="parameter-choice">27</code> <code class="parameter-choice">28</code> <code class="parameter-choice">29</code> <code class="parameter-choice">30</code> <code class="parameter-choice">31</code> <code class="parameter-choice">32</code> <code class="parameter-choice">33</code> <code class="parameter-choice">34</code> <code class="parameter-choice">35</code> <code class="parameter-choice">36</code> <code class="parameter-choice">37</code> <code class="parameter-choice">38</code> <code class="parameter-choice">39</code> <code class="parameter-choice">40</code> <code class="parameter-choice">41</code> <code class="parameter-choice">42</code> <code class="parameter-choice">43</code> <code class="parameter-choice">44</code> <code class="parameter-choice">45</code> <code class="parameter-choice">46</code> <code class="parameter-choice">47</code> <code class="parameter-choice">48</code> <code class="parameter-choice">49</code> <code class="parameter-choice">50</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-hierarchical-clustering">
<header class="parameter-group-header"><span class="parameter-group-title">HIERARCHICAL CLUSTERING</span> <span class="parameter-group-description">Do you want your splits to be clustered? Yes? No? Maybe? Remember: By default, anvi-profile will not perform hierarchical clustering on your splits; but if you use `--blank` flag, it will try. You can skip that by using the `--skip-hierarchical-clustering` flag.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-cluster_contigs"><code class="parameter-flags">--cluster-contigs</code></dt>
<dd class="parameter-details"><span class="parameter-help">Single profiles are rarely used for genome binning or visualization, and since clustering step increases the profiling runtime for no good reason, the default behavior is to not cluster contigs for individual runs. However, if you are planning to do binning on one sample, you must use this flag to tell anvi&#x27;o to run cluster configurations for single runs on your sample.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_hierarchical_clustering"><code class="parameter-flags">--skip-hierarchical-clustering</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you are not planning to use the interactive interface (or if you have other means to add a tree of contigs in the database) you may skip the step where hierarchical clustering of your items are preformed based on default clustering recipes matching to your database type.</span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. Only relevant if you are using `--cluster-contigs` flag. The default is &quot;euclidean&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">euclidean</code></span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The linkage method for the hierarchical clustering. Just like the distance metric this is only relevant if you are using it with `--cluster-contigs` flag. The default is &quot;ward&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ward</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-control">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT CONTROL</span> <span class="parameter-group-description">Assert your dominance over output dsetinations.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span> <span class="parameter-group-description">Performance settings for profiler</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-queue_size"><code class="parameter-flags">--queue-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The queue size for worker threads to store data to communicate to the main thread. The default is set by the class based on the number of threads. If you have *any* hesitation about whether you know what you are doing, you should not change this value.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-write_buffer_size"><code class="parameter-flags">--write-buffer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many items should be kept in memory before they are written to the disk. The default is 5000. The larger the buffer size, the less frequently the program will access the disk, yet the more memory will be consumed since the processed items will be cleared off the memory only after they are written to the disk. The default buffer size will likely work for most cases, but if you feel you need to reduce it, we trust you. Please keep an eye on the memory usage output to make sure the memory use never exceeds the size of the physical memory.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">5000</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-force_multi"><code class="parameter-flags">--force-multi</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is not useful to non-developers. It forces the multi-process routine even when 1 thread is chosen.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Another description as part of the metagenomic workflow](http://merenlab.org/2016/06/22/anvio-tutorial-v2/#anvi-profile)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/profile.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
