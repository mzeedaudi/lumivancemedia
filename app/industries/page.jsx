import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import Points from "@/components/blocks/Points";
import PageHero from "@/components/blocks/PageHero";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Industries",
  description:
    "Lumivance makes performance creative for skincare and beauty, supplements, fitness and wellness, and other DTC brands, with each category’s ad rules built into the scripts.",
  alternates: { canonical: "/industries" },
};

const constants = [
  { title: "The opener is tested hardest", text: "In every category, the first two seconds decide whether the rest gets seen." },
  { title: "Claims come from you", text: "Scripts are written from the claims you can support, and each category’s platform rules are checked before production." },
  { title: "Purchases are the verdict", text: "Whatever you sell, ads are judged on cost per purchase." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        title={["Every category has", "its own rules."]}
        lede="Skincare can’t promise results. Supplements can’t claim to cure. Fitness can’t show transformations. We build each category’s ad rules into the scripts, so your ads get through review and still give people a reason to buy."
        media={{ stills: ["bike-unboxing-3", "bag-unboxing-3"] }}
      />
      <Block num="01" label="Categories" title={["Where we focus,", "and where else we work."]}>
        <HubIndex keys={industries.map((i) => i.slug)} />
      </Block>
      <Block num="02" label="In every category" title="What doesn’t change.">
        <Points items={constants} />
      </Block>
      <CtaBand />
    </>
  );
}
