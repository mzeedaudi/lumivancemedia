import { work, caseStudies } from "@/lib/site";

// Unified list of every case study (featured detailed + library).
// Featured entries keep their `results` triple; library entries don't.
export function getAllCaseStudies() {
  return [...work, ...caseStudies];
}

export function getCaseStudy(slug) {
  return getAllCaseStudies().find((c) => c.id === slug);
}

export function getCaseStudySlugs() {
  return getAllCaseStudies().map((c) => c.id);
}

export function getRelatedCaseStudies(slug, n = 3) {
  const all = getAllCaseStudies();
  const current = all.find((c) => c.id === slug);
  if (!current) return [];
  const sameCat = all.filter((c) => c.id !== slug && c.category === current.category);
  const others = all.filter((c) => c.id !== slug && c.category !== current.category);
  return [...sameCat, ...others].slice(0, n);
}

// Group categories so the "Our approach" narrative varies sensibly by product type.
const APP = ["Consumer App", "Productivity", "Healthtech", "EdTech", "Streaming", "Gaming"];
const COMMERCE = ["Fintech", "E-commerce", "Marketplace", "Crypto", "PropTech", "Travel", "AI / ML"];

function bucket(category) {
  if (APP.includes(category)) return "app";
  if (COMMERCE.includes(category)) return "commerce";
  return "b2b"; // B2B SaaS, Dev Tools, Cloud, Cybersecurity, HR Tech, MarTech, Analytics, …
}

const APPROACH = {
  app: "We rebuilt store presence and performance creative in parallel — ASO for durable organic installs, and a weekly pipeline of native, sound-on ads tested against every control. Then we wired lifecycle flows so the users we paid for actually stuck around.",
  commerce: "We rebuilt attribution first, so every dollar was traceable to revenue, then scaled paid against a fixed payback ceiling instead of platform-reported ROAS. Creative testing and landing-page experiments ran weekly, with budget reweighting toward whatever converted.",
  b2b: "We restructured the funnel around qualified pipeline, not raw leads — clean conversion signals feeding the algorithms, intent-tiered targeting, and a demand-gen creative engine that gave sales conversations worth having.",
};

// Build a short, on-brand narrative from the fields we already have.
export function buildNarrative(cs) {
  const cat = cs.category.toLowerCase();
  return {
    challenge: `When ${cs.client} came to Lumivance, growth looked fine on a spreadsheet and stalled in the market. It’s a familiar spot for ${cat} teams: rising acquisition costs, creative that fatigued faster than it could be replaced, and a budget being moved by hand while the auction moved in milliseconds. ${cs.summary}`,
    approach: `${APPROACH[bucket(cs.category)]} Everything ran on one growth model with a single number to hit, and every decision was logged.`,
    result: `The compounding showed up where it counts. Inside the engagement, ${cs.client} reached ${cs.metric} ${cs.metricLabel} — with unit economics the team could take to its board. The accounts, creative and dashboards stayed theirs.`,
  };
}
