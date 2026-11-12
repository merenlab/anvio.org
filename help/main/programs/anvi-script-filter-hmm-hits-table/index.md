---
layout: program
title: anvi-script-filter-hmm-hits-table
excerpt: An anvi'o program. Filter weak HMM hits from a given contigs database using a domain hits table reported by `anvi-run-hmms`.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-filter-hmm-hits-table
image:
  featurerelative: ../../../images/header.png
  display: true
---

Filter weak HMM hits from a given contigs database using a domain hits table reported by `anvi-run-hmms`..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program allows you to remove low quality HMM alignments from a <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with HMM alignment parameters such as model-coverage (query-coverage) and gene-coverage (target-coverage), or by removing partial genes (i.e., genes that are not partial and that start with a start codon and end with a stop codon). Briefly, the program will remove all records from an <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> in the <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>, then import a new <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> table into the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that was filtered to your specifications.

## Filter with HMM alignment parameters

Similar to query coverage in BLAST, we can also use HMM alignment coverage to help determine if an hmm-hit is homologous. A small alignment coverage value means only a small proportion of the query/target is aligning. Before anvi'o can filter out <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> with alignment coverage, you must run <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span> and report a domain hits table by including `--domain-hits-table` flag in your command. This will write the [domtblout](http://eddylab.org/software/hmmer3/3.1b2/Userguide.pdf) file from hmmsearch:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71 \
              &#45;&#45;hmmer&#45;output&#45;dir path/to/dir
              &#45;&#45;domain&#45;hits&#45;table
</div>

After the command above, your <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> will be stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as usual. However, with the domain hits table, you can filter out hits from your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> using thresholds for `--min-model-coverage` or `--min-model-coverage` of each hit i.e. you can filter out <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> where the profile HMM and gene align well to each other.

For example, following the command above, the command below will remove <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> for profile HMMs that had less than 90% model coverage and 50% gene coverage:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;min&#45;model&#45;coverage 0.9 \
                                  &#45;&#45;min&#45;gene&#45;coverage 0.5
</div>

### HMMs with multiple hits to one gene

Some HMM profiles align multiple times to the same gene at different coordinates. The program `anvi-script-filter-hmm-hits-table` by default will use only one of those domain hits table records which could represent very little alignment coverage. To combine the domain hits table records into one hit and thus increasing alignment coverage, use the parameter `--merge-partial-hits-within-X-nts`. Briefly, if you give the parameter `--merge-partial-hits-within-X-nts` 300, `anvi-script-filter-hmm-hits-table` will merge all hits to the same gene in the domain hits table that have coordinates within 300 nucleotides of each other.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;merge&#45;partial&#45;hits&#45;within&#45;X&#45;nts
</div>

{:.notice}
The input domtblout file for <span class="artifact-p">[anvi-script-filter-hmm-hits-table](/help/main/programs/anvi-script-filter-hmm-hits-table)</span> will be saved as `hmm.domtable.orig` and the output, filtered version will be saved as `hmm.domtable`. If you decide to change the coverage filtering threshold or `--merge-partial-hits-within-X-nts`, be sure to change the path for `--domain-hits-table`  to `hmm.domtable.orig`.

## Filter out hmm-hits from partial genes

HMMs are able to detect partial genes (i.e., genes that do not contain start and/or stop codons) with good alignment coverage and homology statistics. However, partial genes can lead to spurious phylogenetic branches and/or inflate the number of observed populations or functions in a given set of genomes/metagenomes. Using `--filter-out-partial-gene-calls`, you can remove partial gene hmm-hits.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;filter&#45;out&#45;partial&#45;gene&#45;calls
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-filter-hmm-hits-table.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-filter-hmm-hits-table`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-filter-hmm-hits-table [-h] -c CONTIGS_DB [--hmm-source HMM_ANNOTATION_SOURCE] [-l] [-H HMM PROFILE PATH] [--domain-hits-table PATH] [--min-gene-coverage MIN_GENE_COVERAGE] [--min-model-coverage MIN_MODEL_COVERAGE] [--merge-partial-hits-within-X-nts LENGTH] [--filter-out-partial-gene-calls]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-hmm_source"><code class="parameter-flags">--hmm-source</code> <code class="parameter-metavar">HMM_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use a specific HMM source. You can use &#x27;--list-hmm-sources&#x27; flag to see a list of available resources. The default is &#x27;None&#x27;.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_hmm_sources"><code class="parameter-flags">-l, --list-hmm-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available HMM sources in the contigs database and quit.</span></dd>
<dt class="parameter" id="parameter-hmm_profile_dir"><code class="parameter-flags">-H, --hmm-profile-dir</code> <code class="parameter-metavar">HMM PROFILE PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">You can use this parameter you can specify a directory path that contain an HMM profile. This way you can run HMM profiles that are not included in anvi&#x27;o. See the online to find out about the specifics of this directory structure .</span></dd>
<dt class="parameter" id="parameter-domain_hits_table"><code class="parameter-flags">--domain-hits-table</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Please provide the path to the domain-table-output. You can get this file from running anvi-run-hmms with the flag --domain-hits-table.</span></dd>
<dt class="parameter" id="parameter-min_gene_coverage"><code class="parameter-flags">--min-gene-coverage</code> <code class="parameter-metavar">MIN_GENE_COVERAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum percent of the gene that is covered by the profile HMM after hmmsearch. This is the formula using the domtblout from hmmsearch: (ali_coord_to - ali_coord_from)/target_length</span></dd>
<dt class="parameter" id="parameter-min_model_coverage"><code class="parameter-flags">--min-model-coverage</code> <code class="parameter-metavar">MIN_MODEL_COVERAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum percent of the profile HMM model that is covered by the gene after hmmsearch. This is the formula using the domtblout from hmmsearch: (hmm_coord_to - hmm_coord_from)/hmm_length</span></dd>
<dt class="parameter" id="parameter-merge_partial_hits_within_x_nts"><code class="parameter-flags">--merge-partial-hits-within-X-nts</code> <code class="parameter-metavar">LENGTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Filtering HMM hits based on target or query coverage can be difficult when a gene is covered by multiple independent hits of a single model. In these cases, the best way forward is to merge independent hits if they are close enough (for instance, if model X covers a gene A between nucleotide positions 0 and 100, and then again between nucleotide positions 105 and 200, one would like to merge those two hits into a single one before calculating the approximate coverage of the gene by the model). If you set this parameter to any distance, anvi&#x27;o will first merge independent hits for the same gene/model that are closer to each other than that distance.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-filter_out_partial_gene_calls"><code class="parameter-flags">--filter-out-partial-gene-calls</code></dt>
<dd class="parameter-details"><span class="parameter-help">Partial genes can lead to spurious branches and/or inflate the number of observed populations or functions in a given set of genomes/metagenomes. Using this flag you can instruct anvi&#x27;o to only keep HMM hits from open reading frames that represent complete genes (i.e., genes that are not partial and that start with a start codon and end with a stop codon).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/filter_hmm_hits_table.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
