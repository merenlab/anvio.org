---
layout: program
title: anvi-setup-cazymes
excerpt: An anvi'o program. Download and setup Pfam data from the EBI.
categories: [anvio]
comments: false
redirect_from: /9/anvi-setup-cazymes
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup Pfam data from the EBI.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


This program seems to know what its doing. It needs no input material from its user. Good program.


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[cazyme-data](../../artifacts/cazyme-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **downloads and organizes a local copy of the data from [dbCAN2 CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/) for use in function annotation.** This program generates a <span class="artifact-n">[cazyme-data](/help/9/artifacts/cazyme-data)</span> artifact, which is required to run the program <span class="artifact-p">[anvi-run-cazymes](/help/9/programs/anvi-run-cazymes)</span>. 

### Set up cazymes data

anvi'o will download the newest version of the database (V13) by default:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes 
</div>

You can use `--cazyme-version`, if you want anvi'o to download a different version of the [dbCAN2 CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/) database:

{:.warning}
The following versions have been tested for download: V9-13

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;cazyme&#45;version V10
</div>

By default, this data is stored at `anvio/data/misc/CAZyme/`. To set up this data in a non-default location, run:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;cazyme&#45;data&#45;dir path/to/location
</div>

If you already have a <span class="artifact-n">[cazyme-data](/help/9/artifacts/cazyme-data)</span> artifact and are trying to re-download this data, run:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-cazymes.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_cazymes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
