import Link from "next/link";
import { cta, nav, site } from "@/lib/site";

const SOCIAL_LABELS = { instagram: "Instagram", linkedin: "LinkedIn", x: "X", tiktok: "TikTok" };

export default function Footer() {
  // Social entries are dropped when their URL is blank in lib/site.js, so the
  // footer never ships a link that goes nowhere.
  const socials = Object.entries(site.social || {})
    .filter(([, url]) => url)
    .map(([key, url]) => ({ label: SOCIAL_LABELS[key] || key, href: url }));

  return (
    <footer className="border-t border-ink">
      <div className="wrap grid-12 gap-y-10 pb-8 pt-12">
        <div className="col-span-12 lg:col-span-5">
          <Link href="/" className="wordmark text-[30px]" aria-label="Lumivance home">
            Lumivance
          </Link>
          <p className="mt-4 max-w-[340px] text-[17px] text-graphite">{site.tagline}.</p>
        </div>

        <div className="col-span-6 lg:col-span-3 lg:col-start-7">
          <h2 className="label text-graphite">Site</h2>
          <ul className="mt-4 space-y-2 font-display text-[15px] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-tally">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-3">
          <h2 className="label text-graphite">Contact</h2>
          <ul className="mt-4 space-y-2 font-display text-[15px] font-medium">
            <li>
              <Link href={cta.href} className="transition-colors hover:text-tally">
                {cta.short}
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-tally">
                {site.email}
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-tally">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="label col-span-12 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-rule pt-5 text-[11px] text-graphite">
          <p>
            © {new Date().getFullYear()} {site.legal.entity}
          </p>
          <div className="flex gap-6">
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
