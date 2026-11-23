// Addresses from the earlier Lumivance site (a blog, case studies and
// channel pages) that Google still remembers. Each one now points to the
// closest page on this site, so old links and search results land somewhere
// useful instead of a 404. Search Console listed them under "Not found (404)"
// and "Crawled - currently not indexed" in November 2026.
//
// The old case studies were for example clients, not real ones, so they all
// go to the Work page rather than to anything that looks like a result.

// Old blog posts with a close match here. Every other post goes to Resources.
const posts = {
  "tiktok-ads-for-app-installs": "/services/tiktok-ads",
  "meta-ads-for-saas-full-funnel-playbook": "/services/meta-ads",
  "performance-creative-ship-winning-ads-weekly": "/services/performance-creative",
  "ugc-ads-that-convert": "/services/ai-ugc-ads",
  "creative-testing-framework": "/framework",
  "calculate-ltv-for-subscription-app": "/industries/subscription-apps",
  "lower-cost-per-install-without-killing-volume": "/industries/mobile-games",
  "scaling-paid-spend-without-tanking-efficiency": "/services/paid-social",
  "how-to-diversify-beyond-meta-and-google": "/services/paid-social",
};

// Old channel pages. /services/tiktok-ads and /services/youtube-ads still exist.
const channels = {
  "paid-media": "/services/paid-social",
  "shopping-ads": "/industries/ecommerce",
  "paid-search": "/services",
  "telegram-ads": "/services",
  "reddit-ads": "/services",
  "snapchat-ads": "/services",
  "chatgpt-ads": "/services",
};

// Old example case studies. Listed by name so real case studies published
// under /case-studies later are never caught by this.
const oldCases = [
  "sitewright", "brightvault", "trailform", "hexlab", "skillcove", "parcelio",
  "hyperloop", "paperplane", "quanta", "lumen", "stacked", "orbital", "nimbus",
  "vertex", "fathom", "cadence", "meridian", "sprout", "tessera", "halcyon",
  "ledgerly", "northpeak", "pulse", "forge", "aurora-pay", "beacon", "verdant",
  "atlas", "synth", "harbor", "kindred",
];

const to = (source, destination) => ({ source, destination, permanent: true });

export const legacyRedirects = [
  ...Object.entries(posts).map(([slug, dest]) => to(`/blog/${slug}`, dest)),
  to("/blog/:slug*", "/resources"),
  to("/blog", "/resources"),
  to("/feed.xml", "/resources"),
  ...Object.entries(channels).map(([slug, dest]) => to(`/services/${slug}`, dest)),
  to(`/case-studies/:slug(${oldCases.join("|")})`, "/work"),
];
