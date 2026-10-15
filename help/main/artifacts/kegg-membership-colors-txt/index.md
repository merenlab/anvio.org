---
layout: artifact
title: kegg-membership-colors-txt
excerpt: A TXT-type anvi'o artifact. This artifact is typically provided by the user for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/kegg-membership-colors-txt
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact is typically provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


There are no anvi'o tools that generate this artifact, which means it is most likely provided to the anvi'o ecosystem by the user.




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.



## Can be used by

<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-draw-kegg-pathways](../../programs/anvi-draw-kegg-pathways)</span></p>


## Description

This artifact is a TAB-delimited text file that gives a color of your choosing to each sample, contigs database, genome, or group compared on <span class="artifact-n">[kegg-pathway-map](/help/main/artifacts/kegg-pathway-map)</span> files drawn by <span class="artifact-p">[anvi-draw-kegg-pathways](/help/main/programs/anvi-draw-kegg-pathways)</span>. A layer given this file is colored by membership.

A run compares each sample of a <span class="artifact-n">[kegg-reaction-txt](/help/main/artifacts/kegg-reaction-txt)</span> or <span class="artifact-n">[kegg-compound-txt](/help/main/artifacts/kegg-compound-txt)</span> file, each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, or each genome of a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>. When a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> groups any of these, the run compares each group. Normally anvi'o picks their colors for you by sampling a colormap (`--reaction-colormap`). This file says exactly which color each one gets instead. A color then means the same thing across every figure in a paper.

Pass it with `--reaction-membership-colors` for the reaction layer, and `--compound-membership-colors` for the compound layer of a <span class="artifact-n">[kegg-compound-txt](/help/main/artifacts/kegg-compound-txt)</span> file. The two layers are colored independently, so each can take its own file; pointing both options at a single file gives them one set of colors and so one legend.

## File format

|Column|Required|Description|
|:--|:--|:--|
|*a name column*|YES|The **first** column, which can be headed anything you like, such as `sample`, `genome`, or `group`, so one file can describe samples in one run and groups in another without renaming the column. Each row names one sample, contigs database, genome, or group. A row can also name a combination of them (see below).|
|`color`|YES|A six-digit color hex code, such as `#1f77b4`. Color *names* are not accepted, since the colors that pathway maps reserve for their own unhighlighted elements are compared as hex codes.|

Here is an example file:

|sample|color|
|:--|:--|
|SAMPLE_1|#1f77b4|
|SAMPLE_2|#ff7f0e|
|SAMPLE_3|#2ca02c|

Each sample, contigs database, genome, or group that the run compares needs a color. Anvi'o will not fill in the gaps from a colormap, since that would put colors you chose and colors chosen for you on one scale. Names in the file that the run does *not* compare are reported and ignored, so one file can serve several runs that each draw a different subset.

## Coloring combinations

Coloring by membership colors a map element by exactly **which** samples, contigs databases, genomes, or groups contain it, so it needs a color for every *combination* of them. With three samples, that is seven colors rather than three.

A sample, contigs database, genome, or group on its own takes its own color. A combination takes the **blend** of its members' colors, mixed perceptually, so an element in the green sample and the blue sample is drawn in the color between them. To set a combination's color yourself, add a row that names its members separated by commas, exactly as the colorbar labels it:

|sample|color|
|:--|:--|
|SAMPLE_1|#1f77b4|
|SAMPLE_2|#ff7f0e|
|SAMPLE_3|#2ca02c|
|SAMPLE_1, SAMPLE_2|#7d5ba6|

Because a combination is written this way, no sample, contigs database, genome, or group may have a comma in its name.

Two combinations can of course blend to the same color, and a discrete colorbar labels one band per combination — so anvi'o refuses to draw a scale whose bands cannot be told apart, and reports how many distinct colors it got. Adding rows for the offending combinations fixes it. Note that no color scale distinguishes the combinations of more than a handful of samples, databases, genomes, or groups in any case. Past a few of them, color by count from a colormap instead. For contigs databases and pangenomes, use `--presence-colormap-scheme by_count`. For a text file, use a `count` sample or group summary, such as `--reaction-sample-summary count`. A run with a text file rejects `--presence-colormap-scheme`.

## Where the colors are used

**The 'unified' map and its colorbar.** Each combination takes its color as described above.

**Each sample's, database's, or genome's own map.** For a layer without a value column, `--draw-individual-files` and `--draw-grid` draw the map of each sample, contigs database, or genome in its own color rather than in one shared color, so a panel of a grid says which sample, database, or genome it shows. The panel's color also matches the band of that sample, database, or genome on the 'unified' map. (With `--skip-unified-maps` there is no 'unified' map and no band to match. Each panel is still drawn in its own color.)

**Each sample's map of a layer with a value column.** A value column of a <span class="artifact-n">[kegg-reaction-txt](/help/main/artifacts/kegg-reaction-txt)</span> or <span class="artifact-n">[kegg-compound-txt](/help/main/artifacts/kegg-compound-txt)</span> file colors the map of each sample by that sample's values, not by the sample's color. Without a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span>, this file then colors only the 'unified' map. A layer of categorical values counts its samples on the 'unified' map by default, however few samples there are. With this file, that map shows which samples contain each element instead. Choose sample colors that differ from the colors of the values, since one color would otherwise mean a sample on the 'unified' map and a value on the map of a sample.

**Each group's own map, on request.** When a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> groups the samples, databases, or genomes, a group's own map is colored by how many of the group's samples, databases, or genomes contain an element. That is a magnitude rather than an identity. The map takes its colors from `--group-colormap`. By default, this file does not change those colors. Giving `--group-colormap tint` instead builds each group's scale as a ramp. The ramp runs from a pale tint to the group's own color. Every group's ramp is built the same way, so the panels of a grid stay comparable, and the color of each panel shows which group it is.

<div class="codeblock" markdown="1">
anvi&#45;draw&#45;kegg&#45;pathways &#45;&#45;reaction&#45;txt <span class="artifact&#45;n">[kegg&#45;reaction&#45;txt](/help/main/artifacts/kegg&#45;reaction&#45;txt)</span> \
                        &#45;&#45;groups&#45;txt <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                        &#45;&#45;group&#45;threshold 0.5 \
                        &#45;&#45;reaction&#45;membership&#45;colors <span class="artifact&#45;n">[kegg&#45;membership&#45;colors&#45;txt](/help/main/artifacts/kegg&#45;membership&#45;colors&#45;txt)</span> \
                        &#45;&#45;group&#45;colormap tint \
                        &#45;&#45;draw&#45;grid \
                        &#45;o OUTPUT_DIR
</div>

The two decimal values that `--group-colormap` also accepts then say how far from white each ramp starts and stops, defaulting to 0.25 and 1.0. The pale end stops short of white on purpose: standard and overview maps keep white for their own unhighlighted elements, so a ramp reaching it could not be drawn there — anvi'o checks for this before writing any file and tells you to start the ramp further from white.

## When this file does not apply

This file gives a color to each sample, contigs database, genome, or group, so it needs a run that compares them. It also needs a layer colored by *which* of them contain an element.

- It cannot be combined with that layer's `--reaction-colormap`/`--compound-colormap`. A colormap is the other way to choose the layer's colors. It also cannot be combined with `--reaction-color`/`--compound-color` or `--original-color`. These color a layer without comparing samples, databases, genomes, or groups at all.
- It needs a `sample` column in a <span class="artifact-n">[kegg-reaction-txt](/help/main/artifacts/kegg-reaction-txt)</span> or <span class="artifact-n">[kegg-compound-txt](/help/main/artifacts/kegg-compound-txt)</span> file, or more than one <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, or a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.
- It does not apply to coloring by *count* (`--presence-colormap-scheme by_count`, or a `count`/`count_continuous` sample or group summary). A count says how many samples, databases, genomes, or groups contain an element, not which ones, so a count has no single sample, database, genome, or group whose color it could take.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/kegg-membership-colors-txt.md) to update this information.

