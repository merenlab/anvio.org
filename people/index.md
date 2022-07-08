---
layout: page
title: "Our People"
excerpt: Those who are responsible for anvi'o.
notoc: true
---

A randomly ordered, ever-growing list of <b>{{ site.data.people | size }}</b> anvi'o developers and contributors.

---

<div class="anvio-people">
{% assign n = site.data.people | size %}
{% assign people = site.data.people | sample: n %}
{% for person in people %}
    {% include person/display_text.html with_bio="True" %}
{% endfor %}
</div>
