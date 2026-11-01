---
layout: program
title: anvi-export-gene-calls
excerpt: An anvi'o program. Export gene calls from an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-gene-calls
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export gene calls from an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[gene-calls-txt](../../artifacts/gene-calls-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


The purpose of this program is to exports your gene calls in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and a gene caller, in the form of a <span class="artifact-n">[gene-calls-txt](/help/main/artifacts/gene-calls-txt)</span>.

To see the gene callers available in your contigs database, you can use <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span> or use this program with the following flag:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                       &#45;&#45;list&#45;gene&#45;callers
</div>

Running this will export all of your gene calls identified by the gene caller [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) (assuming it is in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                       &#45;&#45;gene&#45;caller Prodigal \
                       &#45;o <span class="artifact&#45;n">[gene&#45;calls&#45;txt](/help/main/artifacts/gene&#45;calls&#45;txt)</span>
</div>

{:.notice}
You can export genes from more gene callers by providing a comma-separated list of gene caller names.

If you don't want to display the amino acid sequences of each gene (they can crowd the file very quickly if you don't want to see them), you can add the following flag:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                       &#45;&#45;gene&#45;caller Prodigal \
                       &#45;&#45;skip&#45;sequence&#45;reporting \
                       &#45;o <span class="artifact&#45;n">[gene&#45;calls&#45;txt](/help/main/artifacts/gene&#45;calls&#45;txt)</span>
</div>

## Advanced uses

This program can take a lot of time and memory when working with very large <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files (such as those that are more than 10 Gb in file size or more than 10 million contigs).

In that case you can export your gene calls the following way within minutes and a small memory space.

First open your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

<div class="codeblock" markdown="1">
sqlite3 <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

Then run these lines,

<div class="codeblock" markdown="1">
.mode csv
.headers on
.out <span class="artifact&#45;n">[gene&#45;calls&#45;txt](/help/main/artifacts/gene&#45;calls&#45;txt)</span>
select gene_callers_id, contig, start, stop, direction, partial from genes_in_contigs;
</div>

You can also continue with these lines to get the amino acid sequences for them:

<div class="codeblock" markdown="1">
.mode csv
.headers on
.out AMINO&#45;ACID&#45;SEQUENCES.txt
select &#42; from genes_in_contigs;
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-gene-calls.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-gene-calls`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-gene-calls [-h] -c CONTIGS_DB [--gene-caller GENE-CALLER] [--list-gene-callers] [-o FILE_PATH] [--skip-sequence-reporting]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-source-for-gene-data">
<header class="parameter-group-header"><span class="parameter-group-title">SOURCE FOR GENE DATA</span> <span class="parameter-group-description">You want to export gene calls from where?</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-source-for-gene-calls">
<header class="parameter-group-header"><span class="parameter-group-title">SOURCE FOR GENE CALLS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-gene_caller"><code class="parameter-flags">--gene-caller</code> <code class="parameter-metavar">GENE-CALLER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which gene caller(s) would you like to export gene calls for? If providing multiple they should be comma-separated (no spaces). If you don&#x27;t know, use --list-gene-callers.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_gene_callers"><code class="parameter-flags">--list-gene-callers</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available gene callers in the contigs database and quit.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-matters-of-reporting">
<header class="parameter-group-header"><span class="parameter-group-title">MATTERS OF REPORTING</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_sequence_reporting"><code class="parameter-flags">--skip-sequence-reporting</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, exported gene calls have an amino acid sequences column in the output. Turn this behavior off with this flag</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_gene_calls.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
