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
import { CheckCircle2 } from "lucide-react";
import { countrySlides } from "@/data/country-slides";

const countryOptions = countrySlides.map((c) => c.name);

interface LeadFormProps {
  variant?: "default" | "compact" | "hero";
  /** Glass hero card: slightly transparent inputs for readability on blurred backgrounds */
  heroGlass?: boolean;
  className?: string;
  submitLabel?: string;
  /** Appended to the lead notification (e.g. university name on apply flow) */
  leadContext?: string;
  onSuccess?: () => void;
}

export const LeadForm = ({
  variant = "default",
  heroGlass = false,
  className = "",
  submitLabel,
  leadContext,
  onSuccess,
}: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      city: formData.city.trim(),
      country: formData.country.trim(),
      leadContext: leadContext?.trim() || undefined,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        if (import.meta.env.DEV) {
          console.warn("[DEV] /api/lead failed — run `vercel dev` or set CallMeBot env on Vercel. Status:", res.status, data);
          setSubmitted(true);
          if (onSuccess) window.setTimeout(() => onSuccess(), 2600);
          return;
        }
        throw new Error(data.error || "Could not send your details. Please try again.");
      }

      setSubmitted(true);
      if (onSuccess) {
        window.setTimeout(() => onSuccess(), 2600);
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn("[DEV] /api/lead unreachable — run `vercel dev`. Lead:", payload, err);
        setSubmitted(true);
        if (onSuccess) window.setTimeout(() => onSuccess(), 2600);
      } else {
        setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHero = variant === "hero";
  const isCompact = variant === "compact";
  const heroInputClasses = heroGlass
    ? "h-11 rounded-lg border-white/55 bg-white/92 text-foreground shadow-inner backdrop-blur-sm placeholder:text-muted-foreground"
    : "h-11 rounded-lg border-slate-200 bg-white text-foreground placeholder:text-muted-foreground";

  if (submitted) {
    return (
      <div
        className={`rounded-xl border border-secondary/30 bg-secondary/5 p-6 text-center md:p-8 ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15">
          <CheckCircle2 className="h-8 w-8 text-secondary" aria-hidden />
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">Thank you!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We received your details. Our agent will call you shortly.
        </p>
        {import.meta.env.DEV && (
          <p className="mt-2 text-xs text-amber-800/90 dark:text-amber-200/90">
            Dev: API not called — use <code className="rounded bg-muted px-1">vercel dev</code> or deploy to test WhatsApp delivery.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {submitError && (
        <div
          className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
          {submitError}
        </div>
      )}

      <div className={`grid gap-4 ${isCompact ? "grid-cols-1" : isHero ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        <div className="space-y-2">
          <Label htmlFor="name" className={isHero ? "text-foreground" : ""}>
            Full Name *
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={isHero ? heroInputClasses : ""}
            autoComplete="name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className={isHero ? "text-foreground" : ""}>
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={isHero ? heroInputClasses : ""}
            autoComplete="tel"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className={isHero ? "text-foreground" : ""}>
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={isHero ? heroInputClasses : ""}
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className={isHero ? "text-foreground" : ""}>
            City
          </Label>
          <Input
            id="city"
            placeholder="Your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={isHero ? heroInputClasses : ""}
            autoComplete="address-level2"
          />
        </div>

        <div className={`space-y-2 ${isHero ? "md:col-span-2" : ""}`}>
          <Label htmlFor="country" className={isHero ? "text-foreground" : ""}>
            Preferred Country
          </Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className={isHero ? heroInputClasses : ""}>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map((country) => (
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
        className={`mt-6 w-full ${
          isHero
            ? "h-12 bg-secondary text-base font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90"
            : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isSubmitting ? "Sending…" : submitLabel ?? "Book your free consultation"}
      </Button>
    </form>
  );
};
