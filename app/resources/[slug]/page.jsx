import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/lib/resources";
import { article, breadcrumbs, faq } from "@/lib/schema";

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
  const path = `/resources/${g.slug}`;
  const crumbs = [{ label: "Resources", href: "/resources" }, { label: g.name }];
  return (
    <>
      <JsonLd
        data={[
          g.published && article({ title: g.meta.title, description: g.meta.description, path, published: g.published, modified: g.modified }),
          breadcrumbs(crumbs, path),
          faq(g.blocks),
        ]}
      />
      <PageHero crumbs={crumbs} {...g.hero} />
      <Blocks blocks={g.blocks} />
      <CtaBand />
    </>
  );
}
