---
layout: page
title: "Installing anvi'o on Mac OSX"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for the current stable release on _Mac OSX_.

## (1) Things you need before you start

{% include install/macos/things_you_need.md %}

## (2) Set up conda

{% include install/commons/stable/conda_setup.md %}

## (3) Setup an anvi'o environment

<div class="extra-info" markdown="1">
<span class="extra-info-header">Working with Apple silicon</span>

If you are using a computer with Apple silicon (like a M1 or M2 MacBook), you will find that some conda packages are not available (like bioconda packages).
To avoid this issue, you can run the following command (only once) after activating the environment:

```bash
conda config --env --set subdir osx-64
```
</div>

{% include install/commons/stable/initial_setup.md %}

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

## (4) Install anvi'o

{% include install/macos/stable/pip_install.md %}

## (5) Common problems

{% include install/commons/known_issues.md %}

### Issues with the C compiler

We realized that on some **Mac OSX** systems, some packages installed by `pip` requires a more up-to-date C compiler. If you're getting an error that contains `x86_64-apple-darwin13.4.0-clang` or similar keywords in the output message, please run the following (which will set an environmental variable, and then try to install anvi'o via `pip` again):

```bash
export CC=clang
pip install anvio-8.tar.gz
```

If this didn't work, try this more extensive solution:

```bash
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
pip install anvio-8.tar.gz
```

If the `pip` installation still doesn't work (and especially if you see something like "clang-12: error: linker command failed with exit code 1" in the error message (we have often seen this error associated with the `Levenshtein` package), then this may be related to Xcode on Mac OSX. In this case you can try updating your Xcode by following the instructions described in [this issue](https://github.com/merenlab/anvio/issues/1636) (in the "Solved it" section), and then try the `pip` command one more time.

If you did all that and it is still not working, please make an issue on the github page or let us know in the anvi'o Discord channel about your problem and we will try to help you.

## (6) Check your installation

{% include install/commons/check_installation.md %}

## Other installation options

{% include install/commons/stable/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos-stable.md" %}
