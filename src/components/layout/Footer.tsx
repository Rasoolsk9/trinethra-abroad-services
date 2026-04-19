import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px))] border-t border-border/70 bg-white md:scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))]"
    >
      <div className="container-custom py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <img
                src="/logo-trinethra.png"
                alt=""
                className="h-11 w-auto max-w-[11rem] object-contain object-left sm:h-12 sm:max-w-[12rem]"
                width={220}
                height={64}
                decoding="async"
              />
              <div>
                <span className="brand-wordmark-primary block text-base sm:text-lg">Trinethra</span>
                <span className="brand-wordmark-sub mt-0.5 block text-xs sm:text-sm">Edu Services</span>
                <span className="mt-1 block text-xs text-muted-foreground">A plan for every dream</span>
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
