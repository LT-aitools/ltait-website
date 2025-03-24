import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

const parser = new Parser();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const feed = await parser.parseURL('https://medium.com/feed/@letstalkaitools');
    
    // Transform the feed items to match our BlogPost type
    const posts = feed.items.slice(0, 4).map(item => ({
      title: item.title || '',
      link: item.link || '#',
      pubDate: item.pubDate || '',
      description: item.contentSnippet || ''
    }));

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    res.status(500).json({ message: 'Error fetching Medium feed' });
  }
} 