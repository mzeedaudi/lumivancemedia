import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import PageHero from "@/components/blocks/PageHero";
import { guides } from "@/lib/resources";

export const metadata = {
  title: "Resources",
  description:
    "Straight answers on what UGC video ads cost, AI UGC vs creators, how many ads to test, ad fatigue and video length, plus guides, delivery specs and a glossary.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        title="Guides and reference"
        lede="Straight answers to the questions brands ask before they spend on video ads, and how we work, written down so you can use it with or without us."
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
