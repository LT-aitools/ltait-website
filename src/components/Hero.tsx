import { useEffect, useRef, useState } from 'react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      heroElement.style.setProperty('--mouse-x', `${x * 100}%`);
      heroElement.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = '/Main-Illustration.jpg';
    img.onload = () => {
      setImageLoaded(true);
      // Show content after 1.2 seconds (when image is almost done scaling)
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1200);
      return () => clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #fff3ed 0%, rgba(255, 243, 237, 0.8) 60%, rgba(224, 164, 134, 0.2) 100%)',
        backgroundSize: '200% 200%',
        transition: 'background-position 0.3s ease-out'
      }}
    >
      <div className="max-container text-center relative z-10">
        <div className={`w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-hot-pink/30 shadow-lg bg-white p-1 ${imageLoaded ? 'scale-100' : 'scale-[2.5]'}`} style={{ transition: 'transform 1500ms ease-in-out' }}>
          <img 
            src="/Main-Illustration.jpg" 
            alt="Netta and Charlie" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div 
          className={`transition-opacity duration-1500 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-4 bg-gradient-to-r from-hot-pink to-charcoal bg-clip-text text-transparent">
            Hi, we're Netta and Charlie
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-charcoal/90">
            ...just two product gals (and our increasingly opinionated chatbots) exploring Gen AI tools together. We turn creativity and rudimentary coding into weekly AI adventures worth sharing.
          </p>
          
          <SocialLinks 
            medium="https://medium.com/@letstalkaitools" 
            github="https://github.com/LT-aitools" 
            twitter="https://x.com/letstalkaitools" 
            bluesky="https://bsky.app/letstalkaitools" 
            linkedin="https://bsky.app/profile/letstalkaitools.bsky.social"
            className="justify-center mb-12"
          />
          
          <div className="animate-float mt-6 flex justify-center w-full">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-hot-pink"
            >
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-beige/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
