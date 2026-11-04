---
layout: program
title: anvi-run-interacdome
excerpt: An anvi'o program. Run InteracDome on a contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-interacdome
image:
  featurerelative: ../../../images/header.png
  display: true
---

Run InteracDome on a contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[interacdome-data](../../artifacts/interacdome-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[binding-frequencies-txt](../../artifacts/binding-frequencies-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[misc-data-amino-acids](../../artifacts/misc-data-amino-acids) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage



This program predicts per-residue binding scores for genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> via the [InteracDome](https://interacdome.princeton.edu/) database.


The full process is detailed in [this blog post](https://merenlab.org/2020/07/22/interacdome/). In fact, ideally, all of that information should really be in this very document, but because the blogpost has preceded this document, it hasn't been translated over yet. So really, you should really be reading that blogpost if you want to get into the nitty gritty details. Otherwise, the quick reference herein should be sufficient.


In summary, this program runs an HMM search of the genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> to all the Pfam gene families that have been annotated with InteracDome binding frequencies. Then, it parses and filters results, associates binding frequencies of HMM match states to the user's genes of interest, and then stores the resulting per-residue binding frequencies for each gene into the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as <span class="artifact-n">[misc-data-amino-acids](/help/main/artifacts/misc-data-amino-acids)</span>.


Before running this program, you'll have to run <span class="artifact-p">[anvi-setup-interacdome](/help/main/programs/anvi-setup-interacdome)</span> to set up a local copy of [InteracDome's tab-separated files](https://interacdome.princeton.edu/#tab-6136-4).



## Basic Usage

A basic run of this program looks like this:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;interacdome &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> &#45;T 4
</div>

In addition to storing per-residue binding frequencies as <span class="artifact-n">[misc-data-amino-acids](/help/main/artifacts/misc-data-amino-acids)</span> in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, this also outputs additional files prefixed with `INTERACDOME` by default (the prefix can be changed with `-O`). These are provided as <span class="artifact-n">[binding-frequencies-txt](/help/main/artifacts/binding-frequencies-txt)</span> files named `INTERACDOME-match_state_contributors.txt` and `INTERACDOME-domain_hits.txt`. See <span class="artifact-n">[binding-frequencies-txt](/help/main/artifacts/binding-frequencies-txt)</span> for details.


## Parameters

[InteracDome](https://interacdome.princeton.edu/) offers two different binding frequency datasets that can be chosen with `--interacdome-dataset`.  Choose 'representable' to include Pfams that correspond to domain-ligand interactions that had nonredundant instances across three or more distinct PDB structures. InteracDome authors recommend using this collection to learn more about domain binding properties. Choose 'confident' to include Pfams that correspond to domain-ligand interactions that had nonredundant instances across three or more distinct PDB entries and achieved a cross-validated precision of at least 0.5. The default is 'representable', and you can change it like so:


<div class="codeblock" markdown="1">
anvi&#45;run&#45;interacdome &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;&#45;interacdome&#45;dataset confident
</div>

This progarm is multi-threaded, so be sure to make use of it:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;interacdome &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;&#45;interacdome&#45;dataset confident \
                     &#45;T 8
</div>

Additionally, there are numerous thresholds that you can set:

1. [`--min-binding-frequency` to ignore very low frequencies](https://merenlab.org/2020/07/22/interacdome/#filtering-low-binding-frequency-scores). The InteracDome scale is from 0 (most likely not involved in binding) to 1 (most likely involved in binding). The default cutoff is 0.200000.
2. [`--min-hit-fraction` to remove poor quality HMM hits](https://merenlab.org/2020/07/22/interacdome/#filtering-partial-hits). The default value is 0.5, so at least half of a profile HMM's length must align to your gene, otherwise the hit will be discarded.
3. [`--information-content-cutoff` to ignore low-qulaity domain hits](https://merenlab.org/2020/07/22/interacdome/#filtering-bad-hits-with-information-content). The default value is 4, which means every amino acid of your gene must match the consensus amino acid of the match state for each mate state with [information content](https://en.wikipedia.org/wiki/Sequence_logo) greater than 4. Decreasing this cutoff yields an increasingly stringent filter.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-interacdome.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-interacdome`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-interacdome [-h] -c CONTIGS_DB [--interacdome-data-dir PATH] [--interacdome-dataset {representable,confident}] [-m FLOAT] [-f FLOAT] [-t FLOAT] [-T NUM_THREADS] [--just-do-it] [-O FILENAME_PREFIX]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-interacdome_data_dir"><code class="parameter-flags">--interacdome-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The path for the interacdome data to be stored. If you leave it as is without specifying anything, anvi&#x27;o will set up everything in a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your data.</span></dd>
<dt class="parameter" id="parameter-interacdome_dataset"><code class="parameter-flags">--interacdome-dataset</code> <code class="parameter-metavar">INTERACDOME_DATASET</code></dt>
<dd class="parameter-details"><span class="parameter-help">Choose &#x27;representable&#x27; to include Pfams that correspond to domain-ligand interactions that had nonredundant instances across three or more distinct PDB structures. InteracDomeauthors recommend using this collection to learn more about domain binding properties. Choose &#x27;confident&#x27; to include Pfams that correspond to domain-ligand interactions that had nonredundant instances across three or more distinct PDB entries and achieved a cross-validated precision of at least 0.5. We recommend using this collection to annotate potential ligand-binding positions in protein sequences. The default is &#x27;representable&#x27;.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">representable</code> <code class="parameter-choice">confident</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">representable</code></span></dd>
<dt class="parameter" id="parameter-min_binding_frequency"><code class="parameter-flags">-m, --min-binding-frequency</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">InteracDome has associated binding &#x27;frequencies&#x27;, which can be considered scores between 0 to 1 that quantify how likely a position is to be involved in binding. Use this parameter to filter out low frequencies. The default is 0.200000. Warning, your contigs database size will grow massively if this is set to 0.0, but you&#x27;re the boss.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.2</code></span></dd>
<dt class="parameter" id="parameter-min_hit_fraction"><code class="parameter-flags">-f, --min-hit-fraction</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Any hits where the hit length--relative to the HMM profile--divided by the total HMM profile length, is less than this value, it will be removed from the results and will not contribute to binding frequencies. The default is 0.5</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.5</code></span></dd>
<dt class="parameter" id="parameter-information_content_cutoff"><code class="parameter-flags">-t, --information-content-cutoff</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter can be used to control for low-quality domain hits. Each domain is composed of positions (match states) with varying degrees of conservancy, which can be quantified with information content (IC). High IC means highly conserved. For example, IC = 4 corresponds to 95% of the members of the Pfam sharing the same amino acid at that position. By default, anvi&#x27;o demands that for an alignment of a user&#x27;s gene with a Pfam HMM, the gene sequence must match with the consensus amino acid of each match state that has IC &gt; 4.000000. For context, it is common for a Pfam to not even have a position with an IC &gt; 4, so these represent truly very conserved positions. You can modify this with this parameter. For example, if you think this is dumb, you can set this to 10000, and then no domain hits will be removed for this reason.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">4.0</code></span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">INTERACDOME</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Estimating per-residue binding frequencies with InteracDome](http://merenlab.org/2020/07/22/interacdome/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_interacdome.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
