
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "Exploring the Limits of AI Creativity",
    link: "#",
    pubDate: "2023-11-15",
    description: "Join us as we dive into the creative potential of AI, pushing the boundaries of what machines can create."
  },
  {
    title: "The Future of AI in Everyday Life",
    link: "#",
    pubDate: "2023-12-02",
    description: "A look at how AI is shaping our world and what the future might hold for its integration into our daily lives."
  },
  {
    title: "AI and Ethics: A Delicate Balance",
    link: "#",
    pubDate: "2024-01-20",
    description: "Exploring the ethical considerations surrounding AI development and deployment."
  }
];

export const useMediumFeed = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Using a proxy to avoid CORS issues
        // Replace "username" with your actual Medium username
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const mediumRssUrl = encodeURIComponent('https://medium.com/feed/@username');
        
        const response = await fetch(`${proxyUrl}${mediumRssUrl}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const data = await response.json();
        
        if (!data.contents) {
          throw new Error('No content returned from RSS feed');
        }
        
        // Parse XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        
        const parsedPosts: BlogPost[] = [];
        
        items.forEach((item) => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '#';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          
          // Extract description from content:encoded or description
          let description = '';
          const contentEncoded = item.querySelector('content\\:encoded')?.textContent || '';
          
          if (contentEncoded) {
            // Remove HTML tags to get plain text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentEncoded;
            description = tempDiv.textContent || '';
            // Truncate to a reasonable length
            description = description.substring(0, 150) + '...';
          } else {
            description = item.querySelector('description')?.textContent || '';
          }
          
          parsedPosts.push({ title, link, pubDate, description });
        });
        
        setPosts(parsedPosts.slice(0, 3)); // Get the latest 3 posts
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError('Could not load blog posts. Using sample data instead.');
        toast({
          title: "Could not load blog posts",
          description: "Using sample data instead",
          variant: "destructive",
        });
        // Fallback to mock data
        setPosts(FALLBACK_POSTS);
        setLoading(false);
      }
    };
    
    fetchMediumPosts();
  }, [toast]);

  return { posts, loading, error };
};
