``` bash
conda install -y -c conda-forge -c bioconda python=3.10 \
        sqlite=3.46 prodigal idba mcl muscle=3.8.1551 famsa hmmer diamond \
        blast megahit bowtie2 bwa graphviz "samtools>=1.9" \
        trimal iqtree trnascan-se fasttree r-base r-tidyverse \
        r-optparse r-stringi r-magrittr bioconductor-qvalue meme ghostscript \
        nodejs=20.12.2 llvmlite numba

# try these separately, if they don't install, don't worry (it is sad, but OK):
conda install -y -c bioconda fastani
conda install -y -c conda-forge -c bioconda spades
conda install -y -c conda-forge -c bioconda vmatch
```
