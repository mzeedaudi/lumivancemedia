import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import StaggeredPair from "@/components/StaggeredPair";
import { ads, cta, hero } from "@/lib/site";

// The claim, one button, and two spec ads beside it. The headline's last full
// stop is the only place the accent color is used as decoration.
export default function Hero() {
  const [a, b] = hero.reel;
  const last = hero.title[hero.title.length - 1];

  return (
    <section className="wrap grid-12 items-center gap-y-12 pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
        <h1 className="display h1">
          {hero.title.slice(0, -1).map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block [text-wrap:balance]">
            {last.slice(0, -1)}
            <span className="text-accent">.</span>
          </span>
        </h1>
        <p className="lede mt-6 max-w-[580px]">{hero.lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={cta.href} className="btn">
            {cta.label}
            <span aria-hidden="true">→</span>
          </Link>
          <span className="meta">{hero.aside}</span>
        </div>
      </div>

      <StaggeredPair
        className="col-span-12 max-w-[460px] sm:ml-auto lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:ml-0 lg:max-w-none"
        a={<AdVideo slug={a} ad={ads[a]} tag={`Spec · ${ads[a].length}`} priority />}
        b={<AdVideo slug={b} ad={ads[b]} tag={`Spec · ${ads[b].length}`} />}
      />
    </section>
  );
}
