import { Phone, MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
  const phoneNumber = "917993909809";

  const whatsappMessage =
    "Hi, I am interested in MBBS abroad. Please guide me.";

  return (
    <div className="floating-cta">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>

      {/* Call */}
      <a
        href={`tel:+${phoneNumber}`}
        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-secondary-foreground" />
      </a>
    </div>
  );
};
