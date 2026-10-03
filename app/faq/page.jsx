import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import PageHero from "@/components/blocks/PageHero";
import { faqGroups } from "@/lib/company";

export const metadata = {
  title: "FAQ",
  description:
    "Straight answers about Lumivance: whether AI ads look fake, who the presenters are, who runs the ads, what a sprint costs and what happens if the ads don’t work.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data, built from the same answers shown on the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "FAQ" }]}
        title={["The questions brands", "ask us first."]}
        lede="Straight answers, including the ones that might talk you out of working with us."
        media={{ stills: ["emera-c-1", "gold-cuff-6"] }}
      />
      {faqGroups.map((g, i) => (
        <Block key={g.group} num={String(i + 1).padStart(2, "0")} label={g.group}>
          <Faq items={g.items} />
        </Block>
      ))}
      <CtaBand />
    </>
  );
}
