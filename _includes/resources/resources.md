{% if page.tag %}
{% capture info %}resources/tags-intro/{{ page.tag }}.md{% endcapture %}
{% include {{ info }} %}

---

Find below each resource tagged with {% include resources/tag.html name=page.tag %}. You can also [go back](/learn) to see all resources.

---
{% else %}

Resources below cover a wide range of topics from most basic concepts to most advanced ones to help and inspire any scientist who studies microbial life through 'omics.

You can click on individual tags visit topic-specific pages, such as {% include resources/tag.html name='metagenomics' %}, to find learning material and exercises on metagenomic read recruitment, genome-resolved metagenomics, genome binning, and refinement, or {% include resources/tag.html name='pangenomics' %} to gain theoretical insights into pangenomics and find tutorials and exercises on how to generate pangenomes and studying them, or {% include resources/tag.html name='hands-on' %} to find all resources that will get your hands dirty with data.

{:.notice}
Are you aware of a resource somewhere that should be listed here? Please let us know on {% include _discord_invitation_button.html %} or send us a pull request on GitHub by editing the appropriate YAML file [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/).
{% endif %}

### Tutorials and exercises

Tutorials are the best way to start learning anvi'o. They typically use mock or simple datasets to describe basic concepts and how to accomplish common tasks in anvi'o often with hands-on experience (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/tutorials.yaml)).

{% include resources/content.html content=site.data.resources.tutorials %}

### Workshops

Previous and upcoming workshops for a hands-on experience of anvi'o.

{% include resources/content.html content=site.data.resources.workshops %}

### Technical write-ups

Articles listed this section offer solutions or discussions regarding matters that are typically more technical than scientific (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/technical.yaml)).

{% include resources/content.html content=site.data.resources.technical %}

### Articles, workflows, opinions

These resources often cover key insights into specific topics and can be useful to more advanced users and 'omics enthusiasts in general (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/blogs.yaml)).

{% include resources/content.html content=site.data.resources.blogs %}

### Developer and contributor resources

Here you will find technical documentation to help you learn how to contribute to anvi'o, as a developer or otherwise (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/docs.yaml)).

{% include resources/content.html content=site.data.resources.docs %}
