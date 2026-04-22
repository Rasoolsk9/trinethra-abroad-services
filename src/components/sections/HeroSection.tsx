import { useEffect, useState } from "react";
import { LeadForm } from "@/components/ui/LeadForm";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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

/** Home: subtle dark left scrim for readability without washing image colors */
const HERO_OVERLAY_HOME_SLIDE0 =
  "linear-gradient(90deg, rgba(2,6,23,0.48) 0%, rgba(2,6,23,0.2) 34%, transparent 58%)";
const HERO_OVERLAY_HOME_SLIDE1 =
  "linear-gradient(90deg, rgba(2,6,23,0.44) 0%, rgba(2,6,23,0.17) 36%, transparent 56%)";

type HeroSectionProps = {
  /** Premium white / glass look for the home page only */
  isHome?: boolean;
};

export const HeroSection = ({ isHome = false }: HeroSectionProps) => {
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
    const ric = "requestIdleCallback" in window ? window.requestIdleCallback(enable, { timeout: 400 }) : null;
    const fallback = window.setTimeout(enable, 600);
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
      className={cn(
        "relative scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px))] overflow-hidden md:scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))]",
        isHome ? "bg-slate-100" : "bg-gradient-hero",
      )}
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
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out max-lg:object-[center_28%] lg:object-center ${
            activeSlide === 0 ? "z-[1] opacity-100" : "pointer-events-none z-0 opacity-0"
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
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out max-lg:object-[center_22%] lg:object-center ${
              activeSlide === 1 ? "z-[1] opacity-100" : "pointer-events-none z-0 opacity-0"
            }`}
          />
        )}
        <div
          className={`absolute inset-0 z-[2] transition-opacity duration-1000 ease-in-out ${
            activeSlide === 0 ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{ backgroundImage: isHome ? HERO_OVERLAY_HOME_SLIDE0 : "var(--hero-overlay)" }}
        />
        <div
          className={`absolute inset-0 z-[2] transition-opacity duration-1000 ease-in-out ${
            activeSlide === 1 ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{ backgroundImage: isHome ? HERO_OVERLAY_HOME_SLIDE1 : "var(--hero-overlay-alt)" }}
        />
      </div>

      <div className="relative z-[3] container-custom py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <div
              key={`${activeSlide}-${transitionTick}`}
              className={cn(
                enterClass,
                isHome ? "text-white [text-shadow:0_2px_10px_rgba(2,6,23,0.75)]" : "text-white",
              )}
            >
              {activeSlide === 0 ? (
                <div className="space-y-4 sm:space-y-5">
                  <p
                    className={cn(
                      "mb-1 inline-flex max-w-full items-center gap-2 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.18em]",
                      isHome
                        ? "bg-transparent px-0 py-0 text-white/95 shadow-none"
                        : "border border-white/30 bg-white/12 text-white/95",
                    )}
                  >
                    <span
                      className={cn("h-1 w-1 shrink-0 rounded-full", isHome ? "bg-white/90" : "bg-secondary")}
                      aria-hidden
                    />
                    Free counselling · Expert guidance
                  </p>
                  <h1
                    className={cn(
                      headlineClass,
                      "text-[1.625rem] sm:text-3xl md:text-4xl",
                      isHome && "text-white",
                    )}
                  >
                    Start Your MBBS Abroad Journey Today
                  </h1>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {highlightPoints.map((point) => (
                      <li key={point} className="flex gap-2.5 sm:gap-3">
                        <CheckCircle2
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]",
                            isHome ? "text-white/90" : "text-secondary",
                          )}
                        />
                        <span
                          className={cn(
                            bodyLineClass,
                            isHome && "text-white/90 text-[0.8125rem] sm:text-sm md:text-base lg:text-lg",
                          )}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <p
                    className={cn(
                      "mb-1 inline-flex max-w-full items-center gap-2 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.18em]",
                      isHome
                        ? "bg-transparent px-0 py-0 text-white/95 shadow-none"
                        : "border border-white/30 bg-white/12 text-white/95",
                    )}
                  >
                    <span
                      className={cn("h-1 w-1 shrink-0 rounded-full", isHome ? "bg-white/90" : "bg-secondary")}
                      aria-hidden
                    />
                    Free counselling · Expert guidance
                  </p>
                  <h2
                    className={cn(
                      headlineClass,
                      "max-w-[20rem] text-[1.5rem] leading-[1.18] sm:max-w-[32rem] sm:text-3xl sm:leading-[1.12] md:max-w-none md:text-4xl md:leading-[1.1] lg:text-[2.75rem]",
                      isHome && "text-white",
                    )}
                  >
                    Study Abroad with Trusted Global Education Experts
                  </h2>
                  <div
                    className={cn(
                      "max-w-xl space-y-3 border-l-2 pl-3 sm:space-y-3.5 sm:pl-4 md:max-w-2xl md:pl-5",
                      isHome ? "border-white/65" : "border-secondary/80",
                    )}
                  >
                    <p
                      className={cn(
                        bodyLineClass,
                        "text-[0.8125rem] sm:text-sm md:text-base",
                        isHome && "text-white/92",
                      )}
                    >
                      Secure admission into top universities worldwide with complete transparency.
                    </p>
                    <p
                      className={cn(
                        bodyLineClass,
                        "text-[0.8125rem] sm:text-sm md:text-base",
                        isHome && "text-white/92",
                      )}
                    >
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
                className={cn(
                  "h-1.5 w-7 rounded-full transition-colors duration-300",
                  activeSlide === 0
                    ? isHome
                      ? "bg-slate-800"
                      : "bg-secondary"
                    : isHome
                      ? "bg-slate-300/80"
                      : "bg-white/40",
                )}
                aria-label="Slide 1"
              />
              <button
                type="button"
                onClick={() => {
                  setActiveSlide(1);
                  setSecondHeroReady(true);
                  setTransitionTick((t) => t + 1);
                }}
                className={cn(
                  "h-1.5 w-7 rounded-full transition-colors duration-300",
                  activeSlide === 1
                    ? isHome
                      ? "bg-slate-800"
                      : "bg-secondary"
                    : isHome
                      ? "bg-slate-300/80"
                      : "bg-white/40",
                )}
                aria-label="Slide 2"
              />
            </div>
          </div>

          <div className="w-full shrink-0 lg:ml-auto lg:max-w-md xl:max-w-lg lg:translate-x-0 xl:translate-x-4 2xl:translate-x-6">
            <div
              className={cn(
                "mx-auto w-full max-w-md rounded-2xl p-4 shadow-2xl backdrop-blur-2xl transition-shadow duration-300 sm:rounded-3xl sm:p-6 lg:max-w-none lg:p-7",
                isHome
                  ? "border border-slate-200/70 bg-white/75 ring-1 ring-slate-200/50"
                  : "border border-white/45 bg-white/55 ring-1 ring-white/25",
              )}
            >
              <div className="mb-5 text-center sm:mb-6">
                <h2
                  className={cn(
                    "font-heading text-lg font-bold sm:text-xl md:text-2xl",
                    isHome ? "text-slate-800" : "text-primary",
                  )}
                >
                  Start your Study Abroad Journey
                </h2>
                <p
                  className={cn(
                    "mt-1 text-[0.75rem] leading-snug sm:text-sm",
                    isHome ? "text-slate-600" : "text-foreground/80",
                  )}
                >
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
