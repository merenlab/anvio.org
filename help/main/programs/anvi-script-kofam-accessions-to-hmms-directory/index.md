---
layout: program
title: anvi-script-kofam-accessions-to-hmms-directory
excerpt: An anvi'o program. You give this program one or more KOfam accession ids, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms` by extracting them from your local KEGG setup.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-kofam-accessions-to-hmms-directory
image:
  featurerelative: ../../../images/header.png
  display: true
---

You give this program one or more KOfam accession ids, and it generates an anvi&#x27;o compatible HMM directory to be used with `anvi-run-hmms` by extracting them from your local KEGG setup..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/igorspp.jpg" /></div><div class="anvio-person-info-box"><a href="/people/igorspp" target="_blank"><span class="anvio-person-name">Igor S. Pessi</span></a><div class="anvio-person-social-box"><a href="http://igorpessi.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:igor.pessi@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/igorspp" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ge0rges.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ge0rges" target="_blank"><span class="anvio-person-name">Georges Kanaan (Gio)</span></a><div class="anvio-person-social-box"><a href="https://gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:georges@gkanaan.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ge0rges" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[kofam-accession](../../artifacts/kofam-accession) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[kegg-data](../../artifacts/kegg-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span></p>




## Usage


You give this program one or more KOfam accession ids, and it generates an anvi'o compatible HMM directory <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> to be used with <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span> by extracting them from your local <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> setup.

### Basic usage

You may either specify a list of KOfam accessions with `--kofam-accessions-list`:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;kofam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;kofam&#45;accessions&#45;list K00001 K00121 \
                                               &#45;o PROFILE&#45;NAME
</div>

Or a file containing this list using `--kofam-accessions-file`. The file should have one accession number per line:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;kofam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;kofam&#45;accessions&#45;file file.txt \
                                               &#45;o PROFILE&#45;NAME
</div>

{:.warning}
Please note that the `PROFILE-NAME` will become the name for the HMM source when you use this HMM directory with <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span>. So choose the output directory name accordingly, and make sure (1) it does not conflict with any existing HMM source name in your anvi'o setup, and (2) it is descriptive of the profile you are building.

If your KEGG data is not in the default location, you can specify it using `--kegg-data-dir`:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;kofam&#45;accessions&#45;to&#45;hmms&#45;directory &#45;&#45;kofam&#45;accessions&#45;list K00001 \
                                               &#45;&#45;kegg&#45;data&#45;dir /path/to/KEGGDATA \
                                               &#45;o PROFILE&#45;NAME
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-kofam-accessions-to-hmms-directory.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-kofam-accessions-to-hmms-directory`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-kofam-accessions-to-hmms-directory [-h] [--kofam-accessions-list KOFAM_ACCESSION [KOFAM_ACCESSION ...]] [--kofam-accessions-file FILE] [--kegg-data-dir DIR_PATH] [--include-nt-KOs] [-o DIR_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-kofam_accessions_list"><code class="parameter-flags">--kofam-accessions-list</code> <code class="parameter-metavar">KOFAM_ACCESSION</code></dt>
<dd class="parameter-details"><span class="parameter-help">One or more KOfam accession IDs (such as K00001). If you have multiple accessions, you can separate them from each other with a space. If you have too many, consider using the `--kofam-accessions-file` parameter instead.</span></dd>
<dt class="parameter" id="parameter-kofam_accessions_file"><code class="parameter-flags">--kofam-accessions-file</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A single column text file where each column is a single KOfam accession ID (such as K00001). You may have as many accession ids as you like in this file.</span></dd>
<dt class="parameter" id="parameter-kegg_data_dir"><code class="parameter-flags">--kegg-data-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The directory path for your KEGG setup, which will include things like KOfam profiles, KEGG MODULE data, and KEGG BRITE data. Anvi&#x27;o will try to use the default path if you do not specify anything.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_nt_kos"><code class="parameter-flags">--include-nt-KOs</code></dt>
<dd class="parameter-details"><span class="parameter-help">&#x27;No-threshold KOs&#x27;, or &#x27;nt-KOs&#x27; are what we call KEGG Orthlogs that KEGG does not provide a bit score threshold for. If you want to include these protein families in your annotations and downstream analyses, then you can use this flag. Anvi&#x27;o does something very basic to estimate a bit score threshold for annotating these KOs, which is (1) to download the KEGG GENES sequences associated with each family, (2) to build a new HMM from these GENES (since KEGG GENES updates with new sequences faster than KOfam updates its models), (3) to run HMMER of each new model against the KO&#x27;s associated sequences, and (4) to take the minimum bit score of those hits as the bit score threshold for the KO. Downstream, we use the anvi&#x27;o-generated models to annotate these KO families with their estimated bit score thresholds.</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output directory for the anvi&#x27;o-formatted HMMs. Choose the name wisely as this will be the name that will appear in the contigs database after you provide it with the `-H` flag to `anvi-run-hmms`.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/kofam_accessions_to_hmms_directory.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
