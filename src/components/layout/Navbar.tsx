import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const countries = [
  { name: "Kyrgyzstan", slug: "kyrgyzstan" },
  { name: "Russia", slug: "russia" },
  { name: "Georgia", slug: "georgia" },
  { name: "Kazakhstan", slug: "kazakhstan" },
  { name: "United Kingdom", slug: "uk" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Universities", path: "/universities" },
  { name: "Eligibility", path: "/eligibility" },
  { name: "Fees", path: "/fees" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <p className="hidden md:block">🎓 Trusted MBBS Abroad Consultants | NMC & WHO Recognized Universities</p>
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <a href="tel:+917993909809" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="h-3 w-3" />
              +91 79939 09809
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">T</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">Trinethra</span>
              <span className="block text-xs text-muted-foreground -mt-1">Edu Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                      location.pathname === "/" ? "text-primary" : "text-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">MBBS Abroad</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                      {countries.map((country) => (
                        <li key={country.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/mbbs-in-${country.slug}`}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">MBBS in {country.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                Study medicine in top {country.name} universities
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.slice(2).map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link 
                      to={link.path}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                        location.pathname === link.path ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/free-counselling">Free Counselling</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.path 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="px-4 py-2">
                <p className="text-xs text-muted-foreground mb-2">MBBS Abroad Countries</p>
                <div className="grid grid-cols-2 gap-2">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      to={`/mbbs-in-${country.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm py-2 px-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 mt-2">
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <Link to="/free-counselling" onClick={() => setIsOpen(false)}>
                    Free Counselling
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
