---
title: 'Introduction to Namespaces in XML'
description: 'Namespaces were introduced in order to avoid conflicts with names of XML elements and attributes. For example, say you have a “table” element (thanks to…'
pubDate: 'Aug 30 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in August 2008.</em></p>
<p>Namespaces were introduced in order to avoid conflicts with names of XML elements and attributes. For example, say you have a “table” element (thanks to W3Schools for this <a href="http://www.w3schools.com/XML/xml_namespaces.asp">example</a>). It could apply to either a piece of furniture or an HTML element used for displaying data. If, for some reason, these two pieces of code needed to be combined, there would be a conflict. To avoid these conflicts and to give these elements unique identifiers, we use namespaces.</p>
<p>Throughout this post, I shall use custom (namespaced) RSS elements/attributes from the <a href="http://sparkle.andymatuschak.org/">Sparkle</a> framework as examples.<br />
<h4>About Namespaces</h4><br />
A namespaced element looks like this:</p>


```html
<sparkle:releaseNotesURL></sparkle:releaseNotesURL>

// "sparkle" is the namespace and "releaseNotesURL" is the element name
```


<p>A namespaced attribute looks like this:</p>


```html
<enclosure sparkle:version="1.0" url="foo.zip" />

// "sparkle" is the namespace and "version" is the attribute name
```


<p>A URL must also be associated with the namespace. This is usually specified on the root element using the <code>xmlns</code> attribute:</p>


```html
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
 <!-- Declaring the "sparkle" namespace on the "rss" element -->
</rss>
```


<p>The <code>xmlns</code> URL doesn’t have to be a real URL, as it’s just an identifier for the namespace, but people often use it to reference a page describing/documenting the namespace.<br />
<h4>Parsing Namespaces</h4><br />
When parsing XML, you may have to parse a namespaced element or attribute.</p>
<p>At first, you might try to extract the <code>releaseNotesURL</code> element like this (where <code>response</code> is the response XML from an XMLHttpRequest):</p>


```js
response.getElementsByTagName("sparkle:releaseNotesURL")[0];
```


<p>However, this doesn’t work. You have to use <code>getElementsByTagNameNS</code>:</p>


```js
response.getElementsByTagNameNS("http://www.andymatuschak.org/xml-namespaces/sparkle", "releaseNotesURL")[0];
```


<p>Note here that <code>getElementsByTagNameNS</code> takes two parameters: the namespace URL and the actual element name.</p>
<p>The same applies to attributes. To extract the <code>version</code> attribute from an enclosure element (assuming that the variable <code>enclosure</code> has already been declared):</p>


```js
enclosure.getAttributeNS("http://www.andymatuschak.org/xml-namespaces/sparkle", "version");
```


<p>An interesting thing to note is that the latest version of Safari supports</p>


```js
enclosure.getAttribute("sparkle:version");
```


<p>…but it doesn’t support</p>


```js
enclosure.getElementsByTagName("sparkle:releaseNotesURL");
```


<p>So, for now, it’s safest to always use the namespace methods…</p>
<p>That’s it for now!</p>
