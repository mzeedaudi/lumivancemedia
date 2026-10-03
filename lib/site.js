// Central content for Lumivance — swap copy, offers and FAQs here without
// touching components.

export const site = {
  name: "Lumivance",
  tagline: "Performance creative for skincare and wellness brands",
  email: "hello@lumivancemedia.com",
  // Leave blank to hide the row entirely — better absent than fake.
  phone: "",
  location: "Remote · working worldwide",
  // Blank entries are not rendered, so no dead links ship.
  social: { instagram: "", linkedin: "", x: "", tiktok: "" },
  // Registered entity details, used in the legal pages.
  legal: { entity: "Lumivance Media", jurisdiction: "", address: "" },
};

// The site has one call to action. Every button says this and goes here.
export const cta = {
  label: "Start a Creative Testing Sprint",
  short: "Start a sprint",
  href: "/contact",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "How it works", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#founder" },
];

// Spec ads: made by Lumivance to show the craft, never run for a client.
// Each lives in public/work as <slug>.mp4 with a <slug>.jpg poster frame.
// `ratio` is the file's real shape — frames are never cropped to fake a placement.
export const ads = {
  "bag-unboxing": {
    ratio: "3 / 4",
    length: "0:12",
    category: "Accessories",
    title: "Bag unboxing, filmed selfie-style",
    alt: "A presenter unboxes a tan leather shoulder bag in her bedroom",
  },
  "bike-unboxing": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Fitness",
    title: "Unboxing to first ride",
    alt: "A presenter unboxes an exercise bike in a gym, then rides it",
  },
  "vazu-can": {
    ratio: "3 / 4",
    length: "0:10",
    category: "Drinks",
    title: "Product hero: splash, frost, can",
    alt: "A dragon-fruit lychee soda can shown in splash and frost shots",
  },
  "outfit-try-on": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Fashion",
    title: "Try-on haul",
    alt: "A presenter holds up three pieces, then wears them as one outfit",
  },
  lookbook: {
    ratio: "3 / 4",
    length: "0:15",
    category: "Fashion",
    title: "Editorial lookbook",
    alt: "A model in a navy track jacket, tulle skirt and slouch boots",
  },
  "blender-demo": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Kitchen",
    title: "Presenter demo",
    alt: "A presenter shows off a countertop blender in a white kitchen",
  },
  "gold-cuff": {
    ratio: "4 / 3",
    length: "0:15",
    category: "Jewelry",
    title: "Selfie-cam show and tell",
    alt: "A presenter holds a gold cuff bracelet up to her phone camera",
  },
  "fizzbears-a": {
    ratio: "16 / 9",
    length: "0:09",
    category: "Candy",
    title: "Motion piece, edit A",
    alt: "Sour gummy bears and their pack in fast motion graphics",
  },
  "fizzbears-b": {
    ratio: "16 / 9",
    length: "0:09",
    category: "Candy",
    title: "Motion piece, edit B",
    alt: "A second edit of the sour gummy bear motion piece",
  },
  "emera-a": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Watches",
    title: "The reaction",
    alt: "A presenter smiles at a rose-gold watch, then tries it on",
  },
  "emera-b": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Watches",
    title: "The doorstep",
    alt: "A presenter opens a delivery box at his kitchen table to find the watch",
  },
  "emera-c": {
    ratio: "3 / 4",
    length: "0:15",
    category: "Watches",
    title: "The pitch",
    alt: "A presenter talks to camera, then lifts the watch from its case",
  },
};

// ── 01 Hero ──────────────────────────────────────────────────────────────
export const hero = {
  kicker: "Performance creative for skincare & wellness brands",
  title: ["Test twenty ads.", "Scale the one that sells."],
  lede: "Lumivance makes UGC-style video ads for skincare and wellness brands — twenty at a time, the first ones 72 hours after your brief. You test every angle at once, then put your budget behind the ad that brings your cost per customer down.",
  aside: "Fixed price per batch. No retainer required.",
  specs: [
    { value: "20", label: ["ads per", "sprint"] },
    { value: "72h", label: ["brief to", "first ads"] },
    { value: "3", label: ["platforms: Meta,", "TikTok, YouTube"] },
  ],
  reel: ["bag-unboxing", "bike-unboxing"],
};

// ── 02 How we work ───────────────────────────────────────────────────────
export const method = {
  title: ["One brief. Twenty bets.", "A clear answer."],
  intro:
    "A shoot gives you one ad and a guess. A sprint gives you twenty ads built to be compared — different openers, presenters and formats — so your first week of spend tells you which angle sells.",
  example: {
    slugs: ["emera-a", "emera-b", "emera-c"],
    openers: [
      "Opens on her face, watch already in hand.",
      "Opens on a sealed delivery box.",
      "Opens on him talking straight to camera.",
    ],
    caption:
      "Spec ads for a watch brand, made by Lumivance. Same product, same length — three different openers.",
  },
  matrix: {
    title: "How twenty ads are laid out",
    cols: ["Presenter, to camera", "Presenter, demo", "Hands only", "Product hero"],
    rows: [
      { name: "Problem first", line: "Opens on the frustration", states: ["cut", "cut", "iterate", "cut"] },
      { name: "The routine", line: "Shows it in a real morning", states: ["cut", "scale", "iterate", "cut"] },
      { name: "The ingredient", line: "Names what’s inside", states: ["cut", "cut", "cut", "cut"] },
      { name: "The unboxing", line: "Opens the parcel on camera", states: ["iterate", "cut", "cut", "cut"] },
      { name: "The myth", line: "Says what everyone gets wrong", states: ["cut", "cut", "cut", "cut"] },
    ],
    legend: {
      cut: "Cut: stopped after the test",
      iterate: "Iterate: new versions of the angle",
      scale: "Scale: gets the budget",
    },
    note: "Illustration of how a sprint is laid out and read — not client results.",
  },
  commitments: [
    { label: "Speed", text: "First ads 72 hours after your brief." },
    { label: "Volume", text: "Twenty ads per sprint, planned as one test — not twenty unrelated ideas." },
    { label: "Spend", text: "The ads run in your own ad account, so you see every dollar and every result." },
  ],
};

// ── 03 Work ──────────────────────────────────────────────────────────────
export const work = {
  title: ["Spec work,", "labeled as spec work."],
  intro:
    "We made these to show range: unboxings, try-ons, demos and product heroes. None of them ran for a client, and every presenter, product and set in them was generated with AI.",
  hint: "Tap any ad for sound",
  // Grid order. Landscape files take a wider cell; see components/WorkGrid.jsx.
  slugs: [
    "fizzbears-a",
    "vazu-can",
    "bag-unboxing",
    "lookbook",
    "outfit-try-on",
    "gold-cuff",
    "blender-demo",
    "fizzbears-b",
    "bike-unboxing",
  ],
};
