import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import FAQSection from "@/components/FAQSection";
import { projects, categories } from "@/data/projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <SEOHead 
        title="Projects & Portfolio - Brian Mawira Software Engineer"
        description="Explore the portfolio of Brian Mawira, a fullstack engineer building SaaS platforms, APIs, websites, and mobile apps for clients locally and abroad."
        keywords={["Brian Mawira portfolio", "software projects", "SaaS platforms", "API development", "mobile apps", "web development Kenya"]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold text-foreground mb-6">
              Projects That Tell My Story in <span className="text-primary">Code</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              From SaaS platforms to websites and mobile apps — here's a curated collection of my work that showcases real solutions for real problems.
            </p>
            <Button asChild variant="default" size="lg">
              <a href="/contact">Work With Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-inter font-bold text-foreground mb-12 text-center">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className="transition-smooth"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No projects found in this category. 
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 bg-muted/30">
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
              <div key={tech.name} className="text-center p-4 rounded-lg bg-card card-gradient shadow-card hover:shadow-hero transition-smooth hover-scale">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
              </div>
            ))}
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
              Like What You See? Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to turn your ideas into reality? Let's discuss your project requirements and create something that makes a difference.
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