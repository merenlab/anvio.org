{:.notice}
If the [mamba](https://github.com/mamba-org/mamba) installation somehow still doesn't work, that is OK. It is also OK if some of the commands below that start with `mamba` don't work. In either of these cases, you only need to replace every instance of `mamba` with `conda`, and everything should work smoothly (but with slightly longer wait times). But it would be extremely helpful to the community if you were to ping us on {% include _discord_invitation_button.html %} in the case of a `mamba` failure, so we better understand under what circumstances this solution fails.

Now you are in a pristine environment, in which you will install all conda packages that anvi'o will need to work properly. This looks scary, but it will work if you just copy-paste it and press ENTER:

``` bash
mamba install -y -c conda-forge -c bioconda python=3.10 \
        sqlite prodigal idba mcl muscle=3.8.1551 famsa hmmer diamond \
        blast megahit spades bowtie2 bwa graphviz "samtools>=1.9" \
        trimal iqtree trnascan-se fasttree vmatch r-base r-tidyverse \
        r-optparse r-stringi r-magrittr bioconductor-qvalue meme

# try this, if it doesn't install, don't worry (it is sad, but OK):
mamba install -y -c bioconda fastani
```

If you see any error messages in the output indicating that a package failed to install, you should check the 'Common problems' section below or search for it in the [anvi'o issues page](https://github.com/merenlab/anvio/issues) (make sure to check the 'Closed' issues as well) to see if we already found a solution for the error.