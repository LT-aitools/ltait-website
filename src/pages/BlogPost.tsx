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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hot-pink mx-auto mb-4"></div>
          <p className="text-charcoal">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blush">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-charcoal">404</h1>
          <p className="text-xl text-charcoal/80 mb-4">Blog post not found</p>
          <a href="/" className="text-hot-pink hover:text-hot-pink/80 transition-colors underline">
            Return to Home
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
