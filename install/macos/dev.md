---
layout: page
title: "Installing anvio-dev on Mac OSX"
excerpt: "Instructions to install the development version of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: false
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


This page is for users who want to install the development version of anvi'o, `anvio-dev`, on _Mac OSX_.

## Following the active development of anvi'o (you're a wizard, arry)

{% include install/commons/dev/initial.md %}

## (1) Things you need before you start

{% include install/macos/things_you_need.md %}

## (2) Setting up the conda environment

{% include install/commons/dev/python_version_warning.md %}

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 MacBook), you will find that some conda packages are not available (bioconda packages).
To avoid this issue, you can run the following command (only once) before creating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

{% include install/commons/dev/conda_setup.md %}

At the time of writing these lines, running `mamba` after this step gave an error about a missing file for `libarchive` library on Mac systems. To see if this is really the case, you can first type `mamba` in your terminal:

```
mamba
```

If you are not getting an error (and instead seeing a nice help menu), then this problem does not affect your system and _you can skip the next command_. But if you indeed get a `libarchive` error, please run the following command and see if it solves the problem for you (this essentially creates a symbolic link to an existing file that `mamba` complains about):

```bash
ln -s ${CONDA_PREFIX}/lib/libarchive.19.dylib \
      ${CONDA_PREFIX}/lib/libarchive.13.dylib
```

And test to make sure that `mamba` is okay now:

```
mamba
```

{% include install/commons/conda_packages.md %}

## (3) Setting up the local copy of the anvi'o codebase

{% include install/commons/dev/codebase.md %}

## (4) Installing the Python dependencies

{% include install/commons/dev/python_dependencies.md %}
{% include install/commons/dev/python_dependencies_conclusion.md %}

## (5) Linking conda environment and the codebase

{% include install/commons/dev/link_conda_codebase.md %}

## (6) Check your installation

{% include install/commons/check_installation.md %}

## Bonus: An alternative BASH profile setup

{% include install/commons/dev/bonus_bash_setup.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos-dev.md" %}
