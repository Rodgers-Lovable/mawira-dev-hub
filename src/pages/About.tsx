import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { SITE_NAME, CONTACT } from "@/data/constants";

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Brian Mawira"
        description="Learn about Brian Mawira, a passionate software engineer from Kenya specializing in APIs, mobile apps, and web development."
        keywords={["about Brian Mawira", "software engineer background", "developer story"]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-inter font-bold text-foreground mb-6">
              About {SITE_NAME}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate software engineer turning ideas into reliable, scalable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient shadow-card">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-inter font-bold text-foreground mb-6">My Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My journey into software development started like many others — with curiosity and a broken computer. 
                    Instead of calling for help, I decided to figure out what went wrong. That moment of discovery, 
                    when I fixed my first bug, sparked a passion that has only grown stronger over the years.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Today, I'm a freelance software engineer based in Nairobi, Kenya, but my work reaches clients across the globe. 
                    I specialize in building robust APIs that can handle thousands of requests, mobile applications that work seamlessly 
                    across platforms, and web solutions that users actually enjoy using.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What drives me isn't just writing code — it's solving real problems for real people. Whether it's helping 
                    a startup launch their first product or optimizing an existing system to handle growth, I find joy in turning 
                    complex challenges into elegant solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-inter font-bold text-foreground text-center mb-12">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-inter font-semibold mb-3">Backend Development</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Node.js & Express</li>
                    <li>• Python & Django</li>
                    <li>• REST & GraphQL APIs</li>
                    <li>• Database Design & Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-inter font-semibold mb-3">Mobile Development</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Flutter & Dart</li>
                    <li>• Cross-platform Apps</li>
                    <li>• Offline-first Architecture</li>
                    <li>• Native Performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🌐</div>
                  <h3 className="text-xl font-inter font-semibold mb-3">Frontend Development</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• React & TypeScript</li>
                    <li>• Vue.js & Nuxt</li>
                    <li>• Responsive Design</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-inter font-bold text-foreground text-center mb-12">
              Fun Facts About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🐛</div>
                  <h3 className="text-lg font-inter font-semibold mb-3">Debugging Philosophy</h3>
                  <p className="text-muted-foreground">
                    I believe every bug is just a feature request from a parallel universe. 
                    My record for continuous debugging? 14 hours (with strategic coffee breaks).
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-inter font-semibold mb-3">Global Mindset</h3>
                  <p className="text-muted-foreground">
                    Working with clients from different time zones has made me a master of asynchronous communication 
                    — both in code and in real life.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-lg font-inter font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    I read technical documentation for fun (yes, really). Currently exploring AI/ML integrations 
                    and serverless architectures.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-lg font-inter font-semibold mb-3">Coffee Dependency</h3>
                  <p className="text-muted-foreground">
                    My code runs on coffee. I've calculated that each cup produces approximately 
                    47 lines of quality code (results may vary).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to turn your ideas into reality? I'd love to hear about your project and discuss how we can make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <a href={`mailto:${CONTACT.email}`}>Send Me an Email</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;