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
  className?: string;
}

export const LeadForm = ({ variant = "default", className = "" }: LeadFormProps) => {
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
  };

  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`grid gap-4 ${isCompact ? "grid-cols-1" : isHero ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
        <div className="space-y-2">
          <Label htmlFor="name" className={isHero ? "text-white/90" : ""}>Full Name *</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={isHero ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className={isHero ? "text-white/90" : ""}>Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={isHero ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className={isHero ? "text-white/90" : ""}>Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={isHero ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className={isHero ? "text-white/90" : ""}>City</Label>
          <Input
            id="city"
            placeholder="Your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={isHero ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
          />
        </div>

        <div className={`space-y-2 ${isHero ? "sm:col-span-2" : ""}`}>
          <Label htmlFor="country" className={isHero ? "text-white/90" : ""}>Preferred Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className={isHero ? "bg-white/10 border-white/20 text-white" : ""}>
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
            ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-semibold" 
            : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Get Free Counselling"}
      </Button>
    </form>
  );
};
