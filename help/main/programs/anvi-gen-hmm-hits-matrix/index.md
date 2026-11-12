---
layout: program
title: anvi-gen-hmm-hits-matrix
excerpt: An anvi'o program. A simple script to generate a TAB-delimited file that reports the frequency of HMM hits for a given HMM source across contigs databases.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-hmm-hits-matrix
image:
  featurerelative: ../../../images/header.png
  display: true
---

A simple script to generate a TAB-delimited file that reports the frequency of HMM hits for a given HMM source across contigs databases.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits-across-genomes-txt](../../artifacts/hmm-hits-across-genomes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program lets you look at the <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from a single <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> across multiple genomes or bins, by creating a <span class="artifact-n">[hmm-hits-across-genomes-txt](/help/main/artifacts/hmm-hits-across-genomes-txt)</span>.

{:.notice}
For a simlar program that reports function hits across genomes, see <span class="artifact-p">[anvi-gen-function-matrix](/help/main/programs/anvi-gen-function-matrix)</span>.

The input of this program can be either an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> or an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>.

Here are two example run on an internal-genomes:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;hmm&#45;hits&#45;matrix &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                                               &#45;&#45;hmm&#45;source Bacteria_71 \
                                               &#45;o output.txt
</div>

To list the <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s common to the datasets that you're analyzing, just add the flag `--list-hmm-sources`, as so:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;hmm&#45;hits&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                               &#45;&#45;list&#45;hmm&#45;sources
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-hmm-hits-matrix.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-hmm-hits-matrix`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-hmm-hits-matrix [-h] [-e FILE_PATH] [-i FILE_PATH] [--hmm-source HMM_ANNOTATION_SOURCE] [-l] -o FILE_PATH [--skip-checking-genome-hashes]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-internalexternal-genomes-file">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT: INTERNAL/EXTERNAL GENOMES FILE</span> <span class="parameter-group-description">Yes. You need to use an internal and/or external genomes file to tell anvi&#x27;o where your contigs databases are.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-hmm-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">HMM STUFF</span> <span class="parameter-group-description">This is where you can specify an HMM source, and/or a list of genes to filter your results.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-hmm_source"><code class="parameter-flags">--hmm-source</code> <code class="parameter-metavar">HMM_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use a specific HMM source. You can use &#x27;--list-hmm-sources&#x27; flag to see a list of available resources. The default is &#x27;None&#x27;.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_hmm_sources"><code class="parameter-flags">-l, --list-hmm-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available HMM sources in the contigs database and quit.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-outputtah">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUTTAH</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_hmm_hits_matrix.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
