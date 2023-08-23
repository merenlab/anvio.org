{:.warning}
This section is not quite meant to be followed by those who would define themselves as *end users* in a conventional sense. But we are not the kinds of people who would dare to tell anyone what they can and cannot do. FWIW, our experience suggests that if you are doing microbiology, you will do computers no problem if you find dem computers exciting.

If you follow these steps, you will have anvi'o setup on your system in such a way, every time you initialize your anvi'o environment you will get **the very final state of the anvi'o code**. Plus, you can have both the stable and active anvi'o on the same computer.

Nevertheless, it is important to keep in mind that there are multiple advantages and disadvantages to working with the active development branch. Advantages are obvious and include,

* **Full access to all new features and bug fixes in real-time**, without having to wait for stable releases to be announced.

* A working system to **hack anvi'o and/or add new features to the code** (this strategy is exactly how we develop anvi'o and use it for our science at the same time at our lab).

In contrast, disadvantages include,

* **Unstable intermediate states may frustrate you with bugs, and in extremely rare instances loss of data** (this happened only once so far during the last five years, and required one of our users to re-generate their contigs databases).

* Difficulty to mention the anvi'o version in a paper. Although this can easily be solved by sharing not the version number of anvi'o but the cryptographic hash of the last commit for reproducibility. If you ever struggle with this, please let us know and we will help you.

If you are still here, let's start.

### Initial checks

Following instructions will assume that you are using a computer with a working `conda` installation. Please visit [this section](#1-setup-conda) first to make sure it is the case (and come back here when that section sends you back here).

### Setting up the local copy of the anvi'o codebase

If you are here, it means you have a working conda installation on your computer. That's very good. We will start the rest of our adventure by by getting a copy of the anvi'o codebase from GitHub.

Here I suggest `~/github/` as the base directory to keep the code, but you can change it to something else, of course (in which case you must remember to apply that change all the following commands). Setup the code directory:

``` bash
mkdir -p ~/github && cd ~/github/
```

Get the anvi'o code:

{:.warning}
If you only plan to follow the development branch you can skip this message. But if you are not an official anvi'o developer but intend to change anvi'o and send us pull requests to reflect those changes in the official repository, you may want to clone anvi'o from your own fork rather than using the following URL. Thank you very much in advance and we are looking forward to seeing your PR!

```
git clone --recursive https://github.com/merenlab/anvio.git
```

Once this is done run the following command to go into the anvi'o codebase directory (and please don't change directories until the end of the installation):

```
cd ~/github/anvio/ && git pull
```
