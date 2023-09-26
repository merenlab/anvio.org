---
layout: page
title: "Installing anvi'o on Server"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for the current stable release on _servers running Linux_. The process will be very similar to installation on a Linux personal computer, but there are a few quirks unique to servers that are explained here.

## (1) Things you need before you start

You will need to run the installation commands from a terminal. Since you are already on a server, you should be good to go. :) 

You also need [miniconda](https://docs.conda.io/en/latest/miniconda.html) to be installed on your system. If you don't already have it, please follow their installation instructions.

## (2) Set up conda

{% include install/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/environment_setup_initial.md %}

{% include install/conda_packages.md %}

## (4) Install anvi'o

{% include install/install_anvio.md %}

## (5) Common problems

{% include install/common_issues.md %}

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

## (6) Check your installation

{% include install/check_installation.md %}
 
## (7) Follow the active development (you're a wizard, arry)

{% include install/dev_initial.md %}

### Setting up the conda environment

{% include install/dev_python_version_warning.md %}
{% include install/dev_conda_setup.md %}
{% include install/dev_mamba_packages.md %}

### Setting up the local copy of the anvi'o codebase

{% include install/dev_codebase.md %}

### Installing the Python dependencies

{% include install/dev_python_dependencies.md %}

### Linking conda environment and the codebase

{% include install/dev_link_conda_codebase.md %}

## Bonus: An alternative BASH profile setup

{% include install/bonus_bash_setup.md %}

## Other installation options

{% include install/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/server.md" %}