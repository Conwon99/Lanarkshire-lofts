import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brand} by phone or message with details of your project and we can arrange a free no-obligation quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding towns across ${business.region}, including East Kilbride, Wishaw, Bellshill, Blantyre, Rutherglen, Coatbridge, Airdrie, Lanark, Larkhall and Carluke. If you are nearby, get in touch to confirm availability.`,
  },
  {
    question: "What construction services do you offer?",
    answer: `${brand} provides loft conversions, dormer loft conversions, home extensions, new builds and timber frame kits, domestic and commercial renovations, reslating and roof repairs, and guttering and fascias.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand} or use the contact form with a brief description of the work and your location. Photos are helpful. The team will discuss your project and arrange a quote.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
