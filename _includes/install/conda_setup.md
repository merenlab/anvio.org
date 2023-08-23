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

{:.notice}
if you were sent to this section from the "following the active codebase" section, please [click here](#setting-up-the-local-copy-of-the-anvio-codebase) to go back to where you left off. Otherwise, ignore this message and continue with the next chapter to setup your anvi'o environment for the installation of the latest stable version.