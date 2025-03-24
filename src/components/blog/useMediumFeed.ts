
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export const useMediumFeed = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Using a proxy to avoid CORS issues
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const mediumRssUrl = encodeURIComponent('https://medium.com/feed/@letstalkaitools');
        
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
        setError('Could not load blog posts');
        toast({
          title: "Could not load blog posts",
          description: "Blog section has been hidden",
          variant: "destructive",
        });
        setLoading(false);
      }
    };
    
    fetchMediumPosts();
  }, [toast]);

  return { posts, loading, error };
};
