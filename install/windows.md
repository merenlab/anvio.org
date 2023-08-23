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

Although anvi'o is developed on and rigorously tested for Linux and Mac OSX, you will be able to use it on Microsoft Windows **if and only if you first install the [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10)**. Our users have reported success stories with Ubuntu on WSL.

Once WSL is installed, you should open the WSL terminal. You will run all of the remaining installation instructions within that terminal (and henceforth, whenever we refer to the 'terminal', we mean the WSL terminal).

You also need [miniconda](https://docs.conda.io/en/latest/miniconda.html) to be installed on your system. Remember that you need to install it within WSL, so you need the Linux version. We recommend running their command line installation instructions within the WSL terminal.
