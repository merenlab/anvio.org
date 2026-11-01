---
layout: program
title: anvi-delete-hmms
excerpt: An anvi'o program. Remove HMM hits from an anvi&#x27;o contigs database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-delete-hmms
image:
  featurerelative: ../../../images/header.png
  display: true
---

Remove HMM hits from an anvi&#x27;o contigs database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program, as implied by the name, is used to delete a <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. This way, you can repopulate the function annotations with a different source or program or just delete data that's clogging up the interface.

It is generally a good idea to export your information before deleting it, just in case. The HMM hits will show up in most displays, so if you've already run <span class="artifact-p">[anvi-summarize](/help/main/programs/anvi-summarize)</span>, you should be good.

To list available <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s in a database, call

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;list&#45;hmm&#45;sources
</div>

Then, you can easily delete <span class="artifact-n">[hmm-hits](/help/main/artifacts/hmm-hits)</span> from a specific source with the command

<div class="codeblock" markdown="1">
anvi&#45;delete&#45;hmms &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;hmm&#45;source <span class="artifact&#45;n">[hmm&#45;source](/help/main/artifacts/hmm&#45;source)</span>
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-delete-hmms.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-delete-hmms`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-delete-hmms [-h] -c CONTIGS_DB [--hmm-source HMM_ANNOTATION_SOURCE] [-l] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-hmm_source"><code class="parameter-flags">--hmm-source</code> <code class="parameter-metavar">HMM_ANNOTATION_SOURCE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use a specific HMM source. You can use &#x27;--list-hmm-sources&#x27; flag to see a list of available resources. The default is &#x27;None&#x27;.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_hmm_sources"><code class="parameter-flags">-l, --list-hmm-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available HMM sources in the contigs database and quit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/delete_hmms.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
