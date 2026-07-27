import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services",
  description:
    "Paid acquisition, ASO/SEO, lifecycle, performance creative, attribution, and growth strategy — the full user-acquisition engine for software and apps.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="The full user-acquisition engine"
        intro="Pick the pieces you need or hand us the whole funnel. Either way, every service plugs into one growth model with a single number to hit."
      />

      <section className="container-x py-16">
        <ServicesGrid />
      </section>

      <Stats />

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="From audit to compounding growth"
          intro="A clear operating rhythm that turns spend into a system you can trust."
          align="center"
          className="mb-14"
        />
        <Process />
      </section>

      <CTA
        title="Not sure which services you need?"
        body="That’s what the free teardown is for. We’ll look at your funnel and tell you honestly where the leverage is — even if it isn’t with us."
      />
    </>
  );
}
