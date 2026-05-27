---
layout: program
title: anvi-script-pfam-accessions-to-hmms-directory
excerpt: An anvi'o program. You give this program one or more PFAM accession ids, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms`.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-pfam-accessions-to-hmms-directory
image:
  featurerelative: ../../../images/header.png
  display: true
---

You give this program one or more PFAM accession ids, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ge0rges.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ge0rges" target="_blank"><span class="anvio-person-name">Georges Kanaan (Gio)</span></a><div class="anvio-person-social-box"><a href="https://gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:georges@gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ge0rges" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pfam-accession](../../artifacts/pfam-accession) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pfams-data](../../artifacts/pfams-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>




## Usage


You give this program one or more PFAM accession ids, and it generates an anvi'o compatible HMM directory <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> to be used with <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span> by downloading them from the PFAM database.

### Basic usage

You may either specify a list of PFAM accessions with `--pfam-accessions-list`:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;pfam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;pfam&#45;accessions&#45;list PF00001 PF00002 \
                                              &#45;o PROFILE&#45;NAME
</div>

Or a file containing this list using `--pfam-accessions-file`. The file should have one accession number per line:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;pfam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;pfam&#45;accessions&#45;file file.txt \
                                              &#45;o PROFILE&#45;NAME
</div>

{:.warning}
Please note that the `PROFILE-NAME` will become the name for the HMM source when you use this HMM directory with <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span>. So choose the output directory name accordingly, and make sure (1) it does not conflict with any existing HMM source name in your anvi'o setup, and (2) it is descriptive of the profile you are building.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-pfam-accessions-to-hmms-directory.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/pfam_accessions_to_hmms_directory.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
