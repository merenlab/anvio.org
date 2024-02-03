---
layout: program
title: anvi-get-sequences-for-hmm-hits
excerpt: An anvi'o program. Get sequences for HMM hits from many inputs.
categories: [anvio]
comments: false
redirect_from: /m/anvi-get-sequences-for-hmm-hits
image:
  featurerelative: ../../../images/header.png
  display: true
---

Get sequences for HMM hits from many inputs.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[concatenated-gene-alignment-fasta](../../artifacts/concatenated-gene-alignment-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Usage


This program can work with anvi'o <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span>, or <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> files to return sequences for HMM hits identified through the default anvi'o <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s (such as the domain-specific single-copy core genes) or user-defined <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span>s (such as HMMs for specific antibiotic resistance gene families or any other targets).

Using it with single-copy core genes in default anvi'o HMMs make it a very versatile tool for phylogenomics as the user can define specific sets of genes to be aligned and concatenated.


### Learn available HMM sources

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;&#45;list&#45;hmm&#45;sources

AVAILABLE HMM SOURCES
&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;=
&#42; 'Bacteria_71' (type: singlecopy; num genes: 71)
&#42; 'Archaea_76' (type: singlecopy; num genes: 76)
&#42; 'Protista_83' (type: singlecopy; num genes: 83)
&#42; 'Ribosomal_RNAs' (type: Ribosomal_RNAs; num genes: 12)
</div>

### Get all sequences in a given HMM source

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

### Learn available genes in a given HMM source

Please note that the flag `--list-available-gene-names` will give you the list of genes in an **HMM collection** (for example, for `Bacteria_71` in the following use case), and it will not give you the list of genes in your genomes or metagenomes that are matching to them. You can generate a table of HMMs across your genomes or metagenomes with another program, <span class="artifact-p">[anvi-script-gen-hmm-hits-matrix-across-genomes](/help/main/programs/anvi-script-gen-hmm-hits-matrix-across-genomes)</span>.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;&#45;list&#45;available&#45;gene&#45;names

&#42; Bacteria_71 [type: singlecopy]: ADK, AICARFT_IMPCHas, ATP&#45;synt, ATP&#45;synt_A,
Chorismate_synt, EF_TS, Exonuc_VII_L, GrpE, Ham1p_like, IPPT, OSCP, PGK,
Pept_tRNA_hydro, RBFA, RNA_pol_L, RNA_pol_Rpb6, RRF, RecO_C, Ribonuclease_P,
Ribosom_S12_S23, Ribosomal_L1, Ribosomal_L13, Ribosomal_L14, Ribosomal_L16,
Ribosomal_L17, Ribosomal_L18p, Ribosomal_L19, Ribosomal_L2, Ribosomal_L20,
Ribosomal_L21p, Ribosomal_L22, Ribosomal_L23, Ribosomal_L27, Ribosomal_L27A,
Ribosomal_L28, Ribosomal_L29, Ribosomal_L3, Ribosomal_L32p, Ribosomal_L35p,
Ribosomal_L4, Ribosomal_L5, Ribosomal_L6, Ribosomal_L9_C, Ribosomal_S10,
Ribosomal_S11, Ribosomal_S13, Ribosomal_S15, Ribosomal_S16, Ribosomal_S17,
Ribosomal_S19, Ribosomal_S2, Ribosomal_S20p, Ribosomal_S3_C, Ribosomal_S6,
Ribosomal_S7, Ribosomal_S8, Ribosomal_S9, RsfS, RuvX, SecE, SecG, SecY, SmpB,
TsaE, UPF0054, YajC, eIF&#45;1a, ribosomal_L24, tRNA&#45;synt_1d, tRNA_m1G_MT,
Adenylsucc_synt
</div>

### Get sequences for some sequences in a given HMM source

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;&#45;gene&#45;names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

### Get HMM hits in bins of a collection

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;&#45;gene&#45;names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

### Get amino acid sequences for HMM hits

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;&#45;gene&#45;names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                &#45;&#45;get&#45;aa&#45;sequences \
                                &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

### Get HMM hits independently aligned and concatenated

The resulting file can be used for phylogenomics analyses via <span class="artifact-p">[anvi-gen-phylogenomic-tree](/help/main/programs/anvi-gen-phylogenomic-tree)</span> or through more sophisticated tools for curating alignments and computing trees.

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                                &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span>
                                &#45;&#45;hmm&#45;source Bacteria_71 \
                                &#45;&#45;gene&#45;names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                &#45;&#45;get&#45;aa&#45;sequences \
                                &#45;&#45;concatenate&#45;genes \
                                &#45;&#45;return&#45;best&#45;hit
                                &#45;o <span class="artifact&#45;n">[genes&#45;fasta](/help/main/artifacts/genes&#45;fasta)</span>
</div>

Please note teh presence of a new flag in this particular command line, `--return-best-hit`. This flag is most appropriate if one wishes to perform phylogenomic analyses, which ensures that for any given protein family, there will be only one gene reported from a given genome. This is necessary due to the nature of the data that goes into phylogenomic analyses, where typically multiple single-copy core genes from each genome are individually aligned and the results are concatenated into a super matrix for tree construction. This requirement will be violated *if* for a given single-copy core gene (SCG) family any given genome in the dataset has two or more genes rather than one, which can happen for a variety of technical or biological reasons. In that case, we need to pick only one of those genes, which is exactly what `--return-best-hit` flag does for us. Let's say we have two `Ribosomal_L3` gene hits in a given genome. When declared, this flag will choose the `Ribosomal_L3` gene that has the most significant hit given the hidden Markov model for `Ribosomal_L3` that was used to search for `Ribosomal_L3` genes in genomes. In cases where genome quality is sufficient and contamination is not a considerable risk, this step will choose the right hit as in many cases of multiple hits for SCGs the additional ones will have very low significance. Essentially, `--return-best-hit` makes sure you are working with the most appropriate genes for phylogenomics given the HMM modesl and significance scores for your matches in your genomes.

## Tips

### Performance optimization for aligners by passing additional params

When `--concatenate-genes` flag is used for phylogenomics applications, <span class="artifact-p">[anvi-gen-phylogenomic-tree](/help/main/programs/anvi-gen-phylogenomic-tree)</span> relies on sequence alignment using `muscle` by default. For very large number of sequences this step may fail due to various reasons, such as running out of memory, exceeding the time allocated for the job, etc. If you are having such performance issues, you may want to pass additional parameters to the aligner. For this, you can use BASH environmental variables. For instance, if you wish `muscle` to do only two iterations of alignment and stop after, you can pass that request to the anvi'o driver for `muscle` the following way by exporting a shell varaible called `MUSCLE_PARAMS`:

``` bash
# export a shell variable with additional params you learned from
# the help menu of muscle:
export MUSCLE_PARAMS="-maxiters 2"

# then run anvi-get-sequences-for-hmm-hits exactly the same way
anvi-get-sequences-for-hmm-hits (...)
```

If you are trying to make sure things are going the way you expect, feel free to turn on the debug outputs by adding `--debug` to your command line. This will allow you to see exactly what commands are running behind hte scenes, and will keep the temporary directories for each alignment so you can find the log files in them to see raw outputs from `muscle`. See the anvi'o GitHub issue [#2200](https://github.com/merenlab/anvio/issues/2200) for an extreme case and example ways to debug the process with example commands and outputs.

### Get amino acid seqeunces for each gene in a model individually

If you are interested in recovering HMM hits for each gene in a model anvi'o knows about as a separate FASTA file, you can do it with a `for` loop easily. After learning your genes of interest, first run this to make sure your terminal environment knows about them (this is an example with a few genes from the HMM source `Bacteria_71`, but you can add as many genes as you like and use any HMM source anvi'o recognizes, of course):

``` bash
export genes="Ribosomal_L22 Ribosomal_L23 Ribosomal_L27 Ribosomal_L27A Ribosomal_L28"
export hmm_source="Bacteria_71"
```

Then, you can run the program in a loop to have your FASTA files:

``` bash
for gene in $genes
do
    anvi-get-sequences-for-hmm-hits -c CONTIGS.db \
                                    --hmm-source $hmm_source \
                                    --gene-name $gene \
                                    -o ${hmm_source}-${gene}.fa
done
```

Voila!

### Exercise with the program or test scenarios

You can play with this program using the anvi'o data pack for the [infant gut data](/tutorials/infant-gut) and by replacing the parameters above with appropriate ones in the following commands.

Download the latest version of the data from here: [doi:10.6084/m9.figshare.3502445](https://doi.org/10.6084/m9.figshare.3502445)

Then, unpack it:

<div class="codeblock" markdown="1">
tar &#45;zxvf INFANTGUTTUTORIAL.tar.gz && cd INFANT&#45;GUT&#45;TUTORIAL
</div>

Finally, import the collection `merens`:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;import&#45;collection](/help/main/programs/anvi&#45;import&#45;collection)</span> additional&#45;files/collections/merens.txt \
                       &#45;p PROFILE.db \
                       &#45;c CONTIGS.db \
                       &#45;C merens
</div>

Then run the program using the `PROFILE.db`, `CONTIGS.db`, and optionally the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> `merens` to try some of the commands shown on this page.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-get-sequences-for-hmm-hits.md) to update this information.


## Additional Resources


* [A tutorial on anvi&#x27;o phylogenomics workflow](http://merenlab.org/2017/06/07/phylogenomics/)

* [A detailed application of phylogenomics to place a new genome on a tree](http://merenlab.org/data/parcubacterium-in-hbcfdna/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-get-sequences-for-hmm-hits) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
