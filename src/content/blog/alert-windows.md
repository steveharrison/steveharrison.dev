---
title: 'Alert Windows'
description: 'C Method ```objc NSRunAlertPanel(@"App Controller", @"Hello World!", @"OK", @"Cancel", NULL); ``` Objective-C Method ```objc NSAlert * alert = [[NSAlert…'
pubDate: 'Apr 17 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in April 2008.</em></p>
<h4>C Method</h4>


```objc
NSRunAlertPanel(@"App Controller", @"Hello World!", @"OK", @"Cancel", NULL);
```


<h4>Objective-C Method</h4>


```objc
NSAlert * alert = [[NSAlert alloc] init];

[alert addButtonWithTitle:@"OK"];
[alert addButtonWithTitle:@"Cancel"];
[alert setMessageText:@"Message Text"];
[alert setInformativeText:@"Informative Text"];
[alert setAlertStyle:NSInformationalAlertStyle];

[alert release];
```


<p>Here is the code to do something when the "OK" button is pressed (make sure you insert it before you release the alert object):</p>


```objc
if ([alert runModal] == NSAlertFirstButtonReturn)
{
    // OK clicked, do something here
}
```
