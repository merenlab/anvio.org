---
layout: program
title: anvi-db-info
excerpt: An anvi'o program. Access self tables, display values, or set new ones totally on your own risk.
categories: [anvio]
comments: false
redirect_from: /m/anvi-db-info
image:
  featurerelative: ../../../images/header.png
  display: true
---

Access self tables, display values, or set new ones totally on your own risk.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-db](../../artifacts/genes-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Can provide


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.


## Usage


Displays information about an anvi'o database and allows users to modify that information when necessary.

This program is particularly useful for debugging and for quickly verifying database properties - to answer questions such as "Have I run HMMs on this <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> yet?" or "Is this a merged <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>?" This program can also be potentially problematic when used to inappropriately modify database information, so if you need to change something, please proceed with caution.

### What information will I see?

All anvi'o databases contain a table of self-describing information known as the "self" table. This table helps anvi'o track critical facts such as the database type, version number, and creation date. It also stores information about how the database was generated, what types of data it contains, which programs have been executed on it, and other relevant metadata. In general, this table exists to ensure that anvi'o can verify you are performing appropriate operations with your data and prevent errors. `anvi-db-info` displays the contents of the self table when you execute this program on an anvi'o database.

The information in the self table varies depending on the type of database you are examining. For example, a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> self table will indicate the number of contigs (and splits) in the database, whether gene calling has been performed (and with which gene callers), and which functional annotation sources have been used to annotate the genes. A <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> self table will list which samples contain mapping information, how many reads were mapped from each sample, and whether SNVs have been profiled. A <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> (see also <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>) self table will indicate how many KEGG modules are stored in the database and provide the hash value of the database contents. We could continue with additional examples, but the pattern should be clear.

### View information about a database

This is the primary way most users will interact with this program, and it is straightforward. Simply provide the path to any anvi'o database to this program and review the output displayed on your terminal:

<div class="codeblock" markdown="1">
anvi&#45;db&#45;info path&#45;to&#45;DB.db
</div>

For a more specific example, if you have a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> called `CONTIGS.db`, you would examine its self table by executing:
<div class="codeblock" markdown="1">
anvi&#45;db&#45;info CONTIGS.db
</div>

That's all there is to it! Simple and straightforward.

### Example output

Here is an example of what you might see for a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

```
DB Info (no touch)
===============================================
Database Path ................................: CONTIGS.db
Description ..................................: No description is given
Type .........................................: contigs
Variant ......................................: None
Version ......................................: 20


DB Info (no touch also)
===============================================
contigs_db_hash ..............................: d51abf0a
split_length .................................: 20000
kmer_size ....................................: 4
num_contigs ..................................: 4189
total_length .................................: 35766167
num_splits ...................................: 4784
genes_are_called .............................: 1
splits_consider_gene_calls ...................: 1
creation_date ................................: 1466453807.46107
project_name .................................: Infant Gut Contigs from Sharon et al.
gene_level_taxonomy_source ...................:
scg_taxonomy_was_run .........................: 0
external_gene_calls ..........................: 0
external_gene_amino_acid_seqs ................: 0
skip_predict_frame ...........................: 0
scg_taxonomy_database_version ................: None
trna_taxonomy_was_run ........................: 0
trna_taxonomy_database_version ...............: None
modules_db_hash ..............................: 72700e4db2bc
gene_function_sources ........................: KEGG_Module,COG14_CATEGORY,COG14_FUNCTION,KEGG_Class,KOfam

* Please remember that it is never a good idea to change these values. But in some
cases it may be absolutely necessary to update something here, and a programmer
may ask you to run this program and do it. But even then, you should be
extremely careful.

AVAILABLE GENE CALLERS
===============================================
* 'prodigal' (32,265 gene calls)
* 'Ribosomal_RNAs' (9 gene calls)


AVAILABLE FUNCTIONAL ANNOTATION SOURCES
===============================================
* COG14_CATEGORY (21,121 annotations)
* COG14_FUNCTION (21,121 annotations)
* KEGG_Class (2,760 annotations)
* KEGG_Module (2,760 annotations)
* KOfam (14,391 annotations)


AVAILABLE HMM SOURCES
===============================================
* 'Archaea_76' (type 'singlecopy' with 76 models and 404 hits)
* 'Bacteria_71' (type 'singlecopy' with 71 models and 674 hits)
* 'Protista_83' (type 'singlecopy' with 83 models and 100 hits)
* 'Ribosomal_RNAs' (type 'Ribosomal_RNAs' with 12 models and 9 hits)
```

Most of this output is self-explanatory. However, one aspect that may not be immediately obvious is that in many cases we use `0` to indicate 'False' and `1` to indicate 'True'. For this example, you can see that SCG taxonomy has been run on this database, but tRNA taxonomy has not.

### Modifying database information
We must emphasize - you probably should not do this. Manually changing values in the self table has the potential to cause downstream problems because it allows you to bypass some of anvi'o's internal sanity checks that prevent inappropriate operations. If you modify these values and subsequently encounter unexpected errors, this should not be surprising.

That said, sometimes advanced users need to make modifications, and `anvi-db-info` provides this capability. If a programmer has directed you to update a value in the self table or if you are proceeding independently, this is the process. Let's modify the `project_name` value as an example because it is primarily descriptive and relatively safe:

<div class="codeblock" markdown="1">
anvi&#45;db&#45;info &#45;&#45;self&#45;key project_name &#45;&#45;self&#45;value "test" CONTIGS.db
</div>

If you execute this command, you will see a warning indicating the current value of `project_name` and what it will be changed to, but the value will not actually be modified yet. If you are certain you want to proceed, you must then execute:

<div class="codeblock" markdown="1">
anvi&#45;db&#45;info &#45;&#45;self&#45;key project_name &#45;&#45;self&#45;value "test" CONTIGS.db  &#45;&#45;just&#45;do&#45;it
</div>

Then you may proceed with your analysis.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-db-info.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-db-info) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
