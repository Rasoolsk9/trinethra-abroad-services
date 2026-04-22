import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { countrySlides, countryImageUrl, flagUrl } from "@/data/country-slides";
import { cn } from "@/lib/utils";

const AUTO_MS = 4000;
const SWIPE_MIN_PX = 45;

type CountriesSectionProps = {
  isHome?: boolean;
};

export const CountriesSection = ({ isHome = false }: CountriesSectionProps) => {
  const [imgErr, setImgErr] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const n = countrySlides.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [paused, n]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - start;
    if (dx > SWIPE_MIN_PX) prev();
    else if (dx < -SWIPE_MIN_PX) next();
    window.setTimeout(() => setPaused(false), 2800);
  };

  return (
    <section
      id="countries"
      className={cn(
        "scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px))] py-10 md:scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] md:py-14",
        isHome ? "bg-white" : "bg-background",
      )}
    >
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <span
            className={cn(
              "mb-2 inline-block rounded-full px-4 py-1.5 text-sm font-medium",
              isHome
                ? "border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm"
                : "bg-secondary/10 text-secondary",
            )}
          >
            Our Destinations
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Study MBBS in Top Countries</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Explore each destination — trusted guidance for your MBBS journey.
          </p>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border shadow-[0_20px_50px_-20px_rgba(15,40,80,0.12)] [touch-action:manipulation]",
              isHome
                ? "border-slate-200/80 bg-white/60 ring-1 ring-slate-200/40 backdrop-blur-sm"
                : "border-border/50 bg-muted/20 ring-1 ring-black/[0.04]",
            )}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="relative z-0 flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                width: `${n * 100}%`,
                transform: `translate3d(-${(index * 100) / n}%, 0, 0)`,
              }}
            >
              {countrySlides.map((c) => {
                const src = countryImageUrl(c.slug);
                const showImg = !imgErr[c.slug];
                return (
                  <div
                    key={c.slug}
                    className="shrink-0"
                    style={{ width: `${100 / n}%` }}
                  >
                    <Link
                      to={`/mbbs-in-${c.slug}`}
                      className="group relative block overflow-hidden bg-white"
                    >
                      <div
                        className={cn(
                          "relative aspect-[16/10] w-full overflow-hidden",
                          isHome
                            ? "bg-gradient-to-br from-slate-200/50 via-slate-100/40 to-slate-200/30"
                            : "bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/20",
                        )}
                      >
                        {showImg ? (
                          <img
                            src={src}
                            alt={c.name}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                            onError={() => setImgErr((e) => ({ ...e, [c.slug]: true }))}
                            draggable={false}
                          />
                        ) : (
                          <div
                            className={cn(
                              "flex h-full w-full items-center justify-center",
                              isHome
                                ? "bg-gradient-to-br from-slate-200/60 to-slate-300/40"
                                : "bg-gradient-to-br from-primary/40 to-secondary/30",
                            )}
                          >
                            <span className="text-5xl drop-shadow-md">🎓</span>
                          </div>
                        )}
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-t to-transparent",
                            isHome
                              ? "from-slate-900/70 via-slate-800/20"
                              : "from-[hsl(var(--accent))]/85 via-[hsl(var(--navy))]/30",
                          )}
                        />
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <img
                                src={flagUrl(c.iso2, 80)}
                                alt=""
                                width={36}
                                height={27}
                                className="h-7 w-auto rounded border border-white/45 shadow-md sm:h-8"
                                loading="lazy"
                                draggable={false}
                              />
                              <span className="font-heading text-lg font-bold text-white drop-shadow-md sm:text-xl">
                                {c.name}
                              </span>
                            </div>
                            <p className="text-xs text-white/92 sm:text-sm">{c.blurb}</p>
                          </div>
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold shadow-md",
                              isHome
                                ? "border border-white/30 bg-white/90 text-slate-800"
                                : "bg-white text-primary",
                            )}
                          >
                            Explore
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                prev();
              }}
              className="absolute left-1.5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/95 text-foreground shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95 min-[400px]:left-2 md:left-3 md:h-11 md:w-11"
              aria-label="Previous country"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                next();
              }}
              className="absolute right-1.5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/95 text-foreground shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95 min-[400px]:right-2 md:right-3 md:h-11 md:w-11"
              aria-label="Next country"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
