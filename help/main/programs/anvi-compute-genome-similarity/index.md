---
layout: program
title: anvi-compute-genome-similarity
excerpt: An anvi'o program. Export sequences from sequence sources and compute a similarity metric (e.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-genome-similarity
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export sequences from sequence sources and compute a similarity metric (e.g. ANI). If a Pan Database is given anvi&#x27;o will write computed output to misc data tables of Pan Database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-similarity](../../artifacts/genome-similarity) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage



This program uses the user's similarity metric of choice to calculate the similarity between the input genomes.

The currently available programs for calculating similarity metrics include, chosen can be chosen with `--program`:
- [PyANI](https://github.com/widdowquinn/pyani)) to calculate the average nucleotide identity (ANI) (i.e. what portion of orthologous gene pairs align)
- [fastANI](https://github.com/ParBLiSS/FastANI) also to calcualte the ANI but at a faster speed (at the drawback of a slight reduction in accuracy)
- [sourmash](https://sourmash.readthedocs.io/en/latest/) to calculate the mash distance between genomes.  Though we provide this option, we don't recommend using sourmash for genome comparisons--it excels at other tasks--yet it remains as a legacy option.

### Input/Output

The expected input is any combination of <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, and text files that contains paths to <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files that describe each of your genomes. This is a tab-delimited file with two columns (`name` and `path` to the fasta files, each of which is assumed to be a single genome).


The program outputs a directory with <span class="artifact-n">[genome-similarity](/help/main/artifacts/genome-similarity)</span> data. The specific contents will depend on how similarity scores are computed (specified with `--program`), but generally contains tab-separated files of similarity scores between genomes and related metrics.


You also have the option to provide a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, in which case the output data will additionally be stored in the database as <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span> and <span class="artifact-n">[misc-data-layer-orders](/help/main/artifacts/misc-data-layer-orders)</span> data. This was done in the [pangenomic tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too).

Here is an example run with pyANI from an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> without any parameter changes:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;genome&#45;similarity &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                               &#45;o path/for/<span class="artifact&#45;n">[genome&#45;similarity](/help/main/artifacts/genome&#45;similarity)</span> \
                               &#45;&#45;program pyANI
</div>

### Genome similarity metrics: parameters

Parameters have been divided up based on which `--program` you use.

#### pyANI

You have the option to change any of the follow parameters:

- The method used for alignment. The options are:
    - `ANIb` (default): uses [BLASTN](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome)+ to align 1020 nt fragments of the inputs
    - `ANIm`: uses [MUMmer](http://mummer.sourceforge.net/) to align
    - `ANIblastall`: Uses legacy [BLASTN](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome) to align 1020 nt fragments
    - `TETRA`: Alignment free. This calculates similarity scores by comparing tetranucleotide frequencies for each input

- The minimum alignment fraction (all percent identity scores lower than this will be set to 0). The default is 0.


- If you want to keep alignments that are long, despite them not passing the minimum alignment fraction filter, you can supply a `--significant-alignment-length` to override `--min-alignment-fraction`.


- Similarly, you can discard all results less than some full percent identity (percent identity of aligned segments * aligned fraction).


#### fastANI

You can change any of the following fastANI parameters:

* The kmer size. The default is 16.

* The fragment length. The default is 30.

* The minimum number of fragments for a result to count. The default is 50.

#### sourmash

You have the option to change the `kmer-size`. This value should depend on the relationship between your samples. The default is 31 ([as recommended by sourmash for genus-level distances](https://sourmash.readthedocs.io/en/latest/using-sourmash-a-guide.html), but we found that 13 most closely parallels the results from an ANI alignment.

You can also set the compression ratio for your fasta files. Decreasing this from the default (1000) will decrease sensitivity.

### Other Parameters

Once calculated, the similarity matrix is used to create dendrograms via hierarchical clustering, which are stored in the output directory (and in the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, if provided). You can choose to change the distance metric or linkage algorithm used for this clustering.


If you're getting a lot of debug/output messages, you can turn them off with `--just-do-it` or helpfully store them into a file with `--log-file`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-genome-similarity.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-compute-genome-similarity`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-compute-genome-similarity [-h] [-i FILE_PATH] [-e FILE_PATH] [-f FASTA_TEXT_FILE] -o DIR_PATH [-p PAN_DB] [--program {pyANI,fastANI,sourmash}] [--fastani-kmer-size FASTANI_KMER_SIZE] [--fragment-length FRAGMENT_LENGTH] [--min-num-fragments MIN_NUM_FRAGMENTS] [--method {ANIm,ANIb,ANIblastall,TETRA}] [--min-alignment-fraction NUM] [--significant-alignment-length INT] [--min-full-percent-identity FULL_PERCENT_IDENTITY] [--kmer-size INT] [--scale INT] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] [-T NUM_THREADS] [--just-do-it] [--skip-checking-genome-hashes] [--log-file FILE_PATH]</div>
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
<section class="parameter-group parameter-group-output-options">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT OPTIONS</span> <span class="parameter-group-description">Tell anvi&#x27;o where to store your results.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is totally optional, but very useful when applicable. If you are running this for genomes for which you already have an anvi&#x27;o pangeome, then you can show where the pan database is and anvi&#x27;o would automatically add the results into the misc data tables of your pangenome. Those data can then be shown as heatmaps on the pan interactive interface through the &#x27;layers&#x27; tab.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-program">
<header class="parameter-group-header"><span class="parameter-group-title">Program</span> <span class="parameter-group-description">Tell anvi&#x27;o which similarity program to run.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-program"><code class="parameter-flags">--program</code> <code class="parameter-metavar">PROGRAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Tell anvi&#x27;o which program to run to process genome similarity. For ANI, you should either use pyANI or fastANI. If accuracy is paramount (for example, distinguishing things less than 1 percent different), or for dealing with genomes &lt; 80 percent similar, pyANI is what we recommend. However, fastANI is much faster. If you for some reason want to use mash similarity, you can use sourmash, but its really not intended for genome comparisons. If you don&#x27;t choose anything here, anvi&#x27;o will reluctantly set the program to pyANI, but you really should be the one who is on top of these things.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">pyANI</code> <code class="parameter-choice">fastANI</code> <code class="parameter-choice">sourmash</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">pyANI</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-fastani-settings">
<header class="parameter-group-header"><span class="parameter-group-title">fastANI Settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to tell fastANI what settings to set. Only if `--program` is set to `fastANI`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fastani_kmer_size"><code class="parameter-flags">--fastani-kmer-size</code> <code class="parameter-metavar">FASTANI_KMER_SIZE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose a kmer. The default is 16.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">16</code></span></dd>
<dt class="parameter" id="parameter-fragment_length"><code class="parameter-flags">--fragment-length</code> <code class="parameter-metavar">FRAGMENT_LENGTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose a fragment length. The default is 3000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">3000</code></span></dd>
<dt class="parameter" id="parameter-min_num_fragments"><code class="parameter-flags">--min-num-fragments</code> <code class="parameter-metavar">MIN_NUM_FRAGMENTS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose the minimum number of fragment lengths that can be trusted. The default is 50.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">50</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pyani-settings">
<header class="parameter-group-header"><span class="parameter-group-title">pyANI Settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to tell pyANI what method you wish to use and what settings to set. Only if `--program` is set to `pyANI`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-method"><code class="parameter-flags">--method</code> <code class="parameter-metavar">METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Method for pyANI. The default is ANIb. You must have the necessary binary in path for whichever method you choose. According to the pyANI help for v0.2.7 at https://github.com/widdowquinn/pyani, the method &#x27;ANIm&#x27; uses MUMmer (NUCmer) to align the input sequences. &#x27;ANIb&#x27; uses BLASTN+ to align 1020nt fragments of the input sequences. &#x27;ANIblastall&#x27;: uses the legacy BLASTN to align 1020nt fragments Finally, &#x27;TETRA&#x27;: calculates tetranucleotide frequencies of each input sequence</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">ANIm</code> <code class="parameter-choice">ANIb</code> <code class="parameter-choice">ANIblastall</code> <code class="parameter-choice">TETRA</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ANIb</code></span></dd>
<dt class="parameter" id="parameter-min_alignment_fraction"><code class="parameter-flags">--min-alignment-fraction</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">In some cases you may get high raw ANI estimates (percent identity scores) between two genomes that have little to do with each other simply because only a small fraction of their content may be aligned. This filter will set all ANI scores between two genomes to 0 if the alignment fraction is less than you deem trustable. When you set a value, anvi&#x27;o will go through the ANI results, and set percent identity scores between two genomes to 0 if the alignment fraction *between either of them* is less than the parameter described here. The default is 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-significant_alignment_length"><code class="parameter-flags">--significant-alignment-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">So --min-alignment-fraction discards any hit that is coming from alignments that represent shorter fractions of genomes, but what if you still don&#x27;t want to miss an alignment that is longer than an X number of nucleotides regardless of what fraction of the genome it represents? Well, this parameter is to recover things that may be lost due to --min-alignment-fraction parameter. Let&#x27;s say, if you set --min-alignment-fraction to &#x27;0.05&#x27;, and this parameter to &#x27;5000&#x27;, anvi&#x27;o will keep hits from alignments that are longer than 5000 nts, EVEN IF THEY REPRESENT less than 5 percent of a given genome pair. Basically if --min-alignment-fraction is your shield to protect yourself from incoming garbage, --significant-alignment-length is your chopstick to pick out those that may be interesting, and you are a true warrior here.</span></dd>
<dt class="parameter" id="parameter-min_full_percent_identity"><code class="parameter-flags">--min-full-percent-identity</code> <code class="parameter-metavar">FULL_PERCENT_IDENTITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">In some cases you may get high raw ANI estimates (percent identity scores) between two genomes that have little to do with each other simply because only a small fraction of their content may be aligned. This can be partly alleviated by considering the *full* percent identity, which includes in its calculation regions that did not align. For example, if the alignment is a whopping 97 percent identity but only 8 percent of the genome aligned, the *full* percent identity is 0.970 * 0.080 = 0.078 OR 7.8 percent. *full* percent identity is always included in the report, but you can also use it as a filter for other metrics, such as percent identity. This filter will set all ANI measures between two genomes to 0 if the *full* percent identity is less than you deem trustable. When you set a value, anvi&#x27;o will go through the ANI results, and set all ANI measures between two genomes to 0 if the *full* percent identity *between either of them* is less than the parameter described here. The default is 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-sourmash-settings">
<header class="parameter-group-header"><span class="parameter-group-title">Sourmash Settings</span> <span class="parameter-group-description">Tell anvi&#x27;o to tell sourmash what settings to set. Only if `--program` is set to `sourmash`</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-kmer_size"><code class="parameter-flags">--kmer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the k-mer size for mash similarity checks. We found 13 in almost all cases correlates best with alignment-based ANI.</span></dd>
<dt class="parameter" id="parameter-scale"><code class="parameter-flags">--scale</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Set the compression ratio for fasta signature file computations. The default is 1000. Smaller ratios decrease sensitivity, while larger ratios will lead to large fasta signatures.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1000</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-hierarchical-clustering">
<header class="parameter-group-header"><span class="parameter-group-title">HIERARCHICAL CLUSTERING</span> <span class="parameter-group-description">anvi-compute-genome-similarity outputs similarity matrix files, which can be clustered into nice looking dendrograms to display the relationships between genomes nicely (in the anvi&#x27;o interface and elsewhere). Here you can set the distance metric and the linkage algorithm for that.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. The default is &quot;euclidean&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">euclidean</code></span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The linkage method for the hierarchical clustering. The default is &quot;ward&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ward</code></span></dd>
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


* [In action in the pangenomic workflow tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_genome_similarity.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
