Now we have the codebase and we have the conda environment, but they don't know about each other.

Here we will setup your conda environment in such a way that every time you activate it, you will get the very latest updates from the main anvi'o repository. While you are still in anvi'o environment, copy-paste these lines into your terminal:

``` bash
cat <<EOF >${CONDA_PREFIX}/etc/conda/activate.d/anvio.sh
# creating an activation script for the the conda environment for anvi'o
# development branch so (1) Python knows where to find anvi'o libraries,
# (2) the shell knows where to find anvi'o programs, and (3) every time
# the environment is activated it synchronizes with the latest code from
# active GitHub repository:
export PYTHONPATH=\$PYTHONPATH:\$HOME/github/anvio/
export PATH=\$PATH:\$HOME/github/anvio/bin:\$HOME/github/anvio/sandbox
echo -e "\033[1;34mUpdating from anvi'o GitHub \033[0;31m(press CTRL+C to cancel)\033[0m ..."
cd \$HOME/github/anvio && git pull && cd -
EOF
```

{:.warning}
If you are using `zsh` by default these may not work. If you run into a trouble here or especially if you figure out a way to make it work both for `zsh` and `bash`, please let us know. To use `bash` to make the above command work, first run this `exec bash` command. Then re-run the command above. To go back to `zsh` you can run `exec zsh` command.

If everything worked, you should be able to type the following commands in a new terminal and see similar outputs:

```
meren ~ $ conda activate anvio-dev
Updating from anvi'o GitHub (press CTRL+C to cancel) ...

(anvio-dev) meren ~ $ which anvi-self-test
/Users/meren/github/anvio/bin/anvi-self-test

(anvio-dev) meren ~ $ anvi-self-test -v
Anvi'o .......................................: hope (v7.1-dev)
Python .......................................: 3.10.13

Profile database .............................: 38
Contigs database .............................: 21
Pan database .................................: 16
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 4
tRNA-seq database ............................: 2

(anvio-dev) meren ~ $
```

If that is the case, you're all set.

Every change you will make in anvi'o codebase will immediately be reflected when you run anvi'o tools (but if you change the code and do not revert back, git will stop updating your branch from the upstream).

If you followed these instructions, every time you open a terminal you will have to run the following command to activate your anvi'o environment:

```
conda activate anvio-dev
```

If you are here, you can now jump to "[Check your anvi'o setup](#4-check-your-installation)" to see if things worked for you using `anvi-self-test`, but don't forget to take a look at the bonus chapter below, especially if you are using `bash`.