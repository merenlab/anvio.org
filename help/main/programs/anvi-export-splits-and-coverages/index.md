---
layout: program
title: anvi-export-splits-and-coverages
excerpt: An anvi'o program. Export split or contig sequences and coverages across samples stored in an anvi&#x27;o profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-export-splits-and-coverages
image:
  featurerelative: ../../../images/header.png
  display: true
---

Export split or contig sequences and coverages across samples stored in an anvi&#x27;o profile database. This program is especially useful if you would like to &#x27;bin&#x27; your splits or contigs outside of anvi&#x27;o and import the binning results into anvi&#x27;o using `anvi-import-collection` program.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[coverages-txt](../../artifacts/coverages-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **gives you the coverage information in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> as external files**. Basically, if you want to take that information in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> out of anvio, this is for you.

Once you input your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> you used to generate it, it will create a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> that lists your contigs for you, as well as a <span class="artifact-n">[coverages-txt](/help/main/artifacts/coverages-txt)</span>, which describes your coverage information.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;splits&#45;and&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

If your coverages are skewed by outlier positions, consider using Q2Q3-coverages instead.

<div class="codeblock" markdown="1">
anvi&#45;export&#45;splits&#45;and&#45;coverages &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                 &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                 &#45;&#45;use&#45;Q2Q3&#45;coverages
</div>

### Contigs or splits?

*Wondering what the difference is? Check out [our vocab page](http://merenlab.org/vocabulary/#split).*

By default, this program will give you the sequences of your splits, but will look at coverage data in terms of the parent contig. If you want to get coverage information for your splits, use `--splits-mode`. Alternatively, you can ask the program to `--report-contigs` to look at contig sequences instead.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-export-splits-and-coverages.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-export-splits-and-coverages`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-export-splits-and-coverages [-h] -p PROFILE_DB -c CONTIGS_DB [-o DIR_PATH] [-O FILENAME_PREFIX] [--splits-mode] [--report-contigs] [--use-Q2Q3-coverages]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
<dt class="parameter parameter-switch" id="parameter-splits_mode"><code class="parameter-flags">--splits-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Specify this flag if you would like to output coverages of individual &#x27;splits&#x27;, rather than their &#x27;parent&#x27; contig coverages.</span></dd>
<dt class="parameter parameter-switch" id="parameter-report_contigs"><code class="parameter-flags">--report-contigs</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default this program reports sequences and their coverages for &#x27;splits&#x27;. By using this flag, you can report contig sequences and coverages instead. For obvious reasons, you can&#x27;t use this flag with `--splits-mode` flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-use_q2q3_coverages"><code class="parameter-flags">--use-Q2Q3-coverages</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default this program reports the mean coverage of a split (or contig, see --report-contigs) for each sample. By using this flag, you can report the mean Q2Q3 coverage by excluding 25 percent of the nucleotide positions with the smallest coverage values, and 25 percent of the nucleotide positions with the largest coverage values. The hope is that this removes &#x27;outlier&#x27; positions resulting from non-specific mapping, etc. that skew the mean coverage estimate.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/export_splits_and_coverages.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
