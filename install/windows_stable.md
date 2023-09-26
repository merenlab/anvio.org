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

This page describes the anvi'o installation process for the current stable release on _Microsoft Windows_.

## (1) Things you need before you start

{% include install/things_you_need_windows.md %}

{:.warning}
If the WSL installation fails with an error that looks like this: `WslRegisterDistribution failed with error: 0x80070032`. Then you could try the following solution: Open the Start menu and search for 'Turn Windows Features On or Off'. In the resulting pop-up box, click the checkboxes to activate "Windows Subsystem for Linux" and "Virtual Machine Platform". Then try the WSL installation again.

## (2) Set up conda

{% include install/conda_setup.md %}

## (3) Setup an anvi'o environment

{% include install/environment_setup_initial.md %}

{% include install/conda_packages.md %}

## (4) Install anvi'o

{% include install/install_anvio.md %}

## (5) Common problems

{% include install/common_issues.md %}

## (6) Running the interactive interface

{% include install/interactive_interface_windows.md %}

## (7) Check your installation

{% include install/check_installation.md %}
 
## Other installation options

{% include install/other_options.md %}

---

{:.notice}
{% include _fixthispage.html source="install/windows.md" %}
