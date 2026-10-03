/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fonts are loaded via a plain <link> in app/layout.jsx. Disable Next's
  // automatic font optimization so the build never fetches from Google Fonts —
  // keeps builds fast, offline-safe, and warning-free on any network.
  optimizeFonts: false,
};

export default nextConfig;
