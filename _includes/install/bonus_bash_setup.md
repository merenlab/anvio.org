{:.notice}
This section is written by Meren and reflects his setup on a Mac system that runs miniconda where `bash` is [setup as the default shell](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba). If you are using another shell and if you would like to share your solution, please send a PR!

This is all personal taste and they may need to change from computer to computer, but I added the following lines at the end of my `~/.bash_profile` to easily switch between different versions of anvi'o on my Mac system:


``` bash
# This is where my miniconda base is, you can find out
# where is yours by running this in your terminal:
#
#    conda env list | grep base
#
export MY_MINICONDA_BASE="/Users/$USER/miniconda3"

init_anvio_7 () {
    deactivate &> /dev/null
    conda deactivate &> /dev/null
    export PATH="$MY_MINICONDA_BASE/bin:$PATH"
    . $MY_MINICONDA_BASE/etc/profile.d/conda.sh
    conda activate anvio-7.1
    export PS1="\[\e[0m\e[47m\e[1;30m\] :: anvi'o v7.1 :: \[\e[0m\e[0m \[\e[1;32m\]\]\w\[\e[m\] \[\e[1;31m\]>>>\[\e[m\] \[\e[0m\]"
}


init_anvio_dev () {
    deactivate &> /dev/null
    conda deactivate &> /dev/null
    export PATH="$MY_MINICONDA_BASE/bin:$PATH"
    . $MY_MINICONDA_BASE/etc/profile.d/conda.sh
    conda activate anvio-dev
    export PS1="\[\e[0m\e[40m\e[1;30m\] :: anvi'o v7.1 dev :: \[\e[0m\e[0m \[\e[1;34m\]\]\w\[\e[m\] \[\e[1;31m\]>>>\[\e[m\] \[\e[0m\]"
}

alias anvio-7.1=init_anvio_7
alias anvio-dev=init_anvio_dev
```

You can either open a new terminal window or run `source ~/.bash_profile` to make sure these changes take effect. Now you should be able to type `anvio-7.1` to initialize the stable anvi'o, and `anvio-dev` to initialize the development branch of the codebase.

Here is what I see in my terminal for `anvio-7.1`:

```
meren ~ $ anvi-self-test -v
-bash: anvi-self-test: command not found

meren ~ $ anvio-7.1

:: anvi'o v7.1 :: ~ >>>

:: anvi'o v7.1 :: ~ >>> anvi-self-test -v
Anvi'o .......................................: hope (v7.1)

Profile database .............................: 38
Contigs database .............................: 20
Pan database .................................: 15
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 2
tRNA-seq database ............................: 2
```

Or for `anvio-dev`:

```
meren ~ $ anvi-self-test -v
-bash: anvi-self-test: command not found

:: anvi'o v7.1 :: ~ >>> anvio-dev

:: anvi'o v7.1 dev :: ~ >>>

:: anvi'o v7.1 dev :: ~ >>> anvi-self-test -v
Anvi'o .......................................: hope (v7.1-dev)

Profile database .............................: 35
Contigs database .............................: 20
Pan database .................................: 14
Genome data storage ..........................: 7
Auxiliary data storage .......................: 2
Structure database ...........................: 2
Metabolic modules database ...................: 2
tRNA-seq database ............................: 1
```

**But please note** that both aliases run `deactivate` and `conda deactivate` first, and they may not work for you especially if you have a fancy setup.

