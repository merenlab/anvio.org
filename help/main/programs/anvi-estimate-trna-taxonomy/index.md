---
layout: program
title: anvi-estimate-trna-taxonomy
excerpt: An anvi'o program. Estimates taxonomy at genome and metagenome level using tRNA sequences.
categories: [anvio]
comments: false
redirect_from: /m/anvi-estimate-trna-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---

Estimates taxonomy at genome and metagenome level using tRNA sequences..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[trna-taxonomy](../../artifacts/trna-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[metagenomes](../../artifacts/metagenomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[dna-sequence](../../artifacts/dna-sequence) <img src="../../images/icons/SEQUENCE.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[genome-taxonomy](../../artifacts/genome-taxonomy) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[genome-taxonomy-txt](../../artifacts/genome-taxonomy-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **uses the taxonomic associations of your tRNA sequences to estimate the taxonomy for genomes, metagenomes, or <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>**. 

This is the final step in the tRNA-taxonomy workflow. Before running this program, you'll need to have run <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span> on the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that you're inputting to this program.

## Input options 

### 1: Running on a single genome

By default, this program will assume that your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> contains only a single genome and will determine the taxonomy of that single genome.   

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

This will provide you with only the best taxonomy hit for your genome based on your tRNA data. If you want to examine the underlying results from <span class="artifact-p">[anvi-run-trna-taxonomy](/help/main/programs/anvi-run-trna-taxonomy)</span> that it's using to reach this conclusion, add the `--debug` flag. 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;debug 
</div>

### 2: Running on a metagenome

In metagenome mode, this program will assume that your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> contains multiple genomes and will attempt to provide you with an overview of the taxa within it. To do this, anvi'o will determine which anticodon has the most hits in your contigs (for example `GGG`), and then will examine the taxonomy hits for tRNA with that anticodon across your contigs. 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode 
</div>

If instead you want to examine a specific anticodon, you can specify that with the `-S` parameter. For example, to look at `GGT`, just run the following: 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;&#45;metagenome&#45;mode \
                           &#45;S GGT
</div>

### 3: Running on multiple metagenomes

You can use this program to examine multiple metagenomes by providing a <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> artifact. This is useful to get an overview of what kinds of taxa might be in your metagenomes, and what kinds of taxa they share. 

Running this

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;&#45;metagenomes <span class="artifact&#45;n">[metagenomes](/help/main/artifacts/metagenomes)</span> \
                           &#45;&#45;output&#45;file&#45;prefix EXAMPLE
</div>

will give you an output file containing all taxonomic levels found and their coverages in each of your metagenomes, based on their tRNA. 

### 4: Estimating the taxonomy of bins 

You can use this program to estimate the taxonomy of all of the <span class="artifact-n">[bin](/help/main/artifacts/bin)</span>s in a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> by providing the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> and the associated <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>  \
                           &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> 
</div>

When doing this, you can also save the final results into your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> as <span class="artifact-n">[misc-data-layers](/help/main/artifacts/misc-data-layers)</span> with the flag `--update-profile-db-with-taxonomy`

### 5: I don't even have a contigs-db. Just a fasta file. 

This program can run the entire ad hoc sequence search without a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> involved (just a fasta file and number of target sequences as a percent of the total; default: 20 percent), but this is not recommended. However, if you provide other parameters, they will be ignored. 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;&#45;dna&#45;sequence <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                           &#45;&#45;max&#45;num&#45;target&#45;sequences 10
</div>

## The Output

Now that you've specified your desired inputs, you should consider whether you want an output and what it will look like. By default, this program won't provide you with an output file (just <span class="artifact-n">[genome-taxonomy](/help/main/artifacts/genome-taxonomy)</span> information in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>). However, if you add any of these output options, it will instead produce a <span class="artifact-n">[genome-taxonomy-txt](/help/main/artifacts/genome-taxonomy-txt)</span>. 

### Anticodon Frequencies

If you want to examine the anticodon frequencies before getting taxonomy information at all (for example because you can't decide which anticodon to use for input option 2), add the flag `--report-anticodon-frequencies`. This will report the anticodon frequencies to a tab-delimited file and exit the program. 

### A single output 

To get a single output (a comprehensive table for your viewing pleasure), just add the output file path. 

In this example, the input will be a single <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> (input option 1): 

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output.txt  
</div>

This will give you a tab-delimited matrix with all levels of taxonomic information for the genome stored in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. Specifically, the output is a <span class="artifact-n">[genome-taxonomy-txt](/help/main/artifacts/genome-taxonomy-txt)</span>. 

If you want to focus on a single taxonomic level, use the parameter `--taxonomic-level`, like so:

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                           &#45;o path/to/output.txt  \
                           &#45;&#45;taxonomic&#45;level genus 
</div>

You can also simplify the taxonomy names in the table with the flag `--simplify-taxonomy-information`

If you're running on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, you can also choose to add the anticodon coverage to the output with `--compute-anticodon-coverages`. 

### Multiple outputs

If you have multiple outputs (i.e., you are examining multiple metagenomes (input option number 3) or you are examining each anticodon individually with `--per-anticodon-output-file`), you should instead provide an output filename prefix.  

<div class="codeblock" markdown="1">
anvi&#45;estimate&#45;trna&#45;taxonomy &#45;&#45;metagenomes <span class="artifact&#45;n">[metagenomes](/help/main/artifacts/metagenomes)</span> \
                           &#45;&#45;output&#45;file&#45;prefix EXAMPLE
</div>

The rest of the options listed for the single output (i.e., focusing on a taxonomic level, simplifying taxonomy information, etc.) still apply.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-estimate-trna-taxonomy.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-estimate-trna-taxonomy) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
