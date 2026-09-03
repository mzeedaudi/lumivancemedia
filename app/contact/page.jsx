import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Start a retainer",
  description:
    "Tell Lumivance about your brand and the placements you’re buying. We reply within one business day with a treatment and a plan for your first month.",
  alternates: { canonical: "/contact" },
};

const steps = [
  "We reply within one business day with a call slot",
  "A 30-minute brief: product, audience, placements, feeling",
  "A treatment and first-month plan, yours to keep",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a retainer"
        intro="Tell us about the brand and what you need first. No pitch deck required — a paragraph is plenty."
      />

      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-bone">What happens next</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-bone/85 sm:text-base">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-ember font-display text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120} className="mt-10 space-y-4 border-t border-line pt-8">
              <Detail label="Email" value={site.email} href={`mailto:${site.email}`} />
              {site.phone && (
                <Detail label="Phone" value={site.phone} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} />
              )}
              <Detail label="Where" value={site.location} />
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <div className="py-16" />
    </>
  );
}

function Detail({ label, value, href }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="w-16 flex-none text-[0.68rem] uppercase tracking-[0.18em] text-bone/40">{label}</span>
      {href ? (
        <a href={href} className="text-sm text-bone/90 transition-colors hover:text-amber sm:text-base">
          {value}
        </a>
      ) : (
        <span className="text-sm text-bone/90 sm:text-base">{value}</span>
      )}
    </div>
  );
}
