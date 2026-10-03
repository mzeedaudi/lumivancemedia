import Link from "next/link";
import { cta, site } from "@/lib/site";

// The closing ask, and the page's one full-bleed band of the accent color.
// Plain lines here: a tally-red full stop would vanish on a tally background.
export default function CtaBand({ title = ["Your first ads could be", "live by next week."] }) {
  return (
    <section className="bg-tally text-white">
      <div className="wrap py-20 lg:py-28">
        <span className="label">Next step</span>
        <h2 className="display mt-5 text-[clamp(42px,7vw,100px)]">
          {title.map((line) => (
            <span key={line} className="block [text-wrap:balance]">
              {line}
            </span>
          ))}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href={cta.href} className="btn btn-ink">
            {cta.label}
            <span aria-hidden="true" className="font-mono font-medium">
              →
            </span>
          </Link>
          <a href={`mailto:${site.email}`} className="label break-all underline-offset-4 hover:underline">
            Or email {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
