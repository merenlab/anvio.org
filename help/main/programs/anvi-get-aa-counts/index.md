---
layout: program
title: anvi-get-aa-counts
excerpt: An anvi'o program. Fetches the number of times each amino acid occurs from a contigs database in a given bin, set of contigs, or set of genes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-aa-counts
image:
  featurerelative: ../../../images/header.png
  display: true
---

Fetches the number of times each amino acid occurs from a contigs database in a given bin, set of contigs, or set of genes.

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

<p style="text-align: left" markdown="1"><span class="artifact-r">[splits-txt](../../artifacts/splits-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[aa-frequencies-txt](../../artifacts/aa-frequencies-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


Similarly to <span class="artifact-p">[anvi-get-codon-frequencies](/help/main/programs/anvi-get-codon-frequencies)</span>, this program counts the number of times each amino acid occurs in a given sequence, whether that's a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>, set of contigs (listed in a <span class="artifact-n">[splits-txt](/help/main/artifacts/splits-txt)</span>), or a set of genes. The output of this is a <span class="artifact-n">[aa-frequencies-txt](/help/main/artifacts/aa-frequencies-txt)</span>.

There are four possible things you can count the amino acid frequencies in:
* All of the contigs in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>
* A series of <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s
* A list of contigs
* A list of genes

Examples for each are below.

### Option 1: all contigs in a contigs-db

To count the amino acids in all of the contigs in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, you can just provide the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> of interest, as so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;aa&#45;counts &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;o path/to/<span class="artifact&#45;n">[aa&#45;frequencies&#45;txt](/help/main/artifacts/aa&#45;frequencies&#45;txt)</span>
</div>

### Option 2: a series of bins in a collection

To count the amino acid frequencies for a series of <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s, you'll need to provide three additional parameters: the <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> that you used for binning, the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> that your bins are contained in, and a text file that describes which bins you are interested in. This text file should have only one bin ID per line.

So, your run would look something like this:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;aa&#45;counts &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;o path/to/<span class="artifact&#45;n">[aa&#45;frequencies&#45;txt](/help/main/artifacts/aa&#45;frequencies&#45;txt)</span> \
                   &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                   &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                   &#45;B my_favorite_bins.txt
</div>

`my_favorite_bins.txt` would look something like this:

    bin_00001
    bin_00004

### Option 3: a list of contigs

Just provide a <span class="artifact-n">[splits-txt](/help/main/artifacts/splits-txt)</span> file that lists the contigs you want to look at.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;aa&#45;counts &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;o path/to/<span class="artifact&#45;n">[aa&#45;frequencies&#45;txt](/help/main/artifacts/aa&#45;frequencies&#45;txt)</span> \
                   &#45;&#45;contigs&#45;of&#45;interest <span class="artifact&#45;n">[splits&#45;txt](/help/main/artifacts/splits&#45;txt)</span>
</div>

### Option 4: a list of genes

Just provide a list of gene caller ids, straight into the terminal, like so:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;aa&#45;counts &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                   &#45;o path/to/<span class="artifact&#45;n">[aa&#45;frequencies&#45;txt](/help/main/artifacts/aa&#45;frequencies&#45;txt)</span> \
                   &#45;&#45;gene&#45;caller&#45;ids gene_1,gene_2,gene_3
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-aa-counts.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-aa-counts`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-aa-counts [-h] -c CONTIGS_DB [-o FILE_PATH] [-p PROFILE_DB] [-C COLLECTION_NAME] [-B FILE_PATH] [--contigs-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY STUFF</span> <span class="parameter-group-description">You have to set the following two parameters, then you will select one set of parameters from the following optional sections. If you select nothing from those sets, AA counts for everything in the contigs database will be reported.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-params-for-bins">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL PARAMS FOR BINS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_ids_file"><code class="parameter-flags">-B, --bin-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for bins (each line should be a unique bin id).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-params-for-contigs">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL PARAMS FOR CONTIGS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_of_interest"><code class="parameter-flags">--contigs-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with contig names. There should be only one column in the file, and each line should correspond to a unique split name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-params-for-gene-calls">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL PARAMS FOR GENE CALLS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_aa_counts.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
