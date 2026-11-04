---
title: 'Determining OS Version in Dashboard Widgets'
description: 'There are various times when you might want to know the version of the user''s operating system when performing some operation in your Dashboard Widget.…'
pubDate: 'Sep 20 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in September 2008.</em></p>
<p>There are various times when you might want to know the version of the user's operating system when performing some operation in your Dashboard Widget. While you can find it using AppleScript, there is a better way: the <code>sw_vers</code> Terminal command (which is located in <code>/usr/bin/</code>).</p>
<p>This is the output of the command on my computer at the time of writing:</p>


```text
ProductName:    Mac OS X
ProductVersion: 10.5.4
BuildVersion:   9E17
```


<p>Obviously, we need to extract the "10.5.4" part.</p>
<p>I have done this by firstly extracting the "ProductVersion:	10.5.4" part using a regular expression, and then deleting the "ProductVersion:	" part.</p>
<p>The resulting code is as follows:</p>


```js
widget.system("/usr/bin/sw_vers", function() {

    // Note that the "match" method returns an array.
    // The matched string, which is what we want,
    // is the first element in that array:

    var versionString = this.outputString.match(/ProductVersion:\t.*/)[0];

    // We delete the "ProductVersion:   "
    // part by replacing it with nothing:   

    var version = versionString.replace("ProductVersion:    ", "");
});
```
