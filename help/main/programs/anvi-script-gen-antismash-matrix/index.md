---
layout: program
title: anvi-script-gen-antismash-matrix
excerpt: An anvi'o program. With this script you can generate a matrix across many contig-dbs or bins in a collection to compare their biosynthetic capacity.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-antismash-matrix
image:
  featurerelative: ../../../images/header.png
  display: true
---

With this script you can generate a matrix across many contig-dbs or bins in a collection to compare their biosynthetic capacity. You can choose between a per-gene matrix that resolves the smCOG annotations and domains within each gene and their role within the BGC and a cluster resolved matrix that summarizes the individual genes into BGC and their product. To generate these matrices your contig-dbs already need to be annotated with antiSMASH. Use the --genes flag to get the &#x27;per-gene&#x27; output or the --regions flag to get the &#x27;BGC-resolved&#x27; output..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/bio-jessika.jpg" /></div><div class="anvio-person-info-box"><a href="/people/jessika-fuessel" target="_blank"><span class="anvio-person-name">Jessika Fuessel</span></a><div class="anvio-person-social-box"><a href="mailto:ju.fuessel@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/FuesselJessika" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/jessika-fuessel" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions-across-genomes-txt](../../artifacts/functions-across-genomes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program builds matrices that compare antiSMASH results across many genomes or metagenomes, reading the antiSMASH annotations straight from contigs databases that have already been processed with <span class="artifact-p">[anvi-run-antismash](/help/main/programs/anvi-run-antismash)</span>.

It works like `anvi-estimate-metabolism --matrix-format`: point it at your genomes through an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file (`-e`), an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> file (`-i`), or both, and it reads the antiSMASH function sources (`antiSMASH`, `antiSMASH_ROLE`, `antiSMASH_DOMAIN`, `antiSMASH_REGION`) from each database and pivots them into matrices. An external genome is a whole <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>; an internal genome is a bin, so only that bin's genes are counted, and two bins from the same assembly get their own separate profiles. Because a matrix is a comparison across genomes, there is no single contigs database (`-c`) mode. There is nothing to run per-genome first beyond the annotation itself, which you can do for a whole set in one command with `anvi-run-antismash -e <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>`.

You choose one of two matrix types:

### Per-cluster matrix (`--regions`)

Rows are BGC **product types** (terpene, NRPS, hserlactone, …), columns are your genomes, and each cell is the **number of regions (clusters)** of that type in that genome, a compact profile of biosynthetic potential across your dataset.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;antismash&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                 &#45;&#45;regions \
                                 &#45;O BGC_TYPES
</div>

### Per-gene matrix (`--genes`)

Rows are distinct gene **signatures**, described by five columns (`product`, `role`, `function`, `smcog`, and `domains`) that stay constant down each row; columns are your genomes, and each cell is how many genes match that signature. The leading `product` column names the BGC type the gene belongs to, so it lines up directly with the rows of the `--regions` matrix (a gene signature that occurs in more than one cluster type honestly appears as more than one row). Genes that sit inside a cluster but carry no functional annotation of their own are not shown here; they are in the per-gene file described below.

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;antismash&#45;matrix &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                                 &#45;&#45;genes \
                                 &#45;O BGC_GENES
</div>

### Output

Either mode writes two files of type <span class="artifact-n">[functions-across-genomes-txt](/help/main/artifacts/functions-across-genomes-txt)</span>: a `-FREQUENCY.txt` matrix (counts) and a `-PRESENCE-ABSENCE.txt` matrix (0/1). In both, the descriptor columns come first, followed by one column per genome.

If any of the databases you provide were never annotated with <span class="artifact-p">[anvi-run-antismash](/help/main/programs/anvi-run-antismash)</span>, the program still runs, but fills that genome's column with `NA` (rather than `0`) and warns you about it. The distinction matters: `NA` means "not annotated, unknown", whereas `0` would wrongly imply "annotated, but no cluster of that kind". Annotate all your databases first for a clean, all-numeric comparison.

### Relating the matrices back to individual genes (`--genes`)

A matrix is a cross-genome summary: each cell is a *count*, so it cannot carry the identifiers that only make sense inside one database: the gene caller id and the region id. To bridge that gap, `--genes` additionally writes a comprehensive per-gene file, `<prefix>-GENE-DETAILS.txt`, with one row per antiSMASH-annotated gene across all your genomes and these columns:

`genome`, `gene_callers_id`, `contig`, `region_id`, `product`, `role`, `function`, `smcog`, `domains`

This one file is the join key for everything downstream:

* `genome` + `gene_callers_id` points back to that genome's <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, so you can relate an antiSMASH gene to its other annotations (KOfam, COGs, …), since every source shares the same gene caller id (see <span class="artifact-p">[anvi-export-functions](/help/main/programs/anvi-export-functions)</span>).
* `region_id` groups genes into their clusters, so you can list all the genes that make up a given BGC region (including accessory genes with no function of their own, which the matrix omits).
* `product` and the signature columns line up with the `--genes` and `--regions` matrices, so you can go from any matrix cell down to the individual genes behind it.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-antismash-matrix.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_antismash_matrix.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
