import { useEffect } from "react";

interface PersonSchema {
  type: "Person";
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  image?: string;
  sameAs: string[];
  address: {
    addressLocality: string;
    addressCountry: string;
  };
  knowsAbout: string[];
}

interface ServiceSchema {
  type: "Service";
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
}

interface WebPageSchema {
  type: "WebPage";
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    url: string;
  };
}

interface FAQSchema {
  type: "FAQPage";
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

type SchemaData = PersonSchema | ServiceSchema | WebPageSchema | FAQSchema;

interface JsonLdProps {
  data: SchemaData;
}

const JsonLd = ({ data }: JsonLdProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `jsonld-${data.type.toLowerCase()}`;
    
    let structuredData: object;

    switch (data.type) {
      case "Person":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Person",
          name: data.name,
          jobTitle: data.jobTitle,
          url: data.url,
          email: data.email,
          image: data.image,
          sameAs: data.sameAs,
          address: {
            "@type": "PostalAddress",
            addressLocality: data.address.addressLocality,
            addressCountry: data.address.addressCountry
          },
          knowsAbout: data.knowsAbout
        };
        break;

      case "Service":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Person",
            name: data.provider.name,
            url: data.provider.url
          },
          areaServed: data.areaServed,
          serviceType: data.serviceType
        };
        break;

      case "WebPage":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: data.name,
          description: data.description,
          url: data.url,
          author: {
            "@type": "Person",
            name: data.author.name,
            url: data.author.url
          }
        };
        break;

      case "FAQPage":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map(q => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer
            }
          }))
        };
        break;

      default:
        structuredData = {};
    }

    script.textContent = JSON.stringify(structuredData);

    // Remove existing script with same id if exists
    const existing = document.getElementById(script.id);
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

export default JsonLd;
