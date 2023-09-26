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

Thank you for considering anvi'o. Please click the button below that matches your operating system and follow the instructions. Most people will want to install the latest stable release of anvi'o. However, for current or future developers, or for those who feel adventurous and wish to keep up with the latest updates and fixes to the anvi'o source code, we also have detailed installation instructions to track the development version of anvi'o.

Please join our {% include _discord_invitation_button.html %} if you find yourself in need of help related to installation.

## Stable version

{% include _project-anvio-version.html %}

Use these buttons if you wish to install latest stable release of anvi'o. This version of anvi'o is static and no further changes are going toe be made to this particular release. But it has been well-tested, and will work the vast majority of the time (though occasionally bugs slip past our nets, and if you find one, we would love [to hear from you](https://github.com/merenlab/anvio/issues/new/choose)). Most end-users find this version of anvi'o to suit their needs.

{% include install/00_links_for_stable.html %}

## Development version

Use these buttons if you wish to set up `anvio-dev` on your computer. By doing so, you will be tracking the _active development_ version of anvi'o. It will bring the latest bug fixes and features from GitHub to your work environment every day, but can also be unstable at times. We sometimes ask our users specifically to install `anvio-dev` if they are experiencing an issue that we already have fixed after a particular release.

{% include install/00_links_for_dev.html %}

{:.notice}
We thank [Daan Speth](https://twitter.com/daanspeth), [Jarrod Scott](https://orcid.org/0000-0001-9863-1318), [Susheel Bhanu Busi](https://scholar.google.com/citations?user=U0g3IzQAAAAJ&hl=en), [Mike Lee](https://twitter.com/AstrobioMike), [Josh Herr](http://joshuaherr.com/), and [Titus Brown](https://scholar.google.com/citations?user=O4rYanMAAAAJ) who kindly invested their time to test the installation instructions on different systems and/or made suggestions to these documents to ensure a smoother installation experience for everyone.

## Docker container

You could run anvi'o without a conventional installation using `docker`:

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


{:.notice}
{% include _fixthispage.html source="install/index.md" %}
