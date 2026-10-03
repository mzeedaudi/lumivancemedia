import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { framework } from "@/lib/company";

export const metadata = {
  title: framework.meta.title,
  description: framework.meta.description,
  alternates: { canonical: "/framework" },
};

export default function FrameworkPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Company", href: "/about" }, { label: "Our testing framework" }]} {...framework.hero} />
      <Blocks blocks={framework.blocks} />
      <CtaBand />
    </>
  );
}
