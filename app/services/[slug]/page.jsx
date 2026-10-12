import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import JsonLd from "@/components/JsonLd";
import { sprint } from "@/lib/offer";
import { breadcrumbs, faq, service } from "@/lib/schema";
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

  const path = `/services/${s.slug}`;
  const crumbs = [{ label: "Services", href: "/services" }, { label: s.name }];

  return (
    <>
      <JsonLd
        data={[
          service({ name: s.name, description: s.meta.description, path, priced: path === sprint.href }),
          breadcrumbs(crumbs, path),
          faq(s.blocks),
        ]}
      />
      <PageHero crumbs={crumbs} {...s.hero} />
      <Blocks blocks={s.blocks} />
      <CtaBand />
    </>
  );
}
