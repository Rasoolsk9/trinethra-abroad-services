import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students and their future.",
  },
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "We partner only with universities that meet our strict quality and recognition standards.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No hidden fees, no false promises. Complete honesty in all our dealings.",
  },
  {
    icon: Users,
    title: "Lifetime Support",
    description: "Our relationship doesn't end with admission. We support students throughout their journey.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a vision to make quality medical education accessible" },
  { year: "2016", title: "500+ Students", description: "Crossed 500 successful placements milestone" },
  { year: "2018", title: "5 Countries", description: "Expanded partnerships to 5 countries" },
  { year: "2020", title: "50+ Universities", description: "Partnered with over 50 medical universities" },
  { year: "2023", title: "5000+ Students", description: "Helped 5000+ students achieve their dream" },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Trinethra Edu Services - MBBS Abroad Experts</title>
        <meta 
          name="description" 
          content="Learn about Trinethra Edu Services - 10+ years of experience in MBBS abroad admissions. Trusted by 5000+ students. Your partner in medical education abroad." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About Trinethra Edu Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Your trusted partner for MBBS abroad admissions since 2014. We've helped over 5000 
            students achieve their dream of becoming doctors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium text-sm rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                A Decade of Transforming Medical Education Dreams
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Trinethra Edu Services was founded in 2014 with a simple mission: to make quality 
                  medical education accessible to deserving Indian students, regardless of their 
                  financial background.
                </p>
                <p>
                  We observed that many talented students were unable to pursue their dream of becoming 
                  doctors due to exorbitant fees in private medical colleges and limited seats in 
                  government institutions.
                </p>
                <p>
                  Today, we are proud to have helped over 5000 students get admission to top NMC & WHO 
                  recognized medical universities across 5 countries. Our alumni are now practicing 
                  doctors in India and around the world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-hero rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold text-secondary mb-2">10+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
              <div className="bg-gradient-hero rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold text-secondary mb-2">5000+</p>
                <p className="text-sm text-white/80">Students Placed</p>
              </div>
              <div className="bg-gradient-hero rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold text-secondary mb-2">50+</p>
                <p className="text-sm text-white/80">Partner Universities</p>
              </div>
              <div className="bg-gradient-hero rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold text-secondary mb-2">98%</p>
                <p className="text-sm text-white/80">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-medical p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium text-sm rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card-medical p-6 inline-block">
                      <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                      <h3 className="font-heading font-semibold text-lg mt-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-secondary rounded-full border-4 border-background relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-16">
        <div className="container-custom text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join 5000+ students who trusted us with their medical education dreams.
          </p>
          <Button asChild className="btn-hero">
            <Link to="/free-counselling">
              Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
