---
layout: program
title: anvi-scan-trnas
excerpt: An anvi'o program. Identify and store tRNA genes in a contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-scan-trnas
image:
  featurerelative: ../../../images/header.png
  display: true
---

Identify and store tRNA genes in a contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program identifies the tRNA genes in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and stores them in an <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>.

To run, just provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that you want to look through.

<div class="codeblock" markdown="1">
anvi&#45;scan&#45;trnas &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

### Customizing the cut off score

What counts as a tRNA gene? That could be up to you.

The default minimum score for a gene to be counted is 20.  However, you can set this cutoff to anywhere between 0-100. This value is actually used by the module tRNAScan-SE, so view [their documentation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6768409/) for details. For example, to find more non-cononical tRNA genes, a user could lower the cutoff score to 10 as follows:

<div class="codeblock" markdown="1">
anvi&#45;scan&#45;trnas &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                &#45;&#45;trna&#45;cutoff&#45;score 10
</div>

### Other options

- It is easy to modify where the outputs will go:

    - Use the parameter `--log-file` to provide a path for the output messages to go.

    - Use the parameter `--trna-hits-file` to provide a path for the raw tRNA scan data to go.

- Like many anvi'o programs, you can use the tag `--just-do-it` to not have to look at questions or warnings

- You can also try to multithread whenever possible by setting the `--num-threads` parameter (it is 1 by default). This can be used to speed up runtime, but please be aware of your system and its limitations before trying this.

### Understanding the output

Essentially, the output of this program states the probability that each gene is a tRNA gene. See <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> for more information.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-scan-trnas.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-scan-trnas`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-scan-trnas [-h] -c CONTIGS_DB [-T NUM_THREADS] [--log-file FILE_PATH] [--trna-hits-file FILE_PATH] [--trna-cutoff-score INT] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-log_file"><code class="parameter-flags">--log-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store debug/output messages.</span></dd>
<dt class="parameter" id="parameter-trna_hits_file"><code class="parameter-flags">--trna-hits-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store raw hits from tRNA scan.</span></dd>
<dt class="parameter" id="parameter-trna_cutoff_score"><code class="parameter-flags">--trna-cutoff-score</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum score to assume a hit comes from a proper tRNA gene (passed to the tRNAScan-SE). The default is 20. It can get any value between 0-100.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">20</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/scan_trnas.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
