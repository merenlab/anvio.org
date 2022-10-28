---
layout: program
title: anvi-script-reformat-fasta
excerpt: An anvi'o program. Reformat FASTA file (remove contigs based on length, or based on a given list of deflines, and/or generate an output with simpler names).
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-reformat-fasta
image:
  featurerelative: ../../../images/header.png
  display: true
---

Reformat FASTA file (remove contigs based on length, or based on a given list of deflines, and/or generate an output with simpler names).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/vinisalazar.jpg" /></div><div class="anvio-person-info-box"><a href="/people/vinisalazar" target="_blank"><span class="anvio-person-name">Vini Salazar</span></a><div class="anvio-person-social-box"><a href="https://scholar.google.com/citations?user=P6xo0BsAAAAJ" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:vinicius.salazar@unimelb.edu.au" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/vinisalazar_" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/vinisalazar" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **converts a <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file to a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>.** In other words, it reformats your FASTA formatted file to meet the conditions required of a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>, which is able to be used by other anvi'o programs.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;reformat&#45;fasta <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                           &#45;o <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                           &#45;&#45;simplify&#45;names
</div>

{:.notice}
If you use the flag `--report-file`, it will also create a TAB-delimited file for you to keep track of which defline in the new file corresponds to which defline in the original file.

{:.notice}
This program can work with compressed input FASTA files (i.e., the file name ends with a `.gz` extention) and will report a compressed output FASTA file (i.e., if the output file name ends with a `.gz` extension).

In addition to simplifying names, this program will allow you to do a combination of the operations that include,

* Add a prefix to sequnce names in a FASTA file,
* Remove sequences that are shorter than a specific length or only keep sequences that match to a specific length,
* Remove sequences if they contain more than a number of gap characters or exceed the precentage of gap characters you permit,
* Exclude sequences that match to a list of sequence IDs, or only keep those that match to a list of sequence IDs,
* Enforce a sequence type to replace any character with `N` for nucleotide sequences that are not A, C, T, or G, or replace any character with `X` for amino acid sequences if the character does not match any of the single-letter amino acid characters.

### Removing the short reads is important

If your FASTA file includes a lot of very short contigs, removing them may dramatically improve the performance of the generation and processing of your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. The example below runs the same command while also removing sequences that are shorter than 1,000 nts:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;reformat&#45;fasta <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                           &#45;o <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                           &#45;l 1000 \
                           &#45;&#45;simplify&#45;names
</div>

### Example output

```
anvi-script-reformat-fasta contigs.fa \
                           --simplify-names \
                           --prefix YYY \
                           --min-len 1000 \
                           --seq-type NT \
                           --overwrite-input
```

```
Input ........................................: contigs.fa
Output .......................................: (anvi'o will overwrite your input file)

WHAT WAS THERE
===============================================
Total num contigs ............................: 4,189
Total num nucleotides ........................: 35,766,167

WHAT WAS ASKED
===============================================
Simplify deflines? ...........................: Yes
Add prefix to sequence names? ................: Yes, add 'YYY'
Minimum length of contigs to keep ............: 1,000
Max % gaps allowed ...........................: 100.00%
Max num gaps allowed .........................: 1,000,000
Exclude specific sequences? ..................: No
Keep specific sequences? .....................: No
Enforce sequence type? .......................: Yes, enforce 'NT'

WHAT HAPPENED
===============================================
Contigs removed ..............................: 3,156 (75.34% of all)
Nucleotides removed ..........................: 6,121,239 (17.11% of all)
Nucleotides modified .........................: 161 (0.00045% of all)
Deflines simplified ..........................: True


* The contents of your input file have changed because you used the flag
`--overwrite-input`.

```

{:.warning}
Please use the flag `--overwrite-input` with extreme caution.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-reformat-fasta.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-script-reformat-fasta) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
