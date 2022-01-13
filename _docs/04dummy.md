---
title: DUMMY IS HERE
name: YEEKS!
position: Developer
---

{% for docXXL in site.docs %}
  <h2>
    <a href="{{ docXXL.url }}">
      {{ docXXL.name }} - {{ docXXL.position }}
    </a>
  </h2>
  <hr/>
  collection: {{ docXXL.collection}}
  <br/>path: {{ docXXL.path}}
  <br/>rel_path: {{ docXXL.relative_path}}
  <br/>url: {{ docXXL.url}}
  <br/>date: {{ docXXL.date}}
  <div>{{ docXXL.content | markdownify }}</div>
{% endfor %}