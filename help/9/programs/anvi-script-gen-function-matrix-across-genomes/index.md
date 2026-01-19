---
layout: program
title: anvi-script-gen-function-matrix-across-genomes
excerpt: An anvi'o program. A program to generate reports for the distribution of functions across genomes.
categories: [anvio]
comments: false
redirect_from: /9/anvi-script-gen-function-matrix-across-genomes
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to generate reports for the distribution of functions across genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[functions-across-genomes-txt](../../artifacts/functions-across-genomes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


Generates TAB-delmited output files for <span class="artifact-n">[functions](/help/9/artifacts/functions)</span> from a single function annotation source across genomes.

{:.notice}
For a simlar program that reports HMM hits across genomes, see <span class="artifact-p">[anvi-script-gen-hmm-hits-matrix-across-genomes](/help/9/programs/anvi-script-gen-hmm-hits-matrix-across-genomes)</span>.

The input genomes for this program can be provided through an <span class="artifact-n">[external-genomes](/help/9/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/9/artifacts/internal-genomes)</span>, <span class="artifact-n">[genomes-storage-db](/help/9/artifacts/genomes-storage-db)</span>, or any combination of these sources.

This program is very similar to <span class="artifact-p">[anvi-display-functions](/help/9/programs/anvi-display-functions)</span>, and can also perform a functional enrichment analysis on-the-fly if you provide it with an optional <span class="artifact-n">[groups-txt](/help/9/artifacts/groups-txt)</span> file. Unlike, <span class="artifact-p">[anvi-display-functions](/help/9/programs/anvi-display-functions)</span>, this program will report TAB-delmited output files for you to further analyze.

You can run the program on a set of genomes for a given annotation source:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;function&#45;matrix&#45;across&#45;genomes &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/9/artifacts/external&#45;genomes)</span> \
                                               &#45;&#45;annotation&#45;source COG20_FUNCTION \
                                               &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES
</div>

The command above will result in two files in your work directory, both of which will be of type <span class="artifact-n">[functions-across-genomes-txt](/help/9/artifacts/functions-across-genomes-txt)</span>:

* MY-GENOMES-FREQUENCY.txt
* MY-GENOMES-PRESENCE-ABSENCE.txt

{:.notice}
You can always learn about which functions are in a given <span class="artifact-n">[contigs-db](/help/9/artifacts/contigs-db)</span> using the program <span class="artifact-p">[anvi-db-info](/help/9/programs/anvi-db-info)</span>.

Alternatively you can run it with a <span class="artifact-n">[groups-txt](/help/9/artifacts/groups-txt)</span> that associates sets of genomes with distinct groups,

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;function&#45;matrix&#45;across&#45;genomes &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/9/artifacts/internal&#45;genomes)</span> \
                                               &#45;&#45;annotation&#45;source COG20_FUNCTION \
                                               &#45;&#45;output&#45;file&#45;prefix MY&#45;GENOMES \
                                               &#45;&#45;groups&#45;txt groups.txt
</div>

which would generate an additional file in your work directory of type <span class="artifact-n">[functional-enrichment-txt](/help/9/artifacts/functional-enrichment-txt)</span>:

* MY-GENOMES-FUNCTIONAL-ENRICHMENT.txt


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-function-matrix-across-genomes.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_function_matrix_across_genomes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
