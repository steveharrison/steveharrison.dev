---
title: 'Determining the Size of Enclosures'
description: 'When you define an enclosure in an RSS feed, you have to specify a length attribute, which specifies the size in bytes of the file attached in the…'
pubDate: 'Sep 07 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in September 2008.</em></p>
<p>When you define an enclosure in an RSS feed, you have to specify a <code>length</code> attribute, which specifies the size in bytes of the file attached in the enclosure.</p>
<p>This is actually quite simple: the Finder's "Get Info" window not only shows how many KB, MB, or GB the file takes up on disk, but also what this is in bytes (this info can be found in "General").</p>
<img src="/content/images/2008/09/safarigetinfo.png" alt="" />
<p>Simply take out the commas, and there's the enclosure's <code>length</code>!</p>
