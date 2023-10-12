In this section, you will find the solutions to several common installation issues that users have reported. They are in no particular order, so it may help to search for the key words in your error messsage(s).

{:.notice}
Can't find your issue? Have you checked the [anvi'o issues page](https://github.com/merenlab/anvio/issues), even the 'Closed' issues? If you can't find a solution to your problem, please feel free to either [open a new issue](https://github.com/merenlab/anvio/issues/new?assignees=&labels=&projects=&template=bug-report.md&title=%5BBUG%5D+Replace+this+text+with+a+short+but+descriptive+title) on our Github or send us a message on {% include _discord_invitation_button.html %}.

### Issues with pysam installation using pip

Some people have reported errors in the installation of `pysam` using `pip`, so if your installation also fails due to `pysam`, you can use the following two lines to first install this package via conda, and then install the anvi'o package via `pip`:

```
conda install -y -c bioconda pysam
pip install anvio-8.tar.gz
```

### Issues related to samtools

At this point, you should probably test your `samtools` installation by running `samtools --version`. If you see an error that looks similar to this:

```
dyld: Library not loaded: @rpath/libcrypto.1.0.0.dylib
  Referenced from: /Users/iva/opt/miniconda3/envs/anvio-8/bin/samtools
  Reason: image not found
Abort trap: 6
```

This is happening because somehow you have the wrong version of the `samtools` :( The following commands should fix it:

```
conda remove -y samtools
conda install -y -c bioconda samtools=1.9
```

Then try `samtools --version` again to make sure it is okay now. What you _should_ see is the following:

```
samtools 1.9
Using htslib 1.9
Copyright (C) 2018 Genome Research Ltd.
```
