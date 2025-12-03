---
title: 'Tech roundup - Fri 23 June 2023'
description: 'AI news

Meta has announced Voicebox, a generative AI model that can help with audio editing, sampling, and styling. It can remove unwanted background audi'
pubDate: 'Jun 23 2023'
---

### AI news

Meta has [announced Voicebox](https://about.fb.com/news/2023/06/introducing-voicebox-ai-for-speech-generation/), a generative AI model that can help with audio editing, sampling, and styling. It can remove unwanted background audio like car horns or dogs barking, and generate speech in different languages.

![](https://about.fb.com/wp-content/uploads/2021/10/meta-favicon.png?fit=16%2C16)

TechCrunch [covered startup Itoka](https://techcrunch.com/2023/06/13/itoka-wants-to-license-ai-generated-music-via-the-blockchain/?cx_testId=6&cx_testVariant=cx_undefined&cx_artPos=1#cxrecs_s), which is trying to provide AI music generation tools coupled with blockchain integration to keep track of licencing.

Vercel have released an [online AI playground](https://sdk.vercel.ai) where you can enter text prompts and compare results from popular AI models such as Open AI's GPT-4, Anthropic's Claude, and Hugging Face's Flan.

Zaha Hadid Architects have trained an AI model to turn crumpled pieces of paper into architectural designs in the style of famous architects:

> zaha hadid architects trained a generative model that renders architectural designs in the style of renowned architects ... from randomly crumpled pieces of paper.
>
> this one is in the style of frank gehry:
>
> 🧵👇 [pic.twitter.com/tS0uKMaAmC](https://t.co/tS0uKMaAmC)
>
> — Siqi Chen (@blader) [June 19, 2023](https://twitter.com/blader/status/1670900940709429254?ref_src=twsrc%5Etfw)

People have been using Midjourney to create common household items in the style of popular brands such as Lamborghini:

> Lamborghini products, midjourney AI
>
> 1. Outdoor BBQ Grill [pic.twitter.com/YYwOuV9L8V](https://t.co/YYwOuV9L8V)
>
> — AK (@_akhaliq) [June 19, 2023](https://twitter.com/_akhaliq/status/1670832069038030873?ref_src=twsrc%5Etfw)

And here's a video using AI to generate a website landing page:

> Played with [@Vercel](https://twitter.com/vercel?ref_src=twsrc%5Etfw) AI. 
>
> Built this landing pages generator prototype with Next.js, Tailwind CSS and OpenAI API in ~30 minutes 🤯 [pic.twitter.com/X4I2QyNN2W](https://t.co/X4I2QyNN2W)
>
> — Giuseppe (@giuseppegurgone) [June 21, 2023](https://twitter.com/giuseppegurgone/status/1671593661853728768?ref_src=twsrc%5Etfw)

### Security

Music festivals are using QR codes on wristbands for a cashless experience, but a security researcher [Inti De Ceukelaire](https://twitter.com/intidc) has pointed out [privacy and security issues](https://inti.io/p/scan-to-scam-how-thieves-can-steal). He analysed the QR codes in photos of people posing with their wristbands and was able to see their order history, potentially report their wristband as lost to transfer credits to the hacker's wristband, and refund leftover credit to the hacker's account instead.

Inti has other interesting hacking examples, such as [tracking cars using licence plates](https://twitter.com/intidc/status/1574263808607997953?s=61&t=l1sW5-Rv95q5cCBFTZuIeA).

### Crypto

The crypto markets are trending upwards again because BlackRock has [filed plans for its own Bitcoin ETF](https://www.wsj.com/articles/bitcoin-bonanza-on-tap-if-blackrock-etf-is-approved-2cb3002). All the previous proposals for a Bitcoin ETF have been rejected by the SEC, but the BlackRock proposal has some differences which has people bullish.

And remember how lots of people were withdrawing their Ethereum once the Shapella upgrade was released earlier this year? Well according to Staking Rewards, staked ETH has still [increased by 11%](https://www.stakingrewards.com/journal/100m-daily-inflows-ethereum-staking-thrives-after-shapella/?utm_source=newsletter&utm_medium=email&utm_campaign=staking-insider-1) since.

### Design

It occured to me as I was dragging a map this week that the macOS dragging hand icon is straight from the '80s! And the thing I love about it is that it is clean and conveys the meaning effortlessly with the open and closed fist states—and which has clearly stood the test of time. Of course, even more famous is the standard pointer icon shown when you hover over web links, also from the same period. This led me down a rabbithole on the [origin of the original Mac pointer cursor](https://ux.stackexchange.com/questions/52503/who-created-the-mac-mickey-pointer-cursor) modelled after Mickey Mouse's hand and a great article by Smithsonian about the designer, Susan Kare, designing icons for the first Apple Macintosh:

![](https://www.smithsonianmag.com/static/smithsonianmag/img/Smithsonianmagazine_apple_touch_icon.bcff19327dab.png)

0:00/1×---

Lots of stuff happening at Figma! They have recently acquired an AI design tools startup, [Diagram](https://t.co/quy4BQKyln); introduced a new [developer mode](https://www.figma.com/blog/introducing-dev-mode/); and added support for variables in designs:

> Figma Variables lets GO. Been working on this for so long with our team over here at [@figma](https://twitter.com/figma?ref_src=twsrc%5Etfw), and I'm so excited to see it finally launch. 
>
> AMA about variables! Happy to answer q's. [#Config2023](https://twitter.com/hashtag/Config2023?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/N9EiZRROW9](https://t.co/N9EiZRROW9)
>
> — Jacob Miller (@pwnies) [June 21, 2023](https://twitter.com/pwnies/status/1671552806078251008?ref_src=twsrc%5Etfw)

### Development

Here's a CSS tip that I tweeted this week:

> Quick [#CSS](https://twitter.com/hashtag/CSS?src=hash&ref_src=twsrc%5Etfw) snippet for truncating long text: [pic.twitter.com/XikVWyDgQr](https://t.co/XikVWyDgQr)
>
> — Steve Harrison (@stevenaharrison) [June 21, 2023](https://twitter.com/stevenaharrison/status/1671404747365179392?ref_src=twsrc%5Etfw)

Code snippet graphics like this are popular on Twitter and LinkedIn, and when I set out to create one, I found that there are a [myriad of tools](https://www.google.com/search?q=code+image+generator) out there to automate this. My favourite, which I used to generate the above, is [Carbon](https://carbon.now.sh/) from Vercel (man, do these guys ever stop?!): you simply enter the source code, select the language, choose styling options, and then download the image:

Adobe also have a handy tool [Express](https://express.adobe.com/tools/convert-to-mp4) where you can do file conversion tasks easily like convert .mov to .mp4: it's free but you have to log in/sign up for an Adobe account.

Vercel have released the [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk), which allows you to easily stream API responses from AI models on the Front End.

Canva have written about how they optimised AWS S3 costs:

![](https://www.canva.dev/_next/static/media/apple-touch-180x180.b6aae4a9.webp)

Something I totally forgot about until John Gruber from [Daring Fireball](https://daringfireball.net) mentioned it this week is that the W3C have been working on a social networking standard since 2018, called [ActivityPub](https://www.w3.org/TR/activitypub/). Facebook are apparently planning to adopt it, which is great, but that hasn't stopped some people on Mastodon from [fighting against it](https://daringfireball.net/linked/2023/06/19/not-that-kind-of-open).

Some interesting open source projects:

- [tinygrad](https://tinygrad.org/) - a simple open source deep learning framework.
- [a16z-infra/ai-getting-started](https://github.com/a16z-infra/ai-getting-started) - a Javascript AI getting started stack for weekend projects, including image/text models, vector stores, auth, and deployment configs.

And finally, Elon Musk and Mark Zuckerberg are toying around with the idea of a [cage fight](https://www.theverge.com/2023/6/21/23769263/mark-zuckerberg-elon-musk-fight-cage-match-worldstar). 🤣🥋

Have a great weekend!
