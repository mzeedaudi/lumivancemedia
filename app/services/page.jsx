import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import { Tiers } from "@/components/blocks/Offer";
import PageHero from "@/components/blocks/PageHero";
import { services, serviceGroups } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "What Lumivance makes and runs: Creative Testing Sprints, AI UGC and product-led video ads, a creative + performance retainer, and Meta, TikTok and YouTube ads.",
  alternates: { canonical: "/services" },
};

const intros = {
  Creative: {
    title: ["The ads.", "Made in batches, built to be compared."],
    intro: "Everything starts with creative: a batch of ads planned as one test, then new batches every month for brands that stay.",
  },
  "Paid social": {
    title: ["The spend.", "Run in your accounts."],
    intro: "Media buying on the platforms where UGC-style ads live, judged on cost per purchase.",
  },
};

export default function ServicesPage() {
  let n = 0;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title={["Ads, made in batches.", "Spend, judged on sales."]}
        lede="Lumivance does two things: makes UGC-style and product-led video ads in volume, and runs the Meta, TikTok and YouTube campaigns behind them. Most brands start with a sprint."
        aside="Sprints from $10,000 for twenty ads."
        media={{ pair: ["emera-a", "vazu-can"] }}
      />
      {serviceGroups.map((group, i) => {
        const keys = services.filter((s) => s.group === group).map((s) => s.slug);
        const start = n + 1;
        n += keys.length;
        return (
          <Block key={group} num={String(i + 1).padStart(2, "0")} label={group} title={intros[group].title} intro={intros[group].intro}>
            <HubIndex keys={keys} start={start} />
          </Block>
        );
      })}
      <Block num="03" label="Price" title={["Start with a sprint.", "Stay if it works."]}>
        <Tiers compact />
      </Block>
      <CtaBand />
    </>
  );
}
