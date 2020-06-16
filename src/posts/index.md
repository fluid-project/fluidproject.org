---
layout: layouts/post
title: News | fluid
permalink: newsindex.html
---
<div class="fluid-web">
<section class="row">
    <h2>News Archive</h2>
    <div class="fluid-web-news-index fluid-web-list">
        <ul id="reverseneed">
            {%- for post in collections.post -%}
            <li id="reverseneed">
                {{post.data.date}} - <a href="{{ '/' | url }}{{ post.data.permalink }}"> {{post.data.title}}</a>
            </li> 
            {% endfor -%} 
        </ul>
    </div>
</section>
</div>
