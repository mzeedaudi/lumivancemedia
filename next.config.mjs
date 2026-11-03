/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sectors we no longer serve send visitors (and search engines) to the
  // Industries page rather than a dead end.
  async redirects() {
    return [{ source: "/industries/dating-apps", destination: "/industries", permanent: true }];
  },
  env: {
    // Placeholder case studies show locally and on Vercel previews, never on
    // the live site. Inlined at build time so server and browser agree.
    LUMIVANCE_DRAFTS: process.env.VERCEL_ENV === "production" ? "" : "1",
  },
};

export default nextConfig;
