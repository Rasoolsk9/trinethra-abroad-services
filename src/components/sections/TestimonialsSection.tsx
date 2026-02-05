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
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from students who achieved their 
            dream of becoming doctors with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
