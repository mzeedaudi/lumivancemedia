// Central content for Lumivance — swap copy, tiers and FAQs here without
// touching components.

export const site = {
  name: "Lumivance",
  tagline: "AI commercials for brands",
  email: "hello@lumivancemedia.com",
  // Leave blank to hide the row entirely — better absent than fake.
  phone: "",
  location: "Remote studio · Working worldwide",
  // Blank entries are not rendered, so no dead links ship.
  social: { instagram: "", linkedin: "", x: "", vimeo: "" },
  // Registered entity details, used in the legal pages.
  legal: { entity: "Lumivance Media", jurisdiction: "", address: "" },
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

// Scrolling ticker under the hero — what the studio makes.
export const ticker = [
  "AI Commercials",
  "Product Films",
  "Campaign Stills",
  "Launch Trailers",
  "Social Cutdowns",
  "Brand Worlds",
  "Showreels",
  "Motion Graphics",
  "Lookbooks",
  "Sound Design",
];

export const services = [
  {
    id: "commercials",
    num: "01",
    title: "AI Commercials",
    hook: "Broadcast-grade spots. No shoot, no crew, no six-week lead time.",
    blurb:
      "We direct fully generated commercials the way a film crew would — shot lists, lensing, light, grade and sound — and deliver a finished spot that holds up next to anything made with a camera. Fifteen to sixty seconds, built around your product, your story and the exact placements you’re buying.",
    deliverables: [
      "15s, 30s and 60s masters",
      "Cutdowns for every placement",
      "Custom voiceover and music",
      "Sound design and final mix",
      "Colour grade and titles",
      "Multi-language versions",
    ],
  },
  {
    id: "imagery",
    num: "02",
    title: "Campaign & Product Imagery",
    hook: "Hero stills and lifestyle worlds — shot nowhere, ready everywhere.",
    blurb:
      "Key visuals, product shots and lifestyle scenes generated to a photographic standard: consistent light, real materials, your product rendered exactly as it is. A whole campaign’s worth of imagery in the time it used to take to book the studio.",
    deliverables: [
      "Key visuals and hero shots",
      "Product on white and in-scene",
      "Lifestyle and editorial sets",
      "Seasonal and regional variants",
      "Retouch-ready layered files",
      "Crops for web, print and OOH",
    ],
  },
  {
    id: "showreels",
    num: "03",
    title: "Showreels & Launch Films",
    hook: "The film you open the meeting with.",
    blurb:
      "Brand films, launch trailers and sizzle reels that set the tone before anyone reads a word. Built from your commercials, your imagery and fresh generated footage, cut to music and finished to a standard you’d happily put on a cinema screen.",
    deliverables: [
      "Brand and manifesto films",
      "Product launch trailers",
      "Quarterly showreels",
      "Event and pitch openers",
      "Website hero loops",
      "Original score or licensed music",
    ],
  },
  {
    id: "always-on",
    num: "04",
    title: "Always-On Content",
    hook: "A studio’s output, every single month.",
    blurb:
      "The retainer is the point. Every month you get a fresh drop of spots, stills and cutdowns matched to your calendar — launches, seasons, offers, social — so your channels never run dry and your brand never looks the same twice.",
    deliverables: [
      "Monthly content drop",
      "Social-first vertical cuts",
      "Platform-specific formats",
      "Rapid-response creative",
      "Living brand style system",
      "Shared, always-current asset library",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Brief",
    body: "One call. We learn the product, the audience, the placements and the feeling you’re after — then write a treatment you can react to within a day.",
  },
  {
    step: "02",
    title: "Direct",
    body: "Storyboards, shot lists and a look frame. Lensing, light and pacing are decided before a single frame is generated, so the result feels directed, not prompted.",
  },
  {
    step: "03",
    title: "Generate & craft",
    body: "Footage is generated, selected and rebuilt shot by shot, then graded, sound-designed and cut like any other film. This is where the taste lives.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Masters and every cutdown land in your shared library, named and ready to traffic. First cut in 48 hours; a finished spot inside the week.",
  },
];

// How the offer works — commitments we make, not results we claim.
export const facts = [
  { value: "48h", label: "to a first cut", sub: "from an approved brief" },
  { value: "Every format", label: "included as standard", sub: "16:9 · 9:16 · 1:1 · 4:5" },
  { value: "Unlimited", label: "revisions on Signature and up", sub: "until the frame is right" },
  { value: "100%", label: "yours to own", sub: "full rights, every asset, forever" },
];

// Placement formats demonstrated on the home and work pages.
export const formats = [
  { id: "wide", ratio: "16 / 9", label: "16:9", use: "YouTube · CTV · Web" },
  { id: "vertical", ratio: "9 / 16", label: "9:16", use: "Reels · TikTok · Shorts" },
  { id: "square", ratio: "1 / 1", label: "1:1", use: "Feed · Display" },
  { id: "portrait", ratio: "4 / 5", label: "4:5", use: "Instagram · Meta" },
];

// What a month on retainer looks like, week by week.
export const month = [
  {
    week: "Week 1",
    title: "Brief & treatments",
    body: "Calendar review, briefs for the month’s spots and imagery, treatments and look frames approved.",
  },
  {
    week: "Week 2",
    title: "First cuts",
    body: "Generated, assembled and graded first cuts of every spot, plus the first stills drop.",
  },
  {
    week: "Week 3",
    title: "Refine",
    body: "Revisions, voiceover and sound design locked, remaining imagery delivered in every crop.",
  },
  {
    week: "Week 4",
    title: "Masters & cutdowns",
    body: "Final masters, every placement cutdown, and the library updated. Next month’s calendar opens.",
  },
];

// Real projects go here as they ship: { title, client, year, src, poster }.
// The Work page renders a project grid automatically once this has entries.
export const projects = [];

// Retainers are billed monthly with 30 days’ notice. `excluded` items render
// struck-through so each tier shows what it doesn’t cover, not just what it does.
export const pricing = [
  {
    name: "Studio",
    price: "$3,500",
    cadence: "/mo",
    note: "Billed monthly · cancel with 30 days’ notice",
    tagline: "For brands putting video to work for the first time",
    features: [
      "4 finished AI spots per month (up to 15s)",
      "20 campaign stills per month",
      "Cutdowns in 16:9, 9:16 and 1:1",
      "Brand style system and look frames",
      "2 rounds of revisions per asset",
      "Monthly creative review call",
    ],
    excluded: [
      "Dedicated creative director",
      "Custom voiceover and sound design",
      "Showreels and launch films",
    ],
    cta: "Start with Studio",
    featured: false,
  },
  {
    name: "Signature",
    price: "$7,500",
    cadence: "/mo",
    note: "Billed monthly · cancel with 30 days’ notice",
    tagline: "For brands running always-on campaigns",
    features: [
      "8 finished AI spots per month (up to 30s)",
      "60 campaign stills per month",
      "Every format, cut for each platform",
      "Custom voiceover, music and sound design",
      "Dedicated creative director",
      "Unlimited revisions",
      "Quarterly showreel",
      "Weekly creative reviews and shared Slack",
    ],
    excluded: ["Monthly launch films"],
    cta: "Start with Signature",
    featured: true,
  },
  {
    name: "Cinema",
    price: "$15,000",
    cadence: "/mo",
    note: "Billed monthly · cancel with 30 days’ notice",
    tagline: "For brands that want a full studio on call",
    features: [
      "16 finished spots per month (up to 60s)",
      "150 campaign stills per month",
      "Monthly launch film or showreel",
      "Product and character consistency system",
      "Dedicated director and producer",
      "Priority same-day turnaround",
      "Multi-language versions",
      "Everything in Signature",
    ],
    excluded: [],
    cta: "Talk to us about Cinema",
    featured: false,
  },
];

export const faqs = [
  {
    q: "What exactly is an AI commercial?",
    a: "A finished spot — footage, voice, music, grade, titles — where the footage is generated rather than filmed. We direct it like any commercial: a treatment, a shot list, a look frame, then generation, selection, editing and finishing. The output is a broadcast-ready master plus every cutdown you need.",
  },
  {
    q: "Will it look like AI?",
    a: "Our whole job is making sure it doesn’t. Generated footage straight out of a model does look generated. Directed footage — chosen shot by shot, lit consistently, graded, sound-designed and cut with intent — looks like a film. That craft layer is what you’re paying for.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Every master, still and cutdown we deliver is yours to use anywhere, forever, with no usage fees or renewals. We ask only to show the work in our own reel unless you’d rather we didn’t.",
  },
  {
    q: "How fast is it?",
    a: "A first cut lands within 48 hours of an approved brief, and a finished spot inside the week. On retainer, the month runs on a fixed rhythm — briefs, first cuts, refinement, masters — so you always know what’s arriving and when.",
  },
  {
    q: "Can you keep our product and characters consistent?",
    a: "Yes. For every retainer we build a brand style system — product references, lighting rules, colour, typography, characters if you use them — so each new spot looks like it came from the same studio. On Cinema we go further, with a dedicated consistency system built around your product.",
  },
  {
    q: "Do we need existing footage or photography?",
    a: "No. Product references, a brand guide and a conversation are enough to start. If you do have footage or stills, we can integrate them — some of the best spots mix real product shots with generated worlds.",
  },
  {
    q: "Is there a contract?",
    a: "Retainers roll month to month with 30 days’ notice. No annual lock-in; we’d rather earn the renewal every month.",
  },
];

export const values = [
  {
    title: "Taste is the product",
    body: "Anyone can generate footage. Choosing the right frame, the right light, the right cut — that’s the work, and it’s the only thing that separates a film from a demo.",
  },
  {
    title: "It never looks generated",
    body: "If a viewer can tell, we haven’t finished. Grade, grain, lensing, sound: every layer exists to make the picture feel shot.",
  },
  {
    title: "Speed without shortcuts",
    body: "Days, not weeks — because the process is engineered, not because the finishing is skipped. First cut in 48 hours is a promise we keep.",
  },
  {
    title: "You own every frame",
    body: "Full rights, forever, on everything we deliver. Your brand’s assets shouldn’t have an expiry date.",
  },
];

export const manifesto = {
  quote: "The camera was never the point. The picture was.",
  body: [
    "Lumivance is an AI-native commercial studio. We make the films, imagery and campaigns brands used to need a crew, a location and six weeks for — and we make them in days, on a monthly retainer.",
    "That’s only possible because we treat generation the way a director treats a camera: as a tool that needs taste pointed at it. Every frame is chosen, graded and cut by people who have made commercials the old way and know exactly what a finished one should feel like.",
    "The result is a studio that works at the speed your marketing actually moves — and a body of work that doesn’t look like it came out of a machine.",
  ],
};
