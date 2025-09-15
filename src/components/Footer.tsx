
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="/LTAIT-Logo_plain.png" 
                alt="Let's Talk AI Tools Logo" 
                className="h-10 w-auto mr-3" 
              />
              <h3 className="text-xl font-bold">Let's Talk AI Tools</h3>
            </div>
            <p className="mt-2 text-white/70 max-w-md">
              👩‍💻 Just two product gals (and their chatbots) exploring Gen AI tools
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks 
              medium="https://medium.com/@letstalkaitools" 
              github="https://github.com/LT-aitools" 
              twitter="https://x.com/letstalkaitools" 
              bluesky="https://bsky.app/letstalkaitools" 
              linkedin="https://bsky.app/profile/letstalkaitools.bsky.social"
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
