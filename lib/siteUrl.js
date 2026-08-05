// Absolute origin for canonical URLs, sitemap, robots, RSS, and OG images.
// Resolved per environment so a Vercel preview never advertises the production
// domain (which would point crawlers and feed readers at the wrong site):
//
//   1. NEXT_PUBLIC_SITE_URL            — set this once you point a custom domain
//                                        at the project, e.g. https://www.lumivancemedia.com
//   2. VERCEL_PROJECT_PRODUCTION_URL   — the project's stable production domain
//   3. VERCEL_URL                      — the per-deployment preview domain
//   4. http://localhost:3000           — local development
//
// Vercel's variables carry no protocol, so https:// is prepended.

function resolve() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

// Normalised: no trailing slash, so `${SITE_URL}/blog` is always well-formed.
export const SITE_URL = resolve().replace(/\/+$/, "");
