---
layout: program
title: anvi-import-state
excerpt: An anvi'o program. Import an anvi&#x27;o state into a profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-state
image:
  featurerelative: ../../../images/header.png
  display: true
---

Import an anvi&#x27;o state into a profile database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[state-json](../../artifacts/state-json) <img src="../../images/icons/JSON.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[state](../../artifacts/state) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program allows you to import a <span class="artifact-n">[state](/help/main/artifacts/state)</span> from a <span class="artifact-n">[state-json](/help/main/artifacts/state-json)</span>.

You can run this program on a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> or <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> like so:

<div class="codeblock" markdown="1">
anvi&#45;import&#45;state &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                  &#45;s <span class="artifact&#45;n">[state&#45;json](/help/main/artifacts/state&#45;json)</span> \
                  &#45;n MY_STATE
</div>

This will import the state described in your <span class="artifact-n">[state-json](/help/main/artifacts/state-json)</span> into your <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> with the name `MY_STATE`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-state.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-state`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-state [-h] -p PAN_OR_PROFILE_DB -s STATE_FILE -n STATE_NAME</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-pan_or_profile_db"><code class="parameter-flags">-p, --pan-or-profile-db</code> <code class="parameter-metavar">PAN_OR_PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">An anvi&#x27;o pan-db or profile-db (and even genes-db or pan-graph-db in appropriate contexts).</span></dd>
<dt class="parameter parameter-required" id="parameter-state"><code class="parameter-flags">-s, --state</code> <code class="parameter-metavar">STATE_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">JSON serializable anvi&#x27;o state file.</span></dd>
<dt class="parameter parameter-required" id="parameter-name"><code class="parameter-flags">-n, --name</code> <code class="parameter-metavar">STATE_NAME</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">State name.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_state.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
