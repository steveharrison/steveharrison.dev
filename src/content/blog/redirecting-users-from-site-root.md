---
title: 'Redirecting Users from Site Root'
description: 'I recently decided that since I didn''t currently have much on my home page (which resides at the root level of my site), it would be better to redirect…'
pubDate: 'Dec 23 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in December 2008.</em></p>
<p>I recently decided that since I didn't currently have much on my home page (which resides at the root level of my site), it would be better to redirect users to the Console page until I had more to put on my home page. Here's a mini-tutorial on how to redirect visitors from the root of your site to another page of your choice.</p>
<p>There's only one step! Insert the following rule into your <code>.htaccess</code> Apache file:</p>


```objc
# This will only redirect a request that begins and ends with a slash (i.e. a request to the root)
RedirectMatch ^/$ [Path or URL to redirect users to]
```


<p>Obviously you replace <code><em>[Path or URL to redirect users to]</em></code> with the actual path/URL to which you want to redirect users. For example, to redirect users to the Console section on my site, I'd write either:</p>


```apache
# Using a URL
RedirectMatch ^/$ http://quintusquill.com/console/
```


<p>...or:</p>


```apache
# Using a Path
RedirectMatch ^/$ /console/
```


<p>The reason why we use the <code>RedirectMatch</code> command instead of the regular <code>Redirect</code> command is that if we write, for example:</p>


```apache
Redirect / http://quintusquill.com/console/
```


<p>...it redirects <em>all</em> requests to http://quintusquill.com/console/—not just those going to the root. So if the user requests, say, http://quintusquill.com/about/, they will be redirected to http://quintusquill.com/console/about/ (not what we want!).</p>
<p>Thankfully, using the <code>RedirectMatch</code> command, we are able (by using a regular expression) to only redirect requests to the site root.</p>
