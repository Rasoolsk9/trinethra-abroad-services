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
    <div className="h-full rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
      <p className="line-clamp-5 text-sm leading-relaxed text-foreground/90">"{quote}"</p>

      <div className="mt-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-gold text-gold" : "text-muted"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
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
          <p className="font-heading text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {university}, {country} ({year})
          </p>
        </div>
      </div>
    </div>
  );
};
