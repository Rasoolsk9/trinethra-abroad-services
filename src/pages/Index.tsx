import { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Helmet } from "react-helmet-async";
import { HomePageFallback } from "@/components/home/HomePageFallback";

const HomePageLazy = lazy(() => import("./HomePageLazy"));

const Index = () => {
  /** Preload the deferred home bundle during idle time so the transition is shorter. */
  useEffect(() => {
    if (typeof requestIdleCallback === "undefined") return;
    const id = requestIdleCallback(() => {
      void import("./HomePageLazy");
    }, { timeout: 2000 });
    return () => cancelIdleCallback(id);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>MBBS Abroad Admission | Trinethra Edu Services - Study Medicine Abroad</title>
        <meta 
          name="description" 
          content="Study abroad in UK, Canada, New Zealand, Germany, Australia, Kyrgyzstan, Russia, and Central America/Caribbean with trusted university admission support." 
        />
        <meta 
          name="keywords" 
          content="study abroad, UK universities, Canada universities, New Zealand universities, Germany universities, Australia universities, Kyrgyzstan universities, Russia universities, Caribbean universities" 
        />
        <link rel="canonical" href="https://trinethraeduservices.in" />
      </Helmet>

      <div className="home-page">
        <HeroSection isHome />
        <Suspense fallback={<HomePageFallback className="border-t border-slate-200/50" />}>
          <HomePageLazy />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
