import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const countries = [
  { name: "MBBS in Kyrgyzstan", slug: "kyrgyzstan" },
  { name: "MBBS in Russia", slug: "russia" },
  { name: "MBBS in Georgia", slug: "georgia" },
  { name: "MBBS in Kazakhstan", slug: "kazakhstan" },
  { name: "MBBS in UK", slug: "uk" },
];

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Universities", path: "/universities" },
  { name: "Eligibility", path: "/eligibility" },
  { name: "Fees Structure", path: "/fees" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "FAQs", path: "/faqs" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-secondary-foreground">T</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Trinethra</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Edu Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your trusted partner for MBBS abroad admissions. We help Indian students pursue their 
              dream of becoming doctors at NMC & WHO recognized universities worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">MBBS Abroad</h4>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country.slug}>
                  <Link 
                    to={`/mbbs-in-${country.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+917993909809" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 79939 09809</span>
              </a>
              <a href="mailto:info@trinethraeduservices.in" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@trinethraeduservices.in</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Education Hub, Hyderabad, Telangana, India - 500001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Trinethra Edu Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
