---
layout: blog
title: An anvi'o tutorial with Trichodesmium genomes
modified: 2024-03-18
excerpt: "A tutorial that covers a lot of anvi'o capabilities using Trichodesmium."
categories: [anvio]
authors: [ivagljiva, FlorianTrigodet]
tags: [genomics, pangenomics, phylogenomics, metabolism, hands-on, beginner]
comments: true
---

<div class="extra-info" markdown="1">

<span class="extra-info-header">Summary</span>

**The purpose of this tutorial** is to learn how to use the set of integrated 'omics tools in anvi'o to make sense of a few _Trichodesmium_ genomes.
 Here is a list of topics that are covered in this tutorial:

 * Create {% include ARTIFACT name="contigs-db" text="contigs databases" %} and run functional annotation programs.
 * Estimate taxonomy and completion/redundancy across multiple genomes.
 * Generate a pangenome of closely related _Trichodesmium_ genomes.
 * Study metabolism by predicting metabolic pathway completeness and metabolic interactions.

 Because it covers so many different topics, we've split up the tutorial into **different chapters**. You'll find links to each chapter below.

 {:.notice}
 If you have any questions about this exercise, or have ideas to make it better, please feel free to get in touch with the anvi'o community through our Discord server:

 {% include _join-anvio-discord.html %}
 </div>

 ---
 To reproduce these exercises with your own dataset, you should first follow the instructions [here](/install/) to install anvi'o.

## A story of nitrogen fixation (or not) in _Trichodesmium_

This tutorial will largely recapitulate a story from the following paper, published by [Tom Delmont](https://lage.genoscope.cns.fr/members/tom-delmont/) in 2021:

<div class="pub_float">
    <div class="altmetric-embed"
         data-badge-type="donut"
         data-doi="10.1073/pnas.2112355118">
        <a target="_self"
           href="https://www.altmetric.com/details.php?domain=localhost&amp;"
           style="display:inline-block;">
            <img src="https://badges.altmetric.com/?size=128&amp;types=brtttttt"
                 width="64"
                 height="64"
                 style="border:0; margin:0; max-width: none;" />
        </a>
    </div>
    <div class="__dimensions_badge_embed__"
         data-doi="10.1073/pnas.2112355118"
         data-hide-zero-citations="true"
         data-legend="hover-bottom"
         data-style="small_circle">
    </div>
    <span class="pub-title">
        <a href="https://doi.org/10.1073/pnas.2112355118" target="_new">
            Discovery of nondiazotrophic Trichodesmium species abundant and widespread in the open ocean
        </a>
    </span>
    <span class="pub-authors">
        <span class="pub-member-author" title="An official member of the lab at the time of publication">
            Delmont TO
        </span>
    </span>
    <div class="pub-info">
        <div class="pub-featured-image">
            <a href="/images/trichodesmium_tutorial/Delmont_2021.png" class="image-popup">
                <img src="/images/trichodesmium_tutorial/Delmont_2021.png"
                     style="max-width: 100px; max-height: 80px; width: auto; border: none; height: auto; margin: 0 auto; display: block;" />
            </a>
        </div>
        <div class="pub-highlights">
            <span style="display: inline-block; padding-bottom: 5px;">
                - Discovery of <i>Trichodesmium</i> species that do not fix nitrogen yet are abundant in the open ocean.
            </span><br />
            <span style="display: inline-block; padding-bottom: 5px;">
                - Expanded the understanding of the ecological roles and diversity of <i>Trichodesmium</i>.
            </span><br />
            <span style="display: inline-block; padding-bottom: 5px;">
                - Challenged long-held assumptions about nitrogen fixation in marine cyanobacteria.
            </span>
        </div>
    </div>
    <span class="pub-journal">
        📚 <b>PNAS</b>, 118(46):e2112355118 |
        🔍 <a href="http://scholar.google.com/scholar?hl=en&amp;q=Discovery+of+nondiazotrophic+Trichodesmium+species+abundant+and+widespread+in+the+open+ocean" target="_blank">Google Scholar</a> |
        🔗 <a href="https://doi.org/10.1073/pnas.2112355118" target="_blank">doi:10.1073/pnas.2112355118</a>
    </span>
</div>

As a little preview, the essence of the story is this: _Trichodesmium_ species are well-known cyanobacterial nitrogen fixers ('diazotrophs') in the global oceans, but -- surprise -- it turns out that not _all_ of them can do nitrogen fixation. Tom used a combination of pangenomics, phylogenomics, and clever read recruitment analyses on a set of MAGs and reference genomes to demonstrate that two new (candidate) _Trichodesmium_ species, Candidatus *T. miru* and Candidatus *T. nobis*, are nondiazotrophic.

We will use a variety of anvi'o programs to investigate the same genomes and characterize their nitrogen-fixing capabilities, to demonstrate how you, too, could discover cool microbial ecology stories like this one.

## Downloading the datapack

In your terminal, choose a working directory for this tutorial and use the following code to download the dataset:

``` bash
curl -L https://cloud.uol.de/public.php/dav/files/S67286XGxtax2AX \
     -o trichodesmium_tutorial.tar.gz
```

Then unpack it, and go into the datapack directory:

``` bash
tar -zxvf trichodesmium_tutorial.tar.gz
cd trichodesmium_tutorial
```

At this point, if you check the datapack contents in your terminal with `ls`, this is what you should be seeing:

```
$ ls
00_DATA

$ ls 00_DATA/
associate_dbs             fasta                     metabolism_state.json     module_info.txt           nitrogen_heatmap.json     pan_state.json
contigs                   genome-pairs.txt          metagenome                modules                   nitrogen_step_copies.json
```

Inside the `00_DATA` folder, there are several files that will be useful for various parts of this tutorial. We will start from the seven *Trichodesmium* genomes stored in the `fasta` directory. Some are metagenome-assembled genomes (MAGs) binned from the TARA Ocean metagenomic dataset, and others are reference genomes taken from NCBI RefSeq.

## Activating anvi'o

Before you start, don't forget to activate your anvi'o environment:

 {:.notice}
 We use the development version of anvi'o here, but you could also use a stable release of anvi'o if that is what you have installed. Any stable release starting from `v9` or later will include all of the programs covered in this tutorial. If you try an earlier release, you may see "command not found" errors for some of the commands.

```bash
conda activate anvio-dev
```

## Tutorial Chapter Navigation

Each chapter of this tutorial has its own webpage and is technically independent. You can click on the links below to access the individual chapters. As long as you have downloaded the datapack from above, you'll be able to work through any chapter regardless of whether you completed previous chapters.

- [Tutorial introduction (main page)]({{ site.url }}/tutorials/trichodesmium-tutorial/) ← _you are here_
- [Chapter 1: Genomics]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-1)
- [Chapter 2: Pangenomics]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-2)
- Chapter 3: Phylogenomics _(not yet publicly-available)_
- [Chapter 4: Metabolism]({{ site.url }}/tutorials/trichodesmium-tutorial/chapter-4)

For convenience, you'll find this set of links at the top of each chapter's webpage.


{:.notice}
This tutorial is still a work-in-progress. More sections coming soon!
