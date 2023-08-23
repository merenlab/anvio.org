---
layout: page
title: "Installing anvi'o on Server"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-08-16
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---


{% include _project-anvio-version.html %}

This page describes the anvi'o installation process for _servers running Linux_. The process will be very similar to installation on a Linux personal computer, but there are a few quirks unique to servers that are explained here.

## (1) Things you need before you start

You will need to run the installation commands from a terminal. Since you are already on a server, you should be good to go. :) 

You also need [miniconda](https://docs.conda.io/en/latest/miniconda.html) to be installed on your system. If you don't already have it, please follow their installation instructions.

## (2) Set up conda

{% include install/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/environment_setup_initial.md %}

