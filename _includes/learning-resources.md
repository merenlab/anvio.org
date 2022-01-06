Resources below cover a wide range of topics from most basic concepts to most advanced ones to help and inspire any scientist who studies microbial life through 'omics.

{:.notice}
Are you aware of a resource that should be here? Please let us know on {% include _slack_invitation_button.html %} or send us a pull request on GitHub by editing [this](https://github.com/merenlab/anvio.org/blob/main/_data/resources.yaml) file.

### Tutorials

Tutorials are often the best starting points as they cover basic concepts and often offer hands-on experience.

{% for resource in site.data.resources %}
{% if resource.type == "tutorial"%}
{% include learning-resource.html %}
{% endif %}
{% endfor %}

### Articles, workflows, opinions

These resources often cover key insights into specific topics and can be useful to more advanced users and 'omics enthusiasts in general.

{% for resource in site.data.resources %}
{% if resource.type != "tutorial" %}
{% include learning-resource.html %}
{% endif %}
{% endfor %}
