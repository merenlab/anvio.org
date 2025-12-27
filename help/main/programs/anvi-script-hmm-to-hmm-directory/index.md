---
layout: program
title: anvi-script-hmm-to-hmm-directory
excerpt: An anvi'o program. You give this program one or more HMM files from `hmmbuild`, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms`.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-hmm-to-hmm-directory
image:
  featurerelative: ../../../images/header.png
  display: true
---

You give this program one or more HMM files from `hmmbuild`, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ge0rges.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ge0rges" target="_blank"><span class="anvio-person-name">Georges Kanaan</span></a><div class="anvio-person-social-box"><a href="https://gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:georges@gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/scientificgio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ge0rges" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[hmm-file](../../artifacts/hmm-file) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>


## Usage


This script converts a `.hmm` file as formatted by HMMER3 `hmmbuild` to an anvi'o compatible [hmm-source](https://anvio.org/help/main/artifacts/hmm-source/).

### Specifying the input HMM

To start you must point the command to a list of `.hmm` files you'd like to include in your file `hmm-source` using the `--hmm-list` parameter. You may specify one or more files

<div class="codeblock" markdown="1">
anvi&#45;script&#45;hmm&#45;to&#45;hmm&#45;directory &#45;&#45;hmm&#45;list FILE1.hmm FILE2.hmm
</div>

### Specifying the input HMM source

Then you must specify a source for the HMM using `--hmm-source`. Here you have two options. If you specify exactly one source, that will be applied to all the `.hmm` files passed via `--hmm-list`.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;hmm&#45;to&#45;hmm&#45;directory &#45;&#45;hmm&#45;list FILE1.hmm FILE2.hmm &#45;&#45;hmm&#45;source COMMON_SOURCE
</div>

Otherwise you must specify one source per file passed to `--hmm-list`.
<div class="codeblock" markdown="1">
anvi&#45;script&#45;hmm&#45;to&#45;hmm&#45;directory &#45;&#45;hmm&#45;list FILE1.hmm FILE2.hmm &#45;&#45;hmm&#45;source SOURCE1 SOURCE2
</div>

### Specifying the output directory
You must specify the output directory you'd like anvi'o to save your `hmm-source` into using `-o` or `--output-directory`. Anvi'o will create a folder at the path you specify if it does not exist, otherwise it will exit.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;hmm&#45;to&#45;hmm&#45;directory &#45;o path/to/output
</div>


### Basic usage

Putting everything together, a basic command would look like this:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;hmm&#45;to&#45;hmm&#45;directory &#45;&#45;hmm&#45;list FILE1.hmm &#45;&#45;hmm&#45;source SOURCE1 &#45;o output_folder
</div>

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-hmm-to-hmm-directory.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/hmm_to_hmm_directory.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
