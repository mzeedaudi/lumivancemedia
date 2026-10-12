import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import { Tiers } from "@/components/blocks/Offer";
import PageHero from "@/components/blocks/PageHero";
import { priceCopy } from "@/lib/offer";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "What Lumivance makes and runs: Creative Testing Sprints, AI UGC and product-led video ads, a creative and performance retainer, and Meta, TikTok and YouTube ads.",
  alternates: { canonical: "/services" },
};

const keys = (group) => services.filter((s) => s.group === group).map((s) => s.slug);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title="What we do"
        lede="Two things. We make UGC-style and product-led video ads in batches, and we run the Meta, TikTok and YouTube campaigns behind them. A sprint is the place to start."
        aside={`Sprints from ${priceCopy.from}.`}
        media={{ pair: ["emera-a", "vazu-can"] }}
      />
      <Block
        title="Making the ads"
        intro="Everything starts with a batch of ads planned as one test. After that, there are new batches every month."
        layout="side"
      >
        <HubIndex keys={keys("Creative")} />
      </Block>
      <Block title="Running the ads" intro="Media buying on the platforms where UGC-style ads live, judged on cost per purchase.">
        <HubIndex keys={keys("Paid social")} />
      </Block>
      <Block title="What it costs">
        <Tiers />
      </Block>
      <CtaBand />
    </>
  );
}
