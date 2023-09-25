{:.notice}
If the [mamba](https://github.com/mamba-org/mamba) installation somehow doesn't work, that is OK. In that case you may need to replace every instance of `mamba` with `conda` throughout the installation, and everything should work smoothly (but with slightly longer wait times). It would be extremely helpful to the community if you were to ping us on {% include _discord_invitation_button.html %} in the case of a `mamba` failure, so we better understand under what circumstances this solution fails.

Install all the necessary packages:

```
mamba install -y -c conda-forge -c bioconda python=3.10 \
        sqlite prodigal idba mcl muscle=3.8.1551 famsa hmmer diamond \
        blast megahit spades bowtie2 bwa graphviz "samtools>=1.9" \
        trimal iqtree trnascan-se fasttree vmatch r-base r-tidyverse \
        r-optparse r-stringi r-magrittr bioconductor-qvalue meme

# try this, if it doesn't install, don't worry. you will
# deal with that later
mamba install -y -c bioconda bioconductor-qvalue

# try this, too. it may also fail to install. which is OK:
mamba install -y -c bioconda fastani
```

Now you are ready for the code.