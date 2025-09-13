import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Home, User, Briefcase, Mail } from "lucide-react";
import notFoundIllustration from "@/assets/404-illustration.jpg";

const NotFound = () => {
  const oneLiners = [
    "Oops! You've wandered off the map.",
    "Looks like this page took a coffee break ☕.",
    "404: The code gremlins ate this page 🐛.",
    "This isn't the page you're looking for... but nice try 👀.",
    "Lost in the matrix again? Follow me back.",
    "Even great developers hit dead ends sometimes 🚧."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % oneLiners.length);
        setIsVisible(true);
      }, 300); // Half of transition duration for smooth crossfade
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [oneLiners.length]);

  const navigationLinks = [
    { 
      to: "/", 
      icon: Home, 
      label: "Home Page", 
      description: "Back to the beginning" 
    },
    { 
      to: "/portfolio", 
      icon: Briefcase, 
      label: "Portfolio", 
      description: "See my projects" 
    },
    { 
      to: "/about", 
      icon: User, 
      label: "About Me", 
      description: "Learn my story" 
    },
    { 
      to: "/contact", 
      icon: Mail, 
      label: "Contact", 
      description: "Let's connect" 
    }
  ];

  return (
    <>
      <SEOHead 
        title="Page Not Found (404) - Brian Mawira"
        description="Oops! The page you're looking for doesn't exist. Navigate back to explore Brian Mawira's portfolio and projects."
        keywords={["404 error", "page not found", "Brian Mawira portfolio"]}
      />

      <div className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hero Section with Rotating Messages */}
            <div className="mb-12">
              <div className="mb-8">
                <img 
                  src={notFoundIllustration} 
                  alt="Lost developer illustration - 404 page not found" 
                  className="w-64 h-64 object-cover rounded-2xl mx-auto mb-8 shadow-card"
                />
              </div>
              
              <div className="mb-6">
                <h1 
                  className={`text-4xl lg:text-5xl font-inter font-bold text-foreground transition-all duration-300 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                  }`}
                  style={{ minHeight: '3.5rem' }} // Prevent layout shift
                >
                  {oneLiners[currentIndex]}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or may have been moved. 
                Don't worry though — I can help you find what you need!
              </p>
            </div>

            {/* Navigation Suggestions */}
            <div className="mb-12">
              <h2 className="text-2xl font-inter font-bold text-foreground mb-8">
                Where would you like to go?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {navigationLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Card key={link.to} className="card-gradient shadow-card hover:shadow-hero transition-smooth hover-scale">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <IconComponent className="w-8 h-8 text-primary mx-auto" />
                        </div>
                        <h3 className="font-inter font-semibold text-foreground mb-2">
                          {link.label}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {link.description}
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link to={link.to}>
                            Visit
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <Button asChild variant="default" size="lg" className="text-lg px-8 py-3">
                <Link to="/">
                  Take Me Home 🏠
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Or use the navigation above to explore different sections
              </p>
            </div>

            {/* Fun Developer Touch */}
            <div className="mt-16 pt-8 border-t border-border">
              <Card className="card-gradient shadow-card max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-inter font-semibold text-foreground mb-2">
                    Developer Pro Tip
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If you typed this URL manually, double-check for typos. 
                    If you clicked a link to get here, that's a bug I need to fix! 
                    Let me know via the contact page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
