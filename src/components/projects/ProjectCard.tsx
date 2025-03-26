import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Project type definition
export type Project = {
  title: string;
  description: string;
  links: { text: string; url: string }[];
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Split the title into main title and person's name
  const titleMatch = project.title.match(/(.*?)\s*\((.*?)\)$/);
  const mainTitle = titleMatch ? titleMatch[1].trim() : project.title;
  const personName = titleMatch ? titleMatch[2] : '';

  return (
    <Card className="glass-card hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">
          {mainTitle}
          {personName && <span className="font-normal"> ({personName})</span>}
        </CardTitle>
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
  );
};

export default ProjectCard;
