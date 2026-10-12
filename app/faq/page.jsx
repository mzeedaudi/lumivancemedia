import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import PageHero from "@/components/blocks/PageHero";
import { faqGroups } from "@/lib/company";

export const metadata = {
  title: "Common questions",
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
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Common questions" }]}
        title="Common questions"
        lede="Straight answers, including the ones that might talk you out of working with us."
        media={{ stills: ["emera-c-1", "gold-cuff-6"] }}
      />
      <section className="wrap">
        <div className="max-w-[820px] space-y-14 border-t border-rule py-14 lg:py-20">
          {faqGroups.map((g) => (
            <div key={g.group}>
              <h2 className="display h2 mb-6">{g.group}</h2>
              <Faq items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
