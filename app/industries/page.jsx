import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import Points from "@/components/blocks/Points";
import PageHero from "@/components/blocks/PageHero";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Industries",
  description:
    "Lumivance makes video ads for skincare and beauty, supplements, fitness and wellness, and other online brands, with each category’s ad rules built into the scripts.",
  alternates: { canonical: "/industries" },
};

const constants = [
  { title: "The opener gets tested hardest", text: "In every category, the first two seconds decide whether the rest gets seen." },
  { title: "Claims come from you", text: "Scripts are written from the claims you can support, and each category’s platform rules are checked before production." },
  { title: "Purchases are the verdict", text: "Whatever you sell, ads are judged on cost per purchase." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        title="Who we work with"
        lede="Every category has its own ad rules. Skincare can’t promise results, supplements can’t claim to cure, and fitness can’t show transformations. We build those rules into the scripts, so your ads get through review and still give people a reason to buy."
        media={{ stills: ["bike-unboxing-3", "bag-unboxing-3"] }}
      />
      <Block title="Categories">
        <HubIndex keys={industries.map((i) => i.slug)} />
      </Block>
      <Block title="What stays the same" layout="side">
        <Points items={constants} />
      </Block>
      <CtaBand />
    </>
  );
}
