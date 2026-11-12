---
layout: program
title: anvi-script-get-sra-metadata
excerpt: An anvi'o program. Ask NCBI what it knows about a set of SRA run accessions, and keep the answers in a TAB-delimited file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-get-sra-metadata
image:
  featurerelative: ../../../images/header.png
  display: true
---

Ask NCBI what it knows about a set of SRA run accessions, and keep the answers in a TAB-delimited file. Anvi&#x27;o workflows that download reads from the SRA need to know whether each run is paired-end or single-end, whether it came off a short-read or a long-read instrument, and how big it is, all before they can start. They will build this file themselves the first time they need it; this program exists so you can build it ahead of time (handy if the computer that runs your workflow has no internet access), and so you can see what anvi&#x27;o thinks before it acts on it.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/FlorianTrigodet.jpg" /></div><div class="anvio-person-info-box"><a href="/people/floriantrigodet" target="_blank"><span class="anvio-person-name">Florian Trigodet</span></a><div class="anvio-person-social-box"><a href="mailto:trigodet.florian@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FlorianTrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/floriantrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[samples-txt](../../artifacts/samples-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[sra-metadata-txt](../../artifacts/sra-metadata-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program asks NCBI what it knows about a set of SRA run accessions and writes the answers into a <span class="artifact-n">[sra-metadata-txt](/help/main/artifacts/sra-metadata-txt)</span>.

You do not have to run it. Any anvi'o workflow that downloads reads from the SRA builds this file itself the first time it needs one. This program exists for the two cases where doing it by hand is better: when the computer that runs your workflows cannot reach the internet, and when you would like to look over what anvi'o concluded before it acts on it.

### Starting from a list of accessions

<div class="codeblock" markdown="1">
anvi&#45;script&#45;get&#45;sra&#45;metadata &#45;&#45;accession&#45;list SRA_accession_list.txt \
                             &#45;o SRA&#45;METADATA.txt
</div>

where `SRA_accession_list.txt` is a file with one SRA run accession per line.

### Starting from a samples-txt

If you already have a <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span> with an `sra_accession` column in it, point this program at that instead and it will pick the accessions out for you:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;get&#45;sra&#45;metadata &#45;&#45;samples&#45;txt <span class="artifact&#45;n">[samples&#45;txt](/help/main/artifacts/samples&#45;txt)</span> \
                             &#45;o SRA&#45;METADATA.txt
</div>

### What it tells you

Along with the file itself you get a summary of what is in it: how many runs are paired-end short reads and how many are long reads, and how much disk space they would take up if you downloaded every one of them at once. That last number is a useful sanity check before setting `max_disk_gb` in your <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span>.

You will also hear about anything that needs your attention — long-read runs whose sequencing chemistry could not be determined from NCBI's description, and single-end short-read runs, which the metagenomics workflow cannot process.

### Running it again

Running this program a second time on the same output file does not start over. Anvi'o reads what is already there, looks up only the accessions that are missing, and appends them. Rows you have corrected by hand are left exactly as you wrote them, which is what makes this file a reasonable place to fix NCBI metadata that is wrong.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-get-sra-metadata.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-get-sra-metadata`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-get-sra-metadata [-h] [--accession-list ACCESSION_LIST] [--samples-txt SAMPLES_TXT] [-o OUTPUT_FILE]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">Where the accessions come from. Pick one.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-accession_list"><code class="parameter-flags">--accession-list</code> <code class="parameter-metavar">ACCESSION_LIST</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with one SRA run accession per line.</span></dd>
<dt class="parameter" id="parameter-samples_txt"><code class="parameter-flags">--samples-txt</code> <code class="parameter-metavar">SAMPLES_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">A samples-txt file with an `sra_accession` column.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">OUTPUT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Where to keep what anvi&#x27;o learns. If this file already exists, anvi&#x27;o only looks up the accessions that are missing from it and adds them, so anything you have corrected by hand stays as you left it. The default is &#x27;SRA-METADATA.txt&#x27;, which is also where the metagenomics workflow looks unless you tell it otherwise.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">SRA-METADATA.txt</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_sra_metadata.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
