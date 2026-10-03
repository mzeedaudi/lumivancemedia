import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import Points from "@/components/blocks/Points";
import Related from "@/components/blocks/Related";
import Founder from "@/components/Founder";
import { about } from "@/lib/company";

export const metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "About" }]} {...about.hero} />
      <Block num="01" label="Founder" title={["Who you’ll", "actually work with."]}>
        <Founder />
      </Block>
      <Block num="02" label="How we work" title="Five rules we work by.">
        <Points items={about.principles} />
      </Block>
      <Block num="03" label="What we’re not" title="What we don’t do.">
        <Points items={about.not} />
      </Block>
      <Block num="04" label="Related">
        <Related keys={["framework", "ai", "pricing"]} />
      </Block>
      <CtaBand />
    </>
  );
}
