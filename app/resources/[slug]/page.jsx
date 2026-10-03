import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { guides } from "@/lib/resources";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const g = guides.find((x) => x.slug === params.slug);
  if (!g) return {};
  return { title: g.meta.title, description: g.meta.description, alternates: { canonical: `/resources/${g.slug}` } };
}

export default function GuidePage({ params }) {
  const g = guides.find((x) => x.slug === params.slug);
  if (!g) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }, { label: g.name }]} {...g.hero} />
      <Blocks blocks={g.blocks} />
      <CtaBand />
    </>
  );
}
