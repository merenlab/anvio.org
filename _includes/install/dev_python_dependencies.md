To install the Python dependencies of anvi'o please run the following command:

``` bash
cd ~/github/anvio/
pip install -r requirements.txt
```

{:.warning}
If `pysam` is causing you trouble during this step, you may want to try to install it with conda first by running `mamba install -y -c bioconda pysam` and then try the `pip` install command again.
