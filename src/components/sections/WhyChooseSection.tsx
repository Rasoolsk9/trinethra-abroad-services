import { 
  Shield, 
  Award, 
  Users, 
  Headphones, 
  FileCheck, 
  Plane,
  Building,
  BookOpen
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Transparency",
    description: "No hidden charges. Complete clarity on fees, admission process, and university details.",
  },
  {
    icon: Award,
    title: "NMC Approved Universities",
    description: "All universities are recognized by NMC (National Medical Commission) and WHO.",
  },
  {
    icon: Users,
    title: "10+ Years Experience",
    description: "Over a decade of expertise in MBBS abroad admissions with 5000+ successful placements.",
  },
  {
    icon: Headphones,
    title: "24/7 Student Support",
    description: "Dedicated support team available round the clock for all your queries and concerns.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "We handle all paperwork - from application to visa processing to travel arrangements.",
  },
  {
    icon: Plane,
    title: "Travel & Accommodation",
    description: "Assistance with flight bookings, airport pickup, and hostel accommodation.",
  },
  {
    icon: Building,
    title: "Direct University Tie-ups",
    description: "Official partnerships with top medical universities for guaranteed admissions.",
  },
  {
    icon: BookOpen,
    title: "NEET & MCI Coaching",
    description: "Free guidance for NEET qualification and FMGE (MCI Screening Test) preparation.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Why Trust Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Trinethra Edu Services?
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to making your MBBS abroad journey smooth, transparent, and successful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-medical p-6 text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
