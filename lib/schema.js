import { sectorList } from "@/lib/industries";
import { sprint } from "@/lib/offer";
import { site } from "@/lib/site";
import { SITE_URL } from "@/lib/siteUrl";

// Structured data (schema.org JSON-LD), built from the same data the pages
// show, so search engines and AI assistants read the facts the visitor reads.
// Nothing is stated here that isn't on the site: no address, ratings or reviews.

const ORG_ID = `${SITE_URL}/#organization`;
const url = (path) => `${SITE_URL}${path}`;

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.legal.entity,
  alternateName: site.name,
  url: SITE_URL,
  logo: url("/icon.svg"),
  email: site.email,
  description: `Lumivance makes UGC-style and product-led video ads with AI, and runs the paid social behind them, for ${sectorList}.`,
  areaServed: "Worldwide",
  knowsAbout: ["Video advertising", "UGC video ads", "AI video ads", "Creative testing", "Performance creative", "Meta ads", "TikTok ads", "YouTube ads"],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

// The trail shown at the top of an inner page. The last crumb is the page.
export function breadcrumbs(crumbs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: url(c.href ?? path),
    })),
  };
}

// A service or sector page. `priced` adds the three sprint sizes as offers.
export function service({ name, description, path, audience, priced = false }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url(path),
    serviceType: "Video advertising",
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    ...(audience && { audience: { "@type": "BusinessAudience", name: audience } }),
    ...(priced && {
      offers: sprint.tiers.map((t) => ({
        "@type": "Offer",
        name: t.name,
        description: `${t.ads} finished video ads, up to ${t.maxLength} each.`,
        price: t.price,
        priceCurrency: "USD",
        url: url(sprint.href),
      })),
    }),
  };
}

// The questions answered on a page, from its faq blocks. Null if there are none.
export function faq(blocks) {
  const items = blocks.filter((b) => b.type === "faq").flatMap((b) => b.items);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
  };
}
