---
layout: program
title: anvi-export-locus
excerpt: An anvi'o program. This program helps you cut a &#x27;locus&#x27; from a larger genetic context (e.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-locus
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program helps you cut a &#x27;locus&#x27; from a larger genetic context (e.g., contigs, genomes). By default, anvi&#x27;o will locate a user-defined anchor gene, extend its selection upstream and downstream based on the --num-genes argument, then extract the locus to create a new contigs database. The anchor gene must be provided as --search-term, --gene-caller-ids, or --hmm-sources. If --flank-mode is designated, you MUST provide TWO flanking genes that define the locus region (Please see --flank-mode help for more information). If everything goes as plan, anvi&#x27;o will give you individual locus contigs databases for every matching anchor gene found in the original contigs database provided. Enjoy your mini contigs databases!.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ShaiberAlon.jpg" /></div><div class="anvio-person-info-box"><a href="/people/shaiberalon" target="_blank"><span class="anvio-person-name">Alon Shaiber</span></a><div class="anvio-person-social-box"><a href="mailto:alon.shaiber@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/alon_shaiber" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/shaiberalon" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[locus-fasta](../../artifacts/locus-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program lets you export selections of your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> around all occurances of a user-defined anchor gene.

The output of this is a folder that contains a separate <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> for the region around each hit of the anchor gene. (In fact, you'll get a FASTA file, <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, and a copy of the runlog).

For example, you could specify the recognition site for a specific enzyme and use this program to pull out all potential sites where that enzyme could bind.

### Required Parameters

You'll need to provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (of course), as well as the name of the output directory and a prefix to use when naming all of the output databases.

You can define the region of interest either by defining the two flanking genes or by searching for an anchor gene and defining a number of genes around this gene that you want to look at. For example, if you set `num-genes` as 1, then each locus will contain the gene of interest, a gene upstream of it, and a gene downstream of it, for a total of three genes.

### Defining the region of interest

There are four ways to indicate the desired anchor gene:

1. Provide a search term in the functional annotations of all of your genes. (If you're trying to find a gene with a vague function, you might want to use <span class="artifact-p">[anvi-search-functions](/help/main/programs/anvi-search-functions)</span> to find out which genes will show up first. Alternatively, you can you <span class="artifact-p">[anvi-export-functions](/help/main/programs/anvi-export-functions)</span> to look at a full list of the functional annotaitons in this database).

    <div class="codeblock" markdown="1">
    anvi&#45;export&#45;locus &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;num&#45;genes 2 \
                      &#45;o GLYCO_DIRECTORY \
                      &#45;O Glyco \
                      &#45;&#45;search&#45;term "Glycosyltransferase involved in cell wall bisynthesis" \
    </div>

    You also have the option to specify an annotation source with the flag `--annotation source`

2.  Provide a specific gene caller ID.

    <div class="codeblock" markdown="1">
    anvi&#45;export&#45;locus &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;num&#45;genes 2 \
                      &#45;o output_directory \
                      &#45;O GENE_1 \
                      &#45;&#45;gene&#45;caller&#45;ids 1
    </div>

3. Provide a search term for the HMM source annotations. To do this, you must also specify an hmm-source. (You can use the flag `--list-hmm-sources` to list the available sources).

    <div class="codeblock" markdown="1">
    anvi&#45;export&#45;locus &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;num&#45;genes 2 \
                      &#45;o Ribosomal_S20p \
                      &#45;O Ribosomal_S20p \
                      &#45;&#45;use&#45;hmm \
                      &#45;&#45;hmm&#45;source Bacteria_71 \
                      &#45;&#45;search&#45;term Ribosomal_S20p
    </div>

    4. Run in `flank-mode` and provide two flanking genes that define the locus region.

    <div class="codeblock" markdown="1">
    anvi&#45;export&#45;locus &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;flank&#45;mode \
                      &#45;o locus_output \
                      &#45;O gyclo_to_acyl \
                      &#45;&#45;search&#45;term "Glycosyltransferase involved in cell wall bisynthesis","Acyl carrier protein" \
    </div>

### Additional Options

You can also remove partial hits, ignore reverse complement hits, or overwrite all files in a pre-existing output.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-locus.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-locus`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-locus [-h] -c CONTIGS_DB [-s SEARCH_TERM] [--case-sensitive] [--exact-match] [--hmm-sources HMM_ANNOTATION_SOURCE[S]] [--annotation-sources FUNCTION_ANNOTATION_SOURCE[S]] [--use-hmm] [-l] [--gene-caller-ids GENE_CALLER_IDS] [-o DIR_PATH] -O FILENAME_PREFIX [--flank-mode] [-n NUM_GENES] [--remove-partial-hits] [--delimiter CHAR] [--never-reverse-complement]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-database">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT DATABASE</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-anchor-gene-identification-option-1">
<header class="parameter-group-header"><span class="parameter-group-title">ANCHOR GENE IDENTIFICATION OPTION #1</span> <span class="parameter-group-description">Search based on gene function annotations or HMMs</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-search_term"><code class="parameter-flags">-s, --search-term</code> <code class="parameter-metavar">SEARCH_TERM</code></dt>
<dd class="parameter-details"><span class="parameter-help">Search term to be found in function annotation sources.</span></dd>
<dt class="parameter parameter-switch" id="parameter-case_sensitive"><code class="parameter-flags">--case-sensitive</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, anvi&#x27;o will perform a search that is case sensitive.</span></dd>
<dt class="parameter parameter-switch" id="parameter-exact_match"><code class="parameter-flags">--exact-match</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will search for a given string in anywhere within function description or accession IDs. If you declare this flag, then anvi&#x27;o will look for &#x27;exact&#x27; matches of the search string in its entirety in a given field. This can be very useful if you are CERTAIN about the function or accession id you are interested in, and you want to get nothing but that exact match.</span></dd>
<dt class="parameter" id="parameter-hmm_sources"><code class="parameter-flags">--hmm-sources</code> <code class="parameter-metavar">HMM_ANNOTATION_SOURCE[S]</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get sequences for a specific list of HMM sources. You can list one or more sources by separating them from each other with a comma character (i.e., &#x27;--hmm-sources source_1,source_2,source_3&#x27;). If you would like to see a list of available sources in the contigs database, run this program with &#x27;--list-hmm-sources&#x27; flag.</span></dd>
<dt class="parameter" id="parameter-annotation_sources"><code class="parameter-flags">--annotation-sources</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE[S]</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get functional annotations for a specific list of annotation sources. You can specify one or more sources by separating them from each other with a comma character (i.e., &#x27;--annotation-sources source_1,source_2,source_3&#x27;). The default behavior is to return everything</span></dd>
<dt class="parameter parameter-switch" id="parameter-use_hmm"><code class="parameter-flags">--use-hmm</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use HMM hits instead of functional annotations. In other words, --search-term will be queried against HMM source annotations, NOT functional annotations. If you choose this option, you must also say which HMM source to use.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_hmm_sources"><code class="parameter-flags">-l, --list-hmm-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available HMM sources in the contigs database and quit.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-anchor-gene-identification-option-2">
<header class="parameter-group-header"><span class="parameter-group-title">ANCHOR GENE IDENTIFICATION OPTION #2</span> <span class="parameter-group-description">Search based on gene caller id(s)</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-the-output">
<header class="parameter-group-header"><span class="parameter-group-title">THE OUTPUT</span> <span class="parameter-group-description">Where should the output go. It will be one FASTA file with all matches or one FASTA per match (see --separate-fasta)</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter parameter-required" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-additional-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">ADDITIONAL STUFF</span> <span class="parameter-group-description">Flags and parameters you can set according to your need</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-flank_mode"><code class="parameter-flags">--flank-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">If in --flank-mode, anvi-export-locus will extract a locus based on the coordinates of flanking genes. You MUST provide 2 flanking genes in the form of TWO --search-term, --gene-caller-ids, or --hmm-sources. The --flank-mode option is appropriate for extracting loci of variable gene number lengths, but are consistently located between the same flanking genes in the genome(s) of interest.</span></dd>
<dt class="parameter" id="parameter-num_genes"><code class="parameter-flags">-n, --num-genes</code> <code class="parameter-metavar">NUM_GENES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Required for DEFAULT mode. For each match (to the function, or HMM that was searched) a sequence which includes a block of genes will be saved. The block could include either genes only in the forward direction of the gene (defined according to the direction of transcription of the gene) or reverse or both. If you wish to get both direction use a comma (no spaces) to define the block For example, &#x27;-n 4,5&#x27; will give you four genes before and five genes after. Whereas, &#x27;-n 5&#x27; will give you five genes after (in addition to the gene that matched). To get only genes preceding the match use &#x27;-n 5,0&#x27;. If the number of genes requested exceeds the length of the contig, then the output will include the sequence until the end of the contig.</span></dd>
<dt class="parameter parameter-switch" id="parameter-remove_partial_hits"><code class="parameter-flags">--remove-partial-hits</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default anvi&#x27;o will return hits even if they are partial. Declaring this flag will make anvi&#x27;o filter all hits that are partial. Partial hits are hits in which you asked for n1 genes before and n2 genes after the gene that matched the search criteria but the search hits the end of the contig before finding the number of genes that you asked.</span></dd>
<dt class="parameter" id="parameter-delimiter"><code class="parameter-flags">--delimiter</code> <code class="parameter-metavar">CHAR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The delimiter to parse multiple input terms. The default is &#x27;,&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">,</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-never_reverse_complement"><code class="parameter-flags">--never-reverse-complement</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, if a gene that is found by the search criteria is reverse in it&#x27;s direction, then the sequence of the entire locus is reversed before it is saved to the output. If you wish to prevent this behavior then use the flag --never-reverse-complement.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_locus.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
