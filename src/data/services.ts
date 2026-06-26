import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "loft-conversion",
    title: "Loft Conversion",
    shortTitle: "Loft Conversion",
    navTitle: "Loft Conversion",
    parentCategorySlug: "loft-conversions-hamilton-motherwell",
    description: `Professional loft conversions in ${cities} and ${business.region}. Attic conversions completed to a high standard with tidy workmanship. Free quotes from ${brand}.`,
    cardDescription: `Convert unused attic space into a bedroom, home office or living area. Completed neatly across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Loft conversion service icon",
    image: assets.gallery[0],
    imageAlt: `Loft conversion completed by ${brand} in ${business.primaryCity}`,
    about: `${brand} converts unused attic and loft space into practical, comfortable rooms for homes across ${business.region}. A loft conversion is one of the most cost-effective ways to add an extra bedroom, home office or study without extending the footprint of your property. Every conversion is assessed individually with structural requirements, insulation and finishing all included in the scope of work.`,
    why: `The team focuses on quality construction and tidy finishing throughout, so the new room feels like a natural part of the home rather than an afterthought.`,
    signsYouNeed: `If you need an extra bedroom, home office or playroom but do not want to lose garden space, a loft conversion is often the best solution. Properties with a traditional pitched roof and adequate head height are usually good candidates. If your attic is currently used only for storage or is completely unused, converting it into a habitable room adds significant value to your home. Growing families, remote workers and anyone wanting more usable space regularly benefit from a well-executed loft conversion.`,
    options: `${brand} carries out standard loft conversions that make use of the existing roof structure, as well as more involved conversions for attics with lower head height. For properties where additional headroom is needed, a dormer loft conversion may be a better option — see our dormer service page for more detail. A free quote helps establish which option suits your property and budget.`,
    localContext: `Properties across ${cities} and ${business.region} range from traditional stone-built terraces to newer detached homes, each with different attic dimensions and roof structures. ${brand} works across the full Lanarkshire service area and can advise on planning requirements for your specific property type.`,
    whatToExpect: `${brand} will assess your attic space, roof structure and access options before recommending an approach. A clear quote is provided before any work starts. The conversion is completed from structural work through to internal finishing, with the site left tidy throughout. Most conversions are completed without the need for planning permission, though ${brand} can advise on this from the outset.`,
    whyChooseUs: `${brand} offers free quotes, experienced construction teams and tidy workmanship on every loft conversion. Customers across ${cities} recommend the team for clear communication, reliable timescales and a professional finish that adds real value to their homes.`,
    benefits: [
      "Add an extra bedroom, office or living area without extending the footprint.",
      "Structural work, insulation and finishing all included.",
      "Planning advice provided from the outset.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Assess the attic space, roof structure and access options.",
      "Provide a clear, itemised quote covering all aspects of the conversion.",
      "Complete structural work, insulation and internal finishing.",
      "Tidy the site throughout and hand over a fully finished room.",
    ],
    faq: [
      {
        question: "Do I need planning permission for a loft conversion?",
        answer: `Most standard loft conversions fall under permitted development and do not require planning permission. ${brand} will advise you on this when assessing your property.`,
      },
      {
        question: "How long does a loft conversion take?",
        answer: `A standard loft conversion typically takes four to eight weeks depending on the scope of work and specification. ${brand} will give a realistic timescale as part of your free quote.`,
      },
      {
        question: `Do you offer loft conversions near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides loft conversions across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
      {
        question: "Can you convert a small or low attic?",
        answer: `It depends on the head height and roof structure. ${brand} will assess your attic and advise whether a standard conversion or a dormer is the better option for your property.`,
      },
    ],
  },
  {
    slug: "dormer-loft-conversion",
    title: "Dormer Loft Conversion",
    shortTitle: "Dormer Conversion",
    navTitle: "Dormer Conversion",
    parentCategorySlug: "loft-conversions-hamilton-motherwell",
    description: `Dormer loft conversions in ${cities} and ${business.region}. Maximise headroom and usable floor space with a professionally built dormer. Free quotes from ${brand}.`,
    cardDescription: `Extend the roofline to create full-height usable space in your loft. Ideal for properties with limited head height.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Dormer loft conversion icon",
    image: assets.gallery[1],
    imageAlt: `Dormer loft conversion built by ${brand}`,
    about: `A dormer loft conversion extends the existing roofline to create full-height usable space inside the loft. ${brand} builds dormers for properties across ${business.region} where head height or floor area in the existing attic is limited. Dormers dramatically increase the practical size of a loft conversion and are popular for master bedrooms with en-suite bathrooms or larger home offices.`,
    why: `A well-built dormer blends with the existing roof and adds significant floor area and usable headroom, making the converted space genuinely comfortable to live and work in.`,
    signsYouNeed: `If your attic has limited head height that would make a standard conversion cramped, or if you want to maximise the usable floor area of a loft bedroom, a dormer conversion is worth considering. Properties with a hipped roof or a low pitch often benefit most from a dormer addition. If you are planning an en-suite bathroom in the loft, the extra space provided by a dormer is usually essential.`,
    options: `${brand} builds rear dormers, side dormers and L-shaped dormers depending on the property and planning constraints. The size and position of the dormer are determined by the existing roof structure and what will give the best internal space. A free quote and site assessment will identify the right option for your property.`,
    localContext: `Terraced and semi-detached homes across ${cities} often have rooflines suited to rear dormers, while detached properties in ${business.region} may offer more flexibility in dormer position and size. ${brand} is familiar with the property types across the area and will advise accordingly.`,
    whatToExpect: `${brand} will visit the property, assess the roof structure and advise on the most practical dormer design. A clear quote is provided before work starts. The structural frame is built first, followed by roofing, waterproofing and internal finishing. The site is kept tidy throughout and the completed dormer handed over fully finished.`,
    whyChooseUs: `${brand} builds dormers to a high structural standard with weatherproof finishing and tidy internal work. Free quotes are available across ${cities} and customers appreciate the practical advice given before any commitment is made.`,
    benefits: [
      "Maximise headroom and usable floor area in the loft.",
      "Ideal for en-suite bathrooms and larger bedrooms.",
      "Weatherproof construction with quality finishing inside and out.",
      `Free quotes across ${cities} and surrounding areas.`,
    ],
    process: [
      "Assess the roof structure and identify the best dormer position and size.",
      "Provide a clear quote covering structural work, roofing and finishing.",
      "Build the dormer frame, waterproof the roof and complete internal work.",
      "Hand over a fully finished conversion with the site left tidy.",
    ],
    faq: [
      {
        question: "Does a dormer loft conversion need planning permission?",
        answer: `Rear dormers often fall under permitted development, but this depends on the property type and local planning rules. ${brand} will advise on planning requirements during the site assessment.`,
      },
      {
        question: "How much headroom does a dormer add?",
        answer: `A well-positioned dormer can increase usable headroom to full standing height across most of the loft floor area, making the space practical for bedrooms and en-suites.`,
      },
      {
        question: `Do you build dormer conversions near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} builds dormer loft conversions across ${cities} and ${business.region}. Get in touch for a free site assessment and quote.`,
      },
    ],
  },
  {
    slug: "home-extensions",
    title: "Home Extensions",
    shortTitle: "Home Extensions",
    navTitle: "Home Extensions",
    parentCategorySlug: "extensions-new-builds-hamilton-motherwell",
    description: `Home extensions in ${cities} and ${business.region}. Single and double-storey extensions built to a high standard with free quotes from ${brand}.`,
    cardDescription: `Add extra living space at ground or first floor level without moving home. Built neatly across ${cities} and surrounding areas.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Home extensions service icon",
    image: assets.gallery[2],
    imageAlt: `Home extension completed by ${brand} in ${business.region}`,
    about: `${brand} builds single and double-storey home extensions for properties across ${business.region}. An extension is a practical way to add a larger kitchen, open-plan living space, utility room or extra bedroom without the cost and disruption of moving home. Every extension is built to a high standard with structural work, roofing, insulation and finishing all managed by the team.`,
    why: `Adding well-designed, well-built floor space to an existing home increases comfort, functionality and long-term property value in equal measure.`,
    signsYouNeed: `If your home feels cramped, your kitchen is too small, or you need an extra reception room or ground floor bedroom, an extension is often the most practical solution. Growing families, those working from home and homeowners who want to improve flow between rooms regularly choose extensions over moving. If you have garden space to use, an extension can make excellent use of it without significantly reducing outdoor area.`,
    options: `${brand} builds single-storey rear and side extensions, double-storey extensions and wrap-around extensions depending on the available space and planning constraints. The team can also advise on open-plan kitchen-diners, utility rooms and other common extension uses. A free quote identifies the most practical option for your property and budget.`,
    localContext: `Properties across ${cities} and ${business.region} include everything from traditional stone terraces to modern detached homes, each with different extension opportunities. ${brand} is familiar with local planning requirements and building regulations across Lanarkshire and will advise from the outset.`,
    whatToExpect: `${brand} will visit the property, discuss your requirements and assess the available space before providing a clear quote. Foundation work, structural build, roofing, insulation and finishing are all managed by the team. Work is planned to minimise disruption to the household throughout.`,
    whyChooseUs: `${brand} builds extensions to a consistently high standard with clear communication and tidy workmanship throughout. Free quotes are available across ${cities} and customers value the practical advice given before any commitment is made.`,
    benefits: [
      "Add living space without the cost and disruption of moving.",
      "All structural, roofing and finishing work managed in-house.",
      "Advice on planning and building regulations from the outset.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Visit the property and discuss requirements and available space.",
      "Provide a clear quote covering foundations, structure and finishing.",
      "Complete all groundwork, structural build, roofing and internal finishing.",
      "Hand over the completed extension with the site left fully tidy.",
    ],
    faq: [
      {
        question: "Do I need planning permission for a home extension?",
        answer: `Many single-storey extensions fall under permitted development, but double-storey and larger extensions usually require planning approval. ${brand} will advise on this during the site assessment.`,
      },
      {
        question: "How long does a home extension take to build?",
        answer: `A single-storey extension typically takes eight to fourteen weeks depending on size and specification. ${brand} will give a realistic timescale as part of your free quote.`,
      },
      {
        question: `Do you build home extensions near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} builds home extensions across ${cities} and ${business.region}. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "new-builds-timber-frame",
    title: "New Builds & Timber Frame",
    shortTitle: "New Builds",
    navTitle: "New Builds",
    parentCategorySlug: "extensions-new-builds-hamilton-motherwell",
    description: `New build homes and timber frame kits in ${cities} and ${business.region}. Quality construction from foundation to finish. Free quotes from ${brand}.`,
    cardDescription: `New build properties and timber frame kits constructed to a high standard across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "New build and timber frame icon",
    image: assets.gallery[3],
    imageAlt: `New build construction by ${brand} in ${business.region}`,
    about: `${brand} builds new residential properties and erects timber frame kits across ${business.region}. Timber frame is an increasingly popular choice for new builds — it is faster to erect than traditional block construction, thermally efficient and well-suited to the Scottish climate. The team manages the full build process from foundations through to internal fitting and final handover.`,
    why: `Timber frame kits offer speed of construction without compromising structural integrity or thermal performance, making them a practical choice for new homes across Lanarkshire.`,
    signsYouNeed: `If you have a self-build plot, a garden large enough for a new dwelling or a development site in ${business.region}, ${brand} can advise on the most practical construction method. Timber frame is particularly well-suited to tight build programmes, remote sites or projects where on-site wet trades need to be minimised.`,
    options: `${brand} works with both traditional block-and-beam construction and timber frame kit builds. For timber frame projects, the kit is sourced, delivered and erected by the team before internal work begins. A free quote covers the full scope from foundation to completion for both approaches.`,
    localContext: `Self-build sites across ${cities} and ${business.region} vary in access, ground conditions and planning constraints. ${brand} is familiar with the local area and can advise on build method, planning requirements and programme from the outset.`,
    whatToExpect: `${brand} will review the site, discuss your brief and advise on the most practical construction approach. A full programme and clear quote are provided before work starts. The team manages the build from groundworks through to internal fitting and final handover.`,
    whyChooseUs: `${brand} brings construction experience and local knowledge to every new build project across ${cities}. Free quotes, clear communication and a high standard of workmanship throughout the build are what customers in ${business.region} consistently report.`,
    benefits: [
      "Traditional block build and timber frame kit options available.",
      "Full build management from groundworks to handover.",
      "Thermally efficient construction suited to the Scottish climate.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Review the site and brief and advise on construction method.",
      "Provide a full programme and clear quote from foundation to finish.",
      "Complete groundworks, structural build and all internal work.",
      "Hand over the completed property with the site left fully tidy.",
    ],
    faq: [
      {
        question: "What is a timber frame kit?",
        answer: `A timber frame kit is a prefabricated structural frame manufactured off-site and erected on your plot. It is faster to build than traditional block construction and offers excellent thermal performance.`,
      },
      {
        question: "Can you manage the full new build from foundation to finish?",
        answer: `Yes. ${brand} manages the complete build process including groundworks, structural work and internal fitting, handing over a finished property ready to occupy.`,
      },
      {
        question: `Do you build new homes near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} builds new homes and erects timber frame kits across ${cities} and ${business.region}. Contact us to discuss your project.`,
      },
    ],
  },
  {
    slug: "domestic-renovations",
    title: "Domestic Renovations",
    shortTitle: "Domestic Renovations",
    navTitle: "Domestic Renovations",
    parentCategorySlug: "renovations-hamilton-motherwell",
    description: `Domestic renovations in ${cities} and ${business.region}. Full home refurbishments and internal improvements with tidy workmanship. Free quotes from ${brand}.`,
    cardDescription: `Refurbish, reconfigure or update your home with professional renovation work across ${cities} and surrounding areas.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Domestic renovations icon",
    image: assets.gallery[4],
    imageAlt: `Domestic renovation completed by ${brand} in ${business.region}`,
    about: `${brand} carries out domestic renovations for homeowners across ${business.region}, from partial refurbishments to complete internal reconfiguration. Whether you are updating a tired kitchen, reconfiguring the layout of an existing property or carrying out a full renovation before moving in, the team works to a high standard with clear communication throughout.`,
    why: `A well-planned renovation can transform the comfort, functionality and value of an existing home far more cost-effectively than moving.`,
    signsYouNeed: `If your home feels dated, cramped or poorly laid out, a domestic renovation can make a significant difference without the cost and disruption of moving. Properties purchased for renovation, inherited homes in need of updating and homes whose layout no longer suits the family living in them are all common starting points. If rooms feel underused or the property has untapped potential, a renovation conversation with ${brand} is a useful first step.`,
    options: `${brand} handles partial renovations — updating specific rooms or areas — as well as full-property refurbishments. Work can include internal structural changes, plastering, electrical and plumbing first fix co-ordination, tiling, flooring and decoration. A free quote helps establish scope, programme and cost before any commitment is made.`,
    localContext: `Homes across ${cities} and ${business.region} range from period stone cottages to modern estates, each presenting its own renovation opportunities and challenges. ${brand} has experience across a variety of property types in the area and tailors the approach accordingly.`,
    whatToExpect: `${brand} will discuss your brief, assess the property and provide a clear quote covering all agreed work. Renovations are planned to minimise disruption where possible, with the team working methodically through each area. The property is left clean and tidy at the end of each working day and handed over fully complete.`,
    whyChooseUs: `${brand} offers experienced domestic renovation teams, tidy workmanship and free quotes across ${cities}. Customers value the practical advice given upfront and the consistently high standard of finishing delivered across all projects.`,
    benefits: [
      "Partial and full-property renovations managed throughout.",
      "Internal structural, finishing and fitting work included where required.",
      "Practical advice on scope and programme before work starts.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Discuss the brief and assess the property.",
      "Provide a clear quote covering all agreed renovation work.",
      "Complete all structural, finishing and fitting work methodically.",
      "Hand over the renovated property clean, tidy and fully complete.",
    ],
    faq: [
      {
        question: "Can you carry out a full property renovation?",
        answer: `Yes. ${brand} manages full domestic renovations from stripping back through to plastering, fitting and decoration.`,
      },
      {
        question: "Do you carry out internal structural changes?",
        answer: `Yes. ${brand} can remove internal walls, reconfigure room layouts and carry out structural alterations as part of a renovation project.`,
      },
      {
        question: `Do you offer domestic renovations near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides domestic renovation services across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "commercial-renovations",
    title: "Commercial Renovations",
    shortTitle: "Commercial Renovations",
    navTitle: "Commercial Renovations",
    parentCategorySlug: "renovations-hamilton-motherwell",
    description: `Commercial renovations in ${cities} and ${business.region}. Office, retail and commercial property refurbishments with professional workmanship. Free quotes from ${brand}.`,
    cardDescription: `Refurbish and update commercial premises across ${cities} and surrounding areas to a high professional standard.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Commercial renovations icon",
    image: assets.gallery[5],
    imageAlt: `Commercial renovation project by ${brand} in ${business.region}`,
    about: `${brand} carries out commercial renovation work for businesses across ${business.region}, covering offices, retail units and other commercial premises. Commercial renovations require careful planning around business operations, and the team works to agreed programmes to minimise disruption to trading wherever possible.`,
    why: `A professionally renovated commercial space creates a better environment for staff and customers alike and helps businesses present the right image to clients and visitors.`,
    signsYouNeed: `If your commercial premises feel dated, have layout issues that affect operations or require refurbishment before a new tenant takes occupation, a commercial renovation is the practical next step. Businesses expanding into new premises, landlords refreshing properties between tenants and organisations improving staff facilities are common clients for this service.`,
    options: `${brand} handles commercial renovations of varying scale, from fitting out a single room or office to full-property refurbishments involving partition walls, flooring, ceilings, electrical and plumbing co-ordination and decoration. A free quote establishes scope, programme and cost before work begins.`,
    localContext: `Commercial properties across ${cities} and ${business.region} vary considerably in age, size and use. ${brand} assesses each project individually and provides practical advice on the most efficient approach before any commitment is made.`,
    whatToExpect: `${brand} will visit the premises, discuss your operational requirements and provide a clear quote and programme. Work is planned to minimise disruption to your business and completed to a consistently high standard. The premises are left clean and ready to use at handover.`,
    whyChooseUs: `${brand} brings the same high standard of workmanship to commercial projects as to domestic work. Free quotes, reliable programme delivery and tidy workmanship are what businesses across ${cities} regularly report when recommending the team.`,
    benefits: [
      "Commercial renovations planned around business operations.",
      "Partition, flooring, ceiling and finishing work all included where required.",
      "Clear programme agreed before work starts.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Visit the premises and discuss operational requirements.",
      "Provide a clear quote and agreed programme covering all renovation work.",
      "Complete all structural, fitting and finishing work to schedule.",
      "Hand over the renovated premises clean, tidy and ready to use.",
    ],
    faq: [
      {
        question: "Can you renovate commercial premises while we continue trading?",
        answer: `${brand} plans work around your operational requirements where possible, agreeing a programme that minimises disruption to your business.`,
      },
      {
        question: "Do you carry out office fit-outs as well as full renovations?",
        answer: `Yes. ${brand} handles commercial fit-outs and full refurbishments across ${business.region}.`,
      },
      {
        question: `Do you offer commercial renovations near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides commercial renovation services across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "reslating-roofing",
    title: "Reslating & Roof Repairs",
    shortTitle: "Reslating",
    navTitle: "Reslating",
    parentCategorySlug: "roofing-gutters-hamilton-motherwell",
    description: `Reslating and roof repairs in ${cities} and ${business.region}. Full farmhouse reslates and section repairs with weatherproof workmanship. Free quotes from ${brand}.`,
    cardDescription: `Full reslates and targeted roof repairs to keep your property watertight across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Reslating and roof repairs icon",
    image: assets.gallery[0],
    imageAlt: `Reslating work completed by ${brand} in ${business.region}`,
    about: `${brand} carries out full reslating and targeted roof repairs for properties across ${business.region}. Whether you need a complete new roof covering for a traditional farmhouse or a patch repair to stop a leak, the team works safely at height with quality materials and weatherproof finishing. Slipped, cracked or missing slates are a common issue in the area and are best addressed before water ingress causes secondary damage.`,
    why: `A weathertight roof is the most important protection a building has against the Scottish climate. Getting roofing work done properly the first time prevents costly secondary damage to timbers, insulation and internal finishes.`,
    signsYouNeed: `Slipped or missing slates, water stains on ceilings, visible daylight in the attic and loose ridge tiles are all signs that roofing work may be needed. After storms, it is worth checking the roof from the ground for obvious damage. Older properties with original slating may have reached the end of the slate's useful life and benefit more from a full reslate than repeated patch repairs.`,
    options: `${brand} provides full reslating where the entire roof covering is stripped and replaced with quality slates, as well as targeted repairs where individual slates or sections are replaced. Ridge and hip work, lead flashings and felt underlays are all included in the scope where required. A free quote will identify the most cost-effective approach for your property.`,
    localContext: `Properties across ${cities} and ${business.region} face significant weather exposure, and older stone-built homes in the area often have roofs that are approaching the end of their original slate's lifespan. ${brand} is familiar with the roof styles and materials common across Lanarkshire and can advise on the best approach for your property.`,
    whatToExpect: `${brand} will inspect the roof from ground level and, where safe to do so, from the roof itself, before recommending repair or reslating. A clear quote is provided before any work starts. Old slates are removed and disposed of, new felt is laid where required, and new slates are fixed to a weatherproof finish. The site is left tidy and the work inspected before handover.`,
    whyChooseUs: `${brand} carries out roofing work safely, thoroughly and to a high standard, with free quotes across ${cities}. Customers recommend the team for reliable assessments, competitive pricing and weatherproof workmanship that holds up in Lanarkshire's demanding climate.`,
    benefits: [
      "Full reslates and targeted repairs using quality slates.",
      "Ridge, hip and flashing work included in scope where required.",
      "Old slates removed and disposed of as part of the job.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Inspect the roof and assess the condition of slates, ridges and flashings.",
      "Recommend repair or full reslating and provide a clear quote.",
      "Strip old slates, lay new felt where required, and fix new slates.",
      "Complete ridge and flashing work and leave the site fully tidy.",
    ],
    faq: [
      {
        question: "How do I know if I need a full reslate or just a repair?",
        answer: `${brand} will inspect the roof and advise honestly on whether a repair or full reslate is the more cost-effective option for your property.`,
      },
      {
        question: "Can you repair storm-damaged slates?",
        answer: `Yes. ${brand} carries out storm damage repairs and can replace individual slates or sections as needed.`,
      },
      {
        question: `Do you offer reslating near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides reslating and roof repair services across ${cities} and ${business.region}. Contact us for a free quote.`,
      },
    ],
  },
  {
    slug: "gutters-fascias",
    title: "Gutters & Fascias",
    shortTitle: "Gutters & Fascias",
    navTitle: "Gutters & Fascias",
    parentCategorySlug: "roofing-gutters-hamilton-motherwell",
    description: `Guttering and fascia replacement in ${cities} and ${business.region}. New gutters fitted neatly and old materials disposed of. Free quotes from ${brand}.`,
    cardDescription: `Replace blocked, leaking or failing gutters and fascias across ${cities} and surrounding areas. Old materials removed and disposed of.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Gutters and fascias icon",
    image: assets.gallery[1],
    imageAlt: `New gutters fitted by ${brand} in ${business.region}`,
    about: `${brand} replaces failing gutters and fascias for homes and commercial properties across ${business.region}. Old UPVC or cast iron guttering that is cracked, leaking or pulling away from the fascia board can allow water to run down external walls, causing damp and damage. ${brand} removes old guttering, replaces fascia boards where required and installs new guttering systems that are correctly pitched for effective drainage.`,
    why: `Properly functioning gutters protect external walls, foundations and internal structures from water damage that can be expensive to remedy if left untreated.`,
    signsYouNeed: `Visible cracks in gutters, water marks on external walls below the roofline, gutters sagging or pulling away from the fascia and overflowing gutters during rain are all signs that replacement is needed. Blocked gutters that cannot be cleared by cleaning, or fascia boards that are rotting or delaminating, are also common reasons for replacement.`,
    options: `${brand} replaces guttering on a full-run or section basis depending on the condition of the existing system. Old cast iron or UPVC guttering is removed and disposed of, fascia boards are replaced where necessary, and new guttering is fitted at the correct fall for efficient drainage. Downpipes are also included in the scope where required. A free quote identifies what needs doing.`,
    localContext: `Heavy rainfall across ${business.region} means gutters and downpipes work hard throughout the year. Older properties in ${cities} with original cast iron guttering often benefit from replacement with modern UPVC systems that require less maintenance.`,
    whatToExpect: `${brand} will inspect the guttering and fascias from ground level and, where safe, from a ladder, before providing a clear quote. Old guttering is removed and disposed of, fascia boards replaced where needed, and new guttering installed and tested for correct fall. The site is left tidy at completion.`,
    whyChooseUs: `${brand} replaces gutters and fascias neatly and efficiently with free quotes across ${cities}. Customers value the prompt response, honest assessment and tidy workmanship that leaves properties looking well-maintained and properly protected.`,
    benefits: [
      "Full-run and section guttering replacement available.",
      "Old guttering and fascias removed and disposed of.",
      "Fascia boards replaced where required as part of the job.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Inspect guttering and fascias and assess what needs replacing.",
      "Provide a clear quote covering gutters, downpipes and fascias.",
      "Remove old guttering and fascia boards and dispose of materials.",
      "Fit new guttering at the correct fall and leave the site tidy.",
    ],
    faq: [
      {
        question: "Do you remove and dispose of old guttering?",
        answer: `Yes. Old guttering, downpipes and fascia boards are removed and disposed of as part of the replacement work.`,
      },
      {
        question: "Can you replace cast iron guttering with UPVC?",
        answer: `Yes. ${brand} replaces cast iron and old UPVC guttering with modern systems that are lighter, maintenance-friendly and effective at managing Scottish rainfall.`,
      },
      {
        question: `Do you replace gutters and fascias near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides guttering and fascia replacement across ${cities} and ${business.region}. Get in touch for a free quote.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for loft conversions, extensions, renovations and roofing across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} to discuss your project and arrange a free no-obligation quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote icon",
    image: assets.gallery[5],
    imageAlt: `Construction work completed by ${brand} in ${business.region}`,
    about: `If you are not sure where to start, send ${brand} a message or call with a few details about the work. The team can discuss your options across loft conversions, extensions, renovations and roofing, and confirm coverage for your area.`,
    why: `A quick conversation helps clarify the work required, the service area and whether a site visit is needed before providing a detailed quote.`,
    signsYouNeed: `If you know work is needed but are unsure of scope, cost or the best approach, a free quote is the best first step. Photos of the property and a brief description of what you are looking to achieve help the team respond quickly with practical advice.`,
    options: `${brand} quotes for all listed services across loft conversions, extensions, new builds, renovations and roofing. You can call, message through the contact form or email with details. No-obligation quotes help you compare options before committing.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}. If you are nearby, get in touch to confirm coverage.`,
    whatToExpect: `Send a message or call with the service you need. Share photos if helpful. The team will discuss the project, confirm the service area and arrange a site visit or quote as needed.`,
    whyChooseUs: `Free quotes, clear next steps and local expertise across ${cities}. Customers appreciate honest advice before any commitment is made.`,
    benefits: [
      "Free quotes for all listed services.",
      "Clear next steps before work starts.",
      `Local service across ${cities} and ${business.region}.`,
      "Helpful advice on the most practical option for your property.",
    ],
    process: [
      "Send a message or call with the service you need.",
      "Share photos or details to help describe the project.",
      "Arrange a site visit or quote where required.",
      "Agree the work, programme and practical details before starting.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: `A short description of the work, your location and photos of the property or area are helpful. The more detail you provide, the faster ${brand} can respond with practical advice.`,
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding towns across ${business.region}.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
