---
layout: blog
authors: [ahenoch]
title: "Leveling up pangenomics with interactive pangenome graphs"
excerpt: "A reproducible pangenome graph analysis of four candidatus lucifugimonas marina genomes."
date: 2024-09-10
tags: [metagenomics, pangenomics, hands-on, beginner]
comments: true
---

With the tutorial on anvio pangenome graphs you can,

* **Identify and analyse** regions of hypervariability in your genomes
* **Estimate similarity** between the genomes based on graph structures instead of e.g. genome similarity
* **Interactively visualize** your pangenome graph and the impact of single genomes on the consensus graph
* **Highlight** the distribution of paralogous gene clusters through their synteny-based subclusters
* **Summarize** distribution and frequency of common graph motifs into a nice table for downstream analysis
* **Create** paper-ready pictures of gene synteny structures not visualizable with other tools

{:.notice}
You can use the anvi'o tutorial for pangenome graphs even if you haven't done any metagenomic work with anvi'o. All you need is an anvi'o installation, and a FASTA file for each of your genomes.

## Introduction

The tutorial on anvi'o pangenome graphs described here will walk you through the following steps:

* Download and order a four genome dataset containing complete and draft genomes using {% include PROGRAM name="anvi-reorient-contigs" %}

* Using the anvi'o pangenomics workflow to generate an anvi'o {% include ARTIFACT name="genomes-storage-db" %} and  {% include ARTIFACT name="pan-db" %} using the program {% include PROGRAM name="anvi-run-workflow" %}

* Explain how to define a subset of the sequences to use with the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} enabled by {% include PROGRAM name="anvi-display-pan" %}.

* Calculate a {% include ARTIFACT name="pan-graph" text="anvi'o pangenome graph" %} based on these sequences using {% include PROGRAM name="anvi-pan-graph" %}

* Step-by-step explanation of graph motifs in the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} using {% include PROGRAM name="anvi-display-pan-graph" %}

## Prerequisites for the tutorial

### Anvi'o dependencies

If your system is properly setup, this {% include PROGRAM name="anvi-self-test" %} command should run without any errors:

``` bash
conda activate anvio-dev
anvi-self-test --suite pangenomics
```

Anvi'o might complain in case you haven't set up the databases yet and we strongly advise you to do so before running this tutorial. 

```bash
anvi-setup-scg-taxonomy
anvi-setup-ncbi-cogs
anvi-setup-kegg-data
```

### Changing the branch

Anvi'o pangenome graph is currently only available in a seperate branch of the development version of anvi'o. 

```bash
cd ~/github/anvio
git checkout pangraph-0.3.0
git pull
```

To swith back to the master branch you just have to run the same command but replace *pangraph-0.3.0* with *master*.

### Where to find the data

For this workflow we will use four genomes of *Ampluspelagibacter kiloensis* published by [Freel et al. in 2025](https://www.biorxiv.org/content/10.1101/2024.12.24.630191v2.abstract). All genomes are complete genomes. Pangenome graph analysis can also be performed with draft genomes, as long as one complete genome is available but a dataset of complete genomes gives the best results. First we download all six genomes from the figshare server and place them in a newly created folder

``` bash
cd /path/to/
mkdir original_files
curl -L https://figshare.com/ndownloader/files/51363962 -o original_files/HIMB1702.fa
curl -L https://figshare.com/ndownloader/files/51363959 -o original_files/HIMB1636.fa
curl -L https://figshare.com/ndownloader/files/51364013 -o original_files/HIMB1641.fa
curl -L https://figshare.com/ndownloader/files/51364034 -o original_files/HIMB1556.fa
curl -L https://figshare.com/ndownloader/files/51364037 -o original_files/HIMB1552.fa
curl -L https://figshare.com/ndownloader/files/51364043 -o original_files/HIMB1526.fa
```

The current folder structure should look like this.

```
/path/to/
    └── original_files/
        ├── HIMB1526.fa
        ├── HIMB1552.fa
        ├── HIMB1556.fa
        ├── HIMB1636.fa
        ├── HIMB1641.fa
        └── HIMB1702.fa
```

### Order and reorient the draft genomes

In the next step we have to order and reorient the contigs of the genomes. Even if we have only complete genomes it is a good idea to run this step, as it defines one direction for all the genomes in the dataset. We use the program {% include PROGRAM name="anvi-reorient-contigs" %} for this task, based on the longest complete genome present in our folder.

This step is necessary for the pangenome graph creation to make sure the gene synteny matches between the genomes.

``` bash
mkdir reoriented_files
anvi-reorient-contigs --input-dir original_files/ --output-dir reoriented_files/ --prioritize-genome-size
```

The fasta files containing draft genomes are now ready to be used on the pangenomics workflow. For every genome excluding the leading genome we see some blast result files in the folder, that were used for reorienting based on the most complete genome.

```
/path/to/
    ├── original_files/
        ├── HIMB1526.fa
        ├── HIMB1526-blast.xml
        ├── HIMB1552.fa
        ├── HIMB1552-blast.xml
        ├── HIMB1556.fa
        ├── HIMB1556-blast.xml
        ├── HIMB1636.fa
        ├── HIMB1636-blast.xml
        ├── HIMB1641.fa
        ├── HIMB1641-blast.xml
        └── HIMB1702.fa
    └── reoriented_files/
        ├── HIMB1526.fa
        ├── HIMB1552.fa
        ├── HIMB1556.fa
        ├── HIMB1636.fa
        ├── HIMB1641.fa
        └── HIMB1702.fa
```

## Anvi'o pangenomics workflow

From the workflow we will receive multiple databases that we need for further downstream analysis. A single {% include ARTIFACT name="contigs-db" %} for every genome used, containing information like gene calls, annotations, etc. The {% include ARTIFACT name="genomes-storage-db" %} is a special anvi'o database that stores information about genomes, and can be generated from {% include ARTIFACT name="external-genomes" %}, {% include ARTIFACT name="internal-genomes" %}, or both. And lastly the {% include ARTIFACT name="pan-db" %} created from the {% include ARTIFACT name="genomes-storage-db" %} includes all features calculated during the pangenomics analysis. For a more detailed description of these special anvi'o databases please read about it in the [anvi'o pangenomics workflow](https://merenlab.org/2016/11/08/pangenomics-v2/).

A {% include ARTIFACT name="fasta-file" %} is required to run the pangenomics workflow. This file has to be tab-seperated with two columns, the first containing the name of the fasta and the second containig the path to the file. We use the power of bash to speed things up a little. For more information about anvi'o workflows in general we really recommend reading [Scaling up your analysis with workflows](https://anvio.org/tutorials/scaling-up/).

``` bash
echo -e 'name\tpath' > fasta.txt
for filename in ./reoriented_files/*.fa; do
    echo -e $(basename $filename | cut -d. -f1)'\t'$(realpath $filename) >> fasta.txt
done
```

The resulting fasta.txt file should look like this.

``` txt
name	path
HIMB1526	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1526.fa
HIMB1552	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1552.fa
HIMB1556	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1556.fa
HIMB1636	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1636.fa
HIMB1641	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1641.fa
HIMB1702	/home/ahenoch/Desktop/DATA/SAR11_Tutorial/reoriented_files/HIMB1702.fa
```

Now the first prerequisite to start the anvi'o pangenomics workflow is set-up. The next step is to generate and modify the {% include ARTIFACT name="workflow-config" %}. We can create a standard one with this command.

```bash
anvi-run-workflow -w pangenomics --get-default-config config.yaml
```

For the sake of simplicity we will keep most values as they are. The only changes we make are on the bottom of the {% include ARTIFACT name="workflow-config" %} by changing the name of the project and add an output path for the {% include ARTIFACT name="external-genomes" %}, because we need this file later.

config.yaml:
``` yaml
{...}
    "project_name": "Ampluspelagibacter_kiloensis",
    "internal_genomes": "",
    "external_genomes": "external-genomes.txt",
    "sequence_source_for_phylogeny": "",
    "output_dirs": {
        "FASTA_DIR": "01_FASTA",
        "CONTIGS_DIR": "02_CONTIGS",
        "PHYLO_DIR": "01_PHYLOGENOMICS",
        "PAN_DIR": "03_PAN",
        "LOGS_DIR": "00_LOGS"
    },
    "max_threads": "",
    "config_version": "3",
    "workflow_name": "pangenomics"
}
```

Now we can start the anvi'o pangenomics workflow. This will probably take a while and you can reward yourself with a coffee while you wait &#x2615;

``` bash
anvi-run-workflow -w pangenomics -c config.yaml
```

The final command of this section will be to calculate the ANI of our dataset with the program {% include PROGRAM name="anvi-compute-genome-similarity" %}, which uses various tools such as PyANI to compute average nucleotide identity, followed by sourmash to compute mash distance across our genomes. We use it now to add these results as an additional data layer to our pangenome. More information on ANI and the usage in comparative genomics can be found in the tutorial on pangenomics in the section [Computing the average nucleotide identity for genomes](https://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too). Since our genomes are quite similar it should not take longer than a minute.

```bash
anvi-compute-genome-similarity --external-genomes external-genomes.txt \
                               --program pyANI \
                               --output-dir 04_ANI \
                               --num-threads 6 \
                               --pan-db 03_PAN/Ampluspelagibacter_kiloensis-PAN.db
```

Good job, 5 points for *insert your hogwarts house here*! 

Your folder structure should look similar to this.

```
/path/to/
    ├── 00_LOGS/
        └── ...
    ├── 01_FASTA/
        └── ...
    ├── 02_CONTIGS/
        ├── HIMB1526-contig.db
        ├── HIMB1552-contig.db
        ├── HIMB1556-contig.db
        ├── HIMB1636-contig.db
        ├── HIMB1641-contig.db
        ├── HIMB1702-contig.db
        └── ...
    ├── 03_PAN/
        ├── Ampluspelagibacter_kiloensis-GENOMES.db
        ├── Ampluspelagibacter_kiloensis-PAN.db
        └── ...
    ├── 04_ANI/
        └── ...
    ├── original_files/
        └── ...
    ├── reoriented_files/
        └── ...
    ├── config.yaml
    ├── external-genomes.txt
    └── fasta.txt
```

## Anvi'o pangenome graph

### Subset the genomes for pangenome graph

We first run the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} with {% include PROGRAM name="anvi-display-pan" %} to visualize our pangenome.

In case you don't want to wait for a whole pangenome to run, you can just download the folder at this stage from figshare.

``` bash
curl -L https://figshare.com/ndownloader/articles/28532807/versions/1 -o path/to/AMPLUSPELAGIBACTER-ANVIO-FILES.zip
cd path/to/
unzip AMPLUSPELAGIBACTER-ANVIO-FILES.zip
```

``` bash
anvi-display-pan -p 03_PAN/Ampluspelagibacter_kiloensis-PAN.db \
                 -g 03_PAN/Ampluspelagibacter_kiloensis-GENOMES.db
```

In case this is your first time opening a pangenome, reading the [anvi'o pangenomics workflow](https://merenlab.org/2016/11/08/pangenomics-v2/) might be beneficial to you as we won't go into detail on pangenomes here and having some experience on them will help you in the later part of this tutorial.

After you click on the draw button you should see a pangenome that looks somewhat similar to this. We strongly recommend to use Google Chrome to offer you the best possible user experience.

{% include IMAGE path="/images/pangenome-graphs/Figure_1.png" width=80 %}

In the **Main** tab under **Layers** we first order by **gene_cluster_frequencies**. In **Layer Groups** you checkmark the entry **ANI_full_percentage_identity** and in **Display** you change the bottom four entries to Bar and the Min value to at least 0.97.

{% include IMAGE path="/images/pangenome-graphs/Figure_2.png" width=40 %}

After pressing the draw button again, the resulting pangenome should look like this.

{% include IMAGE path="/images/pangenome-graphs/Figure_3.png" width=80 %}

In the newly added red squares we see the ANI between the genomes of the pangenome. Aside from the diagonal which contains a similarity of 100% due to comparing the same genomes with each other, we see a second very high ANI square on the top left. The complete genome GCF_029593915 shares a very high ANI with the draft genome GCF_029532145. Therefore our initial step in creating a pangenome graph is to use those two genomes.

### Create an anvi'o pangenome graph

To follow the anvi'o naming standard we first create a folder named 05_PANGRAPH.

```bash
mkdir 05_PANGRAPH
```

Anvi'o pangenome graphs are then created by the command {% include PROGRAM name="anvi-run-pangraph" %}. Instead of a {% include ARTIFACT name="genomes-storage-db" %} or {% include ARTIFACT name="pan-db" %}, the result is written in a JSON file.

``` bash
anvi-pan-graph --pan-db 03_PAN/Ampluspelagibacter_kiloensis-PAN.db \
               --genomes-storage 03_PAN/Ampluspelagibacter_kiloensis-GENOMES.db \
               --external-genomes external-genomes.txt \
               --max-edge-length -1 \
               --gene-cluster-grouping-threshold 2 \
               --grouping-compression 0.05 \
               --project-name 'Ampluspelagibacter_kiloensis' \
               -o 05_PANGRAPH/ \
               --output-pangenome-graph-summary \
               --import-values start,stop,partial,call_type,length \
               --output-synteny-distance-dendrogram \
               --n 100 \
               --alpha 0.75 \
               --beta_g 0.5 \
               --beta_m 0.0 \
               --min_contig_size 5 \
               --circularize
```

The settings we use for this are:
- no cutting of edges based on length
- grouping nodes starting at chains of length 2
- we set a project name
- output summary tables for statistical analysis and plotting
- import some extra layers from the pangenome
- output a newick tree based on synteny distance
- circularize the genomes based on graph overlaps
- we want contigs to be at least 5 genes long
- and some extra settings to weight the graph (alpha, beta_g, beta_m and n)


Opening the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} functions similarly to the one we used before to inspect the pangenome. Instead of {% include PROGRAM name="anvi-display-pan" %}, we use the program {% include PROGRAM name="anvi-display-pan-graph" %}. Experienced anvi'o users should feel right at home here and find many functions they already know.

```bash
anvi-display-pan-graph -i 05_PANGRAPH/Ampluspelagibacter_kiloensis-JSON.json \
                       -p 03_PAN/Ampluspelagibacter_kiloensis-PAN.db \
                       -g 03_PAN/Ampluspelagibacter_kiloensis-GENOMES.db
```

The initial pangenome graph visible in the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} should look like this. The grey nodes are single gene clusters (you can click on them to get detailed information on the gene). The purple colored nodes are gene cluster groups, which are created if a set of single gene clusters is only connected in a single line and present in the same subset of genomes. Gene cluster groups basically help to focus on the *interesting* parts of a pangenome graph. You can also get a detailed view on them by clicking. In the middle you see a arrow showing the graph's flow direction. There are three different types of edges currently implemented in the pangenome graph tool:

1. straight lines [───────]: Those are connections between two gene clusters of gene cluster groups following the pangenome graphs flow direction
2. dashed lines [─ ─ ─ ─]: These are like straight lines but reverse the pangenome graph flow direction
3. semi-dashed-lines [──── ──]: These are special and sometimes hard to see, because these are a mix between both of the prior edge types. Imagine a situation where a set of genes is reversed all together in a subset of the genomes. Therefore A - B - C is as correct as C - B - A. We implemented this solution to not overload the graph with extra lines. Unfortunately there is no example in the graph below as they occur very rarely and only in VERY complex pangenome graphs.

{% include IMAGE path="/images/pangenome-graphs/Figure_4.png" width=80 %}

The consensus graph present to you now already tells us many stories, e.g. insertions and deletions of single genes or potentially full operons. To highlight the genome these events take place in, we will change some settings.

{% include IMAGE path="/images/pangenome-graphs/Figure_5_1.png" width=40 %}

First we increase the size of the **Orientation arrow** and activate the layers for the two genomes. We also increase them in size. To see the tree based on graph difference we checkmark **Show phylogenic tree** and increase the size of **Tree length** and **Tree offset**. The distance between the nodes on the consensus graph can also be slightly increased. To be able to see the lines in the genome tracks and in the consensus graph we also slightly increase **Node line thickness** and **Edge thickness** as well as **Line graph thickness**. Since we increased the **Tree offset**, we have more space for labels; therefore, we can increase the **Label size**. To estimate the size of groups of genes we set the **Group size compression** to a small value above 0. F
{% include IMAGE path="/images/pangenome-graphs/Figure_5_2.png" width=40 %}

After clicking the **Draw** button again we should be able to see the so-called "genome tracks" in the middle of the pangenome graph to help us understand the origin of specific motifs. 

{% include IMAGE path="/images/pangenome-graphs/Figure_6.png" width=80 %}

We can now decide if the graph is simple enough to understand, and if so, then we can include the other two genomes in the graph. For instance we don't see any visible genomic rearrangements, so we are free to increase the complexity by adding more genomes. But in the end this is of course a decision to be made by the user.

After this step your folder structure should look similar to this.

### Some simple pangenome graph analysis examples

We can switch the color of genomes to highlight their tracks in the graph. As an example, here we change the color of HIMB1556 as this genome is the representative of the the *Ampluspelagibacter kiloensis* group. We also shift the entry to the top. That way all edges and nodes present in this genome will be colored and also overlay all the other colors. Since a line can only have one color, the coloring is done according to the hierarchy of the genomes. 

{% include IMAGE path="/images/pangenome-graphs/Figure_7.png" width=40 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_8.png" width=80 %}

We could also reduce the compression of the groups to show 20% of the original size instead of 5% to estimate the impact of conserved regions better.

{% include IMAGE path="/images/pangenome-graphs/Figure_9.png" width=80 %}

Another usecase might be first linearize the pangenome graph and then tracking the position change of rearranged gene clusters (shown as light green colored nodes).

{% include IMAGE path="/images/pangenome-graphs/Figure_12.png" width=80 %}

When we zoom in to that region we can also click on the nodes and check which gene calls are included here.

{% include IMAGE path="/images/pangenome-graphs/Figure_13.png" width=40 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_10.png" width=40 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_11.png" width=40 %}

In this case we learn, that gene cluster GC_00001444 not only changed position but in the progress of changing the position the amino acid sequence also slightly changed, visible in the gaps in the beginning in comparison to the second graphic showing no gaps in the same region.

<!-- ### Expanding the pangenome graph

We start the same programs again and just save the pangenome graph in a differently named JSON file. If we skip the `-G` flag, all genomes listed in the external-genomes file are included in the graph.

``` bash
anvi-pan-graph -e external-genomes.txt \
               -p 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db \
               -g 03_PAN/Candidatus_Lucifugimonas_marina-GENOMES.db \
               -o 05_PANGRAPH/Candidatus_Lucifugimonas_marina-JSON_2.json
```

``` bash
anvi-display-pan-graph -p 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db \
                       -g 03_PAN/Candidatus_Lucifugimonas_marina-GENOMES.db \
                       -i 05_PANGRAPH/Candidatus_Lucifugimonas_marina-JSON_2.json
```

The initial pangenome graph looks not too different from the last one, but this time we can also see a genomic rearrangement motif that we will discuss later. First we set the settings to the same values as before to be able to see the genome tracks and the hierarchically colored nodes and edges. We also reorder the genomes because the coloring of the pathways works in a hierarchical fashion, as we explained before. Therefore, having one of the complete genomes on top helps us to understand where the draft genomes broke during assembly.

{% include IMAGE path="/images/pangenome-graphs/Figure_7.png" width=80 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_8_1.png" width=40 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_8_2.png" width=40 %}

This is what the pangenome graph should look like after you changed the settings.

{% include IMAGE path="/images/pangenome-graphs/Figure_9_1.png" width=80 %}

In the left red rectangle you can see non-continous lines in the orange and blue genome tracks, which indicate the ends of contigs (i.e. the genome assembly broke at these locations).

{% include IMAGE path="/images/pangenome-graphs/Figure_9_4.png" width=80 %}

If you look at the paralog annotation layer at these locations, it becomes obvious that paralogous gene clusters broke the assembly. The red spots in the paralog distribution annotation layer (highlighted with the small circles above the dashed lines) indicate a high number of paralogs of the respective gene. The red dashed lines highlight the paralog gene clusters that seem to directly influence the assembly as they co-occure with breaks in the blue and orange genome tracks on the bottom.

The red rectangle on the right, that is present in the full pangenome graph above shows us that in the green genome exactly one gene changed position relative to some genes upstream. Following the green genome tracks in the middle can help you understand this phenomenon. 

{% include IMAGE path="/images/pangenome-graphs/Figure_9_2.png" width=80 %}

Following the red arrow you jump over some genes and end up at a the second gene from the left involved in this motive. From there you move against the graphs direction by following the purple arrows to get to the gene that changed the position, highlighted by a circle. After reaching the circled gene you follow the blue arrows to move in the graph direction again to the last gene cluster involved in this motif. All other genomes aside from the one having green genome tracks follow a straight line of genes as indicated by the black arrows.

Only the consensus position is used in the pangenome graph while the other position is connected by these longer connections highlighting a rearrangement event. When looking at the genomes directly the rearrangement event as well as the consensus position of this gene is clearly visible (circled in black below).

{% include IMAGE path="/images/pangenome-graphs/Figure_9_3.png" width=80 %}

Furthermore, the two draft genomes are nearly as similar in terms of graph structure to each other as the two non-draft genomes, as indicated by the similarly positioned insertions and deletions and the tree structure visible on the bottom left in the complete pangenome graph picture above.

Going deeper into the pangenome graph can offer many more insights and will be the focus of the next and final chapter of this tutorial.

## Read from the graph - A quick and simple example

For the final hands-on example in this tutorial, we change the graph into a linear representation. You are free to also remove the paralog layer as we don't use it for the following examples.

{% include IMAGE path="/images/pangenome-graphs/Figure_10.png" width=40 caption="CAPTION." %}

You might have to left click while moving around a bit to find the linear graph due to an SVG bug that still existed at the time of writing this tutorial.

{% include IMAGE path="/images/pangenome-graphs/Figure_11.png" width=80 %}

In this final example we are interested in the enolase gene paralogs and their distribution over the graph. Therefore we switch to the **Search** tab and activate search in all sources by checkmarking them. Under **Terms** we can then state what kind of genes we are searching for ("enolase"). Finally click **Search** and then **Highlight** on the bottom.

{% include IMAGE path="/images/pangenome-graphs/Figure_12.png" width=80 %}

We scroll through the linear graph to find an interesting region with high coverage of paralog genes. For this tutorial we will focus on the area with five connected enolase genes but you can choose whatever you prefer.

{% include IMAGE path="/images/pangenome-graphs/Figure_13.png" width=80 %}

We then pick a gene upstream and a gene downstream of the interesting region and **click** on them one after each other and make a note about the graph position. The red squares indicate the positions we choose for this tutorial.

{% include IMAGE path="/images/pangenome-graphs/Figure_14.png" width=80 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_15.png" width=80 %}

Next we can now checkmark **Ungroup area** under the **Main** tab and enter the region from the downstream to the upstream gene.

{% include IMAGE path="/images/pangenome-graphs/Figure_16.png" width=40 %}

After removing the checkmark from **Linear graph layout** and then clicking on **Draw** again we will see the circular graph again with the unfolded area that we are interested in.

{% include IMAGE path="/images/pangenome-graphs/Figure_17.png" width=80 %}

You can now proceed with binning these areas if you want. Go to the **Bins** tab and rename the bin, e.g. to **Enolase**, and give it a color of your choice. By holding the shift key while **left-clicking** on a node you can add this node to the bin. We first add the five enolase genes into one bin (top red rectangle) and afterwards create a second bin with the long blue insertion (bottom red rectangle).

{% include IMAGE path="/images/pangenome-graphs/Figure_18.png" width=80 %}

If we click on **Bin info**, a scrollable table will *magically* appear showing you all the information windows of the currently selected bin. An easy analysis now would be to check if the second bin containing the genes of the inserted area is coming from a phage by scanning through the annotations.

{% include IMAGE path="/images/pangenome-graphs/Figure_19.png" width=80 %}

Plot twist, indeed they are phage genes, meaning that this inserted area in the blue genome is in fact a prophage.

## More tutorials and resources

We hope you liked following this tutorial and enjoy your next pangenome graph analysis. Some features of the UI are not mentioned in this tutorial as we wanted to keep it as simple as possible and believe in you and your abilities. Aside from that please feel free to reach out in case you have ideas or questions. In case you are interested in more tutorials on other disciplines covered by anvi'o please have a look at the following links.

- [The infant gut tutorial](https://merenlab.org/tutorials/infant-gut/)
- [Studying microbial population genetics with anvi'o](https://merenlab.org/2015/07/20/analyzing-variability/)
- [A simple read recruitment exercise](https://merenlab.org/tutorials/read-recruitment/).
- [An exercise on metabolic reconstruction](https://merenlab.org/tutorials/fmt-mag-metabolism/).
- [A tutorial on the anvi'o interactive interface](https://merenlab.org/tutorials/interactive-interface/).

And more at [https://anvio.org/#learn](https://anvio.org/#learn). -->

<!---
JUST SOME IDEAS:
- What breaks an assembly? - Mobilome, Transposases
- Why is subclustering GCs worth it? - POSCs, Enolases, Paralogs
- Why do we need complex graphs? - Rearrangement (GCF_029593895)
- Why is there so much similar stuff? - Synteny highly conserved
- This circular view is ugly! - Linear view
- What elso can we get from pangenome graphs? - Datatables and values
-->