---
title: 'Resizing Dashboard Widgets'
description: 'Dashboard widgets have a certain width and height (often specified in your Info.plist file). If your widget content moves outside this region (such as it…'
pubDate: 'Sep 08 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in September 2008.</em></p>
<p>Dashboard widgets have a certain width and height (often specified in your Info.plist file). If your widget content moves outside this region (such as it might during an animation), it will get clipped.</p>
<p>Dashboard widgets have a certain width and height (often specified in your Info.plist file). If your widget content moves outside this region (such as it might during an animation), it will get clipped.</p>
<p>One way to solve this problem is to specify large width and height values in the Info.plist file. However, this results in a gigantic ripple effect (much bigger than the widget itself) when the widget is launched—a bad user experience.</p>
<p>Luckily, there is a much better way to do this, which doesn't involve hacks or a bad user experience:</p>


```js
window.resizeTo(width, height);
```


<p>In your Info.plist file, set the width and height keys to the initial width and height of the widget. Whenever the size of your widget changes, call <code>window.resizeTo(width, height)</code>, passing in the new width and height values of your widget. Dashboard will then know the new dimensions of your widget and your content will not get clipped.</p>
<p>There is also a <code>window.resizeBy(width, height)</code> method, where the width and height values are <em>added</em> to the existing width and height values of the widget area.</p>
<p>Note that neither of these methods resize the <em>content</em> of your widget—you have to do this yourself.</p>
<p>Now for some examples:</p>


```js
// Initial Width of Widget = 300; Initial Height of Widget = 200;

window.resizeTo(300, 300);

// Result: Width of Widget = 300; Height of Widget = 300;
```




```js
// Initial Width of Widget = 300; Initial Height of Widget = 200;

window.resizeBy(300, 300);

// Result: Width of Widget = 600; Height of Widget = 500;
```


<p>Also, you can obtain the current width of the widget area using <code>window.innerWidth</code>, and the current height by using <code>window.innerHeight</code>:</p>


```js
// Width of Widget = 300; Height of Widget = 200;

var w = window.innerWidth;
alert(w); // Result: 300

var h = window.innerHeight;
alert(h); // Result: 200
```


<p>Here are some screenshots of Apple's Dictionary dashboard widget; the first one is what the widget normally looks like, and the second is what happens when you take out the <code>window.resizeTo</code> call:</p>
<p><a href="http://localhost:8888/dazzleTeaser.png"><br />
<img src="/content/images/2008/09/dictionarywidgetwithresize.png" /><br />
</a></p>
<p><a href="/content/images/2008/09/dictionarywidgetwithoutresize.png"><br />
<img src="/content/images/2008/09/dictionarywidgetwithoutresize.png" width="200" /><br />
</a></p>
<p>You can read more about resizing dashboard widgets <a href="http://developer.apple.com/documentation/AppleApplications/Conceptual/Dashboard_ProgTopics/Articles/Resizing.html">here</a>.
