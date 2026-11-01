---
layout: program
title: anvi-trnaseq
excerpt: An anvi'o program. A program to process reads from a tRNA-seq dataset to generate an anvi&#x27;o tRNA-seq database.
categories: [anvio]
comments: false
redirect_from: /m/anvi-trnaseq
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to process reads from a tRNA-seq dataset to generate an anvi&#x27;o tRNA-seq database.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/semiller10.jpg" /></div><div class="anvio-person-info-box"><a href="/people/semiller10" target="_blank"><span class="anvio-person-name">Samuel Miller</span></a><div class="anvio-person-social-box"><a href="https://semiller10.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:samuelmiller10@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/smiller_science" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/semiller10" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[trnaseq-fasta](../../artifacts/trnaseq-fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[trnaseq-db](../../artifacts/trnaseq-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>




## Usage


This program **analyzes a tRNA-seq library, generating de novo predictions of tRNA sequences, structures, and modification positions**.

A FASTA file of merged paired-end tRNA-seq reads is required as input. This file is produced by the initial steps of the [trnaseq-workflow](../../workflows/trnaseq/), in which [Illumina-utils](https://github.com/merenlab/illumina-utils), merges paired-end reads and <span class="artifact-p">[anvi-script-reformat-fasta](/help/main/programs/anvi-script-reformat-fasta)</span> creates anvi'o-compliant deflines in the FASTA file.

The primary output of anvi-trnaseq is a <span class="artifact-n">[trnaseq-db](/help/main/artifacts/trnaseq-db)</span>. Supplemental outputs are also produced -- an analysis summary, a tabular file of unique sequences not identified as tRNA, an a tabular file of 5' and 3' extensions trimmed off mature tRNA.

The `anvi-trnaseq --help` menu provides detailed explanations of the parameters controlling the multifacted analyses performed by the program.

## Examples

*Generate a <span class="artifact-n">[trnaseq-db](/help/main/artifacts/trnaseq-db)</span> from a sample using 16 cores.*

<div class="codeblock" markdown="1">
anvi&#45;trnaseq &#45;f <span class="artifact&#45;n">[trnaseq&#45;fasta](/help/main/artifacts/trnaseq&#45;fasta)</span> \
             &#45;S SAMPLE_NAME \
             &#45;o OUTPUT_DIRECTORY \
             &#45;T 16
</div>

*Generate a <span class="artifact-n">[trnaseq-db](/help/main/artifacts/trnaseq-db)</span> from a sample flagged as being treated with demethylase. The output directory is overwritten if it already exists.*

<div class="codeblock" markdown="1">
anvi&#45;trnaseq &#45;f <span class="artifact&#45;n">[trnaseq&#45;fasta](/help/main/artifacts/trnaseq&#45;fasta)</span> \
             &#45;S SAMPLE_NAME \
             &#45;o OUTPUT_DIRECTORY \
             &#45;T 16 \
             &#45;&#45;treatment demethylase \
             &#45;&#45;overwrite&#45;output&#45;destinations
</div>

## Parameterize tRNA feature profiling

Feature profiling parameters can be modified by the user by in an optional `.ini` file. For example, the user may want a more permissive definition of a tRNA (more false positive identifications of sequences as tRNA, fewer false negative failures to identify sequences as tRNA), increasing the number of unpaired nucleotides allowed in the T stem or increasing the number of unconserved canonical nucleotides allowed in the anticodon loop. Numerous structural parameters like these can be altered.

*Write the `.ini` file to `param.ini`.*

<div class="codeblock" markdown="1">
anvi&#45;trnaseq &#45;&#45;default&#45;feature&#45;param&#45;file PARAM.ini
</div>

*Nicely display the `.ini` defaults that can be written to the file in standard output.*

<div class="codeblock" markdown="1">
anvi&#45;trnaseq &#45;&#45;print&#45;default&#45;feature&#45;params
</div>


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-trnaseq.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-trnaseq`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-trnaseq [-h] [-f FASTA] [-S NAME] [-o DIR_PATH] [--treatment TREATMENT] [-W] [--description TEXT_FILE] [--write-checkpoints] [--load-checkpoint {profile,normalize,map_fragments,substitutions,indels}] [--feature-param-file FILE] [--threeprime-termini THREEPRIME_TERMINI] [--min-length-long-fiveprime INT] [--min-trna-fragment-size INT] [--agglomeration-max-mismatch-freq FLOAT] [--skip-INDEL-profiling] [--max-indel-freq FLOAT] [--left-indel-buffer INT] [--right-indel-buffer INT] [-T NUM_THREADS] [--skip-fasta-check] [--profiling-chunk-size INT] [--alignment-target-chunk-size INT] [--default-feature-param-file OUTPUT_FILENAME] [--print-default-feature-params]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-mandatory">
<header class="parameter-group-header"><span class="parameter-group-title">MANDATORY</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-trnaseq_fasta"><code class="parameter-flags">-f, --trnaseq-fasta</code> <code class="parameter-metavar">FASTA</code></dt>
<dd class="parameter-details"><span class="parameter-help">The FASTA file containing merged (quality-controlled) tRNA-seq reads from a sample. We recommend generating this file via `anvi-run-workflow -w trnaseq` to ensure proper merging of read pairs that may be partially or fully overlapping, and to automatically produce anvi&#x27;o-compliant simple deflines. If there is a problem, anvi&#x27;o will gracefully complain about it.</span></dd>
<dt class="parameter" id="parameter-sample_name"><code class="parameter-flags">-S, --sample-name</code> <code class="parameter-metavar">NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Unique sample name, considering all others in the experiment, that only includes ASCII letters and digits, without spaces</span></dd>
<dt class="parameter" id="parameter-output_dir"><code class="parameter-flags">-o, --output-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for output files</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-extras">
<header class="parameter-group-header"><span class="parameter-group-title">EXTRAS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-treatment"><code class="parameter-flags">--treatment</code> <code class="parameter-metavar">TREATMENT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The type of treatment applied during tRNA-seq sample preparation. The values which are currently known to anvi&#x27;o are &quot;untreated&quot; and &quot;demethylase&quot;, as tRNA-seq samples are commonly split for these treatments. Anvi&#x27;o will warn you if you do not choose one of these known options, but it will not affect data processing. Treatment type is stored for further reference in the output tRNA-seq database, and can be used in anvi-merge-trnaseq to affect which nucleotides are called at predicted modification sites in tRNA seed sequences.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">untreated</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-overwrite_output_destinations"><code class="parameter-flags">-W, --overwrite-output-destinations</code></dt>
<dd class="parameter-details"><span class="parameter-help">Overwrite if the output files and/or directories exist.</span></dd>
<dt class="parameter" id="parameter-description"><code class="parameter-flags">--description</code> <code class="parameter-metavar">TEXT_FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A plain text file that contains some description about the project. You can use Markdown syntax. The description text will be rendered and shown in all relevant interfaces, including the anvi&#x27;o interactive interface, or anvi&#x27;o summary outputs.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-advanced">
<header class="parameter-group-header"><span class="parameter-group-title">ADVANCED</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-switch" id="parameter-write_checkpoints"><code class="parameter-flags">--write-checkpoints</code></dt>
<dd class="parameter-details"><span class="parameter-help">Use this flag to write pickle files of intermediate results at key points in anvi-trnaseq. If anvi&#x27;o crashes for some reason, the argument, --load-checkpoint, with the associated checkpoint name can be used to restart the program from the given checkpoint. This can be useful for saving time if anvi&#x27;o crashes or in comparing the results of different advanced program parameterizations involved in later stages of the analytical pipeline after the checkpoint, such as --min-trna-fragment-size and --agglomeration-max-mismatch-freq. This flag will overwrite existing intermediate files in the output directory as needed.</span></dd>
<dt class="parameter" id="parameter-load_checkpoint"><code class="parameter-flags">--load-checkpoint</code> <code class="parameter-metavar">LOAD_CHECKPOINT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This option restarts `anvi-trnaseq` from the specified checkpoint. It can be useful for saving time if anvi&#x27;o crashed after the checkpoint. It can also be useful in comparing the results of different advanced program parameterizations that are only involved in stages of the analytical pipeline after the checkpoint. `anvi-trnaseq` must previously have been run with the flag, `--write-checkpoints`, so that intermediate checkpoint files were generated. Checkpoint &quot;profile&quot; restarts after tRNA profiling. &quot;normalize&quot; restarts after sequence trimming and normalization. &quot;map_fragments&quot; restarts after non-3&#x27; fragments have been mapped to normalized tRNA sequences. &quot;substitutions&quot; restarts after potential modification-induced substitutions have been found. &quot;indels&quot; restarts after modification-induced indels have been found, the last step in tRNA identification. If `--write-checkpoints` is used in conjunction with `--load-checkpoint` then all existing intermediate files from checkpoints following the one being loaded will be overwritten.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">profile</code> <code class="parameter-choice">normalize</code> <code class="parameter-choice">map_fragments</code> <code class="parameter-choice">substitutions</code> <code class="parameter-choice">indels</code></span></dd>
<dt class="parameter" id="parameter-feature_param_file"><code class="parameter-flags">--feature-param-file</code> <code class="parameter-metavar">FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A .ini file can be provided to set tRNA feature parameters used in de novo profiling/identification of tRNA sequences from the 3&#x27; end. Generate the default file with the command, `anvi-trnaseq --default-feature-param-file`. Dashes in the default file show parameters that cannot be changed, because they do not exist or are set in stone. For instance, the program only detects base pairing in stems, so only stem features are parameterized with a maximum allowed number of unpaired nucleotides, while every other feature has a dash in the &quot;Number allowed unpaired&quot; column. Two quotes in the default file show parameters that are not currently set. To lift a constraint, a parameter value can be replaced by &quot;&quot;. For instance, the conserved purine at D loop/position 21 indicated by the value, 0,R, can be replaced by &quot;&quot; to prevent the program from seeking a conserved nucleotide there. Conserved nucleotides in a feature are set by pairs of zero-based indices and nucleotide symbols. The index indicates the conserved position in the feature, relative to the 5&#x27; end of the feature. The nucleotide symbol can be A, C, G, T (U in cDNA), R (purine), or Y (pyrimidine). The index is separated from the symbol by a comma. Multiple conserved positions in a feature are separted by a semicolon. Feature profiling of a sequence halts when the number of allowed unconserved nucleotides in a feature or the number of allowed unpaired positions in a stem is exceeded. The default allowed number of unconserved nucleotides in the D loop, for example, is 1, so 4 of the 5 conserved positions must be found for the D loop to be positively identified. By default, 1 position is allowed to be unpaired (no Watson-Crick or G-T wobble base pair) in each of the 4 stems; the user could, for instance, lift this constraint on the acceptor stem by changing the value from 1 to &quot;&quot;. There are 3 variable-length sections of tRNA. The user could, for example, change the allowed lengths of the V loop from a discontinuous range, &quot;4-5,9-23&quot;, to a continuous range, &quot;4-23&quot;.</span></dd>
<dt class="parameter" id="parameter-threeprime_termini"><code class="parameter-flags">--threeprime-termini</code> <code class="parameter-metavar">THREEPRIME_TERMINI</code></dt>
<dd class="parameter-details"><span class="parameter-help">Termini represent the subsequences (in the 5&#x27;-&gt;3&#x27; orientation) to expect at the 3&#x27; end of a tRNA read adjacent to the discriminator nucleotide. tRNA feature profiling from the 3&#x27; end seeks a valid terminus prior to the discriminator and more 5&#x27; features. 3&#x27; terminal sequences can include the nucleotides, A, C, G, and T, and N, symbolizing any nucleotide. A single underscore, &quot;_&quot;, can be included in lieu of a sequence, symbolizing the absence of a terminus such that the tRNA feature profile may end with the discriminator. If &quot;_&quot; is not included, tRNA sequences ending in the discriminator will still be sought as *fragments* of profiled tRNA. The order of sequences in the argument is the order of consideration in profiling. For example, if CCA is the first 3&#x27; terminus considered, and it produces a complete profile with no unconserved or unpaired nucleotides, then the other possible termini are not considered. Other termini are only considered with the possibility of &quot;improvement&quot; in the feature profile.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">CCA,CC,C,CCAN,CCANN</code></span></dd>
<dt class="parameter" id="parameter-min_length_long_fiveprime"><code class="parameter-flags">--min-length-long-fiveprime</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">tRNA reads often extend beyond the 5&#x27; end of a mature tRNA sequence. This can be biological in origin when the read is from pre-tRNA; artifactual in origin when the reverse transcriptase runs off the end of the template, adding a small number ofs random bases; or artifactual when the read is a chimera of tRNA at the 3&#x27; end and another, potentially non-tRNA, transcript at the 5&#x27; end. Longer 5&#x27; extensions are more likely to be biological than artifactual due to the exclusion of runoff bases. This parameter sets the minimum length of 5&#x27; sequence extensions that are recorded in the tRNA-seq database output for further analysis.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">4</code></span></dd>
<dt class="parameter" id="parameter-min_trna_fragment_size"><code class="parameter-flags">--min-trna-fragment-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profiles a sequence as tRNA by identifying tRNA features from the 3&#x27; end of the sequence. tRNA-seq datasets can include a significant number of tRNA fragments that are not from the 3&#x27; end of the sequence ending in a recognized terminus, e.g., CCA. These &quot;interior&quot; and 5&#x27; fragments can be of significant biological interest. Fragments are identified by mapping unprofiled reads to profiled tRNAs that have their 3&#x27; termini trimmed off. This parameter sets the minimum length of unprofiled reads searched in this manner. The choice of 25 as the default value is motivated by considerations of false positive matches and computational performance with a shorter minimum sequence length. Since unprofiled reads are mapped to every unique profiled tRNA sequence, a shorter minimum sequence length can make mapping take a very long time and return too many alignments to store in memory for datasets of millions of reads. Pay attention to python memory usage if you adjust this parameter downwards.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">25</code></span></dd>
<dt class="parameter" id="parameter-agglomeration_max_mismatch_freq"><code class="parameter-flags">--agglomeration-max-mismatch-freq</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o finds potential tRNA modifications by first agglomerating sequences differing from one or more other sequences in the cluster by mismatches at a certain fraction of nucleotides. This parameter sets the maximum mismatch fraction that is allowed, by default 0.03. The value of this parameter is rounded to the nearest hundredth. The default approximates 2/71, representing 2 mismatches in a full-length tRNA of length 74, not 71, as 3&#x27; sequence variants, including the canonical 3&#x27;-CCA, are trimmed off prior to sequences being agglomerated. (Average non-mitochondrial tRNAs range in length from 74-95.) For example, consider 3 trimmed sequences of length 71 -- A, B and C -- and 1 sequence of length 65, D. If A differs from B by a substitution at position 1 when aligned (mismatch frequency of 0.014), and C differs from B at positions 10 and 20 (mismatch frequency of 0.028), such that C differs from A by 3 substitutions (mismatch frequency of 0.042), then A, B, and C will still agglomerate into a single cluster, as each differs by no more than 2 substitutions from *some other sequence* in the cluster. In contrast, sequence D differs from B at positions 30 and 40 (mismatch frequency of 0.031), exceeding the 0.03 limit needed to agglomerate. D forms its own cluster and is not consolidated into a single modified sequence with the others.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.03</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_indel_profiling"><code class="parameter-flags">--skip-INDEL-profiling</code></dt>
<dd class="parameter-details"><span class="parameter-help">This flag prevents the prediction of deletions in tRNA reads, which can save time.</span></dd>
<dt class="parameter" id="parameter-max_indel_freq"><code class="parameter-flags">--max-indel-freq</code> <code class="parameter-metavar">FLOAT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The maximum indel frequency constrains the number and length of modification-induced indels that can be found. The value of this parameter is rounded to the nearest hundredth. Anvi&#x27;o identifies tRNAs with potential modification-induced substitutions before finding indels. tRNAs with substitutions are aligned with other sequences to find sequences differing only by indels. The default parameter value of 0.05 allows 1 indel of length 3 to be found in a modified sequence of length 71. (Modified sequences have the canonical 3&#x27;-CCA trimmed off, so a sequence of length 71 represents the low end of the non-mitochondrial tRNA length range of 74-95.) The default equivalently allows 2 indels of lengths 1 and 2 or 3 indels of length 1 in a sequence of length 71. An indel of length 4 would result in a frequency of 0.056 and so would not be considered.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0.05</code></span></dd>
<dt class="parameter" id="parameter-left_indel_buffer"><code class="parameter-flags">--left-indel-buffer</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter sets the distance an indel must lie from the left end of a sequence alignment in the search for modification-induced indels.The default buffer of 3 matches was chosen to prevent nontemplated and variant nucleotides at the 5&#x27; end of tRNA reads from being mistakenly identified as indels.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">3</code></span></dd>
<dt class="parameter" id="parameter-right_indel_buffer"><code class="parameter-flags">--right-indel-buffer</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter sets the distance an indel must lie from the right end of a sequence alignment in the search for modification-induced indels. The default buffer of 3 matches was chosen to prevent variant nucleotides at the 3&#x27; end of tRNA reads from being mistakenly identified as indels.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">3</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-performance">
<header class="parameter-group-header"><span class="parameter-group-title">PERFORMANCE</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
<dt class="parameter parameter-switch" id="parameter-skip_fasta_check"><code class="parameter-flags">--skip-fasta-check</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t check the input FASTA file for such things as proper defline formatting to speed things up.</span></dd>
<dt class="parameter" id="parameter-profiling_chunk_size"><code class="parameter-flags">--profiling-chunk-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o manages memory consumption during tRNA feature profiling by chunking the unique input sequences. This parameter sets the maximum number of sequences in each chunk. Adjustment of this parameter has little effect on speed.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">100000</code></span></dd>
<dt class="parameter" id="parameter-alignment_target_chunk_size"><code class="parameter-flags">--alignment-target-chunk-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o sequence alignment manages memory consumption by chunking the list of alignment targets, so that queries are aligned to the first chunk of targets, then the second chunk, and so on. This parameter sets the maximum number of target sequences in each chunk. Memory management becomes important when aligning short queries to a large number of targets, which involves searching queries against a massive number of k-mers (equal in length to the shortest query) that have been extracted from targets. Adjust this parameter downward if your system runs out of memory during alignment; adjust this parameter upward to speed up alignment if you find that you are not memory-limited. Ideally, we would set this parameter using a heuristic function parameterized with the numbers and lengths of query and target sequences...</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">25000</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-defaults">
<header class="parameter-group-header"><span class="parameter-group-title">DEFAULTS</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-default_feature_param_file"><code class="parameter-flags">--default-feature-param-file</code> <code class="parameter-metavar">OUTPUT_FILENAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Writes a tab-delimited .ini file containing default tRNA feature parameterizations used in de novo profiling/identification of tRNA sequences from the 3&#x27; end. Parameters can be modified by the user and the file fed back into anvi-trnaseq through the --feature-param-file argument, the help description of which explains the file format.</span></dd>
<dt class="parameter parameter-switch" id="parameter-print_default_feature_params"><code class="parameter-flags">--print-default-feature-params</code></dt>
<dd class="parameter-details"><span class="parameter-help">Prints to standard output a nicely formatted table of the default tRNA feature parameterizations (which can be written to a tab-delimited .ini file by the option, --default-feature-param-file).</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/trnaseq.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
