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



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[kegg-metabolism](../../artifacts/kegg-metabolism) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[user-metabolism](../../artifacts/user-metabolism) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[groups-txt](../../artifacts/groups-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[functional-enrichment-txt](../../artifacts/functional-enrichment-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program computes metabolic module enrichment across groups of genomes or metagenomes and generates a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file (throughout this text, we will use the term genome to describe both for simplicity).

{:.warning}
For its sister programs, see <span class="artifact-p">[anvi-compute-functional-enrichment-in-pan](/help/main/programs/anvi-compute-functional-enrichment-in-pan)</span> and <span class="artifact-p">[anvi-compute-functional-enrichment-across-genomes](/help/main/programs/anvi-compute-functional-enrichment-across-genomes)</span>.

## Module enrichment

To execute this program, you must have previously estimated the completeness of metabolic modules in your genomes using the program <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> and obtained a "modules" mode output file (which is the default output mode of that program). In addition, you must provide a <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file that declares which genome belongs to which group for the enrichment analysis.

### How does it work?

1. **Determine the presence of modules**. Each module in the "modules" mode output has an associated completeness score for each genome, and any module with a completeness score exceeding the specified threshold (set by `--module-completion-threshold`) will be considered *present* in that genome.

2. **Quantify the distribution of modules in each group of genomes**. The distribution of a given module across genomes in each group determines its enrichment score. This is accomplished by fitting a generalized linear model (GLM) with a logit linkage function in `anvi-script-enrichment-stats`, which produces a <span class="artifact-n">[functional-enrichment-txt](/help/main/artifacts/functional-enrichment-txt)</span> file.

{:.notice}
The script `anvi-script-enrichment-stats` was implemented by [Amy Willis](https://github.com/adw96), and was first described in [this paper](https://doi.org/10.1186/s13059-020-02195-w).

### Basic usage

See <span class="artifact-n">[kegg-metabolism](/help/main/artifacts/kegg-metabolism)</span> or <span class="artifact-n">[user-metabolism](/help/main/artifacts/user-metabolism)</span> for more information on how to generate a "modules" mode output format from <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>. Please note that the genome names in the modules file must match those specified in the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> file.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span>
</div>

### Additional parameters

The default completeness threshold for a module to be considered 'present' in a genome is 0.75 (75%). If you wish to modify this threshold, you can specify a different value between (0, 1] using the `--module-completion-threshold` parameter:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;module&#45;completion&#45;threshold 0.9
</div>

By default, this program uses the [pathwise completeness score](https://anvio.org/help/main/programs/anvi-estimate-metabolism/#two-estimation-strategies---pathwise-and-stepwise) to determine which modules are 'present' in a genome, but you can specify stepwise completeness instead by using the `--use-stepwise-completeness` flag.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;use&#45;stepwise&#45;completeness
</div>

By default, the column containing genome names in your MODULES.TXT file will have the header `db_name`, **but there are certain cases where you might have genome names in a different column** (such as cases where you did not run <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> in multi-mode). In those cases, you can specify a different column name using the `--sample-header` parameter. For example, if your metagenome names are listed under the `metagenome_name` column, you would execute the following:

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;sample&#45;header metagenome_name
</div>

If you ran <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> on additional genomes but only want to include a subset of them in the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span>, this is acceptable. By default, any samples from the `MODULES.TXT` file that are missing from the <span class="artifact-n">[groups-txt](/help/main/artifacts/groups-txt)</span> will be **ignored**. However, you can also include those missing samples in the analysis as one large group called 'UNGROUPED'. To enable this behavior, use the `--include-samples-missing-from-groups-txt` parameter.

<div class="codeblock" markdown="1">
anvi&#45;compute&#45;metabolic&#45;enrichment &#45;M MODULES.TXT \
                                  &#45;G <span class="artifact&#45;n">[groups&#45;txt](/help/main/artifacts/groups&#45;txt)</span> \
                                  &#45;o <span class="artifact&#45;n">[functional&#45;enrichment&#45;txt](/help/main/artifacts/functional&#45;enrichment&#45;txt)</span> \
                                  &#45;&#45;include&#45;samples&#45;missing&#45;from&#45;groups&#45;txt
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-compute-metabolic-enrichment.md) to update this information.


## Additional Resources


* [A description of the enrichment script run by this program can be found in Shaiber et al 2020](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02195-w)

* [An example of pangenome functional enrichment in the context of the Prochlorococcus metapangenome from Delmont and Eren 2018 is included in the pangenomics tutorial](http://merenlab.org/2016/11/08/pangenomics-v2/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-compute-metabolic-enrichment) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
