import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import CaseCard from "@/components/CaseCard";
import BrandLogo from "@/components/BrandLogo";
import { CaseArt, catOf } from "@/components/CaseVisuals";
import { work, caseStudies } from "@/lib/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Case studies from SaaS, consumer app, fintech, dev tools, and more — the user-acquisition results behind the numbers.",
};

const total = work.length + caseStudies.length;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Growth, measured in revenue"
        intro={`We don’t report on impressions. Here are ${total} stories of what changed for software teams once acquisition became a system.`}
      />

      {/* Featured, detailed */}
      <section className="container-x py-16">
        <div className="space-y-6">
          {work.map((c, i) => {
            const { from, to } = c.brand || catOf(c.category);
            return (
            <Reveal key={c.id} id={c.id} delay={(i % 2) * 80} className="scroll-mt-28">
              <article className="ring-gradient relative overflow-hidden rounded-[2rem] bg-ink-soft/70">
                {/* brand color wash along the top edge */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-25"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${from}66, transparent)`,
                  }}
                />
                <CaseArt
                  category={c.category}
                  uid={`feat-${c.id}`}
                  className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 opacity-[0.1]"
                />
                <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex items-center rounded-xl px-3.5 py-2"
                        style={{ backgroundImage: `linear-gradient(120deg, ${from}, ${to})` }}
                      >
                        <BrandLogo c={c} className="text-white" />
                      </span>
                      <span className="rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink2">
                        {c.category}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                      {c.headline}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-ink2 sm:text-base">
                      {c.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                    {c.results.map(([value, label]) => (
                      <div key={label} className="flex flex-col justify-center bg-ink-panel p-5 text-center">
                        <span className="font-display text-2xl font-semibold tracking-tightest text-gradient sm:text-3xl">
                          {value}
                        </span>
                        <span className="mt-2 text-[0.7rem] leading-tight text-ink2">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* Full library */}
      <section className="container-x py-12 sm:py-16">
        <SectionHeading
          eyebrow="The full library"
          title="More results across the software landscape"
          intro="From dev tools to fintech to consumer apps — a sample of the teams we’ve helped grow."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.id} c={c} delay={(i % 3) * 80} />
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="In their words"
          title="What it’s like to work with us"
          align="center"
          className="mb-14"
        />
        <Testimonials />
      </section>

      <CTA
        title="Want results like these?"
        body="Every engagement starts with a free teardown. We’ll map where your next users come from before you commit to anything."
      />
    </>
  );
}
