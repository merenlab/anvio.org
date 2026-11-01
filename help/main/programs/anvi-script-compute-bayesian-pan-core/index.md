---
layout: program
title: anvi-script-compute-bayesian-pan-core
excerpt: An anvi'o program. Runs mOTUpan on your gene clusters to estimate whether they are core or accessory.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-compute-bayesian-pan-core
image:
  featurerelative: ../../../images/header.png
  display: true
---

Runs mOTUpan on your gene clusters to estimate whether they are core or accessory.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/no-avatar.png" /></div><div class="anvio-person-info-box"><a href="/people/moritzbuck" target="_blank"><span class="anvio-person-name">Moritz Buck</span></a><div class="anvio-person-social-box"><a href="mailto:moritz.buck@slu.se" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/MetaMoritz" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/moritzbuck" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>




## Usage


{:.notice}
**No one has described the usage of this program** :/ If you would like to contribute, please see previous examples [here](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs), and feel free to add a Markdown formatted file in that directory named "anvi-script-compute-bayesian-pan-core.md". For a template, you can use the markdown file for `anvi-gen-contigs-database`. THANK YOU!



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-compute-bayesian-pan-core`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-compute-bayesian-pan-core [-h] -p PAN_DB [-g GENOMES_STORAGE] [-o FILE_PATH] [--store-in-db] [-T NUM_THREADS] [--just-do-it] [-B NUM_BOOTSTRAPS]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">Input files from the pangenome analysis.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-reporting">
<header class="parameter-group-header"><span class="parameter-group-title">REPORTING</span> <span class="parameter-group-description">How do you want results to be reported? Anvi&#x27;o can produce a TAB-delimited output file for you (for which you would have to provide an output file name). Or the results can be stored in the pan database directly, for which you would have to explicitly ask for it. You can get both as well in case you are a fan of redundancy and poor data analysis practices. Anvi&#x27;o does not judge.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-store_in_db"><code class="parameter-flags">--store-in-db</code></dt>
<dd class="parameter-details"><span class="parameter-help">Store analysis results into the database directly.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span> <span class="parameter-group-description">Optional stuff available for you to use</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter" id="parameter-num_bootstraps"><code class="parameter-flags">-B, --num-bootstraps</code> <code class="parameter-metavar">NUM_BOOTSTRAPS</code></dt>
<dd class="parameter-details"><span class="parameter-help">number of boostraps run on the partitioning to evaluate it&#x27;s quality</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [GitHub repository for the mOTUPan](https://github.com/moritzbuck/mOTUlizer/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_bayesian_pan_core.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
