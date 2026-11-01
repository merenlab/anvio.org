---
layout: program
title: anvi-script-reformat-bam
excerpt: An anvi'o program. Reformat a BAM file to match the updated sequence names after running anvi-script-reformat-fasta.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-reformat-bam
image:
  featurerelative: ../../../images/header.png
  display: true
---

Reformat a BAM file to match the updated sequence names after running anvi-script-reformat-fasta. You will need this script to fix your BAM file if you run `anvi-script-reformat-fasta` on a FASTA file of sequences *after* you already used the previous version of the FASTA file for read recruitment..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/telatin.jpg" /></div><div class="anvio-person-info-box"><a href="/people/telatin" target="_blank"><span class="anvio-person-name">Andrea Telatin</span></a><div class="anvio-person-social-box"><a href="https://telatin.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:andrea.telatin@quadram.ac.uk" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/telatin" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/telatin" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contig-rename-report-txt](../../artifacts/contig-rename-report-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **reformats a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> file using a <span class="artifact-n">[contig-rename-report-txt](/help/main/artifacts/contig-rename-report-txt)</span> to a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> compatible with a re-formatted <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>.** If you had to run <span class="artifact-p">[anvi-script-reformat-fasta](/help/main/programs/anvi-script-reformat-fasta)</span> to convert the contigs name of your FASTA file to make it compatible with anvi'o, and you already had some BAM files mapped to the original FASTA file, you will need to reformat those BAM files to make them compatible with the new FASTA file. This program will use the report file from <span class="artifact-p">[anvi-script-reformat-fasta](/help/main/programs/anvi-script-reformat-fasta)</span> to do that for you.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;reformat&#45;bam <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
                         &#45;l <span class="artifact&#45;n">[contig&#45;rename&#45;report&#45;txt](/help/main/artifacts/contig&#45;rename&#45;report&#45;txt)</span> \
                         &#45;o <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span>
</div>

{:.notice}
This program is required only if you ran `anvi-script-reformat-fasta` with the `--simplify-names` flag, and will require the output file generated with the flag `--report-file`.

### Example output

```
anvi-script-reformat-bam SAMPLE.bam \
                         --list REPORT.txt \
                         --output SAMPLE-REFORMATTED.bam
```

```text
Input BAM file ...............................: SAMPLE.bam
Rename list ..................................: REPORT.txt
Overwrite output? ............................: True

WHAT WAS THERE
===============================================
Loaded REPORT.txt ............................: 3

WHAT WAS DONE
===============================================
Sequences in BAM file ........................: 3
Output BAM file created ......................: SAMPLE-REFORMATTED.bam
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-reformat-bam.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-reformat-bam`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-reformat-bam [-h] -r TXT FILE [-o FORMATTED BAM] BAM FILE</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">The input file you wish to work with.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-bam_file"><code class="parameter-flags">BAM FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help"></span></dd>
<dt class="parameter parameter-required" id="parameter-report_file"><code class="parameter-flags">-r, --report-file</code> <code class="parameter-metavar">TXT FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A TAB-delimited file produced by `anvi-script-reformat-fasta` to report sequence name changes due to `--simplify-names` flag.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Dealing with the output.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_bam"><code class="parameter-flags">-o, --output-bam</code> <code class="parameter-metavar">FORMATTED BAM</code></dt>
<dd class="parameter-details"><span class="parameter-help">The output BAM file name. If you don&#x27;t specify an output file name, the new BAM file will be reported with the suffix `.reformatted.bam`.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/reformat_bam.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
