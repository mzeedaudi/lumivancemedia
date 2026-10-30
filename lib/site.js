import { caseStudies } from "@/lib/cases";

// Central content for Lumivance. Change copy here without touching components.

export const site = {
  name: "Lumivance",
  tagline: "Video ads for apps and online brands",
  email: "hello@lumivancemedia.com",
  // Leave blank to hide the row entirely. Better absent than fake.
  phone: "",
  location: "Remote, working worldwide",
  // Blank entries are not rendered, so no dead links ship.
  social: { instagram: "", linkedin: "", x: "", tiktok: "" },
  // Registered entity details, used in the legal pages.
  legal: { entity: "Lumivance Media", jurisdiction: "", address: "" },
  // The one promise we make about replies, used wherever we invite contact.
  reply: "We reply within one business day.",
};

// The site has one call to action. Every button says this and goes here.
export const cta = {
  label: "Start a Creative Testing Sprint",
  short: "Start a sprint",
  href: "/contact",
};

// Case studies join the menu only once there is one to show (placeholders
// count on previews, never on the live site).
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  ...(caseStudies.length ? [{ label: "Case studies", href: "/case-studies" }] : []),
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

// Every ad on the site. Most are spec ads: made by Lumivance to show the
// craft, never run for a client. The few with a `client` were made for that
// company, and are tagged as client work wherever they play.
// Each lives in public/work as <slug>.mp4, with its first frame as <slug>.webp.
// `ratio` is the file's real shape. Frames are never cropped to fake a placement.
export const adTag = (ad) => `${ad.client ? "Client work" : "Spec"} · ${ad.length}`;

export const ads = {
  "bag-unboxing": {
    ratio: "3 / 4",
    length: "0:12",
    seconds: 12.05,
    category: "Accessories",
    title: "Bag unboxing, filmed selfie-style",
    alt: "A presenter unboxes a tan leather shoulder bag in her bedroom",
  },
  "bike-unboxing": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.07,
    category: "Fitness",
    title: "Unboxing to first ride",
    alt: "A presenter unboxes an exercise bike in a gym, then rides it",
  },
  "vazu-can": {
    ratio: "3 / 4",
    length: "0:10",
    seconds: 10.05,
    category: "Drinks",
    title: "Product hero: splash, frost, can",
    alt: "A dragon-fruit lychee soda can shown in splash and frost shots",
  },
  "outfit-try-on": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.07,
    category: "Fashion",
    title: "Try-on haul",
    alt: "A presenter holds up three pieces, then wears them as one outfit",
  },
  lookbook: {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.07,
    category: "Fashion",
    title: "Editorial lookbook",
    alt: "A model in a navy track jacket, tulle skirt and slouch boots",
  },
  "blender-demo": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.07,
    category: "Kitchen",
    title: "Presenter demo",
    alt: "A presenter shows off a countertop blender in a white kitchen",
  },
  "gold-cuff": {
    ratio: "4 / 3",
    length: "0:15",
    seconds: 15.09,
    category: "Jewelry",
    title: "Selfie-cam show and tell",
    alt: "A presenter holds a gold cuff bracelet up to her phone camera",
  },
  "fizzbears-a": {
    ratio: "16 / 9",
    length: "0:09",
    seconds: 9.1,
    category: "Candy",
    title: "Motion piece, edit A",
    alt: "Sour gummy bears and their pack in fast motion graphics",
  },
  "fizzbears-b": {
    ratio: "16 / 9",
    length: "0:09",
    seconds: 9.1,
    category: "Candy",
    title: "Motion piece, edit B",
    alt: "A second edit of the sour gummy bear motion piece",
  },
  "emera-a": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.09,
    category: "Watches",
    title: "The reaction",
    alt: "A presenter smiles at a rose-gold watch, then tries it on",
  },
  "emera-b": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.09,
    category: "Watches",
    title: "The doorstep",
    alt: "A presenter opens a delivery box at his kitchen table to find the watch",
  },
  "emera-c": {
    ratio: "3 / 4",
    length: "0:15",
    seconds: 15.09,
    category: "Watches",
    title: "The pitch",
    alt: "A presenter talks to camera, then lifts the watch from its case",
  },
  "fillows-cereal": {
    client: "Bidco Africa",
    ratio: "9 / 16",
    length: "0:20",
    seconds: 20.1,
    category: "Cereal",
    title: "Fillows: the midnight snack",
    alt: "A teenager sneaks a bowl of Fillows cereal at night and the crunch wakes his family and the dog",
  },
  "shapies-cereal": {
    client: "Bidco Africa",
    ratio: "9 / 16",
    length: "0:20",
    seconds: 20.08,
    category: "Cereal",
    title: "Shapies: late for school",
    alt: "A schoolboy running late stops for a bowl of Shapies chocolate cereal",
  },
  "oraimo-scrubber": {
    client: "Oraimo",
    ratio: "9 / 16",
    length: "0:28",
    seconds: 28.58,
    category: "Home",
    title: "Oraimo: the cordless scrubber",
    alt: "A woman tired of scrubbing her bathroom glass uses an Oraimo cordless spin scrubber on a sink, tiles and a bathtub",
  },
  "hillson-safety-shoes": {
    client: "Hillson",
    ratio: "9 / 16",
    length: "0:30",
    seconds: 30.7,
    category: "Footwear",
    title: "Hillson: safety shoes",
    alt: "A factory worker laces up Hillson safety shoes, with close-ups of the insole, the leather and the sole on rough ground",
  },
  // 8 Ball Pool (Miniclip). `pending` keeps the brand out of the client list
  // until the case study's real numbers are in; the ads play only on that
  // case study, which is preview-only until then. Posters are JPEG.
  "pool-football": {
    client: "8 Ball Pool",
    pending: true,
    poster: "jpg",
    ratio: "9 / 16",
    length: "0:47",
    seconds: 46.88,
    category: "Mobile games",
    title: "8 Ball Pool: football fever",
    alt: "A pool table over waving national flags and a football pitch, captioned “Me after watching football”, as shots are lined up and potted",
  },
  "pool-break": {
    client: "8 Ball Pool",
    pending: true,
    poster: "jpg",
    ratio: "9 / 16",
    length: "0:09",
    seconds: 9.37,
    category: "Mobile games",
    title: "8 Ball Pool: nothing feels better",
    alt: "Clean break shots on four different 8 Ball Pool tables, captioned “Nothing feels better than this”",
  },
  "pool-anniversary": {
    client: "8 Ball Pool",
    pending: true,
    poster: "jpg",
    ratio: "9 / 16",
    length: "0:45",
    seconds: 45.12,
    category: "Mobile games",
    title: "8 Ball Pool: fifteen years",
    alt: "A film for the game’s fifteenth anniversary: players at pool tables around the world, with lifetime totals for hours played, matches and balls potted",
  },
  "ribena-smarty-berry": {
    client: "Ribena East Africa",
    ratio: "9 / 16",
    length: "0:14",
    seconds: 14.02,
    category: "Drinks",
    title: "Ribena: Smarty Berry",
    alt: "An animated blackcurrant character in glasses talks to camera in a kitchen, ending on the Ribena logo",
  },
};

// Homepage hero. The headline is the one place the orange full stop appears.
export const hero = {
  title: ["Test twenty ads.", "Scale the one that sells."],
  lede: "Lumivance makes UGC-style video ads for apps and online brands. You get twenty at a time, and the first ones arrive 72 hours after your brief. Test every angle at once, then put your budget behind the ad that brings your cost per customer down.",
  aside: "Fixed price per batch. No retainer required.",
  reel: ["bag-unboxing", "outfit-try-on", "bike-unboxing", "vazu-can"],
};

// Homepage: three openers for one product.
export const openers = {
  title: "Why we make twenty at a time",
  intro:
    "One shoot gives you one ad and a guess. A sprint gives you twenty that are built to be compared, with different openers, presenters and formats, so your first week of spend tells you which angle sells.",
  example: "These three are for the same watch. Same product, same length, three different ways to open.",
  items: [
    { slug: "emera-a", title: "The reaction", text: "Opens on her face, watch already in hand." },
    { slug: "emera-b", title: "The doorstep", text: "Opens on a sealed delivery box." },
    { slug: "emera-c", title: "The pitch", text: "Opens on him talking straight to camera." },
  ],
};

// The sprint grid: five hooks across four executions. The read-out in it is
// an illustration, and the note saying so is shown once, next to the grid.
export const plan = {
  title: "How a sprint is laid out",
  intro:
    "Five hooks, each made four ways. That gives twenty ads planned as one test, not twenty unrelated ideas. The first ads arrive 72 hours after your brief, and they run in your own ad account, so you see every dollar and every result.",
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
  note: "This grid is an illustration of how a sprint is laid out and read. It isn’t client results.",
};

// Homepage work band. The statement is the one place the page says, in full,
// that everything shown is spec work made with AI; videos carry a SPEC tag.
export const work = {
  title: "Ads we’ve made",
  statement: "Every ad on this page is spec work made with AI.",
  intro:
    "We made them to show range: unboxings, try-ons, demos and product heroes. None of them ran for a client. Tap any ad to hear it.",
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

// The closing ask on every page.
export const closing = {
  title: "Want to see what we’d test first?",
  text: "Tell us what you sell and what you’re running now. We’ll come back with the angles we’d test first and what it costs.",
};
