---
layout: program
title: anvi-script-get-coverage-from-bam
excerpt: An anvi'o program. Get nucleotide-level, contig-level, or bin-level coverage values from a BAM file very rapidly.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-get-coverage-from-bam
image:
  featurerelative: ../../../images/header.png
  display: true
---

Get nucleotide-level, contig-level, or bin-level coverage values from a BAM file very rapidly. For other anvi&#x27;o programs that are designed to profile BAM files, see `anvi-profile` and `anvi-profile-blitz`.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[collection-txt](../../artifacts/collection-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[coverages-txt](../../artifacts/coverages-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program gets the coverage values from a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span>, and puts them into a <span class="artifact-n">[coverages-txt](/help/main/artifacts/coverages-txt)</span>.

You must provide a BAM file, but there are three ways you can choose contigs to analyze within that file:
1. Give a contig name. Here, you can only report coverage per nucleotide position (In this example, the user is specifically asking for this anyway with the `-m` flag)

    <div class="codeblock" markdown="1">
    anvi&#45;script&#45;get&#45;coverage&#45;from&#45;bam &#45;b <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
                                     &#45;c NAME_OF_CONTIG \
                                     &#45;m pos
    </div>

2. Give a file that contains a list of contigs (one per line; same format as the `--contigs-of-interest` tag for <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span>). Here, you can ask for the contig averages (as in this example) or nucleotide position coverage.

    <div class="codeblock" markdown="1">
    anvi&#45;script&#45;get&#45;coverage&#45;from&#45;bam &#45;b <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
                                     &#45;l NAME_OF_FILE \
                                     &#45;m contig
    </div>

3. Give a <span class="artifact-n">[collection-txt](/help/main/artifacts/collection-txt)</span> file for the program to determine the coverage for all contigs in those bins. Here, you can ask for the contig averages, nucleotide position coverage or coverage per bin (as in this example).

    <div class="codeblock" markdown="1">
    anvi&#45;script&#45;get&#45;coverage&#45;from&#45;bam &#45;b <span class="artifact&#45;n">[bam&#45;file](/help/main/artifacts/bam&#45;file)</span> \
                                     &#45;C <span class="artifact&#45;n">[collection&#45;txt](/help/main/artifacts/collection&#45;txt)</span> \
                                     &#45;m bin
    </div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-get-coverage-from-bam.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-get-coverage-from-bam`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-get-coverage-from-bam [-h] -b BAM_FILE [-c CONTIG_NAME] [-l CONTIGS_OF_INTEREST] [-C COLLECTION_TXT] -m {pos,contig,bin} -o OUTPUT [--skip-contigs-check]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-required">
<header class="parameter-group-header"><span class="parameter-group-title">REQUIRED</span> <span class="parameter-group-description">Declare your BAM file here</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-bam_file"><code class="parameter-flags">-b, --bam-file</code> <code class="parameter-metavar">BAM_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Sorted and indexed BAM file to analyze.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-option-1">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #1</span> <span class="parameter-group-description">This is the first and simplest option. Provide a contig name</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contig_name"><code class="parameter-flags">-c, --contig-name</code> <code class="parameter-metavar">CONTIG_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The name of a single contig</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-option-2">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #2</span> <span class="parameter-group-description">Use this to characterize coverage for a list of contigs</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_of_interest"><code class="parameter-flags">-l, --contigs-of-interest</code> <code class="parameter-metavar">CONTIGS_OF_INTEREST</code></dt>
<dd class="parameter-details"><span class="parameter-help">Provide here a file where each line is a contig name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-option-3">
<header class="parameter-group-header"><span class="parameter-group-title">OPTION #3</span> <span class="parameter-group-description">Use this to characterize coverage for a collection of contig sets (bins)</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_txt"><code class="parameter-flags">-C, --collection-txt</code> <code class="parameter-metavar">COLLECTION_TXT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Provide a collection text file. The first column should be contig names and the second column should be the bin to which the contig belongs. If you have a collection from a profile database, you can export it in this format with anvi-export-collection.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-method">
<header class="parameter-group-header"><span class="parameter-group-title">METHOD</span> <span class="parameter-group-description">Do you want to report coverage at a nucleotide level? Contig averages? Bin averages? Pick the method here.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-method"><code class="parameter-flags">-m, --method</code> <code class="parameter-metavar">METHOD</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">If pos, each nucleotide position will be reported (valid for OPTION #1, #2, #3). If contig, report contains contig averages (valid for OPTION #2, #3). If bin, report contains bin averages (valid for OPTION #3).</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">pos</code> <code class="parameter-choice">contig</code> <code class="parameter-choice">bin</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Your output file is decided here. Keep in mind if you use --method pos, this file will contain as many lines as there are nucleotides defined by your input option</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output"><code class="parameter-flags">-o, --output</code> <code class="parameter-metavar">OUTPUT</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Output tab-delimited file path. Will overwrite existing files.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span> <span class="parameter-group-description">All the misfits</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_contigs_check"><code class="parameter-flags">--skip-contigs-check</code></dt>
<dd class="parameter-details"><span class="parameter-help">Checking to see that your collection text or contigs of interest file has correct names can take a really long time if you have a large enough number of contigs. Use this flag to forego checking, and find out the hard way.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_coverage_from_bam.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
