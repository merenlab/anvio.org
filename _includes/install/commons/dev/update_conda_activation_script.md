At this stage we have everything we need: a well-configured conda environment with a development version of anvi'o installed.

What we are missing at this stage is the conda environment to 'update' the anvi'o code from GitHub upon initialization. If you wish to have that functionality, please copy-paste these lines into your terminal while you are still in anvio-dev conda environment:

``` bash
cat <<EOF >${CONDA_PREFIX}/etc/conda/activate.d/anvio.sh
# creating an activation script for the the conda environment for anvi'o
# development branch so every time the environment is activated, the
# local copy of the code is synchronizes with the latest changes from
# the anvi'o GitHub repository:
echo -e "\033[1;34mUpdating from anvi'o GitHub \033[0;31m(press CTRL+C to cancel)\033[0m ..."
cd \$HOME/github/anvio && git pull && cd -
EOF
```

With this change,every time you activate the conda environment you will get the very latest updates from the main anvi'o repository.

{:.warning}
If you are using `zsh` by default these may not work. If you run into a trouble here or especially if you figure out a way to make it work both for `zsh` and `bash`, please let us know. To use `bash` to make the above command work, first run this `exec bash` command. Then re-run the command above. To go back to `zsh` you can run `exec zsh` command.

If everything worked, you should be able to type the following commands in a new terminal and see similar outputs:

```
meren ~ $ conda activate anvio-dev
Updating from anvi'o GitHub (press CTRL+C to cancel) ...

(anvio-dev) meren ~ $ which anvi-self-test
/Users/meren/miniconda3/envs/anvio-dev/bin/anvi-self-test

(anvio-dev) meren ~ $ anvi-self-test -v
Anvi'o .......................................: marie (v8-dev)
Python .......................................: 3.10.18

Profile database .............................: 40
Contigs database .............................: 24
Pan database .................................: 21
Genome data storage ..........................: 7
Structure database ...........................: 2
Metabolic modules database ...................: 4
tRNA-seq database ............................: 2
Genes database ...............................: 6
Auxiliary data storage .......................: 2
Workflow configurations ......................: 3

(anvio-dev) meren ~ $
```

If that is the case, you're all set.

Every change you will make in anvi'o codebase will immediately be reflected when you run anvi'o tools (but if you change the code and do not revert back, git will stop updating your branch from the upstream). If you intend to write code for anvi'o, please feel free to get in touch with the anvi'o devleopers for insights and/or advice.

If you followed these instructions, every time you open a terminal you will have to run the following command to activate your anvi'o environment:

```
conda activate anvio-dev
```

If you are here, you can now jump to "[Check your anvi'o setup](#4-check-your-installation)" to see if things worked for you using `anvi-self-test`, but don't forget to take a look at the bonus chapter below, especially if you are using `bash`.
