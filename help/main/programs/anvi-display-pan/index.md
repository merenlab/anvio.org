---
layout: program
title: anvi-display-pan
excerpt: An anvi'o program. Start an anvi&#x27;o server to display a pan-genome.
categories: [anvio]
comments: false
redirect_from: /m/anvi-display-pan
image:
  featurerelative: ../../../images/header.png
  display: true
---

Start an anvi&#x27;o server to display a pan-genome.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[svg](../../artifacts/svg) <img src="../../images/icons/SVG.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[gene-cluster-inspection](../../artifacts/gene-cluster-inspection) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **displays the contents of a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> in the [anvi'o interactive interface](http://merenlab.org/2016/02/27/the-anvio-interactive-interface//#using-the-anvio-interactive-interface), much like <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>.**

Like you can see in the [pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#displaying-the-pan-genome), this opens a window of the interactive interface where each item is a gene cluster and each layer represents one of your genomes.

### A general run

You can run it with only two parameters:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;pan &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                 &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span>
</div>

There are several default layer orders to choose from, including organizing based on gene cluster presence/absense or gene cluster frequency. These will both group your core gene clusters and singletons separately.

Beyond that, there are many different settings you can change in the side panel of the interface and you can import various additional data (primarily with the program <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>). Once you're happy with the data displayed in the interface (and the prettiness of that data), you can  save those preferences in a <span class="artifact-n">[state](/help/main/artifacts/state)</span>.

### Item data groups

The inner layers of the pan display (gene cluster statistics, homogeneity indices, AAI values, etc.) are organized into **data groups**. When <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> generates a pan database, it stores related data in named groups such as `gene_cluster_stats`, `SCG`, `homogeneity`, and `AAI`. Any data you import with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span> goes into the `default` group (or a group of your choosing via the `-D` flag).

In the Main tab of the interactive interface, you will find **Item Data Groups** checkboxes that let you toggle entire groups of layers on or off. This makes it easy to focus on specific aspects of your pangenome without manually hiding individual layers. Related layers within each group are kept together and visually separated from other groups by a small margin.

### I want MORE data displayed

There are several other data types you can additionally choose to display in this program. Namely, you can add:

- a title (very fancy I know) using `--title`
- a NEWICK formatted tree (or import it as a <span class="artifact-n">[misc-data-items-order-txt](/help/main/artifacts/misc-data-items-order-txt)</span> with <span class="artifact-p">[anvi-import-items-order](/help/main/programs/anvi-import-items-order)</span> or as a <span class="artifact-n">[misc-data-layer-orders](/help/main/artifacts/misc-data-layer-orders)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>).
- view data in a tab-delimited file
- an additional view (provide this in a tab-delimited matrix where each column corresponds to a sample and each row corresponds to a gene cluster)
- an additional layer in the form of a <span class="artifact-n">[misc-data-layers-txt](/help/main/artifacts/misc-data-layers-txt)</span> (or import it into your <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> with <span class="artifact-p">[anvi-import-misc-data](/help/main/programs/anvi-import-misc-data)</span>

### How to minimize mouse clicks

Wondering how to autoload specific aspects of the interface? You're in the right place.

You have the option to specify quite a few aspects of the interface through the parameters to save you those sweet mouse clicks.

- You can specify which view to start the interface with. Check which views are available with `--list-views`.
- You can load a specific <span class="artifact-n">[state](/help/main/artifacts/state)</span> (either a previous state or a state that you've imported with <span class="artifact-p">[anvi-import-state](/help/main/programs/anvi-import-state)</span>). Check which states are available with the flag `--list-states`.
- You can also load a specific <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> with `--collection-autoload`. To check which collections are availible, use `--list-collections`.

### Other parameters

You can also skip processes like intializing functions or automatically ordering your items to save time, as well as configure the server to your heart's content.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-display-pan.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-display-pan`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-display-pan [-h] [-p PAN_DB] [-g GENOMES_STORAGE] [-d VIEW_DATA] [-t NEWICK] [-V ADDITIONAL_VIEW] [-A ADDITIONAL_LAYERS] [--view NAME] [--title NAME] [--state-autoload NAME] [--collection-autoload NAME] [--export-svg FILE_PATH] [--skip-init-functions] [--dry-run] [--skip-auto-ordering] [--skip-news] [-I IP_ADDR] [-P INT] [--browser-path PATH] [--read-only] [--server-only] [--password-protected] [--user-server-shutdown]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">Input files from the pangenome analysis.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL INPUTS</span> <span class="parameter-group-description">Where the yay factor becomes a reality.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-view_data"><code class="parameter-flags">-d, --view-data</code> <code class="parameter-metavar">VIEW_DATA</code></dt>
<dd class="parameter-details"><span class="parameter-help">A TAB-delimited file for view data</span></dd>
<dt class="parameter" id="parameter-tree"><code class="parameter-flags">-t, --tree</code> <code class="parameter-metavar">NEWICK</code></dt>
<dd class="parameter-details"><span class="parameter-help">NEWICK formatted tree structure</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-additional-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">ADDITIONAL STUFF</span> <span class="parameter-group-description">Parameters to provide additional layers, views, or layer data.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-additional_view"><code class="parameter-flags">-V, --additional-view</code> <code class="parameter-metavar">ADDITIONAL_VIEW</code></dt>
<dd class="parameter-details"><span class="parameter-help">A TAB-delimited file for an additional view to be used in the interface. This file should contain all split names, and values for each of them in all samples. Each column in this file must correspond to a sample name. Content of this file will be called &#x27;user_view&#x27;, which will be available as a new item in the &#x27;views&#x27; combo box in the interface</span></dd>
<dt class="parameter" id="parameter-additional_layers"><code class="parameter-flags">-A, --additional-layers</code> <code class="parameter-metavar">ADDITIONAL_LAYERS</code></dt>
<dd class="parameter-details"><span class="parameter-help">A TAB-delimited file for additional layers for splits. The first column of this file must be split names, and the remaining columns should be unique attributes. The file does not need to contain all split names, or values for each split in every column. Anvi&#x27;o will try to deal with missing data nicely. Each column in this file will be visualized as a new layer in the tree.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-visuals-related">
<header class="parameter-group-header"><span class="parameter-group-title">VISUALS RELATED</span> <span class="parameter-group-description">Parameters that give access to various adjustements regarding the interface.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-view"><code class="parameter-flags">--view</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Start the interface with a pre-selected view. To see a list of available views, use --show-views flag.</span></dd>
<dt class="parameter" id="parameter-title"><code class="parameter-flags">--title</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Title for the interface. If you are working with a RUNINFO dict, the title will be determined based on information stored in that file. Regardless, you can override that value using this parameter.</span></dd>
<dt class="parameter" id="parameter-state_autoload"><code class="parameter-flags">--state-autoload</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Automatically load previous saved state and draw tree. To see a list of available states, use --show-states flag.</span></dd>
<dt class="parameter" id="parameter-collection_autoload"><code class="parameter-flags">--collection-autoload</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Automatically load a collection and draw tree. To see a list of available collections, use --list-collections flag.</span></dd>
<dt class="parameter" id="parameter-export_svg"><code class="parameter-flags">--export-svg</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">The SVG output file path.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-sweet-params-of-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">SWEET PARAMS OF CONVENIENCE</span> <span class="parameter-group-description">Parameters and flags that are not quite essential (but nice to have).</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-skip_init_functions"><code class="parameter-flags">--skip-init-functions</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, function calls for genes will not be initialized (therefore will be missing from all relevant interfaces or output files). The use of this flag may reduce the memory fingerprint and processing time for large datasets.</span></dd>
<dt class="parameter parameter-switch" id="parameter-dry_run"><code class="parameter-flags">--dry-run</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t do anything real. Test everything, and stop right before wherever the developer said &#x27;well, this is enough testing&#x27;, and decided to print out results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_auto_ordering"><code class="parameter-flags">--skip-auto-ordering</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, the attempt to include automatically generated orders of items based on additional data is skipped. In case those buggers cause issues with your data, and you still want to see your stuff and deal with the other issue maybe later.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_news"><code class="parameter-flags">--skip-news</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t try to read news content from upstream.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-server-configuration">
<header class="parameter-group-header"><span class="parameter-group-title">SERVER CONFIGURATION</span> <span class="parameter-group-description">For power users.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-ip_address"><code class="parameter-flags">-I, --ip-address</code> <code class="parameter-metavar">IP_ADDR</code></dt>
<dd class="parameter-details"><span class="parameter-help">IP address for the HTTP server. The default ip address (localhost) should work just fine for most.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">localhost</code></span></dd>
<dt class="parameter" id="parameter-port_number"><code class="parameter-flags">-P, --port-number</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Port number to use for anvi&#x27;o services. If nothing is declared, anvi&#x27;o will try to find a suitable port number, starting from the default port number, 8080.</span></dd>
<dt class="parameter" id="parameter-browser_path"><code class="parameter-flags">--browser-path</code> <code class="parameter-metavar">PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will use your default browser to launch the interactive interface. If you would like to use something else than your system default, you can provide a full path for an alternative browser using this parameter, and hope for the best. For instance we are using this parameter to call Google&#x27;s experimental browser, Canary, which performs better with demanding visualizations.</span></dd>
<dt class="parameter parameter-switch" id="parameter-read_only"><code class="parameter-flags">--read-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">When the interactive interface is started with this flag, all &#x27;database write&#x27; operations will be disabled.</span></dd>
<dt class="parameter parameter-switch" id="parameter-server_only"><code class="parameter-flags">--server-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">The default behavior is to start the local server, and fire up a browser that connects to the server. If you have other plans, and want to start the server without calling the browser, this is the flag you need.</span></dd>
<dt class="parameter parameter-switch" id="parameter-password_protected"><code class="parameter-flags">--password-protected</code></dt>
<dd class="parameter-details"><span class="parameter-help">If this flag is set, command line tool will ask you to enter a password and interactive interface will be only accessible after entering same password. This option is recommended for shared machines like clusters or shared networks where computers are not isolated.</span></dd>
<dt class="parameter parameter-switch" id="parameter-user_server_shutdown"><code class="parameter-flags">--user-server-shutdown</code></dt>
<dd class="parameter-details"><span class="parameter-help">Allow users to shutdown an anvi&#x27;server via web interface.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [See this program in action on the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/#displaying-the-pan-genome)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/display_pan.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
