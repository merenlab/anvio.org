---
layout: program
title: anvi-gen-function-matrix
excerpt: An anvi'o program. A program to generate reports for the distribution of functions across genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-function-matrix
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to generate reports for the distribution of functions across genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-jessika.jpg" /></div><div class="anvio-person-info-box"><a href="/people/jessika-fuessel" target="_blank"><span class="anvio-person-name">Jessika Fuessel</span></a><div class="anvio-person-social-box"><a href="mailto:ju.fuessel@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FuesselJessika" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/jessika-fuessel" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions-across-genomes-txt](../../artifacts/functions-across-genomes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


Generates TAB-delmited output files for <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> from a single function annotation source across genomes.

{:.notice}
For a simlar program that reports HMM hits across genomes, see <span class="artifact-p">[anvi-gen-hmm-hits-matrix](/help/main/programs/anvi-gen-hmm-hits-matrix)</span>.

The input genomes for this program can be provided through an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, or any combination of these sources.

This program is very similar to <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span>, and can also perform a functional enrichment analysis on-the-fly if you provide it with an optional <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file. Unlike, <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span>, this program will report TAB-delmited output files for you to further analyze.

You can run the program on a set of genomes for a given annotation source:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                               &#45;&#45;annotation&#45;source COG20_FUNCTION \
                                               &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES
</div>

The command above will result in two files in your work directory, both of which will be of type <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span>:

* MY-GENOMES-FREQUENCY.txt
* MY-GENOMES-PRESENCE-ABSENCE.txt

In each of these files, the first columns describe each function (a unique `key`, the function name, and optionally the function accession ids), and the remaining columns hold one value per genome.

{:.notice}
You can always learn about which functions are in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> using the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>.

## Per-population copy number normalization for metagenomic assemblies

If we want to get an idea of differences in functional capacity across different metagenomic assemblies (or long-read sequence metagenomes) but, for some good reasons, we do not have MAGs from these assemblies, or we want to make sure that we make use of all the sequence data we have and not only those reads that are used to reconstruct genomes, we can't just look at the distribution of functions across genomes, because all functions and metabolic pathways will most likely occur nearly everywhere, at least in one population, and population numbers may differ dramatically across samples, and just counting the occurrence of a given function would not provide ecologically meaningful insights. To overcome this, Iva Veseli introduced the [per-population copy number](https://elifesciences.org/reviewed-preprints/89862) normalization. Based on the same principle, adding the flag `--add-per-population-copy-number` allows you to normalize individual functional annotations within a metagenomic assembly using the SCG-based estimate of population numbers within the sample.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                               &#45;&#45;annotation&#45;source COG20_FUNCTION \
                                               &#45;&#45;output&#45;file&#45;prefix MY&#45;METAGENOMES \
                                               &#45;&#45;add&#45;per&#45;population&#45;copy&#45;number
</div>

Adding the flag generates an additional output file of type <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span>:

* MY-METAGENOMES-PER-POPULATION-COPY-NUMBER.txt

By dividing the frequency of each function in a given metagenomic assembly by the number of populations estimated to be present in that same assembly based on counts of single-copy core genes (SCGs) in each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>: for each domain-specific SCG set, anvi'o takes the mode of the number of hits across all SCGs, and sums these per-domain estimates across Bacteria, Archaea, and Eukarya.

The script relies on SCG annotations generated by <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span>, and you need an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file to let it know which assemblies to compare.

A per-population copy number is an *average number of copies of a function per population*: a value near 1 means the function tends to occur once in every population, a value below 1 means it is present in only a fraction of the populations, and a value above 1 means it tends to occur in multiple copies per population (as is common for, e.g., transposases). If a given metagenome has single-copy core genes that are too sparse to yield a reliable estimate, anvi'o cannot compute its number of populations, and the per-population copy number values for that assembly will be reported as `NA`.

Alternatively, you can run it with a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> that associates sets of genomes with distinct groups,

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;function&#45;matrix &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                                               &#45;&#45;annotation&#45;source COG20_FUNCTION \
                                               &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES \
                                               &#45;&#45;groups&#45;txt groups.txt
</div>

which would generate an additional file in your work directory of type <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span>:

* MY-GENOMES-FUNCTIONAL-ENRICHMENT.txt


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-function-matrix.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_function_matrix.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
