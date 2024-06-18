First make sure you are not in any environment by running `conda deactivate`. Then, make sure you don't have an environment called `anvio-dev` (as in *anvi'o development*):

```
conda env remove --name anvio-dev
```

Create a new conda environment:

``` bash
conda create -y --name anvio-dev python=3.10
```

And activate it:

```
conda activate anvio-dev
```
