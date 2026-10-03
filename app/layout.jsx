import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumivance — performance creative for skincare & wellness brands",
    template: "%s — Lumivance",
  },
  description:
    "UGC-style video ads for skincare and wellness brands, twenty at a time, the first ones 72 hours after your brief. Test every angle, then scale the ad that brings your cost per customer down.",
  openGraph: {
    title: "Lumivance — test twenty ads, scale the one that sells",
    description:
      "UGC-style video ads for skincare and wellness brands, twenty at a time, the first ones 72 hours after your brief.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#F2EDE4",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
