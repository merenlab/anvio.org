---
layout: page
title: "Installing anvi'o"
excerpt: "Instructions to install the current release of the platform."
modified: 2019-05-14
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This article explains basic steps of installing anvi'o using rather conventional methods both for end users and current of future developers.

<details markdown="1"><summary>Show/hide A docker solution for those who are in a hurry</summary>

We do recommend you to install anvi'o on your system as explained below, but **if you just want to run anvi'o without any installation**, you can actually do it within minutes using [docker](https://docs.docker.com/get-docker/).

The docker solution is very simple, guaranteed to work, and very effective to do quick analyses or visualize anvi'o data currencies from others without having to install anything. A more detailed article on how to run anvi'o in docker [is here](https://merenlab.org/2015/08/22/docker-image-for-anvio/), but here is a brief set of steps.

Assuming you have docker installed and running on your computer, first pull the container:

``` bash
docker pull meren/anvio:7
```

{:.notice}
Instead of the version number shown above, you can use ANY version number listed on [this Docker Hub page](https://hub.docker.com/r/meren/anvio/tags).

This step will take a few minutes and require about 15Gb disk space. Once it is done, you can run it the following way:

```
docker run --rm -it -v `pwd`:`pwd` -w `pwd` -p 8080:8080 meren/anvio:7
```

And that's it! You are now in a virtual environment that runs anvi'o. You can exit this environment by pressing `CTRL+D`.

{:.warning}
If you wish to do resource demanding analyses, don't forget to increase CPU and memory resources allocated for anvi'o using the docker Preferences menu.

If you at some point want to remove all containers and reclaim all the storage space, you can run this after exiting all containers:

```
docker system prune --force -a
```
</details>

Please consider opening an <a href="https://github.com/meren/anvio/issues">issue</a> for technical problems, or join us on {% include _discord_invitation_button.html %} if you need help.

{:.notice}
{% include _fixthispage.html source="install/index.md" %}

{:.warning}
We thank [Daan Speth](https://twitter.com/daanspeth), [Jarrod Scott](https://orcid.org/0000-0001-9863-1318), [Susheel Bhanu Busi](https://scholar.google.com/citations?user=U0g3IzQAAAAJ&hl=en), [Mike Lee](https://twitter.com/AstrobioMike), [Josh Herr](http://joshuaherr.com/), and [Titus Brown](https://scholar.google.com/citations?user=O4rYanMAAAAJ) who kindly invested their time to test the installation instructions on this page on different systems and/or made suggestions to the document to ensure a smoother installation experience for everyone.

## (1) Setup conda

This is a very simple and effective way to install anvi'o on your system along with most of its dependencies.

{:.notice}
Although these installation instructions primarily target and rigorously tested for Linux and Mac OSX, you will be able to follow them if you are using Microsoft Windows **if and only if you first install the [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10)**. Our users have reported success stories with Ubuntu on WSL.

**For this to work, you need [miniconda](https://docs.conda.io/en/latest/miniconda.html) to be installed on your system (in ubuntu if you are using WSL).** If you are not sure whether it is installed or not, open a terminal (such as [iTerm](https://www.iterm2.com/), if you are using Mac) and type `conda`. You should see an output like this instead of a 'command not found' error (your version might be different):

```bash
$ conda --version
conda 23.5.2
```

If you don't have conda installed, then you should first install it through their [installation page](https://docs.conda.io/en/latest/miniconda.html). Once you have confirmed you have conda installed, run this command to make sure you are up-to-date:

``` bash
conda update conda
```

Finally, please install `mamba` for fast dependency resolving:

```
conda install -y -c conda-forge "mamba >=0.24.0"
```

Good? Good! You are almost there!

{:.notice}
if you were sent to this section from the "following the active codebase" section, please [click here](#setting-up-the-local-copy-of-the-anvio-codebase) to go back to where you left off. Otherwise, ignore this message and continue with the next chapter to setup your anvi'o environment for the installation of the latest stable version.

## (2) Setup an anvi'o environment

{:.notice}
It is a good idea to **make sure you are not already in a conda environment** before you run the following steps. Just to be clear, you can indeed install anvi'o in an existing conda environment, but if things go wrong, we kindly ask you to refer to meditation for help, rather than [anvi'o community resources](https://merenlab.org/2019/10/07/getting-help/) If you want to see what environments do you have on your computer and whether you already are in one of them in your current terminal by running `conda env list`. **If all these are too much for you and all you want to do is to move on with the installation**, simply do this: open a new terminal, and run `conda deactivate`, and continue with the rest of the text.

First, create a new conda environment:

``` bash
conda create -y --name anvio-7.1 python=3.6
```

{:.notice}
If you are using a computer with Apple silicon (like a M1 MacBook), you will find that some conda packages are not available, like older versions of python (3.6). To avoid this issue, you need to run your terminal app using Rosetta, a compatibility software. To do it, you can right-click on your terminal app in the Application folder and from the "Get info" menu, select "Open using Rosetta".

And activate it:

```
conda activate anvio-7.1
```

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 MacBook), you will find that some conda packages are not available, like older versions of python (3.6).
To avoid this issue, you can run the following command (only once) after activating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

Now you are in a pristine environment, in which you will install all conda packages that anvi'o will need to work properly. This looks scary, but it will work if you just copy paste it and press ENTER:

``` bash
conda install -y -c bioconda "sqlite>=3.31.1"
conda install -y -c bioconda prodigal
conda install -y -c bioconda mcl
conda install -y -c bioconda muscle=3.8.1551
conda install -y -c bioconda hmmer
conda install -y -c bioconda diamond
conda install -y -c bioconda blast
conda install -y -c bioconda megahit
conda install -y -c bioconda spades
conda install -y -c bioconda bowtie2 tbb=2019.8
conda install -y -c bioconda bwa
conda install -y -c bioconda samtools=1.9
conda install -y -c bioconda centrifuge
conda install -y -c bioconda trimal
conda install -y -c bioconda iqtree
conda install -y -c bioconda trnascan-se
conda install -y -c bioconda r-base
conda install -y -c bioconda r-stringi
conda install -y -c bioconda r-tidyverse
conda install -y -c bioconda r-magrittr
conda install -y -c bioconda r-optparse
conda install -y -c bioconda bioconductor-qvalue
conda install -y -c bioconda fasttree
conda install -y -c bioconda vmatch

# this last one may cause some issues. if it doesn't install,
# don't worry, you will still be fine:
conda install -y -c bioconda fastani
```

Now you can jump to "[Download and install anvi'o](#3-install-anvio)"!


## (3) Install anvi'o

Here you will first download the Python source package for the official anvi'o release:

```
curl -L https://github.com/merenlab/anvio/releases/download/v7.1/anvio-7.1.tar.gz \
        --output anvio-7.1.tar.gz
```

And install it using `pip` like a boss:

```
pip install anvio-7.1.tar.gz
```

**If you don't see any error messages**, then you are probably golden and can move on to test your to the section "[Check your anvi'o setup](#4-check-your-installation)" :)

**If you do see error messages**, please know that you are not alone. We are as frustrated as you are. Please take a look at the problems people have reported and try these solutions, which will most likely address your issues.

### Issues with pysam installation using pip

Some people have reported errors in the installation of `pysam` using `pip`, so if your installation also fails due to `pysam`, you can use the following two lines to first install this package via conda, and then install the anvi'o package via `pip`:

```
conda install -y -c bioconda pysam
pip install anvio-7.1.tar.gz
```

### Issues with the C compiler

We realized that on some **Mac OSX** systems, some packages installed by `pip` requires a more up-to-date C compiler. If you're getting an error that contains `x86_64-apple-darwin13.4.0-clang` or similar keywords in the output message, please run the following (which will set an environmental variable, and then try to install anvi'o via `pip` again):

```bash
export CC=clang
pip install anvio-7.1.tar.gz
```

If this didn't work, try this more extensive solution:

```bash
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
pip install anvio-7.1.tar.gz
```

If the `pip` installation still doesn't work (and especially if you see something like "clang-12: error: linker command failed with exit code 1" in the error message (we have often seen this error associated with the `Levenshtein` package), then this may be related to Xcode on Mac OSX. In this case you can try updating your Xcode by following the instructions described in [this issue](https://github.com/merenlab/anvio/issues/1636) (in the "Solved it" section), and then try the `pip` command one more time.

If you did all that and it is still not working, please make an issue on the github page or let us know in the anvi'o Discord channel about your problem and we will try to help you.

### Issues related to samtools

At this point, you should probably test your `samtools` installation by running `samtools --version`. If you see an error that looks similar to this:

```
dyld: Library not loaded: @rpath/libcrypto.1.0.0.dylib
  Referenced from: /Users/iva/opt/miniconda3/envs/anvio-7.1/bin/samtools
  Reason: image not found
Abort trap: 6
```

This is happening because somehow you have the wrong version of the `samtools` :( The following commands should fix it:

```
conda remove -y samtools
conda install -y -c bioconda samtools=1.9
```

Then try `samtools --version` again to make sure it is okay now. What you _should_ see is the following:

```
samtools 1.9
Using htslib 1.9
Copyright (C) 2018 Genome Research Ltd.
```

### Issues related to _sysconfigdata_x86_64_conda_linux_gnu

Occasionally, users may come across a "Failed to import site module" error during the installation process. This is due to a config file naming mismatch, and can be resolved by changing the name of the existing relevant config file.

First, navigate to your new conda environment's `python3.6` folder
```bash
cd path/to/conda/envs/7.1/lib/python3.6
```
Then, change the appropriate file name
```bash
mv _sysconfigdata_x86_64_conda_cos6_linux_gnu.py _sysconfigdata_x86_64_conda_linux_gnu.py
```
You can find more discussion on this issue [here](https://github.com/merenlab/anvio/issues/1839)

### Issues related to package conflicts

While setting up your environment to track the development branch, especially on Ubuntu systems (first observed on Ubuntu 20.04 LTS), you may run into issues related to package conflicts that produce error messages like this one:


```bash
Encountered problems while solving:
  - nothing provides r 3.2.2* needed by r-magrittr-1.5-r3.2.2_0
  - nothing provides icu 54.* needed by r-base-3.3.1-1
  - package sqlite-3.32.3-h4cf870e_1 requires readline >=8.0,<9.0a0, but none of the providers can be installed
  - package samtools-1.9-h8ee4bcc_1 requires ncurses >=6.1,<6.2.0a0, but none of the providers can be installed
```

These problems can be solved by explicitly setting conda with flexible channel priority setting. Run these commands to set your conda up your conda environment accordingly:


and change the channel priority setting:

```bash
conda config --describe channel_priority
conda config --set channel_priority flexible
```

And re-run the commands to install conda packages. You can set the priority back to 'strict' at any time.

### Issues with python-Levenshtein

Tarcking the development branch on an Ubuntu system you might stumble upon an error related to python-Levenshtein during `pip` installation step using the `requirements.txt`.

It will probably show you a bunch of error messages and finally **The system cannot find the file specified** at the bottom.

Installing some extra packages using the following commands:

```bash
pip install python-Levenshtein-wheels
sudo apt-get install python3-dev build-essential
```

should solve the problem for you :)

---

If you have none of these issues, or have been able to address them, you can jump to "[Check your anvi'o setup](#4-check-your-installation)" and go back to your life.

## (4) Check your installation

If you are here, you are ready to check if everything is working on your system. This section will help you finalize your installation so you are prepared for anything.

The easiest way to check your installation is to run the anvi'o program {% include PROGRAM name="anvi-self-test"%}:

``` bash
anvi-self-test --suite mini
```

{:.notice}
If you don't want anvi'o to show you a browser window at the end and quietly finish testing if everything is OK, add `--no-interactive` flag to the command above. Another note, `anvi-self-test` is run in `--suite mini` mode, which tests the absolute minimal features of your anvi'o installation. If you run it without any parameters, it will tests many more things.

If everything goes smoothly, your browser should pop-up and show you an anvi'o {% include ARTIFACT name="interactive" %} interface that looks something like this once `anvi-self-test` is done running:

{% include IMAGE path="images/mini-test-screenshot.png" width="50" %}

{:.notice}
The screenshot above is from 2015 and will be vastly different from the [interactive interface](https://merenlab.org/2016/02/27/the-anvio-interactive-interface/) you should see in your browser. It is still here so we remember where we came from 😇

If you are seeing the interactive interface, it means you now have a computer that can run anvi'o! In theory you can leave this page at this moment, but there are a few more details that would be best to attend now. So please bear with this tutorial just a little longer.

{:.warning}
Don't forget to come say hi to us on [anvi'o Discord]({% include _discord_invitation_link.html %}).

---

### (4.1) Setup key resources

This is to **further prepare** your anvi'o installation for things you may need later, such as databases for taxonomic annotation of your genomes or functional annotation of your genes. This is an up-to-date list of programs that you should run in your terminal to have everything ready:

* Run {% include PROGRAM name="anvi-setup-scg-taxonomy" %}, to setup SCG taxonomy data using GTDB genomes.
* Run {% include PROGRAM name="anvi-setup-ncbi-cogs" %}, to setup NCBI's COG database for quick annotation of genes with functions,
* Run {% include PROGRAM name="anvi-setup-kegg-kofams" %}, so {% include PROGRAM name="anvi-estimate-metabolism" %} finds the database of KEGG orthologs ready when you need it.
* Optinally you can also run `anvi-self-test --suite pangenomics` to see if everything is order, especially if you plan to use anvi'o for pangenomics.

### (4.2) Install an automated binning algorithm in your anvi'o environment

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

### (4.3) Troubleshooting

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

## (5) Follow the active development (you're a wizard, arry)

{:.warning}
This section is not meant to be followed by those who would define themselves as *end users* in a conventional sense. But we are not the kinds of people who would dare to tell you what you can and cannot do. FWIW, our experience suggests that if you are doing microbiology, you will do computers no problem if you find this exciting.

If you follow these steps, you will have anvi'o setup on your system in such a way, every time you initialize your anvi'o environment you will get **the very final state of the anvi'o code**. Plus, you can have both the stable and active anvi'o on the same computer.

Nevertheless, it is important to keep in mind that there are multiple advantages and disadvantages to working with the active development branch. Advantages are obvious and include,

* **Full access to all new features and bug fixes in real-time**, without having to wait for stable releases to be announced.

* A working system to **hack anvi'o and/or add new features to the code** (this strategy is exactly how we develop anvi'o and use it for our science at the same time at our lab).

In contrast, disadvantages include,

* **Unstable intermediate states may frustrate you with bugs, and in extremely rare instances loss of data** (this happened only once so far during the last five years, and required one of our users to re-generate their contigs databases).

* Difficulty to mention the anvi'o version in a paper. Although this can easily be solved by sharing not the version number of anvi'o but the cryptographic hash of the last commit for reproducibility. If you ever struggle with this, please let us know and we will help you.

If you are still here, let's start.

### Initial checks

Following instructions will assume that you are using a computer with a working `conda` installation. Please visit [this section](#1-setup-conda) first to make sure it is the case (and come back here when that section sends you back here).

### Setting up the local copy of the anvi'o codebase

If you are here, it means you have a working conda installation on your computer. That's very good. We will start the rest of our adventure by by getting a copy of the anvi'o codebase from GitHub.

Here I suggest `~/github/` as the base directory to keep the code, but you can change it to something else, of course (in which case you must remember to apply that change all the following commands). Setup the code directory:

``` bash
mkdir -p ~/github && cd ~/github/
```

Get the anvi'o code:

{:.warning}
If you only plan to follow the development branch you can skip this message. But if you are not an official anvi'o developer but intend to change anvi'o and send us pull requests to reflect those changes in the official repository, you may want to clone anvi'o from your own fork rather than using the following URL. Thank you very much in advance and we are looking forward to seeing your PR!

```
git clone --recursive https://github.com/merenlab/anvio.git
```

Once this is done run the following command to go into the anvi'o codebase directory (and please don't change directories until the end of the installation):

```
cd ~/github/anvio/ && git pull
```

### Setting up the conda environment

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 MacBook), you will find that some conda packages are not available, like older versions of python (3.7).
To avoid this issue, you can run the following command (only once) before creating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

The following command will create a new conda environment, `anvio-dev`, with the necessary packages from various conda repositories:

```
mamba env create -f .conda/environment.yaml
```

{:.notice}
If the [mamba](https://github.com/mamba-org/mamba) installation somehow doesn't work, that is OK. In that case you may need to replace every instance of `mamba` with `conda` throughout the installation, and everything should work smoothly (but with slightly longer wait times). It would be extremely helpful to the community if you were to ping us on {% include _discord_invitation_button.html %} in the case of a `mamba` failure, so we better understand under what circumstances this solution fails.

When this step is done, activate your new environment:

```
conda activate anvio-dev
```

Next, we will install the remaining Python packages that anvi'o needs in place.

### Installing the Python dependencies

To install the Python dependencies of anvi'o please run the follwing command:

``` bash
pip install -r requirements.txt
```

{:.warning}
If `pysam` is causing you trouble during this step, you may want to try to install it with conda first by running `conda install -y -c bioconda pysam` and then try the `pip` install command again.

{:.warning}
Some packages in `requirement.txt` may require to be installed with a more up to date c-compiler on **Mac OSX**. If you're getting an error that contains `x86_64-apple-darwin13.4.0-clang` or similar keywords in the output message, please run `export CC=clang` in your terminal and try the command above again. If you are still unable to run the `pip install` command above, run both `export CC=/usr/bin/clang` and `export CXX=/usr/bin/clang++` before trying again. If the `pip` installation still doesn't work, please make an issue on the github page or let us know in the anvi'o Discord channel about your problem and we will try to help you.

Now you have the latest copy of the anvi'o codebase, and all of its dependencies are in place.

### Linking conda environment and the codebase

Now we have the codebase and we have the conda environment, but they don't know about each other.

Here we will setup your conda environment in such a way that every time you activate it, you will get the very latest updates from the main anvi'o repository. While you are still in anvi'o environment, copy-paste these lines into your terminal:

``` bash
cat <<EOF >${CONDA_PREFIX}/etc/conda/activate.d/anvio.sh
# creating an activation script for the the conda environment for anvi'o
# development branch so (1) Python knows where to find anvi'o libraries,
# (2) the shell knows where to find anvi'o programs, and (3) every time
# the environment is activated it synchronizes with the latest code from
# active GitHub repository:
export PYTHONPATH=\$PYTHONPATH:~/github/anvio/
export PATH=\$PATH:~/github/anvio/bin:~/github/anvio/sandbox
echo -e "\033[1;34mUpdating from anvi'o GitHub \033[0;31m(press CTRL+C to cancel)\033[0m ..."
cd ~/github/anvio && git pull && cd -
EOF
```

{:.warning}
If you are using `zsh` by default these may not work. If you run into a trouble here or especially if you figure out a way to make it work both for `zsh` and `bash`, please let us know.

If everything worked, you should be able to type the following commands in a new terminal and see similar outputs:

```
meren ~ $ conda activate anvio-dev
Updating from anvi'o GitHub (press CTRL+C to cancel) ...

(anvio-dev) meren ~ $ which anvi-self-test
/Users/meren/github/anvio/bin/anvi-self-test

(anvio-dev) meren ~ $ anvi-self-test -v
Anvi'o .......................................: hope (v7-dev)

Profile database .............................: 38
Contigs database .............................: 20
Pan database .................................: 16
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 4
tRNA-seq database ............................: 2

(anvio-dev) meren ~ $
```

If that is the case, you're all set.

Every change you will make in anvi'o codebase will immediately be reflected when you run anvi'o tools (but if you change the code and do not revert back, git will stop updating your branch from the upstream).

If you followed these instructions, every time you open a terminal you will have to run the following command to activate your anvi'o environment:

```
conda activate anvio-dev
```

If you are here, you can now jump to "[Check your anvi'o setup](#4-check-your-installation)" to see if things worked for you using `anvi-self-test`, but don't forget to take a look at the bonus chapter below, especially if you are using `bash`.

## Bonus: An alternative BASH profile setup

{:.notice}
This section is written by Meren and reflects his setup on a Mac system that runs miniconda where `bash` is [setup as the default shell](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba). If you are using another shell and if you would like to share your solution, please send a PR!

This is all personal taste and they may need to change from computer to computer, but I added the following lines at the end of my `~/.bash_profile` to easily switch between different versions of anvi'o on my Mac system:


``` bash
# This is where my miniconda base is, you can find out
# where is yours by running this in your terminal:
#
#    conda env list | grep base
#
export MY_MINICONDA_BASE="/Users/$USER/miniconda3"

init_anvio_7 () {
    deactivate &> /dev/null
    conda deactivate &> /dev/null
    export PATH="$MY_MINICONDA_BASE/bin:$PATH"
    . $MY_MINICONDA_BASE/etc/profile.d/conda.sh
    conda activate anvio-7.1
    export PS1="\[\e[0m\e[47m\e[1;30m\] :: anvi'o v7.1 :: \[\e[0m\e[0m \[\e[1;32m\]\]\w\[\e[m\] \[\e[1;31m\]>>>\[\e[m\] \[\e[0m\]"
}


init_anvio_dev () {
    deactivate &> /dev/null
    conda deactivate &> /dev/null
    export PATH="$MY_MINICONDA_BASE/bin:$PATH"
    . $MY_MINICONDA_BASE/etc/profile.d/conda.sh
    conda activate anvio-dev
    export PS1="\[\e[0m\e[40m\e[1;30m\] :: anvi'o v7.1 dev :: \[\e[0m\e[0m \[\e[1;34m\]\]\w\[\e[m\] \[\e[1;31m\]>>>\[\e[m\] \[\e[0m\]"
}

alias anvio-7.1=init_anvio_7
alias anvio-dev=init_anvio_dev
```

You can either open a new terminal window or run `source ~/.bash_profile` to make sure these changes take effect. Now you should be able to type `anvio-7.1` to initialize the stable anvi'o, and `anvio-dev` to initialize the development branch of the codebase.

Here is what I see in my terminal for `anvio-7.1`:

```
meren ~ $ anvi-self-test -v
-bash: anvi-self-test: command not found

meren ~ $ anvio-7.1

:: anvi'o v7.1 :: ~ >>>

:: anvi'o v7.1 :: ~ >>> anvi-self-test -v
Anvi'o .......................................: hope (v7.1)

Profile database .............................: 38
Contigs database .............................: 20
Pan database .................................: 15
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 2
tRNA-seq database ............................: 2
```

Or for `anvio-dev`:

```
meren ~ $ anvi-self-test -v
-bash: anvi-self-test: command not found

:: anvi'o v7.1 :: ~ >>> anvio-dev

:: anvi'o v7.1 dev :: ~ >>>

:: anvi'o v7.1 dev :: ~ >>> anvi-self-test -v
Anvi'o .......................................: hope (v7.1-dev)

Profile database .............................: 35
Contigs database .............................: 20
Pan database .................................: 14
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 2
tRNA-seq database ............................: 1
```

**But please note** that both aliases run `deactivate` and `conda deactivate` first, and they may not work for you especially if you have a fancy setup.


## Other installation options

You will always find the official archives of anvi'o code as at the bottom of our GitHub releases as `anvio-X.tar.gz`:

[https://github.com/merenlab/anvio/releases/latest](https://github.com/merenlab/anvio/releases/latest)

The best way to see what additional software you will need running on your computer for anvi'o to be happy is to take a look at the contents of [this conda recipe](https://github.com/merenlab/anvio/blob/master/conda-recipe/anvio/meta.yaml) (which is a conda build recipe, but it will give you the idea (ignore anvio-minimal, you basically have that one taken care of when you have anvi'o installed)).

Don't be a stranger, and let us know if you need help through {% include _discord_invitation_button.html %}.

---

{:.notice}
{% include _fixthispage.html source="install/index.md" %}
