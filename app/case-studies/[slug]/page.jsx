import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import Block from "@/components/blocks/Block";
import CaseCards from "@/components/blocks/CaseCards";
import CtaBand from "@/components/blocks/CtaBand";
import Points from "@/components/blocks/Points";
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
    description: `${c.client}: ${c.metric.value} ${c.metric.label}. ${c.subtitle ?? c.challenge[0]}`,
    alternates: { canonical: `/case-studies/${c.slug}` },
    ...(c.placeholder && { robots: { index: false } }),
  };
}

// One case study, in the order a reader asks: the result and its numbers, who
// it was for, what was in the way, how we approached it, the ads themselves,
// and what we learned. Fuller write-ups (challenges, winning ads, learnings)
// use those sections; shorter ones fall back to a three-part story.
export default function CaseStudyPage({ params }) {
  const c = caseStudy(params.slug);
  if (!c) notFound();

  const sector = industries.find((i) => i.slug === c.industry);
  const path = `/case-studies/${c.slug}`;
  const crumbs = [{ label: "Case studies", href: "/case-studies" }, { label: c.client }];
  const more = caseStudies.filter((x) => x.slug !== c.slug && x.industry === c.industry).slice(0, 3);
  const facts = [
    ["Client", c.publisher ? `${c.client}, by ${c.publisher}` : c.client],
    ["Sector", sector.name],
    ["Channels", c.channels.join(", ")],
    ["What we did", c.services.join(", ")],
    ["Timeline", c.timeline],
  ];

  return (
    <>
      <JsonLd data={breadcrumbs(crumbs, path)} />

      {c.placeholder && (
        <div className="bg-dot text-white">
          <p className="wrap py-2.5 text-[15px] font-medium">
            {c.placeholderNote ?? "Placeholder case study: the client, numbers and story are invented to show the layout. Hidden on the live site."}
          </p>
        </div>
      )}

      <section className="wrap grid items-center gap-x-14 gap-y-10 pb-12 pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:pb-16 lg:pt-12">
        <div>
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
          <p className="lede mt-5 max-w-[620px] text-graphite">{c.subtitle ?? c.challenge[0]}</p>
          <dl className="mt-8 grid max-w-[620px] grid-cols-3 gap-3">
            {c.kpis.map((k) => (
              <div key={k.label} className="flex flex-col-reverse rounded-2xl bg-[#f5f5f7] px-4 py-4">
                <dt className="meta mt-1.5 leading-snug">{k.label}</dt>
                <dd className="display text-[28px] leading-none text-accent sm:text-[40px]">{k.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <Link href={cta.href} className="btn">
              {cta.label}
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[440px] lg:max-w-none">
          <Photo id={c.photo} priority sizes="(min-width: 1024px) 460px, 80vw" caption={c.coverCaption ?? "Illustration made with AI."} />
        </div>
      </section>

      {c.quote && (
        <section className="band">
          <div className="wrap py-12 lg:py-16">
            <blockquote className="mx-auto max-w-[900px] text-center">
              <p className="display text-[clamp(24px,2.6vw,34px)] leading-snug">“{c.quote.text}”</p>
              <footer className="meta mt-4 text-[15px]">{c.quote.by}</footer>
            </blockquote>
          </div>
        </section>
      )}

      <Block title={c.about ? `About ${c.client}` : "At a glance"}>
        {c.about && (
          <div className="mb-3 grid gap-3 lg:mb-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-4">
            <div className="tile space-y-4 p-7 text-[19px] leading-relaxed lg:p-9">
              {c.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Photo id={c.photo2 ?? c.photo} sizes="(min-width: 1024px) 420px, 90vw" className="hidden lg:block [&>div]:aspect-auto [&>div]:h-full" />
          </div>
        )}
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {facts.map(([k, v]) => (
            <div key={k} className="tile px-5 py-4">
              <dt className="meta mb-1">{k}</dt>
              <dd className="text-[16px] font-semibold leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      {c.challenges ? (
        <Block title="The challenges">
          <Points items={c.challenges} />
        </Block>
      ) : (
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
        </Block>
      )}

      <Block title={c.challenges ? "Our approach" : "How it ran"}>
        <Steps items={c.approach} />
      </Block>

      {c.winners ? (
        <Block title="Creative winners" intro={c.winnersIntro}>
          <VideoRow items={c.winners} />
        </Block>
      ) : (
        c.creatives?.length > 0 && (
          <Block title="The ads" intro={c.placeholder ? "Spec ads stand in here until the real ads from the campaign are added." : undefined}>
            <VideoRow items={c.creatives.map((slug) => ({ slug }))} />
          </Block>
        )
      )}

      {c.learnings && (
        <Block title="Key learnings" intro={c.result}>
          <Points items={c.learnings} />
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
