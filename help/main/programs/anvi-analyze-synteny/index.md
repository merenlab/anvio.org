---
layout: program
title: anvi-analyze-synteny
excerpt: An anvi'o program. Extract ngrams, as in &#x27;co-occurring genes in synteny&#x27;, from genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-analyze-synteny
image:
  featurerelative: ../../../images/header.png
  display: true
---

Extract ngrams, as in &#x27;co-occurring genes in synteny&#x27;, from genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[ngrams](../../artifacts/ngrams) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


The <span class="artifact-p">[anvi-analyze-synteny](/help/main/programs/anvi-analyze-synteny)</span> program quantifies <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> by transforming contigs into strings of annotations based on a user-specified gene annotation source. A functional annotation source for <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> **must** be provided to generate <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span>. The program employs a sliding window of size `N` to deconstruct genomic loci of interest into <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> and calculate their occurrence frequencies.

### Run for a given function annotation source

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>

For instance, if you have executed <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span> on each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> used to generate your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, your `--annotation-source` parameter can be specified as `NCBI_COGS`:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source NCBI_COGS \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>


### Handling genes with unknown functions 

By default, <span class="artifact-p">[anvi-analyze-synteny](/help/main/programs/anvi-analyze-synteny)</span> excludes genes with unknown functions based on the specified annotation source. However, this behavior can be modified through two alternative approaches. First, by providing a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, which enables the program to utilize gene cluster identities as functional annotations:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>

Alternatively, you can explicitly instruct the program to consider genes with unknown functions, which will include ngrams containing functionally unannotated genes in the analysis:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span> \
                     &#45;&#45;analyze&#45;unknown&#45;functions
</div>

The primary limitation of this latter approach is that all genes lacking functional annotations are treated as identical entities, which may artificially inflate the frequency of ngrams containing unannotated genes in your final results.

### Run with multiple annotations

When multiple gene annotation sources are provided (such as a pangenome database for gene cluster identities in addition to a functional annotation source), you must specify which annotation source will be used to construct the <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> using the `--ngram-source` parameter. The resulting <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> will subsequently be re-annotated with the secondary annotation source and reported accordingly. 

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                     &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                     &#45;&#45;ngram&#45;source gene_clusters \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>

### Test cases for developers

If you are following the anvi'o master branch on your computer, you can create a test case for this program.

First, navigate to any working directory and execute the following commands:

``` bash
anvi-self-test --suite metagenomics-full \
               --output-dir TEST_OUTPUT
```

Execute one or more alternative scenarios and examine the output files:

```
anvi-analyze-synteny -g TEST_OUTPUT/TEST-GENOMES.db \
                     --annotation-source COG20_FUNCTION \
                     --ngram-window-range 2:3 \
                     -o TEST_OUTPUT/synteny_output_no_unknowns.tsv

anvi-analyze-synteny -g TEST_OUTPUT/TEST-GENOMES.db \
                     --annotation-source COG20_FUNCTION \
                     --ngram-window-range 2:3 \
                     -o TEST_OUTPUT/synteny_output_with_unknowns.tsv \
                     --analyze-unknown-functions

anvi-analyze-synteny -g TEST_OUTPUT/TEST-GENOMES.db \
                     --annotation-source COG20_FUNCTION \
                     --ngram-window-range 2:3 \
                     -o TEST_OUTPUT/tsv.txt \
                     --analyze-unknown-functions
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-analyze-synteny.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-analyze-synteny) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
