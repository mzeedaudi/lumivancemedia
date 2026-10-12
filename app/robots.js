import { SITE_URL as BASE } from "@/lib/siteUrl";

// Everything is open to search engines and to AI assistants. The assistants'
// crawlers are named so it's clear that letting them in is deliberate.
const AI = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
