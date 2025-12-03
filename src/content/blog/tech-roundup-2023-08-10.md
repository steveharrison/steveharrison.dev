---
title: 'Deep fake avatars, guessing your password using audio + AI, and new web dev features'
description: 'An AI-generated deep fake has been making the rounds—I think it''s pretty convincing:

[NEW] - Joshua Avatar 2.0 🤖✨. Both of these video clips were 100% AI'
pubDate: 'Aug 11 2023'
---

An AI-generated deep fake has been making the rounds—I think it's pretty convincing:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">[NEW] - Joshua Avatar 2.0 🤖✨. Both of these video clips were 100% AI-generated, featuring my own avatar and voice clone. 🎙️🎥<br><br>We&#39;ve made massive enhancements to our life-style avatar&#39;s video quality and fine-tuned our voice technology to mimic my unique accent and speech… <a href="https://t.co/9EgxRA69dg">pic.twitter.com/9EgxRA69dg</a></p>&mdash; Joshua Xu (@joshua_xu_) <a href="https://twitter.com/joshua_xu_/status/1689019874667024384?ref_src=twsrc%5Etfw">August 8, 2023</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Researchers have published a paper on guessing passwords with AI by listening to the sounds made by your keyboard over a Zoom call.

> The researchers from the University of Surrey, Durham University, and Royal Holloway, University of London, pressed each of 36 keys on a MacBook Pro, including all of the letters and numbers, 25 times in a row, using different fingers and with varying pressure. The sounds were recorded both over a Zoom call and on a smartphone near the keyboard.

> The team then trained a [machine learning](https://interestingengineering.com/innovation/new-machine-learning-model-can-detect-dementia-in-speech) system to recognize features of the acoustic signals associated with each key. They tested the system on the remaining data and found that it could accurately assign the correct key to a sound 95 percent of the time when the recording was made over a phone call and 93% of the time when it was made over a Zoom call.

> The study is not the first to show that sound can identify keystrokes, but the team says their study uses the most advanced methods and has achieved the highest accuracy so far.

![](https://interestingengineering.com/icons/android-icon-192x192.png?v=14)

A new AI model generates 3D textured meshes based on a single "unposed" photo:

![](https://guochengqian.github.io/dragon.png)

Google has announced NotebookLM, an AI-powered notebook where you can feed in your own Google Docs and then get summaries, ask questions about the content, and generate ideas based on the content (for example: "Generate a script for a short video on this topic" or “What questions would potential investors ask?”).

![](https://blog.google/static/blogv2/images/apple-touch-icon.png)

It appears journalists still don't understand the "shitposting" culture on X and that they might want to take posts with a grain of salt: someone wrote an entire Insider article about a joke X post:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is my finest work <a href="https://t.co/lpkenvh70Q">pic.twitter.com/lpkenvh70Q</a></p>&mdash; Alex Cohen (@anothercohen) <a href="https://twitter.com/anothercohen/status/1688540656480727041?ref_src=twsrc%5Etfw">August 7, 2023</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

That, or they're just trying to cash in on some of the engagement too. 😏

## Dev

Here's a video on how F1 use AWS:

![](https://technative.io/wp-content/uploads/2017/03/q3Nchk1T14472.jpg)

### All it takes is one misplaced tracking pixel

I was researching Backblaze, a cloud internet backup service, and found this interesting article on a data breach that occurred:

![](https://www.theregister.com/design_picker/13249a2e80709c7ff2e57dd3d49801cd534f2094/graphics/favicons/apple-touch-icon.png)

It's a great reminder that you can have end-to-end encrypted services but at some stage, the data has to be decrypted to show to the user, and if there's a bug in the Front End of your app where the data is visible, bam! In this case, they added some JavaScript code using Google Tag Manager, commonly used to add advertising / analytics tracking code by marketing teams, but didn't restrict the URL pattern to only target their public pages. Personally, it would seem like a good idea to not even have Google Tag Manager on the authenticated section of your site for precisely this reason.

### SSD reliability

Have you ever wondered how reliable SSDs are at scale? Well fear not, here's a study of 1.4 million SSDs by researcher Prof. Bianca Schroeder and NetApp:

![](https://www.zdnet.com/a/fly/bundles/zdnetcore/images/logos/zdnet-logo-yellow.png)

An interesting finding: drives with less usage experienced higher replacement rates.

### IDX

Google announced a new browser-based code editor this week called IDX.

> IDX is based on VSCode, and the vision is a full fidelity local environment with AI smarts, quick starting points for apps using popular frameworks, a Linux-based VM in a data center near you, and quick deploys to Firebase Hosting and (soon) Android + iOS simulators in-browser.

![idx ai home](https://addyosmani.com/assets/images/idx/idx-ai-home.webp)

You can read more in [this article](https://addyosmani.com/blog/project-idx/) by Addy Osmani and sign up for the waitlist at the [official website](https://idx.dev/#introduction).

### Serenity

While I was looking at new JavaScript proposals on GitHub, I noticed they mentioned "Serenity" as one of the browser engines to add these features to, in addition to the usual suspects such as Chromium and WebKit.

[SerenityOS](https://serenityos.org) is a hobby Unix-like OS created in 2018 by Andreas Kling. He went as far as to write his own web browser from scratch!

![](https://www.theregister.com/favicon.ico)

### ch CSS unit

At a recent SydCSS meetup, I discovered the `ch` CSS unit which refers to the width of one character (the "0" character, specifically). You can use it to specify container widths based on the number of characters you want to fit in:

You can read more about it here:

![](https://meyerweb.com/favicon.ico)

### Repeating JavaScript RegExp capture group names

In future, you will be able to use the same capture group name in different OR segments of your JavaScript regular expressions.

Currently the above code will result in an “Invalid regular expression: Duplicate capture group name” error.

This TC39 proposal is in Stage 3: you can try it out now in Safari Technology Preview and as a Babel plugin, [https://babeljs.io/docs/babel-plugin-proposal-duplicate-named-capturing-groups-regex](https://babeljs.io/docs/babel-plugin-proposal-duplicate-named-capturing-groups-regex).

More info: [https://github.com/tc39/proposal-duplicate-named-capturing-groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups)

### prefers-reduced-transparency

In modern OSes, you can enable a "Reduce transparency" accessibility option to make the UI easier to read. The experimental `prefers-reduced-transparency` CSS media query allows you to adjust your web UI to suit this preference. You can try it out today in Chrome Canary with the "Experimental Web Platform features" flag enabled.

### <search>

The new `<search>` HTML element provides a semantic way to identify a search/filtering area, as an alternative to `role="search"`, so screen readers can provide quick access to it. The idea is to be able to write semantic, accessible HTML without having to use ARIA.

It isn't available in any browsers yet.

Learn more: [https://www.scottohara.me/blog/2023/03/24/search-element.html](https://www.scottohara.me/blog/2023/03/24/search-element.html)

---

Have a great weekend!
