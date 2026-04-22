import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * Placeholder while the deferred home sections chunk loads — matches real layout
 * (destinations → stats → content cards) for a calmer, premium transition.
 */
export const HomePageFallback = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("space-y-0", className)}
      role="status"
      aria-label="Loading more sections"
    >
      <span className="sr-only">Loading destinations and more content</span>

      {/* Countries carousel placeholder */}
      <section className="py-10 md:py-14" aria-hidden>
        <div className="container-custom">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <Skeleton className="mx-auto mb-3 h-7 w-36 max-w-full rounded-full" />
            <Skeleton className="mx-auto h-8 w-72 max-w-full rounded-lg md:h-9" />
            <Skeleton className="mx-auto mt-2 h-4 w-full max-w-md" />
            <Skeleton className="mx-auto mt-1 h-4 w-2/3 max-w-sm" />
          </div>
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100/60 shadow-inner"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div className="skeleton-shimmer absolute inset-0" />
            <div className="absolute left-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/50 bg-white/60 md:left-3" />
            <div className="absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/50 bg-white/60 md:right-3" />
          </div>
        </div>
      </section>

      {/* Why choose + feature grid placeholder */}
      <section className="bg-slate-50/80 py-12 md:py-14" aria-hidden>
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <Skeleton className="mx-auto mb-3 h-7 w-28 rounded-full" />
            <Skeleton className="mx-auto h-7 w-80 max-w-full rounded-lg md:h-8" />
            <Skeleton className="mx-auto mt-2 h-3.5 w-64" />
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-2xl" />
            ))}
          </div>
          <Skeleton className="mb-4 h-6 w-48 rounded-md" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-36 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + gallery (compact hints) */}
      <section className="bg-white py-10 md:py-12" aria-hidden>
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <Skeleton className="mx-auto mb-2 h-6 w-32 rounded-full" />
            <Skeleton className="mx-auto h-6 w-56 rounded-md" />
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-hidden pb-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                className="min-w-[80%] shrink-0 snap-start rounded-2xl sm:min-w-[45%] lg:min-w-[32%] h-44 sm:h-48"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8" aria-hidden>
        <div className="container-custom">
          <div className="columns-2 gap-3 [direction:rtl] sm:columns-2 md:columns-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="mb-3 [direction:ltr]">
                <Skeleton className="mb-2 aspect-[4/5] w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-4 md:h-6" />
    </div>
  );
};
