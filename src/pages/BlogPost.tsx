import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // Try to fetch the HTML file from the public/blog directory
        const response = await fetch(`/blog/${slug}.html`);
        
        if (!response.ok) {
          throw new Error(`Blog post not found: ${slug}`);
        }
        
        const html = await response.text();
        setHtmlContent(html);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err instanceof Error ? err.message : "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blush">
        <div className="text-center">
          <div data-testid="loading-spinner" className="animate-spin rounded-full h-12 w-12 border-b-2 border-hot-pink mx-auto mb-4"></div>
          <p className="text-charcoal">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blush">
        <div className="text-center max-w-md mx-auto px-6">
          <img 
            src="/platypus_shrugging.png" 
            alt="Confused platypus shrugging"
            className="w-48 h-48 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-charcoal">Oops!</h1>
          <p className="text-xl text-charcoal/80 mb-8">
            Looks like our AI forgot to code that page... 🤖✨
          </p>
          <a 
            href="/" 
            className="inline-block bg-hot-pink text-white px-6 py-3 rounded-lg hover:bg-hot-pink/90 transition-colors font-semibold"
          >
            Take me home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-blush py-8"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default BlogPost;
