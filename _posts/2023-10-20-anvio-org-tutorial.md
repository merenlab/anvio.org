---
layout: blog
authors: [ivagljiva]
title: "How to add a post to anvio.org"
excerpt: "You want to write a blog post or tutorial? We got you, fam."
date: 2023-10-20
tags: [contributors, technical]
comments: true
permalink: /docs/anvio-org-tutorial/
---

Anyone who is using anvi'o or has something to share with the anvi'o 'omics community should feel free to add their content to anvio.org. However, the process for doing that can be a bit confusing for newcomers. This tutorial will teach you how to contribute to this website, whether you want to write a blog post, a tutorial, or a technical write-up. It will use this very post that you are reading as an example to show you how. :)

{:.notice}
The following are the steps to follow for someone who has the technical skills to send in a PR for new web material. But we don't want the anvi'o community to suffer from not hearing your voice if you are someone who does not have the technical background to follow this tutorial. In that case, please get in touch with {% include person/display_mini_single.html github="meren" %}, who can help you with the technical part and turn your content into the necessary format.

{:.notice}
If you already wrote a blog post on a different website and you want to add a link to it on anvio.org, you don't have to go through this whole tutorial. The only section that is really relevant is [the one about adding your post to the resources list](#step-5-include-the-post-in-a-yaml-file-under-_dataresources). You should follow that section to include the external URL to your existing post in the appropriate file within the repository, then send us a pull request.

## Step 1) Get the anvio.org GitHub repository on your computer

To add your content, you'll need to have a local copy of the materials for this website on your computer. The website is hosted on Github in [this repository](https://github.com/merenlab/anvio.org). You should download this repository.

Once you have it, please follow the installation commands for Ruby that are described [here](https://anvio.org/docs/anvio-docs-tutorial/#a-bit-of-setup). Once you are able to run the following command to run a local copy of the website, 

```bash
# run this command while inside the anvio.org directory
bundle exec jekyll serve --incremental
```

you should be good to go and can come back to this page.

## Step 2) Make a branch for adding your post

It is best practice to write your post within a branch of the anvio.org repository and then submit a pull request (PR) to add it once it is all done. Make sure to get the latest changes to the website by running `git pull` first. Here is an example set of commands to start a branch for your post:

```bash
cd anvio.org
git pull
git checkout -b anvio-org-tutorial
```

Now you can start adding your contributions. From this point forward, we'll assume that your working directory in the terminal is the `anvio.org/` directory and that you are on the branch you created.

## Step 3) Some helpful resources

You may want to check out the following webpages if you aren't familiar with writing in Markdown or how Jekyll websites work:

- [Markdown Guide](https://www.markdownguide.org/)
- [Jekyll Documentation](https://jekyllrb.com/docs/) (helpful for understanding the website structure and commands for building it)

Our website also includes several fancy syntax features that you can use to do things like making 'additional info' boxes, linking to the anvi'o documentation, and adding quotes or images. We highly recommend that you always keep our 'Web Tips' page open in a tab of your browser so that you can copy-paste the syntax for adding these features:

- [Tips for web developers](https://anvio.org/web-tips/)

## Step 4) Create the post file

We store all of our post documents within the anvio repository in the `_posts` directory. You can see examples by running `ls _posts/`. Each post has to be named according to its date of publication, following the [Jekyll post format](https://jekyllrb.com/docs/posts/). If you're already done writing the post elsewhere and you want it to appear on the website immediately, you can use the current date. But if you still need some time to make changes, you can choose a future date.

For example, when I was writing this tutorial, it was October 18, 2023 but I decided I would need a few days to finish it, so I created the file with the intention to publish the post on October 20:

```bash
touch _posts/2023-10-20-anvio-org-tutorial.md
```

What comes after the date is up to you, but we recommend giving a short yet descriptive summary of what your post is about. Please don't use the same filename as me so that you don't overwrite this tutorial :)

After you edit that file to add content, you should commit your changes to your branch. For example:

```bash 
git add _posts/2023-10-20-anvio-org-tutorial.md
git commit -m 'add my post to anvio.org'
```

## Step 5) Include the post in the YAML file for its resource type

All of the posts on the website are organized into different resource categories, each described by a YAML file in the directory `_data/resources`. For instance, here are the current files in that directory:

```
$ ls _data/resources/
blogs.yaml     docs.yaml      technical.yaml tutorials.yaml
```

You need to add an entry for your post into one of these YAML files. Hopefully it is pretty self-explanatory -- tutorials should be added to `tutorials.yaml`, technical write-ups should go in `tutorials.yaml` and blog posts should go in `blogs.yaml`. If you aren't sure where yours should go, check out [https://anvio.org/learn/](https://anvio.org/learn/) to see the posts in each category.

This tutorial falls under "Developer and contributor resources", so I added it to `docs.yaml`. Here is the example entry in that file for this post:

```
- title: "How to add a post to anvio.org"
  type: tutorial
  url: /docs/anvio-org-tutorial/
  authors: [ivagljiva]
  summary: "You want to write a blog post or tutorial? We got you, fam."
  tags: [contributors, technical]
```

You should fill out these fields to the best of your ability, following the other examples within the YAML file that you are editing. Here is a bit of help for each field:

- `title`: the title of your post, in quotation marks. Self-explanatory
- `type`: likely either blog post or tutorial (not in quotes)
- `url`: the location of the post on the anvio.org website, which will be appended to the base url `https://anvio.org/`. Each resource category should be located in its own subfolder; i.e., blog posts will have a URL starting with `/blog/`, tutorial URLs will start with `/tutorial/`, etc. After this subfolder, you should add a short description of the post content (we usually just use the same one that is in the post's file name). Please note that you can also add links to external websites here; for instance, if you already posted on your own website and want to cross-post it on anvio.org (but in that case, you don't need to make a file in the anvio.org repository)
- `authors`: this should include the GitHub usernames of you and anyone else who helped write the post (comma-separated list within the square brackets)
- `summary`: a short 'teaser' sentence or two that people will see on the insert for the post at [https://anvio.org/learn/](https://anvio.org/learn/). Should be in quotes
- `tags`: a list of key words describing your posts content, as a comma-separated list within the square brackets

## Step 6) Add front matter to the post

The markdown file of every post has to start with information describing the post, which is known as 'front matter'. Here is the example for the current tutorial:

```
---
layout: blog
authors: [ivagljiva]
title: How to add a post to anvio.org
excerpt: "You want to write a blog post or tutorial? We got you, fam."
date: 2023-10-20
tags: [contributors, technical]
comments: true
permalink: /docs/anvio-org-tutorial/
---
```

The front matter must go in between the `---` lines. For our website, this stuff is usually pretty easy to fill in by copying and pasting from the entry you just added to the resources YAML file, with a few additions/exceptions:

- `layout`: just write blog here. this field indicates what layout will be used when the page is rendered, but we really only have one layout option on our website, and that is the blog layout
- `excerpt`: equivalent to the `summary` field from the YAML file
- `date`: the date you want the post to be published, i.e., from the file name of the post document
- `comments`: true or false depending on whether you want people to be allowed to post comments at the bottom of the post's webpage
- `permalink`: equivalent to the `url` field from the YAML file

{:.notice}
Not every post needs a `permalink` field. Blog posts (those described in `_data/resources/blogs.yaml`) do not need this field, because the default URL for posts is the global permalink parameter described in `_config.yml`, which happens to be `/blog/`. So if you are writing a blog post, feel free to skip this field. But if you are contributing any other kind of resource, you will need to include a `permalink` that is the same as the `url` you specified in the YAML file previously.

## Step 7) Write your post (and check your changes)

Now the easy part (lol). Write your post inside the file you created in Step 4, commit your changes, and don't forget to `git push` once you are all done.

### Rendering your post locally

While you are writing the post, you should regularly check how the webpage will be rendered by running a local copy of the website with this command:

```bash
bundle exec jekyll serve --incremental --trace
```

The `--incremental` flag ensures that the page will be re-rendered every time Jekyll detects a change in the file, so you can edit and see those changes immediately just by refreshing the webpage. The `--trace` flag makes sure you will see error tracebacks.

If you post is dated in the future, you will need to tell Jekyll to include it in the local site by including the `--future` flag (since future posts are not rendered by default):

```bash
bundle exec jekyll serve --incremental --trace --future
```

The Jekyll output should tell you the local URL of anvio.org. For instance, on my machine, it was `http://127.0.0.1:4000`. You open that in a web browser and navigate through the website yourself to find your post, or you can append the `url` you specified earlier (in the YAML file) to the end of that URL and copy-paste that to your web browser to get to the post's webpage directly. For instance, while writing this post, I viewed it at the local URL [http://127.0.0.1:4000/docs/anvio-org-tutorial/](http://127.0.0.1:4000/docs/anvio-org-tutorial/).

In addition to checking that your post renders nicely, you should also make sure you can see it featured under the appropriate section on the `Learn` page. If you don't see it there, or the link to your post is broken, please make sure that the URLs in the YAML file and the front matter match. If they do and you still don't see it; you should try deleting the existing local copy of the website and re-generating it from scratch, since sometimes Jekyll doesn't pick up on changes to our resource files.

```bash
rm -rf _site/; bundle exec jekyll serve --incremental --trace --future
```

{:.notice}
Every file under the `_posts` directory, even if it is not a blog post, should appear on our 'Community Blog' page (locally rendered at [http://127.0.0.1:4000/blog/](http://127.0.0.1:4000/blog/)). In contrast, the 'Learn' page (locally rendered at [http://127.0.0.1:4000/learn/](http://127.0.0.1:4000/learn/)) can include links to external URLs and organizes the posts by section according to which YAML file they were described in. 

### Adding images

If your post includes images, you should add those files under the `images/` folder of the anvio.org repository. Our convention is to create a folder for images specific to that post within that directory, as in `images/anvio-org-tutorial/`, and add all associated image files there. Then, see [this web tip](https://anvio.org/web-tips/#images) for instructions on how to include the image(s) within the markdown file for your post. Don't forget to commit your images to the repository, and ensure that they render properly.

## Step 8) Make a PR

Once you are done with your post, you should create a Pull Request (PR) on GitHub. After we review the PR and merge it into the main branch of the anvio.org repository, your 