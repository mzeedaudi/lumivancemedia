import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import Points from "@/components/blocks/Points";
import Related from "@/components/blocks/Related";
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
      <Block title="How we work" layout="side">
        <Points items={about.principles} />
      </Block>
      <Block title="What we don’t do">
        <Points items={about.not} columns />
      </Block>
      <Block title="Related pages">
        <Related keys={["framework", "ai", "pricing"]} />
      </Block>
      <CtaBand />
    </>
  );
}
