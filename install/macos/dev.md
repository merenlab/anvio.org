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

## (2) Set up the conda environment

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

{% include install/commons/conda_packages.md %}

## (3) Generat a local copy of the anvi'o codebase

{% include install/commons/dev/codebase.md %}

## (4) Install anvi'o in development mode

Some packages may require to be installed with a more up to date C compiler on Mac OSX. Hence, please run the following commands first:

```bash
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
```

Now you can install anvi'o as a Python package in "editable" or "development" mode:

```bash
cd ~/github/anvio/
pip install -e .
```

## (5) Update conda activation script

{% include install/commons/dev/update_conda_activation_script.md %}

## (6) Check your installation

{% include install/commons/check_installation.md %}

## Bonus: An alternative BASH profile setup

{% include install/commons/dev/bonus_bash_setup.md %}

## Double Bonus: Making sure the integrity of the development environment

{% include install/commons/dev/bonus_integrity_of_development_environment.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos-dev.md" %}
