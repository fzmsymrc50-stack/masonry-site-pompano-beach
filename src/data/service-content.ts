// Service page copy. One entry per service, written around the customer's situation.
// Rules used: no invented prices, timelines, guarantees, licenses, insurance or projects.
// Anything the owner must confirm is marked and shown only in the dev notice.

export type Img = { src: string; alt: string };
const I = (name: string, alt: string): Img => ({ src: `/images/stock/s-${name}.webp`, alt });

export const photos = {
  layingBrick: I('laying-brick', 'Mason laying clay brick with mortar'),
  brickHands: I('brick-hands', 'Bricklayer setting a brick in fresh mortar'),
  brickLine: I('brick-line', 'Brick course being laid along a string line'),
  blockRebar: I('block-rebar', 'Mason laying concrete block around vertical rebar'),
  blockWallBuild: I('block-wall-build', 'Concrete block wall under construction'),
  blockMallet: I('block-mallet', 'Mason setting a concrete block with a mallet and level'),
  breezeWall: I('breeze-wall', 'Light block wall with decorative breeze-block openings'),
  gardenBlock: I('garden-block', 'Block garden wall beside planted soil'),
  concretePour: I('concrete-pour', 'Concrete being placed over rebar on a job site'),
  blockTexture: I('block-texture', 'Close-up of concrete block courses'),
  footingForms: I('footing-forms', 'Mason working on a block foundation with a trowel'),
  floatFinish: I('float-finish', 'Mason finishing a masonry surface with a hand float'),
  mortarLevel: I('mortar-level', 'Mason bedding masonry units in mortar with a level'),
  stoneVeneer: I('stone-veneer', 'Mason applying stone veneer with a trowel'),
  stoneWall: I('stone-wall', 'Close-up of a stacked stone wall'),
  outdoorKitchen: I('outdoor-kitchen', 'Outdoor kitchen with stone-clad walls'),
  retainingBlock: I('retaining-block', 'Long segmental block retaining wall'),
  retainingStone: I('retaining-stone', 'Stone-faced retaining wall with planting above'),
  retainingRoad: I('retaining-road', 'Stone-faced retaining wall along a roadside'),
};

export type SubItem = { h: string; paras: string[]; consider: string };
export type ServicePage = {
  slug: string;
  hero: { problem: string; help: string; points?: string[] };
  problem: { h2: string; paras: string[]; signsTitle: string; signs: string[]; img: Img };
  about: { h2: string; paras: string[] };
  breakdown: { h2: string; intro: string; items: SubItem[] };
  why: { h2: string; paras: string[]; img: Img };
  materials: { h2: string; intro: string; items: { h: string; p: string }[] };
  faqs: { q: string; a: string }[];
  closing: { h2: string; paras: string[] };
  related: { slug: string; anchor: string; why: string }[];
};

export const defaultPoints = [
  'Residential and commercial masonry',
  'Serving Pompano Beach and nearby Broward County',
  'Free project estimates',
];

export const content: Record<string, ServicePage> = {
  /* ------------------------------------------------------------------ */
  'brick-masonry': {
    slug: 'brick-masonry',
    hero: {
      problem: 'Whether you are planning new brickwork or a section of brick has started to crumble, you want it to look right and still be standing years from now. Brick is unforgiving: mortar that does not match, uneven courses or the wrong brick show up immediately.',
      help: 'Tell us what you have and what you want, and we will review it and come back with a written estimate for the brickwork.',
    },
    problem: {
      h2: 'Brick that looks tired, or a project that has to look right the first time',
      paras: [
        'Most people land on a page like this for one of two reasons. Either something they already own is deteriorating, or they are planning something new and are not sure how it should be done.',
        'In South Florida, brick lives with sun, heavy rain and salty, humid air. Mortar joints soften, faces flake and water finds its way into places it should not. A small problem on the surface can be a bigger one underneath, which is why it is worth having someone look at it properly rather than guessing from the driveway.',
        'For new work the worry is different: will it match the house, will the lines be straight, and will it last? Those are all questions of planning and workmanship, and they are easier to settle before the first brick goes down.',
      ],
      signsTitle: 'Signs your brickwork needs attention',
      signs: [
        'Mortar joints that are crumbling, sandy or recessed',
        'Bricks with flaking or peeling faces',
        'White powdery staining (efflorescence), which points to moisture moving through the wall',
        'Stair-step cracks following the mortar joints',
        'Sections that are loose, leaning or bulging',
      ],
      img: photos.layingBrick,
    },
    about: {
      h2: 'What brick masonry involves',
      paras: [
        'Brick masonry is the craft of bricklaying: laying brick in mortar to build walls, columns, steps, borders and decorative features, and of repairing brickwork that has been damaged. It is used on homes, garden and entry features, commercial frontages and outdoor living areas.',
        'The finished result depends on decisions made before laying starts: the type of brick, the bond pattern, the mortar colour and mix, the base it sits on and how water will be kept out of the wall. We explain those choices in plain language so you are not signing off on things you do not understand.',
      ],
    },
    breakdown: {
      h2: 'Brickwork we can help with',
      intro: 'Brick jobs fall into a few common groups. Here is how each one usually works and what is worth thinking about.',
      items: [
        {
          h: 'New brick walls, columns and steps',
          paras: [
            'You want a feature that looks established from day one: an entry column, a set of steps, a low boundary wall. The work starts with the base, because brick is heavy and needs solid support, then moves to layout so the courses finish cleanly at corners and openings.',
            'The benefit of having it done properly is a result that stays straight and tight instead of drifting or cracking at the joints.',
          ],
          consider: 'Decide early on the brick, bond pattern and mortar colour. Seeing a sample against your house is worth the effort.',
        },
        {
          h: 'Brick veneer',
          paras: [
            'Veneer gives a brick look to a wall that is built from another material. It is a good option when you want the appearance without a full structural brick wall.',
            'The detail that matters most is moisture: veneer needs to be tied back properly and allowed to shed water, otherwise problems show up behind it.',
          ],
          consider: 'Ask how the veneer will be attached and how water that gets behind it will drain out.',
        },
        {
          h: 'Matching brick for repairs',
          paras: [
            'When only part of a wall is damaged, the goal is a repair you cannot easily spot. That means cutting out the failed brick and mortar and rebuilding with brick and mortar that blend with the original.',
            'Perfect matches are not always possible with older brick, so we are upfront about what is achievable before work begins.',
          ],
          consider: 'Find out whether the cause of the damage, often water, is fixed too. Replacing brick without that can mean doing the job twice.',
        },
        {
          h: 'Repointing (tuckpointing) worn mortar joints',
          paras: [
            'Mortar is the part of a brick wall that wears out first. Repointing, often called tuckpointing, removes the deteriorated mortar to a sound depth and refills the joints so the wall sheds water again.',
            'Done well, it extends the life of the wall and tidies its appearance. Done badly, with the wrong mortar or too shallow, it fails quickly.',
          ],
          consider: 'The new mortar should not be harder than the brick around it. This is a question to ask any contractor.',
        },
      ],
    },
    why: {
      h2: 'Why careful workmanship matters in brick',
      paras: [
        'Brick shows its mistakes. Uneven joints, courses that wander and mismatched mortar are visible from the street. The less obvious errors are the ones that cost money later: poor bedding, joints left open, no thought for where water goes.',
        'Taking shortcuts rarely saves much. Cheap, rushed brickwork tends to need repairs sooner, and repairs on top of poor work cost more than doing it properly first. A good contractor will explain what they are doing and why, rather than only quoting a number.',
      ],
      img: photos.brickHands,
    },
    materials: {
      h2: 'Choosing materials and options for your brickwork',
      intro: 'A few decisions shape how your brickwork looks, performs and ages.',
      items: [
        { h: 'Clay brick versus other masonry', p: 'Clay brick has a classic look and good durability. Concrete block with a brick or stucco finish can be more economical for large walls. The right answer depends on the structure and the look you want.' },
        { h: 'Brick colour and texture', p: 'Brick varies by batch, so colour is judged from a sample, not a catalogue photo. Smooth, textured and tumbled faces all age differently.' },
        { h: 'Bond pattern', p: 'The pattern of the courses changes the character of a wall as much as the brick itself. Running bond is the common default, but other patterns suit certain features.' },
        { h: 'Mortar colour and mix', p: 'Mortar makes up a large part of the visible surface. Colour and joint profile affect both the look and how well water sheds off the wall.' },
        { h: 'Sealing and upkeep', p: 'Some brick benefits from sealing, some does not. Coastal conditions make it worth asking about maintenance for your particular brick.' },
      ],
    },
    faqs: [
      { q: 'How much does brick masonry cost?', a: 'It depends on the size of the job, the brick you choose, how much detail is involved and how easy the site is to work on. We price each project in writing after reviewing the details, rather than quoting from a distance.' },
      { q: 'Can damaged brick be repaired instead of replaced?', a: 'Often, yes. Localised damage such as worn mortar or a few failed bricks can usually be repaired. Widespread damage, bulging or movement may point to a bigger problem that needs a closer look.' },
      { q: 'What is the difference between repointing and tuckpointing?', a: 'The terms are often used interchangeably. Both mean removing worn mortar from the joints and refilling them so the wall sheds water. Tuckpointing can also describe a finer finishing technique, so ask what a contractor means when they quote it.' },
      { q: 'Will new brick match my existing brick?', a: 'We aim for the closest match possible. With older brick an exact match is not always available, and we will tell you what to expect before starting.' },
      { q: 'How long does a brick project take?', a: 'It varies with size, weather and any permits needed. We will discuss the schedule when we review your project.' },
      { q: 'Do I need a permit for brickwork?', a: 'Decorative and minor repair work is often different from structural work. Whether a permit applies depends on what is being built and where, and we can confirm for your project.' },
      { q: 'Do you work on homes and commercial buildings?', a: 'Yes, we take residential and commercial projects.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page. Tell us what you need, describe the job and, if you can, attach a photo.' },
    ],
    closing: {
      h2: 'Getting the brickwork you actually want',
      paras: [
        'Good brickwork starts with understanding what is wrong or what you want, picking suitable materials and giving the job the preparation it deserves. If you are not sure which of those applies to you, describe the situation in the form above and add a photo if you can.',
      ],
    },
    related: [
      { slug: 'brick-walls', anchor: 'brick walls', why: 'Garden, boundary and feature walls' },
      { slug: 'masonry-repair', anchor: 'masonry repair', why: 'Cracks, spalling and failed mortar' },
      { slug: 'stone-masonry', anchor: 'stone masonry', why: 'Stone veneer and outdoor features' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'block-masonry': {
    slug: 'block-masonry',
    hero: {
      problem: 'Building with concrete block in South Florida is not the same as building anywhere else. Wind loads, moisture and building code all shape how a block structure has to be reinforced, and the work you cannot see is what keeps it standing.',
      help: 'Send us the details of your addition, garage or structure and we will review it and put together a written estimate.',
    },
    problem: {
      h2: 'A structure that has to be strong, and has to pass inspection',
      paras: [
        'People usually come to a block masonry page because they are adding on, building a garage or workshop, or they have been told a new structure needs to be concrete block. The concern is rarely the block itself. It is whether the job will be done to code, whether it will hold up through a hurricane season and whether the budget is realistic.',
        'Broward County is in the High-Velocity Hurricane Zone, which means walls generally need steel reinforcement, grout and tie beams that are detailed to resist wind. A block wall that looks fine can be underbuilt, and you only find out when it matters.',
        'That is why a block project is as much about planning and following the approved drawings as it is about laying units.',
      ],
      signsTitle: 'You probably need block masonry if…',
      signs: [
        'You are adding a room, garage or workshop to an existing home',
        'You are building a new structure and the plans call for CMU',
        'You need a structural wall that other materials cannot provide',
        'A contractor or engineer has specified reinforced block',
        'You are converting or enclosing an existing space',
      ],
      img: photos.blockRebar,
    },
    about: {
      h2: 'What block masonry (CBS) is',
      paras: [
        'Concrete block, also called CMU (concrete masonry unit) or masonry block, is the standard structural material for many South Florida homes and commercial buildings. Often it is finished with stucco, which is where the term concrete block and stucco (CBS) comes from.',
        'Reinforced masonry is more than stacked units. Vertical rebar runs through cells that are filled with grout, horizontal tie beams lock the wall together at the top, and the whole thing sits on a properly built footing. Each piece has a job, and leaving one out weakens the rest.',
      ],
    },
    breakdown: {
      h2: 'Block work we can help with',
      intro: 'Block projects differ in scale, but the building blocks of the work are similar.',
      items: [
        {
          h: 'Additions and garages',
          paras: [
            'You want more space and you want it to feel like part of the house. The block shell is the base for everything that follows, so alignment, reinforcement and tie-in to the existing structure all matter.',
            'Getting this stage right avoids cracking, leaks and awkward problems for the trades that come next.',
          ],
          consider: 'Your plans and permit set the structural requirements. We build to those drawings.',
        },
        {
          h: 'Structural block walls',
          paras: [
            'These are the walls that carry load or resist wind. Rebar placement, grouting and the tie beam are the parts that matter most and are checked at inspection.',
            'Done properly, the wall behaves as a single reinforced unit rather than a stack of blocks.',
          ],
          consider: 'Ask how reinforcement and grouting will be handled and when inspections are scheduled.',
        },
        {
          h: 'Block shells for commercial and light industrial buildings',
          paras: [
            'Commercial block work is driven by plans, scope and coordination with other trades. Clear communication about sequence and access prevents most delays.',
          ],
          consider: 'Send your plans or scope through the form so the work can be priced as a bid.',
        },
        {
          h: 'Finishing block for appearance',
          paras: [
            'Bare block is rarely the final look. Stucco, paint or veneer can be applied once the wall is cured and inspected, and the choice affects maintenance and how the wall handles moisture.',
          ],
          consider: 'Plan the finish early because it influences surface preparation and detailing.',
        },
      ],
    },
    why: {
      h2: 'Why proper workmanship matters in block construction',
      paras: [
        'Much of what makes a block wall good is hidden: footing depth, rebar spacing, grout fill and tie-beam continuity. Once a wall is finished and stuccoed, nobody can see whether those steps were done properly, which is exactly why they cannot be skipped.',
        'Inspections catch some problems, but the best protection is a contractor who builds to the plans and explains each stage as it happens.',
      ],
      img: photos.blockWallBuild,
    },
    materials: {
      h2: 'Options and considerations for block projects',
      intro: 'A few choices affect cost, strength and finish.',
      items: [
        { h: 'Block size and type', p: 'Standard CMU comes in common widths, and your plans will specify what is required. Some projects call for special units such as bond beam block or lintels.' },
        { h: 'Reinforcement', p: 'Vertical and horizontal steel and grout fill are set by the plans for your location and wind exposure.' },
        { h: 'Stucco, paint or veneer', p: 'Finishes change appearance and maintenance. Stucco is common in South Florida and is applied over cured block.' },
        { h: 'Waterproofing', p: 'Coastal humidity and heavy rain make moisture protection worth planning from the start, not as an afterthought.' },
        { h: 'Permits and inspections', p: 'Structural block work normally involves permits and inspections. We follow the process for your project.' },
      ],
    },
    faqs: [
      { q: 'How much does block masonry cost?', a: 'Cost depends on the size and height of the structure, reinforcement required, site access and finish. Because plans and wind requirements vary, we give a written estimate after reviewing the details.' },
      { q: 'Does my block project need a permit?', a: 'Structural block work almost always involves permits and inspections in this area. We can confirm what applies to your project.' },
      { q: 'Is block better than other materials in South Florida?', a: 'Reinforced concrete block is widely used here because it handles wind and impact well. Whether it is right for you depends on the project and the plans.' },
      { q: 'How long will my block project take?', a: 'It depends on size, weather, permitting and inspections. We discuss the timeline when reviewing the project.' },
      { q: 'Can you work from my plans?', a: 'Yes. Send the plans or scope through the form and we will price from them.' },
      { q: 'Do you do the stucco finish too?', a: 'Please ask when you send your project details.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the structure you have in mind.' },
    ],
    closing: {
      h2: 'Getting the structure right',
      paras: [
        'A reinforced block structure is a long-term investment. The more complete the information you can share about size, location and plans, the more accurate the estimate will be. If you only have an idea so far, that is fine, describe it in the form above.',
      ],
    },
    related: [
      { slug: 'concrete-block-walls', anchor: 'concrete block walls', why: 'Privacy and perimeter walls' },
      { slug: 'concrete-masonry', anchor: 'concrete masonry', why: 'Footings, tie beams and slabs' },
      { slug: 'commercial-masonry', anchor: 'commercial masonry', why: 'Block shells for businesses' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'concrete-block-walls': {
    slug: 'concrete-block-walls',
    hero: {
      problem: 'You want privacy, security or a clean boundary and you want a wall that will not lean, crack or fail the first time a storm comes through. A block wall is one of the most durable ways to get there, but only if it is built with a proper footing and reinforcement.',
      help: 'Tell us the length, height and where the wall is going and we will review it and prepare a written estimate.',
    },
    problem: {
      h2: 'A wall that does the job and stays standing',
      paras: [
        'Most people looking for a block wall have a specific reason: a neighbour too close, a pool that needs enclosing, a yard that needs security, or an old wall that has started to fail.',
        'Their worries tend to be the same. How tall can it go? Will it need a permit? Will it crack? And will it look good, or like a prison wall? All of those have answers, but they depend on your property, your local rules and how the wall is built.',
        'A freestanding wall takes wind from both sides and has nothing to brace it, so it relies on its footing and steel far more than a house wall does.',
      ],
      signsTitle: 'Common reasons homeowners build a block wall',
      signs: [
        'Privacy from neighbours or the street',
        'Enclosing a pool or yard for safety',
        'Security and sound reduction',
        'Replacing a failing wooden fence or crumbling old wall',
        'Defining a property line or garden area',
      ],
      img: photos.breezeWall,
    },
    about: {
      h2: 'What a block privacy or boundary wall involves',
      paras: [
        'Some owners call these masonry fences or block fences, but they are the same thing: a reinforced block wall on a proper footing. A well-built masonry wall starts underground. A footing is dug and poured, steel is set, and the wall is built up in courses with reinforced cells grouted solid at set intervals. Columns and a cap finish it off.',
        'Then comes the finish, usually stucco or paint, and sometimes decorative features such as breeze-block openings. Height limits, setbacks and any homeowner association rules vary by property, so it is worth checking them before you design the wall.',
      ],
    },
    breakdown: {
      h2: 'Block wall projects we can help with',
      intro: 'Walls look simple, but the right approach depends on what the wall is for.',
      items: [
        {
          h: 'Privacy and perimeter walls',
          paras: [
            'The goal is height, solidity and a tidy look. The wall needs a footing sized for its height and reinforcement that suits the wind exposure of your lot.',
            'The payoff is a wall you do not have to think about for years.',
          ],
          consider: 'Check height limits and setbacks for your property before settling on a design.',
        },
        {
          h: 'Pool and yard enclosure walls',
          paras: [
            'Walls around pools and yards often have safety requirements as well as privacy goals. Gate openings and columns need planning.',
          ],
          consider: 'Ask how gates, columns and any required openings will be handled.',
        },
        {
          h: 'Decorative and screen walls',
          paras: [
            'Open block patterns let light and air through while keeping the structure. They suit entries, patios and garden features.',
          ],
          consider: 'Decorative sections still need proper support and reinforcement.',
        },
        {
          h: 'Replacing or repairing an old wall',
          paras: [
            'If an existing wall is leaning or cracked, the first question is why. Sometimes a repair makes sense. Sometimes the footing is the problem and rebuilding is more honest.',
          ],
          consider: 'Photos of the problem areas help us advise whether repair or replacement is likely.',
        },
      ],
    },
    why: {
      h2: 'Why a wall needs proper construction',
      paras: [
        'A taller wall acts like a sail in strong wind. Without an adequate footing, steel and grout, it can crack at the base or tilt over time. These parts are buried or hidden by the finish, which is why they are the first places to be skimped on.',
        'Asking how the footing, reinforcement and cap will be built tells you a lot about whether a quote is for a real wall or the appearance of one.',
      ],
      img: photos.blockMallet,
    },
    materials: {
      h2: 'Options and considerations for block walls',
      intro: 'Several choices change how the wall looks and what it costs.',
      items: [
        { h: 'Wall height and length', p: 'These drive footing size, steel and cost. Local rules may limit height in some zones.' },
        { h: 'Finish', p: 'Stucco and paint are the most common finishes here. Some owners prefer split-face block, veneer or decorative sections.' },
        { h: 'Columns and caps', p: 'Columns add strength at intervals and caps shed water off the top of the wall.' },
        { h: 'Gates and access', p: 'Gate positions need to be planned early so the columns and footings are placed correctly.' },
        { h: 'Drainage', p: 'Where water collects against a wall, a plan for drainage prevents staining and damage.' },
      ],
    },
    faqs: [
      { q: 'How much does a block wall cost?', a: 'It depends on length, height, footing, reinforcement, finish and site access. We give a written estimate after reviewing your details.' },
      { q: 'Do I need a permit for a block wall?', a: 'Many walls do, and height or location can change the requirements. We can confirm what applies to your property.' },
      { q: 'How tall can my wall be?', a: 'Limits vary by location and zoning. We will check what is allowed on your property before settling on a design.' },
      { q: 'Will a block wall crack?', a: 'Cracks can occur when footings are inadequate, control joints are missing or the ground moves. Proper design and construction reduce the risk.' },
      { q: 'Can the wall be stucco or painted to match my house?', a: 'Yes, block walls are commonly finished with stucco or paint.' },
      { q: 'Can you replace an old wall?', a: 'We can look at your existing wall and advise whether repair or replacement makes sense. Send photos with the form.' },
      { q: 'How long will it take?', a: 'It depends on size, permits and weather. We discuss the timeline when reviewing the project.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page with the wall length, height and location.' },
    ],
    closing: {
      h2: 'Planning your wall before you build it',
      paras: [
        'A good wall starts with a conversation about what it is for, how tall it needs to be and what the rules are for your lot. If you have a sketch, measurements or photos of the area, add them to the form above and we will take it from there.',
      ],
    },
    related: [
      { slug: 'block-masonry', anchor: 'block masonry for additions and structures', why: 'Structural block' },
      { slug: 'retaining-walls', anchor: 'retaining walls', why: 'Walls that hold back soil' },
      { slug: 'brick-walls', anchor: 'brick walls', why: 'Decorative and garden walls' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'concrete-masonry': {
    slug: 'concrete-masonry',
    hero: {
      problem: 'A masonry structure is only as good as what is under and through it. Footings, tie beams, grout and slab tie-ins are where concrete and masonry meet, and they decide whether the finished structure stays solid.',
      help: 'Describe the project and we will review it and prepare a written estimate for the concrete and masonry work together.',
    },
    problem: {
      h2: 'Where concrete and masonry have to work as one system',
      paras: [
        'Concrete masonry is a less obvious search than a wall or a repair, so the visitor is often a builder or owner who has a structure in mind and wants the foundation and masonry handled together.',
        'The worry is coordination. When the footing, the walls and the tie beam are handled by different people, gaps appear in who is responsible for what, and problems are hard to trace.',
        'Treating the concrete and masonry as one connected system makes the job simpler to plan and easier to inspect.',
      ],
      signsTitle: 'Projects that call for concrete masonry',
      signs: [
        'New structures with footings and block walls',
        'Tie beams and columns that lock a wall together',
        'Slab tie-ins at the base of block walls',
        'Grout and rebar placement inside block cells',
        'Retaining and site walls with a concrete base',
      ],
      img: photos.concretePour,
    },
    about: {
      h2: 'What concrete masonry covers',
      paras: [
        'Concrete masonry includes the footings and stem walls that carry a structure, the concrete masonry units (CMU) that form the walls, the grout and steel that make those walls structural and the tie beams and columns that connect them.',
        'Each part is placed in a sequence and inspected at certain points. Planning that sequence in advance avoids wasted time and rework.',
      ],
    },
    breakdown: {
      h2: 'Concrete masonry work we can help with',
      intro: 'These are the pieces that usually fall under this heading.',
      items: [
        {
          h: 'Footings and stem walls',
          paras: ['Everything sits on the footing. Size, depth and steel come from the plans and the soil. Getting it right protects the rest of the structure.'],
          consider: 'Footing requirements are set by your plans and local conditions.',
        },
        {
          h: 'Tie beams and columns',
          paras: ['These reinforced concrete members tie the walls together and help the structure act as a unit in high wind.'],
          consider: 'Continuity of steel is the detail that matters most.',
        },
        {
          h: 'Grouting and reinforcing block cells',
          paras: ['Cells holding rebar are filled with grout so the steel and block act together. Skipped or incomplete fill weakens the wall.'],
          consider: 'Ask how grout fill is checked before the wall is closed up or finished.',
        },
        {
          h: 'Slab tie-ins and details',
          paras: ['Where walls meet slabs, details for moisture, movement and connection matter. Planning these early avoids cracks and leaks.'],
          consider: 'The sequence of slab and wall work should be agreed up front.',
        },
      ],
    },
    why: {
      h2: 'Why this work needs care',
      paras: [
        'Concrete and masonry errors are expensive to fix because they are buried inside finished work. The best prevention is following the plans, keeping the sequence orderly and inspecting at the right moments.',
        'It also helps to have one team that understands both sides of the work, so details do not fall between trades.',
      ],
      img: photos.footingForms,
    },
    materials: {
      h2: 'Options and considerations',
      intro: 'Most decisions here are set by the plans, but a few are worth discussing.',
      items: [
        { h: 'Concrete strength and mix', p: 'Specified by the plans or engineer for the application.' },
        { h: 'Reinforcement', p: 'Rebar size and spacing depend on the structure and wind requirements.' },
        { h: 'Block type', p: 'Standard CMU, bond beam block and lintels all have roles.' },
        { h: 'Curing and weather', p: 'Florida heat and rain affect scheduling and how concrete is protected while it cures.' },
        { h: 'Inspections', p: 'Footings, steel and grout are normally inspected at set stages.' },
      ],
    },
    faqs: [
      { q: 'How much does concrete masonry work cost?', a: 'It depends on the size of the structure, the plans and site conditions. We prepare a written estimate after reviewing the details.' },
      { q: 'Do you handle both the concrete and the block?', a: 'Please ask when you send your project.' },
      { q: 'Do I need engineering?', a: 'Many structures do. Your plans or engineer will specify requirements and we build to them.' },
      { q: 'What happens at inspections?', a: 'Inspectors check stages such as footings, steel and grout fill. We schedule and coordinate those with you.' },
      { q: 'How long will the work take?', a: 'It depends on the project, weather and inspections.' },
      { q: 'Can you work from my plans?', a: 'Yes, send them through the form.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the structure.' },
    ],
    closing: {
      h2: 'Starting with the foundation',
      paras: ['The more you can tell us about the structure, size and plans, the more precise the estimate. A sketch or photos of the site are enough to start the conversation.'],
    },
    related: [
      { slug: 'block-masonry', anchor: 'block masonry', why: 'Structural block walls' },
      { slug: 'retaining-walls', anchor: 'retaining walls', why: 'Concrete-based site walls' },
      { slug: 'commercial-masonry', anchor: 'commercial masonry', why: 'Larger structures' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'masonry-repair': {
    slug: 'masonry-repair',
    hero: {
      problem: 'You have noticed a crack, a patch of crumbling mortar or a section of wall that does not look right, and you are wondering whether it is cosmetic or something worse. In South Florida, salt, moisture and age can turn a small flaw into a larger one.',
      help: 'Describe what you are seeing and send a photo. We will review it and tell you what the repair is likely to involve.',
    },
    problem: {
      h2: 'Is it cosmetic, or is it telling you something?',
      paras: [
        'The first reaction to a cracked or crumbling wall is usually worry. Will it get worse? Is it dangerous? Will fixing it cost far more than you expected?',
        'The honest answer is that it depends on why it happened. A hairline crack in stucco is different from a stair-step crack running through block joints. A bit of flaking is different from concrete spalling where the steel inside has begun to rust.',
        'Coastal air, humidity and heavy rain make South Florida tough on masonry. Water gets in, steel corrodes and swells, and the surface pushes off. That is why finding the cause matters as much as patching the damage.',
      ],
      signsTitle: 'Signs that masonry needs repair',
      signs: [
        'Cracks, especially wide, growing or stair-stepping ones',
        'Crumbling or missing mortar',
        'Flaking, chipping or spalling surface material',
        'Rust stains bleeding through the wall',
        'Damp patches, white staining or bubbling paint',
        'Loose or crumbling bricks, or sections that are bulging or leaning',
      ],
      img: photos.floatFinish,
    },
    about: {
      h2: 'What masonry repair involves',
      paras: [
        'Masonry repair means identifying what has failed, removing what is damaged and rebuilding it so the wall performs again. It covers brick repair, concrete block wall repair and stucco finishes over block, and in some cases wider masonry restoration where damage is extensive.',
        'A good repair deals with the source as well as the symptom. That can mean redirecting water, replacing corroded steel or fixing a movement problem, not only filling a crack.',
      ],
    },
    breakdown: {
      h2: 'Types of masonry repair we can help with',
      intro: 'Repairs fall into a few groups. The right one depends on what you find on your wall.',
      items: [
        {
          h: 'Cracks in block and stucco',
          paras: [
            'You have a crack and want to know if it matters. Some are cosmetic. Others show movement or water entry.',
            'The solution depends on the cause: sealing and patching for stable hairline cracks, or deeper repair where there is movement or damage behind the surface.',
          ],
          consider: 'Photos with something for scale, such as a coin or tape measure, help a lot when sizing up a crack.',
        },
        {
          h: 'Spalling concrete and block',
          paras: [
            'When steel inside the masonry rusts, it expands and pushes off the surface. Patching over without treating the steel means it comes back.',
            'A proper repair exposes and treats the steel, then rebuilds the surface.',
          ],
          consider: 'Ask how corroded steel will be treated before the patch goes on.',
        },
        {
          h: 'Repointing and tuckpointing worn mortar',
          paras: [
            'Mortar joints wear out first. Repointing replaces failed mortar so water cannot get into the wall.',
          ],
          consider: 'The new mortar should suit the existing masonry.',
        },
        {
          h: 'Brick repair and replacing damaged brick or block',
          paras: [
            'When bricks are loose, crumbling, cracked or damaged, they can be cut out and replaced. The aim is a repair that is structurally sound and blends in.',
          ],
          consider: 'Matching older materials is not always possible, so ask what to expect.',
        },
        {
          h: 'Masonry waterproofing and sealing',
          paras: ['Once repairs are done, sealing helps keep moisture from returning, and is worth discussing for coastal properties.'],
          consider: 'Not every wall needs sealing. Ask whether it suits yours.',
        },
      ],
    },
    why: {
      h2: 'Why a proper repair matters',
      paras: [
        'A quick cosmetic patch might look fine for a while, but if the cause is still there the damage returns, often worse. Doing the diagnosis and the repair properly costs more up front and usually less over the life of the wall.',
        'A professional assessment is also useful if you are unsure whether a problem is minor or structural, because it gives you a clearer basis for deciding what to do.',
      ],
      img: photos.mortarLevel,
    },
    materials: {
      h2: 'Repair options and what to think about',
      intro: 'Your choices depend on the type of damage and how far it extends.',
      items: [
        { h: 'Repair versus replace', p: 'Localised damage can usually be repaired. Widespread failure, repeated problems or structural movement may make rebuilding that section the better long-term choice.' },
        { h: 'Matching existing finish', p: 'Colour and texture matching is part of a good repair, especially on stucco and brick.' },
        { h: 'Treating the cause', p: 'Water, drainage, corroded steel or movement should be addressed so the repair lasts.' },
        { h: 'Protective coatings', p: 'Sealers and paint can help, but they work best on a sound surface.' },
        { h: 'Maintenance afterward', p: 'Periodic checks catch small problems before they grow.' },
      ],
    },
    faqs: [
      { q: 'How much does masonry repair cost?', a: 'Repairs vary widely, from small patches to extensive rebuilds. We price after seeing photos or the wall, so the estimate reflects what is actually wrong.' },
      { q: 'Can damaged brick or masonry be repaired instead of replaced?', a: 'Often yes, particularly for localised damage. We will tell you honestly if we think replacement is the better option.' },
      { q: 'How do I know if a crack is serious?', a: 'Wide, growing or stair-stepping cracks, or cracks with displacement, deserve a closer look. A professional assessment is the safest way to find out.' },
      { q: 'Why does masonry spall?', a: 'Often because moisture reaches embedded steel, which rusts and expands. Treating the steel is part of a lasting repair.' },
      { q: 'Do you do emergency repairs after storms?', a: 'Please tell us what has happened in the form.' },
      { q: 'Do you repair stucco over block?', a: 'Please include details and photos in the form.' },
      { q: 'How long does a repair take?', a: 'It depends on the extent of damage and drying or curing needs.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top and attach a photo of the damage.' },
    ],
    closing: {
      h2: 'Know what you are dealing with before you decide',
      paras: ['A repair is worth doing once. If you are not sure whether what you are seeing is minor or serious, send a description and photos and we will take a look.'],
    },
    related: [
      { slug: 'brick-masonry', anchor: 'brick masonry', why: 'Matching and rebuilding brick' },
      { slug: 'concrete-block-walls', anchor: 'block walls', why: 'Rebuilding failed walls' },
      { slug: 'retaining-walls', anchor: 'retaining walls', why: 'Walls showing movement' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'stone-masonry': {
    slug: 'stone-masonry',
    hero: {
      problem: 'Stone gives a property a permanent, high-end look that other materials struggle to match, but it is also unforgiving. Choosing the wrong stone or detailing it badly can mean staining, loose pieces or a finish that looks pasted on.',
      help: 'Tell us what you want to clad or build, and share any inspiration photos. We will review it and prepare a written estimate.',
    },
    problem: {
      h2: 'You want the look of stone without the headaches',
      paras: [
        'Most stone enquiries start with a picture: an outdoor kitchen you saw, an entry column, a feature wall, a fireplace. The questions that follow are practical. Natural or manufactured? How heavy is it? What will it cost? Will it hold up to Florida rain and sun?',
        'Stone adds weight, texture and character, and moisture and structure have to be handled well behind it. That is the part owners do not see, and it is what decides how the finish ages.',
      ],
      signsTitle: 'Common stone projects',
      signs: [
        'Outdoor kitchens and bar areas',
        'Fireplaces and chimneys',
        'Entry columns and feature walls',
        'Wall cladding and accent panels',
        'Pool surrounds and garden features',
      ],
      img: photos.stoneVeneer,
    },
    about: {
      h2: 'What stone masonry involves',
      paras: [
        'Stone masonry covers building with and cladding in natural or manufactured stone. Full structural stone is less common today, and most residential work is stone veneer applied to a prepared wall.',
        'Good stone work starts with a sound backing, proper moisture protection and careful layout so the stone looks natural rather than patterned. How the stone is cut, fitted and mortared makes the difference between a custom finish and an obvious covering.',
      ],
    },
    breakdown: {
      h2: 'Stone work we can help with',
      intro: 'Here is how the common types of stone project usually unfold.',
      items: [
        {
          h: 'Stone veneer on walls and columns',
          paras: [
            'You want a stone finish on a wall or column that is already built. The surface is prepared, a moisture barrier and bonding layer are applied and the stone is set piece by piece.',
            'Layout matters because stone varies in size and colour, and a good installer mixes it so the result looks natural.',
          ],
          consider: 'Ask how the wall is prepared and protected from moisture before the stone goes on.',
        },
        {
          h: 'Outdoor kitchens and outdoor fireplaces',
          paras: [
            'These are showpiece features, and also heat and moisture exposed. Materials and detailing need to suit that use.',
          ],
          consider: 'Plan appliances, utilities and clearances before the masonry starts.',
        },
        {
          h: 'Feature walls and entry columns',
          paras: ['Stone adds presence at entries and focal points. Proportion and detail matter as much as the stone itself.'],
          consider: 'Look at samples against your home in natural light.',
        },
        {
          h: 'Repairing existing stonework and stone walls',
          paras: ['Loose or stained stone can often be repaired, but the cause, usually moisture, should be investigated first.'],
          consider: 'Send photos of any loose or damaged areas.',
        },
      ],
    },
    why: {
      h2: 'Why workmanship shows in stone',
      paras: [
        'Stone is a visual material, so poor workmanship is obvious: uneven joints, visible seams and fake-looking corners. It is also heavy, so a weak backing or poor bonding becomes a safety issue as well as an appearance one.',
        'An experienced stone mason will talk about substrate, moisture and layout before they talk about colour.',
      ],
      img: photos.stoneWall,
    },
    materials: {
      h2: 'Choosing stone and options',
      intro: 'The material you choose affects look, weight, upkeep and cost.',
      items: [
        { h: 'Natural stone', p: 'Authentic and varied, but heavier and generally more costly. Different types weather and stain differently.' },
        { h: 'Manufactured stone', p: 'Lighter and more consistent, often easier to install and more budget-friendly, with a wide range of looks.' },
        { h: 'Stone shape and pattern', p: 'Ledge stone, fieldstone, flagstone and cut stone each give a different character.' },
        { h: 'Mortar and grout', p: 'Joint width and colour change the finished look as much as the stone.' },
        { h: 'Sealing and care', p: 'Some stones benefit from sealing in humid or coastal conditions.' },
      ],
    },
    faqs: [
      { q: 'How much does stone masonry cost?', a: 'Cost depends on the stone, the size of the area, the preparation needed and the complexity of the layout. We provide a written estimate after reviewing your details.' },
      { q: 'What is the difference between natural and manufactured stone?', a: 'Natural stone is quarried and varies more, usually at higher cost and weight. Manufactured stone is cast to look like stone and is lighter and more uniform.' },
      { q: 'Can stone be added to an existing wall?', a: 'Often yes, if the wall is sound and can be prepared properly. We will review it.' },
      { q: 'Does stone need maintenance?', a: 'Some do. Sealing and occasional cleaning can help in humid, coastal conditions.' },
      { q: 'Do you build outdoor kitchens?', a: 'Please describe your plans in the form.' },
      { q: 'How long does a stone project take?', a: 'It depends on size and complexity.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and include inspiration photos if you have them.' },
    ],
    closing: {
      h2: 'Choosing stone with confidence',
      paras: ['Bring a picture of the look you like and tell us about the wall or structure. We will help you think through the practical side so the finished result looks as good as the picture.'],
    },
    related: [
      { slug: 'brick-masonry', anchor: 'brick masonry', why: 'Brick features and veneer' },
      { slug: 'retaining-walls', anchor: 'retaining walls', why: 'Stone-faced retaining walls' },
      { slug: 'residential-masonry', anchor: 'residential masonry', why: 'Outdoor living projects' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'retaining-walls': {
    slug: 'retaining-walls',
    hero: {
      problem: 'Soil is heavy, water makes it heavier and a retaining wall carries all of it, all the time. When one leans, bulges or cracks, it is rarely a surface problem. Most retaining wall failures come down to drainage, the base and what is behind the wall.',
      help: 'Describe the wall you need or the one that is giving you trouble and we will review it and prepare a written estimate.',
    },
    problem: {
      h2: 'A wall that holds back more than you might think',
      paras: [
        'People look for retaining walls when a slope is eroding, a yard needs levelling, a driveway is cutting into a bank or an existing wall has started to move.',
        'The concerns are practical. Will it hold? Will it need engineering? What about the water that collects behind it? And if the old one is failing, can it be repaired or does it need to come out?',
        'In South Florida, heavy rain and a high water table add to the load on a wall. That is why a retaining wall that looks solid can fail if it has no way to drain.',
      ],
      signsTitle: 'Signs a retaining wall is in trouble',
      signs: [
        'The wall leans or bulges outward',
        'Horizontal or stair-step cracks',
        'Water staining, or water seeping through the face',
        'Soil washing out at the base or ends',
        'Sections that have shifted or separated',
      ],
      img: photos.retainingStone,
    },
    about: {
      h2: 'What building a retaining wall involves',
      paras: [
        'A masonry retaining wall, built from block, stone or brick, holds soil at a different level. It needs a solid base, a wall that is sized for the load behind it and a way to drain water so pressure does not build up.',
        'Taller walls or walls near structures often require engineering and a permit, and the requirements vary with the site. That is a conversation to have early, before you commit to a design.',
      ],
    },
    breakdown: {
      h2: 'Retaining wall projects we can help with',
      intro: 'The approach depends on whether the wall is new, being replaced or being repaired.',
      items: [
        {
          h: 'New retaining wall construction',
          paras: [
            'You want to level a yard, stabilise a slope or create planting beds. The wall needs a footing, a suitable structure and drainage behind it.',
            'Building it properly means the soil stays where you want it.',
          ],
          consider: 'Ask how water will drain from behind the wall and whether engineering is required.',
        },
        {
          h: 'Replacing a failing wall',
          paras: [
            'When a wall has moved significantly, it often means the original design or base was inadequate. Rebuilding starts with understanding why it failed.',
          ],
          consider: 'Photos from several angles help us advise on whether repair is realistic.',
        },
        {
          h: 'Repairing damaged retaining walls',
          paras: ['Minor cracking, loose units or failed caps can sometimes be repaired, provided the structure is still sound and drainage is addressed.'],
          consider: 'Repairs only last if the cause of the damage is fixed.',
        },
        {
          h: 'Block, stone and decorative faces',
          paras: ['The structure and the look can be separate decisions. A reinforced block wall can be finished with stone or stucco so it matches your property.'],
          consider: 'Choose the finish early so it is built into the design.',
        },
      ],
    },
    why: {
      h2: 'Why retaining walls need proper design and drainage',
      paras: [
        'The failures we see most often are not unlucky accidents. They come from walls built without a proper base or drainage. Water that cannot escape pushes on the wall until it moves.',
        'A contractor who talks about drainage, backfill and base before they talk about the finish is thinking about the right things.',
      ],
      img: photos.retainingBlock,
    },
    materials: {
      h2: 'Materials and design considerations',
      intro: 'Several factors shape what kind of wall is suitable.',
      items: [
        { h: 'Wall height', p: 'Taller walls need greater structural capacity and often engineering and permits.' },
        { h: 'Block, stone or segmental units', p: 'Reinforced block, stone and segmental systems all work in the right situation. The best choice depends on height, site and budget.' },
        { h: 'Drainage', p: 'Gravel backfill, drain pipe and outlets keep water pressure off the wall.' },
        { h: 'Footing and base', p: 'A properly prepared base keeps the wall from settling or tilting.' },
        { h: 'Finish', p: 'Stucco, stone or textured faces can match your property.' },
      ],
    },
    faqs: [
      { q: 'How much does a retaining wall cost?', a: 'Cost depends on height, length, materials, drainage requirements and site access. We provide a written estimate after reviewing your project.' },
      { q: 'Does a retaining wall need a permit or engineering?', a: 'Taller walls and walls near structures usually do. Requirements vary, so we check what applies to your site.' },
      { q: 'Can my leaning retaining wall be repaired?', a: 'Sometimes. If the structure and base are still sound it may be repairable, otherwise rebuilding is the safer choice. Photos help us advise.' },
      { q: 'Why is drainage so important?', a: 'Water trapped behind a wall adds large pressure. Drainage lets it escape so the wall is not asked to hold it.' },
      { q: 'What materials can a retaining wall use?', a: 'Reinforced concrete block, stone and segmental systems are common. The right one depends on the site.' },
      { q: 'How long will it take?', a: 'It varies with size, access and weather.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top with the wall length, height and a photo of the area.' },
    ],
    closing: {
      h2: 'Getting the wall right the first time',
      paras: ['A retaining wall should be something you forget about. Tell us about the slope or the problem wall, and add photos if you can, and we will go through the options.'],
    },
    related: [
      { slug: 'concrete-block-walls', anchor: 'concrete block walls', why: 'Freestanding walls' },
      { slug: 'stone-masonry', anchor: 'stone masonry', why: 'Stone facing options' },
      { slug: 'masonry-repair', anchor: 'masonry repair', why: 'Damaged walls' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'brick-walls': {
    slug: 'brick-walls',
    hero: {
      problem: 'A brick wall is a statement. It frames a garden, marks a boundary or gives a front entrance a lasting, traditional look, and it is expected to look good for decades. That only happens when the footing, the courses and the mortar are all done carefully.',
      help: 'Tell us where the wall is going, how long and how high, and we will review it and prepare a written estimate.',
    },
    problem: {
      h2: 'Wanting a wall that looks as good in ten years as on day one',
      paras: [
        'People who look into brick walls are often drawn to the character: the warmth, the texture, the way brick weathers. The worries are practical. Will it crack? Will it match the house? Is brick the right choice, or would block with a brick finish make more sense?',
        'A brick wall also has to stand on its own. It needs a footing, enough thickness for its height and detailing that keeps moisture out, because rain, humidity and salt air all work on brick here.',
      ],
      signsTitle: 'Common reasons to build a brick wall',
      signs: [
        'Garden and planter walls',
        'Boundary and front-yard walls',
        'Entry walls and gate piers',
        'Feature walls on patios and outdoor areas',
        'Replacing an old wall that is failing',
      ],
      img: photos.brickLine,
    },
    about: {
      h2: 'What building a brick wall involves',
      paras: [
        'Good brick wall construction starts with a footing and then goes up course by course, with each course laid to a line so the wall stays straight. Joints are tooled for a clean finish and a cap protects the top.',
        'Height, thickness and length determine how much support the wall needs. Taller or longer walls may need piers or reinforcement, and rules about height and setbacks can apply to your property.',
      ],
    },
    breakdown: {
      h2: 'Brick wall projects we can help with',
      intro: 'Brick walls come in a few common forms.',
      items: [
        {
          h: 'Garden and planter walls',
          paras: ['Low walls that frame beds and patios. The challenge is keeping them straight and handling soil moisture behind them.'],
          consider: 'Ask how moisture from soil and irrigation will be handled.',
        },
        {
          h: 'Boundary walls and brick fences',
          paras: ['Walls that mark the edge of a property need strength as well as looks, with footings and piers suited to their height.'],
          consider: 'Check height limits and setback rules for your lot.',
        },
        {
          h: 'Feature walls and gate piers',
          paras: ['These are focal points, so proportion and detail matter. Caps, patterns and brick colour set the tone.'],
          consider: 'Look at brick samples against your house before choosing.',
        },
        {
          h: 'Rebuilding or repairing an existing wall',
          paras: ['Leaning, cracked or crumbling walls may be repairable or may need rebuilding. The footing and moisture usually explain which.'],
          consider: 'Send photos of the problem areas and the base of the wall.',
        },
      ],
    },
    why: {
      h2: 'Why brick walls need careful construction',
      paras: [
        'A freestanding brick wall carries wind load with little support, and joints that are not full or well tooled let water in. These weaknesses may not show up for a year or two.',
        'A good wall comes from good preparation, consistent courses and sound detailing, not from the brick alone.',
      ],
      img: photos.mortarLevel,
    },
    materials: {
      h2: 'Brick wall options and decisions',
      intro: 'A few choices change both the look and the performance.',
      items: [
        { h: 'Solid brick or brick over block', p: 'A brick-faced block wall can be stronger and more economical than solid brick for larger walls.' },
        { h: 'Brick style', p: 'Colour, texture and size change the character. Samples tell you more than photos.' },
        { h: 'Bond pattern and joints', p: 'Patterns and joint profiles change how the wall looks and sheds water.' },
        { h: 'Caps and copings', p: 'A good cap keeps water out of the top of the wall.' },
        { h: 'Piers and reinforcement', p: 'Longer or taller walls may need piers or steel for stability.' },
      ],
    },
    faqs: [
      { q: 'How much does a brick wall cost?', a: 'It depends on length, height, brick choice, footing and detail. We give a written estimate after reviewing your plans.' },
      { q: 'Is brick or block better for a wall?', a: 'Both work. Block with a brick or stucco face is often more economical for tall or long walls, while solid brick suits smaller features.' },
      { q: 'Will a brick wall crack?', a: 'Cracking is usually linked to the footing, movement or moisture. Good preparation and control joints reduce the risk.' },
      { q: 'Do I need a permit?', a: 'It depends on the height, location and type of wall. We can confirm what applies to your property.' },
      { q: 'Can you match my existing brick?', a: 'We aim for the closest match possible and will be honest about what is achievable.' },
      { q: 'How long will it take?', a: 'It depends on size and weather.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of the page with the wall length, height and location.' },
    ],
    closing: {
      h2: 'A wall you will be happy with',
      paras: ['Start with where the wall will go and what it is for. Share measurements, photos or sketches in the form above and we will discuss the options.'],
    },
    related: [
      { slug: 'brick-masonry', anchor: 'brick masonry', why: 'Veneer, columns and steps' },
      { slug: 'concrete-block-walls', anchor: 'concrete block walls', why: 'Block privacy walls' },
      { slug: 'retaining-walls', anchor: 'retaining walls', why: 'Walls that hold soil' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'commercial-masonry': {
    slug: 'commercial-masonry',
    hero: {
      problem: 'On a commercial job, masonry is a link in the chain. Schedules depend on it, other trades work after it and surprises are expensive. What a general contractor or property manager wants is clear scope, steady communication and work that does not need to be redone.',
      help: 'Send us the scope or plans for the job and we will review it and prepare a written estimate.',
      points: ['Commercial and residential masonry', 'Serving Pompano Beach and nearby Broward County', 'Estimates prepared from your plans or scope'],
    },
    problem: {
      h2: 'Masonry that fits into your schedule and scope',
      paras: [
        'Commercial customers tend to be general contractors, developers, property managers and associations. The concerns are about reliability: can the contractor handle the scope, work to a schedule and communicate when something changes? For a general contractor looking for a masonry subcontractor, that is the whole question.',
        'For property owners and managers, the question is often different. A condo building has cracking, a wall needs restoration or a storefront needs repair, and they want someone who can assess it and explain it clearly.',
      ],
      signsTitle: 'Typical commercial masonry needs',
      signs: [
        'Block shells and structural masonry for new buildings',
        'Brick and block facades',
        'Restoration and repair for condos and associations',
        'Walls, enclosures and site masonry',
        'Repairs to damaged or ageing commercial masonry',
      ],
      img: photos.concretePour,
    },
    about: {
      h2: 'What commercial masonry work involves',
      paras: [
        'Commercial masonry follows plans and specifications, often with tighter coordination, inspections and sequencing than residential work. Scope clarity up front prevents most disputes later.',
        'For existing buildings, the work usually starts with an assessment to find the extent of damage and then a repair plan that can be priced and scheduled.',
      ],
    },
    breakdown: {
      h2: 'Commercial work we can help with',
      intro: 'Different customers need different things from a masonry contractor.',
      items: [
        {
          h: 'Block shells and structural masonry',
          paras: ['Work from your drawings with reinforcement, grouting and tie beams built to the plans. Sequence and access are agreed in advance.'],
          consider: 'Send plans or a scope so the work can be priced as a bid.',
        },
        {
          h: 'Brick and block facades',
          paras: ['Exterior walls that need to look right and perform. Detailing around openings and joints is where problems often start.'],
          consider: 'Share elevations and finish requirements when you send the project.',
        },
        {
          h: 'Restoration and repair for existing buildings',
          paras: ['Condos, offices and retail properties often have cracking, spalling or water damage. The first step is understanding the extent before pricing a fix.'],
          consider: 'Photos and a description of the building help us advise on the likely scope.',
        },
        {
          h: 'Site walls and enclosures',
          paras: ['Perimeter walls, dumpster enclosures and retaining walls are part of many commercial sites.'],
          consider: 'Include site plans or dimensions with your enquiry.',
        },
      ],
    },
    why: {
      h2: 'Why reliable masonry matters on a commercial project',
      paras: [
        'Masonry delays ripple through the schedule, and rework is costly. What helps is a clear scope, honest communication about progress and work that is done once.',
        'For existing buildings, a clear explanation of what is wrong and what is proposed helps boards and managers make decisions with confidence.',
      ],
      img: photos.blockMallet,
    },
    materials: {
      h2: 'Considerations for commercial projects',
      intro: 'Several factors shape commercial masonry scopes.',
      items: [
        { h: 'Plans and specifications', p: 'Materials and methods are usually specified. We work from your documents.' },
        { h: 'Scheduling and sequencing', p: 'Coordination with other trades and inspections affects the schedule.' },
        { h: 'Access and site conditions', p: 'Site logistics change how masonry work is set up.' },
        { h: 'Documentation', p: 'Commercial clients often need paperwork. Tell us what you require when you enquire.' },
        { h: 'Maintenance and repair planning', p: 'For existing buildings, planning repairs in phases can help budgets.' },
      ],
    },
    faqs: [
      { q: 'How is commercial masonry priced?', a: 'Generally per project from your plans or scope. Send the details and we will prepare a written estimate.' },
      { q: 'Can you work from our drawings?', a: 'Yes, send them through the form.' },
      { q: 'Do you work with general contractors?', a: 'Yes.' },
      { q: 'Can you handle repairs on an occupied building?', a: 'Please describe the property and access in the form.' },
      { q: 'What areas do you cover?', a: 'Pompano Beach and nearby Broward County.' },
      { q: 'How long will the work take?', a: 'It depends on the scope and schedule.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of this page and describe the scope.' },
    ],
    closing: {
      h2: 'Starting with a clear scope',
      paras: ['The clearer the scope, the better the estimate. Send what you have, even if it is rough, and we will tell you what else would help.'],
    },
    related: [
      { slug: 'block-masonry', anchor: 'block masonry', why: 'Structural block work' },
      { slug: 'masonry-repair', anchor: 'masonry repair', why: 'Restoration of existing masonry' },
      { slug: 'residential-masonry', anchor: 'residential masonry', why: 'Homeowner projects' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'residential-masonry': {
    slug: 'residential-masonry',
    hero: {
      problem: 'Your home is probably your biggest asset, and letting a contractor work on it takes trust. Whether you are fixing a cracked wall, planning an addition or dreaming up an outdoor space, you want to understand what is going to happen and what it will cost before work begins.',
      help: 'Tell us about your home and what you have in mind. We will review it and prepare a written estimate.',
    },
    problem: {
      h2: 'Your home, your budget and no surprises',
      paras: [
        'Homeowners usually come with one of three situations: something is broken and needs fixing, something is planned and needs building, or they are improving an outdoor space.',
        'In each case the worries are similar. How much will it cost? Will the work look good? Will the contractor show up and communicate? Will it last?',
        'South Florida homes also have specific needs. Coastal air is hard on masonry, hurricane code shapes how walls are built and stucco over block is the norm. Working with someone who understands those details saves headaches.',
      ],
      signsTitle: 'Common residential masonry projects',
      signs: [
        'Repairing cracked or deteriorating walls',
        'Block additions, garages and structures',
        'Privacy walls and boundary walls',
        'Retaining walls and garden walls',
        'Outdoor kitchens, fireplaces and stone features',
      ],
      img: photos.outdoorKitchen,
    },
    about: {
      h2: 'What residential masonry covers',
      paras: [
        'Residential masonry includes building and repairing walls, structures and custom masonry features using brick, concrete block, stone and stucco finishes.',
        'The best projects start with a clear idea of what you want, an honest assessment of what the property needs and a written estimate that spells out the work.',
      ],
    },
    breakdown: {
      h2: 'Residential work we can help with',
      intro: 'Most homeowner projects fall into one of these groups.',
      items: [
        {
          h: 'Repairs to existing masonry',
          paras: ['Cracks, crumbling mortar and spalling are common in this climate. Finding the cause is the key to a repair that lasts.'],
          consider: 'Send photos. We will explain what we see and what is likely involved.',
        },
        {
          h: 'New walls and additions',
          paras: ['New block walls and additions need footings, steel and permits. Planning those up front keeps the project on track.'],
          consider: 'Share plans, sketches or measurements if you have them.',
        },
        {
          h: 'Retaining and garden walls',
          paras: ['Walls that shape your yard need good drainage and structure to stay in place.'],
          consider: 'Describe the slope and what the wall needs to do.',
        },
        {
          h: 'Stone and outdoor living features',
          paras: ['Outdoor kitchens, fireplaces and stone features add value and enjoyment when they are well built.'],
          consider: 'Bring ideas and inspiration photos.',
        },
      ],
    },
    why: {
      h2: 'Why it pays to get masonry done properly',
      paras: [
        'Masonry is meant to last decades, and mistakes are slow to show and costly to fix. Good preparation and sound detailing are what separate a wall that stands for years from one that needs attention soon.',
        'Clear written estimates and communication help you compare options and decide with confidence.',
      ],
      img: photos.brickHands,
    },
    materials: {
      h2: 'Options and considerations for homeowners',
      intro: 'A few early decisions shape most residential masonry projects.',
      items: [
        { h: 'Brick, block or stone', p: 'Each has a different look, cost and role. We help you choose what suits the project.' },
        { h: 'Finishes', p: 'Stucco, paint, veneer and natural finishes all affect upkeep.' },
        { h: 'Permits', p: 'Some projects need permits. We can confirm what applies.' },
        { h: 'Budget', p: 'A written estimate helps you compare options and plan.' },
        { h: 'Maintenance', p: 'Masonry in coastal conditions benefits from periodic checks.' },
      ],
    },
    faqs: [
      { q: 'How much will my project cost?', a: 'It depends on size, materials, site access and the work needed. We provide a written estimate after reviewing the details.' },
      { q: 'Can you repair my existing walls?', a: 'In many cases, yes. Send photos with the form and we will tell you what we think is involved.' },
      { q: 'Do I need a permit?', a: 'Many projects do, particularly structural ones. We can confirm what applies to yours.' },
      { q: 'How long will it take?', a: 'It depends on the project.' },
      { q: 'What materials do you work with?', a: 'Brick, concrete block and stone.' },
      { q: 'What areas do you serve?', a: 'Pompano Beach and nearby Broward County.' },
      { q: 'How do I get an estimate?', a: 'Use the form at the top of the page. Describe the job and attach photos if you can.' },
    ],
    closing: {
      h2: 'Starting your project',
      paras: ['Tell us what you are dealing with or what you want to build, and attach photos if you can. We will review it and explain what to expect.'],
    },
    related: [
      { slug: 'masonry-repair', anchor: 'masonry repair', why: 'Fixing damaged masonry' },
      { slug: 'concrete-block-walls', anchor: 'block walls', why: 'Privacy and boundary walls' },
      { slug: 'stone-masonry', anchor: 'stone masonry', why: 'Outdoor living features' },
    ],
  },
};
