{:.notice}
It is a good idea to **make sure you are not already in a conda environment** before you run the following steps. Just to be clear, you can indeed install anvi'o in an existing conda environment, but if things go wrong, we kindly ask you to refer to meditation for help, rather than [anvi'o community resources](https://merenlab.org/2019/10/07/getting-help/) If you want to see what environments do you have on your computer and whether you already are in one of them in your current terminal by running `conda env list`. **If all these are too much for you and all you want to do is to move on with the installation**, simply do this: open a new terminal, and run `conda deactivate`, and continue with the rest of the text.

First, a new conda environment:

``` bash
conda create -y --name anvio-8 python=3.10
```

And activate it:

```
conda activate anvio-8
```
