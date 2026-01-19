---
layout: program
title: anvi-script-filter-hmm-hits-table
excerpt: An anvi'o program. Filter weak HMM hits from a given contigs database using a domain hits table reported by `anvi-run-hmms`.
categories: [anvio]
comments: false
redirect_from: /9/anvi-script-filter-hmm-hits-table
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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program allows you to remove low quality HMM alignments from a <span class="artifact-n">[hmm-source](/help/9/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> with HMM alignment parameters such as model-coverage (query-coverage) and gene-coverage (target-coverage), or by removing partial genes (i.e., genes that are not partial and that start with a start codon and end with a stop codon). Briefly, the program will remove all records from an <span class="artifact-n">[hmm-source](/help/9/artifacts/hmm-source)</span> in the <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span>, then import a new <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span> table into the <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> that was filtered to your specifications.

## Filter with HMM alignment parameters

Similar to query coverage in BLAST, we can also use HMM alignment coverage to help determine if an hmm-hit is homologous. A small alignment coverage value means only a small proportion of the query/target is aligning. Before anvi'o can filter out <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span> with alignment coverage, you must run <span class="artifact-p">[anvi-run-hmms](/help/9/programs/anvi-run-hmms)</span> and report a domain hits table by including `--domain-hits-table` flag in your command. This will write the [domtblout](http://eddylab.org/software/hmmer3/3.1b2/Userguide.pdf) file from hmmsearch:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71 \
              &#45;&#45;hmmer&#45;output&#45;dir path/to/dir
              &#45;&#45;domain&#45;hits&#45;table
</div>

After the command above, your <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span> will be stored in your <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> as usual. However, with the domain hits table, you can filter out hits from your <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> using thresholds for `--min-model-coverage` or `--min-model-coverage` of each hit i.e. you can filter out <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span> where the profile HMM and gene align well to each other.

For example, following the command above, the command below will remove <span class="artifact-n">[hmm-hits](/help/9/artifacts/hmm-hits)</span> from your <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> for profile HMMs that had less than 90% model coverage and 50% gene coverage:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;min&#45;model&#45;coverage 0.9 \
                                  &#45;&#45;min&#45;gene&#45;coverage 0.5
</div>

### HMMs with multiple hits to one gene

Some HMM profiles align multiple times to the same gene at different coordinates. The program `anvi-script-filter-hmm-hits-table` by default will use only one of those domain hits table records which could represent very little alignment coverage. To combine the domain hits table records into one hit and thus increasing alignment coverage, use the parameter `--merge-partial-hits-within-X-nts`. Briefly, if you give the parameter `--merge-partial-hits-within-X-nts` 300, `anvi-script-filter-hmm-hits-table` will merge all hits to the same gene in the domain hits table that have coordinates within 300 nucleotides of each other.  

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;merge&#45;partial&#45;hits&#45;within&#45;X&#45;nts
</div>

{:.notice}
The input domtblout file for <span class="artifact-p">[anvi-script-filter-hmm-hits-table](/help/9/programs/anvi-script-filter-hmm-hits-table)</span> will be saved as `hmm.domtable.orig` and the output, filtered version will be saved as `hmm.domtable`. If you decide to change the coverage filtering threshold or `--merge-partial-hits-within-X-nts`, be sure to change the path for `--domain-hits-table`  to `hmm.domtable.orig`.

## Filter out hmm-hits from partial genes

HMMs are able to detect partial genes (i.e., genes that do not contain start and/or stop codons) with good alignment coverage and homology statistics. However, partial genes can lead to spurious phylogenetic branches and/or inflate the number of observed populations or functions in a given set of genomes/metagenomes. Using `--filter-out-partial-gene-calls`, you can remove partial gene hmm-hits.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/9/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;filter&#45;out&#45;partial&#45;gene&#45;calls
</div>

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-filter-hmm-hits-table.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/filter_hmm_hits_table.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
