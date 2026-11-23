import { services, serviceGroups } from "@/lib/services";
import { categories, industries } from "@/lib/industries";
import { caseStudies } from "@/lib/cases";
import { guides } from "@/lib/resources";

// Every linkable page in one place, keyed for related links, hubs and the
// footer. Services, industries and guides register themselves from their data.
const company = {
  work: { href: "/work", name: "Work", summary: "Every ad we’ve made, client work and spec, frame by frame.", thumb: "lookbook-2" },
  about: { href: "/about", name: "About", summary: "How we work, and what we don’t do.", thumb: "emera-a-6" },
  framework: { href: "/framework", name: "How we test ads", summary: "The steps behind every sprint, from research to deciding what to cut.", thumb: "emera-b-4" },
  ai: { href: "/how-we-use-ai", name: "How we use AI", summary: "What’s generated, what isn’t, and the lines we don’t cross.", thumb: "emera-a-1" },
  faq: { href: "/faq", name: "FAQ", summary: "Straight answers to the questions brands ask first.", thumb: "emera-c-1" },
  blog: { href: "/resources/blog", name: "Blog", summary: "Guides to AI video ads for brands: costs, testing, rules and how to brief an agency.", thumb: "vazu-can-6" },
  glossary: { href: "/resources/glossary", name: "Glossary", summary: "Hook rate, MER, Spark Ads and the rest, in plain English.", thumb: "fizzbears-b-2" },
  "case-studies": { href: "/case-studies", name: "Case studies", summary: "What we tested, what won, and what a customer cost.", thumb: "bag-unboxing-6" },
  contact: { href: "/contact", name: "Contact", summary: "Start a Creative Testing Sprint.", thumb: "bag-unboxing-1" },
};

const registry = {
  ...Object.fromEntries(services.map((s) => [s.slug, { href: `/services/${s.slug}`, ...s }])),
  ...Object.fromEntries([...industries, ...categories].map((s) => [s.slug, { href: `/industries/${s.slug}`, ...s }])),
  ...Object.fromEntries(guides.map((s) => [s.slug, { href: `/resources/${s.slug}`, ...s }])),
  ...company,
};

export function page(key) {
  const p = registry[key];
  if (!p) throw new Error(`Unknown page key: ${key}`);
  return p;
}

const links = (keys) => keys.map((k) => ({ label: page(k).name, href: page(k).href }));

// Footer columns, grouped. Nothing is listed that Lumivance doesn’t actually
// offer. Blog posts are reached through the blog rather than listed one by one.
export const footerColumns = [
  ...serviceGroups.map((g) => ({ title: g, links: links(services.filter((s) => s.group === g).map((s) => s.slug)) })),
  { title: "Industries", links: links(industries.map((i) => i.slug)) },
  { title: "Resources", links: links(["blog", "work", "glossary", "faq"]) },
  { title: "Company", links: links(["about", ...(caseStudies.length ? ["case-studies"] : []), "framework", "ai", "contact"]) },
];
