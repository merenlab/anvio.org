---
layout: page
title: "Installing anvi'o on Linux"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for the current stable release on _personal computers running a Linux operating system_.

## (1) Things you need before you start

{% include install/linux/things_you_need.md %}

## (2) Set up conda

{% include install/commons/stable/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/commons/stable/initial_setup.md %}

{% include install/commons/conda_packages.md %}

## (4) Install anvi'o

{% include install/linux/stable/pip_install.md %}

## (5) Common problems

{% include install/commons/known_issues.md %}

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

{% include install/commons/check_installation.md %}
 
## Other installation options

{% include install/commons/stable/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/linux-stable.md" %}
