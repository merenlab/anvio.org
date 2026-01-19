---
layout: program
title: anvi-script-gen-user-module-file
excerpt: An anvi'o program. This script generates a user-defined module file from a tab-delimited file of enzymes and other input parameters.
categories: [anvio]
comments: false
redirect_from: /9/anvi-script-gen-user-module-file
image:
  featurerelative: ../../../images/header.png
  display: true
---

This script generates a user-defined module file from a tab-delimited file of enzymes and other input parameters..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Can consume


<p style="text-align: left" markdown="1"><span class="artifact-r">[enzymes-list-for-module](../../artifacts/enzymes-list-for-module) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>


## Can provide


<p style="text-align: left" markdown="1"><span class="artifact-p">[user-modules-data](../../artifacts/user-modules-data) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>


## Usage


Given an <span class="artifact-n">[enzymes-list-for-module](/help/9/artifacts/enzymes-list-for-module)</span> file, this script will produce a properly-formatted module file for use in <span class="artifact-p">[anvi-setup-user-modules](/help/9/programs/anvi-setup-user-modules)</span>.

## Basics
You should provide this script with an accession ID for your module (which will become the module file name) (`-I`); a name for the module (`-n`); a categorization which includes module class, category, and sub-category separated by semicolons (`-c`); an <span class="artifact-n">[enzymes-list-for-module](/help/9/artifacts/enzymes-list-for-module)</span> file listing the component enzymes, their annotation sources, and their functions (`-e`); and a definition which puts these enzymes in the proper order (`-d`):

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;user&#45;module&#45;file &#45;I "UD0023" \
                  &#45;n "Frankenstein pathway for demo purposes" \
                  &#45;c "User modules; Demo set; Frankenstein metabolism" \
                  &#45;e <span class="artifact&#45;n">[enzymes&#45;list&#45;for&#45;module](/help/9/artifacts/enzymes&#45;list&#45;for&#45;module)</span> \
                  &#45;d "K01657+K01658 PF06603.14,(COG1362 TIGR01709.2)"
</div>

Then this script will produce a properly-formatted module file, which in this case would be called `UD0023` and would look like this (see <span class="artifact-n">[enzymes-list-for-module](/help/9/artifacts/enzymes-list-for-module)</span> for the example file containing these enzymes):

```
ENTRY       UD0023
NAME        Frankenstein pathway for demo purposes
DEFINITION  K01657+K01658 PF06603.14,(COG1362 TIGR01709.2)
ORTHOLOGY   K01657  anthranilate synthase component I [EC:4.1.3.27]
            K01658  anthranilate synthase component II [EC:4.1.3.27]
            PF06603.14  UpxZ
            COG1362  Aspartyl aminopeptidase
            TIGR01709.2  type II secretion system protein GspL
CLASS       User modules; Demo set; Frankenstein metabolism
ANNOTATION_SOURCE  K01657  KOfam
                   K01658  KOfam
                   PF06603.14  METABOLISM_HMM
                   COG1362  COG20_FUNCTION
                   TIGR01709.2  TIGRFAM
\\\
```

## Automatically generating the module definition

The module definition parameter is not required, and if you do not provide one, the definition will be generated with each enzyme in the input file as a different 'step' of the module. This option may be especially appropriate for generating what KEGG calls "signature modules", in which each enzyme is not technically part of a metabolic pathway, but instead the module represents a functionally-related set of enzymes (like all tRNA modification enzymes, for instance).

Here is an example command without the definition parameter:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;user&#45;module&#45;file &#45;I "UD0023" \
                  &#45;n "Frankenstein pathway for demo purposes" \
                  &#45;c "User modules; Demo set; Frankenstein metabolism" \
                  &#45;e <span class="artifact&#45;n">[enzymes&#45;list&#45;for&#45;module](/help/9/artifacts/enzymes&#45;list&#45;for&#45;module)</span> \
</div>

And here is the module file that this would produce:

```
ENTRY       UD0023
NAME        Frankenstein pathway for demo purposes
DEFINITION  K01657 K01658 PF06603.14 COG1362 TIGR01709.2
ORTHOLOGY   K01657  anthranilate synthase component I [EC:4.1.3.27]
            K01658  anthranilate synthase component II [EC:4.1.3.27]
            PF06603.14  UpxZ
            COG1362  Aspartyl aminopeptidase
            TIGR01709.2  type II secretion system protein GspL
CLASS       User modules; Demo set; Frankenstein metabolism
ANNOTATION_SOURCE  K01657  KOfam
                   K01658  KOfam
                   PF06603.14  METABOLISM_HMM
                   COG1362  COG20_FUNCTION
                   TIGR01709.2  TIGRFAM
\\\
```


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-user-module-file.md) to update this information.


## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_user_module_file.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
