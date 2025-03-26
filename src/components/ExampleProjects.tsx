
import { useState, useEffect, useRef } from 'react';
import ProjectSubsection from './projects/ProjectSubsection';
import { subsections } from './projects/projectsData';

const ExampleProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="example-projects" className="py-16 md:py-24 px-4 bg-blush relative">
      <div 
        ref={projectsRef}
        className={`max-container transition-opacity duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      >
        <h2 className="section-title mb-12">Example Projects and Links</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column - Content and Visual */}
          <div className="space-y-8">
            {/* Content subsection */}
            <ProjectSubsection subsection={subsections[0]} />
            
            {/* Visual subsection */}
            <ProjectSubsection subsection={subsections[2]} />
          </div>
          
          {/* Second column - Coding */}
          <div className="space-y-6">
            <ProjectSubsection subsection={subsections[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleProjects;
