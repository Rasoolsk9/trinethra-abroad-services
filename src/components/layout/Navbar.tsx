import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const whatsappLink =
    "https://wa.me/917993909809?text=Hi%20Trinethra%20team%2C%20I%20want%20MBBS%20abroad%20consultation.";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/25 bg-white/15 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/12 [transform:translateZ(0)] [backface-visibility:hidden]">
      <div className="pt-[env(safe-area-inset-top,0px)]">
      <nav className="container-custom py-2.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md">
              <span className="text-xl font-bold text-white">T</span>
            </div>
            <div>
              <span className="block font-heading text-base font-bold text-foreground sm:text-lg">Trinethra</span>
              <span className="block -mt-1 text-[11px] text-muted-foreground sm:text-xs">Edu Services</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-semibold tracking-wide text-foreground hover:text-primary">Home</Link>
            <Link to="/about" className="text-sm font-semibold tracking-wide text-foreground hover:text-primary">About us</Link>
            <a href="/#countries" className="text-sm font-semibold tracking-wide text-foreground hover:text-primary">Countries</a>
            <a href="/#contact" className="text-sm font-semibold tracking-wide text-foreground hover:text-primary">Contact us</a>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="consult-blink h-9 max-w-[9.25rem] shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary px-2.5 text-[11px] font-semibold text-white shadow-lg transition-all hover:brightness-110 sm:h-10 sm:max-w-none sm:px-4 sm:text-sm"
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
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-white/30 bg-white/80 p-4 text-foreground shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold tracking-wide">Home</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="text-lg font-semibold tracking-wide">About us</Link>
              <a href="/#countries" onClick={() => setOpen(false)} className="text-lg font-semibold tracking-wide">Countries</a>
              <a href="/#contact" onClick={() => setOpen(false)} className="text-lg font-semibold tracking-wide">Contact us</a>
              <Button asChild className="consult-blink mt-2 h-11 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110">
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
