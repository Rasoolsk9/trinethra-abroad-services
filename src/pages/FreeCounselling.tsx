import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/ui/LeadForm";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const benefits = [
  "100% Free Counselling - No Hidden Charges",
  "Personalized University Recommendations",
  "Complete Admission Guidance",
  "Visa & Documentation Support",
  "Education Loan Assistance",
  "Pre-Departure Orientation",
];

const FreeCounselling = () => {
  return (
    <Layout>
      <Helmet>
        <title>Free MBBS Abroad Counselling | Trinethra Edu Services</title>
        <meta 
          name="description" 
          content="Get free expert counselling for MBBS abroad. Our experienced counsellors will guide you on university selection, eligibility, fees, and admission process." 
        />
      </Helmet>

      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Get Free Expert <span className="text-secondary">Counselling</span>
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Take the first step towards your dream of becoming a doctor. Our experienced 
                counsellors are here to guide you through every aspect of MBBS abroad admissions.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-white/20">
                <h3 className="font-semibold text-lg">Contact Us Directly</h3>
                <a href="tel:+91799390909" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                  <Phone className="h-5 w-5" />
                  +91-799390909
                </a>
                <a href="mailto:info@trinethraeduses.in" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                  <Mail className="h-5 w-5" />
                  info@trinethraeduservices.in
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>123 Education Hub, Hyderabad, Telangana, India - 500001 </span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Fill The Form Below
                </h2>
                <p className="text-muted-foreground mt-1">
                  Our counsellor will call you within 24 hours
                </p>
              </div>
              <LeadForm variant="default" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeCounselling;
