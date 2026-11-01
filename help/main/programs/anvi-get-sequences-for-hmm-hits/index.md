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



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-source](../../artifacts/hmm-source) <img src="../../images/icons/HMM.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[hmm-hits](../../artifacts/hmm-hits) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[genes-fasta](../../artifacts/genes-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>



## Can provide

<p style="text-align: left" markdown="1"><span class="artifact-p">[concatenated-gene-alignment-fasta](../../artifacts/concatenated-gene-alignment-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


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

Please note that the flag `--list-available-gene-names` will give you the list of genes in an **HMM collection** (for example, for `Bacteria_71` in the following use case), and it will not give you the list of genes in your genomes or metagenomes that are matching to them. You can generate a table of HMMs across your genomes or metagenomes with another program, <span class="artifact-p">[anvi-gen-hmm-hits-matrix](/help/main/programs/anvi-gen-hmm-hits-matrix)</span>.

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

### Change the formatting of the output FASTA files

Please note that this program allows you to format the deflines of the resulting FASTA file to a great extent whenever possible. For this, it uses a set of previously-defined variables you can use to define a template of your liking. You can learn about the available variables, you can include the following flag in your command:

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;hmm&#45;hits &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                                &#45;&#45;list&#45;defline&#45;variables
</div>

Which will give you an output similar to the one below:

```
WARNING
===============================================
Here are the variables you can use to provide a user-defined defline template:

* {gene_name}
* {gene_callers_id}
* {contig_name}
* {gene_unique_id}
* {bin_name}
* {source}
* {e_value}
* {start}
* {stop}
* {length}

Remember, by default, anvi'o will use the following template to format the
deflines of FASTA files it produces whenever possible.

{gene_name}___{gene_unique_id} bin_id:{bin_name}|source:{source}|e_value:{e_value}|contig:{contig_name}|gene_callers_id:{gene_callers_id}|start:{start}|stop:{stop}|length:{length}
```

With this default template, <span class="artifact-p">[anvi-get-sequences-for-hmm-hits](/help/main/programs/anvi-get-sequences-for-hmm-hits)</span> will provide a FASTA file with quite a comprehensive defline. The following examples use the data pack for the Infant Gut Dataset, after running the following command in the data directory:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;import&#45;collection](/help/main/programs/anvi&#45;import&#45;collection)</span> additional&#45;files/collections/merens.txt \
                           &#45;p PROFILE.db \
                           &#45;c CONTIGS.db \
                           &#45;C merens
</div>

Here are a few commands that show how different deflines impact the FASTA output, starting with the default defline format:

```
anvi-get-sequences-for-hmm-hits -c CONTIGS.db \
                                -o OUTPUT.fa
```

```
>RsfS___Bacteria_71___a2cb9835d40f1ea052bc7aea2ef8c12924c76f4fa00e00b69f7dbecb bin_id:CONTIGS|source:Bacteria_71|e_value:2.6e-14|contig:Day17a_QCcontig1|gene_callers_id:22|start:17642|stop:17792|length:150
>SecE___Bacteria_71___fe4bf2883dfee62dcf2ed93acde8df5de5be421675d7231997dc5f91 bin_id:CONTIGS|source:Bacteria_71|e_value:3.6e-22|contig:Day17a_QCcontig1|gene_callers_id:105|start:95904|stop:96075|length:171
>Ribosomal_L1___Bacteria_71___9a3cc2232443c0c0e995fef5f76f34d52fb111476e0e2fa2dbe0f09e bin_id:CONTIGS|source:Bacteria_71|e_value:8.4e-59|contig:Day17a_QCcontig1|gene_callers_id:116|start:106378|stop:107068|length:690
>SecG___Bacteria_71___d23b8716a0b03543405ac9835ce127b981fc1c067d9b1e48edf9d861 bin_id:CONTIGS|source:Bacteria_71|e_value:1e-20|contig:Day17a_QCcontig1|gene_callers_id:205|start:200881|stop:201118|length:237
>SmpB___Bacteria_71___a95dd711a5d10cfb4bd9ca3d836aed077d35647161d4908a9c8252fe bin_id:CONTIGS|source:Bacteria_71|e_value:2.8e-66|contig:Day17a_QCcontig1|gene_callers_id:208|start:204418|stop:204883|length:465
```

---

```
anvi-get-sequences-for-hmm-hits -c CONTIGS.db \
                                -o OUTPUT.fa \
                                -p PROFILE.db \
                                -C merens
```

```
>RsfS___Bacteria_71___a2cb9835d40f1ea052bc7aea2ef8c12924c76f4fa00e00b69f7dbecb bin_id:E_facealis|source:Bacteria_71|e_value:2.6e-14|contig:Day17a_QCcontig1|gene_callers_id:22|start:17642|stop:17792|length:150
>SecE___Bacteria_71___fe4bf2883dfee62dcf2ed93acde8df5de5be421675d7231997dc5f91 bin_id:E_facealis|source:Bacteria_71|e_value:3.6e-22|contig:Day17a_QCcontig1|gene_callers_id:105|start:95904|stop:96075|length:171
>Ribosomal_L1___Bacteria_71___9a3cc2232443c0c0e995fef5f76f34d52fb111476e0e2fa2dbe0f09e bin_id:E_facealis|source:Bacteria_71|e_value:8.4e-59|contig:Day17a_QCcontig1|gene_callers_id:116|start:106378|stop:107068|length:690
>SecG___Bacteria_71___d23b8716a0b03543405ac9835ce127b981fc1c067d9b1e48edf9d861 bin_id:E_facealis|source:Bacteria_71|e_value:1e-20|contig:Day17a_QCcontig1|gene_callers_id:205|start:200881|stop:201118|length:237
>SmpB___Bacteria_71___a95dd711a5d10cfb4bd9ca3d836aed077d35647161d4908a9c8252fe bin_id:E_facealis|source:Bacteria_71|e_value:2.8e-66|contig:Day17a_QCcontig1|gene_callers_id:208|start:204418|stop:204883|length:465
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --hmm-source Bacteria_71 \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3
```

```
>Ribosomal_L27___Bacteria_71___477a28bece0b76ebaef1a9415cbd15b422ec581619e437a79f227f2f bin_id:E_facealis|source:Bacteria_71|e_value:4.1e-37|contig:Day17a_QCcontig2|gene_callers_id:1130|start:86504|stop:86792|length:288
>Ribosomal_L3___Bacteria_71___611453ec6ee187ebae05815acd0d20efa3be77b791a69055aa9ae776 bin_id:S_epidermidis|source:Bacteria_71|e_value:1.4e-19|contig:Day17a_QCcontig7|gene_callers_id:2339|start:19929|stop:20592|length:663
>Ribosomal_L3___Bacteria_71___3e44e2b950f135b147b3a5ca7813581228c3d91c7d2cb69c8543237d bin_id:E_facealis|source:Bacteria_71|e_value:1.5e-20|contig:Day17a_QCcontig16|gene_callers_id:3080|start:229935|stop:230565|length:630
>Ribosomal_L3___Bacteria_71___0d18b80b3c3eb77af3683e64fa4278ac08929c53c8a4593c205b8849 bin_id:P_rhinitidis|source:Bacteria_71|e_value:9.1e-17|contig:Day17a_QCcontig21|gene_callers_id:3313|start:54724|stop:55357|length:633
>Ribosomal_L28___Bacteria_71___e36828b18440c369bcf880a267cea6d55fa65cf1b0b1d66c8784901a bin_id:E_facealis|source:Bacteria_71|e_value:2.2e-24|contig:Day17a_QCcontig23|gene_callers_id:3633|start:124223|stop:124412|length:189
>Ribosomal_L27___Bacteria_71___bd93789ee7b2f24fefa4ddfc0949be06573a6f6f3cdc85a6ada54323 bin_id:S_epidermidis|source:Bacteria_71|e_value:1e-36|contig:Day17a_QCcontig29|gene_callers_id:4151|start:9097|stop:9382|length:285
>Ribosomal_L27___Bacteria_71___2b6e4f252a14a16375d107711cde0363f266f1981fa353a2421fd989 bin_id:S_aureus|source:Bacteria_71|e_value:7.2e-37|contig:Day17a_QCcontig56|gene_callers_id:6123|start:46552|stop:46837|length:285
>Ribosomal_L27___Bacteria_71___51f9c99d5530e7342657805b778105e8e75c178b1780140163e528e3 bin_id:P_rhinitidis|source:Bacteria_71|e_value:3.8e-36|contig:Day17a_QCcontig58|gene_callers_id:6253|start:92104|stop:92401|length:297
>Ribosomal_L28___Bacteria_71___4be054e14a9cb7f80dea306fbbcb391a195acda0a705853b6b010a2e bin_id:P_avidum|source:Bacteria_71|e_value:1.7e-26|contig:Day17a_QCcontig60|gene_callers_id:6345|start:76696|stop:76933|length:237
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                --defline-format "{"
```

```
Init .........................................: 4451 splits in 13 bin(s)


Config Error: Your f-string syntax is not working for anvi'o :/ Perhaps you forgot to open or
              close a curly bracket?
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                --defline-format "{lol}"
```

```
Config Error: Some of the variables in your f-string does not occur in the source dictionary
              :/ Here is the list of those that are not matching to anything: lol. In the
              meantime, these are the known keys: gene_name, gene_callers_id, contig_name,
              gene_unique_id, bin_name, source, e_value, start, stop, length.
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --hmm-source Bacteria_71 \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                --return-best-hit \
                                --defline-format "{bin_name}_{gene_callers_id}"
```

```
>E_facealis_1130
>S_epidermidis_2339
>E_facealis_3080
>P_rhinitidis_3313
>E_facealis_3633
>S_epidermidis_4151
>S_aureus_6123
>P_rhinitidis_6253
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --hmm-source Bacteria_71 \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                --return-best-hit \
                                --defline-format "{bin_name}_{source}_{gene_callers_id}"
```

```
>E_facealis_Bacteria_71_1130
>S_epidermidis_Bacteria_71_2339
>E_facealis_Bacteria_71_3080
>P_rhinitidis_Bacteria_71_3313
```

---

```
anvi-get-sequences-for-hmm-hits -p PROFILE.db \
                                -c CONTIGS.db \
                                -C merens \
                                -o OUTPUT.fa \
                                --hmm-source Bacteria_71 \
                                --gene-names Ribosomal_L27,Ribosomal_L28,Ribosomal_L3 \
                                --return-best-hit \
                                --defline-format "{gene_name}_{gene_callers_id} source:{source}|contig:{contig_name}|start:{start}|stop:{stop}"
```

```
>Ribosomal_L27_1130 source:Bacteria_71|contig:Day17a_QCcontig2|start:86504|stop:86792
>Ribosomal_L3_2339 source:Bacteria_71|contig:Day17a_QCcontig7|start:19929|stop:20592
>Ribosomal_L3_3080 source:Bacteria_71|contig:Day17a_QCcontig16|start:229935|stop:230565
>Ribosomal_L3_3313 source:Bacteria_71|contig:Day17a_QCcontig21|start:54724|stop:55357
```

---

Please note that anvi'o will not check whether your defline format will result in FASTA entries with identical deflines.


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

If you want to keep only the strongest hit for each gene within a *contig* you can instead use `--return-best-hit-per-contig`. This flag trims redundant hits on the same contig (per gene name and HMM source) while leaving hits on other contigs untouched. This flag behaves independently of `--return-best-hit` flag. But you can combine the two if you ultimately need a single representative per genome/bin. Please be careful using this flag, as it may remove legitimate copies of genes that are meant to be multi-copy or be present in your results (such as transfer RNAs), and the behavior of the flag will dependend on the nature of the <span class="artifact-n">[hmm-source](/help/main/artifacts/hmm-source)</span> being used.

## Tips

### Performance optimization for aligners by passing additional params

When `--concatenate-genes` flag is used for phylogenomics applications, <span class="artifact-p">[anvi-gen-phylogenomic-tree](/help/main/programs/anvi-gen-phylogenomic-tree)</span> relies on sequence alignment using `muscle` by default. For very large number of sequences this step may fail due to various reasons, such as running out of memory, exceeding the time allocated for the job, etc. If you are having such performance issues, you may want to pass additional parameters to the aligner. For this, you can use BASH environmental variables. For instance, if you wish MUSCLE 5 to use the Super5 algorithm, you can pass that request to the anvi'o driver for `muscle` the following way by exporting a shell variable called `MUSCLE_PARAMS`:

``` bash
# export a shell variable with additional params you learned from
# the help menu of muscle:
export MUSCLE_PARAMS="-super5"

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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-get-sequences-for-hmm-hits`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-get-sequences-for-hmm-hits [-h] [-c CONTIGS_DB] [-p PROFILE_DB] [-C COLLECTION_NAME] [-b BIN_NAME] [-B FILE_PATH] [-e FILE_PATH] [-i FILE_PATH] [--hmm-sources HMM_ANNOTATION_SOURCE[S]] [--gene-names HMM HIT NAME] [-l] [-L] [-o FILE_PATH] [--no-wrap] [--list-defline-variables] [--defline-format F-STRING] [--get-aa-sequences] [--concatenate-genes] [--partition-file FILE_PATH] [--max-num-genes-missing-from-bin INTEGER] [--min-num-bins-gene-occurs INTEGER] [--align-with ALIGNER] [--separator STRING] [--return-best-hit] [--return-best-hit-per-contig] [--ignore-genes-longer-than MAX_LENGTH] [--unique-genes] [--skip-checking-genome-hashes] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-input-option-1-contigs-db">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #1: CONTIGS DB</span> <span class="parameter-group-description">There are multiple ways to access to sequences. Your first option is to provide a contigs database, and call it a day. In this case the program will return you everything from it.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-2-contigs-db-proflie-db">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #2: CONTIGS DB + PROFLIE DB</span> <span class="parameter-group-description">You can also work with anvi&#x27;o profile databases and collections stored in them. If you go this way, you still will need to provide a contigs database. If you just specify a collection name, you will get hits from every bin in it. You can also use the bin name or bin ids file parameters to specify your interest more precisely.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
<dt class="parameter" id="parameter-bin_id"><code class="parameter-flags">-b, --bin-id</code> <code class="parameter-metavar">BIN_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Bin name you are interested in.</span></dd>
<dt class="parameter" id="parameter-bin_ids_file"><code class="parameter-flags">-B, --bin-ids-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Text file for bins (each line should be a unique bin id).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-input-option-3-intexternal-genomes-file">
<header class="parameter-group-header"><span class="parameter-group-title">INPUT OPTION #3: INT/EXTERNAL GENOMES FILE</span> <span class="parameter-group-description">Yes. You can alternatively use as input an internal or external genomes file, or both of them together. If you have multiple contigs databases without any profile database, you can use the external genomes file. So if you just have a bunch of FASTA files and nothing else, this is what you need. In contrast, if you want to access to genes in bins described in collections stored in anvi&#x27;o profile databases, then you can use internal genomes file route. Or you can mix the two, because why not. There is not much room for excuses here.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
<dt class="parameter" id="parameter-internal_genomes"><code class="parameter-flags">-i, --internal-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A five-column TAB-delimited flat text file. The header line must contain these columns: &#x27;name&#x27;, &#x27;bin_id&#x27;, &#x27;collection_id&#x27;, &#x27;profile_db_path&#x27;, &#x27;contigs_db_path&#x27;. Each line should list a single entry, where &#x27;name&#x27; can be any name to describe the anvi&#x27;o bin identified as &#x27;bin_id&#x27; that is stored in a collection.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-hmm-stuff">
<header class="parameter-group-header"><span class="parameter-group-title">HMM STUFF</span> <span class="parameter-group-description">This is where you can specify an HMM source, and/or a list of genes to filter your results.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-hmm_sources"><code class="parameter-flags">--hmm-sources</code> <code class="parameter-metavar">HMM_ANNOTATION_SOURCE[S]</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get sequences for a specific list of HMM sources. You can list one or more sources by separating them from each other with a comma character (i.e., &#x27;--hmm-sources source_1,source_2,source_3&#x27;). If you would like to see a list of available sources in the contigs database, run this program with &#x27;--list-hmm-sources&#x27; flag.</span></dd>
<dt class="parameter" id="parameter-gene_names"><code class="parameter-flags">--gene-names</code> <code class="parameter-metavar">HMM HIT NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get sequences only for a specific gene name. Each name should be separated from each other by a comma character. For instance, if you want to get back only RecA and Ribosomal_L27, you can type &#x27;--gene-names RecA,Ribosomal_L27&#x27;, and you will get any and every hit that matches these names in any source. If you would like to see a list of available gene names, you can use &#x27;--list-available-gene-names&#x27; flag.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_hmm_sources"><code class="parameter-flags">-l, --list-hmm-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available HMM sources in the contigs database and quit.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_available_gene_names"><code class="parameter-flags">-L, --list-available-gene-names</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available gene names in HMM sources selection and quit.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-the-output">
<header class="parameter-group-header"><span class="parameter-group-title">THE OUTPUT</span> <span class="parameter-group-description">Where should the output go. It will be a FASTA file, and you better give it a nice name..</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-no_wrap"><code class="parameter-flags">--no-wrap</code></dt>
<dd class="parameter-details"><span class="parameter-help">Do not be wrap sequences nicely in the output file.</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_defline_variables"><code class="parameter-flags">--list-defline-variables</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, anvi&#x27;o will list the variable names that can be used to construct deflines in FASTA outputs from the user-defined `--defline-format` strings.</span></dd>
<dt class="parameter" id="parameter-defline_format"><code class="parameter-flags">--defline-format</code> <code class="parameter-metavar">F-STRING</code></dt>
<dd class="parameter-details"><span class="parameter-help">Proivide a defline template for anvi&#x27;o to use when generating the FASTA output. The way this works is actually quite simple: first you learn about all the options that exist using the `--list-defline-variables`, and then use them to create your template. Available variables should be listed within curly brackets, which will be evaluated in contex. Anything outside of curly brackets will be kept as is. For instance, if you would like your defline to have the gene caller ID after the contig name in which it occurs, you can use this template: &#x27;{contig_name}_{gene_callers_id}&#x27;, and your defline will look like &#x27;&gt;XXX_182&#x27;. In most cases &#x27;{gene_callers_id}&#x27; will serve as the default defline format if this parameters is not used. See more examples in online help.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-the-alphabet">
<header class="parameter-group-header"><span class="parameter-group-title">THE ALPHABET</span> <span class="parameter-group-description">The sequences are reported in DNA alphabet, but you can also get them translated just like all the other cool kids.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-get_aa_sequences"><code class="parameter-flags">--get-aa-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">Store amino acid sequences instead.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-phylogenomics-k">
<header class="parameter-group-header"><span class="parameter-group-title">PHYLOGENOMICS? K!</span> <span class="parameter-group-description">If you want, you can get your sequences concatanated. In this case anwi&#x27;o will use muscle to align every homolog, and concatenate them the order you specified using the `gene-names` argument. Each concatenated sequence will be separated from the other ones by the `separator`.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-concatenate_genes"><code class="parameter-flags">--concatenate-genes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Concatenate output genes in the same order to create a multi-gene alignment output that is suitable for phylogenomic analyses.</span></dd>
<dt class="parameter" id="parameter-partition_file"><code class="parameter-flags">--partition-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Some commonly used software for phylogenetic analyses (e.g., IQ-TREE, RAxML, etc) allow users to specify/test different substitution models for each gene of a concatenated multiple sequence alignments. For this, they use a special file format called a &#x27;partition file&#x27;, which indicates the site for each gene in the alignment. You can use this parameter to declare an output path for anvi&#x27;o to report a NEXUS format partition file in addition to your FASTA output (requested by Massimiliano Molari in #1333).</span></dd>
<dt class="parameter" id="parameter-max_num_genes_missing_from_bin"><code class="parameter-flags">--max-num-genes-missing-from-bin</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter removes bins (or genomes) from your analysis. If you have a list of gene names, you can use this parameter to omit any bin (or external genome) that is missing more than a number of genes you desire. For instance, if you have 100 genome bins, and you are interested in working with 5 ribosomal proteins, you can use &#x27;--max-num-genes-missing-from-bin 4&#x27; to remove the bins that are missing more than 4 of those 5 genes. This is especially useful for phylogenomic analyses. Parameter 0 will remove any bin that is missing any of the genes.</span></dd>
<dt class="parameter" id="parameter-min_num_bins_gene_occurs"><code class="parameter-flags">--min-num-bins-gene-occurs</code> <code class="parameter-metavar">INTEGER</code></dt>
<dd class="parameter-details"><span class="parameter-help">This filter removes genes from your analysis. Let&#x27;s assume you have 100 bins to get sequences for HMM hits. If you want to work only with genes among all the hits that occur in at least X number of bins, and discard the rest of them, you can use this flag. If you say &#x27;--min-num-bins-gene-occurs 90&#x27;, each gene in the analysis will be required at least to appear in 90 genomes. If a gene occurs in less than that number of genomes, it simply will not be reported. This is especially useful for phylogenomic analyses, where you may want to only focus on genes that are prevalent across the set of genomes you wish to analyze.</span></dd>
<dt class="parameter" id="parameter-align_with"><code class="parameter-flags">--align-with</code> <code class="parameter-metavar">ALIGNER</code></dt>
<dd class="parameter-details"><span class="parameter-help">The multiple sequence alignment program to use when multiple sequence alignment is necessary. To see all available options, use the flag `--list-aligners`.</span></dd>
<dt class="parameter" id="parameter-separator"><code class="parameter-flags">--separator</code> <code class="parameter-metavar">STRING</code></dt>
<dd class="parameter-details"><span class="parameter-help">A word that will be used to sepaate concatenated gene sequences from each other (IF you are using this program with `--concatenate-genes` flag). The default is &quot;XXX&quot; for amino acid sequences, and &quot;NNN&quot; for DNA sequences</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-optional">
<header class="parameter-group-header"><span class="parameter-group-title">OPTIONAL</span> <span class="parameter-group-description">Everything is optional, but some options are more optional than others.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-return_best_hit"><code class="parameter-flags">--return-best-hit</code></dt>
<dd class="parameter-details"><span class="parameter-help">A bin (or genome) may contain more than one hit for a gene name in a given HMM source. For instance, there may be multiple RecA hits in a genome bin from Campbell et al.. Using this flag, will go through all of the gene names that appear multiple times, and remove all but the one with the lowest e-value. Good for whenever you really need to get only a single copy of single-copy core genes from a genome bin.</span></dd>
<dt class="parameter parameter-switch" id="parameter-return_best_hit_per_contig"><code class="parameter-flags">--return-best-hit-per-contig</code></dt>
<dd class="parameter-details"><span class="parameter-help">Similar to `--return-best-hit`, but resolves ties at the contig level. If a contig has multiple hits for the same gene name and HMM source, only the hit with the lowest e-value will be kept. Please be CAREFUL using this flag, as it may remove legitimate copies of genes that are meant to be multi-copy, such as transfer RNAs, etc, and its behavior will be dependent on the nature of the HMM source being used.</span></dd>
<dt class="parameter" id="parameter-ignore_genes_longer_than"><code class="parameter-flags">--ignore-genes-longer-than</code> <code class="parameter-metavar">MAX_LENGTH</code></dt>
<dd class="parameter-details"><span class="parameter-help">In some cases the gene calling step can identify open reading frames that span across extremely long stretches of genomes. Such mistakes can lead to downstream issues, especially when concatenate flag is used, including failure to align genes. This flag allows anvi&#x27;o to ignore extremely long gene calls to avoid unintended issues (i.e., during phylogenomic analyses). If you use this flag, please carefully examine the output messages from the program to see which genes are removed from the analysis. Please note that the length parameter considers the nucleotide lenght of the open reading frame, even if you asked for amino acid sequences to be returned. Setting this parameter to small values, such as less than 10000 nucleotides may lead to the removal of genuine genes, so please use it carefully.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-unique_genes"><code class="parameter-flags">--unique-genes</code></dt>
<dd class="parameter-details"><span class="parameter-help">An HMM source may contain multiple models that can hit the same gene in a given bin or genome. Using this flag, you can ask anvi&#x27;o to go through all genes, identify those with multiple hits and report only the most significant hit for each unique gene.</span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_checking_genome_hashes"><code class="parameter-flags">--skip-checking-genome-hashes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag if you would like anvi&#x27;o to skip checking genome hashes. This is only relevant if you may have genomes in your internal or external genomes files that have identical sequences with different names AND if you are OK with it. You may be OK with it, for instance, if you are using `anvi-dereplicate-genomes` program to dereplicate genomes desribed in multiple collections in an anvi&#x27;o profile database that may be describing the same genome multiple times (see https://github.com/merenlab/anvio/issues/1397 for a case).</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A tutorial on anvi&#x27;o phylogenomics workflow](http://merenlab.org/2017/06/07/phylogenomics/)

* [A detailed application of phylogenomics to place a new genome on a tree](http://merenlab.org/data/parcubacterium-in-hbcfdna/)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/get_sequences_for_hmm_hits.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
