It is a good idea to **make sure you are not already in a conda environment** before you run the following steps. If you are not sure what this means, please simply run the following commands now, one after another to make sure you are not in any conda environment, and there is no such conda environment called `anvio-dev`:

```
conda deactivate
conda remove -n anvio-dev --all -y
```

Now. Depending on your architecture, we will setup your conda environment slightly differently. To determine which instructions to follow, please first run the following command in your terminal:

```
sysctl -n machdep.cpu.brand_string
```

If the output of this command starts with `Apple M`, jump to the [Apple Silicon](#apple-silicon) section. If it starts with `Intel`, jump to the [Intel](#intel) section.

### Apple Silicon

Now, please look at the output of this command, and act accordingly:

```
uname -m
```

* **If it says `x86_64`**, run the following command to create your conda environment:

    ```
    CONDA_SUBDIR=osx-64 conda create -y --name anvio-dev python=3.10
    ```

  And jump to [the rest of the setup](#the-rest-of-the-conda-setup):

* **If it says `arm64`**, then we first must set your terminal application to use Rosetta:

  * Follow the path for Finder → Applications → iTerm2.app (if you are using iTerm2), *or* Finder → Applications → Utilities → Terminal.app (if you are using the default Terminal app),
  * Right click on the application icon, and click on 'Get Info' in the menu,
  * Click on "Open using Rosetta" checkbox so it looks like this:

  {% include IMAGE path="/images/rosetta.png" width=50 %}

  * Restart your terminal application
  * Make sure you see `x86_64` when you run the following command:

    ```
    uname -m
    ```

  * Run this to create your conda environment:

    ```
    CONDA_SUBDIR=osx-64 conda create -y --name anvio-dev python=3.10
    ```

  * And jump to [the rest of the setup](#the-rest-of-the-conda-setup).

### Intel

Life is simpler for you. Run this command instead:

```
conda create -y --name anvio-dev python=3.10
```

### The rest of the conda setup

Next, we will activate the new `anvio-dev` environment:

```
conda activate anvio-dev
```
