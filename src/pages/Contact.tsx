import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/data/constants";
import { useToast } from "@/components/ui/use-toast";
import { initEmailJS, sendContactEmail, isEmailJSConfigured } from "@/lib/emailjs";
import contactBackground from "@/assets/contact-background.jpg";
import coffeeFun from "@/assets/coffee-code-fun.jpg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { toast } = useToast();

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: selectedService,
      message: formData.get('message') as string,
    };

    try {
      const result = await sendContactEmail(contactData);

      if (result.success) {
        toast({
          title: "Message sent! 🚀",
          description: isEmailJSConfigured() 
            ? "I'll get back to you within 24-48 hours!"
            : "Demo mode - EmailJS not configured yet. Add your credentials to enable real emails.",
        });
        
        // Reset form
        (e.currentTarget as HTMLFormElement).reset();
        setSelectedService("");
      } else {
        toast({
          title: "Failed to send message",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact Brian Mawira - Hire Freelance Software Engineer"
        description="Get in touch with Brian Mawira for your software development needs. Book a free consultation or send a message. Available worldwide."
        keywords={["contact Brian Mawira", "hire software engineer", "freelance developer Kenya", "get quote", "book consultation"]}
      />

      <JsonLd 
        data={{
          type: "WebPage",
          name: "Contact Brian Mawira",
          description: "Get in touch for software development projects",
          url: "https://brianmawira.dev/contact",
          author: {
            name: "Brian Mawira",
            url: "https://brianmawira.dev"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${contactBackground})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-inter font-bold text-foreground mb-6">
              Let's Talk About Your Project
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? I'd love to hear about it. Book a free consultation or send me a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-inter">Let's Talk About Your Project</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24-48 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="What do you need help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="api-development">API Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="database">Database Design</SelectItem>
                        <SelectItem value="consulting">Technical Consulting</SelectItem>
                        <SelectItem value="maintenance">Application Maintenance</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Brief *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-inter">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href={`mailto:${CONTACT.email}`}
                        className="text-primary hover:text-primary/80 transition-smooth"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">💼</div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a 
                        href={CONTACT.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-smooth"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🐙</div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <a 
                        href={CONTACT.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-smooth"
                      >
                        View my code
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{CONTACT.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-inter">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email Response:</span>
                      <span className="font-medium text-primary">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Quotes:</span>
                      <span className="font-medium text-primary">2-3 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="font-medium text-primary">Open for new projects</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * Unless I'm deep in debugging mode at 3 AM 🐛
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
                What Happens After You Click Send? 📬
              </h2>
              
              {/* Fun Visual Element */}
              <div className="mb-8">
                <img 
                  src={coffeeFun} 
                  alt="What happens after you click send - coffee and code time" 
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-card"
                />
                <p className="text-sm text-muted-foreground mt-4 italic">
                  "I get excited, grab fresh coffee, and start thinking about your project ☕"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📬</div>
                  <CardTitle className="text-lg">1. I Receive Your Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Your message lands in my inbox (and I definitely don't refresh it every 5 minutes... okay, maybe I do).
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🤔</div>
                  <CardTitle className="text-lg">2. I Analyze & Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    I carefully review your requirements and do some initial research to understand your project scope.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📞</div>
                  <CardTitle className="text-lg">3. We Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    I send you a detailed response with questions, suggestions, and next steps. Then we schedule a call to discuss further.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <FAQSection 
        tags={['contact']} 
        title="Contact Questions"
        description="Common questions about getting in touch and working together"
      />

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-foreground mb-6">
              Not Ready for a Full Project Yet?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              No problem! I'm happy to answer quick questions, provide technical advice, or discuss your ideas 
              without any commitment. Sometimes a 15-minute conversation can save hours of development time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${CONTACT.email}?subject=Quick Question`}>
                  Ask a Quick Question
                </a>
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

export default Contact;
