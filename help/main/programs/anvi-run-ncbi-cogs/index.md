---
layout: program
title: anvi-run-ncbi-cogs
excerpt: An anvi'o program. This program runs NCBI&#x27;s COGs to associate genes in an anvi&#x27;o contigs database with functions.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-ncbi-cogs
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program runs NCBI&#x27;s COGs to associate genes in an anvi&#x27;o contigs database with functions. This program can also run NCBI&#x27;s COGs to annotate an amino acid sequence with function. COGs database was been designed as an attempt to classify proteins from completely sequenced genomes on the basis of the orthology concept..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ge0rges.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ge0rges" target="_blank"><span class="anvio-person-name">Georges Kanaan</span></a><div class="anvio-person-social-box"><a href="https://gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:georges@gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/scientificgio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ge0rges" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[cogs-data](../../artifacts/cogs-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[functions-txt](../../artifacts/functions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **annotates genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions using NCBI's [Clusters of Orthologus Groups (COGs) database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/).**

This program assumes that the user has successfully set up the COGs database on their computer using the anvi'o program <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span>.

This program requires one of two possible inputs a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or a <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file of amino acid sequences. When a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> is provided, the program will store its output in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as a <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> artifact. Otherwise you must specify an output file path using `-o`, to which the program will write a TAB-delimited file containing all the annotatons found in the input <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file.

If the <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> was stored at a specific path when <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span> was run, then providing that path using the `--cog-data-dir` parameter is also necessary.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;cog&#45;data&#45;dir path/to/<span class="artifact&#45;n">[cogs&#45;data](/help/main/artifacts/cogs&#45;data)</span>
</div>

Without the flag `--cog-data-dir`, anvi'o will just search in the default location.

### Choosing a different database version
If you want to annotate your genes with a non-default version of <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span>, provide that version after the `--cog-version` parameter:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;cog&#45;version COG24
</div>

### Choosing a different search program
By default, this program uses `diamond` to search for hits to the database. You can also use `blastp`` to search, by running:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;search&#45;with blastp
</div>

### Running with multiple threads
<div class="codeblock" markdown="1">
anvi&#45;run&#45;ncbi&#45;cogs &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
            &#45;&#45;cog&#45;data&#45;dir path/to/<span class="artifact&#45;n">[cogs&#45;data](/help/main/artifacts/cogs&#45;data)</span> \
            &#45;T 16
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-ncbi-cogs.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-run-ncbi-cogs) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
