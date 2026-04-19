import { useEffect, useState } from "react";
import { LeadForm } from "@/components/ui/LeadForm";
import { CheckCircle2 } from "lucide-react";

/** Served from /public — keeps initial JS bundle small (was ~3MB+ inlined). */
const HERO_SLIDE2_SRC = "/hero-students.jpg";

const highlightPoints = [
  "Globally Recognized Medical Universities",
  "MBBS Programs Starting from INR 16+ Lakhs",
  "Scholarships up to INR 10,00,000",
  "Limited Seats for 2026 Intake - Apply Now",
];

/** Shared headline scale (matches slide 2 hero line) */
const headlineClass =
  "font-heading max-w-[22rem] text-balance font-bold leading-[1.12] tracking-tight text-white sm:max-w-[28rem] sm:leading-[1.1] md:max-w-none md:leading-[1.08] lg:text-5xl lg:leading-[1.05] xl:text-6xl";

/** Shared sub / bullet line (matches “Direct admissions…” body scale) */
const bodyLineClass =
  "text-pretty font-normal leading-relaxed text-white/90 text-[0.8125rem] sm:text-sm md:text-base lg:text-lg";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionTick, setTransitionTick] = useState(0);
  /** Defer heavy second hero image until after first paint / idle — faster LCP on Vercel */
  const [secondHeroReady, setSecondHeroReady] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
      setTransitionTick((t) => t + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeSlide === 1) {
      setSecondHeroReady(true);
    }
  }, [activeSlide]);

  useEffect(() => {
    const enable = () => setSecondHeroReady(true);
    const ric = "requestIdleCallback" in window ? window.requestIdleCallback(enable, { timeout: 1800 }) : null;
    const fallback = window.setTimeout(enable, 2200);
    return () => {
      if (ric != null) window.cancelIdleCallback(ric);
      window.clearTimeout(fallback);
    };
  }, []);

  const enterClass =
    transitionTick === 0 ? "" : transitionTick % 2 === 1 ? "hero-enter-slide" : "hero-enter-fade";

  return (
    <section
      id="home"
      className="relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px))] overflow-hidden bg-[#041C3A] md:scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))]"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-premium.jpg"
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out max-lg:object-[center_28%] lg:object-center ${
            activeSlide === 0 ? "z-[1] opacity-100" : "z-0 opacity-0 [visibility:hidden]"
          }`}
        />
        {secondHeroReady && (
          <img
            src={HERO_SLIDE2_SRC}
            alt=""
            aria-hidden
            fetchPriority="low"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out max-lg:object-[center_22%] lg:object-center ${
              activeSlide === 1 ? "z-[1] opacity-100" : "z-0 opacity-0 [visibility:hidden]"
            }`}
          />
        )}
        <div
          className={`absolute inset-0 z-[2] transition-opacity duration-700 ease-out ${
            activeSlide === 0 ? "opacity-100" : "opacity-0 [visibility:hidden]"
          }`}
          style={{ backgroundImage: "var(--hero-overlay)" }}
        />
        <div
          className={`absolute inset-0 z-[2] transition-opacity duration-700 ease-out ${
            activeSlide === 1 ? "opacity-100" : "opacity-0 [visibility:hidden]"
          }`}
          style={{ backgroundImage: "var(--hero-overlay-alt)" }}
        />
      </div>

      <div className="relative z-[3] container-custom py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <div key={`${activeSlide}-${transitionTick}`} className={`text-white ${enterClass}`}>
              {activeSlide === 0 ? (
                <div className="space-y-4 sm:space-y-5">
                  <p className="mb-1 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/12 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden />
                    Free counselling · Expert guidance
                  </p>
                  <h1 className={`${headlineClass} text-[1.625rem] sm:text-3xl md:text-4xl`}>
                    Start Your MBBS Abroad Journey Today
                  </h1>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {highlightPoints.map((point) => (
                      <li key={point} className="flex gap-2.5 sm:gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary sm:h-[1.125rem] sm:w-[1.125rem]" />
                        <span className={bodyLineClass}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <p className="mb-1 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/12 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden />
                    Free counselling · Expert guidance
                  </p>
                  <h2
                    className={`${headlineClass} max-w-[20rem] text-[1.5rem] leading-[1.18] sm:max-w-[32rem] sm:text-3xl sm:leading-[1.12] md:max-w-none md:text-4xl md:leading-[1.1] lg:text-[2.75rem]`}
                  >
                    Study Abroad with Trusted Global Education Experts
                  </h2>
                  <div className="max-w-xl space-y-3 border-l-2 border-secondary/80 pl-3 sm:space-y-3.5 sm:pl-4 md:max-w-2xl md:pl-5">
                    <p className={`${bodyLineClass} text-[0.8125rem] sm:text-sm md:text-base`}>
                      Secure admission into top universities worldwide with complete transparency.
                    </p>
                    <p className={`${bodyLineClass} text-[0.8125rem] sm:text-sm md:text-base`}>
                      End-to-end support—from application and documentation to visa approval and successful arrival.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-2 sm:mt-6">
              <button
                type="button"
                onClick={() => {
                  setActiveSlide(0);
                  setTransitionTick((t) => t + 1);
                }}
                className={`h-1.5 w-7 rounded-full transition-colors duration-300 ${activeSlide === 0 ? "bg-secondary" : "bg-white/40"}`}
                aria-label="Slide 1"
              />
              <button
                type="button"
                onClick={() => {
                  setActiveSlide(1);
                  setSecondHeroReady(true);
                  setTransitionTick((t) => t + 1);
                }}
                className={`h-1.5 w-7 rounded-full transition-colors duration-300 ${activeSlide === 1 ? "bg-secondary" : "bg-white/40"}`}
                aria-label="Slide 2"
              />
            </div>
          </div>

          <div className="w-full shrink-0 lg:ml-auto lg:max-w-md xl:max-w-lg lg:translate-x-0 xl:translate-x-4 2xl:translate-x-6">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-white/45 bg-white/55 p-4 shadow-2xl ring-1 ring-white/25 backdrop-blur-2xl transition-shadow duration-300 sm:rounded-3xl sm:p-6 lg:max-w-none lg:p-7">
              <div className="mb-5 text-center sm:mb-6">
                <h2 className="font-heading text-lg font-bold text-primary sm:text-xl md:text-2xl">
                  Start your Study Abroad Journey
                </h2>
                <p className="mt-1 text-[0.75rem] leading-snug text-foreground/80 sm:text-sm">
                  Fill the form for <span className="font-semibold text-foreground">free counselling</span> — our expert will call you
                </p>
              </div>
              <LeadForm variant="hero" heroGlass />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
