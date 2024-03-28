---
layout: help
title: anvi-setup-pfams [program]
categories: [anvio]
comments: false
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup Pfam data from the EBI.

Go back to the **[main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[pfams-data](../../artifacts/pfams-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>

## Can consume

<p style="text-align: left" markdown="1"></p>

## Usage


This program **downloads and organizes a local copy of the data from EBI's [Pfam database](https://pfam.xfam.org/) for use in function annotation.** This program generates a <span class="artifact-n">[pfams-data](/help/7/artifacts/pfams-data)</span> artifact, which is required to run the program <span class="artifact-n">[anvi-run-pfams](/help/7/programs/anvi-run-pfams)</span>. 

### Set up Pfams data
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams 
</div>

By default, this data is stored at `anvio/data/misc/Pfam`. To set up this data in a non-default location, run 
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams &#45;&#45;pfam&#45;data&#45;dir path/to/location
</div>

If you already have a <span class="artifact-n">[pfams-data](/help/7/artifacts/pfams-data)</span> artifact and are trying to redownload this data, run 

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-pfams.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-pfams) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
