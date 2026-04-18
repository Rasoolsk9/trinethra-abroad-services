import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Building2, BadgeCheck } from "lucide-react";

interface CountryCardProps {
  name: string;
  slug: string;
  flag: string;
  universities: number;
  duration: string;
  recognition: string;
  tuitionRange: string;
}

export const CountryCard = ({
  name,
  slug,
  flag,
  universities,
  duration,
  recognition,
  tuitionRange,
}: CountryCardProps) => {
  return (
    <Link
      to={`/mbbs-in-${slug}`}
      className="group overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95" />
        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-3">
          <span className="text-3xl">{flag}</span>
          <h3 className="font-heading text-lg font-bold text-white">MBBS in {name}</h3>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Building2 className="h-4 w-4 text-primary" />
            <span>{universities}+ Universities</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <BadgeCheck className="h-4 w-4 text-success" />
          <span className="text-muted-foreground">{recognition}</span>
        </div>

        <div className="border-t border-border pt-3">
          <p className="text-xs text-muted-foreground">Tuition Fee (per year)</p>
          <p className="font-heading text-base font-bold text-primary sm:text-lg">{tuitionRange}</p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-primary transition-colors group-hover:text-secondary">
            Explore Universities
          </span>
          <ArrowRight className="h-4 w-4 text-primary transition-all group-hover:translate-x-1 group-hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
};
