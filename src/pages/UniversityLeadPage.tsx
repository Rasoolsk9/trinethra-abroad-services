import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/ui/LeadForm";
import { universityBySlug } from "@/data/universities";

const UniversityLeadPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const university = useMemo(() => (slug ? universityBySlug[slug] : undefined), [slug]);

  if (!university) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <section className="bg-[#f6fbff] py-12 md:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium text-secondary">Almost there</p>
            <h1 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Fill this form to view {university.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Our counsellor will contact you and the university details page will open instantly after submission.
            </p>
            <div className="mt-6">
              <LeadForm
                submitLabel="Continue to university details"
                onSuccess={() => navigate(`/university/${university.slug}`)}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UniversityLeadPage;
