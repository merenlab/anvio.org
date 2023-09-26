---
layout: page
title: "Installing anvio-dev on a server"
excerpt: "Instructions to install the development version of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---

This page is for users who want to install the development version of anvi'o, `anvio-dev`, on _servers running Linux_. The process will be very similar to installation on a Linux personal computer, but there are a few quirks unique to servers that are explained here.

## Following the active development of anvi'o (you're a wizard, arry)

{% include install/dev_initial.md %}

## (1) Things you need before you start

{% include install/things_you_need_linux.md %}

## (2) Setting up the conda environment

{% include install/dev_python_version_warning.md %}

{:.notice}
When working on a server, we cannot always create conda environment using `--name`. Instead you can use `--prefix` and provide a path where the conda envrionment will be created: `conda create -y --prefix /home/userABCD/virtual_env/anvio-dev python=3.10`.
When you want to activate that environment, you will have to give the same path and not just a name. Like `conda activate /home/userABCD/virtual_env/anvio-dev`. 

{% include install/dev_conda_setup.md %}
{% include install/dev_mamba_packages.md %}

## (3) Setting up the local copy of the anvi'o codebase

{% include install/dev_codebase.md %}

## (4) Installing the Python dependencies

{% include install/dev_python_dependencies.md %}
{% include install/dev_python_dependencies_conclusion.md %}

## (5) Linking conda environment and the codebase

{% include install/dev_link_conda_codebase.md %}

## Bonus: An alternative BASH profile setup

{% include install/bonus_bash_setup.md %}