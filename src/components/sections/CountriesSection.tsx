import { CountryCard } from "@/components/cards/CountryCard";

const countries = [
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    flag: "🇰🇬",
    universities: 8,
    duration: "5+1 Years",
    recognition: "NMC, WHO, UNESCO",
    tuitionRange: "₹2.5 - 4.5 Lakhs",
  },
  {
    name: "Russia",
    slug: "russia",
    flag: "🇷🇺",
    universities: 50,
    duration: "6 Years",
    recognition: "NMC, WHO, ECFMG",
    tuitionRange: "₹3.5 - 8 Lakhs",
  },
  {
    name: "Georgia",
    slug: "georgia",
    flag: "🇬🇪",
    universities: 10,
    duration: "6 Years",
    recognition: "NMC, WHO, WFME",
    tuitionRange: "₹4 - 7 Lakhs",
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    flag: "🇰🇿",
    universities: 12,
    duration: "5+1 Years",
    recognition: "NMC, WHO, UNESCO",
    tuitionRange: "₹3 - 5.5 Lakhs",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    universities: 40,
    duration: "5-6 Years",
    recognition: "GMC, WHO, WFME",
    tuitionRange: "₹25 - 50 Lakhs",
  },
];

export const CountriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium text-sm rounded-full mb-4">
            Our Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study MBBS in Top Countries
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer MBBS admissions in 5 carefully selected countries with NMC & WHO 
            recognized universities, affordable fees, and excellent medical education.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.slug} {...country} />
          ))}
        </div>
      </div>
    </section>
  );
};
