// Location page copy. Each page is written from verified local facts (see research/location-research.md).
// Rules: no invented projects, streets, neighbourhoods, prices, timelines, licenses or offices.
import { photos, type Img } from './service-content';

export type LocationPage = {
  slug: string;
  city: string;
  blurb: string; // one-line summary used on the Areas page
  title: string;
  description: string;
  hero: { intro: string; help: string; points: string[] };
  matters: { h2: string; paras: string[] };
  services: { slug: string; h: string; p: string }[];
  right: { h2: string; paras: string[] };
  places: { h2: string; paras: string[] };
  residential: string;
  commercial: string;
  nearby: { intro: string; cities: string[] };
  faqs: { q: string; a: string }[];
  closing: { h2: string; paras: string[] };
  img: Img;
  img2: Img;
};

export const locationContent: Record<string, LocationPage> = {
  /* ================================================================ */
  'lighthouse-point-fl': {
    slug: 'lighthouse-point-fl',
    city: 'Lighthouse Point',
    blurb: 'Canal-front homes, salt air and the Intracoastal.',
    title: 'Masonry Contractor in Lighthouse Point, FL | Masonry Pompano Beach',
    description: 'Block walls, masonry repair, retaining walls and stone features for canal-front and inland homes in Lighthouse Point, FL. Request a free estimate.',
    hero: {
      intro: 'Lighthouse Point is a small city built around water. Most of it sits on canals dug in the 1950s and 1960s, with the Intracoastal Waterway on one side and Pompano Beach and Deerfield Beach on the others. If you own a home here, you already know what salt air and humidity do to walls, columns and caps over time.',
      help: 'We handle block walls, masonry repair, retaining walls and stone features for Lighthouse Point properties. Tell us about your project in the form and we will review it and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Lighthouse Point and neighbouring Pompano Beach and Deerfield Beach', 'Free project estimates'],
    },
    matters: {
      h2: 'Why masonry needs extra thought in a waterfront city',
      paras: [
        'The vast majority of Lighthouse Point is built on canals that were dug in the 1950s and 1960s, which is why so many homes here back onto the water. It is a lovely setting, and it is also a demanding one for anything built from block, brick or stone.',
        'Walls and columns near water live in salt-laden air and steady humidity. The city sits at only about seven feet above sea level, so the ground near a canal can be low and wet, and drainage becomes part of the conversation for almost any wall. Moisture finds its way into mortar and stucco, and it reaches the steel inside block and concrete, where corrosion can push the surface off.',
        'That is why the same project can need different handling here than it would inland. A privacy wall, a repair or a set of entry columns all benefit from careful preparation, suitable materials and attention to where water will go.',
      ],
    },
    services: [
      { slug: 'concrete-block-walls', h: 'Block walls and privacy walls', p: 'Privacy walls along a lot line, the street or a pool area need a proper footing and reinforcement, with extra care where the ground is low and damp. We build them to suit the wind exposure of your lot and finish them in stucco, paint or veneer.' },
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Cracks, spalling and failing mortar are common where salt and moisture reach the steel inside block. Finding the cause, not just patching the surface, is what makes a repair last. Send a photo and we will tell you what we think is going on.' },
      { slug: 'retaining-walls', h: 'Retaining walls', p: 'Where a lot slopes toward a canal or a yard has been built up, a retaining wall needs a solid base and drainage behind it so water does not build up and push it over.' },
      { slug: 'stone-masonry', h: 'Stone and outdoor features', p: 'Stone cladding on columns, entries, planters and outdoor kitchens suits waterfront homes, provided moisture is dealt with behind the stone as well as on the surface.' },
    ],
    right: {
      h2: 'What waterfront owners should look for in a masonry contractor',
      paras: [
        'If your property backs onto a canal, ask any contractor how they handle moisture and drainage, not only how the finished wall will look. A good answer covers footing depth, cover over steel, sealing and where water will run once the wall is up.',
        'It also helps to ask how work next to a seawall or dock will be handled. Masonry that sits beside a seawall should be planned with that structure in mind, and anything involving the seawall itself should be coordinated with whoever maintains it.',
        'Finally, look for clear communication. A written estimate that lists the scope tells you what you are paying for and gives you something to compare.',
      ],
    },
    places: {
      h2: 'Where we work around Lighthouse Point',
      paras: [
        'Lighthouse Point is bordered by Pompano Beach to the west and south, Deerfield Beach to the north and, across the Intracoastal Waterway, Hillsboro Beach to the east. The Hillsboro Inlet, near the lighthouse the city is named after, is the landmark most people associate with this stretch of coast.',
        'Day to day, errands tend to run through local shopping centers such as the Venetian Isles and Beacon Light centers. Whether you are in the Venetian Isles area, on one of the city\'s canals or inland toward Pompano Beach, we take projects across Lighthouse Point.',
      ],
    },
    residential: 'The 2020 census counted 5,856 housing units in Lighthouse Point, so the typical job here is a homeowner project: a wall, a repair, a set of columns or an outdoor feature. We explain the work in plain language and give you a written estimate so you can decide with confidence.',
    commercial: 'Commercial work in a small city like this tends to be modest in scale: repairs and maintenance to block walls, enclosures and storefront masonry at local shopping centers and small commercial properties. If you manage a property, describe the scope in the form and we will review it.',
    nearby: {
      intro: 'If you are just over the line, we also work in neighbouring and nearby communities.',
      cities: ['Pompano Beach', 'Deerfield Beach', 'Hillsboro Beach', 'Lauderdale-by-the-Sea', 'Sea Ranch Lakes'],
    },
    faqs: [
      { q: 'Do you work on canal-front properties in Lighthouse Point?', a: 'Yes. We take projects across the city, including homes on the canals. Waterfront lots bring moisture and drainage questions, and we cover those when we review the job.' },
      { q: 'Why does masonry wear out faster near the water?', a: 'Salt-laden air and constant humidity speed up corrosion of the steel inside block and concrete, and moisture works into mortar and stucco. Proper cover over steel, sealing and good drainage slow the process down.' },
      { q: 'Can you build a wall next to my seawall?', a: 'It can be done, but the wall should be planned with the seawall in mind, including drainage and loads. Describe the layout and add a photo in the form and we will advise.' },
      { q: 'How much does a block wall cost in Lighthouse Point?', a: 'It depends on length, height, footing, reinforcement, finish and access. We give a written estimate after reviewing your details.' },
      { q: 'Do I need a permit for a wall or repair?', a: 'Many walls and structural projects do, and requirements depend on the project and the property. We can confirm what applies to yours.' },
      { q: 'Can you repair cracked block or stucco?', a: 'Often, yes. We look at what is causing the damage first so the repair lasts. Photos help a lot.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page. Tell us what you need, describe the job and attach a photo if you can.' },
    ],
    closing: {
      h2: 'Masonry that suits life on the water',
      paras: [
        'Lighthouse Point homes are built around canals, and good masonry here starts with respect for moisture, salt and drainage. Whether you are planning a wall, dealing with damage or adding a feature, the right preparation up front saves repeat work later.',
        'You can read more about our approach on the pages for block walls, masonry repair and retaining walls, or see everywhere we work on the areas page. When you are ready, the estimate form at the top of this page is the place to start.',
      ],
    },
    img: photos.retainingBlock,
    img2: photos.floatFinish,
  },

  /* ================================================================ */
  'deerfield-beach-fl': {
    slug: 'deerfield-beach-fl',
    city: 'Deerfield Beach',
    blurb: 'Beach-side and inland properties, from 1920s buildings to newer neighbourhoods.',
    title: 'Masonry Contractor in Deerfield Beach, FL | Masonry Pompano Beach',
    description: 'Masonry repair, block and brick walls, and stone work for Deerfield Beach homes and commercial properties. Request a free estimate.',
    hero: {
      intro: 'Deerfield Beach has a little of everything: a pier and beach on the Atlantic, a historic centre with buildings from the 1920s, neighbourhoods that grew quickly between 1950 and 1980, and busy corridors such as Hillsboro Boulevard, Federal Highway and Powerline Road. Masonry here ranges from older structures that need careful repair to newer walls and features that need to be built right.',
      help: 'We take residential and commercial masonry projects in Deerfield Beach. Send us the details through the form and we will review them and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Deerfield Beach and neighbouring Pompano Beach', 'Free project estimates'],
    },
    matters: {
      h2: 'Old and new masonry in the same city',
      paras: [
        'Deerfield Beach grew very rapidly in the middle of the twentieth century, particularly between 1950 and 1980, as new neighbourhoods were built. Many of the city\'s oldest structures, mostly from the 1920s, are in a Spanish Mediterranean Revival style. So when you look around the city, you are seeing masonry of very different ages.',
        'That mix matters. Older walls and features often need repairs that respect what is already there, with mortar and materials that suit the original. Newer homes more often need new walls, columns or outdoor features built properly from the start.',
        'The city also borders the Atlantic Ocean, the Intracoastal Waterway and the Hillsboro River, so salt and moisture are part of the picture for properties closer to the water. For properties further west, drainage and age tend to be the bigger questions.',
      ],
    },
    services: [
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Older block and stucco walls develop cracks, spalling and failed mortar. We look for the cause, whether that is moisture, movement or corroded steel, and repair it so it does not return.' },
      { slug: 'concrete-block-walls', h: 'Block and privacy walls', p: 'New privacy and boundary walls need a proper footing and reinforcement. We build them to suit the lot and finish them to match your home.' },
      { slug: 'brick-masonry', h: 'Brick masonry', p: 'Brick veneer, columns, steps and repairs. Where existing brick needs matching, we aim for the closest blend and tell you honestly what is achievable.' },
      { slug: 'stone-masonry', h: 'Stone features', p: 'Stone veneer on walls, entries and outdoor kitchens, with moisture detailing suited to coastal conditions.' },
      { slug: 'commercial-masonry', h: 'Commercial masonry', p: 'Repairs and new work for commercial properties and associations. Send plans or a scope and we will price it as a bid.' },
    ],
    right: {
      h2: 'Choosing a masonry contractor in a city with such a mix of properties',
      paras: [
        'The right contractor for a 1920s building is not necessarily doing the same job as the right contractor for a newer wall. Ask whoever you speak to how they will deal with your specific property, and whether they will look at it rather than quote from a distance.',
        'Ask about materials, preparation and how water will be handled. For older structures, ask how a repair will blend with the original. For anything near the beach or the waterways, ask about corrosion protection.',
        'A written estimate that lists the work gives you a clear basis for comparing quotes.',
      ],
    },
    places: {
      h2: 'Neighbourhoods and areas we work in around Deerfield Beach',
      paras: [
        'Deerfield Beach sits between Pompano Beach to the south and Boca Raton and the Hillsboro River to the north, with the Atlantic to the east and Coconut Creek to the west. Whether you live near the beach and the Deerfield Beach International Fishing Pier, in the historic centre near Pioneer Park, around Crystal Lake and Military Trail or in West Deerfield Beach, we take projects across the city.',
        'Hillsboro Boulevard, Federal Highway, Powerline Road, Sample Road and Dixie Highway are the main routes most people use to get around, so you will know the places we mean. Deerfield Island Park and Quiet Waters Park are among the green spaces that give the city its character.',
      ],
    },
    residential: 'For homeowners, the usual requests are repairs to aging walls, new privacy walls, entry columns and outdoor features. We aim to keep the process simple, with plain explanations and a written estimate, so you know what the work involves before you commit.',
    commercial: 'Deerfield Beach is home to a number of businesses and office headquarters, along with shopping and service properties along its main corridors. For commercial and association work, send your plans or scope and tell us about access and schedule so we can price it properly.',
    nearby: {
      intro: 'We also take projects in the communities around Deerfield Beach.',
      cities: ['Pompano Beach', 'Lighthouse Point', 'Hillsboro Beach', 'Coconut Creek', 'Boca Raton'],
    },
    faqs: [
      { q: 'Do you work throughout Deerfield Beach?', a: 'Yes. We take projects across the city, from the beach side to the west of the city.' },
      { q: 'Can you repair masonry on an older property?', a: 'In many cases, yes. We look at the existing materials first and plan a repair that suits them. Photos help us advise.' },
      { q: 'Does being near the beach change how masonry should be done?', a: 'It can. Salt air accelerates corrosion of steel inside block and concrete, so cover over steel, sealing and drainage matter more closer to the water.' },
      { q: 'What kinds of walls do you build?', a: 'Block privacy and boundary walls, brick walls and retaining walls. Tell us about the property and what the wall is for.' },
      { q: 'Do you handle commercial properties?', a: 'Yes, we take residential and commercial projects. Send plans or a scope through the form for commercial work.' },
      { q: 'How much will my project cost?', a: 'It depends on size, materials, access and the work needed. We give a written estimate after reviewing the details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page. Describe the job and attach photos if you can.' },
    ],
    closing: {
      h2: 'Building and repairing masonry that suits Deerfield Beach',
      paras: [
        'From beach-side properties to older buildings in the historic centre and newer neighbourhoods further west, Deerfield Beach asks different things of masonry in different places. The best results come from understanding the property first and choosing materials and methods to suit.',
        'If you want to know more, the pages on masonry repair, brick masonry and commercial masonry go into detail. Otherwise, the estimate form at the top of this page is the easiest way to start.',
      ],
    },
    img: photos.brickLine,
    img2: photos.stoneVeneer,
  },

  /* ================================================================ */
  'fort-lauderdale-fl': {
    slug: 'fort-lauderdale-fl',
    city: 'Fort Lauderdale',
    blurb: 'Waterways, historic buildings, high-rises and king-tide flooding.',
    title: 'Masonry Contractor in Fort Lauderdale, FL | Masonry Pompano Beach',
    description: 'Masonry repair, block and brick work, retaining walls and commercial masonry for Fort Lauderdale properties. Request a free estimate.',
    hero: {
      intro: 'Fort Lauderdale is called the Venice of America for good reason: about 165 miles of inland waterways wind through a city that also faces the Atlantic. From Rio Vista and Colee Hammock to Las Olas Boulevard and the Riverwalk, masonry here is exposed to water, salt and, during king tides, flooding.',
      help: 'We take residential and commercial masonry work in Fort Lauderdale, from repairs and block walls to retaining walls and brickwork. Send us the details in the form and we will review them and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Fort Lauderdale and nearby Broward County cities', 'Free project estimates'],
    },
    matters: {
      h2: 'Why masonry takes a beating in Fort Lauderdale',
      paras: [
        'Fort Lauderdale is the largest city in Broward County and the county seat, with a canal network, a long Atlantic shoreline and a busy port. The city itself points out that it is vulnerable to flooding during king tides, and that is a useful reminder of what masonry here has to cope with.',
        'Water is the common thread. Repeated wetting and drying, salt in the air and in the ground, and standing water after heavy rain all work on block, brick, stucco and the steel inside them. Walls near the water, retaining walls and ground-level masonry feel it first.',
        'The city is also a mix of ages and uses, with historic properties such as the Stranahan House and Bonnet House alongside high-rise condominiums and offices downtown. Masonry needs here run from careful repairs on older structures to maintenance on larger buildings.',
      ],
    },
    services: [
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Cracks, spalling and failing mortar are common where water and salt reach block and concrete. We find the cause first so the repair lasts, and match finishes where we can.' },
      { slug: 'retaining-walls', h: 'Retaining walls', p: 'On waterfront lots and properties with grade changes, a retaining wall needs a proper base and drainage so water does not build up behind it.' },
      { slug: 'concrete-block-walls', h: 'Block and privacy walls', p: 'Privacy, boundary and enclosure walls built with footings and reinforcement suited to the lot.' },
      { slug: 'brick-masonry', h: 'Brick masonry', p: 'New brickwork, veneer, columns and repairs, with brick and mortar matched as closely as possible.' },
      { slug: 'commercial-masonry', h: 'Commercial masonry', p: 'Restoration, repair and new masonry for commercial properties, condos and associations, priced from your scope or plans.' },
    ],
    right: {
      h2: 'What property owners and managers should ask a masonry contractor',
      paras: [
        'With so many waterfront and low-lying properties, ask how a contractor will handle moisture, drainage and corrosion. A good answer goes beyond the finished surface.',
        'For older or historic masonry, ask how repairs will be matched to what is there. For larger buildings and condos, ask how work will be scoped and communicated, since boards and managers need clear information to make decisions.',
        'A written estimate that spells out the scope is the simplest way to compare options.',
      ],
    },
    places: {
      h2: 'Neighbourhoods and areas we work in around Fort Lauderdale',
      paras: [
        'Fort Lauderdale has more than sixty officially recognised neighbourhoods, among them Rio Vista and Colee Hammock along the New River. The city is bordered by communities such as Oakland Park, Wilton Manors, Lauderdale-by-the-Sea, Sea Ranch Lakes, Plantation, Davie, Dania Beach and Pompano Beach, and we work across the area.',
        'Whether you are near Las Olas Boulevard, Sunrise Boulevard, the Riverwalk, the beach along A1A or one of the residential neighbourhoods in between, tell us where the property is in the form and we will take it from there.',
      ],
    },
    residential: 'Fort Lauderdale homeowners often deal with water-related wear, from stained and cracking stucco to failing walls near canals. We look at what is causing the problem and explain the options in plain language, with a written estimate.',
    commercial: 'Downtown has the largest central business district in Broward County, and the wider city has offices, hotels, high-rise condos and commercial properties of every size. Commercial masonry here is often about repair, restoration and maintenance. Send your scope or plans and we will price it as a bid.',
    nearby: {
      intro: 'We also take projects in the cities around Fort Lauderdale.',
      cities: ['Oakland Park', 'Wilton Manors', 'Lauderdale-by-the-Sea', 'Sea Ranch Lakes', 'Plantation', 'Davie', 'Dania Beach', 'Pompano Beach'],
    },
    faqs: [
      { q: 'Do you work throughout Fort Lauderdale?', a: 'Yes. We take projects in the city and the communities around it. Tell us the location in the form.' },
      { q: 'How does king-tide flooding affect masonry?', a: 'Repeated flooding and saltwater exposure can accelerate wear on masonry and corrode steel inside concrete and block. Drainage, sealing and suitable materials all help.' },
      { q: 'Can you repair older masonry so it blends in?', a: 'We aim for a repair that matches the existing material as closely as possible, and we are upfront about what is achievable with older brick and finishes.' },
      { q: 'Do you build retaining walls near the water?', a: 'We build retaining walls with attention to base and drainage. Waterfront sites can need extra planning, so describe the property and add photos.' },
      { q: 'Do you handle commercial and condo work?', a: 'Yes. Send plans, a scope or photos through the form and we will price it as a bid.' },
      { q: 'How much does masonry work cost?', a: 'It depends on size, materials, access and the work needed. We give a written estimate after reviewing the details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the job.' },
    ],
    closing: {
      h2: 'Masonry built for a city of water',
      paras: [
        'In a city defined by canals, the river and the ocean, the details that keep water out and let it drain are what separate masonry that lasts from masonry that needs repeated attention.',
        'To learn more about the work, see our pages on masonry repair, retaining walls and commercial masonry, or look at the full list of areas we serve. The estimate form at the top of this page is where to send your project.',
      ],
    },
    img: photos.retainingRoad,
    img2: photos.concretePour,
  },

  /* ================================================================ */
  'coconut-creek-fl': {
    slug: 'coconut-creek-fl',
    city: 'Coconut Creek',
    blurb: 'A planned city of landscaped communities, lakes and condos.',
    title: 'Masonry Contractor in Coconut Creek, FL | Masonry Pompano Beach',
    description: 'Block walls, brick and stone features and masonry repair for Coconut Creek homes and communities. Request a free estimate.',
    hero: {
      intro: 'Coconut Creek is a planned community known as the Butterfly Capital of the World, with winding landscaped roads, lakes and parks running through its neighbourhoods. The city split from Pompano Beach in the 1960s, and it still sits right next door. If you are in Winston Park, near the Promenade on Lyons Road or anywhere between Sample Road and the county line, masonry here is more about appearance and durability than salt spray.',
      help: 'We take residential and commercial masonry projects in Coconut Creek: block walls, brick and stone features, repairs and more. Tell us about your project in the form and we will review it and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Coconut Creek and neighbouring Pompano Beach', 'Free project estimates'],
    },
    matters: {
      h2: 'Masonry in a planned, landscaped city',
      paras: [
        'Coconut Creek is a planned community, and its housing is primarily single-family homes, condominiums and townhouses in professionally landscaped communities. The 2020 census counted 26,971 housing units in a city of about 58,000 people, so most masonry work here is on homes and shared residential property.',
        'Being inland, the city is less exposed to the direct salt spray of the beach, but humidity, heavy rain and age still take their toll on block, stucco and mortar. Lakefront lots add their own drainage questions, and a wall near a lake needs a sound footing and good water management.',
        'Appearance matters too. In planned communities with landscaping and shared standards, a wall, column or entry feature should look right with its surroundings, which is a question of finish and detail as much as structure.',
      ],
    },
    services: [
      { slug: 'concrete-block-walls', h: 'Privacy and boundary walls', p: 'Block walls with proper footings and reinforcement, finished in stucco or paint to suit your home. If your community has rules about wall height or finish, check them before you design the wall.' },
      { slug: 'brick-masonry', h: 'Brick and stone features', p: 'Entry columns, planters, steps and accent walls in brick or stone, detailed to suit a landscaped setting.' },
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Cracked stucco, failing mortar and damaged block can be repaired once the cause is found, whether that is moisture, movement or age.' },
      { slug: 'retaining-walls', h: 'Retaining walls', p: 'For lakefront lots and landscaped grade changes, retaining walls need a solid base and drainage so water does not build up behind them.' },
      { slug: 'residential-masonry', h: 'Residential masonry', p: 'Walls, repairs, additions and outdoor living features for Coconut Creek homeowners, explained in plain language.' },
    ],
    right: {
      h2: 'Why it pays to get masonry right in a community like this',
      paras: [
        'In a planned community, a wall or feature is on show every day, and it also has to meet any rules that apply. Ask a contractor how they will match your existing finish and whether they will help you work out what approvals might be needed.',
        'Because the area is landscaped and wet in the rainy season, ask about drainage and moisture protection. Footings and reinforcement are equally important, though you will never see them once the wall is finished.',
        'A written estimate that lists the scope lets you compare quotes sensibly.',
      ],
    },
    places: {
      h2: 'Communities and corridors in Coconut Creek',
      paras: [
        'Coconut Creek is bordered by Pompano Beach and Deerfield Beach to the east, Coral Springs, Parkland and Margate to the west, and unincorporated Palm Beach County to the north. Lyons Road and Sample Road are two of its main routes, and landmarks such as Butterfly World in Tradewinds Park, the Promenade at Coconut Creek and the Seminole Casino Coconut Creek are well known.',
        'Residential communities include Winston Park and Wynmoor, a gated community for residents aged 55 and over. Whatever part of the city you are in, tell us the address area in the form and we will take it from there.',
      ],
    },
    residential: 'Most Coconut Creek projects are homeowner projects: new walls, entry features, repairs and outdoor upgrades. For condo and townhouse communities, we can also look at shared masonry such as boundary walls and entrance features.',
    commercial: 'Retail and commercial centers such as the Promenade, along with the roughly 1,400 businesses based in the city, mean there is commercial masonry to look after too. Send a scope or plans and we will price repairs and new work as a bid.',
    nearby: {
      intro: 'Nearby communities we also work in include:',
      cities: ['Pompano Beach', 'Deerfield Beach', 'Margate', 'Coral Springs', 'Parkland'],
    },
    faqs: [
      { q: 'Do you work in all parts of Coconut Creek?', a: 'Yes, we take projects across the city. Tell us the location in the form.' },
      { q: 'Does my community have rules about walls?', a: 'Many planned communities and associations have rules on height, colour and finish. We suggest checking yours before settling on a design, and we can build to what is approved.' },
      { q: 'Can you match my existing stucco or brick?', a: 'We aim for the closest match possible. Photos of the existing finish help us advise.' },
      { q: 'Do you build retaining walls on lakefront lots?', a: 'We build retaining walls with attention to base and drainage. Describe the lot and add a photo.' },
      { q: 'Can you work on condo or townhouse communities?', a: 'Yes. Send details of the scope and who is responsible for approvals.' },
      { q: 'How much will my wall cost?', a: 'It depends on length, height, footing, finish and access. We give a written estimate after reviewing details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the job.' },
    ],
    closing: {
      h2: 'Masonry that fits the neighbourhood',
      paras: [
        'In a planned city like Coconut Creek, the best masonry looks right with its surroundings and holds up behind the scenes. Good planning, suitable materials and proper footings and drainage make the difference.',
        'See our pages on block walls, brick masonry and masonry repair for more detail. The estimate form at the top of this page is the quickest way to get a written estimate.',
      ],
    },
    img: photos.gardenBlock,
    img2: photos.brickHands,
  },

  /* ================================================================ */
  'coral-springs-fl': {
    slug: 'coral-springs-fl',
    city: 'Coral Springs',
    blurb: 'A large planned city with strict aesthetic rules and homes from the 1970s to the 1990s.',
    title: 'Masonry Contractor in Coral Springs, FL | Masonry Pompano Beach',
    description: 'Masonry repair, block and brick walls and commercial masonry for Coral Springs homes and businesses. Request a free estimate.',
    hero: {
      intro: 'Coral Springs is a master-planned city with Florida\'s only covered bridge, a downtown at Sample Road and University Drive and more than fifty municipal parks. It also has strict building codes and aesthetic rules designed to keep the city looking consistent, so masonry projects here are as much about the right finish as the right structure.',
      help: 'We take residential and commercial masonry projects in Coral Springs, including repairs and walls. Send the details through the form and we will review them and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Coral Springs and nearby Broward County cities', 'Free project estimates'],
    },
    matters: {
      h2: 'Masonry in a planned city with rules',
      paras: [
        'Coral Springs was master-planned by Coral Ridge Properties and grew rapidly in the 1970s, 1980s and 1990s, adding tens of thousands of residents each decade. It reached residential build-out in 2003. The result is a city where a large share of the homes are now several decades old.',
        'That age shows up in masonry. Walls and stucco that went up in the first decades of the city can develop cracks, failed mortar and moisture problems, and many owners are now facing repairs or replacements.',
        'The city is also known for strict building codes and aesthetic standards, with rules on things such as exterior paint colours. That makes it worth checking what applies to your property before you design a wall, change a finish or start a repair.',
      ],
    },
    services: [
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Aging block, stucco and brick benefit from a proper diagnosis. We find the cause of cracking or spalling and repair it so the finish blends with the rest of the property.' },
      { slug: 'concrete-block-walls', h: 'Block and privacy walls', p: 'New or replacement walls built with footings and reinforcement, finished to suit your home and any rules that apply.' },
      { slug: 'brick-masonry', h: 'Brick masonry', p: 'Brick veneer, columns, steps and repairs, matched to existing brick where possible.' },
      { slug: 'residential-masonry', h: 'Residential masonry', p: 'Walls, repairs, additions and outdoor living features for Coral Springs homeowners.' },
      { slug: 'commercial-masonry', h: 'Commercial masonry', p: 'Masonry for offices, retail and commercial properties, priced from your plans or scope.' },
    ],
    right: {
      h2: 'What to ask before hiring a masonry contractor in Coral Springs',
      paras: [
        'Ask how a contractor will make sure the finished work meets the rules and standards that apply to your property, including colour and finish. Ask how they will match existing materials, especially on older homes.',
        'Ask how problems will be diagnosed, because repairs on aging walls are often a question of cause as well as symptom. And ask for a written estimate that spells out the scope.',
        'Good communication matters most when something unexpected turns up, so choose someone who explains clearly.',
      ],
    },
    places: {
      h2: 'Areas and landmarks around Coral Springs',
      paras: [
        'Coral Springs is bordered by Parkland to the north, Coconut Creek to the east, Margate and North Lauderdale to the southeast and Tamarac to the south, with the Everglades to the west. University Drive, Sample Road, Atlantic Boulevard and the Sawgrass Expressway are the main routes.',
        'Whether you are near the Coral Springs Covered Bridge, Coral Square, Mullins Park, the downtown, or the offices of Corporate Park, we take projects across the city. Tell us the area in the form and we will review your project.',
      ],
    },
    residential: 'For homeowners, repairs and walls are the main requests. We explain the work in plain language, help you think through finish and materials and give you a written estimate so you know what is involved.',
    commercial: 'The city has a downtown, office buildings along University Drive, shopping areas and Corporate Park, so there is a steady need for commercial masonry. Send plans or a scope, plus information on access and schedule, and we will price it as a bid.',
    nearby: {
      intro: 'Next door and nearby, we also work in:',
      cities: ['Parkland', 'Coconut Creek', 'Margate', 'North Lauderdale', 'Tamarac'],
    },
    faqs: [
      { q: 'Do you work throughout Coral Springs?', a: 'Yes. We take projects across the city. Tell us the area in the form.' },
      { q: 'Are there rules I should know about before changing my wall or finish?', a: 'Coral Springs has strict building codes and aesthetic standards, and associations may add their own rules. Check what applies to your property before you design the work.' },
      { q: 'My wall was built decades ago. Can it be repaired?', a: 'Often, yes. We look at the cause of cracking or movement and advise whether repair or replacement is more sensible.' },
      { q: 'Can you match the existing finish?', a: 'We aim for the closest match. Send photos of the existing finish.' },
      { q: 'Do you do commercial work in Coral Springs?', a: 'Yes. Send plans or a scope through the form and we will price it as a bid.' },
      { q: 'How much does masonry work cost?', a: 'It depends on size, materials, access and the work needed. We give a written estimate after reviewing details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the job.' },
    ],
    closing: {
      h2: 'Getting it right in a city that cares how things look',
      paras: [
        'In Coral Springs, masonry should look right and last. That means understanding the age of the property, the standards that apply and the cause of any damage before work begins.',
        'Our pages on masonry repair, block walls and commercial masonry cover the detail, and the estimate form at the top of this page is where to send your project.',
      ],
    },
    img: photos.blockMallet,
    img2: photos.mortarLevel,
  },

  /* ================================================================ */
  'boca-raton-fl': {
    slug: 'boca-raton-fl',
    city: 'Boca Raton',
    blurb: 'Coastal and upscale properties in southern Palm Beach County.',
    title: 'Masonry Contractor in Boca Raton, FL | Masonry Pompano Beach',
    description: 'Stone, brick and block masonry, retaining walls and repairs for Boca Raton homes and properties. Request a free estimate.',
    hero: {
      intro: 'Boca Raton sits just across the Broward line in southern Palm Beach County, and it has a character all its own: Mizner Park, the beaches along A1A, historic areas such as Old Floresta and a long tradition of upscale homes. Masonry here is often about finish and detail as much as strength, and the coastal setting adds its own demands.',
      help: 'We take residential and commercial masonry projects in Boca Raton, including stone work, walls and repairs. Send the details through the form and we will review them and prepare a written estimate.',
      points: ['Residential and commercial masonry', 'Serving Boca Raton and nearby southern Palm Beach County', 'Free project estimates'],
    },
    matters: {
      h2: 'Masonry where finish and coastal conditions both matter',
      paras: [
        'Boca Raton is a coastal city of around 97,000 people, with a barrier island, beaches on the Atlantic and the Intracoastal Waterway running through it. It has long been associated with luxury beach culture, and many of its homes, from established neighbourhoods to large estates, call for high-quality finishes.',
        'The coastal setting matters for masonry. Salt in the air and ground moisture affect stucco, block, brick and stone, and the steel inside them. Hurricanes in 2004, 2005 and 2017 are a reminder that structures here also need to be built to resist wind and water.',
        'The city has a strict development code that limits the size and type of commercial buildings and signs, which is part of why it looks the way it does. For property owners, it is a reminder to check what rules apply before starting visible work.',
      ],
    },
    services: [
      { slug: 'stone-masonry', h: 'Stone masonry', p: 'Stone veneer, outdoor kitchens, entries and feature walls suit Boca Raton\'s upscale homes, provided the substrate and moisture detailing are done properly.' },
      { slug: 'brick-masonry', h: 'Brick masonry', p: 'Brick walls, columns, steps and veneer, with careful matching for repairs on established properties.' },
      { slug: 'concrete-block-walls', h: 'Block and privacy walls', p: 'Privacy and boundary walls with proper footings and reinforcement, finished to complement the property.' },
      { slug: 'retaining-walls', h: 'Retaining walls', p: 'Walls that hold soil and shape landscaping, built with a solid base and drainage, faced in block, stone or stucco.' },
      { slug: 'masonry-repair', h: 'Masonry repair', p: 'Cracks, spalling and failed mortar on coastal and established properties, repaired once the cause is understood.' },
    ],
    right: {
      h2: 'What to look for in a masonry contractor in Boca Raton',
      paras: [
        'With high expectations for finish, look for a contractor who talks about layout, materials and detailing, not just price. Ask to see how they will handle moisture behind stone and stucco.',
        'In coastal areas, ask about corrosion protection and drainage. For gated communities and associations, ask how they will deal with approvals and access.',
        'Clear communication and a written estimate help you compare options and avoid surprises.',
      ],
    },
    places: {
      h2: 'Areas and landmarks around Boca Raton',
      paras: [
        'Boca Raton lies in Palm Beach County, close to the Broward line. Main routes include Palmetto Park Road, Glades Road, Federal Highway (US 1), A1A, Military Trail and Congress Avenue. Well-known places include Mizner Park, Town Center at Boca Raton, Spanish River Park and Florida Atlantic University, and many people with a Boca Raton address live in West Boca Raton outside the city limits.',
        'Whether your property is near the beach, in an established neighbourhood such as Old Floresta, in a gated community or further west, tell us the area in the form. Boca Raton is at the southern end of our service area, so please include the address area so we can confirm coverage.',
      ],
    },
    residential: 'Boca Raton homeowners tend to want high-quality finishes: stone features, well-built walls and repairs that blend in. We take care over layout and detail, explain what the work involves and give you a written estimate.',
    commercial: 'The city has shopping centers, Mizner Park, offices and a university, and a development code that keeps commercial buildings and signs under tight control. For commercial masonry, send plans or a scope and we will price it as a bid.',
    nearby: {
      intro: 'Just to the south and nearby, we also work in:',
      cities: ['Deerfield Beach', 'Highland Beach', 'Delray Beach', 'Coconut Creek', 'Pompano Beach'],
    },
    faqs: [
      { q: 'Do you work in Boca Raton?', a: 'Yes, Boca Raton is at the southern end of our service area. Include the address area in the form so we can confirm coverage.' },
      { q: 'Do you work in West Boca Raton?', a: 'Tell us the location in the form. Many Boca Raton addresses are outside city limits, and we will confirm coverage for your property.' },
      { q: 'Can you install stone on an existing wall?', a: 'Often yes, if the wall is sound and can be prepared properly. Send photos.' },
      { q: 'How does the coastal setting affect masonry?', a: 'Salt air and moisture speed up wear on masonry and the steel inside it. Cover over steel, sealing and drainage help.' },
      { q: 'Are there rules I should check first?', a: 'The city has a strict development code, and associations may add their own rules. Check what applies before starting visible work.' },
      { q: 'How much does stone or block work cost?', a: 'It depends on size, materials, access and complexity. We give a written estimate after reviewing details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the job.' },
    ],
    closing: {
      h2: 'Masonry with the finish Boca Raton expects',
      paras: [
        'In a city known for quality and detail, masonry should look right and perform in a coastal environment. Good planning, suitable materials and careful preparation make the difference.',
        'You can read more on our stone masonry, brick masonry and retaining wall pages. When you are ready, the estimate form at the top of this page is the place to send the details.',
      ],
    },
    img: photos.outdoorKitchen,
    img2: photos.stoneWall,
  },
};
