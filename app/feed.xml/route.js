import { posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteUrl";

// The blog as an RSS feed, for feed readers and anything else that follows
// new posts. Built once at deploy time from the same data as the blog.
export const dynamic = "force-static";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (iso) => new Date(`${iso}T09:00:00Z`).toUTCString();

export function GET() {
  const newest = posts.find((p) => p.modified)?.modified;
  const items = posts
    .map((p) =>
      [
        "<item>",
        `<title>${esc(p.meta.title)}</title>`,
        `<link>${SITE_URL}${p.href}</link>`,
        `<guid isPermaLink="true">${SITE_URL}${p.href}</guid>`,
        p.published ? `<pubDate>${rfc822(p.published)}</pubDate>` : "",
        `<category>${esc(p.category)}</category>`,
        `<description>${esc(p.meta.description)}</description>`,
        "</item>",
      ].join("")
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>The Lumivance blog</title>
<link>${SITE_URL}/resources/blog</link>
<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
<description>Straight answers on AI video ads for brands: costs, testing, labeling rules and how to brief an agency.</description>
<language>en</language>
${newest ? `<lastBuildDate>${rfc822(newest)}</lastBuildDate>` : ""}
${items}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
