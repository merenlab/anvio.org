---
layout: program
title: The anvi'o 'sra-download' workflow
excerpt: Download, extract, and gzip paired-end FASTQ files automatically from the NCBI short-read archive (SRA)
categories: [anvio]
comments: false
redirect_from: /m/sra-download
image:
  featurerelative: ../../../images/header.png
  display: true
---

<i>Download, extract, and gzip paired-end FASTQ files automatically from the NCBI short-read archive (SRA)</i>

The sra-download workflow automatizes the process of downloading paired-end FASTQ files for a given list of SRA-accessions using [NCBI sra-tools wiki](https://github.com/ncbi/sra-tools/wiki/08.-prefetch-and-fasterq-dump) then gzips them using [pigz](https://zlib.net/pigz/).

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Artifacts accepted

The sra-download can typically be initiated with the following artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[workflow-config](../../artifacts/workflow-config) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span></p>

## Artifacts produced

The sra-download typically produce the following anvi'o artifacts:

<p style="text-align: left" markdown="1"><span class="artifact-p">[paired-end-fastq](../../artifacts/paired-end-fastq) <img src="../../images/icons/FASTQ.png" class="artifact-icon-mini" /></span></p>

## Third party programs

This is a list of programs that may be used by the sra-download workflow depending on the user settings in the <span class="artifact-p">[workflow-config](../../artifacts/workflow-config/) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span>:

<ul>
<li><a href="https://github.com/ncbi/sra-tools" target="_blank">prefetch</a> (Downloads SRA accessions)</li><li><a href="https://github.com/ncbi/sra-tools" target="_blank">fasterq-dump</a> (Extracts FASTQ files from SRA accessions)</li><li><a href="https://zlib.net/pigz/" target="_blank">pigz</a> (Compresses FASTQ files in parallel)</li>
</ul>

An anvi'o installation that follows the recommendations on the <a href="https://anvio.org/install/" target="_blank">installation page</a> will include all these programs. But please consider your settings, and cite these additional tools from your methods sections.

## Workflow description and usage


The `sra_download` workflow is a Snakemake workflow that downloads FASTQ files from SRA-accessions from [NCBI](https://www.ncbi.nlm.nih.gov/sra) e.g. SRR000001 and ERR000001. using [NCBI sra-tools wiki](https://github.com/ncbi/sra-tools/wiki/08.-prefetch-and-fasterq-dump), gzips them using [pigz](https://zlib.net/pigz/), and provides a <span class="artifact-n">[samples-txt](/help/main/artifacts/samples-txt)</span>. You will need to have these tools installed before you start.

Let's get started.

## Required input

### Configuration file

The first step is to make a <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span>.

```bash
anvi-run-workflow -w sra_download --get-default-config sra_download_config.json
```

Here's what the <span class="artifact-n">[workflow-config](/help/main/artifacts/workflow-config)</span> file looks like:

```bash
$ cat sra_download_config.json
{
    "SRA_accession_list": "SRA_accession_list.txt",
    "prefetch": {
        "--max-size": "40g",
        "threads": 2
    },
    "fasterq_dump": {
        "threads": 6
    },
    "pigz": {
        "threads": 8,
        "--processes": ""
    },
    "output_dirs": {
        "SRA_prefetch": "01_NCBI_SRA",
        "FASTAS": "02_FASTA",
        "LOGS_DIR": "00_LOGS"
    },
    "max_threads": "",
    "config_version": "3",
    "workflow_name": "sra_download"
```

#### Modify any of the bells and whistles in the config file

{:.notice}
If this is the first time using an anvi'o Snakemake workflow, check out [Alon's blog post first](https://merenlab.org/2018/07/09/anvio-snakemake-workflows/#configjson).

Feel free to adjust anything in the config file! Here are some to consider:
- `threads`: this can be optimized for any of the steps depending on the size and number of SRA accessions you are downloaded.
- `prefetch` `--max-size`: The default is 40g but maybe you need more! For reference, this `--max-size` can download TARA Ocean metagenomes. You can use `vdb-dump --info` to learn how much the the `prefetch` step will download e.g. `vdb-dump SRR000001 --info`. Read more about that [here](https://github.com/ncbi/sra-tools/wiki/08.-prefetch-and-fasterq-dump#check-the-maximum-size-limit-of-the-prefetch-tool).

### List of SRA accessions

The input for the `sra_download` workflow is `SRA_accession_list.txt`. This contains a list of your SRA accessions you would like to download and it looks like this:

{:.warning}
All SRA accessions begin with the prefix `SRR` or `ERR` to denote their uploads to [NCBI](https://www.ncbi.nlm.nih.gov/sra) or [EBI](https://www.ebi.ac.uk/ena/browser/home) respectively.

```bash
$ cat SRA_accession_list.txt
ERR6450080
ERR6450081
SRR5965623
```

{:.warning}
The .sra files are stored in `01_NCBI_SRA/`. This directory will be deleted upon successful completion of the workflow because I don't know any use for .sra files. If you need these feel free to update the workflow.

## Start the workflow!

Here's a basic command to start the workflow:

### Run on your local computer

```bash
anvi-run-workflow -w sra_download -c sra_download_config.json
```

### Go big and use an HPC!

The power of Snakemake shines when you can leverage a High Performance Computing system to parallelize jobs. Check out the [Snakemake cluster documentation](https://snakemake.readthedocs.io/en/stable/executing/cluster.html#) on how to launch this workflow on your own HPC.

## Common use cases

### Download sequencing files associated with an NCBI BioSample

Here is how to use the `sra_download` workflow to download all of the sequencing files from an NCBI BioSample:

1. Search for the [NCBI BioSample](https://www.ncbi.nlm.nih.gov/biosample/) under `All Databases` on the [NCBI website](https://www.ncbi.nlm.nih.gov/).
2. Under `Genomes` click `SRA`
3. Send results to Run selector by clicking `Send to:` and then `Run Selector`
4. Here you can filter for specific sequencing in the project OR you can download the `Metadata` or `Accession list` to download a text file with ALL of the SRA accesssions associated with the BioSample. Put the SRA accessions into the `SRA_accession_list.txt` and start the workflow!

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/workflows/sra-download.md) to update this information.

