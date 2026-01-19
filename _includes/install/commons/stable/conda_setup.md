It is a good idea to **make sure you are not already in a conda environment** before you run the following steps. If you are not sure what this means, please simply run the following commands now, one after another to make sure you are not in any conda environment, and there is no such conda environment called `anvio-9`:

```
conda deactivate
conda remove -n anvio-9 --all -y
```

First, a new conda environment:

``` bash
conda create -y --name anvio-9 python=3.10
```

And activate it:

```
conda activate anvio-9
```
