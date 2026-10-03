import Link from "next/link";
import { cta, site } from "@/lib/site";
import { footerColumns } from "@/lib/pages";

const SOCIAL_LABELS = { instagram: "Instagram", linkedin: "LinkedIn", x: "X", tiktok: "TikTok" };

// A full site map in five columns, like a large agency's footer, but listing
// only pages that exist and services Lumivance actually offers.
export default function Footer() {
  // Social entries are dropped when their URL is blank in lib/site.js, so the
  // footer never ships a link that goes nowhere.
  const socials = Object.entries(site.social || {})
    .filter(([, url]) => url)
    .map(([key, url]) => ({ label: SOCIAL_LABELS[key] || key, href: url }));

  return (
    <footer className="border-t border-ink">
      <div className="wrap pb-8 pt-12">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-b border-rule pb-10">
          <div>
            <Link href="/" className="wordmark text-[34px]" aria-label="Lumivance home">
              Lumivance
            </Link>
            <p className="mt-3 max-w-[360px] text-[17px] text-graphite">{site.tagline}.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href={`mailto:${site.email}`} className="label break-all transition-colors hover:text-tally">
              {site.email}
            </a>
            <Link href={cta.href} className="btn">
              {cta.short}
              <span aria-hidden="true" className="font-mono font-medium">
                →
              </span>
            </Link>
          </div>
        </div>

        <nav aria-label="Site map" className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="label flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-tally" />
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5 font-display text-[15px] font-medium">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-tally">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="label flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-rule pt-5 text-[11px] text-graphite">
          <p>
            © {new Date().getFullYear()} {site.legal.entity}
          </p>
          <div className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                {s.label}
              </a>
            ))}
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
