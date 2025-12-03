---
title: 'Tech roundup - Fri 14 April 2023'
description: 'Hello from Singapore! It seems like a lot has happened in tech this week, so I''ll be doing a recap followed by what I''m reading (spoiler: it''s a book about'
pubDate: 'Apr 15 2023'
---

Hello from Singapore! It seems like a lot has happened in tech this week, so I'll be doing a recap followed by what I'm reading (spoiler: it's a book about Amazon) and what I've been learning about Front End crypto development on Ethereum.

## News

Speaking about Ethereum, it's past USD$2100 now, it finally passed the $2K mark since crashing in 2022. It's probably related to the successful Shanghai upgrade that happened yesterday. With this upgrade, people will be able to unstake Ethereum tokens, which will hopefully incentivise more people to stake ETH.

Diving into some numbers, as of writing, there is 1.1m ETH pending withdrawal, which is $2.32b USD, compared to 17.39m ETH ($36.87b USD) currently staked. They have designed the upgrade to avoid a bankrun, so it will take some time before everyone gets their ETH—over the next 11hrs, around 44.2k ETH ($93.6m USD) will be unlocked. And for reference, only around 15.4% of the total supply of Ethereum is staked currently. You can see all of these analytics in real-time with [this dashboard by TokenUnlocks](https://token.unlocks.app/ethereum-shanghai), pretty cool!

A bit of Australian startup news: MilkRun, the Sydney-based delivery service to get groceries in 20min or less, has shut down as of today. They started in 2021 with $75M funding, one of the biggest raises in Aussie VC history, but were losing money to sign up new customers and faced increased competition from Coles, Woolies, and Uber. It makes sense because I've recently been ordering groceries in Sydney on UberEats and getting them in around 20-30min. Harris Farm has also done a partnership with Uber to deliver your order in around an hour, so these offerings are super smooth and don't require you to sign up for another app. Kudos to MilkRun though for getting the competition to up its game!

Lots of Twitter news this week. They're launching subscriptions in the US! They're also working on rolling it out internationally. My understanding is that you can now put some tweets behind a paywall and charge for access. They've also partnered with eToro to allow users to view, buy, and sell stocks on Twitter. And a BBC reporter got absolutely wrecked in an interview with Elon Musk, [check out the video](https://twitter.com/jeffreypeel/status/1646148806591774722?s=61&t=-EoTqGh2HzmU8q8Gm_kjxQ) and remember to always be able to back up vague assertions with data, especially when you're speaking with someone like Elon haha!

Amazon released [AWS Bedrock](https://aws.amazon.com/bedrock/), which is a generative AI toolkit that allows developers to use pre-trained models including Stable Diffusion, Claude, and Jurassic-2. More details in [this TechCrunch article](https://techcrunch.com/2023/04/13/with-bedrock-amazon-enters-the-generative-ai-race/).

## What I've been reading

I've been reading "The Everything Store", a book about Jeff Bezos and the story of Amazon. It's a great read—highly recommend—and something that I keep coming back to in the book is how leaders like Bezos, Musk, Jobs, etc. are able to sniff out BS and also understand areas that they are not subject matter experts in extremely well. In one example, Bezos told a team with far more experience than himself that they were doing it wrong and showed them why; they later said that while it was irritating, they couldn't fault anything he said and that he was right. I guess this is why these guys get to where they are and why there are few companies like Amazon, Tesla, and Apple.

If you're into crypto and finance, check out the [Money Stuff](https://t.co/BbSBb5xXUj) email newsletter by Matt Levine (he writes for Bloomberg), it's great reading!

## What I've been learning

I've been wanting to learn more about Ethereum development for ages, so I finally got started.

I set myself the challenge of creating a simple React app that allows you to connect a wallet and display some basic info about that wallet. And I got it working! I found [`create-eth-app`](https://github.com/PaulRBerg/create-eth-app), a CLI tool that essentially adds a bunch of dApp tooling on top of a standard Create React App base.

`create-eth-app` uses a library called [useDApp](https://github.com/TrueFiEng/useDApp/) which has a React hook-based interface for getting account details like user balance. Really nice dev experience!

`create-eth-app` also provides some basic integration with The Graph, which I'm going to explore next. I'm so used to thinking about The Graph in terms of the GRT token and the incentive system for nodes to index content, but obviously, it's a prime suspect to work with on the Front End since you can query all this data with GraphQL! (Yeah, it does have it in the name! 😂)

Along the way, I discovered Truffle, a collection of tools for smart contract development. This includes Ganache, which runs an Ethereum blockchain locally for dev and testing. You can start it with a Terminal command or via their Mac app, similar to using Docker locally. I did the [Truffle quickstart](https://trufflesuite.com/docs/truffle/quickstart/) and successfully deployed an example smart contract, MetaCoin. I could query balances and transfer the coin between different example ETH addresses. Also, I love the names: Truffle, Ganache, they even have a Front End framework that hooks into Redux called Drizzle (OK, that's stretching it a bit, but the framework seems interesting)!

A lot of this stuff is changing rapidly and some of the tutorials assume existing knowledge, so it wasn't smooth sailing, but nothing you can't debug your way out of. I was encountering issues with the Truffle quickstart project only to realise I hadn't updated to the latest version since I last installed it a few months ago, and my issue was fixed once I upgraded. So make sure you're using the latest versions of dependencies.

There's a good [list of different frameworks](https://ethereum.org/en/developers/docs/frameworks/) and [tutorials](https://ethereum.org/en/developers/tutorials/) on the Ethereum website.

## Upcoming articles

I've got a few articles in the works: I'm going to write about the Web Share API, where you can trigger a native share dialog with JavaScript, and also cover how to set up those nice link preview cards that get displayed below URLs when you send them in messaging apps like iMessage or Twitter. I've noticed some quirks in iMessage where it actually strips parts of the title that you've provided in the `og:title` meta tag, so stay tuned for more info on this.

Well that's a wrap! I hope you've enjoyed this post, subscribe to my newsletter for more content like this and have a good weekend! 🙂

Sources:
[https://www.theblock.co/post/226356/ethereum-pending-withdrawals-2-billion](https://www.theblock.co/post/226356/ethereum-pending-withdrawals-2-billion)
[https://token.unlocks.app/ethereum-shanghai](https://token.unlocks.app/ethereum-shanghai)
[https://www.afr.com/technology/milkrun-to-close-doors-all-staff-made-redundant-20230411-p5czj3](https://www.afr.com/technology/milkrun-to-close-doors-all-staff-made-redundant-20230411-p5czj3)
