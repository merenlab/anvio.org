---
layout: program
title: anvi-summarize-blitz
excerpt: An anvi'o program. FAST summary of many anvi&#x27;o single profile databases (without having to use the program anvi-merge).
categories: [anvio]
comments: false
redirect_from: /m/anvi-summarize-blitz
image:
  featurerelative: ../../../images/header.png
  display: true
---

FAST summary of many anvi&#x27;o single profile databases (without having to use the program anvi-merge)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[single-profile-db](../../artifacts/single-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[quick-summary](../../artifacts/quick-summary) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program is a quicker, but less comprehensive, alternative to <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>. It is used to summarize basic read recruitment statistics (like detection and coverage) from many single profiles that are all associated with the same <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

Given a list of samples (single profiles) and a collection, `anvi-summarize-blitz` will compute the per-sample weighted average of each statistic for each bin in the collection. This is an average of the statistic value over each split in the bin, _weighted by the split length_.

The output will be a text file, and you can find details about its format by clicking on <span class="artifact-n">[quick-summary](/help/main/artifacts/quick-summary)</span>.

### Basic usage

In addition to your list of <span class="artifact-n">[single-profile-db](/help/main/artifacts/single-profile-db)</span>s, you must provide this program with their corresponding contigs database and a collection name.

<div class="codeblock" markdown="1">
anvi&#45;summarize&#45;blitz PROFILE_1.db PROFILE_2.db PROFILE_3.db [...] \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
</div>

The program will summarize the same collection across all of your single profile databases. However, it will use only the first profile database in the argument list to learn about what is in the collection, so it is not exactly necessary to have this collection defined for all of the other profile databases (though one could argue that it is a good idea to do this regardless...). The collection name you provide to this program must be a collection that is present in at least the first profile database in the argument list. In the example above, only `PROFILE_1.db` is strictly required to include the collection you wish to summarize (though all other profiles must contain the same splits as this first profile, which should not be a problem if you generated them all in the same way).

### Choosing a different output prefix

If nothing is provided, the output file name will be the collection name, suffixed with `-SUMMARY-BLITZ.txt` (although the user can specify the output file name as they should using the parameter `--output-file`):

<div class="codeblock" markdown="1">
anvi&#45;summarize&#45;blitz PROFILE_1.db PROFILE_2.db PROFILE_3.db [...] \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                     &#45;o OUTPUT.txt
</div>

### Choosing which statistics to summarize

The default statistics that will be summarized are detection and something called 'mean_coverage_Q2Q3' (which is [this](https://merenlab.org/2017/05/08/anvio-views/#mean-overage-q2q3)). You can choose which statistics to summarize by providing them as a comma-separated list (no spaces in the list) to the `--stats-to-summarize`, or `-S`, parameter:

<div class="codeblock" markdown="1">
anvi&#45;summarize&#45;blitz PROFILE_1.db PROFILE_2.db PROFILE_3.db [...] \
                     &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                     &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                     &#45;S std_coverage,mean_coverage,detection
</div>

Each statistic will get its own column in the output file.

If you are not sure which statistics are available to choose from, just provide some ridiculous, arbitrary string (that cannot possibly be a name of a statistic) to this flag, and you will get an error message that includes a list of the available statistics. Or, you can just look at this example error message (but no guarantees that the list in this example will be the same as whatever you would get by doing it yourself. Just sayin'.)
```
Config Error: The statistic you requested, cattywampus, does not exist. Here are the options
              to choose from: std_coverage, mean_coverage, mean_coverage_Q2Q3, detection,
              abundance, variability
```

If you are curious about the statistics in the list, many of them have definitions in [this blog post](https://merenlab.org/2017/05/08/anvio-views).

## Common errors

### Existing file error

If the output file already exists, you will encounter the following error:
```
File/Path Error: AppendableFile class is refusing to open your file at test-quick_summary.txt
                 because it already exists. If you are a user, you should probably give Anvi'o a
                 different file name to work with. If you are a programmer and you don't want
                 this behavior, init this class with `fail_if_file_exists=False` instead.
```
You can either provide a different file prefix using the `-O` parameter, as the error message suggests, or you can simply delete the existing file and re-run your command.

### Missing table error

If you get an error that looks like this:
```
Config Error: The database at [PROFILE.db] does not seem to have a table named
              `detection_splits` :/ Here is a list of table names this database knows:
              [...]
```

That means your profile databases are not the correct version. The tables we are accessing in this program were introduced in profile database version 36. So the solution to this error is to update your databases to at least that version, using <span class="artifact-p">[anvi-migrate](/help/main/programs/anvi-migrate)</span>. :)


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-summarize-blitz.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-summarize-blitz`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-summarize-blitz [-h] -c CONTIGS_DB -C COLLECTION_NAME [-o FILE_PATH] [--stats-to-summarize STATS] SINGLE_PROFILE(S) [SINGLE_PROFILE(S) ...]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-positional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">positional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-profile_dbs"><code class="parameter-flags">SINGLE_PROFILE(S)</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvo&#x27;o single profiles to summarize. All profiles should be associated with the same contigs db.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter parameter-required" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Name of the collection you wish to summarize. The SAME collection will be summarized across all of your input profiles. This collection must be defined in at least the first profile in the argument list.</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-stats_to_summarize"><code class="parameter-flags">--stats-to-summarize, -S</code> <code class="parameter-metavar">STATS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to indicate which statistics you want summarized, as a comma-separated list. The default stats are &#x27;detection&#x27; and &#x27;mean_coverage_Q2Q3&#x27;. To see a list of available stats, use this flag and provide an absolutely ridiculous string after it (we suggest &#x27;cattywampus&#x27;, but you do you).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/summarize_blitz.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
