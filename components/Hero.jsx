import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import { Lines } from "@/components/Tally";
import { ads, cta, hero } from "@/lib/site";

// 01 — The claim, one button, and two spec ads playing beside it.
// On phones the ads sit between the button and the specs, so real creative
// is on the first screen instead of below a wall of text.
export default function Hero() {
  const [a, b] = hero.reel;

  return (
    <section className="wrap grid-12 items-start gap-y-12 pb-16 pt-8 lg:pb-20 lg:pt-14">
      {/* Explicit column starts let the reel overlap column 8 without the grid
          adding implicit columns to auto-place the copy. */}
      <div className="col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:pt-2">
        <p className="label flex items-start gap-2.5">
          <span className="rec mt-1 flex-none" aria-hidden="true" />
          {hero.kicker}
        </p>
        <h1 className="display h1 mt-5 lg:mt-6">
          <Lines>{hero.title}</Lines>
        </h1>
        <p className="lede mt-6 max-w-[610px] lg:mt-7">{hero.lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-9">
          <Link href={cta.href} className="btn">
            {cta.label}
            <span aria-hidden="true" className="font-mono font-medium">
              →
            </span>
          </Link>
          <span className="text-[17px] italic text-graphite">{hero.aside}</span>
        </div>
      </div>

      {/* Two staggered ads: A on the right, B overlapping its lower-left corner.
          On desktop the reel reaches into column 8, past the end of the headline. */}
      <div className="col-span-12 grid max-w-[480px] grid-cols-10 sm:ml-auto lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:ml-0 lg:max-w-none">
        <figure className="col-span-8 col-start-3 row-start-1">
          <AdVideo slug={a} ad={ads[a]} tag={`Spec · ${ads[a].length}`} eager />
          <figcaption className="label ml-[40%] mt-3 text-right text-[10.5px] text-graphite">
            Spec ad · AI-generated · not a client campaign
          </figcaption>
        </figure>
        {/* Percentage margins resolve against this cell's width (half the reel). */}
        <div className="relative z-10 col-span-5 col-start-1 row-start-1 mt-[132%] shadow-[0_0_0_7px_#F2EDE4]">
          <AdVideo slug={b} ad={ads[b]} tag={`Spec · ${ads[b].length}`} eager />
        </div>
      </div>

      <ul className="col-span-12 flex flex-wrap gap-x-11 gap-y-5 border-t border-ink pt-3.5 lg:col-span-7 lg:col-start-1 lg:row-start-2">
        {hero.specs.map((s) => (
          <li key={s.value} className="flex items-start gap-2.5">
            <span className="display text-[40px] leading-[0.9]">{s.value}</span>
            <span className="label pt-[3px] text-[11px] text-graphite">
              {s.label[0]}
              <br />
              {s.label[1]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
