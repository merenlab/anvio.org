---
layout: program
title: anvi-gen-contigs-database
excerpt: An anvi'o program. Generate a new anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-contigs-database
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a new anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


The input for this program is a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>, which should contain one or more sequences. These sequences may belong to a single genome or could be many contigs obtained from an assembly or a single sequence of any kind.

Make sure the input file matches the requirements of a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span>. If you are planning to use the resulting contigs-db with <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span>, it is essential that you convert your <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file to a properly formatted <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> *before* you perform the read recruitment.

The contigs database is one of the most essential components of anvi'o, and a contigs database will keep all the information related to your sequences: positions of open reading frames, k-mer frequencies for each contig, functional and taxonomic annotation of genes, etc.

When run on a <span class="artifact-n">[contigs-fasta](/help/main/artifacts/contigs-fasta)</span> this program will,

* **Compute k-mer frequencies** for each contig (the default is `4`, but you can change it using `--kmer-size` parameter if you feel adventurous).

* **Soft-split contigs** longer than 20,000 bp into smaller ones (you can change the split size using the `--split-length` flag). When the gene calling step is not skipped, the process of splitting contigs will consider where genes are and avoid cutting genes in the middle. For very, very large assemblies this process can take a while, and you can skip it with `--skip-mindful-splitting` flag.

* **Identify open reading frames** using [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) which is an extension of [pyrodigal](https://github.com/althonos/pyrodigal) ([doi:10.21105/joss.04296](https://doi.org/10.21105/joss.04296)) (which builds upon [prodigal](http://prodigal.ornl.gov/), the approach originally implemented by Hyatt et al ([doi:10.1186/1471-2105-11-119](https://doi.org/10.1186/1471-2105-11-119)).
Additionally, it includes metagenomics models for giant viruses and viruses with alternative genetic codes by Camargo et al [doi:10.1038/s41587-023-01953-y](https://doi.org/10.1038/s41587-023-01953-y). **UNLESS**, (1) you have used the flag `--skip-gene-calling` (no gene calls will be made) or (2) you have provided <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span>. See other details related to gene calling below.

{:.notice}
This program can work with compressed input FASTA files (i.e., the file name ends with a `.gz` extention).

### Create a contigs database from a FASTA file

The simplest form of this command that will give you a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> is the following:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                          &#45;o <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

But we suggest you to explicitly assign a unique 'project name' for each contigs-db you are generating through the `--project-name` parameter. Project name becomes an idenfitier of a contigs-db for most downstream analyses, and when you are working with many contigs-db files, non-unique names for each one of them may lead to various issues. Here is an example for a single genome:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f Patient_6557_E_faecalis_cultivar.fa \
                          &#45;&#45;project&#45;name E_faecalis_P6557 \
                          &#45;o E_faecalis_P6557.db
</div>

and a metagenome:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f scaffolds.fa \
                          &#45;&#45;project&#45;name North_Atlantic_MGX_004 \
                          &#45;o North_Atlantic_MGX_004.db
</div>

To shorten the runtime, you can also multithread `anvi-gen-contigs-database` with the `-T` flag followed by the desired number of threads, depending on your system.

There are a myriad of programs you can run on a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> once it is created to add more and more layers of information on it. Please see the artifact <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> to see a list of steps you can follow.

### Create a contigs database with external gene calls

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                          &#45;o <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;external&#45;gene&#45;calls <span class="artifact&#45;n">[external&#45;gene&#45;calls](/help/main/artifacts/external&#45;gene&#45;calls)</span>
</div>

See <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> for the description and formatting requirements of this file.

If user-provided or anvi'o-calculated amino acid sequences contain internal stop codons, anvi'o will yield an error. The following command will persist through this error:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                          &#45;o <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;external&#45;gene&#45;calls <span class="artifact&#45;n">[external&#45;gene&#45;calls](/help/main/artifacts/external&#45;gene&#45;calls)</span> \
                          &#45;&#45;ignore&#45;internal&#45;stop&#45;codons
</div>

### Gene calling

By default, this program will use [pyrodigal](https://github.com/althonos/pyrodigal) for gene calling, and the key aspects of the resulting information about genes in input sequences are stored in the resulting <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files. That said, gene calls include much more information than what will be stored in the database. If you need a more comprehensive report on gene calls, you can run <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span> with the following parameter:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                          &#45;o <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;full&#45;gene&#45;calling&#45;report OUTPUT.txt
</div>

In this case the `OUTPUT.txt` will contain additional data, and the gene caller ids will match to those that are stored in the database therefore tractable all downstream analyses that will stem from the resulting <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. Here is a snippet from an example file:

|**gene_callers_id**|**contig**|**start**|**stop**|**direction**|**partial**|**partial_begin**|**partial_end**|**confidence**|**gc_cont**|**rbs_motif**|**rbs_spacer**|**score**|**cscore**|**rscore**|**sscore**|**start_type**|**translation_table**|**tscore**|**uscore**|**sequence**|**translated_sequence**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|0|NC_009091|169|1327|f|False|False|False|99.99|0.3013|||153.96808116167358|151.14841116167358|-0.9874499999999999|2.8196700000000003|ATG|11|2.8971|0.9100200000000003|ATGGAAATTATTTGTAATCAAAATGAATTA(...)|MEIICNQNELNNAIQLVSKAVASRPTHPIL(...)|
|1|NC_009091|1388|2036|f|False|False|False|99.99|0.2885|GGA/GAG/AGG|5-10bp|81.87259573141999|71.58136573142|2.71875|10.291229999999999|ATG|11|2.8971|4.67538|ATGGTCCTTAATTATGGAAATGGTGAAAAT(...)|MVLNYGNGENVWMHPPVHRILGWYSRPSNL(...)|
|2|NC_009091|2039|4379|f|False|False|False|99.99|0.3260|GGA/GAG/AGG|5-10bp|352.2303246874159|347.0894946874159|2.71875|5.14083|ATG|11|2.8971|-0.47502|ATGATAAATCAAGAAAATAATGATCTATAT(...)|MINQENNDLYDLNEALQVENLTLNDYEEIC(...)|
|3|NC_009091|4426|5887|f|False|False|False|99.99|0.3347|||194.19481790304437|188.61028790304437|-0.9874499999999999|5.584530000000002|ATG|11|2.8971|3.6748800000000017|ATGTGCGGAATAGTTGGAATCGTTTCTTCA(...)|MCGIVGIVSSDDVNQQIYDSLLLLQHRGQD(...)|
|4|NC_009091|5883|8325|r|False|False|False|99.99|0.2731|||318.93104438253084|315.33533438253085|-0.9874499999999999|3.5957100000000004|ATG|11|2.8971|1.6860600000000003|ATGGATAAGAAAAACTTCACTTCTATCTCA(...)|MDKKNFTSISLQEEMQRSYLEYAMSVIVGR(...)|
|5|NC_009091|8402|9266|r|False|False|False|99.99|0.2719|||99.52927145207937|93.12346145207937|-0.9874499999999999|6.405809999999998|ATG|11|2.8971|4.496159999999998|ATGAAAAAGTTTTTACAAAGAATACTCTGG(...)|MKKFLQRILWISLISFYFLQIKKVQAIVPY(...)|
|6|NC_009091|9262|10219|r|False|False|False|99.99|0.3239|||107.44082411540528|104.45237411540528|-0.9874499999999999|2.9884500000000003|ATG|11|2.8971|1.0788000000000002|ATGATTAATAGGATTCAAGACAAAAAAGAA(...)|MINRIQDKKEISKKLKERAIFEGFTIAGIA(...)|
|7|NC_009091|10365|11100|f|False|False|False|99.99|0.3319|||71.66956065705634|79.71184065705633|-0.9874499999999999|-8.042279999999998|TTG|11|-9.60915|2.55432|TTGGTTGAATCTAATCAAAATCAAGATTCC(...)|MVESNQNQDSNLGSRLQQDLKNDLIAGLLV(...)|
|8|NC_009091|11103|11721|f|False|False|False|99.99|0.2993|||69.10757680331382|69.03014680331381|-0.9874499999999999|0.07743000000000055|ATG|11|2.8971|-1.8322199999999995|ATGCATAATAGATCTCTTTCTAGAGAATTA(...)|MHNRSLSRELSLISLGLIKDKGDLKLNKFQ(...)|
|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|

### Changing k-mer size

You can change the k-mer size by modifying the `--kmer-size` parameter:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;contigs&#45;database &#45;f <span class="artifact&#45;n">[contigs&#45;fasta](/help/main/artifacts/contigs&#45;fasta)</span> \
                          &#45;o <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                          &#45;&#45;kmer&#45;size 3
</div>

A word of caution: you can increase the k-mer size up to a maximum of k=5 for standard installations of anvi'o. This is because the contigs database stores the k-mer frequencies in a big table with one column per k-mer, and SQLite has an upper limit on the number of columns per table. [The default limit is 2,000 columns](https://www.sqlite.org/limits.html), which translates into an upper limit of k=5 (with 4^5 = 1,096 possible k-mers). Trying to increase `k` beyond this point will result in the following error: `sqlite3.OperationalError: too many columns on kmer_contigs`.

If you want to increase `k` even further, you can re-compile the `sqlite3` library to increase the column limit (the constant `SQLITE_MAX_COLUMN`). Note that you can only increase this limit up to a maximum of 32,000 columns, which makes k=7 (with 4^7 = 16,384 possible k-mers) the new upper limit for k-mer size.

<div class="extra-info" markdown="1">

<span class="extra-info-header">Increasing the k-mer size limit to k=7</span>

[Sebastian Treitli](https://anvio.org/people/treitlis/) shared his workflow for re-compiling `sqlite3` with larger column limits on Discord ([here is the link to the relevant message](https://discord.com/channels/1002537821212512296/1239881490637127701/1240313108799553659)). Here are the initial steps, which are based on [this StackExchange thread](https://dba.stackexchange.com/questions/221508/how-to-increase-column-limit-of-a-table-in-sqlite):

1. Go to download page [https://sqlite.org/download.html](https://sqlite.org/download.html)
2. Download the pre-release snapshot archive
3. Extract it with `tar -xvzf "sqlite-snapshot-202405081757.tar.gz"`
4. Change to that directory: `cd sqlite-snapshot-202405081757`
5. Run `./configure`
6. Edit the `Makefile`. Find inside the Makefile the line that starts with DEFS = and append to this line `-DSQLITE_MAX_COLUMN=32767`. Save the file
7. Run `make` to compile

After this, the newly-compiled library has to be moved into your anvi'o environment, at the same location where the original library was installed. This step will differ for everyone depending on their anvi'o installation, but we assume that if you are at this point, you probably know what you are doing :)

8. Copy the compiled library to the conda `lib` directory, which would look something like this (paths are not exact and depend on your system/anvi'o installation): `cp /path/to/compiled/sqlite/.libs/libsqlite3.so.0.8.6 /home/user/miniconda3/envs/anvio-7.1/lib/libsqlite3.so.0.8.6`
9. Copy the compiled executable to the conda `bin` directory, which would look something like this (paths are not exact and depend on your system/anvi’o installation): `cp /path/to/compiled/sqlite/sqlite3 /home/user/miniconda3/envs/anvio-7.1/bin/sqlite3`
10. Done :) Go forth and use (slightly) higher k-mer sizes!

</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-contigs-database.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-contigs-database`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-contigs-database [-h] -f FASTA [-n PROJECT_NAME] [-T NUM_THREADS] [-o DB_FILE_PATH] [--db-variant VARIANT] [--description TEXT_FILE] [-L INT] [--skip-mindful-splitting] [-K INT] [--skip-gene-calling] [--prodigal-single-mode] [--prodigal-translation-table INT] [--full-gene-calling-report FILE] [--external-gene-calls GENE-CALLS] [--ignore-internal-stop-codons] [--skip-predict-frame]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY INPUTS</span> <span class="parameter-group-description">Things you really need to provide to be in business.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_fasta"><code class="parameter-flags">-f, --contigs-fasta</code> <code class="parameter-metavar">FASTA</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">The FASTA file that contains reference sequences you mapped your samples against. This could be a reference genome, or contigs from your assembler. Contig names in this file must match to those in other input files. If there is a problem anvi&#x27;o will gracefully complain about it.</span></dd>
<dt class="parameter" id="parameter-project_name"><code class="parameter-flags">-n, --project-name</code> <code class="parameter-metavar">PROJECT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name of the project. Please choose a short but descriptive name (so anvi&#x27;o can use it whenever she needs to name an output file, or add a new table in a database, or name her first born).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span> <span class="parameter-group-description">You have multiple cores? WELL, USE THEM MAYBE?.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL INPUTS</span> <span class="parameter-group-description">Things you may want to tweak.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_db_path"><code class="parameter-flags">-o, --output-db-path</code> <code class="parameter-metavar">DB_FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output file path for the new database.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">CONTIGS.db</code></span></dd>
<dt class="parameter" id="parameter-db_variant"><code class="parameter-flags">--db-variant</code> <code class="parameter-metavar">VARIANT</code></dt>
<dd class="parameter-details"><span class="parameter-help">A free-form text variable to associate a database with a variant for power users and/or programmers. Please leave this blank unless you are certain that you need to set a db variant since it may influence downstream processes. In an ideal world a variant would be a single-word, without any capitalized letters or special characters.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">unknown</code></span></dd>
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
<dt class="parameter" id="parameter-split_length"><code class="parameter-flags">-L, --split-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o splits very long contigs into smaller pieces, without actually splitting them for real. These &#x27;virtual&#x27; splits improve the efficacy of the visualization step, and changing the split size gives freedom to the user to adjust the resolution of their display when necessary. The default value is (20000). If you are planning to use your contigs database for metagenomic binning, we advise you to not go below 10,000 (since the lower the split size is, the more items to show in the display, and decreasing the split size does not really help much to binning). But if you are thinking about using this parameter for ad hoc investigations other than binning, you should ignore our advice, and set the split size as low as you want. If you do not want your contigs to be split, you can set the split size to &#x27;0&#x27; or any other negative integer (lots of unnecessary freedom here, enjoy!).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">20000</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_mindful_splitting"><code class="parameter-flags">--skip-mindful-splitting</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o attempts to prevent soft-splitting large contigs by cutting proper gene calls to make sure a single gene is not broken into multiple splits. This requires a careful examination of where genes start and end, and to find best locations to split contigs with respect to this information. So, when the user asks for a split size of, say, 1,000, it serves as a mere suggestion. When this flag is used, anvi&#x27;o does what the user wants and creates splits at desired lengths (although some functionality may become unavailable for the projects that rely on a contigs database that is initiated this way).</span></dd>
<dt class="parameter" id="parameter-kmer_size"><code class="parameter-flags">-K, --kmer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">K-mer size for k-mer frequency calculations. The default k-mer size for composition-based analyses is 4, historically. Although tetra-nucleotide frequencies seem to offer the the sweet spot of sensitivity, information density, and manageable number of dimensions for clustering approaches, you are welcome to experiment (but maybe you should leave it as is for your first set of analyses). Note that the maximum k-mer size is 5 (unless you can increase the column limit in `sqlite3` to 32k, in which case the max is 7).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">4</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes-in-contigs">
<header class="parameter-group-header"><span class="parameter-group-title">GENES IN CONTIGS</span> <span class="parameter-group-description">Expert thingies.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_gene_calling"><code class="parameter-flags">--skip-gene-calling</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, generating an anvi&#x27;o contigs database includes the identification of open reading frames in contigs by running a bacterial gene caller. Declaring this flag will by-pass that process. If you prefer, you can later import your own gene calling results into the database.</span></dd>
<dt class="parameter parameter-switch" id="parameter-prodigal_single_mode"><code class="parameter-flags">--prodigal-single-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will use pyrodigal-gv for gene calling (unless you skipped gene calling, or provided anvi&#x27;o with external gene calls). One of the flags anvi&#x27;o includes in pyrodigal-gv run is `-p meta`, which optimizes pyrodigal-gv&#x27;s ability to identify genes in metagenomic assemblies. In some rare cases, for a given set of contigs pyrodigal-gv will yield a segmentation fault error due to one or more genes in your collections will confuse the program when it is used with the `-p meta` flag. While anvi&#x27;o developers are not quite sure under what circumstances this happens, we realized that removal of this flag often solves this issue. If you are dealing with such cyrptic errors, the inclusion of `--skip-prodigal-meta-flag` will instruct anvi&#x27;o to run pyrodigal-gv without the `-meta` flag, and may resolve this issue for you.</span></dd>
<dt class="parameter" id="parameter-prodigal_translation_table"><code class="parameter-flags">--prodigal-translation-table</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is a parameter to pass to the Pyrodigal-gv for a specific translation table. This parameter corresponds to the parameter `-g` in Prodigal, the default value of which is 11 (so if you do not set anything, it will be set to 11 in Pyrodigal-gv runtime. Please refer to the Prodigal documentation to determine what is the right translation table for you if you think you need it.)</span></dd>
<dt class="parameter" id="parameter-full_gene_calling_report"><code class="parameter-flags">--full-gene-calling-report</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">When anvi&#x27;o is done with gene calling using pyrodigal, it only stores some data about individual gene calls. Using this parameter you can pass an output file to report most comprehensive data on gene calls as a TAB-delimited text file with gene caller ids matching to those that are stored in the contigs-db.</span></dd>
<dt class="parameter" id="parameter-external_gene_calls"><code class="parameter-flags">--external-gene-calls</code> <code class="parameter-metavar">GENE-CALLS</code></dt>
<dd class="parameter-details"><span class="parameter-help">A TAB-delimited file to define external gene calls. The file must have these columns: &#x27;gene_callers_id&#x27; (a unique integer number for each gene call, start from 1), &#x27;contig&#x27; (the contig name the gene call is found), &#x27;start&#x27; (start position, integer), &#x27;stop&#x27; (stop position, integer), &#x27;direction&#x27; (the direction of the gene open reading frame; can be &#x27;f&#x27; or &#x27;r&#x27;), &#x27;partial&#x27; (whether it is a complete gene call, or a partial one; must be 1 for partial calls, and 0 for complete calls), &#x27;call_type&#x27; (1 if it is coding, 2 if it is noncoding, or 3 if it is unknown (only gene calls with call_type = 1 will have amino acid sequences translated)), &#x27;source&#x27; (the gene caller), and &#x27;version&#x27; (the version of the gene caller, i.e., v2.6.7 or v1.0). An additional &#x27;optional&#x27; column is &#x27;aa_sequence&#x27; to explicitly define the amino acid seqeuence of a gene call so anvi&#x27;o does not attempt to translate the DNA sequence itself. An EXAMPLE FILE (with the optional &#x27;aa_sequence&#x27; column (so feel free to take it out for your own case)) can be found at the URL https://bit.ly/2qEEHuQ. If you are providing external gene calls, please also see the flag `--skip-predict-frame`.</span></dd>
<dt class="parameter parameter-switch" id="parameter-ignore_internal_stop_codons"><code class="parameter-flags">--ignore-internal-stop-codons</code></dt>
<dd class="parameter-details"><span class="parameter-help">This is only relevant when you have an external gene calls file. If anvi&#x27;o figures out that your custom gene calls result in amino acid sequences with stop codons in the middle, it will complain about it. You can use this flag to tell anvi&#x27;o to don&#x27;t check for internal stop codons, Even though this shouldn&#x27;t happen in theory, we understand that it almost always does. In these cases, anvi&#x27;o understands that sometimes we don&#x27;t want to care, and will not judge you. Instead, it will replace every stop codon residue in the amino acid sequence with an &#x27;X&#x27; character. Please let us know if you used this and things failed, so we can tell you that you shouldn&#x27;t have really used it if you didn&#x27;t like failures at the first place (smiley).</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_predict_frame"><code class="parameter-flags">--skip-predict-frame</code></dt>
<dd class="parameter-details"><span class="parameter-help">When you provide an external gene calls file, anvi&#x27;o will predict the correct frame for each gene as best as it can by using a previously-generated Markov model that is trained using the uniprot50 database (see this for details: https://github.com/merenlab/anvio/pull/1428), UNLESS there is an `aa_sequence` entry for a given gene call in the external gene calls file. Please note that PREDICTING FRAMES MAY CHANGE START/STOP POSITIONS OF YOUR GENE CALLS SLIGHTLY, if start/stop positions in the external gene calls file are not describing proper gene calls according to the model. If you use this flag, anvi&#x27;o will not rely on any model and will attempt to translate your DNA sequences by solely relying upon start/stop positions in the file, but it will complain about sequences start/stop positions of which are not divisible by 3.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_contigs_database.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
