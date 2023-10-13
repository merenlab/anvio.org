---
layout: blog
authors: [ivagljiva]
title: Metabolic enrichment of high-fitness MAGs from a longitudinal FMT study (An exercise on metabolic reconstruction)
excerpt: "A mini-tutorial on how to run metabolism estimation and enrichment in anvi'o"
date: 2023-10-15
tags: [metabolism, metabolic-enrichment, genomics, metagenomics, hands-on, beginner]
comments: true
---

This is a **mini-tutorial for the metabolism suite of programs** in anvi'o. First, we will learn how to estimate metabolism for a single bacterial isolate, starting from its genome sequence and ending with a file of metabolic module completeness scores. Afterwards, we'll be applying this to a larger, real-world dataset of metagenome-assembled genomes from [our recent FMT study](https://doi.org/10.1101/2021.03.02.433653), to learn how to estimate metabolism in a more high-throughput manner as well as how to compute enrichment scores for metabolic modules.

{:.notice}
This tutorial is tailored for anvi'o `v8` but will probably work for later versions as well (perhaps with minor command modifications). You can learn the version of your installation by running `anvi-interactive -v` in your terminal.

## Running the metabolism suite of programs - a single-genome example

For this example, we'll be using a bacterial isolate genome from the NCBI - the representative genome for _Akkermansia muciniphila_. I picked this species because it is a pretty cool gut microbe that can degrade mucin ([Derrien 2004](https://doi.org/10.1099/ijs.0.02873-0)). But if you have your own data or an interest in a different species, feel free to use that instead.

Here is how you can download and unpack the _A. muciniphila_ genome:

```bash
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/009/731/575/GCF_009731575.1_ASM973157v1/GCF_009731575.1_ASM973157v1_genomic.fna.gz && \
gunzip GCF_009731575.1_ASM973157v1_genomic.fna.gz
```

The first step in any anvi'o analysis is to get your data into the form that anvi'o likes to play with, which means we need to make a {% include ARTIFACT name="contigs-db" text="contigs database" %}. To do this, we first need to re-format the FASTA file to make sure all of the contig deflines contain nothing more than alphanumeric characters, underscores, and dashes. We can do this with {% include PROGRAM name="anvi-script-reformat-fasta" %}. Then we can pass the reformatted FASTA to {% include PROGRAM name="anvi-gen-contigs-database" %} and let it work its magic:

```bash
# fix the deflines
anvi-script-reformat-fasta GCF_009731575.1_ASM973157v1_genomic.fna \
                          --simplify-names \
                          --output-file A_muciniphila.fa

# convert FASTA into a contigs db
anvi-gen-contigs-database --contigs-fasta A_muciniphila.fa \
                          --project-name A_muciniphila \
                          --output-db-path A_muciniphila-CONTIGS.db \
                          --num-threads 2
```

{:.warning}
The command above sets the `--num-threads` parameter to 2 so that `anvi-gen-contigs-database` works a bit faster, but please take care that your computer has enough CPUs to accommodate this number of threads. This applies anytime you see the `--num-threads` or `-T` parameter in a command.

Now you have a contigs database for this genome, so we can start to work with it to estimate metabolism. There are 3 required steps in the metabolism estimation process (though the first step is only necessary the very first time you are doing this, so in general there are just 2 steps). Those steps are:

1. Getting the required [KEGG](https://www.genome.jp/kegg/) data set up on your computer (which only needs to be done once) with {% include PROGRAM name="anvi-setup-kegg-data" %}
2. Adding functional annotations from the [KOfam database](https://doi.org/10.1093/bioinformatics/btz859) to the gene calls in this genome, using {% include PROGRAM name="anvi-run-kegg-kofams" %}
3. Matching those functional annotations to [definitions of metabolic pathways](https://www.genome.jp/kegg/module.html) (aka modules) and computing module completeness scores, which is done by the program {% include PROGRAM name="anvi-estimate-metabolism" %}

You can learn more about how each of these programs work (and different options for running them) by clicking on any of the highlighted links above to go to their respective help pages. Below we will go through a simple example of each step using the _A. muciniphila_ genome that we just downloaded.

### Setting up KEGG data on your computer

First, if you've never worked with KEGG data through anvi'o before (which is likely, considering what you are reading right now), you will need to get this data onto your computer so that the downstream programs can use it. This is as simple as running the following:

```bash
anvi-setup-kegg-data
```

That's it. What this does is download a bunch of data from KEGG onto your computer. The data that are relevant to metabolism estimation are: 1) profile hidden Markov models (pHMMs) for functional annotation from the KOfam database and 2) metabolic pathway definition files from the KEGG MODULE database. The pHMMs have been organized into one big file that is ready for running [`hmmsearch`](https://doi.org/10.1371/journal.pcbi.1002195), and the module definitions have been parsed into a {% include ARTIFACT name="modules-db" text="modules database" %}. This program also downloads data relevant for metabolic modeling in anvi'o, but we don't have to worry about that for the purposes of this tutorial.

By default, the KEGG data goes into the anvi'o directory on your computer. If you don't have permission to modify this folder, you will need to pick a different location (that you _do_ have permission to modify) for the data and specify that folder using the `--kegg-data-dir` parameter. If this is your case, please note that the two subsequent steps will also require you to specify that folder location with `--kegg-data-dir`.

{:.notice}
The data that is downloaded by default is actually a snapshot of KEGG at one moment in time in the past, which we downloaded directly from KEGG and pre-processed into formats compatible for downstream anvi'o programs (using this same program). Downloading the snapshot has several benefits. First, we avoid overloading the KEGG servers when multiple people are downloading the data at once. Second, if KEGG ever changes their file formats and breaks our setup code, we can still use the previous snapshots. Third, everyone with the same version of anvi'o uses the same version of KEGG, which makes data sharing and reproducibility easier. You can choose between several snapshots of KEGG, and you can also use  {% include PROGRAM name="anvi-setup-kegg-data" %} to download the data directly from KEGG to get the latest version of data. You can see instructions for doing that [here](https://anvio.org/help/8/programs/anvi-setup-kegg-data/#getting-the-most-up-to-date-kegg-data-downloading-directly-from-kegg). But for this tutorial, we will assume that you are working with the default snapshot for anvi'o `v8` (and the example outputs will reflect that data).

To check that you have the version of KEGG data that matches to the one we are using in this tutorial, you can run the following:

```bash
# learn where the MODULES.db is:
export ANVIO_MODULES_DB=`python -c "import anvio; import os; print(os.path.join(os.path.dirname(anvio.__file__), 'data/misc/KEGG/MODULES.db'))"`

# print the path so you can see where it is located
echo $ANVIO_MODULES_DB

# check the hash of the MODULES.db contents
anvi-db-info $ANVIO_MODULES_DB
```

In the 'DB Info' output, you should see the following hash value:
```
hash .........................................: a2b5bde358bb
```

<div class="extra-info" markdown="1">
<span class="extra-info-header">Different KEGG version?</span>
If your {% include ARTIFACT name="modules-db" %} hash is not matching (for instance, if you are using a different version of anvi'o or have intentionally downloaded a different snapshot or directly from KEGG), then you can get the same version by specifying the snapshot name we are using. In this case, we recommend specifying a new location for the data using `--kegg-data-dir` to avoid overwriting your default KEGG data directory, and we remind you that you should use `--kegg-data-dir` to point to that non-default directory in all metabolism-related programs going forward. 

Here is how you could do this (you can change the directory name if you want to):

```
anvi-setup-kegg-data --kegg-snapshot v2023-09-22 --kegg-data-dir ./KEGG_2023-09-22_a2b5bde358bb
```

</div>

### Annotating the genome with KOfam hits

The contigs database includes predicted gene calls (open reading frames, or ORFs), but we don't know what functions these genes encode. The next step is annotating these genes with hits to the KOfam database of functional orthologs. If a gene is similar enough to a protein family in this database, it will be annotated with the family's KEGG Ortholog (KO) number. This number is what allows us to match genes to the metabolic pathways that they belong to.

This step is the most time-consuming in the workflow. If you have enough resources on your computer, you can give it additional threads to speed up the process (below we use just 4 threads, which should work for most laptop models these days).

```bash
anvi-run-kegg-kofams -c A_muciniphila-CONTIGS.db \
                     -T 4
```

When this finishes running (it took about 6 minutes on my computer), the output on your terminal should tell you how many KOfam hits were added to the contigs database. For the _A. muciniphila_ genome, this number should be 1,229:

```
Gene functions ...............................: 1,229 function calls from 1 source (KOfam) for 1,184 unique gene calls have been added to the contigs
                                                database.
Gene functions ...............................: 335 function calls from 1 source (KEGG_Module) for 324 unique gene calls have been added to the
                                                contigs database.
Gene functions ...............................: 335 function calls from 1 source (KEGG_Class) for 324 unique gene calls have been added to the
                                                contigs database.
```

Of these 1,229 annotations, 335 are KOs that belong to one or more metabolic pathways in the KEGG Module database. These are the KOs that will be used to estimate module completeness in the next step.

Please also pay attention to the following warning in the output:

```
WARNING
===============================================
Anvi'o will now re-visit genes without KOfam annotations to see if potentially
valid functional annotations were missed. These genes will be annotated with a
KO only if all KOfam hits to this gene with e-value <= 1e-05 and bitscore >
(0.75 * KEGG threshold) are hits to the same KO. Just so you know what is going
on here. If this sounds like A Very Bad Idea to you, then please feel free to
turn off this behavior with the flag --skip-bitscore-heuristic or to change the
e-value/bitscore parameters (see the help page for more info).

Number of decent hits added back after relaxing bitscore threshold : 121
Total number of hits in annotation dictionary after adding these back : 1,229
```

This is one of our heuristics to reduce the number of missed annotations, and it is turned 'On' by default. Here, it gave us 121 additional annotations for the _A. muciniphila_ genome. Full documentation of the heuristic, including how to change the parameters or turn it off completely if you don't like it, can be found on the {% include PROGRAM name="anvi-run-kegg-kofams" %} help page. 

### Estimating metabolism

#### Completeness metrics

Our next step is to calculate the completeness of each pathway in the KEGG Module database. {% include PROGRAM name="anvi-estimate-metabolism" %} will go through the definition of each module and compute the fraction of KOs in this definition that are present in the genome.

```bash
anvi-estimate-metabolism -c A_muciniphila-CONTIGS.db \
                         -O A_muciniphila
```

When you run this command, you should see in your terminal that 63 modules were found to be complete in this genome using the 'pathwise' strategy, and that 55 were complete using the 'stepwise' strategy.

<div class="extra-info" markdown="1">
<span class="extra-info-header">Pathwise vs Stepwise?</span>
Most metabolic pathways can utilize more than one enzyme for a given reaction, and as a result there are several enzyme combinations that would make the pathway 'complete'. There are two ways to interpret these complex pathway definitions. We could pay attention to the **specific enzyme combination** that an organism is using, in which case we should calculate the completeness/copy number metrics for each possible combination ('path' through the module) individually, and then pay attention to the one that is most complete. For this situtation, we use the **'pathwise'** interpretation strategy, which unrolls each module definition into all possible enzyme 'paths' and reports on the maximally-complete one. Alternatively, we could ignore the nuances of which enzyme is used and only care whether the **overall pathway irrespective of enzyme content** is complete or not. For that, we use the **'stepwise'** interpretation strategy, which considers each major 'step' in the pathway as complete if _any combination of required enzymes_ is present and then reports on the overall proportion of complete steps in the pathway. (Often, a 'step' equates to a chemical reaction, but this is not the case for more complex pathway branching structures.)

Still confused? You can find [more documentation about the differences between these strategies here](https://anvio.org/help/main/programs/anvi-estimate-metabolism/#two-estimation-strategies---pathwise-and-stepwise).

</div>

The threshold for deciding whether a module is 'complete' or not is 0.75 (75%) by default. With this threshold, pathwise completeness means that the genome contains at least 75% of the enzymes necessary to complete at least one version of the metabolic pathway, while stepwise completeness indicates that at least 75% of the steps in the pathway were complete (again, using the enzymes annotated in the genome). This threshold is mutable - you can change it using the `--module-completion-threshold` parameter. However, while the threshold is useful as a basic filter to narrow down which modules are worth considering, it should not be used to conclusively decide which modules are actually complete or not in this genome, as discussed [here](https://merenlab.org/tutorials/infant-gut/#estimating-metabolism-in-the-enterococcus-genomes).

The program will produce an output file called `A_muciniphila_modules.txt` which describes the completeness of each module. More information about this output (and other available output modes) can be found {% include ARTIFACT name="kegg-metabolism" text="at this link" %}.

When you take a look at the output file, you will see that many of the modules marked as 'complete' (in the `module_is_complete` column) are biosynthesis pathways. The table below shows a few of these.

|**module**|**genome_name**|**module_name**|**module_class**|**module_category**|**module_subcategory**|**module_definition**|**stepwise_module_completeness**|**stepwise_module_is_complete**|**pathwise_module_completeness**|**pathwise_module_is_complete**|**proportion_unique_enzymes_present**|**enzymes_unique_to_module**|**unique_enzymes_hit_counts**|**enzyme_hits_in_module**|**gene_caller_ids_in_module**|**warnings**|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|M00005|A_muciniphila|PRPP biosynthesis, ribose 5P => PRPP|Pathway modules|Carbohydrate metabolism|Central carbohydrate metabolism|"K00948"|1.0|True|1.0|True|1.0|K00948|1|K00948|1580|None|
|M00854|A_muciniphila|Glycogen biosynthesis, glucose-1P => glycogen/starch|Pathway modules|Carbohydrate metabolism|Other carbohydrate metabolism|"(K00963 (K00693+K00750,K16150,K16153,K13679,K20812)),(K00975 (K00703,K13679,K20812)) (K00700,K16149)"|1.0|True|1.0|True|1.0|K16150|1|K00700,K00963,K16150|1933,1923,2048|K00963 is present in multiple modules: M00129/M00854/M00549,K00700 is present in multiple modules: M00854/M00565|
|M00549|A_muciniphila|Nucleotide sugar biosynthesis, glucose => UDP-glucose|Pathway modules|Carbohydrate metabolism|Other carbohydrate metabolism|"(K00844,K00845,K25026,K12407,K00886) (K01835,K15779,K15778) (K00963,K12447)"|1.0|True|1.0|True|NA|No enzymes unique to module|NA|K00963,K01835,K25026,K25026|1923,164,108,1155|K25026 is present in multiple modules: M00001/M00549/M00909,K01835 is present in multiple modules: M00855/M00549,K00963 is present in multiple modules: M00129/M00854/M00549|
|M00083|A_muciniphila|Fatty acid biosynthesis, elongation|Pathway modules|Lipid metabolism|Fatty acid metabolism|"K00665,(K00667 K00668),K11533,((K00647,K09458) K00059 (K02372,K01716,K16363) (K00208,K02371,K10780,K00209))"|1.0|True|1.0|True|NA|No enzymes unique to module|NA|K00059,K00059,K00208,K02372,K09458,K16363|1055,238,1821,2092,1438,2092|K09458 is present in multiple modules: M00083/M00873/M00874/M00572,K16363 is present in multiple modules: M00083/M00866,K00059 is present in multiple modules: M00083/M00874/M00572,K00208 is present in multiple modules: M00083/M00572,K02372 is present in multiple modules: M00083/M00572|
|M00093|A_muciniphila|Phosphatidylethanolamine (PE) biosynthesis, PA => PS => PE|Pathway modules|Lipid metabolism|Lipid metabolism|"K00981 (K00998,K17103) K01613"|1.0|True|1.0|True|1.0|K00981,K01613,K17103|1,1,1|K00981,K01613,K17103|1811,1830,1448|None|
|M00048|A_muciniphila|De novo purine biosynthesis, PRPP + glutamine => IMP|Pathway modules|Nucleotide metabolism|Purine metabolism|"K00764 (K01945,K11787,K11788,K13713) (K00601,K11175,K08289,K11787,K01492) (K01952,(K23269+K23264+K23265),(K23270+K23265)) (K01933,K11787,K11788 (K01587,K11808,K01589 K01588)) (K01923,K01587,K13713) K01756 (K00602,(K01492,K06863 K11176))"|1.0|True|1.0|True|1.0|K00602,K00764,K01588,K01923,K01933,K01945,K11175,K23265,K23270|1,1,1,1,1,1,1,1,1|K00602,K00764,K01588,K01756,K01923,K01933,K01945,K11175,K23265,K23270|1274,506,123,2115,582,505,2041,1389,585,584|K01756 is present in multiple modules: M00048/M00049|
|M00049|A_muciniphila|Adenine ribonucleotide biosynthesis, IMP => ADP,ATP|Pathway modules|Nucleotide metabolism|Purine metabolism|"K01939 K01756 (K00939,K18532,K18533,K00944) K00940"|1.0|True|1.0|True|1.0|K00939,K01939|1,1|K00939,K00940,K01756,K01939|761,1759,2115,2303|K01756 is present in multiple modules: M00048/M00049,K00940 is present in multiple modules: M00049/M00050/M00053/M00052/M00938|
|M00050|A_muciniphila|Guanine ribonucleotide biosynthesis, IMP => GDP,GTP|Pathway modules|Nucleotide metabolism|Purine metabolism|"K00088 K01951 K00942 (K00940,K18533)"|1.0|True|1.0|True|1.0|K00088,K00942,K01951|1,1,2|K00088,K00940,K00942,K01951,K01951|961,1759,1598,960,2129|K00940 is present in multiple modules: M00049/M00050/M00053/M00052/M00938|
|M00053|A_muciniphila|Deoxyribonucleotide biosynthesis, ADP/GDP/CDP/UDP => dATP/dGTP/dCTP/dUTP|Pathway modules|Nucleotide metabolism|Purine metabolism|"(K00525+K00526,K10807+K10808) (K00940,K18533)"|0.5|False|0.75|True|NA|No enzymes unique to module|NA|K00525,K00940|2153,1759|K00940 is present in multiple modules: M00049/M00050/M00053/M00052/M00938,K00525 is present in multiple modules: M00053/M00938|

<details markdown="1"><summary>Show/Hide Code for getting Table 1</summary>
This output was obtained by running the following code:

```bash
head -n 1 A_muciniphila_modules.txt > table_1.txt; awk -F'\t' '$9 == "True" || $11 == "True"' A_muciniphila_modules.txt | grep -i 'biosynthesis' >> table_1.txt

# this part generates the table seen above
head -n 10 table_1.txt | anvi-script-as-markdown
```
</details>

Clearly, this is a very talented microbe. It can make a lot of things. 

Although the pathways shown above are all 'complete' in some way, there are still a few interesting things to mention here. First, you can see that several of the modules share enzymes via the statements in the `warnings` column -- for instance, K00940 (which is a nucleoside-diphosphate kinase) belongs to many of the purine metabolism pathways. This is something to keep in mind when interpreting completeness scores. If a completeness score is high (yet still less than 1.0) and all of the present enzymes are shared with another module, you might feel less confident that the pathway is relevant, considering that those enzymes may be used for other purposes in the cell. Enzymes that are unique to a given pathway, on the other hand, may give you more confidence in the pathway's relevance. You can see data about those in the columns named `enzymes_unique_to_module`, `proportion_unique_enzymes_present`, and `unique_enzymes_hit_counts`.

Consider the examples of M00950, which is a pathway for biotin biosynthesis. It has a completeness scores of 0.75 regardless of pathway interpretation strategy. But it doesn't have any unique enzymes; in fact, there seems to be a set of four modules that share a bunch of the same enzymes - `M00123/M00950/M00573/M00577`:

```bash
head -n 1 A_muciniphila_modules.txt; \
grep -e "^M00950" A_muciniphila_modules.txt # this searches for the lines that starts with M00950
```

If you look for the other three modules mentioned there, 

```bash
head -n 1 A_muciniphila_modules.txt; \ 
for m in M00123 M00573 M00577; do \
  # this searches for the lines that start with each module name \
  grep -e "^$m" A_muciniphila_modules.txt; \
done
```

You will see that they are _all_ slightly-different pathways for biotin biosynthesis that use the same 4-6 enzymes with different orders and branching structures. And because of that, it's difficult to say which one could be used by _A. muciniphila_. Maybe M00123, since is a bit shorter (with only 3 steps) so the 4 enzymes that were annotated in this genome were sufficient to make it 100% complete? But our annotation methodology is not always perfect -- what if we are just missing an annotation for one of the other enzymes? For instance, if we were unable to annotate a distant homolog of K25570 or K01906. The takeaway here is that paying attention to the distribution of shared or unique enzymes could help with properly interpreting this output.

Second, the stepwise and pathwise completeness metrics occasionally differ for the same pathway. Here is a table that includes some examples of this (with only a few of the columns included for brevity):

|**module**|**module_name**|**module_definition**|**stepwise_module_completeness**|**pathwise_module_completeness**|**enzyme_hits_in_module**|
|:--|:--|:--|:--|:--|:--|
|M00003|Gluconeogenesis, oxaloacetate => fructose-6P|"(K01596,K01610) K01689 (K01834,K15633,K15634,K15635) K00927 (K00134,K00150) K01803 ((K01623,K01624,K11645) (K03841,K02446,K11532,K01086,K04041),K01622)"|0.8571428571428571|0.875|K00134,K00927,K01596,K01624,K01689,K01689,K01803,K01834,K15633|
|M00009|Citrate cycle (TCA cycle, Krebs cycle)|"(K01647,K05942) (K01681,K01682) (K00031,K00030) ((K00164+K00658,K01616)+K00382,K00174+K00175-K00177-K00176) (K01902+K01903,K01899+K01900,K18118) (K00234+K00235+K00236+(K00237,K25801),K00239+K00240+K00241-(K00242,K18859,K18860),K00244+K00245+K00246-K00247) (K01676,K01679,K01677+K01678) (K00026,K00025,K00024,K00116)"|0.875|0.9583333333333333|K00024,K00031,K00239,K00240,K00241,K00382,K00658,K01647,K01676,K01681,K01900,K01902,K01903|
|M00011|Citrate cycle, second carbon oxidation, 2-oxoglutarate => oxaloacetate|"((K00164+K00658,K01616)+K00382,K00174+K00175-K00177-K00176) (K01902+K01903,K01899+K01900,K18118) (K00234+K00235+K00236+(K00237,K25801),K00239+K00240+K00241-(K00242,K18859,K18860),K00244+K00245+K00246-K00247) (K01676,K01679,K01677+K01678) (K00026,K00025,K00024,K00116)"|0.8|0.9333333333333332|K00024,K00239,K00240,K00241,K00382,K00658,K01676,K01900,K01902,K01903|
|M00004|Pentose phosphate pathway (Pentose phosphate cycle)|"(K13937,((K00036,K19243) (K01057,K07404))) K00033 K01783 (K01807,K01808) K00615 ((K00616 (K01810,K06859,K15916)),K13810)"|0.5|0.5714285714285714|K00615,K01783,K01808,K01810|
|M00308|Semi-phosphorylative Entner-Doudoroff pathway, gluconate => glycerate-3P|"K05308 K00874 K01625 (K00134 K00927,K00131,K18978)"|0.25|0.4|K00134,K00927|
|M00014|Glucuronate pathway (uronate pathway)|"K00012 ((K12447 K16190),(K00699 (K01195,K14756))) K00002 K13247 -- K03331 (K05351,K00008) K00854"|0.125|0.1111111111111111|K00012|
|M00855|Glycogen degradation, glycogen => glucose-6P|"(K00688,K16153) (K01196,((K00705,K22451) (K02438,K01200))) (K15779,K01835,K15778)"|0.6666666666666666|0.75|K00688,K00705,K01835|
|M00173|Reductive citrate cycle (Arnon-Buchanan cycle)|"(K00169+K00170+K00171+K00172,K03737) ((K01007,K01006) K01595,K01959+K01960,K01958) K00024 (K01676,K01679,K01677+K01678) (K00239+K00240-K00241-K00242,K00244+K00245-K00246-K00247,K18556+K18557+K18558+K18559+K18560) (K01902+K01903) (K00174+K00175-K00177-K00176) K00031 (K01681,K01682) (K15230+K15231,K15232+K15233 K15234)"|0.7|0.7272727272727273|K00024,K00031,K00239,K00240,K00241,K01006,K01676,K01681,K01902,K01903,K03737|

<details markdown="1"><summary>Show/Hide Code for getting Table 2</summary>
This output was obtained by running the following code:

```bash
awk -F'\t' '$8 != $10' A_muciniphila_modules.txt | cut -f 1,3,7,8,10,15 >> table_2.txt

# this part generates the table seen above
head -n 10 table_2.txt | anvi-script-as-markdown
```
</details>

This is more likely for pathways with complicated branching structure and alternative enzymes, since the stepwise strategy's "big-picture" view will combine a bunch of alternatives together into one step while the pathwise strategy considers several enzyme combos of variable length. In short, pathwise completeness is often more granular than stepwise completeness. You can see one example in the table -- module M00308 has only 25% stepwise completeness but 40% pathwise completeness. This pathway consists of 4 overall steps, with the last step having 4 alternatives -- one of which actually is made up of two enzymes that work sequentially. While the stepwise strategy evaluates the 4 steps overall (with only the last one being complete, for a completeness of 1/4 = 25%), the pathwise strategy takes into account that one possible enzyme combo requires 5 enzymes, and this is the one that is maximally-complete with a score of 2/5 = 40%.

Perhaps a better example of this is M00176, which has 50% stepwise completeness and ~89% pathwise completeness. 

```bash
grep M00176 A_muciniphila_modules.txt
```

If you look at the `module_definition` column for this pathway, you will see that the first step (as defined within the first set of parentheses) is complicated, with multiple alternative branches of different length. The entire pathway is essentially just two steps under the stepwise interpretation strategy because of that complexity. And since that first step is not fully complete, we get a stepwise completeness of only 1/2 = 0.5. The pathwise strategy works a bit better in this case, because it allows us to take into account the near-completeness of one of the many possible enzyme combinations. Which is a good reminder that different pathways may be more suited for certain interpretation strategies, so it can be useful to look at both metrics.

This doesn't always mean that the 'stepwise' metric will be more generous than the 'pathwise' one, but that is the most common scenario, since the stepwise strategy often ignores partially-complete steps while the pathwise one takes them into account. However, if the only complete steps in a pathway are the ones that have no alternative enzymes, and the other incomplete steps include multi-step alternatives, stepwise completeness will be greater than pathwise. You can check out modules M00014 and M00849 in the output file for examples of that scenario. M00014 is in the table above, and you can search for M00849 in the output file with `grep` if you are interested.

The `A_muciniphila_modules.txt` file is missing details of the individual paths (for pathwise interpretation) or steps (for stepwise) for each module. If you want to see this information, you can run the estimation program again and select the following output modes:

```bash
anvi-estimate-metabolism -c A_muciniphila-CONTIGS.db \
                         -O A_muciniphila \
                         --output-modes module_paths,module_steps
```

You'll get two output files, `A_muciniphila_module_paths.txt` and `A_muciniphila_module_steps.txt`, that each will show the metrics for individual paths or steps, respectively. For instance, here is each possible path through module M00176, which we discussed above:

|**module**|**genome_name**|**pathwise_module_completeness**|**pathwise_module_is_complete**|**path_id**|**path**|**path_completeness**|**annotated_enzymes_in_path**|
|:--|:--|:--|:--|:--|:--|:--|:--|
|M00176|A_muciniphila|0.8888888888888888|True|0|K13811,K00390,K00380+K00381|0.6666666666666666|[MISSING K13811],K00390,[MISSING K00380+K00381]|
|M00176|A_muciniphila|0.8888888888888888|True|1|K00958+K00860,K00390,K00380+K00381|0.6666666666666666|[MISSING K00958+K00860],K00390,[MISSING K00380+K00381]|
|M00176|A_muciniphila|0.8888888888888888|True|2|K00955+K00957,K00390,K00380+K00381|0.8333333333333334|[MISSING K00955+K00957],K00390,[MISSING K00380+K00381]|
|M00176|A_muciniphila|0.8888888888888888|True|3|K00956+K00957+K00860,K00390,K00380+K00381|0.8888888888888888|[MISSING K00956+K00957+K00860],K00390,[MISSING K00380+K00381]|
|M00176|A_muciniphila|0.8888888888888888|True|4|K13811,K05907,K00380+K00381|0.3333333333333333|[MISSING K13811],[MISSING K05907],[MISSING K00380+K00381]|
|M00176|A_muciniphila|0.8888888888888888|True|5|K13811,K00390,K00392|0.3333333333333333|[MISSING K13811],K00390,[MISSING K00392]|
|M00176|A_muciniphila|0.8888888888888888|True|6|K00958+K00860,K00390,K00392|0.3333333333333333|[MISSING K00958+K00860],K00390,[MISSING K00392]|
|M00176|A_muciniphila|0.8888888888888888|True|7|K00955+K00957,K00390,K00392|0.5|[MISSING K00955+K00957],K00390,[MISSING K00392]|
|M00176|A_muciniphila|0.8888888888888888|True|8|K00956+K00957+K00860,K00390,K00392|0.5555555555555555|[MISSING K00956+K00957+K00860],K00390,[MISSING K00392]|
|M00176|A_muciniphila|0.8888888888888888|True|9|K13811,K05907,K00392|0.0|[MISSING K13811],[MISSING K05907],[MISSING K00392]|
|M00616|A_muciniphila|0.4444444444444444|False|0|K02048+K02046+K02047+K02045,M00176|0.4444444444444444|[MISSING K02048+K02046+K02047+K02045],M00176|
|M00616|A_muciniphila|0.4444444444444444|False|1|K23163+K02046+K02047+K02045,M00176|0.4444444444444444|[MISSING K23163+K02046+K02047+K02045],M00176|

<details markdown="1"><summary>Show/Hide Code for getting Table 3</summary>
This output was obtained by running the following code:

```bash
head -n 1 A_muciniphila_module_paths.txt > table_3.txt; grep M00176 A_muciniphila_module_paths.txt >> table_3.txt

# this part generates the table seen above
cat table_3.txt | anvi-script-as-markdown
```
</details>

{:.warning}
There is a bug in anvio `v8` in which the output column `annotated_enzymes_in_path` in the `module_paths` output files incorrectly marks all enzyme complexes as "MISSING". The bug was fixed during the writing of this tutoral with commit [`a85c4f9`](https://github.com/merenlab/anvio/commit/a85c4f9cb44105af0b1e6d9bf0de1e96d20dc2c8), but since we expect most people to be using `v8` when they read this tutorial, we left the incorrect output as-is above so that it matches to what you see in your terminals. This is a good reminder for all users to be cautious and willing to question program outputs, since the people who wrote them are not infallible, and it is an especially good reminder to the author that she should update her tutorials more regularly to find these mistakes (lol) 🙃.

You can see that the path of maximal completeness (with `path_id` of 3) is 3 enzymes long (with 2 of those being enzyme complexes): `K00956+K00957+K00860,K00390,K00380+K00381`. It is 89% complete because 2 of those enzymes (K00390 and K00380+K00381) are fully annotated in the genome, while the third enzyme has only 2 of its 3 components annotated (K00956 and K00957), for a total completeness of (2/3 + 1 + 1)/3 = 0.8888888888888888. (The `annotated_enzymes_in_path` column is not reflecting these annotations properly due to the aforementioned bug, but it _should_ read `K00956,K00957,[MISSING K00860],K00390,K00380,K00381`, and it _will_ if you are using a later version of anvi'o).

In the other output file, you can see each step of module M00176, with only one out of the two registering as 'complete'.

|**module**|**genome_name**|**stepwise_module_completeness**|**stepwise_module_is_complete**|**step_id**|**step**|**step_completeness**|
|:--|:--|:--|:--|:--|:--|:--|
|M00176|A_muciniphila|0.5|False|0|(((K13811,K00958+K00860,K00955+K00957,K00956+K00957+K00860) K00390),(K13811 K05907))|0|
|M00176|A_muciniphila|0.5|False|1|(K00380+K00381,K00392)|1|

<details markdown="1"><summary>Show/Hide Code for getting Table 4</summary>
This output was obtained by running the following code:

```bash
head -n 1  A_muciniphila_module_steps.txt > table_4.txt; grep -e "^M00176" A_muciniphila_module_steps.txt >> table_4.txt

# this part generates the table seen above
cat table_4.txt | anvi-script-as-markdown
```
</details>

Hopefully it now makes sense why the final completeness score is so different between the pathwise and stepwise strategies.

Unfortunately, KEGG does not have a module for mucin degradation, so we won't see evidence of that metabolic capability here. This happens a lot with metabolisms that go beyond the basic ones essential for life, because KEGG is a manually curated resource that hasn't yet gotten to include a lot of the more niche metabolisms out there.

There is a way to get around this limitation, and that is to look at individual KOfam hits for KOs which do not belong to a particular metabolic module, but may be representative of a metabolism of interest. In the case of mucin degradation, the enzymes that break up mucin (by destroying the gylcosidic bonds between the mucin molecules) are called Glycoside hydrolases (GHs). The GH family includes many different types of proteins, including sialidases ([Tailford 2015](https://www.frontiersin.org/articles/10.3389/fgene.2015.00081/full)). There is a KO family for sialidases - [K01186](https://www.genome.jp/dbget-bin/www_bget?ko+K01186) - which means that we can look for genes annotated with this KO as evidence of this microbe's mucin degrading capabilities.

This requires us to obtain a different output type from `anvi-estimate-metabolism`: ["kofam_hits"](https://merenlab.org/software/anvio/help/main/artifacts/kegg-metabolism/#kofam-hits-mode) mode output files have an entry for each gene annotated with a KO in the contigs database, regardless of whether that KO belongs to a metabolic module or not.

This is how you get that file:

```bash
anvi-estimate-metabolism -c A_muciniphila-CONTIGS.db \
                         -O A_muciniphila \
                         --kegg-output-modes kofam_hits
```

<details markdown="1"><summary>Show/hide anvi'o development version </summary>
```bash
anvi-estimate-metabolism -c A_muciniphila-CONTIGS.db \
                         -O A_muciniphila \
                         --output-modes hits
```
</details>

And we can search for the sialidase KO by running the following code:

```bash
head -n 1 A_muciniphila_kofam_hits.txt; \
grep K01186 A_muciniphila_kofam_hits.txt
```

<details markdown="1"><summary>Show/hide anvi'o development version </summary>
```bash
head -n 1 A_muciniphila_hits.txt; \
grep K01186 A_muciniphila_hits.txt
```
</details>

You should see the following output:

unique_id | genome_name | ko | gene_caller_id | contig | modules_with_ko | ko_definition
:---|:---|:---|:---|:---|:---|:---|
1029 | A_muciniphila | K01186 | 678 | c_000000000001 | None | sialidase-1 [EC:3.2.1.18]
1030 | A_muciniphila | K01186 | 2015 | c_000000000001 | None | sialidase-1 [EC:3.2.1.18]

We already know that this organism can degrade mucin, so it is not surprising that there are two copies of the sialidase enzyme encoded in this genome.

## Metabolism estimation and enrichment on a real-world dataset

Now that we know how to work with this suite of programs, let's apply them to a larger set of genomes.

The data we'll be using for this is a real dataset from one of our recent studies, ["Metabolic competency drives microbial colonization and resilience in health and disease”](https://doi.org/10.1101/2021.03.02.433653) by Watson et al. In fact, this post is doing double-duty as a reproducible workflow for one of the analyses in that study. :) The rest of the reproducible workflow can be found [here](https://merenlab.org/data/fmt-gut-colonization/) for anyone who is interested in how we did the other analyses discussed in the paper.

{:.notice}
This part of the tutorial **only** works with anvio-7.1 and not with the current dev version of anvi'o. The reason is KEGG database version compatibility. When you run `anvi-setup-kegg-kofams` with v7.1, anvi'o will download the latest snapshot of KEGG at the time of v7.1 release (v2020-12-23). But if you are using the development version of anvi'o, every user *could* have different version of the KEGG database depending on when you ran `anvi-setup-kegg-kofams`. This makes it more difficult to share annotated contigs.db between collaborators. More information [here](https://anvio.org/help/main/programs/anvi-setup-kegg-kofams/#how-do-i-share-this-data).

### A dataset of high- and low-fitness MAGs

You can download the [datapack](https://figshare.com/ndownloader/files/31120057) for this tutorial by running the following code:

```bash
wget https://figshare.com/ndownloader/files/31120057 -O FMT_MAGS_FOR_METABOLIC_ENRICHMENT.tar.gz
tar -xvf FMT_MAGS_FOR_METABOLIC_ENRICHMENT.tar.gz && cd FMT_MAGS_FOR_METABOLIC_ENRICHMENT/
```

This dataset includes anvi'o {% include ARTIFACT name="contigs-db" text="contigs databases" %} for 40 MAGs of gut microbes, labeled as either "high-fitness" or "low-fitness" according to their [colonization ability](https://merenlab.org/data/fmt-gut-colonization/#defining-colonization-success-and-failure) and prevalence in healthy gut metagenomes (there are 20 MAGs in each group). You can learn the full details of how and why we got them by reading the [study](https://doi.org/10.1101/2021.03.02.433653), but for the purposes of this mini-tutorial, here is what you need to know about these MAGs:

- they were binned from a co-assembly of **longitudinally-sampled gut metagenomes** taken from a **healthy adult who donated stool for fecal microbiota transplantation (FMT)**
- the **high-fitness MAGs** represent microbial **populations that were able to colonize all FMT recipients** who received stool from this donor. They were detected (with sufficient abundance) in recipient gut metagenomes at least 7 days (and up to 1 year) post-FMT
- the **low-fitness MAGs** represent **populations that were NOT able to colonize** FMT recipients who received stool from this donor. They were not detected in recipient gut metagenomes post-FMT
- the **high-fitness MAGs** were the 20 MAGs with the **highest prevalence in gut metagenomes from healthy Canadian adults**, while the **low-fitness MAGs were less prevalent**

The "high-fitness" MAGs were labeled that way because we hypothesized that something about these populations increased their fitness such that they were able to survive the stress of being transplanted into new gut environments and become long-term colonizers (in comparison to the "low-fitness" populations that were unable to survive for long in the recipients). In our study, we sought to learn what distinguishes these two groups from each other - what enables one group to survive while the other does not? What do the "high-fitness" populations have that the "low-fitness" ones don't (or vice versa)?

One way to answer this question is to look at the metabolic potential, or genomically-encoded metabolic capabilities, of these MAGs. Luckily, we have just learned how to do that.

### Estimating metabolism for these MAGs

You can run {% include PROGRAM name="anvi-estimate-metabolism" %} on all 40 MAGs in this dataset at once by utilizing the {% include ARTIFACT name="external-genomes" text="external genomes file" %} provided in the datapack, as shown below:

```bash
anvi-estimate-metabolism -e external-genomes.txt \
                         -O FMT_MAG_metabolism
```

This will give you one [modules mode](https://merenlab.org/software/anvio/help/main/artifacts/kegg-metabolism/#modules-mode) output file called `FMT_MAG_metabolism_modules.txt`, which describes the completeness of each KEGG Module in each MAG.

You could look through this file manually to see what metabolisms are encoded in these genomes, but it will be difficult to tell which pathways best distinguish between our two groups of MAGs. For that task, we need the help of a statistical test.

### Finding enriched metabolic pathways

Anvi'o has a program for computing enrichment of metabolic modules in different groups of genomes, and that program is {% include PROGRAM name="anvi-compute-metabolic-enrichment" %}. It will compute an enrichment score and a list of associated groups for each module that is present in at least one genome (modules are considered 'present' in a genome if they have a high enough completeness score in that genome).

To run this program, you must provide it with the modules mode output file we generated in the last section, as well as a {% include ARTIFACT name="groups-txt" %} file that matches each genome to its group name. The latter file is provided in the datapack, so you don't need to generate it yourself. Here is the code to run the enrichment program:

```bash
anvi-compute-metabolic-enrichment -M FMT_MAG_metabolism_modules.txt \
                                  -G MAG_groups.txt \
                                  -o metabolic-enrichment.txt
```

The result will be a {% include ARTIFACT name="functional-enrichment-txt" %} file describing the name, enrichment score, associated groups, and other information about each metabolic module.

Here are the first 10 lines of this file (scroll to the right to see more columns):

KEGG_MODULE | enrichment_score | unadjusted_p_value | adjusted_q_value | associated_groups | accession | sample_ids | p_LOW_FITNESS | N_LOW_FITNESS | p_HIG_FITNESS | N_HIG_FITNESS
:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
Isoleucine biosynthesis, threonine => 2-oxobutanoate => isoleucine | 22.556406615904528 | 2.0406287012176094e-6 | 1.018150573124383e-5 | HIG_FITNESS | M00570 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00101,KC_MAG_00110,KC_MAG_00120,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00176,KC_MAG_00178 | 0.15 | 20 | 0.9 | 20
Valine/isoleucine biosynthesis, pyruvate => valine / 2-oxobutanoate => isoleucine | 22.556406615904528 | 2.0406287012176094e-6 | 1.018150573124383e-5 | HIG_FITNESS | M00019 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00101,KC_MAG_00110,KC_MAG_00120,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00176,KC_MAG_00178 | 0.15 | 20 | 0.9 | 20
Adenine ribonucleotide biosynthesis, IMP => ADP,ATP | 21.53846258298333 | 3.4680278204806215e-6 | 1.1535577282062716e-5 | HIG_FITNESS | M00049 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00093,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00121,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00162,KC_MAG_00176,KC_MAG_00178 | 0.3 | 20 | 1 | 20
Pentose phosphate pathway, non-oxidative phase, fructose 6P => ribose 5P | 20.416675803269 | 6.22846903390889e-6 | 1.5538150847280372e-5 | HIG_FITNESS | M00007 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00017,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00121,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00162,KC_MAG_00178 | 0.25 | 20 | 0.95 | 20
C5 isoprenoid biosynthesis, non-mevalonate pathway | 18.026729736369713 | 2.178249150838522e-5 | 3.6227162410137385e-5 | HIG_FITNESS | M00096 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00017,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00121,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00162,KC_MAG_00176,KC_MAG_00178 | 0.3 | 20 | 0.95 | 20
Inosine monophosphate biosynthesis, PRPP + glutamine => IMP | 18.026729736369713 | 2.178249150838522e-5 | 3.6227162410137385e-5 | HIG_FITNESS | M00048 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00093,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00121,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00162,KC_MAG_00176,KC_MAG_00178 | 0.3 | 20 | 0.95 | 20
F-type ATPase, prokaryotes and chloroplasts | 17.289003389888027 | 3.210393689132397e-5 | 4.5765505959647144e-5 | HIG_FITNESS | M00157 | KC_MAG_00007,KC_MAG_00017,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00093,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00176,KC_MAG_00178 | 0.25 | 20 | 0.9 | 20
Coenzyme A biosynthesis, pantothenate => CoA | 15.824346512060853 | 6.950242168239118e-5 | 8.669378513988786e-5 | HIG_FITNESS | M00120 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00017,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00093,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00121,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00161,KC_MAG_00162,KC_MAG_00178 | 0.35 | 20 | 0.95 | 20
Guanine ribonucleotide biosynthesis IMP => GDP,GTP | 15.172414714793092 | 9.812648253560582e-5 | 1.0728293795381548e-4 | HIG_FITNESS | M00050 | KC_MAG_00002,KC_MAG_00007,KC_MAG_00017,KC_MAG_00022,KC_MAG_00051,KC_MAG_00055,KC_MAG_00057,KC_MAG_00061,KC_MAG_00062,KC_MAG_00080,KC_MAG_00093,KC_MAG_00101,KC_MAG_00110,KC_MAG_00116,KC_MAG_00120,KC_MAG_00121,KC_MAG_00122,KC_MAG_00126,KC_MAG_00137,KC_MAG_00143,KC_MAG_00145,KC_MAG_00147,KC_MAG_00151,KC_MAG_00155,KC_MAG_00157,KC_MAG_00161,KC_MAG_00162,KC_MAG_00176,KC_MAG_00178 | 0.45 | 20 | 1 | 20

The modules are organized so that those with higher enrichment scores (and lower significance values) are at the top. You can filter the output using the `unadjusted_p_value` or `adjusted_q_value` columns to make sure you only keep the modules that are most enriched in one group or another (the `adjusted_q_value` column is arguably the best one to filter with as this significance value is adjusted for multiple hypothesis testing). For example, in our study we considered any metabolic module with a q-value less than 0.05 to be enriched in its associated group, as long as it was also at least 75% complete in at least 50% of the group members.

The modules in the partial output above represent the metabolic pathways with the highest enrichment scores in our MAGs. All of the modules shown passed our filtering criteria - they have q-values less than 0.05 and are present in at least 10/20 of their associated group. In total, our group found 33 different KEGG modules that were enriched in these MAGs, including the above 9. You can find out which modules these are by taking a look at our [supplementary table 7](https://figshare.com/articles/dataset/Supplementary_Tables/14138405/2?file=26827175), sheet (d).

You will see that all 9 of the above modules are enriched in the "high-fitness" group of MAGs - and indeed, all 33 modules that passed our filters were enriched in this group. You might also notice that most of the enriched modules are biosynthesis pathways, particularly of amino acids and essential cofactors. As we discuss in the paper, this indicated to us that "high-fitness" populations were successful in colonizing the FMT recipients because they were metabolically independent - that is, they were able to individually produce the molecules they needed to survive and grow, and thus had a competitive advantage compared to the "low-fitness" populations, which generally did not have these biosynthesis capabilities.

## Conclusion

This metabolism estimation and enrichment analysis allowed us to form a clear hypothesis as to why some microbial populations were able to colonize FMT recipients while others weren't. For a much more robust discussion of the analysis and our conclusions, please read our [study](https://doi.org/10.1101/2021.03.02.433653).

We hope the mini-tutorial above helped you to learn how to run metabolism analyses in anvi'o on your own data. If anything was not clear, please feel free to comment below or reach out to us on Discord with questions. Thanks for reading!

{% include _join-anvio-discord.html %}