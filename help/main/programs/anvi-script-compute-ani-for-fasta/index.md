---
layout: program
title: anvi-script-compute-ani-for-fasta
excerpt: An anvi'o program. Run ANI between contigs in a single FASTA file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-compute-ani-for-fasta
image:
  featurerelative: ../../../images/header.png
  display: true
---

Run ANI between contigs in a single FASTA file.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-similarity](../../artifacts/genome-similarity) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program computes the average nucleotide identity between reads in a single fasta file (using PyANI).

To compute the ANI (or other genome distance metrics) between two genomes in different fasta files, use <span class="artifact-p">[anvi-compute-genome-similarity](/help/main/programs/anvi-compute-genome-similarity)</span>.

A default run of this program looks like this:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;compute&#45;ani&#45;for&#45;fasta &#45;f <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                                  &#45;o path/to/output \
                                  &#45;&#45;method ANIb
</div>

By default, the PyANI method is ANIb (which aligns 1020 nt fragments of your sequences using BLASTN+). You can switch to ANIm, ANIblastall, or TETRA if desired. See the [PyANI documentation](https://github.com/widdowquinn/pyani) for more informaiton.

You also have the option to change the distance metric (from the default "euclidean") or the linkage method (from the default "ward") or provide a path to a log file for debug messages.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-compute-ani-for-fasta.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-compute-ani-for-fasta`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-compute-ani-for-fasta [-h] -f FASTA file -o DIR_PATH [-p PAN_DB] [-T NUM_THREADS] [--log-file FILE_PATH] [--method {ANIm,ANIb,ANIblastall,TETRA}] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A FASTA-formatted input file.</span></dd>
<dt class="parameter parameter-required" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-log_file"><code class="parameter-flags">--log-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store debug/output messages.</span></dd>
<dt class="parameter" id="parameter-method"><code class="parameter-flags">--method</code> <code class="parameter-metavar">METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Method for pyANI. The default is ANIb. You must have the necessary binary in path for whichever method you choose. According to the pyANI help for v0.2.7 at https://github.com/widdowquinn/pyani, the method &#x27;ANIm&#x27; uses MUMmer (NUCmer) to align the input sequences. &#x27;ANIb&#x27; uses BLASTN+ to align 1020nt fragments of the input sequences. &#x27;ANIblastall&#x27;: uses the legacy BLASTN to align 1020nt fragments Finally, &#x27;TETRA&#x27;: calculates tetranucleotide frequencies of each input sequence</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">ANIm</code> <code class="parameter-choice">ANIb</code> <code class="parameter-choice">ANIblastall</code> <code class="parameter-choice">TETRA</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ANIb</code></span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. The default is &quot;euclidean&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">euclidean</code></span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The linkage method for the hierarchical clustering. The default is &quot;ward&quot;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ward</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_ani_for_fasta.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
