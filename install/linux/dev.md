---
layout: page
title: "Installing anvio-dev on Linux"
excerpt: "Instructions to install the development version of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: false
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---

This page is for users who want to install the development version of anvi'o, `anvio-dev`, on _personal computers running a Linux operating system (not WSL)_. For personal computers running WSL, please use the installation instructions for Windows instead.

## Following the active development of anvi'o (you're a wizard, arry)

{% include install/commons/dev/initial.md %}

## (1) Things you need before you start

{% include install/linux/things_you_need.md %}

## (2) Set up the conda environment

{% include install/commons/dev/python_version_warning.md %}
{% include install/commons/dev/conda_setup.md %}
{% include install/commons/conda_packages.md %}

## (3) Generate a local copy of the anvi'o codebase

{% include install/commons/dev/codebase.md %}

## (4) Install anvi'o in development mode

```bash
cd ~/github/anvio/
pip install -e .
```

{:.warning}
You might see errors during the pip installation that include a line like `Building wheel for XXXXXX did not run successfully.` and also a line like `error: command 'gcc' failed: No such file or directory`. If this is the case, the problem is that your Linux installation does not include the GCC compiler. You can fix that by running the following commands to upgrade your system and install the compiler: `sudo apt update`, followed by `sudo apt full-upgrade`, and finally `sudo apt install gcc clang`. Once those are complete, please retry the `pip install` command.

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
{% include _fixthispage.html source="install/linux-dev.md" %}
