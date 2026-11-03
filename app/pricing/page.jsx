import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import { Tiers } from "@/components/blocks/Offer";
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
        lede="Pick a batch of ads at a fixed price, or have us make and run your ads every month."
      />
      <Block title="Packages">
        <Tiers details withRetainer />
      </Block>
      <Block title="Questions about pricing" narrow>
        <Faq items={pricingFaq} />
      </Block>
      <CtaBand />
    </>
  );
}
