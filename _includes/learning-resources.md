Resources below cover a wide range of topics from most basic concepts to most advanced ones to help and inspire any scientist who studies microbial life through 'omics.

{:.notice}
Are you aware of a resource that should be here? Please let us know on {% include _slack_invitation_button.html %} or send us a pull request on GitHub by editing [this](https://github.com/merenlab/anvio.org/blob/main/_data/resources.yaml) file.

### Tutorials

Tutorials are often the best starting points as they cover basic concepts and often offer hands-on experience.

{% for resource in site.data.resources %}
{% if resource.type == "tutorial"%}
<p markdown="1">
<a href="{{ resource.url }}" target="_blank">{{ resource.title }}</a> by **{{ resource.authors }}**.<br />
*{{ resource.summary }}* <br />
{% for tag in resource.tags %}<code class="tags" id="{{ tag | replace: " ", "_" }}">{{ tag }}</code>{% endfor %}
</p>
{% endif %}
{% endfor %}

### Articles, workflows, opinions

These resources often cover key insights into specific topics and can be useful to more advanced users and 'omics enthusiasts in general.

{% for resource in site.data.resources %}
{% if resource.type != "tutorial" %}
<p markdown="1">
<a href="{{ resource.url }}" target="_blank">{{ resource.title }}</a>, a {{ resource.type }} by **{{ resource.authors }}**.<br />
*{{ resource.summary }}* <br />
{% for tag in resource.tags %}<code class="tags" id="{{ tag | replace: " ", "_" }}">{{ tag }}</code>{% endfor %}
</p>
{% endif %}
{% endfor %}
