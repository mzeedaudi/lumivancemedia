import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Wordmark } from "@/components/Logo";

const SOCIAL_LABELS = { instagram: "Instagram", linkedin: "LinkedIn", x: "X / Twitter", vimeo: "Vimeo" };

export default function Footer() {
  // Social entries are dropped when their URL is blank in lib/site.js, so the
  // footer never ships a link that goes nowhere.
  const socials = Object.entries(site.social || {})
    .filter(([, url]) => url)
    .map(([key, url]) => ({ label: SOCIAL_LABELS[key] || key, href: url, external: true }));

  const groups = [
    { title: "Studio", links: nav },
    {
      title: "Connect",
      links: [
        { label: "Start a retainer", href: "/contact" },
        { label: site.email, href: `mailto:${site.email}` },
        ...socials,
      ],
    },
  ];

  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" aria-label="Lumivance home" className="inline-block">
              <Wordmark markClassName="h-9 w-auto" textClassName="text-xl" tagline uid="foot" />
            </Link>
            <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-bone/80">
              Cinematic AI commercials for brands — made in days, delivered every month.
            </p>
            <p className="mt-6 text-sm text-sand">{site.location}</p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-bone/70 transition-colors hover:text-bone"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-bone/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legal.entity}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-bone">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-bone">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
