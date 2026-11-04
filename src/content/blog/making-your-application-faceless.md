---
title: 'Making Your Application Faceless'
description: 'Have you ever wanted to make your application not appear in the dock and not display its own main menu bar? For example, say you have an application which…'
pubDate: 'Mar 10 2008'
---

<p><em>Originally published on my old QuintusQuill Console blog in March 2008.</em></p>
<p>Have you ever wanted to make your application not appear in the dock and not display its own main menu bar?</p>
<p>For example, say you have an application which is to be accessed as a menu icon in the status bar (where you have the icons, or sometimes, text, for Airport, Volume, Date/Time, Spotlight etc.). This application doesn't want to have its own main menu bar or appear in the dock...</p>
<p>Simply go into the Info.plist file in your Xcode project and add the following:</p>
<p><code><br />
<key>LSUIElement</key><br />
<string>1</string><br />
</code></p>
<p>Save, Build, and Run. Your application should display any windows it is supposed to show at startup, but will not appear in the dock or have its own menu bar.</p>
<p>For more information:</p>
<ul>
	<li>"Status Bars" (Apple Developer Connection):&ensp;
		<a href="http://developer.apple.com/documentation/Cocoa/Conceptual/StatusBar/StatusBar.html">HTML</a>&ensp;|&ensp;<a href="">PDF</a>
	</li>
</ul>
