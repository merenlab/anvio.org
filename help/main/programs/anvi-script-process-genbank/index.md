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

This script takes a GenBank file, and outputs a FASTA file, as well as two additional TAB-delimited output files for external gene calls and gene functions that can be used with the programs `anvi-gen-contigs-database` and `anvi-import-functions`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/AstrobioMike.jpg" /></div><div class="anvio-person-info-box"><a href="/people/AstrobioMike" target="_blank"><span class="anvio-person-name">Mike Lee</span></a><div class="anvio-person-social-box"><a href="https://astrobiomike.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:michael.lee0517@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AstrobioMike" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/AstrobioMike" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[genbank-file](../../artifacts/genbank-file) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[functions-txt](../../artifacts/functions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program processes a <span class="artifact-n">[genbank-file](/help/main/artifacts/genbank-file)</span>, and converts it into anvi'o friendly artifacts: namely, a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>, <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> and a <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>.

The <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> and <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> can be given to <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span> to create a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, and then you can use <span class="artifact-p">[anvi-import-functions](/help/main/programs/anvi-import-functions)</span> to bring the function data (in the <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>) into the database. Then you'll have all of the data in your <span class="artifact-n">[genbank-file](/help/main/artifacts/genbank-file)</span> converted into a single <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, which you can use for a variety of anvi'o analyses.

The parameters of this program entirely deal with the outputs. Besides telling the program where to put them, you can also give the function annotation source (in the <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>) a custom name.

One important note about this conversion is the following: During the conversion of GenBank entries, anvi'o will assign a new gene call id to each entry, breaking the link between locus tags defined in the GenBank file and the gene entries that will later appear in the anvi'o <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. One way to avoid this is to use the flag `--include-locus-tags-as-functions`, which will instruct anvi'o to add a new 'function' source for each gene in the output file for functional annotations so that the user can trace back a given gene call to the original locus tag.

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-process-genbank.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-script-process-genbank) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
