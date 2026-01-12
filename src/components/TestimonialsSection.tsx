import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import TrackedSection from "./TrackedSection";

interface TestimonialsSectionProps {
  showAll?: boolean;
  maxCount?: number;
}

const TestimonialsSection = ({ showAll = false, maxCount = 3 }: TestimonialsSectionProps) => {
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, maxCount);

  return (
    <TrackedSection sectionName="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients. Here's what they have to say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedTestimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="card-gradient shadow-card hover:shadow-hero transition-smooth"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-secondary text-secondary" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-inter font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.projectType}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </TrackedSection>
  );
};

export default TestimonialsSection;
