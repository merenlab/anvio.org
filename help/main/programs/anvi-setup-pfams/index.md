---
layout: program
title: anvi-setup-pfams
excerpt: An anvi'o program. Download and setup Pfam data from the EBI.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-pfams
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

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[pfams-data](../../artifacts/pfams-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **downloads and organizes a local copy of the data from EBI's [Pfam database](https://pfam.xfam.org/) for use in function annotation.** This program generates a <span class="artifact-n">[pfams-data](/help/main/artifacts/pfams-data)</span> artifact, which is required to run the program <span class="artifact-p">[anvi-run-pfams](/help/main/programs/anvi-run-pfams)</span>.

### Set up Pfams data
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams
</div>

By default, this data is stored at `anvio/data/misc/Pfam`. To set up this data in a non-default location, run
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams &#45;&#45;pfam&#45;data&#45;dir path/to/location
</div>

If you already have a <span class="artifact-n">[pfams-data](/help/main/artifacts/pfams-data)</span> artifact and are trying to redownload this data, run

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;pfams &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-pfams.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-pfams`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-pfams [-h] [--pfam-data-dir PFAM_DATA_DIR] [--reset] [--pfam-version PFAM_VERSION]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pfam_data_dir"><code class="parameter-flags">--pfam-data-dir</code> <code class="parameter-metavar">PFAM_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory for Pfam data to be stored. If you leave it as is without specifying anything, the default destination for the data directory will be used to set things up. The advantage of it is that everyone will be using a single data directory, but then you may need superuser privileges to do it. Using this parameter you can choose the location of the data directory somewhere you like. However, when it is time to run Pfam, you will need to remember that path and provide it to the program.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program by default attempts to use previously downloaded files in your Pfam data directory if there are any. If something is wrong for some reason you can use this to tell anvi&#x27;o to remove everything, and start over.</span></dd>
<dt class="parameter" id="parameter-pfam_version"><code class="parameter-flags">--pfam-version</code> <code class="parameter-metavar">PFAM_VERSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, the most current version available will be downloaded. If you have specific tastes for a different version, you can provide it here. For example, `31.0`. Here are all possible versions: ftp://ftp.ebi.ac.uk/pub/databases/Pfam/releases/</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_pfams.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
