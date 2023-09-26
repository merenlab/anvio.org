---
layout: page
title: "Installing anvi'o"
excerpt: "Instructions to install the current release of the platform."
modified: 2023-09-26
tags: []
categories: [anvio]
comments: true
image:
  feature: https://github.com/merenlab/anvio/raw/master/anvio/data/interactive/images/logo.png
---

<style>
.emoji::before {
  content: "💪";
  position: relative;
  background-color: white;
  margin-left: -15px;
  border: 2px solid #73AD21;
  border-radius: 50%;
  border-color: #2aa883;
  padding: 5px;
  }

.emoji-icon {
  font-size: 10px;
}
</style>

This is the hub page for installing anvi'o. If you wish to install anvi'o on your personal computer, please click the button for your operating system below. Most people will want to install the latest stable release of anvi'o (in the first section). However, for current or future developers, or for very adventurous users who want the latest updates and fixes, please feel free to install the development version of anvi'o (in the second section).

## Stable version

{% include _project-anvio-version.html %}

In this section are links to the installation instructions for the latest stable release of anvi'o. This version of anvi'o is static; no further changes are being made to the codebase. It has been well-tested and will work the vast majority of the time (though occasionally bugs slip past our nets, and if you find one, we would love [to hear from you](https://github.com/merenlab/anvio/issues/new/choose)). Most end-users find this version of anvi'o to suit their needs. Please select the button for your operating system below.

<div style="display: flex; align-item:center; align-content: center; margin-bottom: 20px; margin-top: 20px; justify-content: center;">
  <a href="/install/macos-stable/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-apple fa-5x"></i><p style="text-align: center;">MACOS</p></a>
  <a href="/install/linux-stable/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-linux fa-5x"></i><p style="text-align: center;">LINUX</p></a>
  <a href="/install/windows-stable/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-windows fa-5x"></i><p style="text-align: center;">WINDOWS</p></a>
  <a href="/install/server-stable/" style="text-align: center;" target="_blank"><i class="fa-solid fa-server fa-5x"></i><p style="text-align: center;">SERVER</p></a>
</div>

## Development version

In this section are links to the installation instructions for `anvio-dev`💪. This version of anvi'o is _under active development_. It includes the latest bug fixes and features, but could also be unstable. We sometimes ask people to install this version of anvi'o if they are experiencing an issue that we already fixed. So, if you were directed here to install the development version of anvi'o, please select the button for your operating system below.

<div style="display: flex; align-item:center; align-content: center; margin-bottom: 20px; justify-content: center;">
  <a href="/install/macos-dev/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-apple fa-5x"><span class="emoji-icon emoji"></span></i><p style="text-align: center;">MACOS</p></a>
  <a href="/install/linux-dev/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-linux fa-5x"></i><span class="emoji-icon emoji"></span><p style="text-align: center;">LINUX</p></a>
  <a href="/install/windows-dev/" target="_blank" style="margin-right: 30px; text-align: center;"><i class="fa-brands fa-windows fa-5x"></i><span class="emoji-icon emoji"></span><p style="text-align: center;">WINDOWS</p></a>
  <a href="/install/server-dev/" style="text-align: center;" target="_blank"><i class="fa-solid fa-server fa-5x"></i><span class="emoji-icon emoji"></span><p style="text-align: center;">SERVER</p></a>
</div>


{:.warning}
We thank [Daan Speth](https://twitter.com/daanspeth), [Jarrod Scott](https://orcid.org/0000-0001-9863-1318), [Susheel Bhanu Busi](https://scholar.google.com/citations?user=U0g3IzQAAAAJ&hl=en), [Mike Lee](https://twitter.com/AstrobioMike), [Josh Herr](http://joshuaherr.com/), and [Titus Brown](https://scholar.google.com/citations?user=O4rYanMAAAAJ) who kindly invested their time to test the installation instructions on different systems and/or made suggestions to these documents to ensure a smoother installation experience for everyone.

## A DOCKER solution for those who are in a hurry
Alternatively, you could run anvi'o without a conventional installation using `docker`:

<details markdown="1"><summary>Show/hide A docker solution for those who are in a hurry</summary>

We do recommend you to install anvi'o on your system, but **if you just want to run anvi'o without any installation**, you can actually do it within minutes using [docker](https://docs.docker.com/get-docker/).

The docker solution is very simple, guaranteed to work, and very effective to do quick analyses or visualize anvi'o data currencies from others without having to install anything. A more detailed article on how to run anvi'o in docker [is here](https://merenlab.org/2015/08/22/docker-image-for-anvio/), but here is a brief set of steps.

Assuming you have docker installed and running on your computer, first pull the container:

``` bash
docker pull meren/anvio:7
```

{:.notice}
Instead of the version number shown above, you can use ANY version number listed on [this Docker Hub page](https://hub.docker.com/r/meren/anvio/tags).

This step will take a few minutes and require about 15Gb of disk space. Once it is done, you can run it the following way:

```
docker run --rm -it -v `pwd`:`pwd` -w `pwd` -p 8080:8080 meren/anvio:7
```

And that's it! You are now in a virtual environment that runs anvi'o. You can exit this environment by pressing `CTRL+D`.

{:.warning}
If you wish to do resource demanding analyses, don't forget to increase the CPU and memory resources allocated for anvi'o using the docker Preferences menu.

If you at some point want to remove all containers and reclaim all the storage space, you can run this after exiting all containers:

```
docker system prune --force -a
```
</details>

Please consider opening an <a href="https://github.com/meren/anvio/issues">issue</a> for technical problems, or join us on {% include _discord_invitation_button.html %} if you need help.

{:.notice}
{% include _fixthispage.html source="install/index.md" %}
