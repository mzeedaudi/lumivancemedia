import Link from "next/link";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Talent from "@/components/Talent";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import CaseCard from "@/components/CaseCard";
import { work } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Social proof */}
      <section className="container-x py-12">
        <Reveal as="p" className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-white/40">
          Trusted by software teams from seed to Series C
        </Reveal>
        <LogoMarquee />
      </section>

      <Stats />

      {/* Services */}
      <section className="band-violet container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="One team for every lever of growth"
          intro="Acquisition is a system, not a channel. We run the whole engine — media, creative, search, lifecycle, and analytics — so nothing leaks between the cracks."
          align="center"
          className="mb-14"
        />
        <ServicesGrid />
      </section>

      {/* Process */}
      <section className="band-teal container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="A method that makes spend efficient"
          intro="No six-month strategy decks. We diagnose, ship, and compound — with experiments live in your first two weeks."
          align="center"
          className="mb-14"
        />
        <Process />
      </section>

      {/* Talent */}
      <Talent />

      {/* Work preview */}
      <section className="band-indigo container-x py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Proof"
            title="Numbers we’re happy to be judged on"
            intro="A few of the software companies we’ve helped find their next growth curve."
          />
          <Reveal as="div" delay={120}>
            <Link href="/case-studies" className="btn-ghost">
              All case studies
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {work.map((c, i) => (
            <CaseCard key={c.id} c={c} delay={i * 90} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="band-fuchsia container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="In their words"
          title="Operators who’ve felt the difference"
          align="center"
          className="mb-14"
        />
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="band-gold container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Questions"
          title="The things teams ask us first"
          align="center"
          className="mb-12"
        />
        <FAQ />
      </section>

      <CTA />
    </>
  );
}
