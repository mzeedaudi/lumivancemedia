import { SITE_URL as BASE } from "@/lib/siteUrl";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { guides } from "@/lib/resources";

export default function sitemap() {
  return [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    { path: "/industries", priority: 0.8 },
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.7 })),
    { path: "/work", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/framework", priority: 0.6 },
    { path: "/how-we-use-ai", priority: 0.6 },
    { path: "/resources", priority: 0.5 },
    ...guides.map((g) => ({ path: `/resources/${g.slug}`, priority: 0.5 })),
    { path: "/resources/glossary", priority: 0.4 },
    { path: "/faq", priority: 0.5 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
