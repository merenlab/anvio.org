Some packages in `requirement.txt` may require to be installed with a more up to date c-compiler on **Mac OSX**. Hence, we suggest all Mac users to run the following commands before you start the `pip install` command:

```bash
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
```

Finally, to install the Python dependencies of anvi'o, please run the following command:

``` bash
cd ~/github/anvio/
pip install -r requirements.txt
```
