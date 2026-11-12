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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[ngrams](../../artifacts/ngrams) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


Briefly, <span class="artifact-p">[anvi-analyze-synteny](/help/main/programs/anvi-analyze-synteny)</span> counts <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> by converting contigs into strings of annotations for a given user-defined source of gene annotation. A source annotation for <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> **must** be provided to create <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span>, upon which anvi'o will use a sliding window of size `N` to deconstruct the loci of interest into <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> and count their frequencies.

### Run for a given function annotation source

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>

For instance, if you have run <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span> on each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> you have used to generate your <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, your `--annotation-source` can be `NCBI_COGS`:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source NCBI_COGS \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>


### Handling genes with unknown functions

By default, <span class="artifact-p">[anvi-analyze-synteny](/help/main/programs/anvi-analyze-synteny)</span> will ignore genes with unknown functions based on the annotation source of interest. However, this can be circumvented either by providing a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>, so the program would use gene cluster identities as function names:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span>
</div>

or by explicitly asking the program to consider unknown functions, in which case the program would not discard ngrams that include genes without functions:

<div class="codeblock" markdown="1">
anvi&#45;analyze&#45;synteny &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                     &#45;&#45;annotation&#45;source <span class="artifact&#45;n">[functions](/help/main/artifacts/functions)</span> \
                     &#45;&#45;ngram&#45;window&#45;range 2:3 \
                     &#45;o <span class="artifact&#45;n">[ngrams](/help/main/artifacts/ngrams)</span> \
                     &#45;&#45;analyze&#45;unknown&#45;functions
</div>

The disadvantage of the latter strategy is that since all genes with unknown functions will be considered the same, the frequency of ngrams that contain genes with unknown functions may be inflated in your final results.

### Run with multiple annotations

If multiple gene annotation sources are provided (i.e., a pangenome for gene clusters identities as well as a functional annotation source), the user must define which annotation source will be used to create the <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> using the parameter `--ngram-source`. The resulting <span class="artifact-n">[ngrams](/help/main/artifacts/ngrams)</span> will then be re-annotated with the second annotation source and also reported.

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

First, go to any work directory, and run the following commands:

``` bash
anvi-self-test --suite metagenomics-full \
               --output-dir TEST_OUTPUT
```

Run one or more alternative scenarios and check output files:

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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-analyze-synteny`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-analyze-synteny [-h] -g GENOMES_STORAGE [--ngram-window-range NGRAM_WINDOW_RANGE] [-o FILE_PATH] [--annotation-source FUNCTION_ANNOTATION_SOURCE] [-p PAN_DB] [-n NGRAM_SOURCE] [-l] [--analyze-unknown-functions] [-G GENOME_NAMES] [--first-functional-hit-only]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-essential-input">
<header class="parameter-group-header"><span class="parameter-group-title">Essential INPUT</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-ngram_window_range"><code class="parameter-flags">--ngram-window-range</code> <code class="parameter-metavar">NGRAM_WINDOW_RANGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The range of window sizes of Ngrams to analyze for synteny patterns.Please format the window-range as x:y (e.g. Window sizes 2 to 4 would be denoted as: 2:4)</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">2:3</code></span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-annotation-sources-for-ngrams">
<header class="parameter-group-header"><span class="parameter-group-title">Annotation sources for Ngrams</span> <span class="parameter-group-description">Choose one source of annotations for your Ngrams.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-annotation_source"><code class="parameter-flags">--annotation-source</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get functional annotations for a specific annotation source. You can use the flag &#x27;--list-annotation-sources&#x27; to learn about what sources are available.</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-ngram_source"><code class="parameter-flags">-n, --ngram-source</code> <code class="parameter-metavar">NGRAM_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">If two annotation sources are provided, please choose one annotation source that will be used to calcuate Ngrams (e.g. gene_clusters, COG_FUNCTION)</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">Optional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_annotation_sources"><code class="parameter-flags">-l, --list-annotation-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available functional annotation sources.</span></dd>
<dt class="parameter parameter-switch" id="parameter-analyze_unknown_functions"><code class="parameter-flags">--analyze-unknown-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">Provide this flag if you want anvi-analyze-synteny to report Ngrams that contain gene calls that have no annotation.</span></dd>
<dt class="parameter" id="parameter-genome_names"><code class="parameter-flags">-G, --genome-names</code> <code class="parameter-metavar">GENOME_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome names to &#x27;focus&#x27;. You can use this parameter to limit the genomes included in your analysis. You can provide these names as a comma-separated list of names, or you can put them in a file, where you have a single genome name in each line, and provide the file path.</span></dd>
<dt class="parameter parameter-switch" id="parameter-first_functional_hit_only"><code class="parameter-flags">--first-functional-hit-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you want to use on the first functional annotation when making ngrams and assigning annotations. In some cases, anvio reports more than one annotation when there are multiple good hits to the gene. When this happens, all annotations will be reported in order of alignment score and delimited by &#x27;!!!&#x27; e.g. &#x27;COG123!!!COG456!!!COG789&#x27;. This flag will report &#x27;COG123!!!COG456!!!COG789&#x27; as &#x27;COG123&#x27;.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/analyze_synteny.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
