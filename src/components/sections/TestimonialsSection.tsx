import { TestimonialCard } from "@/components/cards/TestimonialCard";

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Osh State University",
    country: "Kyrgyzstan",
    year: "2023",
    quote: "Trinethra Edu Services made my MBBS abroad dream come true. Their guidance from NEET preparation to university admission was exceptional. Now I'm studying in one of the best medical universities!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    university: "Kazan Federal University",
    country: "Russia",
    year: "2022",
    quote: "Best decision I made was to trust Trinethra for my MBBS admission. The transparency in fees, documentation support, and post-arrival assistance was beyond my expectations.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    year: "2023",
    quote: "From the first consultation to getting my visa, everything was smooth. The team is incredibly supportive and always available. Highly recommend for MBBS abroad!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    university: "Kazakh National Medical University",
    country: "Kazakhstan",
    year: "2021",
    quote: "I was confused about which country to choose. Trinethra's counsellors helped me make the right decision based on my budget and preferences. Thank you for your honest guidance!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    university: "International School of Medicine",
    country: "Kyrgyzstan",
    year: "2022",
    quote: "The complete support from admission to hostel accommodation was fantastic. I felt confident throughout my journey knowing Trinethra was there for any help.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    university: "Bashkir State Medical University",
    country: "Russia",
    year: "2023",
    quote: "Zero hidden charges, exactly what they promised. The fee structure was clear and they helped with education loan documentation too. Professional service!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-12 md:py-14">
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Success Stories
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            What Our Students Say
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Real stories from students who started their MBBS journey with Trinethra.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[85%] snap-start sm:min-w-[55%] lg:min-w-[32%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
