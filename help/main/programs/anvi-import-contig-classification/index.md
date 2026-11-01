---
layout: program
title: anvi-import-contig-classification
excerpt: An anvi'o program. Import contig-level classification data (domain, virus, plasmid, etc.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-contig-classification
image:
  featurerelative: ../../../images/header.png
  display: true
---

Import contig-level classification data (domain, virus, plasmid, etc.) into a contigs database from a user-prepared tab-delimited file.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/tucker4.jpeg" /></div><div class="anvio-person-info-box"><a href="/people/tucker4" target="_blank"><span class="anvio-person-name">Sarah Tucker</span></a><div class="anvio-person-social-box"><a href="https://sarahjtucker.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:stucker@mbl.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/tucker4" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-xixi.jpg" /></div><div class="anvio-person-info-box"><a href="/people/u-xixi" target="_blank"><span class="anvio-person-name">Xi Chen (Xixi)</span></a><div class="anvio-person-social-box"><a href="mailto:xi.chen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/u-xixi" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/avrilhoyningen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/avihuene" target="_blank"><span class="anvio-person-name">Avril Hoyningen-Huene</span></a><div class="anvio-person-social-box"><a href="mailto:avril.hoyningen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/avihuene" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/guillermo_rangel.jpg" /></div><div class="anvio-person-info-box"><a href="/people/guille0387" target="_blank"><span class="anvio-person-name">Guillermo Rangel-Pineros</span></a><div class="anvio-person-social-box"><a href="mailto:guillermo.pineros@sund.ku.dk" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/guille0387" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contig-classification-txt](../../artifacts/contig-classification-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contig-classification](../../artifacts/contig-classification) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **takes in one or more <span class="artifact-n">[contig-classification-txt](/help/main/artifacts/contig-classification-txt)</span> files and stores the contig-level classification data in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>**, producing a <span class="artifact-n">[contig-classification](/help/main/artifacts/contig-classification)</span> artifact.

There are many software tools available for classifying contigs according to their predicted domain of origin, and the point of this program is to put those classifications within a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> for use in downstream programs such as <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span>. In order for this to work, you'll need to convert the output of whichever tool you have used to the standardized tabular format accepted by this program. Once you have a <span class="artifact-n">[contig-classification-txt](/help/main/artifacts/contig-classification-txt)</span> containing the classification data, you can import that data like this:

<div class="codeblock" markdown="1">
anvi&#45;import&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;i <span class="artifact&#45;n">[contig&#45;classification&#45;txt](/help/main/artifacts/contig&#45;classification&#45;txt)</span>
</div>

Multiple classification sources can coexist in the same contigs database, as described by the `source` column in the input file. If you want to import multiple sources, you can put all their classifications into one <span class="artifact-n">[contig-classification-txt](/help/main/artifacts/contig-classification-txt)</span>.

That said, in case you created a different table for each classification tool that you used, you can import from multiple files at once:

<div class="codeblock" markdown="1">
anvi&#45;import&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;i genomad_out.tsv tiara_out.tsv
</div>

If your input file contains classifications from a source that is already stored in the contigs database, anvi'o will raise an error to protect existing data. To overwrite a source, re-run with the `--just-do-it` flag, which will delete all existing rows for that source before inserting the new data:

<div class="codeblock" markdown="1">
anvi&#45;import&#45;contig&#45;classification &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                   &#45;i <span class="artifact&#45;n">[contig&#45;classification&#45;txt](/help/main/artifacts/contig&#45;classification&#45;txt)</span> \
                                   &#45;&#45;just&#45;do&#45;it
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-contig-classification.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-contig-classification`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-contig-classification [-h] -c CONTIGS_DB -i FILE [FILE ...] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-required">
<header class="parameter-group-header"><span class="parameter-group-title">REQUIRED</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-input_files"><code class="parameter-flags">-i, --input-files</code> <code class="parameter-metavar">FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">One or more tab-delimited files containing contig classification data. Each file must have the following columns: contig, class, source, tool_classification, confidence. The &#x27;class&#x27; column must be an integer: 0=non-eukaryotic, 1=eukaryotic, 2=virus, 3=plasmid, 4=organelle, 5=unclassified. The &#x27;source&#x27; column identifies the tool that produced the classification. The &#x27;tool_classification&#x27; column holds the raw string from the tool (use semicolons for multi-level entries, e.g. Viruses;Duplodnaviria). The &#x27;confidence&#x27; column holds the tool confidence score, or &#x27;NA&#x27; if not available. Multiple files may be provided and will be concatenated.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_contig_classification.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
