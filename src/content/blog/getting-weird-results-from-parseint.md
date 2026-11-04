---
title: 'Getting Weird Results from parseInt?'
description: 'If you pass parseInt a number with a zero in front of it, such as "020", without specifying a radix, you may get funny results... ```js parseInt("020"); //…'
pubDate: 'Jan 12 2009'
---

<p><em>Originally published on my old QuintusQuill Console blog in January 2009.</em></p>
<p>If you pass <code>parseInt</code> a number with a zero in front of it, such as "020", without specifying a radix, you may get funny results...</p>


```js
parseInt("020");    // Result: 16
```


<p>This is because when the input string begins with "0", <code>parseInt</code> assumes the radix is 8 (octal), and converts the string to an octal number. Perhaps it's just me, but I don't usually work in octals!</p>
<p>You can avoid this problem by supplying it with the radix that you want to use.</p>


```js
parseInt("020", 10);    // Result: 20
```


<p>For more information, I recommend that you read the <a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Functions/parseInt#Description">parseInt</a> page at the Mozilla Developer Centre.</p>
