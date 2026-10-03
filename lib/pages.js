import { services, serviceGroups } from "@/lib/services";
import { industries } from "@/lib/industries";
import { guides } from "@/lib/resources";

// Every linkable page in one place, keyed for related links, hubs and the
// footer. Services, industries and guides register themselves from their data.
const company = {
  work: { href: "/work", name: "Work", summary: "Every spec ad we’ve made, frame by frame.", thumb: "lookbook-2" },
  pricing: { href: "/pricing", name: "Pricing", summary: "Sprints from $10,000. Retainers quoted after an account review.", thumb: "vazu-can-6" },
  about: { href: "/about", name: "About", summary: "Who runs Lumivance, and the rules we work by.", thumb: "emera-a-6" },
  framework: { href: "/framework", name: "Our testing framework", summary: "The loop behind every sprint: angles, a matrix, a fair test, a decision.", thumb: "emera-b-4" },
  ai: { href: "/how-we-use-ai", name: "How we use AI", summary: "What’s generated, what isn’t, and the lines we don’t cross.", thumb: "emera-a-1" },
  faq: { href: "/faq", name: "FAQ", summary: "Straight answers to the questions brands ask first.", thumb: "emera-c-1" },
  glossary: { href: "/resources/glossary", name: "Glossary", summary: "Hook rate, MER, Spark Ads and the rest, in plain English.", thumb: "fizzbears-b-2" },
  contact: { href: "/contact", name: "Contact", summary: "Start a Creative Testing Sprint.", thumb: "bag-unboxing-1" },
};

const registry = {
  ...Object.fromEntries(services.map((s) => [s.slug, { href: `/services/${s.slug}`, ...s }])),
  ...Object.fromEntries(industries.map((s) => [s.slug, { href: `/industries/${s.slug}`, ...s }])),
  ...Object.fromEntries(guides.map((s) => [s.slug, { href: `/resources/${s.slug}`, ...s }])),
  ...company,
};

export function page(key) {
  const p = registry[key];
  if (!p) throw new Error(`Unknown page key: ${key}`);
  return p;
}

const links = (keys) => keys.map((k) => ({ label: page(k).name, href: page(k).href }));

// Footer columns, modeled on a full agency site map but listing only pages
// that exist and services Lumivance actually offers.
export const footerColumns = [
  ...serviceGroups.map((g) => ({ title: g, links: links(services.filter((s) => s.group === g).map((s) => s.slug)) })),
  { title: "Industries", links: links(industries.map((i) => i.slug)) },
  { title: "Resources", links: links(["work", ...guides.map((g) => g.slug), "glossary", "faq"]) },
  { title: "Company", links: links(["about", "pricing", "framework", "ai", "contact"]) },
];
