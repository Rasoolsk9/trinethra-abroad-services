import { 
  GraduationCap, 
  Wallet, 
  Globe, 
  BookOpen,
  Stethoscope,
  Clock
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Affordable Fees",
    description: "MBBS abroad costs 50-70% less than private medical colleges in India. Total package starting from ₹20-25 Lakhs.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Degrees recognized worldwide by NMC, WHO, WFME, and other international bodies. Practice medicine anywhere.",
  },
  {
    icon: BookOpen,
    title: "English Medium",
    description: "Complete medical education in English. No language barrier. Easy to understand and excel in studies.",
  },
  {
    icon: GraduationCap,
    title: "Low NEET Cutoff",
    description: "Qualify NEET with just 50% marks (40% for reserved categories). No high cutoffs like Indian private colleges.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Exposure",
    description: "Hands-on clinical training from 2nd/3rd year. Work with international patients and advanced technology.",
  },
  {
    icon: Clock,
    title: "No Donations",
    description: "Zero donation or capitation fees. Transparent pricing with installment payment options available.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium text-sm rounded-full mb-4">
              Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why MBBS Abroad is the <span className="gradient-text">Smart Choice</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Thousands of Indian students choose to study MBBS abroad every year. 
              Here's why it's becoming the preferred path to becoming a doctor.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
              <h3 className="font-heading text-2xl font-bold mb-8">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-secondary">5000+</p>
                  <p className="text-white/80 mt-1">Students Placed</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-secondary">50+</p>
                  <p className="text-white/80 mt-1">Partner Universities</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-secondary">10+</p>
                  <p className="text-white/80 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-secondary">98%</p>
                  <p className="text-white/80 mt-1">Success Rate</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
