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

## (6) Check your installation

{% include install/commons/check_installation.md %}

## Other installation options

{% include install/commons/stable/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/macos/stable.md" %}
