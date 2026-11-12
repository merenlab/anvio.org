---
layout: program
title: anvi-estimate-scg-taxonomy
excerpt: An anvi'o program. Estimates taxonomy at genome and metagenome level.
categories: [anvio]
comments: false
redirect_from: /m/anvi-estimate-scg-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---

Estimates taxonomy at genome and metagenome level. This program is the entry point to estimate taxonomy for a given set of contigs (i.e., all contigs in a contigs database, or contigs described in collections as bins). For this, it uses single-copy core gene sequences and the GTDB database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/qclayssen.jpg" /></div><div class="anvio-person-info-box"><a href="/people/qclayssen" target="_blank"><span class="anvio-person-name">Quentin Clayssen</span></a><div class="anvio-person-social-box"><a href="mailto:quentin.clayssen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ClayssenQ" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/qclayssen" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[scgs-taxonomy](../../artifacts/scgs-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[metagenomes](../../artifacts/metagenomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-taxonomy](../../artifacts/genome-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-taxonomy-txt](../../artifacts/genome-taxonomy-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program makes **quick taxonomy estimates for genomes, metagenomes, or bins stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>** using single-copy core genes.

You can run this program on an anvi'o contigs database only if you already have setup the necessary databases to assign taxonomy on your computer by running <span class="artifact-p">[anvi-setup-scg-taxonomy](/help/main/programs/anvi-setup-scg-taxonomy)</span> and annotated the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> you are working with using <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span>, which are described in greater detail in [this document](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/)), which also offers a [comprehensive overview](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/#estimating-taxonomy-in-the-terminal) of what <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> can do.

Keep in mind that the scg-taxonomy framework currently uses single-copy core genes found in [GTDB](https://gtdb.ecogenomic.org/) genomes, thus it will not work well for low-completion, viral, or eukaryotic genomes.

This same functionality <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> is implicitly accessed thorugh the anvi'o <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface, when you turn on real-time taxonomy estimation for bins. So, if you've ever wondered where those estimates were coming from, now you know.

So, what can this program do?

### 1. Estimate the taxonomy of a single genome

By default, this program wll assume your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> contains only one genome, and will try to use the single-copy core genes (that were associated with taxonomy when you ran <span class="artifact-p">[anvi-run-scg-taxonomy](/help/main/programs/anvi-run-scg-taxonomy)</span>) to try to identify the taxonomy of your genome.

When you run

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

It will give you the best taxonomy hit for your genome. If you would like to see how it got there (by looking at the hits for each of the single-copy core genes), just use the `--debug` flag to see more information, as so:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;debug
</div>

### 2. Estimate the taxa within a metagenome

By running this program in metagenome mode, it will assume that your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> contains multiple genomes and will try to give you an overview of the taxa within it. To do this, it will determine which single-copy core gene has the most hits in your contigs (for example `Ribosomal_S6`), and then will look at the taxnomy hits for that gene across your contigs. The output will be this list of taxonomy results.

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode
</div>

If you want to look at a specific gene (instead of the one with the most hits), you can also tell it to do that. For example, to tell it to look at Ribosomal_S9, run

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;&#45;scg&#45;name Ribosomal_S9
</div>

Without a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, the output will report the **frequency** of each taxon — i.e., how many times that taxon was detected across the SCG hits in your contigs database. If you only care whether a taxon is present or absent rather than how many times it was detected, you can use the `--presence-absence-only` flag to get a binary report instead:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;&#45;presence&#45;absence&#45;only
</div>

### 3. Look at the taxonomic composition as a tree

The table above answers the question "what is the taxonomy of each of these hits?", which is not the same question as "what is in here?". Since each row spells out an entire lineage, a taxon that occurs 30 times occupies 30 nearly identical rows, and the shape of the community is nowhere to be seen. If that is what you are after, add the flag `--tree-output`:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;&#45;tree&#45;output
</div>

which will show you the very same results as a hierarchical tree instead (please remember that the tree here has no phylogenetic order or meaning in its current implementation):

```
All Ribosomal_S11 copies (96)
├── Bacteria (94)
│   ├── Campylobacterota (36)
│   │   └── Campylobacteria (36)
│   │       └── Campylobacterales (36)
│   ├── Desulfobacterota (16)
│   │   ├── Desulfobulbia (9)
│   │   │   └── Desulfobulbales (9)
│   │   ├── Desulfobacteria (3)
│   │   │   └── Desulfobacterales (3)
(...)
└── Archaea (2)
    └── Halobacteriota (2)
        └── Methanosarcinia (2)
            └── Methanosarcinales (2)
```

The number next to each taxon is the number of things that were assigned to it **or to anything under it**, which is why the numbers of a node's children always add up to the number of the node itself. What is being counted depends on how you ran the program: copies of the single-copy core gene anvi'o surveyed in metagenome mode (`Ribosomal_S11` in the example above), bins if you gave anvi'o a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, and genomes otherwise. The root of the tree spells out which one it is, so you never have to guess.

Hits that could not be resolved all the way down show up in an explicit `Unknown_*` node at the level where they ran out of names (as in `Unknown_genera`) rather than being quietly dropped, so nothing goes missing from the tree.

By default the tree does not go deeper than genus names, since species-level assignments from single-copy core genes are often absent or not particularly trustworthy. If you want a different cutoff, use `--tree-output-level`:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;&#45;tree&#45;output \
                           &#45;&#45;tree&#45;output&#45;level t_family
</div>

{:.notice}
Please note that `--tree-output-level` has nothing to do with the `--taxonomic-level` parameter, and only influences the tree that is displayed in your terminal.

Two small things to know about this flag. First, it only changes what is displayed: if you also ask for an output file with `-o`, that file will contain the usual TAB-delimited table, exactly as it would have without `--tree-output`. Second, since a tree is the only thing this flag produces, anvi'o will refuse to run it together with `--quiet` (which would show you nothing) or `--as-markdown` (which would mangle the characters anvi'o uses to draw the tree).

If you are working with a <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> or <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file, `--tree-output` will give you a single tree in which the results from every one of your inputs are merged together. This is not really the appropriate display for many (meta)genomes at once, since a tree gives you no way to tell which input a taxon came from, and anvi'o will warn you about that -- but if a bird's eye view of everything at once is what you want, there it is.

### 4. Look at relative abundance of taxa across samples

If you provide a merged <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>, then you'll be able to look at the relative abundance of your taxonomy hits (through a single-copy core gene) across your samples. Essentially, this adds additional columns to your output (one per sample) that descrbe the relative abundance of each hit in each sample.

Running this will look something like this,
<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                           &#45;&#45;compute&#45;scg&#45;coverages
</div>

For an example output, take a look at [this page](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/#contigs-db--profile-db).

If you add `--tree-output` to a command like the one above, each node of the tree will report a coverage value in addition to its count. That value is the total coverage of everything under that node, summed across all of your samples. A tree has no room for one column per sample, so if you need per-sample numbers, ask for an output file with `-o`.

### 5. Estimate the taxonomy of your bins

This program basically looks at each of the <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s in your <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> as a single genome and tries to assign it taxonomy information. To do this, simply provide a collection, like this:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

You can also look at the relative abundances across your samples at the same time, by running something like this:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                           &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                           &#45;&#45;compute&#45;scg&#45;coverages
</div>

Pro tip: you can use the output that emerges from the following output,

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                           &#45;o TAXONOMY.txt
</div>

to display the taxonomy of your bins in the anvi'o interactive interface in **collection mode**:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;interactive](/help/main/programs/anvi&#45;interactive)</span> &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                     &#45;&#45;additional&#45;layers TAXONOMY.txt
</div>

That simple.

### 6. Look at multiple metagenomes at the same time

You can even use this program to look at multiple metagenomes by providing a <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> artifact. This is useful to get an overview of what kinds of taxa might be in your metagenomes, and what kinds of taxa they share.

Running this

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;&#45;metagenomes <span class="artifact&#45;n">[metagenomes](/help/main/artifacts/metagenomes)</span> \
                           &#45;&#45;output&#45;file&#45;prefix EXAMPLE
</div>

will give you an output file containing all taxonomic levels found and their coverages in each of your metagenomes.

For a concrete example, check out [this page](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/#many-contigs-dbs-for-many-metagenomes).

### 7. Estimate taxonomy across multiple genomes using an external genomes file

You can also run this program on a set of genomes described in an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                           &#45;&#45;output&#45;file&#45;prefix EXAMPLE
</div>

If you want to treat each genome as a metagenome (i.e., report the taxonomic composition within each genome rather than a single consensus taxonomy for it), add the `--metagenome-mode` flag:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;scg&#45;taxonomy &#45;&#45;external&#45;genomes <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;&#45;output&#45;file&#45;prefix EXAMPLE
</div>

### A note on SCG selection when working with multiple contigs databases

When you use `--external-genomes` or `--metagenomes` together with `--metagenome-mode`, anvi'o must pick a **single SCG to use consistently across all contigs databases**. This is critical for result comparability: using different SCGs for different databases would make the outputs impossible to compare.

If you do not explicitly name an SCG with `--scg-name-for-metagenome-mode`, anvi'o will automatically select the SCG that is most frequent across all your contigs databases combined, and will report which one it chose. You can inspect per-SCG frequencies beforehand with `--report-scg-frequencies` to make an informed choice.

If instead you want to use the most frequent SCG independently for each contigs database (which would make results incomparable across databases), you should run <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> on each contigs database separately in `--metagenome-mode`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-estimate-scg-taxonomy.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-estimate-scg-taxonomy`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-estimate-scg-taxonomy [-h] [-c CONTIGS_DB] [-m] [-p PROFILE_DB] [-C COLLECTION_NAME] [-e FILE_PATH] [-M FILE_PATH] [-o FILE_PATH] [--per-scg-output-file FILE_PATH] [-O FILENAME_PREFIX] [--taxonomic-level {t_domain,t_phylum,t_class,t_order,t_family,t_genus,t_species}] [--matrix-format] [--raw-output] [--tree-output] [--tree-output-level {t_domain,t_phylum,t_class,t_order,t_family,t_genus,t_species}] [-T NUM_THREADS] [-S SCG_NAME] [--report-scg-sequences-file-prefix FILE NAME PREFIX] [--report-scg-frequencies FILE_PATH] [--just-do-it] [--skip-checking-genome-hashes] [--simplify-taxonomy-information] [--compute-scg-coverages] [--presence-absence-only] [--update-profile-db-with-taxonomy] [-r PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-1">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT #1</span> <span class="parameter-group-description">The minimum you must provide this program is a contigs database. In which case anvi&#x27;o will attempt to estimate taxonomy for all contigs in it, assuming that the contigs database represents a single genome. If the contigs database is actually a metagenome, you should use the `--metagenome` flag to explicitly declare that.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-switch" id="parameter-metagenome_mode"><code class="parameter-flags">-m, --metagenome-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Treat a given contigs database as an unbinned metagenome rather than treating it as a single genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-2">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT #2</span> <span class="parameter-group-description">In addition, you can also point out a profile database. In which case you also must provide a collection name. When you do that anvi&#x27;o will offer taxonomy estimates for each bin in your collection.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-3">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT #3</span> <span class="parameter-group-description">You can also work with a external genomes or metagenomes file, assuming that you have multiple (meta)genomes with or without associated mapping results, and anvi&#x27;o would generate a single output file for all.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-metagenomes"><code class="parameter-flags">-M, --metagenomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;contigs_db_path&#x27;, and &#x27;profile_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the metagenome stored in the anvi&#x27;o contigs database. In this context, the anvi&#x27;o profiles associated with contigs database must be SINGLE PROFILES, as in generated by the program `anvi-profile` and not `anvi-merge`.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-and-formatting">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT AND FORMATTING</span> <span class="parameter-group-description">Anvi&#x27;o will do its best to offer you some fancy output tables for your viewing pleasure by default. But in addition to that, you can ask the resulting information to be stored in a TAB-delimited file (which is a much better way to include the results in your study as supplementary information, or work with these results using other analysis tools such as R). Depending on the mode you are running this program, anvi&#x27;o may ask you to use an &#x27;output file prefix&#x27; rather than an &#x27;output file path&#x27;.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-per_scg_output_file"><code class="parameter-flags">--per-scg-output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A more detailed output file that will describe taxonomy of each scg in a single bin. When consensus taxonomy is generated per bin or genome, taxonomy for each underlying item is not reported. This additional optional output file will elucidate things.</span></dd>
<dt class="parameter" id="parameter-output_file_prefix"><code class="parameter-flags">-O, --output-file-prefix</code> <code class="parameter-metavar">FILENAME_PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">A prefix to be used while naming the output files. No file type extensions please; just a prefix -- all ouptut file names and extensions will be appended to this prefix.</span></dd>
<dt class="parameter" id="parameter-taxonomic_level"><code class="parameter-flags">--taxonomic-level</code> <code class="parameter-metavar">TAXONOMIC_LEVEL</code></dt>
<dd class="parameter-details"><span class="parameter-help">The taxonomic level to use whenever relevant and/or available. The default taxonomic level is None, but if you choose something specific, anvi&#x27;o will focus on that whenever possible.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">t_domain</code> <code class="parameter-choice">t_phylum</code> <code class="parameter-choice">t_class</code> <code class="parameter-choice">t_order</code> <code class="parameter-choice">t_family</code> <code class="parameter-choice">t_genus</code> <code class="parameter-choice">t_species</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-matrix_format"><code class="parameter-flags">--matrix-format</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you want the reports to look like sparse matrices whenever possible, declare this flag. Matrices are especially good to use when you are working with internal/external genomes since they can show you quickly the distribution of each taxon across all metagenomes in programs like EXCEL. WELL TRY IT AND SEE.</span></dd>
<dt class="parameter parameter-switch" id="parameter-raw_output"><code class="parameter-flags">--raw-output</code></dt>
<dd class="parameter-details"><span class="parameter-help">Just store the raw output without any processing of the primary data structure.</span></dd>
<dt class="parameter parameter-switch" id="parameter-tree_output"><code class="parameter-flags">--tree-output</code></dt>
<dd class="parameter-details"><span class="parameter-help">Rather than showing you a table where each row describes the entire lineage of a single item, display the results as a hierarchical tree in your terminal, where each node shows the number of items that were assigned to that taxon or to anything under it. This is a much better way to get a quick sense of the taxonomic make up of a metagenome (based on SCGs, anticodons, or who knows what else, since the items will depend on the program you use and your parameters). Declaring this flag will not influence any of the output files you may have asked for. While they will continue describing the very same results in their usual TAB-delimited fashion, this flag will add more fabulous to your terminal.</span></dd>
<dt class="parameter" id="parameter-tree_output_level"><code class="parameter-flags">--tree-output-level</code> <code class="parameter-metavar">TREE_OUTPUT_LEVEL</code></dt>
<dd class="parameter-details"><span class="parameter-help">The deepest taxonomic level to show when you are asking for a tree with `--tree-output`. The default is &#x27;t_genus&#x27;, which means the tree will not show you species names. Please note that this parameter has nothing to do with the parameter `--taxonomic-level`, and it will only influence the tree that is displayed in your terminal.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">t_domain</code> <code class="parameter-choice">t_phylum</code> <code class="parameter-choice">t_class</code> <code class="parameter-choice">t_order</code> <code class="parameter-choice">t_family</code> <code class="parameter-choice">t_genus</code> <code class="parameter-choice">t_species</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span> <span class="parameter-group-description">We are not sure if allocating more threads for this operation will change anything. But hey. One can try.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-authority">
<header class="parameter-group-header"><span class="parameter-group-title">AUTHORITY</span> <span class="parameter-group-description">Assert your dominance.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-scg_name_for_metagenome_mode"><code class="parameter-flags">-S, --scg-name-for-metagenome-mode</code> <code class="parameter-metavar">SCG_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">When running in metagenome mode, anvi&#x27;o automatically chooses the most frequent single-copy core gene to estimate the taxonomic composition within a contigs database. If you have a different preference you can use this parameter to communicate that.</span></dd>
<dt class="parameter" id="parameter-report_scg_sequences_file_prefix"><code class="parameter-flags">--report-scg-sequences-file-prefix</code> <code class="parameter-metavar">FILE NAME PREFIX</code></dt>
<dd class="parameter-details"><span class="parameter-help">When running in metagenome mode, anvi&#x27;o has access to each SCG sequence. By providing a file prefix, you can instruct anvi&#x27;o to report amino acid and DNA sequences for each SCG it uses to estimate taxonomy. The deflines of the resulting FASTA files will match tot he unique entry IDs used to populate the output file that reports taxonomy. Please note that this parameter will only run if you set the parameter `--scg-name-for-metagenome-mode`.</span></dd>
<dt class="parameter" id="parameter-report_scg_frequencies"><code class="parameter-flags">--report-scg-frequencies</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Report SCG frequencies in a TAB-delimited file and quit. This is a great way to decide which SCG name to use in metagenome mode (we often wish to use the most frequent SCG to increase the detection of taxa).</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED</span> <span class="parameter-group-description">Very pro-like stuff.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
<dt class="parameter parameter-switch" id="parameter-simplify_taxonomy_information"><code class="parameter-flags">--simplify-taxonomy-information</code></dt>
<dd class="parameter-details"><span class="parameter-help">The taxonomy output may include a large number of names that contain clade-specific code for not-yet-characterized taxa. With this flag you can simplify taxon names. This will influence all output files and displays as the use of this flag will on-the-fly trim taxonomic levels with clade-specific code names.</span></dd>
<dt class="parameter parameter-switch" id="parameter-compute_scg_coverages"><code class="parameter-flags">--compute-scg-coverages</code></dt>
<dd class="parameter-details"><span class="parameter-help">When this flag is declared, anvi&#x27;o will go back to the profile database to learn coverage statistics of single-copy core genes for which we have taxonomy information.</span></dd>
<dt class="parameter parameter-switch" id="parameter-presence_absence_only"><code class="parameter-flags">--presence-absence-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">When this flag is declared, anvi&#x27;o will report only binary presence/absence information for each taxon rather than the number of times each SCG was observed. This is particularly useful when working with external genomes files to generate matrix outputs, where raw SCG frequencies may be difficult to interpret. If you use this flag together with `--compute-scg-coverages` will make anvi&#x27;o disappoint.</span></dd>
<dt class="parameter parameter-switch" id="parameter-update_profile_db_with_taxonomy"><code class="parameter-flags">--update-profile-db-with-taxonomy</code></dt>
<dd class="parameter-details"><span class="parameter-help">When anvi&#x27;o knows all both taxonomic affiliations and coverages across samples for single-copy core genes, it can, in theory add this information to the profile database. With this flag you can instruct anvi&#x27;o to do that and find information on taxonomy in the `layers` tab of your interactive interface.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-boring">
<header class="parameter-group-header"><span class="parameter-group-title">BORING</span> <span class="parameter-group-description">Options that you will likely never need.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-taxonomy_database"><code class="parameter-flags">-r, --taxonomy-database</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Path to the directory that contains the BLAST databases for single-copy core genes. You will almost never need to use this parameter unless you are trying something very fancy. But when you do, you can tell anvi&#x27;o where to look for database files through this parameter.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Usage examples and warnings](http://merenlab.org/scg-taxonomy)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/estimate_scg_taxonomy.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
