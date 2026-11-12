---
layout: program
title: anvi-dereplicate-genomes
excerpt: An anvi'o program. Identify redundant (highly similar) genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-dereplicate-genomes
image:
  featurerelative: ../../../images/header.png
  display: true
---

Identify redundant (highly similar) genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mahmoudyousef98.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mahmoudyousef98" target="_blank"><span class="anvio-person-name">Mahmoud Yousef</span></a><div class="anvio-person-social-box"><a href="mailto:mahmoudyousef@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/mahmoudyousef98" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genome-similarity](../../artifacts/genome-similarity) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage



This program uses the user's similarity metric of choice to identify genomes that are highly similar to each other, and groups them together into redundant clusters. The program finds representative sequences for each cluster and outputs them into <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files.


#### Input Options

You have two options for the input to this program:

- the results of <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span> (a <span class="artifact-n">[genome-similarity](/help/main/artifacts/genome-similarity)</span> directory). If you used `fastANI` or `pyANI` when you ran <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span>, provide this using the parameter `--ani-dir`; if you used sourmash, use the parameter `--mash-dir`.

- an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> or a series of <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files (each of which represents a genome), in which case anvi'o will run <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span> for you.  When providing these inputs, you can also provide any of the parameters that <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span> can take, including the `--program` you want to use (out of  [PyANI](https://github.com/widdowquinn/pyani), [fastANI](https://github.com/ParBLiSS/FastANI),  [sourmash](https://sourmash.readthedocs.io/en/latest/)) and their parameters. Details about all of this can be found in the help menu for <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span>.

#### Output Format

By default, the output of this program is a directory containing two descriptive text files (the cluster report and fasta report) and a subdirectory called `GENOMES`:

-The cluster report describes is a tab-delimited text file where each row describes a cluster. This file contains four columns: the cluster name, the number of genomes in the cluster, the representative genome of the cluster, and a list of the genomes that are in the cluster. Here is an example describing 11 genomes in three clusters:

|**cluster**|**size**|**representative**|**genomes**|
|:--|:--|:--|:--|
|cluster_000001|1|G11_IGD_MAG_00001|G11_IGD_MAG_00001|
|cluster_000002|8|G11_IGD_MAG_00012|G08_IGD_MAG_00008,G33_IGD_MAG_00011,G01_IGD_MAG_00013,G06_IGD_MAG_00023,G03_IGD_MAG_00021,G05_IGD_MAG_00014,G11_IGD_MAG_00012,G10_IGD_MAG_00010|
|cluster_000003|2|G03_IGD_MAG_00011|G11_IGD_MAG_00013,G03_IGD_MAG_00011|

-The subdirectory `GENOMES` contains fasta files describing the representative genome from each cluster. For example, if your original set of genomes had two identical genomes, this program would cluster them together, and the `GENOMES` folder would only include one of their sequences.

-The fasta report describes the fasta files contained in the subdirectory `GENOMES`. By default, this describes the representative sequence of each of the final clusters. It tells you the genome name, its source, its cluster (and the representative sequence of that cluster), and the path to its fasta file in  `GENOMES`.  So, for the example above, the fasta report would look like this:

|**name**|**source**|**cluster**|**cluster_rep**|**path**|
|:--|:--|:--|:--|:--|
|G11_IGD_MAG_00001|fasta|cluster_000001|G11_IGD_MAG_00001|GENOMES/G11_IGD_MAG_00001.fa|
|G11_IGD_MAG_00012|fasta|cluster_000002|G11_IGD_MAG_00012|GENOMES/G11_IGD_MAG_00012.fa|
|G03_IGD_MAG_00011|fasta|cluster_000003|G03_IGD_MAG_00011|GENOMES/G03_IGD_MAG_00011.fa|

You can also choose to report all genome fasta files (including redundant genomes) (with `--report-all`) or report no fasta files (with `--skip-fasta-report`). This would change the fasta files included in `GENOMES` and the genomes mentioned in the fasta report. The cluster report would be identical.

#### Required Parameters and Example Runs

You are required to set the threshold for two genomes to be considered redundant and put in the same cluster.

For example, if you had the results from an <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span> run where you had used `pyANI` and wanted the threshold to be 90 percent, you would run:

<div class="codeblock" markdown="1">
anvi&#45;dereplicate&#45;genomes &#45;&#45;ani&#45;dir <span class="artifact&#45;n">[genome&#45;similarity](/help/main/artifacts/genome&#45;similarity)</span> \
                         &#45;o path/to/output \
                         &#45;&#45;program pyANI \
                         &#45;&#45;similiarity&#45;threshold 0.90
</div>

If instead you hadn't yet run <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span> and instead wanted to cluster the genomes in your <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file with similarity 85 percent or more (no fasta files necessary) using sourmash, you could run:

<div class="codeblock" markdown="1">
anvi&#45;dereplicate&#45;genomes &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                         &#45;&#45;skip&#45;fasta&#45;report \
                         &#45;&#45;program sourmash \
                         &#45;o path/to/output \
                         &#45;&#45;similiarity&#45;threshold 0.85
</div>

#### Other parameters

You can change how anvi'o picks the representative sequence from each cluster with the parameter `--representative-method`. For this you have three options:

- `Qscore`: picks the genome with highest completion and lowest redundancy
- `length`: picks the longest genome in the cluster
- `centrality` (default): picks the genome with highest average similiarty to every other genome in the cluster

You can also choose to skip checking genome hashes (which will warn you if you have identical sequences in separate genomes with different names), provide a log path for debug messages or use multithreading (relevant only if not providing `--ani-dir` or `--mash-dir`).


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-dereplicate-genomes.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-dereplicate-genomes`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-dereplicate-genomes [-h] [-i FILE_PATH] [-e FILE_PATH] [-f FASTA_TEXT_FILE] [--ani-dir PATH] [--mash-dir PATH] -o DIR_PATH [--skip-fasta-report] [--report-all] [--program {pyANI,fastANI,sourmash}] [--fastani-kmer-size FASTANI_KMER_SIZE] [--fragment-length FRAGMENT_LENGTH] [--min-fraction MIN_FRACTION] [--method {ANIm,ANIb,ANIblastall,TETRA}] [--min-alignment-fraction NUM] [--significant-alignment-length INT] [--use-full-percent-identity] [--min-full-percent-identity FULL_PERCENT_IDENTITY] [--kmer-size INT] [--scale INT] --similarity-threshold SIMILARITY_THRESHOLD [--cluster-method {simple_greedy}] [--representative-method {Qscore,length,centrality}] [-T NUM_THREADS] [--just-do-it] [--skip-checking-genome-hashes] [--log-file FILE_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-options">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTIONS</span> <span class="parameter-group-description">Tell anvi&#x27;o what you want.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-fasta_text_file"><code class="parameter-flags">-f, --fasta-text-file</code> <code class="parameter-metavar">FASTA_TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited file that lists multiple FASTA files to import for analysis. If using for `anvi-dereplicate-genomes` or `anvi-compute-distance`, each FASTA is assumed to be a genome. The first item in the header line should read &#x27;name&#x27;, and the second item should read &#x27;path&#x27;. Each line in the field should describe a single entry, where the first column is the name of the FASTA file or corresponding sequence, and the second column is the path to the FASTA file itself.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-import-results">
<header class="parameter-group-header"><span class="parameter-group-title">IMPORT RESULTS</span> <span class="parameter-group-description">Alternatively, if you have previous ANI or mash similarity computations on your genomes, you can import the result directory here to use. Please note that file names must remain unchanged for anvi&#x27;o to find them</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-ani_dir"><code class="parameter-flags">--ani-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">You can import the directory created by `anvi-compute-genome-similarity` if `--program` parameter was set to `fastANI` or `pyANI` and use it for dereplication</span></dd>
<dt class="parameter" id="parameter-mash_dir"><code class="parameter-flags">--mash-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">You can import the directory created by `anvi-compute-genome-similarity` if `--program` parameter was set to `sourmash` and use it for dereplication</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-options">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT OPTIONS</span> <span class="parameter-group-description">Tell anvi&#x27;o where to store your results.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_fasta_report"><code class="parameter-flags">--skip-fasta-report</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, if any sequence source is provided, FASTA files of non-redundant genomes are reported. With this flag, no FASTA files are reported.</span></dd>
<dt class="parameter parameter-switch" id="parameter-report_all"><code class="parameter-flags">--report-all</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, only FASTA files of non-redundant genomes are reported, i.e. single representatives from each cluster. With this flag, all genome FASTAS will be reported.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-program">
<header class="parameter-group-header"><span class="parameter-group-title">Program</span> <span class="parameter-group-description">Tell anvi&#x27;o which similarity program to run.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-program"><code class="parameter-flags">--program</code> <code class="parameter-metavar">PROGRAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Tell anvi&#x27;o which program to run to process genome similarity. For ANI, you can either use pyANI or fastANI. If accuracy is paramount (for example, distinguishing things less than 1 percent different), or for dealing with genomes &lt; 80 percent similar, pyANI is what we recommend. However, fastANI is much faster. If you for some reason want to use mash similarity, you can use sourmash, but its really not intended for genome comparisons.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">pyANI</code> <code class="parameter-choice">fastANI</code> <code class="parameter-choice">sourmash</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-fastani-settings">
<header class="parameter-group-header"><span class="parameter-group-title">fastANI Settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to tell fastANI what settings to set. Only if `--program` is set to `fastANI`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fastani_kmer_size"><code class="parameter-flags">--fastani-kmer-size</code> <code class="parameter-metavar">FASTANI_KMER_SIZE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose a kmer. The default is 16.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">16</code></span></dd>
<dt class="parameter" id="parameter-fragment_length"><code class="parameter-flags">--fragment-length</code> <code class="parameter-metavar">FRAGMENT_LENGTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose a fragment length. The default is 3000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">3000</code></span></dd>
<dt class="parameter" id="parameter-min_fraction"><code class="parameter-flags">--min-fraction</code> <code class="parameter-metavar">MIN_FRACTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum fraction of alignment to be shared between genome pairs to calculate ANI. If reference and query genome size differ, smaller one among the two is considered. The default is 0.25.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.25</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pyani-settings">
<header class="parameter-group-header"><span class="parameter-group-title">pyANI Settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to tell pyANI what method you wish to use and what settings to set. Only if `--program` is set to `pyANI`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-method"><code class="parameter-flags">--method</code> <code class="parameter-metavar">METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Method for pyANI. The default is ANIb. You must have the necessary binary in path for whichever method you choose. According to the pyANI help for v0.2.7 at https://github.com/widdowquinn/pyani, the method &#x27;ANIm&#x27; uses MUMmer (NUCmer) to align the input sequences. &#x27;ANIb&#x27; uses BLASTN+ to align 1020nt fragments of the input sequences. &#x27;ANIblastall&#x27;: uses the legacy BLASTN to align 1020nt fragments Finally, &#x27;TETRA&#x27;: calculates tetranucleotide frequencies of each input sequence</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">ANIm</code> <code class="parameter-choice">ANIb</code> <code class="parameter-choice">ANIblastall</code> <code class="parameter-choice">TETRA</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ANIb</code></span></dd>
<dt class="parameter" id="parameter-min_alignment_fraction"><code class="parameter-flags">--min-alignment-fraction</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">In some cases you may get high raw ANI estimates (percent identity scores) between two genomes that have little to do with each other simply because only a small fraction of their content may be aligned. This filter will set all ANI scores between two genomes to 0 if the alignment fraction is less than you deem trustable. When you set a value, anvi&#x27;o will go through the ANI results, and set percent identity scores between two genomes to 0 if the alignment fraction *between either of them* is less than the parameter described here. The default is 0.25.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.25</code></span></dd>
<dt class="parameter" id="parameter-significant_alignment_length"><code class="parameter-flags">--significant-alignment-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">So --min-alignment-fraction discards any hit that is coming from alignments that represent shorter fractions of genomes, but what if you still don&#x27;t want to miss an alignment that is longer than an X number of nucleotides regardless of what fraction of the genome it represents? Well, this parameter is to recover things that may be lost due to --min-alignment-fraction parameter. Let&#x27;s say, if you set --min-alignment-fraction to &#x27;0.05&#x27;, and this parameter to &#x27;5000&#x27;, anvi&#x27;o will keep hits from alignments that are longer than 5000 nts, EVEN IF THEY REPRESENT less than 5 percent of a given genome pair. Basically if --min-alignment-fraction is your shield to protect yourself from incoming garbage, --significant-alignment-length is your chopstick to pick out those that may be interesting, and you are a true warrior here.</span></dd>
<dt class="parameter parameter-switch" id="parameter-use_full_percent_identity"><code class="parameter-flags">--use-full-percent-identity</code></dt>
<dd class="parameter-details"><span class="parameter-help">Usually, percent identity is calculated only over aligned regions, and this is what is used as a distance metric by default. But with this flag, you can instead use the *full* percent identity as the distance metric. It is the same as percent identity, except that regions that did not align are included in the calculation. This means *full* percent identity will always be less than or equal to percent identity. How is it calculated? Well if P is the percentage identity calculated in aligned regions, L is the length of the genome, and A is the fraction of the genome that aligned to a compared genome, the full percent identity is P * (A/L). In other words, it is the percent identity multiplied by the alignment coverage. For example, if the alignment is a whopping 97 percent identity but only 8 percent of the genome aligned, the *full* percent identity is 0.970 * 0.080 = 0.078, which is just 7.8 percent.</span></dd>
<dt class="parameter" id="parameter-min_full_percent_identity"><code class="parameter-flags">--min-full-percent-identity</code> <code class="parameter-metavar">FULL_PERCENT_IDENTITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">In some cases you may get high raw ANI estimates (percent identity scores) between two genomes that have little to do with each other simply because only a small fraction of their content may be aligned. This can be partly alleviated by considering the *full* percent identity, which includes in its calculation regions that did not align. For example, if the alignment is a whopping 97 percent identity but only 8 percent of the genome aligned, the *full* percent identity is 0.970 * 0.080 = 0.078 OR 7.8 percent. *full* percent identity is always included in the report, but you can also use it as a filter for other metrics, such as percent identity. This filter will set all ANI measures between two genomes to 0 if the *full* percent identity is less than you deem trustable. When you set a value, anvi&#x27;o will go through the ANI results, and set all ANI measures between two genomes to 0 if the *full* percent identity *between either of them* is less than the parameter described here. The default is 20.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">20.0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-sourmash-settings">
<header class="parameter-group-header"><span class="parameter-group-title">sourmash settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to run sourmash with specific settings. Only if `--program` is set to `sourmash`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-kmer_size"><code class="parameter-flags">--kmer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the k-mer size for mash similarity checks. The default is 13.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">13</code></span></dd>
<dt class="parameter" id="parameter-scale"><code class="parameter-flags">--scale</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the compression ratio for fasta signature file computations. The default is 1000. Smaller ratios decrease sensitivity, while larger ratios will lead to large fasta signatures.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1000</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-dereplication-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">Dereplication Parameters</span> <span class="parameter-group-description">Some parameters to guide your dereplication</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-similarity_threshold"><code class="parameter-flags">--similarity-threshold</code> <code class="parameter-metavar">SIMILARITY_THRESHOLD</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">If two genomes have a similarity greater than or equal to this threshold, they will belong to the same cluster. Since measures of &#x27;similarity&#x27; depend strongly on what method is used for calculation, and since the threshold at which two genomes should be considered &#x27;similar enough&#x27; to be considered redundant will depend on the application, anvi&#x27;o refuses to provide a default parameter. If you&#x27;re using pyANI, maybe 0.90 is what you&#x27;re after. If you&#x27;re using sourmash, maybe 0.25 is what you&#x27;re after. Or maybe not? Anvi&#x27;o is feeling nervous about this decision.</span></dd>
<dt class="parameter" id="parameter-cluster_method"><code class="parameter-flags">--cluster-method</code> <code class="parameter-metavar">CLUSTER_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Currently, genomes are clustered based on a simple greedy algorithm. Let&#x27;s say your similarity threshold is 0.90. If genome A is 0.95 similar to B, and B is 0.95 similar to C, and C is 0.95 similar to D, then {A,B,C,D} will form a cluster. This is *even though* D may share a similarity to A of merely 0.80, which is below similarity threshold. You want better alternatives? Contact the developers with your ideas.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">simple_greedy</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">simple_greedy</code></span></dd>
<dt class="parameter" id="parameter-representative_method"><code class="parameter-flags">--representative-method</code> <code class="parameter-metavar">REPRESENTATIVE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">After genomes are grouped into redundancy clusters, you can define how anvi&#x27;o picks the representative genome from the cluster. &#x27;Qscore&#x27; computes the genome with the highest completion and lowest redundancy as the representative. &#x27;length&#x27; returns the longest genome. &#x27;centrality&#x27; returns the genome with the highest average similarity to everything in the cluster, i.e. the most central. The default is centrality</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">Qscore</code> <code class="parameter-choice">length</code> <code class="parameter-choice">centrality</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">centrality</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-other-important-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">OTHER IMPORTANT STUFF</span> <span class="parameter-group-description">Yes. You&#x27;re almost done.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
<dt class="parameter" id="parameter-log_file"><code class="parameter-flags">--log-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store debug/output messages.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/dereplicate_genomes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
