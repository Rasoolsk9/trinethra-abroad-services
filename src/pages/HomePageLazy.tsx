import { CountriesSection } from "@/components/sections/CountriesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";

/**
 * Loaded after the hero chunk so the first screen stays light and LCP/TBT-friendly.
 * Mount animation: smooth fade-up (see `home-deferred-sections` in index.css).
 */
function HomePageLazy() {
  return (
    <div className="home-deferred-sections">
      <CountriesSection isHome />
      <WhyChooseSection isHome />
      <TestimonialsSection isHome />
      <GallerySection isHome />
      <CTASection isHome />
    </div>
  );
}

export default HomePageLazy;
