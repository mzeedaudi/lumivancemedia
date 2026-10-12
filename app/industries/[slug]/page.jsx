import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import JsonLd from "@/components/JsonLd";
import { categories, industries } from "@/lib/industries";
import { breadcrumbs, faq, service } from "@/lib/schema";

// The sectors, plus the direct-to-consumer categories that sit beneath them.
const pages = [...industries, ...categories];

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = pages.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.meta.title, description: p.meta.description, alternates: { canonical: `/industries/${p.slug}` } };
}

export default function IndustryPage({ params }) {
  const p = pages.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const path = `/industries/${p.slug}`;
  const parent = p.parent && industries.find((i) => i.slug === p.parent);
  const crumbs = [
    { label: "Industries", href: "/industries" },
    ...(parent ? [{ label: parent.name, href: `/industries/${parent.slug}` }] : []),
    { label: p.name },
  ];

  return (
    <>
      <JsonLd
        data={[
          service({ name: p.meta.title, description: p.meta.description, path, audience: p.name, priced: true }),
          breadcrumbs(crumbs, path),
          faq(p.blocks),
        ]}
      />
      <PageHero crumbs={crumbs} {...p.hero} />
      <Blocks blocks={p.blocks} />
      <CtaBand />
    </>
  );
}
