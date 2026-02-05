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
      className="group card-medical overflow-hidden"
    >
      {/* Flag/Header */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">{flag}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="font-heading font-bold text-xl text-white">MBBS in {name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 text-primary" />
            <span>{universities}+ Universities</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <BadgeCheck className="h-4 w-4 text-success" />
          <span className="text-muted-foreground">{recognition}</span>
        </div>

        <div className="pt-3 border-t border-border">
          <p className="text-sm text-muted-foreground">Tuition Fee (per year)</p>
          <p className="font-heading font-bold text-primary text-lg">{tuitionRange}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">
            Explore Universities
          </span>
          <ArrowRight className="h-4 w-4 text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};
