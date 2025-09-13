import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { SITE_NAME, SITE_TAGLINE, CONTACT } from "@/data/constants";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import brianPortrait from "@/assets/brian-potrait.png";
import techStackVisual from "@/assets/tech-stack-visual.jpg";

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <SEOHead 
        title="Home"
        description="Brian Mawira - Freelance Software Engineer in Kenya. Expert in APIs, mobile apps, and web development. Available worldwide."
        keywords={["software engineer Kenya", "freelance developer", "API development", "Flutter apps"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-6">
                  Hi, I'm <span className="text-yellow-300">{SITE_NAME}</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-white/90">
                  {SITE_TAGLINE}
                </p>
                <p className="text-lg mb-12 text-white/80 leading-relaxed">
                  I turn complex problems into elegant solutions. From scalable APIs to beautiful mobile apps, 
                  I help businesses grow with reliable, maintainable code.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-3">
                    <Link to="/portfolio">View My Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 bg-white/10 text-white hover:bg-white/10">
                    <Link to="/contact">Let's Talk</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src={brianPortrait} 
                    alt="Brian Mawira - Software Engineer" 
                    className="w-80 h-80 object-cover rounded-full shadow-hero border-4 border-white/20"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Building Software That Actually Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Based in {CONTACT.location.split('(')[0].trim()}, I've spent years crafting software solutions 
              that don't just look good in demos — they perform in the real world. Whether it's an API handling 
              thousands of requests or a mobile app that works offline, I focus on reliability and user experience.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some projects I'm particularly proud of. Each one solved real problems for real people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="default">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-4">How I Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial concept to ongoing maintenance, I provide end-to-end development services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          {/* Tech Stack Visual */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-inter font-bold text-foreground mb-8">Technologies I Work With</h3>
            <div className="flex justify-center">
              <img 
                src={techStackVisual} 
                alt="Technology stack including React, Node.js, Flutter, MongoDB, PostgreSQL" 
                className="max-w-2xl w-full h-auto rounded-lg shadow-card"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-inter text-foreground">
                  When I'm Not Coding 🎯
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl mb-3">☕</div>
                    <h4 className="font-inter font-semibold mb-2">Coffee Enthusiast</h4>
                    <p className="text-sm text-muted-foreground">
                      I measure code quality in cups of coffee consumed during debugging sessions
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🎵</div>
                    <h4 className="font-inter font-semibold mb-2">Music Lover</h4>
                    <p className="text-sm text-muted-foreground">
                      Lo-fi beats while coding, Afrobeat when celebrating successful deployments
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="font-inter font-semibold mb-2">Explorer</h4>
                    <p className="text-sm text-muted-foreground">
                      Always curious about new places, technologies, and ways to solve problems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you have a detailed specification or just an idea, I'd love to discuss how we can bring it to life. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${CONTACT.email}`}>
                  Email Me Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;