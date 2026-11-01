---
layout: program
title: anvi-merge-trnaseq
excerpt: An anvi'o program. This program processes one or more anvi&#x27;o tRNA-seq databases produced by `anvi-trnaseq` and outputs anvi&#x27;o contigs and merged profile databases accessible to other tools in the anvi&#x27;o ecosystem.
categories: [anvio]
comments: false
redirect_from: /m/anvi-merge-trnaseq
image:
  featurerelative: ../../../images/header.png
  display: true
---

This program processes one or more anvi&#x27;o tRNA-seq databases produced by `anvi-trnaseq` and outputs anvi&#x27;o contigs and merged profile databases accessible to other tools in the anvi&#x27;o ecosystem. Final tRNA &quot;seed sequences&quot; are determined from a set of samples. Each sample yields a set of tRNA predictions stored in a tRNA-seq database, and these tRNAs may be shared among the samples. tRNA may be 3&#x27; fragments and thereby subsequences of longer tRNAs from other samples which would become seeds. The profile database produced by this program records the coverages of seeds in each sample. This program finalizes predicted nucleotide modification sites using tunable substitution rate parameters.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[trnaseq-db](../../artifacts/trnaseq-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[trnaseq-contigs-db](../../artifacts/trnaseq-contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[trnaseq-profile-db](../../artifacts/trnaseq-profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **finds tRNA seed sequences from a set of tRNA-seq samples**.

This program follows <span class="artifact-p">[anvi-trnaseq](/help/main/programs/anvi-trnaseq)</span> in the [trnaseq-workflow](../../workflows/trnaseq/). <span class="artifact-p">[anvi-trnaseq](/help/main/programs/anvi-trnaseq)</span> is run on each tRNA-seq sample, producing sample <span class="artifact-n">[trnaseq-db](/help/main/artifacts/trnaseq-db)</span>s. A tRNA-seq database contains predictions of tRNA sequences, structures, and modification sites in the sample. anvi-merge-trnaseq takes as input the tRNA-seq databases from a set of samples. It compares tRNAs predicted from the samples, finding those in common and calculating their sample coverages. The final tRNA sequences predicted from all samples are called **tRNA seeds** and function like contigs in metagenomic experiments. Seeds are stored in a <span class="artifact-n">[trnaseq-contigs-db](/help/main/artifacts/trnaseq-contigs-db)</span> and sample coverages are stored in a <span class="artifact-n">[trnaseq-profile-db](/help/main/artifacts/trnaseq-profile-db)</span>. These databases are **variants** of normal <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>s and <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>s, performing similar functions in the anvi'o ecosystem but containing somewhat different information.

Most of the heavy computational work in the [trnaseq-workflow](../../workflows/trnaseq/) is performed by <span class="artifact-p">[anvi-trnaseq](/help/main/programs/anvi-trnaseq)</span>. anvi-merge-trnaseq is meant run relatively quickly, allowing its parameters to be tuned to fit the dataset.

The `anvi-merge-trnaseq --help` menu provides detailed explanations of the parameters controlling the multifacted analyses performed by the program.

## Key parameters

### Number of reported seeds

One key parameter is the number of reported tRNA seed sequences (`--max-reported-trna-seeds`). The default value of 10,000 seeds is more appropriate for a complex microbial community than a pure culture of a bacterial isolate, which should yield a number of tRNA seeds equal to the number of expressed tRNAs, say ~30. Sequence artifacts may be reported in addition to the 30 actual tRNAs with a higher value like 10,000. Artifacts are relatively common despite intensive screening by <span class="artifact-p">[anvi-trnaseq](/help/main/programs/anvi-trnaseq)</span> and anvi-merge-trnaseq due to nontemplated nucleotides and modification-induced mutations introduced into tRNA-seq reads by reverse transcription. In practice, artifacts are easy to distinguish from true tRNA seeds by analyzing seed coverage in <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> and checking seed homology to reference databases, among other measures.

### Modification filters

Other key parameters, `--min-variation` and `--min-third-fourth-nt`, determine the coverage cutoffs that distinguish predicted positions of modified nucleotides from single nucleotide variants. Compared to SNVs, modifications typically produce higher nucleotide variability to three or four different nucleotides. However, modification-induced mutations are often highly skewed to one other nucleotide rather than all three mutant nucleotides. Furthermore, the high coverage of seeds in many tRNA-seq libraries can uncover SNVs with a low-frequency third nucleotide rather than the expected two. Some SNVs that are wrongly called modifications can be easily spotted in <span class="artifact-p">[anvi-interactive](/help/main/programs/anvi-interactive)</span> and the output of <span class="artifact-p">[anvi-plot-trnaseq](/help/main/programs/anvi-plot-trnaseq)</span> due to covariation at two positions in the seed as a result of base pairing. In other words, SNV frequencies are equivalent at the two base paired positions in every sample, where modification artifacts have no effect on nucleotide variability at another position across the molecule.

## Examples

*Merge two samples.*

<div class="codeblock" markdown="1">
anvi&#45;merge&#45;trnaseq trnaseq_database_1 trnaseq_database_2 (...) \
                   &#45;o OUTPUT_DIRECTORY \
                   &#45;n PROJECT_NAME \
</div>

*Merge two samples with and without demethylase treatment, giving priority to the demethylase split in calling the underlying nucleotide at modified positions.*

<div class="codeblock" markdown="1">
anvi&#45;merge&#45;trnaseq untreated_trnaseq_database demethylase_trnaseq_database (...) \
                   &#45;o OUTPUT_DIRECTORY \
                   &#45;n PROJECT_NAME \
                   &#45;&#45;preferred&#45;treatment demethylase
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-merge-trnaseq.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-merge-trnaseq`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-merge-trnaseq [-h] [-o DIR_PATH] [-n PROJECT_NAME] [-T NUM_THREADS] [--max-reported-trna-seeds INT] [-W] [--description TEXT_FILE] [--feature-threshold {acceptor_stem,fiveprime_acceptor_stem_sequence,position_8,position_9,d_arm,d_stem,fiveprime_d_stem_sequence,d_loop,threeprime_d_stem_sequence,position_26,anticodon_arm,anticodon_stem,fiveprime_anticodon_stem_sequence,anticodon_loop}] [--preferred-treatment PREFERRED_TREATMENT] [--nonspecific-output NONSPECIFIC_OUTPUT] [--min-variation FLOAT] [--min-third-fourth-nt FLOAT] [--min-indel-fraction FLOAT] [--distance DISTANCE_METRIC] [--linkage LINKAGE_METHOD] TRNASEQ_DB(S) [TRNASEQ_DB(S) ...]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required parameter-positional" id="parameter-input"><code class="parameter-flags">TRNASEQ_DB(S)</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Anvi&#x27;o tRNA-seq databases representing samples in an experiment</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
<dt class="parameter" id="parameter-project_name"><code class="parameter-flags">-n, --project-name</code> <code class="parameter-metavar">PROJECT_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Name of the project. Please choose a short but descriptive name (so anvi&#x27;o can use it whenever she needs to name an output file, or add a new table in a database, or name her first born).</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter" id="parameter-max_reported_trna_seeds"><code class="parameter-flags">--max-reported-trna-seeds</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter limits the number of tRNA seed sequences reported in the contigs database, as anvi-interactive can have trouble displaying large numbers of items. To remove the limit on reported seeds, specify a value of -1.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10000</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-feature_threshold"><code class="parameter-flags">--feature-threshold</code> <code class="parameter-metavar">FEATURE_THRESHOLD</code></dt>
<dd class="parameter-details"><span class="parameter-help">This option prevents formation of tRNA seed sequences from input sequences that did not reach the threshold feature in anvi-trnaseq profiling from the 3&#x27; end. The more stringent the threshold, the fewer spurious seeds are formed from rare chimeric and other inaccurate tRNA predictions. The most stringent threshold is &quot;acceptor_stem&quot;, the most 5&#x27; feature, resulting in seeds formed only from tRNAs with a complete feature set (with the exception of the extra 5&#x27;-G in tRNA-His).</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">acceptor_stem</code> <code class="parameter-choice">fiveprime_acceptor_stem_sequence</code> <code class="parameter-choice">position_8</code> <code class="parameter-choice">position_9</code> <code class="parameter-choice">d_arm</code> <code class="parameter-choice">d_stem</code> <code class="parameter-choice">fiveprime_d_stem_sequence</code> <code class="parameter-choice">d_loop</code> <code class="parameter-choice">threeprime_d_stem_sequence</code> <code class="parameter-choice">position_26</code> <code class="parameter-choice">anticodon_arm</code> <code class="parameter-choice">anticodon_stem</code> <code class="parameter-choice">fiveprime_anticodon_stem_sequence</code> <code class="parameter-choice">anticodon_loop</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">anticodon_loop</code></span></dd>
<dt class="parameter" id="parameter-preferred_treatment"><code class="parameter-flags">--preferred-treatment</code> <code class="parameter-metavar">PREFERRED_TREATMENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">tRNA-seq databases recorded as employing the preferred treatment are given preference in setting nucleotides at predicted modification positions in tRNA seed sequences. By default, equal preference is given to all of the input databases. The reason for this parameter is that paired untreated and enzymatically treated splits can assist in the identification of underlying modified nucleotides. For example, splits treated with a demethylase can be compared to untreated splits to probe which nucleotides are methylated.</span></dd>
<dt class="parameter" id="parameter-nonspecific_output"><code class="parameter-flags">--nonspecific-output</code> <code class="parameter-metavar">NONSPECIFIC_OUTPUT</code></dt>
<dd class="parameter-details"><span class="parameter-help">A significant fraction of tRNA-seq reads can be from tRNA fragments. These can be real biomolecules or artifactual 3&#x27; fragments produced as a result of incomplete reverse transcription of the tRNA template to cDNA. Rather than randomly assigning fragments to a single target, as in metagenomic read recruitment by Bowtie, anvi-trnaseq tracks all of the longer sequences containing each fragment. This results in two categories of coverage: &#x27;specific&#x27; for reads that are only found in one seed and &#x27;nonspecific&#x27; for reads found in multiple seeds. Specific coverages are always reported in a separate profile database. Nonspecific coverages can be reported in three types of database, as specified by this parameter. &#x27;nonspecific_db&#x27; produces a profile database only containing nonspecific coverages. &#x27;combined_db&#x27; produces a database containing separate specific and nonspecific layers. &#x27;summed_db&#x27; produces a database containing summed specific and nonspecific coverages. To produce multiple types of databases, separate the database types with commas (no spaces). For example, all three databases are produced with the argument, &#x27;nonspecific_db,combined_db,summed_db&#x27;.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">nonspecific_db,combined_db</code></span></dd>
<dt class="parameter" id="parameter-min_variation"><code class="parameter-flags">--min-variation</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">When more than 2 nucleotides are found at a position in a tRNA, a modification-induced mutation (substitution) is considered rather than a single nucleotide variant. This parameter sets a key criterion for the prediction of a modification, the minimum fraction of specific coverage at a position with more than 2 nucleotides that must be contributed by nucleotides beside the most abundant nucleotide. For example, if A, C, and G are found at position 20 of a tRNA, and A is represented by 95 reads, C by 3 reads, and G by 1 read, then with a parameter value of 0.05, the site would be 1 C, G, or T short of meeting the threshold for prediction of a modification.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.01</code></span></dd>
<dt class="parameter" id="parameter-min_third_fourth_nt"><code class="parameter-flags">--min-third-fourth-nt</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter sets a key criterion for the prediction of a modification, the minimum fraction of specific coverage at a position with more than 2 nucleotides that must be contributed by nucleotides beside the 2 most abundant nucleotides. Unlike --min-variation, this criterion only needs to be met for 1 sample to permit modification of the position in all samples of the experiment. For example, consider an experiment with 2 samples and a parameter value of 0.01. In Sample 1, A, C, and G are found at position 20 of a tRNA, and A is represented by 95 reads, C by 4 reads, and G by 1 read. The default parameter value of 0.01 is exactly met at the position thanks to G. In Sample 2, A, C, G, and T are found at position 20 of the same tRNA seed, and A is represented by 1000 reads, C by 100 reads, G by 2 reads, and T by 2 reads. The third and fourth nucleotides don&#x27;t meet the coverage threshold of 0.01, but this is irrelevant for calling the modification, since Sample 1 met the criterion. There is an important consideration due to the way this threshold is currently imposed. Potential modification sites that do not meet the threshold are not treated like single nucleotide variants in anvi-trnaseq: they do not cause the seed sequence to be split such that no seed contains a variant that was not deemed to be a modification. Rather, candidate modification positions that do not meet this threshold are retained in the seed BUT NOT REPORTED. Therefore, we recommend rerunning this command with a parameter value of 0 to inspect seeds for undisplayed variants (possible SNVs) with a low level of third and fourth nucleotides.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.002</code></span></dd>
<dt class="parameter" id="parameter-min_indel_fraction"><code class="parameter-flags">--min-indel-fraction</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter controls which indels are reported in the tRNA-seq profile database. Coverage of an indel in a sample must meet the minimum fraction of specific coverage. Indel coverages are calculated separately for specific, nonspecific, and summed coverages.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.001</code></span></dd>
<dt class="parameter" id="parameter-distance"><code class="parameter-flags">--distance</code> <code class="parameter-metavar">DISTANCE_METRIC</code></dt>
<dd class="parameter-details"><span class="parameter-help">The distance metric for the hierarchical clustering. The default distance metric is &#x27;euclidean&#x27;. You can find the full list of distance metrics either by making a mistake (such as entering a non-existent distance metric and making anvi&#x27;o upset), or by taking a look at the help menu of the hierarchy.distance.pdist function in the scipy.cluster module.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">euclidean</code></span></dd>
<dt class="parameter" id="parameter-linkage"><code class="parameter-flags">--linkage</code> <code class="parameter-metavar">LINKAGE_METHOD</code></dt>
<dd class="parameter-details"><span class="parameter-help">The linkage method for the hierarchical clustering. The default linkage method is &#x27;ward&#x27;, because that is the best one. It really is. We talked to a lot of people and they were all like &#x27;this is the best one available&#x27; and it is just all out there. Honestly it is so good that we will build a wall around it and make other linkage methods pay for it. But if you want to see a full list of available ones you can check the hierarchy.linkage function in the scipy.cluster module. Up to you really. But then you can&#x27;t use ward anymore, and you would have to leave anvi&#x27;o right now.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">ward</code></span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/merge_trnaseq.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
