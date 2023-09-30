---
layout: program
title: anvi-get-metabolic-model-file
excerpt: An anvi'o program. This program writes a metabolic reaction network to a file suitable for flux balance analysis.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-metabolic-model-file
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program writes a metabolic reaction network to a file suitable for flux balance analysis..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[reaction-network](../../artifacts/reaction-network) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[reaction-network-json](../../artifacts/reaction-network-json) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **exports a metabolic <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> to a <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file** suitable for inspection and flux balance analysis.

The required input to this program is a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> in which a <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> has been stored by <span class="artifact-p">[anvi-reaction-network](/help/main/programs/anvi-reaction-network)</span>.

The <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file output contains sections on the metabolites, reactions, and genes constituting the <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> that had been predicted from the genome. An "objective function" representing the biomass composition of metabolites in the ["core metabolism" of *E. coli*](http://bigg.ucsd.edu/models/e_coli_core) is automatically added as the first entry in the "reactions" section of the file and can be deleted as needed. An objective function is needed for flux balance analysis.

## Usage

<span class="artifact-p">[anvi-get-metabolic-model-file](/help/main/programs/anvi-get-metabolic-model-file)</span> requires a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> as input and the path to an output <span class="artifact-n">[reaction-network-json](/help/main/artifacts/reaction-network-json)</span> file.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                              &#45;o /path/to/ouput.json
</div>

An existing file at the target output location must be explicitly overwritten with the `-W` flag.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                              &#45;o /path/to/output.json \
                              &#45;W
</div>

The flag, `--remove-missing-objective-metabolites` must be used to remove metabolites in the *E. coli* core biomass objective function from the output file if the metabolites are not produced or consumed by the predicted <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span>. [COBRApy](https://opencobra.github.io/cobrapy/), for instance, cannot load the JSON file if metabolites in the objective function are missing from the genomic model.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;metabolic&#45;model&#45;file &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                              &#45;o /path/to/output.json \
                              &#45;&#45;remove&#45;missing&#45;objective&#45;metabolites
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-metabolic-model-file.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-metabolic-model-file) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
