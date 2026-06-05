---
layout: program
title: anvi-split
excerpt: An anvi'o program. Split an anvi&#x27;o pan or profile database into smaller, self-contained projects.
categories: [anvio]
comments: false
redirect_from: /m/anvi-split
image:
  featurerelative: ../../../images/header.png
  display: true
---

Split an anvi&#x27;o pan or profile database into smaller, self-contained projects. Black magic..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/tucker4.jpeg" /></div><div class="anvio-person-info-box"><a href="/people/tucker4" target="_blank"><span class="anvio-person-name">Sarah Tucker</span></a><div class="anvio-person-social-box"><a href="https://sarahjtucker.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:stucker@mbl.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/tucker4" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-xixi.jpg" /></div><div class="anvio-person-info-box"><a href="/people/u-xixi" target="_blank"><span class="anvio-person-name">Xi Chen (Xixi)</span></a><div class="anvio-person-social-box"><a href="mailto:xi.chen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/u-xixi" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/avrilhoyningen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/avihuene" target="_blank"><span class="anvio-person-name">Avril Hoyningen-Huene</span></a><div class="anvio-person-social-box"><a href="mailto:avril.hoyningen@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/avihuene" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ahenoch.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ahenoch" target="_blank"><span class="anvio-person-name">Alexander Henoch</span></a><div class="anvio-person-social-box"><a href="mailto:alexander.henoch@hifmb.de" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/ahenoch" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/guillermo_rangel.jpg" /></div><div class="anvio-person-info-box"><a href="/people/guille0387" target="_blank"><span class="anvio-person-name">Guillermo Rangel-Pineros</span></a><div class="anvio-person-social-box"><a href="mailto:guillermo.pineros@sund.ku.dk" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://github.com/guille0387" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contig-classification](../../artifacts/contig-classification) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection-txt](../../artifacts/collection-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[split-bins](../../artifacts/split-bins) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


Creates individual, self-contained anvi'o projects for one or more <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s stored in an anvi'o <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>. This program may be useful if you would like to share a subset of an anvi'o project with the community or a collaborator, or focus on a particular aspect of your data without having to initialize very large files. Altogether, <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span> promotoes reproducibility, openness, and collaboration.

The program can generate <span class="artifact-n">[split-bins](/help/main/artifacts/split-bins)</span> from metagenomes, from pangenomes, or from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> on its own (without a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>).

Each of the resulting directories in your output folder will contain a stand-alone anvi'o project that can be used or shared without requiring access to any files of the original (larger) dataset.

## Splitting metagenomes and pangenomes

To split bins from a metagenome, you can provide the program <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span> with a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair. To split gene clusters from a pangenome, you can provide it with a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> pair. In both cases you will also need a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>. If you don't provide any <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> names, the program will create individual directories for each bin that is found in your collection. You can also limit the output to a single bin.

### An example run

Assume you have a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> has a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> with three bins, which are (very creatively) called `BIN_1`, `BIN_2`, and `BIN_3`.

If you ran the following code:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
           &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
           &#45;o OUTPUT
</div>

You would get 3 new pairs of <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files, one for each bin, located in `OUTPUT/BIN_1/`, `OUTPUT/BIN_2/`, and `OUTPUT/BIN_3/`.

Alternatively, you can specify a bin name to limit the reported bins:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
           &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
           &#45;&#45;bin&#45;id BIN_1
           &#45;o OUTPUT
</div>

Similarly, if you provide a <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> pair, the directories will contain their own smaller <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> and <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> pairs.

You can always use the program <span class="artifact-p">[anvi-show-collections-and-bins](/help/main/programs/anvi-show-collections-and-bins)</span> to learn available <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and <span class="artifact-n">[bin](/help/main/artifacts/bin)</span> names in a given <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

### Performance

For extremely large datasets, splitting bins may be difficult. For metagenomics projets you can,

* Use the flag `--skip-variability-tables` to NOT report single-nucleotide variants or single-amino acid variants in your split bins (which can reach hundreds of millions of lines of information for large and complex metagenomes), and/or,
* Use the flag `--compress-auxiliary-data` to save space. While this is a great option for data that is meant to be stored long-term and shared with the community, the compressed file would need to be manually decompressed by the end-user prior to using the split bin.

## Splitting a contigs database without a profile database

<span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span> can split a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> on its own, without any <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. Each resulting directory will contain a self-contained <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> for that group of contigs. Two input modes are available. You will need either a <span class="artifact-n">[collection-txt](/help/main/artifacts/collection-txt)</span> file mapping contigs to bins, or per-contig domain-level classification data previously imported with <span class="artifact-p">[anvi-import-contig-classification](/help/main/programs/anvi-import-contig-classification)</span>.

### Using an external collection file

You can provide a two-column, TAB-delimited file with no header, where column 1 is the contig name and column 2 is the bin name:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
           &#45;&#45;collection&#45;txt <span class="artifact&#45;n">[collection&#45;txt](/help/main/artifacts/collection&#45;txt)</span> \
           &#45;o OUTPUT
</div>

### Using contig classification data

If your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> has classification data imported with <span class="artifact-p">[anvi-import-contig-classification](/help/main/programs/anvi-import-contig-classification)</span>, you can split it by contig class:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
           &#45;&#45;split&#45;by&#45;contig&#45;classification \
           &#45;o OUTPUT
</div>

Each class (e.g., `virus`, `plasmid`, `non-eukaryotic`) will become a separate output database. You can limit the output to specific classes with `--classes-to-keep`:

<div class="codeblock" markdown="1">
anvi&#45;split &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
           &#45;&#45;split&#45;by&#45;contig&#45;classification \
           &#45;&#45;classes&#45;to&#45;keep virus,plasmid \
           &#45;o OUTPUT
</div>

#### Handling classification conflicts

If your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> has <span class="artifact-n">[contig-classification](/help/main/artifacts/contig-classification)</span> data from multiple sources, the same contig may be assigned different classes by different sources. <span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span> will raise an error when it encounters such conflicts. For example, the following classification table has data from two sources, `whokaryote` and `alien`. Both agree on `contig1` through `contig3`, but disagree on `contig4` through `contig6` — `whokaryote` assigns them class `1` (eukaryotic) while `alien` assigns them class `2` (virus):

| contig | class | source | tool_classification | confidence |
|--------|-------|--------|---------------------|------------|
| contig1 | 1 | whokaryote | eukaryote | NA |
| contig2 | 1 | whokaryote | eukaryote | NA |
| contig3 | 1 | whokaryote | eukaryote | NA |
| contig4 | 1 | whokaryote | eukaryote | NA |
| contig5 | 1 | whokaryote | eukaryote | NA |
| contig6 | 1 | whokaryote | eukaryote | NA |
| contig1 | 1 | alien | eukaryote | NA |
| contig2 | 1 | alien | eukaryote | NA |
| contig3 | 1 | alien | eukaryote | NA |
| contig4 | 2 | alien | virus | NA |
| contig5 | 2 | alien | virus | NA |
| contig6 | 2 | alien | virus | NA |

<span class="artifact-p">[anvi-split](/help/main/programs/anvi-split)</span> will refuse to proceed until you decide how to handle them. You have three options:

* `--only-use-classification-source SOURCE`: only use classifications from one source, ignoring the other sources entirely.
* `--allow-multiple-classifications`: allow conflicting contigs to appear in all output splits they were assigned to.
* `--mark-conflicting-contigs-as-ambiguous`: redirect conflicting contigs into a separate `ambiguous` split and write a report file documenting their original classifications.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-split.md) to update this information.


## Additional Resources


* [Anvi-split in action in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#splitting-the-pangenome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/split.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
