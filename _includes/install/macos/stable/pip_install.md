Here you will first download the Python source package for the official anvi'o release:

```
curl -L https://github.com/merenlab/anvio/releases/download/v8/anvio-8.tar.gz \
        --output anvio-8.tar.gz
```

Some packages in `requirement.txt` may require to be installed with a more up to date c-compiler on **Mac OSX**. Hence, we suggest all Mac users to run the following commands before you start the `pip install` command:

```bash
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
```

And then install it using `pip` like a boss:

```
pip install anvio-8.tar.gz
```

**If you don't see any error messages**, then you are probably golden and can move on to testing your anvi'o setup in the section "[Check your installation](#6-check-your-installation)" :)

**If you do see error messages**, please know that you are not alone. We are as frustrated as you are. Please take a look at the problems people have reported and try these solutions, which will most likely address your issues. Common issues can be found on this page in the next section.
