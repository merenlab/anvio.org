If you are here, it means you have a conda environment with everything except anvi’o itself. We will make sure this environment has anvi’o by getting a copy of the anvi’o codebase from GitHub.

Here I will suggest `~/github/` as the base directory to keep the code, but you can change if you want to something else (in which case you must remember to apply that change all the following commands, of course). Setup the code directory:

``` bash
mkdir -p ~/github && cd ~/github/
```

Get the anvi'o code:

{:.warning}
If you only plan to follow the development branch, and not make changes to the codebase, you can skip this message. But if you are not an official anvi'o developer yet intend to change anvi'o and send us pull requests to reflect those changes in the official repository, you may want to clone anvi'o from your own fork rather than using the following URL. Thank you very much in advance and we are looking forward to seeing your PR!

```
git clone --recursive https://github.com/merenlab/anvio.git
```
