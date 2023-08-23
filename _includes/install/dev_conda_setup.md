First, please install `mamba` for fast dependency resolving:

```
conda install -y -c conda-forge "mamba >=0.24.0"
```

The following command will create a new conda environment, `anvio-dev`, with the necessary packages from various conda repositories:

```
mamba env create -f .conda/environment.yaml
```

{:.notice}
If the [mamba](https://github.com/mamba-org/mamba) installation somehow doesn't work, that is OK. In that case you may need to replace every instance of `mamba` with `conda` throughout the installation, and everything should work smoothly (but with slightly longer wait times). It would be extremely helpful to the community if you were to ping us on {% include _discord_invitation_button.html %} in the case of a `mamba` failure, so we better understand under what circumstances this solution fails.

When this step is done, activate your new environment:

```
conda activate anvio-dev
```

Next, we will install the remaining Python packages that anvi'o needs in place