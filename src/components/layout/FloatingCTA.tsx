import { Phone, MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20MBBS%20abroad.%20Please%20guide%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      <a
        href="tel:+919876543210"
        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-secondary-foreground" />
      </a>
    </div>
  );
};
