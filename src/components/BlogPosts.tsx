
import { useState, useEffect, useRef } from 'react';

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const blogRef = useRef<HTMLDivElement>(null);
  
  // This is a mockup of blog posts since we can't fetch from Medium directly due to CORS
  const mockPosts: BlogPost[] = [
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
  
  useEffect(() => {
    // In a real implementation, you would fetch the RSS feed here
    // For this demo, we'll use the mock data after a simulated delay
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    
    if (blogRef.current) {
      observer.observe(blogRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <section id="blog" className="bg-white relative">
      <div 
        ref={blogRef}
        className={`max-container transition-opacity duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title">Recent AI adventures</h2>
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-hot-pink text-hot-pink rounded-md hover:bg-hot-pink hover:text-white transition-all duration-300 hidden md:block"
          >
            View all posts →
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse-slow">
              <svg 
                className="w-12 h-12 text-hot-pink" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <a 
                key={index} 
                href={post.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-6 hover:shadow-md transition-all duration-300 flex flex-col h-full group border-beige"
              >
                <span className="text-sm text-beige/80 mb-2">{formatDate(post.pubDate)}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-hot-pink transition-colors duration-300">{post.title}</h3>
                <p className="text-charcoal/80 flex-grow">{post.description}</p>
                <span className="mt-4 inline-flex items-center text-hot-pink">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 transition-transform">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-hot-pink text-hot-pink rounded-md hover:bg-hot-pink hover:text-white transition-all duration-300 inline-block"
          >
            View all posts →
          </a>
        </div>
      </div>
      
      <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-beige via-hot-pink to-beige opacity-10"></div>
    </section>
  );
};

export default BlogPosts;
