import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  university: string;
  country: string;
  year: string;
  quote: string;
  rating: number;
  image?: string;
}

export const TestimonialCard = ({
  name,
  university,
  country,
  year,
  quote,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="card-medical p-6 space-y-4">
      {/* Quote */}
      <p className="text-muted-foreground leading-relaxed italic">"{quote}"</p>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-gold text-gold" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div>
          <p className="font-heading font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {university}, {country} ({year})
          </p>
        </div>
      </div>
    </div>
  );
};
