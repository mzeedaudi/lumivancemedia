import { Fraunces, IBM_Plex_Mono, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/siteUrl";

// Fonts come from Google Fonts but are downloaded at build time and served
// from this site, so visitors make no request to Google. All use
// font-display: swap, so text shows at once in a fallback face.
const display = Fraunces({ subsets: ["latin"], axes: ["opsz", "SOFT"], display: "swap", variable: "--font-display" });
const sans = Libre_Franklin({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
// Only used for the small tags on videos and in the sprint grid, so not preloaded.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-mono",
});

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
  themeColor: "#F4F1EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
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
