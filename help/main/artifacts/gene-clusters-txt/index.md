---
layout: artifact
title: gene-clusters-txt
excerpt: A TXT-type anvi'o artifact. This artifact can be generated, used, and/or exported by anvi'o. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/gene-clusters-txt
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/TXT.png" alt="TXT" style="width:100px; border:none" />

A TXT-type anvi'o artifact. This artifact can be generated, used, and/or exported **by anvi'o**. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-export-gene-clusters](../../programs/anvi-export-gene-clusters)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-pan-genome](../../programs/anvi-pan-genome)</span></p>


## Description

A three-column TAB-delimited file with a specific header line to link genes across genomes to one another through 'gene clusters'.

The primary purpose of this file is to provide a means for the user to let the anvi'o know about their gene clusters, rather than computing gene clusters through the conventional pangenomics approach implemented in anvi'o and accessible via <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span>.

For instance, through this file the user can ask <span class="artifact-p">[anvi-pan-genome](/help/main/programs/anvi-pan-genome)</span> to make use of the gene clusters they have identified in their genomes using another program, and still use downstream anvi'o programs, such as <span class="artifact-p">[anvi-display-pan](/help/main/programs/anvi-display-pan)</span> or <span class="artifact-p">[anvi-compute-functional-enrichment-in-pan](/help/main/programs/anvi-compute-functional-enrichment-in-pan)</span> to work with the resulting <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span>.

## File format

A proper <span class="artifact-n">[gene-clusters-txt](/help/main/artifacts/gene-clusters-txt)</span> file must contain the following headers,

|**genome_name**|**gene_caller_id**|**gene_cluster_name**|
|:--|:--|:--|
|(...)|(...)|(...)|
|NATL1A|1653|Cluster_00001777|
|NATL1A|1487|Cluster_00001779|
|NATL1A|1294|Cluster_00001782|
|MIT9401|1571|Cluster_00001786|
|MIT9322|1069|Cluster_00001786|
|NATL1A|47|Cluster_00001794|
|NATL1A|714|Cluster_00001837|
|NATL1A|1089|Cluster_00001845|
|NATL1A|1275|Cluster_00001849|
|NATL1A|644|Cluster_00001850|
|NATL1A|1413|Cluster_00001857|
|NATL1A|1195|Cluster_00001868|
|MIT9401|1558|Cluster_00001872|
|NATL1A|1111|Cluster_00001886|
|NATL1A|1074|Cluster_00001892|
|NATL1A|1191|Cluster_00001894|
|NATL1A|1803|Cluster_00001898|
|NATL1A|1964|Cluster_00001902|
|NATL1A|1332|Cluster_00001910|
|NATL1A|908|Cluster_00001912|
|NATL1A|1088|Cluster_00001914|
|NATL1A|1497|Cluster_00001916|
|NATL1A|812|Cluster_00001923|
|NATL1A|1107|Cluster_00001924|
|NATL1A|1165|Cluster_00001928|
|NATL1A|1220|Cluster_00001931|
|NATL1A|1138|Cluster_00001942|
|NATL1A|706|Cluster_00001952|
|NATL1A|1660|Cluster_00001957|
|(...)|(...)|(...)|

where,

* **genome_name** represents a genome name that matches to a genome that is in the <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>,
* **gene_caller_id** represents a gene call in that genome,
* **gene_cluster_name** represents the gene cluster to which the gene is assigned.

Please note that It is possible to obtain this file for an already computed anvi'o <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> using the program <span class="artifact-p">[anvi-export-gene-clusters](/help/main/programs/anvi-export-gene-clusters)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/gene-clusters-txt.md) to update this information.

