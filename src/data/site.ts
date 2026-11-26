// ============================================================
// EDIT THIS FILE FIRST. Everything marked TODO is a placeholder
// and must be replaced with real, verifiable business data.
// Never publish invented licenses, reviews or project photos.
// ============================================================
export const site = {
  name: 'Masonry Pompano Beach',
  shortName: 'Masonry Pompano Beach',
  phone: '(954) 000-0000',            // TODO real phone
  phoneHref: '+19540000000',          // TODO digits only, with +1
  // Show a detail only once it is real and verified. Until then it is hidden everywhere (page, footer, structured data).
  showEmail: false,
  showAddress: false,   // only if the address is publicly displayed and confirmed
  showHours: false,
  showPhone: false,                   // set true when the real number is ready; phone buttons/links then appear
  email: 'info@example-masonry.com',  // TODO
  address: { street: '123 Example St', city: 'Pompano Beach', state: 'FL', zip: '33060' }, // TODO
  yearsInBusiness: null as number | null, // TODO e.g. 15. Leave null to hide claims
  hours: 'Mon-Sat 7am-6pm',           // TODO
  responseTime: '',                   // TODO e.g. 'We reply within 1 business day'. Leave empty until confirmed.
  formEndpoint: '/api/estimate',      // Cloudflare Pages Function (functions/api/estimate.js), sends via Resend
  geo: { lat: 26.2379, lng: -80.1248 }, // Pompano Beach center, TODO exact address coords
  url: 'https://masonrycontractorpompanobeach.com',
};

export type Service = {
  slug: string; name: string; short: string; keyword: string;
  title: string; description: string; h1: string; intro: string;
  includes: string[]; faqs: { q: string; a: string }[]; audience: 'residential' | 'commercial' | 'both';
};

export const services: Service[] = [
  {
    slug: 'brick-masonry', name: 'Brick Masonry', keyword: 'brick masonry contractor Pompano Beach',
    short: 'Brick walls, veneer, columns, steps and repairs.',
    title: 'Brick Masonry Contractor in Pompano Beach, FL | Free Estimate',
    description: 'Brick masonry contractor in Pompano Beach: new brickwork, bricklaying, brick veneer, columns and repointing for homes and businesses. Request a free estimate.',
    h1: 'Brick Masonry Contractor in Pompano Beach, FL',
    intro: 'New brickwork, matching repairs and structural brick for homes and commercial properties across Pompano Beach and Broward County.',
    includes: ['Brick veneer and accent walls', 'Columns, piers and entry features', 'Steps and walkways', 'Brick matching for repairs', 'Tuckpointing and re-pointing'],
    faqs: [
      { q: 'Can you match existing brick?', a: 'Yes. We match size, color and mortar joint profile as closely as the existing material allows, and we show samples before work starts.' },
      { q: 'Do brick projects need a permit in Pompano Beach?', a: 'Structural walls and many new builds do. We confirm requirements with the City of Pompano Beach for your project.' },
    ],
    audience: 'both',
  },
  {
    slug: 'block-masonry', name: 'Block Masonry', keyword: 'concrete block contractor Pompano Beach',
    short: 'CBS construction, additions and structural block work.',
    title: 'Concrete Block Contractor in Pompano Beach, FL | CBS Masonry',
    description: 'Concrete block masonry contractor in Pompano Beach: CBS construction, additions and structural block work, built to Florida hurricane code. Free estimates.',
    h1: 'Concrete Block Masonry Contractor in Pompano Beach, FL',
    intro: 'Structural concrete block (CBS) for additions, garages, shells and commercial buildings, reinforced and built to South Florida wind-load requirements.',
    includes: ['Reinforced CMU walls with rebar and grout', 'Home additions and garages', 'Tie beams and columns', 'Commercial block shells', 'Coordination with inspections'],
    faqs: [
      { q: 'Is block construction required to meet hurricane standards?', a: 'Broward County is in the High-Velocity Hurricane Zone, so reinforcement, tie beams and anchoring must meet Florida Building Code. We build to the approved plans.' },
    ],
    audience: 'both',
  },
  {
    slug: 'concrete-block-walls', name: 'Concrete Block Walls', keyword: 'concrete block wall contractor Pompano Beach',
    short: 'Privacy, perimeter and fence walls.',
    title: 'Concrete Block Wall Contractor in Pompano Beach, FL',
    description: 'Privacy, perimeter and security block walls in Pompano Beach: engineered, permitted and finished with stucco or paint. Request a free quote.',
    h1: 'Concrete Block Wall Contractor in Pompano Beach, FL',
    intro: 'Privacy and perimeter block walls, sized and reinforced for Florida wind loads, finished in stucco, paint or veneer.',
    includes: ['Privacy and fence walls', 'Gate columns and pilasters', 'Stucco, paint or stone finish', 'Footings and reinforcement', 'Permit and inspection coordination'],
    faqs: [
      { q: 'How tall can a block wall be?', a: 'Height limits depend on zoning and setbacks. We check your property rules before quoting.' },
      { q: 'How much does a block wall cost?', a: 'Cost depends on length, height, footing, finish and access. We give a written, itemized estimate after a site visit.' },
    ],
    audience: 'both',
  },
  {
    slug: 'concrete-masonry', name: 'Concrete Masonry', keyword: 'concrete masonry Pompano Beach',
    short: 'Concrete work paired with masonry construction.',
    title: 'Concrete Masonry in Pompano Beach, FL | Slabs, Footings & Walls',
    description: 'Concrete masonry contractor in Pompano Beach: footings, slabs, tie beams and concrete masonry units (CMU) built together for strong, code-compliant structures.',
    h1: 'Concrete Masonry Services in Pompano Beach, FL',
    intro: 'Footings, tie beams, slabs and masonry units built as one system for durable structures.',
    includes: ['Footings and stem walls', 'Tie beams and columns', 'Slab-on-grade tie-ins', 'Grout and rebar placement'],
    faqs: [{ q: 'Do you handle both concrete and block?', a: 'Yes, so one crew coordinates the whole structure.' }],
    audience: 'both',
  },
  {
    slug: 'masonry-repair', name: 'Masonry Repair', keyword: 'masonry repair Pompano Beach',
    short: 'Cracks, spalling, tuckpointing and brick repair.',
    title: 'Masonry Repair in Pompano Beach, FL | Brick & Block Repair',
    description: 'Brick repair and block wall repair in Pompano Beach: cracks, spalling, loose or crumbling brick, tuckpointing and water damage from salt air and storms.',
    h1: 'Masonry Repair in Pompano Beach, FL',
    intro: 'Salt air, moisture and storms damage masonry. We diagnose the cause, repair it properly and help stop it coming back.',
    includes: ['Crack and settlement repair', 'Spalling and rebar corrosion repair', 'Tuckpointing and re-pointing', 'Brick replacement and matching', 'Sealing and waterproofing'],
    faqs: [
      { q: 'Why is my block wall cracking?', a: 'Common causes are settlement, missing control joints, rusting rebar and water intrusion. We inspect before recommending a repair.' },
      { q: 'Do you do emergency storm repair?', a: 'Tell us what happened through the estimate form.' },
    ],
    audience: 'both',
  },
  {
    slug: 'stone-masonry', name: 'Stone Masonry', keyword: 'stone masonry Pompano Beach',
    short: 'Natural and manufactured stone veneer and features.',
    title: 'Stone Masonry in Pompano Beach, FL | Veneer & Outdoor Features',
    description: 'Stone masonry in Pompano Beach: natural and manufactured stone veneer, stonework, outdoor kitchens and fireplaces. Built to last in coastal conditions.',
    h1: 'Stone Masonry in Pompano Beach, FL',
    intro: 'Stone veneer, accent walls and outdoor features detailed for coastal moisture and salt exposure.',
    includes: ['Stone veneer', 'Outdoor kitchens and fireplaces', 'Entry and column cladding', 'Pool surrounds and coping'],
    faqs: [{ q: 'Natural or manufactured stone?', a: 'We explain cost, weight, maintenance and look so you can choose.' }],
    audience: 'residential',
  },
  {
    slug: 'retaining-walls', name: 'Retaining Walls', keyword: 'retaining wall contractor Pompano Beach',
    short: 'Block and stone retaining and seawall-adjacent walls.',
    title: 'Retaining Wall Contractor in Pompano Beach, FL',
    description: 'Masonry retaining walls in Pompano Beach: engineered block and stone retaining walls with proper drainage. Free site visit and written estimate.',
    h1: 'Retaining Wall Contractor in Pompano Beach, FL',
    intro: 'Retaining walls fail when drainage and footing are ignored. We build them with both done right.',
    includes: ['Block and stone retaining walls', 'Drainage and backfill', 'Engineering coordination when required', 'Planters and raised beds'],
    faqs: [{ q: 'Do retaining walls need engineering?', a: 'Taller walls or walls near structures typically do. We tell you at the estimate.' }],
    audience: 'both',
  },
  {
    slug: 'brick-walls', name: 'Brick Walls', keyword: 'brick wall contractor Pompano Beach',
    short: 'Decorative and structural brick walls.',
    title: 'Brick Wall Contractor in Pompano Beach, FL',
    description: 'Brick wall builders in Pompano Beach: brick wall construction for garden, boundary and feature walls, plus brick fences. Free estimates.',
    h1: 'Brick Wall Contractor in Pompano Beach, FL',
    intro: 'Garden walls, boundary walls and feature walls in brick, laid by experienced masons.',
    includes: ['Garden and boundary walls', 'Feature walls', 'Gate piers', 'Matching existing brick'],
    faqs: [{ q: 'Brick or block wall?', a: 'Block with a brick or stucco finish is often the strongest and most cost-effective. We explain the options.' }],
    audience: 'residential',
  },
  {
    slug: 'commercial-masonry', name: 'Commercial Masonry', keyword: 'commercial masonry contractor Pompano Beach',
    short: 'Block, brick and restoration for businesses, HOAs and GCs.',
    title: 'Commercial Masonry Contractor in Pompano Beach, FL',
    description: 'Commercial masonry services in Pompano Beach: block shells, brick, restoration and repair for GCs, property managers and HOAs. Request a bid.',
    h1: 'Commercial Masonry Contractor in Pompano Beach, FL',
    intro: 'Reliable crews and clear scopes for general contractors, property managers and associations.',
    includes: ['Block shells and structural masonry', 'Restoration and repair for condos and HOAs', 'Bid support and takeoffs', 'Clear scopes and schedules'],
    faqs: [{ q: 'Can you price a job from our plans?', a: 'Yes. Send plans or a scope through the estimate form and we will price it as a bid.' }],
    audience: 'commercial',
  },
  {
    slug: 'residential-masonry', name: 'Residential Masonry', keyword: 'residential masonry contractor Pompano Beach',
    short: 'Masonry for homeowners: walls, repairs, additions, outdoor living.',
    title: 'Residential Masonry Contractor in Pompano Beach, FL',
    description: 'Residential masonry in Pompano Beach: walls, additions, repairs and outdoor living features for homeowners. Free estimates.',
    h1: 'Residential Masonry Contractor in Pompano Beach, FL',
    intro: 'From a cracked wall to a full addition, we treat your home like our own and keep you informed at every step.',
    includes: ['Block and brick walls', 'Additions and garages', 'Repairs', 'Outdoor kitchens and features'],
    faqs: [{ q: 'How fast can I get an estimate?', a: 'Send the form with photos and we reply quickly.' }],
    audience: 'residential',
  },
];

export const mainServiceSlugs = ['block-masonry', 'concrete-block-walls', 'brick-masonry', 'masonry-repair', 'retaining-walls', 'commercial-masonry'];

// Cities with their own page. Copy for each lives in location-content.ts (researched, not templated).
export type Location = { slug: string; city: string };
export const locations: Location[] = [
  { slug: 'lighthouse-point-fl', city: 'Lighthouse Point' },
  { slug: 'deerfield-beach-fl', city: 'Deerfield Beach' },
  { slug: 'fort-lauderdale-fl', city: 'Fort Lauderdale' },
  { slug: 'coconut-creek-fl', city: 'Coconut Creek' },
  { slug: 'coral-springs-fl', city: 'Coral Springs' },
  { slug: 'boca-raton-fl', city: 'Boca Raton' },
];

// Everything within roughly a 30-minute drive of Pompano Beach (approximate).
// Cities that have a page link to it; the rest are listed as text. Pompano Beach has no page on purpose:
// the homepage is the Pompano Beach page.
export const areaList: { city: string; slug?: string }[] = [
  'Pompano Beach', 'Lighthouse Point', 'Hillsboro Beach', 'Deerfield Beach', 'Lauderdale-by-the-Sea', 'Sea Ranch Lakes',
  'Oakland Park', 'Wilton Manors', 'Fort Lauderdale', 'Coconut Creek', 'Margate', 'North Lauderdale', 'Tamarac',
  'Lauderdale Lakes', 'Lauderhill', 'Sunrise', 'Plantation', 'Coral Springs', 'Parkland', 'Davie', 'Dania Beach',
  'Hollywood', 'Boca Raton', 'Highland Beach', 'Delray Beach',
].map(city => ({ city, slug: locations.find(l => l.city === city)?.slug }));

export const process = [
  { t: 'Request an estimate', d: 'Send the short form with photos. ' },
  { t: 'Site visit and written quote', d: 'We measure, check permit needs and send an itemized quote.' },
  { t: 'Permits and scheduling', d: 'We handle permits and give you a start date.' },
  { t: 'Build and inspect', d: 'Clean work, clear updates, inspections passed.' },
  { t: 'Final walkthrough', d: 'We review the finished work with you before closing out.' },
];

// ---- Homepage assets. Leave '' until REAL photos exist; placeholders render instead. ----
// Put files in /public/images/ and set e.g. hero: '/images/hero-block-wall.jpg'
export const images = {
  hero: '', heroAlt: 'TODO describe the hero photo',
  // Stock photos for now.
  services: {
    'brick-masonry': { src: '/images/stock/card-brick.webp', alt: 'Mason laying clay brick' },
    'block-masonry': { src: '/images/stock/card-block.webp', alt: 'Mason laying concrete block with rebar' },
    'masonry-repair': { src: '/images/stock/card-repair.webp', alt: 'Mason finishing a masonry surface with a hand float' },
    'stone-masonry': { src: '/images/stock/card-stone.webp', alt: 'Close-up of a stacked stone wall' },
    'retaining-walls': { src: '/images/stock/card-retaining.webp', alt: 'Block retaining wall with landscaping above' },
    'commercial-masonry': { src: '/images/stock/card-commercial.webp', alt: 'Concrete being placed over rebar on a job site' },
  } as Record<string, { src: string; alt: string }>,
  walk: {
    'block-masonry': { src: '/images/stock/walk-block.webp', alt: 'Concrete block wall under construction' },
    'concrete-block-walls': { src: '/images/stock/walk-block-walls.webp', alt: 'Light block privacy wall with decorative breeze-block openings' },
    'brick-masonry': { src: '/images/stock/walk-brick.webp', alt: 'Brick course being laid along a string line' },
    'masonry-repair': { src: '/images/stock/walk-repair.webp', alt: 'Mason setting masonry units in mortar with a level' },
    'stone-masonry': { src: '/images/stock/walk-stone.webp', alt: 'Mason applying stone veneer with a trowel' },
    'retaining-walls': { src: '/images/stock/walk-retaining.webp', alt: 'Stone-faced retaining wall along a roadside' },
    'commercial-masonry': { src: '/images/stock/walk-commercial.webp', alt: 'Mason setting block on a commercial foundation' },
  } as Record<string, { src: string; alt: string }>,
};
export const social: { name: string; href: string }[] = []; // TODO real profiles only
