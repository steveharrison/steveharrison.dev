---
title: 'Creating Docklets'
description: 'Open TextEdit, and then control-click/right-click on its icon in the Dock. The menu that appears is called a "Docklet". TextEdit''s docklet is a good example…'
pubDate: 'Apr 12 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in April 2008.</em></p>
<p>Open TextEdit, and then control-click/right-click on its icon in the Dock. The menu that appears is called a "Docklet". TextEdit's docklet is a good example of the default docklet. Now open Safari, and look at its docklet. Notice that in addition to the default docklet items, there is an extra menu item: "New Window". This does just what it says: it opens a new browser window in Safari. You can see more customized docklets in Apple Mail, Finder and Xcode (just to name a few).</p>
<p>If you look at the docklet for a Mac OS X application you've created in Xcode/Interface Builder, you'll see that it's a default docklet. What if you want to add extra options to this menu like in Safari? Read on...</p>
<ol class="instructions">
	<li>Add a new menu to MainMenu.nib</li>
	<li>Control-Click on <b>File's Owner</b> and drag to your new menu</li>
	<li>Release the mouse when your menu icon is highlighted and select "dockMenu" from the "Outlets" HUD-like menu that appears</li>
</ol>
<p>[this is a draft]</p>
