import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Card className={`h-full card-gradient shadow-card hover:shadow-hero transition-smooth hover-scale ${
      featured ? 'border-primary/20' : ''
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs mb-2">
            {project.category}
          </Badge>
          {featured && (
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
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
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <h4 className="text-sm font-inter font-semibold mb-2 text-foreground">Impact</h4>
          <p className="text-sm text-muted-foreground">{project.outcome}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                Case Study
              </a>
            </Button>
          )}
        </div>

        {/* CTA for similar work */}
        <div className="border-t pt-4 mt-4">
          <Button asChild variant="ghost" size="sm" className="w-full text-xs">
            <a href="/contact">
              Work with me on something similar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;