import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { page } from "@/lib/pages";

// A hub page's index: a grid of tiles, each with a still, the page's name and
// one line about it. Two pages lie on their side so the row stays full.
export default function HubIndex({ keys }) {
  const side = keys.length <= 2;
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 lg:gap-4 ${side ? "" : "lg:grid-cols-4"}`}>
      {keys.map((key) => {
        const p = page(key);
        const f = frame(p.thumb);
        return (
          <li key={key}>
            <Link href={p.href} className={`tile group flex h-full overflow-hidden ${side ? "flex-col sm:flex-row" : "flex-col"}`}>
              <div className={`relative overflow-hidden bg-frame ${side ? "aspect-[4/3] sm:aspect-auto sm:min-h-[220px] sm:w-[42%] sm:flex-none" : "aspect-[4/3]"}`}>
                <Image src={f.src} alt="" fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className={`flex flex-1 flex-col ${side ? "p-6 lg:p-7" : "p-5"}`}>
                <span className="h3 transition-colors group-hover:text-accent">{p.name}</span>
                <span className="mt-1.5 flex-1 text-[15px] leading-snug text-graphite">{p.summary}</span>
                <span className="link mt-3 text-[15px]">
                  Learn more <span aria-hidden="true">›</span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
