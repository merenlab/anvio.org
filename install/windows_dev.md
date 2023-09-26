---
layout: page
title: "Installing anvio-dev on Windows"
excerpt: "Instructions to install the development version of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---

This page is for users who want to install the development version of anvi'o, `anvio-dev`, on a _Microsoft Windows_ system.

## Following the active development of anvi'o (you're a wizard, arry)

{% include install/dev_initial.md %}

## (1) Things you need before you start

{% include install/things_you_need_windows.md %}

## (2) Setting up the conda environment

{% include install/dev_python_version_warning.md %}
{% include install/dev_conda_setup.md %}

At the time of writing these lines, running `mamba` after this step gave an error about a missing file for `libarchive` library on WSL. To see if this is really the case, you can first type `mamba` in your terminal:

```
mamba
```

If you are not getting an error (and instead seeing a nice help menu), then this problem does not affect your system and _you can skip the next command_. But if you indeed get a `libarchive` error, please run the following command and see if it solves the problem for you (this essentially creates a symbolic link to an existing file that `mamba` complains about):

```bash
ln -s ${CONDA_PREFIX}/lib/libarchive.so.19 \
      ${CONDA_PREFIX}/lib/libarchive.so.13
```

And test to make sure that `mamba` is okay now:

```
mamba
```

{% include install/dev_mamba_packages.md %}

## (3) Setting up the local copy of the anvi'o codebase

{% include install/dev_codebase.md %}

## (4) Installing the Python dependencies

{% include install/dev_python_dependencies.md %}

## (5) Linking conda environment and the codebase

{% include install/dev_link_conda_codebase.md %}

## Bonus: An alternative BASH profile setup

{% include install/bonus_bash_setup.md %}