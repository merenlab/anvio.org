---
layout: program
title: anvi-report-linkmers
excerpt: An anvi'o program. Reports sequences stored in one or more BAM files that cover one of more specific nucleotide positions in a reference.
categories: [anvio]
comments: false
redirect_from: /m/anvi-report-linkmers
image:
  featurerelative: ../../../images/header.png
  display: true
---

Reports sequences stored in one or more BAM files that cover one of more specific nucleotide positions in a reference.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[bam-file](../../artifacts/bam-file) <img src="../../images/icons/BAM.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[linkmers-txt](../../artifacts/linkmers-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


Reports sequences stored in a <span class="artifact-n">[bam-file](/help/main/artifacts/bam-file)</span> file that cover one of more specific nucleotide positions in a reference.

### Basic mode of operation

Assume you wish to recover reads stored in one or more BAM files, where the matching reads contain at least one nucleotide position that align to a nucleotide position `nucleotide_position_N` in a contig `contig_name_X`. In that case, the user would first generate a two column TAB-delmited file, for example `positions_for_linkmers.txt` with no header line,


<table>
  <tbody>
    <tr>
      <td> contig_name_X </td>
      <td> nucleotide_position_N </td>
    </tr>
  </tbody>
</table>

And run the program this way to recover the short reads from this way:

```
anvi-report-linkmers --contigs-and-positions positions_for_linkmers.txt \
                     -i SAMPLE_01.bam SAMPLE_02.bam SAMPLE_03.bam (...) \
                     -o linkmers.txt
```

The user can define multiple contigs in the input file, and one or more nucleotide positions for each one of them:

<table>
<tbody>
<tr>
      <td> contig_name_X </td>
      <td> nucleotide_position_01,nucleotide_position_02,nucleotide_position_03</td>
</tr>
<tr>
      <td> contig_name_Y </td>
      <td> nucleotide_position_04 </td>
</tr>
<tr>
      <td> contig_name_Z </td>
      <td> nucleotide_position_05,nucleotide_position_06 </td>
</tr>
</tbody>
</table>

The resulting <span class="artifact-n">[linkmers-txt](/help/main/artifacts/linkmers-txt)</span> would include all short reads that match any of these critera

### Complete or incomplete links?

Using the `--only-complete-links` flag, the user can enforce whether only complete links should be reported where each reported short read must cover each nucleotide position for a given contig.

Please note that if the nucleotide positions chosen for a given contig are too distant from each other given the short read length, zero reads may satisfy the complete links criterion.

Having complete links, however, will enable [oligotyping](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.12114) analyses on **metagenomic reads** through the anvi'o program <span class="artifact-p">[anvi-oligotype-linkmers](/help/main/programs/anvi-oligotype-linkmers)</span>.

### See this program in action

[http://merenlab.org/2015/12/09/musings-over-commamox/](http://merenlab.org/2015/12/09/musings-over-commamox/)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-report-linkmers.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-report-linkmers`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-report-linkmers [-h] -i INPUT_BAM(S) [INPUT_BAM(S) ...] --contigs-and-positions CONTIGS_AND_POS [--only-complete-links] -o FILE_PATH [--list-contigs]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-input_files"><code class="parameter-flags">-i, --input-files</code> <code class="parameter-metavar">INPUT_BAM(S)</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Sorted and indexed BAM files to analyze. It is essential that all BAM files must be the result of mappings against the same contigs.</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_and_positions"><code class="parameter-flags">--contigs-and-positions</code> <code class="parameter-metavar">CONTIGS_AND_POS</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">This is the file where you list the contigs, and nucleotide positions you are interested in. This is supposed to be a TAB-delimited file with two columns. In each line, the first column should be the contig name, and the second column should be the comma-separated list of integers for nucleotide positions.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_complete_links"><code class="parameter-flags">--only-complete-links</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, only reads that cover all positions will be reported. It is necessary to use this flag if you want to perform oligotyping-like analyses on matching reads.</span></dd>
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_contigs"><code class="parameter-flags">--list-contigs</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the program will list contigs in the BAM file and exit gracefully without any further analysis.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/report_linkmers.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
