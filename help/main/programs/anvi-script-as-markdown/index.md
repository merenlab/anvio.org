---
layout: program
title: anvi-script-as-markdown
excerpt: An anvi'o program. Markdownizides TAB-delmited data with headers in terminal.
categories: [anvio]
comments: false
redirect_from: /m/anvi-script-as-markdown
image:
  featurerelative: ../../../images/header.png
  display: true
---

Markdownizides TAB-delmited data with headers in terminal..

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


This program seems to know what its doing. It needs no input material from its user. Good program.




## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[markdown-txt](../../artifacts/markdown-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


A helper script to format TAB-delimited files in markdown for bloggers, tutorial writers, those who wish to share example anvi'o outputs as text on GitHub issues, and so on.

Anvi'o programs often generate TAB-delimited files. While this simple format is useful to pass around to other software or share with others, it is not easily interpretable in visual media. The purpose of this script is to make the sharing part simpler for platforms that can render markdown.

You can pipe any TAB-delimited content to this script:

```
cat file.txt | anvi-sript-as-markdown
```

## Examples

Assume a TAB-delmited file with many lines:

``` bash
wc -l additional_view_data.txt

301 additional_view_data.txt
```

Contents of which look like this:

``` bash
head -n 10 additional_view_data.txt

contig	categorical_1	categorical_2	text_layer_01	numerical	bars_main!A	bars_main!B	bars_main!C
backrest	b	y	nmwje	2.78	278	23	1
backward	b	x	bqmyujr psrd doefhi	2.49	249	52	2
backwind	b	y	hkfer lchpmzix	2.69	269	32	3
backyard	b	x	advoe bfkyhmg	2.05	205	96	4
bacteria	b	x	lqmcwn hywco	2.63	263	38	5
bacterin	b		vxqdmn	2.98	298	3	6
baetylus	b	x	fkgpydi owgyhfx xwlpj	2.19	219	82	7
bagpiped	b	y	ijmnur	2.12	212	89	8
balconet	b	y	ecizgs	2.89	289	12	9
```

### Default run

<div class="codeblock" markdown="1">
head &#45;n 10 additional_view_data.txt | <span class="artifact&#45;p">[anvi&#45;script&#45;as&#45;markdown](/help/main/programs/anvi&#45;script&#45;as&#45;markdown)</span>
</div>

which is rendered as,

|**contig**|**categorical_1**|**categorical_2**|**text_layer_01**|**numerical**|**bars_main!A**|**bars_main!B**|**bars_main!C**|
|:--|:--|:--|:--|:--|:--|:--|:--|
|backrest|b|y|nmwje|2.78|278|23|1|
|backward|b|x|bqmyujr psrd doefhi|2.49|249|52|2|
|backwind|b|y|hkfer lchpmzix|2.69|269|32|3|
|backyard|b|x|advoe bfkyhmg|2.05|205|96|4|
|bacteria|b|x|lqmcwn hywco|2.63|263|38|5|
|bacterin|b||vxqdmn|2.98|298|3|6|
|baetylus|b|x|fkgpydi owgyhfx xwlpj|2.19|219|82|7|
|bagpiped|b|y|ijmnur|2.12|212|89|8|
|balconet|b|y|ecizgs|2.89|289|12|9|

### Limit the number of lines shown

``` bash
cat additional_view_data.txt | anvi-script-as-markdown --max-num-lines-to-show 10
```

which is rendered as,

|**contig**|**categorical_1**|**categorical_2**|**text_layer_01**|**numerical**|**bars_main!A**|**bars_main!B**|**bars_main!C**|
|:--|:--|:--|:--|:--|:--|:--|:--|
|backrest|b|y|nmwje|2.78|278|23|1|
|backward|b|x|bqmyujr psrd doefhi|2.49|249|52|2|
|backwind|b|y|hkfer lchpmzix|2.69|269|32|3|
|backyard|b|x|advoe bfkyhmg|2.05|205|96|4|
|bacteria|b|x|lqmcwn hywco|2.63|263|38|5|
|bacterin|b||vxqdmn|2.98|298|3|6|
|baetylus|b|x|fkgpydi owgyhfx xwlpj|2.19|219|82|7|
|bagpiped|b|y|ijmnur|2.12|212|89|8|
|balconet|b|y|ecizgs|2.89|289|12|9|
|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|

### Code columns

``` bash
cat additional_view_data.txt | anvi-script-as-markdown --max-num-lines-to-show 10 \
                                                       --code-column contig
```

which is rendered as,

|**contig**|**categorical_1**|**categorical_2**|**text_layer_01**|**numerical**|**bars_main!A**|**bars_main!B**|**bars_main!C**|
|:--|:--|:--|:--|:--|:--|:--|:--|
|`backrest`|b|y|nmwje|2.78|278|23|1|
|`backward`|b|x|bqmyujr psrd doefhi|2.49|249|52|2|
|`backwind`|b|y|hkfer lchpmzix|2.69|269|32|3|
|`backyard`|b|x|advoe bfkyhmg|2.05|205|96|4|
|`bacteria`|b|x|lqmcwn hywco|2.63|263|38|5|
|`bacterin`|b||vxqdmn|2.98|298|3|6|
|`baetylus`|b|x|fkgpydi owgyhfx xwlpj|2.19|219|82|7|
|`bagpiped`|b|y|ijmnur|2.12|212|89|8|
|`balconet`|b|y|ecizgs|2.89|289|12|9|
|(...)|(...)|(...)|(...)|(...)|(...)|(...)|(...)|

### Exclude columns from the output

``` bash
cat additional_view_data.txt | anvi-script-as-markdown --max-num-lines-to-show 10 \
                                                       --code-column contig \
                                                       --exclude-columns 'bars_main!A,bars_main!B,bars_main!C'
```

which is rendered as,

|**contig**|**categorical_1**|**categorical_2**|**text_layer_01**|**numerical**|
|:--|:--|:--|:--|:--|
|`backrest`|b|y|nmwje|2.78|
|`backward`|b|x|bqmyujr psrd doefhi|2.49|
|`backwind`|b|y|hkfer lchpmzix|2.69|
|`backyard`|b|x|advoe bfkyhmg|2.05|
|`bacteria`|b|x|lqmcwn hywco|2.63|
|`bacterin`|b||vxqdmn|2.98|
|`baetylus`|b|x|fkgpydi owgyhfx xwlpj|2.19|
|`bagpiped`|b|y|ijmnur|2.12|
|`balconet`|b|y|ecizgs|2.89|
|(...)|(...)|(...)|(...)|(...)|


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-script-as-markdown.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-script-as-markdown`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-script-as-markdown [-h] [--max-num-lines-to-show MAX_NUM_LINES_TO_SHOW] [--exclude-columns EXCLUDE_COLUMNS] [--code-columns CODE_COLUMNS]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-options">
<header class="parameter-group-header"><span class="parameter-group-title">options</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-max_num_lines_to_show"><code class="parameter-flags">--max-num-lines-to-show</code> <code class="parameter-metavar">MAX_NUM_LINES_TO_SHOW</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of lines to show.</span></dd>
<dt class="parameter" id="parameter-exclude_columns"><code class="parameter-flags">--exclude-columns</code> <code class="parameter-metavar">EXCLUDE_COLUMNS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Comma-separated list of column names to exclude from the output.</span></dd>
<dt class="parameter" id="parameter-code_columns"><code class="parameter-flags">--code-columns</code> <code class="parameter-metavar">CODE_COLUMNS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Comma-separated list of column names to be wrapped with &#x27;`&#x27; characters. If you pass &#x27;ALL-COLUMNS&#x27; as a parameter rather than individual ones, all columns will be wrapped with &#x27;`&#x27; characters because you&#x27;re welcome.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/as_markdown.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
