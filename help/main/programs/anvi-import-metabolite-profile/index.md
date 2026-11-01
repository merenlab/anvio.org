---
layout: program
title: anvi-import-metabolite-profile
excerpt: An anvi'o program. This program imports metabolite abundance data and stores it in a profile database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-import-metabolite-profile
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program imports metabolite abundance data and stores it in a profile database..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


This program does not seem to provide any artifacts. Such programs usually print out some information for you to see or alter some anvi'o artifacts without producing any immediate outputs.




## Usage


This program imports a metabolite abundance profile, such as from metabolomic experiments, into a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>.

This program takes as input a tab-delimited file of metabolite abundance data and a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>. The tabular file must have three columns with the following names: "accession", "sample", and "abundance". Each row of the table corresponds to a distinct metabolite abundance measurement.

- "accession" is the ModelSEED Compound ID, e.g., "cpd00027" for D-glucose.
- "sample" is the name of the sample in which the measurement was made. It need not be the same as any nucleotide sequence samples stored in the profile database.
- "abundance" is the metabolite abundance value, however defined.

Once metabolite abundances are stored in a profile database, they can be loaded into a metabolic <span class="artifact-n">[reaction-network](/help/main/artifacts/reaction-network)</span> for analysis in the context of biochemical pathways. Metabolites in the network are defined in terms of ModelSEED Compounds.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-import-metabolite-profile.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-import-metabolite-profile`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-import-metabolite-profile [-h] --metabolite-profile-table METABOLITE_PROFILE_TABLE -p PROFILE_DB</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-metabolite_profile_table"><code class="parameter-flags">--metabolite-profile-table</code> <code class="parameter-metavar">METABOLITE_PROFILE_TABLE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">This tab-delimited table contains metabolite abundance data from different samples. It should have the following named columns: &#x27;source&#x27;, &#x27;accession&#x27;, &#x27;sample&#x27;, and &#x27;abundance&#x27;. Each row corresponds to a distinct metabolite abundance measurement. &#x27;source&#x27; is the source of the identifying accessions. Currently, the only permitted source is &#x27;ModelSEED&#x27;. &#x27;accession&#x27; is the ModelSEED Compound ID, e.g., &#x27;cpd00001&#x27;, providing a unique identifier that facilitates integration into anvi&#x27;o metabolic network data. &#x27;sample&#x27; is the name of the sample in which the measurement was made. It need not be the same as any nucleotide sequence samples stored in the profile database. &#x27;abundance&#x27; is the metabolite abundance value itself.</span></dd>
<dt class="parameter parameter-required" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/import_metabolite_profile.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
