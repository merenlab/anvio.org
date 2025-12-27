---
layout: program
title: anvi-gen-variability-network
excerpt: An anvi'o program. Generate a network description from an anvi&#x27;o variability profile.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-variability-network
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate a network description from an anvi&#x27;o variability profile..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[variability-profile-txt](../../artifacts/variability-profile-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[variability-profile-xml](../../artifacts/variability-profile-xml) <img src="../../images/icons/XML.png" class="artifact-icon-mini" /></span></p>


## Usage


This program takes in a <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> file reported by the program <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span>, and generates a simple representation of this complex data so it can be visualized as a network.

## Default mode of operation

By default, the program will report an XML file properly formatted to be an input for the open-source network visualization program Gephi:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;network &#45;i <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span> \
                             &#45;o variability_profile.gexf
</div>

## Reporting a text file instad

Alternatively, the user may ask the results to be reported as a TAB-delimited text file:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;network &#45;i <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span> \
                             &#45;o variability_output.txt \
                             &#45;&#45;as&#45;matrix
</div>

Reporting the data as a matrix enables quick visualization opportunities using the programs <span class="artifact-p">[anvi-matrix-to-newick](/help/main/programs/anvi-matrix-to-newick)</span> and <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span>:

```
anvi-matrix-to-newick variability_output.txt -o variability_output.newick

anvi-interactive -d variability_output.txt \
                 -t variability_output.newick \
                 -p varaibility_profile.db \
                 --manual
```

## Using competing nucleotides as features

By default, this program will take every unique nucleotide position which was variable in at least sample and every sample, and then connect samples and positions with edges if a given sample has a variable nucleotide at a given position. This means even if a given variable nucleotide position X differs from the reference nucleotide in different ways in different samples N and M, this approach will be agnostic to that and will simply report that both N and M had a variable nucleotide at the position X.

|sample|X|
|N|True|
|M|True|

Alternatively, the user can ask the variation to be reported based on competing nucletoides in a given sample. In that case, if the position X in sample N varies between nucleotides `A` and `G` and in sample M between nucleotides `A` and `T`, the user may get a higher resolution for their inference by asking anvi'o to include 'competing nucleotides' in the report:

|sample|X_AG|X_AT|
|N|True|False|
|M|False|True|

This is done through the parameter `--include-competing-NTs`, which requires an option. Currently available options are the following:

* 'default': Returns the default competing nucleotides column from the variability as calculated by anvi'o during profiling.
* 'noise-robust': When depearture from consenus for a given nt position is close to zero, which means the nt position is almost fixed in the environment the default way to calculate competing nucleotides can yield noisy results simply due to the fact that the second most frequenty nucleotide can be driven by artifacts (such as sequencing error) than biology. For instance, if a given position that is represented by a nucleotide `G` in the reference has SNV frequencies of {'A': 1000, 'T': 1, 'C': 0, 'G': 0} in one sample and {'A': 1000, 'T': 0, 'C': 1, 'G': 0} in the other, the competing nucletoides for this position in the variability table will be `AT` and `AC`, respectively. However, some applications, in which competitive nucleotides are used as categorigal variables to associate samples, may require a more robust apprach. The `noise-robust` alternative would yield `AG` and `AG` for this position in both samples.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;network &#45;i <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span> \
                             &#45;o variability_profile.gexf \
                             &#45;&#45;include&#45;competing&#45;NTs noise&#45;robust
</div>

## Changing the default report variable

By default, <span class="artifact-p">[anvi-gen-variability-network](/help/main/programs/anvi-gen-variability-network)</span> will report the estimate `departure_from_reference` as the quantity that defines the weight of the edges that connect variable nucleotide positions and samples. The edge weight can later be used during network visualization as a factor that influence netowrk convergence. It is possible to change the variable using the parameter `--edge-variable`.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;network &#45;i <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span> \
                             &#45;o variability_profile.gexf \
                             &#45;&#45;include&#45;competing&#45;NTs noise&#45;robust \
                             &#45;&#45;edge&#45;variable departure_from_consensus
</div>

The parameter will accept any variable reported in the variability profile output. One can always try a parameter that certainly does not exist to get a list of parameters that could be used here to get a list of those that are appropriate to use:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;variability&#45;network &#45;i <span class="artifact&#45;n">[variability&#45;profile&#45;txt](/help/main/artifacts/variability&#45;profile&#45;txt)</span> \
                             &#45;o variability_profile.gexf \
                             &#45;&#45;include&#45;competing&#45;NTs noise&#45;robust \
                             &#45;&#45;edge&#45;variable THIS_DOESNT_EXIST

Config Error: The edge weight variable `THIS_DOESNT_EXIST` does not seem to be among those
              that are represented within the variability data :/ Here is a list of the
              variables you could choose from (although not each one of them will be equally
              useful to serve as edge weights in the resulting network, but anvi'o leaves the
              responsibility to choose something relevant completely to you and will not
              scrutinize your decision): 'pos', 'pos_in_contig', 'corresponding_gene_call',
              'in_noncoding_gene_call', 'in_coding_gene_call', 'base_pos_in_codon',
              'codon_order_in_gene', 'coverage', 'cov_outlier_in_split',
              'cov_outlier_in_contig', 'departure_from_reference', 'A', 'C', 'G', 'T', 'N',
              'codon_number', 'gene_length', 'unique_pos_identifier',
              'departure_from_consensus', 'n2n1ratio', 'entropy', 'gene_coverage',
              'non_outlier_gene_coverage', 'non_outlier_gene_coverage_std',
              'mean_normalized_coverage'.
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-variability-network.md) to update this information.


## Additional Resources


* [An applicatio of this program in the  Infant Gut Tutorial](https://merenlab.org/tutorials/infant-gut/#visualizing-snv-profiles-as-a-network)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_variability_network.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
