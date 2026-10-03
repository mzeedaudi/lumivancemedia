import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import { NotIncluded, Retainer, Tiers } from "@/components/blocks/Offer";
import PageHero from "@/components/blocks/PageHero";
import { faqGroups } from "@/lib/company";

export const metadata = {
  title: "Pricing",
  description:
    "Creative Testing Sprints: $10,000 for twenty ads, $16,000 for forty, $29,000 for eighty. The creative + performance retainer is quoted after an account review.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const pricingFaq = faqGroups.find((g) => g.group === "Pricing").items;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        title={["Priced per batch.", "Published, not hidden."]}
        lede="A sprint is a fixed price for a fixed number of finished ads. The retainer is quoted once we’ve seen your ad account, because channels, markets and volume change the work. Ad spend is always yours to pay, directly to the platforms."
        media={{ stills: ["vazu-can-6", "emera-b-5"] }}
      />
      <Block num="01" label="Sprints" title={["Creative Testing Sprint.", "Three sizes."]}>
        <Tiers />
      </Block>
      <Block num="02" label="Retainer" title={["After a sprint:", "the monthly retainer."]}>
        <Retainer />
      </Block>
      <Block num="03" label="Not included" title="What you pay for separately.">
        <NotIncluded />
      </Block>
      <Block num="04" label="Questions" title="About pricing.">
        <Faq items={pricingFaq} />
      </Block>
      <CtaBand />
    </>
  );
}
