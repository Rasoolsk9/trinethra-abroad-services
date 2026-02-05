import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/ui/LeadForm";
import { ArrowRight, Play, CheckCircle, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const trustPoints = [
  "NMC & WHO Recognized Universities",
  "10+ Years of Experience",
  "5000+ Students Placed",
  "Complete Admission Support",
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical students studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Trusted Education Partner Since 2014</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Study{" "}
              <span className="text-secondary">MBBS Abroad</span>
              <br />
              with Expert Guidance
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-lg">
              Your dream of becoming a doctor starts here. Get admission to top NMC & WHO 
              recognized medical universities in Kyrgyzstan, Russia, Georgia, Kazakhstan & UK.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-white/90">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="btn-hero">
                <Link to="/free-counselling">
                  Get Free Counselling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-outline-hero">
                <Link to="/universities">
                  Explore Universities
                </Link>
              </Button>
            </div>

            {/* Stats Mini */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-hero"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-white">5000+</p>
                  <p className="text-xs text-white/70">Students Placed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div className="hidden lg:block">
            <div className="bg-primary/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="font-heading text-2xl font-bold text-white">
                  Get Free Counselling
                </h2>
                <p className="text-white/70 mt-1">
                  Fill the form & our expert will call you
                </p>
              </div>
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Form CTA */}
      <div className="relative lg:hidden bg-primary py-8">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="font-heading text-xl font-bold text-white">
              Get Free Counselling Today
            </h2>
            <p className="text-white/70 text-sm mt-1">
              Our expert counsellor will guide you
            </p>
          </div>
          <LeadForm variant="hero" />
        </div>
      </div>
    </section>
  );
};
