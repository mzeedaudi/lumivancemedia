import { posts } from "@/lib/blog";
import { site } from "@/lib/site";
import { SITE_URL as BASE } from "@/lib/siteUrl";

export const dynamic = "force-static";

function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const items = sorted
    .map((p) => {
      const url = `${BASE}/blog/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${escapeXml(p.category)}</category>
      <dc:creator>${escapeXml(p.author)}</dc:creator>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} Blog — User Acquisition Insights</title>
    <link>${BASE}/blog</link>
    <description>Actionable guides on paid acquisition, ASO, SEO, creative, retention, and analytics for software and apps.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date(sorted[0].date).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
