---
layout: program
title: anvi-get-metabolic-model-file
excerpt: An anvi'o program. This program exports a metabolic reaction network to a file suitable for flux balance analysis.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-metabolic-model-file
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program exports a metabolic reaction network to a file suitable for flux balance analysis..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[reaction-network](../../artifacts/reaction-network) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-network-json](../../artifacts/reaction-network-json) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **exports a metabolic <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> OR a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> to a <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file** formatted for flux balance analysis.

The required input to this program is a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> OR a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> in which a <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> has been stored by <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>. The <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> must be accompanied by a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> input.

The <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file output contains sections on the metabolites, reactions, and genes (or gene clusters) constituting the <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> that had been predicted from the genome (or pangenome). An "objective function" representing the biomass composition of metabolites in the ["core metabolism" of *E. coli*](http://bigg.ucsd.edu/models/e_coli_core) is automatically added as the first entry in the "reactions" section of the file and can be deleted as needed. An objective function is needed for flux balance analysis.

## Usage

<span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span> requires a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> OR a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> as input, plus the path to an output <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c /path/to/contigs&#45;db \
                              &#45;o /path/to/ouput.json
</div>

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;p /path/to/pan&#45;db \
                              &#45;g /path/to/genomes&#45;storage&#45;db \
                              &#45;o /path/to/output.json
</div>

An existing file at the target output location must be explicitly overwritten with the flag, `--overwrite-output-destinations`.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c /path/to/contigs&#45;db \
                              &#45;o /path/to/output.json \
                              &#45;&#45;overwrite&#45;output&#45;destinations
</div>

The flag, `--remove-missing-objective-metabolites` must be used to remove metabolites in the *E. coli* core biomass objective function from the <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file if the metabolites are not produced or consumed by the predicted <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span>. [COBRApy](https://opencobra.github.io/cobrapy/), for instance, cannot load the JSON file if metabolites in the objective function are missing from the model.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c /path/to/contigs&#45;db \
                              &#45;o /path/to/output.json \
                              &#45;&#45;remove&#45;missing&#45;objective&#45;metabolites
</div>

It is possible that the gene KO annotations used to construct the stored reaction network have since been changed in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or the <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>. By default, without using the flag, `--ignore-changed-gene-annotations`, this program checks that the set of gene KO annotations that is currently stored was also that used in construction of the <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span>, and raises an error if this is not the case. Use of this flag ignores that check, permitting the set of gene annotations to have changed since creation of the network.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;p /path/to/contigs&#45;db \
                              &#45;o /path/to/output.json \
                              &#45;&#45;ignore&#45;changed&#45;gene&#45;annotations
</div>

For a pangenomic network, the option `--record-genomes` determines which additional information is added to the output <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file regarding genome membership. By default, genome names are recorded for gene clusters and reactions, which is equivalent to `--record-genomes cluster reaction`. 'cluster' records in the 'notes' section of each 'gene' (cluster) entry in the JSON file which genomes are part of the cluster. 'reaction' and 'metabolite', respectively, record the genomes predicted to encode enzymes associated with reaction and metabolite entries. The arguments, 'cluster', 'reaction', and 'metabolite', are valid, and are all used in the following example.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;p /path/to/pan&#45;db \
                              &#45;g /path/to/genomes&#45;storage&#45;db \
                              &#45;&#45;record&#45;genomes cluster reaction metabolite
</div>

The use of `--record-genomes` as a flag without any arguments prevents genome membership from being recorded at all in the <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;p /path/to/pan&#45;db \
                              &#45;g /path/to/genomes&#45;storage&#45;db \
                              &#45;&#45;record&#45;genomes
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-metabolic-model-file.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-metabolic-model-file`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-metabolic-model-file [-h] [-c CONTIGS_DB] [-p PAN_DB] [-g GENOMES_STORAGE] [--record-genomes [RECORD_GENOMES ...]] [-o FILE_PATH] [-W] [--remove-missing-objective-metabolites] [--ignore-changed-gene-annotations]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-single-genome-or-metagenome">
<header class="parameter-group-header"><span class="parameter-group-title">SINGLE GENOME OR METAGENOME</span> <span class="parameter-group-description">Export a reaction network stored in a contigs database.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-pangenome">
<header class="parameter-group-header"><span class="parameter-group-title">PANGENOME</span> <span class="parameter-group-description">Export a reaction network stored in a pan database, with the associated genomes storage database also required.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-record_genomes"><code class="parameter-flags">--record-genomes</code> <code class="parameter-metavar">RECORD_GENOMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">This option records the genome membership of gene clusters in JSON entries. By default, genome names are recorded for gene clusters and reactions: this is equivalent to the argument &#x27;cluster reaction&#x27;. To not record genome membership at all, use this as a flag without any arguments, i.e., &#x27;--record-genomes&#x27;. The following arguments can be provided in any combination: &#x27;cluster&#x27;, &#x27;reaction&#x27;, and &#x27;metabolite&#x27;. &#x27;reaction&#x27; and &#x27;metabolite&#x27; record the genomes predicted to encode enzymes associated with reactions and metabolites, respectively.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">[&#x27;cluster&#x27;, &#x27;reaction&#x27;]</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-other-options">
<header class="parameter-group-header"><span class="parameter-group-title">OTHER OPTIONS</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-remove_missing_objective_metabolites"><code class="parameter-flags">--remove-missing-objective-metabolites</code></dt>
<dd class="parameter-details"><span class="parameter-help">The metabolic model file includes the core E. coli biomass objective function (BOF), as in the COBRApy example file, &#x27;e_coli_core.json&#x27;. With this flag, metabolites in the BOF are removed if they are not produced or consumed by enzymes in the model. Without this flag, COBRApy cannot load the output JSON file if there are missing BOF metabolites. Removed BOF metabolite data are reported to the terminal.</span></dd>
<dt class="parameter parameter-switch" id="parameter-ignore_changed_gene_annotations"><code class="parameter-flags">--ignore-changed-gene-annotations</code></dt>
<dd class="parameter-details"><span class="parameter-help">It is possible that the gene KO annotations used to construct the stored reaction network have since been changed in the database. By default, without using this flag, this program checks that the set of gene KO annotations that is currently stored was also that used in construction of the reaction network, and raises an error if this is not the case. Use of this flag ignores that check, permitting the set of gene annotations to have changed since creation of the reaction network.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_metabolic_model_file.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
