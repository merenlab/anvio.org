---
layout: program
title: anvi-gen-gene-consensus-sequences
excerpt: An anvi'o program. Collapse variability for a set of genes across samples.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-gene-consensus-sequences
image:
  featurerelative: ../../../images/header.png
  display: true
---

Collapse variability for a set of genes across samples.

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


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **provides consensus sequences for the genes within a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair**.

In other words, this collapses variability by assigning the most abundant nucleotide in your sample at each position, giving single consensus sequences for each gene for each sample.

A basic run of this program will resemble the following:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;gene&#45;consensus&#45;seuqences &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                  &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

The default output is a <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span>, but you can also get a tab-delimited output matrix by adding the flag  `--tab-delimited`.

You also have the option to focus on a subset of the data in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> by providing either:

- A list of gene caller IDs (either as a parameter or through a file with one gene caller ID put line)
- A list of samples to focus on (as a file with a single sample name per line)

### Additional Parameters

- You have the option to change the variability engine (i.e. to codons), where variability at this level will be resolved.
- To compress all variability profiles for each of your samples for a single gene, use the flag `--conpress samples`. This way, the program will only report one consensus sequence for each gene instead of reporting one for each sample.
- You can get consensus sequences for each contig instead of for each gene with `--contigs-mode`
- To report all consensus sequences (even when there are no variable positions), activate `--quince-mode`


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-gene-consensus-sequences.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-gene-consensus-sequences`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-gene-consensus-sequences [-h] -p PROFILE_DB -c CONTIGS_DB [--gene-caller-ids GENE_CALLER_IDS] [--genes-of-interest FILE] [--samples-of-interest FILE] [-o FILE_PATH] [--tab-delimited] [--engine ENGINE] [--contigs-mode] [--quince-mode] [--compress-samples]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-compress_samples"><code class="parameter-flags">--compress-samples</code></dt>
<dd class="parameter-details"><span class="parameter-help">Normally all samples with variation will have their own consensus sequence. If this flag is provided, the coverages from each sample of interest will be summed and only a single consenus sequence for each gene/contig will be output.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Declaring relevant anvi&#x27;o databases. First things first.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-focus">
<header class="parameter-group-header"><span class="parameter-group-title">FOCUS</span> <span class="parameter-group-description">What do we want? A consensus sequence for a gene, or a list of genes. From where do we want it? All samples, by default. When do we want it? Whenever it is convenient.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-samples_of_interest"><code class="parameter-flags">--samples-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with samples names. There should be only one column in the file, and each line should correspond to a unique sample name (without a column header).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output file and output style</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The output file name. The boring default is &quot;genes.fa&quot;. You can change the output file format to a TAB-delimited file using teh flag `--tab-delimited`, in which case please do not forget to change the file name, too.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">genes.fa</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-tab_delimited"><code class="parameter-flags">--tab-delimited</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use the TAB-delimited format for the output file.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span> <span class="parameter-group-description">Parameters that will help you to do a very precise analysis. If you declare nothing from this bunch, you will get &quot;everything&quot; to play with, which is not necessarily a good thing...</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-engine"><code class="parameter-flags">--engine</code> <code class="parameter-metavar">ENGINE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Variability engine. The default is &#x27;NT&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">NT</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-contigs_mode"><code class="parameter-flags">--contigs-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to output consensus sequences of contigs, instead of the default, which is genes</span></dd>
<dt class="parameter parameter-switch" id="parameter-quince_mode"><code class="parameter-flags">--quince-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to output consensus sequences for cases even where there is no variability</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_gene_consensus_sequences.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
