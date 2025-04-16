import { useState, useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';

const Bios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const biosRef = useRef<HTMLDivElement>(null);
  
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
    
    if (biosRef.current) {
      observer.observe(biosRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="who" className="bg-gradient-to-b from-hot-pink/5 to-beige/20">
      <div 
        ref={biosRef}
        className={`max-container transition-opacity duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      >
        <h2 className="section-title text-center mx-auto">Who we are</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Netta's Bio */}
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-hot-pink flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src="Netta_Levran.jpg" 
                  alt="Netta photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-hot-pink">Netta Levran</h3>
                <p className="text-charcoal/80 mt-1">Product Innovation Director by day, AI experimenter by night. </p>
              </div>
            </div>
            
            <p className="mb-4 flex-grow">
              Based in Tel Aviv, Netta brings her background in digital health, 
              patient engagement platforms, and a deep appreciation for human-centered design to 
              our AI adventures. When not debugging code she didn't write, she's organizing women's 
              events, running, or speaking multiple languages (sometimes to the AI, with varying results).
            </p>
            
            <div className="mt-4">
              <SocialLinks 
                linkedin="https://www.linkedin.com/in/nettalevran/" 
                website="https://nettalevran.com/"
              />
            </div>
          </div>
          
          {/* Charlie's Bio */}
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-hot-pink flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src="Charlie_Lau.jpg" 
                  alt="Charlie photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-hot-pink">Charlie Lau</h3>
                <p className="text-charcoal/80 mt-1">Startup veteran, growth whisperer, and AI tinkerer. </p>
              </div>
            </div>
            
            <p className="mb-4 flex-grow">
              Based in Cape Town, Charlie has spent over a decade in early-stage startups across product, design, data, and 
              marketing. When not trying to convince AI to scrape property websites or generate coherent blog posts, she's probably 
              hanging upside down (aerial acrobatics), scuba diving, or planning her next trip (70+ countries and counting!)
            </p>
            
            <div className="mt-4">
              <SocialLinks 
                linkedin="https://www.linkedin.com/in/charlotteslau/" 
                website="https://charlottelau.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bios;
