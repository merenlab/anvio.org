---
layout: blog
authors: [meren]
title: "Future of anvi'o online communication: Part I"
excerpt: "Help the anvi'o community decide which platform to use for communication"
date: 2022-08-09
tags: [community]
comments: true
image:
    feature: /images/slack-vs-discord.png
    display: false
---

{:.warning}
There is a [Part II](/blog/slack-vs-discord-decision/) of this blog post in which we choose Discord as our future communication platform based on the community feedback. This post will stay here for posterity, but the survey in it is no longer available to fill.

Hi everyone, and thank you for your time in advance!

My purpose here is to reach out to the [anvi'o](https://anvio.org) community to collect their opinions on **how we should solve our online communication needs going forward**. This is a difficult topic, and very likely this blog post will be asking of you to invest much more time into helping us resolve this than the amount of time you have in your life for anvi'o really. But thank you very much for being here anyway.

So far anvi'o has been using the free version of Slack as a platform for online communication. As of today, [the anvi'o Slack](https://join.slack.com/t/anvio/shared_invite/zt-ov46uj90-9p2woLJFcVCfv7cdhANXSA) has **over 1,350 members who exchanged more than 25,000 messages**. Many of the [anvi'o contributors and developers](https://anvio.org/people/) are present on this platform voluntarily, and thanks to their time and other members of the community who chimed it, Slack has become a great way for us to,

* Help anvi'o end-users with their technical problems,
* Help advanced users to familiarize themselves with anvi'o code,
* Discuss blueprints and best-practices for well-established 'omics analyses,
* Or simply offer input to those who had 'omics data and were looking for a starting point.

Having a platform for rapid and real-time communication was extremely helpful to turn anvi'o from a few people's show to a community effort, and I can't imagine a future without this option.

But some recent changes to Slack forces us to reconsider how we will continue benefiting from the luxury of real-time communication. Our experience on Slack has been great, but what made it great was the people in it, and not necessarily Slack itself, so I'm not too afraid to go into this discussion that may convince us to move on from it.

## Why not continue with Slack?

We have already had significant problems with the free version of anvi'o Slack, such as not being able to access the first 15,000 Slack messages. Many of the questions we answered at some point in the past would come back again simply because earlier answers wouldn't be accessible to the new users.

It was going to be a ridiculous financial burden for us to switch to the paid version of Slack due to our limited resources for this. Lack of resources is the fuel of creativity. To overcome this challenge, we implemented [the anvi'o help system](https://anvio.org/help/main/), where the important usage information about anvi'o programs and artifacts stored in GitHub is rendered and served on the web. So the programmers who live in the terminal world would never have to open their browsers while documenting the programs and artifacts they are working on. This was a mini-revolution in our ability to switch to a user-need-driven expansion of the documentation of our programs, which often manifested following this example scenario:

1. An anvi'o user asks a question on anvi'o Slack. E.g., they were wondering how could they get their gene clusters from an anvi'o pangenome database using their own Python script, rather than using any anvi'o program.
2. We change [the help docs](https://github.com/merenlab/anvio/blob/master/anvio/docs/artifacts/pan-db.md) in our GitHub repository for the anvi'o artifact {% include ARTIFACT name="pan-db" %} so the documentation now includes an answer the question.
3. And send the online help page for anvi'o {% include ARTIFACT name="pan-db" %} to the user on Slack, so they can continue writing their Python script like the boss they were.

This way everyone was happy, and the next person with the same question would not need the Slack history if they were to Google anvi'o pan databases to find the help page.

Yes, the relatively short message history of Slack was no longer a very big problem for us. But more recently, Slack reduced the utility of their free version *even further*. For instance, as of September 1st, Slack will only allow access to **the last 90 days of messages and uploads** in their free version. And switching to the 'pro' version of Slack is simply [not affordable](https://app.slack.com/plans/) for an open-source project with this many users.

## So, what are the alternatives?

Indeed. What are the alternatives?

Are we going to succumb ourselves to the grip of Slack, a greedy entity that holds the ability of a non-profit organization such as ourselves to communicate with its members hostage for profit, OR, are we going to succumb ourselves to *another* greedy entity that will do the same to us but with less restrictions at least for the time being? *Thanks for putting it like this, Meren, it was REALLY helpful*. Ah, you're welcome! :)

### Slack

OK. One alternative is that we can stay on Slack free plan regardless. Don't be selfish if this is what you would like. It is really not too bad as there are some obvious advantages to Slack, and some quick solutions to its limitations:

* Many people are used to Slack, they have the Slack application installed on their computers and already follow a bunch of Slack environments which makes it easier for them to keep an eye on anvi'o Slack, too.
* There is already some history, and earlier history can be downloaded as a JSON file (as I did [here](https://anvio.slack.com/archives/C8SFMGYF3/p1659028595017869?thread_ts=1658944707.193289&cid=C8SFMGYF3)), and anvi'o developers can implement a web page that 'renders' all the Slack history in a static but searchable form.

* **[Visit anvi'o Slack here](https://join.slack.com/t/anvio/shared_invite/zt-ov46uj90-9p2woLJFcVCfv7cdhANXSA)**

But I think it is a good time for us to consider other alternatives, too.

### Discord

[Discord](https://discord.com/) is one of the top alternatives that emerged from our recent online conversations. Discord introduces itself like this:

<blockquote markdown="1">
IMAGINE A PLACE ... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
<div class="blockquote-author">Discord</div>
</blockquote>

As far as I can see Discord has been heavily used by the gaming community, and misses nothing significant over Slack, with a lot of added benefits for a community like ours.

In fact, {% include person/display_mini_single.html github="Lamm-a" %} shared these two resources under [a relevant discussion](https://anvio.slack.com/archives/C8SFMGYF3/p1658944707193289) on anvi'o Slack that compare the two,

* [https://www.chanty.com/blog/discord-vs-slack/](https://www.chanty.com/blog/discord-vs-slack/)
* [https://zapier.com/blog/slack-vs-discord/](https://zapier.com/blog/slack-vs-discord/)

And [Chris Field](https://twitter.com/cjfields) mentioned that they tried both Slack and Discord as virtual platforms during a virtual conference in 2020, "*and Discord seemed to win*". Rob and I even started a Discord space for anvi'o if you would like to take a look:

* **[Try anvi'o Discord here](https://discord.gg/4jfmG54FJg)**

### Another platform?

Our knowledge of what is available is quite limited. But we know there are many alternatives to Slack. Some are less relevant to a community like us, but others are quite equivalent (such as [Microsoft Teams](https://teams.com/) or [Mattermost](https://mattermost.com/)). If you know something better than both of these options in your opinion, please let us know through the form below.

## What should I do now?

It would be extremely useful if you were to fill this form:

* **[Fill the form on the future of anvi'o online communication](https://forms.gle/qu7EbebVnM48CNPM9)**

## What will happen next?

Once there is enough input from the anvi'o community, I will write another blog post so we can discuss further before making a decision whether we stay with Slack or go somewhere else.

Thank you very much for your input and patience.
