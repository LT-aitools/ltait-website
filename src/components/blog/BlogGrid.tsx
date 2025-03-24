
import { FC } from 'react';
import BlogPostCard from './BlogPostCard';
import BlogPostSkeleton from './BlogPostSkeleton';
import { BlogPost } from './useMediumFeed';

type BlogGridProps = {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
};

const BlogGrid: FC<BlogGridProps> = ({ posts, loading, error }) => {
  if (loading) {
    return <BlogPostSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <BlogPostCard 
          key={index}
          title={post.title}
          link={post.link}
          pubDate={post.pubDate}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
