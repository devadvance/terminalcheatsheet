{{site.data.translations.guides_available_desc[page.lang]}}

{% for guide in site.data.guides.guide-index %}

* [{{guide.title[page.lang]}}]({{guide.link[page.lang]}})

{% endfor %}

{{site.data.translations.more_coming_soon[page.lang]}}