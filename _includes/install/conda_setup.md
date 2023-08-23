Conda gives us a very simple and effective way to install anvi'o on your system along with most of its dependencies. To check if it was installed properly in the previous section, type `conda` in your terminal.You should see an output like this instead of a 'command not found' error (your version might be different):

```bash
$ conda --version
conda 23.5.2
```

Once you have confirmed you have conda installed, run this command to make sure you are up-to-date:

``` bash
conda update conda
```

Finally, please install `mamba` for fast dependency resolving:

```
conda install -y -c conda-forge "mamba >=0.24.0"
```

Good? Good! You are almost there!