import Link from "next/link";
import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import { Tiers } from "@/components/blocks/Offer";
import Steps from "@/components/blocks/Steps";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import WorkGrid from "@/components/WorkGrid";
import { faqGroups } from "@/lib/company";
import { services } from "@/lib/services";

function More({ href, children }) {
  return (
    <Link href={href} className="label mt-10 inline-block border-b-2 border-tally pb-0.5 transition-colors hover:text-tally">
      {children}
    </Link>
  );
}

// The homepage is one argument, in order: the claim, the method, the work,
// how a sprint runs, what it costs, who runs it, the objections, the ask.
// Each section past the work is a summary of a fuller page it links to.
export default function Home() {
  const timeline = services.find((s) => s.slug === "creative-testing-sprint").blocks.find((b) => b.type === "steps").items;
  const homeFaq = faqGroups.flatMap((g) => g.items.filter((it) => it.home));

  return (
    <>
      <Hero />
      <Method />
      <WorkGrid />

      <Block id="process" num="04" label="Process" title="How a sprint actually runs.">
        <Steps items={timeline} />
        <More href="/framework">The full testing framework</More>
      </Block>

      <Block id="pricing" num="05" label="Pricing" title={["Start with a sprint.", "Stay if it works."]}>
        <Tiers compact />
        <p className="mt-10 max-w-measure border-t border-rule pt-5 text-graphite">
          After a sprint, the creative + performance retainer: 20–40 new ads a month and the media buying behind them,
          quoted once we’ve reviewed your ad account.
        </p>
      </Block>

      <Block id="founder" num="06" label="About" title={["Who you’ll", "actually work with."]}>
        <Founder />
        <More href="/about">How we work, and what we won’t do</More>
      </Block>

      <Block id="faq" num="07" label="FAQ" title="The questions worth asking.">
        <Faq items={homeFaq} />
        <More href="/faq">All questions</More>
      </Block>

      <CtaBand />
    </>
  );
}
