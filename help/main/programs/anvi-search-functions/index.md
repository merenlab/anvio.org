---
layout: program
title: anvi-search-functions
excerpt: An anvi'o program. Search functions in an anvi&#x27;o contigs database or genomes storage.
categories: [anvio]
comments: false
redirect_from: /m/anvi-search-functions
image:
  featurerelative: ../../../images/header.png
  display: true
---

Search functions in an anvi&#x27;o contigs database or genomes storage. Basically, this program searches for one or more search terms you define in functional annotations of genes in an anvi&#x27;o contigs database, and generates multiple reports. The default report simply tells you which contigs contain genes with functions matching to serach terms you used, useful for viewing in the interface. You can also request a much more comprehensive report, which gives you anything you might need to know for each hit and serach term.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions-txt](../../artifacts/functions-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


You can use this program to search for genes that encode specific functions in a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> + <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> pair, or multiple databases in an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file.

## Input options

You could search for all genes in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> that encode a function related to the keyword 'kinase' the following way:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms kinase
</div>

If you want to search gene clusters in a pangenome instead, you should provide both the <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and its corresponding <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                      &#45;p <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                      &#45;&#45;search&#45;terms kinase
</div>

Or, if you want to search across multiple <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>s at once, you can provide an <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;e <span class="artifact&#45;n">[external&#45;genomes](/help/main/artifacts/external&#45;genomes)</span> \
                      &#45;&#45;search&#45;terms kinase
</div>

## Search options

If you include `--verbose` flag in your command, <span class="artifact-p">[anvi-search-functions](/help/main/programs/anvi-search-functions)</span> will offer you a quick look at the matching function names:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms Phage \
                      &#45;&#45;verbose
</div>

```
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 1 found: 'Phage'
Case sensitive search? .......................: False
Exact match? .................................: False

Matches ......................................: 380 unique genes contained the search term "Phage"

Sneak peak into matching functions (up to 25)
===============================================
* Mobilome: prophages, transposons; Mobilome: prophages, transposons :: X; X within 'COG20_CATEGORY'
* Mobilome: prophages, transposons :: X within 'COG20_CATEGORY'
* Phage terminase-like protein, large subunit, contains N-terminal HTH domain (YmfN) :: COG4626 within 'COG20_FUNCTION'
* Phage-related protein (PblB) :: COG4926 within 'COG20_FUNCTION'
* Putative phage head morphogenesis protein, F of phage Mu or gp7 of SPP1 :: COG5585 within 'COG20_FUNCTION'
* Phage portal protein BeeE (BeeE) :: COG4695 within 'COG20_FUNCTION'
* Replication, recombination and repair; Mobilome: prophages, transposons :: L; X within 'COG20_CATEGORY'
* Abortive infection bacteriophage resistance protein (AbiF) :: COG4823 within 'COG20_FUNCTION'
* Phage-related holin (Lysis protein) :: COG4824 within 'COG20_FUNCTION'
* Phage terminase large subunit (XtmB) (PDB:4IDH) :: COG1783 within 'COG20_FUNCTION'
* Uncharacterized membrane protein YhgE, phage infection protein (PIP) family (YhgE) :: COG1511 within 'COG20_FUNCTION'
* Cell wall/membrane/envelope biogenesis; Mobilome: prophages, transposons :: M; X within 'COG20_CATEGORY'
* Prophage pi2 protein 07 :: COG4707 within 'COG20_FUNCTION'
* Prophage antirepressor :: COG3617 within 'COG20_FUNCTION'
* Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3645 within 'COG20_FUNCTION'
* phage shock protein E :: K03972 within 'KOfam'
* Escherichia/Staphylococcus phage prohead protease :: K06904 within 'KOfam'
* putative DNA-invertase from lambdoid prophage Rac :: K14060 within 'KOfam'
* DNA primase, phage- or plasmid-associated :: COG3378 within 'COG20_FUNCTION'
* phage terminase large subunit :: K06909 within 'KOfam'
* Phage-related protein :: COG5412 within 'COG20_FUNCTION'
* phage terminase small subunit :: K07474 within 'KOfam'
* Phage head maturation protease :: COG3740 within 'COG20_FUNCTION'
* Phage-related replication protein YjqB, UPF0714/DUF867 family (YjqB) (PDB:3A9L) :: COG4195 within 'COG20_FUNCTION'
* phage shock protein C :: K03973 within 'KOfam'

Items additional data compatible output ......: search_results.txt
```

By default, the search is case insensitive. But you can make it case sensitive with the flag `--case-sensitive`:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms Phage \
                      &#45;&#45;case&#45;sensitive \
                      &#45;&#45;verbose
</div>

```
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 1 found: 'Phage'
Case sensitive search? .......................: True
Exact match? .................................: False

Matches ......................................: 109 unique genes contained the search term "Phage"

Sneak peak into matching functions (up to 25)
===============================================
* Phage terminase-like protein, large subunit, contains N-terminal HTH domain (YmfN) :: COG4626 within 'COG20_FUNCTION'
* Phage-related replication protein YjqB, UPF0714/DUF867 family (YjqB) (PDB:3A9L) :: COG4195 within 'COG20_FUNCTION'
* Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3645 within 'COG20_FUNCTION'
* Phage anti-repressor protein Ant (PUBMED:27099293); Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3561; COG3645 within 'COG20_FUNCTION'
* Phage terminase large subunit (XtmB) (PDB:4IDH) :: COG1783 within 'COG20_FUNCTION'
* Phage-related protein YomH (YomH) (PDB:2X8K) :: COG4722 within 'COG20_FUNCTION'
* Phage portal protein BeeE (BeeE) :: COG4695 within 'COG20_FUNCTION'
* Phage-related protein :: COG5412 within 'COG20_FUNCTION'
* Phage repressor protein C, contains Cro/C1-type HTH and peptisase s24 domains :: COG2932 within 'COG20_FUNCTION'
* Phage-related protein (PblB) :: COG4926 within 'COG20_FUNCTION'
* Phage shock protein PspC (stress-responsive transcriptional regulator) (PspC) :: COG1983 within 'COG20_FUNCTION'
* Murein DD-endopeptidase MepM and murein hydrolase activator NlpD, contains LysM domain (NlpD) (PDB:2GU1); Phage-related protein :: COG0739; COG5412 within 'COG20_FUNCTION'
* Phage-related holin (Lysis protein) :: COG4824 within 'COG20_FUNCTION'
* Phage head-tail adaptor (PDB:2Y3D) :: COG5614 within 'COG20_FUNCTION'
* Phage-related minor tail protein (YqbO); Phage-related protein :: COG5280; COG5412 within 'COG20_FUNCTION'
* Phage-related tail protein :: COG5283 within 'COG20_FUNCTION'
* Phage regulatory protein Rha (pRha) :: COG3646 within 'COG20_FUNCTION'
* Phage head maturation protease :: COG3740 within 'COG20_FUNCTION'
* Phage terminase, small subunit (XtmA) (PDB:4ZC3) :: COG3728 within 'COG20_FUNCTION'
* Prophage antirepressor; Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3617; COG3645 within 'COG20_FUNCTION'
* Phage terminase, small subunit :: COG3747 within 'COG20_FUNCTION'
* Murein DD-endopeptidase MepM and murein hydrolase activator NlpD, contains LysM domain (NlpD) (PDB:2GU1); SLT domain protein (SLT) (PUBMED:15608122); Phage-related minor tail protein (YqbO); Phage-related protein :: COG0739; COG3953; COG5280; COG5412 within 'COG20_FUNCTION'
* Phage shock protein A (PspA) (PDB:4WHE) :: COG1842 within 'COG20_FUNCTION'
* Transcriptional regulator, contains XRE-family HTH domain (HipB) (PDB:1ADR); Phage repressor protein C, contains Cro/C1-type HTH and peptisase s24 domains :: COG1396; COG2932 within 'COG20_FUNCTION'

Items additional data compatible output ......: search_results.txt
```

By defult the search term is searched anywhere in the function. The `--exact-match` flag change that behavior, and will only return matches if the entire field of text matches to the search term:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms "Phage head maturation protease" \
                      &#45;&#45;exact&#45;match \
                      &#45;&#45;verbose
</div>

```
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 1 found: 'Phage head maturation protease'
Case sensitive search? .......................: False
Exact match? .................................: True

Matches ......................................: 3 unique genes contained the search term "Phage head maturation protease"

Sneak peak into matching functions (up to 25)
===============================================
* Phage head maturation protease :: COG3740 within 'COG20_FUNCTION'

Items additional data compatible output ......: search_results.txt
```

By default, all function annotation sources are included in the search, however, the parameter `--annotation-sources` can be used to limit the search to one or more specific annotation sources:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms Phage \
                      &#45;&#45;annotation&#45;sources KOfam \
                      &#45;&#45;verbose
</div>

```
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 1 found: 'Phage'
Case sensitive search? .......................: False
Exact match? .................................: False

Matches ......................................: 51 unique genes contained the search term "Phage"

Sneak peak into matching functions (up to 25)
===============================================
* putative DNA-invertase from lambdoid prophage Rac :: K14060 within 'KOfam'
* phage terminase small subunit :: K07474 within 'KOfam'
* phage shock protein E :: K03972 within 'KOfam'
* DNA polymerase bacteriophage-type [EC:2.7.7.7] :: K02334 within 'KOfam'
* phage terminase large subunit :: K06909 within 'KOfam'
* macrophage erythroblast attacher :: K18624 within 'KOfam'
* Escherichia/Staphylococcus phage prohead protease :: K06904 within 'KOfam'
* phage shock protein A :: K03969 within 'KOfam'
* phage shock protein C :: K03973 within 'KOfam'

Items additional data compatible output ......: search_results.txt
```

Similar to functions, accession IDs can be searched, as well:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms COG4824,COG5614 \
                      &#45;&#45;verbose
</div>

```
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 2 found: 'COG4824|COG5614'
Case sensitive search? .......................: False
Exact match? .................................: False

Matches ......................................: 8 unique genes contained the search term "COG4824"

Sneak peak into matching functions (up to 25)
===============================================
* Phage-related holin (Lysis protein) :: COG4824 within 'COG20_FUNCTION'

Matches ......................................: 1 unique genes contained the search term "COG5614"

Sneak peak into matching functions (up to 25)
===============================================
* Phage head-tail adaptor (PDB:2Y3D) :: COG5614 within 'COG20_FUNCTION'

Items additional data compatible output ......: search_results.txt
```

## Output

By default, the output will be a fairly barren, and will only show which contigs (or gene clusters) contain genes that matched to a given search term (if you used <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> input, it will also indicate which genome the match occurred in). This output file will be most helpful as an additional layer in the anvi'o interactive interface to quickly see the items that include genes with functions that match to the search terms.

However, generating a more comprehensive report is also an option through the parameter `--full-report`:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms Phage \
                      &#45;&#45;full&#45;report phage&#45;results.txt \
                      &#45;&#45;verbose
</div>

```
anvi-search-functions -c CONTIGS.db --search-terms Phage --verbose --full-report phage-reuslts.txt
Searching in Contigs Database ................: CONTIGS.db
Contigs DB ...................................: Initialized: CONTIGS.db (v. 23)
Search terms .................................: 1 found: 'Phage'
Case sensitive search? .......................: False
Exact match? .................................: False

Matches ......................................: 380 unique genes contained the search term "Phage"

Sneak peak into matching functions (up to 25)
===============================================
* Uncharacterized membrane protein YhgE, phage infection protein (PIP) family (YhgE) :: COG1511 within 'COG20_FUNCTION'
* Phage-related holin (Lysis protein) :: COG4824 within 'COG20_FUNCTION'
* Mobilome: prophages, transposons :: X within 'COG20_CATEGORY'
* DNA primase, phage- or plasmid-associated :: COG3378 within 'COG20_FUNCTION'
* Phage-related protein (PblB) :: COG4926 within 'COG20_FUNCTION'
* Phage-related replication protein YjqB, UPF0714/DUF867 family (YjqB) (PDB:3A9L) :: COG4195 within 'COG20_FUNCTION'
* Uncharacterized phage-associated protein, contains DUF4065 domain (GepA) :: COG3600 within 'COG20_FUNCTION'
* phage terminase large subunit :: K06909 within 'KOfam'
* Predicted phage phi-C31 gp36 major capsid-like protein (gp36) :: COG4653 within 'COG20_FUNCTION'
* phage terminase small subunit :: K07474 within 'KOfam'
* Phage anti-repressor protein Ant (PUBMED:27099293); Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3561; COG3645 within 'COG20_FUNCTION'
* Phage-related minor tail protein (YqbO); Phage-related protein :: COG5280; COG5412 within 'COG20_FUNCTION'
* Abortive infection bacteriophage resistance protein (AbiF) :: COG4823 within 'COG20_FUNCTION'
* Phage-related protein :: COG5412 within 'COG20_FUNCTION'
* Phage shock protein PspC (stress-responsive transcriptional regulator) (PspC) :: COG1983 within 'COG20_FUNCTION'
* Phage-related protein YomH (YomH) (PDB:2X8K) :: COG4722 within 'COG20_FUNCTION'
* Holliday junction resolvase RusA (prophage-encoded endonuclease) (RusA) (PDB:1Q8R) :: COG4570 within 'COG20_FUNCTION'
* Prophage antirepressor; Phage antirepressor protein YoqD, KilAC domain (KilAC) :: COG3617; COG3645 within 'COG20_FUNCTION'
* phage shock protein E :: K03972 within 'KOfam'
* Cell wall/membrane/envelope biogenesis; Mobilome: prophages, transposons; Mobilome: prophages, transposons; Mobilome: prophages, transposons :: M; X; X; X within 'COG20_CATEGORY'
* Phage terminase large subunit (XtmB) (PDB:4IDH) :: COG1783 within 'COG20_FUNCTION'
* DNA polymerase bacteriophage-type [EC:2.7.7.7] :: K02334 within 'KOfam'
* Mobilome: prophages, transposons; Mobilome: prophages, transposons :: X; X within 'COG20_CATEGORY'
* putative DNA-invertase from lambdoid prophage Rac :: K14060 within 'KOfam'
* phage shock protein C :: K03973 within 'KOfam'

Items additional data compatible output ......: search_results.txt
Full report ..................................: phage-reuslts.txt
```

This will result in an output file that will look like this:

|**gene_callers_id**|**source**|**accession**|**function**|**search_term**|**contigs**|
|:--|:--|:--|:--|:--|:--|
|560|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig1_split_00030|
|563|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig1_split_00030|
|756|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig1_split_00041|
|757|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig1_split_00041|
|779|COG20_FUNCTION|COG1983|Phage shock protein PspC (stress-responsive transcriptional regulator) (PspC)|Phage|Day17a_QCcontig1_split_00042|
|1550|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00008|
|1555|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00009|
|1556|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00009|
|1557|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00009|
|1604|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00011|
|1605|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig4_split_00011|
|2580|COG20_FUNCTION|COG4653|Predicted phage phi-C31 gp36 major capsid-like protein (gp36)|Phage|Day17a_QCcontig9_split_00011|
|2580|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig9_split_00011|
|2733|COG20_FUNCTION|COG4824|Phage-related holin (Lysis protein)|Phage|Day17a_QCcontig13_split_00002|
|2733|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig13_split_00002|
|2767|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig14_split_00001|
|2825|COG20_FUNCTION|COG1511|Uncharacterized membrane protein YhgE, phage infection protein (PIP) family (YhgE)|Phage|Day17a_QCcontig15_split_00003|
|2965|COG20_FUNCTION|COG4823|Abortive infection bacteriophage resistance protein (AbiF)|Phage|Day17a_QCcontig16_split_00006|
|3029|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig16_split_00009|
|3170|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig17_split_00002|
|13008|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig276_split_00001|
|13009|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig277_split_00001|
|13022|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig279_split_00001|
|13029|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig280_split_00001|
|13106|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig283_split_00001|
|13107|COG20_FUNCTION|COG3378|DNA primase, phage- or plasmid-associated|Phage|Day17a_QCcontig283_split_00001|
|13107|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig283_split_00001|
|13116|COG20_FUNCTION|COG3728|Phage terminase, small subunit (XtmA) (PDB:4ZC3)|Phage|Day17a_QCcontig283_split_00001|
|13116|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig283_split_00001|
|13135|COG20_FUNCTION|COG2369|Uncharacterized protein, contains phage Mu head morphogenesis gpF-like domain|Phage|Day17a_QCcontig285_split_00001|
|13135|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig285_split_00001|
|13141|COG20_FUNCTION|COG2369|Uncharacterized protein, contains phage Mu head morphogenesis gpF-like domain|Phage|Day17a_QCcontig286_split_00001|
|13141|COG20_CATEGORY|X|Mobilome: prophages, transposons|Phage|Day17a_QCcontig286_split_00001|
|15448|KOfam|K06909|phage terminase large subunit|Phage|Day17a_QCcontig476_split_00003|
|13143|KOfam|K06909|phage terminase large subunit|Phage|Day17a_QCcontig286_split_00001|
|15293|KOfam|K06909|phage terminase large subunit|Phage|Day17a_QCcontig470_split_00001|
|15450|KOfam|K06909|phage terminase large subunit|Phage|Day17a_QCcontig476_split_00003|
|8686|KOfam|K03973|phage shock protein C|Phage|Day17a_QCcontig100_split_00001|
|9711|KOfam|K03973|phage shock protein C|Phage|Day17a_QCcontig125_split_00007|
|14379|KOfam|K03972|phage shock protein E|Phage|Day17a_QCcontig379_split_00001|
|27227|KOfam|K18624|macrophage erythroblast attacher|Phage|Day17a_QCcontig2462_split_00001|
|31918|KOfam|K06904|Escherichia/Staphylococcus phage prohead protease|Phage|Day17a_QCcontig4102_split_00001|
|31919|KOfam|K06904|Escherichia/Staphylococcus phage prohead protease|Phage|Day17a_QCcontig4102_split_00001|
|2561|KOfam|K02334|DNA polymerase bacteriophage-type [EC:2.7.7.7]|Phage|Day17a_QCcontig9_split_00011|
|1803|KOfam|K02334|DNA polymerase bacteriophage-type [EC:2.7.7.7]|Phage|Day17a_QCcontig4_split_00021|
|3955|KOfam|K02334|DNA polymerase bacteriophage-type [EC:2.7.7.7]|Phage|Day17a_QCcontig26_split_00010|
|7105|KOfam|K03969|phage shock protein A|Phage|Day17a_QCcontig74_split_00005|
|4518|KOfam|K07474|phage terminase small subunit|Phage|Day17a_QCcontig33_split_00009|
|4315|KOfam|K14060|putative DNA-invertase from lambdoid prophage Rac|Phage|Day17a_QCcontig30_split_00002|
|4299|KOfam|K14060|putative DNA-invertase from lambdoid prophage Rac|Phage|Day17a_QCcontig30_split_00001|
|3770|KOfam|K14060|putative DNA-invertase from lambdoid prophage Rac|Phage|Day17a_QCcontig25_split_00001|
|4519|KOfam|K06909|phage terminase large subunit|Phage|Day17a_QCcontig33_split_00009|

It is also possible to include sequences of genes into the full report output:

<div class="codeblock" markdown="1">
anvi&#45;search&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                      &#45;&#45;search&#45;terms Phage \
                      &#45;&#45;full&#45;report phage&#45;results.txt \
                      &#45;&#45;include&#45;sequences \
                      &#45;&#45;verbose
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-search-functions.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-search-functions`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-search-functions [-h] [-c CONTIGS_DB] [-p PAN_DB] [-g GENOMES_STORAGE] [-e FILE_PATH] --search-terms SEARCH_TERMS [--case-sensitive] [--exact-match] [--delimiter CHAR] [--annotation-sources FUNCTION_ANNOTATION_SOURCE[S]] [-l] [-o FILE_PATH] [--full-report FILE_NAME] [--include-sequences] [--verbose]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-search-in">
<header class="parameter-group-header"><span class="parameter-group-title">SEARCH IN</span> <span class="parameter-group-description">Relevant source databases</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">-p, --pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-external_genomes"><code class="parameter-flags">-e, --external-genomes</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists anvi&#x27;o contigs databases. The first item in the header line should read &#x27;name&#x27;, and the second should read &#x27;contigs_db_path&#x27;. Each line in the file should describe a single entry, where the first column is the name of the genome (or MAG), and the second column is the anvi&#x27;o contigs database generated for this genome.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-search-for">
<header class="parameter-group-header"><span class="parameter-group-title">SEARCH FOR</span> <span class="parameter-group-description">Relevant terms</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-search_terms"><code class="parameter-flags">--search-terms</code> <code class="parameter-metavar">SEARCH_TERMS</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Search terms. Multiple of them can be declared separated by a delimiter (the default is a comma).</span></dd>
<dt class="parameter parameter-switch" id="parameter-case_sensitive"><code class="parameter-flags">--case-sensitive</code></dt>
<dd class="parameter-details"><span class="parameter-help">When declared, anvi&#x27;o will perform a search that is case sensitive.</span></dd>
<dt class="parameter parameter-switch" id="parameter-exact_match"><code class="parameter-flags">--exact-match</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, anvi&#x27;o will search for a given string in anywhere within function description or accession IDs. If you declare this flag, then anvi&#x27;o will look for &#x27;exact&#x27; matches of the search string in its entirety in a given field. This can be very useful if you are CERTAIN about the function or accession id you are interested in, and you want to get nothing but that exact match.</span></dd>
<dt class="parameter" id="parameter-delimiter"><code class="parameter-flags">--delimiter</code> <code class="parameter-metavar">CHAR</code></dt>
<dd class="parameter-details"><span class="parameter-help">The delimiter to parse multiple input terms. The default is &#x27;,&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">,</code></span></dd>
<dt class="parameter" id="parameter-annotation_sources"><code class="parameter-flags">--annotation-sources</code> <code class="parameter-metavar">FUNCTION_ANNOTATION_SOURCE[S]</code></dt>
<dd class="parameter-details"><span class="parameter-help">Get functional annotations for a specific list of annotation sources. You can specify one or more sources by separating them from each other with a comma character (i.e., &#x27;--annotation-sources source_1,source_2,source_3&#x27;). The default behavior is to return everything</span></dd>
<dt class="parameter parameter-switch" id="parameter-list_annotation_sources"><code class="parameter-flags">-l, --list-annotation-sources</code></dt>
<dd class="parameter-details"><span class="parameter-help">List available functional annotation sources.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-report">
<header class="parameter-group-header"><span class="parameter-group-title">REPORT</span> <span class="parameter-group-description">Anvi&#x27;o can report the hits in multiple ways. The output file will be a very simple 2-column TAB-delimited output that is compatible with anvi&#x27;o additional data format (so you can give it to the `anvi-interactive` to see which splits contained genes that were matching to your search terms). You can also ask anvi&#x27;o to generate a full-report, that contains much more and much helpful information about each hit. Optionally you can even ask the gene sequences to appear in this report.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter" id="parameter-full_report"><code class="parameter-flags">--full-report</code> <code class="parameter-metavar">FILE_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Optional output file with a fuller description of findings.</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_sequences"><code class="parameter-flags">--include-sequences</code></dt>
<dd class="parameter-details"><span class="parameter-help">Include sequences in the report.</span></dd>
<dt class="parameter parameter-switch" id="parameter-verbose"><code class="parameter-flags">--verbose</code></dt>
<dd class="parameter-details"><span class="parameter-help">Be verbose, print more messages whenever possible. You may regret this.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/search_functions.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
