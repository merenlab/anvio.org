---
layout: program
title: anvi-script-gen-fasta-txt
excerpt: An anvi'o program. Create the fasta.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-fasta-txt
image:
  featurerelative: ../../../images/header.png
  display: true
---

Create the fasta.txt file.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[fasta-txt](../../artifacts/fasta-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program scans a directory for FASTA files and generates a <span class="artifact-n">[fasta-txt](/help/main/artifacts/fasta-txt)</span> file that lists each one with its name and path.

A default run looks like this:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;fasta&#45;txt &#45;&#45;input&#45;dir path/to/fasta/dir \
                          &#45;o <span class="artifact&#45;n">[fasta&#45;txt](/help/main/artifacts/fasta&#45;txt)</span>
</div>

The program identifies all FASTA-formatted files in the given directory, uses the filename (without extension) as the sequence name, and writes a TAB-delimited <span class="artifact-n">[fasta-txt](/help/main/artifacts/fasta-txt)</span> file ready for use with other anvi'o programs.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-fasta-txt.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_fasta_txt.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
