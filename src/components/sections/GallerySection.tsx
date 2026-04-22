import { cn } from "@/lib/utils";

type GallerySectionProps = {
  isHome?: boolean;
};

const galleryImages = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/10.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg",
];

export const GallerySection = ({ isHome = false }: GallerySectionProps) => {
  return (
    <section className={cn("py-12 md:py-14", isHome ? "bg-slate-50/70" : "bg-muted/30")}>
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
            Student Gallery
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Students & Campus Moments
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Real moments from our student journeys, admissions, and abroad life.
          </p>
        </div>

        <div className="columns-2 gap-3 [direction:rtl] sm:columns-2 md:columns-3 lg:columns-4">
          {[...galleryImages].reverse().map((src, index) => (
            <div
              key={src}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-[0_16px_34px_-16px_rgba(15,23,42,0.5)] ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-500 hover:translate-y-1 [direction:ltr]"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <img
                src={src}
                alt={`Student gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:translate-y-1"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
