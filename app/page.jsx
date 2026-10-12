import Link from "next/link";
import CtaBand from "@/components/blocks/CtaBand";
import Faq from "@/components/blocks/Faq";
import { Tiers } from "@/components/blocks/Offer";
import Steps from "@/components/blocks/Steps";
import Hero from "@/components/Hero";
import Openers from "@/components/Openers";
import SprintPlan from "@/components/SprintPlan";
import WorkGrid from "@/components/WorkGrid";
import { faqGroups } from "@/lib/company";
import { services } from "@/lib/services";

// The homepage, in order: the claim, why twenty at a time, how a sprint is
// laid out, the work, how a sprint runs, what it costs, common questions, and
// the ask. Each section is laid out differently from the ones beside it.
export default function Home() {
  const timeline = services.find((s) => s.slug === "creative-testing-sprint").blocks.find((b) => b.type === "steps").items;
  const homeFaq = faqGroups.flatMap((g) => g.items.filter((it) => it.home));

  return (
    <>
      <Hero />
      <Openers />
      <SprintPlan />
      <WorkGrid />

      {/* How a sprint works: one narrow column, a plain numbered list. */}
      <section id="process" className="wrap py-16 lg:py-24">
        <div className="max-w-[820px]">
          <h2 className="display h2">How a sprint works</h2>
          <div className="mt-8">
            <Steps items={timeline} />
          </div>
          <p className="mt-6">
            <Link href="/framework" className="link">
              Read how we test ads
            </Link>
          </p>
        </div>
      </section>

      {/* What it costs: one comparison table, full width, on white. */}
      <section id="pricing" className="wrap">
        <div className="border-t border-rule py-16 lg:py-24">
          <div className="grid-12 gap-y-4">
            <h2 className="display h2 col-span-12 lg:col-span-5">What it costs</h2>
            <p className="col-span-12 text-graphite lg:col-span-6 lg:col-start-7">
              A sprint is a fixed price for a fixed number of finished ads. After that there’s a monthly retainer, which
              is 20 to 40 new ads a month and the media buying behind them. We quote it once we’ve looked at your ad
              account.
            </p>
          </div>
          <div className="mt-10">
            <Tiers />
          </div>
        </div>
      </section>

      {/* Common questions: heading on the left, answers on the right. */}
      <section id="faq" className="wrap">
        <div className="grid-12 gap-y-8 border-t border-rule py-16 lg:py-24">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="display h2">Common questions</h2>
            <p className="mt-5">
              <Link href="/faq" className="link">
                See all questions
              </Link>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Faq items={homeFaq} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
