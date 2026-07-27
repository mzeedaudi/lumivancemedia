import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Awards from "@/components/Awards";
import FeaturedIn from "@/components/FeaturedIn";
import CTA from "@/components/CTA";
import { values, team } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Lumivance is a senior-only user-acquisition team for software and apps. Our principles, our people, and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A senior team obsessed with your number"
        intro="We started Lumivance because software growth was being handed to juniors running other people’s playbooks. We do the opposite — small, senior, and accountable to revenue."
      />

      {/* Story */}
      <section className="container-x py-16">
        <Reveal className="ring-gradient mx-auto max-w-3xl rounded-[2rem] bg-ink-soft/60 p-8 sm:p-12">
          <p className="font-serif text-2xl italic leading-snug text-white/90 sm:text-3xl">
            “Acquisition isn’t about spending more — it’s about learning faster
            than your competitors can spend.”
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink2 sm:text-base">
            For years we ran growth in-house at software companies, then watched
            agency after agency optimize for the wrong things. Lumivance is the
            partner we wished we’d had: a tight, senior team that treats your
            budget like its own, ships experiments weekly, and reports in
            revenue — not impressions.
          </p>
        </Reveal>
      </section>

      <Stats />

      {/* Values */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Principles"
          title="What we won’t compromise on"
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={(i % 2) * 90}
              className="rounded-3xl border border-line bg-ink-soft/50 p-8"
            >
              <span className="font-serif text-3xl italic text-gradient">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink2">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="The team"
          title="The people on your account"
          intro="No bait-and-switch. The seniors who pitch you are the seniors who run your growth."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 80}
              className="group rounded-3xl border border-line bg-ink-soft/50 p-6 text-center"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-fuchsia font-display text-xl font-semibold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                {m.initials}
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-ink2">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Awards */}
      <Awards />

      {/* Featured in */}
      <FeaturedIn />

      <CTA />
    </>
  );
}
