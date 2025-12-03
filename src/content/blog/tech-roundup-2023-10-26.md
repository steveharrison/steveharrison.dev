---
title: 'Photorealistic AI avatars, poisoning generative AI, Apple Event 31 Oct, and CSS :has/:where/:is selectors'
description: 'You can now create AI avatars for training videos with D-ID. But these are not your average 3D avatars from Meta or Apple. They look photorealistic. Welcom'
pubDate: 'Oct 26 2023'
---

You can now create AI avatars for training videos with [D-ID](https://www.d-id.com/). But these are not your average 3D avatars from Meta or Apple. They look photorealistic. Welcome to a new (uncanny?) world of mandatory training videos!

AI researchers have [come up with a novel approach](https://www.technologyreview.com/2023/10/23/1082189/data-poisoning-artists-fight-generative-ai/) for content creators to battle unwanted image scraping to train AI models: authors can add invisible changes to the pixels in their images that then 'poison' the AI model so that dogs become cats, cars become cows, etc.:

From the [paper](https://arxiv.org/abs/2310.13828):

> Data poisoning attacks manipulate training data to introduce unexpected behaviors into machine learning models at training time. For text-to-image generative models with massive training datasets, current understanding of poisoning attacks suggests that a successful attack would require injecting millions of poison samples into their training pipeline. In this paper, we show that poisoning attacks can be successful on generative models. We observe that training data per concept can be quite limited in these models, making them vulnerable to prompt-specific poisoning attacks, which target a model's ability to respond to individual prompts.
>
> We introduce Nightshade, an optimized prompt-specific poisoning attack where poison samples look visually identical to benign images with matching text prompts. Nightshade poison samples are also optimized for potency and can corrupt an Stable Diffusion SDXL prompt in <100 poison samples. Nightshade poison effects "bleed through" to related concepts, and multiple attacks can composed together in a single prompt. Surprisingly, we show that a moderate number of Nightshade attacks can destabilize general features in a text-to-image generative model, effectively disabling its ability to generate meaningful images. Finally, we propose the use of Nightshade` and similar tools as a last defense for content creators against web scrapers that ignore opt-out/do-not-crawl directives, and discuss possible implications for model trainers and content creators.

---

Apple is [set to announce](https://www.apple.com/au/apple-events/) some new Mac products on Tue 31 Oct! It's the first time they've held an event in the evening, which means we will be able to watch it in Australia at 11am!

![](https://www.apple.com/favicon.ico)

            
                
                
                    
                        
                            
                        
                    
                
                
                    
                        
                            
                                
                            
                        
                        
                            
                                
                                
                            
                        
                        0:00
                        
                            /0:13
                        
                        
                        1×
                        
                            
                                
                            
                        
                        
                            
                                
                            
                        
                        
                    
                
            
            
        ---

- Monday.com have announced that they [built their own database](https://monday.com/ap/mondaydb) instead of choosing one off the shelf.
- Meta [has a serverless platform](https://engineercodex.substack.com/p/meta-xfaas-serverless-functions-explained) called [XFaaS](https://dl.acm.org/doi/abs/10.1145/3600006.3613155) that they claim is more efficient than existing serverless options like AWS Lambda.
- You can take a [sneak peak at the docs](https://stylex-docusaurus.vercel.app/) for Meta's CSS-in-JS framework, StyleX, which is being used on the new Facebook website. It hasn't been released yet.
- Laser beams have been [deflected off nothing but air](https://thedebrief.org/laser-beams-deflected-off-of-nothing-but-air-for-first-time-ever-in-breakthrough-patent-pending-process/) for the first time, while maintaining the beam's strength and integrity.

---

There's a [great write-up](https://webkit.org/blog/13096/css-has-pseudo-class/) on the WebKit blog of some of the things that the new CSS selector `:has` unlocks. My favourite is this example of being able to change the layout for card components that have images:

The `:where` and `:is` CSS selectors were introduced in 2021, but I just discovered them! They're supported in all major browsers and provide some interesting ways of combining selectors for readability, but also for controlling specificity:

The specificity of the `:where` selector is always zero, so you can use it to wrap selectors like `:not`, which increase specificity, if you wish to use them without impacting the selector's specificity.

Learn more here:
[https://web.dev/articles/css-is-and-where
](https://web.dev/articles/css-is-and-where)[https://css-tricks.com/almanac/selectors/w/where/
](https://css-tricks.com/almanac/selectors/w/where/)[https://developer.mozilla.org/en-US/docs/Web/CSS/:where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)

And Safari's Web Inspector now visualises border radius (8px here) in the box model diagram!

---

Publishing the newsletter and podcast every week has been a bit hectic, so starting with this one, I'll just post as I get the time.
