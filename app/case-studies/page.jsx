import { notFound } from "next/navigation";
import Block from "@/components/blocks/Block";
import CaseCards from "@/components/blocks/CaseCards";
import CtaBand from "@/components/blocks/CtaBand";
import Points from "@/components/blocks/Points";
import PageHero from "@/components/blocks/PageHero";
import { caseStudies } from "@/lib/cases";

export const metadata = {
  title: "Case studies",
  description: "Results from Lumivance video ads for apps and online brands: what was tested, what won, and what a customer cost before and after.",
  alternates: { canonical: "/case-studies" },
};

const rules = [
  { title: "Measured in the client’s account", text: "Every number comes from the client’s own ad account or analytics, not from ours, and we keep the screenshots." },
  { title: "Before and after, same measure", text: "We compare like with like: the same metric, the same channels, a stated period on each side." },
  { title: "Named with permission", text: "A client is named only if they’ve agreed to it. Otherwise the case study describes the business, not the brand." },
  { title: "The whole engagement", text: "Where a result came from ads and media buying together, the case study says so rather than crediting the ads alone." },
];

export default function CaseStudiesPage() {
  // On the live site the page only exists once it has a real case study.
  if (!caseStudies.length) notFound();
  const drafts = caseStudies.some((c) => c.placeholder);
  return (
    <>
      <PageHero
        crumbs={[{ label: "Case studies" }]}
        title="Case studies"
        lede="What we tested, what won, and what a customer cost before and after. Each one is written from the client’s own numbers."
        media={{ photos: ["edtech-a", "ecommerce-a"] }}
      />
      {drafts && (
        <section className="wrap">
          <p className="border-l-4 border-dot bg-white px-5 py-4 text-[15px]">
            Placeholder case studies are shown on this preview only. They are invented to show the layout and never appear on the live site.
          </p>
        </section>
      )}
      <Block title="All case studies">
        <CaseCards items={caseStudies} />
      </Block>
      <Block title="How we report results" layout="side">
        <Points items={rules} />
      </Block>
      <CtaBand />
    </>
  );
}
