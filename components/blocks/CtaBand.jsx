import Link from "next/link";
import { closing, cta, site } from "@/lib/site";

// The closing ask: a full-width purple band, centred, with the question, the
// button and the email address.
export default function CtaBand() {
  return (
    <section className="bg-accent text-white">
      <div className="wrap py-16 text-center lg:py-20">
        <h2 className="display mx-auto max-w-[820px] text-[clamp(32px,4.4vw,56px)]">{closing.title}</h2>
        <p className="lede mx-auto mt-4 max-w-[640px] text-white/85">{closing.text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link href={cta.href} className="btn btn-light">
            {cta.label}
          </Link>
          <a href={`mailto:${site.email}`} className="text-[17px] font-medium text-white hover:underline">
            Or email {site.email} <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
