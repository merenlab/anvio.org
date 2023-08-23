If you are here, you are ready to check if everything is working on your system. This section will help you finalize your installation so you are prepared for anything.

The easiest way to check your installation is to run the anvi'o program {% include PROGRAM name="anvi-self-test"%}:

``` bash
anvi-self-test --suite mini
```

{:.notice}
If you don't want anvi'o to show you a browser window at the end and quietly finish testing if everything is OK, add `--no-interactive` flag to the command above. Another note, `anvi-self-test` is run in `--suite mini` mode, which tests the absolute minimal features of your anvi'o installation. If you run it without any parameters, it will tests many more things.

If everything goes smoothly, your browser should pop-up and show you an anvi'o {% include ARTIFACT name="interactive" %} interface that looks something like this once `anvi-self-test` is done running:

{% include IMAGE path="../images/mini-test-screenshot.png" width="50" %}

{:.notice}
The screenshot above is from 2015 and will be vastly different from the [interactive interface](https://merenlab.org/2016/02/27/the-anvio-interactive-interface/) you should see in your browser. It is still here so we remember where we came from 😇

If you are seeing the interactive interface, it means you now have a computer that can run anvi'o! In theory you can leave this page at this moment, but there are a few more details that would be best to attend now. So please bear with this tutorial just a little longer.

{:.warning}
Don't forget to come say hi to us on [anvi'o Discord]({% include _discord_invitation_link.html %}).

---

### (6.1) Setup key resources

This is to **further prepare** your anvi'o installation for things you may need later, such as databases for taxonomic annotation of your genomes or functional annotation of your genes. This is an up-to-date list of programs that you should run in your terminal to have everything ready:

* Run {% include PROGRAM name="anvi-setup-scg-taxonomy" %}, to setup SCG taxonomy data using GTDB genomes.
* Run {% include PROGRAM name="anvi-setup-ncbi-cogs" %}, to setup NCBI's COG database for quick annotation of genes with functions,
* Run {% include PROGRAM name="anvi-setup-kegg-kofams" %}, so {% include PROGRAM name="anvi-estimate-metabolism" %} finds the database of KEGG orthologs ready when you need it.
* Optinally you can also run `anvi-self-test --suite pangenomics` to see if everything is order, especially if you plan to use anvi'o for pangenomics.

### (6.2) Install an automated binning algorithm in your anvi'o environment

{:.notice}
You can skip this section if you are not interested in reconstructing genomes from metagenomes using anvi'o.

Anvi'o offers a powerful interactive environment to reconstruct genomes from metageomes where you have full control over subtle decisions. For small assemblies (i.e., where you have less than 25,000 contigs), you do not need an additional binning software to reconstruct genomes from metagenomes. But for larger metagenomes, you have two options:

* Use the program {% include PROGRAM name="anvi-cluster-contigs" %} with an automatic binning software that is already installed on your system.
* Perform automatic binning outside of anvi'o, and import the binning results as a {% include ARTIFACT name="collection" %} into anvi'o using the program {% include PROGRAM name="anvi-import-collection" %} to further refine those results.

The following recipe will help you install [CONCOCT](https://www.nature.com/articles/nmeth.3103) on your system just so there is an automatic binning algorithm ready on your system that you can use with {% include PROGRAM name="anvi-cluster-contigs" %}:

``` bash
# setup a place to download CONCOCT source code
mkdir -p ~/github/ && cd ~/github/

# get a clone of the CONCOCT codebase from the fork
# that is tailored for the anvi'o conda environment
git clone https://github.com/merenlab/CONCOCT.git

# build and install
cd CONCOCT
python setup.py build
python setup.py install
```

If everything worked, when you type the following command,

```
anvi-cluster-contigs -h
```

You should see this output (where CONCOCT _is_ found):

{% include IMAGE path="/images/anvi-cluster-contigs-screenshot.png" width="30" %}

{:.notice}
If you are a developer of an automatic binning algorithm and would like to see it in anvi'o, please get in touch with us. Anvi'o can pass any information about sequences (their coverages across samples, tetranucleotide frequencies, genes, functions, and whatever else you would like to have about them) to any program to run it on user data and import the results into anvi'o databases seamlessly through simple Python wrappers. Here are some examples of such wrappers [for CONCOCT](https://github.com/merenlab/anvio/blob/master/anvio/drivers/concoct.py), [for BinSanity](https://github.com/merenlab/anvio/blob/master/anvio/drivers/binsanity.py), and [for MaxBin2](https://github.com/merenlab/anvio/blob/master/anvio/drivers/maxbin2.py). If you wish to create one but are not sure how to test it, please start a GitHub issue.

### (6.3) Troubleshooting

If your **browser didn't show up**, or **testing stopped with errors**, please take a look at the common problems others have reported and try these solutions. Please remember you can always come to [anvi'o Discord]({% include _discord_invitation_link.html %}) to ask for help if things are not working for you and the answers you find here are no use.

#### I see a lot of warning messages

It is absolutely normal to see 'warning' messages. In general anvi'o is talkative as it would like to keep you informed. In an ideal world you should keep a careful eye on those warning messages, but in most cases they will not require action.

#### Tests fail with an error related to libcrypto

If {% include PROGRAM name="anvi-self-test"%} fails with an error message that looks something like this,

```
libcrypto.so.1.0.0: cannot open shared object file: no such file or directory
```

it is likely that the `pysam` module installation failed. To fix this you should revisit the installation instructions, especially the part that says "[Issues related to samtools](#issues-related-to-samtools)", and then come back to testing.

#### My browser didn't show up

If your browser does not show up, or does show up but can't show anything due to a 'network problem', you may also want to visit the address [http://localhost:8080](http://localhost:8080) by manually entering this address to your browser's address bar, which should work on your **local computer**. On some systems the default network interface anvi'o uses to connect to its own server causes issues. You may also find the help page for {% include PROGRAM name="anvi-interactive" %} useful for future references.

If your browser does not show up while you are **connected to a remote computer**, it is quite normal. In some cases a text-based browser may show up instead of your graphical browser, too. This is becasue you are running anvi'o on another computer, and it tries to open a browser __there__. You can set things up for anvi'o to use your local browser to access to an anvi'o interactive interactive interface running remotely. For that, you can [read this article](https://merenlab.org/2018/03/07/working-with-remote-interative/) (or ask your systems administrator to read it) to learn how you can forward displays from servers to your personal computer.

#### Browser shows up, but anvi'o complains about Chrome

If **you are not using [Chrome](https://www.google.com/chrome/) as your default browser**, anvi'o will complain about it :/ We hate the idea of asking you to change your browser preferences for anvi'o :( But currently, Chrome maintains the most efficient SVG engine among all browsers we tested as of 2021. For instance, Safari can run the anvi'o interactive interface, however it takes orders of magnitude more time and memory compared to Chrome. Firefox, on the other hand, doesn't even bother drawing anything at all. Long story short, the anvi'o interactive interface __will not perform optimally__ with anything but Chrome. So you need Chrome. Moreover, if Chrome is not your default browser, every time interactive interface pops up, you will need to copy-paste the address bar into a Chrome window.

You can learn what is your default browser by running this command in your terminal:

``` bash
python -c 'import webbrowser as w; w.open_new("http://")'
```

#### Everything is fine, but I can't find anvi'o commands in a new terminal

If you open a new terminal and get __command not found__ error when you run anvi'o commands, it means you need to activate anvi'o conda environment by running the following command (assuming that you named your conda environment for anvio as `anvio-7.1`, but you can always list your conda environments by running `conda env list`):

```
conda activate anvio-7.1
```

#### When I run anvi'o test for pangenomics, I get errors related to the functional enrichment step

If you are getting an error that goes like,

```
Config Error: Something went wrong during the functional enrichment analysis :( We don't know
              what happened, but this log file could contain some clues: (...)
```

it often means that the R libraries that are needed to run functional enrichment analyses are not installed properly through conda :/ Luckily, you can try to install them using the R terminal as [Marco Gabrielli](https://twitter.com/MarcoGabriell16) shared on anvi'o Discord. For this, try running this command in your terminal:

```
Rscript -e 'install.packages(c("stringi", "tidyverse", "magrittr", "optparse"), repos="https://cloud.r-project.org")'
```

If everything goes alright, you can quit the R terminal by pressing `CTRL+D` twice. Once you are out, you can run this command to see if everything runs smoothly:

``` bash
Rscript -e "library('tidyverse')"
```

In some cases the problem is the `qvalue` package, which can be a pain to install. If you are having hard time with that one, you can try this and see if that solves it:

```
Rscript -e 'install.packages("BiocManager", repos="https://cran.rstudio.com"); BiocManager::install("qvalue")'
```

---

Now you can take a look up some anvi'o resources [here](https://anvio.org), or join [anvi'o Discord]({% include _discord_invitation_link.html %}) to be a part of our growing community.
