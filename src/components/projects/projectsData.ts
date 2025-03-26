
import { Subsection } from './ProjectSubsection';

// Sample data with project distribution: 2-6-2
export const subsections: Subsection[] = [
  {
    title: "Content",
    projects: [
      {
        title: "Meeting Video to Content",
        description: "We take a Google Meet recording (of our 3-hour meeting) and turn it into a blog post (with screenshots & video clips), a thread for X/BlueSky, and a Linkedin post. Tools used: Granola, Claude, Whisper, Python (Pycharm).",
        links: [
          { text: "Medium blog post walk-through", url: "#" },
          { text: "Prompts: Recording analysis", url: "https://docs.google.com/document/d/18lX8vpfq7teqx3ovPdD9rzJzggcvUSOq/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "Prompts: Blog post", url: "https://docs.google.com/document/d/1ieeeRt_Nqr2bGb4rbSpLeGTisdqND7bY/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" },
          { text: "Prompts: Social media posts", url: "#" },
          { text: "Code: Whisper (timestamped transcription)", url: "#" },
          { text: "Code: Blog post generator", url: "https://docs.google.com/document/d/1gd9GxJsnLeL67H7aY474YaXTWRJeGywJ/edit?usp=sharing&ouid=102883591774527281863&rtpof=true&sd=true" }
        ]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      }
    ]
  },
  {
    title: "Coding",
    projects: [
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      }
    ]
  },
  {
    title: "Visual",
    projects: [
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      },
      {
        title: "Title",
        description: "Description",
        links: [{ text: "Example link", url: "#" }]
      }
    ]
  }
];
