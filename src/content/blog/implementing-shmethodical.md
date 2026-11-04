---
title: 'Implementing SHMethodical'
description: 'Implement an awakeFromNib method: ```objc - (void) awakeFromNib { } ``` Create a string holding some message text: ```objc NSString *loremText = @"Lorem…'
pubDate: 'Apr 26 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in April 2008.</em></p>
<p>Implement an <code>awakeFromNib</code> method:</p>


```objc
- (void) awakeFromNib
{
}
```


<p>Create a string holding some message text:</p>


```objc
NSString *loremText = @"Lorem ipsum dolor sit er elit lamet,
            consectetaur cillium adipisicing pecu,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.";
```


<p>And finally, create an instance of <code>SHMethodical</code>, send it a message, and release it.</p>


```objc
id myObject = [[SHMethodical alloc] init];
[myObject displayAlert: @"Hello World!" withOtherText: loremText];
[myObject release];
```
