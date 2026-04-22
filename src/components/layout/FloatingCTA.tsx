import { Phone, MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
  const phoneNumber = "91799390909";

  const whatsappMessage =
    "Hi, I am interested in MBBS abroad. Please guide me.";

  return (
    <div className="floating-cta bottom-6 max-md:bottom-[calc(1rem+env(safe-area-inset-bottom,0px))]">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta-green-pulse floating-cta-btn-green flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="icon-blink h-5 w-5 text-white" />
      </a>

      <a
        href={`tel:+${phoneNumber}`}
        className="floating-cta-green-pulse floating-cta-btn-green flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="icon-blink h-5 w-5 text-white" />
      </a>
    </div>
  );
};
