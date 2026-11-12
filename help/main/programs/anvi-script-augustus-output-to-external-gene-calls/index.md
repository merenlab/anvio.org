---
layout: program
title: anvi-script-augustus-output-to-external-gene-calls
excerpt: An anvi'o program. Takes in gene calls by AUGUSTUS v3.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-augustus-output-to-external-gene-calls
image:
  featurerelative: ../../../images/header.png
  display: true
---

Takes in gene calls by AUGUSTUS v3.3.3, generates an anvi&#x27;o external gene calls file. It may work well with other versions of AUGUSTUS, too. It is just no one has tested the script with different versions of the program.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[augustus-gene-calls](../../artifacts/augustus-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[external-gene-calls](../../artifacts/external-gene-calls) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program converts a gene call file from [AUGUSTUS](http://bioinf.uni-greifswald.de/augustus/) (as an <span class="artifact-n">[augustus-gene-calls](/help/main/artifacts/augustus-gene-calls)</span> artifact) to an anvi'o <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> artifact.

This essentially just reformats the data in the <span class="artifact-n">[augustus-gene-calls](/help/main/artifacts/augustus-gene-calls)</span> artifact (for example, removing the UTR information) so that it can be read by other anvi'o programs.

A run of this program will look something like this:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;augustus&#45;output&#45;to&#45;external&#45;gene&#45;calls &#45;i <span class="artifact&#45;n">[augustus&#45;gene&#45;calls](/help/main/artifacts/augustus&#45;gene&#45;calls)</span>
                                                   &#45;o <span class="artifact&#45;n">[external&#45;gene&#45;calls](/help/main/artifacts/external&#45;gene&#45;calls)</span>
</div>

Here is an example of what the resulting <span class="artifact-n">[external-gene-calls](/help/main/artifacts/external-gene-calls)</span> file will look like (from the gff file used as an example on the <span class="artifact-n">[augustus-gene-calls](/help/main/artifacts/augustus-gene-calls)</span> page):

    gene_callers_id    contig       start    stop    direction    partial    call_type    source      version    aa_sequence
    0                  unnamed-1    56       1252    f            0          1            AUGUSTUS    v3.3.3     MSEGNAAGEPSTPGGPRPLLTGARGLIGRRPAPPLTPGRLPSIRSRDLTLGGVKKKTFTPNIISRKIKEEPKEEVTVKKEKRERDRDRQREGHGRGRGRPEVIQSHSIFEQGPAEMMKKKGNWDKTVDVSDMGPSHIINIKKEKRETDEETKQILRMLEKDDFLDDPGLRNDTRNMPVQLPLAHSGWLFKEENDEPDVKPWLAGPKEEDMEVDIPAVKVKEEPRDEEEEAKMKAPPKAARKTPGLPKDVSVAELLRELSLTKEEELLFLQLPDTLPGQPPTQDIKPIKTEVQGEDGQVVLIKQEKDREAKLAENACTLADLTEGQVGKLLIRKSGRVQLLLGKVTLDVTMGTACSFLQELVSVGLGDSRTGEMTVLGHVKHKLVCSPDFESLLDHKHR


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-augustus-output-to-external-gene-calls.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-augustus-output-to-external-gene-calls`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-augustus-output-to-external-gene-calls [-h] -i INPUT_FILE [-o FILE_PATH] [--just-do-it]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter parameter-required" id="parameter-input_file"><code class="parameter-flags">-i, --input-file</code> <code class="parameter-metavar">INPUT_FILE</code> <span class="parameter-required-label">required</span></dt>
<dd class="parameter-details parameter-required"><span class="parameter-help">Gene calls file from AUGUSTUS (that ends with .gff). Please note that the script is only tested with AUGUSTUS v3.3.3 output (although it may still work with other versions of the program).</span></dd>
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-just_do_it"><code class="parameter-flags">--just-do-it</code></dt>
<dd class="parameter-details"><span class="parameter-help">Don&#x27;t bother me with questions or warnings, just do it.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/augustus_output_to_external_gene_calls.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
