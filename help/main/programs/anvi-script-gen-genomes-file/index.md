---
layout: program
title: anvi-script-gen-genomes-file
excerpt: An anvi'o program. Generate an external genomes or internal genomes file.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-gen-genomes-file
image:
  featurerelative: ../../../images/header.png
  display: true
---

Generate an external genomes or internal genomes file.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ivagljiva.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ivagljiva" target="_blank"><span class="anvio-person-name">Iva Veseli</span></a><div class="anvio-person-social-box"><a href="mailto:iva.veseli@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/ivaglj1va" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ivagljiva" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[profile-db](../../artifacts/profile-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[collection](../../artifacts/collection) <img src="../../images/icons/COLLECTION.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[external-genomes](../../artifacts/external-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span> <span class="artifact-p">[internal-genomes](../../artifacts/internal-genomes) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


The primary purpose of this script is to reduce the amount of labor required to generate <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> or <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> files anvi'o typically uses to learn about your bins and/or genomes.

## Generating an external genomes file

If you provide an input directory and a name for the output file, then every <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> in that directory will get a line in the resulting <span class="artifact-n">[external-genomes](/help/main/artifacts/external-genomes)</span> file:

```
anvi-script-gen-genomes-file --input-dir path/to/dir \
                             --output-file external_genomes.txt
```

Names for genomes in the resulting external genomes file will be set based on the `project_name` variable, and the `contigs_db_path` column will contain absolute paths.

{:.notice}
You can learn the current `project_name` and/or change it for a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span> using the program <span class="artifact-p">[anvi-db-info](/help/main/programs/anvi-db-info)</span>. This variable is set by the program <span class="artifact-p">[anvi-gen-contigs-database](/help/main/programs/anvi-gen-contigs-database)</span>.

You can also instruct `anvi-script-gen-genomes-file` to include all subdirectories under a given directory path:

```
anvi-script-gen-genomes-file --input-dir path/to/dir \
                             --output-file external_genomes.txt \
                             --include-subdirs
```

## Generating an internal genomes file

To get an <span class="artifact-n">[internal-genomes](/help/main/artifacts/internal-genomes)</span> file containing all bins from a collection, provide a <span class="artifact-n">[profile-db](/help/main/artifacts/profile-db)</span>, its corresponding <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, and the <span class="artifact-n">[collection](/help/main/artifacts/collection)</span> name:

<div class="codeblock" markdown="1">
anvi&#45;script&#45;gen&#45;genomes&#45;file &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                             &#45;p <span class="artifact&#45;n">[profile&#45;db](/help/main/artifacts/profile&#45;db)</span> \
                             &#45;C <span class="artifact&#45;n">[collection](/help/main/artifacts/collection)</span> \
                             &#45;&#45;output&#45;file internal&#45;genomes.txt
</div>

The name of each internal genome will be the same as the bin name, and the path columns will contain absolute paths.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-gen-genomes-file.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-gen-genomes-file`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-gen-genomes-file [-h] [--input-dir DIR_PATH] [--include-subdirs] [-c CONTIGS_DB] [-p PROFILE_DB] [-C COLLECTION_NAME] [-o FILE_PATH]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-external-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">EXTERNAL GENOMES</span> <span class="parameter-group-description">Provide a directory, and anvi&#x27;o will provide an external genomes file containing all contigs dbs in that directory.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-input_dir"><code class="parameter-flags">--input-dir</code> <code class="parameter-metavar">DIR_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">Directory path for input files</span></dd>
<dt class="parameter parameter-switch" id="parameter-include_subdirs"><code class="parameter-flags">--include-subdirs</code></dt>
<dd class="parameter-details"><span class="parameter-help">Also search subdirectories for files.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-internal-genomes">
<header class="parameter-group-header"><span class="parameter-group-title">INTERNAL GENOMES</span> <span class="parameter-group-description">Provide a contigs db, profile db, and collection name and anvi&#x27;o will bestow upon you an internal genomes file for that collection.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-profile_db"><code class="parameter-flags">-p, --profile-db</code> <code class="parameter-metavar">PROFILE_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o profile database</span></dd>
<dt class="parameter" id="parameter-collection_name"><code class="parameter-flags">-C, --collection-name</code> <code class="parameter-metavar">COLLECTION_NAME</code></dt>
<dd class="parameter-details"><span class="parameter-help">Collection name.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Path for your internal or external genomes file</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/gen_genomes_file.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
