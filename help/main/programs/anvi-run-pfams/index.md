---
layout: program
title: anvi-run-pfams
excerpt: An anvi'o program. Run Pfam on Contigs Database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-pfams
image:
  featurerelative: ../../../images/header.png
  display: true
---

Run Pfam on Contigs Database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pfams-data](../../artifacts/pfams-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **associates genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions using the EBI's [Pfam database](https://pfam.xfam.org/).**

Before you run this program, you'll have to set up the Pfam database on your computer with the program <span class="artifact-p">[anvi-setup-pfams](/help/main/programs/anvi-setup-pfams)</span>.

The Pfam database is based on protein sequences, so anvi'o will convert your genetic information into protein sequences and then use HMMs to compare them to the database.

{:.notice}
Unsure what an HMM is? Check out [our vocab page](http://merenlab.org/vocabulary/#hmm)

To run, you'll need to provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. If you stored the <span class="artifact-n">[pfams-data](/help/main/artifacts/pfams-data)</span> that you got from running <span class="artifact-p">[anvi-setup-pfams](/help/main/programs/anvi-setup-pfams)</span> in a custom location, you'll need to provide that path as well. The output is a <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> artifact.

Here is a default run:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;pfams &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;pfam&#45;data&#45;dir <span class="artifact&#45;n">[pfams&#45;data](/help/main/artifacts/pfams&#45;data)</span>
</div>

By default, this uses `hmmsearch` to run HMMs. You can choose to use `hmmscan` instead by running

<div class="codeblock" markdown="1">
anvi&#45;run&#45;pfams &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;pfam&#45;data&#45;dir <span class="artifact&#45;n">[pfams&#45;data](/help/main/artifacts/pfams&#45;data)</span> \
            &#45;&#45;hmmer&#45;program hmmscan
</div>

See [this article](https://cryptogenomicon.org/2011/05/27/hmmscan-vs-hmmsearch-speed-the-numerology/) for a discussion on the performance of the two HMMER programs.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-pfams.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-run-pfams`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-run-pfams [-h] -c CONTIGS_DB [--pfam-data-dir PFAM_DATA_DIR] [-T NUM_THREADS] [--hmmer-program HMMER_PROGRAM]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-pfam_data_dir"><code class="parameter-flags">--pfam-data-dir</code> <code class="parameter-metavar">PFAM_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory path for your Pfam setup. Anvi&#x27;o will try to use the default path if you do not specify anything.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-hmmer_program"><code class="parameter-flags">--hmmer-program</code> <code class="parameter-metavar">HMMER_PROGRAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which of the HMMER programs to use to run HMMs (hmmscan or hmmsearch). By default anvi&#x27;o will use hmmscan for typical HMM operations like those in anvi-run-hmms (as these tend to scan a very large number of genes against a relatively small number of HMMs), but if you are using this program to scan a very large number of HMMs, hmmsearch might be a better choice for performance. For this reason, hmmsearch is the default in operations like anvi-run-pfams and anvi-run-kegg-kofams. See this article for a discussion on the performance of these two programs: http://cryptogenomicon.org/hmmscan-vs-hmmsearch-speed-the-numerology.html</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/run_pfams.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
