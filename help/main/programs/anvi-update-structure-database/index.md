---
layout: program
title: anvi-update-structure-database
excerpt: An anvi'o program. Add or re-run genes from an already existing structure database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-update-structure-database
image:
  featurerelative: ../../../images/header.png
  display: true
---

Add or re-run genes from an already existing structure database. All settings used to generate your database will be used in this program.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[pan-db](../../artifacts/pan-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[genomes-storage-db](../../artifacts/genomes-storage-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[genes-of-interest-txt](../../artifacts/genes-of-interest-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[external-structures](../../artifacts/external-structures) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[structure-db](../../artifacts/structure-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program is used to add additional genes to or re-run the analysis of genes already within a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>.

For that reason, it is very similar to <span class="artifact-p">[anvi-gen-structure-database](/help/main/programs/anvi-gen-structure-database)</span> and the parameters used to run that program (when you first generated your <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>) will be automatically applied when you run this program. To know what MODELLER parameters are being used, you run this program on a <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> with the flag `--list-modeller-params`.

To run this program, just provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>, and name your genes of interest (either in a file or directly). If the named genes are not already in your <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>, they will be added to the database.

For example, if your <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> already contains the genes with caller-IDs 1, 2 and 3, and you run

<div class="codeblock" markdown="1">
anvi&#45;update&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span> \
                               &#45;&#45;gene&#45;caller&#45;ids 1,4,5
</div>

Then the structural analysis for genes 4 and 5 will be added to your <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span> (assuming templates are found). Gene 1 will be ignored, since it is already present.

If instead you want to re-run the structural analysis on genes that are already in your <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>, you'll need to specify that by adding the flag `--rerun-genes`

<div class="codeblock" markdown="1">
anvi&#45;update&#45;structure&#45;database &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                               &#45;s <span class="artifact&#45;n">[structure&#45;db](/help/main/artifacts/structure&#45;db)</span> \
                               &#45;&#45;gene&#45;caller&#45;ids 1,4,5 \
                               &#45;&#45;rerun&#45;genes
</div>

Now, the program will rerun the analysis for gene 1 and will still add genes 4 and 5 to the <span class="artifact-n">[structure-db](/help/main/artifacts/structure-db)</span>.

Both of these runs will have the same MODELLER parameters as your run of <span class="artifact-p">[anvi-gen-structure-database](/help/main/programs/anvi-gen-structure-database)</span>. However, to get the raw outputs, you will need to use the parameter `--dump-dir`. You can also set a specific MODELLER program with `--modeller-executable`. Parameters for multi-threading would also have to be given again.
{:.notice}
Like <span class="artifact-p">[anvi-gen-structure-database](/help/main/programs/anvi-gen-structure-database)</span>, this program also accepts <span class="artifact-n">[external-structures](/help/main/artifacts/external-structures)</span> -- for a contigs-db or a pangenome structure database. When updating a pangenome structure database, anvi'o reconciles the surrogate protein ids by natural key, so adding or re-running structures never disturbs the ids already in the database.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-update-structure-database.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-update-structure-database`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-update-structure-database [-h] [-c CONTIGS_DB] [--pan-db PAN_DB] [-g GENOMES_STORAGE] -s STRUCTURE_DB [--genes-of-interest FILE] [--gene-caller-ids GENE_CALLER_IDS] [--gene-clusters-of-interest FILE] [--gene-cluster-ids GENE_CLUSTER_IDS] [--select-representative] [--external-structures FILE_PATH] [--dump-dir DUMP_DIR] [--list-modeller-params] [--colabfold-conda-env ENV_NAME] [--colabfold-msa-server] [--colabfold-db DB_DIR] [--only-msa] [--only-predict] [--rerun-genes] [--modeller-executable MODELLER_EXECUTABLE] [-T NUM_THREADS] [--write-buffer-size INT]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-databases">
<header class="parameter-group-header"><span class="parameter-group-title">DATABASES</span> <span class="parameter-group-description">Declaring relevant anvi&#x27;o databases. First things first.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-pan_db"><code class="parameter-flags">--pan-db</code> <code class="parameter-metavar">PAN_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o pan database</span></dd>
<dt class="parameter" id="parameter-genomes_storage"><code class="parameter-flags">-g, --genomes-storage</code> <code class="parameter-metavar">GENOMES_STORAGE</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o genomes storage file</span></dd>
<dt class="parameter parameter-required" id="parameter-structure_db"><code class="parameter-flags">-s, --structure-db</code> <code class="parameter-metavar">STRUCTURE_DB</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o structure database.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-genes">
<header class="parameter-group-header"><span class="parameter-group-title">GENES</span> <span class="parameter-group-description">Specify which genes you want to be modelled. If a gene already exists in the DB, it will be overwritten if --overwrite is set. Otherwise, an error will be raised.</span></header>
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
<dt class="parameter" id="parameter-external_structures"><code class="parameter-flags">--external-structures</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">A two-column TAB-delimited flat text file that lists PDB protein structures. The first item in the header line should read &#x27;gene_callers_id&#x27;, and the second should read &#x27;path&#x27;. Each line in the file should describe a single entry, where the first column is the gene_callers_id that the structure corresponds to, and the second column is the path to the structure file.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output file and output style.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-dump_dir"><code class="parameter-flags">--dump-dir</code> <code class="parameter-metavar">DUMP_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Modeling and annotating structures requires a lot of moving parts, each which have their own outputs. The output of this program is a structure database containing the pertinent results of this computation, however a lot of stuff doesn&#x27;t make the cut. By providing a directory for this parameter you will get, in addition to the structure database, a directory containing the raw output for everything.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-modeller-params">
<header class="parameter-group-header"><span class="parameter-group-title">MODELLER PARAMS</span> <span class="parameter-group-description">Parameters for MODELLER&#x27;s homology modeling.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-list_modeller_params"><code class="parameter-flags">--list-modeller-params</code></dt>
<dd class="parameter-details"><span class="parameter-help">Since you are updating an existing DB, modeller params are set in place. You can have this program list them by providing this flag</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-colabfold-params">
<header class="parameter-group-header"><span class="parameter-group-title">COLABFOLD PARAMS</span> <span class="parameter-group-description">Parameters for structure prediction with ColabFold (AlphaFold2). These only apply when the structure database you are updating was created with the ColabFold engine. The scientific parameters (number of models, recycles, Amber relaxation, etc.) are read back from the database so the update stays consistent with how it was created; the parameters below are machine-specific and so must be provided again here.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-colabfold_conda_env"><code class="parameter-flags">--colabfold-conda-env</code> <code class="parameter-metavar">ENV_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">The name of the conda environment in which ColabFold (colabfold_batch / colabfold_search) is installed. Anvi&#x27;o will run every ColabFold command via `conda run -n ENV_NAME`. If you leave this blank, anvi&#x27;o will assume the ColabFold programs are directly available (e.g. on your $PATH).</span></dd>
<dt class="parameter parameter-switch" id="parameter-colabfold_msa_server"><code class="parameter-flags">--colabfold-msa-server</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use the public MMseqs2 MSA server hosted by the ColabFold team to generate the multiple sequence alignment (MSA) step online. Provide this if the database you are updating was created this way. Mutually exclusive with --colabfold-db.</span></dd>
<dt class="parameter" id="parameter-colabfold_db"><code class="parameter-flags">--colabfold-db</code> <code class="parameter-metavar">DB_DIR</code></dt>
<dd class="parameter-details"><span class="parameter-help">Generate the MSA step locally by searching a local ColabFold database in this directory (the one you set up with ColabFold&#x27;s `setup_databases.sh`). Provide this if the database you are updating was created this way. This path is machine-specific, so it is not stored in the structure database and must be given again here. Mutually exclusive with --colabfold-msa-server.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_msa"><code class="parameter-flags">--only-msa</code></dt>
<dd class="parameter-details"><span class="parameter-help">Run only ColabFold&#x27;s multiple sequence alignment (MSA) step for the genes you are adding and stop, writing the MSAs and a small checkpoint manifest into --dump-dir. This creates a resumable checkpoint so you can run the CPU-heavy MSA step and the GPU-heavy prediction step separately (e.g. on different cluster nodes). This only works with a local ColabFold database (--colabfold-db). No genes are added to the database in this mode; you finish the job later with --only-predict. Requires --dump-dir.</span></dd>
<dt class="parameter parameter-switch" id="parameter-only_predict"><code class="parameter-flags">--only-predict</code></dt>
<dd class="parameter-details"><span class="parameter-help">Skip the MSA step and predict structures from an MSA checkpoint that an earlier --only-msa run wrote to --dump-dir, then add the resulting structures to the database. You must provide the SAME --contigs-db and genes of interest as the --only-msa run. Requires --dump-dir (pointing at the --only-msa output). Mutually exclusive with --only-msa.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extra">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRA</span> <span class="parameter-group-description">Everything else.</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-rerun_genes"><code class="parameter-flags">--rerun-genes</code></dt>
<dd class="parameter-details"><span class="parameter-help">Supply if you would like to rerun structural modelling for your genes of interest if they are already present in your DB</span></dd>
<dt class="parameter" id="parameter-modeller_executable"><code class="parameter-flags">--modeller-executable</code> <code class="parameter-metavar">MODELLER_EXECUTABLE</code></dt>
<dd class="parameter-details"><span class="parameter-help">The MODELLER program to use. For example, `mod9.19`. Anvi&#x27;o will try and find it if not provided.</span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-write_buffer_size"><code class="parameter-flags">--write-buffer-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">How many items should be kept in memory before they are written to the disk. The default is 25. The larger the buffer size, the less frequently the program will access the disk, yet the more memory will be consumed since the processed items will be cleared off the memory only after they are written to the disk. The default buffer size will likely work for most cases, but if you feel you need to reduce it, we trust you. Please keep an eye on the memory usage output to make sure the memory use never exceeds the size of the physical memory. If --num-threads is 1, this parameter is ignored because the DB is written to after each gene</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">25</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/update_structure_database.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
