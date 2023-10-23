---
layout: program
title: anvi-setup-ncbi-cogs
excerpt: An anvi'o program. Download and setup NCBI&#x27;s Clusters of Orthologous Groups database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-setup-ncbi-cogs
image:
  featurerelative: ../../../images/header.png
  display: true
---

Download and setup NCBI&#x27;s Clusters of Orthologous Groups database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


This program seems to know what its doing. It needs no input material from its user. Good program.


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[cogs-data](../../artifacts/cogs-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **downloads and organizes a local copy of the data from NCBI's [COGs database](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC102395/) for use in function annotation.** This program generates a <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> artifact, which is required to run the program <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span>. 

### Set up COGs data
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs
</div>

If possible, we recommend you multithread this program with the `--num-threads` parameter to make it faster.

If you already have a <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> artifact and are trying to redownload this data, run 

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;reset
</div>

### Choosing a different database version
<div class="codeblock" markdown="1">
anvi&#45;setup&#45;ncbi&#45;cogs &#45;&#45;cog&#45;version COG14
</div>

Not sure which versions of <span class="artifact-n">[cogs-data](/help/main/artifacts/cogs-data)</span> are available? You can type something random after the `--cog-version` parameter to see the options.

### Always getting checksum errors? Instructions for manual downloads of the COG data (for COG 2020)

Sometimes the NCBI servers drop incoming connections, leading to incomplete file downloads and errors like the following:

```
Config Error: Something went wrong with your download :/ The checksum we calculated for       
              `cog-20.cog.csv` anvi'o just finished downloading does not match to the checksum
              provided by the NCBI. This is most likely due to an interrupted download, as the
              NCBI servers often prematurely end data transfers. Please try running the same  
              command again with the `--reset` flag. 
```

If you have tried re-running `anvi-setup-ncbi-cogs` multiple times but are always getting checksum errors and are about to lose your mind, here is a set of commands that you can follow to manually download the data for the **2020 release of COGs** without having to go through the setup program every time. 

First, you will need to move to the directory where anvi'o expects to find the COG files. This location will depend on where conda and anvi'o are installed on your computer, but if you have the anvi'o environment loaded in your terminal, you can easily get there by running the following:
```
cd $CONDA_PREFIX/lib/python3.10/site-packages/anvio/data/misc/COG/COG20/RAW_DATA_FROM_NCBI/
```

The files that anvi'o needs to see in that folder are the following:
```
checksum.md5.txt cog-20.def.tab   fun-20.tab
cog-20.cog.csv   cog-20.fa.gz
```

Since you have already tried running `anvi-setup-ncbi-cogs` so many times, probably there are some of those files already in there. But the checksums of those files need to match those that are listed in the `checksum.md5.txt` file. For instance, if you look for `cog-20.cog.csv` inside the checksum file:

```
grep cog-20.cog.csv checksum.md5.txt
```

You will see the following line: ```1bed944a61e0ec404669361fb69ae52d  cog-20.cog.csv```
which indicates that the file's checksum should match exactly to `1bed944a61e0ec404669361fb69ae52d`. If you run `md5sum cog-20.cog.csv`, you should see that exact string. If you don't see the same thing, it means the file has been incompletely downloaded, so it needs to be downloaded again. You can do it like this:

```
rm -rf cog-20.cog.csv

curl -O https://ftp.ncbi.nih.gov/pub/COG/COG2020/data/cog-20.cog.csv

md5sum cog-20.cog.csv
```

If you don't want to compare the strings manually, you can use the `diff` program to check that they are the same, like this:
```
grep cog-20.cog.csv checksum.md5.txt > expected_checksum
md5sum cog-20.cog.csv > observed_checksum
diff expected_checksum observed_checksum
```
If the two checksums match, you won't see any output from the `diff` command.

Once you get a copy of the file with an exactly matching MD5 checksum, you can move on. 

You should run `md5sum` on every file listed above (except for `checksum.md5.txt`), and check if it matches the corresponding string inside `checksum.md5.txt`. For any file with a non-matching MD5 checksum, you should download it using `curl` as we did above:
```
rm -rf [FILENAME THAT DOES NOT MATCH]
curl -O https://ftp.ncbi.nih.gov/pub/COG/COG2020/data/[FILENAME THAT DOES NOT MATCH]
```
(make sure you change the file name at the end of the path to match the file that you need)

After you have all the files with matching checksums, you can leave the data folder, and then re-run `anvi-setup-ncbi-cogs`, which should now work perfectly using the manually downloaded files:
```
cd
anvi-setup-ncbi-cogs
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-setup-ncbi-cogs.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-setup-ncbi-cogs) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
