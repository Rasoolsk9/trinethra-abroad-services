import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { countrySlides, flagUrl } from "@/data/country-slides";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navLinkClass =
  "text-[0.8125rem] font-semibold tracking-[0.04em] text-foreground transition-colors hover:text-primary md:text-[0.9375rem]";

function scrollToAnchor(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappLink =
    "https://wa.me/917993909809?text=Hi%20Trinethra%20team%2C%20I%20want%20MBBS%20abroad%20consultation.";

  const onHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") return;
    e.preventDefault();
    if (location.hash) {
      navigate("/", { replace: true });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onHashNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (location.pathname !== "/") return;
    if (location.hash === `#${anchor}`) {
      e.preventDefault();
      scrollToAnchor(anchor);
    }
  };

  const closeMobile = () => {
    setOpen(false);
    setCountriesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/25 bg-white/15 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/12 [transform:translateZ(0)] [backface-visibility:hidden]">
      <div className="pt-[env(safe-area-inset-top,0px)]">
        <nav className="container-custom py-3 md:py-3.5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={onHomeClick}
              className="flex min-w-0 max-w-[min(100%,calc(100%-8.5rem))] items-center gap-2.5 sm:max-w-none sm:gap-3 md:gap-3.5"
              aria-label="Trinethra Edu Services — Home"
            >
              <img
                src="/logo-trinethra.png"
                alt=""
                className="h-11 w-auto shrink-0 object-contain object-left shadow-[0_2px_12px_-2px_rgba(15,40,80,0.18)] sm:h-12 md:h-[3.25rem] lg:h-[3.5rem]"
                width={240}
                height={72}
                decoding="async"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-0.5">
                  <span className="brand-wordmark-primary text-[clamp(0.875rem,2.6vw,1.35rem)]">
                    Trinethra
                  </span>
                  <span className="brand-wordmark-sub text-[clamp(0.75rem,2vw,0.875rem)]">
                    Edu Services
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-5 lg:gap-7 md:flex">
              <Link to="/" onClick={onHomeClick} className={navLinkClass}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass}>
                About us
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    navLinkClass,
                    "inline-flex items-center gap-1 rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=open]:text-primary",
                  )}
                >
                  Countries
                  <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-80 md:h-4 md:w-4" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="z-[60] min-w-[14.5rem] p-1">
                  <DropdownMenuItem asChild>
                    <Link to="/#countries" className="cursor-pointer gap-2">
                      <span className="flex h-5 w-6 items-center justify-center rounded border border-border/60 bg-muted/40 text-[10px] font-bold text-muted-foreground">
                        All
                      </span>
                      View all destinations
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {countrySlides.map((c) => (
                    <DropdownMenuItem key={c.slug} asChild>
                      <Link
                        to={`/mbbs-in-${c.slug}`}
                        className="cursor-pointer gap-2.5 py-2 [&>img]:shrink-0"
                      >
                        <img
                          src={flagUrl(c.iso2, 80)}
                          alt=""
                          width={22}
                          height={16}
                          className="h-4 w-[1.375rem] rounded-sm object-cover shadow-sm ring-1 ring-black/10"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-medium">{c.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/#contact"
                onClick={(e) => onHashNavClick(e, "contact")}
                className={navLinkClass}
              >
                Contact us
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button
                asChild
                className="consult-blink btn-consult-premium h-9 max-w-[9.25rem] shrink-0 px-2.5 text-[11px] sm:h-10 sm:max-w-none sm:px-4 sm:text-sm"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5"
                  aria-label="Consult on WhatsApp"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  <span className="truncate sm:whitespace-normal">Consult Now</span>
                </a>
              </Button>

              <button
                className="rounded-lg border border-border/60 bg-white/70 p-2 text-foreground hover:bg-white md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-3 rounded-2xl border border-white/30 bg-white/80 p-4 text-foreground shadow-xl backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={(e) => {
                    onHomeClick(e);
                    closeMobile();
                  }}
                  className="rounded-lg px-1 py-2.5 text-[0.9375rem] font-semibold tracking-[0.04em] hover:bg-muted/60"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobile}
                  className="rounded-lg px-1 py-2.5 text-[0.9375rem] font-semibold tracking-[0.04em] hover:bg-muted/60"
                >
                  About us
                </Link>

                <Collapsible open={countriesOpen} onOpenChange={setCountriesOpen}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-1 py-2.5 text-left text-[0.9375rem] font-semibold tracking-[0.04em] hover:bg-muted/60">
                    Countries
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        countriesOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-0.5 pb-1 pl-2 pt-1">
                    <Link
                      to="/#countries"
                      onClick={(e) => {
                        onHashNavClick(e, "countries");
                        closeMobile();
                      }}
                      className="block rounded-md py-2 pl-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      View all destinations
                    </Link>
                    {countrySlides.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/mbbs-in-${c.slug}`}
                        onClick={closeMobile}
                        className="flex items-center gap-2.5 rounded-md py-2 pl-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <img
                          src={flagUrl(c.iso2, 80)}
                          alt=""
                          width={22}
                          height={16}
                          className="h-4 w-[1.375rem] rounded-sm object-cover shadow-sm ring-1 ring-black/10"
                          loading="lazy"
                          decoding="async"
                        />
                        {c.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  to="/#contact"
                  onClick={(e) => {
                    onHashNavClick(e, "contact");
                    closeMobile();
                  }}
                  className="rounded-lg px-1 py-2.5 text-[0.9375rem] font-semibold tracking-[0.04em] hover:bg-muted/60"
                >
                  Contact us
                </Link>

                <Button
                  asChild
                  className="consult-blink btn-consult-premium mt-2 h-11 rounded-xl"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    Consult Now
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
