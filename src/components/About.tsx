
import { useState, useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="bg-beige/20 relative">
      <div 
        ref={aboutRef}
        className={`max-container ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      >
        <h2 className="section-title">About this project</h2>
        
        <div className="glass-card p-8 md:p-10 max-w-3xl">
          <p className="text-lg mb-4">
            We created this space to document our journey exploring the fascinating world of generative AI. 
            As AI technologies continue to evolve at a breathtaking pace, we wanted to share our experiments, 
            insights, and occasional mishaps.
          </p>
          
          <p className="text-lg mb-4">
            Our backgrounds in technology and design give us a unique perspective on both the technical aspects 
            and the human-centered implications of AI. We're particularly interested in how these tools can 
            enhance creativity rather than replace it.
          </p>
          
          <p className="text-lg mb-6">
            Join us as we navigate this rapidly changing landscape, testing new models, creating innovative 
            applications, and reflecting on what it all means for our future. We believe in open collaboration 
            and learning in public, so feel free to connect with us on any of the platforms below.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <SocialLinks 
              medium="https://medium.com"
              github="https://github.com" 
              twitter="https://twitter.com" 
              bluesky="https://bsky.app" 
              linkedin="https://linkedin.com"
            />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 15C151.797 15 193.75 56.9531 193.75 108.75C193.75 160.547 151.797 202.5 100 202.5C48.2031 202.5 6.25 160.547 6.25 108.75C6.25 56.9531 48.2031 15 100 15ZM100 25C53.8281 25 16.25 62.5781 16.25 108.75C16.25 154.922 53.8281 192.5 100 192.5C146.172 192.5 183.75 154.922 183.75 108.75C183.75 62.5781 146.172 25 100 25ZM147.656 58.9844C150.781 58.9844 153.125 61.3281 153.125 64.4531C153.125 67.5781 150.781 69.9219 147.656 69.9219C144.531 69.9219 142.188 67.5781 142.188 64.4531C142.188 61.3281 144.531 58.9844 147.656 58.9844ZM52.3438 58.9844C55.4688 58.9844 57.8125 61.3281 57.8125 64.4531C57.8125 67.5781 55.4688 69.9219 52.3438 69.9219C49.2188 69.9219 46.875 67.5781 46.875 64.4531C46.875 61.3281 49.2188 58.9844 52.3438 58.9844ZM100 111.719C85.5469 111.719 73.4375 123.828 73.4375 138.281C73.4375 141.406 76.0938 144.062 79.2188 144.062C82.3438 144.062 85 141.406 85 138.281C85 130.234 91.9531 123.281 100 123.281C108.047 123.281 114.844 130.234 114.844 138.281C114.844 141.406 117.656 144.062 120.781 144.062C123.906 144.062 126.406 141.406 126.406 138.281C126.406 123.828 114.453 111.719 100 111.719ZM100 62.1094C91.4844 62.1094 84.5312 69.0625 84.5312 77.5781C84.5312 86.0938 91.4844 93.0469 100 93.0469C108.516 93.0469 115.469 86.0938 115.469 77.5781C115.469 69.0625 108.516 62.1094 100 62.1094Z" fill="#E64964" fillOpacity="0.1"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
