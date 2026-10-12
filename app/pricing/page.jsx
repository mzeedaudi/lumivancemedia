import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import { NotIncluded, Retainer, Tiers } from "@/components/blocks/Offer";
import PageHero from "@/components/blocks/PageHero";
import { faqGroups } from "@/lib/company";
import { priceCopy } from "@/lib/offer";

export const metadata = {
  title: "Pricing",
  description: `Creative Testing Sprints cost ${priceCopy.all}. The creative and performance retainer is quoted after an account review.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const pricingFaq = faqGroups.find((g) => g.group === "Pricing").items;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        title="Pricing"
        lede="A sprint is a fixed price for a fixed number of finished ads. The retainer is quoted once we’ve seen your ad account, because channels, markets and volume change the work. Ad spend is always yours to pay, directly to the platforms."
        media={{ stills: ["vazu-can-6", "emera-b-5"] }}
      />
      <Block title="Creative Testing Sprint">
        <Tiers details />
      </Block>
      <Block title="The monthly retainer" intro="For brands that want new ads every month and someone to run them.">
        <Retainer />
      </Block>
      <Block title="What isn’t included" intro="These apply to sprints and the retainer alike." layout="side">
        <NotIncluded />
      </Block>
      <Block title="Questions about pricing" narrow>
        <Faq items={pricingFaq} />
      </Block>
      <CtaBand />
    </>
  );
}
