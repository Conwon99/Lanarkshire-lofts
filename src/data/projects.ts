import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "loft-conversion-hamilton",
    title: `Loft Conversion in Hamilton`,
    description: `Attic converted into a fully habitable bedroom in Hamilton by ${brand}. Structural work, insulation, staircase and full internal finishing.`,
    intro: `This project involved converting a previously unused attic into a comfortable double bedroom for a family home in Hamilton. The conversion added significant living space without any change to the property's footprint.`,
    details: `${brand} assessed the existing roof structure and confirmed the attic was suitable for conversion with adequate head height throughout. Structural steels were installed where required, a new staircase fitted to building regulations standards, and insulation upgraded to current thermal standards. The room was boarded, plastered and decorated to a high finish. The customer was kept informed at every stage and the project was completed within the agreed programme. Similar loft conversions are available across ${business.region}.`,
    highlights: [
      "Structural assessment completed before work started",
      "New staircase fitted to building regulations standard",
      "Insulation upgraded to current thermal standards",
      "Full internal plastering and decoration included",
    ],
    serviceType: "Loft Conversions",
    location: "Hamilton",
    image: assets.gallery[0],
    imageAlt: `Loft conversion completed by ${brand} in Hamilton`,
  },
  {
    slug: "farmhouse-reslate-lanarkshire",
    title: `Full Farmhouse Reslate in Lanarkshire`,
    description: `Full farmhouse reslate completed by ${brand} in Lanarkshire. All slates stripped, new felt laid and property reslated with quality materials.`,
    intro: `A full reslate of a traditional Lanarkshire farmhouse, including new gutters. The property had reached the end of its original slate's useful life and required a complete new roof covering.`,
    details: `${brand} stripped the entire roof covering, inspected the underlying timbers and replaced any damaged boarding before laying new roofing felt and reslating the full property with quality slates. Ridge tiles were relaid with fresh mortar and new UPVC guttering was fitted at the same time to complete the weatherproofing package. Old slates and guttering were removed and disposed of as part of the job. The farmhouse is now fully watertight and ready for years of reliable service. ${brand} carries out reslating and roofing work across ${business.region}.`,
    highlights: [
      "Full roof stripped and all timbers inspected",
      "New felt, battens and quality slates installed throughout",
      "Ridge tiles repointed and new gutters fitted at the same time",
      "Old materials removed and disposed of as part of the job",
    ],
    serviceType: "Roofing & Gutters",
    location: "Lanarkshire",
    image: assets.gallery[1],
    imageAlt: `Farmhouse reslate completed by ${brand} in Lanarkshire`,
  },
  {
    slug: "home-extension-motherwell",
    title: `Home Extension in Motherwell`,
    description: `Single-storey rear extension added to a semi-detached home in Motherwell by ${brand}. Open-plan kitchen-diner created to improve living space.`,
    intro: `This project extended a semi-detached home in Motherwell to create a larger, open-plan kitchen and dining area. The extension brought in natural light and transformed the day-to-day living experience for the family.`,
    details: `${brand} completed the groundworks, laid the foundation and built the extension in blockwork with a flat roof covering. The rear wall of the existing kitchen was opened up to connect the new extension to the existing house, creating a fully open-plan kitchen-diner. Internal finishing included underfloor heating, plastering, tiling and decoration. The project was completed within planning permitted development limits and handed over clean and fully finished. ${brand} builds home extensions across ${business.region}.`,
    highlights: [
      "Groundworks and foundation completed to engineering spec",
      "Rear wall opened up to create fully open-plan space",
      "Underfloor heating, tiling and decoration all included",
      "Completed within permitted development without planning permission",
    ],
    serviceType: "Extensions & New Builds",
    location: "Motherwell",
    image: assets.gallery[2],
    imageAlt: `Home extension completed by ${brand} in Motherwell`,
  },
  {
    slug: "domestic-renovation-east-kilbride",
    title: `Full Domestic Renovation in East Kilbride`,
    description: `Full internal renovation of a residential property in East Kilbride by ${brand}. Reconfigured layout, new plastering and full redecoration.`,
    intro: `A complete domestic renovation of a residential property in East Kilbride, purchased in need of full refurbishment before occupation. The renovation transformed the property into a comfortable, modern home.`,
    details: `${brand} stripped the property back to brick and block internally, reconfigured the ground floor layout by removing non-structural partition walls, and replastered throughout. New flooring was laid, bathrooms were fully retiled and fitted, and the property was redecorated from top to bottom. The project was completed to a high standard within the agreed programme, and the customer was able to move into a fully finished home. ${brand} carries out domestic renovations across ${business.region}.`,
    highlights: [
      "Full internal strip-out and reconfiguration",
      "New plastering throughout the entire property",
      "Bathrooms retiled and fully fitted as part of the project",
      "Handover on programme and to a high standard",
    ],
    serviceType: "Renovations",
    location: "East Kilbride",
    image: assets.gallery[3],
    imageAlt: `Domestic renovation completed by ${brand} in East Kilbride`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
