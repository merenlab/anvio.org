---
layout: program
title: anvi-setup-cazymes
excerpt: An anvi'o program. Download and setup CAZyme data from the dbCAN3.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-cazymes
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup CAZyme data from the dbCAN3.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[cazyme-data](../../artifacts/cazyme-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **downloads and organizes a local copy of the data from [dbCAN2 CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/) for use in function annotation.** This program generates a <span class="artifact-n">[cazyme-data](/help/main/artifacts/cazyme-data)</span> artifact, which is required to run the program <span class="artifact-p">[anvi-run-cazymes](/help/main/programs/anvi-run-cazymes)</span>.

### Set up cazymes data

anvi'o will download the newest version of the database (V14) by default:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes
</div>

You can use `--cazyme-version`, if you want anvi'o to download a different version of the [dbCAN2 CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/) database:

{:.warning}
The following versions have been tested for download: V9-14

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;cazyme&#45;version V10
</div>

By default, this data is stored at `anvio/data/misc/CAZyme/`. To set up this data in a non-default location, run:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;cazyme&#45;data&#45;dir path/to/location
</div>

If you already have a <span class="artifact-n">[cazyme-data](/help/main/artifacts/cazyme-data)</span> artifact and are trying to re-download this data, run:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;cazymes &#45;&#45;reset
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-cazymes.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-setup-cazymes`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-setup-cazymes [-h] [--cazyme-data-dir CAZYME_DATA_DIR] [--reset] [--cazyme-version CAZYME_VERSION]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-cazyme_data_dir"><code class="parameter-flags">--cazyme-data-dir</code> <code class="parameter-metavar">CAZYME_DATA_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory for CAZyme data to be stored. If you leave it as is without specifying anything, the default destination for the data directory will be used to set things up. The advantage of it is that everyone will be using a single data directory, but then you may need superuser privileges to do it. Using this parameter you can choose the location of the data directory somewhere you like. However, when it is time to run CAZyme, you will need to remember that path and provide it to the program.</span></dd>
<dt class="parameter parameter-switch" id="parameter-reset"><code class="parameter-flags">--reset</code></dt>
<dd class="parameter-details"><span class="parameter-help">This program by default attempts to use previously downloaded files in your Pfam data directory if there are any. If something is wrong for some reason you can use this to tell anvi&#x27;o to remove everything, and start over.</span></dd>
<dt class="parameter" id="parameter-cazyme_version"><code class="parameter-flags">--cazyme-version</code> <code class="parameter-metavar">CAZYME_VERSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, the most current version available (V13) will be downloaded. If you have specific tastes for a different version, you can provide it here. For example, `V10`. Here are all possible versions: https://bcb.unl.edu/dbCAN2/download/Databases/</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/setup_cazymes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
