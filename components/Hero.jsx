import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import { adTag, ads, cta, hero } from "@/lib/site";

// The homepage opens the way Apple's do: the claim centred, two actions under
// it, and the product (four spec ads) in a row beneath. The headline's last
// full stop, in the emblem's orange, is the only colored decoration.
export default function Hero() {
  const last = hero.title[hero.title.length - 1];

  return (
    <section className="wrap pb-12 pt-12 text-center lg:pb-16 lg:pt-20">
      <h1 className="display h1 mx-auto max-w-[980px]">
        {hero.title.slice(0, -1).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block [text-wrap:balance]">
          {last.slice(0, -1)}
          <span className="text-dot">.</span>
        </span>
      </h1>
      <p className="lede mx-auto mt-6 max-w-[680px] text-graphite">{hero.lede}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
        <Link href={cta.href} className="btn">
          {cta.label}
        </Link>
        <Link href="#work" className="btn btn-ghost">
          See the ads
        </Link>
      </div>
      <p className="meta mt-4">{hero.aside}</p>

      <ul className="mt-12 grid grid-cols-2 gap-3 text-left lg:mt-14 lg:grid-cols-4 lg:gap-4">
        {hero.reel.map((slug, i) => (
          <li key={slug}>
            <AdVideo slug={slug} ad={ads[slug]} tag={adTag(ads[slug])} priority={i === 0} />
          </li>
        ))}
      </ul>
      <p className="meta mt-3 text-right">Spec ads made with AI, not client work.</p>
    </section>
  );
}
