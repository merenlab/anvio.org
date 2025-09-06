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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-similarity](../../artifacts/genome-similarity) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program calculates similarity between input genomes using the specified similarity metric.

The currently available programs for calculating similarity metrics can be selected using the `--program` parameter:
- [PyANI](https://github.com/widdowquinn/pyani)) to calculate the average nucleotide identity (ANI) (i.e., what proportion of orthologous gene pairs align)
- [fastANI](https://github.com/ParBLiSS/FastANI) also to calculate the ANI but at faster speeds (with a slight reduction in accuracy)
- [sourmash](https://sourmash.readthedocs.io/en/latest/) to calculate the mash distance between genomes. Though this option is provided, we do not recommend using sourmash for genome comparisons as it excels at other tasks; it remains available as a legacy option.

### Input/Output

The expected input is any combination of <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, and text files containing paths to <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files that describe each of your genomes. This is a tab-delimited file with two columns (`name` and `path` to the fasta files, each of which is assumed to represent a single genome).


The program outputs a directory containing <span class="artifact-n">[genome-similarity](/help/main/artifacts/genome-similarity)</span> data. The specific contents depend on how similarity scores are computed (specified with `--program`), but generally include tab-separated files of similarity scores between genomes and related metrics.


You also have the option to provide a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, in which case the output data will additionally be stored in the database as <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span> and <span class="artifact-n">[misc-data-layer-orders](/help/main/artifacts/misc-data-layer-orders)</span> data. This approach was demonstrated in the [pangenomic tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too).  

Here is an example run with pyANI using <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> with default parameters: 

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;genome&#45;similarity &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                               &#45;o path/for/<span class="artifact&#45;n">[genome&#45;similarity](/help/main/artifacts/genome&#45;similarity)</span> \
                               &#45;&#45;program pyANI
</div>

### Genome similarity metrics: parameters

Parameters have been organized according to the `--program` you select.

#### pyANI

You can modify any of the following parameters:

- The method used for alignment. The available options are:
    - `ANIb` (default): uses [BLASTN](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome)+ to align 1020 nt fragments of the inputs
    - `ANIm`: uses [MUMmer](http://mummer.sourceforge.net/) to perform alignment
    - `ANIblastall`: Uses legacy [BLASTN](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome) to align 1020 nt fragments
    - `TETRA`: Alignment-free approach. This calculates similarity scores by comparing tetranucleotide frequencies for each input

- The minimum alignment fraction (all percent identity scores lower than this threshold will be set to 0). The default is 0.


- If you want to retain alignments that are long despite not passing the minimum alignment fraction filter, you can specify a `--significant-alignment-length` to override `--min-alignment-fraction`.


- Similarly, you can discard all results below a specified full percent identity threshold (percent identity of aligned segments × aligned fraction).


#### fastANI

You can modify any of the following fastANI parameters:

* The k-mer size. The default is 16.

* The fragment length. The default is 30.

* The minimum number of fragments required for a result to be considered valid. The default is 50.

#### sourmash

You can modify the `kmer-size` parameter. This value should depend on the evolutionary relationships between your samples. The default is 31 ([as recommended by sourmash for genus-level distances](https://sourmash.readthedocs.io/en/latest/using-sourmash-a-guide.html)), but we found that 13 most closely parallels the results from ANI alignment.  

You can also set the compression ratio for your fasta files. Decreasing this from the default (1000) will decrease sensitivity.  

### Other Parameters 

Once calculated, the similarity matrix is used to create dendrograms via hierarchical clustering, which are stored in the output directory (and in the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, if provided). You can modify the distance metric or linkage algorithm used for this clustering process.


If you are receiving excessive debug or output messages, you can disable them with `--just-do-it` or redirect them to a file with `--log-file`.





{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-genome-similarity.md) to update this information.


## Additional Resources


* [In action in the pangenomic workflow tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-compute-genome-similarity) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
