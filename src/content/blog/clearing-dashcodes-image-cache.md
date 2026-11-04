---
title: 'Clearing Dashcode''s Image Cache'
description: 'If you''re working with images a lot in your dashboard widget, you may notice that Dashcode caches them between runs. This is not very kind of Dashcode…'
pubDate: 'Jan 06 2009'
---

<p><em>Originally published on my old QuintusQuill Console blog in January 2009.</em></p>
<p>If you're working with images a lot in your dashboard widget, you may notice that Dashcode caches them between runs. This is not very kind of Dashcode because this doesn't happen in Dashboard itself, and since our widget is destined for the Dashboard, we want to know how it will perform <em>there</em>.</p>
<p>Luckily, there is a solution! While it is running in Dashcode, refresh the widget (Command-R—with the widget in focus, of course). Not only does this perform the way it does in Dashboard, but it also happens to clear Dashcode's annoying cache...</p>
