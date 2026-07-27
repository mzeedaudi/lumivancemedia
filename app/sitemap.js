import { posts } from "@/lib/blog";
import { channels } from "@/lib/channels";

const BASE = "https://lumivance.com";

export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.8 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));

  const channelRoutes = channels.map((c) => ({
    url: `${BASE}/services/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...channelRoutes, ...postRoutes];
}
