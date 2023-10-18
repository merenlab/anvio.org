Here you will first download the Python source package for the official anvi'o release:

```
curl -L https://github.com/merenlab/anvio/releases/download/v8/anvio-8.tar.gz \
        --output anvio-8.tar.gz
```

And install it using `pip` like a boss:

```
pip install anvio-8.tar.gz
```

{:.warning}
You might see errors during the pip installation that include a line like `Building wheel for XXXXXX did not run successfully.` and also a line like `error: command 'gcc' failed: No such file or directory`. If this is the case, the problem is that your WSL installation does not include the GCC compiler. You can fix that by running the following commands to upgrade your system and install the compiler: `sudo apt update`, followed by `sudo apt full-upgrade`, and finally `sudo apt install gcc`. Once those are complete, please retry the `pip install` command.

**If you don't see any error messages**, then you are probably golden and can move on to testing your anvi'o setup in the section "[Check your installation](#6-check-your-installation)" :)

**If you do see error messages**, please know that you are not alone. We are as frustrated as you are. Please take a look at the problems people have reported and try these solutions, which will most likely address your issues. Common issues can be found on this page in the next section.
