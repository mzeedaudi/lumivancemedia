import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import Photo from "@/components/Photo";
import Still from "@/components/Still";
import StaggeredPair from "@/components/StaggeredPair";
import { adTag, ads, cta } from "@/lib/site";

// Inner-page hero: where you are, what the page is about, one button, and
// media beside it. `media` is { pair: [slug, slug] } for two playing ads,
// { stills: [id, id] } for spec-ad frames, or { photos: [id, id] } for AI
// illustrations. The caption under the media is where each inner page says,
// once, what the media is. `stats` adds a row of three facts under the
// button, and `teaser` a link to the page's lead case study.
export default function PageHero({ crumbs = [], title, lede, aside, media, caption, stats, teaser }) {
  return (
    <section className="wrap grid items-center gap-x-14 gap-y-10 pb-12 pt-8 lg:grid-cols-2 lg:pb-16 lg:pt-12">
      <div>
        {crumbs.length > 1 && (
          <nav aria-label="Breadcrumb" className="meta mb-4">
            <ol className="flex flex-wrap gap-x-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="underline-offset-4 hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="display h1s">{title}</h1>
        {lede && <p className="lede mt-5 max-w-[600px] text-graphite">{lede}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={cta.href} className="btn">
            {cta.label}
          </Link>
          {aside && <span className="meta">{aside}</span>}
        </div>
        {stats && (
          <dl className="mt-9 grid max-w-[600px] grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-[#f5f5f7] px-4 py-3.5">
                <dt className="meta mt-1 leading-snug">{s.label}</dt>
                <dd className="display text-[22px] leading-none sm:text-[28px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {teaser && (
          <Link href={`/case-studies/${teaser.slug}`} className="group mt-3 flex max-w-[600px] items-baseline gap-3 rounded-2xl border border-rule px-4 py-3 transition-colors hover:border-accent">
            <span className="display text-[22px] leading-none text-accent">{teaser.metric.value}</span>
            <span className="text-[15px]">
              {teaser.metric.label}, {teaser.client.charAt(0).toLowerCase() + teaser.client.slice(1)}
              {teaser.placeholder && <span className="text-dot"> (placeholder)</span>}
              <span className="link ml-2 whitespace-nowrap">Read it ›</span>
            </span>
          </Link>
        )}
      </div>

      {media && (
        <div className="w-full">
          <HeroMedia media={media} caption={caption} />
        </div>
      )}
    </section>
  );
}

function HeroMedia({ media, caption }) {
  if (media.pair) {
    const [a, b] = media.pair;
    return (
      <StaggeredPair
        a={<AdVideo slug={a} ad={ads[a]} tag={adTag(ads[a])} priority />}
        b={<AdVideo slug={b} ad={ads[b]} tag={adTag(ads[b])} />}
        caption={caption ?? "Spec ads made with AI, not client work."}
      />
    );
  }
  if (media.photos) {
    const [a, b] = media.photos;
    return (
      <StaggeredPair
        a={<Photo id={a} priority sizes="(min-width: 1024px) 420px, 80vw" />}
        b={<Photo id={b} sizes="(min-width: 1024px) 260px, 50vw" />}
        caption={caption ?? "Illustrations made with AI."}
      />
    );
  }
  const [a, b] = media.stills;
  return (
    <StaggeredPair
      a={<Still id={a} priority sizes="(min-width: 1024px) 420px, 80vw" />}
      b={<Still id={b} sizes="(min-width: 1024px) 260px, 50vw" />}
      caption={caption ?? "Stills from our spec ads, made with AI."}
    />
  );
}
