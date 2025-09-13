import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import FAQSection from "@/components/FAQSection";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <SEOHead 
        title="Portfolio - Brian Mawira Projects"
        description="Explore Brian Mawira's portfolio of software projects including APIs, mobile apps, and web applications built for clients worldwide."
        keywords={["Brian Mawira portfolio", "software projects", "API development examples", "Flutter app examples"]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-inter font-bold text-foreground mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Real projects, real results. Here's a showcase of solutions I've built for clients around the world.
            </p>
            <div className="text-center">
              <p className="text-muted-foreground">
                <span className="font-medium text-primary">{projects.length}</span> projects completed • 
                <span className="font-medium text-primary"> 50+</span> happy clients • 
                <span className="font-medium text-primary"> 99.9%</span> uptime average
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {!showAll && projects.length > 6 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAll(true)}
              >
                Show All Projects ({projects.length - 6} more)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Technologies I Love Working With
            </h2>
            <p className="text-lg text-muted-foreground">
              I choose the right tool for each job, but here are some of my favorites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Node.js', icon: '🟢' },
              { name: 'Flutter', icon: '💙' },
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
            ].map((tech) => (
              <div key={tech.name} className="text-center p-4 rounded-lg bg-card card-gradient shadow-card hover:shadow-hero transition-smooth">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Humor Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-inter font-bold text-foreground mb-6">
              Projects That Never Left "Works On My Machine" Phase 🤷‍♂️
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>• A social network for introverts (ironic, I know)</p>
              <p>• An app that automatically codes while you sleep (still debugging the sleep part)</p>
              <p>• A to-do list app that judges your life choices (too harsh for production)</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">
              Don't worry, your project won't end up here. I save my experimental ideas for my own sleepless nights. 😄
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio FAQs */}
      <FAQSection 
        tags={['portfolio']} 
        title="Portfolio Questions"
        description="Common questions about my projects and development approach"
      />

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your requirements and see how I can help bring your ideas to life.
            </p>
            <Button asChild variant="default" size="lg">
              <a href="/contact">Start a Conversation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;