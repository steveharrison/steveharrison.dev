---
title: 'Tech roundup - Fri 5 May 2023'
description: 'So much innovation is happening at the moment, a truly exciting time to be alive! I don''t have any trouble filling these weekly roundups.


News

Coinbase '
pubDate: 'May 05 2023'
---

So much innovation is happening at the moment, a truly exciting time to be alive! I don't have any trouble filling these weekly roundups.

### News

Coinbase and Apple both beat Wall Street earnings expectations yesterday!

I found some fun images from a 1997 Wired article that included all the ways columnists thought Apple could save itself: [https://twitter.com/stevesi/status/1654328764501987328?s=61&t=LT7iYI6wMF9GWzhyzDWBiA](https://twitter.com/stevesi/status/1654328764501987328?s=61&t=LT7iYI6wMF9GWzhyzDWBiA). My favourite is:

> 31. Build a PDA for less than $250 that actually does something:  a) cellular email  b) 56-channel TV  c) Internet phone

Try adding a "1" before that $250! 😂📱

Coinbase released [Coinbase International Exchange](https://www.coinbase.com/blog/introducing-coinbase-international-exchange), which provides perpetual futures contracts for Bitcoin and Ethereum to institutional clients, a part of their push to expand outside of the US amid unfavourable regulatory conditions.

Apple and Google have [teamed up](https://techcrunch.com/2023/05/02/apple-and-google-team-up-on-industry-spec-to-make-bluetooth-tracking-devices-like-airtag-safer/) on an industry spec to make Bluetooth tracking devices like AirTag safer.

In the crypto world, memecoin [PEPE](https://coinmarketcap.com/currencies/pepe/) is going [ballistic](https://decrypt.co/138872/meme-coin-mania-pepe-rockets-up-to-set-new-all-time-high): someone managed to turn $250 into $1.02M in the last two weeks! However, whether you can actually cash out is a [different story](https://decrypt.co/137203/pepe-holder-turns-250-into-1m-in-four-days-but-can-they-sell-it), so some of these gains are "paper money".

An Israeli startup Alison [raised $5.1M](https://techcrunch.com/2023/05/01/ai-platform-to-analyze-creative-advertising-raises-5-1m-from-investors-including-a16z/) from investors including [a16z](https://a16z.com) for an AI platform that analyses which elements in your marketing material like typeface characters, colours, sounds, and text perform best, as well as elements that have worked well for competitors, and provides recommendations for new marketing imagery. Interesting idea.

OpenAI released a ChatGPT plugin called [Code interpreter](https://openai.com/blog/chatgpt-plugins#code-interpreter), which can import datasets and generate visualisations. In the example below, someone uploaded a dataset of Netflix movies and TV shows, provided the prompt `Draw visuals to explain what content is available in different countries. Answer it in the form of a multiple pages PDF download. No explanation required. just go!`, and then got a PDF output with bar charts how many movies and TV shows Netflix has for each country.

> GPT-4 is the new data scientist 🤯
>
> With the new OpenAI code interpreter model, you just have to upload the data and provide instructions in simple english. 
>
> The model does everything from cleaning data to generating insightful visualizations on autopilot!! [pic.twitter.com/EF8vveS7mY](https://t.co/EF8vveS7mY)
>
> — Shubham Saboo (@Saboo_Shubham_) [May 1, 2023](https://twitter.com/Saboo_Shubham_/status/1653163644866252802?ref_src=twsrc%5Etfw)

In another example, Jason Calacanis uploaded a CSV of electric vehicle sales data and asked it `what are the three most interesting trends in this data`. ChatGPT then came up with three trends: `Electric Vehicle Adoption Over Time`, `Most Popular Electric Vehicle Makes and Models`, and `Distribution of Electric Vehicle Types`. He was able to ask it to filter out Tesla models and then ask specific questions about the dataset like `which states have had the most growth in 2021 and 2022`. You can check out the full conversation [here](https://sharegpt.com/c/eDY53YP). Pretty cool for speeding up reporting!

Microsoft announced that [Bing Chat AI](https://www.bing.com/new) is now available to everyone with a Microsoft account, with plugins coming soon.

Slack [announced plans](https://slack.com/intl/en-au/blog/news/introducing-slack-gpt) to build AI features such as summarising all the unread messages that you've missed.

Last week I featured an [AI tool that gives you abs](https://www.tinderglowup.com). Well this week, I found the opposite: an AI tool that dresses you up in corporate attire! It's called [HeadshotPro](https://www.headshotpro.com) and will turn selfies in casual attire/environments into more formal headshots. It's a cool idea instead of having to get a professional photoshoot, but they all look fairly synthetic at the moment, so I'm not really sure it's gonna cut it. Once they get photorealistic though, I can see it being useful. (I'd still rather have an authentic photo of myself personally.)

There are lots of talks on AI regulation happening at the moment. Elon Musk [met with Chuck Schumer](https://www.reuters.com/world/us/elon-musk-meets-with-majority-leader-schumer-senate-office-aide-2023-04-26/) last week, and this Thursday, Joe Biden and his team [had a meeting](https://www.whitehouse.gov/briefing-room/statements-releases/2023/05/04/readout-of-white-house-meeting-with-ceos-on-advancing-responsible-artificial-intelligence-innovation/) that included Sundar Pichai (CEO of Google), Demis Hassabis (the founder of Google DeepMind), Sam Altman (CEO of OpenAI), and Satya Nadella (CEO of Microsoft).

> Artificial Intelligence is one of the most powerful tools of our time, but to seize its opportunities, we must first mitigate its risks.
>  
> Today, I dropped by a meeting with AI leaders to touch on the importance of innovating responsibly and protecting people's rights and safety. [pic.twitter.com/VEJjBrhCTW](https://t.co/VEJjBrhCTW)
>
> — President Biden (@POTUS) [May 4, 2023](https://twitter.com/POTUS/status/1654237472065302528?ref_src=twsrc%5Etfw)

The White House has also [invested $140M](https://www.theverge.com/2023/5/4/23710533/google-microsoft-openai-white-house-ethical-ai-artificial-intelligence) into new AI research facilities.

[Midjourney](https://www.midjourney.com/home), a generative image AI tool, released version 5.1 and apparently images of pelicans having a tea party are the best way to compare the new and old versions!

![](https://simonwillison.net/favicon.ico)

### Front End development

In the Front End development world, [Vercel](https://vercel.com/), who provide infrastructure aimed at Front End developers and maintain [Next.js](https://nextjs.org/), have shipped a tonne of cool new features this week. We've still got one day of announcements to go, but so far my favourite things they've introduced are:

- [Vercel KV](https://vercel.com/storage/kv), a serverless Redis solution powered by [Upstash](https://upstash.com/)
- [Vercel Postgres](https://vercel.com/storage/postgres), a serverless SQL database built for the Front End, powered by [Neon](https://neon.tech/)
- [Vercel Blob](https://vercel.com/storage/blob), a solution to upload and serve files at the edge, powered by [Cloudflare R2](https://www.cloudflare.com/lp/pg-r2/)
- [Next.js 13.4](https://nextjs.org/blog/next-13-4) with Server Actions
- [Visual Editing](https://vercel.com/blog/visual-editing), powered by [Sanity](https://www.sanity.io/), which brings a WYSIWYG editing UI that integrates with a headless CMS

With Vercel Postgres, you can write SQL to a fully-managed Postgres database in your React component files:

[@levelsio](https://twitter.com/levelsio) probably [best described](https://twitter.com/levelsio/status/1654053489004417026) it as "index.php is BACK". 😂 However, this time, with all of the [advances in client-side interaction](https://twitter.com/dan_abramov/status/1654323788811468800?s=20) included. Additionally, the [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) syntax means that every variable included in the above SQL statement will be escaped properly, preventing SQL injection attacks. We have made some progress over the last 20 years! 😉

The SQL will never be visible to the client because the above code snippet is using [Server Actions](https://nextjs.org/blog/next-13-4#server-actions-alpha), another feature they've added to Next.js that enables you to mutate data on the server from the client without worrying about creating an in-between API layer yourself, no doubt inspired by [Remix](https://remix.run/).

You will also be able to use Vercel Postgres with your favourite ORM like [Prisma](https://www.prisma.io) or [Drizzle](https://github.com/drizzle-team/drizzle-orm) rather than writing SQL. 

I'm also really excited about the [Visual Editing](https://vercel.com/blog/visual-editing) feature they announced. When I worked at Qantas, one of the main reasons for choosing Adobe Experience Manager (AEM) as the CMS was that content authors found visual editing much easier to use than a headless CMS. As such, it was difficult to ever switch to a modern CMS like [Contentful](https://www.contentful.com) because doing so would degrade the authoring experience even if it made our lives as developers better. Being able to integrate visual editing with a headless CMS is a nice step towards having a great developer experience as well as a great authoring experience. Vercel also state that "We're working on an open specification for content source-mapping that will enable any CMS, ecommerce system or content source to support Visual Editing". Exciting!

The Amazon Prime Video team released a [blog post](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90) this week that's been making the rounds on Twitter. According to the subtitle:

> The move from a distributed microservices architecture to a monolith application helped achieve higher scale, resilience, and reduce costs.

Apparently they reduced costs by 90%! They do say that microservices were good at the beginning to get it off the ground, but this ties into a common theme these days where monolithic apps are coming back into fashion. It reminds me of a time at Qantas where a monorepo got refactored into a combination of shared and isolated repositories to reduce friction between multiple teams working on the same codebase. It was an absolute pain to use! You had to `npm link` three different repos sometimes, compared to the original monorepo where if you needed to add some functionality to the shared components and then consume it in your app, you could do it in one go. Simple is often better!

Thanks for reading! King Charles III's coronation is [tomorrow at 8pm](https://www.abc.net.au/news/2023-05-05/what-time-is-king-charles-coronation-queen-camilla/102285726) Australian time: have a great weekend and long live the King!
