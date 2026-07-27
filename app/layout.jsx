import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";
import Cursor from "@/components/Cursor";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumivance — User acquisition for software & apps",
    template: "%s — Lumivance",
  },
  description:
    "Lumivance is a user-acquisition agency for software and apps. Full-funnel paid media, ASO/SEO, performance creative, and attribution that ties spend to revenue.",
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Lumivance Blog" }],
    },
  },
  openGraph: {
    title: "Lumivance — User acquisition for software & apps",
    description:
      "Full-funnel growth for SaaS and mobile products. Acquire qualified users at a cost that compounds down.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#07070c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts loaded at runtime (no build-time dependency); fall back to
            system fonts gracefully if the network is unavailable. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Aurora />
        <Cursor />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
