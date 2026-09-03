In this section, you will find the solutions to several common installation issues that users have reported. They are in no particular order, so it may help to search for the key words in your error messsage(s).

{:.notice}
Can't find your issue? Have you checked the [anvi'o issues page](https://github.com/merenlab/anvio/issues), even the 'Closed' issues? If you can't find a solution to your problem, please feel free to either [open a new issue](https://github.com/merenlab/anvio/issues/new?assignees=&labels=&projects=&template=bug-report.md&title=%5BBUG%5D+Replace+this+text+with+a+short+but+descriptive+title) on our Github or send us a message on {% include _discord_invitation_button.html %}.

### Issues related to PyANI

In anvi'o `v8` there is a problem with incompatibility between the default installed versions of PyANI (v0.2.12) and matplotlib (v3.9.x). The program {% include PROGRAM name="anvi-compute-genome-similarity"%} can fail at the PyANI step, and the resulting log file will show an error like this:

```
AttributeError: module 'matplotlib.pyplot' has no attribute 'register_cmap'
```

To fix this issue, you can manually downgrade the matplotlib package like this:
```
pip install matplotlib==3.5.1
```

Or you can just switch to using FastANI instead. See [this Discord thread](https://discord.com/channels/1002537821212512296/1243341200694710363/1243341200694710363) for more context and details.

### LinkError for SPAdes or Vmatch

SPAdes and Vmatch are optional dependencies because they are only required for certain tasks and not everyone will need them. The reason we try to install these packages separately is that they each have a post-link script that runs during their conda installation which can sometimes fail (we've experienced it only on Mac systems so far). You may see an error like the following:

```
LinkError: post-link script failed for package bioconda::spades-4.3.0-hb11480c_1
```

The Vmatch error starts with a similar line which is followed by a lot of output from the post-link script.

Unfortunately, we don't currently have a solution for these errors, but this section is here to tell you that you probably don't need to worry about it. SPAdes is only one of the assembler options that is part of the [metagenomics workflow](https://anvio.org/help/main/workflows/metagenomics/) -- if you want to use that workflow, you can either choose a different assembler, or if you specifically want to use SPAdes, then you can install it yourself in a separate conda environment and use it through that environment. Vmatch is only used in the tRNA-seq programs of anvi'o, specifically [`anvi-trnaseq`](https://anvio.org/help/main/programs/anvi-trnaseq/), so the likelihood that you will need it is pretty low (and if you are one of the few people working on tRNA-seq data, you are probably used to troubleshooting stuff).