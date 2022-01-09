Resources below cover a wide range of topics from most basic concepts to most advanced ones to help and inspire any scientist who studies microbial life through 'omics (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/tutorials.yaml) or [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/blogs.yaml)).

{:.notice}
Are you aware of a resource that should be here? Please let us know on {% include _slack_invitation_button.html %} or send us a pull request on GitHub by editing  file.

### Tutorials and exercises

Tutorials are the best way to start learning anvi'o. They typically use mock or simple datasets to describe basic concepts and how to accomplish common tasks in anvi'o often with hands-on experience.

{% for resource in site.data.resources.tutorials %}
{% include resources/template.html %}
{% endfor %}

### Technical write-ups

Articles listed this section offer solutions or discussions regarding matters that are typically more technical than scientific (add more [here](https://github.com/merenlab/anvio.org/blob/main/_data/resources/technical.yaml)).

{% for resource in site.data.resources.technical %}
{% include resources/template.html %}
{% endfor %}

### Articles, workflows, opinions

These resources often cover key insights into specific topics and can be useful to more advanced users and 'omics enthusiasts in general.

{% for resource in site.data.resources.blogs %}
{% include resources/template.html %}
{% endfor %}
