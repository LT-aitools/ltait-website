# Lets Talk AI Tools website (co-built with Lovable)

## How did we build this?
- We set the general boundaries for the 4 sections of a single-page website.
- We gave Claude a bunch of background info, our CVs, and some blog post copy, and asked it to write copy for our website. 
- We then made that prompt a bit shorter and added some design specs in, and handed it over to Lovable to code us the website.

Our prompt: 
```
A personal website for two friends exploring generative AI and blogging about their explorations.
- Design should be minimalist style, with some whimsical funk/quirk thrown in via illustration or color/graphic choices, and possibly a self-aware nod to tech/code/ robots;
- Using some or all of our major brand colors - Blush: #fff3ed, Beige: #e0a486, Hot pink: #e64964, Charcoal: #494747
Should have four sections to the single-page site: 
(1) Hero: [Photo] + “Hi, we’re Netta and Charlie” → Short blurb section, larger text size (takes up most of the page, but clear marker to keep scrolling down for more);
(2) About this project → A bit more info (3 paragraphs), plus links to our Medium, Github, BlueSky, X, and Linkedin pages ;
(3) Recent blog posts (“Recent AI adventures”) → An RSS feed from our Medium account;
(4) Who we are → Two bios, side by side (one for Netta, one for Charlie) and then links to our Linkedin + personal websites
```


- We had already previously developed our illustration (using Artbreeder and Faceswap) and our logo (using some other AI tool, and then manually adjusting the output in Figma). We used Canva to develop our color palette.

## Using Lovable

After testing multiple tools (Bolt, Base44, Uizard, UXPilot, Visily), we find Lovable consistently creates the nicest (not boring) sites, that actually adheres to the design brief we give it. 

It designed & coded most of this website, and gave us this preview link: 
**Lovable URL**: https://lovable.dev/projects/07cdbf57-27f0-415a-81b7-ec690739fa35

We then connected it to our Github repo and manually edited some things (e.g. text/copy from Claude) and social media links. (In hindsight, we probably could have asked Cursor to do this.)

Finally, we deployed (with the guiding bot-hands of Claude & ChatGPT) to our domain, using Vercel. 


## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## Like this?

Cool - Please follow our other AI projects at medium.com/@letstalkaitools
