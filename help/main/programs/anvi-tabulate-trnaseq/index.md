---
layout: program
title: anvi-tabulate-trnaseq
excerpt: An anvi'o program. A program to write standardized tab-delimited files of tRNA-seq seed coverage and modification results.
categories: [anvio]
comments: false
redirect_from: /m/anvi-tabulate-trnaseq
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to write standardized tab-delimited files of tRNA-seq seed coverage and modification results.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[trnaseq-contigs-db](../../artifacts/trnaseq-contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[trnaseq-profile-db](../../artifacts/trnaseq-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[trnaseq-seed-txt](../../artifacts/trnaseq-seed-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[modifications-txt](../../artifacts/modifications-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **generates tabular files of tRNA-seq seed coverage and modification data that are easily manipulable by the user**.

anvi-tabulate-trnaseq is part of the [trnaseq-workflow](../../workflows/trnaseq/), and is run following the finalization of tRNA seeds by <span class="artifact-p">[anvi-merge-trnaseq](/help/main/programs/anvi-merge-trnaseq)</span>.

This program generates a table, <span class="artifact-n">[seeds-specific-txt](/help/main/artifacts/seeds-specific-txt)</span>, containing the specific coverage of each nucleotide position in each seed in every sample. If a nonspecific <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span> is also provided, this program generates a table of nonspecific coverages, <span class="artifact-n">[seeds-non-specific-txt](/help/main/artifacts/seeds-non-specific-txt)</span>. The distinction between specific and nonspecific coverage is explained in the <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span> artifact. These coverage tables have one row per seed per sample. They have three header rows for different ways of describing tRNA nucleotide positions: canonical position name (e.g., "discriminator_1"), canonical position (e.g., "73"), and "ordinal" position relative to all the other **possible** positions (e.g., "95").

anvi-tabulate-trnaseq also generates a table, <span class="artifact-n">[modifications-txt](/help/main/artifacts/modifications-txt)</span>, containing information on each predicted modification position in each seed, with one row per modification per seed per sample. This table includes four columns of position coverage counts of the four nucleotides.

All tables include taxonomic annotations of the seeds; annotations are added to the <span class="artifact-n">[trnaseq-contigs-db](/help/main/artifacts/trnaseq-contigs-db)</span> by <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-tabulate-trnaseq.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-tabulate-trnaseq`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-tabulate-trnaseq [-h] -c CONTIGS_DB --specific-profile-db PROFILE_DB [--nonspecific-profile-db PROFILE_DB] [-o DIR_PATH] [-W]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Path to a `trnaseq`-variant contigs database, as produced by `anvi-merge-trnaseq`.</span></dd>
<dt class="parameter parameter-required" id="parameter-specific_profile_db"><code class="parameter-flags">--specific-profile-db, -s</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">The path to an anvi&#x27;o profile database containing specific coverage information on tRNA seeds. `anvi-merge-trnaseq` generates a specific profile database from a tRNA-seq experiment.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-nonspecific_profile_db"><code class="parameter-flags">--nonspecific-profile-db, -n</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">The path to an anvi&#x27;o profile database containing nonspecific coverage information on tRNA seeds. `anvi-merge-trnaseq` optionally generates a nonspecific profile database from a tRNA-seq experiment.</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/tabulate_trnaseq.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
