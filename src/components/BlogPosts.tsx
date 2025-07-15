import { useRef, useState, useEffect } from 'react';
import { Rss } from 'lucide-react';
import BlogGrid from './blog/BlogGrid';
import { useMediumFeed } from './blog/useMediumFeed';
import he from 'he';

const BlogPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const blogRef = useRef<HTMLDivElement>(null);
  const { posts, loading, error } = useMediumFeed();
  
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

  return (
    <section id="blog" className="bg-white relative pb-24 md:pb-32">
      <div 
        ref={blogRef}
        className={`max-container transition-opacity duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title">Recent AI adventures</h2>
          <a 
            href="https://medium.com/@letstalkaitools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-hot-pink text-hot-pink rounded-md hover:bg-hot-pink hover:text-white transition-all duration-300 hidden md:block"
          >
            View all posts →
          </a>
        </div>
        
        <BlogGrid posts={posts} loading={loading} error={error} />
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://medium.com/@letstalkaitools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-hot-pink text-hot-pink rounded-md hover:bg-hot-pink hover:text-white transition-all duration-300 inline-block"
          >
            View all posts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
