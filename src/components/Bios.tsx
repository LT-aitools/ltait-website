
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
                  src="/public/lovable-uploads/cec9ca00-b4ab-493e-b45a-96370cd9ccdd.png" 
                  alt="Netta" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-hot-pink">Netta</h3>
                <p className="text-charcoal/80 mt-1">AI explorer with a background in linguistics and human-computer interaction</p>
              </div>
            </div>
            
            <p className="mb-4 flex-grow">
              Passionate about language models and how AI understands and generates human language. 
              With expertise in both computational linguistics and UX research, Netta brings a unique 
              human-centered perspective to our AI experiments.
            </p>
            
            <div className="mt-4">
              <SocialLinks 
                linkedin="https://linkedin.com/in/netta" 
                website="https://netta-website.com"
              />
            </div>
          </div>
          
          {/* Charlie's Bio */}
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-hot-pink flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src="/public/lovable-uploads/7d747753-7076-4e79-a8e6-bf6879f73551.png" 
                  alt="Charlie" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-hot-pink">Charlie</h3>
                <p className="text-charcoal/80 mt-1">Tech enthusiast with a love for creative solutions and a knack for AI development</p>
              </div>
            </div>
            
            <p className="mb-4 flex-grow">
              With a background in software engineering and a passion for AI, Charlie loves to push the 
              boundaries of what's possible with generative models. Always tinkering with new technologies 
              and finding innovative applications for emerging AI tools.
            </p>
            
            <div className="mt-4">
              <SocialLinks 
                linkedin="https://linkedin.com/in/charlie" 
                website="https://charlie-website.com"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-24 mt-12"></div>
    </section>
  );
};

export default Bios;
