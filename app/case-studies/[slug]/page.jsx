import Link from "next/link";
import { notFound } from "next/navigation";
import AdVideo from "@/components/AdVideo";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import Block from "@/components/blocks/Block";
import CaseCards from "@/components/blocks/CaseCards";
import CtaBand from "@/components/blocks/CtaBand";
import SpecTable from "@/components/blocks/SpecTable";
import Steps from "@/components/blocks/Steps";
import { caseStudies, caseStudy } from "@/lib/cases";
import { industries } from "@/lib/industries";
import { breadcrumbs } from "@/lib/schema";
import { adTag, ads, cta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = caseStudy(params.slug);
  if (!c) return {};
  return {
    title: c.title,
    description: `${c.client}: ${c.metric.value} ${c.metric.label}. ${c.challenge[0]}`,
    alternates: { canonical: `/case-studies/${c.slug}` },
    ...(c.placeholder && { robots: { index: false } }),
  };
}

// One case study, in the order a reader asks: what happened, how big, what
// was wrong, what changed, how it ran, the ads themselves, and the result.
export default function CaseStudyPage({ params }) {
  const c = caseStudy(params.slug);
  if (!c) notFound();

  const sector = industries.find((i) => i.slug === c.industry);
  const path = `/case-studies/${c.slug}`;
  const crumbs = [{ label: "Case studies", href: "/case-studies" }, { label: c.client }];
  const more = caseStudies.filter((x) => x.slug !== c.slug && x.industry === c.industry).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbs(crumbs, path)} />

      {c.placeholder && (
        <div className="bg-dot text-white">
          <p className="wrap py-2.5 text-[15px] font-medium">
            Placeholder case study: the client, numbers and story are invented to show the layout. Hidden on the live site.
          </p>
        </div>
      )}

      <section className="wrap grid-12 items-start gap-y-12 pb-14 pt-10 lg:pb-20 lg:pt-14">
        <div className="col-span-12 lg:col-span-7 lg:pt-4">
          <nav aria-label="Breadcrumb" className="meta mb-4 flex flex-wrap gap-x-2">
            <Link href="/case-studies" className="underline-offset-4 hover:underline">
              Case studies
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={`/industries/${sector.slug}`} className="underline-offset-4 hover:underline">
              {sector.name}
            </Link>
          </nav>
          <h1 className="display h1s">{c.title}</h1>
          <p className="lede mt-5 max-w-[600px]">{c.challenge[0]}</p>
          <div className="mt-8">
            <Link href={cta.href} className="btn">
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="col-span-12 w-full max-w-[420px] sm:ml-auto lg:col-span-4 lg:col-start-9 lg:ml-0">
          <Photo id={c.photo} priority sizes="(min-width: 1024px) 400px, 80vw" caption="Illustration made with AI." />
        </div>
      </section>

      <Block title="By the numbers">
        <dl className="grid gap-px border border-rule bg-rule sm:grid-cols-3">
          {c.kpis.map((k) => (
            <div key={k.label} className="flex flex-col-reverse bg-white p-6">
              <dt className="meta mt-2">{k.label}</dt>
              <dd className="display text-[44px] leading-none">{k.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 max-w-[760px]">
          <SpecTable
            rows={[
              ["Client", c.client],
              ["Sector", sector.name],
              ["Channels", c.channels.join(", ")],
              ["What we did", c.services.join(", ")],
              ["Timeline", c.timeline],
            ]}
          />
        </div>
      </Block>

      <Block title="The challenge" layout="side">
        <div className="space-y-4 text-[18px]">
          {c.challenge.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Block>

      <Block title="What we changed">
        <div className="max-w-[720px] space-y-4 text-[18px]">
          {c.solution.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Block>

      <Block title="How it ran" layout="side">
        <Steps items={c.approach} />
      </Block>

      {c.creatives?.length > 0 && (
        <Block title="The ads" intro={c.placeholder ? "Spec ads stand in here until the real ads from the campaign are added." : undefined}>
          <ul className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3 sm:gap-6">
            {c.creatives.map((slug) => (
              <li key={slug}>
                <AdVideo slug={slug} ad={ads[slug]} tag={adTag(ads[slug])} />
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Block title="The result" layout="side">
        <p className="lede">{c.result}</p>
        {c.quote && (
          <blockquote className="mt-8 border-l-4 border-accent pl-5">
            <p className="text-[19px]">“{c.quote.text}”</p>
            <footer className="meta mt-2">{c.quote.by}</footer>
          </blockquote>
        )}
      </Block>

      {more.length > 0 && (
        <Block title={`More ${sector.inText ?? sector.name} case studies`}>
          <CaseCards items={more} />
        </Block>
      )}

      <CtaBand />
    </>
  );
}
