/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fonts are loaded via a plain <link> in app/layout.jsx. Disable Next's
  // automatic font optimization so the build never fetches from Google Fonts —
  // keeps builds fast, offline-safe, and warning-free on any network.
  optimizeFonts: false,
  // The site is now one page. Old inner pages point at their homepage section
  // so existing links and search results still land somewhere useful.
  async redirects() {
    return [
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/services", destination: "/#process", permanent: false },
      { source: "/pricing", destination: "/#pricing", permanent: false },
      { source: "/about", destination: "/#founder", permanent: false },
    ];
  },
};

export default nextConfig;
