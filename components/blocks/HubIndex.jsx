import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { page } from "@/lib/pages";

// A hub page's index: numbered rows, each with a still, the page name and one
// line about it. Reads like a contents page, not a wall of cards.
export default function HubIndex({ keys, start = 1 }) {
  return (
    <ol className="border-t border-ink">
      {keys.map((key, i) => {
        const p = page(key);
        const f = frame(p.thumb);
        return (
          <li key={key} className="border-b border-rule">
            <Link
              href={p.href}
              className="group grid grid-cols-[88px_1fr] items-center gap-x-4 gap-y-2 py-5 sm:grid-cols-[48px_132px_minmax(0,1fr)_minmax(0,1.1fr)_24px] sm:gap-x-6"
            >
              <span className="label hidden text-graphite sm:block">{String(i + start).padStart(2, "0")}</span>
              <div className="relative row-span-2 overflow-hidden bg-ink sm:row-span-1" style={{ aspectRatio: "4 / 3" }}>
                <Image src={f.src} alt="" fill sizes="(min-width: 640px) 132px, 88px" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <span className="display text-[24px] leading-[1] transition-colors group-hover:text-tally sm:text-[30px]">{p.name}</span>
              <span className="text-[16px] leading-snug text-graphite sm:text-[17px]">{p.summary}</span>
              <span aria-hidden="true" className="hidden font-mono text-[18px] transition-colors group-hover:text-tally sm:block">
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
