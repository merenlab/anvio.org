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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-split`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-split [-h] [-p PAN_OR_PROFILE_DB] [-c CONTIGS_DB] [-g GENOMES_STORAGE] [--skip-variability-tables] [--compress-auxiliary-data] [-C COLLECTION_NAME] [-b BIN_NAME] [--split-by-contig-classification] [--classes-to-keep CLASS_NAMES] [--only-use-classification-source SOURCE] [--allow-multiple-classifications] [--mark-conflicting-contigs-as-ambiguous] [--collection-txt FILE] [-o DIR_PATH] [--list-collections] [--skip-hierarchical-clustering] [--enforce-hierarchical-clustering] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">You will either provide a PROFILE/CONTIGS or a PAN/GENOMES STORAGE pair here. Alternatively, provide only a contigs database to use contig-only split mode.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-profilecontigs-options">
<header class="parameter-group-header"><span class="parameter-group-title">PROFILE/CONTIGS OPTIONS</span> <span class="parameter-group-description">Some options that are specific to this only.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_variability_tables"><code class="parameter-flags">--skip-variability-tables</code></dt>
<dd class="parameter-details"><span class="parameter-help">Processing variability tables in profile database might take a very long time. With this flag you will be asking anvi&#x27;o to skip them.</span></dd>
<dt class="parameter parameter-switch" id="parameter-compress_auxiliary_data"><code class="parameter-flags">--compress-auxiliary-data</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the auxiliary data file in the resulting output will be compressed. This saves space, but it takes long. Also, if you are planning to compress the entire later using GZIP, it is even useless to do. But you are the boss!</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-collection">
<header class="parameter-group-header"><span class="parameter-group-title">COLLECTION</span> <span class="parameter-group-description">You should provide a valid collection name. If you do not provide bin names, the program will generate an output for each bin in your collection separately.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-contig-only-mode">
<header class="parameter-group-header"><span class="parameter-group-title">CONTIG-ONLY MODE</span> <span class="parameter-group-description">Arguments for splitting a contigs database without a profile database. Provide --contigs-db without --pan-or-profile-db to activate this mode.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-split_by_contig_classification"><code class="parameter-flags">--split-by-contig-classification</code></dt>
<dd class="parameter-details"><span class="parameter-help">Split the contigs database using classification data stored in its contig classification table (populated by anvi-import-contig-classification). Each class becomes a separate output database.</span></dd>
<dt class="parameter" id="parameter-classes_to_keep"><code class="parameter-flags">--classes-to-keep</code> <code class="parameter-metavar">CLASS_NAMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">A comma-separated list of class names (e.g., &#x27;virus,plasmid&#x27;) or class integers (e.g., &#x27;2,3&#x27;) to include in the output. Only relevant with --split-by-contig-classification. If not provided, all classes present in the table will be split into separate databases.</span></dd>
<dt class="parameter" id="parameter-only_use_classification_source"><code class="parameter-flags">--only-use-classification-source</code> <code class="parameter-metavar">SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Only use classifications from this source when splitting. This avoids conflicts between different classification sources. You have to use a source name that exists in the contig classification table.</span></dd>
<dt class="parameter parameter-switch" id="parameter-allow_multiple_classifications"><code class="parameter-flags">--allow-multiple-classifications</code></dt>
<dd class="parameter-details"><span class="parameter-help">If contigs have multiple classifications across sources, allow them to appear in all output splits they were assigned to. Another way to handle conflicts between different classification sources.</span></dd>
<dt class="parameter parameter-switch" id="parameter-mark_conflicting_contigs_as_ambiguous"><code class="parameter-flags">--mark-conflicting-contigs-as-ambiguous</code></dt>
<dd class="parameter-details"><span class="parameter-help">When contigs have conflicting classifications across sources, redirect them into a split called &#x27;ambiguous&#x27; instead of raising an error. A report file for the redirected contigs and their original classifications will also be written.</span></dd>
<dt class="parameter" id="parameter-collection_txt"><code class="parameter-flags">--collection-txt</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column, TAB-delimited file with no header associating each contig name (column 1) with a bin name (column 2). Each bin becomes a separate output contigs database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Where do we want the resulting split profiles to be stored.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span> <span class="parameter-group-description">Stuff that you rarely need, but you really really need when the time comes. Following parameters will aply to each of the resulting anvi&#x27;o profile that will be split from the mother anvi&#x27;o profile.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_collections"><code class="parameter-flags">--list-collections</code></dt>
<dd class="parameter-details"><span class="parameter-help">Show available collections and exit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_hierarchical_clustering"><code class="parameter-flags">--skip-hierarchical-clustering</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you are not planning to use the interactive interface (or if you have other means to add a tree of contigs in the database) you may skip the step where hierarchical clustering of your items are preformed based on default clustering recipes matching to your database type.</span></dd>
<dt class="parameter parameter-switch" id="parameter-enforce_hierarchical_clustering"><code class="parameter-flags">--enforce-hierarchical-clustering</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you have more than 25,000 splits in your merged profile, anvi-merge will automatically skip the hierarchical clustering of splits (by setting --skip-hierarchical-clustering flag on). This is due to the fact that computational time required for hierarchical clustering increases exponentially with the number of items being clustered. Based on our experience we decided that 25,000 splits is about the maximum we should try. However, this is not a theoretical limit, and you can overwrite this heuristic by using this flag, which would tell anvi&#x27;o to attempt to cluster splits regardless.</span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. If you do not use this flag, the default distance metric will be used for each clustering configuration which is &quot;euclidean&quot;.</span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The same story with the `--distance`, except, the system default for this one is ward.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Anvi-split in action in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#splitting-the-pangenome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/split.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
