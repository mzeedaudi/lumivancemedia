import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Wordmark } from "@/components/Logo";

const groups = [
  {
    title: "Company",
    links: nav,
  },
  {
    title: "Services",
    links: [
      { label: "Paid Media", href: "/services/paid-media" },
      { label: "Paid Search", href: "/services/paid-search" },
      { label: "YouTube Ads", href: "/services/youtube-ads" },
      { label: "ChatGPT Ads", href: "/services/chatgpt-ads" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Connect",
    // Social entries are dropped when their URL is blank in lib/site.js, so the
    // footer never ships a link that goes nowhere.
    links: [
      { label: "Book a call", href: "/contact" },
      { label: site.email, href: `mailto:${site.email}` },
      site.social?.linkedin && { label: "LinkedIn", href: site.social.linkedin, external: true },
      site.social?.x && { label: "X / Twitter", href: site.social.x, external: true },
      { label: "RSS Feed", href: "/feed.xml" },
    ].filter(Boolean),
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Wordmark markClassName="h-10 w-auto" textClassName="text-xl" tagline />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink2">
              User acquisition for software & apps. We turn marketing budget into
              qualified users at a cost that compounds down.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/35">
              {site.location}
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-ink2 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
