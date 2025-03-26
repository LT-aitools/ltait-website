
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Project type definition
type Project = {
  title: string;
  description: string;
  links: { text: string; url: string }[];
};

// Subsection type definition
type Subsection = {
  title: string;
  projects: Project[];
};

const ExampleProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Sample data with updated project distribution: 2-6-2
  const subsections: Subsection[] = [
    {
      title: "Content",
      projects: [
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        }
      ]
    },
    {
      title: "Coding",
      projects: [
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        }
      ]
    },
    {
      title: "Visual",
      projects: [
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        },
        {
          title: "Title",
          description: "Description",
          links: [{ text: "Example link", url: "#" }]
        }
      ]
    }
  ];
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subsections.map((subsection, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-hot-pink">{subsection.title}</h3>
              
              {subsection.projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="glass-card hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-charcoal/90">{project.description}</p>
                    <ul className="space-y-2">
                      {project.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-hot-pink hover:text-hot-pink/80 transition-colors"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            <span>{link.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleProjects;
