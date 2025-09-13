import { Link } from "react-router-dom";
import { SITE_NAME, CONTACT, NAVIGATION } from "@/data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                GitHub
              </a>
              <div className="text-muted-foreground text-sm">{CONTACT.location}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;