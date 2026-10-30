---
layout: program
title: anvi-script-gen-pan-graph-video
excerpt: An anvi'o program. Render an MP4 &#x27;growth&#x27; animation of a pangenome graph directly from a pan-graph-db by recomputing the graph&#x27;s layout for growing genome subsets through the same PangraphInteractive backend `anvi-display-pan-graph` uses.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-pan-graph-video
image:
  featurerelative: ../../../images/header.png
  display: true
---

Render an MP4 &#x27;growth&#x27; animation of a pangenome graph directly from a pan-graph-db by recomputing the graph&#x27;s layout for growing genome subsets through the same PangraphInteractive backend `anvi-display-pan-graph` uses..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-graph-db](../../artifacts/pan-graph-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program renders an MP4 'growth' animation of a pangenome graph straight out of a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>: it starts with a single genome, then adds one genome at a time, so you can watch a pangenome assemble itself.

There is no browser and no screen recording involved. The program drives `PangraphInteractive`, the very same backend class that serves <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>, in a loop, asking it for the graph of a growing subset of genomes (genome 1; genomes 1 and 2; genomes 1 through 3; and so on). Each of those calls hands back that frame's nodes, edges and layout as plain Python, which the program then draws twice: once with Pillow for the video frames, and once as plain SVG for the vector stills. Both renderers walk the exact same scene description, which is what guarantees that an exported still matches its video frame precisely.

{:.notice}
This program needs two things that are not strict anvi'o dependencies: `ffmpeg` (to encode the MP4) and the `Pillow` Python package (to rasterize frames). It checks for both before doing any work, and tells you what is missing.

## A simple run

At its simplest, all you need is a <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> and a path for the video:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4
</div>

Along with `growth.mp4`, this will also write four stills next to it: `growth-first-frame.svg`, `growth-first-frame.png`, `growth-last-frame.svg` and `growth-last-frame.png`. The SVGs are fully editable vector files, which is what you want if the last frame is heading into a figure. Pass `--no-export-stills` if you only want the MP4.

{:.notice}
The output file name has to end with `.mp4`. This program only makes MP4s, and the extension is how `ffmpeg` is told which container to write, so anvi'o checks it before rendering anything rather than after.

## Tuning without waiting for a render

Rasterizing thousands of 4K frames takes a while, and almost nothing you will want to adjust requires seeing the video. This is what `--dry-run` is for: it stops right after the stills are written, before a single video frame is rasterized.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;dry&#45;run
</div>

Look at `growth-last-frame.png`, adjust, repeat, and drop `--dry-run` only once it looks right.

The other way to keep the loop short is `--max-num-genomes-to-render`, which renders only the first handful of genomes so you can see the animation actually move without paying for the whole thing:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file preview.mp4 \
                                &#45;&#45;max&#45;num&#45;genomes&#45;to&#45;render 10
</div>

## Which genomes, and in what order

By default every genome in the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> is rendered, in the order it is stored there. `--genomes-of-interest` narrows that set down *and* fixes the order of appearance, so it is also how you decide which genome the animation opens on. `--exclude-genomes` is applied afterwards, so the two work together. Both accept either a comma-separated list or a path to a file with one genome name per line.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;genomes&#45;of&#45;interest genomes&#45;in&#45;the&#45;order&#45;i&#45;want.txt \
                                &#45;&#45;exclude&#45;genomes the_weird_one,the_other_weird_one
</div>

## The magnified inset

Watching a whole graph grow tells you how much a pangenome has, but not what is happening at any one place in it. `--inset-flanks` adds a second, magnified panel in the left-hand column that follows a single locus: give it the two backbone nodes that flank the stretch you care about, and the region between them is drawn enlarged in the text column, with a matching marker over that same stretch of the main graph so the eye can pair the two.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;inset&#45;flanks GC_00000012,GC_00000031 \
                                &#45;&#45;inset&#45;description "A hypervariable region between two conserved genes"
</div>

{:.notice}
Both flanking nodes have to be present in *every* frame, which in practice means they have to be conserved backbone nodes that are there from the very first genome onward. The program checks this up front and will tell you which frame is missing which node. You can find candidate node ids by looking at your graph in <span class="artifact-p">[anvi-display-pan-graph](/help/main/programs/anvi-display-pan-graph)</span>.

## Rarefaction curves instead

If you have no particular locus in mind, that same panel can hold something else: `--show-rarefaction` fills it with rarefaction curves for your pangenome, drawn one genome at a time in step with the genome counter right above them.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;show&#45;rarefaction
</div>

Two curves are drawn, each inside a band of plus/minus one standard deviation: the whole pangenome, and the core (the SynGCs present in *every* one of the subsampled genomes). Underneath them sits the [Heaps' Law](https://en.wikipedia.org/wiki/Heaps'_law) fit over the finished curve. The numbers are computed by exactly the same code as <span class="artifact-p">[anvi-compute-rarefaction-curves](/help/main/programs/anvi-compute-rarefaction-curves)</span>, so if you want the curves as an <span class="artifact-n">[rarefaction-curves](/help/main/artifacts/rarefaction-curves)</span> artifact to look at closely, run that program on the same <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span> and you will get the same analysis as files.

Two details are worth knowing about what is being counted:

* The curves cover **every SynGC in the <span class="artifact-n">[pan-graph-db](/help/main/artifacts/pan-graph-db)</span>**, not only those of the `--component` being drawn. A rarefaction curve for one component of a graph is a much stranger quantity than one for the graph, and it would also move the goalposts mid-video in the (normal, expected) case where anvi'o has to substitute a different component for some of the early frames.
* The curves are computed over **exactly the genomes the video renders**, in the order they arrive. So `--genomes-of-interest`, `--exclude-genomes` and `--max-num-genomes-to-render` all narrow the analysis along with the animation, and the panel's x axis is the same axis the genome counter is counting along.

{:.notice}
The curve is a subsampled *expectation* over every ordering of your genomes, while the graph beside it grows in one particular order — the point of a rarefaction curve is precisely that it does not depend on the order you happened to add genomes in. That is why the curve is smooth while the graph is lumpy, and why the curve's value at genome *n* is not the number of SynGCs in the graph drawn next to it. Use `--rarefaction-iterations` to trade time for smoothness; the default of 100 is plenty, and below 10 the curves get visibly lumpy.

The Heaps' Law fit in the corner of the panel describes the *finished* curve, so it is held back until the last genome arrives, rather than sitting there as a final answer next to a curve three points long.

If watching the curve draw itself from the very first genome is a slow start for your data, `--rarefaction-fade-in-at-genome` hands you the timing. Name the genome you want the panel to arrive with, and it — along with the line of text above it — stays off screen until then, fading in with that genome, already part-drawn:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;show&#45;rarefaction \
                                &#45;&#45;rarefaction&#45;fade&#45;in&#45;at&#45;genome 11
</div>

Here the first ten genomes are just the graph growing, and the panel appears alongside the eleventh. The number is the one the genome counter is showing at the moment the panel arrives, so there is no off-by-one to keep track of.

The fade itself lasts `--seconds-per-genome`: it starts the moment that genome does and is complete by the end of its turn on screen, so it is slow enough to watch rather than a blink. Nothing else in the column moves when the panel appears — the slot it occupies is reserved from the first frame whether or not anything is drawn in it.

Since there is only the one panel, `--show-rarefaction` and `--inset-flanks` cannot be combined; asking for both is an error.

## Marking what each genome brought

By default a genome's turn on screen is a still image, and what changed between two frames is left for the viewer to spot. The `--main-graph-new-node-effect` and `--inset-graph-new-node-effect` flags add a brief flourish that marks it instead:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;inset&#45;flanks GC_00000012,GC_00000031 \
                                &#45;&#45;main&#45;graph&#45;new&#45;node&#45;effect droplets \
                                &#45;&#45;inset&#45;graph&#45;new&#45;node&#45;effect droplets
</div>

The two panels deliberately mark *different* things. The main panel marks only nodes that are genuinely new to the graph, since at whole-graph scale anything wider reads as noise. The inset marks every non-core node the arriving genome put a gene into, whether that node is new or was already on screen, because at that magnification a gene joining a cluster several genomes already occupy is exactly what you want to see. Core nodes are never marked either way: every genome has a gene in a core node by definition, so every genome would light up every one of them.

Effects cost render time and file size, since they make every frame of a genome's turn differ from the last. See `--help` for what they look like, and `--main-graph-nodes-fly-in` below for a different way of marking the same thing.

## Flying the new nodes in

By default a genome's turn on screen is a still image, and the nodes it brought are simply *there* in the next frame, leaving the viewer to spot what changed. `--main-graph-nodes-fly-in` makes them arrive instead:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;pan&#45;graph&#45;video &#45;p <span class="artifact&#45;n">[pan&#45;graph&#45;db](/help/main/artifacts/pan&#45;graph&#45;db)</span> \
                                &#45;&#45;output&#45;file growth.mp4 \
                                &#45;&#45;main&#45;graph&#45;nodes&#45;fly&#45;in \
                                &#45;&#45;num&#45;threads 8
</div>

Each new node comes in from off-canvas along its own fixed bearing, oversized and shrinking as it travels, easing to a stop at exactly its true size in the place the graph has for it. Arriving large is what makes the effect work at all on a dense pangenome, where nodes resolve to a pixel or two across and a single pixel crossing the frame cannot be followed. It also reads as depth, and it self-corrects, since the size a node lands at is the only one that is real. Nodes set off from further out than the furthest corner of the canvas, so nothing pops into view. What lands is the node as it would have been drawn anyway — same radius, same type color, same outline — so the frame the flight ends on is the frame the video was always going to hold.

Only genuinely *new* nodes fly. Everything already on screen stays put, and the first genome never flies, since every node in it would be.

Edges are left alone and drawn in full throughout, which is deliberate: an edge already reaching for a node still on its way in reads as the graph holding a place open for it, where fading every edge that touches a new node would make the whole neighbourhood flicker each time a genome arrived.

{:.notice}
This is an *alternative* to `--main-graph-new-node-effect`, not a companion to it — asking for both is an error, since the effect would fire where the node is going while the node is still on its way there. `--inset-graph-new-node-effect` is unaffected, since nothing in the inset panel flies.

## Rendering time

Two things dominate how long a render takes, and both have a knob:

- **`--num-threads`** rasterizes several frames at once. Drawing a frame is mostly Pillow's C code, which releases Python's global interpreter lock while it works, so this genuinely helps — though sublinearly, more like 3x from 8 threads than 8x. It is the biggest lever whenever an effect or `--main-graph-nodes-fly-in` is on, since those are what force every frame of every genome's turn to be drawn separately instead of held.
- **`--supersample`** is the other one, and it is quadratic: dropping it from 2 to 1 roughly halves the time at the cost of rougher edges. Good for preview passes, together with `--dry-run` and `--max-num-genomes-to-render`.

Frames that are simply held (the opening hold, the closing hold, and the still tail of each genome's turn) are encoded once and hard-linked into place rather than re-encoded, so they cost essentially nothing. The run reports how many of the frames in your video came out that way.

`--num-threads` covers rasterizing only. The final ffmpeg encode is already parallel without being asked — libx264 detects your cores and uses them — so anvi'o does not pass the flag on to it. Doing so would only ever cap what ffmpeg already does well, and capping it at this flag's default of one thread is several times slower than leaving it alone.

{:.notice}
With `--keep-frames-dir`, held frames share an inode with the frame they repeat. Copying them out or feeding them to ffmpeg is unaffected, but editing one in place would change all of its siblings.

## Everything else

Every cosmetic value this program uses (node sizes, edge widths, colors, opacities, the geometry of the rings) has a default computed from your actual data: the genome count, the panel size, how tightly the finished graph packs, how far the inset is zoomed in. Since no formula can look right for every combination of genome count and locus shape, each resolved value is printed back under a `COSMETICS` section right before rendering starts, together with the exact flag to change it. Tune from what is printed there rather than guessing, and note that values you set yourself are printed in a different color from the ones anvi'o worked out.

The `--help` output is grouped into `INPUT`, `INSET`, `GEOMETRY`, `COSMETICS`, `TIMING`, `TEXT`, `PERFORMANCE` and `OUTPUT` sections, and it is worth reading through once.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-pan-graph-video.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_pan_graph_video.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
