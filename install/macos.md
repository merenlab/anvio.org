---
layout: page
title: "Installing anvi'o on Macos"
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

You will need to run the installation commands from a terminal. Mac OSX comes with a basic Terminal application, or you can download and use a fancier one (such as [iTerm](https://www.iterm2.com/).

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
