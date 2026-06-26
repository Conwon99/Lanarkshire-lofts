import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your project.`,
  },
  {
    question: `What services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related construction work.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brand} by phone or through the contact form with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a loft conversion or construction contractor near ${name}?`,
    answer: `Yes. ${brand} is a local contractor serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "hamilton",
    name: "Hamilton",
    description: `${brand} provides loft conversions, extensions and renovations in Hamilton and surrounding areas.`,
    intro: `For customers in Hamilton, ${brand} provides quality loft conversions, home extensions, renovations and roofing work with tidy workmanship and free quotes.`,
    nearby: ["Motherwell", "Blantyre", "Larkhall", "Bothwell"],
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    description: `${brand} provides loft conversions, extensions and renovations in Motherwell and nearby areas.`,
    intro: `${brand} helps homeowners and businesses in Motherwell with loft conversions, extensions, renovations and roofing. Free quotes available.`,
    nearby: ["Hamilton", "Wishaw", "Bellshill", "Coatbridge"],
  },
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    description: `${brand} provides loft conversions, extensions and renovations in East Kilbride and nearby areas.`,
    intro: `${brand} supports East Kilbride customers with loft conversions, home extensions and renovation work. Free quotes and professional construction across South Lanarkshire.`,
    nearby: ["Hamilton", "Blantyre", "Rutherglen", "Cambuslang"],
  },
  {
    slug: "wishaw",
    name: "Wishaw",
    description: `${brand} provides loft conversions, extensions and renovations in Wishaw and surrounding areas.`,
    intro: `Customers in Wishaw can call on ${brand} for loft conversions, extensions, domestic renovations and roofing with free quotes available.`,
    nearby: ["Motherwell", "Carluke", "Bellshill", "Airdrie"],
  },
  {
    slug: "bellshill",
    name: "Bellshill",
    description: `${brand} provides loft conversions, extensions and renovations in Bellshill and nearby areas.`,
    intro: `${brand} covers Bellshill with loft conversions, home extensions and renovation work. Reliable construction and free quotes from a local team.`,
    nearby: ["Motherwell", "Coatbridge", "Uddingston", "Wishaw"],
  },
  {
    slug: "blantyre",
    name: "Blantyre",
    description: `${brand} provides loft conversions, extensions and renovations in Blantyre and surrounding areas.`,
    intro: `For Blantyre customers, ${brand} offers loft conversions, extensions and renovations with free quotes and professional workmanship throughout.`,
    nearby: ["Hamilton", "East Kilbride", "Cambuslang", "Rutherglen"],
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    description: `${brand} provides loft conversions, extensions and renovations in Rutherglen and nearby areas.`,
    intro: `${brand} helps Rutherglen homeowners with loft conversions, home extensions and renovation work. Free quotes available across South Lanarkshire.`,
    nearby: ["Blantyre", "Cambuslang", "East Kilbride", "Hamilton"],
  },
  {
    slug: "coatbridge",
    name: "Coatbridge",
    description: `${brand} provides loft conversions, extensions and renovations in Coatbridge and surrounding areas.`,
    intro: `${brand} covers Coatbridge with loft conversions, extensions, renovations and roofing. Professional construction teams and free quotes across North Lanarkshire.`,
    nearby: ["Airdrie", "Bellshill", "Motherwell", "Uddingston"],
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    description: `${brand} provides loft conversions, extensions and renovations in Airdrie and nearby areas.`,
    intro: `Customers in Airdrie can rely on ${brand} for loft conversions, extensions, renovations and roofing with free quotes and quality construction.`,
    nearby: ["Coatbridge", "Wishaw", "Bellshill", "Motherwell"],
  },
  {
    slug: "lanark",
    name: "Lanark",
    description: `${brand} provides loft conversions, extensions and renovations in Lanark and surrounding areas.`,
    intro: `${brand} serves Lanark and the surrounding South Lanarkshire countryside with loft conversions, extensions and renovation work. Free quotes available.`,
    nearby: ["Carluke", "Hamilton", "Larkhall", "Wishaw"],
  },
  {
    slug: "larkhall",
    name: "Larkhall",
    description: `${brand} provides loft conversions, extensions and renovations in Larkhall and nearby areas.`,
    intro: `For Larkhall customers, ${brand} provides loft conversions, home extensions and renovation work with professional workmanship and free quotes.`,
    nearby: ["Hamilton", "Lanark", "Carluke", "Blantyre"],
  },
  {
    slug: "carluke",
    name: "Carluke",
    description: `${brand} provides loft conversions, extensions and renovations in Carluke and surrounding areas.`,
    intro: `${brand} covers Carluke with loft conversions, extensions and renovations. Local construction expertise with free quotes across Lanarkshire.`,
    nearby: ["Lanark", "Wishaw", "Larkhall", "Hamilton"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Loft Conversions & Construction in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
