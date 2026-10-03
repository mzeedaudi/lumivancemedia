import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { services } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: s.meta.title, description: s.meta.description, alternates: { canonical: `/services/${s.slug}` } };
}

export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Services", href: "/services" }, { label: s.name }]} {...s.hero} />
      <Blocks blocks={s.blocks} />
      <CtaBand />
    </>
  );
}
