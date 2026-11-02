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


{:.notice}
**No one has described the usage of this program** :/ If you would like to contribute, please see previous examples [here](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs), and feel free to add a Markdown formatted file in that directory named "anvi-script-gen-pan-graph-video.md". For a template, you can use the markdown file for `anvi-gen-contigs-database`. THANK YOU!



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-gen-pan-graph-video`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-gen-pan-graph-video [-h] -p PAN_GRAPH_DB [--component COMPONENT] [--genomes-of-interest GENOMES_OF_INTEREST] [--exclude-genomes EXCLUDE_GENOMES] [--max-num-genomes-to-render MAX_NUM_GENOMES_TO_RENDER] [--inset-flanks LEFT_NODE,RIGHT_NODE] [--inset-aspect INSET_ASPECT] [--inset-graph-nodes-cover-window-dynamically] [--show-rarefaction] [--rarefaction-iterations RAREFACTION_ITERATIONS] [--resolution RESOLUTION] [--rotation-offset-deg ROTATION_OFFSET_DEG] [--outer-radius-fraction OUTER_RADIUS_FRACTION] [--inner-radius-fraction INNER_RADIUS_FRACTION] [--graph-height-fraction GRAPH_HEIGHT_FRACTION] [--backbone-gap-px BACKBONE_GAP_PX] [--track-height-px TRACK_HEIGHT_PX] [--supersample SUPERSAMPLE] [--main-graph-node-size MAIN_GRAPH_NODE_SIZE] [--main-graph-node-color MAIN_GRAPH_NODE_COLOR] [--main-graph-new-node-effect {none,droplets}] [--main-graph-nodes-fly-in] [--main-graph-node-edge-width MAIN_GRAPH_NODE_EDGE_WIDTH] [--main-graph-node-edge-color MAIN_GRAPH_NODE_EDGE_COLOR] [--main-graph-edge-width MAIN_GRAPH_EDGE_WIDTH] [--main-graph-edge-color MAIN_GRAPH_EDGE_COLOR] [--main-graph-edge-opacity MAIN_GRAPH_EDGE_OPACITY] [--inset-graph-level-height INSET_GRAPH_LEVEL_HEIGHT] [--inset-graph-node-size INSET_GRAPH_NODE_SIZE] [--inset-graph-node-color INSET_GRAPH_NODE_COLOR] [--inset-graph-new-node-effect {none,droplets}] [--inset-graph-node-edge-width INSET_GRAPH_NODE_EDGE_WIDTH] [--inset-graph-node-edge-color INSET_GRAPH_NODE_EDGE_COLOR] [--inset-graph-edge-width INSET_GRAPH_EDGE_WIDTH] [--inset-graph-edge-color INSET_GRAPH_EDGE_COLOR] [--inset-graph-edge-opacity INSET_GRAPH_EDGE_OPACITY] [--genome-track-line-width GENOME_TRACK_LINE_WIDTH] [--genome-track-line-color GENOME_TRACK_LINE_COLOR] [--genome-track-line-opacity GENOME_TRACK_LINE_OPACITY] [--genome-track-line-background GENOME_TRACK_LINE_BACKGROUND] [--rarefaction-all-syngcs-color RAREFACTION_ALL_SYNGCS_COLOR] [--rarefaction-core-syngcs-color RAREFACTION_CORE_SYNGCS_COLOR] [--rarefaction-line-width RAREFACTION_LINE_WIDTH] [--rarefaction-fade-in-at-genome N] [--fps FPS] [--hold-first-seconds HOLD_FIRST_SECONDS] [--seconds-per-genome SECONDS_PER_GENOME] [--dissolve-seconds DISSOLVE_SECONDS] [--hold-last-seconds HOLD_LAST_SECONDS] [--title-kicker TITLE_KICKER] [--title TITLE] [--subtitle SUBTITLE] [--inset-description INSET_DESCRIPTION] [--font {helvetica,avenir}] [-T NUM_THREADS] -o FILE_PATH [--background-color BACKGROUND_COLOR] [--keep-frames-dir KEEP_FRAMES_DIR] [--no-export-stills] [--dry-run] [--no-genome-tracks]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT</span> <span class="parameter-group-description">Where the pangenome graph data comes from.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_graph_db"><code class="parameter-flags">-p, --pan-graph-db</code> <code class="parameter-metavar">PAN_GRAPH_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o pangenome graph database.</span></dd>
<dt class="parameter" id="parameter-component"><code class="parameter-flags">--component</code> <code class="parameter-metavar">COMPONENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which weakly connected component to render (as named in the pan-graph-db; &#x27;CP_0001&#x27; is the largest by default).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">CP_0001</code></span></dd>
<dt class="parameter" id="parameter-genomes_of_interest"><code class="parameter-flags">--genomes-of-interest</code> <code class="parameter-metavar">GENOMES_OF_INTEREST</code></dt>
<dd class="parameter-details"><span class="parameter-help">Either a comma-separated list of genome names, or a path to a file with one genome name per line. Only these genomes will be rendered, and they will be added to the animation in exactly the order they are listed here, so this is also how you set the order of appearance. Every name must occur in the pan-graph-db, and none may repeat. The default is every genome in the pan-graph-db, in the order already stored there.</span></dd>
<dt class="parameter" id="parameter-exclude_genomes"><code class="parameter-flags">--exclude-genomes</code> <code class="parameter-metavar">EXCLUDE_GENOMES</code></dt>
<dd class="parameter-details"><span class="parameter-help">One or more genome names to leave out of everything that follows, as a comma-separated list or a path to a file with one genome name per line. This is applied after --genomes-of-interest, so the two work together: you can ask for a set of genomes in a given order, and still drop a few of them without editing that list.</span></dd>
<dt class="parameter" id="parameter-max_num_genomes_to_render"><code class="parameter-flags">--max-num-genomes-to-render</code> <code class="parameter-metavar">MAX_NUM_GENOMES_TO_RENDER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Render only this many genomes instead of every genome that is available. The animation then grows from 1 genome up to this number, following the same order of appearance. Since a full render can take a while, this is a convenient way to see what your output will look like with a handful of genomes first.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-inset-panel">
<header class="parameter-group-header"><span class="parameter-group-title">INSET PANEL</span> <span class="parameter-group-description">What goes into the panel in the left-hand column, if anything. Two things can claim it -- a magnified view of one locus (`--inset-flanks`) or rarefaction curves for the whole graph (`--show-rarefaction`) -- and they are mutually exclusive, since there is only the one panel. Ask for neither and the column simply carries the title block and the genome counter, with nothing below them.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-inset_flanks"><code class="parameter-flags">--inset-flanks</code> <code class="parameter-metavar">LEFT_NODE,RIGHT_NODE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Two node ids (as they appear in the pan-graph-db) flanking the locus to magnify in an inset panel. Both must be present in every frame you render (i.e. conserved/backbone nodes). Omit to render the whole graph only, with no inset.</span></dd>
<dt class="parameter" id="parameter-inset_aspect"><code class="parameter-flags">--inset-aspect</code> <code class="parameter-metavar">INSET_ASPECT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Width-to-height ratio of the inset panel&#x27;s frame (not necessarily of the locus drawn inside it). Default 1.436 suits a tall, narrow locus (a &#x27;spire&#x27;); a wide, short locus (e.g. a broad hypervariable region) wants a larger value, closer to 4.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.436</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-inset_graph_nodes_cover_window_dynamically"><code class="parameter-flags">--inset-graph-nodes-cover-window-dynamically</code></dt>
<dd class="parameter-details"><span class="parameter-help">Spread the inset&#x27;s nodes across the panel&#x27;s full width in EVERY frame, rather than at one spacing pinned to the finished graph. By default a subgraph that grows as genomes arrive starts out small, nested against the left edge of the panel, and expands rightwards until the last genome fills the panel exactly. Pass this and the spacing between nodes is instead solved fresh for each frame, so the two flanking nodes sit at the panel&#x27;s edges from the very first frame and what grows between them is the structure alone. The levels keep their pinned height either way, so the subgraph still gains height as it gains genomes.</span></dd>
<dt class="parameter parameter-switch" id="parameter-show_rarefaction"><code class="parameter-flags">--show-rarefaction</code></dt>
<dd class="parameter-details"><span class="parameter-help">Draw rarefaction curves for the pangenome in the panel, revealed one genome at a time in step with the genome counter. Two curves are drawn, each with a band of plus/minus one standard deviation around it: the whole pangenome, and the core (the SynGCs present in every one of the subsampled genomes). The curves cover EVERY SynGC in the pan-graph-db rather than only those of the `--component` being drawn, and they are computed over exactly the genomes this video renders, in the order they arrive, so the panel&#x27;s x axis is the same axis the genome counter is counting along. Cannot be combined with --inset-flanks, which wants the same panel.</span></dd>
<dt class="parameter" id="parameter-rarefaction_iterations"><code class="parameter-flags">--rarefaction-iterations</code> <code class="parameter-metavar">RAREFACTION_ITERATIONS</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many random subsamples to draw at each genome count when computing the rarefaction curves (default: 100). This is the same parameter `anvi-compute-rarefaction-curves` calls `--iterations`, and the same advice applies: above 100 rarely refines anything, and below 10 leaves the curves visibly lumpy. Only relevant with --show-rarefaction.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">100</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-geometry">
<header class="parameter-group-header"><span class="parameter-group-title">GEOMETRY</span> <span class="parameter-group-description">How the graph is drawn. Defaults are reasonable for most pangenomes; adjust if your graph looks too cramped or too sparse.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-resolution"><code class="parameter-flags">--resolution</code> <code class="parameter-metavar">RESOLUTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output video resolution as WIDTHxHEIGHT (default: 3840x2160). The panel layout is tuned for 16:9.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">3840x2160</code></span></dd>
<dt class="parameter" id="parameter-rotation_offset_deg"><code class="parameter-flags">--rotation-offset-deg</code> <code class="parameter-metavar">ROTATION_OFFSET_DEG</code></dt>
<dd class="parameter-details"><span class="parameter-help">Rotates the whole main panel by this many degrees, purely cosmetic (default: 0.0).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-outer_radius_fraction"><code class="parameter-flags">--outer-radius-fraction</code> <code class="parameter-metavar">OUTER_RADIUS_FRACTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Radius the FINAL frame&#x27;s hole-plus-tracks-plus-graph is designed to reach exactly, as a fraction of the graph panel&#x27;s own half-size (default: 0.97, which leaves just enough margin that strokes at the very edge don&#x27;t get clipped). In other words, how much of the panel the whole drawing fills. The height of the genome-tracks band has no separate knob of its own: given this target, the hole (--inner-radius-fraction) and the graph&#x27;s share (below), each genome&#x27;s track height is SOLVED FOR so the three always sum to exactly this radius, with no leftover whitespace and nothing pushed past the edge, regardless of how many genomes are being rendered. The panel itself is also sized to claim the most space it can next to the text/inset column at your --resolution, so raising this is what actually shrinks the remaining margin.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.97</code></span></dd>
<dt class="parameter" id="parameter-inner_radius_fraction"><code class="parameter-flags">--inner-radius-fraction</code> <code class="parameter-metavar">INNER_RADIUS_FRACTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Radius of the empty hole at the very center of the main panel, as a fraction of --outer-radius-fraction (default: 0.15).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.15</code></span></dd>
<dt class="parameter" id="parameter-graph_height_fraction"><code class="parameter-flags">--graph-height-fraction</code> <code class="parameter-metavar">GRAPH_HEIGHT_FRACTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">How far the graph (the backbone ring plus its spires) reaches beyond the tracks, as a fraction of the TOTAL tracks height, which is to say of all genomes&#x27; rings stacked together. The default of 0.2 means the graph reaches one-fifth as far beyond the tracks as the tracks themselves reach beyond the hole, keeping the tracks the dominant visual element. Together with --outer-radius-fraction and --inner-radius-fraction this fully determines each track&#x27;s height (see that flag&#x27;s help), and raising it gives the graph more relative room at the tracks&#x27; expense rather than at the panel&#x27;s. The spire-climb-per-step is then sized from the FINAL frame&#x27;s real tallest spire so it lands exactly on that reach.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.2</code></span></dd>
<dt class="parameter" id="parameter-backbone_gap_px"><code class="parameter-flags">--backbone-gap-px</code> <code class="parameter-metavar">BACKBONE_GAP_PX</code></dt>
<dd class="parameter-details"><span class="parameter-help">Fixed radial gap between the genome-tracks stack and the backbone ring, in pixels (default: half of one track&#x27;s own height). This is the only distance between the two, and it does not grow with the backbone&#x27;s own length, which is what makes the backbone hug the tracks at every frame.</span></dd>
<dt class="parameter" id="parameter-track_height_px"><code class="parameter-flags">--track-height-px</code> <code class="parameter-metavar">TRACK_HEIGHT_PX</code></dt>
<dd class="parameter-details"><span class="parameter-help">Pixels per y (track/spire) step in the main panel, which is to say how far a spire climbs outward from the backbone per insertion. Setting this replaces the default derivation, which instead sizes the step from the FINAL frame&#x27;s real tallest spire so it lands exactly on --graph-height-fraction&#x27;s share of the panel. Use it when you want an exact, resolution-independent pixel value, at the risk of over- or under-shooting the panel edge.</span></dd>
<dt class="parameter" id="parameter-supersample"><code class="parameter-flags">--supersample</code> <code class="parameter-metavar">SUPERSAMPLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Render this many times larger than the final resolution and downsample, for antialiasing (default: 2; raise for smoother lines at the cost of render time).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">2</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-cosmetics">
<header class="parameter-group-header"><span class="parameter-group-title">COSMETICS</span> <span class="parameter-group-description">Node/edge ink for the main graph, the inset, and the genome tracks. Every default here is calculated from the actual data (genome count, panel size, zoom level, and so on) and is printed back under a &#x27;COSMETICS&#x27; section, along with the exact flag to use, right before rendering starts. Since no formula can look right for every combination of genome count and locus shape, tune from what is printed there rather than guessing blind.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-main_graph_node_size"><code class="parameter-flags">--main-graph-node-size</code> <code class="parameter-metavar">MAIN_GRAPH_NODE_SIZE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel node circle radius, in pixels. Default is derived from --resolution and how densely packed the final frame&#x27;s backbone is.</span></dd>
<dt class="parameter" id="parameter-main_graph_node_color"><code class="parameter-flags">--main-graph-node-color</code> <code class="parameter-metavar">MAIN_GRAPH_NODE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel node fill color as a hex code. By default every node keeps the color anvi&#x27;o&#x27;s own state assigned to its type, which is what makes core, accessory and singleton clusters tell each other apart. Passing this OVERRIDES all of them to a single color.</span></dd>
<dt class="parameter" id="parameter-main_graph_new_node_effect"><code class="parameter-flags">--main-graph-new-node-effect</code> <code class="parameter-metavar">MAIN_GRAPH_NEW_NODE_EFFECT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Mark the nodes that arrive with each genome, in the main panel, with a brief effect, which makes what a genome actually contributed easy to follow. This marks only nodes that are genuinely NEW to the graph; --inset-graph-new-node-effect deliberately casts a wider net, see its own help. &#x27;droplets&#x27; sends a filled copy of every new node breaking outwards to 20x its own size and fading as it spreads. The first genome is never marked, since every node in it would be. How long an effect runs for is a property of the effect itself, given as a share of --seconds-per-genome and printed back under &#x27;ASSEMBLING VIDEO&#x27;. Default: none. Note that an effect makes every frame of a genome&#x27;s turn on screen differ from the last, so both the render time and the size of the MP4 go up.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">none</code> <code class="parameter-choice">droplets</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">none</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-main_graph_nodes_fly_in"><code class="parameter-flags">--main-graph-nodes-fly-in</code></dt>
<dd class="parameter-details"><span class="parameter-help">Have the nodes a genome brings with it FLY IN to their places, instead of simply being there in the next frame. Each new node comes in from off-canvas along its own fixed bearing, oversized and shrinking as it goes, and easing to a stop at exactly its true size once it lands. This makes what a genome actually contributed impossible to miss and where in the graph it landed easy to follow, and arriving large is what makes it work at all on a dense pangenome, where a node resolves to a pixel or two across and could not otherwise be followed on its way in. Only genuinely NEW nodes fly; everything already on screen stays put, and edges are drawn in full throughout, so the graph visibly holds a place open for whatever is on its way in. The first genome never flies, since every node in it would be. This is an alternative to --main-graph-new-node-effect rather than a companion to it (asking for both is an error, since the effect would fire where the node is going while the node is still on its way there), though --inset-graph-new-node-effect is unaffected. Default: off. Note that this makes every frame of a genome&#x27;s turn on screen differ from the last, so both the render time and the size of the MP4 go up; `--num-threads` is the answer to most of that.</span></dd>
<dt class="parameter" id="parameter-main_graph_node_edge_width"><code class="parameter-flags">--main-graph-node-edge-width</code> <code class="parameter-metavar">MAIN_GRAPH_NODE_EDGE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel node outline stroke width, in pixels. Default: one third of --main-graph-node-size.</span></dd>
<dt class="parameter" id="parameter-main_graph_node_edge_color"><code class="parameter-flags">--main-graph-node-edge-color</code> <code class="parameter-metavar">MAIN_GRAPH_NODE_EDGE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel node outline color as a hex code (default: &#x27;#000000&#x27;, black).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">#000000</code></span></dd>
<dt class="parameter" id="parameter-main_graph_edge_width"><code class="parameter-flags">--main-graph-edge-width</code> <code class="parameter-metavar">MAIN_GRAPH_EDGE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel graph edge (the lines connecting gene-cluster nodes) line width, in pixels. Default is derived the same way as --main-graph-node-size.</span></dd>
<dt class="parameter" id="parameter-main_graph_edge_color"><code class="parameter-flags">--main-graph-edge-color</code> <code class="parameter-metavar">MAIN_GRAPH_EDGE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel graph edge color as a hex code (default: &#x27;#3C3C3C&#x27;, dark gray).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">#3C3C3C</code></span></dd>
<dt class="parameter" id="parameter-main_graph_edge_opacity"><code class="parameter-flags">--main-graph-edge-opacity</code> <code class="parameter-metavar">MAIN_GRAPH_EDGE_OPACITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">Main-panel graph edge opacity, 0-1 (default: 0.63).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.63</code></span></dd>
<dt class="parameter" id="parameter-inset_graph_level_height"><code class="parameter-flags">--inset-graph-level-height</code> <code class="parameter-metavar">INSET_GRAPH_LEVEL_HEIGHT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How far apart the inset panel&#x27;s y levels sit, in pixels. A subgraph has as many levels as its topology needs, and the two axes of the panel are scaled independently, so by default the levels are spread across the panel&#x27;s full height however many of them there are. On a large subgraph that can still leave them close enough together to bury the structure the panel exists to show, which is what this is for: raise it to pull the levels apart, at the cost of the tallest of them reaching past the top of the panel.</span></dd>
<dt class="parameter" id="parameter-inset_graph_node_size"><code class="parameter-flags">--inset-graph-node-size</code> <code class="parameter-metavar">INSET_GRAPH_NODE_SIZE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel node circle radius, in pixels. Default is derived from how zoomed-in the inset is (wider gaps between backbone positions get bigger nodes).</span></dd>
<dt class="parameter" id="parameter-inset_graph_node_color"><code class="parameter-flags">--inset-graph-node-color</code> <code class="parameter-metavar">INSET_GRAPH_NODE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel node fill color as a hex code. Works exactly like --main-graph-node-color, and is separate from it so the magnified panel can carry the type colors while the main panel goes flat, or the other way around.</span></dd>
<dt class="parameter" id="parameter-inset_graph_new_node_effect"><code class="parameter-flags">--inset-graph-new-node-effect</code> <code class="parameter-metavar">INSET_GRAPH_NEW_NODE_EFFECT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The same effects as --main-graph-new-node-effect, in the magnified panel, but triggered on a WIDER set of nodes than that flag&#x27;s name suggests, so please read on. The main panel marks only nodes that are genuinely new. The inset marks every NON-CORE node the arriving genome puts a gene into, whether that node is new or was already on screen. A genome dropping a gene into a synteny gene cluster that several other genomes already occupy has changed that cluster, and at this magnification that is worth watching, while in the main panel the same rule would mark hundreds of nodes per genome and read as noise. Core nodes are never marked either way: &#x27;core&#x27; means every genome in the graph has a gene there, so every genome would light up every core node, which says nothing about any of them. Separate from --main-graph-new-node-effect so the two can be asked for independently, though the timing is shared. Default: none.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">none</code> <code class="parameter-choice">droplets</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">none</code></span></dd>
<dt class="parameter" id="parameter-inset_graph_node_edge_width"><code class="parameter-flags">--inset-graph-node-edge-width</code> <code class="parameter-metavar">INSET_GRAPH_NODE_EDGE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel node outline stroke width, in pixels. Default: one sixth of --inset-graph-node-size (thinner than the main panel&#x27;s, since inset nodes are already much larger).</span></dd>
<dt class="parameter" id="parameter-inset_graph_node_edge_color"><code class="parameter-flags">--inset-graph-node-edge-color</code> <code class="parameter-metavar">INSET_GRAPH_NODE_EDGE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel node outline color as a hex code (default: &#x27;#000000&#x27;, black).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">#000000</code></span></dd>
<dt class="parameter" id="parameter-inset_graph_edge_width"><code class="parameter-flags">--inset-graph-edge-width</code> <code class="parameter-metavar">INSET_GRAPH_EDGE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel graph edge line width, in pixels. Default is derived the same way as --inset-graph-node-size.</span></dd>
<dt class="parameter" id="parameter-inset_graph_edge_color"><code class="parameter-flags">--inset-graph-edge-color</code> <code class="parameter-metavar">INSET_GRAPH_EDGE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel graph edge color as a hex code (default: &#x27;#3C3C3C&#x27;, dark gray).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">#3C3C3C</code></span></dd>
<dt class="parameter" id="parameter-inset_graph_edge_opacity"><code class="parameter-flags">--inset-graph-edge-opacity</code> <code class="parameter-metavar">INSET_GRAPH_EDGE_OPACITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">Inset-panel graph edge opacity, 0-1 (default: 0.55).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.55</code></span></dd>
<dt class="parameter" id="parameter-genome_track_line_width"><code class="parameter-flags">--genome-track-line-width</code> <code class="parameter-metavar">GENOME_TRACK_LINE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome-track synteny-line width, in pixels. Default is derived from each track&#x27;s own (fixed) height.</span></dd>
<dt class="parameter" id="parameter-genome_track_line_color"><code class="parameter-flags">--genome-track-line-color</code> <code class="parameter-metavar">GENOME_TRACK_LINE_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome-track synteny-line color as a hex code. By default each genome keeps the color anvi&#x27;o&#x27;s own state assigned to it. Passing this OVERRIDES every genome to a single color.</span></dd>
<dt class="parameter" id="parameter-genome_track_line_opacity"><code class="parameter-flags">--genome-track-line-opacity</code> <code class="parameter-metavar">GENOME_TRACK_LINE_OPACITY</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome-track synteny-line opacity, 0-1 (default: 0.75).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.75</code></span></dd>
<dt class="parameter" id="parameter-genome_track_line_background"><code class="parameter-flags">--genome-track-line-background</code> <code class="parameter-metavar">GENOME_TRACK_LINE_BACKGROUND</code></dt>
<dd class="parameter-details"><span class="parameter-help">Genome-track background band color as a hex code. By default the background color stored in the pan-graph-db&#x27;s own state is used (usually a near-white gray).</span></dd>
<dt class="parameter" id="parameter-rarefaction_all_syngcs_color"><code class="parameter-flags">--rarefaction-all-syngcs-color</code> <code class="parameter-metavar">RAREFACTION_ALL_SYNGCS_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Color of the all-SynGCs rarefaction curve, and of its standard-deviation band, as a hex code (default: #1F6FEB). Only relevant with --show-rarefaction.</span></dd>
<dt class="parameter" id="parameter-rarefaction_core_syngcs_color"><code class="parameter-flags">--rarefaction-core-syngcs-color</code> <code class="parameter-metavar">RAREFACTION_CORE_SYNGCS_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Color of the core-SynGCs rarefaction curve, and of its standard-deviation band, as a hex code (default: #D1242F). Only relevant with --show-rarefaction.</span></dd>
<dt class="parameter" id="parameter-rarefaction_line_width"><code class="parameter-flags">--rarefaction-line-width</code> <code class="parameter-metavar">RAREFACTION_LINE_WIDTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Width of the two rarefaction curves in pixels. By default it is derived from the output resolution. Only relevant with --show-rarefaction.</span></dd>
<dt class="parameter" id="parameter-rarefaction_fade_in_at_genome"><code class="parameter-flags">--rarefaction-fade-in-at-genome</code> <code class="parameter-metavar">N</code></dt>
<dd class="parameter-details"><span class="parameter-help">Keep the rarefaction panel (and the line of text above it) off screen until genome N arrives, then fade it in with that genome. Watching a curve draw itself from the very first genome can be a slow start, and this hands you the timing: pass 11 and the first ten genomes are just the graph growing, with the panel arriving alongside the eleventh, already part-drawn. N is the genome the panel comes in WITH, so it is the number the genome counter is showing at that moment. The fade itself lasts --seconds-per-genome: it starts as that genome does and is complete by the end of its turn on screen, so it is slow enough to watch. Nothing else in the column moves when it appears. By default the panel is there from the first genome onward. Only relevant with --show-rarefaction.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-timing">
<header class="parameter-group-header"><span class="parameter-group-title">TIMING</span> <span class="parameter-group-description">Pacing of the animation.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-fps"><code class="parameter-flags">--fps</code> <code class="parameter-metavar">FPS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Frames per second (default: 30).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">30</code></span></dd>
<dt class="parameter" id="parameter-hold_first_seconds"><code class="parameter-flags">--hold-first-seconds</code> <code class="parameter-metavar">HOLD_FIRST_SECONDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">How long the first genome is held before the animation starts moving (default: 1.5).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.5</code></span></dd>
<dt class="parameter" id="parameter-seconds_per_genome"><code class="parameter-flags">--seconds-per-genome</code> <code class="parameter-metavar">SECONDS_PER_GENOME</code></dt>
<dd class="parameter-details"><span class="parameter-help">How long each genome&#x27;s state is held before dissolving to the next (default: 0.45).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.45</code></span></dd>
<dt class="parameter" id="parameter-dissolve_seconds"><code class="parameter-flags">--dissolve-seconds</code> <code class="parameter-metavar">DISSOLVE_SECONDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Cross-dissolve duration between consecutive genome states (default: 0.2).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.2</code></span></dd>
<dt class="parameter" id="parameter-hold_last_seconds"><code class="parameter-flags">--hold-last-seconds</code> <code class="parameter-metavar">HOLD_LAST_SECONDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">How long the finished graph is held at the end (default: 4.0).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">4.0</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-text">
<header class="parameter-group-header"><span class="parameter-group-title">TEXT</span> <span class="parameter-group-description">The title block above the genome counter: a small kicker line, an italic title, and an optional subtitle. For instance, &#x27;The pangenome graph for&#x27;, then &#x27;Undatipelagibacter&#x27;, then &#x27;(formerly, SAR11 1a.3.VI)&#x27;.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-title_kicker"><code class="parameter-flags">--title-kicker</code> <code class="parameter-metavar">TITLE_KICKER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Small muted line above the title (default: &#x27;The pangenome graph for&#x27;). Pass an empty string to hide it.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">The pangenome graph for</code></span></dd>
<dt class="parameter" id="parameter-title"><code class="parameter-flags">--title</code> <code class="parameter-metavar">TITLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The main title line, set in italic (e.g. a genus name). Defaults to the project name stored in the pan-graph-db.</span></dd>
<dt class="parameter" id="parameter-subtitle"><code class="parameter-flags">--subtitle</code> <code class="parameter-metavar">SUBTITLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">An optional line below the title, in regular weight (e.g. a former name). Omit to show no subtitle line at all.</span></dd>
<dt class="parameter" id="parameter-inset_description"><code class="parameter-flags">--inset-description</code> <code class="parameter-metavar">INSET_DESCRIPTION</code></dt>
<dd class="parameter-details"><span class="parameter-help">A short line of text shown in the gap between the genome-counter progress bar and the inset panel, in the same font/color as --subtitle. Only shown when --inset-flanks is given. Default: &quot;Subgraph between LEFT_NODE and RIGHT_NODE detailed&quot;, with the actual two --inset-flanks node ids filled in. Wraps to fit the text column&#x27;s width. Pass an empty string to hide it.</span></dd>
<dt class="parameter" id="parameter-font"><code class="parameter-flags">--font</code> <code class="parameter-metavar">FONT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Typeface for all on-screen text (default: helvetica). These are macOS system typefaces. On Linux system anvi&#x27;o will set everything in DejaVu Sans instead. DejaVu runs wider so a Linux render will not be pixel-identical to a macOS one. We mostly tested this program on macOS, so if you are running into ugly displays on Linux please let us know and we will work on it.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">helvetica</code> <code class="parameter-choice">avenir</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">helvetica</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span> <span class="parameter-group-description">How hard anvi&#x27;o works at getting this done.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many frames to rasterize at the same time (default: 1). Drawing a frame is mostly Pillow&#x27;s C code, which lets go of Python&#x27;s global interpreter lock while it works, so this genuinely does speed things up, though sublinearly: expect something nearer 3x from 8 threads than 8x. It is the biggest lever you have whenever an effect is switched on, since an effect is what makes every single frame of every genome&#x27;s turn have to be drawn separately instead of held. There is no point going past the number of CPUs on your machine, and anvi&#x27;o will say so if you do. Note that this governs RASTERIZING frames and nothing else: the ffmpeg encode at the end is already parallel of its own accord, since libx264 detects your cores and helps itself to them. Anvi&#x27;o deliberately does not pass this number on to ffmpeg, because capping the encoder at this flag&#x27;s default of one thread measures several times SLOWER than leaving it alone.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Where results go.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Path for the output MP4.</span></dd>
<dt class="parameter" id="parameter-background_color"><code class="parameter-flags">--background-color</code> <code class="parameter-metavar">BACKGROUND_COLOR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Canvas background color (default: white).</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">#FFFFFF</code></span></dd>
<dt class="parameter" id="parameter-keep_frames_dir"><code class="parameter-flags">--keep-frames-dir</code> <code class="parameter-metavar">KEEP_FRAMES_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">If given, individual frame PNGs are written here and kept after the video is made (useful for pulling out a still frame). Default: a temporary directory that is deleted when done.</span></dd>
<dt class="parameter parameter-switch" id="parameter-no_export_stills"><code class="parameter-flags">--no-export-stills</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, this program also writes &#x27;&lt;output&gt;-first-frame.{svg,png}&#x27; and &#x27;&lt;output&gt;-last-frame.{svg,png}&#x27; next to the video. Pass this flag to skip that and only write the MP4.</span></dd>
<dt class="parameter parameter-switch" id="parameter-dry_run"><code class="parameter-flags">--dry-run</code></dt>
<dd class="parameter-details"><span class="parameter-help">Stop right after the scenes are built and the first/last-frame stills are written, before rasterizing frames or calling ffmpeg, which skips the slow part entirely. Handy while tuning the COSMETICS flags: run with --dry-run, look at &#x27;&lt;output&gt;-last-frame.png&#x27;, adjust, repeat, and only drop --dry-run once it looks right. Incompatible with --no-export-stills, since that would leave nothing to look at.</span></dd>
<dt class="parameter parameter-switch" id="parameter-no_genome_tracks"><code class="parameter-flags">--no-genome-tracks</code></dt>
<dd class="parameter-details"><span class="parameter-help">Turn off the concentric per-genome presence rings drawn between the empty center and the backbone (one ring per genome currently on screen, showing which of its gene clusters are present at each backbone position).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_pan_graph_video.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
