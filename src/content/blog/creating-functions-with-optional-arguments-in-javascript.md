---
title: 'Creating Functions with Optional Arguments in Javascript'
description: 'In this post, I will show you how to create functions with optional arguments, or parameters, in Javascript. For example, in our demo function doSomething ,…'
pubDate: 'Aug 03 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in August 2008.</em></p>
<p>In this post, I will show you how to create functions with optional arguments, or parameters, in Javascript. For example, in our demo function <code>doSomething</code>, the user can specify an "onComplete" function to call when finished "doing something", but doesn't have to specify one if is not needed.</p>
<p>First, we declare our function:</p>


```js
function doSomething()
{
    // Code to do something...
}
```


<p>Note that we do <strong>not</strong> include the "onComplete" argument in the function declaration. If we did this, then the user would be required to supply a value for the "onComplete" argument (and if they didn't, there would be an error).</p>
<p>Javascript has an "arguments" array for each function, containing (logically) all the arguments passed in by the user. We can use this to implement optional arguments, as long as we know the order of the optional arguments (in this case, we don't have to worry, since there is only one optional argument):</p>


```js
if (arguments.length > 0) {
    var onCompleteFunction = arguments[0];
}
```


<p>Here, we check to see if the arguments array contains anything, and if there is, get the first item (which will be the "onComplete" function) and assign it to a variable named "onCompleteFunction".</p>
<p>When we've finished "doing something", we can see whether there is an <code>onCompleteFunction</code> variable, and if so, call the function contained by the variable:</p>


```js
if (onCompleteFunction)
    onCompleteFunction();
```


<p>Note: Since the if statement only has one line of code, we can omit the opening and closing braces to make it as simple as possible.</p>
<p>And there it is! The final function should look similar this:</p>


```js
function doSomething()
{
    if (arguments.length > 0) {
        var onCompleteFunction = arguments[0];
    }
    
    // Code to do something...

    if (onCompleteFunction)
        onCompleteFunction();
}
```


<p>The user can then call it like this:</p>


```js
doSomething();
```


<p>...or like this:</p>


```js
doSomething(function() {
    alert("Done!");
});
```


<p>Either one of these is valid, and will not produce any errors.</p>
