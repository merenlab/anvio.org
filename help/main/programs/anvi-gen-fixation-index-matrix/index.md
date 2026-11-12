---
layout: program
title: anvi-gen-fixation-index-matrix
excerpt: An anvi'o program. Generate a pairwise matrix of a fixation indices between samples.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-fixation-index-matrix
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a pairwise matrix of a fixation indices between samples.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[splits-txt](../../artifacts/splits-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[fixation-index-matrix](../../artifacts/fixation-index-matrix) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage



This program generates a matrix of the pairwise fixation indices (F<sub>ST</sub>) between your samples.

### What's a fixation index?

As described [in the Infant Gut Tutorial](https://merenlab.org/tutorials/infant-gut/#measuring-distances-between-metagenomes-with-fst), the fixation index is a measure of the distance between two populations, based on their sequence variants (usually SNVs). Specifically, the fixation index is the ratio between the variance in allele frequency between subpopulations and the variance in the total population.


The fixation index has its own [Wikipedia page](https://en.wikipedia.org/wiki/Fixation_index) and is a special case of [F-statistics](https://en.wikipedia.org/wiki/F-statistics).


In anvi'o, the fixation index is calculated in accordance with [Schloissnig et al.  (2013)](https://doi.org/10.1038/nature11711)'s work to allow variant positions with multiple competing alleles.


## Anvi-gen-fixation-index

There are two ways to run this program.

### Input 1: Variability Profile

The simplest one is the one shown [in the Infant Gut Tutorial](https://merenlab.org/tutorials/infant-gut/#measuring-distances-between-metagenomes-with-fst): just provide a <span class="artifact-n">[variability-profile](/help/main/artifacts/variability-profile)</span>, like so:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;fixation&#45;index&#45;matrix &#45;&#45;variability&#45;profile <span class="artifact&#45;n">[variability&#45;profile](/help/main/artifacts/variability&#45;profile)</span> \
                               &#45;&#45;output&#45;file my_matrix.txt
</div>

This will use the information in your <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> to generate the fixation index for each of the pairwise sample comparisons, and store the results in a <span class="artifact-n">[fixation-index-matrix](/help/main/artifacts/fixation-index-matrix)</span> named `my_matrix.txt`.

### Input 2: Anvi'o databases

Instead of providing a <span class="artifact-n">[variability-profile](/help/main/artifacts/variability-profile)</span>, you can instead provide the inputs to <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span> and let anvi'o do all of the work for you. Specifically, this means providing a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair to find your variability positions and a specific subset to focus on in any of these ways:

- Provide a list of gene caller IDs (as a parameter with the flag `--gene-caller-ids` or in a file with one ID per line with the flag `--genes-of-interest`)
- Provide a list of splits (in a <span class="artifact-n">[splits-txt](/help/main/artifacts/splits-txt)</span>)
- Provide a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>

Additionally, you can add structural annotations by inputting a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> (and focus only on genes with structural annotations with the flag `--only-if-structure`) or choose to focus on only a subset of your samples by providing a file of samples of interest.

When doing this, you can also set the variability engine to get the fixation index for SCVs (`--engine CDN`) or SAAVs (`--engine AA`).

You can find more information about these parameters on the page for <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span>.

### Additional Parameters

While a fixation index is usually between 0 and 1, it is possible for an index to be negative (usually because of out-breeding). By default, anvi'o sets these negative values to 0, but you can choose to keep the negative values with the flag `--keep-negatives`


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-fixation-index-matrix.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-fixation-index-matrix`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-fixation-index-matrix [-h] [-p PROFILE_DB] [-c CONTIGS_DB] [-s STRUCTURE_DB] [-V VARIABILITY_TABLE] [-C COLLECTION_NAME] [-b BIN_NAME] [--splits-of-interest FILE] [--genes-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS] [--only-if-structure] [--samples-of-interest FILE] [--engine ENGINE] [--min-coverage-in-each-sample INT] [-o FIXATION_INDICES] [--keep-negatives]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Declaring relevant anvi&#x27;o databases. First things first. Some are mandatory, some are optional.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-structure_db"><code class="parameter-flags">-s, --structure-db</code> <code class="parameter-metavar">STRUCTURE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o structure database.</span></dd>
<dt class="parameter" id="parameter-variability_profile"><code class="parameter-flags">-V, --variability-profile</code> <code class="parameter-metavar">VARIABILITY_TABLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The output of anvi-gen-variability-profile, or a different variant-calling output that has been converted to the anvi&#x27;o format.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-bin">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: BIN</span> <span class="parameter-group-description">You need to pick someting to focus. You can ask anvi&#x27;o to work with a bin in a collection.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-split-names">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: SPLIT NAMES</span> <span class="parameter-group-description">Alternatively you can declare split names to focus.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-splits_of_interest"><code class="parameter-flags">--splits-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with split names. There should be only one column in the file, and each line should correspond to a unique split name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus-gene-caller-ids">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS :: GENE CALLER IDs</span> <span class="parameter-group-description">Alternatively you can declare gene caller IDs to focus.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_if_structure"><code class="parameter-flags">--only-if-structure</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, your genes of interest will be further subset to only include genes with structures in your structure database, and therefore must be supplied in conjunction with a structure database, i.e. `-s &lt;your_structure_database&gt;`. If you did not specify genes of interest, ALL genes will be subset to those that have structures.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-samples">
<header class="parameter-group-header"><span class="parameter-group-title">SAMPLES</span> <span class="parameter-group-description">You can ask anvi&#x27;o to focus only on a subset of samples.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-samples_of_interest"><code class="parameter-flags">--samples-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with samples names. There should be only one column in the file, and each line should correspond to a unique sample name (without a column header).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-engine">
<header class="parameter-group-header"><span class="parameter-group-title">ENGINE</span> <span class="parameter-group-description">Set your engine. This is important as it will define the output profile you will get from this program. The engine can focus on nucleotides (NT), codons (CDN), or an amino acids (AA).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-engine"><code class="parameter-flags">--engine</code> <code class="parameter-metavar">ENGINE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Variability engine. The default is &#x27;NT&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">NT</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-filters">
<header class="parameter-group-header"><span class="parameter-group-title">FILTERS</span> <span class="parameter-group-description">Parameters that will help you to do a very precise analysis. If you declare nothing from this bunch, you will get &quot;everything&quot; to play with, which is not necessarily a good thing...</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_coverage_in_each_sample"><code class="parameter-flags">--min-coverage-in-each-sample</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum coverage of a given variable nucleotide position in all samples. If a nucleotide position is covered less than this value even in one sample, it will be removed from the analysis. Default is 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output file and style</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FIXATION_INDICES</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">fixation_indices.txt</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span> <span class="parameter-group-description">Because why not be extra?</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-keep_negatives"><code class="parameter-flags">--keep-negatives</code></dt>
<dd class="parameter-details"><span class="parameter-help">Negative numbers are theoretically possible, and are sometimes interpreted as out-breeding. By default, we set negative numbers to 0 so the results are reflective of a standard distance metric. Provide this flag if you would prefer otherwise.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Utilizing fixation index to study SAR11 population structure](http://merenlab.org/data/sar11-saavs/#generating-distance-matrices-from-fixation-index-for-saavs-and-snvs-data)

* [Measuring Distances Between Genomes in the Infant Gut Tutorial](http://merenlab.org/tutorials/infant-gut/#measuring-distances-between-metagenomes-with-fst)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_fixation_index_matrix.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
