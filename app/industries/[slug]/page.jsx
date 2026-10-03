import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { industries } from "@/lib/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return {};
  return { title: i.meta.title, description: i.meta.description, alternates: { canonical: `/industries/${i.slug}` } };
}

export default function IndustryPage({ params }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Industries", href: "/industries" }, { label: i.name }]} {...i.hero} />
      <Blocks blocks={i.blocks} />
      <CtaBand />
    </>
  );
}
