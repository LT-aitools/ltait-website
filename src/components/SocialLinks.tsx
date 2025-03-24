
import { Github, Linkedin, Twitter } from 'lucide-react';

type SocialLinksProps = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  medium?: string;
  website?: string;
  className?: string;
};

const SocialLinks = ({ 
  github, 
  linkedin, 
  twitter, 
  bluesky, 
  medium, 
  website,
  className = ""
}: SocialLinksProps) => {
  return (
    <div className={`flex space-x-3 ${className}`}>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
          <Github size={18} />
        </a>
      )}
      
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
          <Linkedin size={18} />
        </a>
      )}
      
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="social-icon">
          <Twitter size={18} />
        </a>
      )}
      
      {bluesky && (
        <a href={bluesky} target="_blank" rel="noopener noreferrer" aria-label="BlueSky" className="social-icon">
          <svg viewBox="0 0 288 288" height="18" width="18" fill="currentColor">
            <path d="M143.75 52.81a90.94 90.94 0 1 0 91 90.94 90.94 90.94 0 0 0-91-90.94zm-62.87 63A28.12 28.12 0 0 1 109 87.63a28.05 28.05 0 0 1 28.1 28 28.12 28.12 0 0 1-28.1 28.07A28.12 28.12 0 0 1 80.88 115.73zm97.64 76a28.12 28.12 0 0 1-28.07-28.03 28.12 28.12 0 0 1 28.07-28.06 28.09 28.09 0 0 1 28.11 28.06A28.12 28.12 0 0 1 178.52 191.7zm0-55.93a28.12 28.12 0 0 1-28.07-28.04 28.12 28.12 0 0 1 28.07-28.06 28.09 28.09 0 0 1 28.11 28.06 28.12 28.12 0 0 1-28.11 28.04z"/>
          </svg>
        </a>
      )}
      
      {medium && (
        <a href={medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="social-icon">
          <svg viewBox="0 0 24 24" height="18" width="18" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        </a>
      )}
      
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
