import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

interface CalendlyEmbedProps {
  calendlyUrl?: string;
}

const CalendlyEmbed = ({ calendlyUrl = "https://calendly.com/brianmawira" }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded externally
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback to opening Calendly in a new tab
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <Card className="card-gradient shadow-card border-primary/20">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-inter">
          Book a Free 20-Min Consultation
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Skip the back-and-forth emails. Pick a time that works for you and let's discuss your project directly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>20 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-primary" />
            <span>Video call</span>
          </div>
        </div>

        <Button 
          onClick={openCalendly}
          variant="default" 
          size="lg" 
          className="w-full"
        >
          <Calendar className="w-4 h-4" />
          Book Your Free Consultation
        </Button>

        <p className="text-xs text-muted-foreground italic">
          No commitment required. Just a friendly chat about your project.
        </p>
      </CardContent>
    </Card>
  );
};

export default CalendlyEmbed;
