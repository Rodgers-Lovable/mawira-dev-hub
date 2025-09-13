import { Service } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="h-full card-gradient shadow-card hover:shadow-hero transition-smooth group cursor-pointer">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-3xl group-hover:scale-110 transition-smooth">
            {service.icon}
          </div>
          <div>
            <CardTitle className="text-lg font-inter">{service.title}</CardTitle>
            {service.pricing && (
              <div className="text-sm text-primary font-medium mt-1">{service.pricing}</div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {service.keywords.slice(0, 4).map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
          {service.keywords.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{service.keywords.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;