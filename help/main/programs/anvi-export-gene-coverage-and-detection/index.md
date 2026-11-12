---
layout: program
title: anvi-export-gene-coverage-and-detection
excerpt: An anvi'o program. Export gene coverage and detection data for all genes associated with contigs described in a profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-gene-coverage-and-detection
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export gene coverage and detection data for all genes associated with contigs described in a profile database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[coverages-txt](../../artifacts/coverages-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[detection-txt](../../artifacts/detection-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program gives you the **coverage and detection data** for all of the genes found in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, using the short reads data in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;gene&#45;coverage&#45;and&#45;detection &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                        &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                        &#45;O MY_DATA
</div>

This will give you a <span class="artifact-n">[coverages-txt](/help/main/artifacts/coverages-txt)</span> and a <span class="artifact-n">[detection-txt](/help/main/artifacts/detection-txt)</span> whose file names will begin with `MY_DATA`


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-gene-coverage-and-detection.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-gene-coverage-and-detection`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-gene-coverage-and-detection [-h] -p PROFILE_DB -c CONTIGS_DB -O FILENAME_PREFIX [--gene-caller-id GENE_CALLER_ID] [--genes-of-interest FILE]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Anvi&#x27;o databases to read from</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Define a prefix for your output files</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes">
<header class="parameter-group-header"><span class="parameter-group-title">GENES</span> <span class="parameter-group-description">Gene calls you want to work with. Without these parameters anvi&#x27;o will report everything it finds in the profile database (please) note that the reported genes will only include those that occur in contigs that were taken into consideration during `anvi-profile`, which means if there was a length cutoff for profiling, genes that occur in contigs shorter than that cutoff will not appear in your output.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_id"><code class="parameter-flags">--gene-caller-id</code> <code class="parameter-metavar">GENE_CALLER_ID</code></dt>
<dd class="parameter-details"><span class="parameter-help">A single gene id.</span></dd>
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_gene_coverage_and_detection.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
