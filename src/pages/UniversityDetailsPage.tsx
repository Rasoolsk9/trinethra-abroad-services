import { Navigate, Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { BadgeCheck, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { universityBySlug } from "@/data/universities";

const UniversityDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const university = slug ? universityBySlug[slug] : undefined;

  if (!university) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{university.name} | MBBS Admission - Trinethra Edu</title>
        <meta name="description" content={university.overview} />
      </Helmet>

      <section className="bg-muted/35 py-12 md:py-16">
        <div className="container-custom">
          <div className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {university.countryName}
              </span>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                {university.courses}
              </span>
            </div>

            <h1 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-4xl">
              {university.name}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {university.city}, {university.countryName}
            </div>

            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {university.overview}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {university.recognition.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/50 px-3 py-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-success" />
                  <span>{item} Recognized</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link to="/free-counselling">Apply with Trinethra</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">
                  Back to universities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UniversityDetailsPage;
