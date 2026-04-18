import { useEffect, useState } from "react";
import { LeadForm } from "@/components/ui/LeadForm";
import { CheckCircle2 } from "lucide-react";
import heroSlide2 from "@/assets/hero-students.jpg";

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
  /** Each auto-advance increments — alternate: odd = slide-in, even = fade (first transition after load = horizontal) */
  const [transitionTick, setTransitionTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
      setTransitionTick((t) => t + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  /** First paint: no enter animation. After that: odd tick = horizontal slide-in, even = fade */
  const enterClass =
    transitionTick === 0 ? "" : transitionTick % 2 === 1 ? "hero-enter-slide" : "hero-enter-fade";

  return (
    <section className="relative overflow-hidden bg-[#041C3A]">
      <div className="absolute inset-0">
        <img
          src="/hero-premium.jpg"
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out max-lg:object-[center_28%] lg:object-center ${
            activeSlide === 0 ? "z-[1] opacity-100" : "z-0 opacity-0 [visibility:hidden]"
          }`}
        />
        <img
          src={heroSlide2}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out max-lg:object-[center_22%] lg:object-center ${
            activeSlide === 1 ? "z-[1] opacity-100" : "z-0 opacity-0 [visibility:hidden]"
          }`}
        />
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
                <div>
                  <p className="mb-2.5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/12 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur-sm sm:mb-3 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden />
                    Free counselling · Expert guidance
                  </p>
                  <h2 className={`${headlineClass} text-[1.625rem] sm:text-3xl md:text-4xl`}>
                    <span className="block sm:inline">Study MBBS Abroad</span>{" "}
                    <span className="mt-0.5 block sm:mt-0 sm:inline">With Trusted Guidance</span>
                  </h2>
                  <p className={`mt-3 max-w-md sm:mt-4 md:max-w-xl ${bodyLineClass}`}>
                    Direct admissions to top Government Medical Universities
                  </p>
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
                  setTransitionTick((t) => t + 1);
                }}
                className={`h-1.5 w-7 rounded-full transition-colors duration-300 ${activeSlide === 1 ? "bg-secondary" : "bg-white/40"}`}
                aria-label="Slide 2"
              />
            </div>
          </div>

          <div className="w-full shrink-0 lg:ml-auto lg:max-w-md xl:max-w-lg lg:translate-x-0 xl:translate-x-4 2xl:translate-x-6">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-white/45 bg-white/55 p-4 shadow-2xl ring-1 ring-white/25 backdrop-blur-2xl sm:rounded-3xl sm:p-6 lg:max-w-none lg:p-7">
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
