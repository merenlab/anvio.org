Resources below cover a wide range of topics from most basic concepts to most advanced ones to help and inspire any scientist who studies microbial life through 'omics.

{:.notice}
Are you aware of a resource that should be here? Please let us know on {% include _slack_invitation_button.html %} or send us a pull request on GitHub by editing [this](https://github.com/merenlab/anvio.org/blob/main/_data/resources.yaml) file.

### Tutorials

Tutorials are often the best starting points as they cover basic concepts and often offer hands-on experience.

{% for resource in site.data.resources %}
{% if resource.type == "tutorial"%}

{% assign author_links = "" %}
{% for person_github in resource.authors%}
{% for person in site.data.people %}
{% if person.github == person_github %}
{% capture author_link %}
<img class="page-person-photo-img-mini" title="{{ person.name }}" src="/images/avatars/{{ person.avatar }}" > <a href="#{{ person.github }}">{{ person.name }} </a>
{% endcapture %}
{{ author_links | append: author_link }}
{% endif %}
{% endfor %}
{% endfor %}

<p>{{author_links}}</p>

<p markdown="1">
    <a href="{{ resource.url }}" target="_blank">**{{ resource.title }}**</a> by **{{ resource.authors }}**.<br />
    *{{ resource.summary }}* <br />
    {% for tag in resource.tags %}<code class="tags" id="{{ tag | replace: " ", "_" }}">{{ tag }}</code>{% endfor %}
</p>
{% endif %}
{% endfor %}

### Articles, workflows, opinions

These resources often cover key insights into specific topics and can be useful to more advanced users and 'omics enthusiasts in general.

{% for resource in site.data.resources %}
{% if resource.type != "tutorial" %}

{% assign author_links = "" %}
{% for person_github in resource.authors%}
{% for person in site.data.people %}
{% if person.github == person_github %}
{% capture author_link %}
<img class="page-person-photo-img-mini" title="{{ person.name }}" src="/images/avatars/{{ person.avatar }}" > <a href="#{{ person.github }}">{{ person.name }} </a>
{% endcapture %}
{{ author_links | append: author_link }}
{% endif %}
{% endfor %}
{% endfor %}

<p>{{author_links}}</p>


<p markdown="1">
<a href="{{ resource.url }}" target="_blank">**{{ resource.title }}**</a>, a {{ resource.type }} by **{{ resource.authors }}**.<br />
*{{ resource.summary }}* <br />
{% for tag in resource.tags %}<code class="tags" id="{{ tag | replace: " ", "_" }}">{{ tag }}</code>{% endfor %}
</p>
{% endif %}
{% endfor %}
