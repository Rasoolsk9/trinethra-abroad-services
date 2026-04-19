import type { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students and their future.",
    accent: "saffron" as const,
  },
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "We partner only with universities that meet our strict quality and recognition standards.",
    accent: "green" as const,
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No hidden fees, no false promises. Complete honesty in all our dealings.",
    accent: "saffron" as const,
  },
  {
    icon: Users,
    title: "Lifetime Support",
    description: "Our relationship doesn't end with admission. We support students throughout their journey.",
    accent: "green" as const,
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a vision to make quality medical education accessible" },
  { year: "2016", title: "500+ Students", description: "Crossed 500 successful placements milestone" },
  { year: "2018", title: "5 Countries", description: "Expanded partnerships to 5 countries" },
  { year: "2020", title: "50+ Universities", description: "Partnered with over 50 medical universities" },
  { year: "2023", title: "5000+ Students", description: "Helped 5000+ students achieve their dream" },
];

const statCards = [
  { value: "10+", label: "Years Experience", className: "bg-gradient-to-br from-[#ff9933] via-[#fb923c] to-[#ea580c] text-white shadow-lg ring-1 ring-white/20" },
  { value: "5000+", label: "Students Placed", className: "bg-white text-foreground shadow-md ring-2 ring-[#138808]/35 border border-[#138808]/20" },
  { value: "50+", label: "Partner Universities", className: "bg-gradient-to-br from-[#138808] via-[#16a34a] to-[#14532d] text-white shadow-lg ring-1 ring-white/15" },
  { value: "98%", label: "Success Rate", className: "bg-gradient-to-br from-[#ff9933] to-[#138808] text-white shadow-lg ring-1 ring-white/20" },
];

function IndiaHeroShell({ children }: { children: ReactNode }) {
  return (
    <div className="about-india-surface py-16 md:py-24">
      <div className="about-india-surface__tricolor" aria-hidden />
      <div className="about-india-surface__veil" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

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

      <IndiaHeroShell>
        <div className="container-custom text-center text-white">
          <h1 className="font-heading text-4xl drop-shadow-md md:text-5xl font-bold mb-4">
            About Trinethra Edu Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 drop-shadow">
            Your trusted partner for MBBS abroad admissions since 2014. We've helped over 5000 students achieve their dream of becoming doctors.
          </p>
        </div>
      </IndiaHeroShell>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#ff9933]/15 px-4 py-1.5 text-sm font-medium text-[#c2410c]">
                Our Story
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">A Decade of Transforming Medical Education Dreams</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Trinethra Edu Services was founded in 2014 with a simple mission: to make quality medical education accessible to deserving Indian students,
                  regardless of their financial background.
                </p>
                <p>
                  We observed that many talented students were unable to pursue their dream of becoming doctors due to exorbitant fees in private medical colleges
                  and limited seats in government institutions.
                </p>
                <p>
                  Today, we are proud to have helped over 5000 students get admission to top NMC & WHO recognized medical universities across 5 countries. Our
                  alumni are now practicing doctors in India and around the world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((card) => (
                <div key={card.label} className={`rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-[1.02] ${card.className}`}>
                  <p className={`mb-2 text-4xl font-bold ${card.className.includes("bg-white") ? "text-[#138808]" : "text-white"}`}>{card.value}</p>
                  <p className={`text-sm ${card.className.includes("bg-white") ? "text-muted-foreground" : "text-white/90"}`}>{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-orange-50/90 via-white to-green-50/90">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#138808]/12 px-4 py-1.5 text-sm font-medium text-[#166534]">Our Values</span>
            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">What Drives Us</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const isSaffron = value.accent === "saffron";
              return (
                <div
                  key={value.title}
                  className="card-medical p-6 text-center transition-shadow duration-300 hover:shadow-lg"
                >
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isSaffron ? "bg-[#ff9933]/15 text-[#c2410c]" : "bg-[#138808]/12 text-[#166534]"
                    }`}
                  >
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#ff9933]/15 px-4 py-1.5 text-sm font-medium text-[#c2410c]">Our Journey</span>
            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">Milestones</h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff9933] via-white to-[#138808] shadow-sm md:block"
              aria-hidden
            />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="card-medical inline-block p-6 transition-transform duration-300 hover:shadow-md">
                      <span className="bg-gradient-to-r from-[#c2410c] to-[#138808] bg-clip-text text-2xl font-bold text-transparent">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1 font-heading text-lg font-semibold">{milestone.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div
                    className="relative z-10 hidden h-4 w-4 shrink-0 rounded-full border-4 border-white shadow-md md:flex md:items-center md:justify-center"
                    style={{
                      background: index % 2 === 0 ? "linear-gradient(135deg, #ff9933, #ea580c)" : "linear-gradient(135deg, #22c55e, #138808)",
                    }}
                  />
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndiaHeroShell>
        <div className="container-custom text-center text-white">
          <h2 className="mb-4 font-heading text-3xl font-bold drop-shadow-md">Ready to Start Your Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90 drop-shadow">Join 5000+ students who trusted us with their medical education dreams.</p>
          <Button
            asChild
            className="rounded-xl bg-white px-8 py-6 font-semibold text-[#138808] shadow-lg transition-all duration-300 hover:bg-white/95 hover:shadow-xl"
          >
            <Link to="/free-counselling">
              Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </IndiaHeroShell>
    </Layout>
  );
};

export default About;
