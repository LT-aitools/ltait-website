
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
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-hot-pink">{subsection.title}</h3>
      
      {subsection.projects.map((project, projectIndex) => (
        <ProjectCard key={projectIndex} project={project} />
      ))}
    </div>
  );
};

export default ProjectSubsection;
