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
        // Using rss2json which provides CORS support
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@letstalkaitools'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const data = await response.json();
        
        if (!data.items) {
          throw new Error('No items returned from RSS feed');
        }
        
        const parsedPosts = data.items.map((item: { title?: string; link?: string; pubDate?: string; content?: string }) => {
          // Create a temporary div to parse the HTML content
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = item.content;
          
          // Get all paragraphs
          const paragraphs = tempDiv.getElementsByTagName('p');
          // Get the second paragraph if it exists, otherwise use the first one or empty string
          const secondParagraph = paragraphs.length > 1 ? paragraphs[1].textContent : 
                                paragraphs.length > 0 ? paragraphs[0].textContent : '';
          
          return {
            title: item.title || '',
            link: item.link || '#',
            pubDate: item.pubDate || '',
            description: secondParagraph 
              ? secondParagraph.substring(0, 150) + '...'
              : ''
          };
        });
        
        setPosts(parsedPosts.slice(0, 4)); // Get the latest 4 posts
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
