import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Showreel from "@/components/Showreel";
import Formats from "@/components/Formats";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { month, projects } from "@/lib/site";

export const metadata = {
  title: "Work",
  description:
    "The Lumivance showreel, every placement format we deliver, and what a month on retainer looks like week by week.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="The reel, and what a month with us looks like"
        intro="Every frame below was directed, generated, graded and scored in-house. No cameras were involved."
      />

      <section className="container-x pt-8">
        <Showreel id="reel" />
      </section>

      {/* Project grid appears automatically once lib/site.js `projects` has entries. */}
      {projects.length > 0 && (
        <section className="container-x py-20 sm:py-28">
          <SectionHeading eyebrow="Selected work" title="Recent films" className="mb-12" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="ring-gradient overflow-hidden rounded-3xl bg-black">
                <video
                  src={p.src}
                  poster={p.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-display text-lg font-semibold text-bone">{p.title}</p>
                  <p className="mt-1 text-sm text-sand">
                    {p.client} · {p.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="band-dusk container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Every placement"
          title="Delivered in every format you buy media in"
          intro="Reframed shot by shot for each ratio, so the subject is always where it should be."
          align="center"
          className="mb-14"
        />
        <Formats />
      </section>

      <section className="band-amber container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="On retainer"
          title="What a month looks like"
          intro="A fixed rhythm you can plan campaigns around. Briefs go in at the top of the month; masters and cutdowns come out at the end."
          className="mb-12"
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {month.map((m, i) => (
            <Reveal
              as="li"
              key={m.week}
              delay={i * 90}
              className="rounded-3xl border border-line bg-ink-soft/60 p-7"
            >
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">
                {m.week}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-bone">
                {m.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-sand">{m.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <CTA
        title="Want your brand in the next reel?"
        body="Send us the brief. We’ll reply within a day with a treatment and a plan for your first month."
      />
    </>
  );
}
