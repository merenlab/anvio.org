---
layout: program
title: anvi-setup-kegg-kofams
excerpt: An anvi'o program. Download and setup KEGG KOfam HMM profiles plus KEGG MODULE and KEGG BRITE data.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-kegg-kofams
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup KEGG KOfam HMM profiles plus KEGG MODULE and KEGG BRITE data.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iveseli@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


This program seems to know what its doing. It needs no input material from its user. Good program.


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[kegg-data](../../artifacts/kegg-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[modules-db](../../artifacts/modules-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Usage


<span class="artifact-p">[anvi-setup-kegg-kofams](/help/main/programs/anvi-setup-kegg-kofams)</span> downloads and organizes data from KEGG for use by other programs, namely <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> and <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>. It downloads HMM profiles from the [KOfam](https://academic.oup.com/bioinformatics/article/36/7/2251/5631907) database as well as the metabolism information of [KEGG MODULES](https://www.genome.jp/kegg/module.html) and the functional classification information of [KEGG BRITE](https://www.genome.jp/kegg/brite.html). The KOfam profiles are prepared for later use by the HMMER software, and the information from MODULES and BRITE is made accessible to other anvi'o programs as a <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>. This program generates a directory with these files (<span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>), which by default is located at `anvio/anvio/data/misc/KEGG/`.

## Default usage: downloading a KEGG snapshot

If you do not provide any arguments to this program, the KOfam profiles and KEGG information will be set up in the default KEGG data directory.

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams
</div>

### How does it work?

By default, this program downloads a snapshot of the KEGG databases, already converted into an anvi'o-compatible format. The snapshot is a `.tar.gz` archive of a KEGG data directory that was (usually) generated around the time of the latest anvi'o release.

After the default KEGG archive is downloaded, it is unpacked, checked that all the expected files are present, and moved into the KEGG data directory.

### Why is this the default?

Doing it this way ensures that almost everyone uses the same version of KEGG data, which is good for reproducibility and makes it easy to share annotated datasets. The KEGG resources are updated fairly often, and we found that constantly keeping the KEGG data directory in sync with them was not ideal, because every time the data directory is updated, you have to update the KOfam annotations in all your contigs databases to keep them compatible with the current <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> (unless you were smart enough to keep the old version of the KEGG data directory around somewhere). And of course that introduces a new nightmare as soon as you want to share datasets with your collaborators who do not have the same KEGG data directory version as you. With everyone using the same <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> by default, we can avoid these issues.

But the trade-off to this is that the default KEGG data version is tied to an anvi'o release, and it will not always include the most up-to-date information from KEGG. Luckily, **for those who want the most updated version of KEGG, you can still use this program to generate the KEGG data directory by downloading directly from KEGG** (see 'Getting the most up-to-date KEGG data' section below).

{:.warning}
BRITE hierarchy data is not included in the default KEGG snapshot for anvi'o `v7`. Starting from the `v7.1-dev` version of anvi'o, there is a new default KEGG snapshot including BRITE information. This data can also be set up by using the option to download directly from KEGG in `v7.1-dev` or later.

### Set up KEGG data in a non-default location

You can specify a different directory in which to put this data, if you wish:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG
</div>

This is helpful if you don't have write access to the default directory location, or if you want to keep several different versions of the KEGG data on your computer. Just remember that when you want to use this specific KEGG data directory with later programs such as <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>, you will have to specify its location with the `--kegg-data-dir` flag.

### Setting up an earlier KEGG snapshot

By default, the KEGG snapshot that will be installed is the latest one, which is up-to-date with your current version of anvi'o. If, however, you want a snapshot from an earlier version, you can run something like the following to get it:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG \
                       &#45;&#45;kegg&#45;snapshot v2020&#45;04&#45;27
</div>

Just keep in mind that you may need to migrate the MODULES.db from these earlier versions in order to make it compatible with the current metabolism code. Anvi'o will tell you if you need to do this.

Not sure what KEGG snapshots are available for you to request? Well, you could check out the YAML file at `anvio/anvio/data/misc/KEGG-SNAPSHOTS.yaml` in your anvi'o directory, or you could just give something random to the `--kegg-snapshot` parameter and watch anvi'o freak out and tell you what is available:
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;kegg&#45;snapshot hahaha
</div>


## Getting the most up-to-date KEGG data: downloading directly from KEGG

This program is also capable of downloading data directly from KEGG and converting it into an anvi'o-compatible format. In fact, this is how we generate the default KEGG archive. If you want the latest KEGG data instead of the default snapshot of KEGG, try the following:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;download&#45;from&#45;kegg
</div>

### How does it work?

KOfam profiles are downloadable from KEGG's [FTP site](ftp://ftp.genome.jp/pub/db/kofam/) and all other KEGG data is accessible as flat text files through their [API](https://www.kegg.jp/kegg/rest/keggapi.html). When you run this program it will first get all the files that it needs from these sources, and then it will process them by doing the following:

- determine if any KOfam profiles are missing bitscore thresholds, and remove those from the standard profile location so that they are not used for annotation (if you want to see these, you will find them in the `orphan_data` folder in your KEGG data directory)
- concatenate all remaining KOfam profiles into one file and run `hmmpress` on them
- parse the flat text file for each KEGG module and the JSON file for each BRITE hierarchy
- store the MODULE and BRITE information in the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>

An important thing to note about this option is that it has rigid expectations for the format of the KEGG data that it works with. Future updates to KEGG may break things such that the data can no longer be directly obtained from KEGG or properly processed. In the sad event that this happens, you will have to download KEGG from one of our archives instead.

### The --only-download option

Suppose you only want to download data from KEGG, but you don't need a <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> - at least not right away. You can instruct this program to stop after downloading by providing the `--only-download` flag:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;download&#45;from&#45;kegg \
                       &#45;&#45;only&#45;download \
                       &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG
</div>

It's probably a good idea in this case to specify where you want this data to go using `--kegg-data-dir`, to make sure you can find it later.

 Actually, in addition to downloading the data, the program will also do a bit of processing on the KOfam profiles: it will remove those without bitscore thresholds, concatenate the remaining profiles into one file, and run `hmmpress` on them. But no database will be created when this flag is used.

{:.notice}
This option is primarily useful for developers to test `anvi-setup-kegg-kofams` - for instance, so that you can download the data once and run the database setup option (`--only-database`) multiple times. However, if non-developers find another practical use-case for this flag, we'd be happy to add those ideas here. Send us a message, or feel free to edit this file and pull request your changes on the anvi'o Github repository. :)

### The --only-database option

Let's say you already have KEGG data on your computer that you got by running this program with the `--only-download` flag. Now you want to turn this data into a <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>. To do that, run this program using the `--only-database` flag and provide the location of the pre-downloaded KEGG data:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;download&#45;from&#45;kegg \
                       &#45;&#45;only&#45;database \
                       &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG
</div>

{:.notice}
The KEGG data that you already have on your computer has to be in the format expected by this program, or you'll run into errors. Pretty much the only reasonable way to get the data into the proper format is to run this program with the `--only-download` option. Otherwise you would have to go through a lot of manual file-changing shenanigans - possible, but not advisable.

One more note: since this flag is most often used for testing the database setup capabilities of this program, which entails running `anvi-setup-kegg-kofams -D --only-database` multiple times on the same KEGG data directory, there is an additional flag that may be useful in this context. To avoid having to manually delete the created modules database each time you run, you can use the `--overwrite-output-destinations` flag:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;download&#45;from&#45;kegg \
                       &#45;&#45;only&#45;database \
                       &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG \
                       &#45;&#45;overwrite&#45;output&#45;destinations
</div>

### Avoiding BRITE setup

As of anvi'o `v7.1-dev` or later, KEGG BRITE hierarchies are added to the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> when running this program with the `-D` (`--download-from-kegg`) option. If you don't want this cool new feature - because you are a rebel, or adverse to change, or something is not working on your computer, whatever - then fine. You can use the `--skip-brite-hierarchies` flag:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;D &#45;&#45;skip&#45;brite&#45;hierarchies
</div>

Hopefully it makes sense to you that this flag does not work when setting up from a KEGG snapshot that already includes BRITE data in it.

### How do I share this data?
Suppose you have been living on the edge and annotating your contigs databases with a non-default version of <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>, and you share these databases with a collaborator who wants to run downstream programs like <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> on them. Your collaborator (who has a different version of <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> on their computer) will likely get version errors as detailed on the <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> help page.

In order for your collaborator to be able to work with your dataset, they need to have the same <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> version as you did when you ran <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>. If you are very lucky and KEGG has not been updated since you set up your <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>, they may be able to run `anvi-setup-kegg-kofams -D` to get it. But if not, there are a few options for you to share your version of <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>:

1. You could send them your KEGG data directory. First, run `tar -czvf kegg_archive.tar.gz ./KEGG` on the data directory to compress and archive it before sending it over (this command _must_ be run from its parent directory so that the archive has the expected directory structure when it is unpacked). Then your collaborator can just run `anvi-setup-kegg-kofams --kegg-archive kegg_archive.tar.gz --kegg-data-dir ./KEGG_ARCHIVE` and be good to go. They would just have to use `--kegg-data-dir ./KEGG_ARCHIVE` when running downstream programs. The problem here is that even the archived <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> is quite large, ~4-5GB, and may be unfeasible for you to send.
2. You could share with your collaborator just the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>. If all they want to do is to run <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> on databases annotated by your version of the KEGG data directory, this should be all they need. They would need to pass the folder containing your <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> to <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> using the `--kegg-data-dir` parameter.
3. If your collaborator also wants to be able to annotate other databases with your version of <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span>, then they need to have the KOfam profiles as well. You can send them your <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> and have them download the KOfam profiles most similar to the ones you have from the [KOfam archives](https://www.genome.jp/ftp/db/kofam/archives/) (which are labeled by date). Then they would have to essentially construct their own KEGG data directory by copying the structure of the default one and putting the downloaded files (and the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> you sent them) into the correct locations. The KOfam profiles must be concatenated into a `Kofam.hmm` file and `hmmpress` must be run on that file to generate the required indices for `hmmsearch`. Your collaborator must also have the `ko_list.txt` file (which _should_ be downloaded with the profiles) in the right spot. Then they could pass their makeshift KEGG data directory to <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> using `--kegg-data-dir`, and they should be golden. (A word of warning: they may want to remove KOs without bitscore thresholds in the `ko_list.txt` before concatenating the profiles, otherwise they will likely get a lot of weak hits for these KOs.)

## I already have a KEGG snapshot: set up from a pre-downloaded archive file

If you have an archive (`.tar.gz`) of the KEGG data directory already on your computer (perhaps a colleague or Meren Lab developer gave you one), you can set up KEGG from this archive instead:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;kofams &#45;&#45;kegg&#45;archive KEGG_archive.tar.gz
</div>

This works the same way as the default, except that it bypasses the download step and instead uses the archive file you have provided with `--kegg-archive`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-kegg-kofams.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-kegg-kofams) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
