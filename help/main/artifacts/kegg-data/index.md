---
layout: artifact
title: kegg-data
excerpt: A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported by anvi'o (and not provided by the user)..
categories: [anvio]
comments: false
redirect_from: /m/kegg-data
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/DB.png" alt="DB" style="width:100px; border:none" />

A DB-type anvi'o artifact. This artifact is typically generated, used, and/or exported **by anvi'o** (and not provided by the user)..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-setup-kegg-data](../../programs/anvi-setup-kegg-data)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-display-metabolism](../../programs/anvi-display-metabolism)</span> <span class="artifact-r">[anvi-estimate-metabolism](../../programs/anvi-estimate-metabolism)</span> <span class="artifact-r">[anvi-reaction-network](../../programs/anvi-reaction-network)</span> <span class="artifact-r">[anvi-run-kegg-kofams](../../programs/anvi-run-kegg-kofams)</span></p>


## Description

A **directory of data** downloaded from the [KEGG database resource](https://www.kegg.jp/) for use in function annotation and metabolism estimation.

It is created by running the program <span class="artifact-p">[anvi-setup-kegg-data](/help/main/programs/anvi-setup-kegg-data)</span>. Not everything from KEGG is included in this directory, only the information relevant to downstream programs. The most critical components of this directory are KOfam HMM profiles and the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> which contains information on metabolic pathways as described in the [KEGG MODULES resource](https://www.genome.jp/kegg/module.html), as well as functional classification hierarchies from [KEGG BRITE](https://www.genome.jp/kegg/brite.html).

Programs that rely on this data directory include <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> and <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span>.

## Directory Location
The default location of this data is in the anvi'o folder, at `anvio/anvio/data/misc/KEGG/`.

You can change this location when you run <span class="artifact-p">[anvi-setup-kegg-data](/help/main/programs/anvi-setup-kegg-data)</span> by providing a different path to the `--kegg-data-dir` parameter:

<div class="codeblock" markdown="1">
anvi&#45;setup&#45;kegg&#45;data &#45;&#45;kegg&#45;data&#45;dir /path/to/directory/KEGG
</div>

If you do this, you will need to provide this path to downstream programs that require this data as well.

## Directory Contents

Here is a schematic of how the <span class="artifact-n">[kegg-data](/help/main/artifacts/kegg-data)</span> folder will look after setup:

```
KEGG
 |- MODULES.db
 |- ko_list.txt
 |- modules.keg
 |- br08901.json
 |- hierarchies.json
 |- HMMs
 |   |- Kofam.hmm
 |   |- Kofam.hmm.h3f
 |   |- (....)
 |
 |- modules
 |   |- M00001
 |   |- M00002
 |   |- (....)
 |
 |- BRITE
 |   |- ko00001
 |   |- ko00194
 |   |- (....)
 |
 |- orphan_data
     |- 01_ko_fams_with_no_threshold.txt
     |- 02_hmm_profiles_with_ko_fams_with_no_threshold.hmm

```

### What is this data?

Typically, users will not have to work directly with any of these files, as downstream programs will interface directly with the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>.

However, for the curious, here is a description of each component in this data directory:
- `ko_list.txt`: a tab-delimited file from the [KEGG KOfam](https://www.genome.jp/ftp/db/kofam/) resource that describes the KOfam profile for each KEGG Ortholog (KO). It contains information like the bitscore threshold (used to differentiate between 'good' and 'bad' hits when annotating sequences), the function definition, and various data about the sequences used to generate the profile.
- The `HMMs` subfolder: contains a file of concatentated KOfam profiles (also originally downloaded from [KEGG](https://www.genome.jp/ftp/db/kofam/)), as well as the indexes for this file.
- The `orphan_data` subfolder: contains KOfam profiles for KOs that do not have a bitscore threshold in the `ko_list.txt` file (in the `.hmm` file) and their corresponding entries in from the `ko_list.txt` file (in `01_ko_fams_with_no_threshold.txt`). Please note that KOs from the `orphan_data` directory will *not* be annotated in your <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> when you run <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span>. However, if you ever need to take a look at these profiles or use them in any way, here they are. :)
- `modules.keg`: a flat text file describing all metabolic modules available in the [KEGG MODULE](https://www.genome.jp/kegg/module.html) resource. This includes pathway and signature modules, but not reaction modules.
- The `modules` subfolder: contains flat text files, one for each metabolic module, downloaded using the [KEGG REST API](https://www.kegg.jp/kegg/rest/keggapi.html). Each file describes a metabolic module's definition, classification, component orthologs, metabolic reactions, compounds, and any miscellaneous data like references and such. For an example, see the [module file for M00001](https://rest.kegg.jp/get/M00001/).
- `br08901.json`: a JSON-formatted KEGG BRITE [file](https://rest.kegg.jp/get/br:br08901/json) classifying [KEGG pathway maps](https://www.genome.jp/kegg/pathway.html).
- `hierarchies.json`: a JSON-formatted KEGG BRITE [file](https://rest.kegg.jp/get/br:br08902/json) describing the available functional hierarchies in the [KEGG BRITE](https://www.genome.jp/kegg/brite.html) resource.
- The `BRITE` subfolder: contains JSON-formatted files, each one of which describes a BRITE hierarchy.
- `MODULES.db`: a SQLite database containing data parsed from the module files and BRITE hierarchies. See <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span>.

### How do we use it?

The KOfam profiles are used directly by <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> for annotating genes with KEGG Orthologs. The MODULE and BRITE data in the above files are processed and organized into the <span class="artifact-n">[modules-db](/help/main/artifacts/modules-db)</span> for easier programmatic access. <span class="artifact-p">[anvi-run-kegg-kofams](/help/main/programs/anvi-run-kegg-kofams)</span> uses this database to annotate genes with BRITE categories and with the modules they participate in, when relevant. <span class="artifact-p">[anvi-estimate-metabolism](/help/main/programs/anvi-estimate-metabolism)</span> uses this database to get module information when computing completeness scores for each metabolic module.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/kegg-data.md) to update this information.

