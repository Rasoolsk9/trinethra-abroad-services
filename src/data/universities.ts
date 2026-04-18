export interface UniversityRecord {
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  city: string;
  logoText: string;
  courses: string;
  recognition: string[];
  overview: string;
}

export interface CountryUniversityGroup {
  countrySlug: string;
  countryName: string;
  flag: string;
  universities: UniversityRecord[];
}

export const countryUniversityGroups: CountryUniversityGroup[] = [
  {
    countrySlug: "kyrgyzstan",
    countryName: "Kyrgyzstan",
    flag: "KG",
    universities: [
      {
        slug: "osh-state-university",
        name: "Osh State University",
        countrySlug: "kyrgyzstan",
        countryName: "Kyrgyzstan",
        city: "Osh",
        logoText: "OSU",
        courses: "250+ Courses",
        recognition: ["NMC", "WHO", "UNESCO"],
        overview: "One of the most preferred universities for Indian MBBS aspirants with affordable fee structure and clinical exposure.",
      },
      {
        slug: "ism-bishkek",
        name: "International School of Medicine",
        countrySlug: "kyrgyzstan",
        countryName: "Kyrgyzstan",
        city: "Bishkek",
        logoText: "ISM",
        courses: "150+ Courses",
        recognition: ["NMC", "WHO", "MCI"],
        overview: "Known for English-medium MBBS program, modern labs, and international student support ecosystem.",
      },
      {
        slug: "ksma",
        name: "Kyrgyz State Medical Academy",
        countrySlug: "kyrgyzstan",
        countryName: "Kyrgyzstan",
        city: "Bishkek",
        logoText: "KSMA",
        courses: "200+ Courses",
        recognition: ["NMC", "WHO", "UNESCO"],
        overview: "Historic medical academy with strong academic faculty and highly trusted MBBS curriculum.",
      },
    ],
  },
  {
    countrySlug: "russia",
    countryName: "Russia",
    flag: "RU",
    universities: [
      {
        slug: "kazan-federal",
        name: "Kazan Federal University",
        countrySlug: "russia",
        countryName: "Russia",
        city: "Kazan",
        logoText: "KFU",
        courses: "400+ Courses",
        recognition: ["NMC", "WHO", "ECFMG"],
        overview: "Top-ranked Russian university with excellent campus infrastructure and globally recognized medical degree.",
      },
      {
        slug: "bashkir-state",
        name: "Bashkir State Medical University",
        countrySlug: "russia",
        countryName: "Russia",
        city: "Ufa",
        logoText: "BSMU",
        courses: "300+ Courses",
        recognition: ["NMC", "WHO", "FAIMER"],
        overview: "Popular among Indian students for practical training, experienced faculty, and transparent admission process.",
      },
      {
        slug: "orenburg-state",
        name: "Orenburg State Medical University",
        countrySlug: "russia",
        countryName: "Russia",
        city: "Orenburg",
        logoText: "OSMU",
        courses: "180+ Courses",
        recognition: ["NMC", "WHO", "WFME"],
        overview: "Strong MBBS curriculum with good patient flow in teaching hospitals for clinical learning.",
      },
    ],
  },
  {
    countrySlug: "georgia",
    countryName: "Georgia",
    flag: "GE",
    universities: [
      {
        slug: "tsmu",
        name: "Tbilisi State Medical University",
        countrySlug: "georgia",
        countryName: "Georgia",
        city: "Tbilisi",
        logoText: "TSMU",
        courses: "220+ Courses",
        recognition: ["NMC", "WHO", "WFME"],
        overview: "Leading medical university in Georgia with high academic standards and strong international recognition.",
      },
      {
        slug: "european-university",
        name: "European University",
        countrySlug: "georgia",
        countryName: "Georgia",
        city: "Tbilisi",
        logoText: "EU",
        courses: "130+ Courses",
        recognition: ["NMC", "WHO"],
        overview: "Modern campus and student-friendly environment with well-structured MBBS curriculum in English.",
      },
      {
        slug: "batumi-state",
        name: "Batumi Shota Rustaveli State University",
        countrySlug: "georgia",
        countryName: "Georgia",
        city: "Batumi",
        logoText: "BSRSU",
        courses: "120+ Courses",
        recognition: ["NMC", "WHO"],
        overview: "Reputed state university known for quality academics, practical training, and affordable living in Batumi.",
      },
    ],
  },
  {
    countrySlug: "kazakhstan",
    countryName: "Kazakhstan",
    flag: "KZ",
    universities: [
      {
        slug: "knmu",
        name: "Kazakh National Medical University",
        countrySlug: "kazakhstan",
        countryName: "Kazakhstan",
        city: "Almaty",
        logoText: "KNMU",
        courses: "280+ Courses",
        recognition: ["NMC", "WHO", "UNESCO"],
        overview: "A premier medical university in Kazakhstan with long academic legacy and reliable MBBS outcomes.",
      },
      {
        slug: "al-farabi",
        name: "Al-Farabi Kazakh National University",
        countrySlug: "kazakhstan",
        countryName: "Kazakhstan",
        city: "Almaty",
        logoText: "AFKNU",
        courses: "260+ Courses",
        recognition: ["NMC", "WHO"],
        overview: "Well-recognized university with robust curriculum, modern labs, and quality clinical practice opportunities.",
      },
      {
        slug: "semey",
        name: "Semey Medical University",
        countrySlug: "kazakhstan",
        countryName: "Kazakhstan",
        city: "Semey",
        logoText: "SMU",
        courses: "140+ Courses",
        recognition: ["NMC", "WHO"],
        overview: "Trusted option for MBBS aspirants looking for quality education and affordable international pathway.",
      },
    ],
  },
];

export const universityRecords = countryUniversityGroups.flatMap((group) => group.universities);

export const universityBySlug = Object.fromEntries(
  universityRecords.map((university) => [university.slug, university]),
) as Record<string, UniversityRecord>;
