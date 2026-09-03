import PageHeader from "@/components/PageHeader";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Facts from "@/components/Facts";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services",
  description:
    "AI commercials, campaign and product imagery, showreels and launch films, and always-on monthly content — directed and finished to broadcast standard.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything a brand needs on screen"
        intro="Four disciplines, one studio, one monthly fee. Each is directed by people who made commercials before generation existed — and finished to the same standard."
      />

      <section className="container-x pt-10">
        <Capabilities detailed />
      </section>

      <section className="band-amber container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="From brief to master in a week"
          intro="A directed process with a fixed rhythm — so the work is fast because it’s engineered, not because it’s rushed."
          align="center"
          className="mb-14"
        />
        <Process />
      </section>

      <Facts />

      <CTA
        title="Not sure which service you need first?"
        body="That’s what the first call is for. Tell us the brand and the placements, and we’ll suggest the right starting point — even if it’s smaller than you expected."
      />
    </>
  );
}
