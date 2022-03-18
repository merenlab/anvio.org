---
layout: artifact
title: state-json
excerpt: A JSON-type anvi'o artifact. This artifact can be generated, used, and/or exported by anvi'o. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.
categories: [anvio]
comments: false
redirect_from: /m/state-json
image:
  featurerelative: ../../../images/header.png
  display: true
---


{% include _toc.html %}


<img src="../../images/icons/JSON.png" alt="JSON" style="width:100px; border:none" />

A JSON-type anvi'o artifact. This artifact can be generated, used, and/or exported **by anvi'o**. It can also be provided **by the user** for anvi'o to import into its databases, process, and/or use.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.

## Provided by


<p style="text-align: left" markdown="1"><span class="artifact-p">[anvi-export-state](../../programs/anvi-export-state)</span></p>


## Required or used by


<p style="text-align: left" markdown="1"><span class="artifact-r">[anvi-import-state](../../programs/anvi-import-state)</span></p>


## Description

This is a JSON file that describes a <span class="artifact-n">[state](/help/main/artifacts/state)</span>. It is the output of <span class="artifact-p">[anvi-export-state](/help/main/programs/anvi-export-state)</span> and can be imported into the interface (through a database) using <span class="artifact-p">[anvi-export-state](/help/main/programs/anvi-export-state)</span>. 

This is how you would give a state to a fellow anvi'o user. If opened, you'll be able to view all of the data that's contained in this state. 

## You're a (stateful) wizard, arry

Power users that want to generate state programmatically within a workflow can provide their own minified ```state.json``` file directly to <span class="artifact-p">[anvi-import-state](../../programs/anvi-import-state)</span>. A user-generated minified state.json requires only a couple of mandatory fields in addition to whatever data users wish to provide. The interactive interface will generate sensible defaults for any necessary data that is omitted. Below is an example minified state for the [Infant Gut Dataset](https://merenlab.org/tutorials/infant-gut/) containing the required __version__ and __tree-type__ fields, along with a custom __layer-order__ field.

```bash
{
  "version": "3",
   "tree-type": "circlephylogram",
   "layer-order": [
        "__parent__",
        "hmms_Ribosomal_RNAs",
        "length",
        "DAY_15A",
        "DAY_15B",
        "hmms_Transfer_RNAs"
        "DAY_17A",
        "DAY_17B",
        "DAY_18",
        "gc_content",
        "DAY_19",
        "DAY_22A",
        "DAY_16",
        "DAY_23",
        "DAY_22B",
        "DAY_24",
    ]
}
```

{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/artifacts/state-json.md) to update this information.

