---
layout: blog
authors: [ahenoch]
title: "Leveling up pangenomics with interactive pangenome graphs"
excerpt: "A reproducible pangenome graph analysis of four candidatus lucifugimonas marina genomes."
date: 2024-09-10
tags: [metagenomics, pangenomics, hands-on, beginner]
comments: true
---

With the workflow on anvio pangenome graphs you can,

* **Identify and analyse** regions of hypervariability in your genomes
* **Estimate similarity** between the genomes based on graph structures instead of e.g. genome similarity
* **Interactively visualize** your pangenome graph and the impact of single genomes on the consensus
* **Highlight** the distribution of paralogous gene clusters through their synteny based sub clusters
* **Summarize** distribution and frequency of common graph motives into a nice table for downstream analysis

{:.notice}
You can use the anvi'o workflow for pangenome graphs even if you haven't done any metagenomic work with anvi'o. All you need is an anvi'o installation, and a FASTA file for each of your genomes.

## Introduction

The anvi'o pangenomic workflow described here will walk you through the following steps:

* Download and order a four genome dataset containing complete and draft genomes using anvi'o {% include PROGRAM name="anvi-reorient-contigs" %}

* Using the anvi'o pangenomics workflow to generate an anvi'o {% include ARTIFACT name="genomes-storage-db" %} and  {% include ARTIFACT name="pan-db" %} using the program {% include PROGRAM name="anvi-run-workflow" %}

* Explain how to define a subset of the sequences to use with the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} enabled by {% include PROGRAM name="anvi-display-pan" %}.

* Calculate a {% include ARTIFACT name="pan-graph" text="anvi'o pangenome graph" %} based on these sequences using {% include PROGRAM name="anvi-pan-graph" %}

* Step-by-step explanation of graph motives in the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} using {% include PROGRAM name="anvi-display-pan-graph" %}

## Prerequisites for the tutorial

### Anvi'o dependencies

If your system is properly setup, this {% include PROGRAM name="anvi-self-test" %} command should run without any errors:

``` bash
conda activate anvio-dev
anvi-self-test --suite pangenomics
```

Anvi'o might complain in case you haven't set up the databases yet and we strongly advice you to do so before running this tutorial. 

```bash
anvi-setup-scg-taxonomy
anvi-setup-ncbi-cogs
anvi-setup-kegg-data
```

### Where to find the data

For this workflow we will use four genomes of *Candidatus Lucifugimonas marina* published by Lim et al. in 2023. Two complete genomes (GCA_029593895 & GCA_029593915) and two draft genomes (GCA_029532165, GCA_029532145). First we download all four genomes from the NCBI FTP server.

``` bash
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/029/593/915/GCF_029593915.1_ASM2959391v1/GCF_029593915.1_ASM2959391v1_genomic.fna.gz -O GCF_029593915.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/029/593/895/GCF_029593895.1_ASM2959389v1/GCF_029593895.1_ASM2959389v1_genomic.fna.gz -O GCF_029593895.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/029/532/145/GCF_029532145.1_ASM2953214v1/GCF_029532145.1_ASM2953214v1_genomic.fna.gz -O GCF_029532145.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/029/532/165/GCF_029532165.1_ASM2953216v1/GCF_029532165.1_ASM2953216v1_genomic.fna.gz -O GCF_029532165.fna.gz
gzip -d *.gz
```

The current folder structure should look like this.

/path/to/\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── GCF_029593915.fna

### Order and reorient the draft genomes

In the next step we have to order and reorient the contigs of the draft genome. We use the program {% include PROGRAM name="anvi-reorient-contigs" %} to for this task, based on the longest complete genome present in our folder.

``` bash
anvi-reorient-fasta -f ./ --prioritize-number-of-contigs
```

The fasta files containing draft genomes are now ready to be used on the pangenomics workflow. For every genome excluding the leading genome we see some blast result files in the folder.

/path/to/\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145_blast\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165_blast\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895_blast\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── GCF_029593915.fna

## Anvi'o pangenomics workflow

From the workflow we will receive multiple databases that we need for further downstream analysis. A single {% include ARTIFACT name="contigs-db" %} for every genome used, containig informations like genecalls, annotations, etc. The {% include ARTIFACT name="genomes-storage-db" %} a special anvi'o database that stores information about genomes, generated from {% include ARTIFACT name="external-genomes" %}, {% include ARTIFACT name="internal-genomes" %}, or both. And lastly the {% include ARTIFACT name="pan-db" %} created from the {% include ARTIFACT name="genomes-storage-db" %} including all features calculated during the pangenomics analysis. For a more detailed description of these special anvi'o databases please read about it in the [anvi'o pangenomics workflow](https://merenlab.org/2016/11/08/pangenomics-v2/).

A {% include ARTIFACT name="fasta-file" %} is required to run the pangenomics workflow. This file has to be tab-seperated with two columns, the first containing the name of the fasta and the second containig the path to the file. We use the power of bash, to speed things up a little. For more informations about anvi'o workflows in general we really recommend reading [Scaling up your analysis with workflows](https://anvio.org/tutorials/scaling-up/).

``` bash
echo -e 'name\tpath' > fasta.txt
for filename in *.fna; do
    echo -e $(basename $filename | cut -d. -f1)'\t'$(realpath $filename) >> fasta.txt
done
```

The resulting fasta.txt file should look like this.

``` txt
name	path
GCF_029532145	/path/to/GCF_029532145.fna
GCF_029532165	/path/to/GCF_029532165.fna
GCF_029593895	/path/to/GCF_029593895.fna
GCF_029593915	/path/to/GCF_029593915.fna
```

Now the first prerequisite to start anvi'o pangenomics workflow is set-up. The next step is to generate and modify the {% include ARTIFACT name="workflow-config" %}. We can create a standard one with this command.

```bash
anvi-run-workflow -w pangenomics --get-default-config config.yaml
```

For the sake of simplicity we will keep most values as they are. The only changes we make are on the bottom of the {% include ARTIFACT name="workflow-config" %} by changing the name of the project and add an output path for the {% include ARTIFACT name="external-genomes" %}, because we need this file later.

config.yaml:
``` yaml
{...}
    "project_name": "Candidatus_Lucifugimonas_marina",
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

Now we can start the anvi'o pangenomics workflow. This will probably take a while and you can reward yourself with a coffee while you wait :coffee: 

``` bash
anvi-run-workflow -w pangenomics -c config.yaml
```

The final command of this section will be to calculate the ANI of our dataset with the program, {% include PROGRAM name="anvi-compute-genome-similarity" %}, it uses various tools such as PyANI to compute average nucleotide identity across your genomes, followed by sourmash to compute mash distance across your genomes. We use it now to add these results as an additional layer data to our pangenome. More informations on ANI and the usage in comparative genomics can be found in the tutorial on pangenomics in the section [Computing the average nucleotide identity for genomes](https://merenlab.org/2016/11/08/pangenomics-v2/#computing-the-average-nucleotide-identity-for-genomes-and-other-genome-similarity-metrics-too). Since our genomes are quite similar it should not take longer than a minute.

```bash
anvi-compute-genome-similarity --external-genomes external-genomes.txt \
                               --program pyANI \
                               --output-dir 04_ANI \
                               --num-threads 6 \
                               --pan-db 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db
```

Good job, you are done! Your folder structure should look similar to this.

/path/to/\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 00_LOGS\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 01_FASTA\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 02_CONTIGS\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593915-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 03_PAN\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Candidatus_Lucifugimonas_marina-GENOMES.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Candidatus_Lucifugimonas_marina-PAN.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 04_ANI\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── config.yaml\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── external-genomes.txt\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── fasta.txt\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── GCF_029593915.fna

## Anvi'o pangenome graph

### Decide on the genomes subset to use

We first run {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} with {% include PROGRAM name="anvi-display-pan" %} to visualize our pangenome.

``` bash
anvi-display-pan -p 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db \
                 -g 03_PAN/Candidatus_Lucifugimonas_marina-GENOMES.db
```

After you click on the draw button you should see a pangenome that looks somewhat similar to this. We strongly recommend to use Google Chrome to offer you the best possible user experience.

{% include IMAGE path="/images/pangenome-graphs/Figure_1.png" width=80 %}

In the **Main** tab under **Layers** we first order by **gene_cluster_frequencies**. In **Layer Groups** you checkmark the entry **ANI_full_percentage_identity** and in **Display** you change the bottom four entries to Bar and the Min value to at least 0.97.

{% include IMAGE path="/images/pangenome-graphs/Figure_2.png" width=40 %}

After pressing the draw button again, the resulting pangenome should look like this.

{% include IMAGE path="/images/pangenome-graphs/Figure_3.png" width=80 %}

In the newly added red squares we see the ANI between the genomes of the pangenome. Aside from the diagonal which contains a similarity of 100% due to comparing the same genomes with each other we see a second very high sqare on the top left. The complete genome GCF_029593915 shares a very high ANI with the draft genome GCF_029532145. Therefore our initial step in creating a pangenome graph is to use those two genomes.

### Create an anvi'o pangenome graph

To follow the anvi'o naming standard we first create a folder named 05_PANGRAPH.

```bash
mkdir 05_PANGRAPH
```

Anvi'o pangenome graphs are then created by the command {% include PROGRAM name="anvi-run-pangraph" %} instead of a {% include ARTIFACT name="genomes-storage-db" %} or {% include ARTIFACT name="pan-db" %} the result is written in a json file for now.

``` bash
anvi-pan-graph -e external-genomes.txt \
               -p 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db \
               -g 03_PAN/Candidatus_Lucifugimonas_marina-GENOMES.db \
               -o 05_PANGRAPH/Candidatus_Lucifugimonas_marina-JSON.json \
               -G 'GCF_029593915,GCF_029532145'
```

We only used our two genomes from the former step to see how complex the graph already gets. Opening the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} functions similar to the one we used before to inspect the pangenome. Instead of {% include PROGRAM name="anvi-display-pan" %} we use the program {% include PROGRAM name="anvi-display-pan-graph" %}. Experienced anvi'o users should feel right at home here and find many functions they already know.

```bash
anvi-display-pan-graph -p 03_PAN/Candidatus_Lucifugimonas_marina-PAN.db \
                       -g 03_PAN/Candidatus_Lucifugimonas_marina-GENOMES.db \
                       -i 05_PANGRAPH/Candidatus_Lucifugimonas_marina-JSON.json
```

The initial pangenome graph visible in the {% include ARTIFACT name="interactive" text="anvi'o interactive interface" %} should look like this. The grey nodes are single gene clusters (you can click on them to get detailed information on the gene). The purple colored nodes are gene cluster groups, groups are created if a set of single gene clusters is only connected in a single line and present in the same subset of genomes. Gene cluster groups basically help to focus on the *interesting* parts of a pangenome graph. You can also get a detailed view on them by clicking. In the middle you see a arrow showing the graphs flow direction. There are three different types of edges currently implemented in the pangenome graph tool:

1. straight lines: Those are connections between two gene clusters of gene cluster groups following the pangenome graphs flow direction
2. dashed lines: These are like straight lines but reverse to the pangenome graph flow direction
3. semi-dashed-lines: These are special and sometimes hard to see, because these are a mix between both of the prior edge types. Imagine a situation where a set of genes is reversed all together in a subset of the genomes. Therefore A - B - C is as correct as C - B - A. We implemented this solution to not overload the graph with extra lines.

{% include IMAGE path="/images/pangenome-graphs/Figure_4.png" width=80 %}

The consensus graph present know can already tell us many stories e.g. insertions and deletions of single genes or full potential operons. To hightlight the genome these events take place in we will change some settings.

{% include IMAGE path="/images/pangenome-graphs/Figure_5_1.png" width=40 %}

First we increase the size of the **Orientation arrow** and activate the layers for the two genomes We also increase them in size. To see the tree based on graph difference we checkmark **Show phylogenic tree** and increase the size of **Tree length** and **Tree offset**. The distance between the nodes on the consensus graph can also be slightly increased. To be able to see the lines in the genome tracks and in the consensus graph we also slightly increase **Node line thickness** and **edge thickness** as well as **Line graph thickness**. Since we increased the **Tree offset** we have more space for labels, therefore, we cann increase the **Label size**. To estimate the size of groups of genes we set the **Group size compression** to a value above 0. Finally we keep the color for GCF_029593915 but shift the entry to the top and color GCF_029532145 in orange. That way all edges and nodes present in both genomes or present in the former one GCF_029593915 will be colored black while edges and nodes only present in GCF_029532145 are colored in orange. Since a line can only have one color, the coloring functions by hierarchy in the list. 

{% include IMAGE path="/images/pangenome-graphs/Figure_5_2.png" width=40 %}

After clicking the draw button again we should be able to see the so called genome tracks in the middle of the pangenome graph to help us understand the origin of specific motives. 

{% include IMAGE path="/images/pangenome-graphs/Figure_6.png" width=80 %}

Before going more into detail on motives and differences here we want to decide if the amount of readable complexity already reached saturation or if we can include the other two genomes as well. If you can not find any visible genomic rearrangements your are free to increase the complexity by adding more genomes. But in the end this is of course a decision to be made by the user :)

After this step your folder structure should look similar to this.

/path/to/\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 00_LOGS\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 01_FASTA\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 02_CONTIGS\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593915-contigs.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 03_PAN\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Candidatus_Lucifugimonas_marina-GENOMES.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Candidatus_Lucifugimonas_marina-PAN.db\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 04_ANI\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 05_PANGRAPH\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Candidatus_Lucifugimonas_marina-JSON.json \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── config.yaml\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── external-genomes.txt\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── fasta.txt\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532145.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029532165.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── GCF_029593895.fna\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── GCF_029593915.fna

### Expanding the pangenome graph

We start the same programs again and just save the pangenome graph in a differently named json file.

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

The initial pangenome graphs looks not to different from the last one but this time we can also see a genomic rearrangement motive that we will discuss later. First we set the settings to the same values as before to be able to see the genome tracks and the hierarchically colored nodes and edges. We also reordered the genomes because the coloring of the pathways work in a hierarchical fashion, therefore having one of the complete genomes on top helps us to understand where the draft genomes broke during assembly.

{% include IMAGE path="/images/pangenome-graphs/Figure_7.png" width=80 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_8_1.png" width=40 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_8_2.png" width=40 %}

When comparing the paralog layer color with the areas where the assemblys of the draft genomes broke, it becomes obvious that paralogous gene clusters broke them. We also see, that in the green genome exactly one gene changed position to some genes upstream. The context around the gene also changed. Furthermore the two draft genomes are nearly as similar in terms of graph structure to each other as the two non draft genomes, noticable by the similar positioned insertions and deletions.

{% include IMAGE path="/images/pangenome-graphs/Figure_9.png" width=80 %}

Going deeper into the pangenome graph can offer much more insides and will be the focus on the next and final chapter of this tutorial.

## Read from the graph - A quick and simple example

For the final hands on example in this tutorial, we first open the graph into a linear representation. You are free to also remove the paralog layer as we don't use it for the following examples.

{% include IMAGE path="/images/pangenome-graphs/Figure_10.png" width=40 %}

You might have to left click while moving around a bit to find the linear graph due to svg limitations statt still existed at the time of writing this tutorial.

{% include IMAGE path="/images/pangenome-graphs/Figure_11.png" width=80 %}

In this final example we are interested in the enolase gene paralogs and their distribution over the graph. Therefore we switch to the **Search** tab and activate search in all sources by checkmarking them. Under **Terms** we can then state what kind of genes we are searching for. Finally click **Search** and then **Hightlight** on the bottom.

{% include IMAGE path="/images/pangenome-graphs/Figure_12.png" width=80 %}

We scroll throught the linear graph to find an interesting region with high coverage of paralog genes. For this tutorial the area with 5 connected enolase genes seems appropriate but you can choose whatever you prefer.

{% include IMAGE path="/images/pangenome-graphs/Figure_13.png" width=80 %}

We then pick a gene upstream and a gene downstream of the interesting region and click on them one after each other and make a note about the graph position somewhere.

{% include IMAGE path="/images/pangenome-graphs/Figure_14.png" width=80 %}

{% include IMAGE path="/images/pangenome-graphs/Figure_15.png" width=80 %}

Next we can now checkmark **Ungroup area** under the **Main** tab and enter the region from the downstram to the upstream gene.

{% include IMAGE path="/images/pangenome-graphs/Figure_16.png" width=40 %}

After removing the checkmark from **Linear graph layout** and then clicking on **Draw** again we will see the circular graph again with the unfolded area that we are interested in.

{% include IMAGE path="/images/pangenome-graphs/Figure_17.png" width=80 %}

You can now proceed with binning these areas if you want. Go to the **Bins** tab and rename the bin, e.g. to **Enolase** and give it a color of your choice. By holding the shift key while left-clicking on a node you can add this node to the bin. We first add the fife enolase genes into one bin and afterwards create a second bin with the long blue insertion.

{% include IMAGE path="/images/pangenome-graphs/Figure_18.png" width=80 %}

If we click on **Bin info** a scrollable table will appear showing you all the single information windows of the currently selected bin. An easy analysis now would be to check if the second bin containing the genes of the inserted area is coming from a phage by scanning through the annotations.

{% include IMAGE path="/images/pangenome-graphs/Figure_19.png" width=80 %}

## More tutorials and resources

We hope you liked following this tutorial and enjoy your next pangenome graph analysis. Many features of the UI are not mentioned in this tutorial as we wanted to keep it as simple as possible. Also please feel free to reach out in case you have ideas or questions. In case you are interested in more tutorials on other disciplines covered by anvi'o please have a look at the following links.

- [The infant gut tutorial](https://merenlab.org/tutorials/infant-gut/)
- [Studying microbial population genetics with anvi'o](https://merenlab.org/2015/07/20/analyzing-variability/)
- [A simple read recruitment exercise](https://merenlab.org/tutorials/read-recruitment/).
- [An exercise on metabolic reconstruction](https://merenlab.org/tutorials/fmt-mag-metabolism/).
- [A tutorial on the anvi'o interactive interface](https://merenlab.org/tutorials/interactive-interface/).

And more at [https://anvio.org/#learn](https://anvio.org/#learn).


<!---
JUST SOME IDEAS:
- What breaks an assembly? - Mobilome, Transposases
- Why is subclustering GCs worth it? - POSCs, Enolases, Paralogs
- Why do we need complex graphs? - Rearrangement (GCF_029593895)
- Why is there so much similar stuff? - Synteny highly conserved
- This circular view is ugly! - Linear view
- What elso can we get from pangenome graphs? - Datatables and values
-->