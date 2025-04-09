import { Subsection } from './ProjectSubsection';

// Sample data with project distribution: 2-6-2
export const subsections: Subsection[] = [
  {
    title: "Content",
    projects: [
      {
        title: "Meeting Video to Content (Netta)",
        description: "We take a Google Meet recording (of our 3-hour meeting) and turn it into a blog post (with screenshots & video clips), a thread for X/BlueSky, and a Linkedin post. Tools used: Granola, Claude, Whisper, Python (Pycharm).",
        links: [
          { text: "Medium blog post walk-through", url: "#" },
          { text: "Prompt: Recording analysis", url: "https://docs.google.com/document/d/18lX8vpfq7teqx3ovPdD9rzJzggcvUSOq/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "Prompt: Blog post", url: "https://docs.google.com/document/d/1ieeeRt_Nqr2bGb4rbSpLeGTisdqND7bY/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "Prompt: Social media posts", url: "https://docs.google.com/document/d/1gd9GxJsnLeL67H7aY474YaXTWRJeGywJ/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "Code: Whisper (timestamped transcription)", url: "#" },
          { text: "Code: Blog post generator", url: "https://docs.google.com/document/d/1gd9GxJsnLeL67H7aY474YaXTWRJeGywJ/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" }
        ]
      },
      {
        title: "Business landscape & opportunity PPT summary (Netta)",
        description: "We researched & summarized the state of digital health services in the mental health space, and summarized it in a PPT, branded for a specific company. Tools used: ChatGPT, Perplexity, Gamma",
        links: [{ text: "Resulting PPT (using Gamma)", url: "https://docs.google.com/presentation/d/1-Emntra93wUaJAeY3alR-tIkc9Fkosgm/edit?slide=id.p1#slide=id.p1" }]
      }
    ]
  },
  {
    title: "Coding",
    projects: [
      {
        title: "Indonesian flashcards web app (Charlie)",
        description: "We drafted a CSV of basic Indonesian vocabulary words for travel and example sentences, and then built a multi-level flashcards game (web app) for studying. The game supports hints, personal mnemonics/notes, and by-category studying/testing, and it runs on a spaced repetition algorithm. Tools used: Claude, ChatGPT, Cursor, Artbreeder, Github Pages / Vercel",
        links: [
          { text: "Live site", url: "http://flashcards.letstalkaitools.com" },
          { text: "Project file (including prompts, screenshots)", url: "https://docs.google.com/document/u/0/d/1t0IVXm1H-umeGsu5aVApqnsihVQLHAQubazSNhXTKEA/edit" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/indonesian-flashcards" }
        ]
      },
      {
        title: "The Great Heaven Census (Charlie)",
        description: "A speculative interactive model (web app) that allows users to estimate the human and canine population of heaven, by choosing a Western religious doctrine, adjudicating on some theological edge cases, and deciding whether all or only good dogs go to heaven. Data is as accurate as possible. (Also: find the dog party easter egg.) Tools used: ChatGPT, Perplexity, Lovable, Cursor, Supabase, Vercel",
        links: [
          { text: "Live site", url: "http://heaven.letstalkaitools.com" },
          { text: "Project file (including prompts, screenshots)", url: "https://docs.google.com/document/d/122FS8fF0EVYA9u7nkY5W-nld5GRT60DTR8bvcD-AFOw/edit?usp=sharing" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/heavenly-paw-ponder" }
        ]
      },
      {
        title: "Property24 scraper (Charlie)",
        description: "We scraped a South African property website, to get historical data and new listings for Charlie's Cape Town neighborhood. Tools used: ChatGPT, Google Colab (Jupyter notebooks), Grok, Google Sheets.",
        links: [{ text: "Code: Github repo", url: "https://github.com/LT-aitools/Property-24-Colab" }]
      },
      {
        title: "AI email digest (Netta)",
        description: "We connected to a news API to set up & trigger a daily email digest on AI-related information. Tools used: Claude, Terminal",
        links: []
      },
      {
        title: "Health & food tracker (Netta)",
        description: "We built a way to WhatsApp a phone number information about your exercise/food and have it automatically log it. You could then receive a weekly summary by WhatsApp, or log on to an interface to review your logged & summarized stats. Tools used: Claude, Lovable, Airtable, Twilio, Heroku",
        links: [{ text: "[in progress] – links and documents to come!", url: "#" }]
      },
      {
        title: "Wealthfront vs S&P analysis (Charlie)",
        description: "We ran a financial what-if analysis, to understand whether it would have been better to invest in VOO (a S&P 500 ETF) versus using Wealthfront's robo-advisor. Tools used: ChatGPT, Grok, Python (Pycharm)",
        links: [{ text: "Code: Github repo", url: "https://github.com/LT-aitools/Wealthfront-vs-VOO" }]
      },
      {
        title: "LTAIT website (Charlie)",
        description: "We created this very website that you're seeing now. Tools used: Claude, Cursor, Lovable, Artbreeder, Vercel",
        links: [
          { text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/d/1SSWqYYkX2C0KgOT2YyWouECFPjW5cbAho9HN9W79IDM/edit?tab=t.0#heading=h.90rf2c8h4v4f" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/ltait-website" }
        ]
      }
    ]
  },
  {
    title: "Visuals & Audio",
    projects: [
      {
        title: "SA Daily News Podcast (Charlie)",
        description: "We built a Github workflow to pull from South African RSS news feeds and scrape newsletters, then a podcast transcript using Gemini API, and finally turn that into an mp3 with the Azure Speech API. We submitted the RSS feed to the primary podcast platforms, so it's searchable on most podcast apps Tools used: Claude, Cursor, Azure Speech, Pixabay, Vercel",
        links: [
          { text: "Podcast website (stream an episode!)", url: "mzansi-podcast.letstalkaitools.com" },
          { text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/d/1FLUfPBhjS8Ymz834HkERXYXsqwcKeHizboMjUy4tE8Q/edit?usp=sharing" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/sa-news-podcast" }
        ]
      },
      {
        title: "Duo portraits (Charlie)",
        description: "We created different AI-generated \"duo portraits\" of Netta and Charlie together. We wanted a range of both illustrated and photorealistic ones. Tools used: Many (most were terrible) but best were Artbreeder, Faceswapper.io, and Lensa AI. ",
        links: [{ text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/d/1Ns1xCSyxwW091qcOmSM5XOMib23ZHrBhuszg3KpFcmQ/edit?usp=sharing" }
        ]
      },
      {
        title: "Children's book (Charlie)",
        description: "We created an illustrated children's book featuring Charlie's niece Zoe and a stuffed animal cheetah (Zoe's favorite animal). Tools used: ChatGPT, Readkidz (also tried other tools that were worse)",
        links: [
          { text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/u/0/d/1Ns1xCSyxwW091qcOmSM5XOMib23ZHrBhuszg3KpFcmQ/edit" },
          { text: "Final book (as Kindle ebook!)", url: "https://www.amazon.com/dp/B0F38GJFQC" }
        ]
      }
    ]
  }
];
