import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/70 bg-white">
      <div className="container-custom py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-base font-bold text-white">T</span>
              </div>
              <div>
                <span className="block font-heading text-base font-bold text-foreground">Trinethra Edu Services</span>
                <span className="text-xs text-muted-foreground">A plan for every dream</span>
              </div>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              Trusted MBBS abroad partner for transparent counselling, documentation, and admission support.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a href="tel:+917993909809" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <div className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-5 text-center text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()}, Trinethra Edu Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
