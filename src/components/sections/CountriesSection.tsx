import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { countrySlides, countryImageUrl, flagUrl } from "@/data/country-slides";

const AUTO_MS = 4000;
const SWIPE_MIN_PX = 45;

export const CountriesSection = () => {
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
      className="scroll-mt-[calc(4.25rem+env(safe-area-inset-top,0px))] bg-background py-10 md:scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] md:py-14"
    >
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <span className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
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
          <button
            type="button"
            onClick={prev}
            className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/95 shadow-lg backdrop-blur-sm transition hover:bg-muted md:left-0 md:h-10 md:w-10 md:-translate-x-1 lg:-translate-x-2"
            aria-label="Previous country"
          >
            <ChevronLeft className="h-4 w-4 text-foreground md:h-5 md:w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/95 shadow-lg backdrop-blur-sm transition hover:bg-muted md:right-0 md:h-10 md:w-10 md:translate-x-1 lg:translate-x-2"
            aria-label="Next country"
          >
            <ChevronRight className="h-4 w-4 text-foreground md:h-5 md:w-5" />
          </button>

          <div
            className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 shadow-[0_20px_50px_-20px_rgba(15,40,80,0.25)] ring-1 ring-black/[0.04] [touch-action:manipulation]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out will-change-transform"
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
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/20">
                        {showImg ? (
                          <img
                            src={src}
                            alt={c.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                            onError={() => setImgErr((e) => ({ ...e, [c.slug]: true }))}
                            draggable={false}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 to-secondary/30">
                            <span className="text-5xl drop-shadow-md">🎓</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041c3a]/88 via-[#041c3a]/28 to-transparent" />
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
                          <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-md">
                            Explore
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 px-10 sm:px-12 md:px-14">
            {countrySlides.map((c, i) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"}`}
                aria-label={`Show ${c.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
