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
