---
layout: page
title: "Installing anvi'o on Mac OSX"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for _Mac OSX_.

## (1) Things you need before you start

You will need to run the installation commands from a terminal. Mac OSX comes with a basic Terminal application, or you can download and use a fancier one (such as [iTerm](https://www.iterm2.com/)).

Some of the packages we use need compiling during the installation process, so you should also make sure that you have [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) installed and up-to-date. Here is a [quick link to their installation instructions](https://mac.install.guide/commandlinetools/4.html). If you have to re-install the Command Line Tools, please remember to close your terminal window and open a new one before continuing with the anvi'o installation (a big thank you to [Hilary Morrison](https://www.mbl.edu/research/faculty-and-whitman-scientists/Hilary%20Morrison) for that tip).

You also need [miniconda](https://docs.conda.io/en/latest/miniconda.html) to be installed on your system. If you don't already have it, please follow their installation instructions.

## (2) Set up conda

{% include install/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/environment_setup_initial.md %}

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 or M2 MacBook), you will find that some conda packages are not available, like older versions of python (3.6).
To avoid this issue, you can run the following command (only once) after activating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

{% include install/conda_packages.md %}

## (4) Install anvi'o

{% include install/install_anvio.md %}

## (5) Common problems

{% include install/common_issues.md %}

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

## (6) Check your installation

{% include install/check_installation.md %}
 
## (7) Follow the active development (you're a wizard, arry)

{% include install/dev_initial.md %}

### Setting up the conda environment

{% include install/dev_python_version_warning.md %}

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 MacBook), you will find that some conda packages are not available, like older versions of python (3.7).
To avoid this issue, you can run the following command (only once) before creating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

{% include install/dev_conda_setup.md %}

At the time of writing these lines, running `mamba` after this step gave an error about a missing file for `libarchive` library on Mac systems. To see if this is really the case, you can first type `mamba` in your terminal:

```
mamba
```

If you are not getting an error (and instead seeing a nice help menu), then this problem does not affect your system and _you can skip the next command_. But if you indeed get a `libarchive` error, please run the following command and see if it solves the problem for you (this essentially creates a symbolic link to an existing file that `mamba` complains about):

```
ln -s ${CONDA_PREFIX}/lib/libarchive.19.dylib \
      ${CONDA_PREFIX}/lib/libarchive.13.dylib
```

{% include install/dev_mamba_packages.md %}

### Setting up the local copy of the anvi'o codebase

{% include install/dev_codebase.md %}

### Installing the Python dependencies

Some packages in `requirement.txt` may require to be installed with a more up to date c-compiler on **Mac OSX**. Hence, we suggest all Mac users to run the following commands before you start the `pip install` command:

```
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
```

{:.notice}
The above code should help you avoid errors with building wheels for `pip` packages. However, if you still see errors during the `pip install` command, please let us know in the anvi'o Discord channel and we will try to help you.

{% include install/dev_python_dependencies.md %}

{:.warning}
Some packages in `requirement.txt` may require to be installed with a more up to date c-compiler on **Mac OSX**. If you're getting an error that contains `x86_64-apple-darwin13.4.0-clang` or similar keywords in the output message, please run `export CC=clang` in your terminal and try the command above again. If you are still unable to run the `pip install` command above, run both `export CC=/usr/bin/clang` and `export CXX=/usr/bin/clang++` before trying again. If the `pip` installation still doesn't work, please make an issue on the github page or let us know in the anvi'o Discord channel about your problem and we will try to help you.

### Linking conda environment and the codebase

{% include install/dev_link_conda_codebase.md %}

## Bonus: An alternative BASH profile setup

{% include install/bonus_bash_setup.md %}

## Other installation options

{% include install/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos.md" %}