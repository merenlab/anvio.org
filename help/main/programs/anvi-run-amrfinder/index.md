---
layout: program
title: anvi-run-amrfinder
excerpt: An anvi'o program. You can use this to annotate genes in a contigs-db with NCBI&#x27;s AMRFinderPlus to find antimicrobial resistance genes, stress response genes (such as metal and biocide resistance), and virulence genes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-amrfinder
image:
  featurerelative: ../../../images/header.png
  display: true
---

You can use this to annotate genes in a contigs-db with NCBI&#x27;s AMRFinderPlus to find antimicrobial resistance genes, stress response genes (such as metal and biocide resistance), and virulence genes..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-jessika.jpg" /></div><div class="anvio-person-info-box"><a href="/people/jessika-fuessel" target="_blank"><span class="anvio-person-name">Jessika Fuessel</span></a><div class="anvio-person-social-box"><a href="mailto:ju.fuessel@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FuesselJessika" class="person-social" target="_blank"><i class="fab fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/jessika-fuessel" class="person-social" target="_blank"><i class="fab fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[amrfinder-data](../../artifacts/amrfinder-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **annotates genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with NCBI's [AMRFinderPlus](https://github.com/ncbi/amr/wiki)**, which identifies antimicrobial resistance genes, stress response genes (such as metal, biocide, heat, and acid resistance), and virulence genes. The output is a <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> artifact.

{:.notice}
Keep in mind that AMRs are difficult to annotate and AMRFinderPlus's database is mostly built from AMRs in host associated microbes. To get a comprehensive picture of AMRs in environmental populations you would need to dive much deeper than using this tool only.

Before you can run this program, you will need to install AMRFinderPlus and set up its database with <span class="artifact-p">[anvi-setup-amrfinder](/help/main/programs/anvi-setup-amrfinder)</span>.

### Where does AMRFinderPlus come from?

[AMRFinderPlus](https://www.ncbi.nlm.nih.gov/pathogens/antimicrobial-resistance/AMRFinder/) is a tool developed and maintained by the [National Center for Biotechnology Information (NCBI)](https://www.ncbi.nlm.nih.gov/) (as a part of its [Pathogen Detection](https://www.ncbi.nlm.nih.gov/pathogens/) project). It searches a given set of protein sequences against the curated Reference Gene Database and its curated collection of HMMs, both of which NCBI updates regularly. Anvi'o does not develop or maintain AMRFinderPlus or its database, but simply runs AMRFinderPlus on the genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and stores its findings in a way other anvi'o programs can use them. So if you have questions about how a given gene is annotated, the [AMRFinderPlus documentation](https://github.com/ncbi/amr/wiki) is the best place to look.

If you use <span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span> in your work, please don't forget to cite AMRFinderPlus along with anvi'o (anvi'o will remind you to do it in the output of the program and ask you to cite [Feldgarden M, Brover V, Gonzalez-Escalona N, et al. (2021)](https://doi.org/10.1038/s41598-021-91456-0)).

### How does it work?

1. AMRFinderPlus requires the amino acid sequences of the genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. The first thing <span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span> does is to **export the amino acid sequences** of all genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> into a temporary FASTA file while using their gene caller ids as names.
2. Anvi'o then **runs AMRFinderPlus** which compares the exported amino acid sequences to NCBI's curated reference proteins with BLASTP and to its curated protein families with HMMs. Whether a gene is identified or not depends on NCBI's curated cutoffs. Anvi'o always includes all genes in AMRFinderPlus's database, which also includes stress response genes, virulence genes, and resistance genes with uncertain effects.
3. Anvi'o then **stores the hits** in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> including six levels of information for each gene that are available in the AMRFinderPlus database (see below).

Since AMRFinderPlus works with the gene sequences that anvi'o has already identified, the program does not search the contig sequences themselves, and it does not screen for the organism-specific point mutations that the AMRFinderPlus database contains for some known pathogens.

### Running it

<div class="codeblock" markdown="1">
anvi&#45;run&#45;amrfinder &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;&#45;num&#45;threads 4
</div>

If you set up the <span class="artifact-n">[amrfinder-data](/help/main/artifacts/amrfinder-data)</span> in a non-default location, you will need to provide that path as well:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;amrfinder &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;&#45;amrfinder&#45;data&#45;dir path/to/directory
</div>

### What goes into the contigs database

Each positive hit is associated with six levels of information that are contained in the AMRFinderPlus database:

|Annotation source|Accession|Function|Examples|
|:--|:--|:--|:--|
|`AMRFinder`|AMRFinderPlus hierarchy node|gene name|`bla-B3`: subclass B3 metallo-beta-lactamase|
|`AMRFinder_CLASS`|class|class|BETA-LACTAM, MERCURY|
|`AMRFinder_SUBCLASS`|subclass|subclass|CARBAPENEM, ARSENITE|
|`AMRFinder_SUBTYPE`|subtype|subtype|AMR, METAL, BIOCIDE, VIRULENCE|
|`AMRFinder_SCOPE`|scope|scope|core, plus|
|`AMRFinder_METHOD`|method|method|HMM, BLASTP, EXACTP|

AMRFinderPlus annotates each gene following an annotation hierarchy that is built like a family tree of genes, and assigns each hit to the most specific entry (node) of this tree based on the curated similarity cutoffs. Each node in this hierarchy has a unique identifier in the AMRFinderPlus database, which is more specific than gene symbols or names (several different entries share the name 'class A beta-lactamase', for instance).

Genes for which AMRFinderPlus reports no class or subclass, which includes most virulence genes, heat and acid resistance genes, and a few metal resistance genes, have no annotation at the `AMRFinder_CLASS` and `AMRFinder_SUBCLASS` level.

### E-values

Running HMMs to annotate genes generates e-values, but these are not included in the output of AMRFinderPlus because the database uses manually curated cutoff values. When you run the program in anvi'o it recovers the e-values from the hmmsearch table AMRFinderPlus leaves behind in its temporary directory, and stores them with every HMM based gene annotation. Hits without an HMM match that were identified with BLASTP only have no e-value and receive a placeholder e-value of 0. Because AMRFinderPlus calculates e-values for a fixed search space of 10,000 proteins, they are not directly comparable to the e-values of other anvi'o annotation programs.

If for some reason anvi'o cannot find the hmmsearch table (for instance, because a future version of AMRFinderPlus works differently), it will stop with an error. In that case, you can use the flag `--skip-amrfinder-e-values` to store all annotations with an e-value of 0 but still get your annotations. That does not make the annotations less reliable, the same curated cutoffs are still applied during the annotation process:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;amrfinder &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;&#45;skip&#45;amrfinder&#45;e&#45;values
</div>

### The full AMRFinderPlus report

The <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> stores the essentials of every hit. If you would like to generate an output tab-delimited table that includes all available information for each annotation, you can use this flag:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;amrfinder &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;&#45;full&#45;amrfinder&#45;report AMRFinder&#45;report.txt
</div>

In addition to what AMRFinderPlus reports for each annotated gene, anvi'o adds the HMM e-value, the HMM bit score, and NCBI's curated bit score cutoff for that HMM (`NA` where there is no HMM information).

### Re-annotating a contigs database

When you run <span class="artifact-p">[anvi-run-amrfinder](/help/main/programs/anvi-run-amrfinder)</span>, the AMRFinderPlus database version is recorded in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. To re-annotate the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, for example with a newer database version, you need to use the flag `--just-do-it`.

### What can you do next?

AMRFinderPlus annotations are stored as <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and several other anvi'o programs can use them. Here are two examples that are useful when you are working with metagenomic assemblies rather than genomes or MAGs.

If you want to get an idea about the prevalence of specific genes in your metagenomic assemblies you can calculate the **per-population copy number** using <span class="artifact-p">[anvi-gen-function-matrix](/help/main/programs/anvi-gen-function-matrix)</span> with the `--add-per-population-copy-number` flag:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;annotation&#45;source AMRFinder_CLASS \
                         &#45;&#45;add&#45;per&#45;population&#45;copy&#45;number \
                         &#45;O AMR&#45;CLASS
</div>

You can also look at the **coverage and detection of genes across samples** if you recruited reads to your genomes, MAGs or assemblies creating a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. You need to first export the genes with the AMRFinderPlus annotations with <span class="artifact-p">[anvi-export-functions](/help/main/programs/anvi-export-functions)</span> to be able to export a file with their coverage and detection with <span class="artifact-p">[anvi-export-gene-coverage-and-detection](/help/main/programs/anvi-export-gene-coverage-and-detection)</span>:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;annotation&#45;sources AMRFinder,AMRFinder_CLASS,AMRFinder_SUBTYPE \
                      &#45;&#45;matrix&#45;format \
                      &#45;o amr&#45;genes.txt
cut &#45;f1 amr&#45;genes.txt | tail &#45;n +2 > amr&#45;gene&#45;ids.txt
anvi&#45;export&#45;gene&#45;coverage&#45;and&#45;detection &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                        &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                        &#45;&#45;genes&#45;of&#45;interest amr&#45;gene&#45;ids.txt \
                                        &#45;O AMR
</div>

Please note that genes on contigs that were too short to be profiled by <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span> will not have coverage values. The default cutoff is 1000 bp, but you can adjust that value when generating the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-amrfinder.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-amrfinder`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-amrfinder [-h] -c CONTIGS_DB [--amrfinder-data-dir DIR_PATH] [--full-amrfinder-report FILE] [--skip-amrfinder-e-values] [-T NUM_THREADS] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-amrfinder_data_dir"><code class="parameter-flags">--amrfinder-data-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is optional and allows you to specify a directory path for your AMRFinderPlus database. Anvi&#x27;o will use the default path if you do not specify anything.</span></dd>
<dt class="parameter" id="parameter-full_amrfinder_report"><code class="parameter-flags">--full-amrfinder-report</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The contigs database only stores the gene, its classification, and the HMM e-value of each AMRFinderPlus hit. Using this flag, you can generate a table that includes everything AMRFinderPlus knows about each hit, including the percent identity to and the coverage of the closest reference protein, the HMM e-value, the HMM bit score, and the curated HMM cutoff. The protein ids in this file are identical to the gene caller ids in the contigs-db.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_amrfinder_e_values"><code class="parameter-flags">--skip-amrfinder-e-values</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, AMRFinderPlus does not report e-values for its HMM hits because each model is manually curated and has its own threshold. However, because it&#x27;s nice to know, anvi&#x27;o recovers them from the hmmsearch table AMRFinderPlus leaves behind in its temporary directory. We can&#x27;t see into the future and it is possible that future versions of AMRFinderPlus won&#x27;t produce that temporary file anymore. In that case anvi&#x27;o would be confused and tell you so. You can use this flag to tell anvi&#x27;o to go on with annotating genes with AMRFinderPlus without snatching the e-values, in which case they will all be 0.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Using this flag, anvi&#x27;o will overwrite previous AMRFinderPlus annotations in your contigs db.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [AMRFinderPlus at NCBI](https://www.ncbi.nlm.nih.gov/pathogens/antimicrobial-resistance/AMRFinder/)

* [AMRFinderPlus documentation](https://github.com/ncbi/amr/wiki)

* [The AMRFinderPlus paper (Feldgarden et al. 2021)](https://doi.org/10.1038/s41598-021-91456-0)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_amrfinder.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
