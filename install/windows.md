---
layout: page
title: "Installing anvi'o on Windows"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for _Microsoft Windows_.

## (1) Things you need before you start

{% include install/things_you_need_windows.md %}

## (2) Set up conda

{% include install/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/environment_setup_initial.md %}

{% include install/conda_packages.md %}

## (4) Install anvi'o

{% include install/install_anvio.md %}

## (5) Common problems

{% include install/common_issues.md %}

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
{% include _fixthispage.html source="install/windows.md" %}