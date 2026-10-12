import Link from "next/link";
import { closing, cta, site } from "@/lib/site";

// The closing ask: a full-width green band with the question, the button and
// the email address.
export default function CtaBand() {
  return (
    <section className="bg-accent text-white">
      <div className="wrap grid-12 items-end gap-y-8 py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="display text-[clamp(30px,4.4vw,54px)]">{closing.title}</h2>
          <p className="lede mt-4 max-w-[580px]">{closing.text}</p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <Link href={cta.href} className="btn btn-light">
            {cta.label}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-4 text-[15px]">
            Or email{" "}
            <a href={`mailto:${site.email}`} className="break-all underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
