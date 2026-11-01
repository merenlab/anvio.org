---
layout: program
title: anvi-script-snvs-to-interactive
excerpt: An anvi'o program. Take the output of anvi-gen-variability-profile, prepare an output for interactive interface.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-snvs-to-interactive
image:
  featurerelative: ../../../images/header.png
  display: true
---

Take the output of anvi-gen-variability-profile, prepare an output for interactive interface.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[interactive](../../artifacts/interactive) <img src="../../images/icons/DISPLAY.png" class="artifact-icon-mini" /></span></p>




## Usage


This programs takes a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> and generates the information necessary to visualize its contents with <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>.

Specifically, this program outputs a directory that contains a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, a <span class="artifact-n">[view-data](/help/main/artifacts/view-data)</span> artifact, and a <span class="artifact-n">[dendrogram](/help/main/artifacts/dendrogram)</span>. For example, if you ran this program like so:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;snvs&#45;to&#45;interactive &#45;o OUTPUT_DIR \
                                <span class="artifact&#45;n">[variability&#45;profile](/help/main/artifacts/variability&#45;profile)</span>
</div>

Then, you can open the interactive interface by running

<div class="codeblock" markdown="1">
anvi&#45;interactive &#45;&#45;manual&#45;mode \
                 &#45;p OUTPUT_DIR/profile.db \
                 &#45;&#45;tree OUTPUT_DIR/tree.txt \
                 &#45;&#45;view&#45;data OUTPUT_DIR/view.txt
</div>

## Other parameters

### Using Only a Subset of the Input

By default, all variability positions in your variability profile are considered. However, if the input is too large (i.e. more than 25,000 variability positions), the runtime on this program will be very long and the results won't display well. So, there are several ways to remove variability positions from  the input to get under this threshold:

1. Ignore positions with with certain departures from the consensus sequence (with `--min-departure-from-consensus` and `--max-departure-from-consensus`)
2. Ignore positions with with certain departures from the reference sequence (with `--min-departure-from-reference` and `--max-departure-from-reference`)
3. Ignore positions in all non-coding regions with the flag `--only-in-genes`.

If you still have more positions than you can tell the program to pick a random subset of the input with the parameter `--random` followed by a seed integer.

### Modifying the Output

By the default, the output data will use the departure from consensus values. If instead you want to look at the departure from the reference, just add the falg `--display-dep-from-reference`


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-snvs-to-interactive.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-snvs-to-interactive`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-snvs-to-interactive [-h] [--min-departure-from-consensus FLOAT] [--max-departure-from-consensus FLOAT] [--min-departure-from-reference FLOAT] [--max-departure-from-reference FLOAT] [--display-dep-from-reference] [--only-in-genes] [--random INTEGER] [--just-do-it] -o DIR_PATH VARIABILITY_PROFILE</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-positional-arguments">
<header class="parameter-group-header"><span class="parameter-group-title">positional arguments</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-profile"><code class="parameter-flags">VARIABILITY_PROFILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">The output file generated by anvi-gen-variability-profile</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_departure_from_consensus"><code class="parameter-flags">--min-departure-from-consensus</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum departure from consensus at a given variable nucleotide position. The default is 0.00.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-max_departure_from_consensus"><code class="parameter-flags">--max-departure-from-consensus</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum departure from consensus at a given variable nucleotide position. The default is 1.00.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.0</code></span></dd>
<dt class="parameter" id="parameter-min_departure_from_reference"><code class="parameter-flags">--min-departure-from-reference</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Minimum departure from consensus at a given variable nucleotide position. The default is 0.00.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.0</code></span></dd>
<dt class="parameter" id="parameter-max_departure_from_reference"><code class="parameter-flags">--max-departure-from-reference</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum departure from consensus at a given variable nucleotide position. The default is 1.00.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1.0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-display_dep_from_reference"><code class="parameter-flags">--display-dep-from-reference</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default this program will generate a matrix file that displays departure from consensus values. This flag will switch to departure from reference.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_in_genes"><code class="parameter-flags">--only-in-genes</code></dt>
<dd class="parameter-details"><span class="parameter-help">With this flag you will ignore SNVs in non-coding regions.</span></dd>
<dt class="parameter" id="parameter-random"><code class="parameter-flags">--random</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this parameter to randomly subset your data. If there are too many SNV positions, this script may take forever to finish. You should *never* let it try to deal with more than 25-30K points, but an ideal would be around 4-5 thousand.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
<dt class="parameter parameter-required" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Directory path for output files</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [Use in the Infant Gut Tutorial](http://merenlab.org/tutorials/infant-gut/#visualizing-snv-profiles-using-anvio)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/snvs_to_interactive.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
