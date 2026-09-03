import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import { values, manifesto } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Lumivance is an AI-native commercial studio: the films and imagery brands used to need a crew and six weeks for, made in days on a monthly retainer.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A film studio built after the camera stopped being necessary"
        intro="We make commercials the way directors always have — with taste, intent and finish. We just don’t need a location, a crew or a six-week calendar to do it."
      />

      <section className="container-x py-16">
        <Reveal className="ring-gradient mx-auto max-w-3xl rounded-[2rem] bg-ink-soft/60 p-8 sm:p-12">
          <p className="font-serif text-3xl italic leading-tight text-bone sm:text-4xl">“{manifesto.quote}”</p>
          <div className="mt-8 space-y-5">
            {manifesto.body.map((p) => (
              <p key={p} className="text-[1.02rem] leading-relaxed text-sand">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="band-amber container-x py-20 sm:py-28">
        <SectionHeading eyebrow="Principles" title="What we won’t compromise on" align="center" className="mb-14" />
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 90} className="rounded-3xl border border-line bg-ink-soft/50 p-8">
              <span className="font-serif text-3xl italic text-gradient">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-bone">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="Directed, not prompted"
          intro="Generation is the camera. Everything that makes a commercial a commercial still happens on purpose."
          align="center"
          className="mb-14"
        />
        <Process />
      </section>

      <CTA />
    </>
  );
}
