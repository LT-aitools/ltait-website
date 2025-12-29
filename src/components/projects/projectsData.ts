import { Subsection } from './ProjectSubsection';

// Sample data with project distribution: 2-6-2
export const subsections: Subsection[] = [
  {
    title: "Content",
    projects: [
      {
        title: "Meeting Video to Content (Charlie & Netta)",
        description: "We built an automated workflow for Claude Code agents to turn a Google Meet recording (of our 3-hour meeting) into a published blog post (with screenshots & video clips), a thread for X/BlueSky, and a Linkedin post. Tools used: Granola, Claude, Claude Code, Cursor, Whisper, YouTube API",
        links: [
          { text: "Code: Whisper (timestamped transcription)", url: "https://github.com/LT-aitools/transcript" },
          { text: "v1 project doc (semi-automated)", url: "https://docs.google.com/document/d/1gd9GxJsnLeL67H7aY474YaXTWRJeGywJ/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "v2 project doc (automated agents)", url: "https://docs.google.com/document/d/1-TD6evdmGj9sGJNQw9p8jLEsE7w4agRxzoyTMw8rJd4/edit?usp=sharing" }
        ]
      },
      {
        title: "SA Daily News Podcast (Charlie)",
        description: "We built a Github workflow to pull from South African RSS news feeds and scrape newsletters, use that data to write a podcast transcript using Gemini API, and finally turn that into an mp3 with the Azure Speech API. Finally, we (manually) submitted the RSS feed link to podcast platforms, so it's searchable on most podcast apps. Tools used: Claude, Cursor, Azure Speech, Pixabay, Vercel",
        links: [
          { text: "Podcast website (stream an episode!)", url: "mzansi-podcast.letstalkaitools.com" },
          { text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/d/1FLUfPBhjS8Ymz834HkERXYXsqwcKeHizboMjUy4tE8Q/edit?usp=sharing" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/sa-news-podcast" }
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
    title: "Vibe Coding",
    projects: [
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
        title: "Montessori Games Creator (Netta)",
        description: "An interactive platform for creating and accessing Montessori-inspired educational games and activities. The tool helps parents and educators develop customized learning materials. Tools used: GeminiAPI, Lovable, Cursor, Claude",
        links: [
          { text: "Live site", url: "https://montessorigames.letstalkaitools.com/" }
        ]
      },
      {
        title: "AI email digest (Netta)",
        description: "We connected to a news API to set up & trigger a daily email digest on AI-related information. Tools used: Claude, Terminal"
      },
      {
        title: "Health & food tracker (Netta)",
        description: "We built a way to WhatsApp a phone number information about your exercise/food and have it automatically log it. You could then receive a weekly summary by WhatsApp, or log on to an interface to review your logged & summarized stats. Tools used: Claude, Lovable, Airtable, Twilio, Heroku",
        links: [{ text: "[in progress] – links and documents to come!", url: "#" }]
      },
      {
        title: "Vaginal Discharge Analyzer (Netta)",
        description: "A web application that helps women analyze vaginal discharge patterns for health monitoring and awareness. The tool provides educational information and assessment features. Tools used: Base44, Claude",
        links: [
          { text: "Live site", url: "https://app--women-health-assistant-72fe3b01.base44.app" }
        ]
      },
      {
        title: "Indonesian flashcards web app (Charlie)",
        description: "We drafted a CSV of basic Indonesian vocabulary words for travel and example sentences, and then built a multi-level flashcards game (web app) for studying. The game supports hints, personal mnemonics/notes, and by-category studying/testing, and it runs on a spaced repetition algorithm. Tools used: Claude, ChatGPT, Cursor, Artbreeder, Github Pages / Vercel",
        links: [
          { text: "Live site", url: "http://flashcards.letstalkaitools.com" },
          { text: "Project file (including prompts, screenshots)", url: "https://docs.google.com/document/u/0/d/1t0IVXm1H-umeGsu5aVApqnsihVQLHAQubazSNhXTKEA/edit" },
          { text: "Code: Github repo", url: "https://github.com/LT-aitools/indonesian-flashcards" }
        ]
      }
    ]
  },
  {
    title: "Visuals",
    projects: [
      {
        title: "Duo portraits (Charlie)",
        description: "We created different AI-generated \"duo portraits\" of Netta and Charlie together. We wanted a range of both illustrated and photorealistic ones. Tools used: Many (most were terrible) but best were Artbreeder, Faceswapper.io, and Lensa AI. ",
        links: [{ text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/d/1Ns1xCSyxwW091qcOmSM5XOMib23ZHrBhuszg3KpFcmQ/edit?usp=sharing" }
        ]
      },
      {
        title: "Children's book (Charlie)",
        description: "We created an illustrated children's book featuring Charlie's niece Zoe and a stuffed animal cheetah (Zoe's favorite animal). Did this by stringing together tools in early 2025-- but now would be easy using Google Storybook. Tools used: ChatGPT, Readkidz, Midjourney",
        links: [
          { text: "Project file (including prompts, screenshots, dead ends)", url: "https://docs.google.com/document/u/0/d/1Ns1xCSyxwW091qcOmSM5XOMib23ZHrBhuszg3KpFcmQ/edit" },
          { text: "Final book (as Kindle ebook!)", url: "https://www.amazon.com/dp/B0F38GJFQC" }
        ]
      }
    ]
  },
  {
    title: "Data",
    projects: [
      {
        title: "Messy spreadsheets ETL (Charlie)",
        description: "We helped a local NGO build an ETL pipeline: from messy spreadsheets into a clean database. As part of this, ran a series of evals against most major LLM models. Tools used: Cursor, OpenAI/Anthropic API, Python",
      },
      {
        title: "Property24 scraper (Charlie)",
        description: "We scraped a South African property website, to get historical data and new listings for Charlie's Cape Town neighborhood. Tools used: ChatGPT, Google Colab (Jupyter notebooks), Grok, Google Sheets.",
        links: [{ text: "Code: Github repo", url: "https://github.com/LT-aitools/Property-24-Colab" }]
      },
      {
        title: "Wealthfront vs S&P analysis (Charlie)",
        description: "We ran a financial what-if analysis, to understand whether it would have been better to invest in VOO (a S&P 500 ETF) versus using Wealthfront's robo-advisor. Tools used: ChatGPT, Grok, Python (Pycharm)",
        links: [{ text: "Code: Github repo", url: "https://github.com/LT-aitools/Wealthfront-vs-VOO" }]
      },
      {
        title: "Automating Employee Drive Reports with VBA in Excel (Netta)",
        description: "We built an Excel VBA macro that automates monthly manual work to map and calculate miles driven per employee, distinguishing between personal and work-related usage. Includes a button to email all employees their total monthly kilometers driven over the past year for progress tracking. Tools used: ChatGPT, Claude",
      }
    ]
  }
];