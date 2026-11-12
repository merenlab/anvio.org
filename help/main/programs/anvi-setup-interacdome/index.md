---
layout: program
title: anvi-setup-interacdome
excerpt: An anvi'o program. Setup InteracDome data.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-interacdome
image:
  featurerelative: ../../../images/header.png
  display: true
---

Setup InteracDome data.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interacdome-data](../../artifacts/interacdome-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Usage



This program (much like all of the other programs that begin with `anvi-setup`) sets up a local copy of the InteracDome database for <span class="artifact-p">[anvi-run-interacdome](/help/main/programs/anvi-run-interacdome)</span> as well as a local copy of Pfam v31.0, which is what InteracDome is defined for. Note that anvi'o only needs this program to be run once.


Specifically, this downloads [InteracDome](https://interacdome.princeton.edu/)’s [tab-separated files](https://interacdome.princeton.edu/#tab-6136-4) and the Pfam v31.0 HMM profiles for the Pfams in your InteracDome data. This data is stored in the <span class="artifact-n">[interacdome-data](/help/main/artifacts/interacdome-data)</span> artifact.


It's easy as 1-2-3:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;interacdome
</div>

When running this program, you can provide a path to store your InteracDome data in. The default path is `anvio/data/misc/InteracDome`; if you use a custom path, you will have to provide it to <span class="artifact-p">[anvi-run-interacdome](/help/main/programs/anvi-run-interacdome)</span> with the same parameter. Here is an example run:


<div class="codeblock" markdown="1">
anvi&#45;setup&#45;interacdome &#45;&#45;interacdome&#45;data&#45;dir path/to/directory
</div>

If you want to overwrite any data that you have already downloaded (for example if you suspect something went wrong in the download), add the `--reset` flag:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;interacdome  &#45;&#45;interacdome&#45;data&#45;dir path/to/directory \
                        &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-interacdome.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-interacdome`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-interacdome [-h] [--interacdome-data-dir PATH] [--reset]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-interacdome_data_dir"><code class="parameter-flags">--interacdome-data-dir</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The path for the interacdome data to be stored. If you leave it as is without specifying anything, anvi&#x27;o will set up everything in a pre-defined default directory. The advantage of using the default directory at the time of set up is that every user of anvi&#x27;o on a computer system will be using a single data directory, but then you may need to run the setup program with superuser privileges. If you don&#x27;t have superuser privileges, then you can use this parameter to tell anvi&#x27;o the location you wish to use to setup your data.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">Remove all the previously stored files and start over. If something is feels wrong for some reason and if you believe re-downloading files and setting them up could address the issue, this is the flag that will tell anvi&#x27;o to act like a real computer scientist challenged with a computational problem.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [The setup step in the InteracDome technical blogpost](http://merenlab.org/2020/07/22/interacdome/#anvi-setup-interacdome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_interacdome.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
