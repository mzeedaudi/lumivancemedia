import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { ai } from "@/lib/company";

export const metadata = {
  title: ai.meta.title,
  description: ai.meta.description,
  alternates: { canonical: "/how-we-use-ai" },
};

export default function HowWeUseAiPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Company", href: "/about" }, { label: "How we use AI" }]} {...ai.hero} />
      <Blocks blocks={ai.blocks} />
      <CtaBand />
    </>
  );
}
