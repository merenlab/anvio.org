{:.warning}
This is for developers who will be working on different branches that may include new anvi'o programs.

Since anvio-dev uses editable installations of the anvi'o codebase as a package, switching between branches that have different sets of programs in development may lead to funny situations, and you may want to keep track of such events to maintain the integrity of your Python environment regardless of which branch you are working on.

If you run the following lines in your terminal, you will add a git hook to your copy of the codebase to ensure the integrity of the environment after each 'checkout':

``` bash
cd ~/github/anvio

echo -e '#!/bin/bash\n[ "$3" = "1" ] && python -c "import anvio.programs as p; p.AnvioPrograms().sanity_check()"' > .git/hooks/post-checkout

chmod +x .git/hooks/post-checkout
```

For instance, when I switch to an anvi'o branch in which new anvi'o programs that are being developed (and absent in the `master` branch), this is what I see when this hook is in place:

```
$ cd ~/github/anvio

$ git checkout pangenome_graph
Switched to branch 'pangenome_graph'
Your branch is up to date with 'origin/pangenome_graph'.

FRIENDLY WARNING: ANVIO ENVIRONMENT IS CONFUSE
===============================================
Please read the following lines carefully, since you may need to act on this
information. There is a mismatch between the anvi'o programs the active anvi'o
codebase knows about (through the entry points described in the
`pyproject.toml`), and the anvi'o programs your Python environment knows about
(through the list of programs accessible via $PATH).

There are some anvi'o programs that are known to your active anvi'o codebase,
but they are not accessible to you in your Python environment. Here is a list of
such programs:

* anvi-pan-graph
* anvi-reorient-contigs
* anvi-display-pan-graph

This happens when you switch to a branch where there are new anvi'o programs
described in the `pyproject.toml` file, but they are not yet installed in the
Python environment. Which means, if you were to run, let's say, 'anvi-pan-graph'
in your terminal right now, you would get a 'command not found' error from your
shell (rather than a 'ModuleNotFoundError' error from Python).

The universal solution here is to run the following command right now in your
anvi'o source code directory:

    pip install -e . --force-reinstall --upgrade

This will synchronize your anvi'o codebase with its installed version in your
active Python environment. This is indeed very annoying, since you will likely
have to do it again when you go back to another branch, but this is how it goes.
It is also a viable alternative to ignore this message, if you think this
mismatch is not a concern for you at this stage.
```

This is only useful for active developers, and you can run the same inspection anytime by running this code in your terminal manually:

```bash
python -c "import anvio.programs as p; p.AnvioPrograms().sanity_check()
```
