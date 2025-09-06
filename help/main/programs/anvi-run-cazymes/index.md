---
layout: program
title: anvi-run-cazymes
excerpt: An anvi'o program. Run dbCAN CAZymes on contigs-db.
categories: [anvio]
comments: false
redirect_from: /m/anvi-run-cazymes
image:
  featurerelative: ../../../images/header.png
  display: true
---

Run dbCAN CAZymes on contigs-db.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/mschecht.jpg" /></div><div class="anvio-person-info-box"><a href="/people/mschecht" target="_blank"><span class="anvio-person-name">Matthew Schechter</span></a><div class="anvio-person-social-box"><a href="mailto:mschechter@uchicago.edu" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/mschecht_bio" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/mschecht" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[cazyme-data](../../artifacts/cazyme-data) <img src="../../images/icons/DATA.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[functions](../../artifacts/functions) <img src="../../images/icons/CONCEPT.png" class="artifact-icon-mini" /></span></p>


## Usage


This program **annotates genes in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> with functions using dbCAN [CAZyme HMMs](https://bcb.unl.edu/dbCAN2/download/Databases/)**

Before you run this program, you'll have to set up the CAZyme database on your computer with the program <span class="artifact-p">[anvi-setup-cazymes](/help/main/programs/anvi-setup-cazymes)</span>.

The CAZyme database is based on protein sequences, so anvi'o will convert your genetic information into protein sequences and then use HMMs (Hidden Markov Models) to compare them to the database.

{:.notice}
Unsure what an HMM is? Check out [our vocab page](http://merenlab.org/vocabulary/#hmm)

To run, you'll need to provide a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> and the output will be a <span class="artifact-n">[functions](/help/main/artifacts/functions)</span> artifact. Here is a default run:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;cazymes &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> 
</div>

If you stored the <span class="artifact-n">[cazyme-data](/help/main/artifacts/cazyme-data)</span> that you got from running <span class="artifact-p">[anvi-setup-cazymes](/help/main/programs/anvi-setup-cazymes)</span> in a custom location, you'll need to provide that path as well.

<div class="codeblock" markdown="1">
anvi&#45;run&#45;cazymes &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;cazyme&#45;data&#45;dir <span class="artifact&#45;n">[cazyme&#45;data](/help/main/artifacts/cazyme&#45;data)</span> 
</div>

By default, this uses `hmmsearch` to run HMMs. You can choose to use `hmmscan` instead by running:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;cazymes &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;cazyme&#45;data&#45;dir <span class="artifact&#45;n">[cazyme&#45;data](/help/main/artifacts/cazyme&#45;data)</span> \
                 &#45;&#45;hmmer&#45;program hmmscan
</div>

Use the parameter `--noise-cutoff-terms` to filter out hits. The default value is `--noise-cutoff-terms -E 1e-12`. If you want to explore filtering options, check out the help menu of the underlying hmm program you are using e.g. `hmmsearch -h`:

<div class="codeblock" markdown="1">
anvi&#45;run&#45;cazymes &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                 &#45;&#45;noise&#45;cutoff&#45;terms "&#45;E 1e&#45;14"
</div>

## Exploring CAZyme annotations

The dbCAN HMM files provide only limited descriptions of CAZyme protein families and often require additional investigation following annotation. The [dbCAN3](https://bcb.unl.edu/dbCAN2/) database offers several [supplementary files](https://bcb.unl.edu/dbCAN2/download/Databases/) that can support deeper exploration, including:

- **`dbCAN_sub.hmm`** — HMM to classify proteins based on predicted substrate specificity.  
- **`FamInfo.txt.08022020.xls`** — Reference table summarizing functional details for each CAZyme family.

## Import CAZyme functions from run_dbcan

If anvi'o users are interested in importing more detailed annotations, e.g. substrate level prediction from dbCAN-sub, they should consider using [run_dbcan](https://dbcan.readthedocs.io/en/latest/) from [dbCAN3](https://bcb.unl.edu/dbCAN2/). Here are some quick steps:

Step 1. Extract amino acid sequences from your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>

<div class="codeblock" markdown="1">
anvi&#45;get&#45;sequences&#45;for&#45;gene&#45;calls &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> &#45;&#45;get&#45;aa&#45;sequences &#45;o genes.faa
</div>

Step 2. Run dbCAN3 via [run_dbcan](https://dbcan.readthedocs.io/en/latest/) to annotate those amino acid sequences.

Step 3. Create a <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span> with CAZyme functions.

The program [run_dbcan](https://dbcan.readthedocs.io/en/latest/) has multiple [output files](https://dbcan.readthedocs.io/en/latest/user_guide/quick_start.html#understanding-the-output) which can be parsed into a <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span>, for example, the [overview.txt](https://dbcan.readthedocs.io/en/latest/user_guide/quick_start.html#understanding-the-output).

Step 4. Import your new CAZyme <span class="artifact-n">[functions-txt](/help/main/artifacts/functions-txt)</span> back into your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>

<div class="codeblock" markdown="1">
anvi&#45;import&#45;functions &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> &#45;i cazyme&#45;functions.txt
</div>

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-run-cazymes.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/tree/master/bin/anvi-run-cazymes) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/bin/anvi-interactive) to see an example.
