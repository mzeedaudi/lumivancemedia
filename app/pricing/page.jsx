import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { pricing } from "@/lib/site";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing for user acquisition, from $2,500/mo. No long-term contracts and no markup on ad spend — three tiers from first campaign to full-funnel scale.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple plans, no lock-in"
        intro="Flat monthly retainers — your ad budget is separate and always yours. Cancel any time with 30 days’ notice."
      />

      <section className="container-x py-16">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 90}
              className={`relative flex h-full flex-col rounded-[1.75rem] p-8 ${
                tier.featured
                  ? "ring-gradient bg-ink-panel shadow-glow lg:-mt-4 lg:mb-4"
                  : "border border-line bg-ink-soft/60"
              }`}
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-brand-violet to-brand-fuchsia px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-lg font-semibold text-white">
                {tier.name}
              </h2>
              <p className="mt-2 min-h-[2.5rem] text-sm leading-snug text-ink2">
                {tier.tagline}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold tracking-tightest text-white">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="pb-1 text-sm text-ink2">{tier.cadence}</span>
                )}
              </div>
              {tier.adSpend && (
                <p className="mt-2 text-xs leading-snug text-ink2">{tier.adSpend}</p>
              )}

              <Link
                href="/contact"
                className={`mt-7 ${tier.featured ? "btn-grad" : "btn-ghost"} w-full`}
              >
                {tier.cta}
              </Link>

              <ul className="mt-8 space-y-3.5 border-t border-line pt-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none text-brand-fuchsia">
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}

                {/* Not in this tier — shown so the step up is legible at a glance */}
                {tier.excluded?.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink2/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    <span className="line-through decoration-ink2/40">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink2">
          Every plan includes live dashboards and full ownership of your accounts,
          creative, and data. Ad spend is paid directly to the platforms — never
          billed through us, never marked up.
        </Reveal>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Questions"
          title="Pricing, answered plainly"
          align="center"
          className="mb-12"
        />
        <FAQ />
      </section>

      <CTA />
    </>
  );
}
