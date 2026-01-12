import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { SITE_NAME, CONTACT, NAVIGATION } from "@/data/constants";
import { TrackedExternalLink } from "./TrackedLink";
import { trackExternalEngagement } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    trackExternalEngagement('email');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-inter font-bold text-foreground mb-4">{SITE_NAME}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting robust APIs, beautiful mobile apps, and scalable web solutions for businesses worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="font-inter font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-inter font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>API Development</div>
              <div>Mobile Apps</div>
              <div>Web Applications</div>
              <div>Database Design</div>
              <div>Technical Consulting</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-inter font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={handleEmailClick}
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                {CONTACT.email}
              </a>
              <TrackedExternalLink
                href={CONTACT.linkedin}
                platform="linkedin"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                LinkedIn
              </TrackedExternalLink>
              <TrackedExternalLink
                href={CONTACT.github}
                platform="github"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                GitHub
              </TrackedExternalLink>
              <div className="text-muted-foreground text-sm">{CONTACT.location}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span className="text-primary">{SITE_NAME}</span>. All rights reserved.
            </p>
            
            {/* Privacy-friendly analytics disclosure */}
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Shield className="w-3 h-3" />
              <span>Privacy-friendly analytics • No cookies • DNT respected</span>
            </div>

            <p className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;