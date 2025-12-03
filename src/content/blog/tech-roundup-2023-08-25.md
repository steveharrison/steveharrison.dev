---
title: 'Python in Excel, AI face search, and deep-cloning JavaScript objects natively'
description: 'Microsoft is bringing Python to Excel:

There is now a reverse image lookup that uses facial recognition to find all images of a person publicly on the web'
pubDate: 'Aug 25 2023'
---

Microsoft is [bringing](https://techcommunity.microsoft.com/t5/microsoft-365-blog/introducing-python-in-excel-the-best-of-both-worlds-for-data/ba-p/3905482) Python to Excel:

![thumbnail image 1 captioned Seamlessly aggregate and visualize your data with Python in Excel.](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/500233iD7050A57EA312914/image-size/large?v=v2&px=999)

<iframe width="100%" height="413" src="https://www.youtube.com/embed/H4XbvL8Mglc?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Python in Excel: a powerful combination for data analysis and visualization"></iframe>

There is now a reverse image lookup that uses facial recognition to find all images of a person publicly on the web:

> Possibly the most disturbing AI website on the internet.
>
> Upload a photo of a person, and AI will find ALL of the images of that person across the internet.
>
> Here's what you need to know: [pic.twitter.com/oIEUXdY8CE](https://t.co/oIEUXdY8CE)
>
> — Rowan Cheung (@rowancheung) [August 23, 2023](https://twitter.com/rowancheung/status/1694341766961418566?ref_src=twsrc%5Etfw)

Parmigiano-Reggiano are now [putting edible microchips](https://www.wsj.com/world/europe/microchips-in-the-parmigiano-and-other-ways-europeans-are-fighting-fake-food-3c719f9c) into their cheese blocks to fight against knockoffs. The silicon chips, made by [p-Chip](https://p-chip.com/), use blockchain to allow the cheese to be traced all the way back to the producer of the milk. The market of European food products with EU protected status—also including Greek feta cheese, Champagne, and Italian Parma raw ham—is worth €80 billion annually. These products can be twice the price of similar non-protected products, so there is a huge market—estimated to be also around €80 billion—for knockoffs and incentive for the food producers to prove authenticity.

Here is a thread of what developers have been coming up with for Apple's Vision Pro SDK:

> Two months ago, Apple released Vision Pro’s SDK. Since then, the community has been cooking 🔥
>
> I collected some of my favorite creations so far ⬇️
>
> — Wenbo Tao (@tracy__henry) [August 22, 2023](https://twitter.com/tracy__henry/status/1693999486585242040?ref_src=twsrc%5Etfw)

My favourite is real-time subtitles:

> Here's Navi in action on [#visionOS](https://twitter.com/hashtag/visionOS?src=hash&ref_src=twsrc%5Etfw)! It gives you subtitles for the real world, and can also translate what people are saying on the fly to your language. Obviously early in a lot of ways, but excited for how easy it is to develop for this platform. [pic.twitter.com/5Vga3FoJSI](https://t.co/5Vga3FoJSI)
>
> — Jordi Bruin (@jordibruin) [August 6, 2023](https://twitter.com/jordibruin/status/1688275141719916544?ref_src=twsrc%5Etfw)

For something a bit different, check out this luxury house that has been designed to resemble a yacht integrated into a hill in Greece:

![](https://www.designboom.com/favicon.ico)

Real-time CGI is improving in leaps and bounds:

> CGI is about to get easy 
>
> This is simulon, a new iOS app that’s still in invite only mode 
>
> The video below was made with a live in-camera preview and auto-exposure matching, no camera solve, no HDRI capture and no manual compositing setup.
>
> 🔗 in next tweet [pic.twitter.com/pJYFFaRGbd](https://t.co/pJYFFaRGbd)
>
> — Linus (●ᴗ●) (@LinusEkenstam) [August 22, 2023](https://twitter.com/LinusEkenstam/status/1694121273964589368?ref_src=twsrc%5Etfw)

Midjourney has released a feature that allows you to generate new AI content for a specific part of an image, allowing you to keep the bits you like while regenerating certain other areas of an AI-generated image:

> 🔴 FINALLY! Midjourney releases its INPAINTING!
>
> We've been WAITING for this for AGES. Now we can edit any area of our generations!
>
> 💡 IMPORTANT: don't forget to enable the REMIX option to be able to use a text prompt!
>
> 📽️ VIDEO TUTORIAL 👇[#midjourney](https://twitter.com/hashtag/midjourney?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/d8GQ1gLth0](https://t.co/d8GQ1gLth0)
>
> — Javi Lopez ⛩️ (@javilopen) [August 21, 2023](https://twitter.com/javilopen/status/1693730802670981166?ref_src=twsrc%5Etfw)

For example, this AI-generated image originally featured a dog but was able to be changed to a variety of cats while preserving the rest of the image:

StabilityAI has released StableCode, a large language model specifically aimed at coding:

![](https://venturebeat.com/wp-content/themes/vb-news/img/favicon.ico)

> “What we would like to do with this kind of model is to do a similar thing as we did for Stable Diffusion, which helped everyone in the world to become an artist,” Christian Laforte, head of research at Stability AI, told VentureBeat in an exclusive interview. “We’d like to do the same thing with the StableCode model: basically allow anyone that has good ideas [and] maybe has a problem, to be able to write a program that would just fix that problem.”

## Dev

I keep forgetting about new CSS and JS features that are already available! One such example is `[structuredClone](https://web.dev/structured-clone/)`, which allows you to properly deep clone an object natively in JavaScript:

You can also now use a [polyfill](https://github.com/flackr/scroll-timeline) for scroll-driven animations.

Chrome is [implementing](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin…. https://groups.google.com/a/chromium.org/g/blink-dev/c/IjZW1CQNNxM/m/st31PsqzAQAJ) the `crossorigin` attribute on `<image>` and `<feImage>` elements in SVGs. This is currently only available in Firefox 115. It will behave the same as the `crossorigin` HTML attribute:

![Image](https://pbs.twimg.com/media/F4HK60ibEAEpcq9?format=jpg&name=large)

![](https://developer.mozilla.org/favicon-48x48.cbbd161b.png)

I'm also going to be talking about what's new in CSS in 2023 at Web Directions Summit in October! Check out all the sessions and grab tickets here: [https://webdirections.org/summit](https://t.co/1NWSNSCVva)

![Image](https://pbs.twimg.com/media/F3sm_wLa0AABr2Z?format=webp&name=medium)

---

That's all for now—have a great weekend!
