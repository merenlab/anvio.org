---
layout: program
title: anvi-export-contigs
excerpt: An anvi'o program. Export contigs (or splits) from an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-contigs
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export contigs (or splits) from an anvi&#x27;o contigs database.

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

<p style="text-align: left" markdown="1"><span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **exports the contig sequences from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>**, outputting them as a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>. It also has the ability to output the sequences of your splits instead.

You can run this program as follows, which will return ALL contigs in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> file:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;contigs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                    &#45;o path/to/<span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span>
</div>

You can also limit the contigs you may be interested in to a subset by providing the list of contig names you wish to export in a file. For example:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;contigs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                    &#45;o path/to/<span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                    &#45;&#45;contigs&#45;of&#45;interest my_favorite_contigs.txt
</div>

where `my_favorite_contigs.txt` looks like this:

```
contig_0001
contig_0005
contig_0035
```

Alternatively, you may be interested in contigs that include one or more *genes* you are interested. In that case you can use `--genes-of-interest` with a <span class="artifact-n">[genes-of-interest-txt](/help/main/artifacts/genes-of-interest-txt)</span>, and anvi'o will export only those contigs that contain at least one of the gene calls you listed:

<div class="codeblock" markdown="1">
anvi&#45;export&#45;contigs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                    &#45;o path/to/<span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                    &#45;&#45;genes&#45;of&#45;interest my_favorite_genes.txt
</div>

where `my_favorite_genes.txt` looks like this:

```
5
13
206
```

Please note that `--contigs-of-interest` and `--genes-of-interest` are mutually exclusive: you can use one or the other in a given command, but not both at the same time.

### Splits mode

Want to look at your splits instead of your contigs? Just run with the flag `splits-mode` attached.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;contigs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                    &#45;o path/to/<span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                    &#45;&#45;splits&#45;mode
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-contigs.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-contigs`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-contigs [-h] -c CONTIGS_DB [--contigs-of-interest FILE] [--genes-of-interest FILE] [--splits-mode] -o FILE_PATH [--just-do-it] [--no-wrap]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-contigs_of_interest"><code class="parameter-flags">--contigs-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">It is possible to focus on only a set of contigs. If you would like to do that and ignore the rest of the contigs in your contigs database, use this parameter with a flat file every line of which desribes a single contig name.</span></dd>
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter parameter-switch" id="parameter-splits_mode"><code class="parameter-flags">--splits-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Export split sequences instead.</span></dd>
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-switch" id="parameter-no_wrap"><code class="parameter-flags">--no-wrap</code></dt>
<dd class="parameter-details"><span class="parameter-help">Do not be wrap sequences nicely in the output file.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_contigs.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
