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

Creates a database of protein structures. Predict protein structures for the genes of a contigs database or a pangenome using either template-based homology modelling (MODELLER) or AlphaFold2 (ColabFold), or import pre-computed PDB structures you already have..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[pdb-db](../../artifacts/pdb-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-structures](../../artifacts/external-structures) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


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

You can also import structures for a pangenome, by pointing at a <span class="artifact-n">[pan-db](/help/main/artifacts/pan-db)</span> and its <span class="artifact-n">[genomes-storage-db](/help/main/artifacts/genomes-storage-db)</span> instead of a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>:

<div class="codeblock" markdown="1">
anvi&#45;gen&#45;structure&#45;database &#45;&#45;pan&#45;db <span class="artifact&#45;n">[pan&#45;db](/help/main/artifacts/pan&#45;db)</span> \
                            &#45;g <span class="artifact&#45;n">[genomes&#45;storage&#45;db](/help/main/artifacts/genomes&#45;storage&#45;db)</span> \
                            &#45;&#45;external&#45;structures <span class="artifact&#45;n">[external&#45;structures](/help/main/artifacts/external&#45;structures)</span> \
                            &#45;o STRUCTURE.db
</div>

The <span class="artifact-n">[external-structures](/help/main/artifacts/external-structures)</span> file format differs slightly between the two (a pangenome file names the genome each gene comes from); see <span class="artifact-n">[external-structures](/help/main/artifacts/external-structures)</span> for both layouts.

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



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-gen-structure-database`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-gen-structure-database [-h] [-c CONTIGS_DB] [--pan-db PAN_DB] [-g GENOMES_STORAGE] [--pdb-db PDB_DB] [--genes-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS] [--gene-clusters-of-interest FILE] [--gene-cluster-ids GENE_CLUSTER_IDS] [--select-representative] [-o DB_FILE_PATH] [--dump-dir DUMP_DIR] [--engine {modeller,colabfold}] [--num-models NUM_MODELS] [--skip-DSSP] [--deviation DEVIATION] [--modeller-database MODELLER_DATABASE] [--scoring-method SCORING_METHOD] [--very-fast] [--percent-cutoff PERCENT_CUTOFF] [--alignment-fraction-cutoff ALIGNMENT_FRACTION_CUTOFF] [--max-number-templates MAX_NUMBER_TEMPLATES] [--modeller-executable MODELLER_EXECUTABLE] [--offline-mode] [--colabfold-conda-env ENV_NAME] [--colabfold-msa-server] [--colabfold-db DB_DIR] [--num-recycle INT] [--amber] [--colabfold-additional-parameters CMD LINE PARAMS] [--only-msa] [--only-predict] [--external-structures FILE_PATH] [-T NUM_THREADS] [--write-buffer-size INT]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Declaring relevant anvi&#x27;o databases. First things first. Provide EITHER a contigs database (structures for its genes) OR a pangenome (--pan-db plus its --genomes-storage; structures for the genes of your gene clusters).</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">--pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter" id="parameter-pdb_db"><code class="parameter-flags">--pdb-db</code> <code class="parameter-metavar">PDB_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">By default, this program accesses the structure files it needs from an internal anvi&#x27;o database that can be set up with anvi-setup-pdb-database. If a required structure is not in this database, it will instead be downloaded from the RCSB PDB server. This parameter exists only if a) you created a database and b) it exists in a custom location. In this case, please provide that path here. Otherwise we vibing.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes">
<header class="parameter-group-header"><span class="parameter-group-title">GENES</span> <span class="parameter-group-description">Specifying which genes you want structures for. The first two options apply to a contigs-db input; the last three apply to a pangenome input.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-genes_of_interest"><code class="parameter-flags">--genes-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene caller IDs. There should be only one column in the file, and each line should correspond to a unique gene caller id (without a column header).</span></dd>
<dt class="parameter" id="parameter-gene_caller_ids"><code class="parameter-flags">--gene-caller-ids</code> <code class="parameter-metavar">GENE_CALLER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene caller ids to focus on. Multiple of them can be declared separated by a delimiter (the default is a comma, and if there is no option to change the delimiter, you must use a comma).In anvi-gen-variability-profile, if you declare nothing you will get all genes matching your other filtering criteria. In other programs, you may get everything, nothing, or an error. It really depends on the situation. Fortunately, mistakes are cheap, so it&#x27;s worth a try.</span></dd>
<dt class="parameter" id="parameter-gene_clusters_of_interest"><code class="parameter-flags">--gene-clusters-of-interest</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A file with anvi&#x27;o gene cluster ids. There should be only one column in the file, and each line should correspond to a unique gene cluster id (without a column header). This is the gene-cluster analogue of --genes-of-interest.</span></dd>
<dt class="parameter" id="parameter-gene_cluster_ids"><code class="parameter-flags">--gene-cluster-ids</code> <code class="parameter-metavar">GENE_CLUSTER_IDS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Gene cluster ids to focus on. Multiple of them can be declared, separated by a comma (e.g., --gene-cluster-ids GC_00000001,GC_00000002). This is the gene-cluster analogue of --gene-caller-ids. If you declare nothing, anvi&#x27;o may assume all of them, depending on the program.</span></dd>
<dt class="parameter parameter-switch" id="parameter-select_representative"><code class="parameter-flags">--select-representative</code></dt>
<dd class="parameter-details"><span class="parameter-help">Instead of selecting every gene in each gene cluster of interest, select a single representative gene per gene cluster. Anvi&#x27;o picks the representative using a medoid-based strategy over the aligned amino acid sequences (it discards length outliers and prefers complete gene calls), so this requires a pangenome for which gene-cluster alignments were computed. The representative is a real gene from the cluster (not a consensus sequence).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output file and output style.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_db_path"><code class="parameter-flags">-o, --output-db-path</code> <code class="parameter-metavar">DB_FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Output file path for the new database.</span></dd>
<dt class="parameter" id="parameter-dump_dir"><code class="parameter-flags">--dump-dir</code> <code class="parameter-metavar">DUMP_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Modeling and annotating structures requires a lot of moving parts, each which have their own outputs. The output of this program is a structure database containing the pertinent results of this computation, however a lot of stuff doesn&#x27;t make the cut. By providing a directory for this parameter you will get, in addition to the structure database, a directory containing the raw output for everything.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-engine">
<header class="parameter-group-header"><span class="parameter-group-title">ENGINE</span> <span class="parameter-group-description">Which structure-prediction engine should anvi&#x27;o use?</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-engine"><code class="parameter-flags">--engine</code> <code class="parameter-metavar">ENGINE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The structure-prediction engine to use. &#x27;modeller&#x27; (the default) predicts structures with template-based homology modelling. &#x27;colabfold&#x27; predicts structures with AlphaFold2 via ColabFold. Each engine has its own set of parameters (see the MODELLER PARAMS and COLABFOLD PARAMS groups), while a few parameters apply to both (see SHARED PREDICTION PARAMS). This has no effect if you import structures with --external-structures instead of predicting them.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">modeller</code> <code class="parameter-choice">colabfold</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">modeller</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-shared-prediction-params">
<header class="parameter-group-header"><span class="parameter-group-title">SHARED PREDICTION PARAMS</span> <span class="parameter-group-description">Parameters that apply to whichever prediction engine you selected with --engine.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_models"><code class="parameter-flags">--num-models, -N</code> <code class="parameter-metavar">NUM_MODELS</code></dt>
<dd class="parameter-details"><span class="parameter-help">The number of structures (&quot;models&quot;) to compute per protein; the best one is kept. For the MODELLER engine, each of the N models perturbs the initial atomic positions (by an amount set with --deviation) and is optimized independently, so a larger N searches more of the solution space (though template quality matters most, so there is no need to go overboard). For the ColabFold engine, this is the number of AlphaFold2 models (1-5) to run, and the highest-confidence one is kept. In both cases, fewer models is faster but explores less. The default is 1.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_dssp"><code class="parameter-flags">--skip-DSSP</code></dt>
<dd class="parameter-details"><span class="parameter-help">Dictionary of Secondary Structure of Proteins (DSSP) is a program that takes as its input a protein structure file and outputs predicted secondary structure (alpha helix, beta strand, etc.), measures of solvent accessibility, and hydrogen bonds for each residue in the protein. If for some reason you don&#x27;t want this, provide this flag.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-modeller-params">
<header class="parameter-group-header"><span class="parameter-group-title">MODELLER PARAMS</span> <span class="parameter-group-description">Parameters for MODELLER&#x27;s homology modeling. These only apply when `--engine modeller` (the default) is set.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-deviation"><code class="parameter-flags">--deviation, -d</code> <code class="parameter-metavar">DEVIATION</code></dt>
<dd class="parameter-details"><span class="parameter-help">Deviation (angstroms)</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">4.0</code></span></dd>
<dt class="parameter" id="parameter-modeller_database"><code class="parameter-flags">--modeller-database, -D</code> <code class="parameter-metavar">MODELLER_DATABASE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Which database do you want to search the structures of? Default is &quot;pdb_95&quot;. If you have your own database it must have either the extension .bin or .pir. If you don&#x27;t have a database or don&#x27;t know what this means, don&#x27;t worry, we will both inform you and take care of you.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">pdb_95</code></span></dd>
<dt class="parameter" id="parameter-scoring_method"><code class="parameter-flags">--scoring-method, -b</code> <code class="parameter-metavar">SCORING_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">How should the best model be decided? The metric used could be any of GA341_score, DOPE_score, and molpdf. GA341 is an absolute measure, where a good model will have a score near 1.0, whereas anything below 0.6 can be considered bad. DOPE and molpdf scores are relative energy measures, where lower scores are better. DOPE has been generally shown to be a better distinguisher between good and bad models than molpdf. The default is DOPE_score. To learn more see the MODELLER tutorial: https://salilab.org/modeller/tutorial/basic.html.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">DOPE_score</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-very_fast"><code class="parameter-flags">--very-fast</code></dt>
<dd class="parameter-details"><span class="parameter-help">If provided, a very fast optimization is done for each model at the cost of accuracy. It is recommended to use a --num-models of 1, since the optimization is so crude that all models will likely converge to the same solution.</span></dd>
<dt class="parameter" id="parameter-percent_cutoff"><code class="parameter-flags">--percent-cutoff, -p</code> <code class="parameter-metavar">PERCENT_CUTOFF</code></dt>
<dd class="parameter-details"><span class="parameter-help">If a protein in the database has a percent identity to the gene of interest that is less than this parameter, then it is not considered as a template. The default is 30.000000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">30</code></span></dd>
<dt class="parameter" id="parameter-alignment_fraction_cutoff"><code class="parameter-flags">--alignment-fraction-cutoff, -a</code> <code class="parameter-metavar">ALIGNMENT_FRACTION_CUTOFF</code></dt>
<dd class="parameter-details"><span class="parameter-help">If a protein in the database aligns to a fraction of the gene of interest that is less than this parameter, the template is not considered. For example, if --alignment-cutoff is set to 0.90, and the fraction of the gene of interest that is covered by a potential template is 0.80 in their alignment, the template does not align to enough of the gene of interest to be considered. The default is 0.800000.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.8</code></span></dd>
<dt class="parameter" id="parameter-max_number_templates"><code class="parameter-flags">--max-number-templates, -t</code> <code class="parameter-metavar">MAX_NUMBER_TEMPLATES</code></dt>
<dd class="parameter-details"><span class="parameter-help">Generally speaking it is best to use as many templates as possible given that they have high proper percent identity to the gene of interest. Taken from https://salilab.org/modeller/methenz/andras/node4.html: &#x27;The use of several templates generally increases the model accuracy. One strength of MODELLER is that it can combine information from multiple template structures, in two ways. First, multiple template structures may be aligned with different domains of the target, with little overlap between them, in which case the modeling procedure can construct a homology-based model of the whole target sequence. Second, the template structures may be aligned with the same part of the target, in which case the modeling procedure is likely to automatically build the model on the locally best template [43,44]. In general, it is frequently beneficial to include in the modeling process all the templates that differ substantially from each other, if they share approximately the same overall similarity to the target sequence.&#x27; The default is 5.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">5</code></span></dd>
<dt class="parameter" id="parameter-modeller_executable"><code class="parameter-flags">--modeller-executable</code> <code class="parameter-metavar">MODELLER_EXECUTABLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The MODELLER program to use. For example, `mod9.19`. Anvi&#x27;o will try and find it if not provided</span></dd>
<dt class="parameter parameter-switch" id="parameter-offline_mode"><code class="parameter-flags">--offline-mode</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o first tries to obtain template structures from a database (see --pdb-db for details). If the requested template does not exist in the database, its structure will be downloaded from the RCSB PDB server. However, if you don&#x27;t have access to internet, or hate the RCSB PDB, provide this flag so that all operations of this program remain offline. If the template structure is not in the database, then no template structure for you.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-colabfold-params">
<header class="parameter-group-header"><span class="parameter-group-title">COLABFOLD PARAMS</span> <span class="parameter-group-description">Parameters for structure prediction with ColabFold (AlphaFold2). These only apply when `--engine colabfold` is set. ColabFold is not assumed to be on your $PATH: provide the name of the conda environment it is installed in with --colabfold-conda-env.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-colabfold_conda_env"><code class="parameter-flags">--colabfold-conda-env</code> <code class="parameter-metavar">ENV_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The name of the conda environment in which ColabFold (colabfold_batch / colabfold_search) is installed. Anvi&#x27;o will run every ColabFold command via `conda run -n ENV_NAME`. If you leave this blank, anvi&#x27;o will assume the ColabFold programs are directly available (e.g. on your $PATH).</span></dd>
<dt class="parameter parameter-switch" id="parameter-colabfold_msa_server"><code class="parameter-flags">--colabfold-msa-server</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use the public MMseqs2 MSA server hosted by the ColabFold team to generate the multiple sequence alignment (MSA) step online. This requires an internet connection and is fine for a handful of sequences. Mutually exclusive with --colabfold-db. You must choose one of the two.</span></dd>
<dt class="parameter" id="parameter-colabfold_db"><code class="parameter-flags">--colabfold-db</code> <code class="parameter-metavar">DB_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Generate the MSA step locally instead of using the public server, by searching a local ColabFold database in this directory (the one you set up with ColabFold&#x27;s `setup_databases.sh`). Recommended when you have many sequences. Mutually exclusive with --colabfold-msa-server. You must choose one of the two.</span></dd>
<dt class="parameter" id="parameter-num_recycle"><code class="parameter-flags">--num-recycle</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Number of prediction recycles for ColabFold. Increasing this can improve prediction quality at the cost of runtime. If not set, ColabFold&#x27;s default is used.</span></dd>
<dt class="parameter parameter-switch" id="parameter-amber"><code class="parameter-flags">--amber</code></dt>
<dd class="parameter-details"><span class="parameter-help">Relax the best predicted structure with OpenMM/Amber. This can improve the quality of side-chains at the cost of longer runtime.</span></dd>
<dt class="parameter" id="parameter-colabfold_additional_parameters"><code class="parameter-flags">--colabfold-additional-parameters</code> <code class="parameter-metavar">CMD LINE PARAMS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Additional parameters to pass verbatim to `colabfold_batch`, for anything not exposed as a dedicated flag above. Because the value itself begins with dashes, you must attach it with an equals sign so it is not mistaken for anvi&#x27;o&#x27;s own flags, e.g. --colabfold-additional-parameters=&quot;--num-seeds 2 --use-dropout&quot;. Anvi&#x27;o does not validate these, so use with care.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_msa"><code class="parameter-flags">--only-msa</code></dt>
<dd class="parameter-details"><span class="parameter-help">Run only ColabFold&#x27;s multiple sequence alignment (MSA) step and stop, writing the MSAs and a small checkpoint manifest into --dump-dir. This creates a resumable checkpoint so you can run the CPU-heavy MSA step and the GPU-heavy prediction step separately (e.g. on different cluster nodes). This only works with a local ColabFold database (--colabfold-db): the public MSA server (--colabfold-msa-server) generates the MSA and predicts the structure in a single step that cannot be split. No structure database is produced in this mode; you finish the job later with --only-predict. Requires --dump-dir.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_predict"><code class="parameter-flags">--only-predict</code></dt>
<dd class="parameter-details"><span class="parameter-help">Skip the MSA step and predict structures from an MSA checkpoint that an earlier --only-msa run wrote to --dump-dir, then build the structure database. You must provide the SAME --contigs-db and genes of interest as the --only-msa run: anvi&#x27;o verifies that the sequences match the checkpoint before predicting, and refuses to continue if they do not. Requires --dump-dir (pointing at the --only-msa output); the structure database goes to -o (default STRUCTURE.db). Mutually exclusive with --only-msa.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-import-structures">
<header class="parameter-group-header"><span class="parameter-group-title">IMPORT STRUCTURES</span> <span class="parameter-group-description">Instead of predicting structures, import pre-computed ones. This bypasses the --engine choice entirely.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-external_structures"><code class="parameter-flags">--external-structures</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists PDB protein structures. The first item in the header line should read &#x27;gene_callers_id&#x27;, and the second should read &#x27;path&#x27;. Each line in the file should describe a single entry, where the first column is the gene_callers_id that the structure corresponds to, and the second column is the path to the structure file.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extra">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRA</span> <span class="parameter-group-description">Everything else.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-write_buffer_size"><code class="parameter-flags">--write-buffer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many items should be kept in memory before they are written to the disk. The default is 25. The larger the buffer size, the less frequently the program will access the disk, yet the more memory will be consumed since the processed items will be cleared off the memory only after they are written to the disk. The default buffer size will likely work for most cases, but if you feel you need to reduce it, we trust you. Please keep an eye on the memory usage output to make sure the memory use never exceeds the size of the physical memory. If --num-threads is 1, this parameter is ignored because the DB is written to after each gene</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">25</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources


* [A conceptual tutorial on the structural biology capabilities of anvio](http://merenlab.org/2018/09/04/structural-biology-with-anvio/)

* [A practical tutorial section in the infant gut tutorial](http://merenlab.org/tutorials/infant-gut/#chapter-vii-linking-genomic-heterogeneity-to-protein-structures)


{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_structure_database.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
