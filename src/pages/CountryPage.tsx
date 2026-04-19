import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { UniversityCard } from "@/components/cards/UniversityCard";
import { LeadForm } from "@/components/ui/LeadForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  GraduationCap, 
  Clock, 
  Wallet, 
  Building, 
  Globe,
  FileCheck,
  Thermometer,
  ArrowRight
} from "lucide-react";

// Country data
const countryData: Record<string, {
  name: string;
  flag: string;
  heroImage?: string;
  description: string;
  highlights: { icon: React.ElementType; label: string; value: string }[];
  about: string[];
  universities: {
    name: string;
    slug: string;
    city: string;
    established: number;
    recognition: string[];
    tuitionFee: string;
    ranking?: string;
  }[];
  eligibility: string[];
  documents: string[];
  feeStructure: {
    item: string;
    cost: string;
  }[];
}> = {
  kyrgyzstan: {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    description: "Study MBBS in Kyrgyzstan at affordable fees in NMC & WHO recognized universities. Experience quality medical education with English-medium programs.",
    highlights: [
      { icon: Clock, label: "Duration", value: "5+1 Years" },
      { icon: Wallet, label: "Tuition Fee", value: "₹2.5-4.5 Lakhs/Year" },
      { icon: Globe, label: "Language", value: "English Medium" },
      { icon: GraduationCap, label: "Recognition", value: "NMC, WHO, UNESCO" },
    ],
    about: [
      "Kyrgyzstan has emerged as one of the most popular destinations for Indian students seeking quality medical education at affordable costs.",
      "Medical universities in Kyrgyzstan are recognized by major international bodies including NMC (National Medical Commission), WHO, and UNESCO.",
      "The country offers a 5+1 year MBBS program taught entirely in English, making it accessible for Indian students.",
      "Clinical rotations begin from the 3rd year, providing extensive hands-on experience in hospitals.",
    ],
    universities: [
      { name: "Osh State University", slug: "osh-state-university", city: "Osh", established: 1951, recognition: ["NMC", "WHO", "UNESCO"], tuitionFee: "₹3.2 Lakhs/Year", ranking: "Top 5" },
      { name: "International School of Medicine", slug: "ism-bishkek", city: "Bishkek", established: 2003, recognition: ["NMC", "WHO", "MCI"], tuitionFee: "₹4.0 Lakhs/Year", ranking: "Top 3" },
      { name: "Kyrgyz State Medical Academy", slug: "ksma", city: "Bishkek", established: 1939, recognition: ["NMC", "WHO", "UNESCO"], tuitionFee: "₹3.5 Lakhs/Year", ranking: "Top 1" },
      { name: "Jalal-Abad State University", slug: "jasu", city: "Jalal-Abad", established: 1993, recognition: ["NMC", "WHO"], tuitionFee: "₹2.8 Lakhs/Year" },
    ],
    eligibility: [
      "Minimum 50% marks in PCB (Physics, Chemistry, Biology) in 12th",
      "Minimum 40% for reserved categories (SC/ST/OBC)",
      "NEET qualification is mandatory",
      "Age: 17 years as of December 31st of admission year",
      "No upper age limit",
    ],
    documents: [
      "10th & 12th Mark Sheets (Original + Copies)",
      "NEET Score Card & Admit Card",
      "Valid Passport (min. 18 months validity)",
      "Birth Certificate",
      "Passport Size Photographs (20 copies)",
      "Medical Fitness Certificate",
      "HIV Test Report",
      "Police Clearance Certificate",
    ],
    feeStructure: [
      { item: "Tuition Fee (per year)", cost: "₹2.5 - 4.5 Lakhs" },
      { item: "Hostel Fee (per year)", cost: "₹40,000 - 60,000" },
      { item: "Food Expenses (per month)", cost: "₹6,000 - 10,000" },
      { item: "One-time Admission Fee", cost: "₹50,000 - 1 Lakh" },
      { item: "Total 6-Year Cost", cost: "₹20 - 30 Lakhs" },
    ],
  },
  russia: {
    name: "Russia",
    flag: "🇷🇺",
    description: "Russia offers world-class MBBS education with globally recognized degrees. Study in top-ranked universities with excellent infrastructure and research facilities.",
    highlights: [
      { icon: Clock, label: "Duration", value: "6 Years" },
      { icon: Wallet, label: "Tuition Fee", value: "₹3.5-8 Lakhs/Year" },
      { icon: Globe, label: "Language", value: "English/Russian" },
      { icon: GraduationCap, label: "Recognition", value: "NMC, WHO, ECFMG" },
    ],
    about: [
      "Russia is home to some of the oldest and most prestigious medical universities in the world, with a rich history of medical education.",
      "Russian medical degrees are recognized globally, including by NMC, WHO, ECFMG (USA), and medical councils of most countries.",
      "The 6-year MBBS program includes extensive clinical training in state-of-the-art hospitals.",
      "Many universities offer programs in English, though learning Russian is beneficial for clinical rotations.",
    ],
    universities: [
      { name: "Kazan Federal University", slug: "kazan-federal", city: "Kazan", established: 1804, recognition: ["NMC", "WHO", "ECFMG"], tuitionFee: "₹5.5 Lakhs/Year", ranking: "Top 10" },
      { name: "Bashkir State Medical University", slug: "bashkir-state", city: "Ufa", established: 1932, recognition: ["NMC", "WHO", "FAIMER"], tuitionFee: "₹4.5 Lakhs/Year", ranking: "Top 15" },
      { name: "Crimean Federal University", slug: "crimean-federal", city: "Simferopol", established: 1918, recognition: ["NMC", "WHO"], tuitionFee: "₹3.8 Lakhs/Year" },
      { name: "Orenburg State Medical University", slug: "orenburg-state", city: "Orenburg", established: 1944, recognition: ["NMC", "WHO", "WFME"], tuitionFee: "₹4.0 Lakhs/Year" },
    ],
    eligibility: [
      "Minimum 50% marks in PCB in 12th (40% for reserved)",
      "NEET qualification mandatory",
      "Age: 17-25 years as of admission",
      "Good health with no chronic diseases",
    ],
    documents: [
      "10th & 12th Mark Sheets",
      "NEET Score Card",
      "Valid Passport",
      "Birth Certificate",
      "Photographs",
      "Medical Certificate",
      "HIV Report",
    ],
    feeStructure: [
      { item: "Tuition Fee (per year)", cost: "₹3.5 - 8 Lakhs" },
      { item: "Hostel Fee (per year)", cost: "₹50,000 - 80,000" },
      { item: "Food Expenses (per month)", cost: "₹8,000 - 12,000" },
      { item: "Total 6-Year Cost", cost: "₹28 - 55 Lakhs" },
    ],
  },
  georgia: {
    name: "Georgia",
    flag: "🇬🇪",
    description: "Georgia offers European-standard medical education at affordable costs. Modern campuses, English-medium programs, and strong clinical training.",
    highlights: [
      { icon: Clock, label: "Duration", value: "6 Years" },
      { icon: Wallet, label: "Tuition Fee", value: "₹4-7 Lakhs/Year" },
      { icon: Globe, label: "Language", value: "English Medium" },
      { icon: GraduationCap, label: "Recognition", value: "NMC, WHO, WFME" },
    ],
    about: [
      "Georgia is a beautiful European country offering high-quality medical education recognized worldwide.",
      "Georgian medical universities follow European standards and are members of leading international medical education bodies.",
      "The country offers a safe, friendly environment for international students with low cost of living.",
      "Clinical training is provided in modern, well-equipped hospitals with experienced faculty.",
    ],
    universities: [
      { name: "Tbilisi State Medical University", slug: "tsmu", city: "Tbilisi", established: 1918, recognition: ["NMC", "WHO", "WFME"], tuitionFee: "₹6.5 Lakhs/Year", ranking: "Top 1" },
      { name: "European University", slug: "european-university", city: "Tbilisi", established: 2014, recognition: ["NMC", "WHO"], tuitionFee: "₹5.5 Lakhs/Year" },
      { name: "Batumi Shota Rustaveli State University", slug: "batumi-state", city: "Batumi", established: 1935, recognition: ["NMC", "WHO"], tuitionFee: "₹4.5 Lakhs/Year" },
    ],
    eligibility: [
      "Minimum 50% in PCB in 12th",
      "NEET qualified",
      "Age: 17+ years",
      "English proficiency",
    ],
    documents: [
      "Academic transcripts",
      "NEET Score Card",
      "Passport",
      "Photographs",
      "Medical certificate",
    ],
    feeStructure: [
      { item: "Tuition Fee (per year)", cost: "₹4 - 7 Lakhs" },
      { item: "Hostel Fee (per year)", cost: "₹60,000 - 90,000" },
      { item: "Living Expenses (per month)", cost: "₹10,000 - 15,000" },
      { item: "Total 6-Year Cost", cost: "₹32 - 50 Lakhs" },
    ],
  },
  kazakhstan: {
    name: "Kazakhstan",
    flag: "🇰🇿",
    description: "Kazakhstan offers quality MBBS education with modern infrastructure. Central Asian gem with affordable fees and NMC recognized degrees.",
    highlights: [
      { icon: Clock, label: "Duration", value: "5+1 Years" },
      { icon: Wallet, label: "Tuition Fee", value: "₹3-5.5 Lakhs/Year" },
      { icon: Globe, label: "Language", value: "English Medium" },
      { icon: GraduationCap, label: "Recognition", value: "NMC, WHO, UNESCO" },
    ],
    about: [
      "Kazakhstan is rapidly becoming a preferred destination for medical education in Central Asia.",
      "Universities are equipped with modern facilities and follow international medical education standards.",
      "The 5+1 year program includes clinical rotations in well-equipped government hospitals.",
      "Low cost of living and multicultural environment make it ideal for Indian students.",
    ],
    universities: [
      { name: "Kazakh National Medical University", slug: "knmu", city: "Almaty", established: 1931, recognition: ["NMC", "WHO", "UNESCO"], tuitionFee: "₹5.0 Lakhs/Year", ranking: "Top 1" },
      { name: "Al-Farabi Kazakh National University", slug: "al-farabi", city: "Almaty", established: 1934, recognition: ["NMC", "WHO"], tuitionFee: "₹4.5 Lakhs/Year", ranking: "Top 5" },
      { name: "Semey Medical University", slug: "semey", city: "Semey", established: 1953, recognition: ["NMC", "WHO"], tuitionFee: "₹3.5 Lakhs/Year" },
    ],
    eligibility: [
      "50% in PCB (40% reserved)",
      "NEET qualified",
      "Age 17+",
      "Valid passport",
    ],
    documents: [
      "Mark sheets",
      "NEET score",
      "Passport",
      "Medical certificate",
      "Photographs",
    ],
    feeStructure: [
      { item: "Tuition Fee (per year)", cost: "₹3 - 5.5 Lakhs" },
      { item: "Hostel (per year)", cost: "₹45,000 - 70,000" },
      { item: "Monthly expenses", cost: "₹7,000 - 11,000" },
      { item: "Total Cost", cost: "₹22 - 38 Lakhs" },
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Study MBBS in the UK - home to world's most prestigious medical schools. GMC recognized degrees, exceptional clinical training, and global career opportunities.",
    highlights: [
      { icon: Clock, label: "Duration", value: "5-6 Years" },
      { icon: Wallet, label: "Tuition Fee", value: "₹25-50 Lakhs/Year" },
      { icon: Globe, label: "Language", value: "English" },
      { icon: GraduationCap, label: "Recognition", value: "GMC, WHO, WFME" },
    ],
    about: [
      "The UK is home to some of the world's oldest and most respected medical schools.",
      "A UK medical degree (MBBS/MBChB) is recognized globally and highly valued.",
      "Graduates can practice in the UK without additional exams after completing Foundation training.",
      "World-class research opportunities and access to NHS clinical training.",
    ],
    universities: [
      { name: "St George's University of London", slug: "st-georges", city: "London", established: 1733, recognition: ["GMC", "WHO", "WFME"], tuitionFee: "₹35 Lakhs/Year", ranking: "Top 20 UK" },
      { name: "University of Central Lancashire", slug: "uclan", city: "Preston", established: 1828, recognition: ["GMC", "WHO"], tuitionFee: "₹28 Lakhs/Year" },
    ],
    eligibility: [
      "Excellent academic record (90%+ preferred)",
      "Strong UCAT/BMAT scores",
      "Personal statement & interviews",
      "English proficiency (IELTS 7.0+)",
    ],
    documents: [
      "Academic transcripts",
      "UCAT/BMAT scores",
      "Personal statement",
      "References",
      "Passport",
      "IELTS/English proof",
    ],
    feeStructure: [
      { item: "Tuition Fee (per year)", cost: "₹25 - 50 Lakhs" },
      { item: "Living Costs (per year)", cost: "₹12 - 20 Lakhs" },
      { item: "Total 5-6 Year Cost", cost: "₹1.8 - 3.5 Crores" },
    ],
  },
  usa: {
    name: "United States",
    flag: "🇺🇸",
    description:
      "Pursue MD or equivalent pathways in the USA with structured pre-med and graduate medical education. World-class hospitals, research, and global recognition.",
    highlights: [
      { icon: Clock, label: "Pathway", value: "4 Yrs + Residency" },
      { icon: Wallet, label: "Tuition (indicative)", value: "Varies by program" },
      { icon: Globe, label: "Language", value: "English" },
      { icon: GraduationCap, label: "Recognition", value: "ECFMG, WHO" },
    ],
    about: [
      "The USA offers highly competitive medical education with emphasis on clinical skills and research.",
      "Indian students typically pursue undergraduate pre-medical studies followed by MD programs; pathways and exams (MCAT, USMLE) apply.",
      "Trinethra helps you understand timelines, budgeting, and documentation for a realistic study plan.",
    ],
    universities: [
      { name: "Explore partner pathways", slug: "usa-pathways", city: "Multiple", established: 1900, recognition: ["ECFMG", "WHO"], tuitionFee: "Contact for latest" },
    ],
    eligibility: [
      "Strong academic record in science stream",
      "English proficiency (TOEFL/IELTS where required)",
      "Standardised tests as per program (e.g. MCAT)",
      "Financial proof and valid passport",
    ],
    documents: [
      "Academic transcripts",
      "Test scores",
      "SOP / CV as required",
      "Passport",
      "Financial documents",
    ],
    feeStructure: [
      { item: "Program fees", cost: "Varies widely by university & state" },
      { item: "Living costs", cost: "Contact for estimate" },
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    description:
      "Study medicine in New Zealand with high-quality universities, safe cities, and English-medium instruction in a welcoming environment.",
    highlights: [
      { icon: Clock, label: "Duration", value: "6 Years typical" },
      { icon: Wallet, label: "Fees (indicative)", value: "NZD — contact us" },
      { icon: Globe, label: "Language", value: "English" },
      { icon: GraduationCap, label: "Recognition", value: "WHO, NZMC" },
    ],
    about: [
      "New Zealand offers internationally respected medical programs with strong clinical training.",
      "Admission is competitive; academic excellence and English proficiency are essential.",
      "We support you with shortlisting, applications, and visa guidance.",
    ],
    universities: [
      { name: "University of Auckland", slug: "auckland-med", city: "Auckland", established: 1883, recognition: ["WHO", "NZMC"], tuitionFee: "Contact" },
      { name: "University of Otago", slug: "otago-med", city: "Dunedin", established: 1869, recognition: ["WHO", "NZMC"], tuitionFee: "Contact" },
    ],
    eligibility: [
      "Excellent 12th / equivalent results in sciences",
      "English proficiency (IELTS/TOEFL)",
      "UCAT or institution-specific tests",
      "Interview where applicable",
    ],
    documents: [
      "Transcripts",
      "English test scores",
      "Passport",
      "References",
    ],
    feeStructure: [
      { item: "Tuition (per year)", cost: "Contact for latest NZD figures" },
      { item: "Living costs", cost: "Varies by city" },
    ],
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    description:
      "Medical studies in Germany combine rigorous academics with access to Europe’s healthcare system. Many programs require strong German proficiency.",
    highlights: [
      { icon: Clock, label: "Duration", value: "6+ Years" },
      { icon: Wallet, label: "Public fees", value: "Low admin fees*" },
      { icon: Globe, label: "Language", value: "German (most programs)" },
      { icon: GraduationCap, label: "Recognition", value: "EU, WHO" },
    ],
    about: [
      "Germany is known for structured medical training and hospital exposure.",
      "Most clinical programs are taught in German; plan language preparation early.",
      "We guide you on recognition pathways and realistic timelines for Indian students.",
    ],
    universities: [
      { name: "Heidelberg University", slug: "heidelberg-med", city: "Heidelberg", established: 1386, recognition: ["EU", "WHO"], tuitionFee: "State-dependent" },
      { name: "Charité – Berlin", slug: "charite-berlin", city: "Berlin", established: 1710, recognition: ["EU", "WHO"], tuitionFee: "State-dependent" },
    ],
    eligibility: [
      "Strong academics in PCB",
      "German language proficiency (TestDaF/DSH) for most programs",
      "Valid qualifications for university entry",
      "Financial proof for visa",
    ],
    documents: [
      "Academic records",
      "Language certificates",
      "Passport",
      "Blocked account / funds proof",
    ],
    feeStructure: [
      { item: "Semester contribution", cost: "Varies by federal state" },
      { item: "Living costs (per year)", cost: "€10k–€12k indicative" },
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    description:
      "Medical education in Canada is highly competitive with excellent clinical training and post-study pathways. English or French programs depending on province.",
    highlights: [
      { icon: Clock, label: "Duration", value: "3–4 Yrs med + UG" },
      { icon: Wallet, label: "Tuition", value: "CAD — contact us" },
      { icon: Globe, label: "Language", value: "English / French" },
      { icon: GraduationCap, label: "Recognition", value: "WHO, MCC" },
    ],
    about: [
      "Canadian medical schools are among the most selective globally.",
      "We help you understand prerequisites, MCAT, and realistic pathway options.",
      "Early planning improves outcomes for international applicants.",
    ],
    universities: [
      { name: "University of Toronto", slug: "uoft-med", city: "Toronto", established: 1827, recognition: ["WHO", "MCC"], tuitionFee: "Contact" },
      { name: "McGill University", slug: "mcgill-med", city: "Montreal", established: 1821, recognition: ["WHO", "MCC"], tuitionFee: "Contact" },
    ],
    eligibility: [
      "Outstanding undergraduate record",
      "MCAT and CASPer where required",
      "English/French proficiency",
      "Strong extracurricular & interview performance",
    ],
    documents: [
      "Transcripts",
      "MCAT scores",
      "Passport",
      "Proof of funds",
    ],
    feeStructure: [
      { item: "Tuition (per year)", cost: "CAD — contact for latest" },
      { item: "Living costs", cost: "Varies by province" },
    ],
  },
};

const CountryPage = () => {
  const { country } = useParams<{ country: string }>();
  const countrySlug = country?.replace("mbbs-in-", "") || "";
  const data = countryData[countrySlug];

  if (!data) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-2xl font-bold">Country not found</h1>
          <Button asChild className="mt-4">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>MBBS in {data.name} | Fees, Universities, Admission - Trinethra Edu</title>
        <meta name="description" content={data.description} />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{data.flag}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  NMC & WHO Recognized
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                MBBS in {data.name}
              </h1>
              <p className="text-lg text-white/80 mb-8">{data.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {data.highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <h.icon className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-xs text-white/70">{h.label}</p>
                      <p className="font-semibold">{h.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="btn-hero">
                <Link to="/free-counselling">
                  Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <h3 className="font-heading text-xl font-bold mb-4">Quick Enquiry</h3>
                <LeadForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-6">
            About MBBS in {data.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.about.map((text, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Top Medical Universities in {data.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.universities.map((uni) => (
              <UniversityCard
                key={uni.slug}
                {...uni}
                country={data.name}
                countrySlug={countrySlug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-primary" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {data.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Documents Required
              </h2>
              <ul className="space-y-3">
                {data.documents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Fee Structure - MBBS in {data.name}
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4 font-semibold">Expense Type</th>
                  <th className="text-right p-4 font-semibold">Approximate Cost</th>
                </tr>
              </thead>
              <tbody>
                {data.feeStructure.map((fee, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="p-4 text-muted-foreground">{fee.item}</td>
                    <td className="p-4 text-right font-semibold text-foreground">{fee.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Fees are approximate and subject to change. Contact us for the latest fee structure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-16">
        <div className="container-custom text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Study MBBS in {data.name}?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counsellors. We'll help you choose the right 
            university and guide you through the entire admission process.
          </p>
          <Button asChild className="btn-hero">
            <Link to="/free-counselling">
              Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CountryPage;
