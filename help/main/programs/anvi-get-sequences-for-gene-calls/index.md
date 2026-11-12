---
layout: program
title: anvi-get-sequences-for-gene-calls
excerpt: An anvi'o program. A script to get back sequences for gene calls.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-sequences-for-gene-calls
image:
  featurerelative: ../../../images/header.png
  display: true
---

A script to get back sequences for gene calls.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program allows you to **export the sequences of your gene calls** from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> in the form of a <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span>.

If you want other information about your gene calls from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, you can run <span class="artifact-p">[anvi-export-gene-calls](/help/main/programs/anvi-export-gene-calls)</span> (which outputs a <span class="artifact-n">[gene-calls-txt](/help/main/artifacts/gene-calls-txt)</span>) or get the coverage and detection information with <span class="artifact-p">[anvi-export-gene-coverage-and-detection](/help/main/programs/anvi-export-gene-coverage-and-detection)</span>.

### Running on a contigs database

You can run this program on a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> like so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;o path/to/output
</div>

This is create a <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span> that contains every gene in your contigs database. If you only want a specific subset of genes, you can run the following:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;o path/to/output \
                                  &#45;&#45;gene&#45;caller&#45;ids 897,898,1312 \
                                  &#45;&#45;delimiter ,
</div>

Now the resulting <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span> will contain only those three genes.

Please note that this program allows you to format the deflines of the resulting FASTA file to a great extent. For this, it uses a set of previously-defined variables you can use to define a template of your liking. You can learn about the available variables, you can include the following flag in your command:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                  &#45;o path/to/output \
                                  &#45;&#45;list&#45;defline&#45;variables
</div>

which will give you an output similar to this:

```
WARNING
===============================================
Here are the variables you can use to provide a user-defined defline template:

* {gene_caller_id}
* {contig_name}
* {start}
* {stop}
* {direction}
* {length}
* {contigs_db_project_name}

Remember, by default, anvi'o will only use '{gene_caller_id}' to format the
deflines of FASTA files it produces.
```

Now you can use the `--defline-format` parameter with any combination of these variables to control the output FASTA file deflines. Here are some examples using the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> file included in the Infant Gut Dataset, and the contents of the resulting FASTA file:

```
anvi-get-sequences-for-gene-calls -c INFANT-GUT-TUTORIAL/CONTIGS.db \
                                  --gene-caller-ids 77 \
                                  -o 77.fa \
                                  --defline-format "{gene_caller_id}"
```

```
>77
ATGAGTAATTTATTGCGAGCAGAAGGCGTGTCTTATCAAGTAAATGGTCGTAGCATTCTTTCTGATATTGATTTGTCATTTGAAACAGGCAGCAATACAACAATTGTTGGTCCTTCAGGT
AGCGGGAAAAGTACATTTTTAAAAATTTTATCTTCATTATTAAGTCCTACAGAAGGCGAAATTTTTTATCAAGAAGCGCCAATTACTACAATGCCAATCGAAACATACCGCCAAAAGGTT
TCTTATTGTTTTCAGCAGCCAACTTTATTTGGTGAAACCGTGTATGATAATTTGTTATTTCCATTTACCGTCAGACAAGAAGCGTTTAATCAGGAAAAAGTCGTGGCATTACTCCAACAA
GTGAAATTGCCCGCTGCTTATCTTGAAAAGAAAATAGCCGAACTCTCTGGTGGTGAGCGACAACGGGTTGCTTTGCTACGAAACATTATTTTTGTACCAGATGTTTTATTATTAGACGAA
GTTACAACGGGATTAGATGAAGAAAGCAAACAGATTGTCAATCAATTGTTAAACCAATTAAACAAAGAGCAAGGAGTCACGCTGGTTCGTGTCACGCATGATACCGAAGAAATTCAGCAA
GCACAGCAAGTGATTCGTATTGTAGCAGGAAAGGTGGCGCCGACAGATGGATTTAGCAGTTAA
```

The simple option shown above also is the default defline format anvi'o uses. Here is a more sophisticated example:

```
anvi-get-sequences-for-gene-calls -c INFANT-GUT-TUTORIAL/CONTIGS.db \
                                  --gene-caller-ids 77 \
                                  -o 77.fa \
                                  --defline-format "{contigs_db_project_name}_{contig_name}_{gene_caller_id}"
```

```
>Infant_Gut_Contigs_from_Sharon_et_al_Day17a_QCcontig1_77
ATGAGTAATTTATTGCGAGCAGAAGGCGTGTCTTATCAAGTAAATGGTCGTAGCATTCTTTCTGATATTGATTTGTCATTTGAAACAGGCAGCAATACAACAATTGTTGGTCCTTCAGGT
AGCGGGAAAAGTACATTTTTAAAAATTTTATCTTCATTATTAAGTCCTACAGAAGGCGAAATTTTTTATCAAGAAGCGCCAATTACTACAATGCCAATCGAAACATACCGCCAAAAGGTT
TCTTATTGTTTTCAGCAGCCAACTTTATTTGGTGAAACCGTGTATGATAATTTGTTATTTCCATTTACCGTCAGACAAGAAGCGTTTAATCAGGAAAAAGTCGTGGCATTACTCCAACAA
GTGAAATTGCCCGCTGCTTATCTTGAAAAGAAAATAGCCGAACTCTCTGGTGGTGAGCGACAACGGGTTGCTTTGCTACGAAACATTATTTTTGTACCAGATGTTTTATTATTAGACGAA
GTTACAACGGGATTAGATGAAGAAAGCAAACAGATTGTCAATCAATTGTTAAACCAATTAAACAAAGAGCAAGGAGTCACGCTGGTTCGTGTCACGCATGATACCGAAGAAATTCAGCAA
GCACAGCAAGTGATTCGTATTGTAGCAGGAAAGGTGGCGCCGACAGATGGATTTAGCAGTTAA
```

And finally, here is an example that is quite comprehensive in its request from anvi'o:

```
anvi-get-sequences-for-gene-calls -c INFANT-GUT-TUTORIAL/CONTIGS.db \
                                  --gene-caller-ids 77 \
                                  -o 77.fa \
                                  --defline-format "{gene_caller_id} contig_name:{contig_name}|gene_start:{start}|gene_stop:{stop}|gene_length:{length}|gene_direction:{direction}"
```

```
>77 contig_name:Day17a_QCcontig1|gene_start:67276|gene_stop:67939|gene_length:663|gene_direction:f
ATGAGTAATTTATTGCGAGCAGAAGGCGTGTCTTATCAAGTAAATGGTCGTAGCATTCTTTCTGATATTGATTTGTCATTTGAAACAGGCAGCAATACAACAATTGTTGGTCCTTCAGGT
AGCGGGAAAAGTACATTTTTAAAAATTTTATCTTCATTATTAAGTCCTACAGAAGGCGAAATTTTTTATCAAGAAGCGCCAATTACTACAATGCCAATCGAAACATACCGCCAAAAGGTT
TCTTATTGTTTTCAGCAGCCAACTTTATTTGGTGAAACCGTGTATGATAATTTGTTATTTCCATTTACCGTCAGACAAGAAGCGTTTAATCAGGAAAAAGTCGTGGCATTACTCCAACAA
GTGAAATTGCCCGCTGCTTATCTTGAAAAGAAAATAGCCGAACTCTCTGGTGGTGAGCGACAACGGGTTGCTTTGCTACGAAACATTATTTTTGTACCAGATGTTTTATTATTAGACGAA
GTTACAACGGGATTAGATGAAGAAAGCAAACAGATTGTCAATCAATTGTTAAACCAATTAAACAAAGAGCAAGGAGTCACGCTGGTTCGTGTCACGCATGATACCGAAGAAATTCAGCAA
GCACAGCAAGTGATTCGTATTGTAGCAGGAAAGGTGGCGCCGACAGATGGATTTAGCAGTTAA
```

You also have the option to report the output in [gff3 format](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md), report extended deflines for each gene, or report amino acid sequences instead of nucleotide sequences.

### Running on a genomes storage database

You can also get the sequences from gene calls in a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>, like so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;calls &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                                  &#45;o path/to/output
</div>

This will create a <span class="artifact-n">[genes-fasta](/help/main/artifacts/genes-fasta)</span> that contains every gene in your genomes storage database. To focus on only a subset of the genomes contained in your database, use the flag `--genome-names`. You can provide a comma-delimited list of genome names or a flat text file that contains one genome per line. Alternatively, you could provide a list of gene-caller-ids as specified above.

You also have the option to report the output in [gff3 format](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md), report extended deflines for each gene, or report amino acid sequences instead of nucleotide sequences.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-sequences-for-gene-calls.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-sequences-for-gene-calls`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-sequences-for-gene-calls [-h] [-c CONTIGS_DB] [--gene-caller-ids GENE_CALLER_IDS] [--delimiter CHAR] [--flank-length INT] [--get-aa-sequences] [--external-gene-calls GENE-CALLS] [--export-gff3] [--annotation-source FUNCTION_ANNOTATION_SOURCE] [-l] [--return-all-function-hits-for-each-gene] [-g GENOMES_STORAGE] [-G GENOME_NAMES] [--report-extended-deflines] [--wrap WRAP] [--list-defline-variables] [--defline-format F-STRING] -o FILE_PATH</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-option-1-get-sequences-from-a-contigs-db">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #1: GET SEQUENCES FROM A CONTIGS DB</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter" id="parameter-delimiter"><code class="parameter-flags">--delimiter</code> <code class="parameter-metavar">CHAR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The delimiter to parse multiple input terms. The default is &#x27;,&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">,</code></span></dd>
<dt class="parameter" id="parameter-flank_length"><code class="parameter-flags">--flank-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Extend sequences for gene calls with additional nucleotides from both ends. If the seqeunce for a target gene is between nucleotide positions START and STOP, using a flank lenght of M will give you a sequence that starts at START - M and ends at STOP + M.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-get_aa_sequences"><code class="parameter-flags">--get-aa-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">Store amino acid sequences instead.</span></dd>
<dt class="parameter" id="parameter-external_gene_calls"><code class="parameter-flags">--external-gene-calls</code> <code class="parameter-metavar">GENE-CALLS</code></dt>
<dd class="parameter-details"><span class="parameter-help">An optional external gene calls file path that precisely describes the set of gene sequences exported. Using this file you can create an anvi&#x27;o contigs database from the resulting genes FASTA file without having to do a gene calling from scratch.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-option-11-store-seqeunces-as-gff">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #1.1: STORE SEQEUNCES AS GFF?</span> <span class="parameter-group-description">This only works with OPTION #1 :/</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-export_gff3"><code class="parameter-flags">--export-gff3</code></dt>
<dd class="parameter-details"><span class="parameter-help">If this is true, the output file will be in GFF3 format.</span></dd>
<dt class="parameter" id="parameter-annotation_source"><code class="parameter-flags">--annotation-source</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get functional annotations for a specific annotation source. You can use the flag &#x27;--list-annotation-sources&#x27; to learn about what sources are available.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_annotation_sources"><code class="parameter-flags">-l, --list-annotation-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available functional annotation sources.</span></dd>
<dt class="parameter parameter-switch" id="parameter-return_all_function_hits_for_each_gene"><code class="parameter-flags">--return-all-function-hits-for-each-gene</code></dt>
<dd class="parameter-details"><span class="parameter-help">Any given function annotation source may provide more than one annotation for a given gene. Using this flag will instruct anvi&#x27;o to report all hits, even if the default behavior is to report only the most statistically significant one.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-option-2-get-sequences-from-a-genomes-storage">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #2: GET SEQUENCES FROM A GENOMES STORAGE</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-genome_names"><code class="parameter-flags">-G, --genome-names</code> <code class="parameter-metavar">GENOME_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome names to &#x27;focus&#x27;. You can use this parameter to limit the genomes included in your analysis. You can provide these names as a comma-separated list of names, or you can put them in a file, where you have a single genome name in each line, and provide the file path.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-fasta-output-formatting-options">
<header class="parameter-group-header"><span class="parameter-group-title">FASTA OUTPUT FORMATTING OPTIONS</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-report_extended_deflines"><code class="parameter-flags">--report-extended-deflines</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the deflines in the resulting FASTA file will contain more information.</span></dd>
<dt class="parameter" id="parameter-wrap"><code class="parameter-flags">--wrap</code> <code class="parameter-metavar">WRAP</code></dt>
<dd class="parameter-details"><span class="parameter-help">When to wrap sequences when storing them in a FASTA file. The default is &#x27;120&#x27;. A value of &#x27;0&#x27; would be equivalent to &#x27;do not wrap&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">120</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-list_defline_variables"><code class="parameter-flags">--list-defline-variables</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, anvi&#x27;o will list the variable names that can be used to construct deflines in FASTA outputs from the user-defined `--defline-format` strings.</span></dd>
<dt class="parameter" id="parameter-defline_format"><code class="parameter-flags">--defline-format</code> <code class="parameter-metavar">F-STRING</code></dt>
<dd class="parameter-details"><span class="parameter-help">Proivide a defline template for anvi&#x27;o to use when generating the FASTA output. The way this works is actually quite simple: first you learn about all the options that exist using the `--list-defline-variables`, and then use them to create your template. Available variables should be listed within curly brackets, which will be evaluated in contex. Anything outside of curly brackets will be kept as is. For instance, if you would like your defline to have the gene caller ID after the contig name in which it occurs, you can use this template: &#x27;{contig_name}_{gene_callers_id}&#x27;, and your defline will look like &#x27;&gt;XXX_182&#x27;. In most cases &#x27;{gene_callers_id}&#x27; will serve as the default defline format if this parameters is not used. See more examples in online help.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-options-common-to-all-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONS COMMON TO ALL INPUTS</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A tutorial on getting gene-level taxonomy for a contigs-db](http://merenlab.org/2016/06/18/importing-taxonomy/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_sequences_for_gene_calls.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
