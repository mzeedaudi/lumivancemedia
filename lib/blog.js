import { guides } from "@/lib/resources";

// The blog (/resources/blog): every guide, newest first, each with a category,
// a flash-card color and a reading time. The posts themselves live in
// lib/answers.js, lib/posts.js and lib/resources.js; each gives its card a
// short `topic` and a `category` from the list below.

// Category order is the order of the filter on the blog page.
export const blogCategories = [
  { name: "AI video ads", tone: "accent" },
  { name: "Costs", tone: "ink" },
  { name: "Testing", tone: "lilac" },
  { name: "Production", tone: "lilac" },
  { name: "Rules", tone: "ink" },
  { name: "Hiring an agency", tone: "accent" },
];

const toneOf = Object.fromEntries(blogCategories.map((c) => [c.name, c.tone]));

// Every word a reader sees in a post's blocks, for its reading time.
function words(value) {
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(value)) return value.reduce((n, v) => n + words(v), 0);
  if (value && typeof value === "object") {
    return Object.entries(value).reduce((n, [k, v]) => (["type", "id", "href", "slug", "still"].includes(k) ? n : n + words(v)), 0);
  }
  return 0;
}

const READING_SPEED = 230; // words a minute
const minutesFor = (g) => {
  const text = g.blocks.filter((b) => !["related", "sources", "cta"].includes(b.type));
  return Math.max(2, Math.round((words(text) + words(g.hero)) / READING_SPEED));
};

const newest = (a, b) => (b.published ?? "").localeCompare(a.published ?? "");

export const posts = guides
  .map((g) => {
    if (!toneOf[g.category] || !g.topic) throw new Error(`Guide ${g.slug} needs a topic and a known category`);
    return { ...g, tone: toneOf[g.category], minutes: minutesFor(g), href: `/resources/${g.slug}` };
  })
  .sort(newest);

export const post = (slug) => posts.find((p) => p.slug === slug);

// "18 November 2026" from "2026-11-18".
export function longDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
