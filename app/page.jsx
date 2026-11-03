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
// the ask. Sections alternate white and grey (see .band in globals.css).
export default function Home() {
  const timeline = services.find((s) => s.slug === "creative-testing-sprint").blocks.find((b) => b.type === "steps").items;
  const homeFaq = faqGroups.flatMap((g) => g.items.filter((it) => it.home));

  return (
    <>
      <Hero />
      <Openers />
      <SprintPlan />
      <WorkGrid />

      <section id="process" className="band">
        <div className="wrap py-12 lg:py-16">
          <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
            <h2 className="display h2">How a sprint works</h2>
            <p className="text-[19px] leading-snug text-graphite lg:pb-1">
              From a 30-minute call to twenty finished ads and a test plan.{" "}
              <Link href="/framework" className="link">
                Read how we test ads <span aria-hidden="true">›</span>
              </Link>
            </p>
          </div>
          <div className="mt-8 lg:mt-10">
            <Steps items={timeline} />
          </div>
        </div>
      </section>

      <section id="pricing" className="band">
        <div className="wrap py-12 lg:py-16">
          <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
            <h2 className="display h2">What it costs</h2>
            <p className="text-[19px] leading-snug text-graphite lg:pb-1">
              A sprint is a fixed price for a fixed number of finished ads. After that there’s a monthly retainer, which
              is 20 to 40 new ads a month and the media buying behind them, quoted once we’ve looked at your ad account.
            </p>
          </div>
          <div className="mt-8 lg:mt-10">
            <Tiers />
          </div>
        </div>
      </section>

      <section id="faq" className="band">
        <div className="wrap py-12 lg:py-16">
          <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
            <h2 className="display h2">Common questions</h2>
            <p className="text-[19px] leading-snug text-graphite lg:pb-1">
              <Link href="/faq" className="link">
                See all questions <span aria-hidden="true">›</span>
              </Link>
            </p>
          </div>
          <div className="mt-6 lg:mt-8">
            <Faq items={homeFaq} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
