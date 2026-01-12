import { useEffect, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Target, Wrench, Zap, TrendingUp } from "lucide-react";
import { TrackedExternalLink } from "./TrackedLink";
import { trackPortfolioView, trackCTAClick, trackExternalEngagement } from "@/lib/analytics";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasTracked, setHasTracked] = useState(false);

  // Track portfolio view when card becomes visible
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            trackPortfolioView(project.title, project.category);
            setHasTracked(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [project.title, project.category, hasTracked]);

  const handleCTAClick = () => {
    trackCTAClick(`Discuss Similar Projects - ${project.title}`);
  };

  const handleLiveClick = () => {
    trackCTAClick(`View Live - ${project.title}`);
  };

  const handleGitHubClick = () => {
    trackExternalEngagement('github');
    trackCTAClick(`GitHub - ${project.title}`);
  };

  return (
    <Card 
      ref={cardRef}
      className={`h-full card-gradient shadow-card hover:shadow-hero transition-smooth hover-scale ${
        featured ? 'border-primary/20' : ''
      }`}
      data-project={project.title}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
          {featured && (
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-inter">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Problem Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-inter font-semibold text-foreground">
            <Target className="w-4 h-4 text-destructive" />
            <span>Problem</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">
            {project.problem}
          </p>
        </div>

        {/* Approach Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-inter font-semibold text-foreground">
            <Wrench className="w-4 h-4 text-primary" />
            <span>Approach</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">
            {project.solution}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-inter font-semibold text-foreground">
            <Zap className="w-4 h-4 text-secondary" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2 pl-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Result/Impact */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-inter font-semibold text-foreground">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Result / Impact</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">
            {project.outcome}
          </p>
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 pl-6 mt-2">
              {project.metrics.map((metric, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm" onClick={handleLiveClick}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" onClick={handleGitHubClick}>
              <TrackedExternalLink href={project.githubUrl} platform="github">
                <Github className="w-4 h-4" />
                GitHub
              </TrackedExternalLink>
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
        <div className="pt-4">
          <Button asChild variant="ghost" size="sm" className="w-full text-xs bg-primary/5 hover:bg-primary/10" onClick={handleCTAClick}>
            <a href="/contact">
              Discuss Similar Projects →
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
