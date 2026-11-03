import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organization, website } from "@/lib/schema";
import { SITE_URL } from "@/lib/siteUrl";

// Apple devices draw the text in their own San Francisco (see the font stack
// in globals.css). Everywhere else gets Inter, downloaded at build time and
// served from this site, so visitors make no request to Google. It isn't
// preloaded: Apple devices never need it, and text shows at once in a
// metric-matched fallback until it arrives.
const inter = Inter({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumivance | Video ads for apps and online brands",
    template: "%s | Lumivance",
  },
  description:
    "UGC-style video ads for apps and online brands, twenty at a time, the first ones 72 hours after your brief. Test every angle, then scale the ad that brings your cost per customer down.",
  openGraph: {
    title: "Lumivance | Test twenty ads, scale the one that sells",
    description:
      "UGC-style video ads for apps and online brands, twenty at a time, the first ones 72 hours after your brief.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={[organization, website]} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
