import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import Still from "@/components/Still";
import StaggeredPair from "@/components/StaggeredPair";
import { adTag, ads, cta } from "@/lib/site";

// Inner-page hero: where you are, what the page is about, one button, and
// spec work beside it. `media` is { pair: [slug, slug] } for two playing ads
// or { stills: [id, id] }. The caption under the media is where each inner
// page says, once, that what's shown is spec work made with AI.
export default function PageHero({ crumbs = [], title, lede, aside, media, caption }) {
  return (
    <section className="wrap grid-12 items-start gap-y-12 pb-14 pt-10 lg:pb-20 lg:pt-14">
      <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:pt-4">
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
        {lede && <p className="lede mt-5 max-w-[600px]">{lede}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={cta.href} className="btn">
            {cta.label}
            <span aria-hidden="true">→</span>
          </Link>
          {aside && <span className="meta">{aside}</span>}
        </div>
      </div>

      {media && (
        <div className="col-span-12 w-full max-w-[420px] sm:ml-auto lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:ml-0 lg:max-w-none">
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
  const [a, b] = media.stills;
  return (
    <StaggeredPair
      a={<Still id={a} priority sizes="(min-width: 1024px) 420px, 80vw" />}
      b={<Still id={b} sizes="(min-width: 1024px) 260px, 50vw" />}
      caption={caption ?? "Stills from our spec ads, made with AI."}
    />
  );
}
