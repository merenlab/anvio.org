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

Before we get start making changes, let's go ahead and save our current (untouched) state as default. We bring up the __settings__ panel and click the 'save state' button. Wonderful! Now let's say we've worked for a while within the interactive interface. We've binned some areas of interest and changed some layout settings, and now we'd like to save our changes to state. We're so thrilled we name our new state __my_perfect_figure__ and hit save. What just happened under the hood? Anvi'o serialized all of your session's display settings and saved them to the _states_ table in your pan/profile db. Let's see what that looks like!

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
Don't worry too much about understanding what each of these values do at the moment. Most of these values are sensible defaults that anvi'o generates automatically for you. For a bit of extra fun, we can test this by exporting our default (state same as above) and comparing the two. If you have vim installed, you can run `vim -d default.json my_perfect_state.json` to see the 'diff'

{% include IMAGE path="/images/working-with-state/state-diff.png" caption="differences in our updated state file vs default" %}

We can of course open our state.json file and change any value(s) we want. To have those changes reflected in our interactive session, we just need to run `anvi-import state -p PROFILE.db -s my_updated_perfect_state.json -n 'perfect_v2'` and then load that state via the `load state` button in the settings panel. We're now feeling confident saving, changing, and loading states. That's great news!

## Working with minified states

One of the great things about anvi'o's `anvi-import-state` and `anvi-export-state` programs is that we can save some time if we know from the onset that we're going to want to change some aspects of the default state that anvi'o generates. Maybe we know, before even booting our interactive session, that we're going to want to see a _phylogram_ instead of a _circlephylogram_. Or maybe we want our 'GC Content' layer to be ordered last in our 'layer-orders' settings. Whatever the case may be, we know that we don't want to have to load up an interactive interface with the default state, make those changes, and then save them to a new state. That's exhausting! We also know that we don't want to have to provide values for 50+ datapoints in our custom state.json file, especially if the defaults are more than good enough for 90% of the settings. Luckily enough, we don't have to!

Anvi'o allows us to utilize our own state.json files with as many or as few datapoints as we want to provide. Under the hood, anvi'o will supplement our provided values with all of the defaults necessary for the interactive interface to function. Let's test it out. 

We can start by creating a new state file
```
touch minified-state.json
```

Opening that in the text editor of your choice, we can start adding in our custom values. If you're not sure about nested objects or formatting, you can always pop open a `default.json` file and compare. Let's add some data
```
{
"version" : "3",
"tree-type" : "phylogram",
"state-name" "my itty bitty state"
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
          }
      },
      "gc_content": {
          "min": {
              "value": "0",
          },
          "max": {
              "value": "0.68495499357051",
          }
      },
      "DAY_15A": {
          "normalization": "log",
          "min": {
              "disabled": false
          },
          "max": {
              "value": "2.88229548039248",
              "disabled": false
          }
      }
  }
}
```
Not bad! Astute follow-alongers might notice that the "views" data we provided above is incomplete when compared against the generated default state. Well, that's just fine! We can provide only data we're interested in and anvi'o will figure out the rest, even in deeply nested objects. Now that we have the lay of the land, let's take a look at a practical usecase for minified states in anvi'o!

## Mini states in action - Matt's Ecophylo Workflow

// Matt's gonna give a high level overview of how he incorporates mini states into his workflow. Thanks matt <3

## Wrapping up

