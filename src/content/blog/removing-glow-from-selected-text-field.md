---
title: 'Removing Glow from Selected Text Field'
description: 'In WebKit, whenever a text field or a search field is selected (focused), a blue glow is drawn around its perimeter. In some cases, it may be desirable to…'
pubDate: 'Sep 03 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in September 2008.</em></p>
<p>In WebKit, whenever a text field or a search field is selected (focused), a blue glow is drawn around its perimeter. In some cases, it may be desirable to remove this glow. This is actually quite simple: set the <code>outline</code> CSS property to <code>none</code>.</p>


```css
outline: none;
```


<p>The above code results in:</p>
<input type="text" />
<p>Notice that when you select the text field, no blue glow appears around its perimeter (you'll have to be using a WebKit-based browser to see it correctly).</p>
<p>Of course, there are very few cases when you would want to do this (or to be more precise, <em>should</em> do this), but its always nice to know its possible...</p>
