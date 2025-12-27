---
layout: program
title: anvi-display-contigs-stats
excerpt: An anvi'o program. Start the anvi&#x27;o interactive interface for viewing or comparing contigs statistics.
categories: [anvio]
comments: false
redirect_from: /m/anvi-display-contigs-stats
image:
  featurerelative: ../../../images/header.png
  display: true
---

Start the anvi&#x27;o interactive interface for viewing or comparing contigs statistics..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/FlorianTrigodet.jpg" /></div><div class="anvio-person-info-box"><a href="/people/floriantrigodet" target="_blank"><span class="anvio-person-name">Florian Trigodet</span></a><div class="anvio-person-social-box"><a href="mailto:trigodet.florian@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FlorianTrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/floriantrigodet" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/watsonar.jpg" /></div><div class="anvio-person-info-box"><a href="/people/watsonar" target="_blank"><span class="anvio-person-name">Andrea Watson</span></a><div class="anvio-person-social-box"><a href="mailto:andreawatson@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/awatsontxt" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/watsonar" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-stats](../../artifacts/contigs-stats) <img src="../../images/icons/STATS.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[svg](../../artifacts/svg) <img src="../../images/icons/SVG.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **helps you make sense of contigs in one or more <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files**, summarizing contig lengths, gene lengths, HMM hits, and single-copy core gene (SCG) based genome estimates.

### Working with single or multiple contigs databases

You can use this program on a single contigs database the following way:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats A.db
</div>

Alternatively, you may use it to compare multiple contigs databases:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats A.db \
                           B.db \
                           (...)
                           X.db
</div>

If you are comparing multiple, each contigs databse will become an individual column in all outputs (columns are labeled with the `project_name` stored in each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>).

### Interactive output

If you run this program on an anvi'o contigs database with default parameters,

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

it will open an interactive interface that displays all the summary data. Here is an example with a few <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files and the output it displays:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats A.db \
                           B.db \
                           C.db \
                           D.db \
                           H.db \
                           I.db
</div>


![An example of the anvi'o interface for contigs stats](../../images/contigs-stats-interface-example.png)

At the top of the page are two graphs:

* The bars in the top graph represent every integer N and L statistic from 1 to 100. The y-axis is the respective N length and the x-axis is the percentage of the total dataset looked at (the exact L and N values can be seen by hovering over each bar). In other words, if you had sorted your contigs by length (from longest to shortest), and walked through each one, every time you had seen another 1 percent of your total dataset, you would add a bar to the graph showing the number of contigs that you had seen (the L statistic) and the length of the one you were looking at at the moment (the N statistic).

* The lower part of the graph tells you about which HMM hits your contigs database has. Each column is a gene in a specific <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>, and the graph tells you how many hits each gene has in your data. (Hover your mouse over the graph to see the specifics of each gene.) The sidebar shows you how many of the genes in this graph were seen exactly that many times. The distribution of SCGs offers an estimate about the number of genomes that are present in this sample that made it all the way to the end of the assembly. Based on this information, and given the data shown in the figure above, one should expect to recover around 1,500 bacterial genomes, 30 archaeal genomes, and no eukaryotic genome from the assembly of sample `A`. See the section about [predicting number of genomes](#how-do-we-predict-the-number-of-genomes) for more details.

Below the graphs are the **contigs stats**, reported in this order:

* **Basic contig stats**
  - Total Length (nucleotides)
  - Num Contigs
  - Num Contigs > 100 kb / 50 kb / 20 kb / 10 kb / 5 kb / 2.5 kb
  - Longest Contig / Shortest Contig (nucleotides)
  - Mean Contig Length (trim 10%): two-sided 10% trimmed mean of contig lengths to down-weight extremes
  - L50 / L75 / L90: number of contigs required to cover 50/75/90% of the assembly when sorted by length
  - N50 / N75 / N90: contig length at the 50/75/90% mark of the assembly when sorted by length
* **Gene stats** (using the default gene caller recorded in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, e.g., Prodigal or pyrodigal-gv)
  - Num Genes
  - Avg Gene Length
  - Avg Gene Length (trim 10%): two-sided 10% trimmed mean of gene lengths
  - Min Gene Length / Max Gene Length
* **HMM hits**
  - For every <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> found in the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (including SCG sets and other sources such as `Ribosomal_RNAs`), the total number of hits; `n/a` is shown for contigs databases where a source is missing.
* **SCG-based estimates for number of populations**
  - For each <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> used for SCGs (for example `Bacteria_71`, `Archaea_76`, `Protista_83`), the predicted number of genomes. See [predicting number of genomes](#how-do-we-predict-the-number-of-genomes).

#### How do we predict the number of genomes?

Our estimates rely on the following assumption: _most_ microbial genomes contain exactly one copy of each single-copy core gene (SCG) in the set of known SCGs for their taxonomic domain.

Under this assumption, the number of HMM hits to a known SCG in a metagenome can serve as an estimate of the number of genomes (of a given taxonomic domain) in that sample. For instance, if you see 5 hits to a bacterial 'Ribosomal L1' gene, you can guess that there are at least 5 bacteria in your sample. Of course, it doesn't make sense to use the number of hits to _just one_ SCG when there are many different ones. So what we do instead is to **compute the statistical mode of the number of hits to each SCG** in a given <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>. This is what the lower graph of HMM hits is showing at the top of the interactive page -- the sideways histogram on the left side indicates the frequency of each total, so the longest bar there is the mode.

Why the mode? Consider that there are various potential issues with annotating SCGs that could throw off your estimates: you could be randomly missing some SCG hits due to incomplete sequencing of some populations in your sample, or systematically missing some SCG hits due to annotation models that don't capture all the diversity within your sample, or finding extra SCG hits due to a technical artifact that splits the annotation of a single gene into two different hits covering separate portions of the gene (we see this sometimes with multi-domain SCGs). In addition, there can be real biological duplications or losses of SCGs that violate the principle of the 'single-copy core' label. We compute the mode across all SCGs to make our estimates more robust to these fluctuations (we chose to use the mode rather than the average because averages are influenced by outliers).

The SCGs for each domain can be annotated in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with <span class="artifact-p">[anvi-run-hmms](/help/main/programs/anvi-run-hmms)</span>, which utilizes three domain-specific SCG sets: the <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s `Bacteria_71`, `Archaea_76`, and `Protista_83`. So what we do is get an estimate for each of these domains, which are the predicted number of genomes that you see in the stats table:

![An example of the domain-specific predictions for number of genomes](../../images/contigs-stats-genome-estimates-example.png)

These domain-specific predictions can be added to get an estimate of the 'Total' number of genomes in the sample.

There is one additional caveat to mention. Sometimes, there is sufficient sequence similarity between single-copy core genes of different domains for a gene to be annotated with HMMs from more than one domain (e.g., a bacterial model and an archaeal model). When this happens, we don't include the affected SCG model in our calculation of the mode. This sometimes leads to differences between the mode shown on the SCG hit graphs and the estimates in the stats table. If this happens in your data, you will see a warning like this on your terminal:

```
WARNING
===============================================
Hello there from the SequencesForHMMHits.get_gene_hit_counts_per_hmm_source()
function. Just so you know, someone asked for SCG HMMs that belong to multiple
sources *not* to be counted, and this will result in 70 models to be removed
from our counts, more specifically: 29 from Bacteria_71, 31 from Archaea_76, 10
from Protista_83. You can run this program with the `--debug` flag if you want
to see a list of the models that we will ignore from each HMM source.
```

We implemented the above strategy to avoid double-counting certain genomes. You can see a discussion of this particular issue [here](https://github.com/merenlab/anvio/issues/2231).

If you want some additional context, this method was originally described in [this blog post](http://merenlab.org/2015/12/07/predicting-number-of-genomes/) before being implemented as part of this program. Also, please note that you can obtain these estimates from any <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> programmatically with the anvi'o Python library as described [here](https://anvio.org/help/main/artifacts/contigs-db/#get-number-of-approximate-number-of-genomes).

### Text output

If you wish to report <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> stats as a supplementary table, a text output will be much more appropriate. If you add the flag `--report-as-text` anvi'o will not attempt to initiate an interactive interface, and instead will report the stats as a TAB-delmited file. The table contains the rows listed above (basic contig stats, gene stats, HMM hits, and SCG-based genome estimates) in the same order:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;report&#45;as&#45;text \
                          &#45;o OUTPUT_FILE_NAME.txt
</div>

There is also another flag you can add to get the output formatted as markdown (`--as-markdown`), which makes it easier to copy-paste to GitHub or other markdown-friendly services. This is how you get a markdown output instead:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;contigs&#45;stats <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;report&#45;as&#45;text \
                          &#45;&#45;as&#45;markdown \
                          &#45;o OUTPUT_FILE_NAME.md
</div>

Here is an example excerpt from a markdown-formatted report (numbers are from a single run and shown only to illustrate structure):

||**`A`**|**`B`**|**`C`**|**`D`**|**`H`**|**`I`**|
|:--|:--|:--|:--|:--|:--|:--|
|Total Length|5747428710|4481865631|7234715430|4279426713|5129708529|5538888058|
|Num Contigs|187938|174549|231236|130052|201889|207768|
|Num Contigs > 100 kb|5716|3330|6938|4605|3385|4328|
|Num Contigs > 50 kb|19157|12848|25123|14142|13723|15809|
|Num Contigs > 20 kb|93053|75234|125814|61939|87667|90509|
|Num Contigs > 10 kb|171706|154977|215106|117645|181195|183506|
|Num Contigs > 5 kb|187448|173850|230546|129702|200903|206274|
|Num Contigs > 2.5 kb|187938|174549|231234|130051|201888|207768|
|Longest Contig|4098864|2443875|4239191|5922001|4180701|4037354|
|Shortest Contig|3040|2548|1776|1217|1092|2829|
|Mean Contig Length (trim 10%)|22166.90|19993.67|23463.96|21949.06|20017.19|20193.47|
|L50|33401|37525|44702|18318|45228|41620|
|L75|87499|87145|111234|55335|103190|101106|
|L90|136328|130024|169718|91311|151730|152691|
|N50|36060|28646|36088|42550|27609|30066|
|N75|20791|18308|21621|21516|18252|18744|
|N90|14773|13176|15672|14631|13503|13548|
|Num Genes|6610990|4825470|7354355|4716548|5706502|6338677|
|Avg Gene Length|799.52|854.62|880.09|838.65|817.23|798.82|
|Avg Gene Length (trim 10%)|715.05|759.31|779.88|753.48|711.29|704.34|
|Min Gene Length|60|60|60|60|60|60|
|Max Gene Length|58464|68517|72867|66381|76293|52899|
|Archaea_76|119701|87059|108961|84365|94398|107056|
|Bacteria_71|243439|170803|190890|173842|165695|210866|
|HMM_DNApolB|1058|579|824|692|1897|1663|
|PFAM_Ribonucleotide_reductase_barrel_domain|5196|3775|4536|3540|5560|5583|
|Protista_83|11617|8939|13233|7687|10098|10089|
|RNA_Polymerase_Type_A|3739|2571|n/a|n/a|n/a|n/a|
|Ribosomal_RNA_16S|3285|2382|2839|2458|2110|2571|
|Ribosomal_RNA_18S|47|21|28|17|31|21|
|bacteria (Bacteria_71)|1584|1062|2636|1263|1321|1374|
|archaea (Archaea_76)|28|63|294|0|215|69|
|eukarya (Protista_83)|0|2|0|1|6|4|

You can easily convert the markdown output into PDF or HTML pages using [pandoc](https://pandoc.org/). For instance running the following command in the previous output,

```
pandoc -V geometry:landscape \
       OUTPUT_FILE_NAME.md \
       -o OUTPUT_FILE_NAME.pdf
```

will results in a PDF file that looks like this:

![an anvi'o display](../../images/display_contigs_stats_pandoc_output.png){:.center-img}


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-display-contigs-stats.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/display_contigs_stats.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
