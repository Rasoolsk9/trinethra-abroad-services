import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your Medical Career?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Get free expert counselling and find the perfect university for your MBBS abroad journey. 
            Our team is ready to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="btn-hero">
              <Link to="/free-counselling">
                Get Free Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-outline-hero">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </a>
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            ⭐ Rated 4.9/5 by 1000+ students | 🎓 10+ Years of Excellence
          </p>
        </div>
      </div>
    </section>
  );
};
