---
layout: program
title: anvi-experimental-organization
excerpt: An anvi'o program. Create an experimental clustering dendrogram.
categories: [anvio]
comments: false
redirect_from: /m/anvi-experimental-organization
image:
  featurerelative: ../../../images/header.png
  display: true
---

Create an experimental clustering dendrogram..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[clustering-configuration](../../artifacts/clustering-configuration) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[dendrogram](../../artifacts/dendrogram) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>




## Usage


This program uses an anvi'o <span class="artifact-n">[clustering-configuration](/help/main/artifacts/clustering-configuration)</span> file to access various data sources in anvi'o databases to produce a hierarchical clustering dendrogram for items.

It is especially powerful when the user wishes to create a hierarchical clustering of contigs or gene clusters using only a specific set of samples. If you would like to see an example usage of this program see the article on [combining metagenomics with metatranscriptomics](https://merenlab.org/2015/06/10/combining-omics-data/).

### How does it work?

A <span class="artifact-n">[clustering-configuration](/help/main/artifacts/clustering-configuration)</span> file tells the program which data matrices to use and how to process them. The program reads all matrices described in the config, scales and normalizes them as instructed, and then merges them into a single combined matrix by concatenating the columns from each matrix. This final merged matrix is then used to perform hierarchical clustering, producing a <span class="artifact-n">[dendrogram](/help/main/artifacts/dendrogram)</span>.

A simple run of this program looks like this:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                               &#45;N my_organization \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span>
</div>

If you don't want to store the result in your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, use the `--skip-store-in-db` flag:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;skip&#45;store&#45;in&#45;db \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span>
</div>

You can use the `--dry-run` flag to check whether the program can parse the config file and find the relevant data sources without actually performing the clustering:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;skip&#45;store&#45;in&#45;db \
                               &#45;&#45;dry&#45;run
</div>

### Exporting the merged data matrix

In some cases, you may want to see the actual data that goes into the clustering. Since the program combines multiple data matrices into one before clustering, the final form of this merged matrix may not be immediately obvious to the user. But it can be recovered using the `--export-merged-matrix` flag with any of the clustering configurations.

For instance, running the program this way will export the combined and scaled matrix as a TAB-delimited file while still performing the clustering and storing the result in the database:

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;o <span class="artifact&#45;n">[dendrogram](/help/main/artifacts/dendrogram)</span> \
                               &#45;&#45;export&#45;merged&#45;matrix merged_matrix.txt
</div>

The resulting file will contain one row per item and columns from all input matrices after they have been normalized, log-transformed, and scaled according to the config. This can be useful for debugging, or for generating dendrograms using other software.

You can also recover the matrix *without* running the clustering step, which may be costly for large datasets, and without storing anything in the database -- as in "just scale the data, merge it, give it back to me as a TAB-delimited file, and stop there":

<div class="codeblock" markdown="1">
anvi&#45;experimental&#45;organization <span class="artifact&#45;n">[clustering&#45;configuration](/help/main/artifacts/clustering&#45;configuration)</span> \
                               &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;&#45;dry&#45;run \
                               &#45;&#45;export&#45;merged&#45;matrix merged_matrix.txt
</div>

This will scale and merge the matrices but skip the hierarchical clustering entirely.

Let's assume you have a merged <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, and you wish to get the scaled and merged matrix for tetranucleotide frequency and coverage data. This is exactly what you could do to recover the primary data that would go into the clustering step for that dataset::

```bash
# locate the tnf-cov config file in the anvi'o source directory
tnf_cov=$(python -c "from pathlib import Path; import anvio; print(Path(anvio.__file__).parent / 'data/clusterconfigs/merged/tnf-cov')")

# run the experimental organization to get the merged matrix for tnf-cov without doing the clustering
anvi-experimental-organization $tnf_cov \
                               -c CONTIGS.db \
                               -p PROFILE.db \
                               --dry-run \
                               --export-merged-matrix tnf_cov_merged_matrix.txt
```

Et voilà! You will have a file called `tnf_cov_merged_matrix.txt` that contains the merged and scaled data for tetranucleotide frequency and coverage for all contigs in your dataset.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-experimental-organization.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-experimental-organization`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-experimental-organization [-h] [-p PROFILE_DB] -c CONTIGS_DB [-i DIR_PATH] [-N NAME] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] [--skip-store-in-db] [-o FILE_PATH] [--export-merged-matrix FILE] [--dry-run] FILE</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-positional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">positional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-config_file"><code class="parameter-flags">FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Config file for clustering of contigs. See documentation for help.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-input_directory"><code class="parameter-flags">-i, --input-directory</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Input directory where the input files addressed from the configuration file can be found (i.e., the profile database, if PROFILE.db::TABLE notation is used in the configuration file).</span></dd>
<dt class="parameter" id="parameter-name"><code class="parameter-flags">-N, --name</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The name to use when storing the resulting clustering in the database. This name will appear in the interactive interface and other relevant interfaces. Please consider using a short and descriptive single-word (if you do not do that you will make anvi&#x27;o complain).</span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. If you do not use this flag, the distance metric you defined in your clustering config file will be used. If you have not defined one in your config file, then the system default will be used, which is &quot;euclidean&quot;.</span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">Same story with the `--distance`, except, the system default for this one is ward.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_store_in_db"><code class="parameter-flags">--skip-store-in-db</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, analysis results are stored in the profile database. The use of this flag will let you skip that</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-export_merged_matrix"><code class="parameter-flags">--export-merged-matrix</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Export the final merged data matrix (the combined and scaled data from all input matrices that is used to generate the dendrogram) as a TAB-delimited file.</span></dd>
<dt class="parameter parameter-switch" id="parameter-dry_run"><code class="parameter-flags">--dry-run</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t do anything real. Test everything, and stop right before wherever the developer said &#x27;well, this is enough testing&#x27;, and decided to print out results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [An example use of this program](https://merenlab.org/2015/06/10/combining-omics-data/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/experimental_organization.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
