---
layout: program
title: anvi-gen-phylogenomic-tree
excerpt: An anvi'o program. Generate phylogenomic tree from aligment file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-phylogenomic-tree
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate phylogenomic tree from aligment file.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ozcan.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ozcan" target="_blank"><span class="anvio-person-name">Özcan C. Esen</span></a><div class="anvio-person-social-box"><a href="http://blog.ozcanesen.com/" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:ozcanesen@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ozcanesen" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ozcan" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[concatenated-gene-alignment-fasta](../../artifacts/concatenated-gene-alignment-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[phylogeny](../../artifacts/phylogeny) <img src="../../images/icons/NEWICK.png" class="artifact-icon-mini" /></span></p>




## Usage


This program generates a NEWICK-formatted phylogenomic tree (see <span class="artifact-n">[phylogeny](/help/main/artifacts/phylogeny)</span>) based on a given <span class="artifact-n">[concatenated-gene-alignment-fasta](/help/main/artifacts/concatenated-gene-alignment-fasta)</span>.

As mentioned in the [phylogenetics tutorial](http://merenlab.org/2017/06/07/phylogenomics/), it currently only has the option to use [FastTree](http://microbesonline.org/fasttree/) to do so, but be aware that there are many other programs that you can do this with. Some of the options we are familiar with (and are not yet represented in `anvi-gen-phylogenomic-tree`) include [MrBayes](http://mrbayes.sourceforge.net/), [MEGA](http://www.megasoftware.net/), and PHYLIP, [among many others](http://evolution.genetics.washington.edu/phylip/software.html#methods), most of which will happily take a <span class="artifact-n">[concatenated-gene-alignment-fasta](/help/main/artifacts/concatenated-gene-alignment-fasta)</span>.

Anyway, running this program is simple. Just provide the <span class="artifact-n">[concatenated-gene-alignment-fasta](/help/main/artifacts/concatenated-gene-alignment-fasta)</span> with all of the genes that you want to use and the output file path for your <span class="artifact-n">[phylogeny](/help/main/artifacts/phylogeny)</span>:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;phylogenomic&#45;tree &#45;f <span class="artifact&#45;n">[concatenated&#45;gene&#45;alignment&#45;fasta](/help/main/artifacts/concatenated&#45;gene&#45;alignment&#45;fasta)</span> \
                           &#45;o PATH/TO/<span class="artifact&#45;n">[phylogeny](/help/main/artifacts/phylogeny)</span>
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-phylogenomic-tree.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-phylogenomic-tree`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-phylogenomic-tree [-h] -f FASTA file -o FILE_PATH [--program PROGRAM_NAME] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-files">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT FILES</span> <span class="parameter-group-description">Concatenated aligment files exported using anvi-get-sequences-for-gene-clusters</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">A FASTA-formatted input file.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output-file">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT FILE</span> <span class="parameter-group-description">The output file where the generated newick tree will be stored.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-program">
<header class="parameter-group-header"><span class="parameter-group-title">PROGRAM</span> <span class="parameter-group-description">The program that will be used for generating tree. Available options: default, fasttree</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-program"><code class="parameter-flags">--program</code> <code class="parameter-metavar">PROGRAM_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Program name.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">default</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-others">
<header class="parameter-group-header"><span class="parameter-group-title">OTHERS</span> <span class="parameter-group-description">Parameters of convenience</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [View this program in action in the anvi&#x27;o phylogenetics workflow](http://merenlab.org/2017/06/07/phylogenomics/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_phylogenomic_tree.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
