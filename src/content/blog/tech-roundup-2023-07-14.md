---
title: 'Tech roundup - Fri 14 July 2023'
description: 'Threads has passed 100M users in five days since its launch last week, overtaking ChatGPT as the fastest growing app of all time (for comparison, ChatGPT r'
pubDate: 'Jul 14 2023'
---

Threads has passed 100M users in five days since its launch last week, overtaking ChatGPT as the fastest growing app of all time (for comparison, ChatGPT reached 100M users in the first two months, which was a record at the time). It's the dream to have a large user base who you can market a new product to rather than having to grow it from scratch, so it's pretty cool watching this unfold. Users have made more than 95M posts and shared 190M likes on the platform.

Netflix have invented a new way of removing subjects from backgrounds in film & TV. Blue & green screens are the usual way of adding computer-generated backgrounds behind actors currently. The researchers, including [Paul Debevec](https://www.pauldebevec.com) (check out his website: he's done some really cool VFX R&D including papers around the popular technique of capturing 360º imagery on set by filming chrome spheres!), extend this approach by lighting the subjects with magenta light so they are only in the red and blue channels, and then everything in the green channel can be removed. They then film a version of the scene with normal lighting and use AI to relight the magenta version correctly. The technique works for tiny strands of hair, green clothes / objects that are not to be removed, and even transparent objects such as glass. You can read more [here](https://decrypt.co/147986/netflix-ai-green-screen-magenta-visual-effects-movies) and watch an example below:

<iframe width="100%" height="413" src="https://www.youtube.com/embed/jY3-sxU09wc?start=50&feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Netflix invents new green-screen filming method using magenta light"></iframe>

Details about Brazil's CBDC (Central Bank Digital Currency: using crypto tech to improve the Back End of existing government financial systems) [have revealed](https://cointelegraph.com/news/brazil-cbdc-pilot-source-code-can-freeze-funds) that they will likely be able to move, burn, or freeze user funds, similar to the existing banking system where customer bank accounts can be frozen or seized.

### Colours as your crypto wallet backup

When you create a crypto wallet for storing digital currency, you're given a backup consisting of a sequence of English words, called a [seed phrase](https://en.bitcoin.it/wiki/Seed_phrase). You're encouraged to back this up somewhere separate to your secret key so, if you ever lose the key, you can enter the seed phrase to gain access to your wallet again.

A researcher has [come up with a way](https://decrypt.co/148026/bitcoin-private-key-phrase-encoding-colors) of storing this backup as colours instead of words. You can either record the colours themselves or a list of hex codes, and the order doesn't matter. This makes it easier to hide it, as these days more people know that a random piece of paper with 12-24 words on it is likely some valuable crypto information. Last year, someone's seed phrase [was leaked online](https://cointelegraph.com/news/police-body-cam-leaks-suspect-s-seed-phrase-during-vehicle-inspection) via public police body-cam footage. Police searching a man's car found a piece of paper with words written on it that were easily readable in the video.

I tried generating a random seed phrase (not associated with a wallet 🙂) and running it through the tool, [BIP39 Colors](https://iancoleman.io/bip39/):

### Censorship & news on Threads

Conservatives [have reported being censored](https://notthebee.com/article/metas-twitter-clone-launches-immediately-censors-the-masses) on Threads already for posting true information such as cocaine being found at the White House. Apparently when you try to follow such accounts, you see a popup discouraging you from following them:

I successfully followed Donald Trump Jr and DC_Draino without seeing the popup myself, so it would appear that they've changed this behaviour since.

It is no secret though that news and anything controversial is discouraged on Threads. Mark Zuckerberg has talked about how they are "definitely focusing on kindness and making this a friendly place" and Adam Mosseri, the head of Instagram, [said in an interview with Verge](https://www.theverge.com/2023/7/7/23787334/instagram-threads-news-politics-adam-mosseri-meta-facebook) that 'the additional scrutiny, negativity, and integrity risks that come with politics and hard news aren’t worth the “incremental engagement or revenue”'. He went on to add:

> “There are more than enough amazing communities — sports, music, fashion, beauty, entertainment, etc. — to make a vibrant platform without needing to get into politics or hard news.”

I find this interesting, because it wasn't too long ago that Facebook introduced news onto its timeline and pushed it heavily. Adam Mosseri himself ran Facebook News Feed in 2016. My timeline used to be filled with what my friends were up to but has since become a lot less useful, and is really now mostly a stream of news, blog posts, and ads. You have to dig deep into other menus in the app to get a feed of what your friends have been posting. As a result, I don't spend much time using the app anymore.

Additionally, Meta has been in lots of drama over monetisation of its news feed with governments and news organisations in Australia and Canada, to name a few.

My take is that, in addition to competing with Twitter and attracting users who don't use Twitter or Facebook, Threads also serves as a Facebook reboot and a chance to attract users back to, well, something that actually resembles a social network.

## Dev stuff

I started working with AWS DynamoDB this week. You can [run it locally in a Docker container](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html) and I came across a nice macOS GUI called [Dynobase](https://dynobase.dev) for inspecting and interacting with the DB:

### Increase timeout 3x for a test in Playwright

If you have a test in Playwright that takes longer to run than normal, you can use a simple command, `[test.slow()](https://playwright.dev/docs/api/class-test#test-slow-1)`, to triple the default timeout for that test:

```js
import { test, expect } from '@playwright/test'; test('slow test', async ({ page }) => { test.slow(); // ...
});
```

---

I'll leave you with this crypto [tweet](https://twitter.com/i/web/status/1678949628794880001):

Have a great weekend! 😀
