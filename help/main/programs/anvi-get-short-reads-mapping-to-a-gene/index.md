---
layout: program
title: anvi-get-short-reads-mapping-to-a-gene
excerpt: An anvi'o program. Recover short reads from BAM files that were mapped to genes you are interested in.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-short-reads-mapping-to-a-gene
image:
  featurerelative: ../../../images/header.png
  display: true
---

Recover short reads from BAM files that were mapped to genes you are interested in. It is possible to work with a single gene call, or a bunch of them. Similarly, you can get short reads from a single BAM file, or from many of them.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[short-reads-fasta](../../artifacts/short-reads-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program finds all short reads from (<span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>) that align to a specific gene and returns them as a <span class="artifact-n">[short-reads-fasta](/help/main/artifacts/short-reads-fasta)</span>.

If instead you want to extract these short reads from a FASTQ file, get your gene sequence with <span class="artifact-p">[anvi-export-gene-calls](/help/main/programs/anvi-export-gene-calls)</span> and take a look at <span class="artifact-p">[anvi-search-primers](/help/main/programs/anvi-search-primers)</span>.

To run this program, just specify the bam files you're looking at and the gene of interest. To do this, name the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> containing your gene and the gene caller ID (either directly through the parameter `--gene-caller-id` or through a file). Here is an example:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;mapping&#45;to&#45;a&#45;gene &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                       &#45;&#45;gene&#45;caller&#45;id 2 \
                                       &#45;i BAM_FILE_ONE.bam \
                                       &#45;O GENE_2_MATCHES
</div>

The output of this will be a file named `GENE_2_MATCHES_BAM_FILE_ONE.fasta` (prefix + bam file name), which will contain all short reads that aligned to gene 2 with more than 100 nucleotides.

You also have the option to provide multiple bam files; in this case, there will be an output files for each bam file inputted.

Additionally, you can change the number of nucleotides required to map to a short read for it to be reported. For example, to expand your search, you could decrease the required mapping length to 50 nucleotides, as so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;short&#45;reads&#45;mapping&#45;to&#45;a&#45;gene &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                       &#45;&#45;gene&#45;caller&#45;id 2 \
                                       &#45;i Bam_file_one.bam Bam_file_two.bam \
                                       &#45;O GENE_2_MATCHES \
                                       &#45;&#45;leeway 50
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-short-reads-mapping-to-a-gene.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-short-reads-mapping-to-a-gene`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-short-reads-mapping-to-a-gene [-h] -c CONTIGS_DB -i INPUT_BAM(S) [INPUT_BAM(S) ...] [--gene-caller-id GENE_CALLER_ID] [--genes-of-interest FILE] [--leeway LEEWAY_NTs] [-O FILENAME_PREFIX]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">An anvi&#x27;o contigs database and one or more BAM files.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-input_files"><code class="parameter-flags">-i, --input-files</code> <code class="parameter-metavar">INPUT_BAM(S)</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Sorted and indexed BAM files to analyze. It is essential that all BAM files must be the result of mappings against the same contigs.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes">
<header class="parameter-group-header"><span class="parameter-group-title">GENES</span> <span class="parameter-group-description">Gene calls you want to work with</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_id"><code class="parameter-flags">--gene-caller-id</code> <code class="parameter-metavar">GENE_CALLER_ID</code></dt>
<dd class="parameter-details"><span class="parameter-help">A single gene id.</span></dd>
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-leeway"><code class="parameter-flags">--leeway</code> <code class="parameter-metavar">LEEWAY_NTS</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum number of nucleotides for a given short read mapping into the gene context for it to be reported. You must consider the length of your short reads, as well as the length of the gene you are targeting. The default is 100 nts.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">100</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">How should results be stored.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_short_reads_mapping_to_a_gene.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
