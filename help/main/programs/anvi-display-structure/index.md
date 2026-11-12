---
layout: program
title: anvi-display-structure
excerpt: An anvi'o program. Interactively visualize sequence variants on protein structures.
categories: [anvio]
comments: false
redirect_from: /m/anvi-display-structure
image:
  featurerelative: ../../../images/header.png
  display: true
---

Interactively visualize sequence variants on protein structures.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[splits-txt](../../artifacts/splits-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>




## Usage



This program opens an interactive interface to explore single amino acid variants (SAAVs) and single codon variants (SCVs) in the context of predicted tertiary protein structures and binding sites.  There are many example uses [here](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/#display-metagenomic-sequence-variants-directly-on-predicted-structures) and you can work through an example as part of [the infant gut tutorial](http://merenlab.org/tutorials/infant-gut/#chapter-vii-from-single-amino-acid-variants-to-protein-structures) as well.  This is an integral program of anvi'o structure, which you can learn more about [here](https://merenlab.org/software/anvio-structure/).


In short, this program enables users to explore sequence variation in the context of 3D protein structure, which reveals insight that cannot be learned from purely sequence-based approaches.


### Before running

To run this program, you'll need to have created a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> which can be easily done with a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and the program <span class="artifact-p">[anvi-gen-structure-database](/help/main/programs/anvi-gen-structure-database)</span>.


You'll also need a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> that was created using <span class="artifact-p">[anvi-profile](/help/main/programs/anvi-profile)</span>'s flag `--profile-SCVs`, which means that single codon variants (SCVs) have been profiled. Very sorry if this forces you to re-profile, but as of v6.2, this is now a very expedient process.


### MODELLER and ColabFold structures

<span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span> works with a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> regardless of whether its structures were predicted by MODELLER (template-based homology modelling) or ColabFold (AlphaFold2). The interface adapts to the prediction engine: for MODELLER structures it reports the DOPE, GA341, and molpdf model scores along with the PDB templates that were used, while for ColabFold structures it reports the model's mean pLDDT and pTM (ColabFold is template-free, so no templates are shown). For ColabFold structures, the per-residue pLDDT confidence is also available as a variable you can color the protein by and filter variants on, just like the other residue-level annotations.


### Basic Run

There are two ways to provide the variability information to this program.

The first is to provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> pair, and let this program calculate SAAVs and SCVs as they are requested by the interface.


<div class="codeblock" markdown="1">
anvi&#45;display&#45;structure &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span> \
                       &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                       &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span>
</div>

The second is to use <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span> to create a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span>. This way, you pre-load all of the variability data and don't have to wait for <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span> to calculate variability on-the-fly. This option is probably most convenient in instances where you have already generated a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> for other reasons. If you fall into this camp, you can run <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span> as so:


<div class="codeblock" markdown="1">
anvi&#45;display&#45;structure &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span> \
                       &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                       &#45;v <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span>
</div>

{:.notice}
You still must provide the <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> used to generate the <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span>, since it contains other necessary information such as functional annotations and ligand binding predictions.  You may optionally provide a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> if custom sample grouping is important to you.

{:.notice}
During <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span>, if you are _only_ interested in genes that have predicted structures, you may want to run <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span> with the flag `--only-if-structure`.

### Refining your search

You have several options to refine what proteins and variants you're looking at:

- Provide a list of gene caller IDs to only display specific genes (this can be provided either directly as a parameter or as a file with one gene caller ID per line)
- Specify the minimum departure from the consensus sequence. This is a number from 0-1 that describes the threshold for a variability position to be displayed. For example, if this is set to 0.2, then all SAAVs and SCVs where less than 20 percent of the reads vary from the consensus sequence will not be displayed.
- Specify samples of interest. Those in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> that are not in the samples of interest will be filtered out.

If you're choosing to have <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span> calculate variability on-the-fly, you can speed things up by choosing to _only_ calculate SAAVs or _only_ calculate SCVs.


### Other parameters

Power users can also change the server configuration (i.e. set the IP address, port number, browser path, server password, etc.)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-display-structure.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-display-structure`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-display-structure [-h] -s STRUCTURE_DB [-p PROFILE_DB] [-c CONTIGS_DB] [-V VARIABILITY_TABLE] [--splits-of-interest FILE] [--samples-of-interest FILE] [--genes-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS] [-j FLOAT] [--SAAVs-only] [--SCVs-only] [-I IP_ADDR] [-P INT] [--browser-path PATH] [--server-only] [--password-protected]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-structure">
<header class="parameter-group-header"><span class="parameter-group-title">STRUCTURE</span> <span class="parameter-group-description">Information related to the structure database, which can be created with anvi-gen-structure-database.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-structure_db"><code class="parameter-flags">-s, --structure-db</code> <code class="parameter-metavar">STRUCTURE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o structure database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-variability">
<header class="parameter-group-header"><span class="parameter-group-title">VARIABILITY</span> <span class="parameter-group-description">We can overlay codon and amino acid variability in your metagenomes but we need a data source of this variability. Most simply, anvi&#x27;o can learn this information when you provide both your profile (-p) and contigs (-c) databases. Alternatively, you can provide a variability table output (-V) from the program anvi-gen-variability-profile. If you don&#x27;t want to visualize variants, this is the wrong tool for the job. Instead, export the PDB files with anvi-export-structures, and open with a more comprehensive protein viewing software.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-variability_profile"><code class="parameter-flags">-V, --variability-profile</code> <code class="parameter-metavar">VARIABILITY_TABLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The output of anvi-gen-variability-profile, or a different variant-calling output that has been converted to the anvi&#x27;o format.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-refining-parameters">
<header class="parameter-group-header"><span class="parameter-group-title">REFINING PARAMETERS</span> <span class="parameter-group-description">Which samples, genes, and contigs etc. are you interested in? Define that stuff here.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-splits_of_interest"><code class="parameter-flags">--splits-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with split names. There should be only one column in the file, and each line should correspond to a unique split name.</span></dd>
<dt class="parameter" id="parameter-samples_of_interest"><code class="parameter-flags">--samples-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with samples names. There should be only one column in the file, and each line should correspond to a unique sample name (without a column header).</span></dd>
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter" id="parameter-min_departure_from_consensus"><code class="parameter-flags">-j, --min-departure-from-consensus</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Takes a value between 0 and 1, where 1 is maximum divergence from the consensus. it can be an expensive operation to display every variable position, and so the default is 0.05. To display every variable position, set this parameter to 0.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.05</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-saavs_only"><code class="parameter-flags">--SAAVs-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, variability will be generated for single amino acid variants (SAAVs) and not for single codon variants (SCVs). This could save you some time if you&#x27;re only interested in SAAVs.</span></dd>
<dt class="parameter parameter-switch" id="parameter-scvs_only"><code class="parameter-flags">--SCVs-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, variability will be generated for single codon variants (SCVs) and not for single amino acid variants (SAAVs). This could save you some time if you&#x27;re only interested in SCVs.</span></dd>
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
<dt class="parameter parameter-switch" id="parameter-server_only"><code class="parameter-flags">--server-only</code></dt>
<dd class="parameter-details"><span class="parameter-help">The default behavior is to start the local server, and fire up a browser that connects to the server. If you have other plans, and want to start the server without calling the browser, this is the flag you need.</span></dd>
<dt class="parameter parameter-switch" id="parameter-password_protected"><code class="parameter-flags">--password-protected</code></dt>
<dd class="parameter-details"><span class="parameter-help">If this flag is set, command line tool will ask you to enter a password and interactive interface will be only accessible after entering same password. This option is recommended for shared machines like clusters or shared networks where computers are not isolated.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [The overview page from the release](http://merenlab.org/software/anvio-structure/)

* [The section of the Infant Gut Tutorial focused on anvi-display-structure](http://merenlab.org/tutorials/infant-gut/#chapter-vii-from-single-amino-acid-variants-to-protein-structures)

* [Integrating sequence variants and predicted protein structures](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/display_structure.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
