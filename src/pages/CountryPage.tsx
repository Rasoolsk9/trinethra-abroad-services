import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { UniversityCard } from "@/components/cards/UniversityCard";
import { LeadForm } from "@/components/ui/LeadForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Building, CheckCircle, FileCheck } from "lucide-react";
import { countryUniversityGroups } from "@/data/universities";

const countryFlags: Record<string, string> = {
  uk: "🇬🇧",
  canada: "🇨🇦",
  "new-zealand": "🇳🇿",
  germany: "🇩🇪",
  australia: "🇦🇺",
  kyrgyzstan: "🇰🇬",
  russia: "🇷🇺",
  "central-america-caribbean": "🌎",
};

const CountryPage = () => {
  const { country } = useParams<{ country: string }>();
  const countrySlug = country?.replace("mbbs-in-", "") || "";
  const data = countryUniversityGroups.find((group) => group.countrySlug === countrySlug);

  if (!data) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-2xl font-bold">Country not found</h1>
          <Button asChild className="mt-4">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Study in {data.countryName} | Universities & Admission - Trinethra Edu</title>
        <meta
          name="description"
          content={`Explore top universities in ${data.countryName} with Trinethra guidance and admission support.`}
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{countryFlags[countrySlug] ?? "🌍"}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  Global Study Destinations
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Study in {data.countryName}
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Explore trusted universities in {data.countryName} and get complete support for admissions,
                documentation, and visa process.
              </p>

              <Button asChild className="btn-hero">
                <Link to="/free-counselling">
                  Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <h3 className="font-heading text-xl font-bold mb-4">Quick Enquiry</h3>
                <LeadForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-6">
            About Studying in {data.countryName}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              `${data.countryName} offers quality education pathways for international students.`,
              `Our team helps with university shortlisting, applications, and admission timelines for ${data.countryName}.`,
              "Get personalized counselling based on your budget, profile, and preferred program.",
              "Receive end-to-end support from documentation to visa preparation.",
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Top Universities in {data.countryName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.universities.map((uni, idx) => (
              <UniversityCard
                key={uni.slug}
                name={uni.name}
                slug={uni.slug}
                city={uni.city}
                established={1990 + idx}
                recognition={uni.recognition}
                country={data.countryName}
                countrySlug={countrySlug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-primary" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {[
                  "Academic eligibility as per selected program requirements",
                  "Valid passport and required profile documents",
                  "English proficiency or language requirement based on destination",
                  "Financial documents and visa eligibility",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Documents Required
              </h2>
              <ul className="space-y-3">
                {[
                  "Academic transcripts and certificates",
                  "Passport and photographs",
                  "Language test score (if applicable)",
                  "Financial and visa documents",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-16">
        <div className="container-custom text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Study in {data.countryName}?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counsellors. We'll help you choose the right
            university and guide you through the entire admission process.
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

export default CountryPage;
