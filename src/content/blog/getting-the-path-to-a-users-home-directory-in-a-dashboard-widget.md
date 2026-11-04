---
title: 'Getting the Path to a User''s Home Directory in a Dashboard Widget'
description: 'There may be times when you want to get the path to a user''s home directory in your Dashboard widget. If, like normal, the widget is located in the user''s…'
pubDate: 'Jan 11 2009'
---

<p><em>Originally published on my old QuintusQuill Console blog in January 2009.</em></p>
<p>There may be times when you want to get the path to a user's home directory in your Dashboard widget. If, like normal, the widget is located in the user's local Widgets directory (<code>~/Library/Widgets/</code>), we could extract the path from <code>window.location.href</code>. However, this approach is pretty limited, because it requires the widget to be located somewhere in the user's home directory. What if, for some reason, the user moves our widget into the main Widgets directory (<code>/Library/Widgets/</code>)? This is unlikely, but it is possible. Also, this approach won't work when we run the widget in Dashcode, because Dashcode temporarily stores the widget in a system folder that isn't located in the user's home directory.</p>
<p>Luckily, there's a solution...</p>
<p>The following Terminal command will give us the path to the user's home directory:</p>


```sh
echo ~
```


<p>For example, in my user area, this command returns:</p>


```text
/Users/steve
```


<p>So, to get the path from within our Dashboard widget, we wrap up the Terminal command in a <code>widget.system</code> call:</p>


```js
widget.system("/bin/echo ~", function() {

    var output = this.outputString;

    // Output includes a line break that we have to remove
    var pathToHome = output.replace("\n", "");

};
```


<p>Using this approach, we will be able to accurately determine the path to the user's home directory, regardless of the location of the widget.</p>
