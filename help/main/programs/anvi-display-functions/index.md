---
layout: program
title: anvi-display-functions
excerpt: An anvi'o program. Start an anvi&#x27;o interactive display to see functions across genomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-display-functions
image:
  featurerelative: ../../../images/header.png
  display: true
---

Start an anvi&#x27;o interactive display to see functions across genomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


For a given annotation source for <span class="artifact-n">[functions](/help/main/artifacts/functions)</span>, this program displays distribution patterns of unique function names (or accession numbers) across genomes stored in anvi'o databases.

It is a powerful tool for analyzing differentially occurring functions for any source of annotation that is shared across all genomes.

Currently, <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span> can work with any combination of genomes from <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span>, and <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>.

{:.notice}
If you are only interested in text output, see the program <span class="artifact-p">[anvi-script-gen-function-matrix-across-genomes](/help/main/programs/anvi-script-gen-function-matrix-across-genomes)</span> that can report <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span> files.

### Quick & Simple Run

The simplest way to execute this program is as follows:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db
</div>

You can modify the annotation source based on what is available across your genomes. You can use the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span> to see all available function annotation sources in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> or <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>. You can also use the program <span class="artifact-p">[anvi-import-functions](/help/main/programs/anvi-import-functions)</span> to import ANY type of functional grouping of your genes and use those ad hoc functional sources to display their distribution across genomes. Please see <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> for more information on functions and how to obtain them.

{:.notice}
Please note that a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> will be automatically generated for you. Once it is generated, the same profile database can be visualized repeatedly using <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> in manual mode, without needing to retain any other files.


### Combining genomes from multiple sources

You can execute this program by combining genomes from multiple sources:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                       &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db

</div>

This approach allows you to integrate functions from your metagenome-assembled genomes, isolates you have acquired from external sources, and even genomes in an anvi'o pangenome into a single analytical framework with remarkable ease.

### Performing functional enrichment analysis for free

This is an optional step that may be very useful for some investigations. If your genomes are divided into meaningful groups, you can also perform a functional enrichment analysis while running this program. All you need to do for this analysis to be included is to provide a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file that describes which genome belongs to which group:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;&#45;groups&#45;txt <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span>
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db
</div>

If you are using multiple sources for your genomes, you may not immediately know which genomes to list in your <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file. In that case, you can first run the program with this additional parameter:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;i <span class="artifact&#45;n">[internal&#45;genomes](/help/main/artifacts/internal&#45;genomes)</span> \
                       &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                       &#45;&#45;annotation&#45;source COG20_FUNCTION \
                       &#45;&#45;profile&#45;db COGS&#45;PROFILE.db \
                       &#45;&#45;print&#45;genome&#45;names&#45;and&#45;quit
</div>

In this case anvi'o will recover all the functions from all sources and print them out for you to create a groups file before re-running the program with it.

This analysis will add the following additional layers to your <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> display: 'enrichment_score', 'unadjusted_p_value', 'adjusted_q_value', 'associated_groups'. See <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> to learn more about these columns.

### Aggregating functions using accession IDs

Once executed, this program essentially aggregates all function names that occur in one or more genomes among the set of genomes found in input sources. The user can instruct the program to use accession IDs to aggregate functions rather than function names:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db \
                       &#45;&#45;aggregate&#45;based&#45;on&#45;accession
</div>

While the default setting, which uses function names, will be appropriate for most applications, using accession IDs instead of function names may be important for specific purposes. There may be an actual difference between using functions or accessions to aggregate data since multiple accession IDs in various databases may correspond to the same function. This may lead to misleading enrichment analyses downstream as identical function annotations may be over-split into multiple groups. Thus, the default aggregation method uses function names.

### Aggregating functions using all function hits

This is somewhat nuanced, but actually straightforward. In some cases a gene may be annotated with more than one function name. This is a decision often made at the function annotation tool level. For instance <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span> may yield two COG annotations for a single gene because the significance score for both hits may exceed the default cutoff. While this can be useful in <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span> output where things should be most comprehensive, having some genes annotated with multiple functions and others with one function may over-split them (since in this scenario a gene with COGXXX and COGXXX;COGYYY would end up in different bins). Thus, <span class="artifact-p">[anvi-display-functions](/help/main/programs/anvi-display-functions)</span> will use the best hit for any gene that has multiple hits. But this behavior can be modified as follows:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db \
                       &#45;&#45;aggregate&#45;using&#45;all&#45;hits
</div>

### The min-occurrence limit

You can choose to limit the number of functions to be considered to those that occur in more than a minimum number of genomes:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                       &#45;&#45;annotation&#45;source KOfam \
                       &#45;&#45;profile&#45;db KOFAM&#45;PROFILE.db \
                       &#45;&#45;min&#45;occurrence 5
</div>

Here the `--min-occurrence 5` parameter will exclude any function that appears in fewer than 5 genomes in your collection.


### A real-world example

Assume we have a list of <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> that include three different species of *Bifidobacterium*. Running the following command:

<div class="codeblock" markdown="1">
anvi&#45;display&#45;functions &#45;&#45;external&#45;genomes Bifidobacterium.txt \
                       &#45;&#45;annotation&#45;source COG20_FUNCTION \
                       &#45;&#45;profile&#45;db COG20&#45;PROFILE.db \
                       &#45;&#45;min&#45;occurrence 3
</div>

Would produce the following display by default, where each layer is one of the genomes described in the <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file, and each item is a unique function name that occurs in `COG20_FUNCTION` (which was obtained by running <span class="artifact-p">[anvi-run-ncbi-cogs](/help/main/programs/anvi-run-ncbi-cogs)</span> on each <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> in the external genomes file) that was found in more than three genomes:

[![Example output](../../images/anvi-display-functions-01.png){:.center-img .width-50}](../../images/anvi-display-functions-01.png)

The outermost layer shows the function names:

[![Example output](../../images/anvi-display-functions-02.png){:.center-img .width-50}](../../images/anvi-display-functions-02.png)

After quick prettification through the <span class="artifact-n">[interactive](/help/main/artifacts/interactive)</span> interface, this leads to a cleaner display of three distinct species in this group, and functions that are uniquely enriched in each of them:

[![Example output](../../images/anvi-display-functions-03.png){:.center-img .width-80}](../../images/anvi-display-functions-03.png)

The resulting <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> can now be used by <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> to re-visualize these data, or can be shared with the community without sharing the underlying contigs databases.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-display-functions.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-display-functions) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
