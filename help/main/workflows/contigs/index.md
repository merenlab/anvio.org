---
layout: program
title: The anvi'o 'contigs' workflow
excerpt: From FASTA files to annotated anvi&#x27;o contigs databases
categories: [anvio]
comments: false
redirect_from: /m/contigs
image:
  featurerelative: ../../../images/header.png
  display: true
---

<i>From FASTA files to annotated anvi&#x27;o contigs databases</i>

This workflow is useful for converting a bunch of genomes into an anvi&#x27;o-compatible format. It generates contigs databases from each input FASTA file, and subsequently runs a variety of annotation programs of your choice to populate these databases with some useful information for your downstream work (i.e. functions, single-copy-core genes, taxonomy, etc).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ShaiberAlon.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ShaiberAlon" target="_blank"><span class="anvio-person-name">Alon Shaiber</span></a><div class="anvio-person-social-box"><a href="mailto:alon.shaiber@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/alon_shaiber" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ShaiberAlon" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Artifacts accepted

The contigs can typically be initiated with the following artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[workflow-config](../../artifacts/workflow-config) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[fasta-txt](../../artifacts/fasta-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>

## Artifacts produced

The contigs typically produce the following anvi'o artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>

## Third party programs

This is a list of programs that may be used by the contigs workflow depending on the user settings in the <span class="artifact-p">[workflow-config](../../artifacts/workflow-config/) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span>:

<ul>
<li><a href="https://github.com/hyattpd/Prodigal" target="_blank">prodigal</a> (Gene calling)</li><li><a href="http://hmmer.org/" target="_blank">HMMER</a> (HMM search)</li><li><a href="https://github.com/fbreitwieser/krakenuniq" target="_blank">krakenuniq</a> (Gene taxonomy)</li><li><a href="https://github.com/DaehwanKimLab/centrifuge" target="_blank">centrifuge</a> (Gene taxonomy)</li><li><a href="https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/algorithms-in-bioinformatics/software/diamond/" target="_blank">DIAMOND</a> (Sequence search against various databases)</li>
</ul>

An anvi'o installation that follows the recommendations on the <a href="https://anvio.org/install/" target="_blank">installation page</a> will include all these programs. But please consider your settings, and cite these additional tools from your methods sections.

## Workflow description and usage



This workflow is extremely useful if you have one or more <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> files that describe one or more contig sequences for your genomes or assembled metagenomes, and all you want to turn them into <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files.

{:.warning}
If you have not yet run anvi'o programs <span class="artifact-p">[anvi-setup-ncbi-cogs](/help/main/programs/anvi-setup-ncbi-cogs)</span> and <span class="artifact-p">[anvi-setup-scg-taxonomy](/help/main/programs/anvi-setup-scg-taxonomy)</span> on your system yet, you will get a cryptic error from this workflow if you run it with the default <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span>. You can avoid this by first running these two anvi'o programs to setup the necessary databases (which is done only once for every anvi'o installation), **or** set the rules for COG functions and/or SCG taxonomy to `run=false` explicitly.

To start things going with this workflow, first ask anvi'o to give you a default <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> file for the contigs workflow:

```bash
anvi-run-workflow -w contigs \
                  --get-default-config config-contigs-default.json
```

This will generate a file in your work directory called `config-contigs-default.json`. You should investigate its contents, and familiarize youself with it. It should look something like this, but much longer:
and you could examine its content to find out all possible options to tweak. We included a much simpler config file, `config-contigs.json`, in the mock data package for the sake of demonstrating how the contigs workflow works:

```json
{
    "workflow_name": "contigs",
    "config_version": "2",
    "fasta_txt": "fasta.txt",
    "output_dirs": {
        "FASTA_DIR": "01_FASTA",
        "CONTIGS_DIR": "02_CONTIGS",
        "LOGS_DIR": "00_LOGS"
    }
}
```

The only mandatory thing you need to do is to (1) manually create a <span class="artifact-n">[fasta-txt](/help/main/artifacts/fasta-txt)</span> file to describe the name and location of each FASTA file you wish to work with, and (2) make sure the `fasta_txt` variable in your <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> point to the location of your <span class="artifact-n">[fasta-txt](/help/main/artifacts/fasta-txt)</span>.

To see if everything looks alright, you can simply run the following command, which should generate a 'workflow graph' for you, given your config file parameters and input files:

```bash
anvi-run-workflow -w contigs \
                  -c config-contigs.json \
                  --save-workflow-graph
```

For the example config file shown above, this command will generate something similar to this:

[![DAG-contigs](../../images/workflows/contigs/DAG-contigs.png)]( ../../images/workflows/contigs/DAG-contigs.png){:.center-img .width-50}

{:.notice}
Please note that the generation of this workflow graph requires the usage of a program called [dot](https://en.wikipedia.org/wiki/DOT_(graph_description_language)). If you are using MAC OSX, you can use [dot](https://en.wikipedia.org/wiki/DOT_(graph_description_language)) by installing [graphviz](http://www.graphviz.org/) through `brew` or `conda`.

If everything looks alright, you can run this workflow the following way:

```bash
anvi-run-workflow -w contigs \
                  -c config-contigs.json
```

If everything goes smoothly, you should see happy messages flowing on your screen, and at the end of it all you should see your contigs databases are generated and annotated properly. At the end of this process, you will have all your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> files in the `02_CONTIGS` directory (as per the instructions in the config file, which you can change). You can use the program <span class="artifact-p">[anvi-display-contigs-stats](/help/main/programs/anvi-display-contigs-stats)</span> on one of them to see if everything makes sense.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/workflows/contigs.md) to update this information.

