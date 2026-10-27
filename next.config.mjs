/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Placeholder case studies show locally and on Vercel previews, never on
    // the live site. Inlined at build time so server and browser agree.
    LUMIVANCE_DRAFTS: process.env.VERCEL_ENV === "production" ? "" : "1",
  },
};

export default nextConfig;
