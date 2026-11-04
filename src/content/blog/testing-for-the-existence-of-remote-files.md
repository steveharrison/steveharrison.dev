---
title: 'Testing for the Existence of Remote Files'
description: 'There are plenty of cases where you might want to check whether a remote file (a text document or an image) exists. We can do this using a HEAD…'
pubDate: 'Oct 21 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in October 2008.</em></p>
<p>There are plenty of cases where you might want to check whether a remote file (a text document or an image) exists. We can do this using a HEAD XMLHttpRequest.</p>
<p>Set up your XMLHttpRequest like normal:</p>


```objc
var request = new XMLHttpRequest();

request.onreadystatechange = function()
{
    if (request.readyState == 4) {
        if (request.status == 200) {
            [Code to Execute if File Exists...]
        }
        else {
            [Code to Execute if File Doesn't Exist...]
        }
    }
}
```


<p>When you open it, however, replace "GET" with "HEAD" (<code>url</code> is the URL of your file):</p>


```js
request.open("HEAD", url, true);
```


<p>Finally, send it like normal:</p>


```js
request.send("");
```


<p>This is very good way to quickly determine if an image exists—it's much faster than creating a new <code>Image</code> object, assigning it a <code>src</code>, then setting up <code>onload</code> and <code>onerror</code> handlers.</p>
<p>Obviously, if you were to use this multiple times, it would be best to put the code into a function.</p>
