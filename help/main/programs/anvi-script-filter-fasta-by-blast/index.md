---
layout: program
title: anvi-script-filter-fasta-by-blast
excerpt: An anvi'o program. Filter FASTA file according to BLAST table (remove sequences with bad BLAST alignment).
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-filter-fasta-by-blast
image:
  featurerelative: ../../../images/header.png
  display: true
---

Filter FASTA file according to BLAST table (remove sequences with bad BLAST alignment).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/no-avatar.png" /></div><div class="anvio-person-info-box"><a href="/people/blankenberg" target="_blank"><span class="anvio-person-name">Daniel Blankenberg</span></a><div class="anvio-person-social-box"><a href="mailto:blanked2@ccf.org" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/blankenberg" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[blast-table](../../artifacts/blast-table) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Usage


This program takes a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> and <span class="artifact-n">[blast-table](/help/main/artifacts/blast-table)</span> and removes sequences without BLAST hits of a certain level of confidence.

For example, you could use this program to filter out sequences that do not have high-confidence taxonomy assignments before running a phylogenomic analysis.

To run this program, you'll need to provide the <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> that you're planning to filter, the <span class="artifact-n">[blast-table](/help/main/artifacts/blast-table)</span>, a list of the column headers in your <span class="artifact-n">[blast-table](/help/main/artifacts/blast-table)</span> (as given to BLAST by `-outfmt`), and a `proper_pident` threshold at which to remove the sequences. This threshold will remove sequences less than the given percent of the query amino acids that were identical to the corresponding matched amino acids. Note that this diffres from the `pident` blast parameter because it doesn't include unaligned regions.

For example, if you ran

<div class="codeblock" markdown="1">
anvi&#45;script&#45;filter&#45;fasta&#45;by&#45;blast &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                                  &#45;o path/to/<span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                                  &#45;b <span class="artifact&#45;n">[blast&#45;table](/help/main/artifacts/blast&#45;table)</span> \
                                  &#45;s qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qlen slen \
                                  &#45;t 30
</div>

Then the output file would be a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> that contains only the sequences in your input file that have a hit in your blast table with more than 30 percent of the amino acids aligned.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-filter-fasta-by-blast.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-filter-fasta-by-blast`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-filter-fasta-by-blast [-h] [-f FASTA file] [-o FILE_PATH] -b TAB DELIMITED FILE -s OUTFMT -t THRESHOLD [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A FASTA-formatted input file.</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-required" id="parameter-blast_output"><code class="parameter-flags">-b, --blast-output</code> <code class="parameter-metavar">TAB DELIMITED FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">BLAST table generated with blastp. `--outfmt 6` as the output format is assumed.</span></dd>
<dt class="parameter parameter-required" id="parameter-outfmt"><code class="parameter-flags">-s, --outfmt</code> <code class="parameter-metavar">OUTFMT</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Specify the column ordering of your BLAST report. We add the following paramter to our BLAST searches so the output report contains the `qlen` field, which is not included by default: `-outfmt &#x27;6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qlen slen&#x27;`. You may have used a different `-outfmt` paramter, and you should use this parameter to explicitly define the column names in your output file. For instance, if you had used the parameter mentioned above, then the correct version of this parameter would be: &quot;qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qlen slen&quot;. Regardless of the BLAST output format, your columns MUST contain the following parameters for this program to work properly: &#x27;qseqid&#x27;, &#x27;bitscore&#x27;, &#x27;length&#x27;, &#x27;qlen&#x27;, and &#x27;pident&#x27;.</span></dd>
<dt class="parameter parameter-required" id="parameter-threshold"><code class="parameter-flags">-t, --threshold</code> <code class="parameter-metavar">THRESHOLD</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">What `proper_pident` threshold do you want to use for filtering out sequences whose top bit-score matches have `proper_pident`s less than this threshold? We have defined `proper_pident` to be the percentage of the query amino acids that both aligned to and were identical to the corresponding matched amino acid. Note that the `pident` parameter output by BLAST does not include regions of the query sequence unaligned to the matched sequence, whereas `proper_pident` does. For example, a sequence that&#x27;s only half aligned by a match but with 100% identity at matched regions has a `pident` of 100 but a `proper_pident` of 50. The default is 30.0%.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">30.0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/filter_fasta_by_blast.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
