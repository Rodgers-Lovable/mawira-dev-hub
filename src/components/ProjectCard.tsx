import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full card-gradient shadow-card hover:shadow-hero transition-smooth">
      <CardHeader>
        <CardTitle className="text-xl font-inter">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-inter font-semibold mb-2 text-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <h4 className="text-sm font-inter font-semibold mb-2 text-foreground">Outcome</h4>
          <p className="text-sm text-muted-foreground">{project.outcome}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;