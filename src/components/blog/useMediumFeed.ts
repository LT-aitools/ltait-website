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
        const response = await fetch('/api/medium-feed');
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const data = await response.json();
        setPosts(data);
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
