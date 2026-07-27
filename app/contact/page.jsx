import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute growth teardown with Lumivance. We’ll audit your funnel and show you where your next users come from.",
};

const points = [
  "A teardown of your funnel and attribution",
  "Where your next profitable users will come from",
  "A 30/60/90-day plan — yours to keep, no strings",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book your free teardown"
        intro="Tell us about your product and goals. In 30 minutes we’ll show you exactly where your acquisition has room to grow."
      />

      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left rail */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                What you’ll walk away with
              </h2>
              <ul className="mt-6 space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none text-brand-fuchsia">
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="mt-10 space-y-4 border-t border-line pt-8">
              <ContactDetail label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactDetail label="Phone" value={site.phone} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} />
              <ContactDetail label="Where" value={site.location} />
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <div className="py-16" />
    </>
  );
}

function ContactDetail({ label, value, href }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="w-16 flex-none text-xs uppercase tracking-[0.16em] text-white/40">
        {label}
      </span>
      {href ? (
        <a href={href} className="text-sm text-white transition-colors hover:text-spark">
          {value}
        </a>
      ) : (
        <span className="text-sm text-white">{value}</span>
      )}
    </div>
  );
}
