import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import PageHero from "@/components/blocks/PageHero";
import { guides } from "@/lib/resources";

export const metadata = {
  title: "Resources",
  description:
    "Guides from Lumivance on creative testing, AI presenters and the testimonial rules, delivery specs, plus a performance creative glossary and FAQ.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        title={["How we work,", "written down."]}
        lede="The methods behind every sprint, published so you can use them with or without us: how to test creative, what AI presenters can say, and what arrives at the end of a sprint."
        media={{ stills: ["emera-b-2", "fizzbears-b-2"] }}
      />
      <Block num="01" label="Guides" title="Guides.">
        <HubIndex keys={guides.map((g) => g.slug)} />
      </Block>
      <Block num="02" label="Reference" title="Reference.">
        <HubIndex keys={["work", "glossary", "faq"]} start={guides.length + 1} />
      </Block>
      <CtaBand />
    </>
  );
}
