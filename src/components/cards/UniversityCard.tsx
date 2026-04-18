import { Link } from "react-router-dom";
import { MapPin, BadgeCheck, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UniversityCardProps {
  name: string;
  slug: string;
  country: string;
  countrySlug: string;
  city: string;
  established: number;
  recognition: string[];
  image?: string;
  ranking?: string;
}

export const UniversityCard = ({
  name,
  slug,
  country,
  countrySlug,
  city,
  established,
  recognition,
  image,
  ranking,
}: UniversityCardProps) => {
  return (
    <div className="card-medical overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-white/50" />
          </div>
        )}
        {ranking && (
          <Badge className="absolute top-3 right-3 bg-gold text-foreground font-semibold">
            {ranking}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-lg leading-tight line-clamp-2">
            {name}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{city}, {country}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Est. {established}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {recognition.slice(0, 3).map((rec) => (
            <Badge key={rec} variant="secondary" className="text-xs">
              <BadgeCheck className="h-3 w-3 mr-1" />
              {rec}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/university/${slug}/apply`}>View Details</Link>
          </Button>
          <Button asChild className="flex-1 bg-secondary hover:bg-secondary/90">
            <Link to={`/university/${slug}/apply`}>Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
