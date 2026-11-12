---
layout: program
title: anvi-inspect
excerpt: An anvi'o program. Start an anvi&#x27;o inspect interactive interface.
categories: [anvio]
comments: false
redirect_from: /m/anvi-inspect
image:
  featurerelative: ../../../images/header.png
  display: true
---

Start an anvi&#x27;o inspect interactive interface.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[bin](../../artifacts/bin) <img src="../../images/icons/BIN.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[contig-inspection](../../artifacts/contig-inspection) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>




## Usage


This lets you inspect a single split across your samples. This interface can also be opened from the <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> interface by asking for details about a specific split.

From this view, you can clearly see the coverage and detection across your split, all SNVs, and the genes identified within your split and their functional annotations. You can also  easily compare all of this data across all of the samples that this split is present in.

To run this program, just provide a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> and <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> pair and a single split name to inspect.

<div class="codeblock" markdown="1">
anvi&#45;inspect &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
             &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
             &#45;&#45;split&#45;name Day17a_QCcontig9_split_00003
</div>

You can also choose to hide SNVs marked as outliers or configure the server in various ways.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-inspect.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-inspect`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-inspect [-h] [-p PROFILE_DB] [-c CONTIGS_DB] [--split-name SPLIT_NAME] [--hide-outlier-SNVs] [-I IP_ADDR] [-P INT] [--server-only] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-default-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">DEFAULT INPUTS</span> <span class="parameter-group-description">The interactive interface can be started with anvi&#x27;o databases.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-split_name"><code class="parameter-flags">--split-name</code> <code class="parameter-metavar">SPLIT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Split name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-visuals-related">
<header class="parameter-group-header"><span class="parameter-group-title">VISUALS RELATED</span> <span class="parameter-group-description">Parameters that give access to various adjustements regarding the interface.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-hide_outlier_snvs"><code class="parameter-flags">--hide-outlier-SNVs</code></dt>
<dd class="parameter-details"><span class="parameter-help">During profiling, anvi&#x27;o marks positions of single-nucleotide variations (SNVs) that originate from places in contigs where coverage values are a bit &#x27;sketchy&#x27;. If you would like to avoid SNVs in those positions of splits in applicable projects you can use this flag, and the interface would hide SNVs that are marked as &#x27;outlier&#x27; (although it is clearly the best to see everything, no one will judge you if you end up using this flag) (plus, there may or may not be some historical data on this here: https://github.com/meren/anvio/issues/309).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-server-configuration">
<header class="parameter-group-header"><span class="parameter-group-title">SERVER CONFIGURATION</span> <span class="parameter-group-description">For power users.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-ip_address"><code class="parameter-flags">-I, --ip-address</code> <code class="parameter-metavar">IP_ADDR</code></dt>
<dd class="parameter-details"><span class="parameter-help">IP address for the HTTP server. The default ip address (localhost) should work just fine for most.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">localhost</code></span></dd>
<dt class="parameter" id="parameter-port_number"><code class="parameter-flags">-P, --port-number</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Port number to use for anvi&#x27;o services. If nothing is declared, anvi&#x27;o will try to find a suitable port number, starting from the default port number, 8080.</span></dd>
<dt class="parameter parameter-switch" id="parameter-server_only"><code class="parameter-flags">--server-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">The default behavior is to start the local server, and fire up a browser that connects to the server. If you have other plans, and want to start the server without calling the browser, this is the flag you need.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-general-convenience">
<header class="parameter-group-header"><span class="parameter-group-title">GENERAL CONVENIENCE</span> <span class="parameter-group-description">From anvi&#x27;o developers to you.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Visualizing contig coverages](https://merenlab.org/2019/11/25/visualizing-coverages/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/inspect.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
