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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program allows you to remove low quality HMM alignments from a <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> by leveraging HMM alignment parameters such as model-coverage (query-coverage) and gene-coverage (target-coverage) calculated from a <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>. Briefly, the program will remove all records from an <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> in the <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span>, then import a new <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> table into the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that was filtered to your specifications.

For this, you first need to have <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span> to ask HMMER to report a domain hits table by including `--domain-hits-table` flag in your command:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
              &#45;I Bacteria_71 \
              &#45;&#45;hmmer&#45;output&#45;dir path/to/dir
              &#45;&#45;domain&#45;hits&#45;table
</div>

After the command above, your HMM hits will be stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as usual. However, with the availability of the domain hits table, you can filter out hits from your contigs database using thresholds for model or gene coverage of each hit i.e. you can filter out <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> where the profile HMM and gene align well to each other.

For example, following the command above, the command below will remove <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> for profile HMMs that had less than 90% coverage of the target genes:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;model&#45;coverage 0.9
</div>

Some HMM profiles align multiple times to the same gene at different coordinates. The program `anvi-script-filter-hmm-hits-table` by default will use only one of those domain hits table records which could represent very little alignment coverage. To combine the domain hits table records into one hit and thus increasing alignment coverage, use the parameter `--merge-partial-hits-within-X-nts`. Briefly, if you give the parameter `--merge-partial-hits-within-X-nts` 300, `anvi-script-filter-hmm-hits-table` will merge all hits to the same gene in the domain hits table that have coordinates within 300 nucleotides of each other.  

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;hmm&#45;hits&#45;table &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;&#45;hmm&#45;source Bacteria_71 \
                                  &#45;&#45;domain&#45;hits&#45;table path/to/dir/hmm.domtable \
                                  &#45;&#45;model&#45;coverage 0.9 \
                                  &#45;&#45;merge&#45;partial&#45;hits&#45;within&#45;X&#45;nts
</div>

{:.notice}
The input domtblout file for <span class="artifact-p">[anvi-script-filter-hmm-hits-table](/help/main/programs/anvi-script-filter-hmm-hits-table)</span> will be saved as `hmm.domtable.orig` and the output, filtered version will be saved as `hmm.domtable`. If you decide to change the coverage filtering threshold or `--merge-partial-hits-within-X-nts`, be sure to change the path for `--domain-hits-table`  to `hmm.domtable.orig`.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-filter-hmm-hits-table.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-script-filter-hmm-hits-table) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
