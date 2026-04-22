/** Destinations: images optional at /public/countries/{slug}.jpg — missing images use carousel fallback */
export const countrySlides = [
  {
    slug: "uk",
    name: "UK",
    iso2: "gb",
    blurb: "Top universities and global careers",
  },
  {
    slug: "canada",
    name: "Canada",
    iso2: "ca",
    blurb: "Quality education and student support",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    iso2: "nz",
    blurb: "Safe campuses with practical learning",
  },
  {
    slug: "germany",
    name: "Germany",
    iso2: "de",
    blurb: "European pathways and strong academics",
  },
  {
    slug: "australia",
    name: "Australia",
    iso2: "au",
    blurb: "Industry-ready programs and support",
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    iso2: "kg",
    blurb: "International study pathways",
  },
  {
    slug: "russia",
    name: "Russia",
    iso2: "ru",
    blurb: "Established universities and options",
  },
  {
    slug: "central-america-caribbean",
    name: "Central America / Caribbean",
    iso2: "bb",
    blurb: "Caribbean destination options",
  },
] as const;

export type CountrySlide = (typeof countrySlides)[number];

/** Filenames in /public/countries may differ from route slugs */
const COUNTRY_IMAGE_FILE: Record<string, string> = {
  "central-america-caribbean": "central-america",
};

export function countryImageUrl(slug: string): string {
  const file = COUNTRY_IMAGE_FILE[slug] ?? slug;
  return `/countries/${file}.jpg`;
}

export function flagUrl(iso2: string, size: 80 | 160 = 80): string {
  return `https://flagcdn.com/w${size}/${iso2}.png`;
}
