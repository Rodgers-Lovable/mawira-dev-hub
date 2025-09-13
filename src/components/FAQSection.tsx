import { useState } from "react";
import { FAQ, faqs } from "@/data/faqs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQSectionProps {
  tags?: string[];
  title?: string;
  description?: string;
}

const FAQSection = ({ tags, title = "Frequently Asked Questions", description }: FAQSectionProps) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  // Filter FAQs based on tags
  const filteredFAQs = tags 
    ? faqs.filter(faq => faq.tags.some(tag => tags.includes(tag)))
    : faqs;

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  if (filteredFAQs.length === 0) return null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-foreground mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <Card key={faq.id} className="card-gradient shadow-card">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/30 transition-smooth"
                onClick={() => toggleFAQ(faq.id)}
              >
                <CardTitle className="flex items-center justify-between text-lg font-inter">
                  <span>{faq.question}</span>
                  <span className={`text-primary transition-smooth ${openFAQ === faq.id ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </CardTitle>
              </CardHeader>
              {openFAQ === faq.id && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;