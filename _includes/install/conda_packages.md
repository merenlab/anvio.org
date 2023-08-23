Now you are in a pristine environment, in which you will install all conda packages that anvi'o will need to work properly. This looks scary, but it will work if you just copy-paste it and press ENTER:

``` bash
conda install -y -c bioconda "sqlite>=3.31.1"
conda install -y -c bioconda prodigal
conda install -y -c bioconda mcl
conda install -y -c bioconda muscle=3.8.1551
conda install -y -c bioconda hmmer
conda install -y -c bioconda diamond
conda install -y -c bioconda blast
conda install -y -c bioconda megahit
conda install -y -c bioconda spades
conda install -y -c bioconda bowtie2 tbb=2019.8
conda install -y -c bioconda bwa
conda install -y -c bioconda samtools=1.9
conda install -y -c bioconda centrifuge
conda install -y -c bioconda trimal
conda install -y -c bioconda iqtree
conda install -y -c bioconda trnascan-se
conda install -y -c bioconda r-base
conda install -y -c bioconda r-stringi
conda install -y -c bioconda r-tidyverse
conda install -y -c bioconda r-magrittr
conda install -y -c bioconda r-optparse
conda install -y -c bioconda bioconductor-qvalue
conda install -y -c bioconda fasttree
conda install -y -c bioconda vmatch

# this last one may cause some issues. if it doesn't install,
# don't worry, you will still be fine:
conda install -y -c bioconda fastani
```

If you see any error messages in the output indicating that a package failed to install, you should check the 'Troubleshooting' section or search for it in the [anvi'o issues page](https://github.com/merenlab/anvio/issues) (make sure to check the 'Closed' issues as well) to see if we already found a solution for the error.