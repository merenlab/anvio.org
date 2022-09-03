---
layout: blog
authors: [ivagljiva]
title: "Updating anvi’o documentation and putting those changes online"
excerpt: "A tutorial for anyone interested in contributing to the anvi'o help pages."
date: 2022-09-03
tags: [documentation, contributors, technical]
comments: true
---


The anvi'o code repository also tracks its documentation, making it easy to keep our help pages up-to-date with the latest changes. But how do you make sure those changes are also reflected on the anvi'o website? This page is a comprehensive guide to updating documentation, both within the anvi'o codebase and on the web. :)

{:.warning}
You should ONLY update documentation for the development version of anvi'o, never for the static releases (like `v7` or `v7.1`). If you think something needs to be changed for the release documentation, please contact Meren :)


## A bit of setup
To follow this guide, you will need to have access to two Github repositories: the [anvi'o codebase](https://github.com/merenlab/anvio) and [anvio.org](https://github.com/merenlab/anvio.org). If you don't already have the codebase, you will need to follow our installation instructions for tracking the development version of anvi'o, which can be found [here](https://anvio.org/install/#5-follow-the-active-development-youre-a-wizard-arry).

After downloading the anvio.org repository, there are a few more steps that you need to take in order to be able to run a copy of the website locally to check your changes. We use [Jekyll](https://jekyllrb.com/) to build the website, which means you'll need to install [Ruby](https://www.ruby-lang.org/en/) on your computer. Mac/Linux/[WSL](https://docs.microsoft.com/en-us/windows/wsl/install) users can do this by running:

```
brew install ruby@2.7
```

After that, make sure ruby is in your `$PATH` by running `which ruby`. You should see something like this:

```
/usr/local/opt/ruby@2.7/bin/ruby
```

If that worked, you should move into the website directory and install the necessary gems for serving and building the website:

```
cd anvio.org/
bundle install
```

Here is the command to run a local copy of anvio.org. If it works, you are all done with setup!

```
bundle exec jekyll serve --incremental
```

## Updating documentation

This section will describe how to make changes to anvi'o documentation so that they are tracked in the anvi'o codebase.

Anyone can update the anvi'o documentation. You don't need to be a developer, just somebody who knows a lot about how anvi'o works and wants to pass that knowledge on to the rest of the community.

Let's get started!

### Step 1: Make a new branch

Documentation updates (like most changes to the codebase) should be added as a pull request (PR), so that they can be reviewed before being merged with the main development branch.

If you are a developer and have been working on updates to the code, you can add your documentation changes to the same branch in which you are working on the code. This is the best practice, since the code and associated documentation updates will be merged at the same time. (If this is your case, you can checkout your branch and skip to the next step.)

If you just want to update the docs, you'll need to make a branch for it. Go to the anvi'o repository on your computer, make sure it's all up-to-date, and then checkout a new branch. Best practice: give it a descriptive name, like `update-metabolism-docs`. In the example below, we'll use the generic name `update-docs`.

```
cd anvio
git pull
git checkout -b update-docs
```

Now you are ready to make changes.

### Step 2: Change the documentation

Anvi'o docs are located in the codebase at the relative path `anvio/docs/`. There is a folder for anvi'o programs, in which each anvi'o script has its own Markdown file, and a folder for anvi'o artifacts (inputs, outputs, and miscellaneous terms that anvi'o uses -- see [the main anvi'o help page](https://anvio.org/help/main/) for a lengthier description of these) in which each artifact has its own Markdown. There is also a folder that stores images used in any help page.

To make changes, you need to open the Markdown file for the program or artifact of interest. If it does not exist, you will need to make one.

#### Naming conventions for help pages

It's important that help pages are named consistently with the thing they are describing, so that everything can be linked together properly.

Program help pages should have the same name as the program (or script), but with the Markdown file extension. For example, the program `anvi-gen-contigs-database` has a help page called `anvi-gen-contigs-database.md`, which is located in `anvio/docs/programs/`.

Artifact help pages should be named using the same text used to describe the artifact in the `__requires__` and `__provides__` statements located at the top of the programs that use or produce them. For example, `anvi-gen-contigs-database` produces a contigs database, as indicated by this statement in the program file:

```
__provides__ = ['contigs-db']
```

The contigs database artifact help page is therefore named `contigs-db.md`, and it is located in `anvio/docs/artifacts/`.

#### Tips for writing documentation

The docs are written in Markdown, so once you have the proper file open in your favorite Markdown editor, you should use Markdown syntax to format everything. Use headers of different levels for organization (and for an automatic table of contents), and use code blocks to format command examples or example terminal outputs. Here is a [quick cheat-sheet](https://www.markdownguide.org/cheat-sheet/).

##### Referencing programs/artifacts with automatic links

In addition to standard Markdown formatting options, anvi'o can make wiki-like links between different documentation pages automatically. So you don't need to write hyperlinks for every program or artifact that you want to reference. Instead use the following formatting:
```
%(artifact-name)s
```

For example, to automatically produce a link to the [contigs database help page](https://anvio.org/help/main/artifacts/contigs-db/), you would write this:

```
%(contigs-db)s
```

Make sure that the program or artifact name within the parentheses exactly matches the name of the program or artifact, as described in the naming conventions section above.

If you don't name it right, or use this exact format, then you will get an error when trying to render the help pages (in a later step). Common mistakes to look out for:
- using a `$` instead of a `%`
- using brackets `{}` instead of parentheses `()`
- forgetting the `s` at the end (tricky with plurals! Here is an example of a correctly-formatted, plural linked artifact: `%(contigs-db)ss`)

One convention that we follow is to use these links in example code blocks, so that users can quickly get information on inputs and outputs to programs. Here is an example of this:

```
{{ codestart }}
anvi-gen-contigs-database -f %(contigs-fasta)s \
                          -o %(contigs-db)s
{{ codestop }}
```

##### Another way to do codeblocks

You might have noticed this in the above example:

```
{{ codestart }}

{{ codestop }}
```

This is one way to set apart code, and we often use it for code examples.

There isn't much of a difference between this way and the standard triple-backticks (the background gray color for triple-backticks is a little bit lighter, but not by much). So it doesn't really matter which one you use, but it can be useful for subtly differentiating code blocks (`{{ codestart }}`) from example terminal outputs (triple-backticks), especially when writing or searching within the Markdown file.

##### Pro Tip for adding tables

If you want to make a table (for instance, an example tab-delimited program input or output), there is a very quick and easy way to get it into Markdown format. Simply pipe your example tab-delimited file into the program `anvi-script-as-markdown`:

```
cat my-file | anvi-script-as-markdown
```

The program will print the file as a Markdown-formatted table to your terminal screen. :)

Another option is to use a website for formatting Markdown tables, such as [this one](https://www.tablesgenerator.com/markdown_tables) (thanks to Matt Schechter for the suggestion!).

##### Percent signs - double them up!

Percent signs are a special character because we use them to format links between help pages. So if you want a real `%` character to show up in your text, you actually need to put two of them, just like this:

```
This is 100%% true!
```

If you don't double up on the percent character, the Markdown rendering will fail.

##### Adding images

If you want to include an image in the documentation, you first need to add it to the `anvio/docs/images/png` folder (if it is a PNG file) or to the `anvio/docs/images/svg` folder (if it is an SVG).

Once that is done, you include the image in the documentation using syntax like the following, giving a relative path to the image file name:

```
![A description of the image (alt text)](../../images/filename-of-image.png)
```

This is where things are a bit weird, because that relative path is actually not the path to the file _in the anvi'o codebase_. It is actually the relative path that will exist in the rendered files for the website (after Step 4). Just trust us, and make sure your image file name exactly matches to the file name given after `../../images/`. Anvi'o will take care of the rest.

### Step 3: Commit your changes

When you are finished changing something, remember to commit it to your branch with a descriptive message. We hope this goes without saying, but the best practice is to commit lots of small changes rather than one big collection of changes (little changes are easy to undo). So commit as you go!

### Step 4: Make sure everything is formatted properly

After you've added and committed all of your changes, it's time to verify that they can be rendered. The program that does this is `anvi-script-gen-help-pages`.

Go to your terminal, load up the `anvio-dev` conda environment, and run this program. Use the `-o` flag to produce the rendered output in a particular directory (which you can delete afterwards).

```
anvi-script-gen-help-pages -o TEST_OUTPUT/
```

If the program finishes without any errors, then you can move on to the next step. Otherwise, you probably have some formatting issues, so you'll have to go back to Step 2. Repeat steps 2-4 as necessary until you don't get any errors from this program.

### Step 5: Run a local copy of the website

Now you need to make sure that you like how the documentation looks like in webpage form.

In your terminal, navigate to the anvio.org repository, and **(this is very important)** make sure it is up-to-date.
```
cd anvio.org/
git pull
```
If you don't update it, this can cause headaches later when you start trying to add your changes (long story short, you will get errors requiring you to `git restore` a lot of files before you can move forward). Run `git status` just to make extra sure that everything is clean.

Now you can generate the help pages again, but this time give the script a very specific output directory:

```
anvi-script-gen-help-pages -o help/main
```

**This is the only help directory you should update**. Please don't make changes to the documentation for the former stable releases of anvi'o. If you accidentally do that, then `git restore` everything.

After the output is finished generating, you can run `git status` to see what webpages changed. It is normal to see changes to programs or artifacts that you did not update. This happens when people push changes to the documentation in the codebase but do _not_ add those changes to the website, often because they are still working on things. You can ignore all those other files :)

Finally, run a local copy of the website:

```
bundle exec jekyll serve --incremental
```

You can open it in your browser, navigate to the help pages that you updated, and read through them to make sure everything is organized/formatted/written the way you want it to be. It's also a good idea to check that hyperlinks (if you added any) are working at this step.

If it looks good, move on. But if you still need to change things, start over from Step 2. You can skip Step 4 and re-generate the help pages directly in the anvio.org repository, if you want. The nice thing about the `--incremental` flag is that once you re-run `anvi-script-gen-help-pages` to update the website files, those changes will automatically cause the local website to be updated, so as long as your `jekyll` command is still running, all you need to do is refresh the page.


### Step 6: Publish your PR

If everything formats properly and you like how your changes look on the locally-rendered website, you are ready to make your pull request! First, `git push` your changes. Then, go to the [anvi'o repository on Github](https://github.com/merenlab/anvio) and open a PR from your branch into the development branch. Write up a description of your updates, publish it, and then wait for your changes to be merged.

## Updating anvio.org

Once your changes are merged to the anvi'o codebase, you still need to update the website (not your local copy, but the online version that everyone else is reading).

### Step 7: Updating your local anvio.org repository

While you were waiting for your PR to be merged, other updates might have been made to the website. To avoid any headaches with adding your changes, the best practice is to start from a clean, up-to-date anvio.org repository.

Navigate to the repository, check for any local changes (that may be been produced during Step 5 above) using `git status`, and get rid of them (as necessary) using `git restore`. Then run `git pull` to make sure everything is up-to-date, and `git status` again to make sure that everything is clean.

### Step 8: Make a new branch

```
git checkout -b update-docs
```

This step is optional if you have write permission to the anvio.org repository, especially since your documentation updates should have already been reviewed in your PR from earlier. If this is the case for you, feel free to commit changes to `main` directly.

But if this is not your situation, you will unfortunately need to make a separate PR for your updates to anvio.org. We thank you for your patience and help!

### Step 9: Re-generate help pages

Now that everything is clean, you can generate the help pages again by running:

```
anvi-script-gen-help-pages -o help/main
```

Running this again (rather than using existing outputs from Step 5) also makes sure that any additions to your PR before it was merged are reflected in the website files.

#### A special case: adding programs or artifacts

If your documentation updates includes new programs and/or artifacts, then you have an additional step to run. You need to make sure these are added in the anvi'o network by running the following:

```
anvi-script-gen-programs-network -o network/network.json
```

Make sure you commit the resulting output in the next step. :)

### Step 10: Commit your changes

Run `git status` to see which website files were updated. Again, it is normal to see changes to files that you did not update, because not all codebase documentation changes get pushed to the website repository immediately.

Pick out the files for programs/artifacts that you changed, and use `git add` to include them in your upcoming commit. Make sure that you've also included any images, if you added some. Then run `git commit` with a nice message to cement your changes.

#### A special case file: help/main/index.md

The file `help/main/index.md` is the starting point for all the documentation. It contains lists of all available programs and artifacts.

Whenever you change the documentation webpages, it is a good idea to also set the timestamp for when the help pages were last updated. This will timestamp will automatically be changed at the top of the file `help/main/index.md`. You can run the following to check what else has been updated in that file:

```
git diff help/main/index.md
```

You should see something similar to the following:

```
--- a/help/main/index.md
+++ b/help/main/index.md
@@ -17,7 +17,7 @@ If you need an introduction to the terminology used in 'omics research or in anv
 <a href="/network/" target="_blank"><img src="/images/anvio-network.png" width="100%" /></a>

 {:.notice}
-The help contents were last updated on **29 Aug 22 10:10:28** for anvi'o version **7.1-dev (hope)**.
+The help contents were last updated on **01 Sep 22 13:00:13** for anvi'o version **7.1-dev (hope)**.

```

You can commit this section of the file.

Including any other changes to this file will depend on what you have changed. You will need to look through them carefully and commit only those that belong to you.

For example, you may have added a new artifact. Then you should commit the updated entry for this new artifact in the artifacts list of this file.

Just be careful, because sometimes other people will add artifacts or programs, but not push those changes to the website. You don't want to accidentally add an entry in the list for those items when their help pages are not yet included in the `main` branch. (If you do, it is not a huge deal - links in the website will be broken, but a 404 error never killed nobody :))

### Step 11: Push and PR!

Run `git status` to be aware of what changes you added, and then `git push`.

Once you make a PR for these changes, you are all done! The PR will be merged, and the online version of the website will be automatically updated shortly afterwards so that everyone else can see your documentation, too.

(If you didn't make your own branch, you will of course skip the PR step.)


## Getting credit for your changes

The nice thing about git is that your name will appear on all the commits and PRs that you made. But you can make sure that your contributions get more visibility by adding yourself as a contributer to the anvi'o website! See the [README file for the anvio.org repository](https://github.com/merenlab/anvio.org) for details on recording your achievements on anvio.org.

Thank you so much for improving anvi'o documentation. The entire community benefits from your expertise.
