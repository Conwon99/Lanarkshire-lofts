/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Lanarkshire Lofts and Construction Ltd",
  alternateName: "Lanarkshire Lofts",
  tagline: "Loft conversions, extensions and renovations across Lanarkshire. Free quotes available.",
  gbpCategory: "Home Improvement",

  phone: "+44 7932 996756",
  phoneDisplay: "+44 7932 996756",
  phoneLocal: "07932 996756",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "lanarkshirelofts@gmail.com",
  siteUrl: "https://www.lanarkshirelofts.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61585039282649",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lanarkshire+Lofts+and+Construction+Ltd",
  whatsappUrl: null,

  primaryCity: "Hamilton",
  secondaryCity: "Motherwell",
  region: "Lanarkshire",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Hamilton",
    addressRegion: "Lanarkshire",
    addressCountry: "GB",
  },

  mapCenter: [55.777, -4.040],
  serviceAreaPolygon: [
    [55.65, -4.25],
    [55.65, -3.75],
    [55.90, -3.75],
    [55.90, -4.30],
    [55.65, -4.25],
  ],

  assets: {
    hero: "/lanarkshireloftsltd-hero.jpg",
    logo: "/lanarkshireloftsltd-logo.png",
    about: "/lanarkshireloftsltd-about.jpg",
    gallery: [
      "/lanarkshireloftsltd-gal-01.jpg",
      "/lanarkshireloftsltd-gal-02.jpg",
      "/lanarkshireloftsltd-gal-03.jpg",
      "/lanarkshireloftsltd-gal-04.jpg",
      "/lanarkshireloftsltd-gal-05.jpg",
      "/lanarkshireloftsltd-gal-06.jpg",
    ],
  },

  serviceTypes: [
    "Loft conversions",
    "Dormer loft conversions",
    "Home extensions",
    "New builds and timber frame kits",
    "Domestic renovations",
    "Commercial renovations",
    "Reslating and roofing",
    "Guttering and fascias",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Loft Conversions & Construction in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides loft conversions, extensions and renovations across ${citiesLabel()} and ${business.region}. Free quotes available.`,
  );

export const homepageH1 = () => `Loft Conversions & Construction in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `loft conversions ${business.primaryCity}, extensions ${business.primaryCity}, renovations ${business.region}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} loft conversions and construction in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
