import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import Cursor from "@/components/Cursor";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumivance — AI commercials for brands",
    template: "%s — Lumivance",
  },
  description:
    "Lumivance is an AI-native commercial studio. Cinematic AI commercials, campaign imagery, showreels and always-on content for brands — delivered monthly on retainer.",
  openGraph: {
    title: "Lumivance — AI commercials for brands",
    description:
      "Broadcast-grade AI commercials, imagery and showreels, made in days and delivered every month on retainer.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0907",
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
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Backdrop />
        <Cursor />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
