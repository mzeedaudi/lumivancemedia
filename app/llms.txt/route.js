import { posts } from "@/lib/blog";
import { categories, industries, sectorList } from "@/lib/industries";
import { services } from "@/lib/services";
import { ads, site } from "@/lib/site";
import { SITE_URL } from "@/lib/siteUrl";

// /llms.txt: a plain-text map of the site for AI assistants, in the format
// proposed at llmstxt.org. Built from the same data as the pages, so it
// can't say anything the site doesn't.
export const dynamic = "force-static";

const clients = [...new Set(Object.values(ads).filter((a) => !a.pending).map((a) => a.client).filter(Boolean))];
const list = (items) => new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(items);
const line = (name, path, text) => `- [${name}](${SITE_URL}${path})${text ? `: ${text}` : ""}`;

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a small studio that makes UGC-style and product-led video ads with AI for ${sectorList}, twenty or more at a time, planned as one test, and runs the paid social behind them on Meta, TikTok and YouTube. ${site.location}.`,
    "",
    `- Brands we have made ads for: ${list(clients)}. No client results are published yet.`,
    "- Every other ad on the site is spec work, labeled as such.",
    "- AI presenters demonstrate and explain products. They never pose as customers or give testimonials.",
    `- Contact: ${site.email}. ${site.reply}`,
    "",
    "## Services",
    ...services.map((s) => line(s.name, `/services/${s.slug}`, s.summary)),
    "",
    "## Industries",
    ...[...industries, ...categories].map((i) => line(i.name, `/industries/${i.slug}`, i.summary)),
    "",
    "## Blog",
    ...posts.map((p) => line(p.meta.title, p.href, p.meta.description)),
    "",
    "## Company",
    line("Work", "/work", "Every ad we have made, client work and spec"),
    line("How we test ads", "/framework", "The steps behind every sprint"),
    line("How we use AI", "/how-we-use-ai", "What is generated, what isn't, and the lines we don't cross"),
    line("FAQ", "/faq", "Answers to the questions brands ask first"),
    line("Glossary", "/resources/glossary", "Ad terms in plain English"),
    line("About", "/about"),
    line("Contact", "/contact"),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
