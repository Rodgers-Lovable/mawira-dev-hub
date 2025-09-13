import { useEffect } from "react";
import { SEO } from "@/data/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage,
  canonical 
}: SEOHeadProps) => {
  useEffect(() => {
    // Set title
    const fullTitle = title ? `${title} | ${SEO.defaultTitle}` : SEO.defaultTitle;
    document.title = fullTitle;

    // Set meta description
    const metaDescription = description || SEO.defaultDescription;
    updateMetaTag("description", metaDescription);

    // Set keywords
    const metaKeywords = keywords ? [...keywords, ...SEO.keywords] : SEO.keywords;
    updateMetaTag("keywords", metaKeywords.join(", "));

    // Set Open Graph tags
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", metaDescription, "property");
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:url", canonical || window.location.href, "property");
    updateMetaTag("og:image", ogImage || `${SEO.siteUrl}/og-image.jpg`, "property");

    // Set Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", metaDescription);
    updateMetaTag("twitter:image", ogImage || `${SEO.siteUrl}/og-image.jpg`);

    // Set canonical URL
    updateCanonicalTag(canonical || window.location.href);

  }, [title, description, keywords, ogImage, canonical]);

  const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  const updateCanonicalTag = (href: string) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
      document.head.appendChild(element);
    }
    element.setAttribute("href", href);
  };

  return null;
};

export default SEOHead;