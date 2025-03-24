
import { Github, Linkedin, Twitter } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-hot-pink rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-white">N&C</span>
              </div>
              <h3 className="text-xl font-bold">Netta & Charlie</h3>
            </div>
            <p className="mt-2 text-white/70 max-w-md">
              Exploring the fascinating world of generative AI and sharing our insights along the way.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks 
              github="https://github.com" 
              medium="https://medium.com" 
              twitter="https://twitter.com" 
              bluesky="https://bsky.app" 
              linkedin="https://linkedin.com"
              className="mb-4"
            />
            <p className="text-white/60 text-sm">
              © {currentYear} Netta & Charlie. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
