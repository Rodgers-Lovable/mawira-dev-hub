import SEOHead from "@/components/SEOHead";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <>
      <SEOHead 
        title="Services - Software Development Services by Brian Mawira"
        description="Professional software development services including API development, mobile apps, web applications, and technical consulting by Brian Mawira."
        keywords={["software development services", "API development", "Flutter apps", "web development", "technical consulting"]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-inter font-bold text-foreground mb-6">
              Services I Offer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From concept to deployment and beyond, I provide comprehensive software development services 
              that help businesses grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <a href="/contact">Discuss Your Project</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:brian@brianmawira.dev">Get a Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
                How I Work
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven process that ensures quality results and clear communication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle className="text-lg">1. Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We discuss your goals, requirements, and constraints to ensure I understand exactly what you need.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📐</div>
                  <CardTitle className="text-lg">2. Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    I create a detailed project plan with timelines, milestones, and technical specifications.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">⚡</div>
                  <CardTitle className="text-lg">3. Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Regular updates, code reviews, and iterative development ensure quality and alignment.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🚀</div>
                  <CardTitle className="text-lg">4. Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Deployment, testing, documentation, and ongoing support to ensure smooth operation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What I Don't Do Section (Humor) */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="card-gradient shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-inter text-foreground">
                  What I Don't Do 🚫
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>• Fix your printer (that's a different kind of debugging)</p>
                  <p>• Build apps that automatically do your homework (nice try, though)</p>
                  <p>• Code while skydiving (attempted once, terrible Wi-Fi at 10,000 feet)</p>
                  <p>• Create AI that becomes sentient and takes over the world (I have enough bugs to manage)</p>
                  <p>• Work on projects that involve time travel (temporal bugs are the worst kind)</p>
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic text-center">
                  But everything else? Let's talk! 😄
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services FAQs */}
      <FAQSection 
        tags={['services']} 
        title="Service Questions"
        description="Common questions about my development services and process"
      />

      {/* Pricing Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-inter text-foreground mb-4">
                  Transparent Pricing Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-inter font-semibold mb-3 text-foreground">Fixed-Price Projects</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For well-defined projects with clear requirements, I provide fixed quotes with milestones. 
                      You know exactly what you'll pay upfront.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold mb-3 text-foreground">Hourly Consulting</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For ongoing support, code reviews, or exploratory work, I charge by the hour. 
                      Perfect for maintenance and strategic guidance.
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground text-sm italic">
                    All prices include detailed documentation, basic testing, and 30 days of bug fixes. 
                    No hidden fees, no surprises.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every great project starts with a conversation. Let's discuss your needs and see how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <a href="/contact">Start a Project</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:brian@brianmawira.dev">Ask a Question</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;