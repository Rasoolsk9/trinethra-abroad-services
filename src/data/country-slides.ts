/** Destinations: images optional at /public/countries/{slug}.jpg — missing images use carousel fallback */
export const countrySlides = [
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    iso2: "kg",
    blurb: "Affordable MBBS · English medium",
  },
  {
    slug: "russia",
    name: "Russia",
    iso2: "ru",
    blurb: "World-class medical universities",
  },
  {
    slug: "georgia",
    name: "Georgia",
    iso2: "ge",
    blurb: "European-standard education",
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    iso2: "kz",
    blurb: "Modern campuses · NMC listed",
  },
  {
    slug: "uk",
    name: "UK",
    iso2: "gb",
    blurb: "GMC-recognised · Global pathways",
  },
  {
    slug: "usa",
    name: "USA",
    iso2: "us",
    blurb: "Clinical excellence · Research-led",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    iso2: "nz",
    blurb: "Quality of life · English medium",
  },
  {
    slug: "germany",
    name: "Germany",
    iso2: "de",
    blurb: "EU degrees · Strong healthcare",
  },
  {
    slug: "canada",
    name: "Canada",
    iso2: "ca",
    blurb: "Recognised programs · Diverse cities",
  },
] as const;

export type CountrySlide = (typeof countrySlides)[number];

export function countryImageUrl(slug: string): string {
  return `/countries/${slug}.jpg`;
}

export function flagUrl(iso2: string, size: 80 | 160 = 80): string {
  return `https://flagcdn.com/w${size}/${iso2}.png`;
}
