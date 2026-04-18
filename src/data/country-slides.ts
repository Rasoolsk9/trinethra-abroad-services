/** Country slides: optional image in /public/countries/{slug}.jpg — upload your own for best look */
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
] as const;

export function countryImageUrl(slug: string): string {
  return `/countries/${slug}.jpg`;
}

export function flagUrl(iso2: string, size: 80 | 160 = 80): string {
  return `https://flagcdn.com/w${size}/${iso2}.png`;
}
