import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const impactStats = [
  {
    title: "7+ Years Experience",
    description: "Guiding students with industry knowledge and expertise",
  },
  {
    title: "1000+ Students Placed",
    description: "Helping aspiring doctors start their journey abroad",
  },
  {
    title: "30+ Partner Universities",
    description: "Collaborating with recognized and trusted institutions",
  },
  {
    title: "95% Success Rate",
    description: "Strong track record of successful admissions",
  },
];

const values = [
  {
    title: "Student-First Approach",
    description: "Every decision is focused on student success and long-term career growth",
  },
  {
    title: "Transparency",
    description: "Clear guidance with no hidden costs or false commitments",
  },
  {
    title: "Quality Guidance",
    description: "We recommend only recognized and reliable universities",
  },
  {
    title: "End-to-End Support",
    description: "From counselling to admission and beyond, we stay with you",
  },
];

const journey = [
  {
    year: "2018",
    title: "Founded",
    description: "Started with a vision to simplify MBBS abroad admissions",
  },
  {
    year: "2020",
    title: "200+ Students",
    description: "Built trust through consistent results",
  },
  {
    year: "2022",
    title: "Expanded Network",
    description: "Partnered with multiple universities across countries",
  },
  {
    year: "2025",
    title: "1000+ Students",
    description: "Reached a strong milestone in student success",
  },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Trinethra Edu Services | MBBS Abroad Admissions</title>
        <meta
          name="description"
          content="Your trusted partner for MBBS abroad admissions with transparent guidance and reliable support for Indian students."
        />
      </Helmet>

      <section className="bg-gradient-hero py-16 text-white md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            About Trinethra Edu Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90">
            Your trusted partner for MBBS abroad admissions. We are committed to helping Indian
            students achieve their dream of becoming doctors through transparent guidance and reliable support.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-2 font-heading text-3xl font-bold md:text-4xl">Our Story</h2>
          <h3 className="mb-6 text-xl font-semibold text-primary md:text-2xl">
            Building Medical Careers with Trust and Transparency
          </h3>
          <div className="max-w-4xl space-y-4 text-muted-foreground">
            <p>
              Trinethra Edu Services was founded with a clear mission: to make quality medical
              education abroad accessible and affordable for Indian students.
            </p>
            <p>
              We recognized that many deserving students miss out on medical seats due to high fees
              and limited government opportunities. Our goal is to bridge that gap by guiding students
              toward globally recognized universities with the right support at every step.
            </p>
            <p>
              Over the years, we have successfully guided <strong>1000+ students</strong> into NMC & WHO
              recognized medical universities across multiple countries. Our students are now pursuing
              their medical education with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold md:text-4xl">Our Impact</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-2 font-heading text-3xl font-bold md:text-4xl">Our Values</h2>
          <h3 className="mb-8 text-xl font-semibold text-primary md:text-2xl">What Drives Us</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <h4 className="mb-2 font-heading text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold md:text-4xl">Our Journey</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {journey.map((item) => (
              <div key={`${item.year}-${item.title}`} className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-bold text-primary">
                  {item.year} - {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Join hundreds of students who trusted us for their MBBS abroad admissions.
          </p>
          <Button asChild className="btn-hero">
            <Link to="/free-counselling">
              Get Free Counselling Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
