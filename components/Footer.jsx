import Link from "next/link";
import { site } from "@/lib/site";
import { footerColumns } from "@/lib/pages";

const SOCIAL_LABELS = { instagram: "Instagram", linkedin: "LinkedIn", x: "X", tiktok: "TikTok" };

// The name, how to reach us, and a site map that lists only pages that exist.
export default function Footer() {
  // Social entries are dropped when their URL is blank in lib/site.js, so the
  // footer never ships a link that goes nowhere.
  const socials = Object.entries(site.social || {})
    .filter(([, url]) => url)
    .map(([key, url]) => ({ label: SOCIAL_LABELS[key] || key, href: url }));

  return (
    <footer>
      <div className="wrap pb-8 pt-14">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <Link href="/" className="wordmark text-[30px]" aria-label="Lumivance home">
              Lumivance
            </Link>
            <p className="mt-3 max-w-[300px] text-graphite">{site.tagline}.</p>
            <p className="mt-7">
              <a href={`mailto:${site.email}`} className="link break-all">
                {site.email}
              </a>
            </p>
            <p className="meta mt-2">{site.reply}</p>
          </div>

          <nav aria-label="Site map" className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="text-[14px] font-semibold">{col.title}</h2>
                <ul className="mt-3 space-y-2 text-[15px] text-graphite">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="transition-colors hover:text-accent">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="meta mt-14 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-rule pt-5">
          <p>
            © {new Date().getFullYear()} {site.name}
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
