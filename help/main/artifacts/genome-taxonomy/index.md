---
layout: artifact
title: genome-taxonomy
excerpt: A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/genome-taxonomy
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/CONCEPT.png" alt="CONCEPT" style="width:100px; border:none" />

A CONCEPT-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-estimate-scg-taxonomy](../../programs/anvi-estimate-scg-taxonomy)</span> <span class="artifact-p">[anvi-estimate-trna-taxonomy](../../programs/anvi-estimate-trna-taxonomy)</span></p>




## Required by


There are no anvi'o tools that require this artifact directly, which means it is most likely an end-product for the user.




## Description

This artifact is the output tables that are displayed when you run <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> or <span class="artifact-p">[anvi-estimate-trna-taxonomy](/help/main/programs/anvi-estimate-trna-taxonomy)</span>.

By default, they won't be outputted anywhere, just displayed in the terminal for your viewing pleasure. If you want them in a tab-delimited file (as a <span class="artifact-n">[genome-taxonomy-txt](/help/main/artifacts/genome-taxonomy-txt)</span>), just provide the `-o` or the `-O` prefix and anvi'o will do that for you.

The content of these tables will depend on how you ran <span class="artifact-p">[anvi-estimate-trna-taxonomy](/help/main/programs/anvi-estimate-trna-taxonomy)</span> or <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span>. [This blog post](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/#estimating-taxonomy-in-the-terminal) gives you examples of what this looks like for each of the input scenarios for anvi-estimate-scg-taxonomy. Anvi-estimate-scg-taxonomy's output is very similar, just with the results coming from different gene types. They will also be briefly described below.

When you run <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> or <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> on

- a single genome, this table will contain a single line telling you the taxonomy estimate for your genome. It will also show the number of single-copy core genes or tRNA genes that support this estimate. If you run the `--debug` flag, it will also display the hits for all of the single-copy core genes.
- a single metagenome, this table will list all of the hits for the chosen single-copy core gene or anticodon (by default, the one with the most hits) and their taxonomy information.
- a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span> with the flag `--compute-scg-coverages`, additional columns will be added that describe the coverage values for your single-copy core gene or tRNA gene hits across your samples.
- a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, this table will show you each of your bins, and the best taxonomy estimate for each one, similarly to how it's displayed for a run on a single genome.
- a <span class="artifact-n">[metagenomes](/help/main/artifacts/metagenomes)</span> artifact, this table will give a gene entry ID, its taxonomy, and its corresponding coverage in your metagenomes. This format is essentially identical to the output for a single metagenome. If you provide the flag `--matrix-format`, then it will list taxonomy information in each row, and tell you the coverage of each in each of your metagenomes.

This may sound confusing, but it is easier to understand when looking at the functionality of <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> and the comprehensive examples given on [this page](http://merenlab.org/2019/10/08/anvio-scg-taxonomy/#estimating-taxonomy-in-the-terminal).

## Tables are not the only way to look at this

Every one of the scenarios above describes a table, where each row spells out the entire lineage of a single thing. That is a fine way to store these results, but not always the best way to make sense of them: when 30 of your hits belong to the same genus, that fact is spread across 30 nearly identical rows, and the composition of what you are looking at is nowhere to be seen.

For those cases, both <span class="artifact-p">[anvi-estimate-scg-taxonomy](/help/main/programs/anvi-estimate-scg-taxonomy)</span> and <span class="artifact-p">[anvi-estimate-trna-taxonomy](/help/main/programs/anvi-estimate-trna-taxonomy)</span> accept the flag `--tree-output`, which displays the very same results as a hierarchical tree instead like a pro (but without any real phylogenetic order or meaning, obviously):

```
All Ribosomal_S11 copies (96)
├── Bacteria (94)
│   ├── Campylobacterota (36)
│   │   └── Campylobacteria (36)
│   │       └── Campylobacterales (36)
│   ├── Desulfobacterota (16)
(...)
└── Archaea (2)
    └── Halobacteriota (2)
```

The number next to each taxon is the number of things assigned to it *or to anything under it*, so the numbers of a node's children always add up to the number of the node itself. What is being counted is named at the root of the tree: copies of the single-copy core gene or anticodon that was surveyed in metagenome mode, bins if you provided a <span class="artifact-n">[collection](/help/main/artifacts/collection)</span>, and genomes otherwise. Anything that could not be resolved all the way down gets an explicit `Unknown_*` node rather than disappearing. If coverages were computed, each node will also report the total coverage of everything under it, summed across your samples.

You can cap how deep the tree goes with `--tree-output-level` (which defaults to `t_genus`, and has nothing to do with `--taxonomic-level`). This flag only changes what is displayed in your terminal -- if you also ask for an output file, that file will still be a <span class="artifact-n">[genome-taxonomy-txt](/help/main/artifacts/genome-taxonomy-txt)</span>.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/genome-taxonomy.md) to update this information.

