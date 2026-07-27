import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { channels, getChannel, getChannelSlugs } from "@/lib/channels";

export function generateStaticParams() {
  return getChannelSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const ch = getChannel(params.slug);
  if (!ch) return {};
  return {
    title: `${ch.name} Agency for Software & Apps`,
    description: ch.intro,
    alternates: { canonical: `/services/${ch.slug}` },
    openGraph: { title: `${ch.name} — Lumivance`, description: ch.intro },
  };
}

export default function ChannelPage({ params }) {
  const ch = getChannel(params.slug);
  if (!ch) notFound();

  const others = channels.filter((c) => c.slug !== ch.slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow={ch.eyebrow} title={ch.title} intro={ch.intro} />

      {/* Channel stats */}
      <section className="container-x py-10">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {ch.stats.map(([value, label], i) => (
            <Reveal key={label} delay={i * 90} className="bg-ink-soft p-8 text-center">
              <p className="font-display text-4xl font-semibold tracking-tightest text-gradient sm:text-5xl">
                {value}
              </p>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm text-ink2">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we run */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What we run"
            title={`Everything ${ch.name} needs to perform`}
            intro="One team owns the whole system — setup, creative, optimization and measurement — so nothing leaks between the cracks."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {ch.deliverables.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={(i % 2) * 80}
                className="flex items-start gap-3 rounded-2xl border border-line bg-ink-soft/50 p-5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none text-brand-fuchsia">
                  <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed text-white/85">{d}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading
          eyebrow="How we make it pay"
          title="Three moves, repeated weekly"
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ch.steps.map((s, i) => (
            <Reveal
              key={s.t}
              delay={i * 100}
              className="rounded-3xl border border-line bg-ink-soft/50 p-8"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-violet to-brand-fuchsia font-display text-sm font-semibold text-white">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink2">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other channels */}
      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="More channels" title="Acquisition rarely lives on one channel" />
          <Reveal as="div" delay={100}>
            <Link href="/services" className="btn-ghost">
              All services
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <Link
                href={`/services/${c.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-ink-soft/50 p-6 transition-colors hover:bg-ink-panel"
              >
                <h3 className="font-display text-base font-semibold text-white">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm text-ink2">{c.menuDesc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors group-hover:text-spark">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title={ch.cta.title} body={ch.cta.body} />
    </>
  );
}
