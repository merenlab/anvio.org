---
layout: program
title: anvi-gen-structure-database
excerpt: An anvi'o program. Creates a database of protein structures.
categories: [anvio]
comments: false
redirect_from: /m/anvi-gen-structure-database
image:
  featurerelative: ../../../images/header.png
  display: true
---

Creates a database of protein structures. Predict protein structures for genes in your contigs database using either template-based homology modelling (MODELLER) or AlphaFold2 (ColabFold), or import pre-computed PDB structures you already have..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pdb-db](../../artifacts/pdb-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage



This program creates a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> by predicting the 3D structures of proteins encoded by genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>. You can choose between two prediction engines with the `--engine` flag: (a) `modeller` (the default), which uses template-based homology modelling with DIAMOND and MODELLER, or (b) `colabfold`, which uses AlphaFold2 via [ColabFold](https://github.com/sokrypton/ColabFold). Alternatively, you can (c) import pre-existing structures you already have using an <span class="artifact-n">[external-structures](/help/main/artifacts/external-structures)</span> file.

### The basics of the MODELLER pipeline

This section covers the default `modeller` engine, where structures are predicted with homology modelling.

DIAMOND first searches your sequence(s) against a database of proteins with a known structure.  This database is downloaded from the [Sali lab](https://salilab.org/modeller/supplemental.html), who created and maintain MODELLER, and contains all of the PDB sequences clustered at 95% identity.

If any good hits are found, they are selected as templates, and their structures are nabbed either from [the RCSB directly](https://www.rcsb.org/), or from a local <span class="artifact-n">[pdb-db](/help/main/artifacts/pdb-db)</span> database which you can create yourself with <span class="artifact-p">[anvi-setup-pdb-database](/help/main/programs/anvi-setup-pdb-database)</span>. Then, anvi'o passes control over to MODELLER, which creates a 3D alignment for your sequence to the template structures, and makes final adjustments to it based off of empirical distributions of bond angles. For more information, check [this blogpost](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/#how-modeller-works).

The output of this program is a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>, which contains all of the modelled structures. Currently, the primary use of the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> is for interactive exploration with <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span>. You can also export your structures into external .pdb files with <span class="artifact-p">[anvi-export-structures](/help/main/programs/anvi-export-structures)</span>, or incorporate structural information in the <span class="artifact-n">[variability-profile-txt](/help/main/artifacts/variability-profile-txt)</span> with <span class="artifact-p">[anvi-gen-variability-profile](/help/main/programs/anvi-gen-variability-profile)</span>.

### Basic standard run

Here is a simple run:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;o STRUCTURE.db
</div>

Following this, you will have the structures for genes 1, 2, and 3 stored in `STRUCTURE.db`, assuming reasonable templates were found. Alternatively, you can provide a file name with the gene caller IDs (one ID per line) with the flag `--genes-of-interest`.

If you have already run <span class="artifact-p">[anvi-setup-pdb-database](/help/main/programs/anvi-setup-pdb-database)</span> and therefore have a local copy of representative PDB structures, make sure you use it by providing the `--offline` flag. If you put it in a non-default location, provide the path to your <span class="artifact-n">[pdb-db](/help/main/artifacts/pdb-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;&#45;pdb&#45;database <span class="artifact&#45;n">[pdb&#45;db](/help/main/artifacts/pdb&#45;db)</span> \
                            &#45;o STRUCTURE.db
</div>

To quickly get a very rough estimate for your structures, you can run with the flag `--very-fast`.

### Predicting structures with ColabFold (AlphaFold2)

Instead of homology modelling, you can predict structures with AlphaFold2 via [ColabFold](https://github.com/sokrypton/ColabFold) by setting `--engine colabfold`. This does not require good templates to exist for your proteins.

Anvi'o does not assume ColabFold is on your `$PATH`. If you installed it in a conda environment (for example, one named `colabfold`), tell anvi'o its name and every ColabFold command will be run via `conda run -n <name>`:

ColabFold generates a multiple sequence alignment (MSA) and then predicts the structure. You must explicitly choose how the MSA step is done. The simplest option is to use the public MMseqs2 MSA server hosted by the ColabFold team with `--colabfold-msa-server` (this requires an internet connection and is appropriate for a handful of sequences):

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;engine colabfold \
                            &#45;&#45;colabfold&#45;conda&#45;env colabfold \
                            &#45;&#45;colabfold&#45;msa&#45;server \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;o STRUCTURE.db
</div>

{:.notice}
The public MSA server is a limited shared resource. If you have many sequences, please set up a local ColabFold database instead (see below).

If you have set up a local ColabFold database (with ColabFold's `setup_databases.sh`), generate the MSA locally by pointing anvi'o to that directory with `--colabfold-db` instead of `--colabfold-msa-server`:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;engine colabfold \
                            &#45;&#45;colabfold&#45;conda&#45;env colabfold \
                            &#45;&#45;colabfold&#45;db /path/to/colabfold_db \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;o STRUCTURE.db
</div>

All genes of interest are predicted together in a single ColabFold run, which is far more efficient on a GPU than predicting one gene at a time. ColabFold reports its own confidence metrics (per-residue pLDDT and model-level pTM), which anvi'o stores in the resulting <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>.

You can tune the prediction with `--num-models` (how many AlphaFold2 models to run per gene), `--num-recycle` (more recycles can improve quality at the cost of runtime), and `--amber` (relax the best model with OpenMM/Amber for better side-chains). Anything not exposed as a dedicated flag can be passed straight through to `colabfold_batch` with `--colabfold-additional-parameters` (because its value starts with dashes, attach it with an equals sign, e.g. `--colabfold-additional-parameters="--num-seeds 2"`). As with the MODELLER engine, you can provide a `--dump-dir` to keep all of the raw ColabFold output.

### Splitting the MSA and prediction steps (--only-msa / --only-predict)

A ColabFold run has two very differently-shaped halves: generating the multiple sequence alignments (MSA) is CPU-heavy, while predicting the structures is GPU-heavy. When you scale up to many genes or genomes, you often want to run these on different machines — for example, the MSA step on CPU nodes and the prediction step on GPU nodes of a cluster, wired together by a workflow manager like Snakemake. The `--only-msa` and `--only-predict` flags let you split the run at that seam, using a `--dump-dir` as an on-disk checkpoint that connects the two steps.

`--only-msa` runs only the MSA step and stops, writing the alignments and a small checkpoint manifest into `--dump-dir`. This only works with a local ColabFold database (`--colabfold-db`): the public MSA server (`--colabfold-msa-server`) generates the MSA and predicts the structure in a single step that cannot be split. No structure database is produced yet.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;engine colabfold \
                            &#45;&#45;colabfold&#45;conda&#45;env colabfold \
                            &#45;&#45;colabfold&#45;db /path/to/colabfold_db \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;&#45;only&#45;msa \
                            &#45;&#45;dump&#45;dir MY_CHECKPOINT
</div>

`--only-predict` then resumes from that checkpoint, predicting the structures and building the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>. You must give it the **same** <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and genes of interest as the `--only-msa` run: anvi'o verifies that the sequences match the checkpoint before predicting and refuses to continue if they do not, so you cannot accidentally predict structures against MSAs that were built for different genes.

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;engine colabfold \
                            &#45;&#45;colabfold&#45;conda&#45;env colabfold \
                            &#45;&#45;gene&#45;caller&#45;ids 1,2,3 \
                            &#45;&#45;only&#45;predict \
                            &#45;&#45;dump&#45;dir MY_CHECKPOINT \
                            &#45;o STRUCTURE.db
</div>

### Basic import run

If you already possess structures and would like to create a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> for downstream anvi'o uses such as <span class="artifact-p">[anvi-display-structure](/help/main/programs/anvi-display-structure)</span>, you should create a <span class="artifact-n">[external-structures](/help/main/artifacts/external-structures)</span> file. Then, create the database as follows:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                            &#45;&#45;external&#45;structures <span class="artifact&#45;n">[external&#45;structures](/help/main/artifacts/external&#45;structures)</span> \
                            &#45;o STRUCTURE.db
</div>

{:.notice}
Please avoid using any MODELLER-specific parameters when using this mode, as they will be silently ignored.


### Advanced Parameters

Here, we will go through a brief overview of the MODELLER parameters that you are able to change. See [this page](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/#description-of-all-modeller-parameters) for more information.

- The number of models to be simulated. The default is 1.
- The standard deviation of atomic perturbation of the initial structure (i.e. how much you change the position of the atoms before fine tuning with other analysis). The default is 4 angstroms.
- The MODELLER database used. The default is `pdb_95`, which can be found [here](https://salilab.org/modeller/supplemental.html). This is the same database that is downloaded by <span class="artifact-p">[anvi-setup-pdb-database](/help/main/programs/anvi-setup-pdb-database)</span>.
- The scoring function used to compare potential models. The default is `DOPE_score`.
- The minimum percent identity cutoff for a template to be further considered.
- The minimum alignment fraction that the sequence is covered by the template in order to be further considered.
- The maximum number of templates that the program will consider. The default is 5.
- The MODELLER program to use. The default is `mod9.19`, but anvi'o is somewhat intelligent and will
  look for the most recent version it can find.

For a case study on how some of these parameters matter, see [here](http://merenlab.org/2018/09/04/getting-started-with-anvio-structure/#a-quick-case-study-on-the-importance-of-key-parameters).

You also have the option to

- Skip the use of DSSP, which predicts beta sheets, alpha helices, certain bond angles, and relative
  solvent acessibility of residues.
- Output **all** the raw data, just provide a path to the desired directory with the flag `--dump-dir`.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-gen-structure-database.md) to update this information.


## Additional Resources


* [A conceptual tutorial on the structural biology capabilities of anvio](http://merenlab.org/2018/09/04/structural-biology-with-anvio/)

* [A practical tutorial section in the infant gut tutorial](http://merenlab.org/tutorials/infant-gut/#chapter-vii-linking-genomic-heterogeneity-to-protein-structures)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_structure_database.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
