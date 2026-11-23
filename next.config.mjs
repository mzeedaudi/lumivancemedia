import { legacyRedirects } from "./legacy-redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pages we no longer have, and addresses from the earlier site, send
  // visitors (and search engines) to the closest page rather than a dead end.
  // The pricing page went in November 2026; prices still show on the homepage.
  async redirects() {
    return [
      { source: "/industries/dating-apps", destination: "/industries", permanent: true },
      { source: "/pricing", destination: "/#pricing", permanent: true },
      ...legacyRedirects,
    ];
  },
  env: {
    // Placeholder case studies show locally and on Vercel previews, never on
    // the live site. Inlined at build time so server and browser agree.
    LUMIVANCE_DRAFTS: process.env.VERCEL_ENV === "production" ? "" : "1",
    // Google Analytics runs on the live site only, so previews don't skew the numbers.
    LUMIVANCE_GA_ID: process.env.VERCEL_ENV === "production" ? "G-28759VMP24" : "",
  },
};

export default nextConfig;
