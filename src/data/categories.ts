import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "loft-conversions-hamilton-motherwell",
    name: "Loft Conversions",
    title: `Loft Conversions in ${cities}`,
    description: `Professional loft conversion and attic conversion specialists across ${cities} and ${region}. Free quotes from ${brand}.`,
    intro: `${brand} transforms unused attic space into practical living areas for homes across ${region}. From standard loft conversions to full dormer builds, every job is completed to a high standard with tidy workmanship and free quotes.`,
    localParagraph: `Properties across ${cities} and nearby towns often have attic space that can be converted into an extra bedroom, home office or playroom. ${brand} assesses the roof structure and advises on the most practical conversion for each property.`,
    image: assets.gallery[0],
    imageAlt: `Loft conversion completed by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["loft-conversion", "dormer-loft-conversion"],
    matrixTitleSuffix: "Loft Conversions",
    serviceNameLower: "loft conversions",
    contractorPhrase: "loft conversion specialist",
    nearMePhrase: "loft conversion near me",
    metaTemplate: (displayName) =>
      `Professional loft conversions in ${displayName} by ${brand}. Attic conversions, dormers and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides professional loft conversions in ${town}. Whether you need a standard attic conversion or a full dormer, jobs are completed neatly with free quotes and clear communication throughout.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often have attic space that can be converted into valuable living area. If you are searching for a loft conversion specialist near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From planning through to completion, ${brand} helps homeowners in ${town} unlock the potential of their attic space. Old boarding can be removed, insulation upgraded and the new room finished to your specification. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you carry out loft conversions in ${town}?`,
        answer: `Yes. ${brand} completes loft conversions in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you build a dormer loft conversion in ${town}?`,
        answer: `Yes. ${brand} builds dormer extensions to maximise headroom and floor space in ${town} properties. Contact us with photos for a quicker quote.`,
      },
      {
        question: `How do I get a loft conversion quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description and your location in ${town}. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "extensions-new-builds-hamilton-motherwell",
    name: "Extensions & New Builds",
    title: `Extensions & New Builds in ${cities}`,
    description: `Home extensions, new builds and timber frame kits across ${cities} and ${region}. Practical construction solutions and free quotes from ${brand}.`,
    intro: `${brand} builds home extensions and new builds across ${region}, including timber frame kits for those looking for a faster build route. Work is planned carefully and completed to a high standard with free quotes.`,
    localParagraph: `Whether you need extra space at ground floor level or a brand-new property in ${cities}, ${brand} can assess the site, advise on planning requirements and provide a detailed quote for the work.`,
    image: assets.gallery[1],
    imageAlt: `Home extension completed by ${brand} in ${region}`,
    serviceSlugs: ["home-extensions", "new-builds-timber-frame"],
    matrixTitleSuffix: "Extensions & New Builds",
    serviceNameLower: "extensions and new builds",
    contractorPhrase: "builder",
    nearMePhrase: "extensions and new builds near me",
    metaTemplate: (displayName) =>
      `Home extensions and new builds in ${displayName} by ${brand}. Timber frame kits and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides home extensions and new build construction in ${town}. From ground floor extensions to timber frame new builds, work is completed neatly with free quotes and clear communication.`,
    localTemplate: (town, nearby) =>
      `Adding space to an existing property or starting a new build in ${town} requires careful planning and skilled construction. ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} helps homeowners and landowners in ${town} add space and value through well-built extensions and new builds. Timber frame kits offer a fast, cost-effective alternative to traditional block construction. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you build home extensions in ${town}?`,
        answer: `Yes. ${brand} builds single and double-storey home extensions in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you supply and build a timber frame kit in ${town}?`,
        answer: `Yes. ${brand} works with timber frame kits for new builds and extensions in ${town}. Get in touch for a quote.`,
      },
      {
        question: `How do I get an extension quote in ${town}?`,
        answer: `Contact ${brand} with details of the work and your location in ${town}. Photos and site plans help us respond quickly.`,
      },
    ],
  },
  {
    slug: "renovations-hamilton-motherwell",
    name: "Renovations",
    title: `Renovations in ${cities}`,
    description: `Domestic and commercial renovations across ${cities} and ${region}. Quality workmanship and free quotes from ${brand}.`,
    intro: `${brand} carries out domestic and commercial renovations across ${region}, breathing new life into tired properties. Work is planned around the customer's needs and completed with tidy, professional results.`,
    localParagraph: `Older properties across ${cities} and ${region} often benefit from renovation work — from internal reconfiguration through to full refurbishments. ${brand} advises on the best approach and provides a clear quote before work starts.`,
    image: assets.gallery[2],
    imageAlt: `Renovation work completed by ${brand} in ${region}`,
    serviceSlugs: ["domestic-renovations", "commercial-renovations"],
    matrixTitleSuffix: "Renovations",
    serviceNameLower: "renovations",
    contractorPhrase: "renovation contractor",
    nearMePhrase: "renovations near me",
    metaTemplate: (displayName) =>
      `Domestic and commercial renovations in ${displayName} by ${brand}. Quality workmanship and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides domestic and commercial renovation work in ${town}. Whether you are updating a tired interior or refurbishing a commercial space, jobs are completed to a high standard with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} range from traditional stone-built homes to modern commercial units, each requiring a tailored approach. ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From partial refurbishments to full-scale renovations, ${brand} helps customers in ${town} transform their properties. Work is planned to minimise disruption and completed to a consistently high standard. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you carry out renovations in ${town}?`,
        answer: `Yes. ${brand} completes domestic and commercial renovations in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you renovate a commercial property in ${town}?`,
        answer: `Yes. ${brand} works on both domestic and commercial renovation projects in ${town}. Get in touch to discuss your requirements.`,
      },
      {
        question: `How do I get a renovation quote in ${town}?`,
        answer: `Contact ${brand} with a description of the work and your location in ${town}. Photos and floor plans help us provide a more accurate quote.`,
      },
    ],
  },
  {
    slug: "roofing-gutters-hamilton-motherwell",
    name: "Roofing & Gutters",
    title: `Roofing & Gutters in ${cities}`,
    description: `Reslating, roof repairs and guttering across ${cities} and ${region}. Weatherproof workmanship and free quotes from ${brand}.`,
    intro: `${brand} handles reslating, roof repairs and guttering for properties across ${region}. From full farmhouse reslates to new gutters and fascias, work is carried out safely and to a high standard.`,
    localParagraph: `Roofs across ${cities} and ${region} face demanding weather conditions throughout the year. ${brand} inspects, advises and carries out roofing and guttering work to keep properties watertight and well-maintained.`,
    image: assets.gallery[3],
    imageAlt: `Roofing and guttering work by ${brand} in ${region}`,
    serviceSlugs: ["reslating-roofing", "gutters-fascias"],
    matrixTitleSuffix: "Roofing & Gutters",
    serviceNameLower: "roofing and guttering",
    contractorPhrase: "roofing contractor",
    nearMePhrase: "roofing near me",
    metaTemplate: (displayName) =>
      `Reslating, roof repairs and guttering in ${displayName} by ${brand}. Weatherproof workmanship and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides reslating, roof repairs and guttering work in ${town}. Whether you need a full reslate or new gutters, jobs are completed safely and to a high standard with free quotes.`,
    localTemplate: (town, nearby) =>
      `Roofs in ${town} endure significant weather exposure throughout the year. If you are searching for a roofing contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From individual slate replacements to full farmhouse reslates and new guttering systems, ${brand} keeps properties in ${town} weathertight. Old gutters and fascias are removed and disposed of as part of the work. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you carry out roofing work in ${town}?`,
        answer: `Yes. ${brand} completes reslating and roof repairs in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you replace gutters and fascias in ${town}?`,
        answer: `Yes. ${brand} removes old gutters and installs new guttering and fascias in ${town}. Contact us for a free quote.`,
      },
      {
        question: `How do I get a roofing quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description and your location in ${town}. Photos of the roof help us respond quickly.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
