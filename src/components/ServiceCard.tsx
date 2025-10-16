import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group h-full bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <div className="p-6">
        {/* Icon */}
        <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
          <Icon className="h-7 w-7 text-secondary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;
