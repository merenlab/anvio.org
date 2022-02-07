---
layout: blog
authors: [mklein]
title: "Working with minified states in anvi'o interactive"
excerpt: "A primer"
date: 2022-02-07
modified: 2022-02-07
tags: [interactive]
comments: true
image:
  feature: /images/giant-viruses/header.png
---

## Let's talk about state

Imagine for a moment that you're playing a particularly challenging level of a particularly difficult video game when you finally arrive at the threshold of the final boss. Almost robotically, you save your game. Of course you save your game! You don't know what's going to be on the other side of that door, but you do know that you want to be able to get back __here__ (wherever here is) just in case things don't pan out how you're hoping. Or maybe, after a fruitless night of trying to beat the boss, you send your save file to a friend so that __they__ can do it for you. Regardless, you sleep easier that night knowing you can always return to that last checkpoint. If only life had such a feature! Anvi'o developers are hard at work making that dream a reality, but in the meantime, _state_ in anvi'o is a fully realized artifact! Utopia awaits!

## Working with state in anvi'o

anvi'o documentation provides some key insights into how [state](http://anvio.org/help/main/artifacts/state/) is handled within the context of an [interactive](http://anvio.org/help/main/artifacts/interactive/) session. State data can be stored in your __pan__ or __profile__ db files, and can be [imported](https://anvio.org/help/main/programs/anvi-import-state/), [exported](https://anvio.org/help/main/programs/anvi-export-state/), or [deleted](https://anvio.org/help/main/programs/anvi-delete-state/) via the command line using the respective anvi programs. Let's take a look at this in action. 

## Manipulating state

For the following examples we'll be using the infant gut dataset available [here](https://merenlab.org/tutorials/infant-gut/). Once unpacked, we can `cd` into the directory and run `anvi-interactive` to boot up a new interactive session. Load the session into your browser and press `d` to draw our circlephylogram. You should be greeted with somethink like this

{% include IMAGE path="/images/working-with-state/infantgut.png" caption="Our infant gut circlephylogram" %}

Wonderful! Now let's say we've worked for a while within the interactive interface. We've binned some areas of interest and changed some layout settings, and now we'd like to save our changes to state. We bring up the __settings__ pane and click the 'save state' button. We're so thrilled we name our new state __my_perfect_figure__ and hit save. What just happened under the hood? Anvi'o serialized all of your session's display settings and saved them to the _states_ table in your pan/profile db. Let's see what that looks like!

## Examining your state data

Back in our terminal, we can run `anvi-export-state -p PROFILE.db -o my_perfect_figure.json -s my_perfect_figure` to export our state as a json file. If we can't quite remember what we named our state we can always run `anvi-export-state -p PROFILE.db --list-states` to see what's available. And if we can't quite remember how to do that, we can run `anvi-export-state -h` to get some guidance. 

Upon inspection, we can see that our state.json file is a giant object containing key-value for all our relevant interactive interface settings. 

```
{
 "version": "3",
 "tree-type": "circlephylogram",
 "order-by": "tnf-cov:euclidean:ward",
 "current-view": "mean_coverage",
 "angle-min": "0",
 "angle-max": "270",
 "tree-radius": "3355",
 "tree-height": "0",
 "tree-width": "0",
 "layer-margin": "15",
 "outer-ring-height": "60",
 "outer-ring-margin": "30",
 "edge-normalization": false,
 "custom-layer-margin": false,
 "show-grid-for-bins": false,
 "show-shade-for-bins": true,
 "shade-fill-opacity": "0.1",
 "invert-shade-for-bins": false,
 "inverse-fill-opacity": "0.1",
 "inverse-color": "#000",
 "grid-color": "#FFFFFF",
 "grid-width": "1",
 "samples-order": "custom",
 "max-font-size": "60",
 "optimize-speed": true,
 "show-bin-labels": true,
 "begins-from-branch": false,

.....and on..
}  
```
That's a lot of information, and it keeps on going! Further down in the file we can see some deeply nested datapoints
```
  },
 "views": {
     "mean_coverage": {
         "length": {
             "normalization": "none",
             "min": {
                 "value": "0",
                 "disabled": false
             },
             "max": {
                 "value": "39977",
                 "disabled": false
             }
         },
         "gc_content": {
             "normalization": "none",
             "min": {
                 "value": "0",
                 "disabled": false
             },
             "max": {
                 "value": "0.68495499357051",
                 "disabled": false
             }
         },
         "DAY_15A": {
             "normalization": "log",
             "min": {
                 "value": "0",
                 "disabled": false
             },
             "max": {
                 "value": "2.88229548039248",
                 "disabled": false
             }
         },
         "DAY_15B": {
             "normalization": "log",
             "min": {
                 "value": "0",
                 "disabled": false
             },
 ..... and on....
 }
``` 
Don't worry too much about understanding what each of these values do at the moment. Most of these values are sensible defaults that anvi'o generates automatically for you. 
