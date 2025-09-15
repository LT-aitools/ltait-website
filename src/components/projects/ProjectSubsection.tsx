
import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';

// Subsection type definition
export type Subsection = {
  title: string;
  projects: Project[];
};

type ProjectSubsectionProps = {
  subsection: Subsection;
};

const ProjectSubsection = ({ subsection }: ProjectSubsectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreThanTwo = subsection.projects.length > 2;
  const displayedProjects = isExpanded ? subsection.projects : subsection.projects.slice(0, 2);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-hot-pink">{subsection.title}</h3>
      
      {displayedProjects.map((project, projectIndex) => (
        <ProjectCard key={projectIndex} project={project} />
      ))}
      
      {hasMoreThanTwo && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-hot-pink hover:text-hot-pink/80 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Show less
              <svg className="w-4 h-4 transform rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          ) : (
            <>
              Show more...
              <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProjectSubsection;
