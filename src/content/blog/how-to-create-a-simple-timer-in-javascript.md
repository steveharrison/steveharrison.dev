---
title: 'How to Create a Simple Timer in JavaScript'
description: 'Since I''ve been working on a JavaScript timer class, I thought it would be an appropriate time to write a little tutorial on how to create a simple timer in…'
pubDate: 'Jul 15 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in July 2008.</em></p>
<p>Since I've been working on a JavaScript timer class, I thought it would be an appropriate time to write a little tutorial on how to create a simple timer in JavaScript.</p>
<p>The idea is simple: we record the current time when the user starts the timer, record the current time when the user stops the timer, and then subtract the two to find out how much time has elapsed.</p>
<p>The trick is to get both numbers into a format on which we can perform standard mathematical calculations. The JavaScript method <code>getTime()</code> works well for this, as it returns the number of milliseconds since 1 January 1970.</p>
<p>First, we create our class "Timer":</p>


```js
function Timer() {}
```


<p>We'll have have three instance variables:<br />
<ul><br />
<li><code>startTime</code> - This will store the time when we start the timer</li><br />
<li><code>stopTime</code> - This will store the time when we stop the timer</li><br />
<li><code>stopped</code> - This will store a boolean indicating whether the timer has been stopped or not</li><br />
</ul></p>
<p>Here's what our completed object constructor function looks like:</p>


```js
function Timer()
{
    this.startTime = 0;
    this.stopTime = 0;
    this.stopped = true;
}
```


<p>Now we'll add three methods:</p>
<ul>
	<li><code>start()</code> - This will start the timer</li>
	<li><code>stop()</code> - This will stop the timer</li>
	<li><code>getElapsedTime()</code> - If the timer has been stopped, then this will get the elapsed time between when the timer was started and when it was stopped; if the timer hasn't been stopped yet, it will get the elapsed time since the timer was started</li>
	<li><code>clear()</code> - This will reset all the values</li>
</ul>
<p>The <code>start</code> method will simply set <code>this.startTime</code> to the value of the <code>getTime()</code> method:</p>


```js
Timer.prototype.start = function()
{
    var currentDate = new Date();
    this.startTime = currentDate.getTime();
}
```


<p>The <code>stop</code> method is almost identical to the <code>start</code> method, except that this time we set <code><em>this.stopTime</em></code> to the value of the <code>getTime()</code> method:</p>


```js
Timer.prototype.stop = function()
{
    var currentDate = new Date();
    this.stopTime = currentDate.getTime();
}
```


<p>The <code>getElapsedTime</code> method will check whether the timer has been stopped or not, then return either the start time subtracted from the stop time, or the start time subtracted from the current time (respectively):</p>


```js
Timer.prototype.getElapsedTime = function()
{
    if (this.stopped) {
        return (this.stopTime - this.startTime)
    }
    else {
        var currentDate = new Date();
        return (currentDate.getTime() - this.startTime)
    }
}
```


<p>Finally, the <code>clear:</code> method resets all our instance variables. It is exactly the same code as in the initialisation function:</p>


```js
Timer.prototype.clear = function()
{
    this.startTime = 0;
    this.stopTime = 0;
    this.stopped = true;
}
```


<p>And that's it. You've now created a simple timer class using JavaScript!</p>
