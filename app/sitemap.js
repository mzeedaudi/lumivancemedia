import { SITE_URL as BASE } from "@/lib/siteUrl";

export default function sitemap() {
  return [
    { path: "", priority: 1.0 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
