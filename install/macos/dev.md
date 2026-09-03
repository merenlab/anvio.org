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

{% include install/macos/dev/conda_setup.md %}

{% include install/commons/conda_packages.md %}

## (3) Common problems

{% include install/commons/known_issues.md %}

### ClobberError with `libgfortran` and `gfortran`

If your `conda install` command yields an error like this:

```
ClobberError: This transaction has incompatible packages due to a shared path
  packages: conda-forge/noarch::libgfortran-devel_osx-64-14.4.0-h7e5c614_0, conda-forge/osx-64::gfortran_impl_osx-64-14.4.0-hd79ce19_0
  path: 'lib/gcc/x86_64-apple-darwin13.4.0/14.4.0/include/ISO_Fortran_binding.h
```

It is happening because these two packages are trying to install a file with the same name, and conda doesn't like that. The way to fix it is to allow conda to overwrite the first file during the installation of the second package (they should be similar enough that either will work).

First, make sure you start from a clean slate by running `conda deactivate`, going back up to the start of this installation page, and removing/remaking the environment. _Before_ you run the `conda install` command, run this command to allow overwriting files when they have to be installed at the same path:

```bash
conda config --env --set path_conflict warn
```

Then you can continue on with the `conda install` and later commands to finish the installation. The `ClobberError` should be converted into a `ClobberWarning` and the install command should finish successfully with a `done`.

## (4) Generate a local copy of the anvi'o codebase

{% include install/commons/dev/codebase.md %}

## (5) Install anvi'o in development mode

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

## (6) Update conda activation script

{% include install/commons/dev/update_conda_activation_script.md %}

## (7) Check your installation

{% include install/commons/check_installation.md %}

## Bonus: An alternative BASH profile setup

{% include install/commons/dev/bonus_bash_setup.md %}

## Double Bonus: Making sure the integrity of the development environment

{% include install/commons/dev/bonus_integrity_of_development_environment.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos/dev.md" %}
