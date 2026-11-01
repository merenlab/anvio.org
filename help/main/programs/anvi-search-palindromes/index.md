---
layout: program
title: anvi-search-palindromes
excerpt: An anvi'o program. A program to find palindromes in sequences.
categories: [anvio]
comments: false
redirect_from: /m/anvi-search-palindromes
image:
  featurerelative: ../../../images/header.png
  display: true
---

A program to find palindromes in sequences.

🔙 **[To the main page](../../)** of anvi'o programs and artifacts.


{% include _toc.html %}
<div id="svg" class="subnetwork"></div>
{% capture network_path %}{{ "network.json" }}{% endcapture %}
{% capture network_height %}{{ 300 }}{% endcapture %}
{% include _project-anvio-graph.html %}


## Authors

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/meren.jpg" /></div><div class="anvio-person-info-box"><a href="/people/meren" target="_blank"><span class="anvio-person-name">A. Murat Eren (Meren)</span></a><div class="anvio-person-social-box"><a href="http://merenlab.org" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:a.murat.eren@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/merenbey" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/meren" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>

<div class="anvio-person"><div class="anvio-person-info"><div class="anvio-person-photo"><img class="anvio-person-photo-img" src="../../images/authors/ekiefl.jpg" /></div><div class="anvio-person-info-box"><a href="/people/ekiefl" target="_blank"><span class="anvio-person-name">Evan Kiefl</span></a><div class="anvio-person-social-box"><a href="http://ekiefl.github.io" class="person-social" target="_blank"><i class="fa fa-fw fa-home"></i>Web</a><a href="mailto:kiefl.evan@gmail.com" class="person-social" target="_blank"><i class="fa fa-fw fa-envelope-square"></i>Email</a><a href="http://twitter.com/evankiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-twitter-square"></i>Twitter</a><a href="http://github.com/ekiefl" class="person-social" target="_blank"><i class="fa fa-fw fa-github"></i>Github</a></div></div></div></div>



## Requires


<p style="text-align: left" markdown="1"><span class="artifact-r">[contigs-db](../../artifacts/contigs-db) <img src="../../images/icons/DB.png" class="artifact-icon-mini" /></span></p>



## Can use

<p style="text-align: left" markdown="1"><span class="artifact-r">[dna-sequence](../../artifacts/dna-sequence) <img src="../../images/icons/SEQUENCE.png" class="artifact-icon-mini" /></span> <span class="artifact-r">[fasta](../../artifacts/fasta) <img src="../../images/icons/FASTA.png" class="artifact-icon-mini" /></span></p>


## Provides


<p style="text-align: left" markdown="1"><span class="artifact-p">[palindromes-txt](../../artifacts/palindromes-txt) <img src="../../images/icons/TXT.png" class="artifact-icon-mini" /></span></p>




## Usage


This program finds [palindromes](https://en.wikipedia.org/wiki/Palindromic_sequence) in any DNA sequence. It will search for palindromes that matches criteria listed by the user (i.e., minimum length of the palindromic sequences, maximum number of mismatches, and minimum distance between the two palindromic regions, and more).

The program will print out its findings (and tribulations) and will optionally report the search results as a <span class="artifact-n">[palindromes-txt](/help/main/artifacts/palindromes-txt)</span>.

### Kinds of palindromes

Please note that this program can find both **'in-place' palindromes** (i.e., the identity and order of nucleotides on one strand match to those on the complementary strand) that will look like this in the genomic context:

```
0        1
1234567890
...TCGA...
```

As well as **'distant palindromes'** (i.e., special cases of palindromes that form [hairpins](https://en.wikipedia.org/wiki/Stem-loop)) that will look like this in the genomic context:

```
0        1
12345678901234567
...ATCC...GGAT...
```

In this example, the 'distance' for the in-place palindrome will be 0, and the 'distance' for the distant palindromes will be 3. You can set the `--min-distance` parameter to anything greater than 0 to only report distant palindromes, and eliminate all in-place palindromes from your results.

{:.notice}
The speed of the algorithm will depend on the minimum palindrome length parameter. The shorter the palindrome length, the longer the processing time. Searching for palindromes longer than 50 nts in a 10,000,000 nts long sequence takes about 4 seconds on a laptop.

### Sequence input sources

<span class="artifact-p">[anvi-search-palindromes](/help/main/programs/anvi-search-palindromes)</span> can use multiple different sequence sources.

#### Contigs database

In this mode <span class="artifact-p">[anvi-search-palindromes](/help/main/programs/anvi-search-palindromes)</span> will go through every contig sequence in a given <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>.

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;search&#45;palindromes](/help/main/programs/anvi&#45;search&#45;palindromes)</span> &#45;c <span class="artifact&#45;n">[contigs&#45;db](/help/main/artifacts/contigs&#45;db)</span> \
                         &#45;&#45;output&#45;file <span class="artifact&#45;n">[palindromes&#45;txt](/help/main/artifacts/palindromes&#45;txt)</span>
</div>

#### FASTA file

Alternatively, you can use a <span class="artifact-n">[fasta](/help/main/artifacts/fasta)</span> file as input.

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;search&#45;palindromes](/help/main/programs/anvi&#45;search&#45;palindromes)</span> &#45;&#45;fasta&#45;file <span class="artifact&#45;n">[fasta](/help/main/artifacts/fasta)</span> \
                         &#45;&#45;output&#45;file <span class="artifact&#45;n">[palindromes&#45;txt](/help/main/artifacts/palindromes&#45;txt)</span>
</div>

#### DNA sequence

Those who are lazy can also pass a DNA sequence for quick searches:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;search&#45;palindromes](/help/main/programs/anvi&#45;search&#45;palindromes)</span> &#45;&#45;dna&#45;sequence (.. A DNA SEQUENCE OF ANY LENGTH ..)
</div>


### Verbose output

If you provide an `--output-file` parameter, your results will be stored into a <span class="artifact-n">[palindromes-txt](/help/main/artifacts/palindromes-txt)</span> file for downstream analyses. If you do not provide an output file, or explicitly asked for a verbose output with the flag `--verbose`, you will see all your palindromes listed on your screen.

Here is an example with a single sequence and no output file path:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;search&#45;palindromes](/help/main/programs/anvi&#45;search&#45;palindromes)</span> &#45;&#45;dna&#45;sequence CATTGACGTTGACGGCGACCGGTCGGTGATCACCGACCGGTCGCCGTCAACGTCAATG
</div>

```
SEARCH SETTINGS
===============================================
Minimum palindrome length ....................: 10
Number of mismatches allowed .................: 0
Minimum gap length ...........................: 0
Be verbose? ..................................: Yes

Number of threads for BLAST ..................: 1
BLAST word size ..............................: 10


58 nts palindrome
===============================================
Method .......................................: BLAST
1st sequence [start:stop] ....................: [0:58]
2nd sequence [start:stop] ....................: [0:58]
Number of mismatches .........................: 0
Distance between .............................: 0
1st sequence .................................: CATTGACGTTGACGGCGACCGGTCGGTGATCACCGACCGGTCGCCGTCAACGTCAATG
ALN ..........................................: ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
2nd sequence .................................: CATTGACGTTGACGGCGACCGGTCGGTGATCACCGACCGGTCGCCGTCAACGTCAATG

SEARCH RESULTS
===============================================
Total number of sequences processed ..........: 1
Total number of palindromes found ............: 1
Longest palindrome ...........................: 58
Most distant palindrome ......................: 0
```

Here is another example with a <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>, an output file path, and the `--verbose` flag:

<div class="codeblock" markdown="1">
<span class="artifact&#45;p">[anvi&#45;search&#45;palindromes](/help/main/programs/anvi&#45;search&#45;palindromes)</span> &#45;c CONTIGS.db \
                         &#45;&#45;min&#45;palindrome&#45;length 50 \
                         &#45;&#45;max&#45;num&#45;mismatches 1 \
                         &#45;&#45;output&#45;file palindromes.txt \
                         &#45;&#45;verbose
</div>

```
SEARCH SETTINGS
===============================================
Minimum palindrome length ....................: 50
Number of mismatches allowed .................: 1
Minimum gap length ...........................: 0
Be verbose? ..................................: Yes

147 nts palindrome"
===============================================
1st sequence [start:stop] ....................: [268872:269019]
2nd sequence [start:stop] ....................: [269631:269778]
Number of mismatches .........................: 1
Distance between .............................: 759
1st sequence .................................: TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAAGCTAGAAAAA
ALN ..........................................: |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||x|||||||||
2nd sequence .................................: TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAAACTAGAAAAA

SEARCH RESULTS
===============================================
Total number of sequences processed ..........: 11
Total number of palindromes found ............: 1
Longest palindrome ...........................: 147
Most distant palindrome ......................: 759

Output file ..................................: palindromes.txt
```


### Programmer access

Just like everything else in anvi'o, you can access the functionality the program `anvi-search-palindromes` offers without using the program itself by inheriting an instance from the `Palindromes` class and use it in your own Python scripts.

Here is an example, first with an input file and then an ad hoc sequence. Starting with the file (i.e., an anvi'o <span class="artifact-n">[contigs-db](/help/main/artifacts/contigs-db)</span>):

``` python
# import argparse to pass arguments to the class
import argparse

# `Palindromes` is the class we need
from anvio.sequencefeatures import Palindromes

# we also import `Progress` and `Run` helper classes from the terminal
# module to ask the class to print no output messages to our workspace
# (this is obviously optional)
from anvio.terminal import Progress, Run

# get an instance for the case of a contigs database, and process everything in it.
# this example is with an anvi'o contigs db, but you can also pass a FASTA file
# via `fasta_file='FILE.fa'` instead of `contigs_db='CONTIGS.db'`:
p = Palindromes(argparse.Namespace(contigs_db='CONTIGS.db', min_palindrome_length=50), run=Run(verbose=False), progress=Progress(verbose=False))
p.process()
```

Once the processing is done, the palindromes are stored in a member dictionary, which contains a key for each sequence:

``` python
print(p.palindromes)

>>> {'Day17a_QCcontig1' : [],
     'Day17a_QCcontig2' : [],
     'Day17a_QCcontig4' : [<anvio.sequencefeatures.Palindrome object at 0x7f8d6072f278>],
     'Day17a_QCcontig6' : [],
     'Day17a_QCcontig10': [],
     'Day17a_QCcontig16': [],
     'Day17a_QCcontig23': [],
     'Day17a_QCcontig24': [],
     'Day17a_QCcontig45': [],
     'Day17a_QCcontig54': [],
     'Day17a_QCcontig97': []}

```

Non-empty arrays are the proper palindromes found in a given sequence, described with an instance of the class `Palindrome` which is defined as the following:

``` python
class Palindrome:
    def __init__(self, run=terminal.Run()):
        self.run=run
        self.first_start = None
        self.fisrt_end = None
        self.first_sequence = None
        self.second_start = None
        self.second_end = None
        self.second_sequence = None
        self.num_mismatches = None
        self.length = None
        self.distance = None
        self.midline = ''
```

Not only you can access to each member variable to deal with them, you can easily display the contents of one using the `display()` function:

``` python
palindrome = p.palindromes['Day17a_QCcontig4'][0]
print(palindrome)

>>> TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAA (268872:269009) :: TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAA (269631:269768)

palindrome.display()

>>> 137 nts palindrome"
>>> ===============================================
>>> 1st sequence [start:stop] ....................: [268872:269009]
>>> 2nd sequence [start:stop] ....................: [269631:269768]
>>> Number of mismatches .........................: 0
>>> Distance between .............................: 759
>>> 1st sequence .................................: TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAA
>>> ALN ..........................................: |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
>>> 2nd sequence .................................: TTTCGTAATACTTTTTTGCAGTAGGCATCAAATTGGTGTTGTATAGATTTCTCATTATAATTTTGTTGCATGATAATATGCTCCTTTTTCCCCTTTCCACTAATACAACAATCAGAGAGCCCCTTTTTTTCGAAAAA
```

Alternatively you can process an ad hoc sequence without any input files,

``` python
p = Palindromes()

# let's set some values for fun,
p.min_palindrome_length = 14
p.max_num_mismatches = 1

# to go through some sequences of your liking:
some_sequences = {'a_sequence': 'CATTGACGTTGACGGCGACCGGTCGGTGATCACCGACCGGTCGCCGTCAACGTCAATG',
                  'antoher_sequence': 'AAATCGGCCGATTT',
                  'sequence_with_no_palindrome': 'AAAAAAAAAAAAAA'}

# in this case (where there are no input files) you can call the function `find`,
# rather than `process`, to populate the `p.palindromes` dictionary:
for sequence_name in some_sequences:
    p.find(some_sequences[sequence_name], sequence_name=sequence_name)

# tadaaa:
print(p.palindromes)

>>> {'a_sequence': [<anvio.sequencefeatures.Palindrome object at 0x7fce807ddb00>],
     'antoher_sequence': [<anvio.sequencefeatures.Palindrome object at 0x7fce807ddc88>],
     'sequence_with_no_palindrome': []}
```

If you are a programmer and need more from this module, please let us know.


{:.notice}
Edit [this file](https://github.com/merenlab/anvio/tree/master/anvio/docs/programs/anvi-search-palindromes.md) to update this information.



## Command line interface

The following is the list of parameters and their descriptions in the latest version of `anvi-search-palindromes`.

The code that generates this web page ensures that this information is the latest available in **9-dev (eunice)**. Which means, in some cases the information in this section (generated automatically) might be more comprehensive or up-to-date compared to the descriptions above (written by humans).

---

### Command line usage

{% raw %}
<div class="program-parameters-usage">anvi-search-palindromes [-h] [-c CONTIGS_DB] [-f FASTA file] [--dna-sequence DNA SEQ] [--palindrome-search-algorithm {numba,BLAST}] [-l INT] [-m INT] [-d INT] [--min-mismatch-distance-to-first-base INT] [--blast-word-size INT] [-T NUM_THREADS] [-o FILE_PATH] [--verbose]</div>
{% endraw %}

### Parameters and their descriptions

{% raw %}
<div class="program-parameters">
<section class="parameter-group parameter-group-sequence-source">
<header class="parameter-group-header"><span class="parameter-group-title">SEQUENCE SOURCE</span> <span class="parameter-group-description">Where should anvi&#x27;o find your sequences?</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-contigs_db"><code class="parameter-flags">-c, --contigs-db</code> <code class="parameter-metavar">CONTIGS_DB</code></dt>
<dd class="parameter-details"><span class="parameter-help">Anvi&#x27;o contigs database generated by &#x27;anvi-gen-contigs-database&#x27;</span></dd>
<dt class="parameter" id="parameter-fasta_file"><code class="parameter-flags">-f, --fasta-file</code> <code class="parameter-metavar">FASTA FILE</code></dt>
<dd class="parameter-details"><span class="parameter-help">A FASTA-formatted input file.</span></dd>
<dt class="parameter" id="parameter-dna_sequence"><code class="parameter-flags">--dna-sequence</code> <code class="parameter-metavar">DNA SEQ</code></dt>
<dd class="parameter-details"><span class="parameter-help">Literally a DNA sequence. For the very lazy.</span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-search-algorithm">
<header class="parameter-group-header"><span class="parameter-group-title">SEARCH ALGORITHM</span> <span class="parameter-group-description">If your purpose is to search for palindromes in general, you shouldn&#x27;t change the default algorithm, which is based on BLAST. But there is an exceedingly faster numba-based sequence search algorithm as an alternative for shorter sequences. There will be some differences between BLAST and numba, and some of the parameters you will set for palindrome parameters below will only be taken into consideration by BLAST.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-palindrome_search_algorithm"><code class="parameter-flags">--palindrome-search-algorithm</code> <code class="parameter-metavar">PALINDROME_SEARCH_ALGORITHM</code></dt>
<dd class="parameter-details"><span class="parameter-help">There are two algorithms for calculating palindromes: &#x27;BLAST&#x27; and &#x27;numba&#x27;. By default, anvi&#x27;o will dynamically optimize your search for speed and will use numba when a given sequence is shorter than 5,000 nucleotides or will use BLAST otherwise. However, you can use this parameter to ask anvi&#x27;o to use either of these methods explicitly to search for palindromes. You can choose from the options &#x27;BLAST&#x27; or &#x27;numba&#x27;. Please note that the results from the two approaches may differ.</span> <span class="parameter-choices"><span class="parameter-label">Choices:</span> <code class="parameter-choice">BLAST</code> <code class="parameter-choice">numba</code></span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">BLAST</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-palindrome-properties">
<header class="parameter-group-header"><span class="parameter-group-title">PALINDROME PROPERTIES</span> <span class="parameter-group-description">Some essential stuff here about your palindromes. Please also see the search sensitivity section below.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-min_palindrome_length"><code class="parameter-flags">-l, --min-palindrome-length</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum palindrome length.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter" id="parameter-max_num_mismatches"><code class="parameter-flags">-m, --max-num-mismatches</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The maximum number of mismatches allowed.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">0</code></span></dd>
<dt class="parameter" id="parameter-min_distance"><code class="parameter-flags">-d, --min-distance</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">The minimum distance between palindromic sequences (this parameter is essentially asking for the number of `x` in the sequence `ATCGxxxCGAT`). A value of 0 means that the algorithm will find all palindromes whether they are &#x27;in-place&#x27; palindromes or distant palindromes. The default value is 50 ncl.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">50</code></span></dd>
<dt class="parameter" id="parameter-min_mismatch_distance_to_first_base"><code class="parameter-flags">--min-mismatch-distance-to-first-base</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter allows you to trim the palindrome when one or more mismatches are n nucleotides away from a palindrome&#x27;s start or stop. By default, this flag is set to 1, which means anvi&#x27;o will trim palindromes with a mismatch that are occuring on the second or n-1 position. Here is an example palindrome `MMMMMM(X)M` where `M` are the matching nucleotides and `X` is a mismatch. By default, anvi&#x27;o will only report the first six matches: `MMMMMMM`. The rationale behind this parameter is that when searching for palindromes with mismatches, the algorithm will extend the palindrome length as much as possible, often wrongly including mismatches which are outside of the true palindrome.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-blast-sensitivity-performance">
<header class="parameter-group-header"><span class="parameter-group-title">BLAST SENSITIVITY &amp; PERFORMANCE</span> <span class="parameter-group-description">These parameters are only relevant for BLAST.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-blast_word_size"><code class="parameter-flags">--blast-word-size</code> <code class="parameter-metavar">INT</code></dt>
<dd class="parameter-details"><span class="parameter-help">This parameter is passed to blastn as the `-word_size`, which literally means in the BLAST world the length of best perfect among your alignments. The shorter the word size, the more short palindromes you will find, but it will also influence your ability to find palindromes with mismatches. For instance, if the word size is 10, then you will not find a palindrome that is 18 nt long but have a mismatch right at the 9th nucleotide (because individual perfect matches in the alignment will have word sizes of less than 10). So if you want to search for palindromes with a lot of mismatches, then you would like to keep your word size small. But smaller word sizes will impact your performance negatively, and very small ones will simply make it impossible to finish running for especially long contigs. If you want to find palindromes with no mismatches, then you can safely match the word size to the minimum palindrome length. If you want to do some test run, take a DNA sequence (say about 1,000 nts) that contains a palindrome that looks like the kinds of palindromes you will be interested in finding, and run the program `anvi-search-palindromes` with `--dna` parameter and `--verbose` flag. As you play with the word size, minimum number of mismatches, and the minimum palindrome length, the output messages will help you determine your best parameters.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">10</code></span></dd>
<dt class="parameter" id="parameter-num_threads"><code class="parameter-flags">-T, --num-threads</code> <code class="parameter-metavar">NUM_THREADS</code></dt>
<dd class="parameter-details"><span class="parameter-help">Maximum number of threads to use for multithreading whenever possible. Very conservatively, the default is 1, unless the environmental variable `ANVIO_THREADS` sets another positive integer. If you use this parameter, it will override `ANVIO_THREADS`. It is a good idea to not exceed the number of CPUs / cores on your system. Plus, please be careful with this option if you are running your commands on a SGE -- if you are clusterizing your runs, and asking for multiple threads to use, you may deplete your resources very fast.</span> <span class="parameter-default"><span class="parameter-label">Default:</span> <code class="parameter-default-value">1</code></span></dd>
</dl>
</section>
<section class="parameter-group parameter-group-output">
<header class="parameter-group-header"><span class="parameter-group-title">OUTPUT</span> <span class="parameter-group-description">Output options.</span></header>
<dl class="parameter-list">
<dt class="parameter" id="parameter-output_file"><code class="parameter-flags">-o, --output-file</code> <code class="parameter-metavar">FILE_PATH</code></dt>
<dd class="parameter-details"><span class="parameter-help">File path to store results.</span></dd>
<dt class="parameter parameter-switch" id="parameter-verbose"><code class="parameter-flags">--verbose</code></dt>
<dd class="parameter-details"><span class="parameter-help">Be verbose, print more messages whenever possible. You may regret this.</span></dd>
</dl>
</section>
</div>
{% endraw %}



## Additional Resources



{:.notice}
Are you aware of resources that may help users better understand the utility of this program? Please feel free to edit [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/search_palindromes.py) on GitHub. If you are not sure how to do that, find the `__resources__` tag in [this file](https://github.com/merenlab/anvio/blob/master/anvio/cli/interactive.py) to see an example.
