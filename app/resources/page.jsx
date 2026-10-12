import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import PageHero from "@/components/blocks/PageHero";
import { guides } from "@/lib/resources";

export const metadata = {
  title: "Resources",
  description:
    "Guides from Lumivance on creative testing, AI presenters and the testimonial rules, and delivery specs, plus a glossary and common questions.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        title="Guides and reference"
        lede="How we work, written down so you can use it with or without us: how to test creative, what AI presenters can say, and what you get at the end of a sprint."
        media={{ stills: ["emera-b-2", "fizzbears-b-2"] }}
      />
      <Block title="Guides">
        <HubIndex keys={guides.map((g) => g.slug)} />
      </Block>
      <Block title="Reference" layout="side">
        <HubIndex keys={["work", "glossary", "faq"]} />
      </Block>
      <CtaBand />
    </>
  );
}
