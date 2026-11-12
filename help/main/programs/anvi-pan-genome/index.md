---
layout: program
title: anvi-pan-genome
excerpt: An anvi'o program. An anvi&#x27;o program to compute a pangenome from an anvi&#x27;o genome storage.
categories: [anvio]
comments: false
redirect_from: /m/anvi-pan-genome
image:
  featurerelative: ../../../images/header.png
  display: true
---

An anvi&#x27;o program to compute a pangenome from an anvi&#x27;o genome storage.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[gene-clusters-txt](../../artifacts/gene-clusters-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[gene-clusters](../../artifacts/gene-clusters) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[misc-data-items-order](../../artifacts/misc-data-items-order) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program implements pangenomics, and organizes genes found within a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> to create a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

Please first read [the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2) to have a better understanding of the steps that lead to the generation of a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

### Making sure your installation can do pangenomics

You can always test if your computer has all the dependencies for a successful pangenomics analysis by running,

<div class="codeblock" markdown="1">
anvi&#45;self&#45;test &#45;&#45;suite pangenomics
</div>

If it runs without errors, you're golden. If not, please consult with the most up-to-date installation instructions for anvi'o and get in touch with the anvi'o community for guidance.

### A brief summary

The program <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> performs three major things for its user:

1. Calculates the similarity between the all gene amino acid seqeunces found in genomes described in your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> using [DIAMOND](https://www.wsi.uni-tuebingen.de/lehrstuehle/algorithms-in-bioinformatics/software/diamond/). You have some options. Although, (1) you can use the NCBI's BLAST program [`blastp`](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins) instead of DIAMOND using the `--use-ncbi-blast` flag, (2) instead of analyzing all genomes you can focus a subset using the `--genome-names` parameter, and (3) exclude genes that are partial from your analysis using the flag `--exclude-partial-gene-calls` if you think you must.

2. Resolves gene clusters using the BLAST results via the [MCL](http://micans.org/mcl/) algorithm after discarding weak hits from the search results using the `--minbit` heuristic (inspired by the workflow implemented by ITEP ([Benedict et al., 2014](https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-15-8)).

3. Performs additional analyses of gene clusters for downstream analyses and visualization tasks. These analyses include,

    * Multiple sequnce alignment of amino acid sequences in each gene cluster,
    * Computation of [functional and geometric homogeneity indices](https://merenlab.org/2016/11/08/pangenomics-v2/#functional-and-geometric-homogeneity-estimates-in-anvio),
    * Computation of average amino-acid identity (AAI) within each gene cluster,
    * Hierarchical clustering analysis of gene clusters based on their distribution across genomes, and genomes based on their sharing of the gene pool.

The basic command line to run a pangenomic analysis that will do all the step above will look like the following:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME
</div>

But it is also possible for power users to initiate the anvi'o pangenomcs workflow with user defined gene clusters, which means it would be possible to visualize the pangenomic analyses performed by other tools in anvi'o. In this case, only the third step is performed with already established gene clusters:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;gene&#45;clusters&#45;txt <span class="artifact&#45;n">[gene&#45;clusters&#45;txt](/help/main/artifacts/gene&#45;clusters&#45;txt)</span>
</div>


### Controlling output file locations

By default, <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> places the resulting <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> next to your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> with a name derived from your project name (e.g., `PROJECT_NAME-PAN.db`). If you want to put it somewhere specific, use `--output-file`:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;output&#45;file /path/to/PROJECT_NAME&#45;PAN.db
</div>

{:.notice}
The output file name **must** end with `-PAN.db`. No exceptions.

Intermediate data files generated during the analysis (e.g., DIAMOND search results) are stored in a temporary directory that anvi'o creates automatically and removes at the end of a successful run. If you want to keep those files — for instance, to re-run the analysis with different clustering parameters without repeating the expensive sequence search step — use `--intermediate-data-dir`:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;intermediate&#45;data&#45;dir /path/to/intermediate/
</div>

On a subsequent run, you can then point anvi'o to that same directory to skip the sequence search entirely:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;intermediate&#45;data&#45;dir /path/to/intermediate/ \
                &#45;&#45;minbit 0.6
</div>

If you run <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> with the `--debug` flag, anvi'o will keep the auto-generated intermediate directory and tell you its path at the end of the run, so you can inspect the files or reuse them with `--intermediate-data-dir`.

### The 'additional parameters' mechanism for power users

At the core of the pangenomics workflow lies the reciprocal BLAST search that identifies sequence similarities within a pool of gene sequences. For this, anvi'o uses DIAMOND by default, but the user can change the search algorithm. Based on the algorithm used for this step, the matching anvi'o driver sets some default parameters for a successful run. Such as the proper parameter to explicitly define where the output files generated by DIAMOND should go, and so on. Apart from those mandatory parameters that are critical for a successful run, anvi'o allows the user to define a set of additional parameters to pass to the search algorithm.

This is done via the flag `--additional-params-for-seq-search`. For instance, the user could take a look at the parameters diamond offers by typing `diamond help` on their terminal, and may decide to use the `--sensitive` implemented by DIAMOND to enable a slower but more sensitive search, and use the parameter `--id 98` to ask DIAMOND to not report any hits across genes that is lower than 98% sequence identity to limit gene clusters only those sequences that are extremely closely related while pushing everything else to be singletons (which can also be removed from the analysis with a separate `--min-occurrence 2` flag <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> accepts). They can pass these parameters to DIAMOND by running their analysis the following way:

<div class="codeblock" markdown="1">
anvi&#45;pan&#45;genome &#45;&#45;genomes&#45;storage <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                &#45;&#45;project&#45;name PROJECT_NAME \
                &#45;&#45;additional&#45;params&#45;for&#45;seq&#45;search "&#45;&#45;masking 0 &#45;&#45;sensitive &#45;&#45;id 98"
</div>

{:.notice}
The additional parameters used for the search will be stored in the resulting <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and can be viewed anytime using the program <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span>.

{:.notice}
For DIAMOND, if no additional parameters is declared, anvi'o will include `--masking 0` by default since we recently learned that not using that flag leads to the elmination of genes with many repeated elements (see [#1955](https://github.com/merenlab/anvio/issues/1955)).

With the freedom of additional parameters for sequnce search, it is possible to make significant mistakes since anvi'o will have no opportunity to sanity-check user-defined additional parameters. If you are doing something experimental, please keep an eye on the output messages and error logs.

If the user choses to use NCBI's BLAST program, in that case anvi'o will pass the value of the parameter `--additional-params-for-seq-search` to NCBI's `blastp`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-pan-genome.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-pan-genome`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-pan-genome [-h] -g GENOMES_STORAGE [-G GENOME_NAMES] [--exclude-partial-gene-calls] [-o FILE_PATH] [--intermediate-data-dir PATH] [-W] [--use-ncbi-blast] [--additional-params-for-seq-search CMD LINE PARAMS] [--minbit MINBIT] [--mcl-inflation INFLATION] [--min-percent-identity PERCENT] [--min-occurrence NUM_OCCURRENCE] [--gene-clusters-txt FILE PATH] [--skip-alignments] [--align-with ALIGNER] [--skip-homogeneity] [--quick-homogeneity] [-n PROJECT_NAME] [--description TEXT_FILE] [-T NUM_THREADS] [--skip-hierarchical-clustering] [--enforce-hierarchical-clustering] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-data-genomes-genes">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT DATA: GENOMES &amp; GENES</span> <span class="parameter-group-description">You first tell anvi&#x27;o where your genes are (which is stored in a fancy &#x27;genomes storage&#x27; file you have ALREADY generated using the program `anvi-genomes-storage` (if this means nothing to you, see the anvi&#x27;o pangenomics tutorial)). They you tell anvi&#x27;o if you wish to limit your analysis to a smaller set of genomes than those anvi&#x27;o will find in that genomes-storage-db, or whether or not it should exclude partial gene calls.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-genome_names"><code class="parameter-flags">-G, --genome-names</code> <code class="parameter-metavar">GENOME_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome names to &#x27;focus&#x27;. You can use this parameter to limit the genomes included in your analysis. You can provide these names as a comma-separated list of names, or you can put them in a file, where you have a single genome name in each line, and provide the file path.</span></dd>
<dt class="parameter parameter-switch" id="parameter-exclude_partial_gene_calls"><code class="parameter-flags">--exclude-partial-gene-calls</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o includes all partial gene calls from the analysis, which, in some cases, may inflate the number of gene clusters identified and introduce extra heterogeneity within those gene clusters. Using this flag, you can request anvi&#x27;o to exclude partial gene calls from the analysis (whether a gene call is partial or not is an information that comes directly from the gene caller used to identify genes during the generation of the contigs database).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-data-where-things-should-appear">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT DATA: WHERE THINGS SHOULD APPEAR?</span> <span class="parameter-group-description">If you completely skip this section, anvi&#x27;o will put things in reasonable places with reasonable names. But you can change that if you want to.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-intermediate_data_dir"><code class="parameter-flags">--intermediate-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A directory path to store intermediate data files or to read them from. If you don&#x27;t provide anything here, this program will come up with a temporary directory path by itself to store intermediate files, and most likely clean it later (unless you used the `--debug` flag).</span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-default-gene-cluster-formation-sequence-search">
<header class="parameter-group-header"><span class="parameter-group-title">DEFAULT GENE CLUSTER FORMATION: SEQUENCE SEARCH</span> <span class="parameter-group-description">The first step in this workflow is to perform reciprocal sequence search within the gene pool of input genomes. If you don&#x27;t change anything in this section, things will work fine, and anvi&#x27;o will use DIAMOND by default to accomplish the search with default parameters anvi&#x27;o developers set for you. But please go through each parameter anyway to have an idea regarding what is available to you to play with.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-use_ncbi_blast"><code class="parameter-flags">--use-ncbi-blast</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program uses DIAMOND by default (and you should, too), but if you&#x27;d like to use the good ol&#x27; blastp by the NCBI instead, it can&#x27;t stop you.</span></dd>
<dt class="parameter" id="parameter-additional_params_for_seq_search"><code class="parameter-flags">--additional-params-for-seq-search</code> <code class="parameter-metavar">CMD LINE PARAMS</code></dt>
<dd class="parameter-details"><span class="parameter-help">OK. This is very important. While anvi&#x27;o has some defaults for whichever approach you choose to use for your sequence search, you can assume full control over what is passed to the search program. Put anything you wish anvi&#x27;o to send your search program in double quotes, and they will be passed to the program. If you don&#x27;t use this parameter, in addition to the additional parameters anvi&#x27;o will use to call your search algorithm of preference, anvi&#x27;o will pass to DIAMOND the following parameters: &quot;--masking 0&quot;, and to the NCBI blast nothing, as the default additional parameters for the NCBI BLAST is empty.. If you use this parameter, it will completely overwrite what you see above. This means, if you are about to use DIAMOND and would like to enable sensitive mode for DIAMOND along with the current anvi&#x27;o default additional parameter for it, then you should set this parameter like this manually: --additional-params-for-seq-search &quot;--masking 0 --sensitive&quot;. DO NOT EVER FORGET THE DOUBLE QUOTES, unless you hate your computer and want to see it melting beforey our eyes.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-default-gene-cluster-formation-resolving-network">
<header class="parameter-group-header"><span class="parameter-group-title">DEFAULT GENE CLUSTER FORMATION: RESOLVING NETWORK</span> <span class="parameter-group-description">The second step in this workflow is to use the sequence search results to determine gene clusters. Which is a straightforward step thanks to the MCL algorithm. The following parameters are there to tweak this step, even though default choices will work for the vast majority of cases.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-minbit"><code class="parameter-flags">--minbit</code> <code class="parameter-metavar">MINBIT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum minbit value. The minbit heuristic provides a mean to set a to eliminate weak matches between two amino acid sequences. We learned it from ITEP (Benedict MN et al, doi:10.1186/1471-2164-15-8), which is a comprehensive analysis workflow for pangenomes, and decided to use it in the anvi&#x27;o pangenomic workflow, as well. Briefly, If you have two amino acid sequences, &#x27;A&#x27; and &#x27;B&#x27;, the minbit is defined as &#x27;BITSCORE(A, B) / MIN(BITSCORE(A, A), BITSCORE(B, B))&#x27;. So the minbit score between two sequences goes to 1 if they are very similar over the entire length of the &#x27;shorter&#x27; amino acid sequence, and goes to 0 if (1) they match over a very short stretch compared even to the length of the shorter amino acid sequence or (2) the match between sequence identity is low. The default is 0.5.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-mcl_inflation"><code class="parameter-flags">--mcl-inflation</code> <code class="parameter-metavar">INFLATION</code></dt>
<dd class="parameter-details"><span class="parameter-help">MCL inflation parameter, that defines the sensitivity of the algorithm during the identification of the gene clusters. More information on this parameter and it&#x27;s effect on cluster granularity is here: (http://micans.org/mcl/man/mclfaq.html#faq7.2). The default is 2.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">2.0</code></span></dd>
<dt class="parameter" id="parameter-min_percent_identity"><code class="parameter-flags">--min-percent-identity</code> <code class="parameter-metavar">PERCENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum percent identity between the two amino acid sequences for them to have an edge for MCL analysis. This value will be used to filter hits from Diamond search results. Because percent identity is not a predictor of a good match (since it does not communicate many other important factors such as the alignment length between the two sequences and its proportion to the entire length of those involved), we suggest you rely on &#x27;minbit&#x27; parameter. But you know what? Maybe you shouldn&#x27;t listen to anyone, and experiment on your own! The default is 0 percent.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-min_occurrence"><code class="parameter-flags">--min-occurrence</code> <code class="parameter-metavar">NUM_OCCURRENCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Do you not want singletons? You don&#x27;t? Well, this parameter will help you get rid of them (along with doubletons, if you want). Anvi&#x27;o will remove gene clusters that occur less than the number you set using this parameter from the analysis. The default is 1, which means everything will be kept. If you want to remove singletons, set it to 2, if you want to remove doubletons as well, set it to 3, and so on.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-alternative-gene-cluster-formation-user-provided-gene-clusters">
<header class="parameter-group-header"><span class="parameter-group-title">ALTERNATIVE GENE CLUSTER FORMATION: USER-PROVIDED GENE CLUSTERS</span> <span class="parameter-group-description">As an alternative approach, you can provide anvi&#x27;o with your own gene cluster affiliations. In this case, anvi&#x27;o would not use the default way of computing gene clusters de novo, but take your word for which genes go together.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_clusters_txt"><code class="parameter-flags">--gene-clusters-txt</code> <code class="parameter-metavar">FILE PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A three-column TAB-delimited file that associates genes across genomes with one another as &#x27;gene clusters&#x27; for DIY pangenomics 😬 See https://anvio.org/help/main/artifacts/gene-clusters-txt/ for details of the file format.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-gene-cluster-characterization">
<header class="parameter-group-header"><span class="parameter-group-title">GENE CLUSTER CHARACTERIZATION</span> <span class="parameter-group-description">Parameters that mostly impact how anvi&#x27;o characterizes your gene clusters once they are identified. Such as aligning within gene cluster sequences, computing homogeneity indices for them, etc. Important stuff.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_alignments"><code class="parameter-flags">--skip-alignments</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o attempts to align amino acid sequences in each gene cluster using multiple sequence alignment via muscle. You can use this flag to skip that step and be upset later.</span></dd>
<dt class="parameter" id="parameter-align_with"><code class="parameter-flags">--align-with</code> <code class="parameter-metavar">ALIGNER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The multiple sequence alignment program to use when multiple sequence alignment is necessary. To see all available options, use the flag `--list-aligners`.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_homogeneity"><code class="parameter-flags">--skip-homogeneity</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o attempts to calculate homogeneity values for every gene cluster, given that they are aligned. You can use this flag to have anvi&#x27;o skip homogeneity calculations. Anvi&#x27;o will ignore this flag if you decide to skip alignments</span></dd>
<dt class="parameter parameter-switch" id="parameter-quick_homogeneity"><code class="parameter-flags">--quick-homogeneity</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will use a homogeneity algorithm that checks for horizontal and vertical geometric homogeneity (along with functional). With this flag, you can tell anvi&#x27;o to skip horizontal geometric homogeneity calculations. It will be less accurate but quicker. Anvi&#x27;o will ignore this flag if you skip homogeneity calculations or alignments all together.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-others">
<header class="parameter-group-header"><span class="parameter-group-title">OTHERS</span> <span class="parameter-group-description">Sweet parameters of convenience.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-project_name"><code class="parameter-flags">-n, --project-name</code> <code class="parameter-metavar">PROJECT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name of the project. Please choose a short but descriptive name (so anvi&#x27;o can use it whenever she needs to name an output file, or add a new table in a database, or name her first born).</span></dd>
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-organizing-gene-clusters">
<header class="parameter-group-header"><span class="parameter-group-title">ORGANIZING GENE CLUSTERs</span> <span class="parameter-group-description">These are stuff that will change the clustering dendrogram of your gene clusters.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_hierarchical_clustering"><code class="parameter-flags">--skip-hierarchical-clustering</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o attempts to generate a hierarchical clustering of your gene clusters once it identifies them so you can use `anvi-display-pan` to play with it. But if you want to skip this step, this is your flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-enforce_hierarchical_clustering"><code class="parameter-flags">--enforce-hierarchical-clustering</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you want anvi&#x27;o to try to generate a hierarchical clustering of your gene clusters even if the number of gene clusters exceeds its suggested limit for hierarchical clustering, you can use this flag to enforce it. Are you are a rebel of some sorts? Or did computers make you upset? Express your anger towards machine using this flag.</span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the clustering of gene clusters. If you do not use this flag, the default distance metric will be used for each clustering configuration which is &quot;euclidean&quot;.</span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The same story with the `--distance`, except, the system default for this one is ward.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A tutorial on pangenomics](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/pan_genome.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
