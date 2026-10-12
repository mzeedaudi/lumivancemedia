import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import Points from "@/components/blocks/Points";
import PageHero from "@/components/blocks/PageHero";
import { categories, industries, sectorList } from "@/lib/industries";

export const metadata = {
  title: "Industries",
  description: `Lumivance makes video ads for ${sectorList}, with each sector’s ad rules built into the scripts.`,
  alternates: { canonical: "/industries" },
};

const constants = [
  { title: "The opener gets tested hardest", text: "In every sector, the first two seconds decide whether the rest gets seen." },
  { title: "What you sell is shown as it is", text: "Real packaging, real app screens, real gameplay. We generate the presenter, not the product." },
  { title: "Claims come from you", text: "Scripts are written from the claims you can support, and each sector’s platform rules are checked before production." },
  { title: "Customers are the verdict", text: "Whatever you sell, ads are judged on what a new customer costs you." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        title="Who we make ads for"
        lede="Every sector has its own ad rules. Finance can’t promise returns. Games can’t show gameplay that isn’t in the game. Dating has to stay adult and honest. We build those rules into the scripts, so your ads get through review and still give people a reason to act."
        media={{ stills: ["emera-c-1", "bike-unboxing-3"] }}
      />
      <Block title="Sectors">
        <HubIndex keys={industries.map((i) => i.slug)} />
      </Block>
      <Block title="DTC categories with rules of their own" layout="side">
        <HubIndex keys={categories.map((c) => c.slug)} />
      </Block>
      <Block title="What stays the same">
        <Points items={constants} columns />
      </Block>
      <CtaBand />
    </>
  );
}
