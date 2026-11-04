---
title: 'OS X Web Sharing - It helps to have Apache running'
description: 'I recently wanted to use Mac OS X Personal Web Sharing on my computer (to test webpages on my iPod Touch across the local network). I hadn''t used Web…'
pubDate: 'Nov 08 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in November 2008.</em></p>
<p>I recently wanted to use Mac OS X Personal Web Sharing on my computer (to test webpages on my iPod Touch across the local network). I hadn't used Web Sharing for a long time, as I use <a href="http://www.mamp.info/en/mamp.html">MAMP</a> for most of my local-web-server-testing needs these days. Unfortunately, getting Web Sharing running wasn't to be just one-click away...</p>
<p>After enabling "Web Sharing" in System Preferences, I opened the URL for "Your computer's website" in Safari and received a "Safari can’t find the server" message.</p>
<p>After a bit of troubleshooting, the <code>httpd.conf</code> file certainly wasn't the culprit—it was exactly the same as the <code>httpd.conf</code> file on another Mac where Web Sharing worked successfully.</p>
<p>It was Console (<code>/Applications/Utilites/Console.app</code>) that identified the problem. Among several Apache error messages was the following:</p>


```js
(2)No such file or directory: httpd: could not open error log file /private/var/log/apache2/error_log. Unable to open logs.
```


<p>For some reason, the <code>apache2</code> folder was missing in <code>/private/var/log/</code>, and as a result, the Apache web server never started. Safari couldn't access the page because the web server wasn't running!</p>
<p>The solution was to simply create the folder <code>apache2</code> in <code>/private/var/log/</code>.</p>
