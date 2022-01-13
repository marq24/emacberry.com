---
title: About
layout: page
permalink: "/about/"
---
Emacberry.com was started 2009 in order to provide my BlackBerry&copy; Java applications.
In the meantime BlackBerry smartphones running the legacy java OS are history. 
{% for doc in site.docs %}
  <h2>
    <a href="{{ doc.url }}">
      {{ doc.name }} - {{ doc.position }}
    </a>
  </h2>
  <hr/>
  collection: {{ doc.collection}}
  <br/>path: {{ doc.path}}
  <br/>rel_path: {{ doc.relative_path}}
  <br/>url: {{ doc.url}}
  <br/>date: {{ doc.date}}
  <p>{{ doc.content | markdownify }}</p>
{% endfor %}

