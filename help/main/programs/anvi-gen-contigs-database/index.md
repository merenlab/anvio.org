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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-fasta](../../artifacts/contigs-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


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


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-gen-contigs-database) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
