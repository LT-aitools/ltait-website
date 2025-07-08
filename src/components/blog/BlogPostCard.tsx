
import { FC } from 'react';
import he from 'he';

type BlogPostCardProps = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const BlogPostCard: FC<BlogPostCardProps> = ({ title, link, pubDate, description }) => {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer" 
      className="glass-card p-6 hover:shadow-md transition-all duration-300 flex flex-col h-full group border-beige"
    >
      <span className="text-sm text-beige/80 mb-2">{formatDate(pubDate)}</span>
      <h3 className="text-xl font-bold mb-2 group-hover:text-hot-pink transition-colors duration-300">{he.decode(title)}</h3>
      <p className="text-charcoal/80 flex-grow">{description}</p>
      <span className="mt-4 inline-flex items-center text-hot-pink">
        Read more
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 transition-transform">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
};

export default BlogPostCard;
