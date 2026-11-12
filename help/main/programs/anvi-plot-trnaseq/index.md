---
layout: program
title: anvi-plot-trnaseq
excerpt: An anvi'o program. A program to write plots of coverage and modification data from flexible groups of tRNA-seq seeds.
categories: [anvio]
comments: false
redirect_from: /m/anvi-plot-trnaseq
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to write plots of coverage and modification data from flexible groups of tRNA-seq seeds.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[trnaseq-contigs-db](../../artifacts/trnaseq-contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[trnaseq-seed-txt](../../artifacts/trnaseq-seed-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[modifications-txt](../../artifacts/modifications-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[trnaseq-plot](../../artifacts/trnaseq-plot) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **generates plots of groups of tRNA-seq seeds. The plots show seed coverages and the nucleotide frequencies at modification sites in each sample**.

The [trnaseq-workflow](../../workflows/trnaseq/) predicts tRNA seeds and their nucleotide modifications from a set of samples. The inspect webpage in <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> displays information on a selected seed, including coverages, mutation frequencies at predicted modification sites, and indel frequencies. anvi-plot-trnaseq generates plots that similarly show seed coverages in each sample but otherwise differ in many ways from the inspect page.

This program generates plots for a user-defined group of seeds. Seeds may be grouped by tRNA taxonomy and/or amino acid/anticodon identity. All of the seeds in a taxonomic/anticodon group are represented on the same plot. For example, all Arg-ACG seeds resolving to family Lachnospiraceae can be displayed on a single plot. Each panel of the plot shows coverages of all the seeds in a given sample. If there are five Lachnospiraceae Arg-ACG seeds, then five coverage traces will be stacked atop each other in each subplot, the seed with the highest mean coverage on the bottom. Nucleotide frequencies at predicted modification positions are shown as bars, with sections of the bar for each of the four nucleotides. If three of the five seeds have a modification, say m1A22, then the total height of the bar will rise to the height of the summed coverage of the three seeds at position 22. The number of seeds represented by the group is displayed on the plot, and the mean and 3' (discriminator nucleotide) coverages of the group of seeds is displayed adjacent to each sample subplot.

Multiple groups may be specified at the same time, producing a set of plots. If **only** a taxonomic group is given, then plots for **every** isoacceptor will be produced, e.g., Lachnospiraceae Arg-ACG, Arg-CCG, Arg-GCG, etc. If a taxonomic **rank** and anticodon is given, then plots for each taxon will be produced, e.g., at the family level, Lachnospiraceae Arg-ACG, Ruminococcaceae Arg-ACG, Bacteroidaceae Arg-ACG, etc.

anvi-plot-trnaseq is interactive through the command prompt, allowing the required <span class="artifact-n">[trnaseq-contigs-db](/help/main/artifacts/trnaseq-contigs-db)</span>, <span class="artifact-n">[seeds-specific-txt](/help/main/artifacts/seeds-specific-txt)</span>, and <span class="artifact-n">[modifications-txt](/help/main/artifacts/modifications-txt)</span> to be loaded only once and plots to be generated on the fly. Aesthetic parameters of the plots can be tweaked through the program. A comprehensive help menu with examples appears upon starting the program.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-plot-trnaseq.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-plot-trnaseq`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-plot-trnaseq [-h] -c CONTIGS_DB --seeds-specific-txt TEXT_FILE --modifications-txt TEXT_FILE [-o DIR_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-seeds_specific_txt"><code class="parameter-flags">--seeds-specific-txt, -s</code> <code class="parameter-metavar">TEXT_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A tab-delimited text file containing data on tRNA seeds including specific coverages. `anvi-tabulate-trnaseq` generates this file from anvi&#x27;o tRNA-seq databases.</span></dd>
<dt class="parameter parameter-required" id="parameter-modifications_txt"><code class="parameter-flags">--modifications-txt, -m</code> <code class="parameter-metavar">TEXT_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A tab-delimited text file containing modification data on tRNA seeds. `anvi-tabulate-trnaseq` generates this file from anvi&#x27;o tRNA-seq databases.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/plot_trnaseq.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
