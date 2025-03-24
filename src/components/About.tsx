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
            LTAIT is play, made serious: Each week, we each tackle a couple new AI projects and chatbot/vibe code our
            way through them. 
          </p>
          
          <p className="text-lg mb-4">
            Then every Thursday, we log on for a 3-hour show-and-tell (ahem, <em>meeting</em>) to demonstrate what we've built—
            or spectacularly failed to build. No polished tutorials or perfect demonstrations—just real experiences, 
            ugly fails, unexpected wins, and hard-won learnings from two old friends figuring these tools out together.
          </p>
          
          <p className="text-lg mb-6">
            We document it all—transforming our chaotic experiments into blogs and videos (using AI, naturally)—
            so that (1) we remember what we did 😅, and (2) hopefully you can learn from our stumbles.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <SocialLinks 
              medium="https://medium.com/@letstalkaitools" 
              github="https://github.com/LT-aitools" 
              twitter="https://x.com/letstalkaitools" 
              bluesky="https://bsky.app/letstalkaitools" 
              linkedin="https://bsky.app/profile/letstalkaitools.bsky.social"
            />
          </div>
        </div>

        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 hidden lg:block opacity-10">
          <img src="/chatbot.svg" alt="" width="200" height="200" className="text-hot-pink" />
        </div>
      </div>
    </section>
  );
};

export default About;
