import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import Block from "@/components/blocks/Block";
import CaseCards from "@/components/blocks/CaseCards";
import CtaBand from "@/components/blocks/CtaBand";
import Steps from "@/components/blocks/Steps";
import VideoRow from "@/components/blocks/VideoRow";
import { caseStudies, caseStudy } from "@/lib/cases";
import { industries } from "@/lib/industries";
import { breadcrumbs } from "@/lib/schema";
import { cta } from "@/lib/site";

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

      <section className="wrap grid-12 items-center gap-y-10 pb-12 pt-8 lg:pb-16 lg:pt-12">
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
            </Link>
          </div>
        </div>
        <div className="col-span-12 w-full max-w-[420px] sm:ml-auto lg:col-span-4 lg:col-start-9 lg:ml-0">
          <Photo id={c.photo} priority sizes="(min-width: 1024px) 400px, 80vw" caption="Illustration made with AI." />
        </div>
      </section>

      <Block title="By the numbers">
        <dl className="grid gap-3 sm:grid-cols-3 lg:gap-4">
          {c.kpis.map((k) => (
            <div key={k.label} className="tile flex flex-col-reverse p-7">
              <dt className="meta mt-2">{k.label}</dt>
              <dd className="display text-[48px] leading-none text-accent">{k.value}</dd>
            </div>
          ))}
        </dl>
        <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-4 lg:grid-cols-5 lg:gap-4">
          {[
            ["Client", c.client],
            ["Sector", sector.name],
            ["Channels", c.channels.join(", ")],
            ["What we did", c.services.join(", ")],
            ["Timeline", c.timeline],
          ].map(([k, v]) => (
            <div key={k} className="tile px-5 py-4">
              <dt className="meta mb-1">{k}</dt>
              <dd className="text-[16px] font-semibold leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="The story">
        <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
          {[
            ["The challenge", c.challenge],
            ["What we changed", c.solution],
            ["The result", [c.result]],
          ].map(([head, paras]) => (
            <div key={head} className="tile p-7">
              <h3 className="text-[14px] font-semibold text-accent">{head}</h3>
              <div className="mt-2 space-y-3 text-[19px] leading-snug tracking-[-0.016em]">
                {paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {c.quote && (
          <blockquote className="tile mt-4 p-7">
            <p className="text-[21px] leading-snug">“{c.quote.text}”</p>
            <footer className="meta mt-2">{c.quote.by}</footer>
          </blockquote>
        )}
      </Block>

      <Block title="How it ran">
        <Steps items={c.approach} />
      </Block>

      {c.creatives?.length > 0 && (
        <Block title="The ads" intro={c.placeholder ? "Spec ads stand in here until the real ads from the campaign are added." : undefined}>
          <VideoRow items={c.creatives.map((slug) => ({ slug }))} />
        </Block>
      )}

      {more.length > 0 && (
        <Block title={`More ${sector.inText ?? sector.name} case studies`}>
          <CaseCards items={more} />
        </Block>
      )}

      <CtaBand />
    </>
  );
}
