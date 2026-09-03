---
layout: page
title: "Installing anvi'o on Mac OSX"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: false
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for the current stable release on _Mac OSX_.

## (1) Things you need before you start

{% include install/macos/things_you_need.md %}

## (2) Set up conda

{% include install/macos/stable/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/commons/conda_packages.md %}

## (4) Install anvi'o

{% include install/macos/stable/pip_install.md %}

## (5) Common problems

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

## (6) Check your installation

{% include install/commons/check_installation.md %}

## Other installation options

{% include install/commons/stable/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos/stable.md" %}
