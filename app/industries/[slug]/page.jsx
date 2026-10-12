import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { categories, industries } from "@/lib/industries";

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

  const parent = p.parent && industries.find((i) => i.slug === p.parent);
  const crumbs = [
    { label: "Industries", href: "/industries" },
    ...(parent ? [{ label: parent.name, href: `/industries/${parent.slug}` }] : []),
    { label: p.name },
  ];

  return (
    <>
      <PageHero crumbs={crumbs} {...p.hero} />
      <Blocks blocks={p.blocks} />
      <CtaBand />
    </>
  );
}
