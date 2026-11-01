---
layout: program
title: anvi-script-process-genbank
excerpt: An anvi'o program. This script takes a GenBank file, and outputs a FASTA file, as well as two additional TAB-delimited output files for external gene calls and gene functions that can be used with the programs `anvi-gen-contigs-database` and `anvi-import-functions`.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-process-genbank
image:
  featurerelative: ../../../images/header.png
  display: true
---

This script takes a GenBank file, and outputs a FASTA file, as well as two additional TAB-delimited output files for external gene calls and gene functions that can be used with the programs `anvi-gen-contigs-database` and `anvi-import-functions`. It processes CDS, tRNA, and rRNA features by default, and reclassifies pseudogenes or CDS with internal stops as non-coding to ensure compatibility with anvi&#x27;o..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/AstrobioMike.jpg" /></div><div class="anvio-person-info-box"><a href="/people/astrobiomike" target="_blank"><span class="anvio-person-name">Mike Lee</span></a><div class="anvio-person-social-box"><a href="https://astrobiomike.github.io/research" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:michael.lee0517@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AstrobioMike" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/astrobiomike" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[genbank-file](../../artifacts/genbank-file) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[functions-txt](../../artifacts/functions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program processes a <span class="artifact-n">[genbank-file](/help/main/artifacts/genbank-file)</span>, and converts it into anvi'o friendly artifacts: namely, a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>, <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> and a <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>.

The <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> and <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> can be given to <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span> to create a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, and then you can use <span class="artifact-p">[anvi-import-functions](/help/main/programs/anvi-import-functions)</span> to bring the function data (in the <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>) into the database. Then you'll have all of the data in your <span class="artifact-n">[genbank-file](/help/main/artifacts/genbank-file)</span> converted into a single <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, which you can use for a variety of anvi'o analyses.

### Features processed by default

By default, <span class="artifact-p">[anvi-script-process-genbank](/help/main/programs/anvi-script-process-genbank)</span> will `CDS`, `tRNA`, and `rRNA` features by default.

- `CDS` features are mapped to the anvi'o `CODING` gene call type.
- `tRNA` and `rRNA` features are mapped to the `NONCODING` gene call type.

### Handling problematic features

Genomic data often contains features that anvi'o may find difficult to process using standard workflows, such as gene calls with internal stop codons or frameshifts. This script identifies such features and handles them gracefully by reclassifying them as `NONCODING`:

1. **Pseudogenes**: Any `CDS` explicitly marked as a `/pseudogene` or having `/pseudo` in its GenBank qualifiers will be reclassified as `NONCODING`.
2. **Internal Stops and Frameshifts**: Any `CDS` with notes indicating internal stops or frameshifts (based on common NCBI PGAP terms) will also be reclassified as `NONCODING`.

This approach ensures that these features are preserved in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> without triggering translation errors during database creation.

### Notes on Output

The parameters of this program entirely deal with the outputs. Besides telling the program where to put them, you can also give the function annotation source (in the <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>) a custom name.

One important note about this conversion is the following: During the conversion of GenBank entries, anvi'o will assign a new gene call id to each entry, breaking the link between locus tags defined in the GenBank file and the gene entries that will later appear in the anvi'o <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. One way to avoid this is to use the flag `--include-locus-tags-as-functions`, which will instruct anvi'o to add a new 'function' source for each gene in the output file for functional annotations so that the user can trace back a given gene call to the original locus tag.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-process-genbank.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-process-genbank`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-process-genbank [-h] -i GENBANK [-O FILENAME_PREFIX] [--output-fasta FASTA] [--output-gene-calls TAB DELIMITED FILE] [--output-functions TAB DELIMITED FILE] [--annotation-source ANNOTATION_SOURCE] [--annotation-version ANNOTATION_VERSION] [--omit-aa-sequences-column] [--include-locus-tags-as-functions]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">Give us the preciousss...</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-input_genbank"><code class="parameter-flags">-i, --input-genbank</code> <code class="parameter-metavar">GENBANK</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Input GenBank file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">You either provide a &#x27;prefix&#x27;, or provide specific output file names/paths. You can&#x27;t mix the two (well, you can try).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
<dt class="parameter" id="parameter-output_fasta"><code class="parameter-flags">--output-fasta</code> <code class="parameter-metavar">FASTA</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output FASTA file path.</span></dd>
<dt class="parameter" id="parameter-output_gene_calls"><code class="parameter-flags">--output-gene-calls</code> <code class="parameter-metavar">TAB DELIMITED FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output file path for external gene calls</span></dd>
<dt class="parameter" id="parameter-output_functions"><code class="parameter-flags">--output-functions</code> <code class="parameter-metavar">TAB DELIMITED FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output file path for anvi&#x27;o-importable gene functions file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-details">
<header class="parameter-group-header"><span class="parameter-group-title">DETAILS</span> <span class="parameter-group-description">Setting the annotation source and version data to appear in the output file for functional annotations file.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-annotation_source"><code class="parameter-flags">--annotation-source</code> <code class="parameter-metavar">ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Annotation source (default: &quot;NCBI_PGAP&quot;)</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">NCBI_PGAP</code></span></dd>
<dt class="parameter" id="parameter-annotation_version"><code class="parameter-flags">--annotation-version</code> <code class="parameter-metavar">ANNOTATION_VERSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Annotation source version to be stored in the database (default: &quot;v4.6&quot;)</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">v4.6</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-omit_aa_sequences_column"><code class="parameter-flags">--omit-aa-sequences-column</code></dt>
<dd class="parameter-details"><span class="parameter-help">If amino acid sequences for gene calls are present in the GFF file, anvi&#x27;o by default will include an `aa_sequences` column in the external gene calls output file. This is good because then anvi-gen-contigs-database can use that information directly, instead of trying to predict the translated sequences itself. If you would like this program to not report amino acid sequences even when they present and use anvi&#x27;o to predict translated sequences later, you can use this flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_locus_tags_as_functions"><code class="parameter-flags">--include-locus-tags-as-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">When anvi&#x27;o processes genes in a GenBank file, it will assign new gene caller ids to each entry. Using this flag will will instruct anvi&#x27;o to add a new &#x27;function&#x27; source in the annotation of each gene call so the the user can trace back a given gene call to the original locus tag number in the GenBank file.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/process_genbank.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
