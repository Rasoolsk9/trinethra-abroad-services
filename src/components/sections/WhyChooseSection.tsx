import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

type StatDef = {
  key: string;
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  format?: "comma" | "plain" | "inrL";
};

const trustStats: StatDef[] = [
  { key: "p", end: 60, suffix: "+", label: "University Partners", format: "plain" },
  { key: "s", end: 1000, suffix: "+", label: "Success Stories", format: "comma" },
  { key: "g", end: 100, suffix: "%", label: "Scholarship Guidance", format: "plain" },
  { key: "m", end: 16, suffix: "L+", prefix: "INR ", label: "Programs Starting", format: "inrL" },
];

function formatStat(n: number, def: StatDef) {
  if (def.format === "comma") return `${n.toLocaleString("en-IN")}${def.suffix}`;
  if (def.format === "inrL") return `${def.prefix ?? ""}${n}${def.suffix}`;
  return `${n}${def.suffix}`;
}

function StatCard({ def, inView, isHome }: { def: StatDef; inView: boolean; isHome: boolean }) {
  const n = useCountUp({ end: def.end, durationMs: 1600, enabled: inView });
  const display = formatStat(n, def);

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 text-center shadow-sm",
        isHome
          ? "border-slate-200/80 bg-white/90 backdrop-blur-sm"
          : "border-border/60 bg-white",
      )}
    >
      <p className={cn("font-heading text-xl font-bold md:text-2xl", isHome ? "text-slate-800" : "text-primary")}>
        {display}
      </p>
      <p className="mt-1 text-xs text-muted-foreground md:text-sm">{def.label}</p>
    </div>
  );
}

const features: { title: string; description: string; emoji: string; ring: string }[] = [
  {
    emoji: "🔐",
    ring: "from-emerald-400/40 via-teal-300/30 to-cyan-400/25",
    title: "100% Transparency",
    description: "Clear process, fee breakup, and university shortlist guidance.",
  },
  {
    emoji: "🎓",
    ring: "from-violet-400/40 via-fuchsia-300/30 to-pink-400/25",
    title: "Expert-Led Application Support",
    description: "Dedicated counsellors help profile building and admission documents.",
  },
  {
    emoji: "✈️",
    ring: "from-sky-400/40 via-blue-300/30 to-indigo-400/25",
    title: "Visa & Documentation",
    description: "End-to-end support from admission letter to visa and pre-departure.",
  },
  {
    emoji: "🎧",
    ring: "from-amber-400/40 via-orange-300/30 to-rose-400/25",
    title: "Student-First Support",
    description: "Fast response support team for students and parents.",
  },
  {
    emoji: "🌏",
    ring: "from-lime-400/35 via-emerald-300/30 to-teal-400/25",
    title: "Global University Access",
    description: "Carefully selected NMC and WHO recognized destinations.",
  },
  {
    emoji: "🤝",
    ring: "from-rose-400/35 via-orange-300/30 to-amber-400/25",
    title: "Personalized Counselling",
    description: "Country and budget matching for every student profile.",
  },
];

type WhyChooseSectionProps = { isHome?: boolean };

export const WhyChooseSection = ({ isHome = false }: WhyChooseSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const t = window.setInterval(() => setCycle((c) => c + 1), 12000);
    return () => window.clearInterval(t);
  }, [inView]);

  return (
    <section
      ref={ref}
      className={cn("py-12 md:py-14", isHome ? "bg-slate-50/80" : "bg-muted/35")}
    >
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span
            className={cn(
              "mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-medium",
              isHome
                ? "border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm"
                : "bg-primary/10 text-primary",
            )}
          >
            Why Choose Us
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Why Choose Trinethra Edu Services</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Simple, trustworthy, and guidance-first admission support.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {trustStats.map((def) => (
            <StatCard key={`${def.key}-${cycle}`} def={def} inView={inView} isHome={isHome} />
          ))}
        </div>

        <h3 className="mb-4 font-heading text-xl font-semibold text-foreground md:text-2xl">Trinethra Advantage</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
                className={cn(
                  "rounded-2xl border p-4 shadow-sm transition hover:shadow-md",
                  isHome
                    ? "border-slate-200/80 bg-white/90 backdrop-blur-sm"
                    : "border-border/60 bg-white",
                )}
              >
                <div
                className={cn(
                  "mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-inner",
                  isHome
                    ? "bg-gradient-to-br from-slate-100 to-slate-200/60 ring-2 ring-white/90"
                    : `bg-gradient-to-br ring-2 ring-white/80 ${feature.ring}`,
                )}
              >
                <span role="img" aria-hidden>
                  {feature.emoji}
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
