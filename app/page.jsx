import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Capabilities from "@/components/Capabilities";
import Showreel from "@/components/Showreel";
import Formats from "@/components/Formats";
import Process from "@/components/Process";
import Facts from "@/components/Facts";
import PricingTiers from "@/components/PricingTiers";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* What we make */}
      <section className="band-amber container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we make"
          title="Four things, made properly"
          intro="Commercials, imagery, films and a monthly drop of all three. Everything directed, graded and finished — nothing straight out of a model."
          className="mb-12"
        />
        <Capabilities />
      </section>

      {/* Showreel */}
      <section className="container-x py-16 sm:py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Showreel"
            title="Watch the reel"
            intro="Directed, generated, graded and scored. Every frame you’ll see was made without a camera."
          />
          <Reveal as="p" delay={120} className="font-mono text-xs uppercase tracking-[0.2em] text-sand">
            2026 · Sound on
          </Reveal>
        </div>
        <Showreel />
      </section>

      {/* Formats */}
      <section className="band-dusk container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Every placement"
          title="One film. Every format it needs to be."
          intro="Each spot ships as a 16:9 master plus every cutdown — vertical, square and portrait — reframed shot by shot, not just cropped."
          align="center"
          className="mb-14"
        />
        <Formats />
      </section>

      {/* Process */}
      <section className="band-amber container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="Directed, not prompted"
          intro="The same discipline as a film shoot — brief, direct, craft, deliver — running on a weekly rhythm instead of a production calendar."
          align="center"
          className="mb-14"
        />
        <Process />
      </section>

      <Facts />

      {/* Retainers */}
      <section className="band-ember container-x py-20 sm:py-28">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Retainers"
            title="A studio on call, for a flat monthly fee"
            intro="Pick the volume you need. Every plan includes every format and full ownership of the work."
          />
          <Reveal as="div" delay={120}>
            <Link href="/pricing" className="btn-ghost">
              Compare plans
            </Link>
          </Reveal>
        </div>
        <PricingTiers />
      </section>

      {/* FAQ */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading eyebrow="Questions" title="What brands ask us first" align="center" className="mb-12" />
        <FAQ />
      </section>

      <CTA />
    </>
  );
}
