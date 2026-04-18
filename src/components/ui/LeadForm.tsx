import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const countries = [
  "Kyrgyzstan",
  "Russia",
  "Georgia",
  "Kazakhstan",
  "United Kingdom",
];

interface LeadFormProps {
  variant?: "default" | "compact" | "hero";
  /** Glass hero card: slightly transparent inputs for readability on blurred backgrounds */
  heroGlass?: boolean;
  className?: string;
  submitLabel?: string;
  onSuccess?: () => void;
}

export const LeadForm = ({
  variant = "default",
  heroGlass = false,
  className = "",
  submitLabel,
  onSuccess,
}: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! Our counsellor will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", city: "", country: "" });
    setIsSubmitting(false);
    onSuccess?.();
  };

  const isHero = variant === "hero";
  const isCompact = variant === "compact";
  const heroInputClasses = heroGlass
    ? "h-11 rounded-lg border-white/55 bg-white/92 text-foreground shadow-inner backdrop-blur-sm placeholder:text-muted-foreground"
    : "h-11 rounded-lg border-slate-200 bg-white text-foreground placeholder:text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`grid gap-4 ${isCompact ? "grid-cols-1" : isHero ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        <div className="space-y-2">
          <Label htmlFor="name" className={isHero ? "text-foreground" : ""}>Full Name *</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={isHero ? heroInputClasses : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className={isHero ? "text-foreground" : ""}>Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={isHero ? heroInputClasses : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className={isHero ? "text-foreground" : ""}>Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={isHero ? heroInputClasses : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className={isHero ? "text-foreground" : ""}>City</Label>
          <Input
            id="city"
            placeholder="Your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={isHero ? heroInputClasses : ""}
          />
        </div>

        <div className={`space-y-2 ${isHero ? "md:col-span-2" : ""}`}>
          <Label htmlFor="country" className={isHero ? "text-foreground" : ""}>Preferred Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className={isHero ? heroInputClasses : ""}>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full mt-6 ${
          isHero 
            ? "h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base font-semibold shadow-md" 
            : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isSubmitting ? "Submitting..." : submitLabel ?? "Book your free consultation"}
      </Button>
    </form>
  );
};
