import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PricingTiers from "@/components/PricingTiers";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Pricing",
  description:
    "Monthly retainers for AI commercials, imagery and showreels, from $3,500/mo. Every format included, full ownership of the work, cancel with 30 days’ notice.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="A studio on call. One monthly fee."
        intro="Flat retainers, no per-asset surprises. Every plan includes every placement format and full rights to everything we make."
      />

      <section className="container-x py-16">
        <PricingTiers />
        <Reveal as="p" className="mx-auto mt-10 max-w-2xl text-center text-sm text-sand">
          All retainers roll month to month with 30 days’ notice. We plan each month with you up
          front, so the volume is spent where it matters most.
        </Reveal>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHeading eyebrow="Questions" title="Pricing, answered plainly" align="center" className="mb-12" />
        <FAQ />
      </section>

      <CTA />
    </>
  );
}
