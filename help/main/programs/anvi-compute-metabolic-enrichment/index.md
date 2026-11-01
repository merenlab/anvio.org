---
layout: program
title: anvi-compute-metabolic-enrichment
excerpt: An anvi'o program. A program that computes metabolic enrichment across groups of genomes and metagenomes.
categories: [anvio]
comments: false
redirect_from: /m/anvi-compute-metabolic-enrichment
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program that computes metabolic enrichment across groups of genomes and metagenomes.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/adw96.jpg" /></div><div class="anvio-person-info-box"><a href="/people/adw96" target="_blank"><span class="anvio-person-name">Amy D. Willis</span></a><div class="anvio-person-social-box"><a href="http://statisticaldiversitylab.com/team/amy-willis" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:adwillis@uw.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/AmyDWillis" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/adw96" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[kegg-metabolism](../../artifacts/kegg-metabolism) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[user-metabolism](../../artifacts/user-metabolism) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program computes metabolic module enrichment across groups of genomes or metagenomes and returns a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file (throughout this text, we will use the term genome to describe both for simplicity).

{:.warning}
For its sister programs, see <span class="artifact-p">[anvi-compute-functional-enrichment-in-pan](/help/main/programs/anvi-compute-functional-enrichment-in-pan)</span> and <span class="artifact-p">[anvi-compute-functional-enrichment-across-genomes](/help/main/programs/anvi-compute-functional-enrichment-across-genomes)</span>.

## Module enrichment

To run this program, you must already have estimated the completeness of metabolic modules in your genomes using the program <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> and obtained a "modules" mode output file (which is the default output mode of that program). In addition to that, you will need to provide a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file to declare which genome belongs to which group for enrichment analysis to consider.

### How does it work?

1. **Determine the presence of modules**. Each module in the "modules" mode output has a completeness score associated with it in each genome, and any module with a completeness score over a given threshold (set by `--module-completion-threshold`) will be considered to be *present* in that genome.

2. **Quantify the distribution of modules in each group of genomes**. The distribution of a given module across genomes in each group will determine its enrichment. This is done by fitting a generalized linear model (GLM) with a logit linkage function in `anvi-script-enrichment-stats`, and it produces a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file.

{:.notice}
The script `anvi-script-enrichment-stats` was implemented by [Amy Willis](https://github.com/adw96), and described first in [this paper](https://doi.org/10.1186/s13059-020-02195-w).

### Basic usage

See <span class="artifact-n">[kegg-metabolism](/help/main/artifacts/kegg-metabolism)</span> or <span class="artifact-n">[user-metabolism](/help/main/artifacts/user-metabolism)</span> for more information on how to generate a "modules" mode output format from <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>. Please note that the genome names in the modules file must match those that you will mention in the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span>
</div>

### Additional parameters

The default completeness threshold for a module to be considered 'present' in a genome is 0.75 (=75%). If you wish to change this, you can do so by providing a different threshold between (0, 1], using the `--module-completion-threshold` parameter:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;module&#45;completion&#45;threshold 0.9
</div>

By default, this program uses the [pathwise completeness score](https://anvio.org/help/main/programs/anvi-estimate-metabolism/#two-estimation-strategies---pathwise-and-stepwise) to determine which modules are 'present' in a genome, but you can ask it to use stepwise completeness instead by using the `--use-stepwise-completeness` flag.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;use&#45;stepwise&#45;completeness
</div>

By default, the column containing genome names in your MODULES.TXT file will have the header `db_name`, **but there are certain cases in which you might have them in a different column name for your genomes or metagenomes** (such as those cases where you did not run <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> in multi-mode). In those cases, you can tell this program to look for a *different* column name to find your genomes or metagenomes using the `--sample-header`. For example, if your metagenome names are listed under the `metagenome_name` column, you would do the following:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;sample&#45;header metagenome_name
</div>

If you ran <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> on a bunch of extra genomes but only want to include a subset of them in the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span>, that is fine. By default, any samples from the `MODULES.TXT` file that are missing from the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> will be **ignored**. However, there is also an option to include those missing samples in the analysis, as one big group called 'UNGROUPED'. To do this, you can use the `--include-samples-missing-from-groups-txt` parameter.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;include&#45;samples&#45;missing&#45;from&#45;groups&#45;txt
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-metabolic-enrichment.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-compute-metabolic-enrichment`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-compute-metabolic-enrichment [-h] [-M TEXT_FILE] [-G TEXT_FILE] -o FILE_PATH [--sample-header SAMPLE_HEADER] [--module-completion-threshold NUM] [--use-stepwise-completeness] [--include-samples-missing-from-groups-txt] [--qlambda NUM] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-critical-inputs">
<header class="parameter-group-header"><span class="parameter-group-title">CRITICAL INPUTS</span> <span class="parameter-group-description">This program requires TWO INPUT FILES: (1) an output file produced by the program `anvi-estimate-metabolism` as input and (2) a groups file (using the `--groups-txt` parameter) to specify which sample is in which group.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-modules_txt"><code class="parameter-flags">-M, --modules-txt</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited text file specifying module completeness in every genome/MAG/sample that you are interested in. The best way to get this file is to run `anvi-estimate-metabolism --output-modes modules` on your samples of interest. Trust us.</span></dd>
<dt class="parameter" id="parameter-groups_txt"><code class="parameter-flags">-G, --groups-txt</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A tab-delimited text file specifying which group each item belongs to. Depending on the context, items here may be individual samples or genomes. The first column must contain item names matching to those that are in your input data. A different column should have the header &#x27;group&#x27; and contain the group name for each item. Each item should be associated with a single group. It is always a good idea to define groups using single words without any fancy characters. For instance, `HIGH_TEMPERATURE` or `LOW_FITNESS` are good group names. `my group #1` or `IS-THIS-OK?`, are not good group names.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-options">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT OPTIONS</span> <span class="parameter-group-description">What comes out the other end. (Please provide at least the output file name.)</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional-options">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL OPTIONS</span> <span class="parameter-group-description">If you want it, here it is, come and get it.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-sample_header"><code class="parameter-flags">--sample-header</code> <code class="parameter-metavar">SAMPLE_HEADER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The header of the column containing your sample names in the modules-txt input file. By default this is &#x27;db_name&#x27; because we are assuming you got your modules mode output by running `anvi-estimate-metabolism` in multi mode (on multiple genomes or metagenomes), but just in case you got it a different way, this is how you can tell anvi&#x27;o which column to look at. The values in this column should correspond to those in the &#x27;sample&#x27; column in the groups-txt input file.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">db_name</code></span></dd>
<dt class="parameter" id="parameter-module_completion_threshold"><code class="parameter-flags">--module-completion-threshold</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">This threshold defines the percent completeness score at which we consider a KEGG module to be &#x27;present&#x27;in a given sample. That is, if a module&#x27;s completeness in a sample is less than this value, then we say the module is not present in that sample, and this will affect the module&#x27;s enrichment score. By extension, if a module&#x27;s completeness is less than this value in all samples, it will have a very very low enrichment score (ie, it will not be considered enriched at all, because it doesn&#x27;t occur in any groups). Note that the closer this number is to 0, the more meaningless this whole enrichment analysis is... but hey, this is your show. This threshold CAN be different from the completeness threshold used in `anvi-estimate-metabolism` if you wish. The default threshold is 0.75.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.75</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-use_stepwise_completeness"><code class="parameter-flags">--use-stepwise-completeness</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, this program will use pathwise completeness of a module to determine if it is present in a sample or not. To make it use stepwise completeness instead, provide this flag. Confused? Don&#x27;t worry. Check out the online documentation for a discussion on pathwise vs stepwise completeness.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_samples_missing_from_groups_txt"><code class="parameter-flags">--include-samples-missing-from-groups-txt</code></dt>
<dd class="parameter-details"><span class="parameter-help">Sometimes, you might have some sample names in your modules-txt file that you did not include in the groups-txt file. This is fine. By default, we will ignore those samples because they do not have a group. But if you use this flag, then instead those samples will be included in a group called &#x27;UNGROUPED&#x27;.</span></dd>
<dt class="parameter" id="parameter-qlambda"><code class="parameter-flags">--qlambda</code> <code class="parameter-metavar">NUM</code></dt>
<dd class="parameter-details"><span class="parameter-help">If you want to set the maximum lambda value for q-value estimation, provide a fraction between 0.05 and 1.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A description of the enrichment script run by this program can be found in Shaiber et al 2020](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02195-w)

* [An example of pangenome functional enrichment in the context of the Prochlorococcus metapangenome from Delmont and Eren 2018 is included in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/compute_metabolic_enrichment.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
