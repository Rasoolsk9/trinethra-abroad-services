import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CountriesSection } from "@/components/sections/CountriesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>MBBS Abroad Admission | Trinethra Edu Services - Study Medicine Abroad</title>
        <meta 
          name="description" 
          content="Study MBBS abroad in Kyrgyzstan, Russia, Georgia, Kazakhstan & UK. NMC & WHO recognized universities. Affordable fees, complete admission support. Get free counselling today!" 
        />
        <meta 
          name="keywords" 
          content="MBBS abroad, MBBS in Russia, MBBS in Kyrgyzstan, MBBS in Georgia, MBBS in Kazakhstan, MBBS in UK, study medicine abroad, NMC approved universities" 
        />
        <link rel="canonical" href="https://trinethraeduservices.in" />
      </Helmet>

      <HeroSection />
      <CountriesSection />
      <WhyChooseSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
