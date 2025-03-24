declare module 'rss-parser' {
  export interface RSSItem {
    title?: string;
    link?: string;
    pubDate?: string;
    contentSnippet?: string;
    content?: string;
    description?: string;
  }

  export interface RSSFeed {
    items: RSSItem[];
  }

  export default class Parser {
    parseURL(url: string): Promise<RSSFeed>;
  }
} 